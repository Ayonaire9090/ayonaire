"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { InstructorMessagesSidebarContent } from "../_components/student-messages-sidebar-content";
import { InstructorMessagesHeader } from "../_components/instructor-messages-header";
import { StudentGroupMessagesHeader } from "@/app/dashboard/student/messages/_components/student-group-messages-header";
import { StudentGroupSidebar } from "@/app/dashboard/student/messages/_components/student-group-sidebar";
import { StudentMessageList } from "@/app/dashboard/student/messages/_components/student-message-list";
import { StudentMessageComposer, type ComposerAttachment } from "@/app/dashboard/student/messages/_components/student-message-composer";
import { mapMessageRecordToMessage, mapRoomToConversation } from "@/app/dashboard/student/messages/_data/message-data";
import type { Message } from "@/app/dashboard/student/messages/_data/mock-messages";
import { useGetRooms } from "@/hooks/api/use-rooms";
import { useDeleteMessageMutation, useGetMessages, useReactToMessageMutation, useSendMessageMutation, useSearchMessages } from "@/hooks/api/use-messages";
import { useAuthStore } from "@/store/auth.store";

export default function InstructorMessageDetails() {
  const roomId = useParams().messageId as string;
  const userId = useAuthStore((state) => state.user?._id);
  const [reply, setReply] = useState<Message | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  useEffect(() => { setDetailsOpen(window.matchMedia("(min-width: 1024px)").matches); }, []);
  const [search, setSearch] = useState("");
  const rooms = useGetRooms();
  const room = rooms.data?.data?.find((item) => item.id === roomId);
  const messages = useGetMessages(roomId);
  const searchResults = useSearchMessages(roomId, search);
  const send = useSendMessageMutation();
  const react = useReactToMessageMutation();
  const remove = useDeleteMessageMutation();
  const conversation = room ? mapRoomToConversation(room, userId) : undefined;
  const mapped = ((search.trim() ? searchResults.data?.data?.messages : messages.data?.data?.messages) ?? []).map((item) => mapMessageRecordToMessage(item, userId));
  const handleSend = async (text: string, attachment?: ComposerAttachment, replyTo?: Message) => {
    const form = new FormData(); form.append("roomId", roomId); form.append("text", text);
    if (attachment) form.append(attachment.kind, attachment.file);
    if (replyTo) form.append("replyTo", replyTo.id);
    await send.mutateAsync(form); setReply(null);
  };
  return <><InstructorMessagesSidebarContent variant="sidebar" collapsible="icon" /><SidebarInset className="messaging-font flex h-dvh flex-col overflow-hidden bg-background pb-[72px] md:pb-0"><InstructorMessagesHeader />
    {rooms.isLoading || messages.isLoading ? <div className="flex flex-1 items-center justify-center"><StudentLoadingSkeleton variant="messages" /></div> : !room || !conversation || messages.isError ? <div role="alert" className="flex flex-1 flex-col items-center justify-center gap-3 text-sm text-muted-foreground">Unable to load conversation.<button className="text-primary underline" onClick={() => { rooms.refetch(); messages.refetch(); }}>Try again</button></div> : <><StudentGroupMessagesHeader messageImage={conversation.avatar} messageHeadingTitle={conversation.title} type={conversation.type} room={room} detailsOpen={detailsOpen} onToggleDetails={() => setDetailsOpen((open) => !open)} search={search} onSearchChange={setSearch} onOpenFiles={() => { setDetailsOpen(true); setTimeout(() => document.getElementById("messaging-shared-files")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50); }} /><div className="relative flex min-h-0 flex-1 overflow-hidden bg-muted/30"><div className="flex min-w-0 flex-1 flex-col">{search.trim() && (searchResults.isFetching || searchResults.isDebouncing) ? <StudentLoadingSkeleton variant="messages" /> : search.trim() && searchResults.isError ? <div role="alert" className="flex flex-1 items-center justify-center text-sm text-muted-foreground"><button onClick={() => searchResults.refetch()} className="text-primary underline">Search failed. Retry</button></div> : search.trim() && !mapped.length ? <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">No matching messages found.</div> : <StudentMessageList key={roomId} messages={mapped} isGroup={room.isGroup} onReply={setReply} onReact={(messageId, emoji) => react.mutate({ messageId, emoji }, { onError: () => toast.error("Could not update reaction") })} onDelete={(message) => remove.mutate(message.id, { onError: () => toast.error("Could not delete message") })} />}<StudentMessageComposer key={roomId} onSend={handleSend} replyTo={reply} onCancelReply={() => setReply(null)} /></div>{detailsOpen && <aside className="absolute inset-y-0 right-0 z-10 w-full max-w-sm overflow-y-auto border-l border-border bg-card shadow-lg lg:relative lg:w-80 lg:shrink-0 lg:shadow-none"><StudentGroupSidebar room={room} messages={messages.data?.data?.messages} /></aside>}</div></>}
  </SidebarInset></>;
}
