"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Star,
  Smile,
  Mic,
  Paperclip,
  Plus,
  X,
  StopCircle,
  Check,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { inputPlaceholder } from "@/constants/chatbot";
import { EmojiPicker } from "./emoji-pack";

interface ChatInputProps {
  onSend: (message: string, file?: any) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toggle Emoji Picker
  const toggleEmojiPicker = () => setShowEmojiPicker(!showEmojiPicker);

  // Add Emoji
  const handleEmojiSelect = (emoji: string) => {
    setMessage((prev) => prev + emoji);
    setShowEmojiPicker(false);
  };

  // Start Recording
  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    timerRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
  };

  // Stop/Cancel Recording
  const cancelRecording = () => {
    setIsRecording(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setRecordingTime(0);
  };

  // Send Voice Note
  const sendVoiceNote = () => {
    setIsRecording(false);
    if (timerRef.current) clearInterval(timerRef.current);
    const duration = formatTime(recordingTime);
    onSend("Voice Note", {
      name: "Voice Message",
      size: "14KB",
      type: "audio",
      url: "#",
      duration,
    });
    setRecordingTime(0);
  };

  // Handle File Attachment
  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSend(`Sent a file: ${file.name}`, {
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)}KB`,
        type: "document",
        url: URL.createObjectURL(file), // Local preview URL
      });
      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Format time mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
      setShowEmojiPicker(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-100 bg-white p-3 md:rounded-b-2xl relative">
      {/* Emoji Picker Popover */}
      {showEmojiPicker && (
        <div className="absolute bottom-16 left-4 z-50">
          <EmojiPicker onSelect={handleEmojiSelect} />
        </div>
      )}

      {/* Recording UI */}
      {isRecording ? (
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="flex items-center gap-2 flex-1 animate-pulse text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="font-mono font-medium">
              {formatTime(recordingTime)}
            </span>
          </div>
          <button
            type="button"
            onClick={cancelRecording}
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={sendVoiceNote}
            className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          {/* Input field */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={inputPlaceholder}
              disabled={disabled}
              className={cn(
                "w-full px-4 py-2.5 text-sm",
                "bg-transparent border-none outline-none",
                "placeholder:text-gray-400",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            />
          </div>

          {/* Action icons - Only show when no message */}
          {!message.trim() && (
            <div className="flex items-center gap-1 text-gray-400">
              <button
                type="button"
                className="p-2 hover:text-gray-600 transition-colors"
                aria-label="Favorites"
              >
                <Star className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={toggleEmojiPicker}
                className={cn(
                  "p-2 hover:text-gray-600 transition-colors",
                  showEmojiPicker && "text-primary bg-primary/10 rounded-full"
                )}
                aria-label="Emoji"
              >
                <Smile className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={startRecording}
                className="p-2 hover:text-gray-600 transition-colors"
                aria-label="Voice"
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleAttachClick}
                className="p-2 hover:text-gray-600 transition-colors"
                aria-label="Attach"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="p-2 hover:text-gray-600 transition-colors"
                aria-label="More"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Send button - Show when there's a message */}
          {message.trim() && (
            <button
              type="submit"
              disabled={disabled}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                "bg-primary text-white",
                "hover:bg-primary/90 transition-colors",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          )}
        </form>
      )}
    </div>
  );
}
