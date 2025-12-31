import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/landing/Navbar';
import { roadmapsData } from '../data/roadmaps';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function RoadmapDetailPage() {
    const { domain, levelId } = useParams();
    const domainData = roadmapsData[domain];
    const level = domainData?.levels.find(l => l.id === levelId);

    if (!level) {
        return (
            <div className="min-h-screen bg-background text-foreground font-mono flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-black mb-4 uppercase">Roadmap Not Found</h1>
                <Link to="/roadmaps">
                    <Button variant="outline" className="border-2 border-primary rounded-none font-bold uppercase">
                        Back to Roadmaps
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-mono">
            <Navbar />

            <main className="container mx-auto max-w-4xl px-4 py-20">
                {/* Header Section */}
                <div className="mb-12">
                    <Link to="/roadmaps" className="inline-block mb-8 text-sm font-bold uppercase hover:text-accent transition-colors">
                        ← Back to Roadmaps
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-primary pb-8">
                        <div>
                            <span className="inline-block bg-accent text-white px-3 py-1 text-xs font-black uppercase mb-4">
                                {domainData.title}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                                {level.title}
                            </h1>
                            <p className="text-muted-foreground text-xl mt-4 max-w-2xl leading-relaxed">
                                {level.description}
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-24 h-24 border-4 border-primary bg-accent/10 flex items-center justify-center text-4xl shadow-[8px_8px_0px_0px_var(--color-primary)]">
                                🛠️
                            </div>
                        </div>
                    </div>
                </div>

                {/* Curriculum Section */}
                <div className="space-y-12">
                    {level.modules.map((module, idx) => (
                        <section key={idx} className="relative pl-8 md:pl-16">
                            {/* Vertical Line Connector */}
                            {idx !== level.modules.length - 1 && (
                                <div className="absolute left-[15px] md:left-[31px] top-8 bottom-[-48px] w-1 bg-primary/20"></div>
                            )}

                            {/* Module Number Bulb */}
                            <div className="absolute left-0 top-0 w-8 h-8 md:w-16 md:h-16 rounded-none border-4 border-primary bg-background z-10 flex items-center justify-center font-black text-xl md:text-2xl shadow-[4px_4px_0px_0px_var(--color-primary)]">
                                {idx}
                            </div>

                            <div className="pt-1">
                                <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tight flex items-center gap-4">
                                    {module.title}
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 bg-primary/5 p-4 border-l-4 border-primary">
                                    {module.description}
                                </p>

                                {/* Success Criteria */}
                                {module.checkmarks && (
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {module.checkmarks.map((check, cIdx) => (
                                            <div
                                                key={cIdx}
                                                className="group flex items-start gap-4 p-4 border-2 border-primary/20 bg-card hover:border-primary transition-colors cursor-default"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 border-2 border-primary flex items-center justify-center bg-background group-hover:bg-accent group-hover:text-white transition-colors">
                                                    <Check className="w-4 h-4" />
                                                </div>
                                                <span className="font-bold text-sm uppercase leading-tight">
                                                    {check}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-32 p-12 border-4 border-primary bg-primary text-primary-foreground text-center relative overflow-hidden group">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tighter">
                            Ready to ship?
                        </h2>
                        <Link to="/#apply">
                            <Button size="lg" className="bg-accent hover:bg-white hover:text-accent font-black uppercase rounded-none px-12 py-8 text-xl border-4 border-white transition-all transform hover:scale-105 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                                Start the Phase →
                            </Button>
                        </Link>
                    </div>
                    {/* Retro Grid Decorative Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    </div>
                </div>
            </main>
        </div>
    );
}
