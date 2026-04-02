import Image from "next/image";
import { AppSectionButton } from "../app-section-button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogBannerProps {
  title: string;
  date: string;
  author: string;
  authorImage?: string;
  featuredImage?: string;
  blogPath?: string;
  showArrowButton?: boolean;
  showFeaturedButton?: boolean;
  className?: string;
  buttomContentClassName? : string;
  titleClassName? : string;
}
export const BlogBanner = ({
  title,
  date,
  author,
  authorImage,
  featuredImage = "/assets/images/blog-banner.png",
  blogPath,
  showArrowButton = true,
  showFeaturedButton = true,
  className,
  buttomContentClassName,
  titleClassName,
}: BlogBannerProps) => {
  return (
    <section className={`relative w-full h-[250px] lg:h-[550px] overflow-hidden ${className}`}>
      {/* Featured Image */}
      <Image
        src={featuredImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col py-2 lg:py-12">
        {/* Section Button - Top Center */}
        <div
          className={`flex justify-center ${
            !showFeaturedButton ? "invisible" : ""
          }`}
        >
          <AppSectionButton title="Featured Post" className="bg-white" />
        </div>

        {/* Bottom Content - Always positioned at the bottom */}
        <div className={`mt-auto flex flex-row items-end justify-between ${buttomContentClassName}`}>
          {/* Left - Title and Meta */}
          <div className="flex flex-col gap-4">
            {/* Blog Title */}
            <h2 className={`text-xl lg:text-4xl font-bold text-white max-w-2xl leading-tight text-shadow-xs text-shadow-white ${titleClassName}`}>
              {title}
            </h2>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              {/* Date */}
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-4 h-4" />
                <span className="text-sm lg:text-base">{date}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-2">
                <Image
                  src={authorImage || "/assets/persons/mr-ayo.png"}
                  alt="Ayobami Awosanya"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm lg:text-base text-white">
                  {author}
                </span>
              </div>
            </div>
          </div>

          {/* Right - Arrow Button */}
          <div className={`self-end ${!showArrowButton ? "hidden" : ""}`}>
            <Link href={blogPath || "/blog"} className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center hover:bg-white/90 transition-colors">
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
