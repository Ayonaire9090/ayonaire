"use client";

import React, { useState } from "react";
import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

interface Review {
  name: string;
  role: string;
  title: string;
  paragraphs: string[];
}

const reviews: Review[] = [
  {
    name: "Ezeh Faith",
    role: "AI Engineering Student, Ayonaire Academy",
    title: "The Program Has Really Improved My Confidence and Technical Skills.",
    paragraphs: [
      "My experience with Ayonaire Academy has been really great so far.",
      "The training has been practical, well-structured, and has helped me build a much stronger understanding of Python, Data Analysis, Streamlit, and AI Engineering in general.",
      "One thing I particularly appreciate is the patience and guidance of the instructor and also the support from the academy Oh My God this is Top Notch...",
      "Concepts are explained clearly, and we are also given the opportunity to practise along during class instead of just watching someone teach.",
      "That practical approach has really helped me understand things better and has significantly improved my confidence and technical skills.",
      "I'm genuinely grateful to be part of the AI Engineering 1.0 journey and to be learning in an environment that is structured, practical and supportive.",
      "Thank you, Ayonaire Academy, for creating such a valuable learning experience.",
    ],
  },
  {
    name: "Uzodinma Ekedum",
    role: "AI Engineering Student, Ayonaire Academy",
    title: "This Is Honestly One of the Best Programs I’ve Experienced.",
    paragraphs: [
      "Guys, this year I joined Ayonaire Academy’s Full Stack AI Engineering Career Transition Program, and so far, the experience has been beyond my expectations.",
      "One thing that really stands out to me is how structured and intentional the program is. You can tell that they are very big on excellence and depth.",
      "The curriculum is robust and carefully put together to help you develop practical, industry-relevant AI/ML Engineering skills. It’s not just a program where you spend months learning theories without knowing how to apply them. You are actually learning how to build AI-powered applications and work on practical projects.",
      "The instructors are solid, the teaching goes deep, and the support from the organization is top-notch. You don’t feel like you’ve just paid for a course and been left alone to figure everything out yourself.",
      "I also like that Ayonaire is serious about helping students understand what they are building, not just copy code and move on.",
      "If you’re serious about getting into AI/ML Engineering and you want a program that gives you structure, depth, practical experience and strong support, I would genuinely recommend Ayonaire Academy.",
    ],
  },
  {
    name: "Kingsley Nwaginineme",
    role: "AI Engineering Student, Ayonaire Academy",
    title: "I Joined With Almost Zero Knowledge of Python or AI Engineering. Now I Can Code From Scratch.",
    paragraphs: [
      "My experience with Ayonaire Academy has honestly been a really great one so far.",
      "Before joining the AI Engineering 1.0 program, I had virtually zero knowledge of Python or AI Engineering.",
      "Today, I can confidently write Python code from scratch and, more importantly, I actually understand what the lines of code I’m writing are doing.",
      "I may not be building very complex AI systems yet, but compared to where I started, the growth has been huge. I now have a solid foundation and a much better understanding of programming and AI Engineering.",
      "One thing that has really stood out to me about Ayonaire Academy is the follow-up and support. They genuinely try to make sure everyone is carried along. You don’t just feel abandoned when a concept becomes difficult.",
      "I also really appreciate the patience of the instructor. Concepts are explained again and in different ways until students understand them.",
      "The “Code As I Code” approach has probably been one of the biggest things that helped me. Instead of only watching someone teach, you are coding along, practising, making mistakes and understanding the process as you go.",
      "The support, patience, practical learning approach and commitment to making sure students actually understand what they are learning have made the experience worthwhile for me.",
    ],
  },
  {
    name: "ALABI Alexander",
    role: "AI Engineering Student, Ayonaire Academy",
    title: "Your Brain Will Scream a Bit — But That’s the Beginning of the Stretch.",
    paragraphs: [
      "Hello guys, I’m part of the participants in AI Engineering 1.0, and with 2.0 about to start, I would honestly advise anyone who is serious enough to have clicked the advert and made it this far to take the opportunity seriously.",
      "Personally, one thing I can say about Ayonaire is that the program is quite affordable compared to what similar institutions charge, and the instructors are very knowledgeable in what they teach.",
      "The program starts with coding, and I know that is where a lot of people get scared. But every journey starts somewhere. If you want to go into AI Engineering, having a strong foundation in Python is very important.",
      "Your brain may scream a bit at the beginning, I won’t lie. 😂 But that is part of the stretch. And as you continue practising, you begin to realise that you are actually becoming capable of doing things you could not do before.",
      "One of the fun parts for me so far is that I can now work with data using Pandas and other Python libraries. You begin to see that coding is not just about writing random lines of code.",
      "After classes, the recordings are sent, together with the source code used by the instructor. So when you go back to watch the recording, you can follow along with the same code and practise again by yourself.",
      "We also get assignments that force you to practise what you have just learned. And if you actually take those assignments seriously, after a while, you start noticing your own improvement.",
      "So if AI Engineering is something you genuinely want to pursue, I would say take advantage of the opportunity and choose the payment plan that works for you.",
    ],
  },
];

export default function StudentReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF6EE] via-[#FFF0E4] to-[#FFE8D6] px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20 lg:px-12 lg:pt-20 lg:pb-24">
      {/* Bottom angled background shape matching design */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[70px] sm:h-[110px] lg:h-[150px] overflow-hidden">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
        >
          <polygon points="0,150 1440,150 1440,0 0,95" fill="#FFD8BD" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[980px] flex-col items-center">
        {/* Header */}
        <div className="flex w-full flex-col items-center text-center">
          <div className="relative inline-block max-w-[560px]">
            <h2
              className={`${melodrama.className} relative z-10 text-[28px] font-bold leading-[1.1] text-[#181c23] sm:text-[34px] lg:text-[40px]`}
            >
              Don&apos;t just take{" "}
              <span className="relative inline-block rounded-[4px] bg-[#FFE2D1] px-2 py-0.5 text-[#f25e25]">
                our word for it.
              </span>
            </h2>
          </div>

          <p
            className={`${exoMedium.className} mt-4 max-w-[760px] text-[13px] font-semibold leading-[1.55] text-[#2d3036] sm:text-[15px] lg:text-[16px]`}
          >
            Don&apos;t just take our word for what the Ayonaire experience is like. Hear directly from the people who have gone through it.
          </p>

          <ReviewDivider className="mt-5" />
        </div>

        {/* Review Content */}
        <article className="relative mt-8 grid w-full items-start gap-4 sm:gap-6 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-10">
          {/* Avatar Container with Background Quotes */}
          <div className="relative flex flex-col items-center justify-center lg:pt-14">
            {/* Background Quote Marks behind/above avatar */}
            <div className="pointer-events-none absolute right-4 top-0 select-none text-[110px] font-black leading-none text-white/45 sm:right-10 sm:text-[140px] lg:hidden">
              &rdquo;&rdquo;
            </div>

            <Image
              src="/assets/images/ai-fullstack-engineering/student-review-avatar.png"
              alt={`Illustrated portrait representing ${currentReview.name}`}
              width={210}
              height={170}
              className="relative z-10 h-auto w-full max-w-[190px] object-contain sm:max-w-[210px]"
              sizes="(min-width: 1024px) 210px, 200px"
            />

            {/* Mobile Navigation Buttons: Right-aligned directly beneath avatar */}
            <div className="relative z-20 mt-2 flex w-full justify-end gap-1.5 pr-2 lg:hidden">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous student review"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-[#f25e25] transition-all hover:opacity-75 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f25e25] cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  <polyline points="15 19 8 12 15 5" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next student review"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-[#f25e25] transition-all hover:opacity-75 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f25e25] cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  <polyline points="9 19 16 12 9 5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quote & Text */}
          <div className="relative min-w-0 pr-0 sm:pr-2 lg:pr-4">
            {/* Desktop Background Quote Marks */}
            <div className="pointer-events-none absolute right-2 -top-10 hidden select-none text-[170px] font-black leading-none text-white/45 lg:block">
              &rdquo;&rdquo;
            </div>

            <div
              key={currentIndex}
              className={`${exoMedium.className} relative z-10 max-h-[290px] overflow-y-auto pr-3 text-left text-[14px] font-medium leading-[1.7] text-[#2d3036] [scrollbar-color:#ff8a4d_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#ff8a4d] sm:text-[15px] lg:max-h-[304px]`}
            >
              <p className="mb-5 text-left text-[16px] font-black leading-[1.5] text-[#252830] sm:mb-7 sm:text-[17px]">
                &quot;{currentReview.title}&quot;
              </p>

              {currentReview.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0 sm:mb-5">
                  {paragraph}
                </p>
              ))}

              <div className="mt-7 text-left sm:mt-8">
                <p className={`${exo.className} text-[22px] font-black text-[#181c23] sm:text-[26px]`}>
                  -{currentReview.name}
                </p>
                <p className="mt-1 text-[13px] font-normal text-[#2d3036] sm:text-[14px]">
                  {currentReview.role}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Bottom divider and controls */}
        {/* Mobile: Centered divider */}
        <div className="mt-8 flex w-full justify-center lg:hidden">
          <ReviewDivider />
        </div>

        {/* Desktop: Compact divider with Right-aligned buttons */}
        <div className="mt-10 hidden w-full items-center justify-between gap-5 lg:flex">
          <ReviewDivider compact />

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous student review"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#f25e25] transition-all hover:opacity-75 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f25e25] cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polyline points="15 19 8 12 15 5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next student review"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#f25e25] transition-all hover:opacity-75 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f25e25] cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polyline points="9 19 16 12 9 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewDivider({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <div className={`flex w-full items-center justify-center ${compact ? "max-w-[320px] sm:max-w-[440px]" : "max-w-[430px]"} ${className}`}>
      <div className="h-px min-w-0 flex-1 bg-[#ff8a4d]" />
      <div
        className={`${exo.className} shrink-0 border border-[#ff8a4d] bg-[#fff0e4] px-3 py-1.5 text-center text-[11px] font-black uppercase text-[#252830] sm:px-4 sm:py-2 sm:text-xs`}
      >
        STUDENT REVIEW
      </div>
      <div className="h-px min-w-0 flex-1 bg-[#ff8a4d]" />
    </div>
  );
}