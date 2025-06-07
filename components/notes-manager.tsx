"use client"

import { useState, useEffect } from "react"
import { FileText, Trash2, ExternalLink, FileEdit } from "lucide-react"
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
import { NoteDialog } from "@/components/note-dialog"

interface NoteItem {
  id: string
  title: string
  content: string
  updatedAt: string
}

export function NotesManager() {
  const [notes, setNotes] = useState<NoteItem[]>([])
  const [open, setOpen] = useState(false)
  const [editingNote, setEditingNote] = useState<{ id: string; title: string } | null>(null)
  const { toast } = useToast()

  // Lấy notes từ localStorage khi component mount hoặc dialog mở
  useEffect(() => {
    if (open) {
      loadNotes()
    }
  }, [open])

  const loadNotes = () => {
    const storedNotes = JSON.parse(localStorage.getItem("gitNotes") || "{}")
    const notesArray: NoteItem[] = []

    for (const [id, data] of Object.entries(storedNotes)) {
      const noteData = data as { content: string; updatedAt: string }
      notesArray.push({
        id,
        title: id.replace(/-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        content: noteData.content,
        updatedAt: noteData.updatedAt,
      })
    }

    // Sắp xếp theo thời gian cập nhật mới nhất
    notesArray.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())

    setNotes(notesArray)
  }

  const removeNote = (id: string, title: string) => {
    const storedNotes = JSON.parse(localStorage.getItem("gitNotes") || "{}")

    if (storedNotes[id]) {
      delete storedNotes[id]
      localStorage.setItem("gitNotes", JSON.stringify(storedNotes))

      loadNotes()

      toast({
        title: "Đã xóa ghi chú",
        description: `Đã xóa ghi chú "${title}".`,
        variant: "default",
      })
    }
  }

  const clearAllNotes = () => {
    localStorage.setItem("gitNotes", "{}")
    setNotes([])
    toast({
      title: "Đã xóa tất cả ghi chú",
      description: "Tất cả ghi chú của bạn đã được xóa.",
      variant: "default",
    })
  }

  const navigateToSection = (id: string) => {
    setOpen(false)

    // Xử lý id để lấy phần path (day1, day2, v.v.)
    const pathMatch = id.match(/^(day\d+|guide)/)
    if (pathMatch) {
      const path = pathMatch[0]

      // Chuyển đến tab tương ứng
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
  }

  const handleEditNote = (id: string, title: string) => {
    setEditingNote({ id, title })
  }

  const handleCloseEditDialog = (noteUpdated: boolean) => {
    setEditingNote(null)
    if (noteUpdated) {
      loadNotes()
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline-block">Ghi chú</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" /> Ghi chú cá nhân
            </DialogTitle>
            <DialogDescription>Các ghi chú cá nhân của bạn trong lộ trình học.</DialogDescription>
          </DialogHeader>

          {notes.length === 0 ? (
            <div className="py-6 text-center text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-3 opacity-20" />
              <p>Bạn chưa có ghi chú nào.</p>
              <p className="text-sm mt-1">Nhấp vào biểu tượng ghi chú ở các phần nội dung để thêm ghi chú.</p>
            </div>
          ) : (
            <>
              <ScrollArea className="max-h-[60vh]">
                <div className="space-y-3">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className="flex items-start justify-between p-3 border rounded-md hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex-1 mr-2">
                        <h4 className="font-medium text-sm">{note.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{note.content}</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>
                            {formatDistanceToNow(new Date(note.updatedAt), {
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
                          onClick={() => handleEditNote(note.id, note.title)}
                          aria-label="Chỉnh sửa ghi chú"
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => navigateToSection(note.id)}
                          aria-label="Đi đến nội dung"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                          onClick={() => removeNote(note.id, note.title)}
                          aria-label="Xóa ghi chú"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="flex justify-end mt-4">
                <Button variant="outline" size="sm" onClick={clearAllNotes} className="text-destructive">
                  Xóa tất cả
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {editingNote && (
        <NoteDialog
          sectionId={editingNote.id}
          sectionTitle={editingNote.title}
          isOpen={true}
          onClose={handleCloseEditDialog}
        />
      )}
    </>
  )
}
