import Image from "next/image";
import { adineue, melodrama } from "@/app/fonts";

export default function AiBoomSideSection() {
  return (
    <section className="bg-[#fff5ee] px-4 py-16 sm:px-8 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10">
        <h2
          className={`${melodrama.className} w-full text-[36px] font-bold leading-[1.12] tracking-[-0.95px] text-[#181c23] sm:text-[48px] lg:text-[56px] lg:leading-[60.48px] lg:tracking-[-1.4px]`}
        >
          But here&apos;s the other side of the{" "}
          <span className="text-[#f25e25]">AI Boom.</span>
        </h2>

        <div
          className={`${adineue.className} w-full whitespace-pre-wrap text-justify text-[22px] font-normal leading-[1.55] tracking-[-0.3px] text-[#181c23] lg:text-[28px] lg:leading-[40px] lg:tracking-[-0.4px]`}
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

        <div className="flex w-full max-w-[1130px] flex-col items-center gap-2 pb-10">
          <PathCard
            asset="/assets/images/ai-fullstack-engineering/ai-boom-card-top.svg"
            number="01"
            title="Use AI To Become More Productive"
            className="lg:min-h-[738px]"
          >
            <p>
              You can learn how to integrate AI into your work, automate
              repetitive tasks and become more productive using tools like{" "}
              <strong className="font-bold">n8n, Make, Claude</strong> and
              other AI automation platforms.
            </p>
            <p className="font-bold">For example:</p>
            <p>
              An accountant might use AI tools to automate parts of reporting,
              reconciliation or repetitive workflows.
            </p>
            <p>That is valuable.</p>
            <p>
              That is <strong className="font-bold">PRODUCTIVITY.</strong>
            </p>
          </PathCard>

          <PathCard
            asset="/assets/images/ai-fullstack-engineering/ai-boom-card-bottom.svg"
            number="02"
            title="Learn How To Engineer AI Systems"
            className="lg:min-h-[569px]"
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
              That is <strong className="font-semibold">AI ENGINEERING.</strong>
            </p>
          </PathCard>
        </div>

        <div
          className={`${adineue.className} max-w-[981px] whitespace-pre-wrap text-[22px] leading-[1.8] tracking-[0.4px] text-[#181c23] lg:text-[28px] lg:leading-[57px] lg:tracking-[0.6px]`}
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
  asset,
  number,
  title,
  children,
  className = "",
}: {
  asset: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`relative w-full max-w-[1130px] overflow-hidden ${className}`}>
      <Image
        src={asset}
        alt=""
        fill
        sizes="(min-width: 1024px) 1130px, 100vw"
        className="object-fill"
      />
      <div className="relative z-10 flex min-h-[520px] flex-col justify-center px-8 py-16 text-[#f5f5f5] sm:px-14 lg:min-h-[inherit] lg:px-[108px]">
        <p className="mb-7 rotate-[1deg] text-[30px] text-white lg:text-[36px]">
          {number}
        </p>
        <h3 className="mb-8 text-[25px] font-bold leading-[1.25] tracking-[0.4px] text-white lg:text-[36px] lg:leading-[44px] lg:tracking-[0.6px]">
          {title}
        </h3>
        <div
          className={`${adineue.className} space-y-3 whitespace-pre-wrap text-[22px] leading-[1.65] lg:text-[32px] lg:leading-[58px]`}
        >
          {children}
        </div>
      </div>
    </article>
  );
}
