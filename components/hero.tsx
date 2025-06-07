import { GitBranch } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-900 dark:to-slate-800 text-white py-10 sm:py-16 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <GitBranch size={48} className="text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Lộ trình học Git và GitHub Desktop</h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">Làm chủ Git và GitHub Desktop trong 6 ngày</p>
      </div>
    </section>
  )
}
