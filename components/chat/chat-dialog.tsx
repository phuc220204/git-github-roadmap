"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageList } from "./message-list";
import { MessageInput } from "./message-input";
import { SuggestedQuestions } from "./suggested-questions";
import { useChat } from "@/contexts/chat-context";
import { Trash2, Bot, Maximize2, Minimize2 } from "lucide-react";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatDialog({ open, onOpenChange }: ChatDialogProps) {
  const { clearChat, messages } = useChat();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClearChat = () => {
    clearChat();
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`${
          isExpanded ? "chat-dialog-expanded" : "chat-dialog"
        } flex flex-col p-0`}
      >
        {" "}
        <DialogHeader className="relative p-4 pb-3 border-b bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 backdrop-blur-sm">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-blue-500/5 to-purple-600/5 rounded-t-lg"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>{" "}
          <div className="relative flex items-center justify-between w-full">
            {/* Bên trái: Icon, tiêu đề và nút phóng to */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative p-2 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/40 dark:to-blue-900/40 rounded-full border border-green-200/50 dark:border-green-600/30">
                  <Bot className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <DialogTitle className="text-lg font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-gray-200 dark:via-blue-400 dark:to-purple-400">
                Trợ lý Git/GitHub AI
              </DialogTitle>

              {/* Nút phóng to ngay bên cạnh tiêu đề */}
              <div className="relative group ml-3">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-40 group-hover:opacity-80 transition duration-300"></div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleExpanded}
                  className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40 border border-blue-200/50 dark:border-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  title={isExpanded ? "Thu nhỏ cửa sổ" : "Phóng to cửa sổ"}
                >
                  {isExpanded ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Bên phải: Nút xóa (cách xa) */}
            <div className="flex items-center">
              {messages.length > 0 && (
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg blur opacity-40 group-hover:opacity-80 transition duration-300"></div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearChat}
                    className="relative bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 text-gray-600 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-100 dark:hover:from-red-800/40 dark:hover:to-pink-800/40 border border-red-200/50 dark:border-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    title="Xóa lịch sử chat"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
          {/* Decorative particles */}
          <div className="absolute top-2 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-700"></div>
        </DialogHeader>
        <div className="flex-1 flex flex-col overflow-hidden">
          <MessageList />
          <SuggestedQuestions />
          <MessageInput />
        </div>
      </DialogContent>
    </Dialog>
  );
}
