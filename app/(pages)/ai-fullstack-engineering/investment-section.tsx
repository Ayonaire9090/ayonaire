import { exo, melodrama } from "@/app/fonts";

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
    <section className="bg-gradient-to-b from-[#fefefe] to-[rgba(248,100,50,0.08)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 lg:gap-20">
        <div className="flex flex-col items-center gap-8 text-center lg:gap-10">
          <h2 className={`${melodrama.className} max-w-[1139px] text-[32px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-black sm:text-[40px] lg:text-[56px] lg:leading-[1.34]`}>
            Now Let&apos;s Talk About <span className="text-[#f25e25]">The Investment.</span>
          </h2>
          <div className={`${exo.className} w-full text-left text-[18px] font-medium leading-[1.65] tracking-[0.3px] text-[#263238] lg:text-[28px] lg:leading-[1.5]`}>
            <p>
              You&apos;re getting a <strong>10-month career transition programme</strong> built around:
            </p>
            <p>
              At this point, look at what sits inside <strong>AI Engineering 2.0:</strong>
            </p>
          </div>
        </div>

        <div className="rounded-[16px] bg-white px-6 py-8 shadow-[0_1px_10px_rgba(0,0,0,0.16)] sm:px-10 lg:px-[60px] lg:py-10">
          <ul className="grid gap-5 lg:gap-6">
            {investmentItems.map((item) => (
              <li key={item} className={`${exo.className} grid grid-cols-[30px_1fr] items-start gap-4 text-[17px] font-bold leading-[1.45] tracking-[0.2px] text-[#263238] sm:text-[20px] lg:text-[32px] lg:leading-[1.55]`}>
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
    <span className="mt-[0.65em] flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-black" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}