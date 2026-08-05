"use client";

// Standalone, auth-free preview of the student messaging/chatroom screen so
// the real components can be reviewed without an account or a real
// conversation. Safe to delete before launch.

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { StudentGroupMessagesHeader } from "@/app/dashboard/student/messages/_components/student-group-messages-header";
import { StudentMessageList } from "@/app/dashboard/student/messages/_components/student-message-list";
import {
  StudentMessageComposer,
  ComposerAttachment,
} from "@/app/dashboard/student/messages/_components/student-message-composer";
import { StudentGroupSidebar } from "@/app/dashboard/student/messages/_components/student-group-sidebar";
import type { Conversation, Message } from "@/app/dashboard/student/messages/_data/mock-messages";

const SAMPLE_CONVERSATIONS: (Conversation & { preview: string; timestamp: string })[] = [
  {
    id: "c1",
    type: "group",
    title: "2.0 - Ultimate Data Science",
    course: "2.0 - Ultimate Data Science",
    avatar: "/assets/logos/logo-dark.png",
    messages: [],
    preview: "Ayo: Don't forget the assignment is due Friday!",
    timestamp: "2:45 PM",
  },
  {
    id: "c2",
    type: "individual",
    title: "Sarah Ahmed",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true,
    messages: [],
    preview: "Thanks, that makes sense now!",
    timestamp: "1:12 PM",
  },
  {
    id: "c3",
    type: "individual",
    title: "Ali Hassan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    online: false,
    lastSeen: "3 hours ago",
    messages: [],
    preview: "Can you review my submission?",
    timestamp: "11:30 AM",
  },
];

const SAMPLE_MESSAGES: Record<string, Message[]> = {
  c1: [
    {
      id: "m1",
      senderId: "u1",
      senderName: "Ayo",
      senderAvatar: "/assets/persons/mr-ayo.png",
      content: "Welcome everyone to the Data Science cohort chat!",
      type: "text",
      timestamp: "9:00 AM",
      status: "sent",
    },
    {
      id: "m2",
      senderId: "u2",
      senderName: "Chidi",
      senderAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "Excited to get started 🎉",
      type: "text",
      timestamp: "9:02 AM",
      status: "sent",
    },
    {
      id: "m3",
      senderId: "me",
      senderName: "You",
      senderAvatar: "/assets/persons/mr-ayo.png",
      content: "Same here! When does module 1 open?",
      type: "text",
      timestamp: "9:05 AM",
      status: "sent",
    },
    {
      id: "m4",
      senderId: "u1",
      senderName: "Ayo",
      senderAvatar: "/assets/persons/mr-ayo.png",
      content: "Don't forget the assignment is due Friday!",
      type: "text",
      timestamp: "2:45 PM",
      status: "sent",
    },
  ],
  c2: [
    {
      id: "m5",
      senderId: "u3",
      senderName: "Sarah Ahmed",
      senderAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Hey, quick question about lesson 3",
      type: "text",
      timestamp: "1:05 PM",
      status: "sent",
    },
    {
      id: "m6",
      senderId: "me",
      senderName: "You",
      senderAvatar: "/assets/persons/mr-ayo.png",
      content: "Sure, what's up?",
      type: "text",
      timestamp: "1:08 PM",
      status: "sent",
    },
    {
      id: "m7",
      senderId: "u3",
      senderName: "Sarah Ahmed",
      senderAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Thanks, that makes sense now!",
      type: "text",
      timestamp: "1:12 PM",
      status: "sent",
    },
  ],
  c3: [
    {
      id: "m8",
      senderId: "u4",
      senderName: "Ali Hassan",
      senderAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Can you review my submission?",
      type: "text",
      timestamp: "11:30 AM",
      status: "sent",
    },
  ],
};

export default function MessagesScreenPreviewPage() {
  const [activeId, setActiveId] = useState("c1");
  const [messagesByConv, setMessagesByConv] = useState(SAMPLE_MESSAGES);
  // Below md, show either the list or the active thread - never both at
  // once, matching how the real (Sheet-based) mobile layout behaves.
  const [view, setView] = useState<"list" | "thread">("list");

  const activeConversation = SAMPLE_CONVERSATIONS.find((c) => c.id === activeId)!;
  const isGroup = activeConversation.type === "group";
  const messages = messagesByConv[activeId] ?? [];

  const handleSend = (text: string, attachment?: ComposerAttachment) => {
    if (!text.trim() && !attachment) return;
    // Note: blob: URLs from the local file can't be rendered through the
    // real bubble component (it uses next/image, which only allows http(s)
    // sources) - so the preview represents an attachment as text instead
    // of a broken image. The real send flow gets a proper https URL back
    // from the server.
    const attachmentNote = attachment
      ? `📎 ${attachment.kind === "media" ? "Image" : "File"} attached: ${attachment.file.name}`
      : "";
    const content = [text, attachmentNote].filter(Boolean).join("\n");

    const newMessage: Message = {
      id: `local-${Date.now()}`,
      senderId: "me",
      senderName: "You",
      senderAvatar: "/assets/persons/mr-ayo.png",
      content,
      type: "text",
      timestamp: new Date().toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
      }),
      status: "sent",
    };
    setMessagesByConv((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), newMessage],
    }));
  };

  return (
    <div className="flex flex-col h-dvh bg-[#F6F6F6]">
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-[13px] text-center py-2 px-4 shrink-0">
        Preview mode — this is the real chatroom/messaging screen rendered
        with sample conversations, no login required. Sending a message only
        appends it locally; it isn&apos;t sent anywhere.
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Conversation list */}
        <div
          className={`w-full md:w-[280px] md:shrink-0 border-r border-gray-200 bg-white flex-col ${
            view === "thread" ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="p-4 border-b border-gray-100">
            <div className="flex gap-2">
              <button className="flex-1 text-center text-[13px] font-medium py-2 rounded-lg bg-gray-50 text-gray-500">
                Chatroom
              </button>
              <button className="flex-1 text-center text-[13px] font-medium py-2 rounded-lg bg-[#F15D23] text-white">
                Inbox
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {SAMPLE_CONVERSATIONS.map((conv) => (
              <button
                key={conv.id}
                onClick={() => {
                  setActiveId(conv.id);
                  setView("thread");
                }}
                className={`w-full flex items-start gap-3 p-3 text-left transition-colors ${
                  activeId === conv.id ? "bg-[#F6F6F6]" : "hover:bg-gray-50"
                }`}
              >
                <img
                  src={conv.avatar}
                  alt={conv.title}
                  className={`w-10 h-10 shrink-0 object-cover ${
                    conv.type === "group" ? "rounded-md" : "rounded-xl"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="text-[15px] font-medium text-gray-900 truncate">
                      {conv.title}
                    </span>
                    <span className="text-xs text-gray-400 shrink-0 ml-2">
                      {conv.timestamp}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-500 line-clamp-1">
                    {conv.preview}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active conversation */}
        <div
          className={`flex-1 min-w-0 ${view === "list" ? "hidden md:flex" : "flex"}`}
        >
          <div className="flex flex-col flex-1 min-w-0">
            <button
              onClick={() => setView("list")}
              className="md:hidden flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 bg-white border-b border-gray-100"
            >
              <ChevronLeft className="w-4 h-4" />
              Conversations
            </button>
            <StudentGroupMessagesHeader
              messageImage={activeConversation.avatar}
              messageHeadingTitle={activeConversation.title}
              messageHeadingDescription={
                isGroup ? "Click here for more info" : undefined
              }
              type={activeConversation.type}
              online={activeConversation.online}
              lastSeen={activeConversation.lastSeen}
            />
            <StudentMessageList messages={messages} isGroup={isGroup} />
            <StudentMessageComposer isGroup={isGroup} onSend={handleSend} />
          </div>

          {isGroup && (
            <div className="hidden lg:block w-[320px] xl:w-[350px] shrink-0 border-l border-gray-100 overflow-y-auto bg-white">
              <StudentGroupSidebar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
