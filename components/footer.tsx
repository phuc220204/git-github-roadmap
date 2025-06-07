import { GitBranch, Github, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-6 sm:py-8 mt-8 sm:mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-3 sm:mb-4">
          <GitBranch className="h-5 w-5 sm:h-6 sm:w-6" />
          <Github className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <p className="mb-2 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Lộ trình học Git và GitHub Desktop
        </p>
        <p className="text-xs sm:text-sm text-slate-300 flex items-center justify-center">
          Được tạo với <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-red-500" /> để hỗ trợ học tập
        </p>
      </div>
    </footer>
  )
}
