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
];

interface SuggestedQuestionsProps {
  isCompact?: boolean;
}

export function SuggestedQuestions({ isCompact = false }: SuggestedQuestionsProps) {
  const { sendMessage, isLoading, messages } = useChat();
  // Chỉ hiển thị khi chat còn ít tin nhắn
  if (messages.length > 2) return null;
  // Compact mode: hiển thị ít câu hỏi hơn và gọn hơn
  if (isCompact) {
    return (
      <div className="p-3 border-t bg-gray-50 dark:bg-gray-800">
        <h4 className="text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">
          Gợi ý:
        </h4>
        <div className="grid grid-cols-1 gap-1.5 max-h-32 overflow-y-auto">
          {suggestedQuestions.map((question, index) => (
            <Button
              key={index}
              variant="ghost"
              className="text-left justify-start h-7 py-1.5 px-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white dark:hover:bg-gray-700 truncate"
              onClick={() => sendMessage(question)}
              disabled={isLoading}
              title={question}
            >
              {question}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  // Expanded mode: hiển thị đầy đủ
  return (
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
