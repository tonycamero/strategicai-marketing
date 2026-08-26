import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Founding100FunnelChrome } from "../../components/founding100/Founding100FunnelChrome";
import { Founding100YouTube } from "../../components/founding100/Founding100YouTube";
import { useFounding100Attribution } from "../../hooks/useFounding100Attribution";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import { buildFounding100Path, founding100FunnelConfig } from "../../lib/founding100Funnel";
import "./founding100-funnel.css";

type ContentKind = "short" | "deep";

type Founding100ContentProps = {
  kind: ContentKind;
};

const seeReasons = [
  { value: "EVERYTHING_COMES_BACK_TO_ME", label: "Everything keeps coming back to me" },
  { value: "CANT_SEE_WHATS_HAPPENING", label: "I can’t see what’s happening" },
  { value: "SAME_PROBLEMS_KEEP_RETURNING", label: "The same problems keep returning" },
  { value: "HANDOFFS_KEEP_BREAKING", label: "Handoffs keep breaking" },
  { value: "THINKING_ABOUT_AI_AUTOMATION", label: "I’m thinking about AI automation" },
  { value: "OTHER", label: "Something else" },
] as const;

const contentCopy = {
  short: {
    context: "short version",
    title: "StrategicAI Founding 100 | The 5-Minute Version",
    description: "The five-minute StrategicAI belief-shift for business owners. No signup and no email gate.",
    path: "/founding100/quick",
    heading: "You asked for the short version. Here it is.",
    lede: "About 5 minutes. No signup. No detour.",
  },
  deep: {
    context: "35-minute walkthrough",
    title: "StrategicAI Founding 100 | The Full Walkthrough",
    description: "The full 35-minute StrategicAI walkthrough for owners who want to understand how their business actually works.",
    path: "/founding100/webinar",
    heading: "You already know the moment. This is the full walkthrough.",
    lede: "About 35 minutes. No signup. Start with how the business actually works.",
  },
} as const;

export default function Founding100Content({ kind }: Founding100ContentProps) {
  const copy = contentCopy[kind];
  const attribution = useFounding100Attribution();
  const [reasonDismissed, setReasonDismissed] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string>();
  const videoId = kind === "short" ? founding100FunnelConfig.shortYouTubeId : founding100FunnelConfig.deepYouTubeId;
  const deepPath = buildFounding100Path("/founding100/webinar", attribution);
  const offerPath = buildFounding100Path("/founding100/offer", attribution);

  usePageMeta({ title: copy.title, description: copy.description, path: copy.path });

  useEffect(() => {
    trackEvent(kind === "short" ? "see_short" : "see_deep", {
      ...attribution,
      content_path: kind,
      route: copy.path,
      media_configured: Boolean(videoId),
    });
  }, [attribution, copy.path, kind, videoId]);

  function selectReason(value: string) {
    setSelectedReason(value);
    trackEvent("see_reason_selected", {
      ...attribution,
      content_path: kind,
      route: copy.path,
      see_reason: value,
    });
  }

  return (
    <Founding100FunnelChrome context={copy.context}>
      <main className="f100-content-main">
        <header className="f100-content-heading">
          <h1>{copy.heading}</h1>
          <p>{copy.lede}</p>
        </header>

        <section className="f100-media-frame" aria-label={`${copy.context} media`}>
          <Founding100YouTube kind={kind} videoId={videoId} attribution={attribution} />
        </section>

        {kind === "short" && !reasonDismissed ? (
          <section className="f100-see-reason" aria-labelledby="see-reason-title">
            <div className="f100-see-reason-heading">
              <h2 id="see-reason-title">What made you hit SEE?</h2>
              <button type="button" onClick={() => setReasonDismissed(true)}>
                Dismiss <X size={15} aria-hidden="true" />
              </button>
            </div>
            <div className="f100-see-reason-options">
              {seeReasons.map((reason) => (
                <button
                  key={reason.value}
                  type="button"
                  aria-pressed={selectedReason === reason.value}
                  onClick={() => selectReason(reason.value)}
                >
                  <span className="f100-see-reason-radio" aria-hidden="true" />
                  <span>{reason.label}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              ))}
            </div>
          </section>
        ) : null}

        <div className={`f100-content-actions ${kind === "deep" ? "f100-content-actions-single" : ""}`}>
          {kind === "short" ? (
            <Link
              className="f100-button f100-button-primary"
              to={deepPath}
              onClick={() => trackEvent("short_to_deep", { ...attribution, route: copy.path })}
            >
              Watch the full 35 min <ArrowRight size={17} aria-hidden="true" />
            </Link>
          ) : null}
          <Link
            className={kind === "short" ? "f100-button f100-button-secondary" : "f100-button f100-button-primary"}
            to={offerPath}
            onClick={() => trackEvent("content_to_offer", { ...attribution, content_path: kind, route: copy.path })}
          >
            See Founding 100 <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <p className="f100-content-principle">
          Understand how the business actually works. Turn that Operational Reality into Operational Intelligence. Give Nemo somewhere real to start.
        </p>
      </main>
    </Founding100FunnelChrome>
  );
}
