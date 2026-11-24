"use client";

import * as React from "react";
import { FileText, ImagePlus, Paperclip, Send, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { EmojiPicker } from "./emoji-picker";
import type { Message } from "../_data/mock-messages";

export interface ComposerAttachment { file: File; kind: "media" | "file" }
interface StudentMessageComposerProps { onSend?: (message: string, attachment?: ComposerAttachment, replyTo?: Message) => void | Promise<void>; className?: string; isGroup?: boolean; replyTo?: Message | null; onCancelReply?: () => void; onTyping?: () => void }

export function StudentMessageComposer({ onSend, className, replyTo, onCancelReply, onTyping }: StudentMessageComposerProps) {
  const [message, setMessage] = React.useState("");
  const [attachment, setAttachment] = React.useState<ComposerAttachment | null>(null);
  const [sending, setSending] = React.useState(false);
  const [preview, setPreview] = React.useState<string>();
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const imageRef = React.useRef<HTMLInputElement>(null);
  const fileRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => { if (attachment?.kind !== "media") { setPreview(undefined); return; } const url = URL.createObjectURL(attachment.file); setPreview(url); return () => URL.revokeObjectURL(url); }, [attachment]);
  React.useLayoutEffect(() => { const field = textareaRef.current; if (!field) return; field.style.height = "auto"; field.style.height = `${Math.min(field.scrollHeight, 160)}px`; }, [message]);
  const send = async () => { if ((!message.trim() && !attachment) || sending || !onSend) return; setSending(true); try { await onSend(message.trim(), attachment ?? undefined, replyTo ?? undefined); setMessage(""); setAttachment(null); onCancelReply?.(); } catch { toast.error("Message could not be sent. Your draft is still here."); } finally { setSending(false); requestAnimationFrame(() => textareaRef.current?.focus()); } };
  const insertEmoji = (emoji: string) => { if (sending) return; const field = textareaRef.current; const start = field?.selectionStart ?? message.length; const end = field?.selectionEnd ?? start; setMessage((current) => current.slice(0, start) + emoji + current.slice(end)); requestAnimationFrame(() => { field?.focus(); field?.setSelectionRange(start + emoji.length, start + emoji.length); }); };
  const selectFile = (kind: "media" | "file") => (event: React.ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; if (file) setAttachment({ file, kind }); event.target.value = ""; };
  const toolClass = "grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:opacity-40";
  return <div className={cn("shrink-0 bg-background px-3 pb-4 pt-2 sm:px-5", className)}><div className="mx-auto max-w-[920px] rounded-2xl border border-border bg-card p-3 transition-colors focus-within:border-primary/40">
    {replyTo && <div className="mb-2 flex items-center justify-between rounded-lg border-l-2 border-primary bg-primary/5 px-3 py-2"><div className="min-w-0"><p className="text-xs font-semibold text-primary">Replying to {replyTo.senderName}</p><p className="truncate text-xs text-muted-foreground">{replyTo.content || "Attachment"}</p></div><button type="button" disabled={sending} onClick={onCancelReply} aria-label="Cancel reply" className="rounded-full p-1 text-muted-foreground hover:bg-accent"><X className="size-4" /></button></div>}
    {attachment && <div className="mb-2 flex w-fit max-w-full items-center gap-2 rounded-lg border border-border p-2">{preview ? <img src={preview} alt="" className="size-10 rounded-lg object-cover" /> : <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><FileText className="size-5" /></span>}<div className="min-w-0"><p className="max-w-[200px] truncate text-xs font-semibold text-foreground">{attachment.file.name}</p><p className="text-[11px] text-muted-foreground">{Math.max(1, Math.round(attachment.file.size / 1024))} KB</p></div><button type="button" disabled={sending} onClick={() => setAttachment(null)} aria-label="Remove attachment" className="rounded-full p-1 text-muted-foreground hover:bg-accent"><X className="size-4" /></button></div>}
    <textarea ref={textareaRef} value={message} rows={2} disabled={sending} onChange={(event) => { setMessage(event.target.value); if (event.target.value.trim()) onTyping?.(); }} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void send(); } }} placeholder="Write a message..." aria-label="Write a message" className="min-h-14 max-h-40 w-full resize-none overflow-y-auto bg-transparent px-1 py-1 text-sm leading-6 text-foreground outline-none placeholder:text-muted-foreground disabled:opacity-70" />
    <div className="mt-2 flex items-center justify-between gap-2"><div className="flex items-center gap-1.5"><input ref={fileRef} type="file" className="hidden" onChange={selectFile("file")} /><input ref={imageRef} type="file" accept="image/*" className="hidden" onChange={selectFile("media")} /><button type="button" disabled={sending} onClick={() => fileRef.current?.click()} aria-label="Attach a file" className={toolClass}><Paperclip className="size-4" /></button><button type="button" disabled={sending} onClick={() => imageRef.current?.click()} aria-label="Attach an image" className={toolClass}><ImagePlus className="size-4" /></button><EmojiPicker onSelect={insertEmoji} triggerClassName={toolClass} /></div><button type="button" onClick={() => void send()} disabled={sending || (!message.trim() && !attachment)} className="inline-flex h-8 items-center gap-2 rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40">{sending ? "Sending…" : "Send message"}<Send className="size-3.5" /></button></div>
  </div></div>;
}
