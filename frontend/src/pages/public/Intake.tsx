import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const styles = {
  h1: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",
  p: "text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto",
  label: "block text-sm font-medium text-slate-300 mb-2",
  input:
    "w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
  select:
    "w-full appearance-none rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
  checkbox: "h-5 w-5 rounded border-slate-800 bg-slate-900 text-cyan-500 focus:ring-cyan-500/50",
  button:
    "w-full rounded-lg bg-cyan-400 py-4 font-bold text-slate-950 transition-all hover:scale-[1.02] hover:bg-cyan-300 active:scale-[0.98]",
  error: "mt-1 text-xs text-red-500",
};

export default function Intake() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [otherPainSelected, setOtherPainSelected] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const stage = searchParams.get("stage");
  const isLeadershipStage = stage === "leadership";
  const intakeSource = searchParams.get("source") || "executive_brief_intake";

  usePageMeta({
    title: isLeadershipStage
      ? "StrategicAI Intake | Add Leadership Context"
      : "StrategicAI Intake | Start with the Operating Problem",
    description:
      "Start with the operating problem that is actually bothering you. Add the people, workarounds, perspectives, and unknowns around it.",
    path: "/intake",
    robots: "noindex, nofollow",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
      trackEvent("intake_started", {
      stage: isLeadershipStage ? "leadership" : "organization-context",
      source: intakeSource,
    });
  }, [intakeSource, isLeadershipStage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const errors: Record<string, string> = {};
    if (!data.fullName) errors.fullName = "Required";
    if (!data.email) errors.email = "Required";
    if (!data.phone) errors.phone = "Required";
    if (!data.company) errors.company = "Required";
    if (!data.priorityBottleneck) errors.priorityBottleneck = "Required";

    const pains = formData.getAll("pains");
    if (pains.length === 0) errors.pains = "Please select at least one";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, pains, source: intakeSource }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Submission failed" }));
        throw new Error(errorData.error || "Submission failed");
      }

      const result = await response.json().catch(() => null);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          "strategicai-intake-submission",
          JSON.stringify(result || {}),
        );
      }

      trackEvent("organization_context_completed", {
        stage: isLeadershipStage ? "leadership" : "organization-context",
        source: intakeSource,
      });
      navigate("/intake/thanks");
    } catch (error: any) {
      console.error(error);
      setFormErrors({ submit: error.message || "Submission failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-20 text-white">
      <main className="mx-auto max-w-3xl px-6 pt-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">
            {isLeadershipStage ? "Leadership context" : "Organization context"}
          </p>
          <h1 className={styles.h1}>
            {isLeadershipStage ? "Add the leadership context" : "Start with the operating problem"}
          </h1>
          <p className={styles.p}>
            Start with the version of the problem that is actually bothering you. StrategicAI uses
            the context, perspectives, and evidence around it to form a clearer reflection of how
            the business currently operates.
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-500">
            This is not yet a diagnosis. It is the first shared view of the problem.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-lg font-semibold text-white">What happens next</h2>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>1. Describe the problem as it actually appears.</li>
            <li>2. Include people who may see the work differently.</li>
            <li>3. Describe workarounds, unknowns, and disagreements.</li>
            <li>4. Continue into the current Executive Brief workflow.</li>
          </ol>
          {isLeadershipStage && (
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Phase-one note: the dedicated leadership step is being rolled out while the current
              guided form remains active.
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-slate-800 bg-slate-900/30 p-8 shadow-xl">
          <div className="hidden">
            <input type="text" name="b_website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className={styles.label}>Full Name *</label>
              <input type="text" name="fullName" className={styles.input} placeholder="John Doe" required />
              {formErrors.fullName && <p className={styles.error}>{formErrors.fullName}</p>}
            </div>
            <div>
              <label className={styles.label}>Work Email *</label>
              <input type="email" name="email" className={styles.input} placeholder="john@company.com" required />
              {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className={styles.label}>Phone Number *</label>
              <input type="tel" name="phone" className={styles.input} placeholder="+1 (555) 000-0000" required />
              {formErrors.phone && <p className={styles.error}>{formErrors.phone}</p>}
            </div>
            <div>
              <label className={styles.label}>Company Name *</label>
              <input type="text" name="company" className={styles.input} placeholder="Acme Corp" required />
              {formErrors.company && <p className={styles.error}>{formErrors.company}</p>}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <label className={styles.label}>Your Role *</label>
              <select name="role" className={styles.select} required>
                <option value="">Select a role...</option>
                <option value="Owner">Owner</option>
                <option value="Operator">Operator</option>
                <option value="Manager">Manager</option>
                <option value="Agency">Agency</option>
                <option value="Consultant">Consultant</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-[46px] text-slate-500">▼</div>
            </div>
            <div className="relative">
              <label className={styles.label}>Team Size *</label>
              <select name="teamSize" className={styles.select} required>
                <option value="">Select size...</option>
                <option value="1-3">1–3</option>
                <option value="4-10">4–10</option>
                <option value="11-25">11–25</option>
                <option value="26-100">26–100</option>
                <option value="100+">100+</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-[46px] text-slate-500">▼</div>
            </div>
          </div>

          <div>
            <label className={styles.label}>Who is involved? (Select the parts of the business involved) *</label>
            <p className="mb-4 text-sm leading-6 text-slate-500">Include people who may see the work differently.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { id: "leads", label: "Leads not followed up" },
                { id: "proposals", label: "Proposals / sales cycle stalling" },
                { id: "handoffs", label: "Broken handoffs (sales -> ops -> delivery)" },
                { id: "visibility", label: "No visibility / priorities unclear" },
                { id: "admin", label: "Too much manual admin" },
                { id: "tools", label: "Too many tools, nothing connected" },
                { id: "other", label: "Other" },
              ].map((pain) => (
                <label key={pain.id} className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-800 p-3 transition-colors hover:bg-slate-800/50">
                  <input
                    type="checkbox"
                    name="pains"
                    value={pain.id}
                    className={styles.checkbox}
                    onChange={pain.id === "other" ? (e) => setOtherPainSelected(e.target.checked) : undefined}
                  />
                  <span className="text-sm text-slate-300">{pain.label}</span>
                </label>
              ))}
            </div>
            {formErrors.pains && <p className={styles.error}>{formErrors.pains}</p>}
          </div>

          {otherPainSelected && (
            <div>
              <label className={styles.label}>Please specify your other pain</label>
              <input type="text" name="otherPainText" className={styles.input} placeholder="Tell us more..." />
            </div>
          )}

          <div>
            <label className={styles.label}>What is the problem you&apos;re trying to understand? *</label>
            <p className="mb-4 text-sm leading-6 text-slate-500">Start with the version that&apos;s actually bothering you. It does not need to be perfectly framed.</p>
            <textarea
              name="priorityBottleneck"
              className={`${styles.input} h-32 resize-none`}
              placeholder="Describe what is happening, including workarounds—not only the documented process..."
              required
            />
            {formErrors.priorityBottleneck && <p className={styles.error}>{formErrors.priorityBottleneck}</p>}
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="mb-6">
              <label className={styles.label}>Company Website (Optional)</label>
              <input type="url" name="website" className={styles.input} placeholder="https://..." />
            </div>
            <div>
            <label className={styles.label}>What happens today, what are you unsure about, or what do people disagree about? (Optional)</label>
            <p className="mb-3 text-sm leading-6 text-slate-500">Describe what actually happens, including workarounds—not only the documented process. “I don’t know” is useful here. Unknowns are part of the operating picture. Different perspectives are useful evidence; you do not need to resolve them before submitting.</p>
            <textarea name="notes" className={`${styles.input} h-32 resize-none`} placeholder="Include the messy version, open questions, and different perspectives..." />
            </div>
          </div>

          {formErrors.submit && (
            <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-center text-sm text-red-500">
              {formErrors.submit}
            </div>
          )}

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
                Submitting...
              </span>
            ) : isLeadershipStage ? "Continue with leadership context" : "Begin the shared picture"}
          </button>

          <p className="text-center text-xs text-slate-500">
            By submitting, you confirm this information can be used to build the foundation for your Executive Brief.
          </p>
        </form>
      </main>
    </div>
  );
}
