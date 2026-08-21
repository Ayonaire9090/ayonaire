import {
  BookOpen,
  Briefcase,
  LayoutTemplate,
  MessageSquare,
  Presentation,
  Video,
} from "lucide-react";

export const studentFooterNav = [
  { title: "Feed", url: "/dashboard/student/feed", icon: LayoutTemplate },
  { title: "Workshop", url: "/dashboard/student/workshop", icon: Video },
  {
    title: "Job Fair",
    url: "/dashboard/student/job-sessions",
    icon: Briefcase,
  },
  { title: "Courses", url: "/dashboard/student/courses", icon: BookOpen },
  {
    title: "Messages",
    url: "/dashboard/student/messages",
    icon: MessageSquare,
  },
  {
    title: "Career",
    url: "/dashboard/student/career-accelarator",
    icon: Presentation,
  },
];
