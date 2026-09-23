import Image from "next/image";
import { exo, exoMedium, melodrama, salt } from "@/app/fonts";

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
    <section className="bg-[rgba(255,220,196,0.28)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[minmax(300px,542px)_minmax(0,1fr)] lg:gap-10">
        {/* Left Content */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <h2
            className={`${melodrama.className} max-w-[543px] text-[24px] font-bold leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[32px] lg:text-[46px] lg:leading-[1.25]`}
          >
            But... this is not for everyone
          </h2>

          <p
            className={`${exo.className} mt-8 max-w-[542px] text-[22px] font-semibold leading-[1.5] tracking-[0.4px] text-[#181c23] lg:text-[32px] lg:leading-[1.78]`}
          >
            Is AI Engineering 2.0{" "}
            <span className="text-[#ff6b00]">right for you?</span>
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-14 lg:gap-16">
          <ChecklistGroup
            eyebrow="This is for you if:"
            items={forYouItems}
          />

          <ChecklistGroup
            eyebrow="This is not for you if:"
            items={notForYouItems}
          />
        </div>
      </div>

      {/* Bottom Message */}
      <p
        className={`${melodrama.className} mx-auto mt-16 max-w-[1030px] text-center text-[24px] font-bold leading-[1.55] tracking-[0.3px] text-[#181c23] lg:mt-20 lg:text-[32px] lg:leading-[1.78]`}
      >
        You do not need technical experience before joining... But you do need
        the discipline, grit and commitment to become Job Ready.
      </p>
    </section>
  );
}

function ChecklistGroup({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-8 lg:gap-9">
      {/* Eyebrow */}
      <p
        className={`${salt.className} text-[18px] font-semibold uppercase tracking-[0.08em] text-[#ff6b00] lg:text-[24px]`}
      >
        {eyebrow}
      </p>

      {/* Cards */}
      <div className="flex flex-col gap-6 lg:gap-8">
        {items.map((item) => (
          <article
            key={item}
            className="group relative flex aspect-[702/336] w-full max-w-[655px] items-center"
          >
            {/* Card Background */}
            <Image
              src="/assets/images/ai-fullstack-engineering/right-fit-card.svg"
              alt=""
              fill
              sizes="(min-width: 1024px) 655px, 100vw"
              className="pointer-events-none object-contain"
            />

            {/* Card Content */}
            <div
              className="relative z-10 flex w-full items-center gap-7 px-6 py-5 sm:gap-9 sm:px-8 sm:py-6 lg:gap-11 lg:px-10 lg:py-6"
              style={{ transform: "rotate(5deg)" }}
            >
              {/* Checkmark */}
              <div className="relative size-10 shrink-0 sm:size-12">
                {/* Default / inactive check */}
                <Image
                  src="/assets/images/ai-fullstack-engineering/check2.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain transition-opacity duration-200 group-hover:opacity-0"
                />

                {/* Hover / active check */}
                <Image
                  src="/assets/images/ai-fullstack-engineering/check1.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>

              {/* Text */}
              <p
                className={`${exo.className} w-[60%] text-[12px] leading-[1.45] tracking-[0.2px] text-[#181c23] sm:text-[17px] lg:text-[20px] lg:leading-[1.5]`}
              >
                {item}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}