import { SettingCard } from "../_components/setting-card";

export default async function AdminCoursesSettings() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-4 lg:p-6">
      {/* Courses Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">
          Courses Settings
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Course Visibility"
            description="Course Visibility"
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Course Content Access"
            description="Allow instructors and admins to view the course content without enrolling"
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Content Summary"
            description="Enabling this feature will show a course content summary on the Course Details page."
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Lesson */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Lesson</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="WP Editor for Lesson"
            description="Enable classic editor to edit lesson."
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Video Lesson Completion Control"
            description="Enable to set the minimum video watch % for lesson completion, only works with Tutor Player."
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Quiz */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Quiz</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="When time expires"
            description="Choose which action to follow when the quiz time expires."
            type="select"
            defaultValue="Auto Submit"
            options={[
              {
                value: "Auto Submit",
                label: "Auto Submit",
              },
              {
                value: "Auto Abandon",
                label: "Auto Abandon",
              },
            ]}
          />
          <SettingCard
            title="Correct Answer Display Time (When Reveal Mode is enabled)"
            description="Put the answer display time in seconds"
            type="select"
            defaultValue="100s"
            options={[
              {
                value: "100s",
                label: "100s",
              },
              {
                value: "200s",
                label: "200s",
              },
            ]}
          />
          <SettingCard
            title="Show Quiz Previous Button"
            description="Choose whether to show or hide the previous button for each question."
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Hide Quiz Details From Students"
            description="If enabled, the students will not be able to see their quiz attempts details"
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Allow Instructors to Change Course Author"
            description="If enabled, instructors can change the course author for their courses."
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Video */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Video</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Preferred Video Source"
            description="Select the video hosting platform(s) you want to enable."
            type="select"
            defaultValue="External Url"
            options={[
              {
                value: "HTML5",
                label: "HTML5",
              },
              {
                value: "(mp4)",
                label: "(mp4)",
              },
              {
                value: "External Url",
                label: "External Url",
              },
            ]}
          />
          <SettingCard
            title="Use Tutor Player for YouTube"
            description="Enable this option to use Tutor LMS video player for YouTube."
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Use Tutor Player for Vimeo"
            description="Enable this option to use Tutor LMS video player for Vimeo."
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  );
}
