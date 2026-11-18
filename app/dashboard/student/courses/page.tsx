"use client";

import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
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
  SidebarTrigger,
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
  const tabs = ["All", "In Progress", "Completed"];

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
  const progressBuckets = [
    { label: "0%", count: allCourses.filter((course) => course.progress <= 0 && course.status !== "Completed").length },
    { label: "1–24%", count: allCourses.filter((course) => course.progress > 0 && course.progress < 25 && course.status !== "Completed").length },
    { label: "25–49%", count: allCourses.filter((course) => course.progress >= 25 && course.progress < 50 && course.status !== "Completed").length },
    { label: "50–74%", count: allCourses.filter((course) => course.progress >= 50 && course.progress < 75 && course.status !== "Completed").length },
    { label: "75–99%", count: allCourses.filter((course) => course.progress >= 75 && course.progress < 100 && course.status !== "Completed").length },
    { label: "100%", count: allCourses.filter((course) => course.progress >= 100 || course.status === "Completed").length },
  ];
  const maxBucket = Math.max(1, ...progressBuckets.map((bucket) => bucket.count));

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
      <SidebarInset className="bg-[#f7f6f3] min-h-screen pb-24">
        <StudentDashboardHeader showLogo={state === "collapsed"} />
        <div className="flex items-center justify-between border-b border-[#eeeae4] bg-white px-4 py-3 md:hidden"><span className="text-sm font-bold text-[#29231f]">Ayonaire <span className="text-[#e46d42]">/</span> Learning</span><SidebarTrigger aria-label="Open student navigation" /></div>

        {/* Header App Section */}
        <AppSection
          useSectionSpacing={false}
          className="pt-8 pb-5 lg:pt-10 lg:pb-6 bg-transparent! px-4! lg:px-8!"
        >
          <div className="flex flex-col gap-6 max-w-7xl mx-auto">
            <div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#df6842]">Your learning space</p><h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-[#24201d]">My courses<span className="text-[#ed7045]">.</span></h1><p className="mt-2 text-sm text-[#90877e]">Pick up where you left off and explore your learning.</p></div>

            {/* Search and Filter Row */}
            <div className="flex items-center gap-2 lg:gap-4 justify-center lg:justify-start">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="search by course title or description"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full bg-white border border-[#ebe6df] rounded-xl py-3.5 pl-12 pr-6 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F86432]/20"
                />
              </div>
              <button
                onClick={() => {
                  setActiveTab("All");
                  setSelectedCourseIds([]);
                  setSearchQuery("");
                }}
                className="w-auto flex items-center justify-between gap-2 bg-white border border-[#ebe6df] rounded-xl py-3.5 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>All Courses</span>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Tabs - Centered */}
          <div className="w-full max-w-7xl mx-auto flex justify-start mt-6">
            <div className="flex items-center gap-1 sm:gap-2 bg-white border border-[#ebe6df] rounded-xl p-1 overflow-x-auto hide-scrollbar max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-4 sm:px-5 py-2 rounded-lg text-sm font-medium transition-all ${
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
                Filter courses{selectedCourseIds.length ? ` (${selectedCourseIds.length})` : ""}
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </AppSection>

        {!isLoading && !isCompletedLoading && !isError && !isCompletedError && allCourses.length > 0 && <section className="mx-4 mb-2 grid max-w-7xl gap-4 lg:mx-8 xl:grid-cols-[1fr_1.25fr] 2xl:mx-auto" aria-label="Course progress overview">
          <div className="rounded-2xl border border-[#ebe6df] bg-white p-5 sm:p-6"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#df6842]">Your learning at a glance</p><h2 className="mt-2 text-lg font-bold text-[#2a2420]">Keep your momentum</h2><div className="mt-5 grid grid-cols-3 gap-3"><div><p className="text-2xl font-bold text-[#2a2420]">{allCourses.length}</p><p className="mt-1 text-xs text-[#9a9087]">Enrolled</p></div><div><p className="text-2xl font-bold text-[#df6842]">{allCourses.filter((course) => course.status === "In Progress").length}</p><p className="mt-1 text-xs text-[#9a9087]">In progress</p></div><div><p className="text-2xl font-bold text-[#2a2420]">{allCourses.filter((course) => course.status === "Completed").length}</p><p className="mt-1 text-xs text-[#9a9087]">Completed</p></div></div></div>
          <div className="rounded-2xl border border-[#ebe6df] bg-white p-5 sm:p-6"><div className="flex flex-wrap items-baseline justify-between gap-2"><div><h2 className="text-sm font-bold text-[#2a2420]">Course progress</h2><p className="mt-1 text-xs text-[#9a9087]">Number of your courses in each completion range</p></div><span className="text-xs text-[#a59a91]">All enrolled courses</span></div><div className="mt-4 grid h-28 grid-cols-6 items-end gap-2 sm:gap-4" role="img" aria-label={`Course progress distribution: ${progressBuckets.map((bucket) => `${bucket.label}: ${bucket.count}`).join(", ")}`}>
            {progressBuckets.map((bucket) => <div key={bucket.label} className="flex h-full min-w-0 flex-col items-center justify-end gap-1"><span className="text-xs font-semibold text-[#7a6e65]">{bucket.count}</span><div className="flex h-[68px] w-full items-end rounded-md bg-[#faf7f3]"><div className="w-full rounded-md bg-[#ec7045] transition-[height]" style={{ height: `${bucket.count ? Math.max(8, bucket.count / maxBucket * 100) : 0}%` }} /></div><span className="whitespace-nowrap text-[9px] text-[#a49a91] sm:text-[10px]">{bucket.label}</span></div>)}
          </div></div>
        </section>}

        {/* Courses Grid */}
        <div className="w-full max-w-7xl px-4 lg:px-8 mx-auto py-6 lg:py-8">
          {isLoading || isCompletedLoading ? (
            <div className="flex items-center justify-center py-20">
              <StudentLoadingSkeleton variant="cards" />
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
                Select courses
              </DialogTitle>
              <DialogClose className="absolute right-4 top-1/2 -translate-y-1/2 grid size-8 place-items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-700">
                <span className="sr-only">Close</span>
                x
              </DialogClose>
            </DialogHeader>

            <div className="flex flex-col gap-4 px-5 py-4">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Choose which courses to show
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Select courses from below
                </p>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  value={serviceSearchQuery}
                  onChange={(event) => setServiceSearchQuery(event.target.value)}
                  placeholder="Search courses by name"
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
                    No courses found.
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
