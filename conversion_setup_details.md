# Website Conversion Tracking Setup Analysis

## Overview
The website uses a **Google Tag Manager (GTM) based architecture** for tracking conversions. Instead of hardcoding Google Ads or Analytics scripts directly into every button, the website pushes **structured events** to a central `dataLayer`. GTM listens for these events and handles the actual dispatching to Google Ads, GA4, etc.

## Core Architecture

### 1. Data Layer Event: `lead_action`
The primary conversion event is named `lead_action`. This is the **trigger** you need to configure in GTM.

**Event Structure (`LeadEvent`):**
```typescript
interface LeadEvent {
    event: 'lead_action';       // The specific event name to listen for in GTM
    lead_type: string;          // 'phone_call' | 'whatsapp_call' | 'form_submit'
    lead_source: string;        // Where it happened: 'header', 'footer', 'floating_action', 'quick_contact_form'
    button_text?: string;       // Text of the button clicked
    page_path: string;          // URL path where the event occurred
}
```

### 2. Implementation Logic
**File:** `src/lib/tracking/lead.ts`
This helper function is responsible for pushing events to the data layer.
```typescript
export function trackLead({ type, source, label, value }) {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'lead_action',
            lead_type: type,
            lead_source: source,
            button_text: label,
            page_path: window.location.pathname
        });
    }
}
```

### 3. GTM Initialization
**File:** `src/components/seo/GoogleTagManager.tsx`
This component initializes the GTM script and creates the initial `dataLayer` array.
- It looks for the GTM ID in `process.env.NEXT_PUBLIC_GTM_ID` or `src/data/site.json`.

## Configuration & IDs

### Environment Variables
The setup expects these variables (check your `.env` or Vercel config):
- `NEXT_PUBLIC_GTM_ID`: Your Google Tag Manager Container ID (e.g., GTM-XXXXXXX)
- `NEXT_PUBLIC_GA4_ID`: Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX)

### Site Data Configuration
**File:** `src/data/site.json`
Contains fallback/default IDs and placeholder configurations for Google Ads labels.
```json
"googleAds": {
  "conversionId": "AW-XXXXXXXXX",
  "phoneConversionLabel": "XXXXXXXXX",
  "whatsappConversionLabel": "XXXXXXXXX",
  "formConversionLabel": "XXXXXXXXX"
},
"gtm": {
  "containerId": "GTM-XXXXXXX"
}
```
*Note: Currently, these appear to be placeholders. You will need to update them with the new account's IDs.*

## Integration Points (Where tracking happens)
The `trackLead` function is currently hooked up to:
1.  **Contact Page** (`src/app/iletisim/page.tsx`)
2.  **Callback Request Form** (`src/components/sections/CallbackRequest.tsx`)
3.  **Quick (Hero) Contact Form** (`src/components/sections/QuickContactForm.tsx`)
4.  **Contact Buttons** (`src/components/common/ContactButton.tsx`) - Covers Header/Footer phone & WhatsApp buttons.

---

## Instructions for ChatGPT
To help you setup the new account, paste the following prompt to ChatGPT:

> "I need to configure Google Tag Manager for a Next.js website that uses a dataLayer event architecture.
>
> **Current Technical Setup:**
> - The website pushes a custom event called `lead_action` to the `dataLayer` when a user converts (Calls, WhatsApp, Form Submit).
> - The event pushes these data layer variables: `lead_type`, `lead_source`, `button_text`, `page_path`.
>
> **Task:**
> Guide me through setting up a new GTM container with the following tags/triggers:
> 1.  **Trigger:** Create a Custom Event trigger for event name `lead_action`.
> 2.  **Variables:** Create Data Layer Variables for `lead_type` and `lead_source`.
> 3.  **Tags (Google Ads):** Setup Google Ads Conversion Tracking tag that fires on `lead_action`. It should map the conversion labels dynamically or have separate triggers based on `lead_type` (e.g., if lead_type equals 'whatsapp_call', fire the WhatsApp conversion tag).
> 4.  **Tags (GA4):** Setup a GA4 Event tag for `lead_action` passing the event parameters.
>
> I have the new Google Ads Conversion ID and Labels ready to use."
