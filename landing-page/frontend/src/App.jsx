import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { RoadmapsPage } from "./pages/RoadmapsPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/roadmaps" element={<RoadmapsPage />} />
        {/* Fallback to landing for now */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
