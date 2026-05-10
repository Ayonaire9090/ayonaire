"use client";

import React, { useState } from "react";
import { AppToggle } from "@/components/ui/app-toggle";
import { AppSelect } from "@/components/ui/app-select";

interface SettingCardBaseProps {
  title: React.ReactNode | string;
  description: string;
}

interface SettingCardToggleProps extends SettingCardBaseProps {
  type: "toggle";
  defaultChecked?: boolean;
}

interface SettingCardSelectProps extends SettingCardBaseProps {
  type: "select";
  defaultValue?: string;
  options: { label: string; value: string }[];
}

interface SettingCardActionProps extends SettingCardBaseProps {
  type: "action";
  actionIcon?: React.ReactNode;
  onAction?: () => void;
  action?: React.ReactNode;
}

interface SettingCardNoneProps extends SettingCardBaseProps {
  type?: never;
}

export type SettingCardProps =
  | SettingCardToggleProps
  | SettingCardSelectProps
  | SettingCardActionProps
  | SettingCardNoneProps;

export const SettingCard = (props: SettingCardProps) => {
  const [isChecked, setIsChecked] = useState(
    props?.type === "toggle" ? props?.defaultChecked : false,
  );

  const [selectedValue, setSelectedValue] = useState(
    props?.type === "select" ? props?.defaultValue : "",
  );

  return (
    <div className="bg-[#FAFAFA] border border-gray-100 rounded-[16px] p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 transition-colors hover:border-gray-200">
      <div className="flex flex-col gap-1 flex-1 pr-4">
        {typeof props.title === "string" ? (
          <h3 className="text-[15px] font-semibold text-gray-900">
            {props?.title}
          </h3>
        ) : (
          props?.title
        )}
        <p className="text-[13px] text-gray-500 leading-relaxed">
          {props.description}
        </p>
      </div>
      {props.type && (
        <div className="flex items-center shrink-0 w-full md:w-auto mt-1 md:mt-0">
          {props.type === "toggle" ? (
            <div className="md:ml-auto">
              <AppToggle
                checked={isChecked}
                onCheckedChange={setIsChecked}
                className="data-[state=checked]:bg-black"
              />
            </div>
          ) : props.type === "select" ? (
            <div className="w-full md:w-[280px]">
              <AppSelect
                value={selectedValue as string}
                onChange={setSelectedValue}
                options={props.options}
                className="bg-transparent border-gray-200 text-[14px]"
              />
            </div>
          ) : (
            <div className="md:ml-auto">
              {props.action ? (
                props.action
              ) : (
                <button
                  onClick={props?.onAction}
                  className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {props?.actionIcon}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
