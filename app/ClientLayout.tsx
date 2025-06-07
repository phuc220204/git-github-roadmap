"use client";

import type React from "react";
import { Inter, Fira_Code, Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeEffect } from "./theme-effect";
import { Toaster } from "@/components/ui/toaster";
import { ChatProvider } from "@/contexts/chat-context";
import { ChatWidget } from "@/components/chat/chat-widget";

// Font chính cho văn bản - Source Sans 3 rất dễ đọc và hiện đại
const sourceSans3 = Source_Sans_3({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Font phụ cho tiêu đề - Poppins có thiết kế đẹp và nổi bật
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Font cho code - Fira Code có ligatures đẹp
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Font dự phòng - Inter vẫn là lựa chọn tốt
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Xử lý hash URL để chuyển đến tab tương ứng
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const tabElement = document.getElementById(`${hash}-tab`);
        if (tabElement) {
          tabElement.click();

          // Cuộn đến phần tương ứng sau khi tab được kích hoạt
          setTimeout(() => {
            const contentElement = document.getElementById(hash);
            if (contentElement) {
              contentElement.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    };

    // Xử lý khi trang tải lần đầu
    if (window.location.hash) {
      handleHashChange();
    }

    // Lắng nghe sự kiện thay đổi hash
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${sourceSans3.variable} ${poppins.variable} ${firaCode.variable} ${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <ChatProvider>
            <ThemeEffect />
            {children}
            <ChatWidget />
            <Toaster />
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
