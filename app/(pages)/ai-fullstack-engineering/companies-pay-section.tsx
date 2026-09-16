import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

export default function CompaniesPaySection() {
  return (
    <section className="bg-[#fdfbf9] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8">
        <h2
          className={`${melodrama.className} text-center text-[30px] font-bold leading-[1.12] tracking-[0.4px] text-[#181c23] sm:text-[36px] lg:text-[34px] lg:leading-[1.16] lg:tracking-[0.2px]`}
        >
          Companies Pay People Who Build AI Systems{" "}
          <span className="relative inline-block text-[#f25e25]">
            Because It Saves Them Millions
            <Image
              src="/assets/images/ai-fullstack-engineering/companies-pay-highlight.svg"
              alt=""
              width={510}
              height={62}
              className="pointer-events-none absolute left-1/2 top-[4px] h-[62px] w-[510px] max-w-[104%] -translate-x-1/2 select-none object-fill"
            />
          </span>{" "}
          <span className="text-[#f25e25]">Of $$$</span>
        </h2>

        <div
          className={`${exo.className} w-full max-w-[1120px] space-y-5 whitespace-pre-wrap lg:space-y-6 text-justify text-[17px] font-medium leading-[1.65] text-[#5a4136] sm:text-[18px] lg:text-[20px] lg:leading-[1.65]`}
        >
          <p>Of course,</p>
          <p>
            They are not paying those salaries because somebody knows how to
            type prompts into ChatGPT...lol...else we would all be rich niggas
          </p>
          <p>
            They are paying people who can understand difficult business
            problems, work with data, write software, build models, use modern
            AI systems intelligently.
          </p>
          <p>
            People who can develop applications, connect APIs and databases,
            deploy infrastructure, evaluate outputs, protect sensitive
            information, monitor performance and keep improving the system after
            it goes live.
          </p>
          <p>
            And while that looks like a bunch of bullshit that you have zero
            idea about...stick around for a minute more and it&apos;ll shock you
            to see it&apos;s not as complex at it seems.
          </p>
          <p>Before I show you, let me warn you beforehand.</p>
        </div>
      </div>
    </section>
  );
}
