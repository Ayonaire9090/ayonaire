import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FeedPostActions, PostOption } from "./feed-post-actions";

interface FeedPostHeaderProps {
  title?: string;
  badge?: React.ReactNode;
  description?: string;
  isPinned?: boolean;
  options?: PostOption[];
  onReport?: () => void;
}

export const FeedPostHeader = ({
  title,
  badge,
  description,
  isPinned,
  options,
  onReport,
}: FeedPostHeaderProps) => {
  return (
    <div className="flex flex-col gap-3">
      {isPinned && (
        <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
          <Image
            src="/assets/icons/pin.svg"
            alt="Pinned"
            width={16}
            height={16}
            className="opacity-80"
          />
          <span>Pinned</span>
        </div>
      )}
      <div className="flex justify-between items-center w-full">
        {/* Avatar, Title, and description */}
        <div className="flex items-center gap-3">
          <Avatar className="w-11 h-11 bg-[#F6F6F6]">
            <AvatarImage
              src="/assets/icons/user-solid.svg"
              className="object-contain p-2"
            />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="flex gap-2 font-semibold text-[17px] text-gray-900 leading-tight">
              {title}
              <span>{badge && badge}</span>
            </span>
            {description && (
              <span className="text-[14px] text-gray-500 mt-0.5">
                {description}
              </span>
            )}
          </div>
        </div>

        {/* Vertical dot button Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className="rounded-full h-8 w-8 hover:bg-gray-100 shrink-0"
              size={"icon"}
            >
              <MoreVertical className="text-gray-900 h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 border-none bg-transparent shadow-none"
            align="end"
            sideOffset={8}
          >
            <FeedPostActions options={options} onReport={onReport} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
