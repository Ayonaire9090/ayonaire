export type QuizStatus = "Published" | "Closed" | "Draft" | "Archived";

export interface Quiz {
  id: string;
  title: string;
  course: string;
  class: string;
  createdBy: string;
  questions: number;
  totalStudents: number;
  submissions: number;
  avgScore: string;
  status: QuizStatus;
}

export const mockQuiz: Quiz[] = [
  {
    id: "q1",
    title: "Machine Learning Final Project",
    course: "AI Engineering",
    class: "AI Automation 0.1",
    createdBy: "Dr. Ahmad",
    questions: 25,
    totalStudents: 30,
    submissions: 28,
    avgScore: "82%",
    status: "Published",
  },
  {
    id: "q2",
    title: "Neural Networks Quiz",
    course: "Data Science",
    class: "AI Automation 0.2",
    createdBy: "Prof. Sara",
    questions: 20,
    totalStudents: 25,
    submissions: 25,
    avgScore: "82%",
    status: "Closed",
  },
  {
    id: "q3",
    title: "React Components Assignment",
    course: "Project Management",
    class: "Web Development 0.3",
    createdBy: "Mr. Ali",
    questions: 15,
    totalStudents: 0,
    submissions: 35,
    avgScore: "0%",
    status: "Draft",
  },
  {
    id: "q4",
    title: "Data Visualization Project",
    course: "Data Analytics",
    class: "Data Science 0.4",
    createdBy: "Ms. Fatima",
    questions: 30,
    totalStudents: 28,
    submissions: 28,
    avgScore: "91%",
    status: "Published",
  },
  {
    id: "q5",
    title: "Machine Learning Final Project",
    course: "Cyber Security",
    class: "Web Development 0.5",
    createdBy: "Dr. Ahmad",
    questions: 10,
    totalStudents: 25,
    submissions: 20,
    avgScore: "65%",
    status: "Archived",
  },
  {
    id: "q6",
    title: "Data Visualization Project",
    course: "Data Analytics",
    class: "Data Science 0.6",
    createdBy: "Ms. Fatima",
    questions: 30,
    totalStudents: 28,
    submissions: 28,
    avgScore: "91%",
    status: "Published",
  },
  {
    id: "q7",
    title: "Machine Learning Final Project",
    course: "Cyber Security",
    class: "Web Development 0.7",
    createdBy: "Dr. Ahmad",
    questions: 10,
    totalStudents: 25,
    submissions: 20,
    avgScore: "65%",
    status: "Archived",
  },
];
