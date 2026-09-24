import Image from "next/image";
import { melodrama, rope, salt } from "@/app/fonts";

const rejectionReasons = [
  "You're looking for shortcuts without doing the work.",
  "You only want a certificate, not the skills behind it.",
  "You're unwilling to commit to the learning journey.",
  "You refuse to stretch beyond your comfort zone.",
  "You're not prepared to practise, build and improve consistently.",
];

export default function AcceptanceFilterSection() {
  return (
    <section className="bg-gradient-to-b from-[rgba(255,255,255,0.28)] to-[rgba(248,100,50,0.28)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[minmax(300px,542px)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <h2 className={`${melodrama.className} max-w-[543px] text-[36px] font-bold uppercase leading-[1.18] tracking-[0.2px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[1.25]`}>
            <span className="text-[#f25e25]">We won&apos;t accept</span> you if:
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          <p className={`${salt.className} text-[18px] font-semibold uppercase tracking-[0.08em] text-[#ff6b00] lg:text-[24px]`}>
            You if:
          </p>
          <div className="flex flex-col gap-6 lg:gap-8">
            {rejectionReasons.map((reason) => (
              <article
                key={reason}
                className="relative flex aspect-[702/336] w-full max-w-[655px] items-center"
              >
                <Image
                  src="/assets/images/ai-fullstack-engineering/right-fit-card.svg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 655px, 100vw"
                  className="pointer-events-none object-contain"
                />
                <div
                  className="relative z-10 flex w-full items-center gap-3.5 pl-6 pr-4 sm:gap-6 sm:pl-8 sm:pr-6 lg:gap-8 lg:pl-10 lg:pr-8"
                  style={{ transform: "rotate(4.38deg)" }}
                >
                  <Image
                    src="/assets/images/ai-fullstack-engineering/mark.svg"
                    alt=""
                    width={46}
                    height={44}
                    className="size-[36px] shrink-0 object-contain sm:size-[46px] lg:size-[58px]"
                  />
                  <p className={`${rope.className} w-[68%] text-[12px] font-bold leading-[1.65] tracking-[0.3px] text-[#181c23] sm:text-[15px] sm:leading-[1.5] lg:text-[19px] lg:leading-[1.5] xl:text-[20px]`}>
                    {reason}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}