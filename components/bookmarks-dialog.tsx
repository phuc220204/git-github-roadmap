"use client"

import { useState, useEffect } from "react"
import { Bookmark, Clock, Trash2, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { formatDistanceToNow } from "date-fns"
import { vi } from "date-fns/locale"

interface BookmarkItem {
  id: string
  title: string
  path: string
  timestamp: string
}

export function BookmarksDialog() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([])
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  // Lấy bookmarks từ localStorage khi component mount hoặc dialog mở
  useEffect(() => {
    if (open) {
      const storedBookmarks = JSON.parse(localStorage.getItem("gitBookmarks") || "[]")
      setBookmarks(storedBookmarks)
    }
  }, [open])

  const removeBookmark = (id: string, title: string) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id)
    localStorage.setItem("gitBookmarks", JSON.stringify(updatedBookmarks))
    setBookmarks(updatedBookmarks)
    toast({
      title: "Đã xóa đánh dấu",
      description: `Đã xóa "${title}" khỏi danh sách đánh dấu của bạn.`,
      variant: "default",
    })
  }

  const clearAllBookmarks = () => {
    localStorage.setItem("gitBookmarks", "[]")
    setBookmarks([])
    toast({
      title: "Đã xóa tất cả đánh dấu",
      description: "Danh sách đánh dấu của bạn đã được xóa.",
      variant: "default",
    })
  }

  const navigateToBookmark = (path: string) => {
    setOpen(false)
    // Chuyển đến tab tương ứng
    const tabElement = document.getElementById(`${path}-tab`)
    if (tabElement) {
      tabElement.click()

      // Cuộn đến phần tương ứng sau khi tab được kích hoạt
      setTimeout(() => {
        const contentElement = document.getElementById(path)
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Bookmark className="h-4 w-4" />
          <span className="hidden sm:inline-block">Đánh dấu</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bookmark className="h-5 w-5" /> Danh sách đánh dấu
          </DialogTitle>
          <DialogDescription>Các phần nội dung bạn đã đánh dấu để xem lại sau.</DialogDescription>
        </DialogHeader>

        {bookmarks.length === 0 ? (
          <div className="py-6 text-center text-muted-foreground">
            <Bookmark className="h-12 w-12 mx-auto mb-3 opacity-20" />
            <p>Bạn chưa đánh dấu phần nội dung nào.</p>
            <p className="text-sm mt-1">Nhấp vào biểu tượng đánh dấu ở các phần nội dung để thêm vào danh sách.</p>
          </div>
        ) : (
          <>
            <ScrollArea className="max-h-[60vh]">
              <div className="space-y-3">
                {bookmarks.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className="flex items-start justify-between p-3 border rounded-md hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex-1 mr-2">
                      <h4 className="font-medium text-sm">{bookmark.title}</h4>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>
                          {formatDistanceToNow(new Date(bookmark.timestamp), {
                            addSuffix: true,
                            locale: vi,
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => navigateToBookmark(bookmark.path)}
                        aria-label="Đi đến nội dung"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeBookmark(bookmark.id, bookmark.title)}
                        aria-label="Xóa đánh dấu"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex justify-end mt-4">
              <Button variant="outline" size="sm" onClick={clearAllBookmarks} className="text-destructive">
                Xóa tất cả
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
