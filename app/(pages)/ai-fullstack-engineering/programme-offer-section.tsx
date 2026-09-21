import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

export default function ProgrammeOfferSection() {
  return (
    <section 
      className="relative overflow-hidden px-5 pt-24 pb-16 sm:px-8 sm:pt-28 lg:px-12 lg:pt-36 lg:pb-20 xl:px-16"
      style={{
        background: "linear-gradient(180deg, #FFDCC4 0%, #FFFFFF 47%)"
      }}
    >
      {/* Irregular top background shape from InstructorProofSection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[220px] overflow-hidden lg:h-[300px]">
        <Image
          src="/assets/images/ai-fullstack-engineering/instructor-proof-bg.svg"
          alt=""
          width={1463}
          height={551}
          priority
          className="
            absolute
            left-1/2
            top-[-120px]
            h-[551px]
            w-[1463px]
            max-w-none
            -translate-x-1/2
            rotate-[-1.95deg]
          "
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        {/* TOP CONTENT */}
        <div className="flex flex-col items-center gap-8 text-center">
          <h2
            className={`
              ${melodrama.className}
              max-w-[1171px]
              text-[28px]
              font-bold
              leading-[1.12]
              tracking-[0.1px]
              text-[#181c23]

              sm:text-[34px]

              lg:text-[46px]
              lg:leading-[1.15]
            `}
          >
            Join the{" "}
            <span className="text-[#f25e25]">
              Ayonaire 10-Month
            </span>{" "}
            AI Engineering Career Transition Programme
          </h2>

          <p
            className={`
              ${exoMedium.className}
              max-w-[771px]
              text-[17px]
              font-bold
              leading-[1.5]
              tracking-[0.2px]
              text-[#181c23]

              sm:text-[19px]

              lg:text-[24px]
            `}
          >
            What if I told you that{" "}
            <span className="text-[#f25e25]">
              Ayonaire offers
            </span>{" "}
            more for a steal investment cost?
          </p>

          {/* PRICE */}
          <div
            className={`
              ${exoMedium.className}
              space-y-4
              text-center
              text-[17px]
              tracking-[0.2px]
              text-[#181c23]

              sm:text-[19px]

              lg:text-[24px]
            `}
          >
            <p>
              <span className="font-medium">Promo Price:</span>{" "}
              <strong>3,500,000</strong>
            </p>

            <p className="font-medium">
              Payment plans available.
            </p>

            <p className="font-bold">
              500,000
            </p>
          </div>

          <Cta href="#enroll">
            Start my AI career transition now
          </Cta>
        </div>

        {/* FIRST COPY */}
        <div
          className={`
            ${exoMedium.className}
            max-w-[1100px]
            space-y-3
            text-center
            text-[16px]
            font-medium
            leading-[1.65]
            tracking-[0.2px]
            text-[#5a4136]

            sm:text-[18px]

            lg:text-[22px]
            lg:leading-[1.65]
          `}
        >
          <p>And perhaps your first reaction is:</p>

          <p>
            &quot;<strong>500,000</strong> is still a lot of money for
            training.&quot;
          </p>

          <p>Fair.</p>

          <p>
            So before you decide, let me show you something.
          </p>

          <p>
            And remember what we discussed at the beginning of this page.
          </p>

          <p>
            Look at the compensation attached to experienced AI/ML roles in
            international markets.
          </p>
        </div>

        {/* IMAGE 1 */}
        <Image
          src="/assets/images/ai-fullstack-engineering/highest-paid-jobs.png"
          alt="Examples of high paying AI and machine learning job compensation"
          width={1240}
          height={650}
          className="h-auto w-full rounded-[24px] object-cover shadow-[0_1px_18px_rgba(248,100,50,0.18)]"
          sizes="(min-width: 1280px) 1240px, 100vw"
        />

        {/* SECOND COPY */}
        <div
          className={`
            ${exoMedium.className}
            max-w-[1100px]
            space-y-4
            text-center
            text-[16px]
            font-medium
            leading-[1.65]
            tracking-[0.2px]
            text-[#5a4136]

            sm:text-[18px]

            lg:text-[22px]
            lg:leading-[1.65]
          `}
        >
          <p>
            Some experienced and specialised AI Engineers are being paid $1m+
            per year, while compensation at the very top of the market can go
            considerably higher.
          </p>

          <p>
            That does not mean completing AI Engineering 2.0 automatically
            gives you that salary.
          </p>

          <p>It doesn&apos;t.</p>

          <p>
            It does tell you something about how valuable sophisticated AI
            Engineering capability can become to the right organisation.
          </p>
        </div>

        {/* IMAGE 2 */}
        <Image
          src="/assets/images/ai-fullstack-engineering/highest-paid-jobs.png"
          alt="AI engineering job search and compensation examples"
          width={1240}
          height={695}
          className="h-auto w-full object-cover"
          sizes="(min-width: 1280px) 1240px, 100vw"
        />

        {/* FINAL CONTENT */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div
            className={`
              ${exoMedium.className}
              max-w-[1100px]
              space-y-3
              text-[16px]
              font-medium
              leading-[1.65]
              tracking-[0.2px]
              text-[#5a4136]

              sm:text-[18px]

              lg:text-[22px]
              lg:leading-[1.65]
            `}
          >
            <p>So the question is not only:</p>

            <p>&quot;What does this programme cost?&quot;</p>

            <p>There is another question:</p>
          </div>

          <p
            className={`
              ${exoMedium.className}
              max-w-[771px]
              text-[18px]
              font-bold
              uppercase
              leading-[1.45]
              tracking-[0.2px]
              text-[#181c23]

              sm:text-[20px]

              lg:text-[24px]
            `}
          >
            <span className="text-[#f25e25]">
              &quot;What could this capability become worth
            </span>{" "}
            to me over the course of my career?&quot;
          </p>

          <Cta href="#enroll">
            I want to join the September cohort
          </Cta>
        </div>
      </div>
    </section>
  );
}

function Cta({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a
      href={href}
      className={`
        ${exo.className}
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-[8px]
        bg-[#ff6b00]
        px-8
        py-4
        text-[13px]
        font-bold
        uppercase
        tracking-[0.04em]
        text-white
        shadow-[0_12px_16px_rgba(255,107,0,0.3)]
        transition-transform
        hover:scale-[1.01]

        sm:px-10
        sm:py-5
        sm:text-[14px]

        lg:text-[16px]
      `}
    >
      {children}

      <Image
        src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg"
        alt=""
        width={16}
        height={16}
        className="size-4"
      />
    </a>
  );
}