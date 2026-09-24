import Image from "next/image";
import { exo, melodrama, rope, salt } from "@/app/fonts";

const forYouItems = [
  "You are serious about building a real career in AI/ML Engineering.",
  "You are willing to commit consistently to classes, assignments, practice and projects.",
  "You are a complete beginner, career switcher, graduate or working professional ready to learn.",
  "You want more than a certificate. You want practical skills, projects and proof of work.",
  "You are ready to build your GitHub, portfolio and practical experience.",
  "You want to become job-ready, work-ready and globally competitive.",
  "You are willing to learn, get stuck, debug, improve and keep going.",
];

const notForYouItems = [
  "You are looking for a shortcut without putting in the work.",
  "You only want another certificate to add to your collection.",
  "You want a passive course you can watch without practising.",
  "You are unwilling to commit consistently for the full journey.",
  "You do not intend to complete assignments, build projects or practise outside class.",
  "You expect Ayonaire to guarantee a job without you doing your own part.",
  "You are not ready to stretch beyond your comfort zone.",
];

export default function RightFitSection() {
  return (
    <section className="bg-[rgba(255,220,196,0.28)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[minmax(300px,542px)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <h2 className={`${melodrama.className} max-w-[543px] text-[24px] font-bold leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[32px] lg:text-[46px] lg:leading-[1.25]`}>
            But... this is not for everyone
          </h2>
          <p className={`${exo.className} mt-8 max-w-[542px] text-[22px] font-semibold  leading-[1.5] tracking-[0.4px] text-[#181c23] lg:text-[32px] lg:leading-[1.78]`}>
            Is AI Engineering 2.0 <span className="text-[#ff6b00]">right for you?</span>
          </p>
        </div>

        <div className="flex flex-col gap-14 lg:gap-16">
          <ChecklistGroup eyebrow="This is for you if:" items={forYouItems} />
          <ChecklistGroup eyebrow="This is not for you if:" items={notForYouItems} />
        </div>
      </div>

      <p className={`${melodrama.className} mx-auto mt-16 max-w-[1030px] text-center text-[24px] font-bold leading-[1.55] tracking-[0.3px] text-[#181c23] lg:mt-20 lg:text-[32px] lg:leading-[1.78]`}>
        You do not need technical experience before joining... But you do need the discipline, grit and commitment to become Job Ready.
      </p>
    </section>
  );
}

function ChecklistGroup({ eyebrow, items }: { eyebrow: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-8 lg:gap-9">
      <p className={`${salt.className} text-[18px] font-semibold uppercase tracking-[0.08em] text-[#ff6b00] lg:text-[24px]`}>
        {eyebrow}
      </p>
      <div className="flex flex-col gap-6 lg:gap-8">
        {items.map((item) => (
          <article
            key={item}
            className="relative flex min-h-[140px] xs:min-h-[130px] sm:min-h-0 sm:aspect-[702/336] w-full max-w-[655px] items-center"
          >
            <Image
              src="/assets/images/ai-fullstack-engineering/right-fit-card.svg"
              alt=""
              fill
              sizes="(min-width: 1024px) 655px, 100vw"
              className="pointer-events-none object-contain"
            />
            <div
              className="relative z-10 flex w-full items-center gap-3.5 pl-5 pr-3 sm:gap-6 sm:pl-8 sm:pr-6 lg:gap-8 lg:pl-10 lg:pr-8"
              style={{ transform: "rotate(4.38deg)" }}
            >
              <Image
                src="/assets/images/ai-fullstack-engineering/mark.svg"
                alt=""
                width={46}
                height={44}
                className="size-[32px] xs:size-[36px] shrink-0 object-contain sm:size-[46px] lg:size-[58px]"
              />
              <p className={`${rope.className} w-[76%] sm:w-[68%] text-[12px] font-bold leading-[1.6] tracking-[0.3px] text-[#181c23] sm:text-[15px] sm:leading-[1.5] lg:text-[19px] lg:leading-[1.5] xl:text-[20px]`}>
                {item}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}