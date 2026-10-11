"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ChatMessage,
  ChatProgram,
  ChatFormData,
  quickActions,
} from "@/constants/chatbot";
import { ChatRegistrationForm } from "./chat-registration-form";
import { ChatQuickActions } from "./chat-quick-actions";
import { ChatProgramList } from "./chat-program-list";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isTyping: boolean;
  chatState: string;
  onFormSubmit: (data: ChatFormData) => void;
  onActionClick: (actionId: string) => void;
  onProgramClick: (slug: string) => void;
  programs: ChatProgram[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  hasHistory?: boolean;
  onViewHistory?: () => void;
}

export function ChatMessages({
  messages,
  isTyping,
  onFormSubmit,
  onActionClick,
  onProgramClick,
  programs,
  messagesEndRef,
  hasHistory,
  onViewHistory,
}: Omit<ChatMessagesProps, "chatState">) {
  // Auto-scroll to bottom
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, messagesEndRef]);

  // Format date for separator
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scroll-smooth">
      {/* View Previous Chats Button */}
      {hasHistory && (
        <div className="flex justify-center mb-4">
          <button
            onClick={onViewHistory}
            className="text-xs text-primary underline hover:text-primary/80 transition-colors bg-white/50 px-3 py-1 rounded-full border border-primary/10"
          >
            View Previous Chats
          </button>
        </div>
      )}

      {/* Date separator */}
      <div className="flex items-center justify-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs text-gray-500 font-medium">
          {formatDate(new Date())}
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* Messages */}
      {messages.map((message) => {
        // Joined indicator
        if (message.type === "joined") {
          return (
            <div key={message.id} className="flex flex-col items-center py-4">
              <Image
                src="/assets/logos/full-logo-dark.svg"
                alt="Ayonaire"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-sm text-gray-500 italic mt-1">Joined</span>
            </div>
          );
        }

        // Form message
        if (message.type === "form") {
          return (
            <ChatRegistrationForm key={message.id} onSubmit={onFormSubmit} />
          );
        }

        // Program selection message
        if (message.type === "program-selection") {
          return (
            <ChatProgramList
              key={message.id}
              programs={programs}
              onProgramClick={onProgramClick}
            />
          );
        }

        // User message
        if (message.type === "user") {
          return (
            <div key={message.id} className="flex justify-end">
              <div className="bg-primary text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[80%] shadow-sm">
                {/* File Attachment */}
                {message.file && (
                  <div className="mb-2 flex items-center gap-3 bg-white/10 p-2.5 rounded-lg">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      {message.file.type === "audio" ? "🎤" : "📄"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {message.file.name}
                      </p>
                      <p className="text-xs text-white/70">
                        {message.file.type === "audio"
                          ? message.file.duration
                          : message.file.size}
                      </p>
                    </div>
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          );
        }

        // Bot message
        if (message.type === "bot") {
          // Don't render if no content and no actions
          if (
            !message.content &&
            (!message.actions || message.actions.length === 0)
          ) {
            return null;
          }

          return (
            <div key={message.id} className="flex gap-3">
              {/* Avatar */}
              <div className="shrink-0 w-8 h-8 rounded-full overflow-hidden">
                {message.avatar === "ayobami" ? (
                  <Image
                    src="/assets/logos/logo-dark.png"
                    alt="Ayobami"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain p-1"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-xs">🤖</span>
                  </div>
                )}
              </div>

              {/* Message bubble */}
              <div className="flex-1 space-y-3">
                {message.content && (
                  <div className="bg-[#F5F5F5] px-4 py-3 rounded-2xl rounded-tl-sm  max-w-[90%]">
                    <p className="text-sm text-gray-800 font-medium whitespace-pre-line">
                      {message.content
                        ?.split(/(\+234 \d{3} \d{3} \d{4})/)
                        .map((part, i) => {
                          if (part.match(/\+234 \d{3} \d{3} \d{4}/)) {
                            return (
                              <a
                                key={i}
                                href={`tel:${part.replace(/\s/g, "")}`}
                                className="text-primary font-medium hover:underline"
                              >
                                {part}
                              </a>
                            );
                          }
                          return part;
                        })}
                    </p>
                  </div>
                )}

                {/* Quick actions if present */}
                {message.actions && (
                  <ChatQuickActions
                    actions={message.actions}
                    onActionClick={onActionClick}
                  />
                )}
              </div>
            </div>
          );
        }

        return null;
      })}

      {/* Typing indicator */}
      {isTyping && (
        <div className="flex gap-3">
          <div className="shrink-0 w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm border border-gray-100">
            <Image
              src="/assets/logos/logo-dark.png"
              alt="Typing"
              width={32}
              height={32}
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
            <div className="flex gap-1">
              <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
