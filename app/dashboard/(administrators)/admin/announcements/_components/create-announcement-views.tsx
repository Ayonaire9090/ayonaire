import React, { useState } from "react";
import { ChevronDown, Search, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";
import { useCreateAnnouncementMutation } from "@/hooks/api/use-announcements";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetAdminUsers } from "@/hooks/api/use-admin";
import { CreateAnnouncementPayload } from "@/lib/api/endpoints/announcements";

// --- Shared Types ---
export type AnnouncementViewType = "MAIN" | "AUDIENCE" | "SPECIFIC_USERS" | "SUCCESS";

export interface AnnouncementFormData {
  audience: string;
  course: string;
  courseId: string;
  title: string;
  summary: string;
  sendEmail: boolean;
  selectedUsers: string[];
}

interface SharedViewProps {
  data: AnnouncementFormData;
  setData: React.Dispatch<React.SetStateAction<AnnouncementFormData>>;
  onChangeView: (view: AnnouncementViewType) => void;
  onClose: () => void;
}

// --- MAIN FORM VIEW ---
export const MainFormView = ({
  data,
  setData,
  onChangeView,
  onClose,
}: SharedViewProps) => {
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [courseSearch, setCourseSearch] = useState("");

  const { data: coursesResponse } = useGetCourses();
  const courses = coursesResponse?.data ?? [];

  const { data: usersResponse } = useGetAdminUsers();
  const users = usersResponse?.users ?? [];

  const { mutateAsync: createAnnouncement, isPending } =
    useCreateAnnouncementMutation();

  const getAudienceDisplay = () => {
    if (data.audience === "Specific Users" && data.selectedUsers.length > 0) {
      const selectedNames = data.selectedUsers
        .map((id) => users.find((u) => u._id === id)?.name)
        .filter(Boolean);

      if (selectedNames.length <= 2) {
        return <span>{selectedNames.join(" , ")}</span>;
      } else {
        return (
          <span>
            {selectedNames[0]} , {selectedNames[1]} ,
            <span className="text-[#F06B30]">+{selectedNames.length - 2}More</span>
          </span>
        );
      }
    }
    return <span>{data.audience || "Select Audience"}</span>;
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-5 pb-4">
        {/* Send To Trigger */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-medium text-gray-900">
            Send To
          </label>
          <button
            onClick={() => onChangeView("AUDIENCE")}
            className="w-full flex items-center justify-between h-12 px-4 rounded-xl border border-gray-100 bg-[#F6F6F6] text-[15px] text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <span className="truncate mr-2 max-w-[85%] text-left">
              {getAudienceDisplay()}
            </span>
            <ChevronDown className="size-5 text-primary shrink-0" />
          </button>
        </div>

        {/* Select Course Trigger */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-medium text-gray-900">
            Select Course
          </label>
          <Popover open={isCourseOpen} onOpenChange={setIsCourseOpen}>
            <PopoverTrigger asChild>
              <button className="w-full flex items-center justify-between h-12 px-4 rounded-xl border border-gray-100 bg-[#F6F6F6] text-[15px] text-gray-500 hover:bg-gray-100 transition-colors">
                <span
                  className={data.course ? "text-gray-900" : "text-gray-400"}
                >
                  {data.course || "Select Course"}
                </span>
                {isCourseOpen ? (
                  <ChevronUp className="size-5 text-gray-900" />
                ) : (
                  <ChevronDown className="size-5 text-gray-900" />
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-[calc(100vw-3rem)] sm:w-[450px] p-2 rounded-2xl shadow-xl border-gray-100 bg-white"
            >
              <div className="flex flex-col max-h-[300px]">
                <div className="px-2 pt-2 pb-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
                    <Input
                      placeholder="Search"
                      value={courseSearch}
                      onChange={(e) => setCourseSearch(e.target.value)}
                      className="pl-9 bg-[#F6F6F6] border-none rounded-xl h-10 w-full"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-1 pb-2 flex flex-col gap-1 custom-scrollbar">
                  {courses
                    .filter((c) =>
                      c.title.toLowerCase().includes(courseSearch.toLowerCase()),
                    )
                    .map((c) => (
                      <button
                        key={c._id}
                        onClick={() => {
                          setData({ ...data, course: c.title, courseId: c._id });
                          setIsCourseOpen(false);
                        }}
                        className="text-left px-3 py-2.5 text-[15px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {c.title}
                      </button>
                    ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-medium text-gray-900">
            Announcement Title
          </label>
          <Input
            placeholder="Announcement title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="h-12 rounded-xl border-gray-100 bg-[#F6F6F6]"
          />
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-medium text-gray-900">
            Summary
          </label>
          {/* using text area natively to avoid any missing component issues */}
          <textarea
            placeholder="Summary....."
            value={data.summary}
            onChange={(e) => setData({ ...data, summary: e.target.value })}
            className="w-full rounded-xl border border-gray-100 bg-[#F6F6F6] text-[15px] p-4 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[140px] resize-none"
          />
        </div>

        {/* Send Email */}
        <div className="flex items-center gap-3 pt-2">
          <Checkbox
            id="sendEmail"
            checked={data.sendEmail}
            onCheckedChange={(c) => setData({ ...data, sendEmail: c === true })}
            className="rounded-[4px] border-gray-300 data-[state=checked]:bg-[#F06B30] data-[state=checked]:border-[#F06B30] size-5"
          />
          <label
            htmlFor="sendEmail"
            className="text-[15px] font-medium cursor-pointer"
          >
            Send Email Notification
          </label>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-gray-100 w-full shrink-0">
        <Button
          variant="outline"
          onClick={onClose}
          className="h-11 px-6 rounded-lg border-gray-200 text-gray-700 bg-[#F6F6F6] font-medium hover:bg-gray-200"
        >
          Cancel
        </Button>
        <Button
          disabled={isPending || !data.title || !data.summary}
          onClick={async () => {
            const payload: CreateAnnouncementPayload = {
              title: data.title,
              summary: data.summary,
            };
            if (data.audience === "Specific Course" && data.courseId) {
              payload.courseId = data.courseId;
            }
            if (
              data.audience === "Specific Users" &&
              data.selectedUsers.length > 0
            ) {
              payload.students = data.selectedUsers;
            }
            // "Specific Group (Batch)" intentionally omitted: no cohorts-list
            // endpoint exists yet to build a real cohort picker (see AudienceView).

            try {
              await createAnnouncement(payload);
              onChangeView("SUCCESS");
            } catch (error: any) {
              toast.error(error?.message || "Failed to publish announcement");
            }
          }}
          className="h-11 px-6 rounded-lg bg-[#F06B30] hover:bg-[#F06B30]/90 text-white font-medium disabled:opacity-50"
        >
          {isPending ? "Publishing..." : "Publish"}
        </Button>
      </div>
    </div>
  );
};

// --- AUDIENCE VIEW ---
export const AudienceView = ({
  data,
  setData,
  onChangeView,
  onClose,
}: SharedViewProps) => {
  const [localSearch, setLocalSearch] = useState("");
  // Determine internal selection
  const [selectedAudience, setSelectedAudience] = useState(data.audience || "");

  const options = [
    "All Users",
    "Specific Course",
    "Specific Group (Batch)",
    "Specific Users",
  ];

  const handleNext = () => {
    setData({ ...data, audience: selectedAudience });
    if (selectedAudience === "Specific Users") {
      onChangeView("SPECIFIC_USERS");
    } else {
      onChangeView("MAIN");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-4 pb-4 overflow-y-auto">
        <div className="relative mb-2 shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <Input
            placeholder="Search course...."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="pl-11 rounded-full border-none bg-[#F6F6F6] h-12 text-[15px] placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col gap-3">
          {options
            .filter((o) => o.toLowerCase().includes(localSearch.toLowerCase()))
            .map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedAudience(opt)}
                className="w-full flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors text-left"
              >
                <div
                  className={`size-[22px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    selectedAudience === opt
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                >
                  {selectedAudience === opt && (
                    <div className="size-[10px] bg-black rounded-full" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-[15px]",
                    selectedAudience === opt
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 font-normal",
                  )}
                >
                  {opt}
                </span>
              </button>
            ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 mt-4 pt-4 shrink-0">
        <Button
          variant="outline"
          onClick={() => onChangeView("MAIN")}
          className="h-11 px-6 rounded-lg border-gray-200 text-gray-700 bg-[#F6F6F6] font-medium hover:bg-gray-200"
        >
          Cancel
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedAudience}
          className="h-11 px-8 rounded-lg bg-[#F6F6F6] border border-gray-200 hover:bg-gray-200 text-gray-900 font-medium disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

// --- SPECIFIC USERS VIEW ---
export const SpecificUsersView = ({
  data,
  setData,
  onChangeView,
  onClose,
}: SharedViewProps) => {
  const [localSearch, setLocalSearch] = useState("");
  // Keep local set before saving
  const [localSelected, setLocalSelected] = useState<Set<string>>(
    new Set(data.selectedUsers),
  );

  const { data: usersResponse, isLoading: isUsersLoading } = useGetAdminUsers();
  const allUsers = usersResponse?.users ?? [];

  const filteredUsers = allUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(localSearch.toLowerCase()) ||
      u.email.toLowerCase().includes(localSearch.toLowerCase()),
  );

  const toggleSelectAll = () => {
    if (localSelected.size === filteredUsers.length) {
      setLocalSelected(new Set());
    } else {
      setLocalSelected(new Set(filteredUsers.map((u) => u._id)));
    }
  };

  const toggleUser = (id: string) => {
    const next = new Set(localSelected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setLocalSelected(next);
  };

  const handleAdd = () => {
    setData({ ...data, selectedUsers: Array.from(localSelected) });
    onChangeView("MAIN");
  };

  const isAllSelected =
    localSelected.size === filteredUsers.length && filteredUsers.length > 0;
  const isIndeterminate = !isAllSelected && localSelected.size > 0;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
        <div className="relative mb-4 shrink-0 px-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <Input
            placeholder="Search course...."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="pl-12 rounded-full border-none bg-[#F6F6F6] h-12 text-[15px] placeholder:text-gray-400"
          />
        </div>

        {/* Header row */}
        <div className="px-3 flex items-center gap-4 pb-4">
          <Checkbox
            checked={isIndeterminate ? "indeterminate" : isAllSelected}
            onCheckedChange={toggleSelectAll}
            className="rounded-[6px] border-gray-300 data-[state=checked]:bg-[#F06B30] data-[state=checked]:border-[#F06B30] data-[state=indeterminate]:bg-[#F06B30] data-[state=indeterminate]:border-[#F06B30] data-[state=indeterminate]:text-white size-5 flex items-center justify-center shrink-0"
          />
          <span className="font-semibold text-gray-900 text-[18px]">Name</span>
        </div>

        <div className="flex flex-col px-1">
          {isUsersLoading ? (
            <div className="flex items-center justify-center py-10">
              <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            filteredUsers.map((u) => (
              <div
                key={u._id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50/50"
              >
                <div className="flex items-center gap-4 w-full">
                  <Checkbox
                    checked={localSelected.has(u._id)}
                    onCheckedChange={() => toggleUser(u._id)}
                    className="rounded-[6px] border-gray-300 data-[state=checked]:bg-[#F06B30] data-[state=checked]:border-[#F06B30] size-5 shrink-0"
                  />
                  <Avatar className="size-[50px] shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {u.name.charAt(0)}
                    </AvatarFallback>
                    <AvatarImage src="/assets/images/user1.png" alt={u.name} />
                  </Avatar>
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[15px] font-medium text-gray-900 leading-tight">
                        {u.name}
                      </span>
                      {u.status && (
                        <span className="px-2 py-0.5 bg-[#F6F6F6] text-gray-600 text-[11px] font-medium rounded capitalize">
                          {u.status}
                        </span>
                      )}
                    </div>
                    <span className="text-[13px] text-gray-500 mt-0.5 max-w-full truncate">
                      {u.email}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between mt-4 pt-4 gap-4 px-2 shrink-0">
        <div className="flex items-center justify-between gap-6 w-full sm:w-auto py-4">
          <span className="text-[14px] font-normal text-gray-900">
            Page 1 of 5
          </span>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1.5 text-[14px] font-medium text-gray-900 hover:text-[#F06B30] transition-colors">
              <span className="font-bold text-[16px]">&lt;</span> Prev.
            </button>
            <button className="flex items-center gap-1.5 text-[14px] font-medium text-gray-900 hover:text-[#F06B30] transition-colors">
              Next <span className="font-bold text-[16px]">&gt;</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <Button
            variant="outline"
            onClick={() => onChangeView("AUDIENCE")}
            className="h-11 px-6 rounded-lg border border-gray-200 text-gray-700 bg-[#F6F6F6] font-medium hover:bg-gray-200"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAdd}
            className="h-11 px-8 rounded-lg bg-[#F06B30] hover:bg-[#F06B30]/90 text-white font-medium"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- SUCCESS VIEW ---
export const SuccessView = ({ data, onClose }: SharedViewProps) => {
  const userCount = data.audience === "Specific Users"
    ? `${data.selectedUsers.length} User${data.selectedUsers.length > 1 ? "" : ""}`
    : data.audience || "All Users";

  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4">
      <div className="size-[140px] rounded-full bg-[#F86432]/10 flex items-center justify-center mb-8">
        <Image
          src="/assets/icons/speaker.svg"
          alt="Success"
          width={70}
          height={70}
        />
      </div>
      <h3 className="text-[20px] font-semibold text-gray-900 mb-3 text-center">
        Announcement successfully published
      </h3>
      <p className="text-[15px] text-gray-500 mb-10 text-center">
        Sent to {userCount}
      </p>

      <div className="flex flex-row items-center gap-3 w-full justify-center">
        <Button
          onClick={onClose}
          variant="outline"
          className="h-11 px-6 rounded-lg border border-gray-200 text-gray-700 bg-[#F6F6F6] hover:bg-gray-200 font-medium whitespace-nowrap"
        >
          Maybe Later
        </Button>
        <Button
          onClick={onClose}
          className="h-11 px-6 rounded-lg bg-[#F06B30] hover:bg-[#F06B30]/90 text-white font-medium whitespace-nowrap"
        >
          View Announcement
        </Button>
      </div>
    </div>
  );
};
