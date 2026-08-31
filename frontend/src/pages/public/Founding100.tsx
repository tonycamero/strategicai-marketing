import { useEffect } from "react";
import { ArrowDown, Check, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import "./founding100.css";

const SUPPORT_EMAIL = "tony@strategicai.app";

const buildingBlocks = [
  { label: "Your people", copy: "Who does what." },
  { label: "Your work", copy: "How things move." },
  { label: "Your systems", copy: "Where information lives." },
  { label: "Your pressure points", copy: "Where work waits, breaks, or keeps coming back to the owner." },
];

const businessViews = [
  "How work moves",
  "Who owns what",
  "Where information lives",
  "Where handoffs break",
  "Where work slows down",
  "What depends too heavily on the owner",
  "What still needs to be understood",
  "What deserves attention next",
];

const stages = [
  {
    number: "01",
    name: "Tell us what actually happens",
    copy: "Start with the people, work, systems, and pressure you already know.",
  },
  {
    number: "02",
    name: "We’ll show you what we heard",
    copy: "StrategicAI forms the first working picture.",
  },
  {
    number: "03",
    name: "Correct it",
    copy: "Tell us what is wrong, missing, old, or different from how the work really happens.",
  },
  {
    number: "04",
    name: "Ask Nemo better questions",
    copy: "As the picture becomes useful, Business Views and Ask Nemo give you ways to inspect and follow what matters.",
  },
];

const questions = [
  "What still depends on me?",
  "Where does this process really break?",
  "Do we actually need another person?",
  "What should we understand before we automate?",
  "What would break first if we grew?",
  "What changed that nobody connected?",
];

export default function Founding100() {
  usePageMeta({
    title: "StrategicAI Founding 100 — Build the Picture of Your Business",
    description:
      "You’re in. Bring the people, work, systems, exceptions, disagreements, and questions that make your business real.",
    path: "/founding100",
  });

  useEffect(() => {
    trackEvent("founding100_payment_arrival", {
      page: "/founding100",
      verification: "not-yet-authorized",
    });
    trackEvent("founding100_formation_status_view", {
      page: "/founding100",
      state: "fallback",
    });
  }, []);

  function handleSupportClick() {
    trackEvent("founding100_support_clicked", { source: "founding100" });
  }

  return (
    <div className="founding100-page" data-payment-verification="not-yet-authorized">
      <Navbar />
      <div className="founding100-contextbar" aria-label="Founding 100 context">
        <span>Founding 100</span>
        <span aria-hidden="true">/</span>
        <span>post-payment handoff</span>
      </div>

      <main>
        <section className="founding100-hero" aria-labelledby="founding100-title">
          <div className="founding100-hero-copy">
            <div className="founding100-eyebrow founding100-eyebrow-success">
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>Founding 100 <span aria-hidden="true">·</span> $299 one-time</span>
            </div>
            <h1 id="founding100-title">You’re in.</h1>
            <p className="founding100-hero-lede">Bring the business you actually have.</p>
            <p className="founding100-hero-body">
              Not the polished version. Not the process manual. Bring the people, work, systems, exceptions, disagreements, and questions that make the business real. Then we’ll start building the picture together.
            </p>
            <div className="founding100-principle">
              <span className="founding100-principle-line" aria-hidden="true" />
              <p><strong>StrategicAI builds the understanding.</strong> Ask Nemo is how you work with it.</p>
            </div>
          </div>

          <div className="founding100-hero-visual" aria-hidden="true">
            <div className="founding100-visual-label">A portfolio takes shape</div>
            <div className="founding100-map">
              <svg viewBox="0 0 420 300" role="presentation">
                <path d="M82 78C142 42 164 93 209 112S294 115 336 72" />
                <path d="M77 218C131 180 166 192 209 156S284 147 337 204" />
                <path d="M115 72C118 133 155 140 209 147S302 178 325 214" />
                <path d="M84 214C137 238 164 196 207 154S274 93 338 79" />
              </svg>
              <span className="founding100-node founding100-node-a"><i>People</i></span>
              <span className="founding100-node founding100-node-b"><i>Work</i></span>
              <span className="founding100-node founding100-node-c"><i>Systems</i></span>
              <span className="founding100-node founding100-node-d"><i>Decisions</i></span>
              <span className="founding100-node founding100-node-center"><span>StrategicAI</span></span>
            </div>
            <div className="founding100-visual-foot">Built from your company</div>
          </div>
        </section>

        <section className="founding100-next" aria-labelledby="next-title">
          <div className="founding100-section-heading">
            <p className="founding100-kicker">What happens now</p>
            <h2 id="next-title">Start with the business you actually have.</h2>
          </div>
          <div className="founding100-next-grid">
            <ol className="founding100-steps">
              <li>
                <span className="founding100-step-number">01</span>
                <div><h3>Tell us what actually happens.</h3><p>Start with the people, work, systems, and pressure you already know.</p></div>
              </li>
              <li>
                <span className="founding100-step-number">02</span>
                <div><h3>We’ll show you what we heard.</h3><p>StrategicAI forms the first working picture.</p></div>
              </li>
              <li>
                <span className="founding100-step-number">03</span>
                <div><h3>Correct it.</h3><p>Tell us what is wrong, missing, old, or different from how the work really happens.</p></div>
              </li>
              <li>
                <span className="founding100-step-number">04</span>
                <div><h3>Ask Nemo better questions.</h3><p>As the picture becomes useful, Business Views and Ask Nemo give you ways to inspect and follow what matters.</p></div>
              </li>
            </ol>

            <div className="founding100-status-card" aria-live="polite">
              <div className="founding100-status-topline"><span className="founding100-status-dot" /> Next step</div>
              <h3>Your next step is almost ready.</h3>
              <p>We’ll email you as soon as your StrategicAI onboarding is ready to begin.</p>
              <div className="founding100-status-note"><Mail size={16} aria-hidden="true" /> Keep an eye on your inbox.</div>
            </div>
          </div>
          <div className="founding100-scroll-cue" aria-hidden="true"><ArrowDown size={16} /> See what you’re building</div>
        </section>

        <section className="founding100-section founding100-building" aria-labelledby="building-title">
          <div className="founding100-section-heading founding100-narrow-heading">
            <p className="founding100-kicker">The picture we build together</p>
            <h2 id="building-title">Your Business Intelligence Portfolio</h2>
            <p>You are not setting up another chatbot. You are building a useful body of work about your company—something you can inspect, correct, and use when the week gets complicated.</p>
          </div>
          <div className="founding100-building-grid">
            {buildingBlocks.map((block, index) => (
              <article className="founding100-building-card" key={block.label}>
                <span className="founding100-card-index">0{index + 1}</span>
                <div className="founding100-card-mark" aria-hidden="true"><span /></div>
                <h3>{block.label}</h3>
                <p>{block.copy}</p>
              </article>
            ))}
          </div>
          <div className="founding100-portfolio-bridge">
            <div className="founding100-portfolio-layer">
              <span className="founding100-layer-label">Layer 1</span>
              <h3>The portfolio</h3>
              <p>StrategicAI shows the business back to you: how it works, where it is under pressure, what is unclear, and what appears worth attention.</p>
            </div>
            <div className="founding100-portfolio-layer founding100-portfolio-layer-accent">
              <span className="founding100-layer-label">Layer 2</span>
              <h3>90 days to Ask Nemo</h3>
              <p>Ask Nemo the real questions you are facing as an owner—hiring, growth, bottlenecks, customers, systems, priorities, and decisions.</p>
            </div>
          </div>
        </section>

        <section className="founding100-section founding100-views" aria-labelledby="views-title">
          <div className="founding100-views-copy">
            <p className="founding100-kicker">Business Views</p>
            <h2 id="views-title">We’ll show the business back to you.</h2>
            <p>As StrategicAI learns your company, it can turn that understanding into useful Business Views. The portfolio is built from your business—not a generic template.</p>
            <p className="founding100-muted">The starting questions stay consistent. The exact views depend on what we discover.</p>
          </div>
          <div className="founding100-view-list">
            {businessViews.map((view, index) => (
              <div className="founding100-view-item" key={view}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{view}</p>
                <Check size={15} aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="founding100-section founding100-days" aria-labelledby="days-title">
          <div className="founding100-section-heading">
            <p className="founding100-kicker">The 90-day experience</p>
            <h2 id="days-title">See it. Challenge it. Change it.</h2>
            <p>Ask Nemo like a flashlight inside your company.</p>
          </div>
          <div className="founding100-stage-grid">
            {stages.map((stage, index) => (
              <article className={`founding100-stage founding100-stage-${index + 1}`} key={stage.name}>
                <div className="founding100-stage-number">{stage.number}</div>
                <div className="founding100-stage-rule" aria-hidden="true" />
                <h3>{stage.name}</h3>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
          <div className="founding100-questions" aria-label="Example questions to Ask Nemo">
            {questions.map((question) => <span key={question}>“{question}”</span>)}
          </div>
        </section>

        <section className="founding100-correction" aria-labelledby="correction-title">
          <div className="founding100-correction-mark" aria-hidden="true"><Sparkles size={20} /></div>
          <div>
            <p className="founding100-kicker">A useful part of the process</p>
            <h2 id="correction-title">You are supposed to challenge it.</h2>
            <p>StrategicAI will not understand everything perfectly on day one.</p>
            <p>If you see something wrong, say so. <strong>“No, that’s not how it works” is useful information.</strong> Every correction helps build a better picture of the company.</p>
          </div>
        </section>

        <section className="founding100-founder" aria-labelledby="founder-welcome-title">
          <p className="founding100-kicker">A note from the founder</p>
          <h2 id="founder-welcome-title">One request from me: tell us when we’re wrong.</h2>
          <p>Founding 100 only works if the business you give us is the business you actually have.</p>
          <p>Don’t make it cleaner for us. Don’t agree with the picture to be polite. Challenge it.</p>
          <strong>That’s the point.</strong>
          {/* H04: optional authentic founder video explaining the first-100 exchange. Do not add stock or generated human media. */}
        </section>

        <section className="founding100-section founding100-boundary" aria-labelledby="boundary-title">
          <div className="founding100-boundary-copy">
            <p className="founding100-kicker">One important thing</p>
            <h2 id="boundary-title">Understand first. Decide second.</h2>
            <p>StrategicAI is here to help you understand the business before deciding what should be automated, changed, or built.</p>
          </div>
          <div className="founding100-boundary-note">
            <p>Your Founding 100 purchase does not automatically include:</p>
            <ul>
              <li>Custom integrations</li>
              <li>Custom software</li>
              <li>Implementation work</li>
            </ul>
          </div>
        </section>

        <section className="founding100-support" aria-labelledby="support-title">
          <p className="founding100-kicker">Need a hand?</p>
          <h2 id="support-title">Questions before you start?</h2>
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Founding%20100%20question`} onClick={handleSupportClick}>
            <Mail size={17} aria-hidden="true" />
            Contact StrategicAI support
          </a>
        </section>
      </main>

      <footer className="founding100-footer">
        <a className="founding100-wordmark" href="/" aria-label="StrategicAI home"><span>Strategic</span>AI</a>
        <p>Founding 100 · Operational Intelligence built from Operational Reality.</p>
        <a href={`mailto:${SUPPORT_EMAIL}`} onClick={handleSupportClick}>Support</a>
      </footer>
    </div>
  );
}
