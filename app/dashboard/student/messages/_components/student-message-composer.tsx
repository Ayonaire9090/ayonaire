"use client";

import * as React from "react";
import {
  Plus,
  Mic,
  ImageIcon,
  Send,
  MapPin,
  MoreHorizontal,
  ChevronDown,
  AlignLeft,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Eraser,
  List,
  ListOrdered,
  Link,
  CodeSquare,
  Quote,
  Minus,
  AtSign,
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

export interface ComposerAttachment {
  file: File;
  kind: "media" | "file";
}

interface StudentMessageComposerProps {
  onSend?: (message: string, attachment?: ComposerAttachment) => void;
  className?: string;
  isGroup?: boolean;
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
    onSend?.(message.trim(), attachment ?? undefined);
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
        "sticky bottom-0 bg-white px-4 py-4 border-t border-gray-100",
        className,
      )}
    >
      {hiddenInputs}
      {attachmentPreview}
      <div className="bg-[#F6F6F6] rounded-3xl flex flex-col overflow-hidden">
        {/* Top Toolbar */}
        <div className="flex items-center gap-1.5 px-4 pt-3 pb-2 overflow-x-auto border-b border-gray-200/50 scrollbar-hide">
          {/* Dropdowns */}
          <button
            onClick={() => notAvailable("Text styles")}
            className="flex items-center gap-1 text-xs text-gray-700 font-medium hover:bg-gray-200 px-2 py-1 rounded"
          >
            Normal text <ChevronDown className="w-3 h-3" />
          </button>
          <button
            onClick={() => notAvailable("Text alignment")}
            className="flex items-center gap-1 text-gray-700 hover:bg-gray-200 p-1 rounded"
          >
            <AlignLeft className="w-4 h-4" /> <ChevronDown className="w-3 h-3" />
          </button>
          <button
            onClick={() => notAvailable("Text color")}
            className="flex items-center gap-1 text-gray-700 hover:bg-gray-200 p-1 rounded"
          >
            <div className="w-4 h-4 bg-black rounded-sm" /> <ChevronDown className="w-3 h-3" />
          </button>

          <div className="w-px h-4 bg-gray-300 mx-1 shrink-0" />

          {/* Formatting */}
          {[
            { icon: Bold, label: "Bold" },
            { icon: Italic, label: "Italic" },
            { icon: Underline, label: "Underline" },
            { icon: Strikethrough, label: "Strikethrough" },
            { icon: Code, label: "Inline code" },
            { icon: Eraser, label: "Clear formatting" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => notAvailable(label)}
              className="p-1.5 text-gray-700 hover:bg-gray-200 rounded"
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}

          <div className="w-px h-4 bg-gray-300 mx-1 shrink-0" />

          {/* Blocks */}
          {[
            { icon: List, label: "Bulleted list" },
            { icon: ListOrdered, label: "Numbered list" },
            { icon: Link, label: "Link" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => notAvailable(label)}
              className="p-1.5 text-gray-700 hover:bg-gray-200 rounded"
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
          <button
            onClick={() => imageInputRef.current?.click()}
            className="p-1.5 text-gray-700 hover:bg-gray-200 rounded"
            aria-label="Attach image"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
          {[
            { icon: CodeSquare, label: "Code block" },
            { icon: Quote, label: "Quote" },
            { icon: Minus, label: "Divider" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => notAvailable(label)}
              className="p-1.5 text-gray-700 hover:bg-gray-200 rounded"
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Text Area */}
        <div className="px-4 py-3">
          <textarea
            ref={textareaRef}
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            placeholder="Message ..."
            className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-500 resize-none outline-none max-h-[120px] leading-relaxed"
          />
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between px-3 pb-3">
          <div className="flex items-center gap-1">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Add attachment"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => notAvailable("Text styles")}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors font-medium text-[15px]"
            >
              Aa
            </button>
            <EmojiPicker
              onSelect={handleEmojiSelect}
              triggerClassName="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            />
            <button
              onClick={() => notAvailable("Mentions")}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <AtSign className="w-5 h-5" />
            </button>
            <button
              onClick={() => notAvailable("More options")}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleSend}
            className="p-2 text-[#F15D23] hover:text-[#d04c1b] transition-colors"
          >
            <Send className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
};
