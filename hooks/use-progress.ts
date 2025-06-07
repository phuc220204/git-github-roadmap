"use client"

import { useState, useEffect } from "react"

// Định nghĩa cấu trúc dữ liệu cho tiến độ
export interface ContentItem {
  id: string
  day: string
  title: string
  type: "theory" | "exercise" | "quiz"
  completed: boolean
  timestamp?: string
}

export interface DayProgress {
  day: string
  totalItems: number
  completedItems: number
  percentage: number
  items: ContentItem[]
}

// Dữ liệu nội dung của lộ trình
const contentData: Omit<ContentItem, "completed" | "timestamp">[] = [
  // Ngày 1
  { id: "day1-basic-concepts", day: "day1", title: "Khái niệm cơ bản về quản lý phiên bản", type: "theory" },
  { id: "day1-installation", day: "day1", title: "Cài đặt Git và GitHub Desktop", type: "theory" },
  { id: "day1-github-account", day: "day1", title: "Thiết lập tài khoản GitHub", type: "theory" },
  { id: "day1-exercise", day: "day1", title: "Bài tập thực hành: Thiết lập môi trường Git", type: "exercise" },
  { id: "day1-quiz", day: "day1", title: "Bài kiểm tra Ngày 1", type: "quiz" },

  // Ngày 2
  { id: "day2-create-repo", day: "day2", title: "Tạo repository", type: "theory" },
  { id: "day2-commit", day: "day2", title: "Thêm và commit files", type: "theory" },
  { id: "day2-push-pull", day: "day2", title: "Push và pull từ remote repository", type: "theory" },
  { id: "day2-exercise", day: "day2", title: "Bài tập thực hành: Tạo và quản lý repository", type: "exercise" },
  { id: "day2-quiz", day: "day2", title: "Bài kiểm tra Ngày 2", type: "quiz" },

  // Ngày 3
  { id: "day3-branch", day: "day3", title: "Tạo và chuyển đổi branch", type: "theory" },
  { id: "day3-merge", day: "day3", title: "Merge branch", type: "theory" },
  { id: "day3-conflict", day: "day3", title: "Giải quyết xung đột", type: "theory" },
  { id: "day3-exercise", day: "day3", title: "Bài tập thực hành: Làm việc với branch", type: "exercise" },
  { id: "day3-quiz", day: "day3", title: "Bài kiểm tra Ngày 3", type: "quiz" },

  // Ngày 4
  { id: "day4-vscode-git", day: "day4", title: "Cài đặt và cấu hình Git trong VS Code", type: "theory" },
  { id: "day4-git-operations", day: "day4", title: "Thực hiện các thao tác Git cơ bản trong VS Code", type: "theory" },
  { id: "day4-git-extensions", day: "day4", title: "Sử dụng extension hỗ trợ Git", type: "theory" },
  { id: "day4-exercise", day: "day4", title: "Bài tập thực hành: Sử dụng Git trong VS Code", type: "exercise" },
  { id: "day4-quiz", day: "day4", title: "Bài kiểm tra Ngày 4", type: "quiz" },

  // Ngày 5
  { id: "day5-gitignore", day: "day5", title: "Git ignore", type: "theory" },
  { id: "day5-rebase", day: "day5", title: "Git rebase", type: "theory" },
  { id: "day5-stash", day: "day5", title: "Git stash", type: "theory" },
  { id: "day5-pull-request", day: "day5", title: "Pull requests và code review", type: "theory" },
  { id: "day5-exercise", day: "day5", title: "Bài tập thực hành: Sử dụng tính năng nâng cao", type: "exercise" },
  { id: "day5-quiz", day: "day5", title: "Bài kiểm tra Ngày 5", type: "quiz" },

  // Ngày 6
  { id: "day6-workflow", day: "day6", title: "Quy trình làm việc nhóm với Git", type: "theory" },
  { id: "day6-troubleshooting", day: "day6", title: "Khắc phục lỗi thường gặp", type: "theory" },
  { id: "day6-optimization", day: "day6", title: "Tối ưu hóa quy trình làm việc", type: "theory" },
  { id: "day6-exercise", day: "day6", title: "Bài tập thực hành: Quy trình làm việc nhóm", type: "exercise" },
  { id: "day6-quiz", day: "day6", title: "Bài kiểm tra Ngày 6", type: "quiz" },

  // Hướng dẫn
  { id: "guide-push-project", day: "guide", title: "Hướng dẫn đẩy dự án lên GitHub", type: "theory" },
  { id: "guide-quiz", day: "guide", title: "Bài kiểm tra Hướng dẫn đẩy dự án", type: "quiz" },
]

// Tên hiển thị cho các ngày
export const dayLabels: Record<string, string> = {
  day1: "Ngày 1: Làm quen với Git và GitHub",
  day2: "Ngày 2: Làm việc với Git cơ bản",
  day3: "Ngày 3: Làm việc với branch",
  day4: "Ngày 4: Sử dụng Git trong VS Code",
  day5: "Ngày 5: Các tính năng nâng cao",
  day6: "Ngày 6: Làm việc nhóm và ôn tập",
  guide: "Hướng dẫn đẩy dự án lên GitHub",
}

export function useProgress() {
  const [progress, setProgress] = useState<ContentItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Tải tiến độ từ localStorage khi component mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem("gitLearningDetailedProgress")
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress))
      } else {
        // Khởi tạo tiến độ mặc định nếu chưa có
        const initialProgress = contentData.map((item) => ({
          ...item,
          completed: false,
        }))
        setProgress(initialProgress)
        localStorage.setItem("gitLearningDetailedProgress", JSON.stringify(initialProgress))
      }
    } catch (e) {
      console.error("Could not load progress from localStorage:", e)
      // Khởi tạo tiến độ mặc định nếu có lỗi
      const initialProgress = contentData.map((item) => ({
        ...item,
        completed: false,
      }))
      setProgress(initialProgress)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Cập nhật tiến độ khi có thay đổi
  useEffect(() => {
    if (isLoaded && progress.length > 0) {
      try {
        localStorage.setItem("gitLearningDetailedProgress", JSON.stringify(progress))

        // Cập nhật tiến độ tổng quan cũ để tương thích
        const totalItems = progress.length
        const completedItems = progress.filter((item) => item.completed).length
        const progressPercentage = (completedItems / totalItems) * 100

        const basicSkills = [
          { id: "basic1", label: "Hiểu về Git và GitHub" },
          { id: "basic2", label: "Cài đặt Git và GitHub Desktop" },
          { id: "basic3", label: "Tạo và quản lý repository" },
          { id: "basic4", label: "Commit và push thay đổi" },
        ]

        const advancedSkills = [
          { id: "advanced1", label: "Làm việc với branch" },
          { id: "advanced2", label: "Giải quyết xung đột" },
          { id: "advanced3", label: "Sử dụng Git trong VS Code" },
          { id: "advanced4", label: "Pull requests và code review" },
        ]

        // Tính toán trạng thái hoàn thành cho các kỹ năng cơ bản
        const day1Completed =
          progress.filter((item) => item.day === "day1" && item.completed).length ===
          progress.filter((item) => item.day === "day1").length
        const day2Completed =
          progress.filter((item) => item.day === "day2" && item.completed).length ===
          progress.filter((item) => item.day === "day2").length

        // Tính toán trạng thái hoàn thành cho các kỹ năng nâng cao
        const day3Completed =
          progress.filter((item) => item.day === "day3" && item.completed).length ===
          progress.filter((item) => item.day === "day3").length
        const day4Completed =
          progress.filter((item) => item.day === "day4" && item.completed).length ===
          progress.filter((item) => item.day === "day4").length
        const day5Completed =
          progress.filter((item) => item.day === "day5" && item.completed).length ===
          progress.filter((item) => item.day === "day5").length

        const checkedItems = [
          ...(day1Completed ? ["basic1", "basic2"] : []),
          ...(day2Completed ? ["basic3", "basic4"] : []),
          ...(day3Completed ? ["advanced1", "advanced2"] : []),
          ...(day4Completed ? ["advanced3"] : []),
          ...(day5Completed ? ["advanced4"] : []),
        ]

        localStorage.setItem("gitLearningProgress", JSON.stringify(checkedItems))
      } catch (e) {
        console.error("Could not save progress to localStorage:", e)
      }
    }
  }, [progress, isLoaded])

  // Đánh dấu một mục là đã hoàn thành hoặc chưa hoàn thành
  const toggleItemCompletion = (id: string) => {
    setProgress((prevProgress) =>
      prevProgress.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
            timestamp: !item.completed ? new Date().toISOString() : undefined,
          }
        }
        return item
      }),
    )
  }

  // Đánh dấu tất cả các mục trong một ngày là đã hoàn thành
  const markDayAsCompleted = (day: string) => {
    setProgress((prevProgress) =>
      prevProgress.map((item) => {
        if (item.day === day && !item.completed) {
          return {
            ...item,
            completed: true,
            timestamp: new Date().toISOString(),
          }
        }
        return item
      }),
    )
  }

  // Đánh dấu tất cả các mục trong một ngày là chưa hoàn thành
  const markDayAsIncomplete = (day: string) => {
    setProgress((prevProgress) =>
      prevProgress.map((item) => {
        if (item.day === day) {
          return {
            ...item,
            completed: false,
            timestamp: undefined,
          }
        }
        return item
      }),
    )
  }

  // Đánh dấu tất cả các mục là đã hoàn thành
  const markAllAsCompleted = () => {
    setProgress((prevProgress) =>
      prevProgress.map((item) => {
        if (!item.completed) {
          return {
            ...item,
            completed: true,
            timestamp: new Date().toISOString(),
          }
        }
        return item
      }),
    )
  }

  // Đánh dấu tất cả các mục là chưa hoàn thành
  const resetProgress = () => {
    setProgress((prevProgress) =>
      prevProgress.map((item) => ({
        ...item,
        completed: false,
        timestamp: undefined,
      })),
    )
  }

  // Tính toán tiến độ cho từng ngày
  const getDayProgress = (day: string): DayProgress => {
    const dayItems = progress.filter((item) => item.day === day)
    const totalItems = dayItems.length
    const completedItems = dayItems.filter((item) => item.completed).length
    const percentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

    return {
      day,
      totalItems,
      completedItems,
      percentage,
      items: dayItems,
    }
  }

  // Tính toán tiến độ tổng thể
  const getOverallProgress = () => {
    const totalItems = progress.length
    const completedItems = progress.filter((item) => item.completed).length
    const percentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

    return {
      totalItems,
      completedItems,
      percentage,
    }
  }

  // Tính toán tiến độ theo loại nội dung
  const getProgressByType = (type: "theory" | "exercise" | "quiz") => {
    const typeItems = progress.filter((item) => item.type === type)
    const totalItems = typeItems.length
    const completedItems = typeItems.filter((item) => item.completed).length
    const percentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

    return {
      type,
      totalItems,
      completedItems,
      percentage,
    }
  }

  // Kiểm tra xem một mục có được hoàn thành hay không
  const isItemCompleted = (id: string) => {
    const item = progress.find((item) => item.id === id)
    return item ? item.completed : false
  }

  // Lấy thời gian hoàn thành của một mục
  const getItemCompletionTime = (id: string) => {
    const item = progress.find((item) => item.id === id)
    return item?.timestamp
  }

  return {
    progress,
    isLoaded,
    toggleItemCompletion,
    markDayAsCompleted,
    markDayAsIncomplete,
    markAllAsCompleted,
    resetProgress,
    getDayProgress,
    getOverallProgress,
    getProgressByType,
    isItemCompleted,
    getItemCompletionTime,
  }
}
