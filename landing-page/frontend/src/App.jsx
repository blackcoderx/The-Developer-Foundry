import { Navbar } from "./components/landing/Navbar"
import { Hero } from "./components/landing/Hero"
import { Mission } from "./components/landing/Mission"
import { Tiers } from "./components/landing/Tiers"
import { Benefits } from "./components/landing/Benefits"
import { ApplicationForm } from "./components/landing/ApplicationForm"
import { Footer } from "./components/landing/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-[#1a1a1a] dark:bg-[#1a1a1a] dark:text-[#f5f5f5]">
      <Navbar />
      <Hero />
      <Mission />
      <Tiers />
      <Benefits />
      <ApplicationForm />
      <Footer />
    </div>
  )
}

export default App
