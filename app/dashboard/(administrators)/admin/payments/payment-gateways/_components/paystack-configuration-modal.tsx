"use client";

import React, { useState } from "react";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { AppToggle } from "@/components/ui/app-toggle";
import { AppSelect } from "@/components/ui/app-select";
import { Input } from "@/components/ui/input";
import { BadgeDollarSign, Code, Info } from "lucide-react";

interface PaystackConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function PaystackConfigurationModal({
  isOpen,
  onClose,
  onSave,
}: PaystackConfigurationModalProps) {
  const [isTestMode, setIsTestMode] = useState(true);

  const headerContent = (
    <Button className="bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white hidden sm:flex items-center h-9 px-4 text-sm font-medium">
      Test Transaction
    </Button>
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
      title="Configure Paystack"
      subtitle="Configure how your application interacts with the Paystack API. Keep your secret keys safe."
      headerContent={headerContent}
      footerContent={footerContent}
    >
      <div className="flex flex-col gap-8 mt-4 pb-4">
        {/* Enable / Disable */}
        <div className="flex items-center gap-4">
          <label className="w-[200px] text-[14px] font-semibold text-gray-900 flex items-center gap-2">
            Enable/Disable
            <Info className="w-4 h-4 text-gray-400" />
          </label>
          <AppToggle
            checked={true}
            label="Enable Paystack"
            className="data-[state=checked]:bg-[#FF7A59]"
          />
        </div>

        {/* Title and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Title
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <Input
              defaultValue="Paystack"
              className="bg-white/80 border-gray-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Description
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <Input
              defaultValue="Pay securely using Credit/Debit Card, Bank Transfer..."
              className="bg-white/80 border-gray-200"
            />
          </div>
        </div>

        {/* Test Mode */}
        <div className="flex items-center gap-4">
          <label className="w-[200px] text-[14px] font-semibold text-gray-900 flex items-center gap-2">
            Test Mode
            <Info className="w-4 h-4 text-gray-400" />
          </label>
          <AppToggle
            checked={isTestMode}
            onCheckedChange={setIsTestMode}
            label="Enable Test Mode"
            className="data-[state=checked]:bg-[#FF7A59]"
          />
        </div>

        {/* Test Mode & Currency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Test Mode Selector */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b-2">
              <Code className="w-5 h-5 text-[#FF7A59]" />
              <h3 className="text-[15px] font-semibold text-gray-900">
                Test Mode
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className={`p-4 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                  isTestMode
                    ? "border-[#FF7A59] bg-[#FFF5F2]"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
                onClick={() => setIsTestMode(true)}
              >
                <div className="flex flex-col">
                  <span
                    className={`text-[14px] font-bold ${isTestMode ? "text-[#FF7A59]" : "text-gray-900"}`}
                  >
                    Test Mode
                  </span>
                  <span className="text-[12px] text-white/800">
                    For testing integration without real money.
                  </span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                    isTestMode
                      ? "border-[#FF7A59] bg-[#FF7A59]"
                      : "border-gray-300"
                  }`}
                >
                  {isTestMode && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </div>
              <div
                className={`p-4 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                  !isTestMode
                    ? "border-[#FF7A59] bg-[#FFF5F2]"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
                onClick={() => setIsTestMode(false)}
              >
                <div className="flex flex-col">
                  <span
                    className={`text-[14px] font-bold ${!isTestMode ? "text-[#FF7A59]" : "text-gray-900"}`}
                  >
                    Live Mode
                  </span>
                  <span className="text-[12px] text-white/800">
                    Connect to real payment gateways.
                  </span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                    !isTestMode
                      ? "border-[#FF7A59] bg-[#FF7A59]"
                      : "border-gray-300"
                  }`}
                >
                  {!isTestMode && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Currency Selector */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b-2">
              <BadgeDollarSign className="w-5 h-5 text-[#FF7A59]" />
              <h3 className="text-[15px] font-semibold text-gray-900">
                Currency
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-900">
                Default Currency
              </label>
              <AppSelect
                value="ngn"
                options={[
                  { label: "NGN - Nigerian Naira", value: "ngn" },
                  { label: "USD - US Dollar", value: "usd" },
                ]}
              />
              <p className="text-[12px] text-white/800 mt-2">
                All transactions will be processed in this currency by default.
              </p>
            </div>
          </div>
        </div>

        {/* Keys */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label className="w-[200px] text-[14px] font-semibold text-gray-900">
              Live Secret Key
            </label>
            <div className="flex-1 flex flex-col gap-1">
              <Input
                placeholder="Secret Key"
                className="bg-white/80 border-gray-200"
              />
              <span className="text-[12px] text-white/800">
                Enter your Live Secret Key here.
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label className="w-[200px] text-[14px] font-semibold text-gray-900">
              Live Public Key
            </label>
            <div className="flex-1 flex flex-col gap-1">
              <Input
                placeholder="Publishable Key"
                className="bg-white/80 border-gray-200"
              />
              <span className="text-[12px] text-white/800">
                Enter your Live Public Key here.
              </span>
            </div>
          </div>
        </div>

        {/* Toggles */}
        <div className="flex flex-col gap-5 border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Autocomplete Order After Payment
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={true}
              label="Autocomplete Order"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900">
              Remove Cancel Order & Restore Cart Button
            </label>
            <AppToggle
              checked={false}
              label="Remove the cancel order & restore cart button on the pay for order page"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900">
              Split Payment
            </label>
            <AppToggle
              checked={false}
              label="Enable Split Payment"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>
        </div>

        {/* Additional Gateways */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-gray-100 pt-6">
          <label className="w-[250px] text-[14px] font-semibold text-gray-900 flex items-center gap-2">
            Additional Paystack Gateways
            <Info className="w-4 h-4 text-gray-400" />
          </label>
          <div className="flex-1">
            <AppSelect
              value="none"
              options={[{ label: "Select One", value: "none" }]}
            />
          </div>
        </div>

        {/* Saved Cards */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
          <label className="text-[14px] font-semibold text-gray-900">
            Saved Cards
          </label>
          <AppToggle
            checked={false}
            label="Enable Payment via Saved Cards"
            className="data-[state=checked]:bg-[#FF7A59]"
          />
        </div>

        {/* Custom Metadata */}
        <div className="flex flex-col gap-5 border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Custom Metadata
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={true}
              label="Enable Custom Metadata"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Order ID
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={true}
              label="Send Order ID"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Customer Name
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={true}
              label="Send Customer Name"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Customer Email
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={true}
              label="Send Customer Email"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Customer Phone
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={true}
              label="Send Customer Phone"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Order Billing Address
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={true}
              label="Send Order Billing Address"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Order Shipping Address
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={false}
              label="Send Order Shipping Address"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-[14px] font-semibold text-gray-900 flex items-center gap-2">
              Product(s) Purchased
              <Info className="w-4 h-4 text-gray-400" />
            </label>
            <AppToggle
              checked={true}
              label="Send Product(s) Purchased"
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>
        </div>
      </div>
    </AppMegaModal>
  );
}
