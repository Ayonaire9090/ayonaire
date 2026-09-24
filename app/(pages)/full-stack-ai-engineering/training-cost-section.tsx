import Image from "next/image";
import { exo, exoMedium, melodrama, salt } from "@/app/fonts";

const programmeExamples = [
  {
    name: "TECH365",
    price: "₦4.5 Million",
    duration: "5 Months",
    note: "For example:",
    featured: true,
    svg: "/assets/images/ai-fullstack-engineering/rec1.svg",
    aspectRatio: "639 / 443",
  },
  {
    name: "AI TECH",
    price: "₦6.75 Million",
    duration: "10 Months",
    svg: "/assets/images/ai-fullstack-engineering/rec2.svg",
    aspectRatio: "639 / 443",
  },
  {
    name: "DataMites",
    price: "$2,500",
    duration: "8 Months",
    svg: "/assets/images/ai-fullstack-engineering/rec3.svg",
    aspectRatio: "658 / 467",
  },
  {
    name: "SQI.EDU",
    price: "₦1.5 Million",
    duration: "8 Months",
    svg: "/assets/images/ai-fullstack-engineering/rec4.svg",
    aspectRatio: "639 / 443",
  },
  {
    name: "Digital Regenesys",
    price: "₦2.4 Million",
    duration: "6 Months",
    svg: "/assets/images/ai-fullstack-engineering/rec5.svg",
    aspectRatio: "658 / 467",
  },
];

export default function TrainingCostSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-16">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-7 text-center lg:gap-9">
          <h2
            className={`
              ${melodrama.className}
              max-w-[940px]
              text-[28px]
              font-bold
              leading-[1.12]
              tracking-[0.1px]
              text-[#181c23]

              sm:text-[34px]

              lg:text-[46px]
              lg:leading-[1.1]
            `}
          >
            Let&apos;s look at What{" "}
            <span className="text-[#f25e25]">AI/ML Training</span>{" "}
            Already Costs.
          </h2>

          <p
            className={`
              ${exoMedium.className}
              max-w-[799px]
              text-center
              text-[16px]
              font-medium
              leading-[1.65]
              tracking-[0.2px]
              text-[#5a4136]

              sm:text-[18px]

              lg:text-[22px]
              lg:leading-[1.5]
            `}
          >
            There are AI Engineering programmes in the market priced at several
            million naira.
          </p>
        </div>

        {/* PROGRAMME CARDS */}
        <div className="grid w-full grid-cols-2 gap-5 sm:gap-7 lg:gap-9">
          {programmeExamples.map((programme) => {
            return (
              <article
                key={programme.name}
                className={`
                  relative
                  w-full
                  ${
                    programme.featured
                      ? "col-span-2 mx-auto w-[85%] sm:w-[65%] lg:w-[52%]"
                      : ""
                  }
                `}
                style={{
                  aspectRatio: programme.aspectRatio,
                }}
              >
                {/* SVG Background shape */}
                <Image
                  src={programme.svg}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 639px, 100vw"
                  className="pointer-events-none select-none object-fill"
                  priority
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-4 text-center text-black sm:gap-2 sm:p-6 lg:gap-2.5 lg:p-8">
                  {programme.note && (
                    <p
                      className={`
                        ${salt.className}
                        absolute
                        left-[8%]
                        top-[8%]
                        text-left
                        text-xs
                        font-normal
                        tracking-[0.03em]

                        sm:left-[9%]
                        sm:top-[9%]
                        sm:text-[13px]

                        lg:left-[10%]
                        lg:top-[10%]
                        lg:text-[16px]
                      `}
                    >
                      {programme.note}
                    </p>
                  )}

                  <h3
                    className={`
                      ${exoMedium.className}
                      text-[12px]
                      font-bold

                      sm:text-[16px]
                      lg:text-[20px]
                    `}
                  >
                    {programme.name}
                  </h3>

                  <p
                    className={`
                      ${exoMedium.className}
                      text-xs
                      font-normal

                      sm:text-[13px]
                      lg:text-[16px]
                    `}
                  >
                    AI Engineering Programme
                  </p>

                  <p
                    className={`
                      text-xs
                      font-normal

                      sm:text-[13px]
                      lg:text-[16px]
                    `}
                  >
                    <span className={exoMedium.className}>Approx.</span>{" "}
                    <strong className={exo.className}>{programme.price}</strong>
                  </p>

                  <p
                    className={`
                      text-xs
                      font-normal

                      sm:text-[13px]
                      lg:text-[16px]
                    `}
                  >
                    <span className={exoMedium.className}>Duration:</span>{" "}
                    <strong className={exo.className}>{programme.duration}</strong>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM COPY */}
        <div
          className={`
            ${exoMedium.className}
            w-full
            space-y-6
            text-left
            text-[16px]
            font-medium
            leading-[1.7]
            tracking-[0.2px]
            text-[#5a4136]

            sm:text-[18px]

            lg:text-[22px]
            lg:leading-[1.65]
          `}
        >
          <p>
            We are not showing these programmes to attack another institution
            or claim that price alone determines quality.
          </p>

          <div>
            <p>
              So yes,{" "}
              <strong className="italic">
                AI training can be a significant investment.
              </strong>
            </p>

            <p>But here&apos;s where it gets interesting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}