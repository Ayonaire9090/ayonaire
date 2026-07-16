"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../../_components/student-home-sidebar-content";
import { StudentDashboardHeader } from "../../_components/student-dashboard-header";
import { CareerAIToolCard } from "../_components/career-ai-tool-card";
import {
  useGenerateCareerRoadmapMutation,
  useAnalyzeSkillGapMutation,
  useGenerateAiInterviewMutation,
  useGenerateCompanyInterviewMutation,
  useImportLinkedInMutation,
} from "@/hooks/api/use-career";
import { formatCareerAIResult } from "@/lib/api/endpoints/career";

export default function StudentAiCareerAgentPage() {
  const generateRoadmap = useGenerateCareerRoadmapMutation();
  const analyzeSkillGap = useAnalyzeSkillGapMutation();
  const generateAiInterview = useGenerateAiInterviewMutation();
  const generateCompanyInterview = useGenerateCompanyInterviewMutation();
  const importLinkedIn = useImportLinkedInMutation();

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="offcanvas" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />

        <div className="lg:bg-white flex flex-1 flex-col lg:my-6 lg:rounded-3xl lg:p-8 lg:min-w-4xl lg:mx-auto pb-24">
          <div className="p-4 lg:p-0 mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              AI Career Agent
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Your AI coach for interview prep, skill planning, and career direction.
            </p>
          </div>

          <div className="flex flex-col gap-5 px-4 lg:px-0">
            <CareerAIToolCard
              title="Career Roadmap"
              description="Build a step-by-step career roadmap for your target role."
              buttonLabel="Generate Roadmap"
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Ayo Smith" },
                { name: "targetRole", label: "Target Role", type: "text", required: true, placeholder: "Product Designer" },
                { name: "currentExperience", label: "Current Experience", type: "textarea" },
                { name: "timeline", label: "Timeline", type: "text", placeholder: "6 months" },
                { name: "skills", label: "Skills", type: "tags" },
                { name: "learningPreferences", label: "Learning Preferences", type: "textarea", placeholder: "Hands-on projects and mentor review" },
              ]}
              onGenerate={async (values) => {
                const res = await generateRoadmap.mutateAsync(values as any);
                return formatCareerAIResult(res);
              }}
            />

            <CareerAIToolCard
              title="Skill Gap Analysis"
              description="Get a skills gap summary and recommended growth plan."
              buttonLabel="Analyze Skill Gap"
              fields={[
                { name: "targetRole", label: "Target Role", type: "text", required: true, placeholder: "Data Analyst" },
                { name: "currentSkills", label: "Current Skills", type: "tags", required: true },
                { name: "experienceLevel", label: "Experience Level", type: "text", placeholder: "Beginner" },
                { name: "learningFocus", label: "Learning Focus", type: "text", placeholder: "Data visualization and SQL" },
              ]}
              onGenerate={async (values) => {
                const res = await analyzeSkillGap.mutateAsync(values as any);
                return formatCareerAIResult(res);
              }}
            />

            <CareerAIToolCard
              title="AI Interview Practice"
              description="Generate interview questions and tips for your target role."
              buttonLabel="Generate Interview Prep"
              fields={[
                { name: "targetRole", label: "Target Role", type: "text", required: true, placeholder: "Customer Success Specialist" },
                { name: "experienceLevel", label: "Experience Level", type: "text", placeholder: "Junior" },
                { name: "focusAreas", label: "Focus Areas", type: "tags" },
              ]}
              onGenerate={async (values) => {
                const res = await generateAiInterview.mutateAsync(values as any);
                return formatCareerAIResult(res);
              }}
            />

            <CareerAIToolCard
              title="Company-Specific Interview Prep"
              description="Create interview preparation for a specific company and role."
              buttonLabel="Generate Company Prep"
              fields={[
                { name: "companyName", label: "Company Name", type: "text", required: true, placeholder: "Ayonaire Labs" },
                { name: "role", label: "Role", type: "text", required: true, placeholder: "Growth Marketer" },
                { name: "experienceLevel", label: "Experience Level", type: "text", placeholder: "Early career" },
                { name: "focusAreas", label: "Focus Areas", type: "tags" },
              ]}
              onGenerate={async (values) => {
                const res = await generateCompanyInterview.mutateAsync(values as any);
                return formatCareerAIResult(res);
              }}
            />

            <CareerAIToolCard
              title="LinkedIn Profile Import"
              description="Extract a career summary and skills from your LinkedIn profile text or URL."
              buttonLabel="Import Profile"
              fields={[
                { name: "profileUrl", label: "Profile URL", type: "text", placeholder: "https://linkedin.com/in/..." },
                { name: "profileText", label: "Or Paste Profile Text", type: "textarea" },
              ]}
              onGenerate={async (values) => {
                const res = await importLinkedIn.mutateAsync(values as any);
                return res?.data?.importedProfile ?? "";
              }}
            />
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
