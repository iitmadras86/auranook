// Standardized tracking events
export type AnalyticsEvent = 
  | 'resource_download'
  | 'bim_download'
  | 'cad_download'
  | 'consultation_requested'
  | 'contact_form_submitted'
  | 'gallery_interaction'
  | 'gallery_filter_used'
  | 'article_read_depth'
  | 'cta_clicked'
  | 'lead_funnel_completed';

export function trackEvent(eventName: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  // In the future: Wire this up to GA4 (gtag), Meta Pixel (fbq), or LinkedIn Insight Tag
  // Example GA4 implementation:
  // if (typeof window !== 'undefined' && (window as any).gtag) {
  //   (window as any).gtag('event', eventName, payload);
  // }
  
  // For now, log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] ${eventName}`, payload);
  }
}
