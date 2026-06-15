import Image from "next/image";

interface FeedPostContentProps {
  text?: string;
  tags?: string[];
  imageUrl?: string;
}

export const FeedPostContent = ({ text, tags, imageUrl }: FeedPostContentProps) => {
  return (
    <div className="flex flex-col gap-4 mt-3 mb-2 w-full">
      {/* Tags Row */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#FDF3EE] text-[#F36B36] px-3 py-1.5 rounded-lg text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Main Text Content */}
      {text && (
        <p className="text-[15px] sm:text-[16px] text-gray-900 leading-relaxed font-medium">
          {text}
        </p>
      )}

      {/* Optional Image */}
      {imageUrl && (
        <div className="w-full relative mt-2 rounded-xl overflow-hidden bg-gray-100 max-h-[400px]">
          <Image
            src={imageUrl}
            alt="Post content"
            width={800}
            height={400}
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>
      )}
    </div>
  );
};
