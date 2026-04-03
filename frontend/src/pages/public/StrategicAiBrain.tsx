import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrustAgentShell } from '../../trustagent/TrustAgentShell';

const styles = {
    h1: "text-4xl md:text-6xl font-bold text-white mb-6 leading-tight",
    h2: "text-3xl md:text-4xl font-bold text-white mb-8",
    h3: "text-xl font-bold text-white mb-4",
    p: "text-lg text-slate-400 mb-6 leading-relaxed",
    section: "max-w-5xl mx-auto px-6 py-20 border-b border-slate-800/50 last:border-0",
    ctaPrimary: "inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition transform hover:scale-[1.02] cursor-pointer shadow-lg shadow-blue-500/20 active:scale-[0.98]",
    ctaSecondary: "inline-flex items-center px-8 py-4 rounded-lg border border-slate-700 hover:bg-slate-800 text-white font-medium transition cursor-pointer",
    card: "bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all",
    list: "space-y-4 text-slate-300",
    listItem: "flex items-start gap-3"
};

const scrollToTop = () => window.scrollTo(0, 0);

export default function StrategicAiBrain() {
    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
            {/* 1. HERO */}
            <section className={`${styles.section} pt-32 pb-24 text-center`}>
                <h1 className={styles.h1}>An AI that actually understands how your business works</h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
                    Not based on prompts. Not based on guesses.
                </p>
                <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                    Built on your <span className="font-bold italic underline text-white">real operational reality</span>: goals, friction, constraints, and execution.
                </p>
                <p className="text-lg text-slate-500 mb-12 italic">
                    It shows you what’s slowing your business down — and what to fix next.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/intake" className={styles.ctaPrimary}>Build My AI Brain</Link>
                    <button className={styles.ctaSecondary} onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}>
                        See How It Works
                    </button>
                </div>
            </section>

            {/* 2. PROBLEM */}
            <section id="problem" className={styles.section}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={styles.h2}>Most companies don’t have a visibility problem —<br/><span className="text-blue-500">They have a reality problem</span></h2>
                    <p className={styles.p}>
                        Fragmentation and misalignment are the defaults in most organizations. Your reality is buried under layers of disconnected dashboards, static reports, arbitrary KPIs, and expensive analytics tools that tell you what happened, but never why it happened.
                    </p>
                </div>
            </section>

            {/* 3. THE GAP */}
            <section className={styles.section}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className={styles.h2}>The gap isn’t data —<br/>It’s understanding</h2>
                        <ul className="space-y-6">
                            <li className={styles.listItem}>
                                <span className="text-red-500 mt-1">●</span>
                                <div>
                                    <h4 className="text-white font-bold">Unseen Delays</h4>
                                    <p className="text-slate-400 text-sm">Where execution slows down before it stops.</p>
                                </div>
                            </li>
                            <li className={styles.listItem}>
                                <span className="text-red-500 mt-1">●</span>
                                <div>
                                    <h4 className="text-white font-bold">Missed Handoffs</h4>
                                    <p className="text-slate-400 text-sm">The friction points between departments where revenue is lost.</p>
                                </div>
                            </li>
                            <li className={styles.listItem}>
                                <span className="text-red-500 mt-1">●</span>
                                <div>
                                    <h4 className="text-white font-bold">Stalled Workflows</h4>
                                    <p className="text-slate-400 text-sm">Processes that look complete on paper but are stuck in reality.</p>
                                </div>
                            </li>
                            <li className={styles.listItem}>
                                <span className="text-red-500 mt-1">●</span>
                                <div>
                                    <h4 className="text-white font-bold">Overloaded Teams</h4>
                                    <p className="text-slate-400 text-sm">Identifying burnout before it impacts delivery.</p>
                                </div>
                            </li>
                            <li className={styles.listItem}>
                                <span className="text-red-500 mt-1">●</span>
                                <div>
                                    <h4 className="text-white font-bold">Response Gaps</h4>
                                    <p className="text-slate-400 text-sm">The lag between signal and corrective action.</p>
                                </div>
                            </li>
                        </ul>
                        <p className="mt-12 text-xl font-medium text-white border-l-2 border-blue-600 pl-6">
                            The true state of your business.
                        </p>
                    </div>
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-2xl">
                         {/* Abstract Visual Representation of Fragmentation */}
                         <div className="aspect-square flex items-center justify-center relative overflow-hidden">
                            <div className="w-full h-full absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
                            <div className="grid grid-cols-4 gap-4 w-full h-full p-4 relative z-10">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className={`rounded-lg border border-slate-800 bg-slate-950/50 flex items-center justify-center opacity-${20 + (i % 5) * 20}`}>
                                        <div className={`w-2 h-2 rounded-full ${i === 10 ? 'bg-blue-500 animate-led-slow' : 'bg-slate-700'}`}></div>
                                    </div>
                                ))}
                            </div>
                         </div>
                    </div>
                </div>
            </section>

            {/* 4. INTRO — AI BRAIN */}
            <section className={styles.section}>
                <div className="max-w-4xl mx-auto">
                    <h2 className={styles.h2}>Meet the Strategic AI Brain</h2>
                    <p className="text-2xl text-slate-300 mb-12">
                        A system that understands your business based on <span className="text-blue-400">what is actually happening</span> — not just what is being reported.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Captures Signals</h3>
                            <p className="text-slate-400">Pulls continuous operational signals from the edges of your business execution.</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Reconstructs State</h3>
                            <p className="text-slate-400">Maps those signals into a coherent, real-time representation of your organization's form.</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Identifies Constraints</h3>
                            <p className="text-slate-400">Surgically locates the one bottleneck that is actually capping your growth.</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Guides Decisions</h3>
                            <p className="text-slate-400">Provides deterministic recommendations grounded in your specific reality.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. HOW IT WORKS */}
            <section className="bg-slate-900/20 py-24 border-y border-slate-800">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className={`${styles.h2} text-center mb-16`}>How It Works</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="relative">
                            <div className="text-5xl font-bold text-blue-900/30 absolute -top-8 -left-4">01</div>
                            <h3 className="text-xl font-bold mb-4 relative z-10">Observe</h3>
                            <p className="text-slate-400 text-sm">Continuously collects raw operational data and execution patterns.</p>
                        </div>
                        <div className="relative">
                            <div className="text-5xl font-bold text-blue-900/30 absolute -top-8 -left-4">02</div>
                            <h3 className="text-xl font-bold mb-4 relative z-10">Reconstruct</h3>
                            <p className="text-slate-400 text-sm">Transforms fragmented signals into a unified reality of current operations.</p>
                        </div>
                        <div className="relative">
                            <div className="text-5xl font-bold text-blue-900/30 absolute -top-8 -left-4">03</div>
                            <h3 className="text-xl font-bold mb-4 relative z-10">Interpret</h3>
                            <p className="text-slate-400 text-sm">Synthesizes state to identify where misalignment and friction live.</p>
                        </div>
                        <div className="relative">
                            <div className="text-5xl font-bold text-blue-900/30 absolute -top-8 -left-4">04</div>
                            <h3 className="text-xl font-bold mb-4 relative z-10">Guide</h3>
                            <p className="text-slate-400 text-sm">Recommends surgical moves to clear constraints and accelerate execution.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. DIFFERENTIATION */}
            <section className={styles.section}>
                <div className="max-w-4xl mx-auto">
                    <h2 className={styles.h2}>Not another AI tool</h2>
                    <div className="grid md:grid-cols-2 gap-0 border border-slate-800 rounded-3xl overflow-hidden mb-16">
                        <div className="p-8 bg-slate-900/20">
                            <h4 className="text-slate-500 font-bold uppercase tracking-wider text-xs mb-6">Typical AI</h4>
                            <div className="flex items-center gap-4 text-slate-500">
                                <span className="font-mono">prompt</span>
                                <span className="text-xl">→</span>
                                <span className="font-mono">answer</span>
                            </div>
                            <p className="mt-8 text-sm text-slate-500">Relies on probablistic guesses based on general knowledge.</p>
                        </div>
                        <div className="p-8 bg-blue-600/10 border-l border-slate-800">
                            <h4 className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-6">Strategic AI Brain</h4>
                            <div className="flex items-center gap-2 text-blue-100 flex-wrap">
                                <span className="font-mono">observe</span>
                                <span className="text-slate-600">→</span>
                                <span className="font-mono">reconstruct</span>
                                <span className="text-slate-600">→</span>
                                <span className="font-mono">interpret</span>
                                <span className="text-slate-600">→</span>
                                <span className="font-mono">guide</span>
                            </div>
                            <p className="mt-8 text-sm text-blue-200">Grounded in the deterministic reality of your operations.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex gap-4">
                            <span className="text-blue-500">✓</span>
                            <p className="text-sm text-slate-300">No generic advice</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-blue-500">✓</span>
                            <p className="text-sm text-slate-300">No hallucination framing</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-blue-500">✓</span>
                            <p className="text-sm text-slate-300">Grounded in real operations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. OUTPUTS */}
            <section className={styles.section}>
                <h2 className={styles.h2}>What you get</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className={styles.card}>
                        <div className="text-blue-500 font-mono text-xs mb-4">CRITICAL_PATH</div>
                        <h4 className="text-white font-bold mb-2">Current Constraint</h4>
                        <p className="text-slate-500 text-sm">Identification of the exact bottleneck slowing your business down today.</p>
                    </div>
                    <div className={styles.card}>
                        <div className="text-blue-500 font-mono text-xs mb-4">EXECUTION_NODE</div>
                        <h4 className="text-white font-bold mb-2">Next Action</h4>
                        <p className="text-slate-500 text-sm">The single most impactful move you can make to clear the path.</p>
                    </div>
                    <div className={styles.card}>
                        <div className="text-blue-500 font-mono text-xs mb-4">PROJECTION_MAP</div>
                        <h4 className="text-white font-bold mb-2">Expected Impact</h4>
                        <p className="text-slate-500 text-sm">Deterministic prediction of how clearing the constraint shifts your state.</p>
                    </div>
                    <div className={styles.card}>
                        <div className="text-blue-500 font-mono text-xs mb-4">REALITY_FEED</div>
                        <h4 className="text-white font-bold mb-2">Continuous Updates</h4>
                        <p className="text-slate-500 text-sm">Living state reconstruction that updates as your business executes.</p>
                    </div>
                </div>
            </section>

            {/* 8. REPLACEMENT */}
            <section className={styles.section}>
                <div className="max-w-3xl mx-auto p-12 bg-slate-900 border border-slate-800 rounded-3xl">
                    <h2 className="text-xl font-bold text-slate-500 uppercase tracking-widest text-center mb-12">LEGACY SYSTEMS REPLACED</h2>
                    <ul className="space-y-6 text-center">
                        <li className="text-2xl text-slate-300 line-through decoration-red-600 decoration-4">Dashboards</li>
                        <li className="text-2xl text-slate-300 line-through decoration-red-600 decoration-4">Reporting Cycles</li>
                        <li className="text-2xl text-slate-300 line-through decoration-red-600 decoration-4">Guess-based prioritization</li>
                        <li className="text-2xl text-slate-300 line-through decoration-red-600 decoration-4">Reactive management</li>
                    </ul>
                </div>
            </section>

            {/* 9. WHAT IT IS NOT */}
            <section className={styles.section}>
                <h2 className={styles.h2}>What it is not</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 border-l-2 border-slate-800">
                        <h3 className="text-slate-500 font-bold mb-4 italic">Not Autonomous</h3>
                        <p className="text-slate-400 text-sm">It doesn't take actions for you. It provides clarity for you to lead better.</p>
                    </div>
                    <div className="p-6 border-l-2 border-slate-800">
                        <h3 className="text-slate-500 font-bold mb-4 italic">Not Replacing Leadership</h3>
                        <p className="text-slate-400 text-sm">It enhances your judgment, it doesn't attempt to substitute it.</p>
                    </div>
                    <div className="p-6 border-l-2 border-slate-800">
                        <h3 className="text-slate-500 font-bold mb-4 italic">Not Generating Ungrounded Ideas</h3>
                        <p className="text-slate-400 text-sm">Every recommendation is bound by your physical operational constraints.</p>
                    </div>
                </div>
            </section>

            {/* 10. OUTCOMES */}
            <section className={styles.section}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className={styles.h2}>Predictable Growth. Reduced Friction.</h2>
                        <div className="grid gap-6">
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                <span className="bg-green-500/20 text-green-500 p-2 rounded-lg text-xs font-bold">READY</span>
                                <span className={styles.listItem}>Earlier problem detection</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                <span className="bg-green-500/20 text-green-500 p-2 rounded-lg text-xs font-bold">READY</span>
                                <span className={styles.listItem}>Clear priorities</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                <span className="bg-green-500/20 text-green-500 p-2 rounded-lg text-xs font-bold">READY</span>
                                <span className={styles.listItem}>Trackable execution</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                <span className="bg-green-500/20 text-green-500 p-2 rounded-lg text-xs font-bold">READY</span>
                                <span className={styles.listItem}>Predictable decisions</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-12 bg-blue-600 rounded-3xl text-white shadow-2xl shadow-blue-500/20">
                        <h3 className="text-3xl font-bold mb-6">Reality is your competitive advantage.</h3>
                        <p className="text-blue-100 mb-8">When everyone else is operating based on dashboards and spreadsheets, having a direct line to your business reality isn't just an upgrade — it's an unfair advantage.</p>
                        <Link to="/intake" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg">Build My AI Brain</Link>
                    </div>
                </div>
            </section>

            {/* 11. BEFORE / AFTER */}
            <section className={styles.section}>
                <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-800">
                    <div className="p-12 bg-slate-950">
                        <div className="text-slate-600 font-bold mb-8 uppercase tracking-widest text-xs">BEFORE</div>
                        <p className="text-3xl text-slate-500">“What do we think is happening?”</p>
                    </div>
                    <div className="p-12 bg-slate-900">
                        <div className="text-blue-500 font-bold mb-8 uppercase tracking-widest text-xs">AFTER</div>
                        <p className="text-3xl text-white">“Here is what is happening — and what to do next.”</p>
                    </div>
                </div>
            </section>

            {/* 12. FINAL CTA */}
            <section className={`${styles.section} text-center`}>
                <h2 className={styles.h1}>Find what’s actually slowing your business down</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                    Stop guessing. Get a deterministic constraint analysis that reveals the reality of your execution.
                </p>
                <div className="flex justify-center">
                    <Link to="/intake" className={styles.ctaPrimary}>Build My AI Brain</Link>
                </div>
            </section>

            {/* 13. FINAL LINE */}
            <section className="py-20 border-t border-slate-900 bg-slate-950/50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
                        The Strategic AI Brain gives you answers that are constrained by reality — not generated from probability.
                    </p>
                </div>
            </section>

            <TrustAgentShell enabled={true} mode="public" />
        </div>
    );
}
