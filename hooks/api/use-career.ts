import { useMutation, useQuery } from "@tanstack/react-query";
import {
  careerApi,
  CareerResumeRequest,
  CareerCoverLetterRequest,
  CareerSearchParams,
  LinkedInImportRequest,
  CareerPortfolioRequest,
  CareerResumeBuilderRequest,
  CareerSkillGapRequest,
  FreelanceProfileRequest,
  CareerRoadmapRequest,
  CareerInterviewRequest,
  CompanyInterviewRequest,
} from "@/lib/api/endpoints/career";
import { queryKeys } from "@/lib/api/query-keys";

export const useGenerateResumeMutation = () =>
  useMutation({
    mutationFn: (payload: CareerResumeRequest) => careerApi.generateResume(payload),
  });

export const useGenerateCoverLetterMutation = () =>
  useMutation({
    mutationFn: (payload: CareerCoverLetterRequest) => careerApi.generateCoverLetter(payload),
  });

export const useSearchJobs = (params: CareerSearchParams, enabled = true) =>
  useQuery({
    queryKey: queryKeys.career.jobs(params),
    queryFn: () => careerApi.searchJobs(params),
    enabled,
  });

export const useImportLinkedInMutation = () =>
  useMutation({
    mutationFn: (payload: LinkedInImportRequest) => careerApi.importLinkedIn(payload),
  });

export const useGeneratePortfolioMutation = () =>
  useMutation({
    mutationFn: (payload: CareerPortfolioRequest) => careerApi.generatePortfolio(payload),
  });

export const useBuildResumeMutation = () =>
  useMutation({
    mutationFn: (payload: CareerResumeBuilderRequest) => careerApi.buildResume(payload),
  });

export const useAnalyzeSkillGapMutation = () =>
  useMutation({
    mutationFn: (payload: CareerSkillGapRequest) => careerApi.analyzeSkillGap(payload),
  });

export const useBrowseMarketplace = (params: CareerSearchParams, enabled = true) =>
  useQuery({
    queryKey: queryKeys.career.marketplace(params),
    queryFn: () => careerApi.browseMarketplace(params),
    enabled,
  });

export const useCreateFreelanceProfileMutation = () =>
  useMutation({
    mutationFn: (payload: FreelanceProfileRequest) => careerApi.createFreelanceProfile(payload),
  });

export const useGenerateCareerRoadmapMutation = () =>
  useMutation({
    mutationFn: (payload: CareerRoadmapRequest) => careerApi.generateCareerRoadmap(payload),
  });

export const useGenerateAiInterviewMutation = () =>
  useMutation({
    mutationFn: (payload: CareerInterviewRequest) => careerApi.generateAiInterview(payload),
  });

export const useGenerateCompanyInterviewMutation = () =>
  useMutation({
    mutationFn: (payload: CompanyInterviewRequest) => careerApi.generateCompanyInterview(payload),
  });
