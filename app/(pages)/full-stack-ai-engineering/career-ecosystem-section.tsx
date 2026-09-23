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
    title: "Talent Marketplace",
    body: "Instead of always being the one searching for employers, our Talent Marketplace is designed to also help employers discover you. Your profile can showcase your skills, projects, GitHub, portfolio,",
  },
  {
    number: "05",
    title: "Portfolio Development",
    body: "Your projects should not just sit in a folder on your laptop. We help you turn your strongest work into a professional portfolio that shows employers and clients",
  },
  {
    number: "06",
    title: "ATS Resume Support",
    body: "Your resume should reflect the AI/ML Engineer you are becoming. We help you structure your resume around your skills, projects, practical experience and target roles so that your career",
  },
  {
    number: "07",
    title: "LinkedIn Positioning",
    body: "Your LinkedIn profile should do more than list your previous jobs. We help you position your headline, About section, skills, projects and experience so",
  },
  {
    number: "08",
    title: "Skill Gap Analysis",
    body: "You should not have to keep guessing what you are missing. The Skill Gap Analyzer helps you compare where you are today with the AI/ML role you want, so",
  },
  {
    number: "09",
    title: "Career Roadmap",
    body: "Once you understand your target role and current gaps, we help you turn that into a clearer roadmap. You can see what to learn, what projects to build,",
  },
  {
    number: "10",
    title: "Building in Public",
    body: "You won't wait until the end of the programme before people start seeing what you can do. You will learn how to share your projects, lessons, technical opinions, GitHub work and progress publicly, while also learning how to find and",
  },
  {
    number: "11",
    title: "Professional Branding",
    body: "Being technically capable is important, but the market also needs to understand what you do. We help you build a clearer professional identity around your",
  },
  {
    number: "12",
    title: "Recruiter Outreach",
    body: "Instead of sending generic messages and hoping somebody responds, you will learn how to approach recruiters and hiring managers more intentionally, communicate your value clearly",
  },
  {
    number: "13",
    title: "Interview Preparation",
    body: "Getting invited to an interview is only useful if you are prepared when it happens. We help you prepare for technical, behavioural and project-based questions so you can communicate your thinking, explain your experience and discuss your work with more confidence.",
  },
  {
    number: "14",
    title: "Mock & Virtual Interviews",
    body: "You should not wait until the real interview to discover what you struggle with. Through Mock Interviews and Virtual Interview Practice, you get opportunities to answer questions, explain your projects, receive feedback and improve before the actual opportunity arrives.",
  },
  {
    number: "15",
    title: "Project Defence",
    body: "Building a project is one thing: explaining why you built that way is another. You will practise discussing your architecture, technical decisions, challenges, results, failures, trade-offs and improvements so you can confidently defend the work in your portfolio.",
  },
  {
    number: "16",
    title: "Job Readiness",
    body: "Job Readiness focuses on helping you become better prepared to compete for opportunities through your resume, LinkedIn, GitHub, portfolio, role targeting, applications, interview preparation, recruiter communication and professional positioning.",
  },
  {
    number: "17",
    title: "Work Readiness",
    body: "Work Readiness prepares you for what happens after you get the opportunity. You will develop stronger communication, teamwork, problem-solving, stakeholder management, documentation, presentation, time management, professionalism and workplace collaboration skills.",
  },
  {
    number: "18",
    title: "Career Mentorship",
    body: "Throughout the journey, Career Mentorship helps you make better decisions around your target roles, projects, portfolio, positioning, interview preparation and next career moves so you are not left trying to figure everything out alone.",
  },
  {
    number: "19",
    title: "Career Readiness Dashboard",
    body: "Your Career Readiness Dashboard brings the journey together by helping you see your progress across your resume, LinkedIn, portfolio, GitHub, skill gaps, interview preparation and overall readiness for the market.",
  },
  {
    number: "20",
    title: "Job Simulation & Practical Experience",
    body: "Through Job Simulation and practical experience, you will work through professional-style scenarios that require you to understand a problem, make decisions, build, present your work, receive feedback and improve, giving you exposure before your first real AI/ML role.",
  },
  {
    number: "21",
    title: "Talent Opportunities",
    body: "Where available, we also create opportunities for learners to become visible to recruiters, employers and industry professionals through talent sessions, job fairs and our wider Career Accelerator ecosystem.",
  }
];

export default function CareerEcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-[120px] lg:pt-36 xl:px-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[12.59375rem] sm:h-[25.1875rem] w-screen max-w-none -translate-x-1/2 overflow-hidden">
        <svg viewBox="0 0 1440 403" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" preserveAspectRatio="none">
          <path d="M-4.27734 0H1456.05L1468.72 120.9H1157L853.5 23.2188L459.5 120.9L198 23.2188L-4.27734 403V0Z" fill="#FDDDD2" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        <h2 className={`${melodrama.className} max-w-[846px] text-center text-[32px] font-bold leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.13]`}>
          This is your <span className="text-[#f25e25]">Complete Career</span> Transition Ecosystem.
        </h2>

        <div className="w-full overflow-x-auto pb-4">
          <div className="flex min-w-max gap-6 lg:gap-10">
            {ecosystemItems.map((item) => (
              <article key={item.number} className="relative h-[560px] w-[330px] shrink-0 overflow-hidden rounded-[28px] border-[3px] border-[#4d4c4d] bg-[#020000] bg-[url('/assets/images/ai-fullstack-engineering/career-framework-pattern.png')] bg-cover p-6 text-white sm:w-[390px] lg:h-[633px] lg:w-[472px] lg:p-8">
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