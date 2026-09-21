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
    <section className="relative overflow-hidden bg-[#fff0e4] px-5 py-14 sm:px-8 lg:px-12 lg:py-[96px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[980px] flex-col items-center">
        <div className="flex w-full flex-col items-center text-center">
          <div className="relative w-full max-w-[560px]">
            <h2
              className={`${melodrama.className} relative z-10 text-[28px] font-bold leading-[1.05] text-[#181c23] sm:text-[34px] lg:text-[40px]`}
            >
              Don&apos;t just take <span className="text-[#f25e25]">our word for it.</span>
            </h2>
            <Image
              src="/assets/images/ai-fullstack-engineering/student-review-heading-highlight.svg"
              alt=""
              width={250}
              height={38}
              className="pointer-events-none absolute -bottom-1 right-[72px] z-0 hidden h-[38px] w-[250px] max-w-[48%] select-none sm:block"
            />
          </div>

          <p
            className={`${exoMedium.className} mt-4 max-w-[760px] text-[13px] font-semibold leading-[1.55] text-[#2d3036] sm:text-[15px] lg:text-[16px]`}
          >
            Don&apos;t just take our word for what the Ayonaire experience is like. Hear directly from the people who have gone through it.
          </p>

          <ReviewDivider className="mt-5" />
        </div>

        <article className="relative mt-8 grid w-full items-start gap-8 lg:grid-cols-[210px_minmax(0,1fr)_6px] lg:gap-12">
          <div className="flex justify-center lg:pt-20">
            <Image
              src="/assets/images/ai-fullstack-engineering/student-review-avatar.png"
              alt={`Illustrated portrait representing ${currentReview.name}`}
              width={210}
              height={170}
              className="h-auto w-full max-w-[170px] object-contain sm:max-w-[200px] lg:max-w-[210px]"
              sizes="(min-width: 1024px) 210px, 200px"
            />
          </div>

          <div className="relative min-w-0 overflow-hidden pr-0 lg:pr-8">
            <div className="pointer-events-none absolute -right-2 -top-12 hidden select-none text-[180px] font-black leading-none text-white/35 lg:block">
              &rdquo;
            </div>

            <div
              key={currentIndex}
              className={`${exoMedium.className} relative z-10 max-h-[270px] overflow-y-auto pr-4 text-justify text-[14px] font-medium leading-[1.7] text-[#2d3036] [scrollbar-color:#ff8a4d_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#ff8a4d] sm:text-[15px] lg:max-h-[304px]`}
            >
              <p className="mb-7 text-left text-[15px] font-black leading-[1.55] text-[#252830] sm:text-[16px]">
                &quot;{currentReview.title}&quot;
              </p>

              {currentReview.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-5 last:mb-0">
                  {paragraph}
                </p>
              ))}

              <div className="mt-7 text-left">
                <p className="text-[16px] font-black text-[#252830]">- {currentReview.name}</p>
                <p className="mt-1 text-[12px] font-medium text-[#2d3036]">{currentReview.role}</p>
              </div>
            </div>
          </div>


        </article>

        <div className="mt-8 flex w-full items-center justify-between gap-5 sm:mt-10">
          <ReviewDivider compact />

          <div className="flex shrink-0 items-center gap-2 text-[#ff6b00]">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous student review"
              className="flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b00] cursor-pointer"
            >
              <Image
                src="/assets/images/ai-fullstack-engineering/had.png"
                alt="Previous"
                width={64}
                height={64}
                className="h-8 w-16 object-contain"
              />
            </button>
          
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewDivider({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <div className={`flex w-full items-center justify-center ${compact ? "max-w-[440px]" : "max-w-[430px]"} ${className}`}>
      <div className="h-px min-w-0 flex-1 bg-[#ff8a4d]" />
      <div
        className={`${exo.className} shrink-0 border border-[#ff8a4d] bg-[#fff0e4] px-4 py-2 text-center text-[10px] font-black uppercase text-[#252830] sm:text-[11px]`}
      >
        STUDENT REVIEW
      </div>
      <div className="h-px min-w-0 flex-1 bg-[#ff8a4d]" />
    </div>
  );
}