import { Hero } from "@/components/sections/hero";
import { AppCourseOverviewList } from "@/components/app-course-overview-list";
import { courseHeroFeatures, courses } from "@/constants";
import { CourseWhyJoin } from "@/components/sections/course-why-join";
import { AppAdvisorBanner } from "@/components/appadvisor-banner";
import {
  generateSEO,
  generateCourseSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { findCourseBySlug, formatCohortDate } from "@/lib/course-utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseMostDemand } from "@/components/sections/course-most-demand";
import { CourseLearnAndJob } from "@/components/sections/course-learn-and-job";
import { Footer } from "@/components/layout/footer";
import { CourseWhoShouldEnrol } from "@/components/sections/course-who-should-enrol";
import { CourseSyllabus } from "@/components/sections/course-syllabus";
import { CourseSkillsToMaster } from "@/components/sections/course-skills-to-master";
import CourseToolsToMaster from "@/components/sections/course-tools-to-master";
import { CourseLearnWithAyonaire } from "@/components/sections/course-learn-with-ayonaire";
import { CourseProjects } from "@/components/sections/course-projects";
import { TopHiring } from "@/components/sections/top-hiring";
import { ChooseCourseFormat } from "@/components/sections/course-choose-format";
import { LargeTextMarquee } from "@/components/sections/large-text-marquee";
import { CourseCareerPath } from "@/components/sections/course-career-path";
import { AppActionButton } from "@/components/app-action-button";
import { ArrowRight } from "lucide-react";
import { CourseTeachYou } from "@/components/sections/course-teach-you";
import { CourseIndustry } from "@/components/sections/course-industry";
import { CourseCertificate } from "@/components/sections/course-certificate";
import { Testimonial2 } from "@/components/sections/testimonial2";
import { CourseHowToApply } from "@/components/sections/course-how-to-apply";
import { CoursePricing } from "@/components/sections/course-pricing";
import { CourseApply } from "@/components/sections/course-apply";
import { CourseUpComing } from "@/components/sections/course-upcoming";
import { CourseCohorts } from "@/components/sections/course-cohorts";
import { CourseFaqs } from "@/components/sections/course-faqs";
import Link from "next/link";
import AppHeroCallToAction from "@/components/sections/app-hero-call-to-action";

// Generate metadata for course pages
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = findCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Ayonaire",
      description: "The course you're looking for could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";
  const courseKeywords = `${course.title}, ${course.category}, tech training, bootcamp, online course, certification, ${course.format}`;

  return generateSEO({
    title: `${course.title} - ${course.category}`,
    description: `${course.description} Join our ${course.duration} ${
      course.format
    } course starting ${formatCohortDate(course.nextCohortDate)}. Rated ${
      course.rating
    }/5 stars.`,
    keywords: courseKeywords,
    canonical: `${baseUrl}/courses/${course.slug}`,
    image: course.imageSrc ? `${baseUrl}${course.imageSrc}` : undefined,
  });
}

// Generate static paths for all courses
export async function generateStaticParams() {
  return courses.flatMap((category) =>
    category.courses.map((course) => ({
      slug: course.slug,
    })),
  );
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = findCourseBySlug(slug);

  // Handle not found courses
  if (!course) {
    notFound();
  }

  // Transform course data to overview list format
  const overviewItems = [
    {
      title: "Next Cohort",
      description: formatCohortDate(course.nextCohortDate),
      icon: "/assets/icons/calendar.svg",
    },
    {
      title: "Duration",
      description: course.duration,
      icon: "/assets/icons/time-play.svg",
    },
    {
      title: "Format",
      description: course.format
        .split(", ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(", "),
      icon: "/assets/icons/camera.svg",
    },
  ];

  // Generate structured data for the course
  const courseSchema = generateCourseSchema(course, course.category);

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Courses", item: "/courses" },
    { name: course.title, item: `/courses/${course.slug}` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        showPersons={false}
        features={
          course.heroFeatures?.map((feature, index) => ({
            id: String(index + 1),
            title: feature.title,
            features: feature.features,
            image:
              index === 0
                ? "/assets/images/hero-vid-thumb.png"
                : index === 1
                  ? "/assets/smiling-lady.png"
                  : "/assets/student-learning.png",
            persons:
              index < 2
                ? [
                    {
                      name: "Jane Dow",
                      title: "CTO, Ayonaire",
                      image:
                        index === 0
                          ? "/assets/mission-2.png"
                          : "/assets/persons/jane-doe.png",
                    },
                    {
                      name: "John Doe",
                      title: "CEO, Ayonaire",
                      image:
                        index === 0
                          ? "/assets/mission-3.png"
                          : "/assets/persons/john-doe.png",
                    },
                    {
                      name: "Bob Johnson",
                      title: "COO, Ayonaire",
                      image:
                        index === 0
                          ? "/assets/mission-4.png"
                          : "/assets/persons/bob.png",
                    },
                  ]
                : undefined,
          })) || courseHeroFeatures
        }
        tickType="round"
        actionButtons={[
          <AppHeroCallToAction
            key="slide-1"
            firstButton={{ title: "Download Brochure", route: "/brochure" }}
            secondButton={{
              title: "Talk to an Advisor",
              route: "/opt-in#freeAccessFormOptin",
            }}
          />,
          <AppHeroCallToAction
            key="slide-2"
            firstButton={{ title: "Get Started", route: "/get-started" }}
            secondButton={{ title: "Download Brochure", route: "/brochure" }}
          />,
          <AppHeroCallToAction
            key="slide-3"
            firstButton={{
              title: "Apply Now",
              route: "/opt-in#freeAccessFormOptin",
            }}
            secondButton={{ title: "Download Brochure", route: "/brochure" }}
          />,
        ]}
      />
      <div className="py-8 lg:py-12">
        {/* Overview */}
        <AppCourseOverviewList items={overviewItems} />
        {/* Why Join */}
        <CourseWhyJoin
          title={course.whyJoin?.title || ""}
          description={course.whyJoin?.description || ""}
          keyFeatures={course.whyJoin?.keyFeatures || []}
        />
        {/* Banner */}
        <AppAdvisorBanner
          title={`No Tech Background? You Can Still Break Into ${course.category}`}
          description={`Take our free 5-minute eligibility test to see if this ${course.title} career path is right for you.`}
          ctaSection={
            <Link href={`/courses/${course.slug}/eligibility-test`}>
              <AppActionButton
                variant="fading"
                className="py-8! px-6! mt-4 lg:mt-6 bg-white hover:bg-white/90"
              >
                <span className="text-sm lg:text-base font-semibold text-black">
                  Take Eligibility Test
                </span>
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </AppActionButton>
            </Link>
          }
        />

        {/* Most Demand */}
        <CourseMostDemand
          courseTitle={course.title}
          demands={course.courseDemands}
        />

        {/* Learn & Job */}
        <CourseLearnAndJob
          courseTitle={course.title}
          whyLearnAndJob={course.whyLearnAndJob}
        />

        {/* Why Enrol */}
        <CourseWhoShouldEnrol
          courseTitle={course.title}
          whoShouldEnrol={course.whoShouldEnrol}
        />

        {/* Syllabus */}
        <CourseSyllabus courseTitle={course.title} syllabus={course.syllabus} />

        {/* Skills To Master */}
        <CourseSkillsToMaster
          courseTitle={course.title}
          skillsToMaster={course.skillsToMaster}
        />

        {/* Course Tools To Master */}
        <CourseToolsToMaster courseTitle={course.title} />

        {/* Course Learning with ayonaire */}
        <CourseLearnWithAyonaire />

        {/* Couse Projects */}
        <CourseProjects courseProjects={course.courseProjects} />

        {/* Top Hiring */}
        <TopHiring peopleInField={course.peopleInField} />

        {/* Choose Format */}
        <ChooseCourseFormat />

        {/* Large Text Marquee */}
        <LargeTextMarquee
          text={`Demand for ${course.peopleInField} is Increasing, Enroll to Transform Your Career`}
        />

        {/* Course Career Path */}
        <CourseCareerPath
          courseTitle={course.title}
          courseCategory={course.category}
          courseCareerPath={course.courseCareerPath}
        />

        {/* Adbisor Banner Light Variant */}
        <AppAdvisorBanner
          variant="light"
          title={`The World Needs More ${course.peopleInField}. Are You Ready to Be One?`}
          description={`Gain hands-on skills and industry-level training to launch your ${course.category} career.`}
          ctaSection={
            <Link href="/opt-in#freeAccessFormOptin">
              <AppActionButton
                variant="fading"
                className="py-8! px-4! lg:px-6!"
              >
                <span className="text-base font-semibold">
                  Book a Free Consultation Now
                </span>
                <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-lg">
                  <ArrowRight width={20} height={20} className="text-primary" />
                </div>
              </AppActionButton>
            </Link>
          }
        />

        {/* Course Teach You */}
        <CourseTeachYou
          courseTitle={course.title}
          courseCategory={course.category}
          teachFeatures={course.teachFeatures}
        />
      </div>

      {/* Course Industry */}
      <CourseIndustry
        courseTitle={course.title}
        peopleInField={course.peopleInField}
        industryStats={course.industryStats}
        salaryInsights={course.salaryInsights}
      />

      {/* Certificate */}
      <CourseCertificate
        courseTitle={course.title}
        peopleInField={course.peopleInField}
      />

      {/* Testimonial */}
      <Testimonial2 />

      {/* Banner */}
      <AppAdvisorBanner
        title={`${course.category} Is The Future. So Are You.`}
        description={`Join The Next Generation Of ${course.category} Engineers Reshaping Industries. Get Trained. Get Hired.`}
        ctaSection={
          <button className="mt-4 flex items-center gap-2 bg-white rounded-lg lg:rounded-xl px-2 py-3 lg:px-6 lg:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-sm lg:text-base font-semibold text-[#141414]">
              Schedule a Free Call with a Consultant
            </span>
            <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-r from-primary to-primary/90 rounded-lg">
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </div>
          </button>
        }
      />

      {/* How to apply (steps) */}
      <CourseHowToApply
        courseTitle={course.title}
        courseCategory={course.category}
      />

      {/* Banner - Download Brochure */}
      <AppAdvisorBanner
        title="Download Course Brochure"
        description="Download Our Full Brochure With Curriculum, Tools, And Mentorship Details."
        ctaSection={
          <button className="mt-4 flex items-center gap-2 bg-white rounded-lg lg:rounded-xl px-5 py-3 lg:px-6 lg:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-sm lg:text-base font-semibold text-[#141414]">
              Download PDF
            </span>
            <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-r from-primary to-primary/90 rounded-lg">
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </div>
          </button>
        }
      />

      {/* Pricing */}
      <CoursePricing />

      {/* Apply */}
      <CourseApply />

      {/* Upcoming */}
      <CourseUpComing
        courseTitle={course.title}
        peopleInField={course.peopleInField}
      />

      {/* Cohorts */}
      <CourseCohorts courseTitle={course.title} />

      {/* A New Kind Of Tech Banner */}
      <AppAdvisorBanner
        title="A New Kind of Tech Academy Built for Impact"
        description="This is more than just tech training; it's a calling. We raise tech talents who create solutions through innovation and excellence."
        className="px-4 py-12 lg:px-20 lg:py-16"
        ctaSection={
          <div className="grid grid-cols-2 gap-2">
            <Link href="/get-started">
              <button className="flex items-center gap-2 bg-white rounded-lg lg:rounded-xl px-2 py-3 lg:px-6 lg:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <span className="text-xs lg:text-base font-semibold text-[#141414]">
                  See Bootcamps
                </span>
                <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-r from-primary to-primary/90 rounded-lg">
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
              </button>
            </Link>
            <Link href="/opt-in#freeAccessFormOptin">
              <button className="flex items-center gap-2 bg-white rounded-lg lg:rounded-xl px-2 py-3 lg:px-6 lg:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <span className="text-xs lg:text-base font-semibold text-[#141414]">
                  Talk to an Advisor
                </span>
                <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-r from-primary to-primary/90 rounded-lg">
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
              </button>
            </Link>
          </div>
        }
      />

      {/* Faq */}
      <CourseFaqs courseTitle={course.title} faqs={course.faqs} />

      <Footer />
    </>
  );
}
