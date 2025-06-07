"use client"

import { useState, useRef, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Day1Content from "@/components/days/day1"
import Day2Content from "@/components/days/day2"
import Day3Content from "@/components/days/day3"
import Day4Content from "@/components/days/day4"
import Day5Content from "@/components/days/day5"
import Day6Content from "@/components/days/day6"
import GuideContent from "@/components/days/guide"
import { Search } from "@/components/search"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DaysNavigation() {
  const [activeTab, setActiveTab] = useState("day1")
  const tabsListRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(false)

  // Kiểm tra nếu cần hiển thị nút scroll
  const checkScroll = () => {
    if (tabsListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsListRef.current
      setShowLeftScroll(scrollLeft > 0)
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Xử lý scroll khi resize window
  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  // Xử lý scroll khi tab list thay đổi
  useEffect(() => {
    const tabsList = tabsListRef.current
    if (tabsList) {
      tabsList.addEventListener("scroll", checkScroll)
      return () => tabsList.removeEventListener("scroll", checkScroll)
    }
  }, [])

  // Scroll tab list sang trái
  const scrollLeft = () => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  // Scroll tab list sang phải
  const scrollRight = () => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  // Scroll active tab vào view khi tab thay đổi
  useEffect(() => {
    if (tabsListRef.current) {
      const activeTabElement = tabsListRef.current.querySelector(`[value="${activeTab}"]`) as HTMLElement
      if (activeTabElement) {
        const tabsList = tabsListRef.current
        const tabsListRect = tabsList.getBoundingClientRect()
        const activeTabRect = activeTabElement.getBoundingClientRect()

        // Kiểm tra nếu tab đang active nằm ngoài vùng nhìn thấy
        if (activeTabRect.left < tabsListRect.left || activeTabRect.right > tabsListRect.right) {
          activeTabElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
        }
      }
    }
  }, [activeTab])

  return (
    <div className="w-full">
      <div className="mb-6 flex justify-center px-4 sm:px-0">
        <Search />
      </div>

      <Tabs defaultValue="day1" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="relative mb-4">
          {/* Nút scroll trái */}
          {showLeftScroll && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm md:hidden"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
          )}

          {/* Tab list với scroll horizontal */}
          <div ref={tabsListRef} className="overflow-x-auto pb-2 scrollbar-hide" onScroll={checkScroll}>
            <TabsList className="h-auto p-1 flex flex-nowrap bg-secondary/80 backdrop-blur-sm min-w-max">
              <TabsTrigger
                value="day1"
                className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                id="day1-tab"
              >
                Ngày 1
              </TabsTrigger>
              <TabsTrigger
                value="day2"
                className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                id="day2-tab"
              >
                Ngày 2
              </TabsTrigger>
              <TabsTrigger
                value="day3"
                className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                id="day3-tab"
              >
                Ngày 3
              </TabsTrigger>
              <TabsTrigger
                value="day4"
                className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                id="day4-tab"
              >
                Ngày 4
              </TabsTrigger>
              <TabsTrigger
                value="day5"
                className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                id="day5-tab"
              >
                Ngày 5
              </TabsTrigger>
              <TabsTrigger
                value="day6"
                className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                id="day6-tab"
              >
                Ngày 6
              </TabsTrigger>
              <TabsTrigger
                value="guide"
                className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                id="guide-tab"
              >
                Hướng dẫn đẩy dự án
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Nút scroll phải */}
          {showRightScroll && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm md:hidden"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          )}
        </div>

        <div className="bg-card rounded-lg border p-4 sm:p-6 shadow-sm card-hover">
          <TabsContent value="day1" className="mt-0" id="day1">
            <Day1Content />
          </TabsContent>
          <TabsContent value="day2" className="mt-0" id="day2">
            <Day2Content />
          </TabsContent>
          <TabsContent value="day3" className="mt-0" id="day3">
            <Day3Content />
          </TabsContent>
          <TabsContent value="day4" className="mt-0" id="day4">
            <Day4Content />
          </TabsContent>
          <TabsContent value="day5" className="mt-0" id="day5">
            <Day5Content />
          </TabsContent>
          <TabsContent value="day6" className="mt-0" id="day6">
            <Day6Content />
          </TabsContent>
          <TabsContent value="guide" className="mt-0" id="guide">
            <GuideContent />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
