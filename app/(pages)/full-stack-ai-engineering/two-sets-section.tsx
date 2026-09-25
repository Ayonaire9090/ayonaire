import Image from "next/image";
import { exo, salt , melodrama, exoMedium } from "@/app/fonts";

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Generative AI",
  "LLMs",
  "RAG",
  "Vector Databases",
  "LangChain",
  "LangGraph",
  "Agentic AI",
  "Multi-Agent Systems",
  "APIs",
  "Git/GitHub",
  "Docker",
  "Cloud",
  "MLOps/LLMOps",
  "AI Evaluation",
  "Security",
  "Production AI Engineering",
  "System Design",
  "Problem-Solving",
];

export default function TwoSetsSection() {
  return (
    <section className="bg-[#fdfbf9]">
      <div className="mx-auto flex w-full max-w-[1288px] flex-col items-center gap-16 px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:gap-20 lg:py-20">
        <div className="relative flex w-full max-w-[1120px] flex-col items-center gap-12 text-center lg:gap-14">
          <h2
            className={`${melodrama.className} relative text-[30px] font-bold leading-[1.12] tracking-[-0.95px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
          >
            There are{" "}
            <span className="relative inline-block text-[#f25e25]">
              two sets of people
              <Image
                src="/assets/images/ai-fullstack-engineering/two-sets-highlight.svg"
                alt=""
                width={380}
                height={62}
                className="pointer-events-none absolute left-0 -bottom-1 sm:-bottom-[6px] h-7 sm:h-10 md:h-12 lg:h-[62px] w-full select-none object-fill"
              />
            </span>{" "}
            I don&apos;t want you to be like:
          </h2>

          <div className="grid w-full max-w-[1040px] grid-cols-1 items-start gap-6 text-left md:grid-cols-2 lg:gap-8">
            <BlackWarningCard
              number="01"
              text="Those who see these many AI related job opportunities and only wish a zillion times that they could land one. They never get past wishing (if only wishes were horses ðŸ˜œ)"
            />
            <BlackWarningCard
              number="02"
              text="Those learning AI the wrong way, who then pitifully end up unable to land these highly paid jobs."
              className="md:translate-y-[38px]"
              rotate180
            />
          </div>

          <p
            className={`${melodrama.className} w-full text-left text-[30px] font-bold leading-tight tracking-[-0.9px] text-black sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
          >
            I want you to be <span className="text-[#f25e25]">that person</span>
          </p>

          <div className="relative box-border flex-none order-2 flex-grow-0 w-full max-w-[1077px] lg:w-[1077px] lg:h-[673px] overflow-hidden rounded-[14.1571px] bg-[#FE6700] px-6 py-10 shadow-[0px_1px_12px_rgba(0,0,0,0.12)] sm:px-10 lg:px-[72px] lg:py-[64px] flex flex-col justify-between">
            <Image
              src="/assets/images/ai-fullstack-engineering/two-sets-orbit.svg"
              alt=""
              width={295}
              height={287}
              className="pointer-events-none absolute -bottom-10 -right-12 h-[287px] w-[295px] rotate-[-92deg] opacity-80"
            />

            <ol
              className={`${exoMedium.className} relative z-10 space-y-5 text-left text-[18px] font-medium leading-[1.4] text-white sm:text-[20px] lg:space-y-6 lg:max-w-[750px] lg:text-[22px] lg:leading-[1.5]`}
            >
              {[
                "That desires,",
                "Take action to learn",
                "Learns AI engineering the right way",
                "And ends up landing job faster than others.",
              ].map((item, index) => (
                <li key={item} className="flex items-center gap-4 sm:gap-5">
                  <NumberPill value={String(index + 1).padStart(2, "0")} />

                  <span
                    className={
                      index === 2
                        ? `${exo.className} font-bold text-white`
                        : "text-white/95"
                    }
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            <div
              className={`${exo.className} relative z-10 max-w-[945px] space-y-4 text-left text-[17px] font-normal leading-[1.45] text-white sm:text-[18px] lg:text-[20px] lg:leading-[1.6]`}
            >
              <p className={`${exoMedium.className} text-white/90`}>
                Now, Ask yourself this question,
              </p>
              <p className="my-4 font-bold text-white uppercase tracking-wide">
                WHAT COULD HAPPEN IF I SPENT THE NEXT 10 MONTHS DELIBERATELY
                BUILDING THE SKILLS BEHIND THESE ROLES?
              </p>
              <p className={`${exoMedium.className} text-white/90`}>
                The answer seems obvious
              </p>
            </div>
          </div>

          <a
            href="https://chat.whatsapp.com/HltOtTd5VrHJONFYDVb9VT?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className={`${exoMedium.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-10 py-5 text-[15px] text-white sm:text-[16px] shadow-[0px_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01]`}
          >
            SHOW ME THE AI ENGINEERING PATH
            <Image
              src="/assets/images/ai-fullstack-engineering/two-sets-cta-arrow.svg"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />
          </a>
        </div>

      </div>

      <div className="relative w-full bg-[linear-gradient(180deg,_#fdfbf9_0%,_#ffd9c7_12%,_#ffd9c7_88%,_#fff5ee_100%)] px-4 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 xl:px-16 lg:pb-[120px]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-16">
          <div className="flex items-center justify-center">
            <p className={`${salt.className} rotate-[-5deg] text-center text-[20px] tracking-[0.2px] text-[#181c23] lg:text-[24px]`}>
              BUT WAIT?..
            </p>
            <Image
              src="/assets/images/ai-fullstack-engineering/but-wait-hand.png"
              alt=""
              width={154}
              height={154}
              className="size-[120px] object-cover lg:size-[154px]"
            />
          </div>

          <p
            className={`${exoMedium.className} max-w-[1163px] text-left text-[18px] font-normal leading-[1.55] tracking-[0.2px] text-[#181c23] sm:text-center lg:text-[22px] lg:leading-[1.6]`}
          >
            Because that births another question that you must answer before you
            start your journey{" "}
            <strong className={`${exo.className} text-[18px] font-bold italic lg:text-[22px]`}>
              so you don&apos;t end up miserable and unemployable like others.
            </strong>
          </p>

          <div className="grid w-full grid-cols-1 gap-16 sm:gap-10 lg:grid-cols-2 mt-2">
            <QuestionCard
              number="01"
              image="/assets/images/ai-fullstack-engineering/question-card-people.png"
              title="Who are the people getting these high paying AI jobs?"
              body="Humans with 1 head, strong determination, right systems and right mentorship."
              badgeRotation="rotate-0"
              cardClassName="border border-white/80"
            />
            <QuestionCard
              number="02"
              image="/assets/images/ai-fullstack-engineering/question-card-skills.png"
              title="What skills do they have that actually gets them hired?"
              body="This is the first best question anyone who would succeed must answer and use as a map. You see, Hiring Managers are looking for those with the right skills, right experience (doesn't have to be work experience) and right soft skills."
              badgeRotation="rotate-[4deg]"
              cardClassName="border border-[#ff6b00]/25 shadow-[0px_4px_24px_rgba(248,100,50,0.08)]"
            />
          </div>
        </div>
      </div>

      <div
        id="ai-engineering-path"
        className="bg-[#fff5ee] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]"
      >
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-14 lg:gap-20">
          <h2
            className={`${melodrama.className} relative text-[30px] font-bold leading-tight tracking-[-0.95px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
          >
            AI Engineering{" "}
            <span className="relative inline-block text-[#f25e25]">
              requires skills
              <Image
                src="/assets/images/ai-fullstack-engineering/skills-highlight.svg"
                alt=""
                width={357}
                height={62}
                className="pointer-events-none absolute left-1/2 top-0.5 sm:top-0 h-7 sm:h-10 md:h-12 lg:h-[62px] w-[357px] max-w-[112%] -translate-x-1/2 select-none object-fill"
              />
            </span>{" "}
            such as:
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-x-10 lg:gap-y-8">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="relative flex min-h-[96px] items-center overflow-hidden rounded-[14px] bg-white px-6 py-5 shadow-[0px_1px_6px_rgba(0,0,0,0.12)] lg:min-h-[122px]"
              >
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[44px] font-bold leading-none tracking-[-0.166px] text-[#f25e25] opacity-20 lg:text-[72px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative ml-[96px] text-[18px] font-bold tracking-[-0.319px] text-black lg:ml-[120px] lg:text-[22px]">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlackWarningCard({
  number,
  text,
  className = "",
  rotate180 = false,
}: {
  number: string;
  text: string;
  className?: string;
  rotate180?: boolean;
}) {
  return (
    <article
      className={`relative w-full aspect-[1.53/1] overflow-visible ${className}`}
    >
      {/* CUSTOM CARD SHAPE */}
      <svg
        className={`absolute inset-0 h-full w-full ${rotate180 ? "rotate-180" : ""}`}
        viewBox="0 0 540 350"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 50 8
            C 28 6, 17 18, 14 42

            L 1 302
            C 0 323, 11 332, 34 333

            L 500 342
            C 520 343, 530 331, 531 310

            L 540 68
            C 541 48, 531 39, 510 37

            L 50 8
            Z
          "
          fill="#191919"
        />
      </svg>

      {/* CONTENT */}
      <div
        className="
          absolute
          left-[7.5%]
          right-[7%]
          top-[18%]
        "
      >
        <h3
          className={`
            ${salt.className}
            mb-[30px]
            text-[21px]
            font-normal
            uppercase
            leading-none
            tracking-[0.2px]
            text-white

            sm:text-[20px]
            lg:text-[25px]
          `}
        >
          {number} Sets of People
        </h3>

        <p
          className={`
            ${exoMedium.className}
            max-w-[430px]
            text-[13px]
            font-normal
            leading-[1.48]
            tracking-[-0.1px]
            text-[#f4f4f4]

            sm:text-[15px]
            lg:text-[17px]
          `}
        >
          {text}
        </p>
      </div>
    </article>
  );
}

function NumberPill({ value }: { value: string }) {
  return (
    <span className="relative flex h-11 w-[60px] shrink-0 items-center justify-center sm:h-12 sm:w-[66px]">
      <Image
        src="/assets/images/ai-fullstack-engineering/two-sets-pill.svg"
        alt=""
        fill
        sizes="66px"
        className="object-fill"
      />
      <span className="relative pr-2.5 text-[17px] font-bold text-[#fe6700] sm:text-[19px]">
        {value}
      </span>
    </span>
  );
}

function QuestionCard({
  number,
  image,
  title,
  body,
  badgeRotation = "rotate-0",
  badgeClassName = "",
  cardClassName = "",
}: {
  number: string;
  image: string;
  title: string;
  body: string;
  badgeRotation?: string;
  badgeClassName?: string;
  cardClassName?: string;
}) {
  return (
    <article
      className={`relative min-h-[480px] rounded-[16px] bg-white px-7 pb-10 pt-20 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] sm:px-9 sm:pt-24 lg:min-h-[580px] lg:rounded-[20px] lg:px-11 ${cardClassName}`}
    >
      <div
        className={`absolute -top-7 left-8 flex h-[58px] w-[70px] items-center justify-center rounded-[10px] border-[1.5px] border-[#ff6b00] bg-white text-[22px] font-bold tracking-[0.2px] text-black shadow-[0px_2px_8px_0px_rgba(248,100,50,0.18)] sm:-top-10 sm:left-11 sm:h-[82px] sm:w-[96px] sm:rounded-[12px] sm:text-[32px] lg:h-[92px] lg:w-[106px] lg:text-[36px] transition-transform duration-200 ${badgeRotation} ${badgeClassName}`}
      >
        {number}
      </div>
      <Image
        src={image}
        alt=""
        width={115}
        height={115}
        className="mb-8 size-[90px] object-contain sm:size-[105px] lg:mb-10 lg:size-[115px]"
      />

      <h3
        className={`${exo.className} mb-5 text-[20px] font-bold leading-[1.3] tracking-[0.2px] text-black sm:text-[25px] lg:mb-7 lg:text-[30px] lg:leading-[1.32]`}
      >
        {title}
      </h3>

      <p
        className={`${exoMedium.className} text-left text-[14px] font-normal leading-[1.75] tracking-[0.1px] text-[#2d3748] sm:text-[15px] lg:text-[16px] lg:leading-[1.85]`}
      >
        {body}
      </p>
    </article>
  );
}

