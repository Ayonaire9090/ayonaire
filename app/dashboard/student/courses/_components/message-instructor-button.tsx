"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { roomsApi } from "@/lib/api/endpoints/rooms";
import { queryKeys } from "@/lib/api/query-keys";

export function MessageInstructorButton({ courseId }: { courseId: string }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const instructors = useQuery({ queryKey: ["assigned-instructors"], queryFn: roomsApi.assignedInstructors });
  const mutation = useMutation({ mutationFn: roomsApi.messageInstructor, onSuccess: (response) => { if (response.data) { queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all }); router.push(`/dashboard/student/messages/${response.data.id}`); } }, onError: (error) => toast.error(error instanceof Error ? error.message : "Could not open conversation") });
  if (!instructors.data?.data?.some((item) => item.courseId === courseId)) return null;
  return <button type="button" disabled={mutation.isPending} onClick={() => mutation.mutate(courseId)} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition hover:bg-accent disabled:opacity-50"><MessageCircle className="size-4 text-primary" />{mutation.isPending ? "Opening conversation…" : "Message instructor"}</button>;
}
