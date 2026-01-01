import React from 'react';
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { projectsData } from "../data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-mono">
            <Navbar />

            <main className="container mx-auto max-w-7xl px-4 py-20">
                <header className="mb-8 text-center">
                    <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                        Project Catalogue
                    </h1>
                    <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">
                        Stop watching tutorials. Start solving problems. <br />
                        These projects are designed to simulate real-world production tickets.
                    </p>
                </header>

                {Object.entries(projectsData).map(([domainKey, domain]) => (
                    <section key={domainKey} className="mb-32">
                        <div className="flex items-end gap-6 mb-12 border-b-4 border-primary pb-4">
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-primary">
                                {domain.title}
                            </h2>
                            <p className="text-muted-foreground font-bold uppercase mb-2 hidden md:block">
                                // {domain.description}
                            </p>
                        </div>

                        <div className="space-y-20">
                            {domain.tiers.map((tier) => (
                                <div key={tier.id} className="relative">
                                    {/* Tier Header */}
                                    <div className="mb-8 pl-4 border-l-4 border-accent">
                                        <h3 className="text-3xl font-black uppercase tracking-tight">
                                            {tier.title}
                                        </h3>
                                        <div className="text-accent font-bold uppercase text-sm mt-1">
                                            {tier.subtitle} • {tier.theme}
                                        </div>
                                        <div className="mt-2 text-muted-foreground text-sm font-bold bg-muted inline-block px-2 py-1">
                                            ⚠️ Constraint: {tier.constraint}
                                        </div>
                                    </div>

                                    {/* Projects Grid */}
                                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                        {tier.projects.map((project, idx) => (
                                            <Card
                                                key={idx}
                                                className="group relative flex flex-col rounded-none border-2 border-primary bg-card shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-[8px_8px_0px_0px_var(--color-accent)] hover:-translate-y-1 transition-all duration-300"
                                            >
                                                <CardHeader className="border-b-2 border-primary bg-primary/5 pb-4">
                                                    <CardTitle className="font-black uppercase tracking-tight text-lg leading-tight">
                                                        {project.title}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="p-6 flex-1 flex flex-col gap-4">
                                                    <div>
                                                        <span className="text-xs font-black uppercase text-muted-foreground tracking-widest">The Pitch</span>
                                                        <p className="font-bold text-sm mt-1">{project.pitch}</p>
                                                    </div>

                                                    <div>
                                                        <span className="text-xs font-black uppercase text-accent tracking-widest">The Twist</span>
                                                        <p className="text-sm mt-1 border-l-2 border-accent pl-2 italic">
                                                            {project.twist}
                                                        </p>
                                                    </div>

                                                    <div className="mt-auto pt-4 border-t-2 border-border/50">
                                                        <span className="text-xs font-black uppercase text-muted-foreground tracking-widest block mb-2">Tech Stack</span>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tech.split(', ').map((tech, tIdx) => (
                                                                <Badge key={tIdx} variant="outline" className="rounded-none border-primary/50 text-xs font-bold uppercase text-primary bg-primary/5">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <div>
                    <p>
                        <span className='font-black uppercase tracking-wider text-primary'>NB: </span>These projects are ideas. They are not developed yet
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
