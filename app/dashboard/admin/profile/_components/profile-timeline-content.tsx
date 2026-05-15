import Image from "next/image";

export const ProfileTimelineContent = () => {
  return (
    <div className="w-full max-w-[96%] mx-auto md:max-w-full flex flex-col gap-4 my-6">
      <div className="flex items-center gap-1">
        {/* Badge */}
        <Image
          src="/assets/icons/award-badge.svg"
          alt="thumbs Up"
          width={50}
          height={50}
          className="w-11 h-11 "
        />
        {/* Title and description */}
        <div className="flex flex-col gap-0">
          <h2 className="font-extrabold text-lg md:text-xl">
            Earned SEO Expert Badge
          </h2>
          <p>Sep 9, 2024</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {/* Badge */}
        <Image
          src="/assets/icons/award-badge.svg"
          alt="thumbs Up"
          width={50}
          height={50}
          className="w-11 h-11 "
        />
        {/* Title and description */}
        <div className="flex flex-col gap-0">
          <h2 className="font-extrabold text-lg md:text-xl">
            Earned SEO Expert Badge
          </h2>
          <p>Sep 9, 2024</p>
        </div>
      </div>
    </div>
  );
};
