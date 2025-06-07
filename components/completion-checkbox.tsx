"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useProgress } from "@/hooks/use-progress";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CompletionCheckboxProps {
  id: string;
  title: string;
}

export function CompletionCheckbox({ id, title }: CompletionCheckboxProps) {
  const { isItemCompleted, toggleItemCompletion, getItemCompletionTime } =
    useProgress();
  const [checked, setChecked] = useState(false);
  const [completionTime, setCompletionTime] = useState<string | undefined>();
  const { toast } = useToast();

  // Cập nhật trạng thái khi component mount hoặc khi tiến độ thay đổi
  useEffect(() => {
    setChecked(isItemCompleted(id));
    setCompletionTime(getItemCompletionTime(id));
  }, [id, isItemCompleted, getItemCompletionTime]);

  const handleCheckedChange = (checked: boolean) => {
    setChecked(checked);
    toggleItemCompletion(id);

    if (checked) {
      toast({
        title: "Đã đánh dấu hoàn thành",
        description: `Bạn đã hoàn thành "${title}"`,
        variant: "default",
      });
      setCompletionTime(new Date().toISOString());
    } else {
      setCompletionTime(undefined);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`completion-${id}`}
              checked={checked}
              onCheckedChange={handleCheckedChange}
              className={`h-5 w-5 ${
                checked
                  ? "bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600"
                  : ""
              }`}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" align="start">
          {checked && completionTime ? (
            <div className="flex items-center gap-1 text-xs">
              <Clock className="h-3 w-3" />
              <span>
                Hoàn thành{" "}
                {formatDistanceToNow(new Date(completionTime), {
                  addSuffix: true,
                  locale: vi,
                })}
              </span>
            </div>
          ) : (
            <span className="text-xs">Đánh dấu hoàn thành</span>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
