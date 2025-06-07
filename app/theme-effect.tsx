"use client";

import { useEffect } from "react";

export function ThemeEffect() {
  useEffect(() => {
    // Kiểm tra theme từ localStorage hoặc prefers-color-scheme
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Áp dụng class 'dark' vào document.documentElement
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Lắng nghe sự thay đổi theme
    const handleStorageChange = () => {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return null;
}
