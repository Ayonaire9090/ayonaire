export type AssignmentType = "Project" | "Quiz" | "File";
export type AssignmentStatus = "Published" | "Closed" | "Draft" | "Archived";

export interface Assignment {
  id: string;
  title: string;
  course: string;
  cohort: string;
  type: AssignmentType;
  dueDate: string;
  totalStudents: number;
  submittedCount: number;
  expectedCount: number;
  status: AssignmentStatus;
}

export const mockAssignments: Assignment[] = [
  {
    id: "a1",
    title: "Machine Learning Final Project",
    course: "Machine Learning",
    cohort: "AI Automation – Cohort 3",
    type: "Project",
    dueDate: "Mar 15, 2026",
    totalStudents: 30,
    submittedCount: 28,
    expectedCount: 30,
    status: "Published",
  },
  {
    id: "a2",
    title: "Neural Networks Quiz",
    course: "Machine Learning",
    cohort: "AI Automation – Cohort 3",
    type: "Quiz",
    dueDate: "Mar 15, 2026",
    totalStudents: 30,
    submittedCount: 30,
    expectedCount: 30,
    status: "Closed",
  },
  {
    id: "a3",
    title: "React Components Assignment",
    course: "Full Stack Development",
    cohort: "Web Development – Cohort 5",
    type: "File",
    dueDate: "Mar 15, 2026",
    totalStudents: 30,
    submittedCount: 0,
    expectedCount: 28,
    status: "Draft",
  },
  {
    id: "a4",
    title: "Data Visualization Project",
    course: "Data Analytics",
    cohort: "Data Science – Cohort 2",
    type: "Project",
    dueDate: "Mar 15, 2026",
    totalStudents: 30,
    submittedCount: 12,
    expectedCount: 25,
    status: "Published",
  },
  {
    id: "a5",
    title: "Machine Learning Final Project",
    course: "Full Stack Development",
    cohort: "Web Development – Cohort 5",
    type: "Project",
    dueDate: "Mar 15, 2026",
    totalStudents: 30,
    submittedCount: 30,
    expectedCount: 30,
    status: "Archived",
  },
];
