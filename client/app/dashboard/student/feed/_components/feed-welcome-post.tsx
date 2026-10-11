import Image from "next/image";
import { Pin, Sparkles } from "lucide-react";

export const FeedWelcomePost = () => {
  return (
    <div className="w-full bg-[#F86432]/10 lg:rounded-[20px] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-[#F86432]/20 px-5 md:px-6 py-3 flex items-center gap-2">
        <Pin
          className="w-4 h-4 md:w-5 md:h-5 text-[#F86432] fill-[#F86432]"
          style={{ transform: "rotate(45deg)" }}
        />
        <span className="font-bold text-gray-900 text-[15px] md:text-[16px]">
          Pinned
        </span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 md:p-6">
        {/* Image spanning 1 */}
        <div className="w-full h-[180px] md:h-auto md:min-h-[160px] relative rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm">
          <Image
            src="/assets/images/pinned-post-image.png"
            alt="Community"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Spanning 2 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:col-span-2 items-start">
          <div className="w-14 h-14  rounded-[14px]  bg-[#F86432] flex items-center justify-center shrink-0">
            <Sparkles className="w-7 h-7 text-white fill-white" />
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[22px] md:text-[25px] font-bold text-gray-900 leading-[1.1]">
              Welcome to the <br className="hidden lg:block" />
              community! 👋
            </h2>
            <p className="text-gray-500 text-[15px] md:text-[20px] leading-snug tracking-tight">
              Introduce yourself to your peers. Share your background,
              interests, and what you're excited to learn!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
