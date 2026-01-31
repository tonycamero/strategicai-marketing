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

export default function Partners() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                            <Link to="/pricing"><span className="text-sm text-slate-400 hover:text-white cursor-pointer">Pricing</span></Link>
                        </div>
                        <Link to="/partners"><span className="text-sm text-white font-medium cursor-pointer">Partner Program</span></Link>
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
                        <h1 className={styles.h1}>Deliver like a full agency — without building one.</h1>
                        <p className={styles.p}>
                            StrategicAI.app turns your 1:1 insights into repeatable, governed systems your SMB clients can trust.
                            You bring the strategy. We handle the infrastructure.
                        </p>
                        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-slate-900/50 italic text-slate-200">
                            This isn't just a delivery tool. It's your <strong>operating layer</strong> for SMB transformation.
                        </blockquote>
                    </div>
                    <div className={`${styles.imgContainer} mt-8`} onClick={() => setSelectedImage('/images/partner-dashboard-main.png')}>
                        <img src="/images/partner-dashboard-main.png" alt="Partner Control Plane" className={styles.img} />
                        <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                    </div>
                </section>

                {/* Section: Control & Delivery */}
                <section className={styles.section}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className={styles.h2}>Control & Delivery</h2>
                            <h3 className={styles.h3}>Briefs, roadmaps, diagnostics — one click delivery.</h3>
                            <p className={styles.p}>StrategicAI is designed for solo consultants, fractional operators, and lean firms.</p>
                            <ul className="space-y-3 mb-6">
                                <li className={styles.li}>• Deploy to a new client in &lt; 48 hours</li>
                                <li className={styles.li}>• Use your own SOPs or start with ours</li>
                                <li className={styles.li}>• Keep the relationship, let us power the delivery</li>
                            </ul>
                        </div>
                        <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/partner-delivery-console.png')}>
                            <img src="/images/partner-delivery-console.png" alt="Delivery Console" className={styles.img} />
                            <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                        </div>
                    </div>
                </section>

                {/* Section: Execution System */}
                <section className={styles.section}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className={`order-2 md:order-1 ${styles.imgContainer} max-w-[60%] mx-auto`} onClick={() => setSelectedImage('/images/partner-execution-steps.png')}>
                            <img src="/images/partner-execution-steps.png" alt="Execution Steps" className={styles.img} />
                            <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className={styles.h2}>Execution System</h2>
                            <h3 className={styles.h3}>You control when, how, and who gets to build.</h3>
                            <ul className="space-y-1 ml-4 list-disc text-slate-400">
                                <li>SOPs trigger real workflows.</li>
                                <li>Clients stop asking "what next?"</li>
                                <li>Automated tracking of every step.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What You Get / Features List */}
                <section className={styles.section}>
                    <h2 className={styles.h2}>Why SMBs Love It (and You Win)</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className={styles.h3}>Intake Engines</h3>
                            <ul className="space-y-1 ml-4 list-disc text-slate-400">
                                <li>Role-based portals collect Sales, Ops, and Executive intel.</li>
                                <li>No more chasing docs or misaligned assumptions.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={styles.h3}>TrustConsole™</h3>
                            <ul className="space-y-1 ml-4 list-disc text-slate-400">
                                <li>Clients can ask roadmap questions 24/7.</li>
                                <li>Grounded in KPIs, ticket activity, and progress.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={styles.h3}>ROI Dashboard</h3>
                            <ul className="space-y-1 ml-4 list-disc text-slate-400">
                                <li>Show time saved, margin recovered, and operational lift.</li>
                                <li>Clients see results, not confusion.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.section}>
                    <Link to="/partners">
                        <span className={styles.ctaButton}>Join the Partner Program</span>
                    </Link>
                </section>

            </main>

            <TrustAgentShell enabled={true} mode="homepage" />

            <ImageViewer isOpen={!!selectedImage} src={selectedImage} onClose={() => setSelectedImage(null)} />

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
