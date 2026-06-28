export type StudentStatus = "Submitted" | "Completed" | "Pending" | "Enrolling";

export interface StudentData {
  id: string;
  name: string;
  email: string;
  course: string;
  quizScore: number;
  status: StudentStatus;
  progress: number;
}

export const DUMMY_STUDENTS: StudentData[] = [
  {
    id: "1",
    name: "Sarah Ahmed",
    email: "sarah.ahmed@example.com",
    course: "AI Engineering",
    quizScore: 92,
    status: "Submitted",
    progress: 45,
  },
  {
    id: "2",
    name: "Ali Hassan",
    email: "omar.siddiqui@example.com",
    course: "Data Science",
    quizScore: 98,
    status: "Completed",
    progress: 100,
  },
  {
    id: "3",
    name: "Fatima Khan",
    email: "fatima.khan@example.com",
    course: "Data Analytics",
    quizScore: 88,
    status: "Pending",
    progress: 10,
  },
  {
    id: "4",
    name: "Omar Siddiqui",
    email: "ali.hassan@example.com",
    course: "Project Management",
    quizScore: 60,
    status: "Enrolling",
    progress: 60,
  },
];

export const getStatusColor = (status: StudentStatus) => {
  switch (status) {
    case "Submitted": return "bg-[#F3E8FF] text-[#A855F7]"; // purple
    case "Completed": return "bg-[#DCFCE7] text-[#16A34A]"; // green
    case "Pending": return "bg-[#FEE2E2] text-[#DC2626]"; // red
    case "Enrolling": return "bg-[#DBEAFE] text-[#2563EB]"; // blue
    default: return "bg-gray-100 text-gray-800";
  }
};

export const getProgressColor = (status: StudentStatus) => {
  switch (status) {
    case "Submitted": return "#A855F7"; // purple
    case "Completed": return "#16A34A"; // green
    case "Pending": return "#DC2626"; // red
    case "Enrolling": return "#2563EB"; // blue
    default: return "#4B5563";
  }
};
