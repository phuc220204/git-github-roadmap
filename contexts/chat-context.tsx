"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatContextType {
  messages: Message[];
  isLoading: boolean;
  addMessage: (content: string, sender: "user" | "bot") => void;
  sendMessage: (message: string, context?: string) => Promise<void>;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Chào bạn! Tôi là trợ lý AI chuyên về Git và GitHub. Tôi có thể giúp bạn:\n\n• Giải thích các khái niệm Git/GitHub\n• Hướng dẫn commands cụ thể\n• Hỗ trợ trong quá trình học lộ trình 6 ngày\n• Giải đáp thắc mắc về các bài tập\n\nBạn có câu hỏi gì không?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (content: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const sendMessage = async (message: string, context?: string) => {
    // Thêm tin nhắn của user
    addMessage(message, "user");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, context }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Thêm phản hồi của bot
      addMessage(data.message, "bot");
    } catch (error) {
      console.error("Error sending message:", error);
      addMessage(
        "Xin lỗi, tôi gặp sự cố khi xử lý tin nhắn của bạn. Vui lòng thử lại sau.",
        "bot"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        content:
          "Chào bạn! Tôi là trợ lý AI chuyên về Git và GitHub. Tôi có thể giúp bạn:\n\n• Giải thích các khái niệm Git/GitHub\n• Hướng dẫn commands cụ thể\n• Hỗ trợ trong quá trình học lộ trình 6 ngày\n• Giải đáp thắc mắc về các bài tập\n\nBạn có câu hỏi gì không?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        isLoading,
        addMessage,
        sendMessage,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
