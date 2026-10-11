import Image from "next/image";
import { exo, melodrama, space } from "@/app/fonts";

export default function EverydaySystemsSection() {
  return (
    <section className="bg-[#fefaf8] px-5 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-32 lg:px-12 lg:pt-24 lg:pb-36 xl:px-16 xl:pt-28 xl:pb-40">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10">
       <h2
  className={`${melodrama.className} max-w-[1240px] text-center text-[24px] xs:text-[28px] font-bold leading-[1.18] tracking-[-0.5px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
>
  Now you see that the terms only seem technical, but they are{" "}
  <span className="underline">actually</span>{" "}
  <span className="relative inline-block text-[#f25e25] underline">
    systems you interact
    <Image
      src="/assets/images/ai-fullstack-engineering/everyday-systems-highlight.svg"
      alt=""
      width={496}
      height={62}
      className="pointer-events-none absolute left-1/2 top-0.5 sm:top-[2px] h-7 sm:h-10 md:h-12 lg:h-[62px] w-[min(496px,108%)] -translate-x-1/2 select-none object-fill"
    />
  </span>{" "}
  <span className="underline">with everyday</span>
</h2>

        <div
          className={`${space.className} max-w-[1120px] space-y-5 whitespace-pre-wrap lg:space-y-6 text-left text-[17px] font-normal leading-[1.6] tracking-[0.4px] text-[#181c23] lg:text-[20px] lg:leading-[1.65] lg:tracking-[0.2px]`}
        >
          <p>Let me make it even more real. Imagine you order something on Amazon.</p>

          <p>
            Instead of opening the app every time to track your package, you can
            simply ask an AI bot:{" "}
            <strong className="font-bold">
              &quot;Hey, what&apos;s the update on my order?&quot;
            </strong>
          </p>

          <p>
            And that AI system can connect to the right information, retrieve
            your order details, and give you an answer.{" "}
            <strong className="font-bold">
              That is the kind of thing AI Engineers build.
            </strong>
          </p>

          <p>
            They take AI &gt; connect it to real data, applications and business
            systems &gt; to solve real problems. And of course,{" "}
            <strong className="font-bold">
              this is what companies are looking for.
            </strong>{" "}
            Not just someone who can say, &quot;I know how to use ChatGPT or N8N
            or Claude&quot;
          </p>

          <p>
            They&apos;re looking for people who can{" "}
            <strong className="font-bold">
              use AI to engineer solutions to real problems.
            </strong>
          </p>

          <p>Or Imagine your bank notices a transaction that looks unusual.</p>
          <p>
            Maybe the amount is much larger than what you normally spend, or the
            transaction suddenly comes from a location or device that does not
            match your usual behaviour.
          </p>

          <p>
            Within seconds, the system can flag that transaction as suspicious
            and decide whether it needs further review.
          </p>
          <p>
            It has to recognise patterns, compare behaviour, work with
            transaction data and help the bank respond appropriately.
          </p>

          <p>
            Someone has to build that system too. That is the kind of work AI/ML
            Engineers do.
          </p>

          <p className="font-bold">
            They take AI {">"} connect it to real business data and systems {">"} use it to solve real problems.
          </p>

          <p>
            And of course, this is what companies are looking for. Not just
            someone who can say:
          </p>

          <p className="font-bold">
            &quot;I know how to use ChatGPT, n8n or Claude.&quot;
          </p>
          <p>But someone who can say:</p>
          <p className="font-bold">
            &quot;I know how to use AI to engineer solutions to real business
            problems.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}


