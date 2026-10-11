"use client";
import { Button } from "@/components/ui/button";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { InstructorDashboardButton } from "../../_components/instructor-dashboard-button";
import { FilePlus } from "lucide-react";
import { useRouter } from "next/navigation";

export const InstructorQuizHeader = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center flex-wrap gap-3">
      <DashboardSearch placeholder="Search Quizzes" />

      {/* Button tabs */}
      <div className="flex w-full lg:w-auto self-end place-self-end justify-end  items-center gap-3">
        <Button className="bg-white hover:bg-primary/20 text-black hover:text-primary py-5! border border-white hover:border-primary cursor-pointer">
          All Quizzes
        </Button>
        <Button className="bg-white hover:bg-primary/20 text-black hover:text-primary py-5! border border-white hover:border-primary cursor-pointer">
          Drafts
        </Button>
        <Button className="bg-white hover:bg-primary/20 text-black hover:text-primary py-5! border border-white hover:border-primary cursor-pointer">
          Active
        </Button>
        <InstructorDashboardButton
          title="Creaate Quiz"
          icon={FilePlus}
          onClick={() => router.push("/dashboard/instructor/quiz/create")}
        />
      </div>
    </div>
  );
};
