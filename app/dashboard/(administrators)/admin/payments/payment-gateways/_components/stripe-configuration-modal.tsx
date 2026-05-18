"use client";

import React, { useState } from "react";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MoreVertical } from "lucide-react";

interface StripeConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function StripeConfigurationModal({
  isOpen,
  onClose,
  onSave,
}: StripeConfigurationModalProps) {
  const [activeTab, setActiveTab] = useState<"payment-methods" | "settings">(
    "payment-methods",
  );

  const headerContent = (
    <div className="flex bg-white rounded-lg p-1 mt-2 border border-gray-100">
      <button
        onClick={() => setActiveTab("payment-methods")}
        className={`px-4 py-1.5 text-[14px] font-medium rounded-md transition-colors ${
          activeTab === "payment-methods"
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Payment Methods
      </button>
      <button
        onClick={() => setActiveTab("settings")}
        className={`px-4 py-1.5 text-[14px] font-medium rounded-md transition-colors ${
          activeTab === "settings"
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Settings
      </button>
    </div>
  );

  const footerContent = (
    <div className="grid grid-cols-2 lg:flex lg:justify-end gap-3 py-2">
      <Button
        variant="outline"
        onClick={onClose}
        className="border-gray-200 text-gray-700 hover:bg-white/80 bg-white lg:px-8 py-6! rounded-xl shadow-none! cursor-pointer"
      >
        Cancel
      </Button>
      <Button
        onClick={onSave}
        className="bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white lg:px-8 py-6! rounded-xl shadow-none! cursor-pointer"
      >
        Save Change
      </Button>
    </div>
  );

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={onClose}
      title="Stripe Configuration"
      subtitle="Manage your payment gateway integration, API keys, and environment settings."
      headerContent={headerContent}
      footerContent={footerContent}
    >
      {activeTab === "payment-methods" && (
        <div className="flex flex-col gap-8 mt-2">
          {/* Payments accepted on checkout */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[15px] font-semibold text-gray-900">
              Payments accepted on checkout
            </h3>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="text-[14px] font-medium text-gray-700">
                  Payment methods
                </span>
                <div className="flex items-center gap-2">
                  <button className="text-[13px] font-medium text-[#FF7A59] hover:text-[#FF7A59]/80">
                    Change display order
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-4 bg-[#FAFAFA]">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[14px] font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                  Get more payment methods
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
            <p className="text-[12px] text-gray-500 mt-1">
              Select payments available to customers at checkout. Based on their
              device type, location, and purchase history, your customers will
              only see the most relevant payment methods.
            </p>
          </div>

          {/* Express checkouts */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[15px] font-semibold text-gray-900">
              Express checkouts
            </h3>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-[14px] text-gray-600">
                Credit card/debit card must be enabled as a payment method in
                order to use Express Checkout.
              </p>
            </div>
            <p className="text-[12px] text-gray-500 mt-1">
              Let your customers use their favorite express payment methods and
              digital wallets for faster, more secure checkouts across different
              parts of your store{" "}
              <a href="#" className="text-[#FF7A59] hover:underline">
                Learn more
              </a>
            </p>
          </div>
        </div>
      )}

      {activeTab === "settings" && (
        <div className="flex flex-col gap-4 mt-2">
          <p className="text-[14px] text-gray-600">
            Settings configuration goes here.
          </p>
        </div>
      )}
    </AppMegaModal>
  );
}
