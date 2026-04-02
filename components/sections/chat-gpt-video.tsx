"use client";
import { useState } from "react";
import Image from "next/image";

export const ChatGPTVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer">
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <Image
            src="/assets/images/about-hero-img.png"
            alt="Video thumbnail"
            fill
            className="object-cover"
          />

          {/* Play Button Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        /* Vimeo Video */
        <iframe
          src="https://player.vimeo.com/video/1148688112?autoplay=1&loop=1&muted=0"
          title="Ayonaire Video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
};
