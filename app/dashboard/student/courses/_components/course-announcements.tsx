"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MOCK_ANNOUNCEMENTS = [
  {
    id: 1,
    author: {
      name: "Aditya S.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    },
    date: "5d",
    courseName: "Build AI Agents From Scrach Free Course",
    content:
      "Just 2 weeks left\n🚀 The Wait Is Over – Learn AI the MODERN Way in 2026!\n🤖🔥 Best for anyone who wants to get started in Gen AI and Agentic AI\nThe program is fully updated for the modern AI stacks and techniques.",
  },
  {
    id: 2,
    author: {
      name: "Aditya S.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    },
    date: "5d",
    courseName: "Build AI Agents From Scrach Free Course",
    content:
      "Just 2 weeks left\n🚀 The Wait Is Over – Learn AI the MODERN Way in 2026!\n🤖🔥 Best for anyone who wants to get started in Gen AI and Agentic AI\nThe program is fully updated for the modern AI stacks and techniques.",
  },
];

export const CourseAnnouncements = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 max-w-4xl mx-auto py-4">
      {MOCK_ANNOUNCEMENTS.map((announcement, index) => (
        <div
          key={announcement.id}
          className="rounded-xl p-4 bg-white shadow-sm"
        >
          <AnnouncementCard
            image={announcement.author.image}
            name={announcement.author.name}
            description={announcement.courseName}
            date={announcement.date}
            content={announcement.content}
          />
          {/* {index < MOCK_ANNOUNCEMENTS.length - 1 && (
            <div className="w-full h-px bg-gray-100 mt-6 md:mt-8" />
          )} */}
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
              {date} • {description}
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
