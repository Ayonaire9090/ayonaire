import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

const proofCards = [
  { text: "I'm still trying to figure out what to learn.", muted: true },
  { text: "Here's what I've built." },
  { text: "Here's my GitHub." },
  { text: "Here's my portfolio." },
  { text: "Here's the experience I've gained." },
  { text: "Here's the AI system I built." },
  { text: "Here's the role I'm positioning for." },
  { text: "Here's the career I'm building." },
];

export default function RegisteredCompanySection() {
  return (
    <section className="bg-[rgba(255,220,196,0.28)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-14 lg:grid-cols-[minmax(0,557px)_minmax(0,658px)] lg:gap-10">
        <div className="flex flex-col gap-8 lg:gap-10">
          <h2 className={`${melodrama.className} text-[34px] font-bold uppercase leading-[1.15] tracking-[0.3px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[70px] lg:tracking-[0.6px]`}>
            Ayonaire Academy <span className="text-[#f25e25]">is a registered company.</span>
          </h2>

          <div className={`${exo.className} space-y-6 text-[18px] font-normal leading-[1.75] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[63px] lg:tracking-[0.6px]`}>
            <p>Ayonaire Academy is operated by a duly registered Nigerian company.</p>
            <p className="font-semibold uppercase">Company Registration No. 9266377</p>
            <p>We want you knowing exactly who you are learning with, because trust should not disappear the moment payment is made.</p>
            <p>Yes. I&apos;d add the action message closer to the end so it lands harder:</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <p className={`${exo.className} w-full text-center text-[16px] font-bold uppercase leading-[1.5] tracking-[0.6px] text-[#ff6b00] sm:text-[20px] lg:text-left lg:text-[22px]`}>
            Ten months from now, you could say:
          </p>

          <div className="flex w-full flex-col items-center gap-5 sm:gap-7 lg:gap-10">
            {proofCards.map((card, index) => (
              <ProofCard key={card.text} text={card.text} muted={card.muted} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-[1030px] flex-col items-center gap-7 text-center lg:mt-24 lg:gap-9">
        <p className={`${exo.className} text-[20px] font-medium leading-[1.55] tracking-[0.3px] text-[#181c23] sm:text-[24px] lg:text-[32px] lg:leading-[57px] lg:tracking-[0.6px]`}>
          The time will pass either way.
        </p>
        <p className={`${exo.className} text-[20px] font-bold leading-[1.55] tracking-[0.3px] text-[#181c23] sm:text-[24px] lg:text-[32px] lg:leading-[57px] lg:tracking-[0.6px]`}>
          The only question is what you will do with it.
        </p>
        <p className={`${exo.className} text-[22px] font-bold uppercase leading-[1.55] tracking-[0.3px] text-[#181c23] sm:text-[26px] lg:text-[32px] lg:leading-[57px] lg:tracking-[0.6px]`}>
          The next 10 months can <span className="text-[#f25e25]">change the next 10 years</span> of your career.
        </p>

        <a href="#enroll" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-center text-[13px] font-bold uppercase leading-[1.45] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[18px]`}>
          Start my AI career transition
          <Image
            src="/assets/images/ai-fullstack-engineering/registered-company-button-arrow.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </a>
      </div>
    </section>
  );
}

function ProofCard({ text, muted = false, index }: { text: string; muted?: boolean; index: number }) {
  return (
    <div className={`relative h-[158px] w-full max-w-[430px] sm:h-[218px] sm:max-w-[540px] lg:h-[292px] lg:max-w-[658px] ${index % 2 === 0 ? "rotate-[2deg]" : "-rotate-[2deg]"}`}>
      <Image
        src={muted ? "/assets/images/ai-fullstack-engineering/registered-company-card-muted.svg" : "/assets/images/ai-fullstack-engineering/registered-company-card.svg"}
        alt=""
        fill
        sizes="(min-width: 1024px) 658px, 100vw"
        className="object-fill"
      />
      <Image
        src="/assets/images/ai-fullstack-engineering/registered-company-check.png"
        alt=""
        width={92}
        height={88}
        className={`absolute left-[7.5%] top-1/2 h-[48px] w-[50px] -translate-y-1/2 object-cover object-center sm:h-[68px] sm:w-[70px] lg:h-[88px] lg:w-[92px] ${muted ? "" : "opacity-50"}`}
      />
      <p className={`${exo.className} absolute left-[33%] top-1/2 w-[61%] -translate-y-1/2 rotate-[2deg] text-[16px] font-bold leading-[1.45] tracking-[0.6px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[52px] lg:tracking-[1.76px]`}>
        &quot;{text}&quot;
      </p>
    </div>
  );
}
