import Image from "next/image";
import { exo, melodrama, space } from "@/app/fonts";

const pillars = [
  {
    number: "01",
    title: "Build role-ready projects",
    body:
      "You need projects that show you can connect models, data, APIs and product thinking into systems people can actually use.",
    image: "/assets/images/ai-fullstack-engineering/career-system-portfolio.png",
  },
  {
    number: "02",
    title: "Position yourself for AI roles",
    body:
      "You need a profile, portfolio and job-search story that makes hiring teams understand the kind of AI problems you can solve.",
    image: "/assets/images/ai-fullstack-engineering/career-system-positioning.png",
  },
];

export default function CareerFrameworkSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff5ee] px-5 py-16 sm:px-8 lg:px-12 lg:py-[110px] xl:px-16">
      <Image
        src="/assets/images/ai-fullstack-engineering/career-framework-pattern.png"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute right-0 top-10 hidden size-[200px] opacity-40 lg:block"
      />

      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-14 lg:gap-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <p
              className={`${exo.className} text-[15px] font-bold uppercase tracking-[0.16em] text-[#f25e25]`}
            >
              The career part matters too
            </p>
            <h2
              className={`${melodrama.className} max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
            >
              Having the skills is one thing. Building a serious AI career is a
              complete system.
            </h2>
            <div
              className={`${exo.className} space-y-5 text-left text-[17px] leading-[1.65] tracking-[0.2px] text-[#5a4136] sm:text-[18px] lg:text-[20px]`}
            >
              <p>
                The people who win do not stop at learning tools. They build proof,
                package their work properly and make it easy for companies to see
                where they fit.
              </p>
              <p>
                That is why this path does not only show you what to learn. It also
                shows you how to turn that learning into projects, positioning and
                opportunities.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <Image
              src="/assets/images/ai-fullstack-engineering/career-roles-board.png"
              alt="AI engineering roles board"
              width={1122}
              height={1402}
              className="h-auto w-full rounded-[14px] object-contain shadow-[0_18px_48px_rgba(24,28,35,0.12)]"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="relative overflow-hidden rounded-[14px] bg-[#171717] p-6 text-white shadow-[0_14px_36px_rgba(24,28,35,0.12)] sm:p-8 lg:min-h-[360px] lg:p-10"
            >
              <Image
                src="/assets/images/ai-fullstack-engineering/career-framework-card-bg.png"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="pointer-events-none object-cover opacity-95"
              />
              <div className="relative z-10 flex h-full flex-col gap-8">
                <div className="flex items-center justify-between gap-6">
                  <span className="relative flex h-10 w-14 items-center justify-center text-[16px] font-bold text-[#f25e25]">
                    <Image
                      src="/assets/images/ai-fullstack-engineering/career-number-tag.svg"
                      alt=""
                      fill
                      sizes="56px"
                      className="object-fill"
                    />
                    <span className="relative">{pillar.number}</span>
                  </span>
                  <Image
                    src={pillar.image}
                    alt=""
                    width={512}
                    height={512}
                    className="size-16 rounded-[10px] object-cover"
                  />
                </div>

                <div className="mt-auto space-y-4">
                  <h3
                    className={`${melodrama.className} text-[28px] font-bold leading-[1.15] tracking-[-0.4px] lg:text-[36px]`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={`${space.className} text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#f5f5f5] lg:text-[18px]`}
                  >
                    {pillar.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}