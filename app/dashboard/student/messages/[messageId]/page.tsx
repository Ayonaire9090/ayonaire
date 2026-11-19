"use client";

import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { getMessagingSocket } from "@/lib/socket/messaging-socket";
import { useChatFeatures } from "@/hooks/api/use-chat-features";
import { useGetRooms } from "@/hooks/api/use-rooms";
import {
  useDeleteMessageMutation,
  useGetMessages,
  useReactToMessageMutation,
  useSendMessageMutation,
  useSearchMessages,
  useLoadOlderMessages,
} from "@/hooks/api/use-messages";
import { useAuthStore } from "@/store/auth.store";
import {
  mapRoomToConversation,
  mapMessageRecordToMessage,
} from "../_data/message-data";
import type { Message } from "../_data/mock-messages";
import { StudentGroupMessagesHeader } from "../_components/student-group-messages-header";
import { StudentMessageList } from "../_components/student-message-list";
import {
  StudentMessageComposer,
  ComposerAttachment,
} from "../_components/student-message-composer";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar";
import { StudentMessagesSidebarContent } from "../_components/student-messages-sidebar-content";
import { StudentGroupSidebar } from "../_components/student-group-sidebar";
import { MessageThreadPanel } from "../_components/message-thread-panel";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";


export default function StudentMessageDetails() {
  const params = useParams();
  const roomId = params.messageId as string;
  const user = useAuthStore((s) => s.user);
  const { isMobile, setOpenMobile } = useSidebar();
  const [replyTo, setReplyTo] = useState<Message | null>(null);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  useEffect(() => { setDetailsOpen(window.matchMedia("(min-width: 1024px)").matches); }, []);
  const [search, setSearch] = useState("");
  const [typingUserId, setTypingUserId] = useState<string | null>(null);
  const lastTypingSent = useRef(0);
  useEffect(() => {
    const socket = getMessagingSocket();
    let timer: ReturnType<typeof setTimeout> | undefined;
    const receiveTyping = (payload: { roomId: string; userId: string }) => {
      if (payload.roomId !== roomId || payload.userId === user?._id) return;
      setTypingUserId(payload.userId);
      clearTimeout(timer);
      timer = setTimeout(() => setTypingUserId(null), 3000);
    };
    setTypingUserId(null);
    socket.on("typing:start", receiveTyping);
    return () => { clearTimeout(timer); socket.off("typing:start", receiveTyping); };
  }, [roomId, user?._id]);

  // Reopening the off-canvas conversation list is how mobile users get
  // back to their inbox - there's no other visible entry point on this page.
  const backToConversations = isMobile && (
    <button
      onClick={() => setOpenMobile(true)}
      className="flex items-center gap-1.5 border-b border-border bg-card px-4 py-2 text-sm font-medium text-foreground md:hidden"
    >
      <ChevronLeft className="w-4 h-4" />
      Conversations
    </button>
  );

  const { data: roomsData, isLoading: isRoomsLoading } = useGetRooms();
  const room = roomsData?.data?.find((r) => r.id === roomId);
  const conversation = useMemo(
    () => (room ? mapRoomToConversation(room, user?._id) : undefined),
    [room, user?._id],
  );

  const { data: messagesData, isLoading: isMessagesLoading, isError: isMessagesError, refetch: refetchMessages } = useGetMessages(roomId);
  const features = useChatFeatures(roomId, messagesData?.data?.messages.at(-1)?.id);
  const older = useLoadOlderMessages(roomId);
  const searchResults = useSearchMessages(roomId, search);
  const messages = useMemo(
    () =>
      ((search.trim() ? searchResults.data?.data?.messages : messagesData?.data?.messages) ?? [])
        .slice()
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        )
        .map((m) =>
          mapMessageRecordToMessage(m, user?._id),
      ),
    [messagesData, searchResults.data, search, user?._id],
  );

  const { mutateAsync: sendMessage } = useSendMessageMutation();
  const reactToMessage = useReactToMessageMutation();
  const deleteMessage = useDeleteMessageMutation();

  const handleSend = async (
    text: string,
    attachment?: ComposerAttachment,
    selectedReply?: Message,
  ) => {
    const formData = new FormData();
    formData.append("roomId", roomId);
    formData.append("text", text);
    if (selectedReply) formData.append("replyTo", selectedReply.id);
    if (attachment) formData.append(attachment.kind, attachment.file);
    await sendMessage(formData);
    setReplyTo(null);
  };

  const handleReact = (messageId: string, emoji: string) => {
    reactToMessage.mutate({ messageId, emoji }, { onError: () => toast.error("Could not update reaction") });
  };
  const handleDelete = (message: Message) => {
    deleteMessage.mutate(message.id, {
      onSuccess: () => toast.success("Message deleted"),
      onError: (error) =>
        toast.error(
          error instanceof Error ? error.message : "Failed to delete message",
        ),
    });
  };

  if (isRoomsLoading) {
    return (
      <>
        <StudentMessagesSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="messaging-font flex h-dvh flex-col overflow-hidden bg-background pb-[72px] md:pb-0">
          {backToConversations}
          <div className="flex-1 flex items-center justify-center">
            <StudentLoadingSkeleton variant="messages" />
          </div>
        </SidebarInset>
      </>
    );
  }

  if (!conversation) {
    return (
      <>
        <StudentMessagesSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="messaging-font flex h-dvh flex-col overflow-hidden bg-background pb-[72px] md:pb-0">
          {backToConversations}
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Conversation not found</p>
          </div>
        </SidebarInset>
      </>
    );
  }

  const isGroup = conversation.type === "group";
  const canSend = !room?.announcementOnly || user?.role === "admin" || (user?.role === "instructor" && room.roomCreator === user?._id);

  return (
    <>
      <StudentMessagesSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="messaging-font bg-background pb-[72px] md:pb-0 flex flex-col h-dvh overflow-hidden">
        {backToConversations}

        {/* Chat header */}
        <StudentGroupMessagesHeader
          messageImage={conversation.avatar}
          messageHeadingTitle={conversation.title}
          messageHeadingDescription={
            isGroup ? "Click here for more info" : undefined
          }
          type={conversation.type}
          online={conversation.online}
          lastSeen={conversation.lastSeen}
          room={room}
          detailsOpen={detailsOpen}
          onToggleDetails={() => { setThreadId(null); setDetailsOpen((open) => !open); }}
          onOpenFiles={() => { setThreadId(null); setDetailsOpen(true); setTimeout(() => document.getElementById("messaging-shared-files")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50); }}
          onOpenPins={() => { setThreadId(null); setDetailsOpen(true); setTimeout(() => document.getElementById("messaging-pins")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50); }}
          onOpenEvents={() => { setThreadId(null); setDetailsOpen(true); setTimeout(() => document.getElementById("messaging-events")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50); }}
          search={search}
          onSearchChange={setSearch}
        />
        {/* Chat content wrapper */}
        <div className="flex-1 flex min-h-0 overflow-hidden relative bg-muted/30">
          {/* Main chat column */}
          <div className="flex flex-col flex-1 min-w-0 min-h-0 overflow-hidden">
            {/* Messages list */}
            {isMessagesLoading || (search.trim() && (searchResults.isFetching || searchResults.isDebouncing)) ? (
              <div className="flex-1 flex items-center justify-center">
                <StudentLoadingSkeleton variant="messages" />
              </div>
            ) : isMessagesError || (search.trim() && searchResults.isError) ? (
              <div role="alert" className="flex flex-1 flex-col items-center justify-center gap-3 text-sm text-muted-foreground"><p>Could not load messages.</p><button onClick={() => search.trim() ? searchResults.refetch() : refetchMessages()} className="font-semibold text-primary hover:underline">Try again</button></div>
            ) : search.trim() && messages.length === 0 ? (
              <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">No matching messages found.</div>
            ) : (
              <StudentMessageList
                key={roomId}
                messages={messages}
                isGroup={isGroup}
                onReact={handleReact}
                onReply={setReplyTo}
                onDelete={handleDelete}
                currentUserId={user?._id}
                onLoadOlder={!search.trim() && messagesData?.data?.pagination.nextCursor ? () => older.mutate(messagesData.data!.pagination.nextCursor!, { onError: () => toast.error("Could not load earlier messages") }) : undefined}
                loadingOlder={older.isPending}
                onThread={(message) => { setDetailsOpen(false); setThreadId(message.id); }}
                onEdit={async (message, text) => { await features.edit.mutateAsync({ messageId: message.id, text }); }}
                onPin={room && (!room.isGroup || user?.role === "admin" || (user?.role === "instructor" && room.roomCreator === user?._id)) ? (message) => features.pin.mutate({ messageId: message.id, pinned: !message.pinnedAt }, { onError: () => toast.error("Could not update pinned message") }) : undefined}
              />
            )}
            {/* Message composer */}
            {typingUserId && <p className="px-5 py-1 text-xs text-muted-foreground" aria-live="polite">{room?.participants.find((participant) => participant.id === typingUserId)?.name ?? "Someone"} is typing…</p>}
            {canSend ? <StudentMessageComposer
              key={roomId}
              isGroup={isGroup}
              onSend={handleSend}
              replyTo={replyTo}
              onCancelReply={() => setReplyTo(null)}
              onTyping={() => { if (Date.now() - lastTypingSent.current > 1500) { lastTypingSent.current = Date.now(); getMessagingSocket().emit("typing:start", { roomId }); } }}
            /> : <p className="border-t border-border bg-card p-4 text-sm text-muted-foreground">Only the instructor or an administrator can post in this announcement room.</p>}
          </div>
          {detailsOpen && room && <aside aria-label="Conversation details" className="absolute inset-y-0 right-0 z-10 w-full max-w-sm overflow-y-auto border-l border-border bg-card shadow-lg lg:relative lg:w-80 lg:shrink-0 lg:shadow-none"><StudentGroupSidebar room={room} messages={messagesData?.data?.messages ?? []} /></aside>}
          {threadId && <aside aria-label="Message thread" className="absolute inset-y-0 right-0 z-10 w-full max-w-sm border-l border-border bg-card shadow-lg lg:relative lg:w-96 lg:shrink-0 lg:shadow-none"><MessageThreadPanel key={threadId} roomId={roomId} messageId={threadId} userId={user?._id} canSend={canSend} onClose={() => setThreadId(null)} /></aside>}
        </div>
      </SidebarInset>
    </>
  );
}
