import { useState } from "react";

export const LiveSummaryBanner = () => {
  const [type, setType] = useState("");
  const [recipientType, setRecipientType] = useState("");
  const [sendOption, setSendOption] = useState("");

  return (
    <div className="mt-2 bg-[#F86432]/10 rounded-lg p-4 md:p-6 flex flex-col gap-5 border-0">
      <h2 className="text-[17px] font-semibold text-gray-900 mb-1">
        Live Summary
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center pb-4 border-b-2 border-[#F9E2D8]">
          <span className="text-primary text-[15px] font-medium">
            Recipients:
          </span>
          <span className="text-primary font-medium text-[15px]">
            {recipientType || "All Users"}
          </span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-[#F9E2D8]">
          <span className="text-primary text-[15px] font-medium">
            Delivery:
          </span>
          <span className="text-primary font-medium text-[15px]">
            {sendOption || "Send Now"}
          </span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-[#F9E2D8]">
          <span className="text-primary text-[15px] font-medium">Status::</span>
          <span className="text-primary font-medium text-[15px]">Draft</span>
        </div>
      </div>
    </div>
  );
};
