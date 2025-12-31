import { TrendingUp, MessageSquare, Code, Users } from "lucide-react"

export function Benefits() {
    return (
        <section className="bg-background/95 py-20 text-foreground">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-center text-4xl font-black uppercase tracking-tight md:text-5xl">
                    Why Join The Foundry?
                </h2>

                <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
                    {/* Box 1: Real World Experience (Hero Box - Tall Left) */}
                    <div className="relative overflow-hidden rounded-none border-2 border-primary bg-zinc-900 p-8 text-white shadow-[8px_8px_0px_0px_var(--color-accent)] md:col-span-1 md:row-span-2 flex flex-col">
                        <div className="relative z-10 flex-1">
                            <h3 className="mb-4 text-2xl font-black uppercase text-white">Real World Experience</h3>
                            <p className="mb-8 text-zinc-400">
                                Work on actual products used by real people, not throwaway to-do list apps.
                            </p>
                        </div>

                        {/* Terminal Visual */}
                        <div className="mt-auto w-full rounded-none border-2 border-zinc-700 bg-black font-mono text-xs p-4 shadow-none">
                            <div className="flex gap-1 mb-2">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-1 text-green-400">
                                <p>➜  foundry git:(main) npm run deploy</p>
                                <p className="text-zinc-500">Building production bundle...</p>
                                <p>✓ Built in 452ms</p>
                                <p>➜  Deploying to production...</p>
                                <p className="text-white">🚀 Deployment Successful!</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 2: Code Reviews (Wide Top Right) */}
                    <div className="relative rounded-none border-2 border-primary bg-white p-8 text-foreground shadow-[8px_8px_0px_0px_var(--color-accent)] md:col-span-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex-1">
                                <h3 className="mb-2 text-xl font-black uppercase">Code Reviews</h3>
                                <p className="text-muted-foreground">
                                    Get brutal, honest feedback on your PRs from senior engineers. We don't sugarcoat; we help you grow.
                                </p>
                            </div>

                            {/* PR Visual */}
                            <div className="shrink-0 w-full md:w-64 rounded-none border-2 border-primary/20 bg-background p-4 text-sm font-mono shadow-sm">
                                <div className="flex items-center gap-2 border-b border-primary/10 pb-2 mb-2">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">!</div>
                                    <span className="font-bold text-destructive">Changes Requested</span>
                                </div>
                                <p className="text-primary/80">"Great logic, but this O(n^2) loop isn't scalable. Let's refactor using a hash map."</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 3: Community (Small Bottom Left-Center) */}
                    <div className="relative rounded-none border-2 border-primary bg-white p-6 text-foreground shadow-[8px_8px_0px_0px_var(--color-accent)]">
                        <h3 className="mb-2 text-lg font-black uppercase">Community</h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Connect with ambitious builders.
                        </p>

                        {/* Avatar Stack Visual */}
                        <div className="flex items-center -space-x-4 mt-auto">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-accent font-bold text-accent-foreground ring-2 ring-background">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-primary bg-background text-xs font-bold text-muted-foreground ring-2 ring-background">
                                +500
                            </div>
                        </div>
                    </div>

                    {/* Box 4: Career Growth (Small Bottom Right) */}
                    <div className="relative rounded-none border-2 border-primary bg-white p-6 text-foreground shadow-[8px_8px_0px_0px_var(--color-accent)]">
                        <h3 className="mb-2 text-lg font-black uppercase">Career Growth</h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Learn the soft skills that get you hired.
                        </p>

                        {/* Chart Visual */}
                        <div className="flex items-end gap-1 h-16 mt-auto">
                            <div className="w-1/5 bg-primary/20 h-[30%]"></div>
                            <div className="w-1/5 bg-primary/40 h-[50%]"></div>
                            <div className="w-1/5 bg-primary/60 h-[40%]"></div>
                            <div className="w-1/5 bg-primary/80 h-[70%]"></div>
                            <div className="w-1/5 bg-primary h-[90%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
