// ChatbotWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import ChatbotWidget from "@/components/chatbot";

export default function ChatbotWrapper() {
  const pathname = usePathname();

  if (pathname === "/ai-engineering-masterclass" || pathname === "/ai-engineering-thank-you") return null;

  return <ChatbotWidget />;
}