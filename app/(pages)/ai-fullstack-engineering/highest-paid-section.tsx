import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

export default function HighestPaidSection() {
  return (
    <section className="bg-[#f8f5f1] px-5 py-14 sm:px-8 lg:px-12 xl:px-16 sm:py-18 lg:py-20 mt-12">
      <div className="mx-auto flex w-full flex-col items-center gap-[56px] sm:gap-[68px] lg:gap-[76px]">
        <div className="flex w-full max-w-[1120px] flex-col gap-12 sm:gap-16 lg:gap-20">
          <h2
            className={`${melodrama.className} relative max-w-[860px] text-[30px] font-bold leading-[1.1] tracking-[1.1px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.15] lg:tracking-[0.2px]`}
          >
            AI/ML Engineers Are{" "}
            <span className="relative inline-block text-[#f25e25]">
              One Of The{" "}
              <span className="relative inline-block">
                Highest Paid Employees Today!!
                <Image
                  src="/assets/images/ai-fullstack-engineering/highest-paid-highlight.svg"
                  alt=""
                  width={635}
                  height={62}
                  className="pointer-events-none absolute -bottom-[7px] left-0 h-[62px] w-[635px] max-w-[105%] select-none object-fill"
                />
              </span>
            </span>
          </h2>

          <div
            className={`${exo.className} space-y-5 lg:space-y-6 text-justify text-[17px] font-medium leading-[1.48] tracking-[0.2px] text-[#5a4136] sm:text-[18px] sm:leading-[1.55] lg:text-[20px] lg:leading-[1.45] lg:tracking-[0.4px]`}
          >
            <p>I know you&apos;ve recently seen social media posts about AI Engineering.</p>

            <p>
              Or maybe you saw job posts, salary screenshots or videos showing AI
              Engineers earning{" "}
              <strong className="font-bold">
                x10 what you currently earn or what you&apos;d dream of earning.
              </strong>
            </p>

            <p>And many thoughts raced through your mind, you thought:</p>

            <div className="space-y-3 leading-[1.65] lg:leading-[1.65]">
              <p>&quot;Wait... people are actually being paid this much to work in AI?&quot;</p>
              <p>&quot;If I earned that much, I&apos;ll sure have a better life&quot;</p>
              <p>&quot;I wish I could land a job that pays that much&quot;</p>
              <p>I get it!</p>
              <p>Anyone in their right sense would think the same.</p>
              <p>Wait!</p>
            </div>

            <p>
              You might have to{" "}
              <strong className="font-bold">STOP reading this letter further</strong>{" "}
              because I am now about to talk to only{" "}
              <strong className="font-bold">ONE</strong> set of people,
            </p>

            <p>Those who had a much deeper thought,</p>

            <p>
              Those who wondered, and passionately desired that they would have
              such skill that can{" "}
              <strong className="font-bold italic">rake in such monthly salary.</strong>
            </p>

            <p>If that&apos;s you, then here is the part you should pay attention to:</p>

            <p>
              Landing a Remote International Jobs that pays you salary too surreal
              for you to believe and imagine is possible.
            </p>

            <p>See for yourself</p>
          </div>
        </div>

        <div className="relative aspect-[1240/560] w-full max-w-[1240px] overflow-hidden">
          <Image
            src="/assets/images/ai-fullstack-engineering/highest-paid-jobs.png"
            alt="AI engineering job salary examples"
            width={1448}
            height={1086}
            className="absolute left-[-0.07%] top-[-31.7%] h-[166.07%] w-full max-w-none object-fill"
            sizes="(min-width: 1280px) 1240px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
