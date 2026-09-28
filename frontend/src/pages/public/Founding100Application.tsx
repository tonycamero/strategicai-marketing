import { type FormEvent, type ReactNode, useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Founding100FunnelChrome } from "../../components/founding100/Founding100FunnelChrome";
import { useFounding100Attribution } from "../../hooks/useFounding100Attribution";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import {
  FOUNDING100_APPLICATION_STORAGE_KEY,
  buildFounding100Path,
  type Founding100Attribution,
} from "../../lib/founding100Funnel";
import "./founding100-funnel.css";

type ApplicationValues = {
  name: string;
  email: string;
  company: string;
  website: string;
  phone: string;
  teamSizeRange: string;
  businessDescription: string;
  currentOperatingDifficulty: string;
  exactBusinessQuestion: string;
};

type ApplicationErrors = Partial<Record<keyof ApplicationValues | "submit", string>>;

const initialValues: ApplicationValues = {
  name: "",
  email: "",
  company: "",
  website: "",
  phone: "",
  teamSizeRange: "",
  businessDescription: "",
  currentOperatingDifficulty: "",
  exactBusinessQuestion: "",
};

const teamSizeOptions = [
  { value: "1", label: "Just me" },
  { value: "2-5", label: "2–5" },
  { value: "6-15", label: "6–15" },
  { value: "16-50", label: "16–50" },
  { value: "51-100", label: "51–100" },
  { value: "100+", label: "100+" },
] as const;

function Field({
  label,
  name,
  error,
  children,
  optional = false,
}: {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
  optional?: boolean;
}) {
  return (
    <div className="f100-application-field">
      <label htmlFor={name}>
        {label} {optional ? <span>(optional)</span> : <strong>*</strong>}
      </label>
      {children}
      {error ? <p id={`${name}-error`} className="f100-application-error" role="alert">{error}</p> : null}
    </div>
  );
}

export default function Founding100Application() {
  const navigate = useNavigate();
  const attribution = useFounding100Attribution();
  const [values, setValues] = useState<ApplicationValues>(initialValues);
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [submitting, setSubmitting] = useState(false);

  usePageMeta({
    title: "StrategicAI Founding 100 | Apply",
    description: "Tell us briefly about the business and the question you most want it to answer, then choose a time for a founder fit call.",
    path: "/founding100/apply",
    robots: "noindex, nofollow",
  });

  useEffect(() => {
    trackEvent("F100_APPLICATION_START", { ...attribution, route: "/founding100/apply" });
  }, [attribution]);

  function updateValue(field: keyof ApplicationValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined, submit: undefined }));
  }

  function validate() {
    const nextErrors: ApplicationErrors = {};
    const requiredFields: Array<keyof ApplicationValues> = [
      "name",
      "email",
      "company",
      "website",
      "teamSizeRange",
      "businessDescription",
      "currentOperatingDifficulty",
      "exactBusinessQuestion",
    ];

    requiredFields.forEach((field) => {
      if (!values[field].trim()) nextErrors[field] = "Required";
    });

    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    if (values.website.trim()) {
      try {
        const website = new URL(values.website.trim());
        if (!/^https?:$/.test(website.protocol)) nextErrors.website = "Use an http or https website URL";
      } catch {
        nextErrors.website = "Enter a valid website URL";
      }
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});
    trackEvent("F100_APPLICATION_SUBMIT", { ...attribution, route: "/founding100/apply" });

    try {
      const response = await fetch("/.netlify/functions/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          funnel: "founding100",
          source: "founding100",
          ...values,
          attribution,
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.ok === false) {
        throw new Error(result?.error || "We could not save your application. Please try again.");
      }

      const submission = {
        name: values.name,
        email: values.email,
        submittedAt: new Date().toISOString(),
        attribution,
      } satisfies {
        name: string;
        email: string;
        submittedAt: string;
        attribution: Founding100Attribution;
      };

      window.sessionStorage.setItem(FOUNDING100_APPLICATION_STORAGE_KEY, JSON.stringify(submission));
      trackEvent("F100_APPLICATION_SUCCESS", { ...attribution, route: "/founding100/apply" });
      navigate(buildFounding100Path("/founding100/schedule", attribution));
    } catch (error) {
      const message = error instanceof Error ? error.message : "We could not save your application. Please try again.";
      setErrors({ submit: message });
      trackEvent("F100_APPLICATION_ERROR", { ...attribution, route: "/founding100/apply" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Founding100FunnelChrome context="application">
      <main className="f100-application-main">
        <header className="f100-application-heading">
          <p className="f100-kicker">Founding 100 · Application</p>
          <h1>Tell us about the business you actually have.</h1>
          <p>
            This is a short application, not an enterprise procurement form. We want to understand
            what you are operating, where visibility breaks down, and the question you most want the
            business to answer.
          </p>
        </header>

        <section className="f100-application-callout" aria-label="What happens after you apply">
          <CheckCircle2 size={19} aria-hidden="true" />
          <div>
            <strong>What happens next</strong>
            <p>
              After your application is saved, you will choose a 30-minute founder fit call with Tony.
              The conversation helps us understand the business and whether Founding 100 is useful for you.
            </p>
          </div>
        </section>

        <form className="f100-application-form" onSubmit={handleSubmit} noValidate data-form-state={submitting ? "submitting" : "ready"}>
          <input type="text" name="b_website" tabIndex={-1} autoComplete="off" className="f100-honeypot" aria-hidden="true" />

          <div className="f100-application-grid">
            <Field label="Name" name="name" error={errors.name}>
              <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={(event) => updateValue("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required />
            </Field>
            <Field label="Email" name="email" error={errors.email}>
              <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} required />
            </Field>
            <Field label="Company / business name" name="company" error={errors.company}>
              <input id="company" name="company" type="text" autoComplete="organization" value={values.company} onChange={(event) => updateValue("company", event.target.value)} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} required />
            </Field>
            <Field label="Website" name="website" error={errors.website}>
              <input id="website" name="website" type="url" inputMode="url" placeholder="https://" value={values.website} onChange={(event) => updateValue("website", event.target.value)} aria-invalid={Boolean(errors.website)} aria-describedby={errors.website ? "website-error" : undefined} required />
            </Field>
            <Field label="Phone" name="phone" error={errors.phone} optional>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={(event) => updateValue("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
            </Field>
            <Field label="About how many people are involved in operating the business?" name="teamSizeRange" error={errors.teamSizeRange}>
              <select id="teamSizeRange" name="teamSizeRange" value={values.teamSizeRange} onChange={(event) => updateValue("teamSizeRange", event.target.value)} aria-invalid={Boolean(errors.teamSizeRange)} aria-describedby={errors.teamSizeRange ? "teamSizeRange-error" : undefined} required>
                <option value="">Choose a range</option>
                {teamSizeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </Field>
          </div>

          <Field label="What does your business do?" name="businessDescription" error={errors.businessDescription}>
            <textarea id="businessDescription" name="businessDescription" rows={4} placeholder="Give us the short version. One to three sentences is enough." value={values.businessDescription} onChange={(event) => updateValue("businessDescription", event.target.value)} aria-invalid={Boolean(errors.businessDescription)} aria-describedby={errors.businessDescription ? "businessDescription-error" : undefined} required />
          </Field>

          <Field label="What feels harder than it should in the business right now?" name="currentOperatingDifficulty" error={errors.currentOperatingDifficulty}>
            <textarea id="currentOperatingDifficulty" name="currentOperatingDifficulty" rows={4} value={values.currentOperatingDifficulty} onChange={(event) => updateValue("currentOperatingDifficulty", event.target.value)} aria-invalid={Boolean(errors.currentOperatingDifficulty)} aria-describedby={errors.currentOperatingDifficulty ? "currentOperatingDifficulty-error" : undefined} required />
          </Field>

          <Field label="If your business could answer one question clearly today, what would you ask it?" name="exactBusinessQuestion" error={errors.exactBusinessQuestion}>
            <textarea id="exactBusinessQuestion" name="exactBusinessQuestion" rows={4} value={values.exactBusinessQuestion} onChange={(event) => updateValue("exactBusinessQuestion", event.target.value)} aria-invalid={Boolean(errors.exactBusinessQuestion)} aria-describedby={errors.exactBusinessQuestion ? "exactBusinessQuestion-error" : undefined} required />
          </Field>

          {errors.submit ? <div className="f100-application-submit-error" role="alert">{errors.submit}</div> : null}

          <div className="f100-application-submit-row">
            <p>Your application is saved before scheduling becomes available.</p>
            <button className="f100-button f100-button-primary" type="submit" disabled={submitting}>
              {submitting ? "Saving application…" : "Save application"}
              {!submitting ? <ArrowRight size={17} aria-hidden="true" /> : null}
            </button>
          </div>
        </form>
      </main>
    </Founding100FunnelChrome>
  );
}
