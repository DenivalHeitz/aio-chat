import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ChatInput from "@/components/chat/chat-input";

export const Route = createFileRoute("/")({
  component: App,
});

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Create a new user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
    };

    // Add the user message to the messages array
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response (replace with actual API call)
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I received your message: "${content}"`,
        role: "assistant",
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Welcome to Aio Chat</h1>
      <p className="text-muted-foreground">The all in one ai chat solution.</p>

      {/* Chat container */}
      <div className="flex-1 overflow-auto pb-32">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </>
  );
}
