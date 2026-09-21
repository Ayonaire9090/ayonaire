import Image from "next/image";
import { exo, exoMedium, melodrama, space } from "@/app/fonts";

const ecosystemItems = [
  {
    number: "01",
    title: "AI Career Agent",
    body: "Your AI Career Agent acts as your career co-pilot, helping you improve your ATS-friendly resume, optimise your LinkedIn profile, strengthen your portfolio, identify skill gaps, build a clearer career roadmap, prepare for interviews, write cover letters and improve how you reach out to recruiters.",
  },
  {
    number: "02",
    title: "Job Assistance System",
    body: "Our Job Assistance System helps you discover relevant opportunities, understand how well you fit a role, identify missing skills, save jobs, track applications, monitor interviews and offers, know when to follow up and prepare properly for upcoming opportunities.",
  },
  {
    number: "03",
    title: "Freelancing Success Assistant",
    body: "Full-time employment is not your only possible path. The Freelancing Success Assistant helps you position your AI/ML skills for platforms like Upwork and Fiverr by improving your profile, headline, service descriptions, pricing, portfolio and proposals, while also helping you discover and track freelance opportunities.",
  },
  {
    number: "04",
    title: "Build Your Proof Of Work",
    body: "Create GitHub repositories, deployed applications, project documentation, capstones and a professional portfolio that show what you can do.",
  },
];

export default function CareerEcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8d8c9] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[1600px] max-w-none -translate-x-1/2 bg-white [clip-path:polygon(8%_0,28%_42%,55%_0,76%_42%,100%_42%,100%_100%,0_100%,0_100%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        <h2 className={`${melodrama.className} max-w-[846px] text-center text-[32px] font-bold leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.13]`}>
          This is your <span className="text-[#f25e25]">Complete Career</span> Transition Ecosystem.
        </h2>

        <div className="w-full overflow-x-auto pb-4">
          <div className="flex min-w-max gap-6 lg:gap-10">
            {ecosystemItems.map((item) => (
              <article key={item.number} className="relative h-[560px] w-[330px] shrink-0 overflow-hidden rounded-[28px] border-[3px] border-[#4d4c4d] bg-[#020000] p-6 text-white sm:w-[390px] lg:h-[633px] lg:w-[472px] lg:p-8">
                <Image src="/assets/images/ai-fullstack-engineering/career-framework-card-bg.png" alt="" fill sizes="472px" className="pointer-events-none object-cover opacity-95" />
                <div className="relative z-10 flex h-full flex-col">
                  <p className={`${exo.className} text-[16px] font-medium tracking-[0.08em] text-white/60 lg:text-[20px]`}>({item.number})</p>
                  <h3 className={`${exo.className} mt-10 text-[18px] font-semibold uppercase leading-[1.28] tracking-[0.09em] text-[#f25e25] lg:text-[24px]`}>
                    {item.title}
                  </h3>
                  <p className={`${space.className} mt-auto text-[12px] font-bold  leading-[1.45] tracking-[0.05em] text-white/80 lg:text-[18px] lg:leading-[1.35]`}>
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}