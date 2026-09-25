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
    <section
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFF2E8 30%, #FFE5D4 60%, #FFFFFF 100%)" }}
      className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24 xl:px-16 xl:py-28"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[980px] flex-col items-center">
        {/* Top Call to Action Button matching Image 1 */}
        <div className="mb-10 flex w-full justify-center lg:mb-12">
          <a
            href="https://chat.whatsapp.com/HltOtTd5VrHJONFYDVb9VT?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className={`${exoMedium.className} inline-flex items-center justify-center text-center gap-2 rounded-[8px] bg-[#ff6b00] px-7 py-3.5 text-[13px] font-bold uppercase leading-[1.45] text-white shadow-[0_12px_24px_rgba(255,107,0,0.35)] transition-transform hover:scale-[1.01] sm:px-9 sm:py-4 lg:text-[15px]`}
          >
            <span className="text-center">I Want To Build My AI Career</span>
            <Image
              src="/assets/images/ai-fullstack-engineering/instructor-proof-button-arrow.svg"
              alt=""
              width={16}
              height={16}
              className="size-4 shrink-0"
            />
          </a>
        </div>

        {/* Header */}
        <div className="flex w-full flex-col items-center text-center">
          <h2
            className={`${melodrama.className} text-[30px] font-bold leading-[1.12] text-[#181c23] sm:text-[38px] lg:text-[44px]`}
          >
            Don&apos;t just take{" "}
            <span className="text-[#f25e25]">
              our word for it.
            </span>
          </h2>

          <p
            className={`${exoMedium.className} mt-4 max-w-[620px] text-[14px] font-medium leading-[1.55] text-[#181c23] sm:text-[16px] lg:text-[17px]`}
          >
            Don&apos;t just take our word for what the Ayonaire experience is like. Hear directly from the people who have gone through it.
          </p>

          <ReviewDivider className="mt-6 sm:mt-8" />
        </div>

        {/* Review Content */}
        <article className="relative mt-8 grid w-full items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(180px,220px)_minmax(0,1fr)] lg:gap-10">
          {/* Avatar Container */}
          <div className="relative flex flex-col items-center justify-center lg:pt-14">
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
            {/* Background Quote Marks matching Image 1 & 2 */}
            <div className="pointer-events-none absolute -bottom-6 right-0 select-none text-[150px] font-black leading-none text-white/50 sm:-bottom-8 sm:text-[200px] lg:-bottom-10 lg:text-[240px]">
              &rdquo;&rdquo;
            </div>

            <div
              key={currentIndex}
              className={`${exoMedium.className} relative z-10 max-h-[320px] overflow-y-auto pr-3 text-left text-[14px] font-medium leading-[1.7] text-[#181c23] [scrollbar-color:#ff8a4d_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#ff8a4d] sm:text-[15px] lg:max-h-[340px]`}
            >
              <p className="mb-5 text-left text-[16px] font-bold leading-[1.5] text-[#181c23] sm:mb-7 sm:text-[17px]">
                &quot;{currentReview.title}&quot;
              </p>

              {currentReview.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0 sm:mb-5">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 text-left sm:mt-10">
                <p className={`${exo.className} text-[26px] font-bold text-[#181c23] sm:text-[30px] lg:text-[34px]`}>
                  -{currentReview.name}
                </p>
                <p className={`${exoMedium.className} mt-1.5 text-[15px] font-medium text-[#181c23] sm:text-[16px] lg:text-[18px]`}>
                  {currentReview.role}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Bottom divider and desktop controls */}
        <div className="mt-10 flex w-full justify-center sm:mt-12 lg:hidden">
          <ReviewDivider />
        </div>

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
        className={`${exo.className} shrink-0 border border-[#ff8a4d] bg-[#fff0e4] px-4 py-1.5 text-center text-[11px] font-bold uppercase tracking-wider text-[#181c23] sm:text-xs`}
      >
        STUDENT REVIEW
      </div>
      <div className="h-px min-w-0 flex-1 bg-[#ff8a4d]" />
    </div>
  );
}