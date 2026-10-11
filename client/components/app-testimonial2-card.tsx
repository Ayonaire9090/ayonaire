"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppTestimonial2CardProps {
  name: string;
  username?: string;
  address: string;
  testimonial: string;
  rating: number;
  image?: string;
  variant?: "default" | "simple";
  className?: string;
}

export function AppTestimonial2Card({
  name,
  username,
  address,
  testimonial,
  rating,
  image,
  variant = "default",
  className,
}: AppTestimonial2CardProps) {
  const maxStars = 5;

  // Simple variant - minimal card with left border accent
  if (variant === "simple") {
    return (
      <div
        className={cn(
          "relative bg-white rounded-2xl shadow-md overflow-hidden h-full border-l-4 border-l-gray-300",
          className
        )}
      >
        {/* Card Content */}
        <div className="flex flex-col gap-4 p-5 sm:p-6">
          {/* Header: Name/Title and Rating */}
          <div className="flex items-start justify-between gap-4">
            {/* Name and Title */}
            <p className="font-bold text-black text-lg lg:text-xl">
              {name}, <span className="font-bold">{address}</span>
            </p>

            {/* Rating Number */}
            <span className="text-gray-400 text-xl lg:text-2xl font-medium shrink-0">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-600 text-base leading-relaxed">
            &ldquo;{testimonial}&rdquo;
          </p>
        </div>
      </div>
    );
  }

  // Default variant - original card with image and orange accent
  return (
    <div
      className={cn(
        "relative bg-white border-2 border-[#FFE7DE] rounded-xl shadow overflow-hidden h-full",
        className
      )}
    >
      {/* Orange Gradient Bottom Border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[5px] bg-primary" />

      {/* Card Content */}
      <div className="flex flex-col gap-5 p-5 sm:p-6">
        {/* Header: Profile Photo, Name/Username, and Quote Icon */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* Profile Image */}
            {image && (
              <div className="relative w-[46px] h-[46px] rounded-full overflow-hidden shrink-0">
                <Image
                  src={image}
                  alt={`${name}'s profile`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Name and Username */}

            <div className="flex flex-col">
              <p className="font-bold text-black text-lg capitalize">{name}</p>
              {username && (
                <p className="text-gray-500 text-sm lowercase">{username}</p>
              )}
            </div>
          </div>
        </div>

        {/* Location and Testimonial Text */}
        <div className="flex flex-col gap-1">
          <p className="text-lg lg:text-xl font-bold">{address}</p>
          <p className="text-gray-600 text- md:text-[14px] leading-relaxed">
            &ldquo;{testimonial}&rdquo;
          </p>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: maxStars }).map((_, index) => (
            <Star
              key={index}
              size={18}
              className={
                index < rating ? "text-primary fill-primary" : "text-primary"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
