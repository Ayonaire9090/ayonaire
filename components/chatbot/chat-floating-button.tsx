"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatFloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function ChatFloatingButton({
  isOpen,
  onClick,
  className,
}: ChatFloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "flex items-center justify-center",
        "w-14 h-14 md:w-16 md:h-16",
        "rounded-full",
        "bg-linear-to-br from-[#F97A1F] to-[#F67219]",
        "text-white shadow-xl",
        "transition-all duration-300 ease-out",
        "hover:scale-110 hover:shadow-2xl",
        "active:scale-95",
        "focus:outline-none focus:ring-4 focus:ring-primary/30",
        isOpen && "rotate-90",
        className
      )}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <MessageCircle
        className={cn(
          "w-6 h-6 md:w-7 md:h-7",
          "transition-transform duration-300",
          isOpen && "-rotate-90"
        )}
        fill="currentColor"
      />

      {/* Pulse animation when closed */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      )}
    </button>
  );
}
