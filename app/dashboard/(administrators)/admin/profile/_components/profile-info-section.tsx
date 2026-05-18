"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProfileInfoSection() {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 p-4 bg-white">
      {/* Avatar */}
      <Avatar className="size-[100px] lg:size-[114px] border-2 border-white shadow-md -mt-15 md:mt-0 ml-4 md:ml-6 z-10 bg-white">
        <AvatarImage
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Dr. Sarah Mitchell"
        />
        <AvatarFallback className="text-xl font-bold bg-gray-200 text-gray-600">
          SM
        </AvatarFallback>
      </Avatar>

      {/* Info */}
      <div className="flex-1 px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <div>
            <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900">
              Dr. Sarah Mitchell
            </h2>
            <p className="text-[14px] text-gray-500 mt-0.5">
              sarah.mitchell@edu.com
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <Image
                  src="/assets/icons/award-badge.svg"
                  alt="popularity"
                  width={18}
                  height={18}
                  className="w-5.5 h-5.5"
                />
                <span className="text-[14px] font-semibold text-gray-800">
                  790
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Image
                  src="/assets/icons/thumbs-up.svg"
                  alt="thumbs Up"
                  width={18}
                  height={18}
                  className="w-5 h-5"
                />
                <span className="text-[14px] font-semibold text-gray-800">
                  1456
                </span>
              </div>
            </div>

            {/* Admin badge */}
            <span className="inline-block mt-2 px-2.5 py-0.5 text-[12px] font-semibold text-primary bg-primary/10 rounded-full">
              Admin
            </span>

            {/* Joined date */}
            <p className="text-[13px] text-gray-500 mt-2">
              Joined september 2025
            </p>

            {/* LinkedIn icon */}
            <a
              href="#"
              className="inline-flex mt-1.5"
              aria-label="LinkedIn profile"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#0A66C2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Set Featured button */}
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 h-10 rounded-lg text-[14px] self-start hidden md:flex">
            Set Featured
          </Button>
        </div>
      </div>
    </div>
  );
}
