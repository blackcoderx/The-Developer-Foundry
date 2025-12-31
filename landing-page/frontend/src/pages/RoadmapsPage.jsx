import React from 'react';
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { roadmapsData } from "../data/roadmaps";
import { Card, CardContent } from "@/components/ui/card";

export function RoadmapsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-mono">
            <Navbar />

            <main className="container mx-auto max-w-6xl px-4 py-20">
                <header className="mb-8 text-center">
                    <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                        Skill Roadmaps
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Structured paths to mastery. Follow these modules to build your engineering foundation.
                    </p>
                </header>

                {Object.entries(roadmapsData).map(([domainKey, domain]) => (
                    <section key={domainKey} className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-3xl font-black uppercase tracking-tight">
                                {domain.title}
                            </h2>
                            <div className="h-[2px] flex-1 bg-primary/20"></div>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {domain.levels.map((level) => (
                                <Card
                                    key={level.id}
                                    className={`rounded-none border-2 border-primary bg-card shadow-[8px_8px_0px_0px_var(--color-primary)] flex flex-col`}
                                >
                                    <div className="p-6 border-b-2 border-primary bg-primary/5">
                                        <h3 className="text-xl font-black uppercase tracking-widest text-primary">
                                            {level.title}
                                        </h3>
                                        <p className="text-xs font-bold uppercase text-muted-foreground mt-1">
                                            {level.subtitle}
                                        </p>
                                    </div>

                                    <CardContent className="p-6 flex-1 flex flex-col">
                                        <p className="text-sm font-medium mb-6">
                                            {level.description}
                                        </p>

                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Modules:</h4>
                                            <ul className="space-y-3">
                                                {level.modules.map((mod, i) => (
                                                    <li key={i} className="text-xs flex items-start gap-2 group">
                                                        <span className="text-accent font-bold">[{i}]</span>
                                                        <span className="font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                                                            {mod.title.replace(/Module \d+: /, '')}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>


                    </section>
                ))}

                <div className="mt-8">
                    <p className="text-base font-bold uppercase text-muted-foreground">Others Roadmaps are coming soon...</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
