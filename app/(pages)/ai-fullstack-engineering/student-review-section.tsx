import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { exo, melodrama } from "@/app/fonts";

const reviewParagraphs = [
  "My experience with Ayonaire Academy has been really great so far.",
  "The training has been practical, well-structured, and has helped me build a much stronger understanding of Python, Data Analysis, Streamlit, and AI Engineering in general.",
  "One thing I particularly appreciate is the patience and guidance of the instructor and also the support from the academy Oh My God this is Top Notch...",
  "Concepts are explained clearly, and we are also given the opportunity to practise along during class instead of just watching someone teach.",
  "That practical approach has really helped me understand things better and has significantly improved my confidence and technical skills.",
  "I'm genuinely grateful to be part of the AI Engineering 1.0 journey and to be learning in an environment that is structured, practical and supportive.",
  "Thank you, Ayonaire Academy, for creating such a valuable learning experience.",
];

export default function StudentReviewSection() {
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
            className={`${exo.className} mt-4 max-w-[760px] text-[14px] font-semibold leading-[1.55] text-[#2d3036] sm:text-[16px] lg:text-[18px]`}
          >
            Don&apos;t just take our word for what the Ayonaire experience is like. Hear directly from the people who have gone through it.
          </p>

          <ReviewDivider className="mt-5" />
        </div>

        <article className="relative mt-8 grid w-full items-start gap-8 lg:grid-cols-[210px_minmax(0,1fr)_6px] lg:gap-12">
          <div className="flex justify-center lg:pt-20">
            <Image
              src="/assets/images/ai-fullstack-engineering/student-review-avatar.png"
              alt="Illustrated portrait representing Ezeh Faith"
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
              className={`${exo.className} relative z-10 max-h-[270px] overflow-y-auto pr-4 text-justify text-[15px] font-medium leading-[1.7] text-[#2d3036] scrollbar-thin scrollbar-thumb-[#ff8a4d] scrollbar-track-transparent sm:text-[16px] lg:max-h-[304px]`}
            >
              <p className="mb-7 text-left text-[16px] font-black leading-[1.55] text-[#252830] sm:text-[18px]">
                &quot;The Program Has Really Improved My Confidence and Technical Skills.&quot;
              </p>

              {reviewParagraphs.map((paragraph) => (
                <p key={paragraph} className="mb-5 last:mb-0">
                  {paragraph}
                </p>
              ))}

              <div className="mt-7 text-left">
                <p className="text-[17px] font-black text-[#252830]">-Ezeh Faith</p>
                <p className="mt-1 text-[13px] font-medium text-[#2d3036]">AI Engineering Student, Ayonaire Academy</p>
              </div>
            </div>
          </div>

          <div className="hidden h-[102px] w-[4px] rounded-full bg-[#ff8a4d]/70 lg:mt-20 lg:block" />
        </article>

        <div className="mt-8 flex w-full items-center justify-between gap-5 sm:mt-10">
          <ReviewDivider compact />

          <div className="flex shrink-0 items-center gap-2 text-[#ff6b00]">
            <button
              type="button"
              aria-label="Previous student review"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b00]"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              aria-label="Next student review"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b00]"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
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