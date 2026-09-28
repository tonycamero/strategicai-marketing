import { ArrowRight, LockKeyhole } from "lucide-react";
import { Founding100FunnelChrome } from "../../components/founding100/Founding100FunnelChrome";
import { useFounding100Attribution } from "../../hooks/useFounding100Attribution";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import { buildFounding100CheckoutUrl, founding100FunnelConfig } from "../../lib/founding100Funnel";
import "./founding100-funnel.css";

export default function Founding100Enroll() {
  const attribution = useFounding100Attribution();
  const checkoutUrl = founding100FunnelConfig.checkoutUrl
    ? buildFounding100CheckoutUrl(founding100FunnelConfig.checkoutUrl, attribution)
    : undefined;

  usePageMeta({
    title: "StrategicAI Founding 100 | Enrollment",
    description: "Complete Founding 100 enrollment through the retained Stripe payment path.",
    path: "/founding100/enroll",
    robots: "noindex, nofollow",
  });

  return (
    <Founding100FunnelChrome context="enrollment">
      <main className="f100-transition-main">
        <section className="f100-transition-card" data-enrollment-state={checkoutUrl ? "configured" : "not-configured"}>
          <div className="f100-transition-icon" aria-hidden="true"><LockKeyhole size={24} /></div>
          <p className="f100-kicker">Founding 100 · Enrollment</p>
          <h1>Complete enrollment through Stripe.</h1>
          <p className="f100-transition-lede">
            StrategicAI Founding 100 is $299 one time. Stripe handles the payment details and receipt.
            After payment, the existing Founding 100 onboarding path remains the next step.
          </p>

          {checkoutUrl ? (
            <a
              className="f100-button f100-button-purchase f100-transition-cta"
              href={checkoutUrl}
              onClick={() => trackEvent("checkout_click", { ...attribution, route: "/founding100/enroll", checkout_provider: "stripe" })}
            >
              Continue to Stripe <ArrowRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <div className="f100-configuration-warning" role="status">
              <LockKeyhole size={17} aria-hidden="true" />
              <span>Stripe enrollment is not configured for release.</span>
            </div>
          )}
        </section>
      </main>
    </Founding100FunnelChrome>
  );
}
