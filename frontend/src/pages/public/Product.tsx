import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrustAgentShell } from '../../trustagent/TrustAgentShell';
import { ImageViewer } from '../../components/ImageViewer';

const styles = {
    h1: "text-4xl md:text-5xl font-bold text-white mb-6 leading-tight",
    h2: "text-2xl md:text-3xl font-bold text-white mb-6",
    h3: "text-xl font-bold text-white mb-4",
    p: "text-lg text-slate-400 mb-6 leading-relaxed",
    li: "text-slate-300 mb-2 flex items-start gap-2",
    section: "max-w-4xl mx-auto px-6 py-16 border-b border-slate-800/50 last:border-0",
    ctaButton: "inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition cursor-pointer",
    imgContainer: "rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 cursor-zoom-in hover:border-slate-600 transition-colors group relative",
    img: "w-full h-auto",
    zoomHint: "absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all opacity-0 group-hover:opacity-100 pointer-events-none"
};

const scrollToTop = () => window.scrollTo(0, 0);

export default function Product() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(scrollToTop, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <main>
                {/* Hero */}
                <section className={styles.section}>
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h1 className={styles.h1}>Everything You Need to Execute Your Strategy — in Just 7 Days</h1>
                        <p className={styles.p}>
                            No more spreadsheets, docs, or chasing your team. StrategicAI runs your business plan, so you don’t have to.
                        </p>
                        <Link to="/intake" className={styles.ctaButton}>Build My AI Brain</Link>
                    </div>
                </section>

                {/* Core Modules Grid */}
                <section className={styles.section}>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h2 className={styles.h2}>Role-Based Intake</h2>
                            <p className={styles.p}>Capture the real constraints from Sales, Ops, and Leadership without the "meeting fatigue".</p>
                            <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-intake-org.png')}>
                                <img src="/images/smb-intake-org.png" alt="Role-Based Intake" className={styles.img} />
                                <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                            </div>
                        </div>
                        <div>
                            <h2 className={styles.h2}>Executive Brief</h2>
                            <p className={styles.p}>A single source of truth that aligns the entire team on the problems worth solving first.</p>
                            <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-executive-brief.png')}>
                                <img src="/images/smb-executive-brief.png" alt="Executive Brief" className={styles.img} />
                                <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h2 className={styles.h2}>Diagnostic Report</h2>
                            <p className={styles.p}>Instant synthesis of challenges into a prioritized battle plan for the next 90 days.</p>
                            <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-report-opportunities.png')}>
                                <img src="/images/smb-report-opportunities.png" alt="Diagnostic Report" className={styles.img} />
                                <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                            </div>
                        </div>
                        <div>
                            <h2 className={styles.h2}>Strategic AI Brain™</h2>
                            <p className={styles.p}>Your 24/7 AI COO. Ask questions, check status, and get guidance trained on your specific context.</p>
                            <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-trust-console.png')}>
                                <img src="/images/smb-trust-console.png" alt="Strategic AI Brain" className={styles.img} />
                                <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes It Different */}
                <section className={styles.section}>
                    <h2 className={styles.h2}>Way Beyond Dashboards</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <h3 className={styles.h3}>Built for Operations</h3>
                            <p className="text-slate-400">Not a SaaS metric tracker. A system that actually moves work forward.</p>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <h3 className={styles.h3}>Active, Not Passive</h3>
                            <p className="text-slate-400">It doesn't just show you data. It tells you what to do next.</p>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <h3 className={styles.h3}>Always On</h3>
                            <p className="text-slate-400">Answers "what's next?" for your team 24/7, even when you're sleeping.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.section}>
                    <div className="text-center">
                        <h2 className={styles.h2}>Superior Operational Intelligence in Just 7 Days</h2>
                        <Link to="/intake" className={styles.ctaButton}>Build My AI Brain</Link>
                    </div>
                </section>
            </main>

            <TrustAgentShell enabled={true} mode="public" />
            <ImageViewer isOpen={!!selectedImage} src={selectedImage} onClose={() => setSelectedImage(null)} />

        </div>
    );
}
