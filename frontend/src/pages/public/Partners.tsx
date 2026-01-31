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
    section: "max-w-5xl mx-auto px-6 py-16 border-b border-slate-800/50 last:border-0",
    ctaButton: "inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition cursor-pointer",
    secondaryButton: "inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 hover:bg-slate-800 text-white font-medium transition cursor-pointer",
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
                {/* Section 1: Identity Framing */}
                <section className={styles.section}>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className={styles.h1}>Leverage, Not Links.</h1>
                        <p className={styles.p}>
                            This is for serious partners building with leverage — not link-pushers.
                            Whether you are an Authority Brand, an Execution Agency, or a Strategic Consultant,
                            StrategicAI is your infrastructure layer.
                        </p>
                    </div>
                </section>

                {/* Section 2: Three Partner Archetypes */}
                <section className={styles.section}>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Authority Partners */}
                        <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold border border-blue-900/50 mb-4">FOR BRANDS & LISTS</span>
                                <h3 className={styles.h3}>Authority Partners</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    You have the audience. You have the IP. Don't just sell a course—license a complete operating system branded to your methodology.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                                    <li>• Infrastructure Licensing</li>
                                    <li>• Recurring Platform Revenue</li>
                                    <li>• Economics &gt; Commissions</li>
                                </ul>
                            </div>
                            <div className="mt-auto space-y-3">
                                <Link to="/authority-partner" className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition cursor-pointer">
                                    Explore the Authority License
                                </Link>
                                <Link to="/authority-economics" className="block text-center text-slate-400 hover:text-white py-2 text-sm transition cursor-pointer">
                                    Understand the Model →
                                </Link>
                            </div>
                        </div>

                        {/* Execution Partners */}
                        <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 hover:border-green-500/30 transition-all flex flex-col">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-green-900/20 text-green-400 text-xs font-bold border border-green-900/50 mb-4">FOR AGENCIES & OPS</span>
                                <h3 className={styles.h3}>Certified Operators</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    You do the work. Stop building custom stacks for every client. Deploy a standardized execution environment in 48 hours.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                                    <li>• Sell & Deliver Roadmaps</li>
                                    <li>• Certified Implementation</li>
                                    <li>• High-Margin Retainers</li>
                                </ul>
                            </div>
                            <div className="mt-auto space-y-3">
                                <Link to="/certified-operator" className="block text-center bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-sm font-medium transition cursor-pointer">
                                    View the Operator Path
                                </Link>
                                <Link to="/partner-revenue-simulator" className="block text-center text-slate-400 hover:text-white py-2 text-sm transition cursor-pointer">
                                    Run Revenue Simulator →
                                </Link>
                            </div>
                        </div>

                        {/* Strategic / Exploratory */}
                        <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all flex flex-col">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-xs font-bold border border-purple-900/50 mb-4">STRATEGIC & CUSTOM</span>
                                <h3 className={styles.h3}>Strategic Advisors</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    High-signal consultants and fractional executives. Evaluate the fit for your practice or enterprise deployment.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                                    <li>• Evaluate Platform Fit</li>
                                    <li>• Enterprise Deployments</li>
                                    <li>• Custom Integration</li>
                                </ul>
                            </div>
                            <div className="mt-auto space-y-3">
                                <Link to="/authority-economics" className="block text-center border border-slate-700 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition cursor-pointer">
                                    Understand the Economics
                                </Link>
                                <Link to="/partner-revenue-simulator" className="block text-center text-slate-400 hover:text-white py-2 text-sm transition cursor-pointer">
                                    Simulate Delivery Models →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Explicit Partnership Philosophy */}
                <section className={styles.section}>
                    <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-8 max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Our Partnership Philosophy</h2>
                            <p className="text-lg text-slate-400 italic">"StrategicAI is not an affiliate network."</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-white mb-2">Structure & Safety</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Access is structured to maintain leverage, protect quality, and align incentives. We don't do "open" pricing; a governance layer is required.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-2">True Ownership</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Revenue flows through the platform to ensure fairness, but you retain IP, audience ownership, and pricing power above the floor.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <TrustAgentShell enabled={true} mode="public" />
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
