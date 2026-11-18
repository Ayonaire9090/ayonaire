"use client";

import * as React from "react";
import { FileText, ImagePlus, Paperclip, Send, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { EmojiPicker } from "./emoji-picker";
import type { Message } from "../_data/mock-messages";

export interface ComposerAttachment { file: File; kind: "media" | "file" }
interface StudentMessageComposerProps {
  onSend?: (message: string, attachment?: ComposerAttachment, replyTo?: Message) => void | Promise<void>;
  className?: string;
  isGroup?: boolean;
  replyTo?: Message | null;
  onCancelReply?: () => void;
}

export const StudentMessageComposer = ({ onSend, className, replyTo, onCancelReply }: StudentMessageComposerProps) => {
  const [message, setMessage] = React.useState("");
  const [attachment, setAttachment] = React.useState<ComposerAttachment | null>(null);
  const [sending, setSending] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const imageRef = React.useRef<HTMLInputElement>(null);
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [preview, setPreview] = React.useState<string>();

  React.useEffect(() => {
    if (attachment?.kind !== "media") { setPreview(undefined); return; }
    const url = URL.createObjectURL(attachment.file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [attachment]);
  React.useLayoutEffect(() => {
    const field = textareaRef.current;
    if (!field) return;
    field.style.height = "auto";
    field.style.height = `${Math.min(field.scrollHeight, 160)}px`;
  }, [message]);

  const send = async () => {
    if ((!message.trim() && !attachment) || sending || !onSend) return;
    setSending(true);
    try {
      await onSend(message.trim(), attachment ?? undefined, replyTo ?? undefined);
      setMessage(""); setAttachment(null); onCancelReply?.();
    } catch { toast.error("Message could not be sent. Your draft is still here."); }
    finally { setSending(false); requestAnimationFrame(() => textareaRef.current?.focus()); }
  };
  const insertEmoji = (emoji: string) => {
    if (sending) return;
    const field = textareaRef.current;
    const start = field?.selectionStart ?? message.length;
    const end = field?.selectionEnd ?? start;
    setMessage((current) => current.slice(0, start) + emoji + current.slice(end));
    requestAnimationFrame(() => { field?.focus(); field?.setSelectionRange(start + emoji.length, start + emoji.length); });
  };
  const selectFile = (kind: "media" | "file") => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setAttachment({ file, kind });
    event.target.value = "";
  };

  return <div className={cn("shrink-0 border-t border-[#eeeae5] bg-[#fffefa] px-3 pb-3 pt-3 sm:px-5 sm:pb-4", className)}>
    <div className="mx-auto max-w-[920px]">
      {replyTo && <div className="mb-2 flex items-center justify-between rounded-xl border-l-[3px] border-[#ec7045] bg-[#fff3ed] px-3 py-2"><div className="min-w-0"><p className="text-xs font-bold text-[#d85f39]">Replying to {replyTo.senderName}</p><p className="truncate text-xs text-[#81766d]">{replyTo.content || "Attachment"}</p></div><button type="button" disabled={sending} onClick={onCancelReply} aria-label="Cancel reply" className="rounded-full p-1 text-[#8e8178] hover:bg-white disabled:opacity-40"><X className="size-4" /></button></div>}
      {attachment && <div className="mb-2 flex w-fit max-w-full items-center gap-2 rounded-xl border border-[#eee6df] bg-white p-2">{preview ? <img src={preview} alt="" className="size-10 rounded-lg object-cover" /> : <span className="grid size-10 place-items-center rounded-lg bg-[#fff2ec]"><FileText className="size-5 text-[#e56c43]" /></span>}<div className="min-w-0"><p className="max-w-[200px] truncate text-xs font-semibold text-[#3a322d]">{attachment.file.name}</p><p className="text-[11px] text-[#a39a92]">{Math.max(1, Math.round(attachment.file.size / 1024))} KB</p></div><button type="button" disabled={sending} onClick={() => setAttachment(null)} aria-label="Remove attachment" className="rounded-full p-1 text-[#958a80] hover:bg-[#f7f4f1] disabled:opacity-40"><X className="size-4" /></button></div>}
      <div className="flex items-end gap-1.5 rounded-[20px] border border-[#e9e4de] bg-white p-2 shadow-[0_4px_18px_rgba(50,38,28,0.05)] focus-within:border-[#ed9a79] focus-within:ring-2 focus-within:ring-[#f9e5da]">
        <input ref={imageRef} type="file" accept="image/*" className="hidden" onChange={selectFile("media")} />
        <input ref={fileRef} type="file" className="hidden" onChange={selectFile("file")} />
        <button type="button" disabled={sending} onClick={() => fileRef.current?.click()} aria-label="Attach a file" className="grid size-9 shrink-0 place-items-center rounded-xl text-[#91877e] transition hover:bg-[#faf1eb] hover:text-[#e2633c] disabled:opacity-40"><Paperclip className="size-[18px]" /></button>
        <button type="button" disabled={sending} onClick={() => imageRef.current?.click()} aria-label="Attach an image" className="grid size-9 shrink-0 place-items-center rounded-xl text-[#91877e] transition hover:bg-[#faf1eb] hover:text-[#e2633c] disabled:opacity-40"><ImagePlus className="size-[18px]" /></button>
        <textarea ref={textareaRef} value={message} rows={1} disabled={sending} onChange={(event) => setMessage(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void send(); } }} placeholder="Write a message..." aria-label="Write a message" className="min-h-9 max-h-40 min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-1 py-2 text-sm leading-5 text-[#292420] outline-none placeholder:text-[#aaa199] disabled:opacity-70" />
        <EmojiPicker onSelect={insertEmoji} triggerClassName="grid size-9 shrink-0 place-items-center rounded-xl text-[#91877e] hover:bg-[#faf1eb] hover:text-[#e2633c]" />
        <button type="button" onClick={() => void send()} disabled={sending || (!message.trim() && !attachment)} aria-label={sending ? "Sending message" : "Send message"} className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#ec7045] text-white transition hover:bg-[#d95f37] active:scale-95 disabled:cursor-not-allowed disabled:opacity-40">{sending ? <span className="h-1.5 w-5 animate-pulse rounded-full bg-white motion-reduce:animate-none" /> : <Send className="size-[18px]" />}</button>
      </div>
      <p className="hidden px-2 pt-1.5 text-[11px] text-[#afa59c] sm:block">Enter to send · Shift + Enter for a new line</p>
    </div>
  </div>;
};
