import { FileText } from "lucide-react";
import { SettingCard } from "../_components/setting-card";

export default async function AdminDesignSettings() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-4 lg:p-6">
      <h2 className="text-[18px] font-bold text-gray-900">Design</h2>
      {/* Page Logo Upload Field */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">
          Course Builder Page Logo
        </h2>
        <div className="rounded-[20px] p-6 lg:p-12 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer text-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-[16px] font-bold text-gray-900 mb-1">
            Drag & drop files here, or browse files
          </h3>
          <p className="text-[14px] text-gray-500">
            Allowed formats: PDF, DOC, DOCX, PNG, JPG (Max 10MB)
          </p>
        </div>
      </div>
      {/* Design */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Column Per Row"
            description="Define how many columns you want to use to display courses."
            type="select"
            category="design"
            settingKey="columnPerRow"
            defaultValue="10 columns"
            options={[
              {
                value: "10 columns",
                label: "10 columns",
              },
              {
                value: "12 columns",
                label: "12 columns",
              },
              {
                value: "16 columns",
                label: "16 columns",
              },
            ]}
          />
          <SettingCard
            title="Courses Per Page"
            description="Set the number of courses to display per page on the Course List page"
            type="select"
            category="design"
            settingKey="coursesPerPage"
            defaultValue="12 courses"
            options={[
              {
                value: "8 courses",
                label: "8 courses",
              },
              {
                value: "12 courses",
                label: "12 courses",
              },
              {
                value: "16 courses",
                label: "16 courses",
              },
            ]}
          />
          <SettingCard
            title="Course Filter"
            description="Show sorting and filtering options on course archive page"
            type="toggle"
            category="design"
            settingKey="courseFilter"
            defaultChecked={true}
          />
          <SettingCard
            title="Course Sorting"
            description="If enabled, the courses will be sortable by Course Name or Creation Date in either Ascending or Descending order"
            type="toggle"
            category="design"
            settingKey="courseSorting"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Layout Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Layout</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Instructor List Layout"
            description="Choose a layout for the list of instructors inside a course page. You can change this at any time."
            type="select"
            category="design"
            settingKey="instructorListLayout"
            defaultValue="Grid Layout"
            options={[
              {
                value: "Grid Layout",
                label: "Grid Layout",
              },
              {
                value: "Carousel Layout",
                label: "Carousel Layout",
              },
              {
                value: "Simple List",
                label: "Simple List",
              },
            ]}
          />
          <SettingCard
            title="Instructor Public Profile Layout"
            description="Choose a layout design for a instructor’s public profile"
            type="select"
            category="design"
            settingKey="instructorPublicProfileLayout"
            defaultValue="Grid Layout"
            options={[
              {
                value: "Grid Layout",
                label: "Grid Layout",
              },
              {
                value: "Carousel Layout",
                label: "Carousel Layout",
              },
              {
                value: "Simple List",
                label: "Simple List",
              },
            ]}
          />
          <SettingCard
            title="Student Public Profile Layout"
            description="Choose a layout design for a student’s public profile"
            type="select"
            category="design"
            settingKey="studentPublicProfileLayout"
            defaultValue="Carousel Layout"
            options={[
              {
                value: "Grid Layout",
                label: "Grid Layout",
              },
              {
                value: "Carousel Layout",
                label: "Carousel Layout",
              },
              {
                value: "Simple List",
                label: "Simple List",
              },
            ]}
          />
          <SettingCard
            title="Position of the Enrollment Box in Mobile View"
            description="You can decide where you want to show Enrollment Box on your Course Details page by selecting an option from here"
            type="select"
            category="design"
            settingKey="positionOfTheEnrollmentBoxInMobileView"
            defaultValue="On Page Bottom"
            options={[
              {
                value: "On Page Top",
                label: "On Page Top",
              },
              {
                value: "On Page Bottom",
                label: "On Page Bottom",
              },
              {
                value: "Hide",
                label: "Hide",
              },
            ]}
          />
        </div>
      </div>

      {/* Course Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Course Details</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Page Features"
            description="You can keep the following features active or inactive as per the need of your business model"
            type="toggle"
            category="design"
            settingKey="pageFeatures"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Colors Settings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-gray-900">Colors</h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Preset Colors"
            description="These colors will be used throughout your website. Choose between these presets or create your own custom palette."
            type="select"
            category="design"
            settingKey="presetColors"
            defaultValue="Default"
            options={[
              {
                value: "Default",
                label: "Default",
              },
              {
                value: "Modern",
                label: "Modern",
              },
              {
                value: "Ocean",
                label: "Ocean",
              },
              {
                value: "Custom",
                label: "Custom",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
