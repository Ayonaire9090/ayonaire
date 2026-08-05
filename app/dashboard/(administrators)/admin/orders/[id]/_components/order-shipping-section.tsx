"use client";

import React, { useState } from "react";
import { OrderData, ShippingAddress } from "../../_components/orders-types";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

interface OrderShippingSectionProps {
  order: OrderData;
  shipping: ShippingAddress;
  onShippingChange: (next: ShippingAddress) => void;
}

export const OrderShippingSection = ({
  order,
  shipping,
  onShippingChange,
}: OrderShippingSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const setField = (field: keyof ShippingAddress) => (value: string) =>
    onShippingChange({ ...shipping, [field]: value });

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Card */}
      <div className="bg-[#FFEEE8] rounded-xl p-5 flex flex-col items-start min-h-[96px] relative">
        <div className="flex w-full items-start justify-between">
          <h3 className="text-[16px] font-semibold text-gray-900">Shipping</h3>
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
        {shipping.firstName || shipping.lastName ? (
          <div className="mt-1 text-[14px] text-gray-500 flex flex-col gap-1 w-[80%] leading-relaxed">
            <p>
              {shipping.firstName} {shipping.lastName}
            </p>
            {shipping.phone && <p>Phone: {shipping.phone}</p>}
          </div>
        ) : (
          <p className="mt-2 text-[14px] text-gray-400 font-medium h-[44px]">
            Load Shipping Address
          </p>
        )}
      </div>

      {isEditing && (
        <div className="flex flex-col gap-5">
          <AppInput
            label="First Name"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={shipping.firstName}
            onChange={(e) => setField("firstName")(e.target.value)}
          />
          <AppInput
            label="Last Name"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={shipping.lastName}
            onChange={(e) => setField("lastName")(e.target.value)}
          />
          <AppInput
            label="Company"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={shipping.company}
            onChange={(e) => setField("company")(e.target.value)}
          />
          <AppInput
            label="Address line 1"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={shipping.address1}
            onChange={(e) => setField("address1")(e.target.value)}
          />
          <AppInput
            label="Address line 2"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={shipping.address2}
            onChange={(e) => setField("address2")(e.target.value)}
          />
          <AppInput
            label="City"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={shipping.city}
            onChange={(e) => setField("city")(e.target.value)}
          />
          <AppInput
            label="Postcode/ZIP"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={shipping.postcode}
            onChange={(e) => setField("postcode")(e.target.value)}
          />
          <AppSelect
            label="Country/Region"
            value={shipping.country || "Nigeria"}
            onChange={setField("country")}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[{ label: "Nigeria", value: "Nigeria" }]}
          />
          <AppSelect
            label="State/County."
            value={shipping.state || "Lagos"}
            onChange={setField("state")}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[{ label: "Lagos", value: "Lagos" }]}
          />
          <AppInput
            label="Phone"
            className="border border-gray-100 bg-[#FBFBFB]!"
            value={shipping.phone}
            onChange={(e) => setField("phone")(e.target.value)}
          />

          <div className="flex flex-col gap-1.5 w-full mt-4 lg:mt-4">
            <label className="text-[15px] font-semibold text-gray-900">
              Customer provided note
            </label>
            <Textarea
              className="w-full min-h-[120px] px-4 py-3 bg-[#FBFBFB]! border border-gray-100 hover:border-gray-200 rounded-xl text-[15px] text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 shadow-none resize-none"
              defaultValue={order.customerNote}
              disabled
            />
          </div>
        </div>
      )}
    </div>
  );
};
