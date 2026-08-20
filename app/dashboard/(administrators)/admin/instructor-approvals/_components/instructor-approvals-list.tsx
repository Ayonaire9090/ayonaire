"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Check, Mail, Sparkles, Tag, X } from "lucide-react";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  useApproveInstructorMutation,
  useGetAllInstructorProfiles,
  useRejectInstructorMutation,
} from "@/hooks/api/use-instructor";
import { mapInstructorProfileToInstructorData } from "../../instructors/_components/instructors-data";

function RejectPopover({
  onConfirm,
  isPending,
}: {
  onConfirm: (reason: string) => void;
  isPending: boolean;
}) {
  const [reason, setReason] = useState("");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-9 px-4 rounded-lg border-[#FFE1E1] bg-white text-red-500 hover:bg-red-50 font-medium text-[14px]"
        >
          <X className="mr-1.5 size-4" />
          Reject
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[300px] p-4 rounded-2xl border-gray-100"
      >
        <div className="flex flex-col gap-3">
          <span className="text-[14px] font-semibold text-gray-900">
            Reason for rejection
          </span>
          <Input
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="e.g. Insufficient teaching experience"
            className="h-10"
          />
          <PopoverClose asChild>
            <Button
              disabled={!reason || isPending}
              onClick={() => onConfirm(reason)}
              className="h-9 bg-red-500 hover:bg-red-600 text-white text-[14px]"
            >
              Confirm Reject
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export const InstructorApprovalsList = () => {
  const { data, isLoading, isError } = useGetAllInstructorProfiles();
  const { mutateAsync: approve, isPending: isApproving } =
    useApproveInstructorMutation();
  const { mutateAsync: reject, isPending: isRejecting } =
    useRejectInstructorMutation();

  // NOTE: assumes pending applications show up in the same instructor
  // profiles list with status "pending" - there's no dedicated
  // "list applications" endpoint to confirm this against. If applications
  // are actually stored separately, this list will just show empty until
  // the backend confirms/adds the right endpoint.
  const pendingApplications = (data?.data ?? [])
    .map(mapInstructorProfileToInstructorData)
    .filter((i) => i.status === "Pending");

  const handleApprove = async (id: string) => {
    try {
      await approve(id);
      toast.success("Instructor approved");
    } catch (error: any) {
      toast.error(error?.message || "Failed to approve instructor");
    }
  };

  const handleReject = async (id: string, reason: string) => {
    try {
      await reject({ userId: id, reason });
      toast.success("Instructor application rejected");
    } catch (error: any) {
      toast.error(error?.message || "Failed to reject instructor");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
        Failed to load instructor applications. Please try again.
      </div>
    );
  }

  if (pendingApplications.length === 0) {
    return (
      <div className="mt-6 rounded-[16px] border border-gray-100 bg-white px-4 py-16 text-center text-[15px] text-gray-500">
        No pending instructor applications
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="mb-4">
        <h2 className="text-[22px] font-semibold text-gray-900 mb-1">
          Pending Applications
        </h2>
        <p className="text-[15px] text-gray-500">
          Review instructor profile details before approving access
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {pendingApplications.map((application) => (
          <div
            key={application.id}
            className="rounded-[16px] border border-gray-100 bg-white p-4 transition-colors hover:border-gray-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <Avatar className="size-11 shrink-0">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                    {application.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <span className="block truncate font-medium text-[14px] text-gray-900">
                    {application.name}
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] text-gray-500">
                    {application.email}
                  </span>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-[#FFF9E6] px-3 py-1 text-xs font-medium text-[#F9C32B]">
                Pending
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="rounded-xl bg-[#FAFAFA] px-3 py-2.5">
                <div className="mb-1 flex items-center gap-1.5 text-[13px] font-medium text-gray-500">
                  <Sparkles className="size-3.5 text-primary" />
                  Expertise
                </div>
                <p className="line-clamp-2 text-[14px] font-medium text-gray-800">
                  {application.expertise}
                </p>
              </div>
              <div className="rounded-xl bg-[#FAFAFA] px-3 py-2.5">
                <div className="mb-1 flex items-center gap-1.5 text-[13px] font-medium text-gray-500">
                  <Tag className="size-3.5 text-primary" />
                  Category
                </div>
                <p className="truncate text-[14px] font-medium text-gray-800">
                  {application.category}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={`mailto:${application.email}`}
                className="inline-flex min-w-0 items-center gap-1.5 text-[13px] font-medium text-gray-500 hover:text-gray-900"
              >
                <Mail className="size-3.5 shrink-0" />
                <span className="truncate">{application.email}</span>
              </a>
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  disabled={isApproving}
                  onClick={() => handleApprove(application.userId)}
                  className="h-9 px-4 rounded-lg bg-[#24A164] hover:bg-[#24A164]/90 text-white font-medium text-[14px]"
                >
                  <Check className="mr-1.5 size-4" />
                  Approve
                </Button>
                <RejectPopover
                  isPending={isRejecting}
                  onConfirm={(reason) => handleReject(application.userId, reason)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
