import { exo, exoMedium, melodrama, salt, space } from "@/app/fonts";

export default function AiBoomSideSection() {
  return (
    <section className="bg-[#fff5ee] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10">
        <h2
          className={`${melodrama.className} w-full text-[30px] font-bold leading-[1.12] tracking-[-0.95px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
        >
          But here&apos;s the other side of the{" "}
          <span className="text-[#f25e25]">AI Boom.</span>
        </h2>

        <div
          className={`${space.className} w-full space-y-5 whitespace-pre-wrap lg:space-y-6 text-justify text-[17px] font-normal leading-[1.55] tracking-[-0.3px] text-[#181c23] lg:text-[20px] lg:leading-[1.65] lg:tracking-[-0.4px]`}
        >
          <p>I know, to some extent, you must already be thinking:</p>
          <p className="font-bold">&quot;Almost every job role is changing...&quot;</p>
          <p>
            ...and AI is changing how organisations work across different
            industries.
          </p>
          <p>
            When <strong className="font-bold">Elon Musk</strong> was asked
            about whether AI would disrupt jobs,{" "}
            <em className="font-medium">
              he said the rate of change caused by AI could be
            </em>{" "}
            <strong className="font-bold italic">&quot;pretty radical.&quot;</strong>
          </p>
          <p>And yes, that concern is understandable.</p>
          <p>So here&apos;s the thing:</p>
          <p className="font-semibold underline">
            There are two ways to get ahead.
          </p>
        </div>

        {/* Path Cards Wrapper */}
        <div className="flex w-full max-w-[1130px] flex-col items-center gap-10 pb-10">
          <PathCard
            number="01"
            title="Use AI To Become More Productive"
            rotation="-rotate-1 sm:-rotate-2"
          >
            <p>
              You can learn how to integrate AI into your work, automate
              repetitive tasks and become more productive using tools like{" "}
              <strong className="font-bold text-white">n8n, Make, Claude</strong> and
              other AI automation platforms.
            </p>
            <p className="font-bold text-white">For example:</p>
            <p>
              An accountant might use AI tools to automate parts of reporting,
              reconciliation or repetitive workflows.
            </p>
            <p>That is valuable.</p>
            <p>
              That is <strong className="font-bold text-white">PRODUCTIVITY.</strong>
            </p>
          </PathCard>

          {/* Divider text between cards */}
          <div className={`${salt.className} text-center font-bold text-2xl tracking-widest text-[#181c23]/80 italic my-[-10px] z-10`}>
            OR
          </div>

          <PathCard
            number="02"
            title="Learn How To Engineer AI Systems"
            rotation="rotate-1 sm:rotate-2"
          >
            <p>Or you can go deeper.</p>
            <p>
              You can become the person who learns how to build the AI systems
              themselves.
            </p>
            <p>The person who engineers the technology.</p>
            <p>
              The person who helps create the systems that may eventually change
              how certain jobs, tasks and workflows are done.
            </p>
            <p>
              That is <strong className="font-semibold text-white">AI ENGINEERING.</strong>
            </p>
          </PathCard>
        </div>

        <div
          className={`${space.className} max-w-[981px] space-y-5 whitespace-pre-wrap lg:space-y-6 text-[17px] leading-[1.65] tracking-[0.4px] text-[#181c23] lg:text-[20px] lg:leading-[1.65] lg:tracking-[0.2px]`}
        >
          <p className="font-medium">
            And I think you already know which path creates the bigger technical
            career opportunity.
          </p>
          <p className="font-bold italic">But Here&apos;s the caveat:</p>
          <p className="font-medium">
            Learning AI tools like n8n, Make or Claude can help you become more
            productive at work or improve your business operations.
          </p>
          <p>
            <span className="font-medium">
              But learning those tools alone does not prepare you to
            </span>
            <strong className="font-bold">
              {" "}
              crack serious AI/ML Engineering roles
            </strong>
            <span className="font-medium">
              . That requires a much deeper skill set. So think about it for a
              second:
            </span>
          </p>
          <p className="font-bold">Do you only want to use AI...</p>
          <p className="font-medium">or</p>
          <p>
            <span className="font-medium">Do you want to learn how to </span>
            <strong className="font-bold">build the systems behind it?</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function PathCard({
  number,
  title,
  children,
  rotation = "",
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  rotation?: string;
}) {
  return (
    <article
      className={`
        relative
        w-full
        max-w-[780px]
        min-h-[340px]
        sm:min-h-[390px]
        lg:min-h-[420px]
        ${rotation}
      `}
    >
      {/* Irregular card background */}
      <svg
        viewBox="0 0 900 560"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="
            M 72 8

            C 43 6,
              25 22,
              23 54

            L 2 494

            C 1 524,
              18 542,
              52 543

            L 816 556

            C 850 557,
              870 539,
              873 505

            L 899 78

            C 901 47,
              883 30,
              852 28

            L 72 8

            Z
          "
          fill="#1B1B1B"
        />
      </svg>

      {/* Content */}
      <div
        className="
          relative
          z-10
          px-9
          pb-10
          pt-7

          sm:px-12
          sm:pb-12
          sm:pt-9

          lg:px-14
          lg:pb-14
          lg:pt-10
        "
      >
        {/* Number */}
        <div className="mb-2">
          <span
            className={`
              ${salt.className}
              inline-block
              text-[27px]
              font-normal
              leading-none
              text-white

              sm:text-[31px]
              lg:text-[34px]
            `}
          >
            {number}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`
            ${exo.className}
            mb-8
            text-[20px]
            font-bold
            leading-[1.25]
            tracking-[0.1px]
            text-white

            sm:text-[23px]
            lg:text-[25px]
          `}
        >
          {title}
        </h3>

        {/* Body */}
        <div
          className={`
            ${space.className}
            max-w-[650px]
            space-y-1
            whitespace-pre-wrap
            text-[15px]
            font-normal
            leading-[1.65]
            tracking-[0.1px]
            text-[#f2f2f2]

            sm:text-[16px]
            sm:leading-[1.7]

            lg:text-[17px]
            lg:leading-[1.7]
          `}
        >
          {children}
        </div>
      </div>
    </article>
  );
}