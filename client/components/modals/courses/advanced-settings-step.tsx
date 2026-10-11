import React from "react";
import { Award } from "lucide-react";

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

interface AdvancedSettingsStepProps {
  completionCertificate: boolean;
  onChange: (value: boolean) => void;
}

export function AdvancedSettingsStep({
  completionCertificate,
  onChange,
}: AdvancedSettingsStepProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[17px] md:text-[18px] font-semibold text-gray-900">
          Advanced Settings
        </h3>
        <p className="text-[14.5px] text-gray-500">
          Certificate settings for this course
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-2">
        <div className="px-5 py-4 border border-primary rounded-[14px] flex items-center justify-between bg-white shadow-[0px_1px_3px_rgba(255,122,89,0.06)]">
          <div className="flex items-center gap-4">
            <div className="size-[46px] rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="size-6 text-primary" strokeWidth={1.5} />
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
          <ToggleSwitch checked={completionCertificate} onChange={onChange} />
        </div>

        <p className="text-[13px] text-gray-400">
          Visibility and enrollment limit settings aren&apos;t available yet - your
          course is created as a Draft and you can publish it from the course
          list once you&apos;re ready.
        </p>
      </div>
    </div>
  );
}
