"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { SearchIcon, X, Filter, ArrowUpDown, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Định nghĩa cấu trúc dữ liệu cho kết quả tìm kiếm
interface SearchResult {
  id: string
  day: string
  title: string
  content: string
  path: string
  type: "theory" | "exercise" | "quiz" | "guide"
  tags?: string[]
}

// Dữ liệu tìm kiếm từ tất cả các ngày
const searchData: SearchResult[] = [
  {
    id: "day1-basic-concepts",
    day: "Ngày 1",
    title: "Khái niệm cơ bản về quản lý phiên bản",
    content:
      "Git là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System - DVCS) được sử dụng để theo dõi các thay đổi trong mã nguồn trong quá trình phát triển phần mềm. Các khái niệm cơ bản bao gồm Repository, Commit, Branch, Merge, và Pull/Push.",
    path: "day1",
    type: "theory",
    tags: ["git", "cơ bản", "khái niệm"],
  },
  {
    id: "day1-installation",
    day: "Ngày 1",
    title: "Cài đặt Git và GitHub Desktop",
    content:
      "Hướng dẫn cài đặt Git từ git-scm.com và GitHub Desktop từ desktop.github.com. Bao gồm các bước tải xuống và cài đặt trên các hệ điều hành khác nhau.",
    path: "day1",
    type: "theory",
    tags: ["cài đặt", "git", "github desktop"],
  },
  {
    id: "day1-github-account",
    day: "Ngày 1",
    title: "Thiết lập tài khoản GitHub",
    content:
      "Tạo tài khoản GitHub và cấu hình Git trên máy tính. Bao gồm các bước đăng ký tài khoản và đăng nhập vào GitHub Desktop.",
    path: "day1",
    type: "theory",
    tags: ["github", "tài khoản", "cấu hình"],
  },
  {
    id: "day1-exercise",
    day: "Ngày 1",
    title: "Bài tập thực hành: Thiết lập môi trường Git",
    content:
      "Cài đặt Git và GitHub Desktop, tạo tài khoản GitHub, cấu hình Git trên máy tính bằng terminal hoặc command prompt.",
    path: "day1",
    type: "exercise",
    tags: ["bài tập", "cấu hình git"],
  },
  {
    id: "day2-create-repo",
    day: "Ngày 2",
    title: "Tạo repository",
    content:
      "Tạo repository trên GitHub và GitHub Desktop. Bao gồm các bước tạo repository mới, đặt tên và mô tả, và các tùy chọn khởi tạo.",
    path: "day2",
    type: "theory",
    tags: ["repository", "github"],
  },
  {
    id: "day2-commit",
    day: "Ngày 2",
    title: "Thêm và commit files",
    content:
      "Thêm file vào repository và commit các thay đổi. Bao gồm cách sử dụng GitHub Desktop và Git command line để thêm và commit files.",
    path: "day2",
    type: "theory",
    tags: ["commit", "add", "staging"],
  },
  {
    id: "day2-push-pull",
    day: "Ngày 2",
    title: "Push và pull từ remote repository",
    content:
      "Đẩy và kéo các thay đổi từ repository từ xa. Bao gồm cách sử dụng GitHub Desktop và Git command line để push và pull.",
    path: "day2",
    type: "theory",
    tags: ["push", "pull", "remote"],
  },
  {
    id: "day2-exercise",
    day: "Ngày 2",
    title: "Bài tập thực hành: Tạo và quản lý repository",
    content: "Tạo một repository mới trên GitHub, clone về máy, tạo file HTML đơn giản, commit và push lên GitHub.",
    path: "day2",
    type: "exercise",
    tags: ["bài tập", "repository", "commit", "push"],
  },
  {
    id: "day3-branch",
    day: "Ngày 3",
    title: "Tạo và chuyển đổi branch",
    content:
      "Tạo branch mới và chuyển đổi giữa các branch. Bao gồm cách sử dụng GitHub Desktop và Git command line để tạo và chuyển đổi branch.",
    path: "day3",
    type: "theory",
    tags: ["branch", "checkout"],
  },
  {
    id: "day3-merge",
    day: "Ngày 3",
    title: "Merge branch",
    content:
      "Kết hợp các thay đổi từ một branch vào branch khác. Bao gồm cách sử dụng GitHub Desktop và Git command line để merge branch.",
    path: "day3",
    type: "theory",
    tags: ["merge", "branch"],
  },
  {
    id: "day3-conflict",
    day: "Ngày 3",
    title: "Giải quyết xung đột",
    content:
      "Xử lý xung đột khi merge các branch. Bao gồm cách nhận diện xung đột và các bước để giải quyết xung đột trong GitHub Desktop và VS Code.",
    path: "day3",
    type: "theory",
    tags: ["conflict", "merge", "giải quyết xung đột"],
  },
  {
    id: "day3-exercise",
    day: "Ngày 3",
    title: "Bài tập thực hành: Làm việc với branch",
    content: "Mở repository đã tạo trước đó, tạo branch mới, thêm nút, merge branch và giải quyết xung đột.",
    path: "day3",
    type: "exercise",
    tags: ["bài tập", "branch", "merge", "conflict"],
  },
  {
    id: "day4-vscode-git",
    day: "Ngày 4",
    title: "Sử dụng Git trong VS Code",
    content:
      "Cài đặt và cấu hình Git trong VS Code. Bao gồm cách mở và clone repository, thực hiện các thao tác Git cơ bản trong VS Code.",
    path: "day4",
    type: "theory",
    tags: ["vscode", "git", "extension"],
  },
  {
    id: "day4-git-operations",
    day: "Ngày 4",
    title: "Thực hiện các thao tác Git cơ bản trong VS Code",
    content:
      "Commit, push, pull và các thao tác Git khác trong VS Code. Bao gồm cách sử dụng Source Control view và Command Palette.",
    path: "day4",
    type: "theory",
    tags: ["vscode", "git", "commit", "push", "pull"],
  },
  {
    id: "day4-git-extensions",
    day: "Ngày 4",
    title: "Sử dụng extension hỗ trợ Git",
    content: "GitLens và Git History là các extension mạnh mẽ giúp mở rộng khả năng quản lý Git trong VS Code.",
    path: "day4",
    type: "theory",
    tags: ["vscode", "extension", "gitlens", "git history"],
  },
  {
    id: "day4-exercise",
    day: "Ngày 4",
    title: "Bài tập thực hành: Sử dụng Git trong VS Code",
    content:
      "Mở VS Code, cài đặt GitLens, clone repository, tạo file CSS mới, liên kết với HTML, commit và push từ VS Code.",
    path: "day4",
    type: "exercise",
    tags: ["bài tập", "vscode", "git", "css"],
  },
  {
    id: "day5-gitignore",
    day: "Ngày 5",
    title: "Git ignore",
    content:
      "Sử dụng .gitignore để bỏ qua các file không cần theo dõi. Bao gồm cách tạo file .gitignore và các mẫu phổ biến.",
    path: "day5",
    type: "theory",
    tags: ["gitignore", "file"],
  },
  {
    id: "day5-rebase",
    day: "Ngày 5",
    title: "Git rebase",
    content:
      "Tái cấu trúc lịch sử commit với rebase. Bao gồm rebase cơ bản và interactive rebase để chỉnh sửa, kết hợp, sắp xếp lại các commit.",
    path: "day5",
    type: "theory",
    tags: ["rebase", "commit", "lịch sử"],
  },
  {
    id: "day5-stash",
    day: "Ngày 5",
    title: "Git stash",
    content:
      "Lưu trữ tạm thời các thay đổi chưa commit. Bao gồm các lệnh stash cơ bản như save, apply, pop, list, drop, và clear.",
    path: "day5",
    type: "theory",
    tags: ["stash", "lưu trữ tạm thời"],
  },
  {
    id: "day5-pull-request",
    day: "Ngày 5",
    title: "Pull requests và code review",
    content:
      "Tạo pull request và thực hiện code review trên GitHub. Bao gồm các bước tạo pull request, thêm comment, và merge pull request.",
    path: "day5",
    type: "theory",
    tags: ["pull request", "code review", "github"],
  },
  {
    id: "day5-exercise",
    day: "Ngày 5",
    title: "Bài tập thực hành: Sử dụng tính năng nâng cao",
    content:
      "Tạo file .gitignore, tạo branch mới, thêm file JavaScript, sử dụng interactive rebase, và tạo Pull Request.",
    path: "day5",
    type: "exercise",
    tags: ["bài tập", "gitignore", "rebase", "pull request"],
  },
  {
    id: "day6-workflow",
    day: "Ngày 6",
    title: "Quy trình làm việc nhóm với Git",
    content:
      "Quy trình Gitflow và các quy trình làm việc nhóm khác. Bao gồm các branch chính như main/master, develop, feature, release, và hotfix.",
    path: "day6",
    type: "theory",
    tags: ["gitflow", "workflow", "làm việc nhóm"],
  },
  {
    id: "day6-troubleshooting",
    day: "Ngày 6",
    title: "Khắc phục lỗi thường gặp",
    content:
      "Xử lý các lỗi phổ biến khi sử dụng Git. Bao gồm lỗi khi pull/push, hoàn tác thay đổi, và sửa commit message.",
    path: "day6",
    type: "theory",
    tags: ["lỗi", "troubleshooting", "hoàn tác"],
  },
  {
    id: "day6-optimization",
    day: "Ngày 6",
    title: "Tối ưu hóa quy trình làm việc",
    content:
      "Sử dụng git alias và các kỹ thuật tối ưu khác. Bao gồm cách tạo alias, tạo commit tốt, và sử dụng Git hooks.",
    path: "day6",
    type: "theory",
    tags: ["alias", "tối ưu", "git hooks"],
  },
  {
    id: "day6-exercise",
    day: "Ngày 6",
    title: "Bài tập thực hành: Quy trình làm việc nhóm",
    content: "Tạo repository mới, tạo branch develop, tạo branch feature, tạo Pull Request, và merge Pull Request.",
    path: "day6",
    type: "exercise",
    tags: ["bài tập", "gitflow", "pull request", "branch"],
  },
  {
    id: "guide-push-project",
    day: "Hướng dẫn",
    title: "Hướng dẫn đẩy dự án lên GitHub",
    content:
      "Các bước để đẩy một dự án có sẵn lên GitHub. Bao gồm cách sử dụng GitHub Desktop, Git Command Line, và VS Code.",
    path: "guide",
    type: "guide",
    tags: ["push", "github", "dự án"],
  },
  {
    id: "day1-quiz",
    day: "Ngày 1",
    title: "Bài kiểm tra Ngày 1",
    content:
      "Kiểm tra kiến thức về Git và GitHub cơ bản. Bao gồm các câu hỏi về Git, Repository, cấu hình Git, GitHub, và GitHub Desktop.",
    path: "day1",
    type: "quiz",
    tags: ["quiz", "kiểm tra", "git", "github"],
  },
  {
    id: "day2-quiz",
    day: "Ngày 2",
    title: "Bài kiểm tra Ngày 2",
    content:
      "Kiểm tra kiến thức về làm việc với Git cơ bản. Bao gồm các câu hỏi về staging area, commit, lịch sử commit, push, và pull.",
    path: "day2",
    type: "quiz",
    tags: ["quiz", "kiểm tra", "commit", "push", "pull"],
  },
  {
    id: "day3-quiz",
    day: "Ngày 3",
    title: "Bài kiểm tra Ngày 3",
    content: "Kiểm tra kiến thức về làm việc với branch. Bao gồm các câu hỏi về branch, merge, và giải quyết xung đột.",
    path: "day3",
    type: "quiz",
    tags: ["quiz", "kiểm tra", "branch", "merge", "conflict"],
  },
  {
    id: "day4-quiz",
    day: "Ngày 4",
    title: "Bài kiểm tra Ngày 4",
    content:
      "Kiểm tra kiến thức về sử dụng Git trong VS Code. Bao gồm các câu hỏi về tích hợp Git trong VS Code, Source Control view, và GitLens.",
    path: "day4",
    type: "quiz",
    tags: ["quiz", "kiểm tra", "vscode", "git"],
  },
  {
    id: "day5-quiz",
    day: "Ngày 5",
    title: "Bài kiểm tra Ngày 5",
    content:
      "Kiểm tra kiến thức về các tính năng nâng cao. Bao gồm các câu hỏi về .gitignore, rebase, stash, pull request, và code review.",
    path: "day5",
    type: "quiz",
    tags: ["quiz", "kiểm tra", "gitignore", "rebase", "stash", "pull request"],
  },
  {
    id: "day6-quiz",
    day: "Ngày 6",
    title: "Bài kiểm tra Ngày 6",
    content:
      "Kiểm tra kiến thức về làm việc nhóm và ôn tập. Bao gồm các câu hỏi về Gitflow, branch trong Gitflow, hoàn tác commit, alias, và tag.",
    path: "day6",
    type: "quiz",
    tags: ["quiz", "kiểm tra", "gitflow", "alias", "tag"],
  },
  {
    id: "guide-quiz",
    day: "Hướng dẫn",
    title: "Bài kiểm tra Hướng dẫn đẩy dự án",
    content:
      "Kiểm tra kiến thức về đẩy dự án lên GitHub. Bao gồm các câu hỏi về khởi tạo repository, thêm remote, đổi tên branch, .gitignore, và push branch.",
    path: "guide",
    type: "quiz",
    tags: ["quiz", "kiểm tra", "push", "github", "repository"],
  },
]

// Định nghĩa các loại nội dung
const contentTypes = [
  { value: "theory", label: "Lý thuyết" },
  { value: "exercise", label: "Bài tập" },
  { value: "quiz", label: "Kiểm tra" },
  { value: "guide", label: "Hướng dẫn" },
]

// Định nghĩa các ngày
const days = [
  { value: "Ngày 1", label: "Ngày 1" },
  { value: "Ngày 2", label: "Ngày 2" },
  { value: "Ngày 3", label: "Ngày 3" },
  { value: "Ngày 4", label: "Ngày 4" },
  { value: "Ngày 5", label: "Ngày 5" },
  { value: "Ngày 6", label: "Ngày 6" },
  { value: "Hướng dẫn", label: "Hướng dẫn" },
]

// Định nghĩa các tùy chọn sắp xếp
const sortOptions = [
  { value: "relevance", label: "Độ liên quan" },
  { value: "day-asc", label: "Ngày (tăng dần)" },
  { value: "day-desc", label: "Ngày (giảm dần)" },
  { value: "title-asc", label: "Tiêu đề (A-Z)" },
  { value: "title-desc", label: "Tiêu đề (Z-A)" },
]

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevance")
  const [activeTab, setActiveTab] = useState<"all" | "theory" | "exercise" | "quiz">("all")
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Tính toán kết quả tìm kiếm dựa trên các bộ lọc
  const filteredResults = useMemo(() => {
    if (searchTerm.trim() === "") {
      return []
    }

    // Lọc theo từ khóa tìm kiếm
    let filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.day.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
    )

    // Lọc theo ngày
    if (selectedDays.length > 0) {
      filtered = filtered.filter((item) => selectedDays.includes(item.day))
    }

    // Lọc theo loại nội dung
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((item) => selectedTypes.includes(item.type))
    }

    // Lọc theo tab đang active
    if (activeTab !== "all") {
      filtered = filtered.filter((item) => item.type === activeTab)
    }

    // Sắp xếp kết quả
    switch (sortBy) {
      case "day-asc":
        filtered.sort((a, b) => {
          const dayA = Number.parseInt(a.day.replace(/\D/g, "")) || 0
          const dayB = Number.parseInt(b.day.replace(/\D/g, "")) || 0
          return dayA - dayB
        })
        break
      case "day-desc":
        filtered.sort((a, b) => {
          const dayA = Number.parseInt(a.day.replace(/\D/g, "")) || 0
          const dayB = Number.parseInt(b.day.replace(/\D/g, "")) || 0
          return dayB - dayA
        })
        break
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title))
        break
      // Mặc định là sắp xếp theo độ liên quan (không cần sắp xếp lại)
    }

    return filtered
  }, [searchTerm, selectedDays, selectedTypes, sortBy, activeTab])

  // Cập nhật kết quả khi filteredResults thay đổi
  useEffect(() => {
    setResults(filteredResults)
  }, [filteredResults])

  // Đóng kết quả tìm kiếm khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Xử lý khi chọn một kết quả tìm kiếm
  const handleResultClick = (path: string, id: string) => {
    setIsOpen(false)
    setSearchTerm("")
    router.push(`#${path}`)

    // Kích hoạt tab tương ứng
    const tabElement = document.getElementById(`${path}-tab`)
    if (tabElement) {
      tabElement.click()

      // Cuộn đến phần tương ứng sau khi tab được kích hoạt
      setTimeout(() => {
        const contentElement = document.getElementById(path)
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: "smooth" })

          // Highlight phần tử có id tương ứng
          const sectionElement = document.getElementById(id) || document.querySelector(`[data-section-id="${id}"]`)

          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" })
            sectionElement.classList.add("highlight-section")
            setTimeout(() => {
              sectionElement.classList.remove("highlight-section")
            }, 2000)
          }
        }
      }, 100)
    }
  }

  // Focus vào input khi nhấn Ctrl+K hoặc /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.key === "k") ||
        (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName))
      ) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Hàm tô sáng từ khóa tìm kiếm trong văn bản
  const highlightText = (text: string, keyword: string) => {
    if (!keyword.trim()) return text

    const regex = new RegExp(`(${keyword.trim()})`, "gi")
    return text.replace(regex, '<span class="search-highlight">$1</span>')
  }

  // Hàm tạo đoạn trích có chứa từ khóa tìm kiếm
  const createExcerpt = (content: string, keyword: string, maxLength = 150) => {
    if (!keyword.trim()) return content.substring(0, maxLength) + "..."

    const lowerContent = content.toLowerCase()
    const lowerKeyword = keyword.toLowerCase()
    const index = lowerContent.indexOf(lowerKeyword)

    if (index === -1) return content.substring(0, maxLength) + "..."

    const start = Math.max(0, index - 60)
    const end = Math.min(content.length, index + keyword.length + 60)

    let excerpt = content.substring(start, end)
    if (start > 0) excerpt = "..." + excerpt
    if (end < content.length) excerpt = excerpt + "..."

    return excerpt
  }

  // Xử lý thay đổi tab
  const handleTabChange = (value: string) => {
    setActiveTab(value as "all" | "theory" | "exercise" | "quiz")
  }

  // Xử lý thay đổi bộ lọc ngày
  const handleDayFilterChange = (day: string) => {
    setSelectedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  // Xử lý thay đổi bộ lọc loại nội dung
  const handleTypeFilterChange = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Xử lý thay đổi sắp xếp
  const handleSortChange = (sort: string) => {
    setSortBy(sort)
  }

  // Xóa tất cả bộ lọc
  const clearAllFilters = () => {
    setSelectedDays([])
    setSelectedTypes([])
    setSortBy("relevance")
    setActiveTab("all")
  }

  return (
    <div className="relative w-full max-w-2xl" ref={searchRef}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Tìm kiếm nội dung... (Ctrl+K)"
          className="pl-10 pr-10 h-10 w-full"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            if (e.target.value.trim() !== "") {
              setIsOpen(true)
            } else {
              setIsOpen(false)
            }
          }}
          onFocus={() => {
            if (searchTerm.trim() !== "") {
              setIsOpen(true)
            }
          }}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 text-gray-500"
            onClick={() => {
              setSearchTerm("")
              setIsOpen(false)
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && searchTerm && (
        <Card className="absolute top-full mt-1 w-full z-50 max-h-[80vh] overflow-hidden shadow-lg">
          <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span>Bộ lọc</span>
                    {(selectedDays.length > 0 || selectedTypes.length > 0) && (
                      <Badge variant="secondary" className="ml-1 h-5 px-1.5">
                        {selectedDays.length + selectedTypes.length}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Lọc theo ngày</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {days.map((day) => (
                      <DropdownMenuCheckboxItem
                        key={day.value}
                        checked={selectedDays.includes(day.value)}
                        onCheckedChange={() => handleDayFilterChange(day.value)}
                      >
                        {day.label}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Lọc theo loại</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {contentTypes.map((type) => (
                      <DropdownMenuCheckboxItem
                        key={type.value}
                        checked={selectedTypes.includes(type.value)}
                        onCheckedChange={() => handleTypeFilterChange(type.value)}
                      >
                        {type.label}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={clearAllFilters} className="justify-center text-center">
                    Xóa tất cả bộ lọc
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ArrowUpDown className="h-3.5 w-3.5" />
                    <span>Sắp xếp</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Sắp xếp theo</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {sortOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onClick={() => handleSortChange(option.value)}
                        className="flex justify-between"
                      >
                        {option.label}
                        {sortBy === option.value && <Check className="h-4 w-4" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="text-sm text-muted-foreground">{results.length} kết quả</div>
          </div>

          <div className="border-b">
            <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="w-full h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="all"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Tất cả ({filteredResults.length})
                </TabsTrigger>
                <TabsTrigger
                  value="theory"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Lý thuyết ({filteredResults.filter((r) => r.type === "theory").length})
                </TabsTrigger>
                <TabsTrigger
                  value="exercise"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Bài tập ({filteredResults.filter((r) => r.type === "exercise").length})
                </TabsTrigger>
                <TabsTrigger
                  value="quiz"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Kiểm tra ({filteredResults.filter((r) => r.type === "quiz").length})
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="overflow-auto max-h-[60vh]">
            {results.length > 0 ? (
              <ul className="divide-y">
                {results.map((result, index) => (
                  <li
                    key={index}
                    className="p-4 hover:bg-secondary/50 cursor-pointer touch-target transition-colors"
                    onClick={() => handleResultClick(result.path, result.id)}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant="outline"
                          className={`px-1.5 py-0 text-xs ${
                            result.day === "Ngày 1"
                              ? "border-blue-500 text-blue-600 dark:text-blue-400"
                              : result.day === "Ngày 2"
                                ? "border-green-500 text-green-600 dark:text-green-400"
                                : result.day === "Ngày 3"
                                  ? "border-purple-500 text-purple-600 dark:text-purple-400"
                                  : result.day === "Ngày 4"
                                    ? "border-orange-500 text-orange-600 dark:text-orange-400"
                                    : result.day === "Ngày 5"
                                      ? "border-pink-500 text-pink-600 dark:text-pink-400"
                                      : result.day === "Ngày 6"
                                        ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                                        : "border-gray-500 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {result.day}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`px-1.5 py-0 text-xs ${
                            result.type === "theory"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              : result.type === "exercise"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                : result.type === "quiz"
                                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                          }`}
                        >
                          {result.type === "theory"
                            ? "Lý thuyết"
                            : result.type === "exercise"
                              ? "Bài tập"
                              : result.type === "quiz"
                                ? "Kiểm tra"
                                : "Hướng dẫn"}
                        </Badge>
                      </div>
                      <h4
                        className="font-medium text-base mb-1"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(result.title, searchTerm),
                        }}
                      />
                      <p
                        className="text-sm text-muted-foreground line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(createExcerpt(result.content, searchTerm), searchTerm),
                        }}
                      />
                      {result.tags && result.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="px-1.5 py-0 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-500">
                {searchTerm ? `Không tìm thấy kết quả nào cho "${searchTerm}"` : "Nhập từ khóa để tìm kiếm"}
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}
