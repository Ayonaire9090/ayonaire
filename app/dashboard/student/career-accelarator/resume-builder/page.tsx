"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SidebarInset } from "@/components/ui/sidebar";
import {
  Bell,
  ChevronLeft,
  Download,
  Linkedin,
  Plus,
  Save,
  Settings,
  Upload,
} from "lucide-react";
import { AppLogo } from "@/components/app-logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ResumeBuilderSidebarContent } from "./_components/resume-builder-sidebar-content";
import { ResumeListItem, ResumeItem } from "./_components/resume-list-item";
import { ResumeContactForm, ContactFormData, emptyContactForm } from "./_components/resume-contact-form";
import { ResumeLivePreview } from "./_components/resume-live-preview";
import { ResumeProgressBar } from "./_components/resume-progress-bar";
import { ResumeDomainSection, DomainEntry } from "./_components/resume-domain-section";
import { ResumeSummarySection } from "./_components/resume-summary-section";
import { ResumeEducationSection, EducationEntry } from "./_components/resume-education-section";
import { ResumeExperienceSection, ExperienceEntry } from "./_components/resume-experience-section";
import { ResumeProjectsSection, ProjectEntry } from "./_components/resume-projects-section";
import { ResumeSkillsSection, SkillEntry } from "./_components/resume-skills-section";
import { ResumeCertificationsSection, CertificationEntry } from "./_components/resume-certifications-section";
import { ResumeExtraCurricularSection, ExtraCurricularEntry } from "./_components/resume-extra-curricular-section";
import { ResumeUndesignedSection } from "./_components/resume-undesigned-section";
import { ResumeLinkedInModal } from "./_components/resume-linkedin-modal";
import { ResumeSetupScreen, ResumeFocus } from "./_components/resume-setup-screen";
import { Template, templates } from "./_components/resume-templates-data";
import { resumeSections } from "./_components/resume-sections-data";
import { useGenerateResumeMutation } from "@/hooks/api/use-career";
import { formatCareerAIResult } from "@/lib/api/endpoints/career";
import { cn } from "@/lib/utils";

type TabId = "builder" | "tailor-cv" | "my-resumes";

const tabs: { id: TabId; label: string }[] = [
  { id: "builder", label: "Builder" },
  { id: "tailor-cv", label: "Tailor CV" },
  { id: "my-resumes", label: "My Resumes" },
];

const subtitles: Record<TabId, string> = {
  builder: "Choose a template, fill sections, and download",
  "tailor-cv": "Tailor your resume to a specific job posting",
  "my-resumes": "Create ATS-optimized resumes with AI assistance",
};

// There's no backend endpoint yet to list/save/delete resumes, so resumes
// are persisted to localStorage instead. Swap this for a real query once
// a "my resumes" API exists.
const STORAGE_KEY = "ayonaire:resume-builder:resumes";

const CONTACT_FIELD_COUNT = Object.keys(emptyContactForm).length;

export default function ResumeBuilderPage() {
  const [activeTab, setActiveTab] = useState<TabId>("my-resumes");
  const [activeSection, setActiveSection] = useState(resumeSections[0].id);
  const [resumes, setResumes] = useState<ResumeItem[]>([]);
  const [contact, setContact] = useState<ContactFormData>(emptyContactForm);
  const [domainEntries, setDomainEntries] = useState<DomainEntry[]>([]);
  const [domainInstruction, setDomainInstruction] = useState("");
  const [summary, setSummary] = useState("");
  const [summaryInstruction, setSummaryInstruction] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([]);
  const [educationInstruction, setEducationInstruction] = useState("");
  const [experienceEntries, setExperienceEntries] = useState<ExperienceEntry[]>([]);
  const [experienceInstruction, setExperienceInstruction] = useState("");
  const [projectEntries, setProjectEntries] = useState<ProjectEntry[]>([]);
  const [projectInstruction, setProjectInstruction] = useState("");
  const [skillEntries, setSkillEntries] = useState<SkillEntry[]>([]);
  const [certificationEntries, setCertificationEntries] = useState<CertificationEntry[]>([]);
  const [certificationInstruction, setCertificationInstruction] = useState("");
  const [extraCurricularEntries, setExtraCurricularEntries] = useState<ExtraCurricularEntry[]>([]);
  const [extraCurricularInstruction, setExtraCurricularInstruction] = useState("");
  // Instruction text for sections that don't have a real form yet.
  const [sectionInstructions, setSectionInstructions] = useState<Record<string, string>>({});
  const [visitedSections, setVisitedSections] = useState<string[]>([]);
  const [template, setTemplate] = useState<Template>(templates[0].id);
  const [resumeFocus, setResumeFocus] = useState<ResumeFocus>("fresher");
  const [setupComplete, setSetupComplete] = useState(false);
  const [linkedinModalOpen, setLinkedinModalOpen] = useState(false);
  const generateResume = useGenerateResumeMutation();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setResumes(JSON.parse(stored));
      } catch {
        // ignore malformed storage
      }
    }
  }, []);

  const persist = (next: ResumeItem[]) => {
    setResumes(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setVisitedSections((prev) => (prev.includes(sectionId) ? prev : [...prev, sectionId]));
  };

  const goToBuilder = (sectionId = resumeSections[0].id) => {
    setSetupComplete(true);
    navigateToSection(sectionId);
    setActiveTab("builder");
  };

  const handleCreateNew = () => {
    setSetupComplete(false);
    setActiveTab("builder");
  };

  const handleSetupContinue = () => {
    setSetupComplete(true);
    navigateToSection(resumeSections[0].id);
  };

  const sectionIndex = resumeSections.findIndex((s) => s.id === activeSection);

  const goBack = () => {
    if (sectionIndex <= 0) {
      setActiveTab("my-resumes");
    } else {
      navigateToSection(resumeSections[sectionIndex - 1].id);
    }
  };

  const goNext = () => {
    if (sectionIndex >= resumeSections.length - 1) {
      handleSave();
      setActiveTab("my-resumes");
    } else {
      navigateToSection(resumeSections[sectionIndex + 1].id);
    }
  };

  const filledContactFields = Object.values(contact).filter(Boolean).length;
  const contactCompletion = filledContactFields / CONTACT_FIELD_COUNT;
  const summaryCompletion = summary.trim() ? 1 : 0;
  const domainCompletion = domainEntries.some((e) => e.value.trim()) ? 1 : 0;
  const educationCompletion = educationEntries.some((e) => e.institution.trim()) ? 1 : 0;
  const experienceCompletion = experienceEntries.some((e) => e.jobTitle.trim()) ? 1 : 0;
  const projectCompletion = projectEntries.some((e) => e.projectName.trim()) ? 1 : 0;
  const skillCompletion = skillEntries.some((e) => e.category.trim()) ? 1 : 0;
  const certificationCompletion = certificationEntries.some((e) => e.name.trim()) ? 1 : 0;
  const extraCurricularCompletion = extraCurricularEntries.some((e) => e.role.trim()) ? 1 : 0;
  const progressPercent = Math.round(
    ((contactCompletion +
      summaryCompletion +
      domainCompletion +
      educationCompletion +
      experienceCompletion +
      projectCompletion +
      skillCompletion +
      certificationCompletion +
      extraCurricularCompletion) /
      resumeSections.length) *
      100,
  );

  const handleEnhanceSummary = async () => {
    if (!contact.fullName.trim()) {
      toast.error("Add your Full Name in the Contact section first");
      return;
    }
    if (!targetRole.trim()) {
      toast.error("Target Role is required to generate a summary");
      return;
    }

    try {
      const res = await generateResume.mutateAsync({
        name: contact.fullName,
        targetRole,
        additionalContext: [summary, summaryInstruction].filter(Boolean).join(". "),
      });
      setSummary(formatCareerAIResult(res));
    } catch (error: any) {
      toast.error(error?.message || "Failed to generate summary. Please try again.");
    }
  };

  const handleSave = () => {
    const domainText = domainEntries.map((e) => e.value).filter(Boolean).join(", ");
    const educationText = educationEntries
      .filter((e) => e.institution.trim())
      .map((e) => `${e.institution} — ${e.degree} ${e.fieldOfStudy}`.trim())
      .join("\n");
    const experienceText = experienceEntries
      .filter((e) => e.jobTitle.trim())
      .map((e) => `${e.jobTitle} at ${e.organization}`.trim())
      .join("\n");
    const projectText = projectEntries
      .filter((e) => e.projectName.trim())
      .map((e) => e.projectName)
      .join("\n");
    const skillsText = skillEntries
      .filter((e) => e.category.trim())
      .map((e) => `${e.category}: ${e.skills}`)
      .join("\n");
    const certificationText = certificationEntries
      .filter((e) => e.name.trim())
      .map((e) => e.name)
      .join("\n");
    const extraCurricularText = extraCurricularEntries
      .filter((e) => e.role.trim())
      .map((e) => `${e.role} at ${e.organization}`.trim())
      .join("\n");
    const content = [
      ...Object.values(contact).filter(Boolean),
      summary,
      domainText,
      educationText,
      experienceText,
      projectText,
      skillsText,
      certificationText,
      extraCurricularText,
    ]
      .filter(Boolean)
      .join("\n");

    const newResume: ResumeItem = {
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : String(Date.now()),
      title: `${contact.fullName || "Untitled"} Resume`,
      template,
      lastModified: "Just now",
      status: "Draft",
      content,
    };
    persist([newResume, ...resumes]);
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-print-area,
          #resume-print-area * {
            visibility: visible;
          }
          #resume-print-area {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            transform: none !important;
          }
        }
      `}</style>

      <ResumeLinkedInModal open={linkedinModalOpen} onOpenChange={setLinkedinModalOpen} />

      <ResumeBuilderSidebarContent
        variant="sidebar"
        collapsible="icon"
        activeSection={activeSection}
        onSelectSection={goToBuilder}
      />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <div className="flex flex-1 flex-col lg:my-6 lg:px-8 lg:max-w-[1400px] pb-24 gap-3 lg:gap-6">
          <div className="bg-white pb-4 lg:pb-0 lg:bg-transparent">
            {/* Mobile top bar: logo + bell + settings */}
            <div className="flex items-center justify-between px-4 pt-4 lg:hidden">
              <div className="h-8 w-32">
                <AppLogo />
              </div>
              <div className="flex items-center gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-100">
                  <Bell className="h-4.5 w-4.5 text-gray-700" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-100">
                  <Settings className="h-4.5 w-4.5 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 px-4 pt-4 lg:pt-0 lg:px-0">
              <div className="flex items-center gap-2 min-w-0">
                {activeTab === "builder" && (
                  <button
                    onClick={goBack}
                    aria-label="Back"
                    className="shrink-0 text-gray-500 hover:text-gray-900"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                )}
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 truncate">
                  {activeTab === "builder" && !setupComplete ? "Resume Setup" : "Resume Builder"}
                </h1>
              </div>

              {activeTab === "builder" ? (
                setupComplete && (
                  <div className="flex items-center gap-2 lg:hidden shrink-0">
                    <button
                      onClick={handleSave}
                      aria-label="Save resume"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700"
                    >
                      <Save className="h-4.5 w-4.5" />
                    </button>
                    <button
                      onClick={handleDownload}
                      aria-label="Download resume"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F86432] text-white"
                    >
                      <Download className="h-4.5 w-4.5" />
                    </button>
                  </div>
                )
              ) : (
                <button
                  onClick={handleCreateNew}
                  aria-label="Create new resume"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F86432]/10 text-[#F86432] lg:hidden"
                >
                  <Plus className="h-5 w-5" />
                </button>
              )}

              <div className="hidden lg:flex items-center gap-3 shrink-0">
                {activeTab === "builder" ? (
                  setupComplete && (
                    <>
                      <Select value={template} onValueChange={(v) => setTemplate(v as Template)}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {templates.map((t) => (
                            <SelectItem key={t.id} value={t.id}>
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <button
                        onClick={handleSave}
                        className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <Save className="size-4" />
                        Save Resumes
                      </button>
                      <button
                        onClick={handleDownload}
                        className="inline-flex items-center gap-2 bg-[#F86432] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#F86432]/90 transition-colors"
                      >
                        <Download className="size-4" />
                        Download
                      </button>
                    </>
                  )
                ) : (
                  <button
                    onClick={handleCreateNew}
                    className="inline-flex items-center gap-2 bg-[#F86432] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#F86432]/90 transition-colors"
                  >
                    <Plus className="size-4" />
                    Create New Resume
                  </button>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-1 px-4 lg:px-0">
              {activeTab === "builder" && !setupComplete
                ? "Choose your target role and resume style to generate a job-ready resume."
                : subtitles[activeTab]}
            </p>

            {(activeTab !== "builder" || setupComplete) && (
              <div className="px-4 pt-4 lg:px-0 lg:pt-6">
                {activeTab === "builder" ? (
                  <ResumeProgressBar percent={progressPercent} />
                ) : (
                  <div className="flex items-center gap-1 bg-[#EFEFEF] rounded-xl p-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "flex-1 text-sm font-medium py-2.5 rounded-lg transition-colors",
                          activeTab === tab.id
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-500 hover:text-gray-700",
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {activeTab === "my-resumes" && (
            <div className="px-4 lg:px-0">
              <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      My Resumes
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Manage and organize your created resumes
                    </p>
                  </div>
                  <span className="text-sm font-medium text-[#F86432] shrink-0">
                    View all tasks
                  </span>
                </div>

                {resumes.length === 0 ? (
                  <div className="flex flex-col items-center justify-center gap-3 text-center border border-dashed border-gray-300 rounded-2xl bg-[#F8F9FA] py-16 px-6">
                    <div className="flex items-center justify-center size-12 rounded-full bg-gray-200 text-gray-600">
                      <Upload className="size-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">No Resumes Yet</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Create your first resume to get started
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {resumes.map((resume) => (
                      <ResumeListItem
                        key={resume.id}
                        resume={resume}
                        onEdit={() => goToBuilder()}
                        onDelete={(id) =>
                          persist(resumes.filter((r) => r.id !== id))
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "builder" && !setupComplete && (
            <div className="px-4 lg:px-0">
              <ResumeSetupScreen
                targetRole={targetRole}
                onTargetRoleChange={setTargetRole}
                focus={resumeFocus}
                onFocusChange={setResumeFocus}
                template={template}
                onTemplateChange={setTemplate}
                onContinue={handleSetupContinue}
              />
            </div>
          )}

          {activeTab === "builder" && setupComplete && (
            <div className="px-4 lg:px-0 flex flex-col gap-4">
              {activeSection === "profile" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1 flex flex-col gap-4 min-w-0">
                    <button
                      type="button"
                      onClick={() => setLinkedinModalOpen(true)}
                      className="w-fit max-w-full inline-flex items-center gap-2 rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/10 text-[#0A66C2] font-medium text-sm px-4 py-2.5 hover:bg-[#0A66C2]/15 transition-colors"
                    >
                      <Linkedin className="size-4 shrink-0" />
                      <span className="truncate">Import from LinkedIn</span>
                    </button>
                    <ResumeContactForm value={contact} onChange={setContact} />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : activeSection === "summary" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1">
                    <ResumeSummarySection
                      targetRole={targetRole}
                      onTargetRoleChange={setTargetRole}
                      summary={summary}
                      onSummaryChange={setSummary}
                      instruction={summaryInstruction}
                      onInstructionChange={setSummaryInstruction}
                      onEnhance={handleEnhanceSummary}
                      isEnhancing={generateResume.isPending}
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : activeSection === "domain" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1">
                    <ResumeDomainSection
                      entries={domainEntries}
                      onChange={setDomainEntries}
                      instruction={domainInstruction}
                      onInstructionChange={setDomainInstruction}
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : activeSection === "education" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1">
                    <ResumeEducationSection
                      entries={educationEntries}
                      onChange={setEducationEntries}
                      instruction={educationInstruction}
                      onInstructionChange={setEducationInstruction}
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : activeSection === "experience" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1">
                    <ResumeExperienceSection
                      entries={experienceEntries}
                      onChange={setExperienceEntries}
                      instruction={experienceInstruction}
                      onInstructionChange={setExperienceInstruction}
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : activeSection === "projects" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1">
                    <ResumeProjectsSection
                      entries={projectEntries}
                      onChange={setProjectEntries}
                      instruction={projectInstruction}
                      onInstructionChange={setProjectInstruction}
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : activeSection === "skills" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1">
                    <ResumeSkillsSection entries={skillEntries} onChange={setSkillEntries} />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : activeSection === "certification" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1">
                    <ResumeCertificationsSection
                      entries={certificationEntries}
                      onChange={setCertificationEntries}
                      instruction={certificationInstruction}
                      onInstructionChange={setCertificationInstruction}
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : activeSection === "extra-curriculum" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 order-2 lg:order-1">
                    <ResumeExtraCurricularSection
                      entries={extraCurricularEntries}
                      onChange={setExtraCurricularEntries}
                      instruction={extraCurricularInstruction}
                      onInstructionChange={setExtraCurricularInstruction}
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <ResumeLivePreview
                      contact={contact}
                      summary={summary}
                      domainEntries={domainEntries}
                      educationEntries={educationEntries}
                      experienceEntries={experienceEntries}
                      projectEntries={projectEntries}
                      skillEntries={skillEntries}
                      certificationEntries={certificationEntries}
                      extraCurricularEntries={extraCurricularEntries}
                      visitedSections={visitedSections}
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8">
                  <ResumeUndesignedSection
                    title={resumeSections.find((s) => s.id === activeSection)?.title ?? ""}
                    instruction={sectionInstructions[activeSection] ?? ""}
                    onInstructionChange={(value) =>
                      setSectionInstructions((prev) => ({ ...prev, [activeSection]: value }))
                    }
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={goBack}>
                  {sectionIndex <= 0 ? "Back to Resumes" : "Back"}
                </Button>
                <Button
                  onClick={goNext}
                  className="bg-[#F86432] hover:bg-[#F86432]/90 text-white"
                >
                  {sectionIndex >= resumeSections.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}

          {activeTab === "tailor-cv" && (
            <div className="px-4 lg:px-0">
              <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 flex items-center justify-center py-16 text-center">
                <p className="text-gray-500 text-sm max-w-sm">
                  Tailor CV isn&apos;t built yet — there&apos;s no backend endpoint
                  for tailoring a resume to a specific job posting.
                </p>
              </div>
            </div>
          )}
        </div>
      </SidebarInset>
    </>
  );
}
