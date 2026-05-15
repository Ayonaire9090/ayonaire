import { Search, Filter, Calendar, Badge, ChevronRight } from "lucide-react";
import Image from "next/image";

export const ProfilePointsContent = () => {
  return (
    <div className="w-full flex justify-center items-start my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* First Card (Academy Points) */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-center items-start">
            <div className="flex items-center gap-1.5">
              <Image
                src="/assets/icons/award-badge.svg"
                alt="thumbs Up"
                width={50}
                height={50}
                className="w-11 h-11 "
              />
              <div className="flex flex-col">
                <span className="text-[22px] font-bold text-gray-800">790</span>
                <span className="text-[16px] font-seminold text-gray-800">
                  Academy points
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card (Community Points) */}
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-center items-start">
            <div className="flex items-center gap-1.5">
              <Image
                src="/assets/icons/thumbs-up.svg"
                alt="thumbs Up"
                width={50}
                height={50}
                className="w-11 h-11 "
              />
              <div className="flex flex-col">
                <span className="text-[22px] font-bold text-gray-800">
                  1456
                </span>
                <span className="text-[16px] font-seminold text-gray-800">
                  Community points
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
