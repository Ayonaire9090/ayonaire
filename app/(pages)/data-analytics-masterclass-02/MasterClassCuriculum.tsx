import {
  Sparkles,
  SlidersHorizontal,
  Route,
  Globe,
  Earth,
  ChartColumnIncreasing,
  Smile,
  FileWarning,
  type LucideIcon,
} from "lucide-react";
import { sora } from "@/app/fonts";

const screeningChecklist: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "An Analytics Mindset",
    description:
      "Data Analytics starts in the mind, not in the software. Someone who only knows the tools but can't think analytically will stare at a dashboard and see nothing. If your training doesn't build this first, then it builds the wrong thing first.",
    icon: Sparkles,
  },
  {
    title: "AI-Knowledge",
    description:
      "Companies are adopting AI fast. They want analysts who use AI to move faster and decide smarter. Feel free to check Job descriptions and you'd see AI as a notable requirement. If you ignore it, then be ready to get left behind.",
    icon: SlidersHorizontal,
  },
  {
    title: "The Traditional Tools",
    description:
      "AI didn't remove the need for skill. You still need to know SQL, Python, Excel, and PowerBI. AI speeds up the work. It doesn't replace the worker who knows how to do it.",
    icon: Route,
  },
  {
    title: "Domain Expertise",
    description:
      "Go check any job board. You'll almost never see \"Data Analyst.\" But you'll see Risk Analyst, Fraud Analyst, Inventory Analyst, Marketing Analyst. That's because companies are getting specific in their demand for solutions. Companies aren't hiring generalists. They're hiring people who understand a specific business problem well enough to solve it with data.",
    icon: Globe,
  },
  {
    title: "Real Experience",
    description:
      "Ten certificates on a CV impress nobody in the interview room. What gets you hired is proof you can do the job. That's why you need business-grade projects (not basic kaggle dataset projects), Internships, and real output that can help you talk on a business level during your interviews.",
    icon: Earth,
  },
  {
    title: "Soft Skills",
    description:
      "When five candidates have the same technical skill, the one who can communicate, manage stakeholders, and work with a team wins. Every time.",
    icon: Smile,
  },
];

export default function ScreeningChecklistSection() {
  return (
    <section className="container mt-14">
      <h2
        className={`${sora.className} text-2xl font-bold text-center text-[#121315] md:text-[32px]`}
      >
        What are companies <span className="text-[#F67219]">actually screening</span>{" "}
        for?
      </h2>
      <p className="mt-4 text-center text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
        This is the part the gurus never show you. Here&apos;s exactly what
        separates a hired candidate from an ignored one.
      </p>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 md:mt-16 md:grid-cols-3">
        {screeningChecklist.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="relative">
              {/* Number badge overlapping the top-left corner */}
              <span
                className={`${sora.className} absolute -left-2 -top-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F67219] text-sm font-bold text-white`}
              >
                {index + 1}
              </span>

              <div
                className="h-full rounded-2xl p-5 pb-6 shadow-[0_10px_28px_rgba(18,19,21,0.14)]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at top right, rgba(246,114,25,0.2) 0%, rgba(246,114,25,0.02) 70%)",
                }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F67219]/20 md:h-11 md:w-11">
                  <Icon
                    size={16}
                    strokeWidth={2}
                    className="text-[#F67219] md:h-5 md:w-5"
                  />
                </div>

                <p
                  className={`${sora.className} mt-4 text-[15px] font-semibold text-[#121315]`}
                >
                  {item.title}
                </p>
                <p
                  className={`${sora.className} mt-2 text-[13px] leading-relaxed text-[#4A4C50]`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}