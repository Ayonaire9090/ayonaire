import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorCreateQuizForm } from "./_components/instructor-create-quiz-form";

export default function InstructorCreateQuizPage() {
  return (
    <>
      <DashboardHeader
        title="Create Quiz"
        subTitle="Design your question and define the correct answers for your students."
      />
      <InstructorCreateQuizForm />
    </>
  );
}
