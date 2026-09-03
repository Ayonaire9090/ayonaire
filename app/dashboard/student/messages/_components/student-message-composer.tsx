"use client";

import * as React from "react";
import {
  Plus,
  Mic,
  ImageIcon,
  Send,
  MapPin,
  MoreHorizontal,
  Paperclip,
  FileText,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EmojiPicker } from "./emoji-picker";
import type { Message } from "../_data/mock-messages";

export interface ComposerAttachment {
  file: File;
  kind: "media" | "file";
}

interface StudentMessageComposerProps {
  onSend?: (
    message: string,
    attachment?: ComposerAttachment,
    replyTo?: Message,
  ) => void;
  className?: string;
  isGroup?: boolean;
  replyTo?: Message | null;
  onCancelReply?: () => void;
}

function notAvailable(feature: string) {
  toast.info(`${feature} isn't available yet — coming in a future update.`);
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const StudentMessageComposer = ({
  onSend,
  className,
  isGroup = false,
  replyTo,
  onCancelReply,
}: StudentMessageComposerProps) => {
  const [message, setMessage] = React.useState("");
  const [attachment, setAttachment] = React.useState<ComposerAttachment | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (attachment?.kind === "media") {
      const url = URL.createObjectURL(attachment.file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(null);
  }, [attachment]);

  const handleSend = () => {
    if (!message.trim() && !attachment) return;
    onSend?.(message.trim(), attachment ?? undefined, replyTo ?? undefined);
    setMessage("");
    setAttachment(null);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const handleEmojiSelect = (emoji: string) => {
    const el = textareaRef.current;
    if (!el) {
      setMessage((prev) => prev + emoji);
      return;
    }
    const start = el.selectionStart ?? message.length;
    const end = el.selectionEnd ?? message.length;
    const next = message.slice(0, start) + emoji + message.slice(end);
    setMessage(next);
    requestAnimationFrame(() => {
      el.focus();
      el.selectionStart = el.selectionEnd = start + emoji.length;
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAttachment({ file, kind: "media" });
    e.target.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAttachment({ file, kind: "file" });
    e.target.value = "";
  };

  const attachmentPreview = attachment && (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 mb-2 w-fit max-w-full">
      {attachment.kind === "media" && previewUrl ? (
        <img
          src={previewUrl}
          alt={attachment.file.name}
          className="w-10 h-10 rounded-lg object-cover shrink-0"
        />
      ) : (
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5 text-gray-500" />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
          {attachment.kind === "media" ? "Image attachment" : "File attachment"}
        </p>
        <p className="text-[13px] font-medium text-gray-900 truncate max-w-[180px]">
          {attachment.file.name}
        </p>
        <p className="text-[11px] text-gray-400">
          {formatFileSize(attachment.file.size)}
        </p>
      </div>
      <button
        onClick={() => setAttachment(null)}
        className="ml-1 shrink-0 p-1 text-gray-400 hover:text-gray-700 transition-colors"
        aria-label="Remove attachment"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );

  const hiddenInputs = (
    <>
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );

  if (!isGroup) {
    return (
      <div
        className={cn(
          "sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3",
          className,
        )}
      >
        {hiddenInputs}
        {attachmentPreview}
        <div className="flex items-end gap-2">
          {/* Attachment button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#F6F6F6] text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors mb-0.5"
            aria-label="Add attachment"
          >
            <Plus className="w-5 h-5" />
          </button>

          {/* Input area */}
          <div className="flex-1 flex items-end bg-[#F6F6F6] rounded-2xl px-4 py-2 gap-2 min-h-[42px]">
            <textarea
              ref={textareaRef}
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              onInput={handleInput}
              placeholder="Type a message"
              className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 resize-none outline-none max-h-[120px] leading-snug py-0.5"
            />

            {/* Mic button */}
            <button
              onClick={() => notAvailable("Voice messages")}
              className="shrink-0 text-gray-900 hover:text-primary transition-colors"
              aria-label="Voice message"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 mb-0.5">
            {/* Send message button always visible */}
            <button
              className="shrink-0 p-1.5 text-gray-900 hover:text-primary transition-colors"
              aria-label="Send message"
              onClick={handleSend}
            >
              <Send className="w-5 h-5" />
            </button>

            {/* Mobile actions menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="shrink-0 p-1.5 text-gray-900 hover:text-primary transition-colors"
                    aria-label="More actions"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  side="top"
                  sideOffset={8}
                  className="w-48 rounded-xl border-0 bg-[#F2F2F2] shadow-md p-2 space-y-1 mb-1 z-50 animate-in fade-in-50 slide-in-from-bottom-2 duration-150"
                >
                  <DropdownMenuItem
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white transition-colors"
                    onClick={() => imageInputRef.current?.click()}
                  >
                    <ImageIcon className="w-4 h-4 text-gray-600" />
                    <span>Attach image</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Paperclip className="w-4 h-4 text-gray-600" />
                    <span>Attach file</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white transition-colors"
                    onClick={() => notAvailable("Location sharing")}
                  >
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span>Location</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop-only actions */}
            <button
              onClick={() => imageInputRef.current?.click()}
              className="hidden md:block shrink-0 p-1.5 text-gray-900 hover:text-primary transition-colors"
              aria-label="Attach image"
            >
              <ImageIcon className="w-5 h-5" />
            </button>
            <div className="hidden md:block">
              <EmojiPicker onSelect={handleEmojiSelect} />
            </div>
            <button
              onClick={() => notAvailable("Location sharing")}
              className="hidden md:block shrink-0 p-1.5 text-gray-900 hover:text-primary transition-colors"
              aria-label="Location"
            >
              <MapPin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "sticky bottom-0 bg-white px-3 md:px-5 py-2.5 border-t border-gray-100",
        className,
      )}
    >
      {hiddenInputs}
      {replyTo && (
        <div className="mb-2 flex items-center justify-between gap-3 rounded-r-sm border-l-2 border-[#F15D23] bg-[#FFF3EF] px-3 py-2">
          <div className="min-w-0">
            <div className="mb-0.5 flex items-center gap-2">
              <span className="text-xs font-semibold text-[#F15D23]">Reply</span>
              <span className="truncate text-xs font-semibold text-gray-900">
                {replyTo.senderName}
              </span>
            </div>
            <p className="truncate text-xs text-gray-600">{replyTo.content}</p>
          </div>
          <button
            onClick={onCancelReply}
            className="shrink-0 rounded-full p-1 text-gray-400 hover:bg-white hover:text-gray-700"
            aria-label="Cancel reply"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      {attachmentPreview}
      <div className="flex items-end gap-2">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="mb-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
          aria-label="Add attachment"
        >
          <Plus className="w-4 h-4" />
        </button>

        <div className="flex min-h-10 flex-1 items-center rounded-full bg-[#F4F4F4] px-4">
          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            placeholder="Type a message"
            className="w-full resize-none bg-transparent py-2 text-sm leading-relaxed text-gray-800 outline-none max-h-[96px] placeholder:text-gray-400"
          />
          <button
            onClick={() => notAvailable("Voice messages")}
            className="ml-2 text-gray-500 hover:text-gray-900"
            aria-label="Voice message"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>

        <EmojiPicker
          onSelect={handleEmojiSelect}
          triggerClassName="mb-1 p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
        />
        <button
          onClick={() => imageInputRef.current?.click()}
          className="mb-1 p-1.5 text-gray-600 hover:text-gray-900"
          aria-label="Attach image"
        >
          <ImageIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => notAvailable("Location sharing")}
          className="mb-1 p-1.5 text-gray-600 hover:text-gray-900"
          aria-label="Location"
        >
          <MapPin className="w-4 h-4" />
        </button>
        <button
          onClick={handleSend}
          className="mb-1 p-1.5 text-gray-700 hover:text-[#F15D23]"
          aria-label="Send message"
        >
          <Send className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
};
