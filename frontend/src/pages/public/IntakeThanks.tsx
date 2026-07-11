import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

export default function IntakeThanks() {
  usePageMeta({
    title: "StrategicAI Intake | Organization Context Received",
    description:
      "StrategicAI has started building the foundation for your Executive Brief and outlines the next intake step.",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-6 text-center text-white">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/15">
        <span className="text-4xl">✅</span>
      </div>
      <h1 className="mb-6 text-4xl font-bold md:text-5xl">Your organization context has been received</h1>
      <p className="mb-4 max-w-2xl text-xl leading-relaxed text-slate-400">
        StrategicAI has started building the foundation for your Executive Brief.
      </p>
      <div className="mb-10 max-w-xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-left">
        <h2 className="text-lg font-semibold text-white">Next</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Complete the leadership intake, then invite your team to contribute operating evidence.
        </p>
      </div>
      <Link
        to="/intake?stage=leadership"
        onClick={() => trackEvent("team_invite_started", { source: "intake-thanks" })}
        className="inline-flex items-center rounded-lg bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-300"
      >
        Continue to Leadership Intake
      </Link>
      <p className="mt-4 max-w-md text-xs text-slate-500">
        Phase one keeps the current submission contract in place while the deeper multi-step flow is being rolled out.
      </p>
    </div>
  );
}
