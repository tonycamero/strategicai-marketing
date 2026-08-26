export type Founding100Attribution = Partial<{
  message_card_id: string;
  originating_clip_id: string;
  track: string;
  hook_family: string;
  exact_hook: string;
  conflict_intensity: string;
  source: string;
  platform: string;
  post_instance_id: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
}>;

export const FOUNDING100_ATTRIBUTION_EXPIRY = "browser-tab-session";
export const FOUNDING100_ATTRIBUTION_STORAGE_KEY = "strategicai.founding100.attribution.v1";

const parameterAliases: Record<keyof Founding100Attribution, readonly string[]> = {
  message_card_id: ["message_card_id", "mc"],
  originating_clip_id: ["originating_clip_id", "clip"],
  track: ["track"],
  hook_family: ["hook_family", "hf"],
  exact_hook: ["exact_hook"],
  conflict_intensity: ["conflict_intensity", "ci"],
  source: ["source"],
  platform: ["platform"],
  post_instance_id: ["post_instance_id", "pi"],
  utm_source: ["utm_source"],
  utm_medium: ["utm_medium"],
  utm_campaign: ["utm_campaign"],
  utm_content: ["utm_content"],
};

const publicParameterNames: Partial<Record<keyof Founding100Attribution, string>> = {
  message_card_id: "mc",
  originating_clip_id: "clip",
  track: "track",
  hook_family: "hf",
  conflict_intensity: "ci",
  source: "source",
  platform: "platform",
  post_instance_id: "pi",
  utm_source: "utm_source",
  utm_medium: "utm_medium",
  utm_campaign: "utm_campaign",
  utm_content: "utm_content",
};

const allAcceptedParameterNames = new Set(Object.values(parameterAliases).flat());

function cleanValue(value: string | null) {
  if (!value) return undefined;
  const cleaned = value.replace(/[\r\n\t]+/g, " ").trim().slice(0, 240);
  return cleaned || undefined;
}

export function parseFounding100Attribution(search: string): Founding100Attribution {
  const params = new URLSearchParams(search);
  const attribution: Founding100Attribution = {};

  (Object.keys(parameterAliases) as Array<keyof Founding100Attribution>).forEach((field) => {
    for (const parameter of parameterAliases[field]) {
      const value = cleanValue(params.get(parameter));
      if (value) {
        attribution[field] = value;
        break;
      }
    }
  });

  return attribution;
}

export function readStoredFounding100Attribution(): Founding100Attribution {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.sessionStorage.getItem(FOUNDING100_ATTRIBUTION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Founding100Attribution;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function getInitialFounding100Attribution(): Founding100Attribution {
  if (typeof window === "undefined") return {};
  return {
    ...readStoredFounding100Attribution(),
    ...parseFounding100Attribution(window.location.search),
  };
}

export function persistFounding100Attribution(attribution: Founding100Attribution) {
  if (typeof window === "undefined" || Object.keys(attribution).length === 0) return;

  try {
    window.sessionStorage.setItem(FOUNDING100_ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Session storage can be unavailable in hardened browser contexts.
  }
}

export function removeAttributionFromVisibleUrl() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  let changed = false;

  allAcceptedParameterNames.forEach((parameter) => {
    if (url.searchParams.has(parameter)) {
      url.searchParams.delete(parameter);
      changed = true;
    }
  });

  if (changed) {
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }
}

function appendPublicAttribution(url: URL, attribution: Founding100Attribution) {
  (Object.keys(publicParameterNames) as Array<keyof Founding100Attribution>).forEach((field) => {
    const parameter = publicParameterNames[field];
    const value = attribution[field];
    if (parameter && value) url.searchParams.set(parameter, value);
  });
}

export function buildFounding100Path(path: string, attribution: Founding100Attribution) {
  const origin = typeof window === "undefined" ? "https://strategicai.app" : window.location.origin;
  const url = new URL(path, origin);
  appendPublicAttribution(url, attribution);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function buildFounding100CheckoutUrl(checkoutUrl: string, attribution: Founding100Attribution) {
  const url = new URL(checkoutUrl);
  appendPublicAttribution(url, attribution);
  return url.toString();
}

export function getYouTubeVideoId(value?: string) {
  const candidate = value?.trim();
  if (!candidate) return undefined;
  if (/^[a-zA-Z0-9_-]{11}$/.test(candidate)) return candidate;

  try {
    const url = new URL(candidate);
    const hostname = url.hostname.replace(/^www\./, "");
    if (hostname === "youtu.be") return getYouTubeVideoId(url.pathname.split("/").filter(Boolean)[0]);
    if (hostname.endsWith("youtube.com")) {
      if (url.searchParams.get("v")) return getYouTubeVideoId(url.searchParams.get("v") || undefined);
      const parts = url.pathname.split("/").filter(Boolean);
      const markerIndex = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
      if (markerIndex >= 0) return getYouTubeVideoId(parts[markerIndex + 1]);
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function getHttpsUrl(value?: string) {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export const founding100FunnelConfig = {
  shortYouTubeId: getYouTubeVideoId(import.meta.env.VITE_F100_SHORT_YOUTUBE),
  deepYouTubeId: getYouTubeVideoId(import.meta.env.VITE_F100_DEEP_YOUTUBE),
  checkoutUrl: getHttpsUrl(import.meta.env.VITE_F100_CHECKOUT_URL),
} as const;
