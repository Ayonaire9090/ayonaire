"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChatProgram } from "@/constants/chatbot";

interface ChatProgramListProps {
  programs: ChatProgram[];
  onProgramClick: (slug: string) => void;
}

export function ChatProgramList({
  programs,
  onProgramClick,
}: ChatProgramListProps) {
  return (
    <div className="flex flex-col gap-2 ml-11">
      {programs.map((program) => {
        const isPrimary = program.type === "primary";

        return (
          <button
            key={program.id}
            onClick={() => onProgramClick(program.slug)}
            className={cn(
              "w-full py-2.5 px-4 rounded-lg text-sm font-medium text-center",
              "border transition-all duration-200",
              isPrimary
                ? "bg-primary/10 border-primary text-primary hover:bg-primary hover:text-white"
                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
            )}
          >
            {program.name}
          </button>
        );
      })}
    </div>
  );
}
