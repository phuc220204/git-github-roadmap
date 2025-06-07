import type { Metadata } from "next"
import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import DaysNavigation from "@/components/days-navigation"
import ProgressTracker from "@/components/progress-tracker"
import { ProgressDashboard } from "@/components/progress-dashboard"
import Resources from "@/components/resources"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Lộ trình học Git và GitHub Desktop trong 6 ngày",
  description: "Hướng dẫn toàn diện để học Git và GitHub Desktop trong 6 ngày",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Introduction />
        <DaysNavigation />
        <div className="mt-12">
          <ProgressDashboard />
        </div>
        <div className="mt-12">
          <ProgressTracker />
        </div>
        <div className="mt-12">
          <Resources />
        </div>
      </main>
      <Footer />
    </div>
  )
}
