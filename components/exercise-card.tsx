import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import { BookmarkButton } from "@/components/bookmark-button"
import { NoteButton } from "@/components/note-button"
import { NoteDisplay } from "@/components/note-display"
import { CompletionCheckbox } from "@/components/completion-checkbox"
import type { ReactNode } from "react"

interface ExerciseCardProps {
  title: string
  steps: string[]
  codeBlock?: string
  subSteps?: string[]
  additionalSteps?: string[]
  additionalContent?: ReactNode
  conclusion?: string
  bookmarkId?: string
  bookmarkTitle?: string
  bookmarkPath?: string
  noteId?: string
  noteTitle?: string
  completionId?: string
}

export function ExerciseCard({
  title,
  steps,
  codeBlock,
  subSteps,
  additionalSteps,
  additionalContent,
  conclusion,
  bookmarkId,
  bookmarkTitle,
  bookmarkPath,
  noteId,
  noteTitle,
  completionId,
}: ExerciseCardProps) {
  return (
    <Card
      className="border-l-4 border-l-blue-500 dark:border-l-blue-600 bg-blue-50 dark:bg-blue-950/30"
      id={completionId}
    >
      <CardHeader
        className="pb-2"
        actions={
          <div className="flex items-center gap-1">
            {completionId && <CompletionCheckbox id={completionId} title={title} />}
            {noteId && noteTitle && <NoteButton sectionId={noteId} sectionTitle={noteTitle} />}
            {bookmarkId && bookmarkTitle && bookmarkPath && (
              <BookmarkButton id={bookmarkId} title={bookmarkTitle} path={bookmarkPath} />
            )}
          </div>
        }
      >
        <CardTitle className="text-blue-700 dark:text-blue-400 text-lg sm:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
          {subSteps && (
            <ul className="list-disc pl-6 space-y-1 mt-2">
              {subSteps.map((step, index) => (
                <li key={index} className="text-sm">
                  {step}
                </li>
              ))}
            </ul>
          )}
          {codeBlock && (
            <div className="my-2 sm:my-3">
              <CodeBlock code={codeBlock} />
            </div>
          )}
          {additionalSteps?.map((step, index) => (
            <li key={`additional-${index}`}>{step}</li>
          ))}
          {additionalContent}
        </ol>
        {conclusion && (
          <p className="mt-3 sm:mt-4 font-medium text-blue-700 dark:text-blue-400 text-sm sm:text-base">{conclusion}</p>
        )}

        {noteId && noteTitle && <NoteDisplay sectionId={noteId} sectionTitle={noteTitle} />}
      </CardContent>
    </Card>
  )
}
