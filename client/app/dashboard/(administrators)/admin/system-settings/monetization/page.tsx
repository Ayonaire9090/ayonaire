import { SettingCard } from "../_components/setting-card";

export default async function AdminMonetizationSettings() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-4 lg:p-6">
      {/* Engine Options Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Monetization</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Select Ecommerce Engine"
            description="To sell courses and subscriptions, you need to select an ecommerce plugin"
            type="select"
            category="monetization"
            settingKey="selectEcommerceEngine"
            defaultValue="Native"
            options={[
              {
                value: "Native",
                label: "Native",
              },
              {
                value: "WooCommerce",
                label: "WooCommerce",
              },
              {
                value: "Disable",
                label: "Disable",
              },
            ]}
          />
        </div>
      </div>

      {/* WooCommerce Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">WooCommerce</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Automatically Complete WooCommerce Orders"
            description="If enabled, in the case of Courses, WooCommerce Orders will get the 'Completed' status ."
            type="toggle"
            category="monetization"
            settingKey="automaticallyCompleteWoocommerceOrders"
            defaultChecked={true}
          />
          <SettingCard
            title="Auto Redirect to Courses"
            description="When a user's WooCommerce order is auto-completed, they will be redirected to enrolled courses"
            type="toggle"
            category="monetization"
            settingKey="autoRedirectToCourses"
            defaultChecked={true}
          />
          <SettingCard
            title="Enable Guest Mode"
            description="Allow customers to place orders without an account."
            type="toggle"
            category="monetization"
            settingKey="enableGuestMode"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Revenue Sharing Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Revenue Sharing</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Enable Revenue Sharing"
            description="Allow revenue generated from selling courses to be shared with course creators."
            type="toggle"
            category="monetization"
            settingKey="enableRevenueSharing"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  );
}
