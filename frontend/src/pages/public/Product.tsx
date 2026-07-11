import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { ImageViewer } from "../../components/ImageViewer";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const imageCard = "overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/60 transition hover:border-slate-600";

export default function Product() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  usePageMeta({
    title: "StrategicAI Product | From Operating Model to Mission Control",
    description:
      "See how StrategicAI turns organization context, leadership input, and team evidence into a living execution environment.",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openImage = (src: string, label: string) => {
    trackEvent("sample_brief_open", { source: `product:${label}` });
    setSelectedImage(src);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section className={sectionClass}>
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Product</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              How the operating model becomes an execution environment.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              StrategicAI does not start by flooding the team with dashboards. It starts by
              building shared context, then turns that context into a living environment for
              priorities, ownership, blockers, and progress.
            </p>
            <Link
              to="/intake?source=product_hero_executive_brief"
              onClick={() => trackEvent("executive_brief_cta_click", { source: "product-hero" })}
              className="mt-10 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Build My Executive Brief
            </Link>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">1. Reflection</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Executive Brief</h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Leadership context and team evidence are synthesized into one operating reflection.
                The goal is alignment, not hype.
              </p>
              <button type="button" onClick={() => openImage("/images/smb-executive-brief.png", "brief")} className={`${imageCard} mt-8 block w-full`}>
                <img src="/images/smb-executive-brief.png" alt="Executive Brief artifact" className="w-full" />
              </button>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">2. Explanation</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Diagnostic and Roadmap</h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Once the pattern is visible, StrategicAI identifies governing constraints,
                intervention order, and ownership boundaries.
              </p>
              <button type="button" onClick={() => openImage("/images/smb-report-overview.png", "roadmap")} className={`${imageCard} mt-8 block w-full`}>
                <img src="/images/smb-report-overview.png" alt="Diagnostic overview artifact" className="w-full" />
              </button>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Digital Twin</p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                A structured model, not a generic prompt loop.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                StrategicAI builds a Digital Twin from organization context, leadership intent, and
                team evidence. That model becomes the operating context for every downstream artifact
                and every execution decision.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["Organization Context", "Business shape, operating assumptions, current priorities, and pressure."],
                ["Leadership Input", "Intent, perceived friction, and what leadership believes is true."],
                ["Team Evidence", "What the people closest to the work experience every day."],
                ["Shared Execution Context", "One model used across reflection, diagnosis, roadmap, and Mission Control."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/55 p-6">
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Mission Control</p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                The roadmap becomes operational here.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Mission Control is where the plan stops being a document and becomes a shared
                environment for ownership, pressure, blockers, and progress.
              </p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Priorities stay visible</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Ownership is explicit</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Execution pressure is trackable</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Progress produces evidence</span></li>
              </ul>
            </div>
            <button type="button" onClick={() => openImage("/images/mission-control-real.png", "mission-control")} className={imageCard}>
              <img src="/images/mission-control-real.png" alt="Mission Control view" className="w-full" />
            </button>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Don&apos;t buy the explanation before you&apos;ve seen the reflection.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              The Executive Brief is the first artifact. If the reflection rings true, StrategicAI
              can then move into Diagnostic, Roadmap, and ongoing execution support.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/intake?source=product_final_executive_brief"
                onClick={() => trackEvent("executive_brief_cta_click", { source: "product-final" })}
                className="inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Build My Executive Brief
              </Link>
              <Link
                to="/pricing#engagements"
                className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
              >
                See Engagement Boundaries
              </Link>
            </div>
          </div>
        </section>
      </main>

      <TrustAgentShell enabled={true} mode="public" />
      <ImageViewer isOpen={!!selectedImage} src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
