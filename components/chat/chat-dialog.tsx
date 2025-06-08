"use client";

import { useState } from "react";
import {
  Dialog,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageList } from "./message-list";
import { MessageInput } from "./message-input";
import { SuggestedQuestions } from "./suggested-questions";
import { useChat } from "@/contexts/chat-context";
import { Trash2, Bot, Maximize2, Minimize2, X } from "lucide-react";

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

  // Compact mode: fixed window in bottom-right corner
  if (!isExpanded) {
    if (!open) return null;
    
    return (
      <div className="fixed bottom-4 right-4 w-80 h-96 bg-white dark:bg-gray-900 border shadow-xl rounded-lg z-50 flex flex-col">
        {/* Simple header */}
        <div className="flex items-center justify-between p-3 border-b bg-gray-50 dark:bg-gray-800 rounded-t-lg">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Trợ lý AI
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpanded}
              className="h-7 w-7 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
              title="Phóng to"
            >
              <Maximize2 className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="h-7 w-7 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
              title="Đóng"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
        
        {/* Chat content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <MessageList />
          <SuggestedQuestions />
          <MessageInput />
        </div>
      </div>
    );
  }
  // Expanded mode: centered dialog
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white dark:bg-gray-900 p-0 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-h-[90vh]">
        {/* Simple header */}
        <div className="flex flex-row items-center justify-between p-4 border-b bg-gray-50 dark:bg-gray-800 rounded-t-lg">
          <div className="flex items-center gap-3">
            <Bot className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Trợ lý Git/GitHub AI
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearChat}
                className="hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Xóa lịch sử chat"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpanded}
              className="hover:bg-gray-200 dark:hover:bg-gray-700"
              title="Thu nhỏ"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="hover:bg-gray-200 dark:hover:bg-gray-700"
              title="Đóng"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Chat content */}
        <div className="flex-1 flex flex-col overflow-hidden min-h-0">
          <MessageList />
          <SuggestedQuestions />
          <MessageInput />
        </div>
      </div>
    </Dialog>
  );
}
