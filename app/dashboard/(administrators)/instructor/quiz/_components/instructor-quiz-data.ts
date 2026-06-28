export interface InstructorQuiz {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  questions: number;
  attempts: number;
}

export const INSTRUCTOR_QUIZZES: InstructorQuiz[] = [
  {
    id: "1",
    title: "Midterm Examination",
    course: "Computer Science 101",
    dueDate: "Oct 24, 2023",
    questions: 25,
    attempts: 142,
  },
  {
    id: "2",
    title: "Weekly Pop Quiz #4",
    course: "AI Automation",
    dueDate: "Oct 28, 2023",
    questions: 10,
    attempts: 89,
  },
  {
    id: "3",
    title: "Final Assessment Part A",
    course: "UX Design Principles",
    dueDate: "Nov 15, 2023",
    questions: 50,
    attempts: 210,
  },
  {
    id: "4",
    title: "Entrance Leveling Test",
    course: "Intro to Python",
    dueDate: "Dec 01, 2023",
    questions: 15,
    attempts: 305,
  },
];
