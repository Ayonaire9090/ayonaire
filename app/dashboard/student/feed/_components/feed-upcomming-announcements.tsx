import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FeedUpcomingAnnouncements = () => {
  return (
    <div className="w-full bg-white p-4 lg:p-5 lg:rounded-2xl flex flex-col gap-4 border border-gray-100/50">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-black shrink-0" />
          <h2 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
            Latest Announcements
          </h2>
        </div>
        <Link
          href="/dashboard/student/feed/announcements"
          className="text-[#F86432] text-sm font-medium hover:underline cursor-pointer"
        >
          View all
        </Link>
      </div>

      {/* Announcement Content Card */}
      <div className="bg-[#F8F9FA] rounded-2xl p-4 border-l-4 border-l-[#F86432] flex gap-4 items-start justify-between">
        <div className="flex flex-col justify-between min-w-0 flex-1 min-h-[80px]">
          <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed line-clamp-3">
            New Workshop Added: Building RAG Agents Join us on March 12, 7 PM
            IST. We&apos;ll cover: - RAG...
          </p>
          <span className="text-gray-400 text-sm font-normal mt-2 block">
            Nov 28
          </span>
        </div>

        <div className="relative w-28 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-gray-100 self-center">
          <Image
            src="/assets/courses/ai-engineering.webp"
            alt="AI Engineering"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
