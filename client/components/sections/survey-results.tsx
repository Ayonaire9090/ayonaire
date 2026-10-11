"use client";

import React from "react";
import { Header } from "../layout/header";
import { Progress } from "../ui/progress";
import { AppSectionButton } from "../app-section-button";
import { RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SurveyResultsProps {
  score: number;
  strongAreas: string[];
  focusAreas: string[];
  onRetake: () => void;
  courseTitle: string;
  resultTitle: string;
  actionRecommendation: string;
  courseSlug: string;
}

export const SurveyResults = ({
  score,
  strongAreas,
  focusAreas,
  onRetake,
  courseTitle,
  resultTitle,
  actionRecommendation,
  courseSlug,
}: SurveyResultsProps) => {
  return (
    <>
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="w-full flex flex-col gap-6 my-8">
            {/* Page Header */}
            <div className="flex flex-row items-center justify-between gap-2 lg:gap-4 bg-white rounded-xl p-4">
              <h1 className="text-sm md:text-lg lg:text-3xl font-bold text-gray-900">
                Find Your Match %
              </h1>
              <nav className="text-xs lg:text-sm text-gray-500">
                <span className="hover:text-primary cursor-pointer">
                  Survey
                </span>
                <span className="mx-2">/</span>
                <span className="text-primary">Result</span>
              </nav>
            </div>

            {/* Results Section */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <span className="text-sm text-gray-500">Your Result</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center">
                {resultTitle}
              </h2>
            </div>

            {/* Score Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-10 mt-4">
              {/* Score Bar */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-700">Score</span>
                <div className="flex-1">
                  <Progress value={score} className="h-3 bg-[#142038]" />
                </div>
                <span className="text-lg font-bold text-primary">{score}%</span>
              </div>

              {/* Match Description */}
              <div className="text-center mb-8">
                <p className="text-gray-700">
                  You match{" "}
                  <span className="font-bold text-primary">{score}%</span> for
                  the {resultTitle} profile.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  You can work on the below areas to suit yourself more to this
                  role.
                </p>
              </div>

              {/* Strong Areas and Focus Areas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center">
                {/* Strong Areas */}
                <div className="border border-gray-200 bg-[#FDE68A]/30 rounded-xl p-6">
                  <span className="text-base text-primary font-medium">
                    Your strong areas
                  </span>
                  <p className="text-gray-900 font-semibold mt-2">
                    {strongAreas.join(", ")}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="border border-primary bg-[#FFF8F0] rounded-xl p-6">
                  <span className="text-base text-[#9333EA] font-medium">
                    Areas you need to focus more
                  </span>
                  <p className="text-gray-900 font-semibold mt-2">
                    {focusAreas.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Recommendation */}
            <div className="relative mt-8 mb-40 lg:my-16 lg:ml-16 rounded-[32px] bg-linear-to-r from-[#FFA726] to-[#FF7043]">
              <div className="relative">
                {/* Image */}
                <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] lg:w-[420px] lg:h-auto lg:top-1/2 lg:-translate-y-1/2 lg:-left-24 lg:bottom-auto lg:translate-x-0 z-10">
                  <Image
                    src="/assets/images/ayonaire-action.png"
                    alt="Action Recommendation"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className="relative z-0 w-full lg:pl-[380px] p-8 lg:p-12 pb-40 lg:pb-12 text-white">
                  <h3 className="text-xl lg:text-3xl font-bold mb-4">
                    Action Recommendation:
                  </h3>
                  <p className="mb-4 text-sm lg:text-base leading-relaxed">
                    {actionRecommendation}
                  </p>
                  <p className="mb-4 text-sm lg:text-base leading-relaxed">
                    However, if you are unsure we recommend you to try this free{" "}
                    <span className="underline cursor-pointer hover:text-gray-100 transition-colors">
                      Python programming playlist
                    </span>{" "}
                    &{" "}
                    <span className="underline cursor-pointer hover:text-gray-100 transition-colors">
                      Maths & Stats playlist
                    </span>
                  </p>
                  <p className="text-sm lg:text-base leading-relaxed opacity-90">
                    This is a free project, by doing this project you are not
                    spending any money but investing few hours of your time to
                    understand if you like the {resultTitle} work and able to
                    carry out the tasks in it. Once you have done this, you will
                    be able to decide clearly whether you want to continue with
                    the bootcamp. All the best.
                  </p>
                </div>
              </div>
            </div>

            {/* Ayonaire Section */}
            <div className="flex flex-col items-center gap-4 mt-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                Ayonaire
              </h3>
              <p className="text-gray-700">
                Learning knows no limits. Here's to your journey of seamless
                learning.
              </p>
              <p className="text-gray-500 text-sm">
                Pick your preferred course from the list of paid & free
                resources.
              </p>

              {/* See Bootcamps Button */}
              <Link href={`/courses/${courseSlug}`}>
                <AppSectionButton
                  title={`See ${courseTitle} Bootcamp`}
                  className="bg-primary text-white hover:bg-primary/90 border-0 px-6 py-3"
                  showIcon={false}
                />
              </Link>

              {/* Help Text */}
              <p className="text-gray-500 text-sm mt-4">
                Need help or guidance? Write to us at{" "}
                <a
                  href="mailto:info@ayonaire.com"
                  className="text-primary underline"
                >
                  info@ayonaire.com
                </a>
              </p>

              {/* Retake Survey Button */}
              <button
                onClick={onRetake}
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 cursor-pointer mt-4"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake survey</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
