"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChatAction } from "@/constants/chatbot";

interface ChatQuickActionsProps {
  actions: ChatAction[];
  onActionClick: (actionId: string) => void;
}

export function ChatQuickActions({
  actions,
  onActionClick,
}: ChatQuickActionsProps) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      {/* Action buttons */}
      <div className="flex flex-col gap-2">
        {actions.map((action) => {
          const isPrimary = action.type === "primary";

          // Handle external links
          if (
            action.href?.startsWith("tel:") ||
            action.href?.startsWith("http") ||
            action.href?.startsWith("/")
          ) {
            return (
              <a
                key={action.id}
                href={action.href}
                className={cn(
                  "w-full py-2.5 px-4 rounded-lg text-sm font-medium text-center",
                  "border transition-all duration-200",
                  isPrimary
                    ? "bg-primary/10 border-primary text-primary hover:bg-primary hover:text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                )}
              >
                {action.label}
              </a>
            );
          }

          // Handle internal navigation with click handler
          return (
            <button
              key={action.id}
              onClick={() => onActionClick(action.id)}
              className={cn(
                "w-full py-2.5 px-4 rounded-lg text-sm font-medium text-center",
                "border transition-all duration-200",
                isPrimary
                  ? "bg-primary/10 border-primary text-primary hover:bg-primary hover:text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
