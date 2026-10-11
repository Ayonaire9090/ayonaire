"use client";

import React, { useState } from "react";
import Link from "next/link";
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
import { toast } from "sonner";
import {
  StripeConfigurationModal,
  GatewayCredentials,
} from "./stripe-configuration-modal";
import { GatewaySuccessModal } from "./gateway-success-modal";
import { PaystackConfigurationModal } from "./paystack-configuration-modal";
import { Button } from "@/components/ui/button";
import {
  useGetGateways,
  useConnectGatewayMutation,
  useDisconnectGatewayMutation,
  useSetPrimaryGatewayMutation,
} from "@/hooks/api/use-payments";
import { PaymentGateway } from "@/lib/api/endpoints/payments";

type GatewayName = "stripe" | "paystack";

const GATEWAY_LABELS: Record<GatewayName, string> = {
  stripe: "Stripe",
  paystack: "Paystack",
};

export function PaymentGatewayList() {
  const { data, isLoading, isError } = useGetGateways();
  const connectGateway = useConnectGatewayMutation();
  const disconnectGateway = useDisconnectGatewayMutation();
  const setPrimaryGateway = useSetPrimaryGatewayMutation();

  const [openConfig, setOpenConfig] = useState<GatewayName | null>(null);
  const [successModalState, setSuccessModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  // The backend sometimes nests payloads under `data` and sometimes spreads
  // them at the root — accept both.
  const gateways: PaymentGateway[] =
    data?.data ?? (Array.isArray(data?.gateways) ? data.gateways : []);
  const stripe = gateways.find((g) => g.name === "stripe");
  const paystack = gateways.find((g) => g.name === "paystack");
  const primary = gateways.find((g) => g.isPrimary && g.isConnected);
  const connectedGateways = gateways.filter((g) => g.isConnected);

  const handleSaveCredentials = (
    name: GatewayName,
    credentials: GatewayCredentials,
  ) => {
    connectGateway.mutate(
      { name, ...credentials },
      {
        onSuccess: () => {
          setOpenConfig(null);
          setSuccessModalState({
            isOpen: true,
            title: `${GATEWAY_LABELS[name]} Connected Successfully`,
            message: `Your ${GATEWAY_LABELS[name]} account is now linked and ready to process payments. You can manage your integration settings anytime from the dashboard`,
          });
        },
        onError: (err) =>
          toast.error(
            err instanceof Error
              ? err.message
              : `Failed to connect ${GATEWAY_LABELS[name]}`,
          ),
      },
    );
  };

  const handleDisconnect = (name: GatewayName) => {
    if (
      !window.confirm(
        `Disconnect ${GATEWAY_LABELS[name]}? Students won't be able to pay through it until you reconnect.`,
      )
    )
      return;
    disconnectGateway.mutate(name, {
      onSuccess: () => toast.success(`${GATEWAY_LABELS[name]} disconnected`),
      onError: (err) =>
        toast.error(
          err instanceof Error
            ? err.message
            : `Failed to disconnect ${GATEWAY_LABELS[name]}`,
        ),
    });
  };

  const handleToggle = (name: GatewayName, isConnected: boolean) => {
    if (isConnected) {
      handleDisconnect(name);
    } else {
      setOpenConfig(name);
    }
  };

  const handleSetPrimary = (value: string) => {
    const name = value as GatewayName;
    const gateway = gateways.find((g) => g.name === name);
    if (!gateway?.isConnected) {
      toast.error(`Connect ${GATEWAY_LABELS[name]} before making it the default gateway.`);
      return;
    }
    if (gateway.isPrimary) return;
    setPrimaryGateway.mutate(name, {
      onSuccess: () =>
        toast.success(`${GATEWAY_LABELS[name]} is now the default gateway`),
      onError: (err) =>
        toast.error(
          err instanceof Error ? err.message : "Failed to set default gateway",
        ),
    });
  };

  const renderGatewayCard = (
    name: GatewayName,
    gateway: PaymentGateway | undefined,
    icon: React.ReactNode,
    description: string,
  ) => {
    const isConnected = !!gateway?.isConnected;
    const isLive = gateway?.mode === "live";

    return (
      <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between border border-gray-100">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 bg-[#FFF5F2] rounded-xl flex items-center justify-center">
              {icon}
            </div>
            {isConnected ? (
              <div className="flex flex-col items-end gap-1">
                <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-600 text-[12px] font-semibold">
                  Connected
                </span>
                <span
                  className={`text-[10px] font-bold tracking-wider uppercase pr-1 ${isLive ? "text-green-600" : "text-amber-500"}`}
                >
                  {isLive ? "LIVE MODE" : "TEST MODE"}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-end gap-1">
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-500 text-[12px] font-semibold">
                  Not Connected
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] font-bold text-gray-900">
              {GATEWAY_LABELS[name]}
            </h3>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t-3 border-gray-100 mt-auto">
          {isConnected ? (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="bg-[#FFF5F2] text-[#FF7A59] hover:bg-[#ffece6] hover:text-[#FF7A59] px-4 py-2 h-9 rounded-lg font-medium"
                onClick={() => setOpenConfig(name)}
              >
                <Settings className="w-4 h-4 mr-2" />
                Configure
              </Button>
              <Button
                variant="ghost"
                className="text-red-500 hover:bg-red-50 hover:text-red-600 px-4 py-2 h-9 rounded-lg font-medium"
                onClick={() => handleDisconnect(name)}
                disabled={disconnectGateway.isPending}
              >
                <Unlink className="w-4 h-4 mr-2" />
                Disconnect
              </Button>
            </div>
          ) : (
            <Button
              className="bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white px-5 py-2 h-9 rounded-lg font-medium cursor-pointer"
              onClick={() => setOpenConfig(name)}
            >
              <Link2 className="w-4 h-4 mr-2" />
              Connect Gateway
            </Button>
          )}
          <AppToggle
            containerClassName="justify-end w-auto ml-auto"
            checked={isConnected}
            onCheckedChange={() => handleToggle(name, isConnected)}
            className="data-[state=checked]:bg-[#FF7A59]"
          />
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-2xl p-10 border border-gray-100 flex items-center justify-center text-[15px] text-red-500">
        Failed to load payment gateways. Please try again.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {renderGatewayCard(
          "stripe",
          stripe,
          <CreditCard className="w-6 h-6 text-[#FF7A59]" />,
          "Accept credit cards, Google Pay, and Apple Pay globally.",
        )}
        {renderGatewayCard(
          "paystack",
          paystack,
          <Wallet className="w-6 h-6 text-[#FF7A59]" />,
          "Optimized for payments across Africa with various local methods.",
        )}

        {/* Add New Gateway Card */}
        <div
          className="rounded-[20px] p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer text-center"
          onClick={() =>
            toast.info(
              "Custom gateways aren't supported yet — Stripe and Paystack are currently available.",
            )
          }
        >
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
              value={primary?.name ?? ""}
              onChange={handleSetPrimary}
              placeholder="Select a connected gateway"
              options={[
                {
                  label: stripe?.isConnected ? "Stripe (Connected)" : "Stripe",
                  value: "stripe",
                },
                {
                  label: paystack?.isConnected
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
              {connectedGateways.length === 0
                ? "No payment gateway connected yet"
                : primary
                  ? `${GATEWAY_LABELS[primary.name]} is processing ${primary.mode === "live" ? "live" : "test"} payments`
                  : `${connectedGateways
                      .map((g) => GATEWAY_LABELS[g.name])
                      .join(" and ")} connected — no default gateway selected`}
            </p>
          </div>
        </div>
        <Link
          href="/dashboard/admin/payments"
          className="text-[14px] font-semibold text-[#FF7A59] hover:text-[#FF7A59]/80 transition-colors whitespace-nowrap"
        >
          View Transaction Logs
        </Link>
      </div>

      <StripeConfigurationModal
        isOpen={openConfig === "stripe"}
        onClose={() => setOpenConfig(null)}
        onSave={(credentials) => handleSaveCredentials("stripe", credentials)}
        isSaving={connectGateway.isPending}
        gateway={stripe}
      />

      <PaystackConfigurationModal
        isOpen={openConfig === "paystack"}
        onClose={() => setOpenConfig(null)}
        onSave={(credentials) => handleSaveCredentials("paystack", credentials)}
        isSaving={connectGateway.isPending}
        gateway={paystack}
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
