import { adineue, exoMedium, melodrama } from "@/app/fonts";

const investmentItems = [
  "10 Months of Live Training",
  "32 Structured Modules",
  "45+ Practical Projects",
  "Industry-Based Projects",
  "Job Simulation Experience",
  "Practical Experience / Virtual Internship",
  "Individual Capstone Project",
  "Group Capstone Project",
  "Project Presentations",
  "Project Defence",
  "AI Evaluation",
  "AI Security",
  "AI Governance",
  "Production AI Engineering",
  "Career Accelerator",
  "GitHub & Proof of Work",
  "Professional Portfolio Website",
  "Building in Public Workshop",
  "Open-Source Contribution Guidance",
  "Online Credibility & Professional Branding",
  "ATS Resume Support",
  "LinkedIn Positioning",
  "Skill Gap Analysis",
  "Career Roadmap",
  "Recruiter Outreach Support",
  "Interview & Job Application Playbook",
  "Interview Preparation",
  "Mock Interviews",
  "Virtual Interview Practice",
  "Freelancing AI Agent",
  "Talent Marketplace",
  "Career Readiness Dashboard",
  "Career Mentorship",
  "Job Readiness",
  "Work Readiness",
  "Job Assistance",
  "Job Placement Assistance",
  "Career Transition Support",
];

export default function InvestmentSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FEFEFE_0%,rgba(248,100,50,0.22)_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:gap-14">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-6 text-center lg:gap-8">
          <h2
            className={`
              ${melodrama.className}
              max-w-[1000px]
              text-[32px]
              font-bold
              leading-[1.12]
              tracking-[-0.5px]
              text-[#181c23]

              sm:text-[42px]

              lg:text-[56px]
              lg:leading-[1.15]
            `}
          >
            Now Let&apos;s Talk About{" "}
            <span className="text-[#f25e25]">
              The Investment.
            </span>
          </h2>

          <div
            className={`
              ${exoMedium.className}
              flex
              w-full
              flex-col
              items-center
              gap-2
              text-center
              text-[16px]
              font-medium
              leading-[1.6]
              tracking-[0.1px]
              text-[#181c23]

              sm:text-[18px]

              lg:text-[22px]
              lg:leading-[1.5]
            `}
          >
            <p>
              You&apos;re getting a{" "}
              <strong className="font-bold text-[#181c23]">10-month career transition programme</strong> built
              around:
            </p>

            <p>
              At this point, look at what sits inside{" "}
              <strong className="font-bold text-[#181c23]">AI Engineering 2.0:</strong>
            </p>
          </div>
        </div>

        {/* INVESTMENT LIST CARD */}
        <div className="w-full max-w-[1000px] rounded-[24px] border border-[#eee6e2] bg-white px-6 py-8 shadow-sm sm:px-12 sm:py-12 lg:px-16 lg:py-14">
          <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-5.5">
            {investmentItems.map((item) => (
              <li
                key={item}
                className={`
                  ${adineue.className}
                  flex
                  items-start
                  gap-4

                  text-[15px]
                  font-bold
                  leading-[1.4]
                  tracking-[0.1px]
                  text-[#181c23]

                  sm:text-[17px]

                  lg:text-[20px]
                `}
              >
                <BulletPair />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BulletPair() {
  return (
    <span className="mt-[0.35em] flex shrink-0 items-center gap-[3px]">
      <span className="h-[7px] w-[14px] rounded-[1px] bg-[#181c23]" />
      <span className="h-[7px] w-[14px] rounded-[1px] bg-[#f25e25]" />
    </span>
  );
}