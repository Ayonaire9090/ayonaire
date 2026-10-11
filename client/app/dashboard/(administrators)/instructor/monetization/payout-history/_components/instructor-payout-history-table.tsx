"use client";

import { Wallet } from "lucide-react";

// No payout endpoint exists in the backend yet (see
// instructor-next-payout-analytics.tsx) - there's no itemized payout ledger
// to list, only a lifetime aggregate on the platform-wide payment analytics
// endpoint. This is an honest empty state rather than fabricated rows.
export const InstructorPayoutHistoryTable = () => {
  return (
    <div className="mt-6 p-6 bg-white rounded-2xl mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Payouts</h2>
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
          <Wallet className="size-6" />
        </div>
        <p className="text-gray-500 text-[15px] max-w-sm">
          Payout history isn&apos;t available yet - this needs a backend payout endpoint before
          individual payouts can be listed here.
        </p>
      </div>
    </div>
  );
};
