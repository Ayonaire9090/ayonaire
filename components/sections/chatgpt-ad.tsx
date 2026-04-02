import React from "react";
import Image from "next/image";
import { AppActionButton } from "@/components/app-action-button";
import { Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatGPTIntroProps {
  iconSrc?: string;
  type?: string;
  courseTitle?: string;
  courseDescription?: string;
  courseRating?: string;
  courseRatingsCount?: string;
  courseEnrolledCount?: string;
  courseLevel?: string;
  courseAverageTime?: string;
  courseSkills?: string[];
  className?: string;
}

export const ChatGPTAd = ({
  iconSrc = "/assets/icons/vanderblit.png",
  type = "Course",
  courseTitle = "Prompt Engineering For ChatGPT",
  courseDescription = "ChatGPT And Other Large Language Models Are Going To Be More Important In Your Life And Business Than Your Smartphone, If You Use Them Right. ChatGPT Can ...",
  courseRating = "4.8",
  courseRatingsCount = "7,318 Ratings",
  courseEnrolledCount = "594,608 Already Enrolled",
  courseLevel = "Beginner Level",
  courseAverageTime = "18 Hour(s)",
  courseSkills = [
    "Prompt Engineering",
    "AI Enablement",
    "Large Language Modeling",
    "Problem Solving",
    "Context Management",
    "Artificial Intelligence",
    "LLM Application",
    "Verification And....",
  ],
  className,
}: ChatGPTIntroProps) => {
  return (
    <section className={cn("py-8 lg:py-16", className)}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-6xl mx-auto shadow-glow-blur">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
            <div className="relative w-24 h-24 shrink-0 border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm p-2 flex items-center justify-center">
              <Image
                src={iconSrc}
                alt={courseTitle}
                width={80}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="space-y-2">
              <span className="text-gray-500 font-medium text-sm block">
                {type}
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                {courseTitle}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-2 font-medium">
                <div className="flex items-center gap-1 text-[#F97316]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-black">{courseRating}</span>
                </div>

                <span className="text-gray-500">({courseRatingsCount})</span>
                <span className="w-1 h-1 rounded-full bg-gray-400/60" />
                <span>{courseEnrolledCount}</span>
                <span className="w-1 h-1 rounded-full bg-gray-400/60" />
                <span>{courseLevel}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            {courseDescription}
          </p>

          {/* Button */}
          <div className="pt-2">
            <AppActionButton
              variant="fading"
              className="bg-linear-to-r! from-[#F59F0A]! to-[#F97A1F]! text-white! p-0! h-auto! py-3! px-6! flex items-center gap-3 font-medium! rounded-xl! shadow-lg hover:shadow-xl! hover:scale-105! transition-all duration-300"
            >
              Read More{" "}
              <div className="bg-white/20 rounded-full p-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </AppActionButton>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-gray-200 self-stretch my-4" />

        {/* Right Side */}
        <div className="lg:w-[32%] shrink-0 space-y-8 lg:pt-2">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900">
              Average Time: {courseAverageTime}
            </h3>
            <p className="text-gray-500 font-medium">Learn At Your Own Pace</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">
              Skills You'll Build:
            </h3>
            <p className="text-gray-500 leading-relaxed font-medium text-[15px]">
              {courseSkills.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mini Ad
interface ChatGPTMiniAdProps {
  iconSrc?: string;
  courseTitle?: string;
  university?: string;
  courseRating?: string;
  courseRatingsCount?: string;
  courseEnrolledCount?: string;
  specializationPrefix?: string;
  specializationHighlight?: string;
  courseDescription?: string;
  buttonText?: string;
  className?: string;
}

export const ChatGPTMiniAd = ({
  iconSrc = "/assets/icons/vanderblit.png",
  courseTitle = "Prompt Engineering For ChatGPT",
  university = "Vanderbilt University",
  courseRating = "4.8",
  courseRatingsCount = "(7,345 Ratings)",
  courseEnrolledCount = "590K Students Enrolled",
  specializationPrefix = "Course 3 Of 4 In The",
  specializationHighlight = "Organizational Strategy With Generative AI & AI Agents Specialization",
  courseDescription = "Instructed By AI Pioneer Andrew Ng, Generative AI For Everyone Offers His Unique Perspective On Empowering You And Your Work With Generative AI. Andrew Will ...",
  buttonText = "Enroll For Free",
  className,
}: ChatGPTMiniAdProps) => {
  return (
    <section className={cn("py-8 lg:py-16", className)}>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-10 flex flex-col items-start max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="w-full flex flex-col sm:flex-row items-start gap-4 lg:gap-6 mb-6">
          <div className="relative w-24 h-24 shrink-0 border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm p-2 flex items-center justify-center">
            <Image
              src={iconSrc}
              alt={courseTitle}
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight underline decoration-1 underline-offset-4">
              {courseTitle}
            </h2>
            <p className="text-gray-500 text-sm font-medium">{university}</p>

            <div className="flex flex-wrap items-center gap-2 text-sm font-medium pt-1">
              <div className="flex items-center gap-1 text-[#F97316]">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-black">{courseRating}</span>
              </div>
              <span className="text-gray-500">{courseRatingsCount}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{courseEnrolledCount}</span>
            </div>

            {(specializationPrefix || specializationHighlight) && (
              <p className="text-sm text-gray-500 pt-1 leading-snug">
                {specializationPrefix}{" "}
                <span className="text-[#F97316] hover:underline cursor-pointer">
                  {specializationHighlight}
                </span>
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-6">
          {courseDescription}
        </p>

        {/* Button */}
        <div>
          <AppActionButton
            variant="fading"
            className="bg-linear-to-r! from-[#F59F0A]! to-[#F97A1F]! text-white! p-0! h-auto! py-3! px-6! flex items-center gap-3 font-medium! rounded-xl! shadow-lg hover:shadow-xl! hover:scale-105! transition-all duration-300"
          >
            {buttonText}
            <div className="bg-white/20 rounded-full p-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </AppActionButton>
        </div>
      </div>
    </section>
  );
};
