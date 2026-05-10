"use client";

import React, { useState } from "react";
import { AppToggle } from "@/components/ui/app-toggle";
import { AppSelect } from "@/components/ui/app-select";
import {
  CreditCard,
  Wallet,
  Plus,
  ShieldCheck,
  BarChart2,
  Info,
  Settings,
  Unlink,
  Link2,
} from "lucide-react";
import { StripeConfigurationModal } from "./stripe-configuration-modal";
import { GatewaySuccessModal } from "./gateway-success-modal";
import { PaystackConfigurationModal } from "./paystack-configuration-modal";
import { Button } from "@/components/ui/button";

export function PaymentGatewayList() {
  const [isStripeConnected, setIsStripeConnected] = useState(false);
  const [isStripeConfigOpen, setIsStripeConfigOpen] = useState(false);
  const [isPaystackConnected, setIsPaystackConnected] = useState(false);
  const [isPaystackConfigOpen, setIsPaystackConfigOpen] = useState(false);
  const [successModalState, setSuccessModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const handleStripeSave = () => {
    setIsStripeConfigOpen(false);
    setIsStripeConnected(true);
    setSuccessModalState({
      isOpen: true,
      title: "Stripe Connected Successfully",
      message:
        "Your Stripe account is now linked and ready to process payments. You can manage your integration settings anytime from the dashboard",
    });
  };

  const handlePaystackSave = () => {
    setIsPaystackConfigOpen(false);
    setIsPaystackConnected(true);
    setSuccessModalState({
      isOpen: true,
      title: "Paystack Connected Successfully",
      message:
        "Your Paystack account is now linked and ready to process payments. You can manage your integration settings anytime from the dashboard",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Stripe Card */}
        <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between border border-gray-100">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-[#FFF5F2] rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#FF7A59]" />
              </div>
              {isStripeConnected ? (
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-600 text-[12px] font-semibold">
                    Connected
                  </span>
                  <span className="text-green-600 text-[10px] font-bold tracking-wider uppercase pr-1">
                    LIVE MODE
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-500 text-[12px] font-semibold">
                    Not Connected
                  </span>
                  <span className="text-red-500 text-[10px] font-bold tracking-wider uppercase pr-1">
                    TEST MODE
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[18px] font-bold text-gray-900">Stripe</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Accept credit cards, Google Pay, and Apple Pay globally.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t-3 border-gray-100 mt-auto">
            {isStripeConnected ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="bg-[#FFF5F2] text-[#FF7A59] hover:bg-[#ffece6] hover:text-[#FF7A59] px-4 py-2 h-9 rounded-lg font-medium"
                  onClick={() => setIsStripeConfigOpen(true)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
                <Button
                  variant="ghost"
                  className="text-red-500 hover:bg-red-50 hover:text-red-600 px-4 py-2 h-9 rounded-lg font-medium"
                  onClick={() => setIsStripeConnected(false)}
                >
                  <Unlink className="w-4 h-4 mr-2" />
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button
                className="bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white px-5 py-2 h-9 rounded-lg font-medium cursor-pointer"
                onClick={() => setIsStripeConfigOpen(true)}
              >
                <Link2 className="w-4 h-4 mr-2" />
                Connect Gateway
              </Button>
            )}
            <AppToggle
              containerClassName="justify-end w-auto ml-auto"
              checked={isStripeConnected}
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>
        </div>

        {/* Paystack Card */}
        <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between border border-gray-100">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-[#FFF5F2] rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-[#FF7A59]" />
              </div>
              {isPaystackConnected ? (
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-600 text-[12px] font-semibold">
                    Connected
                  </span>
                  <span className="text-green-600 text-[10px] font-bold tracking-wider uppercase pr-1">
                    LIVE MODE
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-500 text-[12px] font-semibold">
                    Not Connected
                  </span>
                  <span className="text-red-500 text-[10px] font-bold tracking-wider uppercase pr-1">
                    TEST MODE
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[18px] font-bold text-gray-900">Paystack</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Optimized for payments across Africa with various local methods.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t-3 border-gray-100 mt-auto">
            {isPaystackConnected ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="bg-[#FFF5F2] text-[#FF7A59] hover:bg-[#ffece6] hover:text-[#FF7A59] px-4 py-2 h-9 rounded-lg font-medium"
                  onClick={() => setIsPaystackConfigOpen(true)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
                <Button
                  variant="ghost"
                  className="text-red-500 hover:bg-red-50 hover:text-red-600 px-4 py-2 h-9 rounded-lg font-medium"
                  onClick={() => setIsPaystackConnected(false)}
                >
                  <Unlink className="w-4 h-4 mr-2" />
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button
                className="bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white px-5 py-2 h-9 rounded-lg font-medium cursor-pointer"
                onClick={() => setIsPaystackConfigOpen(true)}
              >
                <Link2 className="w-4 h-4 mr-2" />
                Connect Gateway
              </Button>
            )}
            <AppToggle
              containerClassName="justify-end w-auto ml-auto"
              checked={isPaystackConnected}
              className="data-[state=checked]:bg-[#FF7A59]"
            />
          </div>
        </div>

        {/* Add New Gateway Card */}
        <div className="rounded-[20px] p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer text-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-[16px] font-bold text-gray-900 mb-1">
            Add New Gateway
          </h3>
          <p className="text-[14px] text-gray-500">
            Integrate custom providers
          </p>
        </div>
      </div>

      {/* Primary Gateway Selection */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100  mt-2">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-[500px]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF7A59]" />
              <h3 className="text-[18px] font-bold text-gray-900">
                Primary Gateway Selection
              </h3>
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed pl-7">
              Choose which payment gateway is offered to students by default
              during the checkout process.
            </p>
          </div>

          <div className="w-full lg:w-[320px]">
            <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wider mb-2 block">
              DEFAULT GATEWAY
            </label>
            <AppSelect
              value="stripe"
              options={[
                {
                  label: isStripeConnected ? "Stripe (Connected)" : "Stripe",
                  value: "stripe",
                },
                {
                  label: isPaystackConnected
                    ? "Paystack (Connected)"
                    : "Paystack",
                  value: "paystack",
                },
              ]}
              className="h-11 bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        <div className="bg-[#F0F7FF] rounded-xl p-4 flex items-center gap-3 mt-6">
          <Info className="w-5 h-5 text-[#0066FF] shrink-0" />
          <p className="text-[14px] text-gray-700">
            Only <span className="font-semibold">enabled</span> and{" "}
            <span className="text-green-600 font-semibold">Connected</span>{" "}
            gateways will appear as options at checkout for your customers.
          </p>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100  flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FFF5F2] rounded-xl flex items-center justify-center shrink-0">
            <BarChart2 className="w-6 h-6 text-[#FF7A59]" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider">
              CURRENT STATUS
            </h3>
            <p className="text-[14px] text-gray-500">
              Stripe is processing live payments • 1.2% Success Rate
            </p>
          </div>
        </div>
        <button className="text-[14px] font-semibold text-[#FF7A59] hover:text-[#FF7A59]/80 transition-colors whitespace-nowrap">
          View Transaction Logs
        </button>
      </div>

      <StripeConfigurationModal
        isOpen={isStripeConfigOpen}
        onClose={() => setIsStripeConfigOpen(false)}
        onSave={handleStripeSave}
      />

      <PaystackConfigurationModal
        isOpen={isPaystackConfigOpen}
        onClose={() => setIsPaystackConfigOpen(false)}
        onSave={handlePaystackSave}
      />

      <GatewaySuccessModal
        isOpen={successModalState.isOpen}
        onClose={() =>
          setSuccessModalState((prev) => ({ ...prev, isOpen: false }))
        }
        title={successModalState.title}
        message={successModalState.message}
      />
    </div>
  );
}
