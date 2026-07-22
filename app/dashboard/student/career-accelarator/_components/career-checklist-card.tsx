import Link from "next/link";
import { Circle, Sparkles } from "lucide-react";

export interface ChecklistItem {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
}

const checklistItems: ChecklistItem[] = [
  {
    title: "Create your first resume",
    description: "Create an ATS-optimized resume",
    actionLabel: "Create Resume",
    href: "/dashboard/student/career-accelarator/resume-builder",
  },
  {
    title: "Complete your first interview",
    description: "Practice with our AI interviewer",
    actionLabel: "Start Interview",
    href: "/dashboard/student/career-accelarator/ai-career-agent",
  },
  {
    title: "Add your LinkedIn profile",
    description: "Connect your professional network",
    actionLabel: "Add Profile",
    href: "/dashboard/student/profile/edit",
  },
  {
    title: "Add your education details",
    description: "Complete your profile for better recommendations",
    actionLabel: "Add Education",
    href: "/dashboard/student/profile/edit",
  },
  {
    title: "Create your career roadmap",
    description: "Plan your career development path",
    actionLabel: "Create Roadmap",
    href: "/dashboard/student/career-accelarator/ai-career-agent",
  },
  {
    title: "Add your GitHub profile",
    description: "Showcase your technical projects",
    actionLabel: "Add Profile",
    href: "/dashboard/student/profile/edit",
  },
];

export function CareerChecklistCard() {
  return (
    <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-5">
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-1.5">
          <div className="flex items-center justify-center size-9 rounded-xl bg-[#F86432]/10 text-[#F86432] shrink-0">
            <Sparkles className="size-4.5" />
          </div>
          <h3 className="font-semibold text-gray-900">Complete your checklist</h3>
        </div>
        <p className="text-sm text-gray-500 truncate">
          Complete a few steps to land your next role
        </p>
      </div>

      <div className="flex flex-col">
        {checklistItems.map((item, index) => (
          <div
            key={item.title}
            className={`flex items-start gap-3 py-4 ${
              index !== checklistItems.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <Circle className="size-5 text-gray-300 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900 text-sm">{item.title}</p>
              <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
              <Link
                href={item.href}
                className="text-sm font-medium text-[#F86432] hover:underline mt-1 inline-block"
              >
                {item.actionLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
