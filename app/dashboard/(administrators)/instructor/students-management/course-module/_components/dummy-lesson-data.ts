export type LessonStatus = "Completed" | "In Progress" | "Not Started";

export interface LessonProgressData {
  id: string;
  lesson: string;
  status: LessonStatus;
  completionDate: string;
}

export const DUMMY_LESSONS: LessonProgressData[] = [
  {
    id: "1",
    lesson: "AI Engineering",
    status: "Completed",
    completionDate: "Mar 02",
  },
  {
    id: "2",
    lesson: "Data Science",
    status: "Completed",
    completionDate: "Mar 03",
  },
  {
    id: "3",
    lesson: "Data Analytics",
    status: "In Progress",
    completionDate: "-",
  },
  {
    id: "4",
    lesson: "Project Management",
    status: "Not Started",
    completionDate: "-",
  },
];

export const getLessonStatusColor = (status: LessonStatus) => {
  switch (status) {
    case "Completed":
      return "bg-[#d1fae5] text-[#10b981]"; // light green bg, green text
    case "In Progress":
      return "bg-[#ffe4e6] text-[#f43f5e]"; // light red bg, red text
    case "Not Started":
      return "bg-[#dbeafe] text-[#3b82f6]"; // light blue bg, blue text
    default:
      return "bg-gray-100 text-gray-800";
  }
};
