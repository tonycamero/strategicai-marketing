import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrustAgentShell } from '../../trustagent/TrustAgentShell';

const styles = {
    h1: "text-4xl md:text-5xl font-bold text-white mb-6 leading-tight",
    h2: "text-2xl md:text-3xl font-bold text-white mb-6",
    h3: "text-xl font-bold text-white mb-4",
    p: "text-lg text-slate-400 mb-6 leading-relaxed",
    li: "text-slate-300 mb-2 flex items-start gap-2",
    section: "max-w-4xl mx-auto px-6 py-16 border-b border-slate-800/50 last:border-0",
    ctaButton: "inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition cursor-pointer"
};

const scrollToTop = () => window.scrollTo(0, 0);

export default function Pricing() {
    useEffect(scrollToTop, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Nav */}
            <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" onClick={scrollToTop}>
                        <span className="text-xl font-medium tracking-tight text-slate-100 hover:text-blue-400 transition-colors cursor-pointer">
                            <span className="text-blue-500">Strategic</span>AI.app
                        </span>
                    </Link>
                    <div className="flex gap-6 items-center">
                        <div className="hidden md:flex gap-6 mr-4 border-r border-slate-800 pr-6">
                            <Link to="/product"><span className="text-sm text-slate-400 hover:text-white cursor-pointer">Product</span></Link>
                            <Link to="/why"><span className="text-sm text-slate-400 hover:text-white cursor-pointer">Why StrategicAI</span></Link>
                            <Link to="/pricing"><span className="text-sm text-white font-medium cursor-pointer">Pricing</span></Link>
                        </div>
                        <Link to="/partners"><span className="text-sm text-slate-400 hover:text-white cursor-pointer">Partner Program</span></Link>
                        <Link to="/login"><span className="text-sm text-slate-400 hover:text-white cursor-pointer">Login</span></Link>
                        <Link to="/roadmap">
                            <span className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded transition cursor-pointer">Get Strategic Clarity</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero */}
                <section className={styles.section}>
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h1 className={styles.h1}>What’s the Cost of Staying Stuck?</h1>
                        <p className={styles.p}>
                            StrategicAI replaces months of consulting, endless docs, and fractured execution. It's not just software; it's leverage.
                        </p>
                    </div>
                </section>

                {/* Analog Equivalent Breakdown */}
                <section className={styles.section}>
                    <h2 className={styles.h2}>The "Business as Usual" Tax</h2>
                    <p className={styles.p}>What you're already paying for chaos:</p>

                    <div className="overflow-x-auto rounded-lg border border-slate-800 mt-8 mb-12">
                        <table className="w-full text-left">
                            <thead className="bg-slate-900 text-slate-300">
                                <tr>
                                    <th className="p-4 border-b border-slate-800">Analog System</th>
                                    <th className="p-4 border-b border-slate-800">Real-World Cost</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 bg-slate-900/20">
                                <tr>
                                    <td className="p-4 text-white font-medium">Strategy Consultant</td>
                                    <td className="p-4 text-slate-400">$15,000 – $40,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-medium">Roadmap Decks + Rewrites</td>
                                    <td className="p-4 text-slate-400">$5,000 – $10,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-medium">Alignment Meetings</td>
                                    <td className="p-4 text-slate-400">6–8 weeks lost time</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-white font-medium">Missed ROI</td>
                                    <td className="p-4 text-slate-400">Compounded daily</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* StrategicAI Includes */}
                <section className={styles.section}>
                    <h2 className={styles.h2}>What StrategicAI Includes</h2>
                    <p className={styles.p}>One platform. No hidden fees. Certified delivery.</p>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center gap-2 text-white">✅ Role-Based Intake</li>
                            <li className="flex items-center gap-2 text-white">✅ Executive Brief</li>
                            <li className="flex items-center gap-2 text-white">✅ Diagnostic Report</li>
                        </ul>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center gap-2 text-white">✅ ROI Dashboard</li>
                            <li className="flex items-center gap-2 text-white">✅ TrustConsole™ 24/7 Advisor</li>
                            <li className="flex items-center gap-2 text-white">✅ Constant Evolution</li>
                        </ul>
                    </div>
                </section>

                {/* Delivery Model Framing */}
                <section className={styles.section}>
                    <div className="bg-blue-900/20 border border-blue-900 rounded-xl p-8 text-center">
                        <h2 className={styles.h2}>Delivery Model</h2>
                        <p className="text-xl text-blue-200 font-medium mb-4">
                            Delivered by certified operators or directly via the platform.
                        </p>
                        <p className={styles.p}> No seat-based fees for your core team. No AI gimmick pricing.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <h2 className={styles.h2}>Common Questions</h2>
                    <div className="space-y-8 mt-8">
                        <div>
                            <h3 className={styles.h3}>Why not list the price?</h3>
                            <p className="text-slate-400">Every roadmap is different. What matters is ROI. You’ll know the value on day one.</p>
                        </div>
                        <div>
                            <h3 className={styles.h3}>Is this a monthly subscription?</h3>
                            <p className="text-slate-400">StrategicAI is an infrastructure license. It includes ongoing access to the TrustConsole and roadmap evolution.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.section}>
                    <div className="text-center">
                        <h2 className={styles.h2}>Ready to Calculate Your ROI?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Link to="/roadmap" className={styles.ctaButton}>Start My Roadmap</Link>
                            <button className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 hover:bg-slate-800 text-white font-medium transition cursor-pointer">
                                Talk to an Advisor
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <TrustAgentShell enabled={true} mode="public" />

            {/* Footer */}
            <footer className="border-t border-slate-800 mt-16 bg-slate-950">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">
                        <p>© {new Date().getFullYear()} Strategic AI Infrastructure. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link to="/"><span className="hover:text-slate-400 cursor-pointer">Home</span></Link>
                            <Link to="/partners"><span className="hover:text-slate-400 cursor-pointer">Partners</span></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
