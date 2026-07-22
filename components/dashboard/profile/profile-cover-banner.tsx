"use client";

import Image from "next/image";

// No backend field exists for a per-user cover photo (checked the live API
// spec - only the avatar has an upload endpoint), so this is a neutral
// brand banner rather than a fake per-user image or course claim.
export function ProfileCoverBanner() {
  return (
    <div className="relative w-full h-[180px] md:h-[160px] rounded-none md:rounded-xl overflow-hidden bg-linear-to-r from-[#1a1a2e] to-[#2d2d4a]">
      {/* Primary accent bar on left */}
      <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-primary z-10" />

      {/* Soft abstract glow decoration */}
      <div className="absolute -right-10 -top-10 size-[220px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-16 bottom-0 size-[140px] rounded-full bg-primary/10 blur-2xl" />

      {/* Logo watermark */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 opacity-90">
        <Image
          src="/assets/logos/logo-dark.png"
          alt=""
          width={56}
          height={56}
          className="w-10 h-10 md:w-14 md:h-14 opacity-30"
        />
      </div>
    </div>
  );
}
