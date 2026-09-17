import { exo, melodrama } from "@/app/fonts";

const programmeExamples = [
  {
    name: "TECH365",
    price: "?4.5 Million",
    duration: "5 Months",
    note: "For example:",
    featured: true,
  },
  {
    name: "AI TECH",
    price: "?6.75 Million",
    duration: "10 Months",
  },
  {
    name: "DataMites",
    price: "$2,500",
    duration: "8 Months",
  },
  {
    name: "SQI.EDU",
    price: "?1.5 Million",
    duration: "8 Months",
  },
  {
    name: "Digital Regenesys",
    price: "?2.4 Million",
    duration: "6 Months",
  },
];

export default function TrainingCostSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-8 text-center lg:gap-11">
          <h2 className={`${melodrama.className} max-w-[940px] text-[32px] font-bold uppercase leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.08]`}>
            Let&apos;s look at what <span className="text-[#f25e25]">AI/ML Training</span> already costs.
          </h2>
          <p className={`${exo.className} max-w-[799px] text-justify text-[18px] font-medium leading-[1.65] tracking-[0.5px] text-[#5a4136] sm:text-[22px] lg:text-[32px] lg:leading-[1.4]`}>
            There are AI Engineering programmes in the market priced at several million naira.
          </p>
        </div>

        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-10">
          {programmeExamples.map((programme, index) => (
            <article
              key={programme.name}
              className={`rounded-[22px] bg-[#ffdccf] p-8 text-center shadow-[0_8px_16px_rgba(24,28,35,0.14)] lg:min-h-[280px] lg:p-12 ${programme.featured ? "lg:col-span-2 lg:mx-auto lg:w-[636px]" : ""}`}
              style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
            >
              <div className="flex h-full flex-col items-center justify-center gap-5 text-black">
                {programme.note ? (
                  <p className={`${exo.className} w-full text-left text-[16px] font-bold uppercase tracking-[0.04em] lg:text-[20px]`}>
                    {programme.note}
                  </p>
                ) : null}
                <h3 className={`${exo.className} text-[20px] font-bold lg:text-[24px]`}>{programme.name}</h3>
                <p className={`${exo.className} text-[18px] font-normal lg:text-[24px]`}>AI Engineering Programme</p>
                <p className={`${exo.className} text-[18px] font-normal lg:text-[24px]`}>
                  Approx. <strong>{programme.price}</strong>
                </p>
                <p className={`${exo.className} text-[18px] font-normal lg:text-[24px]`}>
                  Duration: <strong>{programme.duration}</strong>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={`${exo.className} w-full space-y-7 text-justify text-[18px] font-medium leading-[1.75] tracking-[0.4px] text-[#5a4136] sm:text-[22px] lg:text-[32px] lg:leading-[1.75]`}>
          <p>
            We are not showing these programmes to attack another institution or claim that price alone determines quality.
          </p>
          <div>
            <p>
              So yes, <strong className="italic">AI training can be a significant investment.</strong>
            </p>
            <p>But here&apos;s where it gets interesting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}