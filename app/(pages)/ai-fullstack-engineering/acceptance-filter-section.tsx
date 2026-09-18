import { exo, exoMedium, melodrama, salt } from "@/app/fonts";

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
          <div className="flex flex-col gap-8 lg:gap-10">
            {rejectionReasons.map((reason, index) => (
              <article
                key={reason}
                className="grid min-h-[132px] grid-cols-[56px_1fr] items-center gap-5 rounded-[10px] border border-[#ff9b77]/50 bg-white px-5 py-6 shadow-[0_12px_28px_rgba(90,65,54,0.09)] sm:grid-cols-[76px_1fr] sm:px-8 lg:min-h-[170px] lg:max-w-[655px] lg:px-10"
                style={{ transform: `rotate(${index % 2 === 0 ? 2 : -1.5}deg)` }}
              >
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-[#ff9b77] text-[#ff8b62] sm:size-12">
                  <span className="block h-3 w-5 rotate-[-45deg] border-b-2 border-l-2 border-current" />
                </span>
                <p className={`${exoMedium.className} text-[12px] font-bold leading-[1.55] tracking-[0.2px] text-[#181c23] sm:text-[14px] lg:text-[18px] lg:leading-[1.78]`}>
                  {reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}