import Image from "next/image";
import { exo, melodrama, space } from "@/app/fonts";

export default function HighestPaidSection() {
  return (
    <section className="relative z-0 bg-[#FFFDF7] px-5 pb-14 pt-28 sm:px-8 sm:pb-18 sm:pt-36 md:pt-40 lg:px-12 lg:pb-20 lg:pt-48 xl:px-16 -mt-[65px]">
      <div className="mx-auto flex w-full flex-col items-center gap-[56px] sm:gap-[68px] lg:gap-[76px]">
        <div className="flex w-full max-w-[860px] mx-auto flex-col gap-10 sm:gap-12 lg:gap-14 text-left">
          <h2
            className={`${melodrama.className} relative w-full text-left text-[30px] font-bold leading-[1.1] tracking-[1.1px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.15] lg:tracking-[0.2px]`}
          >
            AI/ML Engineers Are{" "}
            <span className="text-[#f25e25]">One Of The</span>{" "}
            <span className="relative inline-block text-[#f25e25]">
              Highest Paid Employees
              <Image
                src="/assets/images/ai-fullstack-engineering/highest-paid-highlight.svg"
                alt=""
                width={480}
                height={62}
                className="pointer-events-none absolute -bottom-1 sm:-bottom-[7px] left-0 h-7 sm:h-10 md:h-12 lg:h-[62px] w-full select-none object-fill"
              />
            </span>{" "}
            <span className="text-[#f25e25]">Today!!</span>
          </h2>

          <div
            className={`${space.className} w-full space-y-5 lg:space-y-6 text-left text-[17px] font-medium leading-[1.48] tracking-[0.2px] text-[#5a4136] sm:text-[18px] sm:leading-[1.55] lg:text-[20px] lg:leading-[1.45] lg:tracking-[0.4px]`}
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

        <div className="flex w-full max-w-[351px] flex-col gap-3 sm:hidden">
          {["fr1.png", "fr2.png", "fr3.png"].map((imageName, index) => (
            <div
              key={imageName}
              className="relative aspect-[351/430] w-full overflow-hidden"
            >
              <Image
                src={`/assets/images/${imageName}`}
                alt={`AI engineering salary example ${index + 1}`}
                width={351}
                height={744}
                className="absolute left-0 top-0 h-auto w-full max-w-none"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        <div className="relative hidden aspect-[1240/560] w-full max-w-[1240px] overflow-hidden sm:block">
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
