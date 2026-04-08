"use client";

import React, { useState } from "react";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { ManualAddForm } from "./manual-add-form";
import { BulkAddForm } from "./bulk-add-form";

export function AddUserModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"manual" | "bulk">("manual");

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New User"
      subtitle="Create a new student or invite users to the platform"
      headerContent={
        <div className="inline-flex items-center bg-white p-1 rounded-xl shadow-sm overflow-x-auto w-full md:w-auto">
          <button
            onClick={() => setActiveTab("manual")}
            className={`flex-1 md:flex-none whitespace-nowrap px-2 md:px-4 py-2 rounded-lg text-[14px] md:text-[15px] transition-colors font-medium ${
              activeTab === "manual"
                ? "bg-[#FFEBE6] text-black"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Manual Add
          </button>
          <button
            onClick={() => setActiveTab("bulk")}
            className={`flex-1 md:flex-none whitespace-nowrap px-2 md:px-4 py-2 rounded-lg text-[14px] md:text-[15px] transition-colors font-medium ${
              activeTab === "bulk"
                ? "bg-[#FFEBE6] text-black"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Automatic / Bulk Add
          </button>
        </div>
      }
      footerContent={
        <div className="grid grid-cols-2 md:flex items-center justify-end gap-2 md:gap-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="md:w-auto px-8 h-12 rounded-xl text-[15px] font-medium border-gray-200"
          >
            Cancel
          </Button>
          <Button className="md:w-auto px-8 h-12 rounded-xl text-[15px] font-medium bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white border-transparent">
            <span className="text-xl mr-1 font-light">+</span> Add User
          </Button>
        </div>
      }
    >
      {activeTab === "manual" ? <ManualAddForm /> : <BulkAddForm />}
    </AppMegaModal>
  );
}
