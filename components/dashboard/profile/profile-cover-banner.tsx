"use client";

import Image from "next/image";

interface ProfileCoverBannerProps {
  coverPhotoUrl?: string;
}

export function ProfileCoverBanner({ coverPhotoUrl }: ProfileCoverBannerProps) {
  return (
    <div className="relative w-full h-[180px] md:h-[160px] rounded-none md:rounded-xl overflow-hidden bg-[#202433]">
      {coverPhotoUrl ? (
        <Image
          src={coverPhotoUrl}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
          priority={false}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#202433_0%,#354052_50%,#1f6f5f_100%)]" />
          <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-primary z-10" />
          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 opacity-90">
            <Image
              src="/assets/logos/logo-dark.png"
              alt=""
              width={56}
              height={56}
              className="w-10 h-10 md:w-14 md:h-14 opacity-30"
            />
          </div>
        </>
      )}
    </div>
  );
}
