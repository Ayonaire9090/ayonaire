import { apiClient } from "../client";
import { ApiResponse } from "../types";

// All request/response shapes confirmed 2026-07-14 against the live Swagger
// spec (https://ayonaire.onrender.com/api-docs/) - tags: "Career Accelerator".

export interface CareerAIResponse {
  generatedText: string;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  salaryRange: string;
  skills: string[];
  summary: string;
  postedAt: string;
}

export interface CareerResumeRequest {
  name: string;
  targetRole: string;
  experience?: string;
  education?: string;
  skills?: string[];
  accomplishments?: string;
  additionalContext?: string;
}

export interface CareerCoverLetterRequest {
  name: string;
  targetRole: string;
  company: string;
  recipientName?: string;
  experience?: string;
  education?: string;
  skills?: string[];
  accomplishments?: string;
  additionalContext?: string;
}

export interface CareerPortfolioRequest {
  name: string;
  headline: string;
  summary?: string;
  skills?: string[];
  projects?: string[];
  targetRole?: string;
  industry?: string;
  portfolioLinks?: string[];
}

export interface CareerResumeBuilderRequest {
  name: string;
  title?: string;
  summary?: string;
  skills?: string[];
  experience?: string;
  education?: string;
  projects?: string[];
  targetRole?: string;
  additionalContext?: string;
}

export interface CareerSkillGapRequest {
  targetRole: string;
  currentSkills: string[];
  experienceLevel?: string;
  learningFocus?: string;
}

export interface CareerRoadmapRequest {
  name: string;
  targetRole: string;
  currentExperience?: string;
  timeline?: string;
  skills?: string[];
  learningPreferences?: string;
}

export interface CareerInterviewRequest {
  targetRole: string;
  experienceLevel?: string;
  focusAreas?: string[];
}

export interface CompanyInterviewRequest {
  companyName: string;
  role: string;
  experienceLevel?: string;
  focusAreas?: string[];
}

export interface LinkedInImportRequest {
  profileUrl?: string;
  profileText?: string;
}

export interface FreelanceProfileRequest {
  headline: string;
  summary: string;
  skills: string[];
  portfolioLinks?: string[];
  hourlyRate?: string;
  availability?: string;
  services?: string[];
  expertiseAreas?: string[];
}

export interface FreelanceProfile extends FreelanceProfileRequest {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CareerSearchParams {
  keywords?: string;
  location?: string;
  skills?: string;
  role?: string;
}

// Confirmed live 2026-07-14: every career generation endpoint returns a
// genuinely different shape under { success, data: {...} } - not the
// uniform { generatedText } the Swagger docs describe. resume/cover-letter
// use generatedText; skill-gap uses gapSummary; career-roadmap uses
// overview; ai-interview/company-interview use introduction; and several
// carry extra structured fields (questions, tips, resumeDraft, etc.) beyond
// a single text blob. This walks the response defensively and formats
// whatever fields are actually present into readable markdown, since
// hardcoding one field name per endpoint would silently show a blank
// result for most of them.
//
// NOTE: the backend is currently returning placeholder/stub content for
// every one of these ("Replace AI_API_KEY or OPENAI_API_KEY with a valid
// key to enable real AI output.") - real AI generation isn't live yet on
// their end, this is expected until they configure it.
export function formatCareerAIResult(response: any): string {
  const data = response?.data ?? response ?? {};
  const parts: string[] = [];

  const primaryText =
    data.generatedText ??
    data.gapSummary ??
    data.overview ??
    data.introduction ??
    data.importedProfile;
  if (primaryText) parts.push(primaryText);

  const listSections: [string, string][] = [
    ["missingSkills", "Missing Skills"],
    ["skillsToLearn", "Skills To Learn"],
    ["milestones", "Milestones"],
    ["questions", "Questions"],
    ["suggestedAnswers", "Suggested Answers"],
    ["tips", "Tips"],
    ["recommendedResources", "Recommended Resources"],
    ["projectSuggestions", "Project Suggestions"],
  ];
  for (const [key, label] of listSections) {
    const value = data[key];
    if (Array.isArray(value) && value.length > 0) {
      parts.push(`\n**${label}**\n${value.map((v) => `- ${v}`).join("\n")}`);
    }
  }

  const textSections: [string, string][] = [
    ["suggestedTimeline", "Suggested Timeline"],
    ["timeline", "Timeline"],
  ];
  for (const [key, label] of textSections) {
    if (typeof data[key] === "string" && data[key]) {
      parts.push(`\n**${label}**\n${data[key]}`);
    }
  }

  if (data.resumeDraft) {
    const draft = data.resumeDraft;
    let draftMd = "\n**Resume Draft**\n";
    if (draft.contact) {
      draftMd += `\n${draft.contact.name ?? ""}${draft.contact.title ? ` — ${draft.contact.title}` : ""}\n`;
    }
    if (draft.summary) draftMd += `\n${draft.summary}\n`;
    if (draft.skills?.length) draftMd += `\n**Skills:** ${draft.skills.join(", ")}\n`;
    if (draft.experience?.length) {
      draftMd += `\n**Experience**\n${draft.experience
        .map((exp: any) => `- ${exp.role} at ${exp.company} (${exp.dates}): ${exp.description}`)
        .join("\n")}\n`;
    }
    if (draft.education?.length) {
      draftMd += `\n**Education**\n${draft.education
        .map((edu: any) => `- ${edu.degree}, ${edu.school} (${edu.dates})`)
        .join("\n")}\n`;
    }
    if (draft.projects?.length) {
      draftMd += `\n**Projects**\n${draft.projects
        .map((proj: any) => `- **${proj.name}**: ${proj.description}`)
        .join("\n")}\n`;
    }
    parts.push(draftMd);
  }

  return parts.join("\n");
}

function toQueryString(params: CareerSearchParams): string {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) query.append(key, value);
  });
  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

export const careerApi = {
  generateResume: (payload: CareerResumeRequest) =>
    apiClient<CareerAIResponse>("/api/v1/career/resume", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  generateCoverLetter: (payload: CareerCoverLetterRequest) =>
    apiClient<CareerAIResponse>("/api/v1/career/cover-letter", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  searchJobs: (params: CareerSearchParams) =>
    apiClient<ApiResponse<JobListing[]>>(
      `/api/v1/career/ayonaire-jobs${toQueryString(params)}`,
      { method: "GET", requireAuth: true },
    ),

  importLinkedIn: (payload: LinkedInImportRequest) =>
    apiClient<ApiResponse<{ importedProfile: string }>>(
      "/api/v1/career/linkedin-import",
      { method: "POST", body: JSON.stringify(payload), requireAuth: true },
    ),

  generatePortfolio: (payload: CareerPortfolioRequest) =>
    apiClient<ApiResponse<CareerAIResponse>>("/api/v1/career/portfolio", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  buildResume: (payload: CareerResumeBuilderRequest) =>
    apiClient<CareerAIResponse>("/api/v1/career/resume-builder", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  analyzeSkillGap: (payload: CareerSkillGapRequest) =>
    apiClient<CareerAIResponse>("/api/v1/career/skill-gap", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  browseMarketplace: (params: CareerSearchParams) =>
    apiClient<ApiResponse<JobListing[]>>(
      `/api/v1/career/marketplace${toQueryString(params)}`,
      { method: "GET", requireAuth: true },
    ),

  createFreelanceProfile: (payload: FreelanceProfileRequest) =>
    apiClient<ApiResponse<FreelanceProfile>>("/api/v1/career/freelance-profile", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  generateCareerRoadmap: (payload: CareerRoadmapRequest) =>
    apiClient<CareerAIResponse>("/api/v1/career/career-roadmap", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  generateAiInterview: (payload: CareerInterviewRequest) =>
    apiClient<CareerAIResponse>("/api/v1/career/ai-interview", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  generateCompanyInterview: (payload: CompanyInterviewRequest) =>
    apiClient<CareerAIResponse>("/api/v1/career/company-interview", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),
};
