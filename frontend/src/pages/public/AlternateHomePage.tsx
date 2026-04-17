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

export default function AlternateHomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-800/50">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img 
                        src="/images/brain-bg.png" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-15 transform transition-all duration-[20s] animate-pulse-slow" 
                        alt=""
                    />
                    {/* Dark gradient overlays for edge blending */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-40" />
                </div>
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] z-0 rounded-full" />
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full">
                        <h1 className={styles.h1}>
                            Most businesses are losing money every day—and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-extrabold pb-2">don’t know where.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                            We detect exactly where your business is leaking revenue, quantify it in dollars, and force it into execution until it’s fixed.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <Link to="/intake">
                                <span className={styles.ctaButton}>Get Your 7-Day Operational X-Ray</span>
                            </Link>
                            <p className="text-slate-400 font-medium">No dashboards. No guesswork. Just clarity and action.</p>
                        </div>
                    </div>
                </section>

                {/* Problem Section */}
                <section className={styles.section}>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className={styles.h2}>You don’t have a visibility problem. You have an execution problem.</h2>
                        <p className={styles.p}>Your team is busy. Your pipeline looks fine. Your tools are full of data.</p>
                        <p className={styles.p + " text-white font-medium"}>But underneath:</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                        <div className={styles.card}>
                            <ul className="space-y-4">
                                <li className={styles.li}>
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5">✕</div>
                                    <span className="text-white font-semibold">Follow-ups are missed</span>
                                </li>
                                <li className={styles.li}>
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5">✕</div>
                                    <span className="text-white font-semibold">Work is never assigned</span>
                                </li>
                                <li className={styles.li}>
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5">✕</div>
                                    <span className="text-white font-semibold">Capacity is wasted</span>
                                </li>
                                <li className={styles.li}>
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5">✕</div>
                                    <span className="text-white font-semibold">Revenue quietly slips through the cracks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center space-y-4 text-slate-400 text-lg">
                            <p>CRMs track activity.</p>
                            <p>Dashboards show history.</p>
                            <p>Task tools rely on people to create work.</p>
                            <p className="text-white font-semibold pt-4">None of them tell you what’s missing.</p>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className={styles.section + " bg-slate-900/30"}>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className={styles.h2}>We show you what’s missing—and what it’s costing you.</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                        <div>
                            <p className={styles.p}>StrategicAI doesn’t track work.</p>
                            <p className={styles.p}>It detects where work should exist—but doesn’t.</p>
                            <p className={styles.p}>It continuously analyzes your business and surfaces:</p>
                            <ul className="space-y-4 mb-8">
                                <li className={styles.li}>• Unassigned revenue</li>
                                <li className={styles.li}>• Follow-up gaps</li>
                                <li className={styles.li}>• Capacity mismatches</li>
                                <li className={styles.li}>• Execution breakdowns</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 p-8 rounded-3xl border border-blue-900/30 text-center">
                            <p className="text-slate-400 mb-4">Then it translates that into:</p>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-6 p-6 bg-slate-950/50 rounded-xl border border-slate-800">
                                <span className="text-slate-400 font-normal">$1,200 × 14 missed actions =</span> <br className="md:hidden" /><span className="text-red-400 pb-1 inline-block">$16,800 at risk</span>
                            </div>
                            <p className="text-xl text-blue-400 font-bold">And forces it into execution.</p>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className={styles.section}>
                    <div className="text-center mb-16">
                        <h2 className={styles.h2}>How It Works</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className={styles.card}>
                            <div className="text-blue-500 font-bold mb-4">Step 1</div>
                            <h3 className={styles.h3}>Connect Reality</h3>
                        </div>
                        <div className={styles.card}>
                            <div className="text-blue-500 font-bold mb-4">Step 2</div>
                            <h3 className={styles.h3}>Detect Signals</h3>
                        </div>
                        <div className={styles.card}>
                            <div className="text-blue-500 font-bold mb-4">Step 3</div>
                            <h3 className={styles.h3}>Quantify Impact</h3>
                        </div>
                        <div className={styles.card}>
                            <div className="text-blue-500 font-bold mb-4">Step 4</div>
                            <h3 className={styles.h3}>Force Execution</h3>
                        </div>
                    </div>
                </section>

                {/* Outputs Section */}
                <section className={styles.section + " bg-slate-900/30"}>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className={styles.h2}>Not insights. Decisions.</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
                        <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/50 flex items-center justify-center min-h-[120px]">
                            <h3 className="text-lg font-bold text-white m-0">Live Execution Signals</h3>
                        </div>
                        <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/50 flex items-center justify-center min-h-[120px]">
                            <h3 className="text-lg font-bold text-white m-0">Economic Impact</h3>
                        </div>
                        <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/50 flex items-center justify-center min-h-[120px]">
                            <h3 className="text-lg font-bold text-white m-0">Prioritized Actions</h3>
                        </div>
                        <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/50 flex items-center justify-center min-h-[120px]">
                            <h3 className="text-lg font-bold text-white m-0">Closed Loop Tracking</h3>
                        </div>
                    </div>
                </section>

                {/* Proof Section */}
                <section className={styles.section}>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className={styles.h2}>This is what most companies never see</h2>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden text-center">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-blue-500"></div>
                            <div className="space-y-6">
                                <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex justify-center items-center gap-4">
                                    <span className="text-3xl font-bold text-white">23</span>
                                    <span className="text-slate-400 text-lg">missed follow-ups detected</span>
                                </div>
                                <div className="p-4 bg-red-950/20 rounded-xl border border-red-900/30 flex justify-center items-center gap-4">
                                    <span className="text-3xl font-bold text-red-500">$18,400</span>
                                    <span className="text-slate-400 text-lg">in revenue at risk</span>
                                </div>
                                <div className="p-4 bg-blue-950/20 rounded-xl border border-blue-900/30 flex justify-center items-center gap-4">
                                    <span className="text-3xl font-bold text-blue-500">11</span>
                                    <span className="text-slate-400 text-lg">high-impact actions assigned</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Offer Section */}
                <section className={styles.section + " bg-blue-600/5"}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className={styles.h2}>Start with a 7-Day Operational X-Ray</h2>
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 max-w-2xl mx-auto mb-10 text-left">
                            <p className="text-xl text-white font-bold mb-6 text-center">In 7 days, you’ll see:</p>
                            <ul className="space-y-4 max-w-md mx-auto">
                                <li className={styles.li}>
                                    <span className="text-blue-500 mt-1 font-bold">→</span> 
                                    <span className="text-white">Where your business is leaking money</span>
                                </li>
                                <li className={styles.li}>
                                    <span className="text-blue-500 mt-1 font-bold">→</span> 
                                    <span className="text-white">Why it’s happening</span>
                                </li>
                                <li className={styles.li}>
                                    <span className="text-blue-500 mt-1 font-bold">→</span> 
                                    <span className="text-white">What to fix immediately</span>
                                </li>
                            </ul>
                        </div>
                        <Link to="/intake">
                            <span className={styles.ctaButton}>Get Your X-Ray</span>
                        </Link>
                    </div>
                </section>

                {/* Product Section */}
                <section className={styles.section}>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className={styles.h2}>What this becomes</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="text-center p-8 border border-slate-800 rounded-2xl bg-slate-900/20">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-6 text-2xl">⚡</div>
                            <h3 className="text-lg font-bold text-white mb-4">Always-on monitoring</h3>
                            <p className="text-slate-400">of your operations</p>
                        </div>
                        <div className="text-center p-8 border border-slate-800 rounded-2xl bg-slate-900/20">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-6 text-2xl">🔍</div>
                            <h3 className="text-lg font-bold text-white mb-4">Continuous detection</h3>
                            <p className="text-slate-400">of execution gaps</p>
                        </div>
                        <div className="text-center p-8 border border-slate-800 rounded-2xl bg-slate-900/20">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-6 text-2xl">💰</div>
                            <h3 className="text-lg font-bold text-white mb-4">Real-time economic</h3>
                            <p className="text-slate-400">visibility</p>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className={styles.section + " bg-slate-900/30"}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className={styles.h2}>Simple, value-driven pricing</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
                            <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/50 min-w-[280px]">
                                <h3 className="text-xl font-bold text-white mb-2">X-Ray</h3>
                                <div className="text-3xl font-extrabold text-blue-400">$500–$2,500</div>
                            </div>
                            <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/50 min-w-[280px]">
                                <h3 className="text-xl font-bold text-white mb-2">System</h3>
                                <div className="text-3xl font-extrabold text-blue-400">$2K–$10K<span className="text-lg text-slate-500 font-normal">/month</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-blue-600/5 py-24 border-t border-slate-800/50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
                            If you don’t know where you’re losing money, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">you can’t fix it.</span>
                        </h2>
                        <Link to="/intake">
                            <span className={styles.ctaButton}>Get Your 7-Day Operational X-Ray</span>
                        </Link>
                    </div>
                </section>
            </main>

            <TrustAgentShell enabled={true} mode="homepage" />
        </div>
    );
}
