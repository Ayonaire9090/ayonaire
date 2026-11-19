"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BookOpen, GraduationCap, Hash, LayoutDashboard, MessageCircle, MessagesSquare, Plus, Search, Users, Video, X } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar, SidebarContent, SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { useGetRooms } from "@/hooks/api/use-rooms";
import { roomsApi } from "@/lib/api/endpoints/rooms";
import { queryKeys } from "@/lib/api/query-keys";
import { useAuthStore } from "@/store/auth.store";
import { cn } from "@/lib/utils";
import { lastMessagePreview, lastMessageTimestamp, mapRoomToConversation } from "../_data/message-data";

type Filter = "all" | "direct" | "instructors" | "courses" | "groups";
const navigation = [
  { label: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
  { label: "Courses", href: "/dashboard/student/courses", icon: BookOpen },
  { label: "Workshops", href: "/dashboard/student/workshop", icon: Video },
  { label: "Community", href: "/dashboard/student/community", icon: Users },
];

export function StudentMessagesSidebarContent(props: React.ComponentProps<typeof Sidebar>) {
  const { state, isMobile, setOpenMobile } = useSidebar();
  const collapsed = state === "collapsed" && !isMobile;
  const pathname = usePathname();
  const router = useRouter();
  const client = useQueryClient();
  const user = useAuthStore((s) => s.user);
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState<Filter>("all");
  const roomsQuery = useGetRooms();
  const instructors = useQuery({ queryKey: ["assigned-instructors"], queryFn: roomsApi.assignedInstructors });
  const startChat = useMutation({ mutationFn: roomsApi.messageInstructor, onSuccess: (result) => { if (result.data) { client.invalidateQueries({ queryKey: queryKeys.rooms.all }); if (isMobile) setOpenMobile(false); router.push(`/dashboard/student/messages/${result.data.id}`); } }, onError: (error) => toast.error(error instanceof Error ? error.message : "Could not open conversation") });
  const instructorIds = new Set((instructors.data?.data ?? []).map((item) => item.instructor.id));
  const rooms = (roomsQuery.data?.data ?? []).map((room) => ({ room, conversation: mapRoomToConversation(room, user?._id) })).filter(({ room, conversation }) => {
    const matchesSearch = `${conversation.title} ${lastMessagePreview(room)}`.toLowerCase().includes(search.trim().toLowerCase());
    return matchesSearch && (filter === "all" || (filter === "groups" && room.isGroup && !room.course) || (filter === "courses" && room.isGroup && !!room.course) || (filter === "direct" && !room.isGroup) || (filter === "instructors" && !room.isGroup && room.participants.some((member) => instructorIds.has(member.id))));
  });
  const filters: { id: Filter; label: string; icon: typeof MessagesSquare }[] = [
    { id: "all", label: "All conversations", icon: MessagesSquare }, { id: "direct", label: "Direct messages", icon: MessageCircle }, { id: "instructors", label: "Mentor / instructor", icon: GraduationCap }, { id: "courses", label: "Course chatrooms", icon: Hash }, { id: "groups", label: "Group discussions", icon: Users },
  ];
  const renderRoom = ({ room, conversation }: (typeof rooms)[number]) => <Link key={room.id} href={`/dashboard/student/messages/${room.id}`} onClick={() => { if (isMobile) setOpenMobile(false); }} aria-current={pathname.endsWith(`/${room.id}`) ? "page" : undefined} className={cn("group flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-accent", pathname.endsWith(`/${room.id}`) && "bg-primary/10 text-primary", collapsed && "justify-center px-0")}>
    <Avatar className="size-9 shrink-0 rounded-xl"><AvatarImage src={conversation.avatar} /><AvatarFallback className="rounded-xl bg-primary/10 text-xs font-bold text-primary">{conversation.title.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar>
    {!collapsed && <span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-2"><span className="truncate text-[13px] font-semibold text-foreground">{conversation.title}</span><span className="shrink-0 text-[10px] text-muted-foreground">{lastMessageTimestamp(room)}</span></span><span className="mt-0.5 block truncate text-xs text-muted-foreground">{lastMessagePreview(room)}</span></span>}
  </Link>;
  return <Sidebar {...props} className="messaging-font border-r border-border bg-card">
    <SidebarHeader className="border-b border-border bg-card px-4 py-5">
      {!collapsed ? <><div className="flex items-center justify-between gap-2"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-primary">Ayonaire Academy</p><h1 className="mt-1 text-xl font-bold tracking-tight text-foreground">Messages</h1></div><button type="button" onClick={() => setFilter("instructors")} title="Message an instructor" aria-label="Message an instructor" className="grid size-9 place-items-center rounded-xl border border-border text-primary transition hover:bg-primary/10"><Plus className="size-4" /></button></div><label className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3 py-2.5"><Search className="size-4 shrink-0 text-muted-foreground" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search conversations" aria-label="Search conversations" className="w-full min-w-0 bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground" />{search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search"><X className="size-4 text-muted-foreground" /></button>}</label></> : <span className="mx-auto text-lg font-bold text-primary">A</span>}
    </SidebarHeader>
    <SidebarContent className="messaging-font bg-card px-3 py-4">
      {!collapsed && <nav aria-label="Student dashboard" className="space-y-0.5 border-b border-border pb-4">{navigation.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"><Icon className="size-4" />{label}</Link>)}</nav>}
      {!collapsed && <div className="space-y-1 pt-4"><p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-[.13em] text-muted-foreground">My chats</p>{filters.map(({ id, label, icon: Icon }) => <button key={id} type="button" onClick={() => setFilter(id)} aria-pressed={filter === id} className={cn("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium transition", filter === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground")}><Icon className="size-4" />{label}</button>)}</div>}
      <section className="mt-5 border-t border-border pt-4"><div className="mb-2 flex items-center justify-between px-2"><h2 className="text-[10px] font-bold uppercase tracking-[.13em] text-muted-foreground">{collapsed ? "Chats" : "Recent conversations"}</h2>{!collapsed && <span className="text-xs text-muted-foreground">{rooms.length}</span>}</div>{roomsQuery.isLoading ? <StudentLoadingSkeleton variant="messages" /> : roomsQuery.isError ? <button className="px-2 text-xs text-primary underline" onClick={() => roomsQuery.refetch()}>Could not load conversations. Retry</button> : rooms.length ? <div className="space-y-1">{rooms.map(renderRoom)}</div> : <p className="px-2 py-3 text-xs leading-5 text-muted-foreground">{search ? "No matching conversations." : "No conversations in this view yet."}</p>}</section>
      {!collapsed && <section className="mt-5 border-t border-border pt-4"><div className="flex items-center justify-between px-2"><h2 className="text-[10px] font-bold uppercase tracking-[.13em] text-muted-foreground">Your instructors</h2><GraduationCap className="size-4 text-muted-foreground" /></div><p className="px-2 pt-1 text-xs text-muted-foreground">From your enrolled courses</p><div className="mt-2 space-y-1">{instructors.isLoading ? <StudentLoadingSkeleton variant="messages" /> : instructors.isError ? <button onClick={() => instructors.refetch()} className="px-2 text-xs text-primary underline">Could not load instructors. Retry</button> : !instructors.data?.data?.length ? <p className="px-2 py-3 text-xs text-muted-foreground">No assigned instructors yet.</p> : instructors.data.data.map(({ courseId, courseTitle, instructor }) => <button key={courseId} disabled={startChat.isPending} onClick={() => startChat.mutate(courseId)} className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-accent disabled:opacity-50"><Avatar className="size-9"><AvatarImage src={instructor.profile?.url} /><AvatarFallback className="bg-primary/10 text-xs text-primary">{instructor.name.slice(0, 1)}</AvatarFallback></Avatar><span className="min-w-0"><span className="block truncate text-[13px] font-semibold text-foreground">{instructor.name}</span><span className="block truncate text-xs text-muted-foreground">{courseTitle}</span></span></button>)}</div></section>}
    </SidebarContent>
  </Sidebar>;
}
