"use client";

import React, { useState } from "react";
import { OrderData } from "../../_components/orders-types";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export const OrderShippingSection = ({ order }: { order: OrderData }) => {
  const [isEditing, setIsEditing] = useState(false);

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
        {order.shipping?.firstName || order.shipping?.lastName ? (
          <div className="mt-1 text-[14px] text-gray-500 flex flex-col gap-1 w-[80%] leading-relaxed">
            <p>
              {order.shipping.firstName} {order.shipping.lastName}
            </p>
            {order.shipping.phone && <p>Phone: {order.shipping.phone}</p>}
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
            defaultValue={order.shipping?.firstName}
          />
          {/* Note: In standard forms it's Last Name */}
          <AppInput
            label="Last Name"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.shipping?.lastName}
          />
          <AppInput
            label="Company"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.shipping?.company}
          />
          <AppInput
            label="Address line 1"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.shipping?.address1}
          />
          <AppInput
            label="Address line 2"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.shipping?.address2}
          />
          <AppInput
            label="City"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.shipping?.city}
          />
          <AppInput
            label="Postcode/ZIP"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.shipping?.postcode}
          />
          <AppSelect
            label="Country/Region"
            value={order.shipping?.country || "Nigeria"}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[{ label: "Nigeria", value: "Nigeria" }]}
          />
          <AppSelect
            label="State/County."
            value={order.shipping?.state || "Lagos"}
            className="border-gray-100 bg-[#FBFBFB]!"
            options={[{ label: "Lagos", value: "Lagos" }]}
          />
          <AppInput
            label="Phone"
            className="border border-gray-100 bg-[#FBFBFB]!"
            defaultValue={order.shipping?.phone}
          />

          <div className="flex flex-col gap-1.5 w-full mt-4 lg:mt-4">
            {/* The gap above pushes text area down slightly based on layout */}
            <label className="text-[15px] font-semibold text-gray-900">
              Customer provided note
            </label>
            <Textarea
              className="w-full min-h-[120px] px-4 py-3 bg-[#FBFBFB]! border border-gray-100 hover:border-gray-200 rounded-xl text-[15px] text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 shadow-none resize-none"
              defaultValue={order.customerNote}
            />
          </div>
        </div>
      )}
    </div>
  );
};
