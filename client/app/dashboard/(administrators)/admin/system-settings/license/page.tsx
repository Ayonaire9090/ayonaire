import { AppInput } from "@/components/ui/app-input";
import { SettingCard } from "../_components/setting-card";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash } from "lucide-react";

export default async function AdminLicenseSettings() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-4 lg:p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-[18px] font-bold text-gray-900">License</h2>
        <div className="bg-primary text-white px-4 py-1.5 text-[10px] font-bold rounded-full">
          License Activated
        </div>
      </div>

      {/* License Activation */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">Licensed to</h2>
        <div className="flex flex-col gap-3">
          <SettingCard title="seo.ayonaire.com" description="" />
        </div>
      </div>
      {/* License Type */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">License Type</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title={
              <div className="w-full">
                <AppInput label="" value="Type here..." />
              </div>
            }
            description=""
          />
        </div>
      </div>
      {/* Expiration and license key */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">Expiration date</h2>
        <div className="flex flex-col gap-3">
          <SettingCard title="Never" description="" />
        </div>
        <SettingCard
          title="License Key"
          description="Added"
          type="action"
            category="license"
            settingKey="licenseKey"
          action={
            <div className="flex items-center">
              <Button
                variant="outline"
                className="p-2 bg-transparent border-none  text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer shadow-none!"
              >
                <Trash />
              </Button>
              <Button
                variant="outline"
                className="p-2 bg-transparent border-none  text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer shadow-none!"
              >
                <SquarePen />
              </Button>
            </div>
          }
        />
      </div>
    </div>
  );
}
