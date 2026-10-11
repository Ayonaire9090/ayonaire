"use client";

import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import { BookOpen, Search, ChevronDown } from "lucide-react";
import { AppSection } from "@/components/app-section";
import {
  StudentCourseCard,
  CourseStatus,
} from "./_components/student-course-card";
import { useMemo, useState } from "react";
import {
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";
import {
  useGetCompletedCourses,
  useGetEnrolledCourses,
} from "@/hooks/api/use-enrollment";
import { Enrollment } from "@/lib/api/endpoints/enrollment";

function deriveStatus(completed: boolean, progress: number): CourseStatus {
  if (completed) return "Completed";
  if (progress > 0) return "In Progress";
  return "Not Started";
}

function getCourseId(enrollment: Enrollment): string {
  return typeof enrollment.course === "string"
    ? enrollment.course
    : enrollment.course?._id ?? enrollment._id;
}

function StudentCoursesContent() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [serviceSearchQuery, setServiceSearchQuery] = useState("");
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);
  const [draftSelectedCourseIds, setDraftSelectedCourseIds] = useState<string[]>([]);
  const { state } = useSidebar();

  // "Expired"/"Paid" have no backend equivalent (enrollments don't carry a
  // payment or expiry status), so those tabs are left non-functional rather
  // than filtering against a guessed field.
  const tabs = ["All", "In Progress", "Completed", "Expired", "Paid"];

  const { data, isLoading, isError } = useGetEnrolledCourses();
  const {
    data: completedData,
    isLoading: isCompletedLoading,
    isError: isCompletedError,
  } = useGetCompletedCourses();
  const completedCourseIds = new Set(
    (completedData?.data ?? []).map((enrollment) => getCourseId(enrollment)),
  );

  const allCourses = (data?.data ?? []).map((enrollment) => {
    const course =
      typeof enrollment.course === "string" ? null : enrollment.course;
    const courseId = getCourseId(enrollment);
    const status = deriveStatus(
      enrollment.completed || completedCourseIds.has(courseId),
      enrollment.progress,
    );

    return {
      id: enrollment._id,
      title: course?.title ?? "Unknown Course",
      description: course?.description?.trim() || "No description available",
      imageSrc: course?.thumbnail?.url || "/assets/images/optin-hero.png",
      slug: courseId,
      status,
      progress: enrollment.progress ?? 0,
      chaptersCompleted: enrollment.comletedLessons?.length ?? 0,
    };
  });

  const filteredServiceOptions = useMemo(() => {
    const query = serviceSearchQuery.trim().toLowerCase();
    return allCourses.filter((course) =>
      course.title.toLowerCase().includes(query),
    );
  }, [allCourses, serviceSearchQuery]);

  const openServiceModal = () => {
    setDraftSelectedCourseIds(selectedCourseIds);
    setServiceSearchQuery("");
    setIsServiceModalOpen(true);
  };

  const toggleDraftCourse = (courseId: string) => {
    setDraftSelectedCourseIds((current) =>
      current.includes(courseId)
        ? current.filter((id) => id !== courseId)
        : [...current, courseId],
    );
  };

  const applyServiceFilter = () => {
    setSelectedCourseIds(draftSelectedCourseIds);
    setIsServiceModalOpen(false);
  };

  const filteredCourses = allCourses.filter((c) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "In Progress" && c.status === "In Progress") ||
      (activeTab === "Completed" && c.status === "Completed");
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      c.title.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query);
    const matchesService =
      selectedCourseIds.length === 0 || selectedCourseIds.includes(c.slug);

    return matchesTab && matchesSearch && matchesService;
  });

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="offcanvas" />
      <SidebarInset className="bg-transparent min-h-screen pb-24">
        <StudentDashboardHeader showLogo={state === "collapsed"} />

        {/* Header App Section */}
        <AppSection
          useSectionSpacing={false}
          className="pt-10 pb-6 lg:pt-14 lg:pb-8 bg-[linear-gradient(178.47deg,#FFAC74_20%,#FFFFFF_85%)]! px-0!"
        >
          <div className="flex flex-col gap-6 lg:gap-8 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight text-center lg:text-left">
              Courses
            </h1>

            {/* Search and Filter Row */}
            <div className="flex items-center gap-2 lg:gap-4 justify-center lg:justify-start">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="search by course title or description"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full bg-white border-none rounded-full py-2.5 lg:py-3.5 pl-12 pr-6 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F86432]/20"
                />
              </div>
              <button
                onClick={() => {
                  setActiveTab("All");
                  setSelectedCourseIds([]);
                  setSearchQuery("");
                }}
                className="w-auto flex items-center justify-between gap-1 lg:gap-3 bg-white border-none rounded-full py-2.5 lg:py-3.5 px-3 lg:px-6 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <span>All Courses</span>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Tabs - Centered */}
          <div className="w-full flex justify-center mt-8 lg:mt-10 px-4">
            <div className="flex items-center gap-1 sm:gap-2 bg-white rounded-full p-1.5 shadow-sm overflow-x-auto hide-scrollbar max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#F86432] text-white"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button
                onClick={openServiceModal}
                className="shrink-0 flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all"
              >
                Service{selectedCourseIds.length ? ` (${selectedCourseIds.length})` : ""}
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </AppSection>

        {/* Courses Grid */}
        <div className="w-full px-4 lg:px-8 mx-auto py-8 lg:py-12">
          {isLoading || isCompletedLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : isError || isCompletedError ? (
            <div className="flex items-center justify-center py-20 text-[15px] text-red-500">
              Failed to load courses. Please try again.
            </div>
          ) : filteredCourses.length > 0 ? (
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
              {filteredCourses.map((course) => (
                <StudentCourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  imageSrc={course.imageSrc}
                  slug={course.slug}
                  status={course.status}
                  progress={course.progress}
                  chaptersCompleted={course.chaptersCompleted}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
              <BookOpen size={48} className="mb-4 opacity-20" />
              <p className="text-lg">No courses found for this category.</p>
            </div>
          )}
        </div>

        <Dialog open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen}>
          <DialogContent className="max-w-[560px] rounded-2xl border-0 p-0 gap-0 overflow-hidden">
            <DialogHeader className="relative flex-row items-center justify-center border-b border-gray-100 px-6 py-4">
              <DialogTitle className="text-center text-[15px] font-bold text-gray-900">
                Select service
              </DialogTitle>
              <DialogClose className="absolute right-4 top-1/2 -translate-y-1/2 grid size-8 place-items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-700">
                <span className="sr-only">Close</span>
                x
              </DialogClose>
            </DialogHeader>

            <div className="flex flex-col gap-4 px-5 py-4">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Filter out courses based on service
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Select service from below
                </p>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  value={serviceSearchQuery}
                  onChange={(event) => setServiceSearchQuery(event.target.value)}
                  placeholder="Search service by name"
                  className="h-10 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-sm outline-none focus:border-[#F86432] focus:ring-2 focus:ring-[#F86432]/10"
                />
              </div>

              <div className="max-h-[280px] overflow-y-auto rounded-md border border-gray-100">
                {filteredServiceOptions.length > 0 ? (
                  filteredServiceOptions.map((course) => (
                    <label
                      key={course.slug}
                      className="flex cursor-pointer items-center justify-between gap-4 border-b border-gray-100 px-3 py-3 last:border-b-0 hover:bg-gray-50"
                    >
                      <span className="text-[13px] font-medium leading-snug text-gray-800">
                        {course.title}
                      </span>
                      <Checkbox
                        checked={draftSelectedCourseIds.includes(course.slug)}
                        onCheckedChange={() => toggleDraftCourse(course.slug)}
                        className="rounded-[4px] border-gray-300"
                      />
                    </label>
                  ))
                ) : (
                  <div className="px-3 py-8 text-center text-sm text-gray-500">
                    No service found.
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  onClick={() => setDraftSelectedCourseIds([])}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  Clear
                </button>
                <button
                  onClick={applyServiceFilter}
                  className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-900"
                >
                  Done
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </SidebarInset>
    </>
  );
}

export default function StudentCoursesPage() {
  return <StudentCoursesContent />;
}
