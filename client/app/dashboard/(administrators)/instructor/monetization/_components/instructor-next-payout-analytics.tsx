"use client";

import React from "react";
import { History } from "lucide-react";
import { toast } from "sonner";

// No payout endpoint exists in the backend yet - PaymentAnalytics only
// exposes a platform-wide instructorPayouts aggregate, not a per-instructor
// payout schedule/method/history. Rather than fabricate a date and card
// number, this is an honest "not available yet" state, same pattern as the
// dashboard header's notification/settings buttons.
export const InstructorNextPayoutAnalytics = () => {
  return (
    <div className="bg-white rounded-[16px] p-6 border border-gray-100/50 my-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-[#FFEBE6] flex items-center justify-center text-[#FF7A59]">
            <History className="size-5" />
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold text-sm">Next Payout</h4>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">
              Not available yet
            </h3>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-[15px] px-1">
        Payout scheduling and history aren&apos;t available yet - this needs a backend payout
        endpoint before it can show real dates or methods.
      </p>

      <button
        onClick={() =>
          toast.info("Payout management isn't available yet - needs a backend payout endpoint.")
        }
        className="w-full mt-8 h-14 bg-[#FF7A59] hover:bg-[#FF7A59]/90 rounded-[14px] text-white text-[16px] font-bold transition-all shadow-sm shadow-[#FF7A59]/10 cursor-pointer"
      >
        Manage Payout Method
      </button>
    </div>
  );
};
