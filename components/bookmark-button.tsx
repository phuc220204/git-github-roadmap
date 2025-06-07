"use client"

import { useState, useEffect } from "react"
import { Bookmark, BookmarkCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface BookmarkButtonProps {
  id: string
  title: string
  path: string
}

export function BookmarkButton({ id, title, path }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const { toast } = useToast()

  // Kiểm tra xem phần này đã được đánh dấu chưa khi component mount
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("gitBookmarks") || "[]")
    setIsBookmarked(bookmarks.some((bookmark: any) => bookmark.id === id))
  }, [id])

  const toggleBookmark = () => {
    // Lấy bookmarks hiện tại từ localStorage
    const bookmarks = JSON.parse(localStorage.getItem("gitBookmarks") || "[]")

    if (isBookmarked) {
      // Xóa bookmark
      const updatedBookmarks = bookmarks.filter((bookmark: any) => bookmark.id !== id)
      localStorage.setItem("gitBookmarks", JSON.stringify(updatedBookmarks))
      setIsBookmarked(false)
      toast({
        title: "Đã xóa đánh dấu",
        description: `Đã xóa "${title}" khỏi danh sách đánh dấu của bạn.`,
        variant: "default",
      })
    } else {
      // Thêm bookmark
      const newBookmark = { id, title, path, timestamp: new Date().toISOString() }
      const updatedBookmarks = [...bookmarks, newBookmark]
      localStorage.setItem("gitBookmarks", JSON.stringify(updatedBookmarks))
      setIsBookmarked(true)
      toast({
        title: "Đã thêm đánh dấu",
        description: `Đã thêm "${title}" vào danh sách đánh dấu của bạn.`,
        variant: "default",
      })
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
      onClick={toggleBookmark}
      aria-label={isBookmarked ? "Xóa đánh dấu" : "Thêm đánh dấu"}
    >
      {isBookmarked ? <BookmarkCheck className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5" />}
    </Button>
  )
}
