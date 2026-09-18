import { exo, exoMedium, melodrama } from "@/app/fonts";

const beginnerPoints = [
  "You don't need a Computer Science degree.",
  "You don't need previous Machine Learning experience.",
  "You don't need previous AI Engineering experience.",
  "You don't even need to arrive knowing Python.",
  "And you certainly don't need to be a mathematics researcher.",
];

export default function BeginnerStartSection() {
  return (
    <section className="bg-[#fefefe] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 lg:gap-11">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className={`${melodrama.className} text-[28px] font-bold leading-[1.25] tracking-[0.6px] text-[#181c23] sm:text-[32px] lg:text-[40px]`}>
            But Can a Complete Beginner Really Start Here?
          </h2>
          <p className={`${exo.className} text-[24px] font-medium tracking-[0.8px] text-[#5a4136] lg:text-[32px]`}>
            Yes.
          </p>
        </div>

        <div className={`${exoMedium.className} space-y-7 text-justify text-[18px] font-medium leading-[1.65] tracking-[0.6px] text-[#5a4136] sm:text-[12px] lg:text-[22px] lg:leading-[1.45] lg:tracking-[1px]`}>
          <p className="font-extrabold">
            And we're not saying that because it sounds good in an advert.
          </p>
          <p>
            We've designed the journey so that you can start with the foundations and progressively build your way into more advanced AI Engineering.
          </p>
        </div>

        <ul className="grid gap-6 lg:gap-8">
          {beginnerPoints.map((point) => (
            <li key={point} className={`${exoMedium.className} grid grid-cols-[30px_1fr] items-start gap-4 text-[12px] font-bold leading-[1.45] tracking-[0.2px] text-[#181c23] sm:text-[24px] lg:text-[20px] lg:leading-[1.45]`}>
              <BulletPair />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BulletPair() {
  return (
    <span className="mt-[0.65em] flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-black" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}