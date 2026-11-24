"use client";

import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { ApiResponse } from "@/lib/api/types";
import { getMessagingSocket } from "@/lib/socket/messaging-socket";
import { useAuthStore } from "@/store/auth.store";

interface InboxItem { _id: string; name: string; message: string; createdAt: string; readAt: string | null }
interface Inbox { items: InboxItem[]; unreadCount: number }
const inboxKey = ["notification-inbox"] as const;

export function useNotificationInbox() {
  const client = useQueryClient();
  const token = useAuthStore((state) => state.token);
  const userId = useAuthStore((state) => state.user?._id);
  const query = useQuery({
    queryKey: [...inboxKey, userId],
    queryFn: () => apiClient<ApiResponse<Inbox>>("/api/v1/notification/inbox/me"),
    enabled: Boolean(token && userId),
  });
  useEffect(() => {
    if (!token) return;
    const socket = getMessagingSocket();
    const refresh = () => { void client.invalidateQueries({ queryKey: inboxKey }); };
    socket.on("notification:new", refresh);
    socket.on("connect", refresh);
    return () => { socket.off("notification:new", refresh); socket.off("connect", refresh); };
  }, [client, token]);
  return query;
}

export function NotificationInbox() {
  const client = useQueryClient();
  const query = useNotificationInbox();
  const markRead = useMutation({
    mutationFn: (id?: string) => apiClient(`/api/v1/notification/inbox/${id ? `${id}/read` : "read"}`, { method: "PATCH" }),
    onSuccess: () => client.invalidateQueries({ queryKey: inboxKey }),
  });
  const inbox = query.data?.data;
  return <section className="mt-6 rounded-xl border border-border bg-card p-5">
    <div className="flex items-center justify-between gap-4"><p className="text-sm text-muted-foreground">{inbox?.unreadCount ?? 0} unread</p><button type="button" disabled={!inbox?.unreadCount || markRead.isPending} onClick={() => markRead.mutate(undefined)} className="text-sm font-medium text-primary disabled:opacity-50">Mark all as read</button></div>
    {query.isLoading ? <p className="py-8 text-sm">Loading notifications…</p> : query.isError ? <p role="alert" className="py-8 text-sm">Could not load notifications. <button className="text-primary underline" onClick={() => query.refetch()}>Retry</button></p> : !inbox?.items.length ? <p className="py-8 text-sm text-muted-foreground">You have no notifications yet.</p> : <ul className="mt-4 divide-y divide-border">{inbox.items.map((item) => <li key={item._id} className="flex items-start justify-between gap-4 py-4"><div><p className="font-semibold">{item.name}{!item.readAt && <span className="ml-2 text-xs text-primary">New</span>}</p><p className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">{item.message}</p><time className="mt-2 block text-xs text-muted-foreground" dateTime={item.createdAt}>{new Date(item.createdAt).toLocaleString()}</time></div>{!item.readAt && <button type="button" disabled={markRead.isPending} onClick={() => markRead.mutate(item._id)} className="shrink-0 text-xs text-primary">Mark read</button>}</li>)}</ul>}
    {markRead.isError && <p role="alert" className="text-sm text-destructive">Could not update notification. Please try again.</p>}
  </section>;
}
