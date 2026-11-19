"use client";

import { useEffect } from "react";
import { MessageCircle, MessagesSquare, ShieldCheck } from "lucide-react";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar";
import { StudentMessagesSidebarContent } from "./_components/student-messages-sidebar-content";

function MessagesEmptyState() {
  const { isMobile, setOpenMobile } = useSidebar();
  useEffect(() => { if (isMobile) setOpenMobile(true); }, [isMobile, setOpenMobile]);
  return <div className="flex flex-1 items-center justify-center px-6"><div className="w-full max-w-lg text-center"><div className="mx-auto grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary"><MessagesSquare className="size-7" /></div><p className="mt-6 text-[10px] font-bold uppercase tracking-[.16em] text-primary">Your learning community</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">Better conversations start here.</h2><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">Connect with your instructors and classmates, share ideas, and keep learning together.</p><div className="mt-7 grid gap-3 text-left sm:grid-cols-2"><div className="rounded-2xl border border-border bg-card p-4"><MessageCircle className="size-5 text-primary" /><p className="mt-3 text-sm font-semibold text-foreground">Pick up a conversation</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Choose a chat from the list to see your messages.</p></div><div className="rounded-2xl border border-border bg-card p-4"><ShieldCheck className="size-5 text-primary" /><p className="mt-3 text-sm font-semibold text-foreground">Talk to your instructor</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Start a private conversation from your instructor list.</p></div></div>{isMobile && <button type="button" onClick={() => setOpenMobile(true)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">View conversations</button>}</div></div>;
}

export default function StudentMessagesPage() {
  return <><StudentMessagesSidebarContent variant="sidebar" collapsible="icon" /><SidebarInset className="messaging-font flex h-dvh flex-col bg-background pb-[72px] md:pb-0"><header className="border-b border-border bg-card px-6 py-5"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-primary">Ayonaire community</p><h1 className="mt-1 text-lg font-bold text-foreground">Messages</h1></header><MessagesEmptyState /></SidebarInset></>;
}
