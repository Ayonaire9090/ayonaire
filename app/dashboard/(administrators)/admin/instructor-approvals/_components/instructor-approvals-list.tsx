"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
          className="h-9 px-4 rounded-lg border-gray-200 text-red-500 hover:bg-red-50 font-medium"
        >
          Reject
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[300px] p-4 rounded-2xl">
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
              className="h-9 bg-red-500 hover:bg-red-600 text-white"
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
      await reject({ applicationId: id, reason });
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
      <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
        No pending instructor applications.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mt-6">
      {pendingApplications.map((application) => (
        <div
          key={application.id}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white rounded-xl border border-gray-100"
        >
          <div className="flex items-center gap-4">
            <Avatar className="size-12 shrink-0">
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {application.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium text-[15px] text-gray-900">
                {application.name}
              </span>
              <span className="text-[13px] text-gray-500">
                {application.email}
              </span>
              <span className="text-[13px] text-gray-400">
                {application.expertise} &bull; {application.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              disabled={isApproving}
              onClick={() => handleApprove(application.id)}
              className="h-9 px-4 rounded-lg bg-[#24A164] hover:bg-[#24A164]/90 text-white font-medium"
            >
              Approve
            </Button>
            <RejectPopover
              isPending={isRejecting}
              onConfirm={(reason) => handleReject(application.id, reason)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
