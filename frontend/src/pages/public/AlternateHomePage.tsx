import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, CheckCircle2, Eye, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { ImageViewer } from "../../components/ImageViewer";
import { trackEvent } from "../../lib/analytics";
import { goldenProofThread, type GoldenProofFrame } from "../../lib/goldenProofThread";
import { usePageMeta } from "../../hooks/usePageMeta";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass = "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const proofSteps = goldenProofThread.frames;

const businessViews = [
  { id: "work", label: "Where does work get stuck?", detail: "Follow the path work takes across people, systems, handoffs, and decisions to see where it waits or bends." },
  { id: "ownership", label: "What still depends on me?", detail: "Make visible where responsibility, approval, or knowledge is concentrated in one person." },
  { id: "handoffs", label: "Who needs what from whom?", detail: "Follow the relationships where information, decisions, or timing has to move between people." },
  { id: "unknowns", label: "What do we still not know?", detail: "Keep missing information, disagreement, and unresolved questions visible instead of filling them with certainty." },
  { id: "priorities", label: "What deserves attention next?", detail: "Use the picture to decide what needs action, ownership, investigation, or no change." },
] as const;

const nemoQuestions = [
  { id: "owner-dependence", question: "What still depends on me?", response: "Trace the work, decisions, and handoffs that keep making you the default point of return." },
  { id: "process-break", question: "Where does this process really break?", response: "Follow the relationship between the customer moment, the responsible role, the system, and the next decision." },
  { id: "unseen-change", question: "What changed that the right people never saw?", response: "Follow the change through the people, systems, and handoffs that should have carried it forward." },
] as const;

type ProofStep = GoldenProofFrame;

function ProofFrame({ step, onOpenImage }: { step: ProofStep; onOpenImage: (src: string) => void }) {
  const media = step.media;
  const frame = (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70">
      <div className="relative overflow-hidden" style={{ aspectRatio: media.aspectRatio }}>
        <picture>
          {media.mobile ? <source media="(max-width: 767px)" srcSet={media.mobile} /> : null}
          <img src={media.desktop} alt={media.alt} width={media.intrinsicWidth} height={media.intrinsicHeight} loading={media.loading} className="h-full w-full object-cover transition duration-500" />
        </picture>
        {media.caption ? <p className="absolute bottom-4 left-4 max-w-[75%] rounded-lg bg-slate-950/80 px-3 py-2 text-xs text-slate-200 backdrop-blur">{media.caption}</p> : null}
      </div>
    </div>
  );

  if (!media.inspectable) return frame;

  return (
    <button type="button" onClick={() => onOpenImage(media.desktop)} className="group block w-full text-left" aria-label={`Open larger ${step.navLabel.toLowerCase()} proof frame`}>
      <div className="transition group-hover:scale-[1.01]">{frame}</div>
      <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200"><Eye size={14} aria-hidden="true" /> Inspect frame</span>
    </button>
  );
}

export default function AlternateHomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeProofStep, setActiveProofStep] = useState(0);
  const [proofPlaying, setProofPlaying] = useState(false);
  const [proofProgressSeconds, setProofProgressSeconds] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [selectedView, setSelectedView] = useState(businessViews[0].id);
  const [selectedQuestion, setSelectedQuestion] = useState(nemoQuestions[0].id);
  const proofElapsedRef = useRef(0);

  usePageMeta({ title: "StrategicAI — See How Your Business Actually Works", description: "See how people, work, systems, decisions, and dependencies actually fit together—then turn that picture into Operational Intelligence." });

  useEffect(() => {
    trackEvent("homepage_view", { page: "/", surface_version: "homepage-humanized-v1" });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener?.("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener?.("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!proofPlaying || reducedMotion) return;
    const timer = window.setInterval(() => {
      const duration = proofSteps[activeProofStep].durationSeconds;
      const nextElapsed = Math.min(proofElapsedRef.current + 0.25, duration);
      proofElapsedRef.current = nextElapsed;
      setProofProgressSeconds(nextElapsed);
      if (nextElapsed < duration) return;

      if (activeProofStep >= proofSteps.length - 1) {
        setProofPlaying(false);
        trackEvent("homepage_proof_complete", { proof_thread: "golden-proof-thread", completed_steps: proofSteps.length });
        return;
      }

      const nextStep = activeProofStep + 1;
      proofElapsedRef.current = 0;
      setProofProgressSeconds(0);
      setActiveProofStep(nextStep);
      trackEvent("homepage_proof_step", { proof_step: proofSteps[nextStep].id, step_index: nextStep, auto_advanced: true });
    }, 250);
    return () => window.clearInterval(timer);
  }, [activeProofStep, proofPlaying, reducedMotion]);

  const activeProof = proofSteps[activeProofStep];
  const activeView = useMemo(() => businessViews.find((view) => view.id === selectedView) ?? businessViews[0], [selectedView]);
  const activeQuestion = useMemo(() => nemoQuestions.find((item) => item.id === selectedQuestion) ?? nemoQuestions[0], [selectedQuestion]);

  function startProof() {
    setActiveProofStep(0);
    proofElapsedRef.current = 0;
    setProofProgressSeconds(0);
    setProofPlaying(!reducedMotion);
    trackEvent("homepage_proof_start", { proof_thread: "golden-proof-thread", surface_version: "homepage-humanized-v1" });
  }

  function toggleProof() {
    if (proofPlaying) {
      setProofPlaying(false);
      trackEvent("homepage_proof_pause", { proof_step: activeProof.id, elapsed_step_count: activeProofStep + 1 });
      return;
    }
    if (activeProofStep >= proofSteps.length - 1) {
      setActiveProofStep(0);
      proofElapsedRef.current = 0;
      setProofProgressSeconds(0);
    }
    setProofPlaying(!reducedMotion);
    trackEvent("homepage_proof_start", { proof_thread: "golden-proof-thread", resumed_from: activeProof.id });
  }

  function selectProofStep(index: number) {
    setActiveProofStep(index);
    proofElapsedRef.current = 0;
    setProofProgressSeconds(0);
    setProofPlaying(false);
    trackEvent("homepage_proof_step", { proof_step: proofSteps[index].id, step_index: index, auto_advanced: false });
  }

  function resetProof() {
    setActiveProofStep(0);
    proofElapsedRef.current = 0;
    setProofProgressSeconds(0);
    setProofPlaying(false);
    trackEvent("homepage_proof_step", { proof_step: proofSteps[0].id, step_index: 0, auto_advanced: false, reset: true });
  }

  function handleFounding100Click(source: string) {
    trackEvent("founding100_cta_click", { source, destination: "/founding100/offer", commercial_branch_state: "offer_surface_controls_checkout_state" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400/20">
      <main>
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div className="absolute inset-0"><img src="/images/brain-bg.jpg" alt="" className="h-full w-full object-cover opacity-10" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_40%),linear-gradient(180deg,rgba(2,6,23,0.35),#020617_80%)]" /></div>
          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">How the business actually works</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Everyone has a piece.<br />You’re still the one putting it together.</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">The answer lives across your people, systems, files, meetings, and memory. StrategicAI turns those pieces into a picture of how the business actually works—one you can inspect, correct, and use.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"><a href="#proof-thread" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">See the proof <ArrowRight size={17} className="ml-2" aria-hidden="true" /></a><Link to="/founding100/offer" onClick={() => handleFounding100Click("homepage-hero")} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">Explore Founding 100</Link></div>
              <p className="mt-6 text-sm font-medium text-slate-400">Start with one real problem. Follow it through the business.</p>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="operating-problem-title">
          <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">You know these moments</p><h2 id="operating-problem-title" className="text-3xl font-semibold text-white md:text-5xl">The business is moving. You’re still reconstructing the story.</h2><p className="mt-6 text-lg leading-8 text-slate-400">A customer asks what happened. Sales has one answer. Operations has another. A system has part of the truth. Someone remembers the exception.</p></div>
          <div className="grid gap-6 md:grid-cols-2">{[["Three people need you to answer:", "“What happens next?”"], ["Sales says it was handed off.", "Operations says they never got what they needed."], ["The problem was visible Tuesday.", "You found out Friday."], ["One person knows why the workaround exists.", "Nobody wrote it down."]].map(([lead, detail]) => <div key={lead} className={`${cardClass} flex items-start gap-4`}><CheckCircle2 size={21} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /><p className="text-lg leading-8 text-slate-300"><span className="block text-white">{lead}</span><span className="block">{detail}</span></p></div>)}</div>
          <p className="mt-8 text-xl font-medium text-cyan-200">These aren’t random annoyances. They’re clues about how the business actually works.</p>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="reframe-title"><div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div className={cardClass}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The Reframe</p><h2 id="reframe-title" className="text-3xl font-semibold text-white md:text-5xl">Your business already has an operating model. It just may not be visible.</h2><p className="mt-6 text-lg leading-8 text-slate-300">The real business lives in the relationships between people, work, systems, decisions, exceptions, and history. Before you add another tool—or automate another step—you need to see that picture clearly enough to challenge it.</p></div><div className="flex flex-col justify-center rounded-3xl border border-amber-200/25 bg-[linear-gradient(145deg,rgba(70,55,30,0.4),rgba(15,23,42,0.86))] p-8 md:p-10"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/80">Automation Without Understanding</p><p className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">Start with the picture. Then decide what deserves action.</p><div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">{["clarify ownership", "fix a handoff", "investigate", "automate when the picture supports it", "leave it alone"].map((item) => <span key={item} className="rounded-full border border-slate-700 bg-slate-950/30 px-3 py-2">{item}</span>)}</div></div></div></section>

        <section id="proof-thread" className={`${sectionClass} scroll-mt-20`} aria-labelledby="proof-thread-title" data-golden-thread-status={goldenProofThread.status}><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">{goldenProofThread.publicLabel}</p><h2 id="proof-thread-title" className="text-3xl font-semibold text-white md:text-5xl">{goldenProofThread.storyTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-400">{goldenProofThread.storyIntro}</p></div><div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]"><div className="space-y-4"><div className="flex items-center justify-between border-b border-slate-800 pb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><span>Golden Proof Thread</span><span>{proofSteps.reduce((total, step) => total + step.durationSeconds, 0)} seconds</span></div><div className="flex flex-wrap gap-2 text-xs text-slate-400"><span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-2">four moves</span><span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-2">context before action</span><span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-2">human correction stays visible</span></div>{proofSteps.map((step, index) => { const active = index === activeProofStep; return <button type="button" key={step.id} onClick={() => selectProofStep(index)} aria-pressed={active} className={`w-full rounded-2xl border p-5 text-left transition ${active ? "border-cyan-400/40 bg-cyan-400/10" : "border-slate-800 bg-slate-900/35 hover:border-slate-700"}`}><div className="flex items-center gap-4"><span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">0{index + 1}</span><span className="text-lg font-semibold text-white">{step.navLabel}</span></div><p className="mt-3 text-sm leading-6 text-slate-400">{step.eyebrow}</p></button>; })}<div className="mt-2" role="progressbar" aria-label="Golden Proof Thread progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(((activeProofStep + proofProgressSeconds / activeProof.durationSeconds) / proofSteps.length) * 100)}><div className="h-1.5 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-cyan-300 transition-[width] duration-200" style={{ width: `${((activeProofStep + proofProgressSeconds / activeProof.durationSeconds) / proofSteps.length) * 100}%` }} /></div><p className="mt-2 text-xs text-slate-500">{proofPlaying ? `Playing ${activeProof.navLabel.toLowerCase()}` : reducedMotion ? "Reduced motion is on. Select a step to inspect it." : "Choose a step, or play the full walkthrough."}</p></div><div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap"><button type="button" onClick={startProof} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"><Play size={15} className="mr-2" aria-hidden="true" /> Play the 45-second walkthrough</button><button type="button" onClick={toggleProof} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">{proofPlaying ? <Pause size={15} className="mr-2" aria-hidden="true" /> : <Play size={15} className="mr-2" aria-hidden="true" />}{proofPlaying ? "Pause walkthrough" : "Start at this step"}</button><button type="button" onClick={resetProof} className="inline-flex items-center justify-center rounded-full border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-slate-900">Reset</button></div></div><div aria-live="polite"><ProofFrame step={activeProof} onOpenImage={(src) => { setSelectedImage(src); trackEvent("homepage_proof_open", { proof_step: activeProof.id, asset: src }); }} /><div className="mt-6"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">{activeProof.navLabel}</p><h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{activeProof.headline}</h3><p className="mt-4 text-base leading-7 text-slate-400">{activeProof.body}</p>{activeProof.correction ? <div className="mt-6 grid gap-3 sm:grid-cols-3" aria-label="Correction sequence"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Before</p><p className="mt-2 text-sm text-slate-300">{activeProof.correction.before ? activeProof.correction.before.alt : "The current picture"}</p></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Human correction</p><p className="mt-2 text-sm text-slate-300">{activeProof.correction.humanCorrection}</p></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">After</p><p className="mt-2 text-sm text-slate-300">{activeProof.correction.after ? activeProof.correction.after.alt : "The corrected picture"}</p></div></div> : null}</div></div></div><p className="mt-10 border-l-2 border-cyan-300/50 pl-5 text-lg font-medium leading-8 text-slate-300">The value is not a prettier dashboard. It is a more useful place to begin.</p></section>

        <section className={sectionClass} aria-labelledby="category-title"><div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">What this becomes</p><h2 id="category-title" className="text-3xl font-semibold text-white md:text-5xl">When the business can explain itself, you have Operational Intelligence.</h2><p className="mt-6 text-lg leading-8 text-slate-300">StrategicAI builds Operational Intelligence from your Operational Reality: the people, work, systems, decisions, dependencies, exceptions, and different perspectives that make the business actually run.</p></div><div className="space-y-3">{[["01", "Operational Reality", "How your business actually works—including where people see it differently."], ["02", "Operational Intelligence", "Useful understanding formed from that picture."], ["03", "Business Views", "The part of the business you need to inspect right now."], ["04", "Nemo", "A way to ask questions from company context instead of a blank prompt."], ["05", "Capabilities", "Action when the picture supports it."]].map(([number, title, body]) => <div key={number} className="grid grid-cols-[48px_1fr] gap-4 border-b border-slate-800 py-5 first:border-t"><span className="text-sm font-semibold tracking-[0.18em] text-cyan-300/70">{number}</span><div><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{body}</p></div></div>)}</div></div><p className="mt-10 text-xl font-medium text-cyan-200">The order matters: evidence before recommendations, scope before automation.</p></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="business-views-title"><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Start with the question</p><h2 id="business-views-title" className="text-3xl font-semibold text-white md:text-5xl">What are you trying to understand right now?</h2><p className="mt-6 text-lg leading-8 text-slate-400">Business Views don’t force every company into the same report. They make the part of the business behind a real owner question visible.</p></div><div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]"><div className="space-y-3">{businessViews.map((view) => { const active = view.id === selectedView; return <button type="button" key={view.id} onClick={() => { setSelectedView(view.id); trackEvent("homepage_business_view_select", { view_id: view.id }); }} aria-pressed={active} className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${active ? "border-cyan-400/40 bg-cyan-400/10" : "border-slate-800 bg-slate-900/35 hover:border-slate-700"}`}><span className="text-base font-semibold text-white">{view.label}</span><ArrowRight size={16} className={active ? "text-cyan-200" : "text-slate-600"} aria-hidden="true" /></button>; })}</div><div className={`${cardClass} min-h-[280px]`}><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">Selected Business View</p><h3 className="mt-5 text-3xl font-semibold text-white">{activeView.label}</h3><p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{activeView.detail}</p><div className="mt-10 flex items-center gap-3 text-sm text-slate-400"><Check size={16} className="text-cyan-300" aria-hidden="true" /> The important questions stay consistent. The exact views adapt to what the business contains.</div></div></div></section>

        <section className={sectionClass} aria-labelledby="nemo-title"><div className="grid items-stretch gap-8 lg:grid-cols-[1.02fr_0.98fr]"><div className={cardClass}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Now ask the question</p><h2 id="nemo-title" className="text-3xl font-semibold text-white md:text-5xl">Bring Nemo the question you’ve been carrying.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Once StrategicAI has built enough company context, you don’t have to explain the business from scratch before every question.</p><p className="mt-6 text-lg leading-8 text-slate-300">Start with the thing bothering you and follow the trail.</p><p className="mt-6 text-base leading-7 text-slate-400">Nemo does not guarantee an answer. It is meant to help you reason from the company context that is actually available.</p></div><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">Example owner questions</p><div className="mt-5 space-y-3">{nemoQuestions.map((item) => { const active = selectedQuestion === item.id; return <button type="button" key={item.id} onClick={() => { setSelectedQuestion(item.id); trackEvent("homepage_nemo_question_select", { question_id: item.id }); }} aria-pressed={active} className={`w-full rounded-2xl border px-4 py-4 text-left text-sm transition ${active ? "border-cyan-300/35 bg-cyan-300/10 text-white" : "border-slate-700/70 bg-slate-950/30 text-slate-300 hover:border-slate-600"}`}>“{item.question}”</button>; })}</div><div className="mt-6 border-t border-slate-700/70 pt-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">What the context lets you inspect</p><p className="mt-3 text-base leading-7 text-slate-200">{activeQuestion.response}</p></div></div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="founder-title"><div className="grid items-start gap-10 rounded-3xl border border-slate-800 bg-slate-900/35 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Why I’m building this</p><h2 id="founder-title" className="text-3xl font-semibold text-white md:text-5xl">I kept seeing the same thing inside real businesses.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Everybody had a piece of the answer.</p><p className="mt-3 text-lg leading-8 text-slate-300">The owner was still the one putting it together.</p><p className="mt-6 text-lg leading-8 text-slate-300">Then AI made it incredibly easy to automate pieces of a company—and I became convinced we were starting in the middle.</p><p className="mt-6 text-lg leading-8 text-slate-300">StrategicAI is my attempt to make how the business actually works visible before we decide what software, people, process, or automation should do next.</p></div><div data-founder-media-slot="optional-authentic-founder-media" className="flex min-h-[180px] flex-col justify-end border-l border-cyan-300/30 pl-6 md:min-h-full"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">A note from the founder</p><p className="mt-5 text-2xl font-medium leading-tight text-white">The company you’re running is worth understanding before anyone tries to change it.</p><p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">— StrategicAI founder</p>{/* H01: optional authentic founder portrait or 30–60 second founder video. Do not add stock or generated human media. */}</div></div></section>

        <section className="border-t border-slate-800/70 bg-slate-900/35" aria-labelledby="founding100-title"><div className="mx-auto max-w-6xl px-6 py-24"><div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Founding 100</p><h2 id="founding100-title" className="text-4xl font-semibold text-white md:text-6xl">If everyone has a piece and you’re still the one putting it together, start here.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">We’re opening StrategicAI to the first 100 businesses at $299. Bring us the real business: messy handoffs, unwritten rules, conflicting perspectives, hard questions. We’ll build the picture with you, you correct what we get wrong, and during the authorized Founding 100 experience you work with Nemo from the context you’ve built.</p></div><div className="rounded-3xl border border-cyan-300/25 bg-slate-950/60 p-7"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">The exchange</p><ul className="mt-6 space-y-4 text-base leading-7 text-slate-300"><li className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> Real company context</li><li className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> Honest correction and feedback</li><li className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> Hard operating questions</li><li className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /> A serious body of intelligence to inspect</li></ul><div className="mt-8 flex flex-col gap-3"><Link to="/founding100/offer" onClick={() => handleFounding100Click("homepage_founding100")} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Explore Founding 100 <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link><Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">See how it works</Link></div><p className="mt-5 text-xs leading-5 text-slate-500">Review the current offer surface for scope and checkout state. The homepage does not promise a fixed view bundle, verified 90-day continuity, or an outcome.</p></div></div></div></section>
      </main>
      <TrustAgentShell enabled={true} mode="homepage" />
      <ImageViewer isOpen={!!selectedImage} src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
