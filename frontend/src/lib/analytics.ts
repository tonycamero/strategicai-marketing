declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    strategicAITrack?: (event: string, payload?: Record<string, unknown>) => void;
  }
}

export type AnalyticsPayload = Record<string, unknown>;

export const strategicFunnelEvents = [
  "homepage_view",
  "executive_brief_cta_click",
  "homepage_proof_start",
  "homepage_proof_step",
  "homepage_proof_pause",
  "homepage_proof_complete",
  "homepage_proof_open",
  "homepage_business_view_select",
  "homepage_nemo_question_select",
  "founding100_cta_click",
  "sample_brief_open",
  "journey_stage_expand",
  "intake_started",
  "organization_context_completed",
  "leadership_intake_completed",
  "team_invite_started",
  "executive_brief_ready",
  "founding100_payment_arrival",
  "founding100_formation_status_view",
  "founding100_support_clicked",
  "see_short",
  "see_deep",
  "short_video_start",
  "short_video_progress",
  "short_video_complete",
  "deep_video_start",
  "deep_video_progress",
  "deep_video_complete",
  "see_reason_selected",
  "short_to_deep",
  "content_to_offer",
  "offer_view",
  "checkout_click",
  "founding100_offer_faq_opened",
] as const;

export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = {
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(detail);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  window.strategicAITrack = trackEvent;
  document.dispatchEvent(new CustomEvent("strategicai:analytics", { detail }));
}
