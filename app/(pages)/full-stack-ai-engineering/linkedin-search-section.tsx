import Image from "next/image";
import { exo, exoMedium, melodrama, space } from "@/app/fonts";

const roles = [
  { number: "01", label: "AI Engineer." },
  { number: "02", label: "Machine Learning Engineer." },
  { number: "03", label: "Generative AI Engineer." },
  { number: "06", label: "Forward Deployed Engineer." },
  { number: "07", label: "LLM Engineer." },
  { number: "08", label: "MLOps Engineer." },
  { number: "09", label: "Applied AI Engineer." },
];

export default function LinkedInSearchSection() {
  return (
    <section className="bg-[#fdfbf9]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-14 px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:gap-20 lg:py-20">
        <h2
          className={`${melodrama.className} max-w-[655px] space-y-4 whitespace-pre-wrap lg:space-y-6 text-[22px] xs:text-[26px] font-bold leading-[1.15] tracking-[-0.6px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
        >
          Don&apos;t take our word for it.{"\n"}
          <span className="relative inline-block text-[#f25e25]">
            Go to LinkedIn yourself
            <Image
              src="/assets/images/ai-fullstack-engineering/linkedin-search-highlight.svg"
              alt=""
              width={588}
              height={62}
              className="pointer-events-none absolute left-0 top-[2px] h-7 sm:h-10 md:h-12 lg:h-[62px] w-full select-none object-fill"
            />
          </span>{" "}
          <span className="text-[#f25e25]">and search:</span>
        </h2>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,683px)] items-center lg:items-end gap-10 lg:gap-14 xl:gap-20">
  {/* LIST CONTENT - Appears at bottom on mobile, left column on desktop */}
  <ol className={`${exoMedium.className} flex flex-col gap-7 text-[17px] w-full`}>
    {roles.map((role) => (
      <li key={role.number} className="flex items-center gap-6">
        <NumberPill value={role.number} />
        <span className="text-[17px] font-normal tracking-[0.2px] sm:text-[18px] lg:text-[20px]">
          {role.label}
        </span>
      </li>
    ))}
  </ol>

  {/* IMAGE - Appears at top on mobile, right column on desktop */}
  <Image
    src="/assets/images/ai-fullstack-engineering/linkedin-search-illustration.png"
    alt="AI career roadmap illustration"
    width={683}
    height={854}
    className="mx-auto h-auto w-full max-w-[683px] object-cover"
    sizes="(min-width: 1024px) 683px, 100vw"
  />
</div>

        <div className="flex flex-col gap-10 text-[#181c23]">
          <div className={`${exoMedium.className} space-y-2 text-[17px] font-medium leading-[1.4] tracking-[0.4px] lg:text-[20px] lg:leading-[1.6] lg:tracking-[0.2px]`}>
            {[
              "Look at the companies hiring.",
              "Look at what they expect applicants to know.",
              "Look at the problems these people are being hired to solve.",
            ].map((item) => (
              <p key={item} className="flex items-center gap-3">
                <BulletPair dark />
                <span>{item}</span>
              </p>
            ))}
          </div>

          <p className={`${space.className} text-[17px] font-bold leading-[1.5] tracking-[-0.4px] lg:text-[20px] lg:leading-[1.55]`}>
            Then ask yourself the next question:
          </p>

          <div className={`${exo.className} space-y-4 whitespace-pre-wrap lg:space-y-6 text-[15px] xs:text-[17px] leading-[1.65] tracking-[-0.3px] text-[#181c23] lg:text-[20px] lg:leading-[1.65]`}>
            <p  className={`${exoMedium.className}`}>
              How can I start to learn these skills following the right sequence
              and getting as much hands on experience along the way...
            </p>
            <p className="font-bold text-black">
              At Ayonaire Academy, we&apos;ve seen how
            </p>
            <p className="font-bold text-black">
              confusing getting started in AI can be.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#171717] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16 min-h-[600px] lg:min-h-[720px] xl:min-h-[820px] lg:py-24 xl:py-28">
        <Image
          src="/assets/images/ai-fullstack-engineering/linkedin-dark-ellipse-top.svg"
          alt=""
          width={295}
          height={287}
          className="pointer-events-none absolute -right-24 -top-16 hidden h-[287px] w-[295px] rotate-[-92deg] lg:block"
        />
        <Image
          src="/assets/images/ai-fullstack-engineering/linkedin-dark-ellipse-left.svg"
          alt=""
          width={319}
          height={372}
          className="pointer-events-none absolute -left-48 top-[331px] hidden h-[372px] w-[319px] rotate-[-9deg] lg:block"
        />
        <Image
          src="/assets/images/ai-fullstack-engineering/linkedin-dark-logo.png"
          alt=""
          width={269}
          height={333}
          className="pointer-events-none absolute -left-36 top-[335px] hidden h-[333px] w-[269px] rotate-[7deg] object-cover opacity-[0.04] lg:block"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1187px] flex-col items-center text-white">
          <h2
            className={`${melodrama.className} relative text-center text-[22px] xs:text-[26px] font-bold leading-[1.12] tracking-[-0.6px] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
          >
            And really, it&apos;s absolutely unnecessary...so today, we&apos;ll
            show you the{" "}
            <span className="relative inline-block text-[#ff6b00]">
              simple, uncomplicated path
              <span className="absolute inset-x-0 top-1/2 -z-10 h-[58px] -translate-y-1/2 bg-[rgba(248,243,239,0.09)]" />
            </span>{" "}
            from where you are now to:..
          </h2>

          <div className={`${exoMedium.className} mt-16 w-full max-w-[652px] self-start space-y-5 text-[17px] leading-[1.55] tracking-[-0.8px] lg:mt-24 lg:text-[20px] lg:leading-[1.65] lg:tracking-[-0.6px]`}>
            {[
              "getting into this crazy million dollar industry,",
              "develop the right skills, and of course,",
              "show you the exact roadmap you need to build a serious career as an AI Engineer.",
            ].map((item) => (
              <p key={item} className="flex gap-4">
                <BulletPair />
                <span>{item}</span>
              </p>
            ))}
          </div>

          <div className={`${exo.className} mt-14 max-w-[1187px] text-center text-[17px] leading-[1.45] tracking-[-0.8px] lg:mt-20 lg:text-[20px] lg:leading-[1.4] lg:tracking-[-0.6px]`}>
            <p className={`${exoMedium.className}`}>Even if you have no experience whatsoever.</p>
            <p className="font-semibold italic underline">
              And no, you don&apos;t need to have any technical knowledge to get
              started.
            </p>
          </div>

          <a
            href="https://wa.link/f1iadg"
            target="_blank"
            rel="noopener noreferrer"
            className={`${exo.className} mt-10 xs:mt-12 inline-flex items-center justify-center text-center gap-2 rounded-[8px] bg-[#ff6b00] px-6 py-3.5 text-[14px] uppercase text-white sm:px-10 sm:py-5 sm:text-[16px] shadow-[0px_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01]`}
          >
            <span className="text-center">let&apos;s get into it</span>
            <Image
              src="/assets/images/ai-fullstack-engineering/linkedin-cta-arrow.svg"
              alt=""
              width={16}
              height={16}
              className="size-4 shrink-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function NumberPill({ value }: { value: string }) {
  return (
    <span className="relative flex h-10 w-14 shrink-0 items-center justify-center">
      <Image
        src="/assets/images/ai-fullstack-engineering/linkedin-pill.svg"
        alt=""
        fill
        sizes="56px"
        className="object-fill"
      />
      <span className="relative z-10 pr-2 text-[15px] font-bold text-black sm:text-[16px]">
        {value}
      </span>
    </span>
  );
}

function BulletPair({ dark = false }: { dark?: boolean }) {
  return (
    <span className="mt-[0.6em] flex shrink-0 items-center gap-[2px]">
      <span
        className={`h-2 w-[14px] rounded-[2px] ${dark ? "bg-black" : "bg-white"}`}
      />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}

