"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { roomsApi } from "@/lib/api/endpoints/rooms";
import { useSendMessageMutation } from "@/hooks/api/use-messages";
import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { mapMessageRecordToMessage } from "../_data/message-data";
import { StudentMessageBubble } from "./student-message-bubble";
import { StudentMessageComposer, type ComposerAttachment } from "./student-message-composer";

export function MessageThreadPanel({ roomId, messageId, userId, onClose, canSend = true }: { roomId: string; messageId: string; userId?: string; onClose: () => void; canSend?: boolean }) {
  const client = useQueryClient();
  const thread = useQuery({ queryKey: ["message-thread", roomId, messageId], queryFn: () => roomsApi.thread(roomId, messageId) });
  const send = useSendMessageMutation();
  const root = thread.data?.data?.root;
  const sendReply = async (text: string, attachment?: ComposerAttachment) => {
    if (!root) throw new Error("Thread unavailable");
    const form = new FormData(); form.append("roomId", roomId); form.append("replyTo", root.id); form.append("text", text); if (attachment) form.append(attachment.kind, attachment.file);
    await send.mutateAsync(form); await client.invalidateQueries({ queryKey: ["message-thread", roomId] });
  };
  return <section className="messaging-font flex h-full min-h-0 flex-col bg-card"><header className="flex items-center justify-between border-b border-border px-4 py-4"><div><h2 className="text-sm font-bold">Thread</h2><p className="text-xs text-muted-foreground">A focused discussion</p></div><button onClick={onClose} aria-label="Close thread" className="rounded-lg p-2 text-muted-foreground hover:bg-accent"><X className="size-4" /></button></header>{thread.isLoading ? <StudentLoadingSkeleton variant="messages" /> : thread.isError || !root ? <div role="alert" className="p-5 text-sm text-muted-foreground">Could not load thread. <button onClick={() => thread.refetch()} className="text-primary underline">Retry</button></div> : <><div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3"><StudentMessageBubble message={mapMessageRecordToMessage(root, userId)} /><p className="border-b border-border px-2 py-3 text-xs text-muted-foreground">{thread.data?.data?.replies.length ?? 0} replies {thread.data?.data?.replies.length === 200 ? "· Showing first 200" : ""}</p>{thread.data?.data?.replies.map((reply) => <StudentMessageBubble key={reply.id} message={mapMessageRecordToMessage(reply, userId)} />)}</div>{canSend ? <StudentMessageComposer onSend={sendReply} /> : <p className="border-t border-border p-4 text-xs text-muted-foreground">Only the instructor or an administrator can post in this announcement room.</p>}</>}</section>;
}
