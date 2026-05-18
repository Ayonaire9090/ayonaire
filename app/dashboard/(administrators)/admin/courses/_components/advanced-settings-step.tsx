import React, { useState } from "react";
import { ChevronDown, Award } from "lucide-react";

function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`w-10 h-[22px] rounded-full relative cursor-pointer border border-transparent transition-colors ${checked ? "bg-gray-900" : "bg-gray-200"}`}
    >
      <div
        className={`size-[18px] rounded-full bg-white absolute top-px transition-all ${checked ? "right-[2px]" : "left-[2px]"}`}
      />
    </div>
  );
}

export function AdvancedSettingsStep() {
  const [certificate, setCertificate] = useState(true);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[17px] md:text-[18px] font-semibold text-gray-900">
          Advanced Settings
        </h3>
        <p className="text-[14.5px] text-gray-500">
          Certificate, visibility, and enrollment options
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-2">
        {/* Certificate Toggle */}
        <div className="px-5 py-4 border border-[#FF7A59] rounded-[14px] flex items-center justify-between bg-white shadow-[0px_1px_3px_rgba(255,122,89,0.06)]">
          <div className="flex items-center gap-4">
            <div className="size-[46px] rounded-2xl bg-[#FFEBE6] flex items-center justify-center shrink-0">
              <Award className="size-6 text-[#FF7A59]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="text-[15.5px] font-medium text-gray-900">
                Certificate of Completion
              </h4>
              <p className="text-[13.5px] text-gray-500">
                Students receive a certificate upon course completion
              </p>
            </div>
          </div>
          <ToggleSwitch checked={certificate} onChange={setCertificate} />
        </div>

        {/* Visibility and Enrollment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-2">
          {/* Course Visibility */}
          <div className="flex flex-col gap-3">
            <label className="text-[14.5px] font-medium text-gray-900">
              Course Visibility
            </label>
            <div className="relative">
              <select className="w-full px-4 h-12 rounded-xl border border-gray-100/60 hover:border-gray-200 text-[14.5px] text-gray-600 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white appearance-none shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
                <option>Public</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Enrollment Limit */}
          <div className="flex flex-col gap-3">
            <label className="text-[14.5px] font-medium text-gray-900">
              Enrollment Limit
            </label>
            <div className="relative">
              <select className="w-full px-4 h-12 rounded-xl border border-gray-100/60 hover:border-gray-200 text-[14.5px] text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white appearance-none shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
                <option>Leave empty for unlimited</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
