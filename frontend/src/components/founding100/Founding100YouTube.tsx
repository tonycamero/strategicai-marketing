import { useEffect, useId, useRef, useState } from "react";
import { AlertCircle } from "lucide-react";
import { trackEvent } from "../../lib/analytics";
import type { Founding100Attribution } from "../../lib/founding100Funnel";

type PlayerKind = "short" | "deep";

type Founding100YouTubeProps = {
  kind: PlayerKind;
  videoId?: string;
  attribution: Founding100Attribution;
};

type YouTubePlayer = {
  destroy: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
};

type YouTubeNamespace = {
  Player: new (
    elementId: string,
    options: {
      videoId: string;
      host?: string;
      playerVars?: Record<string, string | number>;
      events: {
        onReady: () => void;
        onStateChange: (event: { data: number }) => void;
        onError: () => void;
      };
    },
  ) => YouTubePlayer;
};

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<YouTubeNamespace> | undefined;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise<YouTubeNamespace>((resolve, reject) => {
    const existingCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      existingCallback?.();
      if (window.YT?.Player) resolve(window.YT);
      else reject(new Error("YouTube player API did not initialize."));
    };

    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://www.youtube.com/iframe_api"]');
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => reject(new Error("YouTube player API failed to load."));
    document.head.appendChild(script);
  });

  return youtubeApiPromise;
}

function eventName(kind: PlayerKind, suffix: "start" | "progress" | "complete") {
  return `${kind}_video_${suffix}`;
}

function UnconfiguredMedia({ kind }: { kind: PlayerKind }) {
  const label = kind === "short" ? "short film" : "35-minute walkthrough";
  return (
    <div className="f100-media-unavailable" data-media-state="not-configured">
      <div className="f100-media-watermark" aria-hidden="true" />
      <div className="f100-media-unavailable-copy">
        <AlertCircle size={24} aria-hidden="true" />
        <h2>The {label} is not configured yet.</h2>
        <p>This viewing surface is ready. The YouTube asset has not been supplied.</p>
      </div>
    </div>
  );
}

export function Founding100YouTube({ kind, videoId, attribution }: Founding100YouTubeProps) {
  const reactId = useId();
  const elementId = `f100-youtube-${kind}-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const playerRef = useRef<YouTubePlayer>();
  const intervalRef = useRef<number>();
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const progressRef = useRef(new Set<number>());
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!videoId) return;
    let cancelled = false;

    const stopProgress = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    };

    const measureProgress = () => {
      const player = playerRef.current;
      if (!player) return;
      const duration = player.getDuration();
      const currentTime = player.getCurrentTime();
      if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(currentTime)) return;

      const percent = (currentTime / duration) * 100;
      [25, 50, 75, 90].forEach((threshold) => {
        if (percent >= threshold && !progressRef.current.has(threshold)) {
          progressRef.current.add(threshold);
          trackEvent(eventName(kind, "progress"), {
            ...attribution,
            content_path: kind,
            route: window.location.pathname,
            progress_percent: threshold,
          });
        }
      });
    };

    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return;
        playerRef.current = new YT.Player(elementId, {
          videoId,
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            controls: 1,
            enablejsapi: 1,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: () => setLoadFailed(false),
            onStateChange: ({ data }) => {
              if (data === 1) {
                if (!startedRef.current) {
                  startedRef.current = true;
                  trackEvent(eventName(kind, "start"), {
                    ...attribution,
                    content_path: kind,
                    route: window.location.pathname,
                  });
                }
                stopProgress();
                measureProgress();
                intervalRef.current = window.setInterval(measureProgress, 1000);
              } else {
                stopProgress();
              }

              if (data === 0 && !completedRef.current) {
                completedRef.current = true;
                measureProgress();
                trackEvent(eventName(kind, "complete"), {
                  ...attribution,
                  content_path: kind,
                  route: window.location.pathname,
                });
              }
            },
            onError: () => {
              stopProgress();
              setLoadFailed(true);
            },
          },
        });
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      });

    return () => {
      cancelled = true;
      stopProgress();
      playerRef.current?.destroy();
      playerRef.current = undefined;
    };
  }, [attribution, elementId, kind, videoId]);

  if (!videoId) return <UnconfiguredMedia kind={kind} />;
  if (loadFailed) {
    return (
      <div className="f100-media-unavailable" data-media-state="load-failed" role="status">
        <div className="f100-media-unavailable-copy">
          <AlertCircle size={24} aria-hidden="true" />
          <h2>The YouTube player could not load.</h2>
          <p>Refresh the page or try again later. No playback event has been recorded.</p>
        </div>
      </div>
    );
  }

  return <div id={elementId} className="f100-youtube-player" data-media-state="configured" />;
}
