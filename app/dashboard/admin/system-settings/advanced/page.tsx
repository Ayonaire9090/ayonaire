import { SettingCard } from "../_components/setting-card";

export default async function AdminAdvancedSettings() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-4 lg:p-6">
      <h2 className="text-[18px] font-bold text-gray-900">Advanced</h2>
      {/* Course Builder Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">
          Course Builder Fields Visibility Control
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Basics"
            description="Admin + Instructor"
            type="select"
            defaultValue="General"
            options={[
              {
                value: "General",
                label: "General",
              },
              {
                value: "Content Drip",
                label: "Content Drip",
              },
              {
                value: "Enrollment",
                label: "Enrollment",
              },
              {
                value: "Featured",
                label: "Featured",
              },
            ]}
          />
          <SettingCard
            title="Curriculum"
            description="Admin + Instructor"
            type="select"
            defaultValue="General"
            options={[
              {
                value: "General",
                label: "General",
              },
              {
                value: "Content Drip",
                label: "Content Drip",
              },
              {
                value: "Enrollment",
                label: "Enrollment",
              },
              {
                value: "Featured",
                label: "Featured",
              },
            ]}
          />
          <SettingCard
            title="Additional"
            description="Admin + Instructor"
            type="select"
            defaultValue="General"
            options={[
              {
                value: "General",
                label: "General",
              },
              {
                value: "Content Drip",
                label: "Content Drip",
              },
              {
                value: "Enrollment",
                label: "Enrollment",
              },
              {
                value: "Featured",
                label: "Featured",
              },
            ]}
          />
        </div>
      </div>

      {/* Course Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Course</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Gutenberg Editor"
            description="Enable this to create courses using the Gutenberg Editor."
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Hide Course Products on Shop Page"
            description="Enable to hide course products on shop page."
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Course Archive Page"
            description="This page will be used to list all the published courses."
            type="select"
            defaultValue="/courses/archive"
            options={[
              {
                value: "/courses/archive",
                label: "Courses /Archive",
              },
              {
                value: "/courses",
                label: "Courses",
              },
            ]}
          />
          <SettingCard
            title="Instructor Registration Page"
            description="Choose the page for instructor registration."
            type="select"
            defaultValue="/instructors/register"
            options={[
              {
                value: "/instructor-registration",
                label: "/instructor-registration",
              },
              {
                value: "/register",
                label: "/register",
              },
              {
                value: "/instructors/register",
                label: "/instructors/register",
              },
            ]}
          />
          <SettingCard
            title="student Registration Page"
            description="Choose the page for student registration."
            type="select"
            defaultValue="/students/register"
            options={[
              {
                value: "/student-registration",
                label: "/student-registration",
              },
              {
                value: "/register",
                label: "/register",
              },
              {
                value: "/students/register",
                label: "/students/register",
              },
            ]}
          />
        </div>
      </div>

      {/* Base Permalink Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Base Permalink</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Course Permalink"
            description="https://seo.ayonaire.com/courses/sample-course."
            type="select"
            defaultValue="/courses/course-slug"
            options={[
              {
                value: "/courses/course-slug",
                label: "/courses/course-slug",
              },
              {
                value: "/courses/course-name",
                label: "/courses/course-name",
              },
              {
                value: "/courses/course-title",
                label: "/courses/course-title",
              },
              {
                value: "/courses/course-author",
                label: "/courses/course-author",
              },
            ]}
          />
          <SettingCard
            title="Lesson Permalink"
            description="https://seo.ayonaire.com/courses/sample-course/lessons/sample-lesson/"
            type="select"
            defaultValue="/courses/course-slug/lessons/lesson-slug"
            options={[
              {
                value: "/courses/course-slug/lessons/lesson-slug",
                label: "/courses/course-slug/lessons/lesson-slug",
              },
              {
                value: "/courses/course-name/lessons/lesson-name",
                label: "/courses/course-name/lessons/lesson-name",
              },
              {
                value: "/courses/course-title/lessons/lesson-title",
                label: "/courses/course-title/lessons/lesson-title",
              },
              {
                value: "/courses/course-author/lessons/lesson-author",
                label: "/courses/course-author/lessons/lesson-author",
              },
            ]}
          />
          <SettingCard
            title="Quiz Permalink"
            description="https://seo.ayonaire.com/courses/sample-course/quizzes/sample-quiz/"
            type="select"
            defaultValue="/courses/course-name/quizzes/quiz-name"
            options={[
              {
                value: "/courses/course-slug/quizzes/quiz-slug",
                label: "/courses/course-slug/quizzes/quiz-slug",
              },
              {
                value: "/courses/course-name/quizzes/quiz-name",
                label: "/courses/course-name/quizzes/quiz-name",
              },
              {
                value: "/courses/course-title/quizzes/quiz-title",
                label: "/courses/course-title/quizzes/quiz-title",
              },
              {
                value: "/courses/course-author/quizzes/quiz-author",
                label: "/courses/course-author/quizzes/quiz-author",
              },
            ]}
          />
        </div>
      </div>

      {/* Options Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Options</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Profile Completion"
            description="Enabling this feature will show a notification bar to students and instructors to complete their profile information"
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Enable Tutor LMS Login"
            description="Enable to use the Tutor LMS native login system instead of the WordPress login page"
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Enable Email Update"
            description="Allow students and instructors to change their email directly from their profile"
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Content Security Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">
          Content Security
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Prevent Hotlinking"
            description="Use hotlink protection for your self-hosted images and videos"
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Copy Protection"
            description="Prevent right-click and copy actions on your website"
            type="toggle"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* ChatGPT Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">ChatGPT</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Insert ChatGPT API Key"
            description="Find your Secret API key in your ChatGPT User settings and paste it here."
            type="toggle"
            defaultChecked={true}
          />
          <SettingCard
            title="Bubble Position"
            description="Set the ChatGPT bubble position"
            type="select"
            defaultValue="bottom-right"
            options={[
              {
                value: "bottom-right",
                label: "Bottom Right",
              },
              {
                value: "bottom-left",
                label: "Bottom Left",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
