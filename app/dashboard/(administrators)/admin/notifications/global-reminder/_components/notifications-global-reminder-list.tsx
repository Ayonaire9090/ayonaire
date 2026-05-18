"use client";

import { useState } from "react";
import { DataList } from "@/components/ui/data-list";
import { GlobalReminder, globalRemindersData } from "./mock-data";
import { ChevronDown, MoreVertical } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const getStatusBadge = (status: GlobalReminder["status"], type: string) => {
  if (status === "Active") {
    if (type === "Email") {
      return (
        <span className="px-3 py-1 bg-[#EAF9F0] text-[#009F42] rounded-full text-[12px] font-medium">
          Active
        </span>
      );
    }
    // Mobile mocks actually have "Active" as yellow for reminders
    return (
      <span className="px-3 py-1 bg-[#FFF4E5] text-[#F59E0B] rounded-full text-[12px] font-medium">
        Active
      </span>
    );
  }
  return (
    <span className="px-3 py-1 bg-[#FEE2E2] text-[#EF4444] rounded-full text-[12px] font-medium">
      {status}
    </span>
  );
};

export const NotificationsGlobalReminderList = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 md:hidden">
      <div className="p-2 bg-white rounded-xl">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold">
            Global Notification Templates
          </h1>
          <p className="text-gray-600 text-sm">
            Create and manage templates used across all automation rules.
          </p>
        </div>
        {/* Mobile Reminder Settings Dropdowns */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar px-1 pt-2 pb-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-between gap-2 p-2.5 bg-[#F6F6F6] hover:bg-gray-100 transition-colors rounded-lg text-gray-600 text-[12px] font-medium whitespace-nowrap outline-none">
                All Types
                <ChevronDown size={15} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[140px] bg-[#F6F6F6] border-none shadow-sm rounded-xl"
            >
              <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
                Reminder
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
                Email
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-between gap-2 p-2.5 bg-[#F6F6F6] hover:bg-gray-100 transition-colors rounded-lg text-gray-600 text-[12px] font-medium whitespace-nowrap outline-none">
                All Status
                <ChevronDown size={15} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[140px] bg-[#F6F6F6] border-none shadow-sm rounded-xl"
            >
              <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
                Active
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
                Inactive
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-between gap-2 p-2.5 bg-[#F6F6F6] hover:bg-gray-100 transition-colors rounded-lg text-gray-600 text-[12px] font-medium whitespace-nowrap outline-none">
                Bulk Action
                <ChevronDown size={15} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[140px] bg-[#F6F6F6] border-none shadow-sm rounded-xl"
            >
              <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50 focus:text-red-600 focus:bg-red-50">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="py-2 bg-white rounded-xl p-2">
        <DataList
          data={globalRemindersData}
          keyExtractor={(item) => item.id}
          itemClassName="flex-col items-stretch gap-0"
          renderItem={(item) => (
            <div className="flex w-full items-start gap-4">
              <Checkbox
                className="mt-1 rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                checked={selectedItems.has(item.id)}
                onCheckedChange={() => toggleItem(item.id)}
              />
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium text-[16px] leading-tight">
                      {item.templateName}
                    </span>
                    <span className="text-gray-600 text-[15px] mt-1">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(item.status, item.type)}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-gray-500 hover:text-black transition-colors -mr-2 outline-none">
                          <MoreVertical className="size-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-[160px] bg-[#F6F6F6] border-none shadow-sm rounded-xl"
                      >
                        <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50 focus:text-red-600 focus:bg-red-50">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-gray-600 text-[15px]">
                    {item.channel}
                  </span>
                  <span className="text-gray-500 text-[15px] font-medium">
                    {item.lastEdited}
                  </span>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
