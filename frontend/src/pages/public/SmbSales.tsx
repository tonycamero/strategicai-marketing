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
    // New styles for clickable images
    imgContainer: "rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 cursor-zoom-in hover:border-slate-600 transition-colors group relative",
    img: "w-full h-auto",
    zoomHint: "absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all opacity-0 group-hover:opacity-100 pointer-events-none"
};

const scrollToTop = () => window.scrollTo(0, 0);

export default function SmbSales() {
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
                        <h1 className={styles.h1}>Get Strategic Clarity</h1>
                        <h2 className="text-xl md:text-2xl text-slate-300 font-normal mb-8">
                            Connect your vision to execution in days, not months.<br />
                            <strong className="text-white">Your Strategy. Executed.</strong>
                        </h2>
                        <button className={styles.ctaButton}>Get My Roadmap</button>
                    </div>
                    <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-dashboard-main.png')}>
                        <img src="/images/smb-dashboard-main.png" alt="StrategicAI Dashboard" className={styles.img} />
                        <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                    </div>
                </section>

                {/* Section 1: Strategic Intake */}
                {/* Section 1: Strategic Intake */}
                <section className={styles.section}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className={styles.h2}>We tune to your world: restaurant, agency, or trade.</h2>
                            <p className={styles.p}>One size fits no one. Select your specific business model to initialize the correct operational ontology.</p>
                            <ul className="space-y-3 mb-8">
                                <li className={styles.li}>• Industry-specific constraints</li>
                                <li className={styles.li}>• Pre-loaded role maps</li>
                                <li className={styles.li}>• Vocabulary alignment</li>
                            </ul>
                        </div>
                        <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-intake-org.png')}>
                            <img src="/images/smb-intake-org.png" alt="Organization Type Selection" className={styles.img} />
                            <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Role-Based Intake */}
                <section className={styles.section}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-intake-team.png')}>
                                <img src="/images/smb-intake-team.png" alt="Team Intake Status" className={styles.img} />
                                <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className={styles.h2}>We capture your team's reality—not assumptions.</h2>
                            <p className={styles.p}>Stop guessing where the bottlenecks are. Our role-based intake engines gather unfiltered perspectives from Sales, Ops, and Leadership.</p>
                            <ul className="space-y-3 mb-8">
                                <li className={styles.li}>• Anonymous feedback loops</li>
                                <li className={styles.li}>• Role-specific constraints</li>
                                <li className={styles.li}>• Identify blind spots instantly</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 3: Executive Brief */}
                <section className={styles.section}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-executive-brief.png')}>
                                <img src="/images/smb-executive-brief.png" alt="Executive Brief" className={styles.img} />
                                <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className={styles.h2}>A clear snapshot of what’s broken—and why.</h2>
                            <p className={styles.p}>Before we fix anything, we align your team on the problem. The Executive Brief consolidates all intake data into a single source of truth.</p>
                            <ul className="space-y-3 mb-8">
                                <li className={styles.li}>• Visual constraint mapping</li>
                                <li className={styles.li}>• Consensus scorecards</li>
                                <li className={styles.li}>• No more "he said, she said"</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4: AI Diagnostic */}
                <section className={styles.section}>
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className={styles.h2}>We synthesize into a prioritized action plan.</h2>
                        <p className={styles.p}>Our AI analyzes hundreds of data points to generate a custom diagnostic report and roadmap.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-report-overview.png')}>
                            <img src="/images/smb-report-overview.png" alt="Diagnostic Overview" className={styles.img} />
                            <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                        </div>
                        <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-report-opportunities.png')}>
                            <img src="/images/smb-report-opportunities.png" alt="AI Leverage Opportunities" className={styles.img} />
                            <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                        </div>
                    </div>
                </section>


                {/* Section 5: Trust Console */}
                <section className={styles.section}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className={styles.h2}>Ask anything. Your AI advisor knows your team’s reality.</h2>
                            <p className={styles.p}>The TrustConsole™ isn't just a chatbot—it's an advisor trained on your specific business context, constraints, and goals.</p>
                            <ul className="space-y-3 mb-8">
                                <li className={styles.li}>• "What should I focus on this week?"</li>
                                <li className={styles.li}>• "Draft a job description for the Ops Manager."</li>
                                <li className={styles.li}>• "Analyze our sales conversion bottleneck."</li>
                            </ul>
                        </div>
                        <div className={styles.imgContainer} onClick={() => setSelectedImage('/images/smb-trust-console.png')}>
                            <img src="/images/smb-trust-console.png" alt="TrustConsole Chat" className={styles.img} />
                            <div className={styles.zoomHint}><span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to expand</span></div>
                        </div>
                    </div>
                </section>

                {/* Section 6: CTA */}
                <section className={styles.section}>
                    <div className="text-center">
                        <h2 className={styles.h2}>Ready to Run Your Business Like a Pro?</h2>
                        <p className={styles.p}>No need to learn new tools. No chasing contractors.<br />Just clarity, visibility, and a machine that runs your plan.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <span className={styles.ctaButton}>Start your roadmap</span>
                            <button className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 hover:bg-slate-800 text-white font-medium transition cursor-pointer">
                                Talk to an advisor
                            </button>
                        </div>
                        <div className="mt-8">
                            <Link to="/partners">
                                <span className="text-slate-500 hover:text-slate-300 text-sm cursor-pointer border-b border-transparent hover:border-slate-300 transition-colors">
                                    Are you a consultant? → See the Partner Program
                                </span>
                            </Link>
                        </div>
                    </div>
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


