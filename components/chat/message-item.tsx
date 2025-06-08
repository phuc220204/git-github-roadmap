"use client";

import { Message } from "@/contexts/chat-context";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  const isUser = message.sender === "user";  return (
    <div
      className={`flex gap-2 mb-4 chat-message w-full ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? "bg-blue-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>

      <div className={`flex-1 min-w-0 ${isUser ? "text-right" : ""}`}>
        <div
          className={`inline-block p-3 rounded-lg break-words w-full max-w-full overflow-hidden ${
            isUser
              ? "bg-blue-500 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap">{message.content}</p>
          ) : (            <div className="prose prose-sm dark:prose-invert max-w-none chat-content break-words overflow-hidden">
              <ReactMarkdown
                components={{
                  code: ({ className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    const isInline = !match;                    if (isInline) {
                      return (
                        <code
                          className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono break-words"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }
                    return (
                      <pre className="bg-gray-200 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto max-w-full">
                        <code className="text-sm font-mono whitespace-pre-wrap break-words" {...props}>
                          {children}
                        </code>
                      </pre>
                    );
                  },                  p: ({ children }) => (
                    <p className="mb-2 last:mb-0 break-words overflow-hidden leading-relaxed">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc ml-4 mb-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal ml-4 mb-2">{children}</ol>
                  ),
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        <div
          className={`text-xs text-gray-500 mt-1 ${isUser ? "text-right" : ""}`}
        >
          {formatDistanceToNow(message.timestamp, {
            addSuffix: true,
            locale: vi,
          })}
        </div>
      </div>
    </div>
  );
}
