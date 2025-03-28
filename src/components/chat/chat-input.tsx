import type React from "react";

import { useState, type FormEvent, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { SendIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export default function ChatInput({
  onSendMessage,
  isLoading = false,
  placeholder = "Message...",
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, 200); // Max height of 200px
      textarea.style.height = `${newHeight}px`;
    }
  }, [input]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput("");

      // Reset height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        onSendMessage(input);
        setInput("");

        // Reset height after sending
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      }
    }
  };

  return (
    <div className="fixed right-0 bottom-6 left-0 z-50 mx-auto w-full max-w-2xl px-4">
      <Card className="py-0 shadow-lg backdrop-blur-sm">
        <CardContent className="p-2">
          <form onSubmit={handleSubmit} className="relative">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={isLoading}
              className={cn(
                "max-h-[200px] min-h-[56px] resize-none pr-12",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "text-sm sm:text-base",
              )}
              aria-label="Type your message"
            />
            <div className="absolute right-1 bottom-1">
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className={cn(
                  "h-9 w-9 rounded-full",
                  "transition-opacity",
                  input.trim()
                    ? "hover:bg-primary hover:text-primary-foreground opacity-100"
                    : "opacity-50",
                )}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
              >
                <SendIcon className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
