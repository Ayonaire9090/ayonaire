"use client";

import React, { useState } from "react";
import { OrderData, BillingAddress } from "../../_components/orders-types";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import Image from "next/image";

interface OrderBillingSectionProps {
  order: OrderData;
  billing: BillingAddress;
  onBillingChange: (next: BillingAddress) => void;
}

export const OrderBillingSection = ({
  order,
  billing,
  onBillingChange,
}: OrderBillingSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const setField = (field: keyof BillingAddress) => (value: string) =>
    onBillingChange({ ...billing, [field]: value });

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
        {billing.firstName || billing.lastName ? (
          <div className="mt-1 text-[14px] text-gray-500 flex flex-col gap-1 w-[80%] leading-relaxed">
            <p>
              {billing.firstName} {billing.lastName}
            </p>
            {billing.email && <p>Email Address: {billing.email}</p>}
            {billing.phone && <p>Phone: {billing.phone}</p>}
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
            value={billing.firstName}
            onChange={(e) => setField("firstName")(e.target.value)}
          />
          <AppInput
            label="Last Name"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={billing.lastName}
            onChange={(e) => setField("lastName")(e.target.value)}
          />
          <AppInput
            label="Company"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={billing.company}
            onChange={(e) => setField("company")(e.target.value)}
          />
          <AppInput
            label="Address line 1"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={billing.address1}
            onChange={(e) => setField("address1")(e.target.value)}
          />
          <AppInput
            label="Address line 2"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={billing.address2}
            onChange={(e) => setField("address2")(e.target.value)}
          />
          <AppInput
            label="City"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={billing.city}
            onChange={(e) => setField("city")(e.target.value)}
          />
          <AppInput
            label="Postcode/ZIP"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={billing.postcode}
            onChange={(e) => setField("postcode")(e.target.value)}
          />
          <AppSelect
            label="Country/Region"
            value={billing.country || "Nigeria"}
            onChange={setField("country")}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[{ label: "Nigeria", value: "Nigeria" }]}
          />
          <AppSelect
            label="State/County."
            value={billing.state || "Lagos"}
            onChange={setField("state")}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[{ label: "Lagos", value: "Lagos" }]}
          />
          <AppInput
            label="Email address"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={billing.email}
            onChange={(e) => setField("email")(e.target.value)}
          />
          <AppInput
            label="Phone"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={billing.phone}
            onChange={(e) => setField("phone")(e.target.value)}
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
            disabled
          />
        </div>
      )}
    </div>
  );
};
