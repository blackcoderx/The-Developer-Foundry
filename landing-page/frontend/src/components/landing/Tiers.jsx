import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

export function Tiers() {
    const tiers = [
        {
            title: "ROOKIE",
            subtitle: "The Builder in Training",
            accent: "emerald",
            borderColor: "border-emerald-500",
            bgColor: "bg-emerald-500/10",
            textColor: "text-emerald-600 dark:text-emerald-400",
            shadowColor: "shadow-[8px_8px_0px_0px_rgba(16,185,129,1)]",
            quote: "I'm learning to build things that actually work.",
            who: "Learning fundamentals. Learning to ship.",
            mission: [
                "Follow structured project templates.",
                "Build projects with guidance.",
                "Get comfortable with deployment."
            ],
            goal: "Ship your first production-ready project live on the internet.",
            hoverBgColor: "bg-emerald-500/20",
            btnText: "Start Here →"
        },
        {
            title: "ADVENTURER",
            subtitle: "The Independent Creator",
            accent: "amber",
            borderColor: "border-amber-500",
            bgColor: "bg-amber-500/10",
            textColor: "text-amber-600 dark:text-amber-400",
            shadowColor: "shadow-[8px_8px_0px_0px_rgba(245,158,11,1)]",
            quote: "I can build anything. Now I need to build something that matters.",
            who: "Ready for the job market. Ready to launch.",
            mission: [
                "Build projects without hand-holding.",
                "Find & build with teams.",
                "Give back by mentoring Rookies."
            ],
            goal: "Land a Job or Launch a Startup.",
            hoverBgColor: "bg-amber-500/20",
            btnText: "Join the Ranks →"
        },
        {
            title: "MASTER",
            subtitle: "The Community Leader",
            accent: "violet",
            borderColor: "border-violet-500",
            bgColor: "bg-violet-500/10",
            textColor: "text-violet-600 dark:text-violet-400",
            shadowColor: "shadow-[8px_8px_0px_0px_rgba(139,92,246,1)]",
            quote: "I've made it. Now I help others get here.",
            who: "Senior Engineer. Funded Founder.",
            mission: [
                "Lead technical masterclasses.",
                "Mentor the next generation.",
                "Share real career lessons."
            ],
            goal: "Permanent Community Leader.",
            btnText: "Apply to Lead →",
            hoverBgColor: "violet-500/20",
            isPremium: true
        }
    ]

    return (
        <section className="bg-background py-20 text-foreground" id="roadmap">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-center text-4xl font-black uppercase tracking-tight md:text-5xl">
                    The Roadmap
                </h2>

                <div className="grid gap-8 md:grid-cols-3 items-start">
                    {tiers.map((tier) => (
                        <Card
                            key={tier.title}
                            className={`rounded-none border-2 ${tier.borderColor} bg-card ${tier.shadowColor} transition-transform hover:-translate-y-1 h-full flex flex-col`}
                        >
                            {/* Header */}
                            <div className={`${tier.bgColor} border-b-2 ${tier.borderColor} p-6 text-center`}>
                                <h3 className={`text-2xl font-black uppercase tracking-widest ${tier.textColor}`}>
                                    {tier.title}
                                </h3>
                                <p className="font-mono text-sm font-bold uppercase test-secondary mt-1">
                                    {tier.subtitle}
                                </p>
                            </div>

                            <CardContent className="p-6 flex-1 flex flex-col">
                                {/* Quote */}
                                <div className="mb-6 border-l-4 border-muted pl-4 italic text-muted-foreground">
                                    "{tier.quote}"
                                </div>

                                {/* Who You Are */}
                                <div className="mb-6">
                                    <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Who You Are</h4>
                                    <p className="font-bold">{tier.who}</p>
                                </div>

                                {/* The Mission */}
                                <div className="mb-8 flex-1">
                                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">The Mission</h4>
                                    <ul className="space-y-2 text-sm font-medium">
                                        {tier.mission.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className={tier.textColor}>✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Graduation Goal */}
                                <div className={`mt-auto mb-6 border-t-2 ${tier.borderColor} pt-4`}>
                                    <h4 className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Graduation Goal</h4>
                                    <p className={`font-bold ${tier.textColor}`}>{tier.goal}</p>
                                </div>

                                {/* Button */}
                                <Link to="/roadmaps" className="block w-full">
                                    <Button
                                        className={`w-full rounded-none border-2 ${tier.borderColor} ${tier.bgColor} font-bold uppercase hover:bg-white hover:text-${tier.accent}-600 cursor-pointer transition-all`}
                                        variant="outline"
                                    >
                                        {tier.btnText}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
