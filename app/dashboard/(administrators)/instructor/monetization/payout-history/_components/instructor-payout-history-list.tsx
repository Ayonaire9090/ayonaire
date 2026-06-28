"use client";

import { DataList } from "@/components/ui/data-list";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreVertical, Download } from "lucide-react";
import { dummyPayoutData } from "./instructor-payout-history-table";
import { Button } from "@/components/ui/button";

export const InstructorPayoutHistoryList = () => {
  const footerContent = (
    <div className="flex gap-4 w-full">
      <Button variant="secondary" className="flex-1 bg-[#F6F6F6] shadow-none! border-0! hover:bg-gray-200 text-gray-700 text-sm gap-2">
        <Download className="w-4 h-4" /> Export Quizzes
      </Button>
      <Button variant="secondary" className="flex-1 bg-[#F6F6F6] shadow-none! border-0! hover:bg-gray-200 text-gray-700 text-sm gap-2">
        <Download className="w-4 h-4" /> Export Result
      </Button>
    </div>
  );

  return (
    <div className="my-6 p-4 bg-white rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 px-2">Recent Payouts</h2>
      <DataList
        data={dummyPayoutData}
        keyExtractor={(item) => item.id}
        footerContent={footerContent}
        renderItem={(item) => (
          <div className="flex flex-col w-full gap-4">
            {/* Top row */}
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                <span className="text-[#333333] text-[15px] font-medium">{item.payoutId}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#333333] text-[15px]">{item.method}</span>
                <button className="text-gray-800 hover:text-black transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Middle row */}
            <div className="flex justify-between items-center w-full pl-8">
              <span
                className={`px-3 py-1 w-fit text-[13px] rounded-full font-medium ${
                  item.payoutId === "#PAY1023"
                    ? "bg-[#F3E8FF] text-[#A855F7]"
                    : item.payoutId === "#PAY1022"
                    ? "bg-[#DBEAFE] text-[#3B82F6]"
                    : "bg-[#FEE2E2] text-[#EF4444]"
                }`}
              >
                {item.status}
              </span>
              <span className="text-gray-500 text-[15px]">{item.date}</span>
            </div>

            {/* Bottom row */}
            <div className="w-full pl-8">
              <span className="text-[17px] font-bold text-black">
                ${item.amount.toLocaleString()}{" "}
                <span className="text-gray-500 font-normal text-[15px] ml-1">Amount</span>
              </span>
            </div>
          </div>
        )}
      />
    </div>
  );
};
