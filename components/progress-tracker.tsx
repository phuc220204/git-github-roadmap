"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProgress, dayLabels } from "@/hooks/use-progress"
import { BarChart, CheckCircle, BookOpen, FileText, GraduationCap, Award, RotateCcw } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export default function ProgressTracker() {
  const {
    isLoaded,
    getDayProgress,
    getOverallProgress,
    getProgressByType,
    markDayAsCompleted,
    markDayAsIncomplete,
    resetProgress,
    toggleItemCompletion,
  } = useProgress()
  const [activeTab, setActiveTab] = useState("overview")
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleToggleItemCompletion = useCallback(
    (itemId: string) => {
      toggleItemCompletion(itemId)
    },
    [toggleItemCompletion],
  )

  if (!isLoaded) {
    return <div>Đang tải...</div>
  }

  const overallProgress = getOverallProgress()
  const theoryProgress = getProgressByType("theory")
  const exerciseProgress = getProgressByType("exercise")
  const quizProgress = getProgressByType("quiz")

  const days = ["day1", "day2", "day3", "day4", "day5", "day6", "guide"]
  const dayProgressData = days.map((day) => getDayProgress(day))

  const handleMarkDayComplete = (day: string) => {
    markDayAsCompleted(day)
    toast({
      title: "Đã đánh dấu hoàn thành",
      description: `Bạn đã hoàn thành ${dayLabels[day]}`,
      variant: "default",
    })
  }

  const handleMarkDayIncomplete = (day: string) => {
    markDayAsIncomplete(day)
    toast({
      title: "Đã đánh dấu chưa hoàn thành",
      description: `Bạn đã đánh dấu ${dayLabels[day]} là chưa hoàn thành`,
      variant: "default",
    })
  }

  const handleResetProgress = () => {
    resetProgress()
    setIsResetDialogOpen(false)
    toast({
      title: "Đã đặt lại tiến độ",
      description: "Tiến độ học tập của bạn đã được đặt lại",
      variant: "default",
    })
  }

  return (
    <Card>
      <CardHeader className="bg-green-600 text-white flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <BarChart className="h-5 w-5" />
          Theo dõi tiến độ học tập
        </CardTitle>
        <Dialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <RotateCcw className="h-4 w-4 mr-1" />
              Đặt lại
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Đặt lại tiến độ học tập</DialogTitle>
              <DialogDescription>
                Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập? Hành động này không thể hoàn tác.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsResetDialogOpen(false)}>
                Hủy
              </Button>
              <Button variant="destructive" onClick={handleResetProgress}>
                Đặt lại
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span className="font-medium">Tiến độ tổng thể</span>
              {overallProgress.percentage === 100 && (
                <Award className="h-5 w-5 text-yellow-500" title="Đã hoàn thành toàn bộ lộ trình" />
              )}
            </div>
            <span className="text-sm font-medium">
              {overallProgress.completedItems}/{overallProgress.totalItems} ({Math.round(overallProgress.percentage)}%)
            </span>
          </div>
          <Progress value={overallProgress.percentage} className="h-2" />
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <BarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Tổng quan</span>
            </TabsTrigger>
            <TabsTrigger value="days" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Theo ngày</span>
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Theo loại</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    Lý thuyết
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{Math.round(theoryProgress.percentage)}%</div>
                  <Progress value={theoryProgress.percentage} className="h-1.5 mb-2" />
                  <div className="text-sm text-muted-foreground">
                    {theoryProgress.completedItems}/{theoryProgress.totalItems} hoàn thành
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText className="h-4 w-4 text-green-500" />
                    Bài tập
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{Math.round(exerciseProgress.percentage)}%</div>
                  <Progress value={exerciseProgress.percentage} className="h-1.5 mb-2" />
                  <div className="text-sm text-muted-foreground">
                    {exerciseProgress.completedItems}/{exerciseProgress.totalItems} hoàn thành
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-amber-500" />
                    Kiểm tra
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{Math.round(quizProgress.percentage)}%</div>
                  <Progress value={quizProgress.percentage} className="h-1.5 mb-2" />
                  <div className="text-sm text-muted-foreground">
                    {quizProgress.completedItems}/{quizProgress.totalItems} hoàn thành
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Tiến độ theo ngày</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dayProgressData.map((dayProgress) => (
                    <div key={dayProgress.day}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{dayLabels[dayProgress.day]}</span>
                          {dayProgress.percentage === 100 && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <span className="text-xs">
                          {dayProgress.completedItems}/{dayProgress.totalItems}
                        </span>
                      </div>
                      <Progress value={dayProgress.percentage} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="days">
            <div className="space-y-6">
              {dayProgressData.map((dayProgress) => (
                <Card key={dayProgress.day}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-base flex items-center gap-2">
                        {dayProgress.day === "day1" ? (
                          <BookOpen className="h-4 w-4 text-blue-500" />
                        ) : dayProgress.day === "day2" ? (
                          <BookOpen className="h-4 w-4 text-green-500" />
                        ) : dayProgress.day === "day3" ? (
                          <BookOpen className="h-4 w-4 text-purple-500" />
                        ) : dayProgress.day === "day4" ? (
                          <BookOpen className="h-4 w-4 text-orange-500" />
                        ) : dayProgress.day === "day5" ? (
                          <BookOpen className="h-4 w-4 text-pink-500" />
                        ) : dayProgress.day === "day6" ? (
                          <BookOpen className="h-4 w-4 text-indigo-500" />
                        ) : (
                          <BookOpen className="h-4 w-4 text-gray-500" />
                        )}
                        {dayLabels[dayProgress.day]}
                        {dayProgress.percentage === 100 && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkDayComplete(dayProgress.day)}
                          disabled={dayProgress.percentage === 100}
                        >
                          Đánh dấu hoàn thành
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkDayIncomplete(dayProgress.day)}
                          disabled={dayProgress.percentage === 0}
                        >
                          Đặt lại
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Tiến độ</span>
                      <span className="text-sm">
                        {dayProgress.completedItems}/{dayProgress.totalItems} ({Math.round(dayProgress.percentage)}%)
                      </span>
                    </div>
                    <Progress value={dayProgress.percentage} className="h-2 mb-4" />

                    <div className="space-y-2">
                      {dayProgress.items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                item.type === "theory"
                                  ? "bg-blue-500"
                                  : item.type === "exercise"
                                    ? "bg-green-500"
                                    : "bg-amber-500"
                              }`}
                            />
                            <span className="text-sm">{item.title}</span>
                          </div>
                          <div className="flex items-center">
                            {item.completed && <CheckCircle className="h-4 w-4 text-green-500 mr-2" />}
                            <Button
                              variant={item.completed ? "outline" : "default"}
                              size="sm"
                              className={item.completed ? "border-green-200 text-green-700" : ""}
                              onClick={() => {
                                handleToggleItemCompletion(item.id)
                              }}
                            >
                              {item.completed ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="types">
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    Lý thuyết
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Tiến độ</span>
                    <span className="text-sm">
                      {theoryProgress.completedItems}/{theoryProgress.totalItems} (
                      {Math.round(theoryProgress.percentage)}%)
                    </span>
                  </div>
                  <Progress value={theoryProgress.percentage} className="h-2 mb-4" />

                  <div className="space-y-2">
                    {dayProgressData.flatMap((dayProgress) =>
                      dayProgress.items
                        .filter((item) => item.type === "theory")
                        .map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-2 border rounded-md">
                            <div className="flex items-center gap-2">
                              <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">
                                {dayLabels[dayProgress.day].split(":")[0]}
                              </div>
                              <span className="text-sm">{item.title}</span>
                            </div>
                            <div className="flex items-center">
                              {item.completed && <CheckCircle className="h-4 w-4 text-green-500 mr-2" />}
                              <Button
                                variant={item.completed ? "outline" : "default"}
                                size="sm"
                                className={item.completed ? "border-green-200 text-green-700" : ""}
                                onClick={() => {
                                  handleToggleItemCompletion(item.id)
                                }}
                              >
                                {item.completed ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}
                              </Button>
                            </div>
                          </div>
                        )),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText className="h-4 w-4 text-green-500" />
                    Bài tập
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Tiến độ</span>
                    <span className="text-sm">
                      {exerciseProgress.completedItems}/{exerciseProgress.totalItems} (
                      {Math.round(exerciseProgress.percentage)}%)
                    </span>
                  </div>
                  <Progress value={exerciseProgress.percentage} className="h-2 mb-4" />

                  <div className="space-y-2">
                    {dayProgressData.flatMap((dayProgress) =>
                      dayProgress.items
                        .filter((item) => item.type === "exercise")
                        .map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-2 border rounded-md">
                            <div className="flex items-center gap-2">
                              <div className="text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">
                                {dayLabels[dayProgress.day].split(":")[0]}
                              </div>
                              <span className="text-sm">{item.title}</span>
                            </div>
                            <div className="flex items-center">
                              {item.completed && <CheckCircle className="h-4 w-4 text-green-500 mr-2" />}
                              <Button
                                variant={item.completed ? "outline" : "default"}
                                size="sm"
                                className={item.completed ? "border-green-200 text-green-700" : ""}
                                onClick={() => {
                                  handleToggleItemCompletion(item.id)
                                }}
                              >
                                {item.completed ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}
                              </Button>
                            </div>
                          </div>
                        )),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-amber-500" />
                    Kiểm tra
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Tiến độ</span>
                    <span className="text-sm">
                      {quizProgress.completedItems}/{quizProgress.totalItems} ({Math.round(quizProgress.percentage)}%)
                    </span>
                  </div>
                  <Progress value={quizProgress.percentage} className="h-2 mb-4" />

                  <div className="space-y-2">
                    {dayProgressData.flatMap((dayProgress) =>
                      dayProgress.items
                        .filter((item) => item.type === "quiz")
                        .map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-2 border rounded-md">
                            <div className="flex items-center gap-2">
                              <div className="text-xs text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded">
                                {dayLabels[dayProgress.day].split(":")[0]}
                              </div>
                              <span className="text-sm">{item.title}</span>
                            </div>
                            <div className="flex items-center">
                              {item.completed && <CheckCircle className="h-4 w-4 text-green-500 mr-2" />}
                              <Button
                                variant={item.completed ? "outline" : "default"}
                                size="sm"
                                className={item.completed ? "border-green-200 text-green-700" : ""}
                                onClick={() => {
                                  handleToggleItemCompletion(item.id)
                                }}
                              >
                                {item.completed ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}
                              </Button>
                            </div>
                          </div>
                        )),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
