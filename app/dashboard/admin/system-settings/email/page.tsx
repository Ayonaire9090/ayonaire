import { SquarePen } from "lucide-react";
import { SettingCard } from "../_components/setting-card";

export default async function AdminEmailSettings() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-4 lg:p-6">
      <h2 className="text-[18px] font-bold text-gray-900">Email</h2>

      {/* Default Configuration */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Default Configuration
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Default Configuration"
            description="Configure logo, colors, sender email, and more for default system emails"
            type="action"
            actionIcon={<SquarePen className="w-4 h-4" />}
          />
          <SettingCard
            title="Manual Email"
            description="Create and send emails for custom events to specific recipient types"
            type="action"
            actionIcon={<SquarePen className="w-4 h-4" />}
          />
        </div>
      </div>

      {/* Email to Students */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Email to Students
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Welcome Email After Registration"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Course Enrolled"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Reminder to Inactive Students"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Comments in Lesson"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Quiz Completed"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Completed a Course"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Removed From Course"
            description=""
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Email to Instructors */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Email to Instructors
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="A Student Enrolled in Course"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="A Student Completed Course"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Student Submitted a Course Review"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="A Student Completed Lesson"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="New Q&A Message"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Comments in Lesson"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Student Submitted Quiz"
            description=""
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Email to Admin */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Email to Admin
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="New Instructor Signup"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="New Student Signup"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="New Course Submitted for Review"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="New Course Published"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Course Edited/Updated"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="New Withdrawal Request"
            description=""
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Student Submitted a Course Review"
            description=""
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Email Cron Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Email Cron Settings
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="WP Cron for Bulk Mailing"
            description="Enable this option to let Tutor LMS use WordPress native scheduler for email sending activities"
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="WP Email Cron Frequency"
            description="Add the frequency mode in Second(s) which the Cron Setup will run"
            type="select"
            defaultValue="60"
            options={[
              { label: "60s", value: "60" },
              { label: "120s", value: "120" },
              { label: "300s", value: "300" },
            ]}
          />
          <SettingCard
            title="Email Per Cron Execution"
            description="Number of emails you'd like to send per cron execution"
            type="select"
            defaultValue="10"
            options={[
              { label: "10 Emails", value: "10" },
              { label: "20 Emails", value: "20" },
              { label: "50 Emails", value: "50" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
