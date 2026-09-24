import Image from "next/image";
import { exo, melodrama, space } from "@/app/fonts";

export default function HighestPaidSection() {
  return (
    <section className="relative z-0 bg-[#FEFBF6] px-6 pt-28 pb-0 sm:px-8 sm:pb-16 sm:pt-36 md:pt-40 lg:px-12 lg:pb-20 lg:pt-48 xl:px-16 -mt-16">
      <div className="mx-auto flex w-full flex-col items-center gap-10 sm:gap-14 lg:gap-16">
        {/* Frame 2147231158 */}
        <div className="flex w-full max-w-md sm:max-w-xl lg:max-w-[853px] mx-auto flex-col gap-12 sm:gap-16 lg:gap-20 items-start p-0">
          <h2
            className={`${melodrama.className} relative w-full text-center lg:text-left text-[24px] font-bold leading-tight tracking-[1px] text-[#181C23] sm:text-[36px] lg:text-[56px] lg:leading-[67px] lg:tracking-[1.76px] lg:max-w-[860px]`}
          >
            AI/ML ENGINEERS ARE{" "}
            <span className="text-[#f25e25]">ONE OF THE</span>{" "}
            <span className="relative inline-block text-[#f25e25]">
              HIGHEST PAID EMPLOYEES
              <Image
                src="/assets/images/ai-fullstack-engineering/highest-paid-highlight.svg"
                alt=""
                width={480}
                height={62}
                className="pointer-events-none absolute -bottom-1 sm:-bottom-[7px] left-0 h-7 sm:h-10 md:h-12 lg:h-[62px] w-full select-none object-fill"
              />
            </span>{" "}
            <span className="text-[#f25e25]">TODAY!!</span>
          </h2>

          <div
            className={`${space.className} w-full text-left lg:text-justify text-[16px] font-medium leading-[1.6] tracking-[0.5px] text-[#5A4136] sm:text-[18px] lg:text-[24px] lg:leading-[35px] lg:tracking-[1px] space-y-5 lg:space-y-6 lg:max-w-[853px]`}
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

            <div className="space-y-3 leading-[24px] lg:leading-[35px]">
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

            <p>See for yourself:</p>
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
