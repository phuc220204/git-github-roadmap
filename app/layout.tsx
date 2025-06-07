import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Lộ trình học Git và GitHub Desktop trong 6 ngày",
  description: "Hướng dẫn toàn diện để học Git và GitHub Desktop trong 6 ngày",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}

import "./globals.css";
