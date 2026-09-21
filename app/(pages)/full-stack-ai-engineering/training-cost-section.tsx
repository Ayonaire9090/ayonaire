import { exo, exoMedium, melodrama, salt } from "@/app/fonts";

const programmeExamples = [
  {
    name: "TECH365",
    price: "₦4.5 Million",
    duration: "5 Months",
    note: "For example:",
    featured: true,
  },
  {
    name: "AI TECH",
    price: "₦6.75 Million",
    duration: "10 Months",
  },
  {
    name: "DataMites",
    price: "$2,500",
    duration: "8 Months",
  },
  {
    name: "SQI.EDU",
    price: "₦1.5 Million",
    duration: "8 Months",
  },
  {
    name: "Digital Regenesys",
    price: "₦2.4 Million",
    duration: "6 Months",
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
              uppercase
              leading-[1.12]
              tracking-[0.1px]
              text-[#181c23]

              sm:text-[34px]

              lg:text-[46px]
              lg:leading-[1.1]
            `}
          >
            Let&apos;s look at what{" "}
            <span className="text-[#f25e25]">AI/ML Training</span>{" "}
            already costs.
          </h2>

          <p
            className={`
              ${exoMedium.className}
              max-w-[799px]
              text-justify
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
          {programmeExamples.map((programme, index) => {
            return (
              <article
                key={programme.name}
                className={`
                  relative
                  flex
                  min-h-[150px]
                  items-center
                  justify-center
                  bg-[#ffdccf]
                  px-4
                  py-6
                  text-center
                  shadow-[0_3px_5px_rgba(24,28,35,0.16)]

                  sm:min-h-[175px]
                  sm:px-6
                  sm:py-7

                  lg:min-h-[220px]
                  lg:px-8
                  lg:py-8

                  ${
                    programme.featured
                      ? "col-span-2 mx-auto w-[70%] sm:w-[55%] lg:w-[52%]"
                      : ""
                  }
                `}
                style={{
                  borderRadius:
                    index === 0
                      ? "14px 7px 10px 8px"
                      : index === 1
                        ? "12px 8px 9px 10px"
                        : index === 2
                          ? "10px 14px 8px 12px"
                          : index === 3
                            ? "12px 7px 10px 9px"
                            : "10px 13px 9px 12px",

                  transform: `rotate(${
                    [-1.5, -1.2, 1.2, -1.2, 1.5][index]
                  }deg)`,
                }}
              >
                <div className="flex flex-col items-center justify-center gap-1.5 text-black sm:gap-2">
                  {programme.note && (
                    <p
                      className={`
                        ${salt.className}
                        absolute
                        left-4
                        top-4
                        text-left
                        text-[10px]
                        font-normal
                        tracking-[0.03em]

                        sm:left-6
                        sm:top-5
                        sm:text-[12px]

                        lg:left-7
                        lg:top-6
                        lg:text-[14px]
                      `}
                    >
                      {programme.note}
                    </p>
                  )}

                  <h3
                    className={`
                      ${exoMedium.className}
                      text-[11px]
                      font-bold

                      sm:text-[13px]
                      lg:text-[16px]
                    `}
                  >
                    {programme.name}
                  </h3>

                  <p
                    className={`
                      ${exoMedium.className}
                      text-[9px]
                      font-normal

                      sm:text-[11px]
                      lg:text-[14px]
                    `}
                  >
                    AI Engineering Programme
                  </p>

                  <p
                    className={`
                      text-[9px]
                      font-normal

                      sm:text-[11px]
                      lg:text-[14px]
                    `}
                  >
                    <span className={exoMedium.className}>Approx.</span>{" "}
                    <strong className={exo.className}>{programme.price}</strong>
                  </p>

                  <p
                    className={`
                      text-[9px]
                      font-normal

                      sm:text-[11px]
                      lg:text-[14px]
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
            text-justify
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