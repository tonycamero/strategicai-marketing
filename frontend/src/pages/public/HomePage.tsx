import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-800/50">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10 rounded-full" />
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
                            7-Day Operational X-Ray
                        </div>
                        <h1 className={styles.h1}>
                            Find where your business is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-extrabold text-5xl md:text-7xl">losing money</span> — and fix it
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                            We map how your business actually runs, identify where things are breaking, and give you a clear plan to fix it <span className="text-white font-medium">in 7 days.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/intake">
                                <span className={styles.ctaButton}>Build My AI Brain</span>
                            </Link>
                            <Link to="/features">
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
                            <h2 className={styles.h2}>You’re busy. Work is happening. But something isn’t converting the way it should.</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mt-1">✕</div>
                                    <p className="text-slate-300 text-lg"><span className="text-white font-semibold">Leads don’t always get followed up</span></p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mt-1">✕</div>
                                    <p className="text-slate-300 text-lg"><span className="text-white font-semibold">Quotes don’t always get sent</span></p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mt-1">✕</div>
                                    <p className="text-slate-300 text-lg"><span className="text-white font-semibold">Jobs don’t always get scheduled</span></p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mt-1">✕</div>
                                    <p className="text-slate-300 text-lg"><span className="text-white font-semibold">Payments don’t always come in on time</span></p>
                                </div>
                            </div>
                            <p className="mt-8 text-xl text-blue-400 font-medium italic">"Most businesses feel this — but can’t see exactly where it’s happening."</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 p-8 rounded-3xl border border-blue-900/30">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                What You Get (In 7 Days)
                            </h3>
                            <ul className="space-y-4">
                                <li className={styles.li}>• A clear map of how your business actually runs</li>
                                <li className={styles.li}>• Exactly where things are breaking down</li>
                                <li className={styles.li}>• The direct cost of operational leaks</li>
                                <li className={styles.li}>• A prioritized plan of what to fix first</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className={styles.section}>
                    <div className="text-center mb-16">
                        <h2 className={styles.h2}>How It Works</h2>
                        <p className="text-xl text-slate-400">Revenue recapture in four simple steps.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className={styles.card}>
                            <div className="text-blue-500 font-bold mb-4">01.</div>
                            <h3 className={styles.h3}>Map Workflow</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We map your real workflow from lead generation to payment collection.</p>
                        </div>
                        <div className={styles.card}>
                            <div className="text-blue-500 font-bold mb-4">02.</div>
                            <h3 className={styles.h3}>Identify Slips</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We identify exactly where things slip through the cracks in your operation.</p>
                        </div>
                        <div className={styles.card}>
                            <div className="text-blue-500 font-bold mb-4">03.</div>
                            <h3 className={styles.h3}>Quantify Impact</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We quantify the financial impact of those leaks on your bottom line.</p>
                        </div>
                        <div className={styles.card}>
                            <div className="text-blue-500 font-bold mb-4">04.</div>
                            <h3 className={styles.h3}>Fix It Plan</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We give you a clear, actionable plan to fix the most critical issues.</p>
                        </div>
                    </div>
                </section>

                {/* Who This Is For */}
                <section className={styles.section}>
                    <h2 className={styles.h2 + " text-center mb-16"}>Who This Is For</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 border border-slate-800 rounded-2xl hover:border-blue-500/20 transition-all bg-slate-900/20">
                            <h3 className="text-2xl font-bold text-white mb-4">5–50 Employee Businesses</h3>
                            <p className="text-slate-400 mb-6 min-h-[80px]">Scaling businesses with established workflows that are starting to show signs of friction.</p>
                        </div>
                        <div className="text-center p-8 border border-slate-800 rounded-2xl hover:border-blue-500/20 transition-all bg-slate-900/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Daily Operations Owners</h3>
                            <p className="text-slate-400 mb-6 min-h-[80px]">Owners who are still involved in daily ops and need a clear, high-level view of reality.</p>
                        </div>
                        <div className="text-center p-8 border border-slate-800 rounded-2xl hover:border-blue-500/20 transition-all bg-slate-900/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Busy But Not Optimized</h3>
                            <p className="text-slate-400 mb-6 min-h-[80px]">Teams that feel like they are working flat out but aren't seeing the results they expect.</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-blue-600/5 py-24 border-t border-slate-800/50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 italic">"Get Your 7-Day Operational X-Ray"</h2>
                        <p className="text-xl text-slate-400 mb-12 font-medium">Limited to 5 companies this month</p>
                        <Link to="/intake">
                            <span className={styles.ctaButton}>Build My AI Brain</span>
                        </Link>
                        <div className="grid md:grid-cols-3 gap-8 mt-16 text-sm text-slate-500">
                            <div className="flex flex-col items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold">✓</span>
                                No software required
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold">✓</span>
                                No system overhaul
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold">✓</span>
                                No disruption to your team
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <TrustAgentShell enabled={true} mode="homepage" />
        </div>
    );
}
