"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";

export const AutomatedTriggers = () => {
  const [inactivityAlerts, setInactivityAlerts] = useState(true);

  return (
    <div className="w-full flex flex-col mt-4">
      <div className="flex flex-col gap-1 lg:gap-1.5 mb-8">
        <h2 className="text-[20px] lg:text-[22px] font-semibold text-gray-900">
          Automated Triggers
        </h2>
        <p className="text-gray-500 text-[14px] lg:text-[15px]">
          Configure specific events that trigger notifications.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[18px] lg:text-[20px] font-medium text-gray-900">
          Overdue Assignment Reminder
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Trigger Card */}
          <div className="bg-white rounded-2xl p-3 lg:p-4 flex flex-col justify-center gap-1.5 shadow-xs border border-gray-100/50 min-h-[100px]">
            <h4 className="text-[17px] font-semibold text-gray-900">Trigger</h4>
            <p className="text-gray-500 text-[15px]">
              Send afterhours of due date
            </p>
          </div>

          {/* Repeat Card */}
          <div className="bg-white rounded-2xl p-3 lg:p-4 flex flex-col justify-center gap-1.5 shadow-xs border border-gray-100/50 min-h-[100px]">
            <h4 className="text-[17px] font-semibold text-gray-900">Repeat</h4>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Repeat everyhours 24
              <br />
              Stop after 3 attempts
            </p>
          </div>

          {/* Template Used Card */}
          <div className="bg-white rounded-2xl p-3 lg:p-4 flex flex-col justify-center gap-1.5 shadow-xs border border-gray-100/50 min-h-[100px]">
            <h4 className="text-[17px] font-semibold text-gray-900">
              Template Used
            </h4>
            <p className="text-gray-500 text-[15px]">
              Send afterhours of due date
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between bg-white rounded-2xl p-6 shadow-xs border border-gray-100/50">
        <span className="text-[17px] font-medium text-gray-900">
          Inactivity Alerts
        </span>
        <Switch
          checked={inactivityAlerts}
          onCheckedChange={setInactivityAlerts}
          className="data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200 shadow-none border-0"
        />
      </div>
    </div>
  );
};
