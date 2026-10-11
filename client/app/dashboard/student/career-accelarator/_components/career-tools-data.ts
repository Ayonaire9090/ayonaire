import {
  FileEdit,
  FileText,
  Folder,
  Linkedin,
  LucideIcon,
  MessageSquareText,
  Route,
  Target,
  User,
} from "lucide-react";

export interface CareerTool {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const careerTools: CareerTool[] = [
  {
    href: "/dashboard/student/profile/edit",
    icon: User,
    title: "Career Profile Builder",
    description: "Define your core strengths and career objectives with AI guidance.",
  },
  {
    href: "/dashboard/student/career-accelarator/resume-builder",
    icon: FileText,
    title: "AI Resume Builder",
    description: "Generate a professional, ATS-friendly resume from scratch in seconds.",
  },
  {
    href: "/dashboard/student/career-accelarator/career-support-tools",
    icon: FileEdit,
    title: "AI Resume Improver",
    description: "Upload your current resume and get AI suggestions for instant improvements.",
  },
  {
    href: "/dashboard/student/career-accelarator/ai-career-agent",
    icon: Linkedin,
    title: "AI LinkedIn Writer",
    description: "Optimize your LinkedIn profile with engaging headlines and about sections.",
  },
  {
    href: "/dashboard/student/career-accelarator/career-support-tools",
    icon: Folder,
    title: "AI Portfolio Builder",
    description: "Showcase your best projects with a professionally designed portfolio layout.",
  },
  {
    href: "/dashboard/student/career-accelarator/ai-career-agent",
    icon: Target,
    title: "AI Skill Gap Analyzer",
    description: "Compare your current skills with industry demands to find learning gaps.",
  },
  {
    href: "/dashboard/student/career-accelarator/career-roadmap",
    icon: Route,
    title: "AI Career Roadmap",
    description: "Visualize your path to your dream role with actionable career steps.",
  },
  {
    href: "/dashboard/student/career-accelarator/ai-career-agent",
    icon: MessageSquareText,
    title: "AI Interview Prep",
    description: "Practice mock interviews and get instant feedback on your answers.",
  },
  {
    href: "/dashboard/student/career-accelarator/career-support-tools",
    icon: FileText,
    title: "AI Cover Letter Generator",
    description: "Craft personalized cover letters for every job application instantly.",
  },
  {
    href: "/dashboard/student/career-accelarator/career-support-tools",
    icon: FileText,
    title: "AI Resume Generator",
    description: "Create a job-tailored resume highlighting your key skills and experience.",
  },
  {
    href: "/dashboard/student/career-accelarator/ai-career-agent",
    icon: Linkedin,
    title: "LinkedIn Review",
    description: "Improve your LinkedIn profile to attract recruiters and boost visibility.",
  },
  {
    href: "/dashboard/student/career-accelarator/career-support-tools",
    icon: FileEdit,
    title: "Resume Review",
    description: "Get quick feedback to improve your resume's clarity and impact.",
  },
];
