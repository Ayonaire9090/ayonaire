import Image from "next/image";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Projects"
        subTitle="Track student capstone and course projects"
      />
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white py-24">
        <Image
          src="/assets/icons/data-not-found.svg"
          alt="Not available yet"
          width={150}
          height={150}
          className="w-28 h-auto object-contain select-none"
        />
        <div className="text-center">
          <p className="text-[17px] font-semibold text-gray-900">
            Project tracking isn&apos;t available yet
          </p>
          <p className="text-[15px] text-gray-500 mt-1">
            This platform doesn&apos;t have a projects feature on the backend yet.
          </p>
        </div>
      </div>
    </div>
  );
}
