"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { AppToggle } from "@/components/ui/app-toggle";
import { AppSelect } from "@/components/ui/app-select";
import { SettingCategory } from "@/lib/api/endpoints/settings";
import { useGetSettingsByCategory, useUpdateSettingsMutation } from "@/hooks/api/use-settings";

interface SettingCardBaseProps {
  title: React.ReactNode | string;
  description: string;
  // When provided, the card persists its own value to
  // PUT /api/v1/settings/:category as { [settingKey]: value } and reads its
  // current value from GET /api/v1/settings/:category on load.
  category?: SettingCategory;
  settingKey?: string;
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
  const { category, settingKey } = props;
  const { data } = useGetSettingsByCategory(category as SettingCategory);
  const updateSettings = useUpdateSettingsMutation();
  const savedValue = settingKey ? data?.data?.[settingKey] : undefined;

  const [isChecked, setIsChecked] = useState(
    props?.type === "toggle" ? props?.defaultChecked : false,
  );
  const [selectedValue, setSelectedValue] = useState(
    props?.type === "select" ? props?.defaultValue : "",
  );

  // Sync local UI state once the real saved value loads in, without
  // clobbering it on every background refetch after the user has changed it.
  useEffect(() => {
    if (savedValue === undefined) return;
    if (props.type === "toggle") setIsChecked(Boolean(savedValue));
    if (props.type === "select") setSelectedValue(String(savedValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedValue]);

  const persist = (value: unknown) => {
    if (!category || !settingKey) return;
    updateSettings.mutate(
      { category, data: { [settingKey]: value } },
      {
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to save setting"),
      },
    );
  };

  const handleToggle = (val: boolean) => {
    setIsChecked(val);
    persist(val);
  };

  const handleSelect = (val: string) => {
    setSelectedValue(val);
    persist(val);
  };

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
                onCheckedChange={handleToggle}
                className="data-[state=checked]:bg-black"
              />
            </div>
          ) : props.type === "select" ? (
            <div className="w-full md:w-[280px]">
              <AppSelect
                value={selectedValue as string}
                onChange={handleSelect}
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
