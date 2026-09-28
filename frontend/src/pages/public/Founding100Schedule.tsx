import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import { Founding100FunnelChrome } from "../../components/founding100/Founding100FunnelChrome";
import { useFounding100Attribution } from "../../hooks/useFounding100Attribution";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import {
  FOUNDING100_APPLICATION_STORAGE_KEY,
  buildFounding100Path,
  founding100FunnelConfig,
} from "../../lib/founding100Funnel";
import "./founding100-funnel.css";

function readApplicantName() {
  if (typeof window === "undefined") return "";

  try {
    const raw = window.sessionStorage.getItem(FOUNDING100_APPLICATION_STORAGE_KEY);
    if (!raw) return "";
    const parsed = JSON.parse(raw) as { name?: string };
    return typeof parsed.name === "string" ? parsed.name : "";
  } catch {
    return "";
  }
}

export default function Founding100Schedule() {
  const attribution = useFounding100Attribution();
  const [applicantName] = useState(readApplicantName);
  const calendarUrl = founding100FunnelConfig.calendarUrl;

  usePageMeta({
    title: "StrategicAI Founding 100 | Book Your Fit Call",
    description: "Choose a time for a 30-minute StrategicAI Founding 100 founder fit call.",
    path: "/founding100/schedule",
    robots: "noindex, nofollow",
  });

  useEffect(() => {
    if (!calendarUrl) {
      console.warn("Founding 100 scheduling is not configured: VITE_F100_CALENDAR_URL is missing.");
    }
  }, [calendarUrl]);

  function handleSchedulingClick() {
    trackEvent("F100_SCHEDULING_CTA", {
      ...attribution,
      route: "/founding100/schedule",
      calendar_configured: Boolean(calendarUrl),
    });
  }

  return (
    <Founding100FunnelChrome context="founder fit call">
      <main className="f100-transition-main">
        <section className="f100-transition-card" data-calendar-state={calendarUrl ? "configured" : "not-configured"}>
          <div className="f100-transition-icon" aria-hidden="true"><CalendarDays size={24} /></div>
          <p className="f100-kicker">Application saved</p>
          <h1>Thanks{applicantName ? `, ${applicantName}` : ""}.</h1>
          <p className="f100-transition-lede">
            The next step is a 30-minute conversation with Tony. We’ll understand how your business
            operates, where important context gets fragmented, and whether Founding 100 looks useful for you.
          </p>

          <div className="f100-transition-expectations">
            <h2>What we’ll talk about</h2>
            <p>
              Bring the business as it is: the handoffs, exceptions, hard questions, and places where
              visibility breaks down. No preparation or slide deck required.
            </p>
          </div>

          {calendarUrl ? (
            <a className="f100-button f100-button-primary f100-transition-cta" href={calendarUrl} onClick={handleSchedulingClick}>
              Choose a time <ArrowRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <div className="f100-configuration-warning" role="status">
              <LockKeyhole size={17} aria-hidden="true" />
              <span>Google Calendar scheduling is not configured yet. Please return once the appointment link is available.</span>
            </div>
          )}

          <Link className="f100-transition-backlink" to={buildFounding100Path("/founding100/offer", attribution)}>
            Review Founding 100 again
          </Link>
        </section>
      </main>
    </Founding100FunnelChrome>
  );
}
