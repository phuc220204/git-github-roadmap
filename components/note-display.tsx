"use client"

import { useState, useEffect } from "react"
import { FileEdit, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NoteDialog } from "@/components/note-dialog"
import { formatDistanceToNow } from "date-fns"
import { vi } from "date-fns/locale"

interface NoteDisplayProps {
  sectionId: string
  sectionTitle: string
}

interface NoteData {
  content: string
  updatedAt: string
}

export function NoteDisplay({ sectionId, sectionTitle }: NoteDisplayProps) {
  const [note, setNote] = useState<NoteData | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Lấy ghi chú từ localStorage
  useEffect(() => {
    const loadNote = () => {
      const notes = JSON.parse(localStorage.getItem("gitNotes") || "{}")
      const noteData = notes[sectionId] as NoteData | undefined
      setNote(noteData || null)
    }

    loadNote()

    // Thêm event listener để cập nhật ghi chú khi localStorage thay đổi
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "gitNotes") {
        loadNote()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    // Thêm một interval để kiểm tra thay đổi từ các tab khác
    const interval = setInterval(loadNote, 1000)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [sectionId])

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const handleCloseDialog = (noteUpdated: boolean) => {
    setIsDialogOpen(false)
    if (noteUpdated) {
      // Cập nhật lại ghi chú
      const notes = JSON.parse(localStorage.getItem("gitNotes") || "{}")
      const noteData = notes[sectionId] as NoteData | undefined
      setNote(noteData || null)
    }
  }

  if (!note) return null

  return (
    <>
      <Card className="mt-4 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-900/20">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-amber-500" />
                <h4 className="text-sm font-medium text-amber-700 dark:text-amber-400">Ghi chú cá nhân</h4>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true, locale: vi })}
                </span>
              </div>
              <div className="text-sm whitespace-pre-wrap">{note.content}</div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-amber-600 hover:text-amber-700 hover:bg-amber-100 dark:text-amber-400 dark:hover:text-amber-300 dark:hover:bg-amber-900/30"
              onClick={handleOpenDialog}
            >
              <FileEdit className="h-4 w-4" />
              <span className="sr-only">Chỉnh sửa ghi chú</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <NoteDialog sectionId={sectionId} sectionTitle={sectionTitle} isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </>
  )
}
