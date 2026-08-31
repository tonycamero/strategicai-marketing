import { useEffect } from "react";
import { ArrowRight, Check, LockKeyhole, X } from "lucide-react";
import { Founding100FunnelChrome } from "../../components/founding100/Founding100FunnelChrome";
import { useFounding100Attribution } from "../../hooks/useFounding100Attribution";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import { buildFounding100CheckoutUrl, founding100FunnelConfig, type Founding100Attribution } from "../../lib/founding100Funnel";
import "./founding100-funnel.css";

const recognitionMoments = [
  "Three people ask you “what happens next?” before lunch.",
  "You leave for two days and the phone comes with you.",
  "Sales says they handed it off. Operations says they never got what they needed.",
  "You have six systems and still call three people for the answer.",
  "Someone knew about the problem Tuesday. You found out Friday.",
  "The same issue keeps coming back with a different name.",
] as const;

const processSteps = [
  ["01", "Bring the real business", "People, work, systems, rules, exceptions, hard examples, and the questions you are already carrying."],
  ["02", "See the first picture", "StrategicAI shows back what it understands—including what appears unclear, disputed, or missing."],
  ["03", "Correct it", "Say: “No. That’s not how it works.” That’s useful."],
  ["04", "Use it", "Business Views make parts of the picture easier to inspect. With Ask Nemo, follow real questions from the context you’ve built."],
] as const;

const coreQuestions = [
  "How does work actually move?",
  "Who owns what—and what still depends on one person?",
  "Where does information live, move, or go missing?",
  "Where do handoffs, decisions, or priorities break down?",
  "What is still unknown, disputed, or worth attention next?",
] as const;

const adaptiveViews = [
  "Handoff and dependency views",
  "Owner-dependence and operating-fragility views",
  "Decision, priority, or opportunity views",
  "Automation-readiness views",
  "Function-specific views supported by what we discover",
] as const;

const forOwners = [
  "You know important context is spread across people and systems.",
  "You’re willing to tell us when the picture is wrong.",
  "You have real operating questions you want to investigate.",
  "You want a useful picture before committing to software, hiring, process change, or automation.",
] as const;

const notFor = [
  "You want a generic chatbot subscription.",
  "You want guaranteed automation or implementation.",
  "You expect AI to know the company without participation.",
  "You want a fixed template regardless of what the business actually contains.",
  "You are unwilling to challenge or correct the picture.",
] as const;

const faqs = [
  ["What do I actually receive?", "You build an initial body of Operational Intelligence about your company: a working picture, the Business Views supported by what we discover, explicit unknowns and corrections, and the approved 90-day Ask Nemo experience. The exact views adapt to your business."],
  ["Is this a chatbot subscription?", "No. Ask Nemo is useful because of the company context behind the conversation. The main work is building the understanding Nemo can work from."],
  ["How much work is this for me?", "You need to tell the truth about how the business works and correct what we get wrong. You should not have to create a perfect process manual before we can begin."],
  ["We don’t have good documentation. Is that a problem?", "No. Documents are one source. People, systems, examples, decisions, workarounds, and exceptions matter too. If something is missing, the system should show that it is missing rather than make it up."],
  ["What if StrategicAI gets something wrong?", "Tell it. “No. That’s not how it works.” That is part of the process. The goal is not a confident fiction. The goal is a picture you can inspect and improve."],
  ["Do I get every possible Business View?", "No. The important questions stay consistent. The views adapt to what your business actually contains and what the information supports."],
  ["Does this include custom software or integrations?", "Not automatically. Founding 100 begins with understanding the business. Custom implementation or specialist work requires separate scope and approval."],
  ["Why $299?", "Because this is the first-100 learning cohort. We’re favoring real-company participation, correction, and feedback over mature pricing. The favorable economics are intentional."],
  ["Why join now instead of waiting?", "Waiting may give you a more mature product and more accumulated proof. Joining now gives you Founding 100 economics and an opportunity to shape the experience through real use and correction. Neither choice is right for everyone."],
  ["What happens after 90 days?", "You review what the portfolio and Ask Nemo experience helped you understand, then decide whether to continue under the available product or engagement path."],
] as const;

type CheckoutActionProps = { attribution: Founding100Attribution; checkoutUrl?: string; footer?: boolean };

function CheckoutAction({ attribution, checkoutUrl, footer = false }: CheckoutActionProps) {
  if (!checkoutUrl) {
    return <div className={footer ? "f100-checkout f100-checkout-footer" : "f100-checkout"} data-checkout-state="not-configured"><button className="f100-button f100-button-purchase" type="button" disabled><LockKeyhole size={17} aria-hidden="true" /> Join Founding 100</button><p>Checkout is not ready for release.</p></div>;
  }

  return <div className={footer ? "f100-checkout f100-checkout-footer" : "f100-checkout"} data-checkout-state="configured"><a className="f100-button f100-button-purchase" href={checkoutUrl} onClick={() => trackEvent("checkout_click", { ...attribution, route: "/founding100/offer", checkout_provider: "stripe" })}>Join Founding 100 <ArrowRight size={17} aria-hidden="true" /></a><p>Secure checkout through Stripe.</p></div>;
}

export default function Founding100Offer() {
  const attribution = useFounding100Attribution();
  const checkoutUrl = founding100FunnelConfig.checkoutUrl ? buildFounding100CheckoutUrl(founding100FunnelConfig.checkoutUrl, attribution) : undefined;

  usePageMeta({ title: "StrategicAI Founding 100 — Build the Picture of Your Business", description: "Join the first 100 businesses building a working picture of how their companies actually work, then use that context with Nemo for the approved 90-day experience.", path: "/founding100/offer" });

  useEffect(() => {
    trackEvent("offer_view", { ...attribution, route: "/founding100/offer", checkout_configured: Boolean(checkoutUrl) });
  }, [attribution, checkoutUrl]);

  return <Founding100FunnelChrome context="offer"><main className="f100-offer-main">
    <section className="f100-offer-hero" aria-labelledby="f100-offer-title"><div className="f100-offer-hero-copy"><p className="f100-kicker">Founding 100 · First 100 businesses</p><h1 id="f100-offer-title">What becomes possible when the full picture no longer lives in one head?</h1><p>StrategicAI builds a working understanding of how your business actually works—one you can see through Business Views, inspect, and correct.</p><p>Then you get the authorized 90-day experience to Ask Nemo the questions you actually care about from the company context you’ve built.</p><div className="f100-price"><strong>$299</strong><span>one time</span></div><CheckoutAction attribution={attribution} checkoutUrl={checkoutUrl} /></div><div className="f100-offer-brain" aria-hidden="true"><img src="/images/brain-bg.jpg" alt="" /></div></section>

    <section className="f100-offer-section f100-cohort-block" aria-labelledby="cohort-title"><div><p className="f100-kicker">Why the first 100 are $299</p><h2 id="cohort-title">We want real businesses using this—not just watching demos.</h2></div><div><p>Bring us the real mess.</p><p>Challenge the picture.</p><p>Correct it.</p><p>Ask hard questions.</p><p>Tell us where the experience works and where it doesn’t.</p><p>In exchange, you get Founding 100 economics while helping shape the experience through real use.</p></div></section>

    <section className="f100-offer-section f100-recognition" aria-labelledby="recognition-title"><div className="f100-offer-section-heading"><div><p className="f100-kicker">This is for you if…</p><h2 id="recognition-title">You know at least one of these moments.</h2></div><p>Before we talk about deliverables, start with the week you are actually having.</p></div><div className="f100-recognition-grid">{recognitionMoments.map((moment, index) => <article key={moment}><span>0{index + 1}</span><p>{moment}</p></article>)}</div></section>

    <section className="f100-offer-section f100-process" aria-labelledby="process-title"><div className="f100-offer-section-heading"><div><p className="f100-kicker">What we do together</p><h2 id="process-title">Bring the real business. We’ll build the picture with you.</h2></div><p>You do not need a perfect process manual. Bring the people, examples, workarounds, and questions that make the business real.</p></div><ol className="f100-process-grid">{processSteps.map(([number, title, body]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></section>

    <section className="f100-offer-section f100-offer-value" aria-labelledby="f100-value-title"><div><p className="f100-kicker">The value</p><h2 id="f100-value-title">A serious body of intelligence about your company. Not AI access.</h2><p>The point is not to give you another place to type prompts. The point is to build enough useful understanding of your company that you can see what is happening, challenge what is wrong, and start important questions with context already on the table.</p></div><div className="f100-value-rule" aria-hidden="true" /><p className="f100-value-consequence">Business Views make that understanding visible. Ask Nemo gives you somewhere real to start.</p></section>

    <section className="f100-offer-section f100-views-contract" aria-labelledby="f100-views-contract-title"><div className="f100-offer-section-heading"><div><p className="f100-kicker">The questions stay consistent</p><h2 id="f100-views-contract-title">The views adapt to the business we find.</h2></div><p>Every Founding 100 company should become better able to answer questions like these. The views adapt to the relationships and conditions the information supports.</p></div><div className="f100-views-columns"><div><h3>The questions</h3><p>Every portfolio works these essential questions:</p><ul>{coreQuestions.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul></div><div><h3>Adaptive Business Views</h3><p>Useful views appear where the business gives us something real to inspect:</p><ul>{adaptiveViews.map((item) => <li key={item}><ArrowRight size={16} aria-hidden="true" />{item}</li>)}</ul></div></div></section>

    <section className="f100-offer-section f100-nemo" aria-labelledby="f100-nemo-title"><div className="f100-nemo-mark" aria-hidden="true">N</div><div><p className="f100-kicker">90 days to Ask Nemo the questions you actually care about</p><h2 id="f100-nemo-title">What would you Ask Nemo first?</h2><p>For the authorized Founding 100 term, Ask Nemo the real questions you are facing as an owner.</p><p className="f100-muted-copy">How much better is AI when you don’t spend half the conversation teaching it what world it is operating inside? Ask Nemo.</p><div className="f100-question-list"><span>What still depends on me?</span><span>Where does this process really break?</span><span>Do we actually need another person?</span><span>What should we understand before we automate?</span><span>What would break first if we grew?</span><span>What changed that nobody connected?</span></div><p className="f100-muted-copy">Ask Nemo helps you reason from company context. It does not replace accountable leadership or professional advice.</p></div></section>

    <section className="f100-fit" aria-label="Offer fit"><div><h2>This is for an owner who wants to understand before choosing the fix.</h2><ul>{forOwners.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul></div><div><h2>This is not for someone buying a shortcut.</h2><ul>{notFor.map((item) => <li key={item}><X size={16} aria-hidden="true" />{item}</li>)}</ul></div></section>

        <section className="f100-boundaries-faq"><div className="f100-scope" aria-labelledby="f100-scope-title"><p className="f100-kicker">Scope stays explicit</p><h2 id="f100-scope-title">Understanding comes before implementation.</h2><p>Founding 100 begins with understanding the business. Custom implementation or specialist work requires separate scope and approval.</p><ul><li>Correction is part of building the intelligence.</li><li>Unknowns, disagreement, and missing information remain visible.</li><li>The approved 90 days do not guarantee implementation or an outcome.</li><li>Continuation after 90 days is a separate decision.</li></ul></div><div className="f100-faq" aria-labelledby="f100-faq-title"><h2 id="f100-faq-title">Frequently asked questions</h2>{faqs.map(([question, answer]) => <details key={question} onToggle={(event) => { if (event.currentTarget.open) trackEvent("founding100_offer_faq_opened", { ...attribution, question }); }}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

    <section className="f100-offer-close" aria-labelledby="f100-close-title"><div><h2 id="f100-close-title">Understand your business. Then decide what deserves action.</h2><p>StrategicAI Founding 100 · $299 one time</p></div><CheckoutAction attribution={attribution} checkoutUrl={checkoutUrl} footer /></section>
    <aside className="f100-release-boundary" aria-label="Release dependencies"><LockKeyhole size={18} aria-hidden="true" /><p>Checkout cannot launch until the approved Stripe destination, Terms, Privacy, and post-payment verification boundary are ready. Formation remains a separate product handoff.</p></aside>
  </main></Founding100FunnelChrome>;
}
