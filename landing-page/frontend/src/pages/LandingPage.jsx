import { Navbar } from "../components/landing/Navbar"
import { Hero } from "../components/landing/Hero"
import { Mission } from "../components/landing/Mission"
import { Tiers } from "../components/landing/Tiers"
import { Benefits } from "../components/landing/Benefits"
import { CTASection } from "../components/landing/CTASection"
import { Footer } from "../components/landing/Footer"

export function LandingPage() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />
            <Hero />
            <Mission />
            <Tiers />
            <Benefits />
            <CTASection />
            <Footer />
        </div>
    )
}
