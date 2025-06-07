"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ThemeScript() {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    // Kiểm tra nếu theme đã được lưu trong localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [setTheme])

  return null
}
