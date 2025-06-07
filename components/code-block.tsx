"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-slate-900 p-3 sm:p-4 rounded-md font-mono text-xs sm:text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      <Button
        size="sm"
        variant="outline"
        className="absolute top-2 right-2 h-7 sm:h-8 bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700"
        onClick={copyToClipboard}
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> Copied
          </>
        ) : (
          <>
            <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> Copy
          </>
        )}
      </Button>
    </div>
  )
}
