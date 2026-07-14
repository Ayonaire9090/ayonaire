"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetAnnouncements } from "@/hooks/api/use-announcements";

interface CourseAnnouncementsProps {
  courseId: string;
}

export const CourseAnnouncements = ({ courseId }: CourseAnnouncementsProps) => {
  const { data, isLoading, isError } = useGetAnnouncements();

  const courseAnnouncements = (data?.data?.announcement ?? []).filter(
    (a) => a.courseId === courseId,
  );

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
        Failed to load announcements. Please try again.
      </div>
    );
  }

  if (courseAnnouncements.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
        No announcements for this course yet.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 max-w-4xl mx-auto py-4">
      {courseAnnouncements.map((announcement) => (
        <div
          key={announcement._id}
          className="rounded-xl p-4 bg-white shadow-sm"
        >
          <AnnouncementCard
            name="Ayonaire Team"
            date={
              announcement.createdAt
                ? format(new Date(announcement.createdAt), "d MMM")
                : ""
            }
            content={announcement.summary}
          />
        </div>
      ))}
    </div>
  );
};

interface AnnouncementCardProps {
  image?: string;
  name?: string;
  description?: string;
  date?: string;
  content?: string;
}

const AnnouncementCard = ({
  image,
  name,
  description,
  date,
  content = "",
}: AnnouncementCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // We split by newline, and decide how to truncate.
  // The image shows first 4 lines:
  // "Just 2 weeks left"
  // "🚀 The Wait Is Over..."
  // "🤖🔥 Best for anyone..."
  // "The... See more"

  const lines = content.split("\n");
  const shouldTruncate = lines.length > 4 || content.length > 150;

  const renderContent = () => {
    if (isExpanded || !shouldTruncate) {
      return (
        <div className="text-gray-600 text-[15px] md:text-base leading-relaxed whitespace-pre-wrap">
          {content}
          {isExpanded && shouldTruncate && (
            <button
              onClick={() => setIsExpanded(false)}
              className="font-medium text-[#F86432] hover:underline ml-2"
            >
              See less
            </button>
          )}
        </div>
      );
    }

    // Truncated version
    const truncatedLines = lines.slice(0, 3);
    const lastLineStart = lines[3] ? lines[3].substring(0, 3) + "..." : "...";

    return (
      <div className="text-gray-600 text-[15px] md:text-base leading-relaxed">
        {truncatedLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div>
          {lastLineStart}
          <button
            onClick={() => setIsExpanded(true)}
            className="font-semibold text-[#F86432] hover:underline ml-1"
          >
            See more
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-3 md:gap-4">
          <Avatar className="w-12 h-12 border border-gray-100">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-medium text-gray-900">
              {name}
            </span>
            <span className="text-sm md:text-sm text-gray-500">
              {date}
              {description ? ` • ${description}` : ""}
            </span>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-900 hover:bg-gray-100 -mr-2"
            >
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <div className="w-full mt-1">{renderContent()}</div>
    </div>
  );
};
