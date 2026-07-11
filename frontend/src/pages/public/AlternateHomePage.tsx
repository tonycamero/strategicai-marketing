import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { ImageViewer } from "../../components/ImageViewer";
import { trackEvent } from "../../lib/analytics";
import { usePageMeta } from "../../hooks/usePageMeta";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass = "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const journeyStages = [
  {
    id: "executive-brief",
    step: "01",
    title: "Executive Brief",
    label: "See the visible pattern.",
    body:
      "A free reflection of the pain, friction, and operating symptoms already present inside your organization.",
    boundary: "Free. No Diagnostic purchase required.",
  },
  {
    id: "diagnostic",
    step: "02",
    title: "Diagnostic",
    label: "Understand the governing constraint.",
    body:
      "After payment and a live Discovery Call, StrategicAI delivers the explanatory layer: what is causing the friction and what must change.",
    boundary: "Paid engagement after the Executive Brief earns trust.",
  },
  {
    id: "roadmap",
    step: "03",
    title: "Roadmap",
    label: "Determine the intervention order.",
    body:
      "Sequencing, priorities, ownership, milestones, and a 90-day execution plan grounded in the operating model.",
    boundary: "Intervention plan with explicit ownership and milestones.",
  },
  {
    id: "execution",
    step: "04",
    title: "Execution",
    label: "Operate inside the new structure.",
    body:
      "Put the roadmap to work through a shared environment for ownership, pressure, blockers, and measurable progress.",
    boundary: "Ongoing execution environment, not a one-time document handoff.",
  },
];

export default function AlternateHomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeStage, setActiveStage] = useState(journeyStages[0].id);

  usePageMeta({
    title: "StrategicAI | Free Executive Brief for Operational Clarity",
    description:
      "Build a free Executive Brief that reflects leadership context and team evidence before deciding whether Diagnostic, Roadmap, or Execution support is needed.",
  });

  useEffect(() => {
    trackEvent("homepage_view", { page: "/" });
  }, []);

  const activeStageData = useMemo(
    () => journeyStages.find((stage) => stage.id === activeStage) ?? journeyStages[0],
    [activeStage],
  );

  const openBriefSample = (source: string) => {
    trackEvent("sample_brief_open", { source });
    setSelectedImage("/images/smb-executive-brief.png");
  };

  const handleExecutiveBriefClick = (source: string) => {
    trackEvent("executive_brief_cta_click", { source });
  };

  const handleJourneyStage = (stageId: string) => {
    setActiveStage(stageId);
    trackEvent("journey_stage_expand", { stage: stageId });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400/20">
      <main>
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div className="absolute inset-0">
            <img src="/images/brain-bg.png" alt="" className="h-full w-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_40%),linear-gradient(180deg,rgba(2,6,23,0.35),#020617_80%)]" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                Free Executive Brief
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
                You don&apos;t have an execution problem.
                <br />
                <span className="text-cyan-300">You have an understanding problem.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">
                Work is moving. People are busy. But priorities blur, ownership fragments, and the
                same friction keeps returning.
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                StrategicAI helps you see how your organization is actually operating before
                recommending what should change.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/intake?source=homepage_hero_executive_brief"
                  onClick={() => handleExecutiveBriefClick("hero")}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Build My Executive Brief
                </Link>
                <button
                  type="button"
                  onClick={() => openBriefSample("hero")}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
                >
                  View Sample Executive Brief
                </button>
              </div>
              <div className="mt-6 space-y-2 text-sm text-slate-400">
                <p className="font-medium text-slate-300">Free operating reflection. No purchase required.</p>
                <p>
                  Free operating reflection. Built from leadership and team input. See the patterns
                  creating friction before deciding whether to continue.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Recognition</p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Something feels off, but the symptoms do not explain the system.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Everyone is busy, but important work still stalls.",
              "Meetings circulate context without resolving ownership.",
              "Priorities multiply faster than capacity.",
              "Departments see their part, but leadership lacks the whole picture.",
              "The same issues return under different names.",
              "The problem is not invisible. It is fragmented.",
            ].map((item) => (
              <div key={item} className={cardClass}>
                <p className="text-lg leading-8 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${sectionClass} pt-0`}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Executive Brief Preview</p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                See what your organization has been trying to say.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Your Executive Brief combines leadership context and team evidence into one clear
                operating reflection.
              </p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Recurring friction</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Conflicting perspectives</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Execution patterns</span></li>
                <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Visible operating pressure</span></li>
              </ul>
              <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400">
                It does not diagnose root cause. It gives you a credible place to begin.
              </p>
              <button
                type="button"
                onClick={() => openBriefSample("brief-preview")}
                className="mt-8 inline-flex items-center rounded-full border border-cyan-400/35 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
              >
                View Sample Executive Brief
              </button>
            </div>
            <button
              type="button"
              onClick={() => openBriefSample("brief-image")}
              className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/60 text-left transition hover:border-slate-600"
            >
              <img src="/images/smb-executive-brief.png" alt="Executive Brief sample" className="w-full object-cover" />
            </button>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Why This Keeps Happening</p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                Your tools track work. They do not explain how the organization operates.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>CRMs track relationships.</p>
              <p>Project systems track tasks.</p>
              <p>Documents store context.</p>
              <p>Meetings exchange updates.</p>
              <p className="text-slate-400">
                None of them create a shared explanation for why execution keeps slowing down.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className={sectionClass}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div className={cardClass}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Operating Model</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                StrategicAI does not begin with recommendations.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Most AI tools respond to a prompt. StrategicAI first builds a structured model of
                your organization from business context, leadership intent, and team evidence.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                We call this your <span className="font-semibold text-white">Digital Twin</span>.
              </p>
              <p className="mt-6 text-base leading-7 text-slate-400">
                It becomes the operating context behind your Executive Brief, Diagnostic, Roadmap,
                and execution environment.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Business Context",
                  body: "How the organization is supposed to work, what leadership is trying to achieve, and where capacity is under pressure.",
                },
                {
                  title: "Leadership Intent",
                  body: "What leaders believe matters most, where they see friction, and what assumptions are currently steering decisions.",
                },
                {
                  title: "Team Evidence",
                  body: "The lived operating reality from the people closest to handoffs, blockers, and recurring execution strain.",
                },
                {
                  title: "Shared Operating Picture",
                  body: "One model that makes the pattern visible before any paid intervention begins.",
                },
              ].map((item) => (
                <div key={item.title} className={cardClass}>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Journey</p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Start with reflection. Continue only when it earns your trust.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {journeyStages.map((stage) => {
                const active = stage.id === activeStage;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => handleJourneyStage(stage.id)}
                    className={`w-full rounded-3xl border p-6 text-left transition ${
                      active
                        ? "border-cyan-400/40 bg-cyan-400/10"
                        : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                        {stage.step}
                      </span>
                      <span className="text-xl font-semibold text-white">{stage.title}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-400">{stage.label}</p>
                  </button>
                );
              })}
            </div>
            <div className={`${cardClass} min-h-[320px]`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">
                {activeStageData.step} — {activeStageData.title}
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-white">{activeStageData.label}</h3>
              <p className="mt-6 text-lg leading-8 text-slate-300">{activeStageData.body}</p>
              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Boundary</p>
                <p className="mt-3 text-base leading-7 text-slate-300">{activeStageData.boundary}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className={cardClass}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Before StrategicAI</p>
              <ul className="space-y-4 text-lg leading-8 text-slate-300">
                <li>Context lives across people and systems.</li>
                <li>Leadership coordinates manually.</li>
                <li>Priorities compete without intervention logic.</li>
                <li>Ownership is assumed.</li>
                <li>Progress depends on follow-up.</li>
              </ul>
            </div>
            <div className={cardClass}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">With StrategicAI</p>
              <ul className="space-y-4 text-lg leading-8 text-slate-300">
                <li>Leadership shares one operating picture.</li>
                <li>Constraints are named.</li>
                <li>Intervention order is explicit.</li>
                <li>Ownership is visible.</li>
                <li>Execution produces evidence.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">How The Brief Is Built</p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                You provide the context. Your team provides the operating evidence.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                StrategicAI synthesizes both into one clear reflection before any diagnostic or
                roadmap work begins.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-10">
              <div className="space-y-6 text-center text-lg font-medium text-slate-200">
                <div>Organization Context</div>
                <div className="text-cyan-300">↓</div>
                <div>Leadership Intake</div>
                <div className="text-cyan-300">↓</div>
                <div>Team Evidence</div>
                <div className="text-cyan-300">↓</div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-5 text-white">
                  Executive Brief
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Mission Control</p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                The Roadmap does not end as a document.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Mission Control is where priorities, ownership, execution pressure, blockers, and
                progress become operational.
              </p>
              <p className="mt-6 text-base leading-7 text-slate-400">
                One shared environment keeps the roadmap alive after the reflection, diagnostic, and
                planning work are complete.
              </p>
              <Link
                to="/product"
                className="mt-8 inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
              >
                See the Product Surface
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setSelectedImage("/images/smb-dashboard-main.png")}
              className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/60 transition hover:border-slate-600"
            >
              <img src="/images/smb-dashboard-main.png" alt="Mission Control dashboard" className="w-full object-cover" />
            </button>
          </div>
        </section>

        <section className="border-t border-slate-800/70 bg-slate-900/35">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Final Call To Action</p>
            <h2 className="text-4xl font-semibold text-white md:text-6xl">
              Start with the truth already inside your organization.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Build the Executive Brief. See the visible operating pattern. Decide from evidence
              whether to continue.
            </p>
            <Link
              to="/intake?source=homepage_final_executive_brief"
              onClick={() => handleExecutiveBriefClick("final-cta")}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Build My Executive Brief
            </Link>
            <p className="mt-4 text-sm text-slate-400">Free. No Diagnostic purchase required.</p>
          </div>
        </section>
      </main>

      <TrustAgentShell enabled={true} mode="homepage" />
      <ImageViewer isOpen={!!selectedImage} src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
