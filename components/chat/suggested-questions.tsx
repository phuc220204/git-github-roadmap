"use client";

import { useChat } from "@/contexts/chat-context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const suggestedQuestions = [
  "Git là gì và tại sao nó quan trọng?",
  "Sự khác biệt giữa Git và GitHub là gì?",
  "Cách tạo repository mới trên GitHub?",
  "Hướng dẫn commit và push code lên GitHub",
  "Cách tạo và merge pull request?",
  "Git branch hoạt động như thế nào?",
  "Cách khắc phục merge conflict?",
  "Best practices khi sử dụng Git?",
];

export function SuggestedQuestions() {
  const { sendMessage, isLoading, messages } = useChat();

  // Chỉ hiển thị khi chat còn ít tin nhắn
  if (messages.length > 2) return null;  return (
    <Card className="p-4 m-4 bg-gray-50 dark:bg-gray-800 suggested-questions-container">
      <h3 className="font-semibold text-sm mb-3 text-gray-700 dark:text-gray-300">
        Một số câu hỏi bạn có thể quan tâm:
      </h3>
      <div className="grid grid-cols-1 gap-2">
        {suggestedQuestions.map((question, index) => (
          <Button
            key={index}
            variant="ghost"
            className="text-left justify-start h-auto py-2 px-3 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white dark:hover:bg-gray-800"
            onClick={() => sendMessage(question)}
            disabled={isLoading}
          >
            {question}
          </Button>
        ))}
      </div>
    </Card>
  );
}
