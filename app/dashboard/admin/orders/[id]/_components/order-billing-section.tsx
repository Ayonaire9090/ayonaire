"use client";

import React, { useState } from "react";
import { OrderData } from "../../_components/orders-types";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import Image from "next/image";

export const OrderBillingSection = ({ order }: { order: OrderData }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Card */}
      <div className="bg-[#FFEEE8] rounded-xl p-5 flex flex-col items-start min-h-[96px] relative">
        <div className="flex w-full items-start justify-between">
          <h3 className="text-[16px] font-semibold text-gray-900">Billing</h3>
          <button
            className="text-gray-400 hover:text-gray-900 transition-colors"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Image
              src="/assets/icons/pencil-edit-write.svg"
              alt="Edit"
              width={20}
              height={20}
            />
          </button>
        </div>
        {order.billing?.firstName || order.billing?.lastName ? (
          <div className="mt-1 text-[14px] text-gray-500 flex flex-col gap-1 w-[80%] leading-relaxed">
            <p>
              {order.billing.firstName} {order.billing.lastName}
            </p>
            {order.billing.email && <p>Email Address: {order.billing.email}</p>}
            {order.billing.phone && <p>Phone: {order.billing.phone}</p>}
          </div>
        ) : (
          <p className="mt-2 text-[14px] text-gray-400 font-medium h-[44px]">
            Load Billing Address
          </p>
        )}
      </div>

      {isEditing && (
        <div className="flex flex-col gap-5">
          <AppInput
            label="First Name"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.firstName}
          />
          <AppInput
            label="Last Name"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.lastName}
          />
          <AppInput
            label="Company"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.company}
          />
          <AppInput
            label="Address line 1"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.address1}
          />
          <AppInput
            label="Address line 2"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.address2}
          />
          <AppInput
            label="City"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.city}
          />
          <AppInput
            label="Postcode/ZIP"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.postcode}
          />
          <AppSelect
            label="Country/Region"
            value={order.billing?.country || "Nigeria"}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[{ label: "Nigeria", value: "Nigeria" }]}
          />
          <AppSelect
            label="State/County."
            value={order.billing?.state || "Lagos"}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[{ label: "Lagos", value: "Lagos" }]}
          />
          <AppInput
            label="Email address"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.email}
          />
          <AppInput
            label="Phone"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.billing?.phone}
          />

          <AppSelect
            label="Payment method"
            value={order.paymentMethod}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[
              { label: "Paystack", value: "Paystack" },
              { label: "Flutterwave", value: "Flutterwave" },
              { label: "Bank Transfer", value: "Bank Transfer" },
            ]}
          />
          <AppInput
            label="Transaction ID"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.transactionId}
          />
        </div>
      )}
    </div>
  );
};
