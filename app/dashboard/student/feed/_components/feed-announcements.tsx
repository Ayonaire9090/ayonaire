import { Sparkles } from "lucide-react";
import Image from "next/image";

interface MockAnnouncement {
  title?: string;
  description?: string;
  date?: string;
  image?: string;
}

const MockAnnouncements: MockAnnouncement[] = [
  {
    title: "New Workshop Added: Building RAG Agents",
    description:
      "Join us on March 12, 7 PM IST. We'll cover Retrieval-Augmented Generation from scratch using LangChain. Bring your laptop and make sure you have Python 3.9 + installed.",
    date: "Nov 30",
    image: "/assets/courses/ai-engineering.webp",
  },
  {
    title: "Final Exam Date Updated",
    description:
      "The final exam has been rescheduled to March 25th. Please make note of this change and prepare accordingly. Study guides will be released next week.",
    date: "Nov 28",
    image: "/assets/courses/ai-engineering.webp",
  },
  {
    title: "Welcome to Al Engineering Batch 5!",
    description:
      "We're thrilled to have you join our learning community. Please complete your profile setup and introduce yourself in the Introductions section.",
    date: "Nov 18",
    image: "/assets/courses/ai-engineering.webp",
  },
];
export const FeedAnnouncements = () => {
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
      </div>

      {/* Announcement Content Card */}
      {MockAnnouncements.map((announcement, index) => (
        <AnnouncementCard
          key={index}
          title={announcement.title}
          description={announcement.description}
          date={announcement.date}
          image={announcement.image}
        />
      ))}
    </div>
  );
};

interface AnnouncementCardProps {
  title?: string;
  description?: string;
  date?: string;
  image?: string;
}
const AnnouncementCard = ({
  title = "New Workshop Added: Building RAG Agents",
  description = "Join us on March 12, 7 PM IST. We'll cover Retrieval-Augmented Generation from scratch using LangChain. Bring your laptop and make sure you have Python 3.9 + installed.",
  date = "Nov 28",
  image = "/assets/courses/ai-engineering.webp",
}: AnnouncementCardProps) => {
  return (
    <div className="bg-[#F8F9FA] rounded-2xl p-4 border-l-3 border-l-[#F86432] flex gap-4 flex-col lg:flex-row  items-start justify-between">
      <div className="flex flex-col justify-between min-w-0 flex-1 min-h-[80px]">
        <p className="text-gray-900 font-medium text-base leading-relaxed line-clamp-3">
          {title}
        </p>
        <span className="text-gray-400 font-normal mt-2 block">
          {description}
        </span>
        <span className="text-gray-400 text-sm font-normal mt-2 block">
          {date}
        </span>
      </div>

      <div className="relative w-full aspect-video sm:w-32 sm:h-20 sm:aspect-auto rounded-lg overflow-hidden shrink-0 border border-gray-100 sm:self-center">
        <Image src={image} alt={title || ""} fill className="object-cover" />
      </div>
    </div>
  );
};
