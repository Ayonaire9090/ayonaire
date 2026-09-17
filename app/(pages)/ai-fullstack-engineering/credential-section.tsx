import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

const credentialProof = [
  "the projects you built,",
  "the practical experience you gained,",
  "your GitHub,",
  "your portfolio",
  "and the problems you can solve.",
];

export default function CredentialSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1279px] flex-col items-center gap-10 lg:gap-11">
        <h2 className={`${melodrama.className} text-center text-[34px] font-bold leading-[1.08] tracking-[-0.8px] text-[#181c23] sm:text-[44px] lg:text-[56px]`}>
          Now Listen, <span className="bg-[#ffdcc4] text-[#f25e25]">Your Strongest Credential</span> Is Not Your CERTIFICATE.
        </h2>

        <p className={`${exo.className} w-full text-justify text-[20px] font-normal leading-[1.75] tracking-[0.5px] text-[#5a4136] sm:text-[24px] lg:text-[32px] lg:leading-[1.84]`}>
          A certificate says you completed a programme. But what really helps you stand out is being able to show:
        </p>

        <ul className="grid w-full max-w-[1174px] gap-5 lg:gap-6">
          {credentialProof.map((item) => (
            <li key={item} className={`${exo.className} grid grid-cols-[30px_1fr] items-start gap-4 text-[20px] font-medium leading-[1.55] tracking-[0.5px] text-[#5a4136] sm:text-[24px] lg:text-[32px] lg:leading-[1.84]`}>
              <BulletPair />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className={`${exo.className} w-full text-justify text-[20px] font-medium leading-[1.75] tracking-[0.5px] text-[#5a4136] sm:text-[24px] lg:text-[32px] lg:leading-[1.84]`}>
          but ultimately, we want you to be able to say:
        </p>

        <div className="relative w-full overflow-hidden rounded-[18px] bg-[#181c23] px-6 py-10 text-white shadow-[0_22px_52px_rgba(24,28,35,0.18)] sm:px-10 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-[#f25e25]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#ffdcc4]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8">
            <p className={`${melodrama.className} text-[34px] font-bold leading-[1.16] tracking-[-0.4px] text-white sm:text-[44px] lg:text-[56px]`}>
              &quot;I have built real AI systems, I can explain how they work, and I have proof of what I can do.&quot;
            </p>

            <div className={`${exo.className} grid gap-5 text-[18px] font-medium leading-[1.7] tracking-[0.4px] text-[#f7eee9] sm:text-[20px] lg:grid-cols-3 lg:text-[22px]`}>
              <p className="rounded-[12px] border border-white/10 bg-white/[0.06] p-5">
                Proof that goes beyond attendance.
              </p>
              <p className="rounded-[12px] border border-white/10 bg-white/[0.06] p-5">
                Projects that show practical judgement.
              </p>
              <p className="rounded-[12px] border border-white/10 bg-white/[0.06] p-5">
                A portfolio that makes your growth visible.
              </p>
            </div>
          </div>
        </div>

        <a href="#enroll" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-center text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[18px]`}>
          I want to build that kind of proof
          <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4" />
        </a>
      </div>
    </section>
  );
}

function BulletPair() {
  return (
    <span className="mt-[0.65em] flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-black" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}
