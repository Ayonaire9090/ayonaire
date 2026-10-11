"use client";

import React, { useEffect, useState } from "react";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppSelect } from "@/components/ui/app-select";
import { ArrowUpRight, KeyRound, MoreVertical } from "lucide-react";
import { toast } from "sonner";
import { PaymentGateway } from "@/lib/api/endpoints/payments";

export interface GatewayCredentials {
  publicKey: string;
  secretKey: string;
  mode: "live" | "test";
}

interface StripeConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (credentials: GatewayCredentials) => void;
  isSaving?: boolean;
  gateway?: PaymentGateway;
}

export function StripeConfigurationModal({
  isOpen,
  onClose,
  onSave,
  isSaving = false,
  gateway,
}: StripeConfigurationModalProps) {
  const [activeTab, setActiveTab] = useState<"payment-methods" | "settings">(
    "payment-methods",
  );
  const [mode, setMode] = useState<"live" | "test">(gateway?.mode ?? "test");
  const [publicKey, setPublicKey] = useState(gateway?.publicKey ?? "");
  const [secretKey, setSecretKey] = useState("");

  // Re-sync form state each time the modal opens with fresh gateway data.
  useEffect(() => {
    if (isOpen) {
      setMode(gateway?.mode ?? "test");
      setPublicKey(gateway?.publicKey ?? "");
      setSecretKey("");
    }
  }, [isOpen, gateway]);

  const handleSave = () => {
    if (!secretKey.trim()) {
      setActiveTab("settings");
      toast.error("Enter your Stripe secret key in the Settings tab to save.");
      return;
    }
    onSave({ publicKey: publicKey.trim(), secretKey: secretKey.trim(), mode });
  };

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
        onClick={handleSave}
        disabled={isSaving}
        className="bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white lg:px-8 py-6! rounded-xl shadow-none! cursor-pointer disabled:opacity-60"
      >
        {isSaving ? "Saving..." : "Save Change"}
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
        <div className="flex flex-col gap-6 mt-2 pb-2">
          <div className="flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-[#FF7A59]" />
            <h3 className="text-[15px] font-semibold text-gray-900">
              API Credentials
            </h3>
          </div>

          <div className="flex flex-col gap-2 max-w-[320px]">
            <label className="text-[14px] font-semibold text-gray-900">
              Environment
            </label>
            <AppSelect
              value={mode}
              onChange={(val) => setMode(val as "live" | "test")}
              options={[
                {
                  label: "Test Mode",
                  value: "test",
                  description: "For testing without real money.",
                },
                {
                  label: "Live Mode",
                  value: "live",
                  description: "Process real payments.",
                },
              ]}
              className="bg-white/80 border-gray-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-gray-900">
              Publishable Key
            </label>
            <Input
              value={publicKey}
              onChange={(e) => setPublicKey(e.target.value)}
              placeholder={mode === "live" ? "pk_live_..." : "pk_test_..."}
              className="bg-white/80 border-gray-200"
            />
            <span className="text-[12px] text-gray-500">
              Found in your Stripe dashboard under Developers → API keys.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-gray-900">
              Secret Key
            </label>
            <Input
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              placeholder={mode === "live" ? "sk_live_..." : "sk_test_..."}
              className="bg-white/80 border-gray-200"
            />
            <span className="text-[12px] text-gray-500">
              {gateway?.isConnected && gateway.secretKeyLast4
                ? `A key ending in ${gateway.secretKeyLast4} is currently saved. Enter a key to replace it.`
                : "Your secret key is stored securely and never shown again."}
            </span>
          </div>
        </div>
      )}
    </AppMegaModal>
  );
}
