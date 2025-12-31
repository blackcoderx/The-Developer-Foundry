import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="px-4 py-16 text-center md:py-20 bg-background text-foreground">
            {/* Eyebrow / Badge */}
            <div className="mb-8 inline-flex items-center gap-2 border-2 border-primary bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-[2px_2px_0px_0px_var(--color-primary)]">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Rookie Cohort: Enrollment Open
            </div>

            {/* Main Headline */}
            <h1 className="mb-8 text-4xl font-black tracking-tighter md:text-5xl lg:text-6xl">
                Stop Watching Tutorials. <br className="hidden md:block" /> Start Engineering.
            </h1>

            {/* Sub-Headline */}
            <p className="mx-auto mb-8 max-w-3xl text-lg font-medium text-primary/70 ">
                Most communities are just chat rooms. We are a training ground.
                Follow a structured path from <span className="font-bold text-accent">Rookie to Master</span>,
                build production-grade software (no To-Do lists allowed), and get hired.
            </p>

            {/* Trust Markers */}
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-muted-foreground">
                <span className="flex items-center gap-2">
                    <span className="">✅</span> Human Code Reviews
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                    <span className="">🤝</span> Pair Programming
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                    <span className="">🏆</span> 500+ Active Devs
                </span>
            </div>
        </section>
    )
}
