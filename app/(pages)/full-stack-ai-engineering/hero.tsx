import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { melodrama, salt } from "@/app/fonts";

export default function Hero() {
  return (
    <section
      className="
        relative
        z-20
        w-full
        overflow-x-clip
        bg-transparent
        pb-[30px]
        sm:pb-[35px]
        md:pb-[40px]
      "
      aria-label="AI Fullstack Engineering"
    >
      {/* 1. CLIPPED BLACK BACKGROUND CONTAINER */}
      <div
        className="absolute inset-0 overflow-hidden bg-black"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)",
        }}
      >
        {/* HERO BACKGROUND - DESKTOP/TABLET */}
        <Image
          src="/assets/images/ai-fullstack-engineering/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            pointer-events-none
            select-none
            object-cover
            object-center
            hidden
            sm:block
          "
        />

        {/* HERO CORNER LIGHTS - MOBILE */}
        <div className="pointer-events-none relative h-full w-full select-none sm:hidden">
          {/* TOP-LEFT CORNER LIGHT */}
          <div className="absolute left-0 top-0 h-[220px] w-[220px] xs:h-[250px] xs:w-[250px]">
            <Image
              src="/assets/images/ai-fullstack-engineering/hero-corner-top-left.png"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 250px, 100vw"
              className="object-contain object-left-top"
            />
          </div>

          {/* BOTTOM-RIGHT CORNER LIGHT */}
          <div className="absolute right-0 bottom-0 h-[250px] w-[250px] xs:h-[280px] xs:w-[280px]">
            <Image
              src="/assets/images/ai-fullstack-engineering/hero-corner-bottom-right.png"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 280px, 100vw"
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT (Logo, Headline, Arrow, Subtext, SKIP THE TALK) */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1280px]
          flex-col
          items-center
          px-4
          pt-8
          pb-20
          text-center
          text-white
          sm:px-6
          sm:pt-10
          sm:pb-24
          md:px-8
          md:pt-12
          lg:pt-[53px]
          lg:pb-28
        "
      >
        {/* LOGO */}
        <div
          className="
            relative
            h-[45px]
            w-[180px]
            sm:h-[50px]
            sm:w-[205px]
            md:h-[60px]
            md:w-[245px]
            lg:h-[75px]
            lg:w-[304px]
          "
        >
          <Image
            src="/assets/images/ai-fullstack-engineering/ayonaire-logo.png"
            alt="Ayonaire"
            fill
            priority
            sizes="(min-width: 1024px) 304px, (min-width: 768px) 245px, 180px"
            className="object-contain"
          />
        </div>

        {/* HEADLINE */}
        <div className="relative mt-6 w-full sm:mt-8 lg:mt-9">
          <h1
            className={`
              ${melodrama.className}
              mx-auto
              max-w-[1120px]
              text-[clamp(1.75rem,6.8vw,5.35rem)]
              font-bold
              leading-[1.05]
              tracking-[-0.015em]
              text-white
              drop-shadow-[0_8px_22px_rgba(0,0,0,0.55)]
              sm:leading-[0.96]
            `}
          >
            <span className="block">Entry-Level AI/ML Engineers</span>

            <span className="mt-1 block sm:mt-2">
              Are Making{" "}
              <span
                className="
                  relative
                  inline-flex
                  items-center
                  justify-center
                  px-2
                  text-[#f26722]
                  sm:px-3
                  md:px-4
                "
              >
                {/* Orange outline/highlight behind amount */}
                <Image
                  src="/assets/images/ai-fullstack-engineering/hero-headline-highlight.svg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 440px, 280px"
                  className="
                    pointer-events-none
                    -z-10
                    select-none
                    object-fill
                    opacity-90
                  "
                />

                <span className="relative z-10 whitespace-nowrap">
                  $5,000-$9,000
                </span>
              </span>
            </span>

            <span className="mt-1 block sm:mt-2">Every Single Month.</span>
          </h1>

          {/* DOWNWARD ARROW */}
          <div className="mt-5 flex justify-center sm:mt-6">
            <Image
              src="/assets/images/Downward.png"
              alt=""
              width={10}
              height={70}
              className="
                h-[52px]
                w-auto
                object-contain
                sm:h-[60px]
                lg:h-[70px]
              "
            />
          </div>

          {/* SUBTEXT */}
          <p
            className="
              mx-auto
              mt-3
              max-w-[760px]
              px-2
              text-[15px]
              font-bold
              italic
              leading-[1.45]
              text-white
              sm:text-lg
              md:text-xl
            "
          >
            Don&apos;t lose your chance to earn that much... even if
            <br className="hidden sm:block" /> you have no-tech background.
          </p>

          {/* SKIP THE TALK */}
          <div
            className={`
              ${salt.className}
              mt-6
              text-base
              leading-none
              text-white
              sm:mt-8
              sm:text-xl
              lg:text-[22px]
            `}
          >
            SKIP THE TALK
          </div>
        </div>
      </div>

      {/* 3. CTA BUTTON - UNCLIPPED & FLOATING ON TOP OF THE TRANSITION */}
      <div
        className="
          absolute
          bottom-[30px]
          left-1/2
          z-50
          w-full
          max-w-[92vw]
          -translate-x-1/2
          translate-y-1/2
          px-4
          sm:max-w-none
        "
      >
        <div className="flex justify-center">
          <a
            href="https://wa.link/f1iadg"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-[44px]
              items-center
              justify-center
              gap-2
              rounded-[5px]
              bg-[#ff6b00]
              px-5
              py-3.5
              text-xs
              font-black
              uppercase
              tracking-normal
              text-white
              shadow-[0_8px_25px_rgba(255,107,0,0.45)]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-[#F25E25]
              hover:shadow-[0_12px_32px_rgba(255,107,0,0.6)]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#ff8a3d]

              sm:min-h-[48px]
              sm:px-9
              sm:py-4
              sm:text-[12px]

              md:min-h-[52px]
              md:px-10
              md:text-xs

              lg:min-h-[56px]
              lg:px-12
              lg:text-[13px]
            "
          >
            <span>I Want Become An AI/ML Engineer</span>

            <ArrowRight
              aria-hidden="true"
              className="
                h-4
                w-4
                shrink-0
                sm:h-[18px]
                sm:w-[18px]
              "
              strokeWidth={3}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
