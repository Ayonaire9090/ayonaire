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
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Main Text Content */}
      {text && (
        <p className="whitespace-pre-wrap break-words text-[15px] leading-relaxed text-foreground">
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
