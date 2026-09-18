import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

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
                width={480}
                height={62}
                className="pointer-events-none absolute left-1/2 top-0 h-[62px] w-[480px] max-w-[110%] -translate-x-1/2 select-none object-fill"
              />
            </span>{" "}
            I don&apos;t want you to be like:
          </h2>

          <div className="grid w-full max-w-[1040px] grid-cols-1 items-stretch gap-6 text-left md:grid-cols-2 lg:gap-8">
            <BlackWarningCard
              number="01"
              text="Those who see these many AI related job opportunities and only wish a zillion times that they could land one. They never get past wishing (if only wishes were horses ??)"
              className="md:-rotate-3"
            />
            <BlackWarningCard
              number="02"
              text="Those learning AI the wrong way, who then pitifully end up unable to land these highly paid jobs."
              className="md:rotate-3"
            />
          </div>

          <p
            className={`${melodrama.className} w-full text-left text-[30px] font-bold leading-tight tracking-[-0.9px] text-black sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
          >
            I want you to be <span className="text-[#f25e25]">that person</span>
          </p>

          <div className="relative w-full max-w-[1077px] overflow-hidden rounded-[14px] bg-[#fe6700] px-6 py-10 shadow-[0px_1px_12px_0px_rgba(0,0,0,0.12)] sm:px-10 lg:min-h-[673px] lg:px-[72px] lg:py-[84px]">
            <Image
              src="/assets/images/ai-fullstack-engineering/two-sets-orbit.svg"
              alt=""
              width={295}
              height={287}
              className="pointer-events-none absolute -bottom-10 -right-12 h-[287px] w-[295px] rotate-[-92deg] opacity-80"
            />

            <ol
              className={`${exo.className} relative z-10 space-y-6 text-left text-[17px] font-medium leading-[1.45] text-[#f5f5f5] sm:text-[18px] lg:max-w-[700px] lg:text-[20px] lg:leading-[1.7]`}
            >
              {[
                "That desires,",
                "Take action to learn",
                "Learns AI engineering the right way",
                "And ends up landing job faster than others.",
              ].map((item, index) => (
                <li key={item} className="flex gap-4">
                  <NumberPill value={String(index + 1).padStart(2, "0")} />
                  <span className={index === 2 ? "font-bold" : undefined}>
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            <div
              className={`${exo.className} relative z-10 mt-12 max-w-[945px] space-y-5 whitespace-pre-wrap lg:space-y-6 text-left text-[17px] font-normal leading-[1.45] text-[#f5f5f5] sm:text-[18px] lg:mt-20 lg:text-[20px] lg:leading-[1.6]`}
            >
              <p>Now, Ask yourself this question,</p>
              <p className="my-6 font-bold lowercase text-white">
                WHAT COULD HAPPEN IF I SPENT THE NEXT 10 MONTHS DELIBERATELY
                BUILDING THE SKILLS BEHIND THESE ROLES?
              </p>
              <p>The answer seems obvious</p>
            </div>
          </div>

          <a
            href="#ai-engineering-path"
            className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-10 py-5 text-[15px] text-white sm:text-[16px] shadow-[0px_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01]`}
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

        <div className="flex items-center justify-center">
          <p className="rotate-[-5deg] text-center text-[20px] tracking-[0.2px] text-[#181c23] lg:text-[24px]">
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
      </div>

      <div className="bg-gradient-to-b from-white to-[rgba(248,100,50,0)] px-4 pb-20 pt-10 sm:px-8 lg:px-12 xl:px-16 lg:pb-[120px]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-[120px]">
          <p
            className={`${exo.className} max-w-[1163px] text-center text-[17px] font-normal leading-[1.55] tracking-[0.2px] text-[#181c23] lg:text-[20px] lg:leading-[1.6]`}
          >
            Because that births another question that you must answer before you
            start your journey{" "}
            <strong className="text-[19px] font-bold italic lg:text-[22px]">
              so you don&apos;t end up miserable and unemployable like others.
            </strong>
          </p>

          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
            <QuestionCard
              number="01"
              image="/assets/images/ai-fullstack-engineering/question-card-people.png"
              title="Who are the people getting these high paying AI jobs?"
              body="Humans with 1 head, strong determination, right systems and right mentorship."
            />
            <QuestionCard
              number="02"
              image="/assets/images/ai-fullstack-engineering/question-card-skills.png"
              title="What skills do they have that actually gets them hired?"
              body="This is the first best question anyone who would succeed must answer and use as a map. You see, Hiring Managers are looking for those with the right skills, right experience (doesn't have to be work experience) and right soft skills."
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
                className="pointer-events-none absolute left-1/2 top-0 h-[62px] w-[357px] max-w-[112%] -translate-x-1/2 select-none object-fill"
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
}: {
  number: string;
  text: string;
  className?: string;
}) {
  return (
    <article
      className={`relative flex min-h-[238px] flex-col justify-center rounded-[18px] bg-[#191919] px-7 py-8 text-[#f5f5f5] shadow-[0px_14px_24px_rgba(0,0,0,0.18)] sm:px-9 lg:min-h-[282px] lg:px-10 ${className}`}
    >
      <h3 className="mb-4 rotate-[-2deg] text-[24px] font-bold uppercase leading-none tracking-[0.6px] text-white lg:text-[30px]">
        {number} Sets of People
      </h3>
      <p
        className={`${exo.className} max-w-[430px] text-[17px] font-medium leading-[1.55] tracking-[0.2px] text-[#f2f2f2] lg:text-[20px] lg:leading-[1.5]`}
      >
        {text}
      </p>
    </article>
  );
}

function NumberPill({ value }: { value: string }) {
  return (
    <span className="relative mt-2 flex h-10 w-14 shrink-0 items-center justify-center">
      <Image
        src="/assets/images/ai-fullstack-engineering/two-sets-pill.svg"
        alt=""
        fill
        sizes="56px"
        className="object-fill"
      />
      <span className="relative text-[16px] font-bold text-[#f25e25]">
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
}: {
  number: string;
  image: string;
  title: string;
  body: string;
}) {
  return (
    <article className="relative min-h-[520px] rounded-[14px] bg-white px-8 pb-10 pt-24 shadow-[0px_1px_6px_rgba(0,0,0,0.12)] lg:min-h-[606px] lg:px-11">
      <div className="absolute -top-12 left-11 flex size-[100px] items-center justify-center rounded border border-[#ff6b00] bg-white text-[36px] font-bold tracking-[0.2px] text-black shadow-[0px_0px_6px_0px_rgba(248,100,50,0.25)]">
        {number}
      </div>
      <Image
        src={image}
        alt=""
        width={115}
        height={115}
        className="mb-10 size-[115px] object-cover"
      />
      <h3
        className={`${melodrama.className} mb-8 text-[30px] font-bold leading-[1.25] tracking-[0.4px] text-black lg:text-[44px] lg:leading-[1.4]`}
      >
        {" "}
        {title}
      </h3>
      <p
        className={`${exo.className} text-justify text-[17px] leading-[1.5] tracking-[-0.319px] text-black lg:text-[20px] lg:leading-[1.45]`}
      >
        {body}
      </p>
    </article>
  );
}
