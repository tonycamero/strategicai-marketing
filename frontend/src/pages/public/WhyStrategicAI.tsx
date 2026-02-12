import React, { useEffect, useState } from 'react';
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

export default function WhyStrategicAI() {
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
                            <Link to="/why"><span className="text-sm text-white font-medium cursor-pointer">Why StrategicAI</span></Link>
                            <Link to="/pricing"><span className="text-sm text-slate-400 hover:text-white cursor-pointer">Pricing</span></Link>
                        </div>
                        <Link to="/partners"><span className="text-sm text-slate-400 hover:text-white cursor-pointer">Partner Program</span></Link>
                        <a href="https://portal.strategicai.app/login" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white cursor-pointer">Login</a>
                        <Link to="/intake">
                            <span className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded transition cursor-pointer">Get Strategic Clarity</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero */}
                <section className={styles.section}>
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h1 className={styles.h1}>Strategy Fails in Docs. StrategicAI Runs It.</h1>
                        <p className={styles.p}>
                            Every business hits the same wall: chaos after kickoff. StrategicAI keeps things aligned after the whiteboard is erased.
                        </p>
                        <Link to="/intake" className={styles.ctaButton}>See It In Action</Link>
                    </div>
                </section>

                {/* Common Pain Narratives */}
                <section className={styles.section}>
                    <h2 className={styles.h2}>Sound Familiar?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <div className="text-4xl mb-4">📄</div>
                            <h3 className={styles.h3}>"It lives in a PDF."</h3>
                            <p className="text-slate-400">The strategy deck was great. Then it was emailed. Then it was lost.</p>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <div className="text-4xl mb-4">🤷</div>
                            <h3 className={styles.h3}>"What's next?"</h3>
                            <p className="text-slate-400">Your team has weekly meetings, but no one agrees on the actual priority.</p>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <div className="text-4xl mb-4">🌀</div>
                            <h3 className={styles.h3}>Tool Overload</h3>
                            <p className="text-slate-400">Asana, Slack, Notion, Docs. Too much noise, no clear signal.</p>
                        </div>
                    </div>
                </section>

                {/* Analog Comparison */}
                <section className={styles.section}>
                    <h2 className={styles.h2}>The Old Way vs. StrategicAI</h2>
                    <div className="grid md:grid-cols-2 gap-12 mt-8">
                        <div className="opacity-70 grayscale">
                            <h3 className="text-2xl font-bold mb-4 text-slate-500">The Consulting Method</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">❌ 6-8 weeks of interviews</li>
                                <li className="flex items-center gap-2">❌ Teams of expensive consultants</li>
                                <li className="flex items-center gap-2">❌ Dozens of disruption meetings</li>
                                <li className="flex items-center gap-2">❌ $25K - $60K+ cost</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">The StrategicAI Method</h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center gap-2">✅ Instant synthesis from intake</li>
                                <li className="flex items-center gap-2">✅ Transparent, persistent roadmap</li>
                                <li className="flex items-center gap-2">✅ No "he said, she said"</li>
                                <li className="flex items-center gap-2">✅ Built-in accountability</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Proof & Validation */}
                <section className={styles.section}>
                    <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-slate-900/50 italic text-xl text-slate-200">
                        "It finally feels like we have a system. Not just a plan, but a machine that runs the plan."
                    </blockquote>
                    <p className="mt-4 text-right text-slate-500">— CEO, Agency (50+ employees)</p>
                </section>

                {/* CTA */}
                <section className={styles.section}>
                    <div className="text-center">
                        <h2 className={styles.h2}>Stop the Chaos. Start the System.</h2>
                        <Link to="/intake" className={styles.ctaButton}>See It In Action</Link>
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
