"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Trophy,
  Share2,
  MoreVertical,
  Star,
  ChevronDown,
  ChevronsUpDown,
  Copy,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LessonHeaderProps {
  title: string;
  completedLessons?: number;
  totalLessons?: number;
  shareUrl?: string;
}

const CourseCompletionDropdownContent = ({
  completedLessons = 0,
  totalLessons = 0,
}: Pick<LessonHeaderProps, "completedLessons" | "totalLessons">) => (
  <DropdownMenuContent
    align="end"
    className="w-[280px] bg-[#F6F6F6] shadow-sm rounded-xl p-0 border-gray-200"
  >
    <div className="flex flex-col py-2 px-1">
      <div className="px-4 py-2.5 text-[15px] text-gray-700 font-medium">
        {completedLessons} Of {totalLessons} Complete
      </div>
      <div className="h-px w-full bg-gray-200/60 my-1" />
      <DropdownMenuItem className="px-4 py-3 text-[15px] text-gray-700 cursor-pointer rounded-lg hover:bg-gray-100/50">
        Finish course to get your certificate
      </DropdownMenuItem>
    </div>
  </DropdownMenuContent>
);

export const LessonHeader = ({
  title,
  completedLessons = 0,
  totalLessons = 0,
  shareUrl = "",
}: LessonHeaderProps) => {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [ratingHover, setRatingHover] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-center justify-between px-4 lg:px-6 py-4 lg:py-4 bg-black text-white border-b border-gray-200/10 w-full z-50 gap-5 lg:gap-0">
        {/* Mobile Top Row / Desktop Left */}
        <div className="flex items-center justify-between lg:w-auto">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/dashboard/student/courses" className="shrink-0">
              <Image
                src="/assets/logos/full-logo-light.png"
                alt="Ayonaire"
                width={120}
                height={32}
                className="h-6 lg:h-8 w-auto object-contain"
              />
            </Link>
            <button className="hidden lg:flex items-center text-gray-400 hover:text-white transition">
              <ChevronsUpDown size={16} />
            </button>
          </div>

          {/* Mobile Actions (Share & More) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border-[0.5px] border-gray-200 hover:bg-white/10 cursor-pointer transition text-sm font-medium"
            >
              <span>Share</span>
              <Share2 size={16} />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex p-1.5 rounded-md border-[0.5px] border-gray-200 hover:bg-white/10 transition">
                  <MoreVertical size={16} />
                </button>
              </DropdownMenuTrigger>
              <CourseCompletionDropdownContent
                completedLessons={completedLessons}
                totalLessons={totalLessons}
              />
            </DropdownMenu>
          </div>
        </div>

        {/* Middle - Title (Desktop Center / Mobile Middle Row) */}
        <div className="flex lg:flex-1 lg:justify-center">
          <h1 className="text-xl lg:text-xl font-medium lg:truncate">
            {title}
          </h1>
        </div>

        {/* Mobile Bottom Row / Desktop Right Actions */}
        <div className="flex items-center gap-6 lg:gap-6">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="p-1.5 rounded-full border border-gray-200 group-hover:border-gray-200/80 transition">
              <Trophy size={16} />
            </div>
            <span className="text-sm font-medium">Your Progress</span>
            <ChevronDown
              size={16}
              className="text-white group-hover:text-gray-300 transition"
            />
          </div>

          {/* Desktop Share & More */}
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-white/10 transition text-sm font-medium"
          >
            <span>Share</span>
            <Share2 size={16} />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden lg:flex p-1.5 rounded-md border border-gray-200 hover:bg-white/10 transition">
                <MoreVertical size={16} />
              </button>
            </DropdownMenuTrigger>
            <CourseCompletionDropdownContent
              completedLessons={completedLessons}
              totalLessons={totalLessons}
            />
          </DropdownMenu>

          <button
            onClick={() => setIsRatingModalOpen(true)}
            className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition"
          >
            <Star size={16} fill="white" className="text-white" />
            <span className="text-sm">Leave Rating</span>
          </button>
        </div>
      </header>

      {/* Leave Rating Modal */}
      <AppSimpleModal
        isOpen={isRatingModalOpen}
        onClose={() => setIsRatingModalOpen(false)}
        className="max-w-md p-6 sm:p-8"
        showCloseButton={true}
      >
        <div className="flex flex-col items-center gap-6 text-center pt-4 pb-2">
          <h2 className="text-[22px] sm:text-2xl font-semibold text-gray-900">
            How would you rate this course?
          </h2>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[17px] text-gray-900 font-medium">
              Select Rating
            </span>
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="p-1 transition-transform hover:scale-110 outline-none"
                  onMouseEnter={() => setRatingHover(star)}
                  onMouseLeave={() => setRatingHover(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`w-10 h-10 transition-colors ${
                      star <= (ratingHover || rating)
                        ? "text-[#F86432] fill-[#F86432]"
                        : "text-gray-400 stroke-[1.5]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </AppSimpleModal>

      {/* Share Modal */}
      <AppSimpleModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        className="max-w-xl p-6 sm:p-8"
        showCloseButton={true}
      >
        <div className="flex flex-col items-center gap-8 pt-4 pb-2">
          <h2 className="text-[22px] sm:text-2xl font-semibold text-gray-900">
            Share this course
          </h2>

          <div className="w-full flex items-center gap-3">
            <Input
              value={shareUrl}
              className="flex-1 h-12 md:h-14 rounded-xl border-gray-200 px-4 text-base bg-white"
              readOnly
            />
            <Button className="bg-[#F86432] hover:bg-[#F86432]/90 text-white h-12 md:h-14 px-6 md:px-8 rounded-xl gap-2 shadow-none font-medium text-base shrink-0">
              <Copy className="w-5 h-5" />
              Copy
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button className="w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition">
              <Youtube className="w-5 h-5" />
            </button>
          </div>
        </div>
      </AppSimpleModal>
    </>
  );
};
