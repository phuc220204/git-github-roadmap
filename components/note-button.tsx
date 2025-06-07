"use client"

import { useState, useEffect } from "react"
import { FileEdit, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NoteDialog } from "@/components/note-dialog"
import { Badge } from "@/components/ui/badge"

interface NoteButtonProps {
  sectionId: string
  sectionTitle: string
}

export function NoteButton({ sectionId, sectionTitle }: NoteButtonProps) {
  const [hasNote, setHasNote] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Kiểm tra xem phần này đã có ghi chú chưa khi component mount
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("gitNotes") || "{}")
    setHasNote(!!notes[sectionId])
  }, [sectionId])

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const handleCloseDialog = (noteUpdated: boolean) => {
    setIsDialogOpen(false)
    if (noteUpdated) {
      // Kiểm tra lại xem phần này có ghi chú không
      const notes = JSON.parse(localStorage.getItem("gitNotes") || "{}")
      setHasNote(!!notes[sectionId])
    }
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground relative"
        onClick={handleOpenDialog}
        aria-label={hasNote ? "Chỉnh sửa ghi chú" : "Thêm ghi chú"}
      >
        {hasNote ? <FileText className="h-5 w-5 text-amber-500" /> : <FileEdit className="h-5 w-5" />}
        {hasNote && (
          <Badge variant="secondary" className="absolute -top-1 -right-1 h-2 w-2 p-0 rounded-full bg-amber-500" />
        )}
      </Button>
      <NoteDialog sectionId={sectionId} sectionTitle={sectionTitle} isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </>
  )
}
