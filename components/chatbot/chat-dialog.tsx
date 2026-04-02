"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { chatPrograms } from "@/constants/chatbot";
import { ChatHeader } from "./chat-header";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { ChatHistoryList } from "./chat-history-list";
import { useChatLogic } from "./use-chat-logic";

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

export function ChatDialog({ isOpen, onClose, isMobile }: ChatDialogProps) {
  const {
    messages,
    chatState,
    isTyping,
    showHistory,
    sessions,
    currentSessionId,
    toggleHistory,
    createNewChat,
    loadChat,
    deleteChat,
    handleSendMessage,
    handleFormSubmit,
    handleActionClick,
    handleProgramClick,
  } = useChatLogic();

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:items-end md:justify-end md:right-8 md:bottom-24 md:inset-auto">
      {/* Backdrop for mobile */}
      <div className="fixed inset-0 bg-black/50 md:hidden" onClick={onClose} />

      <div
        className={cn(
          "bg-white flex flex-col relative z-10 shadow-xl",
          // Mobile: fullscreen
          isMobile && "fixed inset-0 w-full h-full rounded-none",
          // Desktop: popup
          !isMobile &&
            "w-[400px] h-[600px] rounded-2xl animate-in slide-in-from-bottom-5 fade-in duration-300"
        )}
      >
        <ChatHeader
          onClose={onClose}
          onNewChat={createNewChat}
          onToggleHistory={toggleHistory}
          showHistory={showHistory}
        />

        {showHistory ? (
          <ChatHistoryList
            sessions={sessions}
            currentSessionId={currentSessionId}
            onSelectSession={loadChat}
            onDeleteSession={deleteChat}
          />
        ) : (
          <>
            <ChatMessages
              messages={messages}
              isTyping={isTyping}
              onActionClick={handleActionClick}
              onProgramClick={handleProgramClick}
              onFormSubmit={handleFormSubmit}
              programs={chatPrograms}
              messagesEndRef={messagesEndRef}
              hasHistory={sessions.length > 1}
              onViewHistory={toggleHistory}
            />
            <ChatInput
              onSend={handleSendMessage}
              disabled={chatState === "form-visible" || isTyping}
            />
          </>
        )}
      </div>
    </div>
  );
}
