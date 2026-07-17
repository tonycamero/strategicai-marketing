import React from "react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import { buildSignupUrl } from "../../lib/signup";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";

export default function Pricing() {
  usePageMeta({
    title: "StrategicAI Engagements | Reflection, Diagnosis, Roadmap, and Implementation",
    description:
      "Understand the boundary between the free Executive Brief, paid Diagnostic and Roadmap engagements, and scoped implementation support.",
  });

  const engagements = [
    {
      step: "01",
      title: "Executive Brief",
      cost: "Free",
      description:
        "A reflection of leadership context, team evidence, and the visible operating pattern already inside the business.",
      boundary: "No Diagnostic purchase required.",
    },
    {
      step: "02",
      title: "Diagnostic",
      cost: "Paid after Discovery Call",
      description:
        "StrategicAI identifies the governing constraint, tests assumptions, and explains what is actually causing the friction.",
      boundary: "This is where explanation begins.",
    },
    {
      step: "03",
      title: "Roadmap",
      cost: "Paid planning engagement",
      description:
        "Intervention order, ownership, sequencing, milestones, and a 90-day plan grounded in the operating model.",
      boundary: "This is the plan, not yet the execution environment.",
    },
    {
      step: "04",
      title: "Implementation and Execution",
      cost: "Scoped implementation",
      description:
        "When included, StrategicAI builds the governed workflows, connectors, and execution surfaces required by the Roadmap.",
      boundary: "Scope and continuity depend on the implementation agreement.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section id="engagements" className={`${sectionClass} scroll-mt-28`}>
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Engagements</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Start with reflection. Add depth only when the evidence earns it.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Each stage has a distinct purpose, authority, and commercial boundary. No stage borrows the promise of the next.
            </p>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`}>
          <div className="grid gap-6 lg:grid-cols-2">
            {engagements.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">
                  {item.step} — {item.cost}
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-400">
                  {item.boundary}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-8">
              <h2 className="text-3xl font-semibold text-white">What you should expect</h2>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>The Executive Brief is reflection, not diagnosis.</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>The Diagnostic explains the governing constraint.</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>The Roadmap sets intervention order and ownership.</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Implementation and Execution support keeps the plan alive after the document is delivered.</span></li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-8">
              <h2 className="text-3xl font-semibold text-white">Why prices are not flattened into a SaaS grid</h2>
              <p className="mt-6 text-base leading-7 text-slate-300">
                StrategicAI is not selling isolated seats or generic software access. The commercial
                boundary depends on how much explanation, intervention design, and operational
                support the organization actually needs.
              </p>
              <p className="mt-6 text-base leading-7 text-slate-400">
                The free Executive Brief exists so that the first decision is grounded in evidence,
                not guesswork.
              </p>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Begin with a shared place to start.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              If the Executive Brief reflects the truth of your operating pattern, StrategicAI can
              then help you decide whether Diagnostic, Roadmap, or Implementation and Execution support should follow.
            </p>
            <a
              href={buildSignupUrl("pricing_engagement_intake")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("executive_brief_cta_click", { source: "pricing" })}
              className="mt-10 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Build My Executive Brief
            </a>
          </div>
        </section>
      </main>

      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
