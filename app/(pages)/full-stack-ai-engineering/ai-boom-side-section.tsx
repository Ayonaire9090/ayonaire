import { exo, melodrama, salt, space } from "@/app/fonts";

export default function AiBoomSideSection() {
  return (
    <section className="bg-[#fff6ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[880px] flex-col items-center gap-8 lg:gap-10">
        {/* Title */}
        <h2
          className={`${melodrama.className} w-full text-center text-[28px] font-bold leading-[1.18] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[42px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
        >
          But here&apos;s the other side of the{" "}
          <span className="relative inline-block px-2.5 py-0.5 border border-[#f25e25]/30 bg-[#f25e25]/10 text-[#f25e25] rounded-md">
            AI Boom.
          </span>
        </h2>

        {/* Intro Paragraphs */}
        <div
          className={`${space.className} w-full space-y-4 text-left text-[16px] font-normal leading-[1.6] tracking-[-0.2px] text-[#181c23] sm:text-[18px] lg:space-y-5 lg:text-[19px] lg:leading-[1.65]`}
        >
          <p>I know, to some extent, you must already be thinking:</p>
          <p className="font-bold text-[#181c23]">
            &quot;Almost every job role is changing...&quot;
          </p>
          <p>
            ...and AI is changing how organisations work across different
            industries.
          </p>
          <p>
            When <strong className="font-bold text-[#181c23]">Elon Musk</strong>{" "}
            was asked about whether AI would disrupt jobs,{" "}
            <em className="font-normal italic">
              he said the rate of change caused by AI could be
            </em>{" "}
            <strong className="font-bold italic text-[#181c23]">
              &quot;pretty radical.&quot;
            </strong>
          </p>
          <p>And yes, that concern is understandable.</p>
          <p>So here&apos;s the thing:</p>
          <p className="font-semibold underline text-[#181c23] decoration-[#181c23]/60 underline-offset-4">
            There are two ways to get ahead.
          </p>
        </div>

        {/* Path Cards Wrapper */}
        <div className="flex w-full flex-col items-center gap-4 py-2 sm:gap-5">
          {/* Path 01 Card - Frame 2147231153 */}
          <PathCard
            number="01"
            title="Use AI To Become More Productive"
          >
            <p className="leading-[1.6]">
              You can learn how to integrate AI into your work, automate
              repetitive tasks and become more productive using tools like{" "}
              <strong className="font-bold text-white">
                n8n, Make, Claude
              </strong>{" "}
              and other AI automation platforms.
            </p>
            <p className="mt-3 mb-1 font-bold text-white">For example:</p>
            <p className="leading-[1.6]">
              An accountant might use AI tools to automate parts of reporting,
              reconciliation or repetitive workflows.
            </p>
            <p className="mt-2">That is valuable.</p>
            <p className="mt-1">
              That is{" "}
              <strong className="font-bold tracking-wider text-white">
                PRODUCTIVITY.
              </strong>
            </p>
          </PathCard>

          {/* Divider text between cards */}
          <div
            className={`${salt.className} z-10 my-1 select-none text-center text-[28px] font-normal text-[#181c23] sm:text-[34px]`}
          >
            OR
          </div>

          {/* Path 02 Card - Inverted silhouette */}
          <PathCard
            number="02"
            title="Learn How To Engineer AI Systems"
            rotate180
          >
            <p className="leading-[1.6]">Or you can go deeper.</p>
            <p className="mt-2 leading-[1.6]">
              You can become the person who learns how to build the AI systems
              themselves.
            </p>
            <p className="mt-2 leading-[1.6]">
              The person who engineers the technology.
            </p>
            <p className="mt-2 leading-[1.6]">
              The person who helps create the systems that may eventually change
              how certain jobs, tasks and workflows are done.
            </p>
            <p className="mt-3">
              That is{" "}
              <strong className="font-bold tracking-wider text-white">
                AI ENGINEERING.
              </strong>
            </p>
          </PathCard>
        </div>

        {/* Outro Paragraphs */}
        <div
          className={`${space.className} w-full space-y-4 text-left text-[16px] leading-[1.6] tracking-[-0.1px] text-[#181c23] sm:text-[18px] lg:space-y-5 lg:text-[19px] lg:leading-[1.65]`}
        >
          <p className="font-medium text-[#181c23]">
            And I think you already know which path creates the bigger technical
            career opportunity.
          </p>
          <p className="font-bold italic text-[#181c23]">
            But Here&apos;s the caveat:
          </p>
          <p className="font-medium text-[#181c23]">
            Learning AI tools like n8n, Make or Claude can help you become more
            productive at work or improve your business operations.
          </p>
          <p>
            <span className="font-normal">
              But learning those tools alone does not prepare you to
            </span>
            <strong className="font-bold text-[#181c23]">
              {" "}
              crack serious AI/ML Engineering roles
            </strong>
            <span className="font-normal">
              . That requires a much deeper skill set. So think about it for a
              second:
            </span>
          </p>
          <div className="space-y-2 pt-2">
            <p className="font-bold text-[#181c23]">
              Do you only want to use AI...
            </p>
            <p className="pl-4 font-medium italic text-[#181c23]/80">or</p>
            <p className="font-medium text-[#181c23]">
              Do you want to learn how to{" "}
              <strong className="font-bold text-[#181c23] underline decoration-[#f25e25] underline-offset-4">
                build the systems behind it?
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PathCard({
  number,
  title,
  children,
  rotate180 = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  rotate180?: boolean;
}) {
  return (
    <article
      className="relative w-full max-w-[800px] transition-transform duration-300 hover:scale-[1.008]"
    >
      {/* Irregular card background silhouette matching Frame 2147231153 */}
      <svg
        viewBox="0 0 540 350"
        preserveAspectRatio="none"
        className={`pointer-events-none absolute inset-0 h-full w-full ${
          rotate180 ? "rotate-180" : ""
        }`}
        aria-hidden="true"
      >
        <path
          d="
            M 50 8
            C 28 6, 17 18, 14 42
            L 1 302
            C 0 323, 11 332, 34 333
            L 500 342
            C 520 343, 530 331, 531 310
            L 540 68
            C 541 48, 531 39, 510 37
            L 50 8
            Z
          "
          fill="#191919"
        />
      </svg>

      {/* Content - level horizontal text (0° rotation) */}
      <div
        className={`relative z-10 w-full ${
          rotate180
            ? "px-8 pt-8 pb-10 sm:px-12 sm:pt-9 sm:pb-12 lg:px-14 lg:pt-10 lg:pb-14"
            : "px-8 pt-9 pb-8 sm:px-12 sm:pt-11 sm:pb-10 lg:px-14 lg:pt-12 lg:pb-11"
        }`}
      >
        {/* Number Badge */}
        <div className="mb-2">
          <span
            className={`
              ${salt.className}
              inline-block
              text-[28px]
              font-normal
              leading-none
              text-white/95
              select-none
              sm:text-[34px]
            `}
          >
            {number}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`
            ${exo.className}
            mb-4
            text-[20px]
            font-bold
            leading-[1.25]
            tracking-[-0.3px]
            text-white
            sm:text-[23px]
            lg:text-[25px]
          `}
        >
          {title}
        </h3>

        {/* Content */}
        <div
          className={`
            ${space.className}
            w-full
            space-y-2
            text-[15px]
            font-normal
            leading-[1.65]
            text-[#e2e4e8]
            sm:text-[16px]
            lg:text-[17px]
          `}
        >
          {children}
        </div>
      </div>
    </article>
  );
}