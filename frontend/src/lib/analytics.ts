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
  "sample_brief_open",
  "journey_stage_expand",
  "intake_started",
  "organization_context_completed",
  "leadership_intake_completed",
  "team_invite_started",
  "executive_brief_ready",
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
