import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[560px] lg:min-h-[666px]"
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

      <div className="relative z-10 flex min-h-[420px] justify-center sm:min-h-[560px] lg:min-h-[666px]">
        <div className="relative mt-[74px] h-[75px] w-[min(303.846px,64vw)] sm:mt-[78px] lg:mt-[80px]">
          <Image
            src="/assets/images/ai-fullstack-engineering/ayonaire-logo.png"
            alt="Ayonaire"
            fill
            priority
            sizes="304px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
