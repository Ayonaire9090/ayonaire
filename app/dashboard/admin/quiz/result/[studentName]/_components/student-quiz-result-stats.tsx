import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const StudentQuizResultStats = () => {
  return (
    <div className="w-full bg-white rounded-3xl p-4 lg:p-6 flex flex-col gap-8 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-2 py-3">
          {/* Student Profile Header */}
          <div className="flex items-start gap-1 pb-3">
            <Avatar className="size-16 rounded-full overflow-hidden">
              <AvatarImage
                src="/assets/persons/mr-ayo.png"
                alt="Ayo"
                className="object-cover"
              />
              <AvatarFallback className="bg-orange-100 text-orange-600 font-bold text-xl">
                AY
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-[24px] font-bold text-gray-900 leading-tight">
                Ayo
              </h2>
              <span className="text-[16px] text-gray-500 font-medium">
                ayo.holt@example.com
              </span>
            </div>
          </div>

          {/* Info Sections Row */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-bold text-gray-900">
                Quiz Title
              </span>
              <span className="text-[16px] text-gray-500 font-medium">
                Algebra Quiz 1
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-bold text-gray-900">
                Course
              </span>
              <span className="text-[16px] text-gray-500 font-medium">
                Math 101
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-bold text-gray-900">Class</span>
              <span className="text-[16px] text-gray-500 font-medium">
                Cohort A
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-bold text-gray-900">
                Attempt Date
              </span>
              <span className="text-[16px] text-gray-500 font-medium">
                2026-02-27
              </span>
            </div>
          </div>
        </div>
        {/* Stats Highlight Card */}
        <div className="bg-[#F8F9FA] rounded-[24px] p-6 grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-12">
          <div className="flex flex-col gap-2">
            <span className="text-[18px] lg:text-[20px] text-gray-400 font-semibold">
              Total Score
            </span>
            <span className="text-[20px] lg:text-[24px] font-bold text-gray-900">
              18/ 25
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[18px] lg:text-[20px] text-gray-400 font-semibold">
              Percentage
            </span>
            <span className="text-[20px] lg:text-[24px] font-bold text-[#3B82F6]">
              72%
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[18px] lg:text-[20px] text-gray-400 font-semibold">
              Status
            </span>
            <span className="text-[20px] lg:text-[24px] font-bold text-[#10B981]">
              Passed
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[18px] lg:text-[20px] text-gray-400 font-semibold">
              Time Taken
            </span>
            <span className="text-[20px] lg:text-[24px] font-bold text-[#3B82F6]">
              18 minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
