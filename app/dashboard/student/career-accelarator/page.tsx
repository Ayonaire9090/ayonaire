"use client";

import Link from "next/link";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import {
  Bot,
  FileText,
  Briefcase,
  Users,
  Handshake,
  ChevronRight,
} from "lucide-react";

const tools = [
  {
    href: "/dashboard/student/career-accelarator/ai-career-agent",
    icon: Bot,
    title: "AI Career Agent",
    description: "Interview prep, skill gap analysis, and career roadmaps.",
  },
  {
    href: "/dashboard/student/career-accelarator/career-support-tools",
    icon: FileText,
    title: "Career Support Tools",
    description: "AI-generated resumes, cover letters, and portfolios.",
  },
  {
    href: "/dashboard/student/career-accelarator/job-assistance-system",
    icon: Briefcase,
    title: "Job Assistance System",
    description: "Browse Ayonaire job opportunities matched to your skills.",
  },
  {
    href: "/dashboard/student/career-accelarator/talent-marketplace",
    icon: Users,
    title: "Talent Marketplace",
    description: "Discover freelance and job listings from the marketplace.",
  },
  {
    href: "/dashboard/student/career-accelarator/freelance-assistance",
    icon: Handshake,
    title: "Freelance Assistance",
    description: "Set up your freelance profile for marketplace opportunities.",
  },
];

export default function StudentCareerAccelarator() {
  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="offcanvas" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />

        <div className="lg:bg-white flex flex-1 flex-col lg:my-6 lg:rounded-3xl lg:p-8 lg:min-w-4xl lg:mx-auto pb-24">
          <div className="p-4 lg:p-0 mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Career Accelerator
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              AI-powered tools to help you land your next role.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-0">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-center gap-4 bg-white lg:bg-[#F8F9FA] border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-center size-11 rounded-xl bg-[#F86432]/10 text-[#F86432] shrink-0">
                  <tool.icon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{tool.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{tool.description}</p>
                </div>
                <ChevronRight className="size-5 text-gray-300 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
