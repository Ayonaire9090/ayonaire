import Image from "next/image";
import { exo, exoMedium, melodrama, rope } from "@/app/fonts";

const routes = [
  {
    title: "Traditional Route",
    tone: "soft",
    items: [
      "Best if you are starting from scratch",
      "Start with Data Science foundations",
      "Python",
      "SQL & Databases",
      "Statistics",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "MLOps / Cloud / CI/CD",
      "Then Generative AI",
      "Then Agentic AI",
      "Then Production AI",
    ],
    recommended:
      "Complete beginners and people who want the strongest foundation",
  },
  {
    title: "Modern Route",
    tone: "strong",
    items: [
      "Best if you already have the foundations",
      "Start with Generative AI",
      "Python knowledge required",
      "Machine Learning knowledge required",
      "NLP knowledge required",
      "Deep Learning knowledge required",
      "Generative AI",
      "LLM Applications",
      "RAG",
      "Vector Databases",
      "Agentic AI",
      "MCP",
      "Deployment / Cloud",
    ],
    recommended:
      "People who already have Python and ML fundamentals and want to move faster into GenAI and Agentic AI",
  },
  {
    title: "Advanced Route",
    tone: "soft",
    items: [
      "Best if you are already experienced",
      "Learn multiple paths in parallel",
      "Strong foundation already required",
      "Data Science / Classical AI",
      "Generative AI",
      "Agentic AI",
      "Machine Learning",
      "Deep Learning",
      "NLP & Computer Vision",
      "LLMs & RAG",
      "Agentic AI",
      "MCP",
      "Multi-Agent Systems",
    ],
    recommended:
      "Experienced AI professionals, technical specialists and leaders who can learn several areas together",
  },
];
const explanationCards = [
  {
    number: "1",
    title: "Traditional Route",
    body:
      "If you are starting from scratch, we recommend the Traditional Route. You first build the foundation across Python, Data, ML, DL, NLP, NLP, CV then progress into Gen AI, RAG, Agentic AI and Production AI Engineering.",
  },
  {
    number: "2",
    title: "Modern Route",
    body:
      "The Modern Route is better suited to people who already have foundational knowledge in Python, ML, NLP and DL and want to move faster into Generative AI and Agentic AI.",
  },
  {
    number: "3",
    title: "Advanced Route",
    body:
      "The Advanced Route is for more experienced professionals who already have strong foundations and can learn multiple areas in parallel.",
  },
];

const challengeItems = [
  "what to learn first,",
  "what comes next,",
  "what to focus on,",
  "what to ignore for now,",
  "what projects to build,",
  "how to gain practical experience and",
  "how to turn everything you're learning into proof of work that can help you compete for AI Engineering roles.",
];

const stuckItems = [
  "They have 17 browser tabs open.",
  "Five different YouTube playlists.",
  "A couple of courses they've started but never finished.",
];

export default function LearningPathSection() {
  return (
    <>
      {/* SECTION 1: TOP ROUTES & EXPLANATION CARDS */}
      <section className="bg-[#fff5ee] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-16 lg:gap-20">
          <div className="flex w-full max-w-[1091px] flex-col items-center gap-8 text-center lg:gap-10">
            <p
              className={`${exoMedium.className} text-left text-[17px] font-medium leading-[1.45] tracking-[0.4px] text-[#5a4136] sm:text-center sm:text-[20px] lg:text-[28px]`}
            >
              Right at the top, it says proficiency in Python right???
            </p>

            <h2
              className={`${melodrama.className} text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
            >
              So, what does the{" "}
              <span className="relative inline-block text-[#f25e25]">
                <span className="relative z-10">path actually look like?</span>
                <Image
                  src="/assets/images/ai-fullstack-engineering/learning-path-highlight.svg"
                  alt=""
                  width={562}
                  height={68}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-7 sm:h-11 md:h-14 lg:h-[68px] w-[min(562px,110%)] -translate-x-1/2 -translate-y-1/2 select-none object-fill"
                />
              </span>
            </h2>

            <p
              className={`${exo.className} text-[18px] font-bold leading-[1.45] tracking-[0.4px] text-[#121315] sm:text-[22px] lg:text-[32px]`}
            >
              3-part path to learning AI....{" "}
              <span className="font-medium">We Recommend these 3 Routes:</span>
            </p>
          </div>

          <div className="grid w-full gap-6 lg:grid-cols-3">
            {routes.map((route) => (
              <RouteCard key={route.title} route={route} />
            ))}
          </div>

          <div
            className={`${exo.className} max-w-[900px] space-y-5 text-left text-[17px] leading-[1.55] tracking-[0.2px] text-[#181c23] sm:text-center lg:text-[20px]`}
          >
            <p className="font-bold">And through all of this,</p>
            <p className={`${exoMedium.className}`}>
              you're not learning just to memorise syntax, or theory
            </p>
            <p className="font-bold underline">
              You're learning how to use these skills to solve real-world
              problems, build working AI systems and create projects you can
              actually show.
            </p>
          </div>

          <div className="w-full space-y-12 lg:space-y-16">
            <h3
              className={`${exo.className} text-[24px] font-bold leading-[1.3] tracking-[0.4px] text-[#5a4136] lg:text-[32px]`}
            >
              And this is important:
            </h3>

            <div className="grid gap-8 md:grid-cols-2">
              {explanationCards.map((card) => (
                <article
                  key={card.number}
                  className="relative min-h-[220px] rounded-[24px] bg-white px-6 pb-8 pt-14 shadow-[0_1px_12px_rgba(0,0,0,0.12)] sm:min-h-[260px] sm:px-8 lg:min-h-[320px] xl:min-h-[350px] lg:rounded-[40px] lg:px-10 lg:pb-10 lg:pt-20"
                >
                  <NumberBadge value={card.number} />
                  <Image
                    src="/assets/images/ai-fullstack-engineering/learning-path-icon.png"
                    alt=""
                    width={80}
                    height={80}
                    className="mb-6 size-14 object-cover lg:absolute lg:left-5 lg:top-[112px] lg:size-20"
                  />
                  <div className="lg:pl-[118px]">
                    <h4
                      className={`${exo.className} mb-4 text-[22px] font-bold leading-[1.25] tracking-[0.5px] text-[#181c23] lg:text-[28px]`}
                    >
                      {card.title}
                    </h4>
                    <p
                      className={`${exoMedium.className} text-left text-[16px] font-medium leading-[1.55] tracking-[0.2px] text-[#5a4136] lg:text-[20px] lg:leading-[1.6]`}
                    >
                      {card.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FULL BLEED WHITE SECTION (Match Screenshot 1) */}
      <section className="w-full bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
        <div className="mx-auto max-w-[1040px] space-y-6 text-left text-[17px] leading-[1.6] tracking-[0.2px] text-[#5a4136] sm:text-[19px] lg:text-[22px] lg:leading-[1.65]">
          <p
            className={`${exo.className} text-[20px] font-bold text-[#181c23] sm:text-[24px] lg:text-[28px]`}
          >
            So the journey looks like this:
          </p>

          <p
            className={`${exo.className} font-bold tracking-[0.5px] text-[#181c23]`}
          >
            TRADITIONAL ROUTE &rarr; MODERN ROUTE &rarr; ADVANCED ROUTE
          </p>

          <p className={`${exoMedium.className} text-[#5a4136]`}>
            And if you&apos;re thinking:
          </p>

          <p className={`${exo.className} font-bold text-[#181c23]`}>
            &ldquo;Wait... I need to learn ALL of that?&rdquo;
          </p>

          <p className={`${exoMedium.className} text-[#5a4136]`}>Yes</p>

          <p className={`${exoMedium.className} text-[#5a4136]`}>
            <span className="border-b border-[#5a4136]">But not</span>{" "}
            <strong
              className={`${exo.className} border-b-2 border-[#181c23] font-bold text-[#181c23]`}
            >
              all at once.
            </strong>
          </p>

          <p className={`${exoMedium.className} text-[#5a4136] leading-[1.65]`}>
            You are not supposed to wake up tomorrow and try to learn Python,
            SQL, ML, RAG, AI Agents, Cloud, APIs and deployment in one sitting.
            The real challenge is not knowing the list of skills.
          </p>
        </div>
      </section>

      {/* SECTION 3: BOTTOM CHALLENGE & STUCK ITEMS */}
      <section className="bg-[#fff5ee] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-16 lg:gap-20">
          <div className="w-full space-y-16">
            <div className="rounded-[24px] bg-[#fdd8cc] p-6 sm:p-10 lg:rounded-[40px]">
              <p
                className={`${exoMedium.className} mb-8 text-[20px] font-bold leading-[1.4] tracking-[0.6px] text-[#5a4136] underline lg:text-[28px]`}
              >
                The real challenge is knowing:
              </p>
              <ol className="space-y-5">
                {challengeItems.map((item, index) => (
                  <NumberedItem key={item} index={index + 1} text={item} />
                ))}
              </ol>
              <p
                className={`${exo.className} mt-8 text-left text-[20px] leading-[1.45] tracking-[0.5px] text-[#181c23] sm:text-center lg:text-[32px]`}
              >
                That is where <strong>STRUCTURE Matters</strong>.
              </p>
            </div>

            <div className="space-y-9 text-center">
              <h3
                className={`${melodrama.className} text-[28px] font-bold leading-[1.25] tracking-[0.6px] text-[#181c23] lg:text-[32px]`}
              >
                And unfortunately, that's where a lot of people get stuck...
              </h3>

              <ol className="mx-auto max-w-[1090px] space-y-5 text-left">
                {stuckItems.map((item, index) => (
                  <NumberedItem
                    key={item}
                    index={index + 1}
                    text={item}
                    compact
                  />
                ))}
              </ol>

              <div
                className={`${exoMedium.className} space-y-6 text-left text-[17px] font-medium leading-[1.65] tracking-[0.3px] text-[#5a4136] lg:text-[28px] lg:leading-[1.55] lg:tracking-[1px]`}
              >
                <p>
                  And no clear idea of <strong>what to do next.</strong> Because
                  knowing <strong>what</strong> you need to learn and Knowing{" "}
                  <strong>how you need to learn</strong> are two different
                  things.
                </p>
                <p>
                  And that's exactly why I don't want you to look at this
                  roadmap and feel like you now have another giant mountain to
                  climb.
                </p>
              </div>

              <p
                className={`${exoMedium.className} text-left text-[20px] font-medium leading-[1.4] tracking-[0.4px] text-[#5a4136] sm:text-center lg:text-[32px]`}
              >
                Which brings us to this:
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function RouteCard({ route }: { route: (typeof routes)[number] }) {
  const isStrong = route.tone === "strong";

  return (
    <article
      className={`flex min-w-0 flex-col items-center gap-6 overflow-hidden rounded-[12px] border-2 bg-white px-5 pb-8 ${
        isStrong
          ? "border-[rgba(248,100,50,0.25)] shadow-[0_1px_12px_rgba(248,100,50,0.25)]"
          : "border-[#ebebeb]"
      }`}
    >
      <div
        className={`flex h-[60px] w-[calc(100%+40px)] items-center justify-center ${
          isStrong ? "bg-[rgba(248,100,50,0.99)]" : "bg-[rgba(248,100,50,0.25)]"
        }`}
      >
        <h3
          className={`${exo.className} text-[22px] font-bold uppercase leading-none tracking-[1.4px] text-[#181c23] lg:text-[28px]`}
        >
          {route.title}
        </h3>
      </div>

      <ul className="flex w-full flex-col gap-4">
        {route.items.map((item, index) => (
          <li
            key={`${route.title}-${index}-${item}`}
            className="flex items-center gap-4 border-b border-[#e0e0e0] pb-3"
          >
            <BulletPair />
            <span
              className={`${rope.className} text-[16px] font-medium leading-[1.35] tracking-[0.3px] text-[#5a4136] lg:text-[20px]`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto w-full rounded-[8px] border border-[#ffdcc4] bg-[#f8f3ef] p-3 text-[#5a4136]">
        <p
          className={`${rope.className} text-[16px] font-bold leading-[1.4] lg:text-[20px]`}
        >
          Recommended for:
        </p>
        <p
          className={`${exoMedium.className} mt-2 text-[15px] font-medium leading-[1.45] lg:text-[18px]`}
        >
          {route.recommended}
        </p>
      </div>
    </article>
  );
}

function NumberBadge({ value }: { value: string }) {
  return (
    <span className="absolute left-6 top-[-22px] flex size-16 rotate-[3deg] items-center justify-center rounded-[4px] border border-[#ff6b00] bg-white text-[28px] font-bold tracking-[1px] text-black shadow-[0_0_6px_rgba(248,100,50,0.25)] sm:size-[76px] sm:text-[34px] lg:size-[96px] lg:text-[48px]">
      {value}
    </span>
  );
}

function NumberedItem({
  index,
  text,
  compact = false,
}: {
  index: number;
  text: string;
  compact?: boolean;
}) {
  return (
    <li className="flex items-start gap-5">
      <span className="relative mt-1 flex h-[32px] w-[45px] shrink-0 items-center justify-center text-[15px] font-bold text-white lg:h-[44px] lg:w-[62px] lg:text-[24px]">
        <Image
          src="/assets/images/ai-fullstack-engineering/learning-path-tag-orange.svg"
          alt=""
          fill
          sizes="62px"
          className="object-fill"
        />
        <span className="relative z-10">{String(index).padStart(2, "0")}</span>
      </span>
      <span
        className={`${exoMedium.className} text-[17px] font-medium leading-[1.55] tracking-[0.2px] text-[#181c23] ${
          compact ? "lg:text-[24px]" : "lg:text-[28px] lg:leading-[1.65]"
        }`}
      >
        {text}
      </span>
    </li>
  );
}

function BulletPair() {
  return (
    <span className="flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-black" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}
