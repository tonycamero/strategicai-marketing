import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { TrustAgentShell } from '../../trustagent/TrustAgentShell';

const styles = {
    h1: "text-4xl md:text-6xl font-bold text-white mb-6 leading-tight",
    h2: "text-2xl md:text-4xl font-bold text-white mb-6",
    h3: "text-xl font-bold text-white mb-4",
    p: "text-lg text-slate-400 mb-6 leading-relaxed",
    li: "text-slate-300 mb-2 flex items-start gap-3",
    section: "max-w-6xl mx-auto px-6 py-20 border-b border-slate-800/50 last:border-0",
    ctaButton: "inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-blue-500/20",
    card: "bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group"
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
            {/* Navigation */}
            <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" onClick={scrollToTop}>
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                <span className="text-blue-500 group-hover:text-blue-400 transition-colors">Strategic</span>AI.app
                            </span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/features"><span className="text-sm font-medium text-slate-400 hover:text-white transition cursor-pointer">Features</span></Link>
                        <Link href="/partner"><span className="text-sm font-medium text-slate-400 hover:text-white transition cursor-pointer">Partner</span></Link>
                        <Link href="/operator"><span className="text-sm font-medium text-slate-400 hover:text-white transition cursor-pointer">Certification</span></Link>
                        <Link href="/smb">
                            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700 transition cursor-pointer">
                                SMB Solutions
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-800/50">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10 rounded-full" />
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
                            The Operating System for Strategic Execution
                        </div>
                        <h1 className={styles.h1}>
                            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-extrabold text-5xl md:text-7xl">AI Intelligence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                            StrategicAI.app turns intake chaos into governance-grade roadmaps, diagnostics, and tenant-isolated strategy consoles — <span className="text-white font-medium">at scale.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/operator">
                                <span className={styles.ctaButton}>Become a Certified Operator</span>
                            </Link>
                            <Link href="/features">
                                <span className="text-slate-400 hover:text-white font-medium flex items-center gap-2 cursor-pointer transition-all">
                                    See how it works <span className="text-xl">→</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* The Problem Section */}
                <section className={styles.section}>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className={styles.h2}>Most transformation dies in a PDF.</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mt-1">✕</div>
                                    <p className="text-slate-300 text-lg"><span className="text-white font-semibold">Snapshots break:</span> Real-time reality drifts away from the plan.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mt-1">✕</div>
                                    <p className="text-slate-300 text-lg"><span className="text-white font-semibold">Clients get confused:</span> High-ticket strategy feels like homework.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mt-1">✕</div>
                                    <p className="text-slate-300 text-lg"><span className="text-white font-semibold">Consultants disappear:</span> Support hell begins when the "expert" leaves.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 p-8 rounded-3xl border border-blue-900/30">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                The StrategicAI Solution
                            </h3>
                            <ul className="space-y-4">
                                <li className={styles.li}>• Captures truth from the front lines</li>
                                <li className={styles.li}>• Synthesizes strategy automatically</li>
                                <li className={styles.li}>• Enforces execution with governance logic</li>
                                <li className={styles.li}>• Keeps clients aligned with a bundled 24/7 TrustConsole</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* The Platform Cards */}
                <section className={styles.section}>
                    <div className="text-center mb-16">
                        <h2 className={styles.h2}>From Friction to Flow</h2>
                        <p className="text-xl text-slate-400">Governed by System, Not Hope.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Role-Based Intake</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Break the CEO echo chamber. Capture insight from Sales, Ops, and Delivery with specialized portals.</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Automated Synthesis</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">AI drafts the roadmap before a human touches a doc. High-speed discovery with strategic precision.</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Fulfillment Engine</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Turn strategy into repeatable execution tickets. SOP-driven workflows that eliminate "what's next?"</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>TrustConsole™</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Bundled AI that answers roadmap questions 24/7 using real KPIs, sprints, and ROI data. Authenticated per tenant.</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>ROI Dashboards</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Prove value in time saved, leads recovered, and ops efficiency. Real-time visibility into strategy outcomes.</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Governance Logic</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Built on SOPs and role-based authority. Not just prompts—infrastructure that scales with integrity.</p>
                        </div>
                    </div>
                </section>

                {/* Who It's For */}
                <section className={styles.section}>
                    <h2 className={styles.h2 + " text-center mb-16"}>Who It's For</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 border border-slate-800 rounded-2xl hover:border-blue-500/20 transition-all bg-slate-900/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Agency Owners</h3>
                            <p className="text-slate-400 mb-6 min-h-[80px]">Upgrade from implementer to strategic operator. Productize high-ticket roadmaps with ease.</p>
                            <Link href="/operator"><span className="text-blue-400 font-bold hover:text-blue-300 cursor-pointer">Get Certified →</span></Link>
                        </div>
                        <div className="text-center p-8 border border-slate-800 rounded-2xl hover:border-blue-500/20 transition-all bg-slate-900/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Authority Brands</h3>
                            <p className="text-slate-400 mb-6 min-h-[80px]">License the platform to your tribe. White-label the portal and create recurring revenue streams.</p>
                            <Link href="/partner"><span className="text-blue-400 font-bold hover:text-blue-300 cursor-pointer">Partner With Us →</span></Link>
                        </div>
                        <div className="text-center p-8 border border-slate-800 rounded-2xl hover:border-blue-500/20 transition-all bg-slate-900/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Consultants</h3>
                            <p className="text-slate-400 mb-6 min-h-[80px]">Run McKinsey-grade discovery solo. Let the TrustConsole handle strategic support 24/7.</p>
                            <Link href="/features"><span className="text-blue-400 font-bold hover:text-blue-300 cursor-pointer">See Use Cases →</span></Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-blue-600/5 py-24 border-t border-slate-800/50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 italic">"You deliver clarity. You own the plan. The platform runs the machine."</h2>
                        <p className="text-xl text-slate-400 mb-12">StrategicAI isn't software. It's your new infrastructure.</p>
                        <Link href="/operator">
                            <span className={styles.ctaButton}>Apply to become a Certified Operator</span>
                        </Link>
                        <p className="text-sm text-slate-500 mt-10">Launch App | Join Live Demo | See a Sample Roadmap</p>
                    </div>
                </section>
            </main>

            <TrustAgentShell enabled={true} mode="homepage" />

            {/* Footer */}
            <footer className="border-t border-slate-800 bg-slate-950 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tighter text-white">
                                <span className="text-blue-500">Strategic</span>AI.app
                            </span>
                        </div>
                        <div className="flex gap-8 text-sm font-medium text-slate-500">
                            <Link href="/economics"><span className="hover:text-white transition cursor-pointer">Economics</span></Link>
                            <Link href="/smb"><span className="hover:text-white transition cursor-pointer">SMBs</span></Link>
                            <Link href="/features"><span className="hover:text-white transition cursor-pointer">Features</span></Link>
                        </div>
                        <p className="text-xs text-slate-600 italic">© {new Date().getFullYear()} Strategic AI Infrastructure. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
