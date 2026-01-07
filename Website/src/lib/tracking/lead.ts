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
