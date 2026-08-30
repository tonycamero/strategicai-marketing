import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  Pause,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { ImageViewer } from "../../components/ImageViewer";
import { trackEvent } from "../../lib/analytics";
import { usePageMeta } from "../../hooks/usePageMeta";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass =
  "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const proofSteps = [
  {
    id: "evidence",
    label: "Evidence",
    title: "Different people hold different parts of the picture.",
    body: "Leadership context and team evidence show what each role sees around the same operating pressure.",
    image: "/images/homepage-proof-evidence-placeholder.svg",
    alt: "Placeholder for accepted Golden Proof Thread evidence capture",
  },
  {
    id: "picture",
    label: "Picture",
    title: "The evidence becomes a bounded operating picture.",
    body: "Relationships, pressure, and missing context become inspectable without pretending the unknown is known.",
    image: "/images/homepage-proof-picture-placeholder.svg",
    alt: "Placeholder for accepted Golden Proof Thread operating picture capture",
  },
  {
    id: "correction",
    label: "Correction",
    title: "The owner can say: “No. That’s not how it works.”",
    body: "The accepted picture changes when the owner corrects a relationship, boundary, or assumption.",
    kind: "image" as const,
    image: "/images/homepage-proof-correction-placeholder.svg",
    alt: "Placeholder for accepted Golden Proof Thread owner correction capture",
  },
  {
    id: "question",
    label: "Question",
    title: "The next question follows the relationship.",
    body: "Nemo is intended to help the owner reason from available company context rather than start from a blank prompt.",
    kind: "image" as const,
    image: "/images/homepage-proof-question-placeholder.svg",
    alt: "Placeholder for accepted Golden Proof Thread context-aware Nemo capture",
  },
] as const;

const businessViews = [
  {
    id: "work",
    label: "How work moves",
    detail: "See the path work takes across people, systems, handoffs, and decisions.",
  },
  {
    id: "ownership",
    label: "Who owns what",
    detail: "Make visible where responsibility is clear, assumed, or concentrated in one person.",
  },
  {
    id: "handoffs",
    label: "Where handoffs break",
    detail: "Inspect the relationships where information, authority, or timing is being lost.",
  },
  {
    id: "unknowns",
    label: "What is still unknown",
    detail: "Keep evidence gaps, disagreement, and unresolved questions visible instead of filling them with certainty.",
  },
  {
    id: "priorities",
    label: "What deserves attention next",
    detail: "Use the picture to decide what needs action, ownership, investigation, or no change.",
  },
] as const;

const nemoQuestions = [
  {
    id: "owner-dependence",
    question: "What still depends too much on me?",
    response: "Trace the work, authority, and handoffs that make the owner the default point of return.",
  },
  {
    id: "customer-handoff",
    question: "Where does this customer handoff become fragile?",
    response: "Follow the relationship between the customer moment, the responsible role, the system, and the next decision.",
  },
  {
    id: "automation-readiness",
    question: "Which relationship should I inspect before I automate this?",
    response: "Start with the dependency and the evidence boundary, then decide whether automation is actually warranted.",
  },
] as const;

type ProofStep = (typeof proofSteps)[number];

function ProofFrame({ step, onOpenImage }: { step: ProofStep; onOpenImage: (src: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpenImage(step.image)}
      className="group block w-full overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 text-left transition hover:border-cyan-400/40"
      aria-label={`Open larger ${step.label.toLowerCase()} proof frame`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={step.image}
          alt={step.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
          <Eye size={14} aria-hidden="true" /> View frame
        </span>
      </div>
    </button>
  );
}

export default function AlternateHomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeProofStep, setActiveProofStep] = useState(0);
  const [proofPlaying, setProofPlaying] = useState(false);
  const [selectedView, setSelectedView] = useState(businessViews[0].id);
  const [selectedQuestion, setSelectedQuestion] = useState(nemoQuestions[0].id);

  usePageMeta({
    title: "StrategicAI | Understand How Your Business Actually Works",
    description:
      "StrategicAI turns organizational evidence into Operational Intelligence, Business Views, and a more grounded way to reason about what should happen next.",
  });

  useEffect(() => {
    trackEvent("homepage_view", { page: "/", surface_version: "homepage-launch-state-v1" });
  }, []);

  useEffect(() => {
    if (!proofPlaying) return;

    const timer = window.setTimeout(() => {
      if (activeProofStep >= proofSteps.length - 1) {
        setProofPlaying(false);
        trackEvent("homepage_proof_complete", {
          proof_thread: "golden-proof-thread",
          completed_steps: proofSteps.length,
        });
        return;
      }

      const nextStep = activeProofStep + 1;
      setActiveProofStep(nextStep);
      trackEvent("homepage_proof_step", {
        proof_step: proofSteps[nextStep].id,
        step_index: nextStep,
        auto_advanced: true,
      });
    }, 11000);

    return () => window.clearTimeout(timer);
  }, [activeProofStep, proofPlaying]);

  const activeProof = proofSteps[activeProofStep];
  const activeView = useMemo(
    () => businessViews.find((view) => view.id === selectedView) ?? businessViews[0],
    [selectedView],
  );
  const activeQuestion = useMemo(
    () => nemoQuestions.find((item) => item.id === selectedQuestion) ?? nemoQuestions[0],
    [selectedQuestion],
  );

  function startProof() {
    setActiveProofStep(0);
    setProofPlaying(true);
    trackEvent("homepage_proof_start", {
      proof_thread: "golden-proof-thread",
      surface_version: "homepage-launch-state-v1",
    });
  }

  function toggleProof() {
    if (proofPlaying) {
      setProofPlaying(false);
      trackEvent("homepage_proof_pause", {
        proof_step: activeProof.id,
        elapsed_step_count: activeProofStep + 1,
      });
      return;
    }

    if (activeProofStep >= proofSteps.length - 1) {
      setActiveProofStep(0);
    }
    setProofPlaying(true);
    trackEvent("homepage_proof_start", {
      proof_thread: "golden-proof-thread",
      resumed_from: activeProof.id,
    });
  }

  function selectProofStep(index: number) {
    setActiveProofStep(index);
    setProofPlaying(false);
    trackEvent("homepage_proof_step", {
      proof_step: proofSteps[index].id,
      step_index: index,
      auto_advanced: false,
    });
  }

  function selectBusinessView(viewId: string) {
    setSelectedView(viewId);
    trackEvent("homepage_business_view_select", { view_id: viewId });
  }

  function selectNemoQuestion(questionId: string) {
    setSelectedQuestion(questionId);
    trackEvent("homepage_nemo_question_select", { question_id: questionId });
  }

  function handleFounding100Click(source: string) {
    trackEvent("founding100_cta_click", {
      source,
      destination: "/founding100/offer",
      commercial_branch_state: "offer_surface_controls_checkout_state",
    });
  }

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
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">How the business actually works</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">See how your business actually works.</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">StrategicAI helps you form a credible, inspectable picture of the people, work, systems, decisions, dependencies, and pressure shaping the business—then turn that picture into Operational Intelligence.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#proof-thread" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">See the proof <ArrowRight size={17} className="ml-2" aria-hidden="true" /></a>
                <Link to="/founding100/offer" onClick={() => handleFounding100Click("homepage-hero")} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">Explore Founding 100</Link>
              </div>
              <p className="mt-6 text-sm font-medium text-slate-400">Start with the proof. The current commercial entry is the Founding 100.</p>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="operating-problem-title">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The Operating Problem</p>
            <h2 id="operating-problem-title" className="text-3xl font-semibold text-white md:text-5xl">The work is moving. The explanation is missing.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">The same problems keep returning in different forms. One person sees the handoff; another sees the delay. The system holds a fragment. The owner gets the escalation. By the time the pattern is visible, the business is already working around it.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Everything keeps coming back to the owner.",
              "Handoffs break between people, tools, or decisions.",
              "Priorities change before ownership and capacity catch up.",
              "Important context is spread across systems, files, conversations, and memory.",
            ].map((item) => (
              <div key={item} className={`${cardClass} flex items-start gap-4`}><CheckCircle2 size={21} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /><p className="text-lg leading-8 text-slate-300">{item}</p></div>
            ))}
          </div>
          <p className="mt-8 text-xl font-medium text-cyan-200">This is not a request for more activity. It is a request for a better picture.</p>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="reframe-title">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className={cardClass}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The Reframe</p>
              <h2 id="reframe-title" className="text-3xl font-semibold text-white md:text-5xl">Before you automate the work, understand the system producing it.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">If an AI automation system does not understand how your company actually works, it is automating a guess. Automation may still be the right move—but only after the evidence shows what the work is, where it depends on something else, and what the intervention is supposed to change.</p>
            </div>
            <div className="flex flex-col justify-center rounded-3xl border border-amber-200/25 bg-[linear-gradient(145deg,rgba(70,55,30,0.4),rgba(15,23,42,0.86))] p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/80">Automation Without Understanding</p>
              <p className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">Start with the picture. Choose the intervention after.</p>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-300"><span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-2">understand</span><ArrowRight size={15} className="text-cyan-200" aria-hidden="true" /><span className="rounded-full border border-amber-200/25 bg-amber-200/10 px-3 py-2 text-amber-100">intervene when warranted</span></div>
            </div>
          </div>
        </section>

        <section id="proof-thread" className={`${sectionClass} scroll-mt-20`} aria-labelledby="proof-thread-title">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">See the Move</p>
            <h2 id="proof-thread-title" className="text-3xl font-semibold text-white md:text-5xl">A short proof of what changes when the picture becomes inspectable.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">Follow one operating problem through the same evidence lineage. The point is not a feature tour. It is the picture forming, being corrected, becoming visible, and supporting a better question.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><span>Golden Proof Thread</span><span>45 seconds</span></div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400"><span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-2">same business</span><span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-2">same problem</span><span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-2">same evidence lineage</span></div>
              {proofSteps.map((step, index) => {
                const active = index === activeProofStep;
                return <button type="button" key={step.id} onClick={() => selectProofStep(index)} aria-pressed={active} className={`w-full rounded-2xl border p-5 text-left transition ${active ? "border-cyan-400/40 bg-cyan-400/10" : "border-slate-800 bg-slate-900/35 hover:border-slate-700"}`}><div className="flex items-center gap-4"><span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">0{index + 1}</span><span className="text-lg font-semibold text-white">{step.label}</span></div><p className="mt-3 text-sm leading-6 text-slate-400">{step.title}</p></button>;
              })}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button type="button" onClick={startProof} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"><Play size={15} className="mr-2" aria-hidden="true" /> Start the 45-second proof</button>
                <button type="button" onClick={toggleProof} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">{proofPlaying ? <Pause size={15} className="mr-2" aria-hidden="true" /> : <Play size={15} className="mr-2" aria-hidden="true" />}{proofPlaying ? "Pause proof" : "Play from here"}</button>
              </div>
            </div>
            <div aria-live="polite">
              <ProofFrame step={activeProof} onOpenImage={(src) => { setSelectedImage(src); trackEvent("homepage_proof_open", { proof_step: activeProof.id, asset: src }); }} />
              <div className="mt-6"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">{activeProof.label}</p><h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{activeProof.title}</h3><p className="mt-4 text-base leading-7 text-slate-400">{activeProof.body}</p></div>
            </div>
          </div>
          <p className="mt-10 border-l-2 border-cyan-300/50 pl-5 text-lg font-medium leading-8 text-slate-300">The value is not a prettier dashboard. It is a more useful place to begin.</p>
        </section>

        <section className={sectionClass} aria-labelledby="category-title">
          <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The Category</p><h2 id="category-title" className="text-3xl font-semibold text-white md:text-5xl">StrategicAI is Operational Intelligence built from Operational Reality.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Operational Reality is how the organization actually works across people, systems, work, decisions, authority, dependencies, constraints, exceptions, competing perspectives, and unknowns.</p></div>
            <div className="space-y-3">
              {[
                ["01", "Operational Reality", "The connected reality already present in the company."],
                ["02", "Operational Intelligence", "Useful understanding formed from that reality."],
                ["03", "Business Views", "Bounded ways to inspect selected relationships and conditions."],
                ["04", "Nemo", "The intended interaction layer for reasoning from available company context."],
                ["05", "Capabilities", "Automation, change, ownership, alerts, investigation, or no change when warranted."],
              ].map(([number, title, body]) => <div key={number} className="grid grid-cols-[48px_1fr] gap-4 border-b border-slate-800 py-5 first:border-t"><span className="text-sm font-semibold tracking-[0.18em] text-cyan-300/70">{number}</span><div><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{body}</p></div></div>)}
            </div>
          </div>
          <p className="mt-10 text-xl font-medium text-cyan-200">The order matters: evidence before prescription, scope before automation.</p>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="business-views-title">
          <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Business Views</p><h2 id="business-views-title" className="text-3xl font-semibold text-white md:text-5xl">See the part of the business you need to understand next.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Business Views are bounded, inspectable projections of the company picture. They make selected relationships, dependencies, bottlenecks, unknowns, or priorities visible without pretending to own the whole truth.</p></div>
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]"><div className="space-y-3">{businessViews.map((view) => { const active = view.id === selectedView; return <button type="button" key={view.id} onClick={() => selectBusinessView(view.id)} aria-pressed={active} className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${active ? "border-cyan-400/40 bg-cyan-400/10" : "border-slate-800 bg-slate-900/35 hover:border-slate-700"}`}><span className="text-base font-semibold text-white">{view.label}</span><ArrowRight size={16} className={active ? "text-cyan-200" : "text-slate-600"} aria-hidden="true" /></button>; })}</div><div className={`${cardClass} min-h-[280px]`}><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">Selected Business View</p><h3 className="mt-5 text-3xl font-semibold text-white">{activeView.label}</h3><p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{activeView.detail}</p><div className="mt-10 flex items-center gap-3 text-sm text-slate-400"><Check size={16} className="text-cyan-300" aria-hidden="true" /> The starting questions stay consistent. The exact views depend on what the evidence supports.</div></div></div>
        </section>

        <section className={sectionClass} aria-labelledby="nemo-title">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.02fr_0.98fr]"><div className={cardClass}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Nemo</p><h2 id="nemo-title" className="text-3xl font-semibold text-white md:text-5xl">Nemo gives the owner somewhere real to start.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Once the company picture is available, Nemo is intended to help you inspect the questions that matter: where work is waiting, what depends on one person, which handoff is fragile, what remains unknown, and what should be looked at next.</p><p className="mt-6 text-base leading-7 text-slate-400">Nemo is not omniscient, automatically authoritative, professionally licensed, or a replacement for accountable leadership. It reasons from the company context that is actually available in the named experience.</p></div><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">Example owner questions</p><div className="mt-5 space-y-3">{nemoQuestions.map((item) => { const active = selectedQuestion === item.id; return <button type="button" key={item.id} onClick={() => selectNemoQuestion(item.id)} aria-pressed={active} className={`w-full rounded-2xl border px-4 py-4 text-left text-sm transition ${active ? "border-cyan-300/35 bg-cyan-300/10 text-white" : "border-slate-700/70 bg-slate-950/30 text-slate-300 hover:border-slate-600"}`}>“{item.question}”</button>; })}</div><div className="mt-6 border-t border-slate-700/70 pt-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">What the context lets you inspect</p><p className="mt-3 text-base leading-7 text-slate-200">{activeQuestion.response}</p></div></div></div>
        </section>

        <section className="border-t border-slate-800/70 bg-slate-900/35" aria-labelledby="founding100-title">
          <div className="mx-auto max-w-6xl px-6 py-24"><div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Founding 100</p><h2 id="founding100-title" className="text-4xl font-semibold text-white md:text-6xl">Build the intelligence before you decide what to automate.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">The Founding 100 are the first businesses helping us build and harden this experience with real use. You bring your company, your evidence, your corrections, and your hard questions. We build a serious body of intelligence about how the business actually works, make useful parts visible through Business Views, and give the authorized cohort experience a real context to work from.</p><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">This is not access to another AI tool. It is participation in building the evidence base, delivery learning, correction patterns, and usage understanding that a mature StrategicAI offering will eventually need.</p></div><div className="rounded-3xl border border-cyan-300/25 bg-slate-950/60 p-7"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">The exchange</p><ul className="mt-6 space-y-4 text-base leading-7 text-slate-300"><li className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> Real company context</li><li className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> Honest correction and feedback</li><li className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> Hard operating questions</li><li className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> A serious body of intelligence to inspect</li></ul><div className="mt-8 flex flex-col gap-3"><Link to="/founding100/offer" onClick={() => handleFounding100Click("homepage_founding100")} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Review the Founding 100 <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link><Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">See how it works</Link></div><p className="mt-5 text-xs leading-5 text-slate-500">Review the current offer surface for scope and checkout state. The homepage does not promise a fixed view bundle, verified 90-day continuity, or an outcome.</p></div></div></div>
        </section>
      </main>

      <TrustAgentShell enabled={true} mode="homepage" />
      <ImageViewer isOpen={!!selectedImage} src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
