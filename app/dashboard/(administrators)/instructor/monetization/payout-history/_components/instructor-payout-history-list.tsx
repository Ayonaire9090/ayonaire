"use client";

import { Wallet } from "lucide-react";

export const InstructorPayoutHistoryList = () => {
  return (
    <div className="my-6 p-4 bg-white rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 px-2">Recent Payouts</h2>
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center px-4">
        <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
          <Wallet className="size-6" />
        </div>
        <p className="text-gray-500 text-[15px]">
          Payout history isn&apos;t available yet - this needs a backend payout endpoint before
          individual payouts can be listed here.
        </p>
      </div>
    </div>
  );
};
