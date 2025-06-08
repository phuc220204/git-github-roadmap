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
        {" "}
        <Button
          onClick={() => setOpen(true)}
          className={cn(
            "w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-105",
            "bg-blue-600 hover:bg-blue-700 text-white",
            open && "scale-0 opacity-0"
          )}
          title="Mở trợ lý AI"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
