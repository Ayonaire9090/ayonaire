"use client";

import { useEffect } from "react";
import { MessagesSquare } from "lucide-react";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar";
import { StudentMessagesSidebarContent } from "./_components/student-messages-sidebar-content";

function MessagesEmptyState() {
  const { isMobile, setOpenMobile } = useSidebar();
  useEffect(() => { if (isMobile) setOpenMobile(true); }, [isMobile, setOpenMobile]);
  return <div className="flex flex-1 items-center justify-center px-6"><div className="max-w-sm text-center"><span className="mx-auto grid size-11 place-items-center rounded-full bg-muted text-muted-foreground"><MessagesSquare className="size-5" /></span><h1 className="mt-4 text-base font-semibold text-foreground">Select a conversation</h1><p className="mt-2 text-sm leading-6 text-muted-foreground">Choose a chatroom or direct message from the sidebar.</p>{isMobile && <button type="button" onClick={() => setOpenMobile(true)} className="mt-4 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/20">View conversations</button>}</div></div>;
}

export default function StudentMessagesPage() {
  return <><StudentMessagesSidebarContent variant="sidebar" collapsible="icon" /><SidebarInset className="messaging-font flex h-dvh flex-col bg-muted/20 pb-[72px] md:pb-0"><div className="m-2 flex min-h-0 flex-1 flex-col rounded-xl border border-border/80 bg-card"><MessagesEmptyState /></div></SidebarInset></>;
}
