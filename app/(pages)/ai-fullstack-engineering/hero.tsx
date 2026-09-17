import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[520px] overflow-hidden bg-black sm:min-h-[720px] lg:min-h-[982px]"
      aria-label="AI Fullstack Engineering"
    >
      <Image
        src="/assets/images/ai-fullstack-engineering/hero-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      <div className="relative z-10 flex min-h-[520px] justify-center sm:min-h-[720px] lg:min-h-[982px]">
        <div className="relative mt-[72px] h-[52px] w-[210px] sm:mt-[104px] sm:h-[64px] sm:w-[259px] lg:mt-[143px] lg:h-[75px] lg:w-[304px]">
          <Image
            src="/assets/images/ai-fullstack-engineering/ayonaire-logo.png"
            alt="Ayonaire"
            fill
            priority
            sizes="(min-width: 1024px) 304px, 259px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
