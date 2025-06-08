"use client";

import { useChat } from "@/contexts/chat-context";
import { MessageItem } from "./message-item";
import { useEffect, useRef } from "react";
import { Loader2, MessageCircle } from "lucide-react";

export function MessageList() {
  const { messages, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);  return (
    <div className="flex-1 overflow-y-auto space-y-4 message-list-container">
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-center py-8 px-4">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
            <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Chào mừng bạn!
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs max-w-xs">
            Tôi là trợ lý AI chuyên về Git và GitHub. Hãy hỏi tôi bất kỳ điều gì
            bạn muốn biết!
          </p>
        </div>
      )}

      {messages.map((message, index) => (
        <div
          key={message.id}
          className="animate-in slide-in-from-bottom-2 duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <MessageItem message={message} />
        </div>
      ))}

      {isLoading && (
        <div className="flex gap-3 mb-4 animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white flex items-center justify-center shadow-md">
            <Loader2 className="w-4 h-4 animate-spin" />
          </div>
          <div className="flex-1">
            <div className="inline-block p-3 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
