export type QuizType = "Quiz" | "Assignment" | "Exam";
export type QuizStatus = "Attempt Now" | "Submitted" | "Upcoming" | "Completed" | "Overdue";

export interface Quiz {
  id: string;
  title: string;
  type: QuizType;
  course: string;
  marks: number;
  dueDate: string;
  status: QuizStatus;
}

export const mockQuiz: Quiz[] = [
  {
    id: "q1",
    title: "Python Quiz 1",
    type: "Quiz",
    course: "Data Science",
    marks: 20,
    dueDate: "Mar 8, 2026",
    status: "Attempt Now",
  },
  {
    id: "q2",
    title: "Data Science Assignment",
    type: "Assignment",
    course: "AI Automation",
    marks: 50,
    dueDate: "Mar 10, 2026",
    status: "Submitted",
  },
  {
    id: "q3",
    title: "Machine Learning Midterm",
    type: "Exam",
    course: "Data Science",
    marks: 100,
    dueDate: "Mar 15, 2026",
    status: "Upcoming",
  },
  {
    id: "q4",
    title: "Python Basics Quiz",
    type: "Quiz",
    course: "AI Automation",
    marks: 15,
    dueDate: "Feb 25, 2026",
    status: "Completed",
  },
  {
    id: "q5",
    title: "Neural Networks Project",
    type: "Assignment",
    course: "Data Science",
    marks: 100,
    dueDate: "Mar 5, 2026",
    status: "Overdue",
  },
];
