import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

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
          Now Listen, Your <span className="bg-[#ffdcc4] text-[#f25e25]">Strongest Credential</span> Is Not Your CERTIFICATE.
        </h2>

        <p className={`${exoMedium.className} w-full text-justify text-[18px] font-normal leading-[1.75] tracking-[0.5px] text-[#5a4136] sm:text-[22px] lg:text-[28px] lg:leading-[1.84]`}>
          A certificate says you completed a programme. But what really helps you stand out is being able to show:
        </p>

        <ul className="grid w-full max-w-[1174px] gap-5 lg:gap-6">
          {credentialProof.map((item) => (
            <li key={item} className={`${exoMedium.className} grid grid-cols-[30px_1fr] items-start gap-4 text-[18px] font-medium leading-[1.55] tracking-[0.5px] text-[#5a4136] sm:text-[22px] lg:text-[28px] lg:leading-[1.84]`}>
              <BulletPair />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className={`${exoMedium.className} w-full text-justify text-[18px] font-medium leading-[1.75] tracking-[0.5px] text-[#5a4136] sm:text-[22px] lg:text-[28px] lg:leading-[1.84]`}>
          but ultimately, we want you to be able to say:
        </p>

       

       
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
