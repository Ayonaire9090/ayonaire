"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { AppSelect } from "@/components/ui/app-select";

export const DefaultRecurringSettings = () => {
  const [frequency, setFrequency] = useState("Daily");
  const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set());
  const [startTime, setStartTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [deliveryWindowEnabled, setDeliveryWindowEnabled] = useState(true);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="w-full bg-white p-5 lg:p-7 rounded-2xl flex flex-col gap-6 mt-4">
      <div className="flex flex-col gap-1 lg:gap-1.5">
        <h2 className="text-[20px] lg:text-[22px] font-semibold text-gray-900">
          Default Recurring Settings
        </h2>
        <p className="text-gray-500 text-[14px] lg:text-[15px]">
          Global behavior for recurring reminders.
        </p>
      </div>

      {/* Default Frequency */}
      <div className="flex flex-col gap-3 mt-1">
        <label className="text-[16px] font-semibold text-gray-900">
          Default Frequency
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {["Daily", "Weekly", "Monthly"].map((freq) => (
            <button
              key={freq}
              onClick={() => setFrequency(freq)}
              className={`h-12 rounded-[14px] text-[15px] font-medium transition-colors border text-left px-5 outline-none ${
                frequency === freq
                  ? "bg-white border-primary text-gray-900 shadow-sm"
                  : "bg-gray-50/80 border-transparent text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              }`}
            >
              {freq}
            </button>
          ))}
        </div>
      </div>

      {/* Select Days */}
      <div className="flex flex-col gap-3 mt-2">
        <label className="text-[16px] font-semibold text-gray-900">
          Select Days
        </label>
        <div className="flex flex-wrap gap-2.5">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`h-[46px] flex-1 min-w-[50px] lg:min-w-[70px] rounded-[14px] text-[15px] font-medium transition-colors border outline-none ${
                selectedDays.has(day)
                  ? "bg-white border-primary text-gray-900 shadow-sm"
                  : "bg-gray-50/80 border-transparent text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Start Time & Timezone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        <AppSelect
          label="Start Time"
          placeholder="Assignment reminder"
          value={startTime}
          onChange={setStartTime}
          options={[
            { label: "Assignment reminder", value: "Assignment reminder" },
            { label: "08:00 AM", value: "08:00 AM" },
            { label: "09:00 AM", value: "09:00 AM" },
            { label: "10:00 AM", value: "10:00 AM" },
          ]}
        />
        <AppSelect
          label="Timezone"
          placeholder="Assignment reminder"
          value={timezone}
          onChange={setTimezone}
          options={[
            { label: "Assignment reminder", value: "Assignment reminder" },
            { label: "Pacific Time (PT)", value: "PT" },
            { label: "Eastern Time (ET)", value: "ET" },
            { label: "Coordinated Universal Time (UTC)", value: "UTC" },
          ]}
        />
      </div>

      {/* Delivery Time Window */}
      <div className="mt-2 border border-gray-100 rounded-2xl p-5 lg:p-6 bg-[#FAFAFA]">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[17px] font-semibold text-gray-900">
              Delivery Time Window
            </h3>
            <p className="text-gray-400 text-[14px]">
              Restrict notifications to specific hours.
            </p>
          </div>
          <Switch
            checked={deliveryWindowEnabled}
            onCheckedChange={setDeliveryWindowEnabled}
            className="data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200 shadow-none border-0"
          />
        </div>

        {deliveryWindowEnabled && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-5">
            <span className="text-gray-400 text-[14px] mr-1">
              Send only between:
            </span>
            <div className="flex items-center gap-2">
              <div className="h-[38px] px-4 py-2 bg-white border border-gray-100 rounded-[10px] text-[14px] text-gray-500 font-medium whitespace-nowrap">
                08 : 00 AM
              </div>
              <div className="h-[38px] px-4 py-2 bg-white border border-gray-100 rounded-[10px] text-[14px] text-gray-500 font-medium whitespace-nowrap">
                08 : 00 PM
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
