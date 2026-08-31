import { useEffect } from "react";
import { ArrowRight, Check, LockKeyhole, X } from "lucide-react";
import { Founding100FunnelChrome } from "../../components/founding100/Founding100FunnelChrome";
import { useFounding100Attribution } from "../../hooks/useFounding100Attribution";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import {
  buildFounding100CheckoutUrl,
  founding100FunnelConfig,
  type Founding100Attribution,
} from "../../lib/founding100Funnel";
import "./founding100-funnel.css";

const hierarchy = [
  ["01", "How the business actually works", "People, work, systems, decisions, handoffs, exceptions, and unknowns."],
  ["02", "Operational Reality", "A correctable picture built from the company’s evidence and perspectives."],
  ["03", "Operational Intelligence", "Connected understanding that supports better questions and decisions."],
  ["04", "Business Views", "The useful, inspectable ways that intelligence becomes visible."],
  ["05", "Nemo", "A thinking partner working from the same company context."],
  ["06", "Capabilities", "Automation or other action only when the evidence warrants it."],
] as const;

const coreQuestions = [
  "How does the business actually work?",
  "Who owns what, and where does work depend on one person?",
  "Where does information live, move, or go missing?",
  "Where do handoffs, decisions, or priorities break down?",
  "What is still unknown, disputed, or worth attention next?",
];

const adaptiveViews = [
  "Handoff and dependency views",
  "Owner-dependence and operating-fragility views",
  "Decision, priority, or opportunity views",
  "Automation-readiness views",
  "Function-specific views supported by what we discover",
];

const forOwners = [
  "Want a clearer picture before choosing a next step",
  "Have knowledge spread across people, systems, and files",
  "Are willing to correct what StrategicAI gets wrong",
  "Have real operating questions to bring during the 90 days",
];

const notFor = [
  "A generic chatbot subscription",
  "Guaranteed automation or implementation",
  "Custom software or integrations included by default",
  "Professional legal, accounting, medical, or regulated advice",
];

const faqs = [
  ["What do I receive?", "A Business Intelligence Portfolio built around your company and the approved 90-day Nemo experience. The core questions stay consistent; the exact Business Views depend on what we discover."],
  ["Is this a chatbot subscription?", "No. StrategicAI first builds an understanding of the business. Nemo is how you work with that understanding."],
  ["Do I get every possible Business View?", "No. Additional views are adaptive. StrategicAI should produce the views the evidence supports, not pad the portfolio with a fixed template."],
  ["What if StrategicAI gets something wrong?", "Say so. “No, that’s not how it works” is useful information and helps correct the picture."],
  ["Does this include custom software or integrations?", "Not automatically. Those require separate scope and approval."],
  ["What happens after 90 days?", "You review what the portfolio and Nemo experience helped you understand, then decide whether to continue under the available product or engagement path."],
] as const;

type CheckoutActionProps = {
  attribution: Founding100Attribution;
  checkoutUrl?: string;
  footer?: boolean;
};

function CheckoutAction({ attribution, checkoutUrl, footer = false }: CheckoutActionProps) {
  if (!checkoutUrl) {
    return (
      <div className={footer ? "f100-checkout f100-checkout-footer" : "f100-checkout"} data-checkout-state="not-configured">
        <button className="f100-button f100-button-purchase" type="button" disabled>
          <LockKeyhole size={17} aria-hidden="true" /> Buy Founding 100
        </button>
        <p>Checkout is not ready for release.</p>
      </div>
    );
  }

  return (
    <div className={footer ? "f100-checkout f100-checkout-footer" : "f100-checkout"} data-checkout-state="configured">
      <a
        className="f100-button f100-button-purchase"
        href={checkoutUrl}
        onClick={() => trackEvent("checkout_click", { ...attribution, route: "/founding100/offer", checkout_provider: "stripe" })}
      >
        Buy Founding 100 <ArrowRight size={17} aria-hidden="true" />
      </a>
      <p>Secure checkout through Stripe.</p>
    </div>
  );
}

export default function Founding100Offer() {
  const attribution = useFounding100Attribution();
  const checkoutUrl = founding100FunnelConfig.checkoutUrl
    ? buildFounding100CheckoutUrl(founding100FunnelConfig.checkoutUrl, attribution)
    : undefined;

  usePageMeta({
    title: "StrategicAI Founding 100 | Build Operational Intelligence",
    description: "Build a serious body of Operational Intelligence about your company, make it visible through Business Views, and work with Nemo from that context for 90 days.",
    path: "/founding100/offer",
  });

  useEffect(() => {
    trackEvent("offer_view", {
      ...attribution,
      route: "/founding100/offer",
      checkout_configured: Boolean(checkoutUrl),
    });
  }, [attribution, checkoutUrl]);

  return (
    <Founding100FunnelChrome context="offer">
      <main className="f100-offer-main">
        <section className="f100-offer-hero" aria-labelledby="f100-offer-title">
          <div className="f100-offer-hero-copy">
            <h1 id="f100-offer-title">Build intelligence about your business before you automate it.</h1>
            <p>
              StrategicAI begins with how your business actually works. That Operational Reality becomes Operational Intelligence you can inspect through Business Views—and reason from with Nemo.
            </p>
            <div className="f100-price"><strong>$299</strong><span>one time</span></div>
            <CheckoutAction attribution={attribution} checkoutUrl={checkoutUrl} />
            <p className="f100-cohort-rationale">The first 100 businesses are intentionally joining at this price because we want real companies using this—not just watching demos. Bring your context, challenge the picture, correct it, ask hard questions, and tell us where the experience works and where it does not.</p>
          </div>
          <div className="f100-offer-brain" aria-hidden="true">
            <img src="/images/brain-bg.jpg" alt="" />
          </div>
        </section>

        <section className="f100-hierarchy" aria-labelledby="f100-hierarchy-title">
          <h2 id="f100-hierarchy-title">From the operation to intelligence</h2>
          <ol>
            {hierarchy.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="f100-offer-section f100-offer-value" aria-labelledby="f100-value-title">
          <div>
            <h2 id="f100-value-title">A serious body of intelligence. Not AI access.</h2>
            <p>
              You are building a useful, correctable body of work about the company—how it operates, where it is under pressure, what remains unclear, and what deserves attention.
            </p>
          </div>
          <div className="f100-value-rule" aria-hidden="true" />
          <p className="f100-value-consequence">
            Business Views make that intelligence visible. Nemo gives you a way to reason from it without reconstructing the company from zero every time.
          </p>
        </section>

        <section className="f100-offer-section f100-views-contract" aria-labelledby="f100-views-contract-title">
          <div className="f100-offer-section-heading">
            <h2 id="f100-views-contract-title">Core questions. Adaptive Business Views.</h2>
            <p>The starting questions stay consistent. The exact views depend on what StrategicAI discovers about your business.</p>
          </div>
          <div className="f100-views-columns">
            <div>
              <h3>Guaranteed core</h3>
              <p>Every Founding 100 portfolio works these essential questions:</p>
              <ul>{coreQuestions.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
            </div>
            <div>
              <h3>Adaptive views</h3>
              <p>Additional views appear only where the company’s evidence supports them:</p>
              <ul>{adaptiveViews.map((item) => <li key={item}><ArrowRight size={16} aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="f100-offer-section f100-nemo" aria-labelledby="f100-nemo-title">
          <div className="f100-nemo-mark" aria-hidden="true">N</div>
          <div>
            <h2 id="f100-nemo-title">Then you get 90 days with Nemo.</h2>
            <p>Bring the real questions you are facing as an owner: hiring, growth, customers, bottlenecks, systems, priorities, decisions, and unknowns.</p>
            <p className="f100-muted-copy">Nemo works from the company context you build with StrategicAI. It is not omniscient, professionally licensed, or a replacement for accountable leadership.</p>
          </div>
        </section>

        <section className="f100-fit" aria-label="Offer fit">
          <div>
            <h2>For owners who want understanding before choosing a next step.</h2>
            <ul>{forOwners.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
          </div>
          <div>
            <h2>It is not for someone buying a shortcut.</h2>
            <ul>{notFor.map((item) => <li key={item}><X size={16} aria-hidden="true" />{item}</li>)}</ul>
          </div>
        </section>

        <section className="f100-boundaries-faq">
          <div className="f100-scope" aria-labelledby="f100-scope-title">
            <h2 id="f100-scope-title">Scope stays explicit.</h2>
            <p>Your purchase does not automatically include custom integrations, custom software, or implementation work.</p>
            <ul>
              <li>Correction is part of building the intelligence.</li>
              <li>Uncertainty, disagreement, and missing evidence remain visible.</li>
              <li>The 90 days do not guarantee implementation or an outcome.</li>
              <li>Continuation after 90 days is a separate decision.</li>
            </ul>
          </div>
          <div className="f100-faq" aria-labelledby="f100-faq-title">
            <h2 id="f100-faq-title">Frequently asked questions</h2>
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                onToggle={(event) => {
                  if (event.currentTarget.open) trackEvent("founding100_offer_faq_opened", { ...attribution, question });
                }}
              >
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="f100-offer-close" aria-labelledby="f100-close-title">
          <div>
            <h2 id="f100-close-title">Understand first. Then decide what is next.</h2>
            <p>StrategicAI Founding 100 · $299 one time</p>
          </div>
          <CheckoutAction attribution={attribution} checkoutUrl={checkoutUrl} footer />
        </section>

        <aside className="f100-release-boundary" aria-label="Release dependencies">
          <LockKeyhole size={18} aria-hidden="true" />
          <p>Checkout cannot launch until the approved Stripe destination, Terms, Privacy, and post-payment verification boundary are ready. Formation remains a separate product handoff.</p>
        </aside>
      </main>
    </Founding100FunnelChrome>
  );
}
