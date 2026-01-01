import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section id="join" className="py-24 bg-primary text-primary-foreground border-y-4 border-black relative overflow-hidden">
            {/* Retro Grid Background Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            ></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                        Ready to Ship?
                    </h2>

                    <p className="text-xl md:text-2xl font-mono font-bold text-primary-foreground/90">
                        No automated forms. No HR screening. Just tell us what you've built.
                    </p>

                    <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="https://tally.so"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className=" cursor-pointer h-auto py-6 px-12 text-2xl font-black uppercase rounded-none border-4 border-black bg-accent text-accent-foreground hover:bg-white hover:text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
                            >
                                Apply Now
                            </Button>
                        </a>

                        <a
                            href="https://tally.so"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className=" cursor-pointer h-auto py-6 px-12 text-xl font-black uppercase rounded-none border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
                            >
                                Apply as Mentor
                            </Button>
                        </a>
                    </div>
                    <p className="mt-4 text-sm font-mono opacity-70 uppercase tracking-widest">
                        * Applications processed via Tally.so
                    </p>
                </div>
            </div>
        </section>
    )
}
