"use client";

import { useState } from "react";
import { useChat } from "@/contexts/chat-context";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function MessageInput() {
  const [input, setInput] = useState("");
  const { sendMessage, isLoading } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const message = input.trim();
    setInput("");
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t bg-white dark:bg-gray-900 message-input-container"
    >
      <div className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập câu hỏi của bạn về Git/GitHub..."
          className="flex-1 min-h-[60px] max-h-[120px] resize-none"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={!input.trim() || isLoading}
          size="icon"
          className="h-[60px] w-12"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
      <div className="text-xs text-gray-500 mt-2">
        Nhấn Enter để gửi, Shift + Enter để xuống dòng
      </div>
    </form>
  );
}
