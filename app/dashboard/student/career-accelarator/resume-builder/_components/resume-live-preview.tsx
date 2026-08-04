"use client";

import { useState } from "react";
import { ContactFormData } from "./resume-contact-form";
import { DomainEntry } from "./resume-domain-section";
import { EducationEntry } from "./resume-education-section";
import { ExperienceEntry } from "./resume-experience-section";
import { ProjectEntry } from "./resume-projects-section";
import { SkillEntry } from "./resume-skills-section";
import { CertificationEntry } from "./resume-certifications-section";
import { ExtraCurricularEntry } from "./resume-extra-curricular-section";
import { HonorEntry } from "./resume-honors-section";

const ZOOM_MIN = 50;
const ZOOM_MAX = 150;
const ZOOM_STEP = 10;
const ZOOM_DEFAULT = 90;

export function ResumeLivePreview({
  contact,
  summary,
  domainEntries,
  educationEntries = [],
  experienceEntries = [],
  projectEntries = [],
  skillEntries = [],
  certificationEntries = [],
  extraCurricularEntries = [],
  honorEntries = [],
  visitedSections = [],
}: {
  contact: ContactFormData;
  summary?: string;
  domainEntries: DomainEntry[];
  educationEntries?: EducationEntry[];
  experienceEntries?: ExperienceEntry[];
  projectEntries?: ProjectEntry[];
  skillEntries?: SkillEntry[];
  certificationEntries?: CertificationEntry[];
  extraCurricularEntries?: ExtraCurricularEntry[];
  honorEntries?: HonorEntry[];
  visitedSections?: string[];
}) {
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);

  const contactLines = [
    contact.email,
    contact.phone,
    contact.linkedinUrl,
    contact.githubUrl,
    contact.personalWebsite,
  ].filter(Boolean);

  const domainText = domainEntries
    .map((e) => e.value)
    .filter(Boolean)
    .join(", ");

  const filledEducation = educationEntries.filter((e) => e.institution.trim());
  const filledExperience = experienceEntries.filter((e) => e.jobTitle.trim() || e.organization.trim());
  const filledProjects = projectEntries.filter((e) => e.projectName.trim());
  const filledSkills = skillEntries.filter((e) => e.category.trim());
  const filledCertifications = certificationEntries.filter((e) => e.name.trim());
  const filledExtraCurricular = extraCurricularEntries.filter((e) => e.role.trim() || e.organization.trim());
  const filledHonors = honorEntries.filter((e) => e.title.trim());

  const visited = new Set(visitedSections);
  const showSummary = visited.has("summary") || !!summary;
  const showDomain = visited.has("domain") || !!domainText;
  const showEducation = visited.has("education") || filledEducation.length > 0;
  const showExperience = visited.has("experience") || filledExperience.length > 0;
  const showProjects = visited.has("projects") || filledProjects.length > 0;
  const showSkills = visited.has("skills") || filledSkills.length > 0;
  const showCertifications = visited.has("certification") || filledCertifications.length > 0;
  const showHonourAward = visited.has("honour-award") || filledHonors.length > 0;
  const showExtraCurricular = visited.has("extra-curriculum") || filledExtraCurricular.length > 0;

  const hasAnyContent =
    contact.fullName ||
    contactLines.length > 0 ||
    showSummary ||
    showDomain ||
    showEducation ||
    showExperience ||
    showProjects ||
    showSkills ||
    showCertifications ||
    showHonourAward ||
    showExtraCurricular;

  return (
    <div className="bg-[#F1F2F4] rounded-2xl p-4 relative">
      <div className="flex items-center gap-1 absolute top-4 right-4 z-10 bg-white rounded-lg border border-gray-200 px-1 py-1 text-xs">
        <button
          onClick={() => setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP))}
          className="size-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600"
          aria-label="Zoom out"
        >
          −
        </button>
        <span className="px-1.5 text-gray-600 tabular-nums">{zoom}%</span>
        <button
          onClick={() => setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP))}
          className="size-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={() => setZoom(ZOOM_DEFAULT)}
          className="px-2 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500"
        >
          Reset
        </button>
      </div>

      <div className="overflow-auto pt-14 pb-6 flex justify-center">
        <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}>
          <div
            id="resume-print-area"
            className="bg-white w-[340px] sm:w-[420px] min-h-[420px] shadow-sm p-6"
          >
            {!hasAnyContent ? (
              <p className="text-sm text-gray-400">
                Fill in the sections to see your resume take shape here.
              </p>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {contact.fullName || "Your Name"}
                    </h3>
                    {contact.location && (
                      <p className="text-sm text-gray-600">{contact.location}</p>
                    )}
                  </div>
                  {contactLines.length > 0 && (
                    <div className="text-right shrink-0">
                      {contactLines.map((line, i) => (
                        <p key={i} className="text-[11px] text-[#F86432] leading-snug">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {showSummary && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Summary</h4>
                    {summary && <p className="text-sm text-gray-700 mt-1">{summary}</p>}
                  </div>
                )}

                {showDomain && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Domain/functional areas
                    </h4>
                    {domainText && <p className="text-sm text-gray-700 mt-1">{domainText}</p>}
                  </div>
                )}

                {showEducation && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
                      Education
                    </h4>
                    {filledEducation.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {filledEducation.map((edu) => (
                          <div key={edu.id} className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{edu.institution}</p>
                              <p className="text-sm text-gray-700">
                                {[edu.degree, edu.fieldOfStudy && `in ${edu.fieldOfStudy}`]
                                  .filter(Boolean)
                                  .join(" ")}
                                {edu.gpa && ` | GPA: ${edu.gpa}`}
                              </p>
                            </div>
                            <div className="text-right shrink-0 text-sm">
                              {edu.location && (
                                <p className="font-medium text-gray-900">{edu.location}</p>
                              )}
                              {(edu.startDate || edu.endDate) && (
                                <p className="text-gray-600">
                                  {edu.startDate} – {edu.endDate}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {showExperience && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
                      Experience
                    </h4>
                    {filledExperience.length > 0 && (
                      <div className="flex flex-col gap-3">
                        {filledExperience.map((exp) => (
                          <div key={exp.id}>
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold text-gray-900">{exp.jobTitle}</p>
                                <p className="text-sm text-gray-700">{exp.organization}</p>
                              </div>
                              <div className="text-right shrink-0 text-sm">
                                {exp.location && (
                                  <p className="font-medium text-gray-900">{exp.location}</p>
                                )}
                                {(exp.startDate || exp.endDate) && (
                                  <p className="text-gray-600">
                                    {exp.startDate} – {exp.endDate}
                                  </p>
                                )}
                              </div>
                            </div>
                            {exp.description && (
                              <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
                            )}
                            {exp.achievements && (
                              <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
                                {exp.achievements}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {showProjects && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
                      Project
                    </h4>
                    {filledProjects.length > 0 && (
                      <div className="flex flex-col gap-3">
                        {filledProjects.map((proj) => (
                          <div key={proj.id}>
                            <div className="flex items-start justify-between gap-4">
                              <p className="text-sm font-semibold text-gray-900">{proj.projectName}</p>
                              {(proj.startDate || proj.endDate) && (
                                <p className="text-sm text-gray-600 shrink-0">
                                  {proj.startDate} – {proj.endDate}
                                </p>
                              )}
                            </div>
                            {proj.technologiesUsed && (
                              <p className="text-xs text-gray-500 italic">{proj.technologiesUsed}</p>
                            )}
                            {proj.description && (
                              <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
                            )}
                            {proj.achievements && (
                              <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
                                {proj.achievements}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {showSkills && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
                      Skills
                    </h4>
                    {filledSkills.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {filledSkills.map((skill) => (
                          <p key={skill.id} className="text-sm text-gray-700">
                            <span className="font-semibold text-gray-900">{skill.category}:</span>{" "}
                            {skill.skills}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {showCertifications && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
                      Certifications
                    </h4>
                    {filledCertifications.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {filledCertifications.map((cert) => (
                          <li key={cert.id}>
                            {cert.name}
                            {cert.issuingOrganization && ` - ${cert.issuingOrganization}`}
                            {cert.dateAcquired && ` (${cert.dateAcquired})`}
                            {cert.additionalDetails && (
                              <span className="block whitespace-pre-line pl-4">
                                {cert.additionalDetails}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {showHonourAward && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
                      Honors &amp; Awards
                    </h4>
                    {filledHonors.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {filledHonors.map((honor) => (
                          <li key={honor.id}>
                            {honor.title}
                            {honor.issuingOrganization && ` - ${honor.issuingOrganization}`}
                            {honor.dateReceived && ` (${honor.dateReceived})`}
                            {honor.description && (
                              <span className="block pl-4">{honor.description}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {showExtraCurricular && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
                      Extra-Curricular Activities
                    </h4>
                    {filledExtraCurricular.length > 0 && (
                      <div className="flex flex-col gap-3">
                        {filledExtraCurricular.map((act) => (
                          <div key={act.id}>
                            <div className="flex items-start justify-between gap-4">
                              <p className="text-sm font-semibold text-gray-900">{act.organization}</p>
                              {(act.startDate || act.endDate) && (
                                <p className="text-sm text-gray-600 shrink-0">
                                  {act.startDate} – {act.endDate}
                                </p>
                              )}
                            </div>
                            {act.role && <p className="text-sm text-gray-700">{act.role}</p>}
                            {act.description && (
                              <p className="text-sm text-gray-700 mt-1">{act.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
