import { SettingCard } from "./_components/setting-card";

export default function AdminSystemSettingsPage() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-4 lg:p-6">
      {/* General Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">
          General Settings
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Dashboard Page"
            description="This page will be used as student dashboard"
            type="select"
            category="general"
            settingKey="dashboardPage"
            defaultValue="default"
            options={[{ label: "Default Dashboard", value: "default" }]}
          />
          <SettingCard
            title="Terms & Conditions Page"
            description="Select the page for terms and conditions"
            type="select"
            category="general"
            settingKey="termsPage"
            defaultValue="terms"
            options={[{ label: "Terms & Conditions", value: "terms" }]}
          />
          <SettingCard
            title="Privacy Policy Page"
            description="Select the page for privacy policy"
            type="select"
            category="general"
            settingKey="privacyPolicyPage"
            defaultValue="privacy"
            options={[{ label: "Privacy Policy", value: "privacy" }]}
          />
        </div>
      </div>

      {/* Others */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Others</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Enable Marketplace"
            description="Allow multiple instructors to sell their courses."
            type="toggle"
            category="general"
            settingKey="enableMarketplace"
            defaultChecked={true}
          />
          <SettingCard
            title="Pagination"
            description="Set the number of rows to be displayed per page"
            type="select"
            category="general"
            settingKey="pagination"
            defaultValue="10"
            options={[{ label: "10 Rows", value: "10" }]}
          />
        </div>
      </div>

      {/* Instructor */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Instructor</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Become an Instructor Button"
            description="Enable the option to display this button on the student dashboard."
            type="toggle"
            category="general"
            settingKey="becomeInstructorButton"
            defaultChecked={true}
          />
          <SettingCard
            title="Allow Instructors to Publish Courses"
            description="Enable instructors to publish the course directly. If disabled, admins will be able to review course content before publishing."
            type="toggle"
            category="general"
            settingKey="allowInstructorsPublish"
            defaultChecked={true}
          />
          <SettingCard
            title="Allow Instructors to Trash Courses"
            description="Enable this setting to allow instructors to delete courses."
            type="toggle"
            category="general"
            settingKey="allowInstructorsTrash"
            defaultChecked={true}
          />
          <SettingCard
            title="Allow Instructors to Change Course Author"
            description="If enabled, instructors can change the course author for their courses."
            type="toggle"
            category="general"
            settingKey="allowInstructorsChangeAuthor"
            defaultChecked={true}
          />
          <SettingCard
            title="Allow Instructors to Reset Student Progress"
            description="Enable to allow instructors to reset a student's course progress."
            type="toggle"
            category="general"
            settingKey="allowInstructorsResetProgress"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  );
}
