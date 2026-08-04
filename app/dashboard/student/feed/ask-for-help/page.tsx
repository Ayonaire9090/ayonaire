import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AskForHelpContent } from "./_components/ask-for-help-content";

export default function StudentAskForHelpPage() {
  return (
    <>
      <div className="pb-2 lg:py-2 px-4 lg:px-6">
        <div className="hidden lg:flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              Ask for Help
            </h1>
          </div>
          <p className="text-base text-gray-500">
            Get answers from peers and instructors
          </p>
        </div>
        <div className="md:hidden">
          <DashboardHeader
            title="Ask for Help"
            subTitle="Get answers from peers and instructors"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-0 lg:p-6 pb-24 md:pb-6">
        <AskForHelpContent />
      </div>
    </>
  );
}
