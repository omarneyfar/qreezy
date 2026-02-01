/**
 * Simple analytics utility for Qreezy.
 * This can be connected to Google Analytics, Facebook Pixel, or any other tracking tool.
 */

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // In a real environment, you would use window.gtag or window.fbq
    console.log(`[Analytics] Track Event: ${eventName}`, properties);

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, properties);
    }
};

export const ANALYTICS_EVENTS = {
    QUOTE_REQUEST_START: 'quote_request_start',
    QUOTE_REQUEST_SUCCESS: 'quote_request_success',
    QUOTE_REQUEST_FAILURE: 'quote_request_failure',
    FAQ_ITEM_OPEN: 'faq_item_open',
    BLOG_POST_VIEW: 'blog_post_view',
    CTA_CLICK: 'cta_click',
};
