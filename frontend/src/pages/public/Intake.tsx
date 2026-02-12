import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const styles = {
    h1: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",
    p: "text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto",
    label: "block text-sm font-medium text-slate-300 mb-2",
    input: "w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all",
    select: "w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none",
    checkbox: "w-5 h-5 rounded border-slate-800 bg-slate-900 text-blue-600 focus:ring-blue-500/50",
    button: "w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all transform hover:scale-[1.02] cursor-pointer shadow-lg shadow-blue-500/20 active:scale-[0.98]",
    error: "text-red-500 text-xs mt-1"
};

const scrollToTop = () => window.scrollTo(0, 0);

export default function Intake() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [otherPainSelected, setOtherPainSelected] = useState(false);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    useEffect(scrollToTop, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setFormErrors({});

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Basic validation
        const errors: Record<string, string> = {};
        if (!data.fullName) errors.fullName = "Required";
        if (!data.email) errors.email = "Required";
        if (!data.phone) errors.phone = "Required";
        if (!data.company) errors.company = "Required";
        if (!data.priorityBottleneck) errors.priorityBottleneck = "Required";

        // Multi-select handling
        const pains = formData.getAll('pains');
        if (pains.length === 0) errors.pains = "Please select at least one";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        try {
            const response = await fetch('/.netlify/functions/intake', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, pains }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Submission failed' }));
                throw new Error(errorData.error || 'Submission failed');
            }

            navigate('/intake/thanks');
        } catch (error: any) {
            console.error(error);
            setFormErrors({ submit: error.message || "Submission failed. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white pb-20">
            {/* Nav */}
            <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" onClick={scrollToTop}>
                        <span className="text-xl font-medium tracking-tight text-slate-100 hover:text-blue-400 transition-colors cursor-pointer">
                            <span className="text-blue-500">Strategic</span>AI.app
                        </span>
                    </Link>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-6 pt-16">
                <div className="text-center mb-12">
                    <h1 className={styles.h1}>Quick Intake</h1>
                    <p className={styles.p}>
                        Answer a few questions so we can point you to the right next step.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-slate-900/30 p-8 rounded-2xl border border-slate-800 shadow-xl">
                    {/* Honeypot */}
                    <div className="hidden">
                        <input type="text" name="b_website" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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

                    <div className="grid md:grid-cols-2 gap-6">
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

                    <div className="grid md:grid-cols-2 gap-6">
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
                            <div className="absolute right-4 top-[46px] pointer-events-none text-slate-500">▼</div>
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
                            <div className="absolute right-4 top-[46px] pointer-events-none text-slate-500">▼</div>
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>Primary Pains (Select all that apply) *</label>
                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                            {[
                                { id: 'leads', label: 'Leads not followed up' },
                                { id: 'proposals', label: 'Proposals / sales cycle stalling' },
                                { id: 'handoffs', label: 'Broken handoffs (sales → ops → delivery)' },
                                { id: 'visibility', label: 'No visibility / priorities unclear' },
                                { id: 'admin', label: 'Too much manual admin' },
                                { id: 'tools', label: 'Too many tools, nothing connected' },
                                { id: 'other', label: 'Other' },
                            ].map((pain) => (
                                <label key={pain.id} className="flex items-center gap-3 p-3 rounded-lg border border-slate-800 hover:bg-slate-800/50 cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        name="pains"
                                        value={pain.id}
                                        className={styles.checkbox}
                                        onChange={pain.id === 'other' ? (e) => setOtherPainSelected(e.target.checked) : undefined}
                                    />
                                    <span className="text-sm text-slate-300">{pain.label}</span>
                                </label>
                            ))}
                        </div>
                        {formErrors.pains && <p className={styles.error}>{formErrors.pains}</p>}
                    </div>

                    {otherPainSelected && (
                        <div className="animate-fade-in">
                            <label className={styles.label}>Please specify your other pain</label>
                            <input type="text" name="otherPainText" className={styles.input} placeholder="Tell us more..." />
                        </div>
                    )}

                    <div>
                        <label className={styles.label}>What’s the #1 thing breaking right now? *</label>
                        <textarea
                            name="priorityBottleneck"
                            className={`${styles.input} h-32 resize-none`}
                            placeholder="Please describe in 2-3 sentences..."
                            required
                        ></textarea>
                        {formErrors.priorityBottleneck && <p className={styles.error}>{formErrors.priorityBottleneck}</p>}
                    </div>

                    <div className="border-t border-slate-800 pt-8">
                        <div className="mb-6">
                            <label className={styles.label}>Company Website (Optional)</label>
                            <input type="url" name="website" className={styles.input} placeholder="https://..." />
                        </div>
                        <div>
                            <label className={styles.label}>Anything else we should know? (Optional)</label>
                            <textarea name="notes" className={`${styles.input} h-24 resize-none`} placeholder="Additional context..."></textarea>
                        </div>
                    </div>

                    {formErrors.submit && <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm text-center">{formErrors.submit}</div>}

                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Submitting...
                            </span>
                        ) : "Submit Intake"}
                    </button>

                    <p className="text-center text-xs text-slate-500">
                        By submitting, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </form>
            </main>
        </div>
    );
}
