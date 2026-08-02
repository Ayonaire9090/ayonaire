"use client";

import { useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AppSelect } from "@/components/ui/app-select";
import {
  useGetSupportTicketById,
  useReplyToTicketMutation,
  useUpdateTicketStatusMutation,
} from "@/hooks/api/use-support";

const STATUS_OPTIONS = [
  { label: "Open", value: "open" },
  { label: "In Progress", value: "in-progress" },
  { label: "Resolved", value: "resolved" },
  { label: "Closed", value: "closed" },
];

export const SupportTicketDetail = ({
  ticketId,
  onOpenChange,
}: {
  ticketId: string | null;
  onOpenChange: (open: boolean) => void;
}) => {
  const [reply, setReply] = useState("");
  const { data } = useGetSupportTicketById(ticketId ?? "");
  const ticket = data?.data;
  const replyMutation = useReplyToTicketMutation();
  const statusMutation = useUpdateTicketStatusMutation();

  const handleReply = () => {
    if (!ticketId || !reply.trim()) return;
    replyMutation.mutate(
      { ticketId, message: reply },
      {
        onSuccess: () => {
          toast.success("Reply sent");
          setReply("");
        },
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to send reply"),
      },
    );
  };

  const handleStatusChange = (status: string) => {
    if (!ticketId) return;
    statusMutation.mutate(
      { ticketId, status },
      {
        onSuccess: () => toast.success("Ticket status updated"),
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to update status"),
      },
    );
  };

  const requester = ticket && typeof ticket.user !== "string" ? ticket.user : null;

  return (
    <Sheet open={!!ticketId} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg overflow-y-auto">
        {ticket ? (
          <>
            <SheetHeader>
              <SheetTitle>{ticket.subject}</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-5 px-4 pb-6">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{requester?.name ?? "Unknown user"}</span>
                <span>
                  {ticket.createdAt
                    ? format(new Date(ticket.createdAt), "d MMM yyyy, hh:mm a")
                    : "-"}
                </span>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 text-[15px] text-gray-700">
                {ticket.message}
              </div>

              <div className="w-full max-w-[220px]">
                <AppSelect
                  label="Status"
                  options={STATUS_OPTIONS}
                  value={ticket.status}
                  onChange={handleStatusChange}
                />
              </div>

              {ticket.replies.length > 0 && (
                <div className="flex flex-col gap-3">
                  <p className="text-[15px] font-semibold text-gray-900">Replies</p>
                  {ticket.replies.map((r, index) => {
                    const author = typeof r.author !== "string" ? r.author : null;
                    return (
                      <div key={index} className="rounded-xl bg-primary/5 p-3">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span className="font-medium text-gray-700">
                            {author?.name ?? "Support"}
                          </span>
                          <span>
                            {r.createdAt
                              ? format(new Date(r.createdAt), "d MMM, hh:mm a")
                              : ""}
                          </span>
                        </div>
                        <p className="text-[14px] text-gray-700">{r.message}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-semibold text-gray-900">
                  Reply
                </label>
                <Textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Type your response..."
                  className="min-h-[100px]"
                />
                <Button
                  onClick={handleReply}
                  disabled={replyMutation.isPending || !reply.trim()}
                  className="self-end mt-1"
                >
                  {replyMutation.isPending ? "Sending..." : "Send Reply"}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-40 items-center justify-center text-sm text-gray-400">
            Loading ticket...
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
