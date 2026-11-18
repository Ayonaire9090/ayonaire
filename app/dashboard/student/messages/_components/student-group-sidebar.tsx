"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, Link2, Users } from "lucide-react";
import type { RoomRecord } from "@/lib/api/endpoints/rooms";
import type { MessageRecord } from "@/lib/api/endpoints/messages";

export function StudentGroupSidebar({ room, messages = [] }: { room: RoomRecord; messages?: MessageRecord[] }) {
  const files = messages.flatMap((message) => [message.media, message.file].filter((file): file is { url: string; publicId: string } => Boolean(file)));
  const links = messages.flatMap((message) => (message.text.match(/https?:\/\/[^\s<>]+/g) ?? [])).filter((link, index, all) => all.indexOf(link) === index);
  return <div className="min-h-full space-y-6 bg-card p-5 text-card-foreground">
    <div><p className="text-xs font-semibold uppercase tracking-wider text-primary">Conversation</p><h2 className="mt-1 text-lg font-semibold">Details</h2><p className="mt-2 text-sm text-muted-foreground">{room.description || (room.isGroup ? "Group conversation" : "Private conversation")}</p></div>
    <section><h3 className="flex items-center gap-2 text-sm font-semibold"><Users className="size-4 text-primary" /> Participants <span className="text-muted-foreground">{room.participants.length}</span></h3><div className="mt-3 space-y-3">{room.participants.map((member) => <div key={member.id} className="flex items-center gap-3"><Avatar className="size-9"><AvatarImage src={member.profile?.url} /><AvatarFallback className="bg-primary/10 text-primary">{member.name.slice(0, 1).toUpperCase()}</AvatarFallback></Avatar><div className="min-w-0"><p className="truncate text-sm font-medium">{member.name}</p>{member.id === room.roomCreator && <p className="text-xs text-muted-foreground">Conversation creator</p>}</div></div>)}</div></section>
    <section><h3 className="flex items-center gap-2 text-sm font-semibold"><FileText className="size-4 text-primary" /> Shared files</h3><p className="mt-1 text-xs text-muted-foreground">From loaded messages</p><div className="mt-3 space-y-2">{files.length ? files.map((file) => <a key={file.publicId} href={file.url} target="_blank" rel="noopener noreferrer" className="block truncate rounded-lg border border-border p-2 text-sm hover:bg-accent">{file.url.split("/").pop() || "Attachment"}</a>) : <p className="text-sm text-muted-foreground">No files shared yet.</p>}</div></section>
    <section><h3 className="flex items-center gap-2 text-sm font-semibold"><Link2 className="size-4 text-primary" /> Shared links</h3><div className="mt-3 space-y-2">{links.length ? links.map((link) => <a key={link} href={link} target="_blank" rel="noopener noreferrer" className="block truncate text-sm text-primary underline-offset-2 hover:underline">{link}</a>) : <p className="text-sm text-muted-foreground">No links in loaded messages.</p>}</div></section>
  </div>;
}
