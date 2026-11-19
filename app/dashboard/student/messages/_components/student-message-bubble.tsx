"use client";

import { useState } from "react";
import { Copy, FileText, Info, MoreHorizontal, Reply, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Message } from "../_data/mock-messages";
import { EmojiPicker } from "./emoji-picker";

export function StudentMessageBubble({ message, showAvatar = true, showName = true, onReact, onReply, onDelete }: {
  message: Message; isGroup?: boolean; showAvatar?: boolean; showName?: boolean; onReact?: (messageId: string, emoji: string) => void; onReply?: (message: Message) => void; onDelete?: (message: Message) => void;
}) {
  const own = message.senderId === "me";
  const [infoOpen, setInfoOpen] = useState(false);
  const pending = message.id.startsWith("optimistic-");
  const copy = async () => { try { await navigator.clipboard.writeText(message.content); toast.success("Message copied"); } catch { toast.error("Could not copy message"); } };
  return <article className="group relative flex gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-muted/40 sm:px-3">
    {showAvatar ? <Avatar className="mt-0.5 size-9 shrink-0"><AvatarImage src={message.senderAvatar} /><AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">{(message.senderName || "U").slice(0, 1).toUpperCase()}</AvatarFallback></Avatar> : <div className="w-9 shrink-0" />}
    <div className="min-w-0 flex-1">{showName && <div className="mb-1 flex flex-wrap items-baseline gap-x-2"><span className="text-[13px] font-bold text-foreground">{message.senderName || "You"}</span>{own && <span className="text-xs text-muted-foreground">(You)</span>}<span className="text-[11px] text-muted-foreground">{message.timestamp}</span>{pending && <span className="text-[11px] text-muted-foreground">Sending…</span>}</div>}
      {message.replyTo && <div className="mb-2 rounded-r-lg border-l-2 border-primary bg-primary/5 px-3 py-2 text-xs text-muted-foreground"><span className="font-semibold text-primary">Reply to {message.replyTo.senderName}</span><p className="mt-1 line-clamp-2 break-words">{message.replyTo.content || "Attachment"}</p></div>}
      {message.content && <p className="whitespace-pre-wrap break-words text-[13px] leading-[1.65] text-foreground">{message.content}</p>}
      {message.images?.map((url, index) => <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block overflow-hidden rounded-xl border border-border"><img src={url} alt={`Image attachment ${index + 1}`} className="max-h-56 max-w-full object-contain" /></a>)}
      {message.video && <video src={message.video} controls className="mt-2 max-h-56 max-w-full rounded-xl border border-border">Your browser does not support video playback.</video>}
      {message.file && <a href={message.file.url} target="_blank" rel="noopener noreferrer" className="mt-2 flex w-fit max-w-full items-center gap-3 rounded-xl border border-border bg-muted/30 px-3 py-2 text-sm transition hover:bg-accent"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><FileText className="size-4" /></span><span className="min-w-0"><span className="block truncate text-xs font-semibold text-foreground">{message.file.name}</span><span className="block text-[11px] text-muted-foreground">Open attachment</span></span></a>}
      {!!message.reactions?.length && <div className="mt-2 flex flex-wrap gap-1.5">{message.reactions.map((reaction) => <button key={reaction.emoji} type="button" onClick={() => onReact?.(message.id, reaction.emoji)} disabled={!onReact} aria-label={`${reaction.emoji}, ${reaction.count} reactions`} className={`rounded-full border px-2 py-0.5 text-xs transition ${reaction.reactedByMe ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-card text-foreground hover:bg-accent"}`}>{reaction.emoji} {reaction.count}</button>)}</div>}
    </div>
    {!pending && <div className="flex shrink-0 items-start gap-1 text-muted-foreground opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">{onReply && <button type="button" onClick={() => onReply(message)} aria-label="Reply to message" className="rounded-lg p-1.5 hover:bg-accent hover:text-foreground"><Reply className="size-4" /></button>}{onReact && <EmojiPicker onSelect={(emoji) => onReact(message.id, emoji)} triggerClassName="rounded-lg p-1.5 hover:bg-accent hover:text-foreground" />}<DropdownMenu><DropdownMenuTrigger asChild><button type="button" aria-label="Message options" className="rounded-lg p-1.5 hover:bg-accent hover:text-foreground"><MoreHorizontal className="size-4" /></button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onClick={() => setInfoOpen(true)}><Info className="mr-2 size-4" />Message info</DropdownMenuItem>{message.content && <DropdownMenuItem onClick={() => void copy()}><Copy className="mr-2 size-4" />Copy message</DropdownMenuItem>}{own && onDelete && <DropdownMenuItem onClick={() => onDelete(message)} className="text-destructive focus:text-destructive"><Trash2 className="mr-2 size-4" />Delete message</DropdownMenuItem>}</DropdownMenuContent></DropdownMenu></div>}
    <Dialog open={infoOpen} onOpenChange={setInfoOpen}><DialogContent className="messaging-font sm:max-w-sm"><DialogHeader><DialogTitle>Message info</DialogTitle></DialogHeader><dl className="space-y-3 text-sm"><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Sender</dt><dd className="text-right font-medium">{message.senderName}</dd></div><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Sent</dt><dd className="text-right font-medium">{message.dateLabel}, {message.timestamp}</dd></div><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Attachment</dt><dd className="text-right font-medium">{message.images?.length ? "Image" : message.file ? "File" : "None"}</dd></div></dl></DialogContent></Dialog>
  </article>;
}
