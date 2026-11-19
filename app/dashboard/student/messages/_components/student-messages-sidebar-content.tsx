"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GraduationCap, Hash, MessageCircle, MessagesSquare, PanelLeftClose, PanelLeftOpen, Plus, Search, Star, X } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar, SidebarContent, SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { useGetRooms } from "@/hooks/api/use-rooms";
import { roomsApi } from "@/lib/api/endpoints/rooms";
import { queryKeys } from "@/lib/api/query-keys";
import { useAuthStore } from "@/store/auth.store";
import { cn } from "@/lib/utils";
import { lastMessagePreview, mapRoomToConversation } from "../_data/message-data";

export function StudentMessagesSidebarContent(props: React.ComponentProps<typeof Sidebar>) {
  const { state, isMobile, setOpenMobile, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed" && !isMobile;
  const pathname = usePathname();
  const router = useRouter();
  const client = useQueryClient();
  const user = useAuthStore((s) => s.user);
  const [search, setSearch] = React.useState("");
  const [showInstructors, setShowInstructors] = React.useState(false);
  const roomsQuery = useGetRooms();
  const instructors = useQuery({ queryKey: ["assigned-instructors"], queryFn: roomsApi.assignedInstructors });
  const startChat = useMutation({ mutationFn: roomsApi.messageInstructor, onSuccess: (result) => { if (result.data) { client.invalidateQueries({ queryKey: queryKeys.rooms.all }); if (isMobile) setOpenMobile(false); router.push(`/dashboard/student/messages/${result.data.id}`); } }, onError: (error) => toast.error(error instanceof Error ? error.message : "Could not open conversation") });
  const rooms = (roomsQuery.data?.data ?? []).map((room) => ({ room, conversation: mapRoomToConversation(room, user?._id) })).filter(({ room, conversation }) => `${conversation.title} ${lastMessagePreview(room)}`.toLowerCase().includes(search.trim().toLowerCase()));
  const favorites = rooms.filter(({ room }) => room.pinned);
  const channels = rooms.filter(({ room }) => room.isGroup);
  const direct = rooms.filter(({ room }) => !room.isGroup);
  const roomLink = ({ room, conversation }: (typeof rooms)[number]) => <Link key={room.id} href={`/dashboard/student/messages/${room.id}`} onClick={() => { if (isMobile) setOpenMobile(false); }} aria-current={pathname.endsWith(`/${room.id}`) ? "page" : undefined} title={conversation.title} className={cn("group flex min-h-9 items-center gap-2.5 rounded-lg px-2.5 text-[13px] text-foreground/80 transition-colors hover:bg-muted", pathname.endsWith(`/${room.id}`) && "bg-background text-foreground shadow-sm ring-1 ring-border", collapsed && "justify-center px-0")}>
    {room.isGroup ? <Hash className="size-4 shrink-0 text-muted-foreground" /> : <Avatar className="size-6 shrink-0"><AvatarImage src={conversation.avatar} /><AvatarFallback className="bg-muted text-[10px]">{conversation.title.slice(0, 1).toUpperCase()}</AvatarFallback></Avatar>}
    {!collapsed && <><span className="min-w-0 flex-1 truncate">{conversation.title}</span>{!!room.unreadCount && <span aria-label={`${room.unreadCount} unread messages`} className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">{room.unreadCount > 99 ? "99+" : room.unreadCount}</span>}</>}
  </Link>;
  return <Sidebar {...props} className="messaging-font border-r border-border bg-muted/20">
    <SidebarHeader className="border-b border-border/70 px-3 py-3"><div className={cn("flex items-center gap-2", collapsed && "flex-col")}><div className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-sm font-bold text-primary">A</div>{!collapsed && <div className="min-w-0 flex-1"><p className="truncate text-[13px] font-semibold text-foreground">Ayonaire</p><p className="text-[10px] text-muted-foreground">Chatrooms</p></div>}<button type="button" onClick={toggleSidebar} aria-label={collapsed ? "Expand chat navigation" : "Collapse chat navigation"} className="rounded-md p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground">{collapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}</button></div>{!collapsed && <label className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-background/70 px-2.5 py-2"><Search className="size-3.5 shrink-0 text-muted-foreground" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search conversations" aria-label="Search conversations" className="w-full min-w-0 bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground" />{search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search"><X className="size-3.5 text-muted-foreground" /></button>}</label>}</SidebarHeader>
    <SidebarContent className="messaging-font px-2 py-3"><div className="space-y-1">{!collapsed && <button type="button" onClick={() => { setSearch(""); setShowInstructors(false); }} className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] text-foreground/80 hover:bg-muted"><MessagesSquare className="size-4 text-muted-foreground" />All conversations</button>}<button type="button" onClick={() => { if (collapsed) toggleSidebar(); setShowInstructors((value) => !value); }} className={cn("flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] text-foreground/80 hover:bg-muted", collapsed && "justify-center px-0")} aria-expanded={showInstructors}><GraduationCap className="size-4 text-muted-foreground" />{!collapsed && <>Message instructor <Plus className="ml-auto size-3.5" /></>}</button></div>
      {showInstructors && !collapsed && <section className="mx-1 mt-2 rounded-lg border border-border bg-card p-2"><p className="px-1 pb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Your instructors</p>{instructors.isLoading ? <StudentLoadingSkeleton variant="messages" /> : instructors.isError ? <button onClick={() => instructors.refetch()} className="text-xs text-primary underline">Could not load instructors. Retry</button> : !instructors.data?.data?.length ? <p className="p-1 text-xs text-muted-foreground">No assigned instructors yet.</p> : instructors.data.data.map(({ courseId, courseTitle, instructor }) => <button key={courseId} disabled={startChat.isPending} onClick={() => startChat.mutate(courseId)} className="flex w-full items-center gap-2 rounded-md p-1.5 text-left hover:bg-muted disabled:opacity-50"><Avatar className="size-7"><AvatarImage src={instructor.profile?.url} /><AvatarFallback className="text-[10px]">{instructor.name.slice(0, 1)}</AvatarFallback></Avatar><span className="min-w-0"><span className="block truncate text-xs font-medium">{instructor.name}</span><span className="block truncate text-[10px] text-muted-foreground">{courseTitle}</span></span></button>)}</section>}
      {roomsQuery.isLoading ? <StudentLoadingSkeleton variant="messages" /> : roomsQuery.isError ? <button onClick={() => roomsQuery.refetch()} className="p-3 text-xs text-primary underline">Could not load conversations. Retry</button> : <><section className="mt-4 border-t border-border/70 pt-4">{!collapsed && <h2 className="px-2.5 pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Favorites</h2>}{favorites.length ? favorites.map(roomLink) : !collapsed && <p className="px-2.5 py-1 text-xs text-muted-foreground">Favorite a conversation to find it here.</p>}</section><section className="mt-4 border-t border-border/70 pt-4">{!collapsed && <h2 className="px-2.5 pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Chatrooms</h2>}{channels.length ? channels.map(roomLink) : !collapsed && <p className="px-2.5 py-1 text-xs text-muted-foreground">{search ? "No matching chatrooms." : "No chatrooms yet."}</p>}</section><section className="mt-4 border-t border-border/70 pt-4">{!collapsed && <h2 className="px-2.5 pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Direct messages</h2>}{direct.length ? direct.map(roomLink) : !collapsed && <p className="px-2.5 py-1 text-xs text-muted-foreground">{search ? "No matching messages." : "No conversations yet."}</p>}</section></>}
    </SidebarContent>
  </Sidebar>;
}
