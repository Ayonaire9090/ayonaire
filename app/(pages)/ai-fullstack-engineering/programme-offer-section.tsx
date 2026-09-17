import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

export default function ProgrammeOfferSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ffdcc4] via-white to-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[1600px] max-w-none -translate-x-1/2 bg-white/45 [clip-path:polygon(0_18%,35%_0,100%_0,100%_100%,0_100%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className={`${melodrama.className} max-w-[1171px] text-[32px] font-bold leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.13]`}>
            Join the <span className="text-[#f25e25]">Ayonaire 10-Month</span> AI Engineering Career Transition Programme
          </h2>
          <p className={`${exo.className} max-w-[771px] text-[20px] font-bold uppercase leading-[1.5] tracking-[0.3px] text-[#181c23] lg:text-[32px]`}>
            What if I told you that <span className="text-[#f25e25]">Ayonaire offers</span> more for a steal investment cost?
          </p>
          <div className={`${exo.className} space-y-4 text-center text-[20px] tracking-[0.3px] text-[#181c23] lg:text-[32px]`}>
            <p><span className="font-medium">Promo Price:</span> <strong>?3,500,000</strong></p>
            <p className="font-medium">Payment plans available.</p>
            <p className="font-bold">?500,000</p>
          </div>
          <Cta href="#enroll">Start my AI career transition now</Cta>
        </div>

        <div className={`${exo.className} max-w-[1240px] space-y-3 text-center text-[18px] font-medium leading-[1.65] tracking-[0.4px] text-[#5a4136] sm:text-[22px] lg:text-[32px] lg:leading-[1.75]`}>
          <p>And perhaps your first reaction is:</p>
          <p>&quot;<strong>?500,000</strong> is still a lot of money for training.&quot;</p>
          <p>Fair.</p>
          <p>So before you decide, let me show you something.</p>
          <p>And remember what we discussed at the beginning of this page.</p>
          <p>Look at the compensation attached to experienced AI/ML roles in international markets.</p>
        </div>

        <Image
          src="/assets/images/ai-fullstack-engineering/highest-paid-jobs.png"
          alt="Examples of high paying AI and machine learning job compensation"
          width={1240}
          height={650}
          className="h-auto w-full rounded-[24px] object-cover shadow-[0_1px_18px_rgba(248,100,50,0.18)]"
          sizes="(min-width: 1280px) 1240px, 100vw"
        />

        <div className={`${exo.className} max-w-[1240px] space-y-4 text-center text-[18px] font-medium leading-[1.65] tracking-[0.4px] text-[#5a4136] sm:text-[22px] lg:text-[32px] lg:leading-[1.75]`}>
          <p>Some experienced and specialised AI Engineers are being paid $1m+ per year, while compensation at the very top of the market can go considerably higher.</p>
          <p>That does not mean completing AI Engineering 2.0 automatically gives you that salary.</p>
          <p>It doesn&apos;t.</p>
          <p>It does tell you something about how valuable sophisticated AI Engineering capability can become to the right organisation.</p>
        </div>

        <Image
          src="/assets/images/ai-fullstack-engineering/linkedin-search-illustration.png"
          alt="AI engineering job search and compensation examples"
          width={1240}
          height={695}
          className="h-auto w-full object-cover"
          sizes="(min-width: 1280px) 1240px, 100vw"
        />

        <div className="flex flex-col items-center gap-8 text-center">
          <div className={`${exo.className} max-w-[1240px] space-y-3 text-[18px] font-medium leading-[1.65] tracking-[0.4px] text-[#5a4136] sm:text-[22px] lg:text-[32px] lg:leading-[1.75]`}>
            <p>So the question is not only:</p>
            <p>&quot;What does this programme cost?&quot;</p>
            <p>There is another question:</p>
          </div>
          <p className={`${exo.className} max-w-[771px] text-[22px] font-bold uppercase leading-[1.45] tracking-[0.3px] text-[#181c23] lg:text-[32px]`}>
            <span className="text-[#f25e25]">&quot;What could this capability become worth</span> to me over the course of my career?&quot;
          </p>
          <Cta href="#enroll">I want to join the September cohort</Cta>
        </div>
      </div>
    </section>
  );
}

function Cta({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[18px]`}>
      {children}
      <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4" />
    </a>
  );
}