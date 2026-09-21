import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { melodrama, salt } from "@/app/fonts";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[620px]
        overflow-visible
        bg-black
        mb-[82px]
        sm:min-h-[700px]
        sm:mb-[80px]
        md:min-h-[760px]
        md:mb-[128px]
        lg:min-h-[790px]
        lg:mb-[128px]
        xl:min-h-[820px]
      "
      aria-label="AI Fullstack Engineering"
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

      {/* HERO BACKGROUND - MOBILE */}
      <Image
        src="/assets/images/ai-fullstack-engineering/herom.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          pointer-events-none
          select-none
          object-cover
          object-center
          block
          sm:hidden
        "
      />

      {/* MAIN CONTENT */}
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
          pb-[150px]
          text-center
          text-white
          sm:px-6
          sm:pt-10
          sm:pb-[160px]
          md:px-8
          md:pt-12
          lg:pt-[53px]
          lg:pb-[180px]
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
              text-[clamp(2.6rem,7vw,5.35rem)]
              font-bold
              leading-[0.96]
              tracking-[-0.015em]
              text-white
              drop-shadow-[0_8px_22px_rgba(0,0,0,0.55)]
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

      {/* ====================================================== */}
      {/* BOTTOM IMAGE + BUTTON - PINNED DIRECTLY TO THE BOTTOM  */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          z-20
          h-[115px]
          bottom-[-88px]
          sm:bottom-[-104px]
          md:bottom-[-136px]
          lg:bottom-[-136px]
          sm:h-[135px]
          md:h-[150px]
          lg:h-[175px]
        "
      >
        {/* HERO BOTTOM DECORATIVE IMAGE */}
        <Image
          src="/assets/images/HeroDown.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            pointer-events-none
            select-none
            object-cover
            object-bottom
          "
        />

        {/* CTA SITTING ON / ATTACHED TO BOTTOM IMAGE */}
        <div
          className="
            absolute
            left-1/2
            top-[18px]
            z-30
            w-full
            -translate-x-1/2
            px-4
            sm:top-[20px]
            md:top-[22px]
            lg:top-[27px]
          "
        >
          <div className="flex justify-center">
            <a
              href="#payment-plans"
              className="
                inline-flex
                min-h-[44px]
                items-center
                justify-center
                gap-2
                rounded-[5px]
                bg-[#ff6b00]
                px-10
                py-5
                text-[10px]
                font-black
                uppercase
                tracking-normal
                text-white
                shadow-[0_5px_20px_rgba(255,107,0,0.30)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#F25E25]
                hover:shadow-[0_7px_28px_rgba(255,107,0,0.45)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#ff8a3d]

                sm:min-h-[48px]
                sm:px-7
                sm:text-[11px]

                md:min-h-[52px]
                md:px-8
                md:text-xs

                lg:min-h-[56px]
                lg:px-10
                lg:text-[13px]
              "
            >
              <span>I want to become an AI/ML engineer</span>

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
      </div>
    </section>
  );
}

