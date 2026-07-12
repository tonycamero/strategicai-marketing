import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

export default function IntakeThanks() {
  const submission = useMemo(() => {
    if (typeof window === "undefined") return null;
    const raw = window.sessionStorage.getItem("strategicai-intake-submission");
    if (!raw) return null;
    try {
      return JSON.parse(raw) as {
        auth?: { loginUrl?: string | null };
        owner?: { email?: string | null };
      };
    } catch {
      return null;
    }
  }, []);

  const loginUrl = submission?.auth?.loginUrl || "https://go.strategicai.app/auth";
  const ownerEmail = submission?.owner?.email || null;

  usePageMeta({
    title: "StrategicAI Intake | Check Your Email",
    description:
      "Your workspace has been provisioned. Check your email, authenticate with Magic, and continue in the production platform.",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-6 text-center text-white">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/15">
        <span className="text-4xl">✅</span>
      </div>
      <h1 className="mb-6 text-4xl font-bold md:text-5xl">Check your email to continue</h1>
      <p className="mb-4 max-w-2xl text-xl leading-relaxed text-slate-400">
        Your tenant owner workspace has been provisioned. Authenticate yourself with Magic, then continue in the production platform.
      </p>
      <div className="mb-10 max-w-xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-left">
        <h2 className="text-lg font-semibold text-white">Next</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {ownerEmail
            ? `Open the email we sent to ${ownerEmail} and use that link to authenticate and continue your owner intake.`
            : "Open the email we sent you and use that link to authenticate and continue your owner intake."}
        </p>
      </div>
      <a
        href={loginUrl}
        onClick={() => trackEvent("owner_authentication_opened", { source: "intake-thanks" })}
        className="inline-flex items-center rounded-lg bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-300"
      >
        Open Production Login
      </a>
      <p className="mt-4 max-w-md text-xs text-slate-500">
        After authentication, StrategicAI will require Magic login before allowing owner intake continuation.
      </p>
    </div>
  );
}
