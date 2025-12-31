import { Button } from "@/components/ui/button"

export function Mission() {
    return (
        <section className="py-20 text-foreground bg-background/95">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-3xl font-black uppercase tracking-tight md:text-5xl">
                        Self-Taught Doesn't Mean "Alone."
                    </h2>
                    <p className="mx-auto max-w-3xl font-medium text-sm text-primary/50 md:text-base">
                        The hardest part of learning to code isn't syntax. It’s the lack of direction, the isolation, and the "Tutorial Hell" loop.
                    </p>
                </div>

                {/* Comparison Card */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* The Typical Journey (Problem) */}
                    <div className="relative border-2 border-destructive bg-card p-8 shadow-[8px_8px_0px_0px_var(--color-destructive)]">
                        <div className="mb-6 border-b-2 border-destructive pb-4">
                            <h3 className="text-2xl font-bold uppercase text-destructive">
                                🔴 The Typical Journey
                            </h3>
                        </div>
                        <ul className="space-y-4 text-left font-medium">
                            <li className="flex items-start gap-3">
                                <span className="text-xl">❌</span>
                                <span>Curriculum: Random YouTube tutorials and unfinished Udemy courses.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">❌</span>
                                <span>Feedback: Zero. You have no idea if your code is good or garbage.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">❌</span>
                                <span>Community: Silent Discord servers filled with "Hello" messages.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">❌</span>
                                <span>Result: You know syntax, but you can't build an app.</span>
                            </li>
                        </ul>
                    </div>

                    {/* The Foundry Experience (Solution) */}
                    <div className="relative border-2 border-green-600 bg-card p-8 shadow-[8px_8px_0px_0px_rgb(22,163,74)]">
                        <div className="mb-6 border-b-2 border-green-600 pb-4">
                            <h3 className="text-2xl font-bold uppercase text-green-600">
                                🟢 The Foundry Experience
                            </h3>
                        </div>
                        <ul className="space-y-4 text-left font-medium">
                            <li className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <span>Curriculum: A linear, rigorous roadmap (Rookie → Master).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <span>Feedback: Mandatory code reviews from Mentors before you advance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <span>Community: Daily standups, pair programming, and live builds.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <span>Result: You possess the Engineering skills to get hired.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* The Bridge / Hook */}
                <div className="mt-20 text-center">
                    <p className="mb-6 text-base font-semibold">
                        We’ve distilled the chaotic path of self-teaching into three distinct phases. <br className="hidden md:block" />
                        Here is your map.
                    </p>
                </div>
            </div>
        </section>
    )
}
