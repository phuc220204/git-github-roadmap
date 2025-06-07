"use client"

import { useState, useEffect } from "react"
import { FileEdit, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { formatDistanceToNow } from "date-fns"
import { vi } from "date-fns/locale"

interface NoteDialogProps {
  sectionId: string
  sectionTitle: string
  isOpen: boolean
  onClose: (noteUpdated: boolean) => void
}

interface NoteData {
  content: string
  updatedAt: string
}

export function NoteDialog({ sectionId, sectionTitle, isOpen, onClose }: NoteDialogProps) {
  const [noteContent, setNoteContent] = useState("")
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)
  const { toast } = useToast()

  // Lấy ghi chú từ localStorage khi dialog mở
  useEffect(() => {
    if (isOpen) {
      const notes = JSON.parse(localStorage.getItem("gitNotes") || "{}")
      const note = notes[sectionId] as NoteData | undefined

      if (note) {
        setNoteContent(note.content)
        setLastUpdated(note.updatedAt)
      } else {
        setNoteContent("")
        setLastUpdated(null)
      }
    }
  }, [isOpen, sectionId])

  const saveNote = () => {
    const notes = JSON.parse(localStorage.getItem("gitNotes") || "{}")

    if (noteContent.trim()) {
      // Lưu ghi chú mới hoặc cập nhật ghi chú cũ
      const now = new Date().toISOString()
      notes[sectionId] = {
        content: noteContent.trim(),
        updatedAt: now,
      }
      localStorage.setItem("gitNotes", JSON.stringify(notes))

      toast({
        title: "Đã lưu ghi chú",
        description: "Ghi chú của bạn đã được lưu thành công.",
        variant: "default",
      })

      onClose(true)
    } else if (notes[sectionId]) {
      // Nếu nội dung trống và đã có ghi chú trước đó, xóa ghi chú
      deleteNote()
    } else {
      // Nếu nội dung trống và chưa có ghi chú, đóng dialog
      onClose(false)
    }
  }

  const deleteNote = () => {
    const notes = JSON.parse(localStorage.getItem("gitNotes") || "{}")

    if (notes[sectionId]) {
      delete notes[sectionId]
      localStorage.setItem("gitNotes", JSON.stringify(notes))

      toast({
        title: "Đã xóa ghi chú",
        description: "Ghi chú của bạn đã được xóa.",
        variant: "default",
      })
    }

    setNoteContent("")
    onClose(true)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose(false)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileEdit className="h-5 w-5" /> Ghi chú cá nhân
          </DialogTitle>
          <DialogDescription>
            {sectionTitle}{" "}
            {lastUpdated && (
              <span className="block text-xs mt-1">
                Cập nhật lần cuối: {formatDistanceToNow(new Date(lastUpdated), { addSuffix: true, locale: vi })}
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <Textarea
            placeholder="Nhập ghi chú của bạn tại đây..."
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            className="min-h-[150px]"
          />
        </div>

        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="outline" size="sm" onClick={deleteNote} className="text-destructive" disabled={!lastUpdated}>
            <Trash2 className="h-4 w-4 mr-2" /> Xóa
          </Button>
          <Button onClick={saveNote}>Lưu ghi chú</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
