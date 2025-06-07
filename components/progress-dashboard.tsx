"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useProgress, dayLabels } from "@/hooks/use-progress"
import { Award, CheckCircle, BookOpen, FileText, GraduationCap, BarChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export function ProgressDashboard() {
  const { isLoaded, getOverallProgress, getDayProgress, getProgressByType } = useProgress()
  const router = useRouter()

  if (!isLoaded) {
    return <div>Đang tải...</div>
  }

  const overallProgress = getOverallProgress()
  const theoryProgress = getProgressByType("theory")
  const exerciseProgress = getProgressByType("exercise")
  const quizProgress = getProgressByType("quiz")

  const days = ["day1", "day2", "day3", "day4", "day5", "day6", "guide"]
  const dayProgressData = days.map((day) => getDayProgress(day))

  const navigateToDay = (day: string) => {
    router.push(`#${day}`)

    // Kích hoạt tab tương ứng
    const tabElement = document.getElementById(`${day}-tab`)
    if (tabElement) {
      tabElement.click()
    }
  }

  return (
    <Card className="border-green-200 dark:border-green-800">
      <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800">
        <CardTitle className="text-xl flex items-center gap-2">
          <BarChart className="h-5 w-5 text-green-600 dark:text-green-400" />
          Tổng quan tiến độ
          {overallProgress.percentage === 100 && (
            <Badge variant="success" className="ml-2">
              <Award className="h-3.5 w-3.5 mr-1" /> Hoàn thành
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Tiến độ tổng thể</span>
            <span className="text-sm font-medium">
              {overallProgress.completedItems}/{overallProgress.totalItems} ({Math.round(overallProgress.percentage)}%)
            </span>
          </div>
          <Progress value={overallProgress.percentage} className="h-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="font-medium text-blue-700 dark:text-blue-400">Lý thuyết</span>
            </div>
            <div className="text-2xl font-bold mb-1 text-blue-700 dark:text-blue-400">
              {Math.round(theoryProgress.percentage)}%
            </div>
            <Progress value={theoryProgress.percentage} className="h-1.5 mb-2 bg-blue-200 dark:bg-blue-800">
              <div className="h-full bg-blue-600 dark:bg-blue-400" style={{ width: `${theoryProgress.percentage}%` }} />
            </Progress>
            <div className="text-sm text-blue-600 dark:text-blue-400">
              {theoryProgress.completedItems}/{theoryProgress.totalItems} hoàn thành
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="font-medium text-green-700 dark:text-green-400">Bài tập</span>
            </div>
            <div className="text-2xl font-bold mb-1 text-green-700 dark:text-green-400">
              {Math.round(exerciseProgress.percentage)}%
            </div>
            <Progress value={exerciseProgress.percentage} className="h-1.5 mb-2 bg-green-200 dark:bg-green-800">
              <div
                className="h-full bg-green-600 dark:bg-green-400"
                style={{ width: `${exerciseProgress.percentage}%` }}
              />
            </Progress>
            <div className="text-sm text-green-600 dark:text-green-400">
              {exerciseProgress.completedItems}/{exerciseProgress.totalItems} hoàn thành
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-100 dark:border-amber-800">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="font-medium text-amber-700 dark:text-amber-400">Kiểm tra</span>
            </div>
            <div className="text-2xl font-bold mb-1 text-amber-700 dark:text-amber-400">
              {Math.round(quizProgress.percentage)}%
            </div>
            <Progress value={quizProgress.percentage} className="h-1.5 mb-2 bg-amber-200 dark:bg-amber-800">
              <div className="h-full bg-amber-600 dark:bg-amber-400" style={{ width: `${quizProgress.percentage}%` }} />
            </Progress>
            <div className="text-sm text-amber-600 dark:text-amber-400">
              {quizProgress.completedItems}/{quizProgress.totalItems} hoàn thành
            </div>
          </div>
        </div>

        <h4 className="font-medium mb-3">Tiến độ theo ngày</h4>
        <div className="space-y-3">
          {dayProgressData.map((dayProgress) => (
            <div
              key={dayProgress.day}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
              onClick={() => navigateToDay(dayProgress.day)}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <div
                  className={`h-2 w-2 rounded-full ${
                    dayProgress.day === "day1"
                      ? "bg-blue-500"
                      : dayProgress.day === "day2"
                        ? "bg-green-500"
                        : dayProgress.day === "day3"
                          ? "bg-purple-500"
                          : dayProgress.day === "day4"
                            ? "bg-orange-500"
                            : dayProgress.day === "day5"
                              ? "bg-pink-500"
                              : dayProgress.day === "day6"
                                ? "bg-indigo-500"
                                : "bg-gray-500"
                  }`}
                />
                <span className="font-medium">{dayLabels[dayProgress.day]}</span>
                {dayProgress.percentage === 100 && <CheckCircle className="h-4 w-4 text-green-500" />}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 sm:w-32">
                  <Progress value={dayProgress.percentage} className="h-1.5" />
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {dayProgress.completedItems}/{dayProgress.totalItems}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
