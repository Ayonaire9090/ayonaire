import Image from "next/image";
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white/65 to-[rgba(255,107,0,0)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="relative z-10 mx-auto flex w-full max-w-[1133px] flex-col items-center gap-12 lg:gap-20">
        <div className="flex w-full flex-col items-center gap-8 text-center lg:gap-10">
          <div className="relative w-full max-w-[780px]">
            <h2 className={`${melodrama.className} relative z-10 text-[34px] font-bold leading-[1.08] tracking-[-0.8px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:tracking-[-1.4px]`}>
              Don&apos;t just take <span className="text-[#f25e25]">our word for it.</span>
            </h2>
            <Image
              src="/assets/images/ai-fullstack-engineering/student-review-heading-highlight.svg"
              alt=""
              width={380}
              height={58}
              className="pointer-events-none absolute -bottom-2 right-0 z-0 hidden h-[58px] w-[380px] max-w-[52%] lg:block"
            />
          </div>

          <p className={`${exo.className} max-w-[960px] text-[18px] font-medium leading-[1.6] tracking-[-0.2px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[46px] lg:tracking-[-0.4px]`}>
            Don&apos;t just take our word for what the Ayonaire experience is like. Hear directly from the people who have gone through it.
          </p>

          <ReviewDivider />
        </div>

        <article className="grid w-full gap-10 lg:h-[439px] lg:grid-cols-[375px_1fr_8px] lg:gap-5 lg:overflow-hidden">
          <Image
            src="/assets/images/ai-fullstack-engineering/student-review-avatar.png"
            alt="Illustrated portrait representing Ezeh Faith"
            width={375}
            height={304}
            className="mx-auto h-auto w-full max-w-[260px] object-contain sm:max-w-[320px] lg:max-w-none"
            sizes="(min-width: 1024px) 375px, 320px"
          />

          <div className={`${exo.className} flex min-w-0 flex-col gap-8 pr-0 text-justify text-[18px] leading-[1.65] tracking-[-0.2px] text-[#181c23] sm:text-[22px] lg:max-h-[439px] lg:gap-10 lg:overflow-y-auto lg:pr-10 lg:text-[28px] lg:leading-[46px] lg:tracking-[-0.4px]`}>
            <div>
              <p className="mb-8 font-bold">
                &quot;The Program Has Really Improved My Confidence and Technical Skills.&quot;
              </p>
              {reviewParagraphs.map((paragraph) => (
                <p key={paragraph} className="mb-6 last:mb-0">{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-left">
              <p className="text-[20px] font-bold sm:text-[24px] lg:text-[28px]">-Ezeh Faith</p>
              <p className="text-[15px] font-normal sm:text-[16px] lg:text-[18px]">AI Engineering Student, Ayonaire Academy</p>
            </div>
          </div>

          <div className="hidden h-[111px] w-2 rounded-[4px] bg-[rgba(242,94,37,0.38)] lg:block" />
        </article>

        <div className="flex w-full items-center justify-center gap-3 sm:gap-0">
          <ReviewDivider compact />
        </div>
      </div>

      <Image
        src="/assets/images/ai-fullstack-engineering/student-review-decoration.png"
        alt=""
        width={72}
        height={130}
        className="pointer-events-none absolute bottom-16 right-5 hidden h-[130px] w-[72px] object-cover object-left lg:block xl:right-[120px]"
      />
    </section>
  );
}

function ReviewDivider({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex w-full items-center justify-center ${compact ? "max-w-[640px]" : "max-w-[552px]"}`}>
      <Image
        src="/assets/images/ai-fullstack-engineering/student-review-divider.svg"
        alt=""
        width={204}
        height={1}
        className="hidden h-px min-w-0 flex-1 object-fill sm:block"
      />
      <div className={`${exo.className} shrink-0 border border-[#f25e25] px-4 py-3 text-center text-[14px] font-bold tracking-[-0.2px] text-[#181c23] sm:px-5 sm:text-[18px] lg:text-[20px] lg:tracking-[-0.4px]`}>
        STUDENT REVIEW
      </div>
      <Image
        src="/assets/images/ai-fullstack-engineering/student-review-divider.svg"
        alt=""
        width={204}
        height={1}
        className="hidden h-px min-w-0 flex-1 object-fill sm:block"
      />
    </div>
  );
}

