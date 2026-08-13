declare global {
    interface Window {
        dataLayer: any[];
    }
}

export type LeadType = 'phone_call' | 'whatsapp_call' | 'form_submit';

export interface LeadEvent {
    event: 'lead_action';
    lead_type: LeadType;
    lead_source: string; // e.g., 'header', 'footer', 'floating_action', 'quick_contact_form'
    page_path?: string;
    button_text?: string;
    value?: number; // Optional value if needed for ads
    currency?: string;
    items?: any[];
    // Additional params for specific needs
    [key: string]: any;
}

// --- First-party click beacon (records to /api/track/click -> Postgres) ---
function clickSid(): string | undefined {
    try {
        const k = 'cp_sid';
        let v = localStorage.getItem(k);
        if (!v) {
            v = (typeof crypto !== 'undefined' && crypto.randomUUID)
                ? crypto.randomUUID()
                : Math.random().toString(36).slice(2);
            localStorage.setItem(k, v);
        }
        return v;
    } catch {
        return undefined;
    }
}

// Guards against double-recording when two tracking paths fire on one click
// (e.g. a new + legacy handler on the same button). A real user cannot
// produce two identical conversions within a second.
const recentBeacons = new Map<string, number>();
const DEDUPE_WINDOW_MS = 1000;

export function beaconClick(event: string, location?: string): void {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
    try {
        const dedupeKey = `${event}|${window.location.pathname}`;
        const now = Date.now();
        const last = recentBeacons.get(dedupeKey);
        if (last !== undefined && now - last < DEDUPE_WINDOW_MS) return;
        recentBeacons.set(dedupeKey, now);
        const payload = JSON.stringify({
            event,
            location: location ?? null,
            path: window.location.pathname,
            sessionId: clickSid(),
        });
        if (navigator.sendBeacon) {
            navigator.sendBeacon('/api/track/click', new Blob([payload], { type: 'application/json' }));
        } else {
            void fetch('/api/track/click', { method: 'POST', body: payload, keepalive: true }).catch(() => {});
        }
    } catch {
        /* never block the click */
    }
}

const CLICK_EVENT_BY_TYPE: Record<LeadType, string> = {
    phone_call: 'phone_click',
    whatsapp_call: 'whatsapp_click',
    form_submit: 'quote_click',
};

export function trackLead({
    type,
    source,
    label,
    value,
}: {
    type: LeadType;
    source: string;
    label?: string; // Can be used as button text or generic label
    value?: number;
}) {
    // First-party click beacon (covers all existing call sites automatically)
    beaconClick(CLICK_EVENT_BY_TYPE[type], source);

    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];

        // Construct the event object
        const eventData: LeadEvent = {
            event: 'lead_action',
            lead_type: type,
            lead_source: source,
            page_path: window.location.pathname,
        };

        if (label) eventData.button_text = label;
        if (value) eventData.value = value;

        // Push to dataLayer
        window.dataLayer.push(eventData);

        // Optional: Log for debugging in development
        if (process.env.NODE_ENV === 'development') {
            console.log('Lead Tracked:', eventData);
        }
    }
}
