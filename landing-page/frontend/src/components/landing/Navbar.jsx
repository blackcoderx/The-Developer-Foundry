import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        // Wrapper to prevent content jumping when navbar becomes fixed
        <div className="relative h-16 w-full z-50">
            <div
                style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                className={`transition-all duration-500 z-50 flex items-center justify-between border-2 border-primary bg-white backdrop-blur-sm shadow-[4px_4px_0px_0px_var(--color-primary)] ${isScrolled
                    ? "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-none"
                    : "absolute top-0 left-0 w-full rounded-none border-x-0 border-t-0 border-b-2 shadow-none"
                    }`}
            >
                <div className={`w-full flex items-center justify-between mx-auto ${isScrolled ? "px-6 py-3" : "container max-w-6xl px-4 py-4"}`}>
                    {/* Left: Logo */}
                    <Link to="/" className="text-2xl font-black text-primary uppercase tracking-tight font-mono whitespace-nowrap cursor-pointer hover:text-accent transition-colors">
                        The Developer Foundry
                    </Link>

                    {/* Right: Links & CTA */}
                    <div className="flex items-center gap-6">
                        <div className="hidden items-center gap-6 md:flex">
                            <Link to="/roadmaps" className="font-bold text-primary uppercase hover:text-accent transition-colors">
                                Roadmaps
                            </Link>

                            {/* Vertical Stroke Separator */}
                            <div className="h-6 w-[2px] bg-accent"></div>

                            <a href="/#projects" className="font-bold text-primary uppercase hover:text-accent transition-colors">
                                Projects
                            </a>

                            {/* Vertical Stroke Separator */}
                            <div className="h-6 w-[2px] bg-accent"></div>
                        </div>

                        <Button
                            size="lg"
                            className="rounded-none border-2 border-primary bg-accent text-accent-foreground font-bold uppercase shadow-[2px_2px_0px_0px_var(--color-primary)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all active:shadow-none cursor-pointer"
                        >
                            Join Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
