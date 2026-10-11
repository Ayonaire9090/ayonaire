import {
  Award,
  Briefcase,
  Cloud,
  GraduationCap,
  LayoutList,
  LucideIcon,
  ShieldCheck,
  SquareStack,
  User,
  Users,
} from "lucide-react";

export interface ResumeSection {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const resumeSections: ResumeSection[] = [
  { id: "profile", title: "Profile", icon: User },
  { id: "summary", title: "Summary", icon: SquareStack },
  { id: "domain", title: "Domain", icon: LayoutList },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "experience", title: "Experience", icon: Briefcase },
  { id: "projects", title: "Projects", icon: LayoutList },
  { id: "skills", title: "Skills", icon: Cloud },
  { id: "certification", title: "Certification", icon: ShieldCheck },
  { id: "honour-award", title: "Honour & Award", icon: Award },
  { id: "extra-curriculum", title: "Extra Curriculum activities", icon: Users },
];
