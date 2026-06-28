"use client";
import { courses } from "@/constants";
import { ProfileCourseCard } from "@/components/dashboard/profile/profile-course-card";
import { InstructorCreateNewCourseCard } from "./instructor-create-new-course-card";

// Flatten all courses from the categories and assign mock statuses for demo
const allCourses = courses.flatMap((category) =>
  category.courses.map((course) => ({
    title: course.title,
    description: course.description,
    imageSrc: course.imageSrc,
    slug: course.slug,
  })),
);

// simulate state for demo
const enrolledCourses = [
  { ...allCourses[0], status: "Published" as const },
  { ...allCourses[1], status: "Draft" as const },
  { ...allCourses[2], status: "Published" as const },
  { ...allCourses[3], status: "Draft" as const },
  { ...allCourses[4], status: "Published" as const },
];

export function InstructorCourseList() {
  return (
    <div className="py-6 md:py-8 w-full max-w-[96%] md:max-w-full mx-auto">
      {/* My Courses Content */}
      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {enrolledCourses.map((course) => (
            <ProfileCourseCard
              key={course.slug}
              imageSrc={course.imageSrc}
              title={course.title}
              description={course.description}
              slug={course.slug}
              status={course.status}
              statusAsAction={true}
              actions={[
                {
                  label: "View Course",
                  onClick: () => {
                    console.log("View course");
                  },
                },
                {
                  label: "Edit Course",
                  onClick: () => {
                    console.log("Edit course");
                  },
                },
                {
                  label:
                    course.status === "Published" ? "Unpublish" : "Publish",
                  onClick: () => {
                    console.log("Publish/Unpublish Course");
                  },
                  isDestructive: course.status === "Published",
                },
              ]}
            />
          ))}
          {/* Create New Course Card */}
          <InstructorCreateNewCourseCard />
        </div>
      ) : (
        <div className="py-16 text-center flex justify-center w-full max-w-[420px] mx-auto">
          <InstructorCreateNewCourseCard />
        </div>
      )}
    </div>
  );
}
