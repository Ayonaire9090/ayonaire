import Image from "next/image";
import { exoMedium, melodrama, salt } from "@/app/fonts";

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
                  className="relative z-10 flex w-full items-center gap-7 px-6 py-5 sm:gap-9 sm:px-8 sm:py-6 lg:gap-11 lg:px-10 lg:py-6"
                  style={{ transform: "rotate(5deg)" }}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-[#ff8b62] text-[#ff6b00] sm:size-12">
                    <span className="block h-3 w-5 rotate-[-45deg] border-b-2 border-l-2 border-current" />
                  </span>
                  <p className={`${exoMedium.className} w-[60%] text-[15px] leading-[1.45] tracking-[0.2px] text-[#181c23] sm:text-[17px] lg:text-[20px] lg:leading-[1.5]`}>
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