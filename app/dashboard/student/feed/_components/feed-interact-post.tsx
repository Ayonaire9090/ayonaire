import { Share2, Link } from "lucide-react";
import Image from "next/image";

interface FeedInteractPostProps {
  likes?: number | string;
  comments?: number | string;
  views?: number | string;
}

export const FeedInteractPost = ({
  likes = 24,
  comments = 0,
  views = "3k",
}: FeedInteractPostProps) => {
  return (
    <div className="flex justify-between items-center border-t border-b border-gray-100 py-3">
      {/* Left Stats */}
      <div className="flex items-center gap-5">
        <button className="flex gap-2 items-center text-gray-500 hover:text-gray-900 transition-colors group">
          <Image
            src="/assets/icons/heart-like.svg"
            alt="Like"
            width={22}
            height={22}
            className="cursor-pointer opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[15px] font-medium">{likes}</span>
        </button>
        <button className="flex gap-2 items-center text-gray-500 hover:text-gray-900 transition-colors group">
          <Image
            src="/assets/icons/chat-round.svg"
            alt="Comment"
            width={22}
            height={22}
            className="cursor-pointer opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[15px] font-medium">{comments}</span>
        </button>
        <button className="flex gap-2 items-center text-gray-500 hover:text-gray-900 transition-colors group">
          <Image
            src="/assets/icons/icon-eye.svg"
            alt="Views"
            width={22}
            height={22}
            className="cursor-pointer opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[15px] font-medium">{views}</span>
        </button>
      </div>

      {/* Right Share Buttons */}
      <div className="flex items-center gap-4 text-gray-400">
        <button className="hover:text-gray-900 transition-colors">
          <Image
            src="/assets/icons/arrow-share.svg"
            alt="Share"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </button>
        <button className="hover:text-gray-900 transition-colors">
          <Image
            src="/assets/icons/share-icon.svg"
            alt="share"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};
