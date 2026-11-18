"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PanelRight, Search, X } from "lucide-react";
import type { RoomRecord } from "@/lib/api/endpoints/rooms";

export function StudentGroupMessagesHeader({ messageImage, messageHeadingTitle = "Conversation", type = "group", room, onToggleDetails, detailsOpen, search, onSearchChange }: {
  messageImage?: string; messageHeadingTitle?: string; messageHeadingDescription?: string; type?: "group" | "individual"; online?: boolean; lastSeen?: string; room?: RoomRecord; onToggleDetails?: () => void; detailsOpen?: boolean; search?: string; onSearchChange?: (value: string) => void;
}) {
  return <header className="flex min-h-20 items-center justify-between gap-3 border-b border-border bg-card px-4 sm:px-6">
    <div className="flex min-w-0 items-center gap-3"><Avatar className="size-10 rounded-xl"><AvatarImage src={messageImage} /><AvatarFallback className="rounded-xl bg-primary/10 font-semibold text-primary">{messageHeadingTitle.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar><div className="min-w-0"><h1 className="truncate text-sm font-semibold text-foreground">{messageHeadingTitle}</h1><p className="mt-1 text-xs text-muted-foreground">{type === "group" ? `${room?.participants.length ?? 0} participants` : "Private conversation"}</p></div></div>
    <div className="flex items-center gap-1">{onSearchChange && <label className="flex items-center gap-1 rounded-lg border border-border bg-background px-2"><Search className="size-4 text-muted-foreground" /><input value={search} onChange={(event) => onSearchChange(event.target.value)} aria-label="Search messages" placeholder="Search messages" className="w-24 bg-transparent py-2 text-xs outline-none sm:w-36" />{search && <button type="button" onClick={() => onSearchChange("")} aria-label="Clear search"><X className="size-4 text-muted-foreground" /></button>}</label>}<button type="button" onClick={onToggleDetails} aria-label={detailsOpen ? "Close conversation details" : "Open conversation details"} aria-expanded={detailsOpen} className="rounded-xl p-2.5 text-muted-foreground transition hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"><PanelRight className="size-5" /></button></div>
  </header>;
}
