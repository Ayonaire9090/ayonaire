"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../../_components/student-home-sidebar-content";
import { StudentDashboardHeader } from "../../_components/student-dashboard-header";
import { CareerAIToolCard } from "../_components/career-ai-tool-card";
import {
  useGenerateResumeMutation,
  useGenerateCoverLetterMutation,
  useGeneratePortfolioMutation,
  useBuildResumeMutation,
} from "@/hooks/api/use-career";
import { formatCareerAIResult } from "@/lib/api/endpoints/career";

export default function StudentCareerSupportToolsPage() {
  const generateResume = useGenerateResumeMutation();
  const generateCoverLetter = useGenerateCoverLetterMutation();
  const generatePortfolio = useGeneratePortfolioMutation();
  const buildResume = useBuildResumeMutation();

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="offcanvas" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />

        <div className="lg:bg-white flex flex-1 flex-col lg:my-6 lg:rounded-3xl lg:p-8 lg:min-w-4xl lg:mx-auto pb-24">
          <div className="p-4 lg:p-0 mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Career Support Tools
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              AI-powered tools to help you build career documents.
            </p>
          </div>

          <div className="flex flex-col gap-5 px-4 lg:px-0">
            <CareerAIToolCard
              title="Resume Summary Generator"
              description="Generate an AI-powered resume summary and role-focused bullet points."
              buttonLabel="Generate Resume Content"
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Ayo Smith" },
                { name: "targetRole", label: "Target Role", type: "text", required: true, placeholder: "Junior Product Designer" },
                { name: "experience", label: "Experience", type: "textarea", placeholder: "2 years building UI prototypes..." },
                { name: "education", label: "Education", type: "text", placeholder: "BSc in Graphic Design" },
                { name: "skills", label: "Skills", type: "tags" },
                { name: "accomplishments", label: "Accomplishments", type: "textarea" },
                { name: "additionalContext", label: "Additional Context", type: "textarea" },
              ]}
              onGenerate={async (values) => {
                const res = await generateResume.mutateAsync(values as any);
                return formatCareerAIResult(res);
              }}
            />

            <CareerAIToolCard
              title="Cover Letter Generator"
              description="Generate a tailored cover letter for a role and company."
              buttonLabel="Generate Cover Letter"
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Ayo Smith" },
                { name: "targetRole", label: "Target Role", type: "text", required: true, placeholder: "Growth Marketing Associate" },
                { name: "company", label: "Company", type: "text", required: true, placeholder: "SkillSpark" },
                { name: "recipientName", label: "Recipient Name", type: "text", placeholder: "Hiring Manager" },
                { name: "experience", label: "Experience", type: "textarea" },
                { name: "education", label: "Education", type: "text" },
                { name: "skills", label: "Skills", type: "tags" },
                { name: "accomplishments", label: "Accomplishments", type: "textarea" },
                { name: "additionalContext", label: "Additional Context", type: "textarea" },
              ]}
              onGenerate={async (values) => {
                const res = await generateCoverLetter.mutateAsync(values as any);
                return formatCareerAIResult(res);
              }}
            />

            <CareerAIToolCard
              title="Portfolio Description Generator"
              description="Build a portfolio summary and project showcase with AI."
              buttonLabel="Generate Portfolio"
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Ayo Smith" },
                { name: "headline", label: "Headline", type: "text", required: true, placeholder: "Emerging UX Designer" },
                { name: "summary", label: "Summary", type: "textarea" },
                { name: "skills", label: "Skills", type: "tags" },
                { name: "projects", label: "Projects", type: "tags", placeholder: "Comma-separated project names" },
                { name: "targetRole", label: "Target Role", type: "text" },
                { name: "industry", label: "Industry", type: "text", placeholder: "Education Tech" },
              ]}
              onGenerate={async (values) => {
                const res = await generatePortfolio.mutateAsync(values as any);
                return formatCareerAIResult(res);
              }}
            />

            <CareerAIToolCard
              title="Full Resume Builder"
              description="Generate a full resume structure and suggested content."
              buttonLabel="Build Resume"
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Ayo Smith" },
                { name: "title", label: "Title", type: "text", placeholder: "Junior Frontend Developer" },
                { name: "summary", label: "Summary", type: "textarea" },
                { name: "skills", label: "Skills", type: "tags" },
                { name: "experience", label: "Experience", type: "textarea" },
                { name: "education", label: "Education", type: "text" },
                { name: "projects", label: "Projects", type: "tags" },
                { name: "targetRole", label: "Target Role", type: "text" },
                { name: "additionalContext", label: "Additional Context", type: "textarea" },
              ]}
              onGenerate={async (values) => {
                const res = await buildResume.mutateAsync(values as any);
                return formatCareerAIResult(res);
              }}
            />
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
