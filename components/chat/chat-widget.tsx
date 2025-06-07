"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChatDialog } from "./chat-dialog";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setOpen(true)}
          className={cn(
            "w-14 h-14 rounded-full shadow-xl transition-all duration-500 hover:scale-110 chat-widget-button group",
            "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700",
            "text-white border-0 backdrop-blur-sm",
            "hover:shadow-2xl hover:shadow-green-500/25",
            open && "scale-0 opacity-0"
          )}
          title="Mở trợ lý AI"
        >
          <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-600 opacity-75 animate-ping"></div>
        </Button>
      </div>
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
