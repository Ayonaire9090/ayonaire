// Realistic fake data for every admin module included in the auth-free
// admin preview. Shapes are copied exactly from the live endpoint
// interfaces in lib/api/endpoints/*.ts so seeded React Query cache entries
// match what each real page component expects. Safe to delete before launch.

import { UserProfile } from "@/lib/api/types";
import { Course } from "@/lib/api/endpoints/courses";
import { InstructorProfile } from "@/lib/api/endpoints/instructor";
import { Enrollment } from "@/lib/api/endpoints/enrollment";
import {
  AttendanceSessionSummary,
  AttendanceReportEntry,
} from "@/lib/api/endpoints/attendance";
import { QuizRecord, QuizResults } from "@/lib/api/endpoints/quiz";
import { Announcement } from "@/lib/api/endpoints/announcements";
import { AssignmentRecord, AllSubmissionRecord } from "@/lib/api/endpoints/assignments";
import { Cohort } from "@/lib/api/endpoints/cohorts";
import {
  Payment,
  PaymentAnalytics,
  PaymentGateway,
  PricingPlan,
} from "@/lib/api/endpoints/payments";
import { NotificationRecord } from "@/lib/api/endpoints/notifications";
import { SupportTicket } from "@/lib/api/endpoints/support";
import { CertificateRecord } from "@/lib/api/endpoints/certificates";
import { WorkshopRecord } from "@/lib/api/endpoints/workshops";

const now = new Date();
const daysAgo = (n: number) => new Date(now.getTime() - n * 86400000).toISOString();
const daysFromNow = (n: number) => new Date(now.getTime() + n * 86400000).toISOString();

// ---------------------------------------------------------------------------
// Shared people (referenced across modules so names stay consistent)
// ---------------------------------------------------------------------------

export const SAMPLE_STUDENTS = [
  { _id: "student-1", name: "Sarah Ahmed", email: "sarah.ahmed@example.com" },
  { _id: "student-2", name: "Ali Hassan", email: "ali.hassan@example.com" },
  { _id: "student-3", name: "Fatima Ibrahim", email: "fatima.ibrahim@example.com" },
  { _id: "student-4", name: "Chidi Okafor", email: "chidi.okafor@example.com" },
  { _id: "student-5", name: "Grace Adebayo", email: "grace.adebayo@example.com" },
  { _id: "student-6", name: "Tunde Bello", email: "tunde.bello@example.com" },
];

export const SAMPLE_INSTRUCTORS = [
  { _id: "instructor-1", name: "Dr. Ahmed Musa", email: "dr.ahmed@ayonaire.com" },
  { _id: "instructor-2", name: "Ngozi Eze", email: "ngozi.eze@ayonaire.com" },
  { _id: "instructor-3", name: "James Okoro", email: "james.okoro@ayonaire.com" },
];

export const SAMPLE_COURSE_REFS = [
  { _id: "course-1", title: "2.0 - Ultimate Data Science" },
  { _id: "course-2", title: "Complete Python With DSA Bootcamp" },
  { _id: "course-3", title: "AI Engineering Masterclass" },
  { _id: "course-4", title: "Data Analytics Fundamentals" },
];

// ---------------------------------------------------------------------------
// Users (admin/users)
// ---------------------------------------------------------------------------

export const SAMPLE_USERS: UserProfile[] = [
  ...SAMPLE_STUDENTS.map((s, i) => ({
    _id: s._id,
    name: s.name,
    email: s.email,
    role: "student" as const,
    status: (i === 1 ? "suspended" : i === 4 ? "inactive" : "active") as UserProfile["status"],
    createdAt: daysAgo(60 - i * 5),
    updatedAt: daysAgo(1),
  })),
  ...SAMPLE_INSTRUCTORS.map((ins, i) => ({
    _id: ins._id,
    name: ins.name,
    email: ins.email,
    role: "instructor" as const,
    status: "active" as UserProfile["status"],
    createdAt: daysAgo(120 - i * 10),
    updatedAt: daysAgo(2),
  })),
  {
    _id: "admin-1",
    name: "Ayo Holt",
    email: "ayo@ayonaire.com",
    role: "admin",
    status: "active",
    createdAt: daysAgo(200),
    updatedAt: daysAgo(1),
  },
];

// ---------------------------------------------------------------------------
// Courses (admin/courses)
// ---------------------------------------------------------------------------

export const SAMPLE_COURSES: Course[] = [
  {
    _id: "course-1",
    title: "2.0 - Ultimate Data Science",
    description: "Master data science from fundamentals to deployment.",
    category: { _id: "cat-1", title: "Data Science" },
    instructor: { _id: "instructor-1", name: "Dr. Ahmed Musa", email: "dr.ahmed@ayonaire.com" },
    price: 150000,
    courseLevel: "Intermediate",
    status: "Active",
    enrollmentCount: 128,
    completionCount: 42,
    completionCertificate: true,
    createdAt: daysAgo(180),
  },
  {
    _id: "course-2",
    title: "Complete Python With DSA Bootcamp",
    description: "Python programming and data structures & algorithms.",
    category: { _id: "cat-2", title: "Programming" },
    instructor: { _id: "instructor-2", name: "Ngozi Eze", email: "ngozi.eze@ayonaire.com" },
    price: 95000,
    courseLevel: "Beginner",
    status: "Active",
    enrollmentCount: 340,
    completionCount: 156,
    completionCertificate: true,
    createdAt: daysAgo(220),
  },
  {
    _id: "course-3",
    title: "AI Engineering Masterclass",
    description: "Build and ship real AI-powered applications.",
    category: { _id: "cat-3", title: "Artificial Intelligence" },
    instructor: { _id: "instructor-1", name: "Dr. Ahmed Musa", email: "dr.ahmed@ayonaire.com" },
    price: 180000,
    courseLevel: "Advanced",
    status: "Draft",
    enrollmentCount: 0,
    completionCount: 0,
    completionCertificate: true,
    createdAt: daysAgo(15),
  },
  {
    _id: "course-4",
    title: "Data Analytics Fundamentals",
    description: "Hiring-ready data analytics skills in 8 weeks.",
    category: { _id: "cat-1", title: "Data Science" },
    instructor: { _id: "instructor-3", name: "James Okoro", email: "james.okoro@ayonaire.com" },
    price: 75000,
    courseLevel: "Beginner",
    status: "Active",
    enrollmentCount: 89,
    completionCount: 12,
    completionCertificate: false,
    createdAt: daysAgo(90),
  },
  {
    _id: "course-5",
    title: "Career Accelerator Track",
    description: "Resume, interview prep, and job-search coaching.",
    category: { _id: "cat-4", title: "Career Development" },
    instructor: { _id: "instructor-2", name: "Ngozi Eze", email: "ngozi.eze@ayonaire.com" },
    price: 50000,
    courseLevel: "Beginner",
    status: "Archived",
    enrollmentCount: 210,
    completionCount: 198,
    completionCertificate: true,
    createdAt: daysAgo(300),
  },
];

// ---------------------------------------------------------------------------
// Instructors / Instructor Approvals (shared query key)
// ---------------------------------------------------------------------------

export const SAMPLE_INSTRUCTOR_PROFILES: InstructorProfile[] = [
  {
    _id: "ip-1",
    instructorId: { _id: "instructor-1", name: "Dr. Ahmed Musa", email: "dr.ahmed@ayonaire.com" },
    bio: "10+ years teaching data science and machine learning.",
    expertise: ["Data Science", "Machine Learning", "Python"],
    applicationStatus: "approved",
    courses: ["course-1", "course-3"],
    createdAt: daysAgo(200),
  },
  {
    _id: "ip-2",
    instructorId: { _id: "instructor-2", name: "Ngozi Eze", email: "ngozi.eze@ayonaire.com" },
    bio: "Full-stack engineer turned educator, ex-Paystack.",
    expertise: ["Python", "JavaScript", "Career Coaching"],
    applicationStatus: "approved",
    courses: ["course-2", "course-5"],
    createdAt: daysAgo(150),
  },
  {
    _id: "ip-3",
    instructorId: { _id: "instructor-3", name: "James Okoro", email: "james.okoro@ayonaire.com" },
    bio: "Senior data analyst, hiring panel experience at 3 fintechs.",
    expertise: ["Data Analytics", "SQL", "Power BI"],
    applicationStatus: "approved",
    courses: ["course-4"],
    createdAt: daysAgo(80),
  },
  {
    _id: "ip-4",
    instructorId: { _id: "instructor-4", name: "Amaka Nwosu", email: "amaka.nwosu@example.com" },
    bio: "UX designer applying to teach product design fundamentals.",
    expertise: ["UX Design", "Figma"],
    applicationStatus: "pending",
    courses: [],
    createdAt: daysAgo(3),
  },
  {
    _id: "ip-5",
    instructorId: { _id: "instructor-5", name: "Bayo Adeyemi", email: "bayo.adeyemi@example.com" },
    bio: "Applying to teach cloud computing and DevOps.",
    expertise: ["AWS", "DevOps"],
    applicationStatus: "pending",
    courses: [],
    createdAt: daysAgo(1),
  },
];

// ---------------------------------------------------------------------------
// Enrollments (admin/enrollments)
// ---------------------------------------------------------------------------

export const SAMPLE_ENROLLMENTS: Enrollment[] = SAMPLE_STUDENTS.map((s, i) => {
  const course = SAMPLE_COURSE_REFS[i % SAMPLE_COURSE_REFS.length];
  const progress = [0, 35, 68, 100, 12, 100][i];
  return {
    _id: `enr-${i + 1}`,
    course: { _id: course._id, title: course.title, status: "Active" },
    student: s,
    status: progress === 100 ? "completed" : progress > 0 ? "active" : "enrolled",
    progress,
    completed: progress === 100,
    lastLesson: progress > 0 ? "lesson-3" : undefined,
    createdAt: daysAgo(60 - i * 7),
    updatedAt: daysAgo(i + 1),
  };
});

// ---------------------------------------------------------------------------
// Attendance (dashboard / list share summaries, reports separate)
// ---------------------------------------------------------------------------

export const SAMPLE_ATTENDANCE_SESSIONS: AttendanceSessionSummary[] = [
  {
    _id: "att-1",
    title: "Data Science Cohort A - Week 6",
    course: { _id: "course-1", title: "2.0 - Ultimate Data Science" },
    cohort: { _id: "cohort-1", name: "Cohort A" },
    date: daysAgo(1),
    instructor: { _id: "instructor-1", name: "Dr. Ahmed Musa" },
    presentCount: 27,
    absentCount: 3,
    attendanceRate: 90,
    approvalStatus: "approved",
    createdAt: daysAgo(1),
  },
  {
    _id: "att-2",
    title: "Python DSA Bootcamp - Week 12",
    course: { _id: "course-2", title: "Complete Python With DSA Bootcamp" },
    cohort: { _id: "cohort-2", name: "Cohort B" },
    date: daysAgo(2),
    instructor: { _id: "instructor-2", name: "Ngozi Eze" },
    presentCount: 41,
    absentCount: 8,
    attendanceRate: 84,
    approvalStatus: "pending",
    createdAt: daysAgo(2),
  },
  {
    _id: "att-3",
    title: "Data Analytics Fundamentals - Week 3",
    course: { _id: "course-4", title: "Data Analytics Fundamentals" },
    cohort: { _id: "cohort-3", name: "Cohort C" },
    date: daysAgo(4),
    instructor: { _id: "instructor-3", name: "James Okoro" },
    presentCount: 22,
    absentCount: 1,
    attendanceRate: 96,
    approvalStatus: "approved",
    createdAt: daysAgo(4),
  },
  {
    _id: "att-4",
    title: "Data Science Cohort A - Week 5",
    course: { _id: "course-1", title: "2.0 - Ultimate Data Science" },
    cohort: { _id: "cohort-1", name: "Cohort A" },
    date: daysAgo(8),
    instructor: { _id: "instructor-1", name: "Dr. Ahmed Musa" },
    presentCount: 25,
    absentCount: 5,
    attendanceRate: 83,
    approvalStatus: "pending",
    createdAt: daysAgo(8),
  },
];

export const SAMPLE_ATTENDANCE_REPORT: AttendanceReportEntry[] = SAMPLE_STUDENTS.map(
  (s, i) => {
    const totalSessions = 20;
    const sessionsAttended = [19, 12, 20, 8, 17, 5][i];
    const rate = Math.round((sessionsAttended / totalSessions) * 100);
    return {
      student: s,
      sessionsAttended,
      sessionsMissed: totalSessions - sessionsAttended,
      totalSessions,
      attendanceRate: rate,
      status: (rate >= 85 ? "good-standing" : rate >= 60 ? "at-risk" : "critical") as AttendanceReportEntry["status"],
    };
  },
);

// ---------------------------------------------------------------------------
// Quiz (list, detail, results)
// ---------------------------------------------------------------------------

export const SAMPLE_QUIZZES: QuizRecord[] = [
  {
    _id: "quiz-1",
    title: "Algebra Quiz 1",
    course: { _id: "course-4", title: "Data Analytics Fundamentals" },
    questionsCount: 25,
    totalPoints: 25,
    status: "published",
    dueDate: daysFromNow(7),
    attemptsCount: 98,
    avgScore: 18.4,
    createdBy: { _id: "instructor-3", name: "James Okoro" },
    createdAt: daysAgo(20),
  },
  {
    _id: "quiz-2",
    title: "Python Fundamentals Check",
    course: { _id: "course-2", title: "Complete Python With DSA Bootcamp" },
    questionsCount: 15,
    totalPoints: 15,
    status: "published",
    dueDate: daysFromNow(3),
    attemptsCount: 210,
    avgScore: 11.2,
    createdBy: { _id: "instructor-2", name: "Ngozi Eze" },
    createdAt: daysAgo(45),
  },
  {
    _id: "quiz-3",
    title: "SQL Joins Deep Dive",
    course: { _id: "course-1", title: "2.0 - Ultimate Data Science" },
    questionsCount: 20,
    totalPoints: 20,
    status: "draft",
    attemptsCount: 0,
    avgScore: null,
    createdBy: { _id: "instructor-1", name: "Dr. Ahmed Musa" },
    createdAt: daysAgo(2),
  },
  {
    _id: "quiz-4",
    title: "AI Ethics & Bias",
    course: { _id: "course-3", title: "AI Engineering Masterclass" },
    questionsCount: 10,
    totalPoints: 10,
    status: "published",
    dueDate: daysFromNow(14),
    attemptsCount: 34,
    avgScore: 7.9,
    createdBy: { _id: "instructor-1", name: "Dr. Ahmed Musa" },
    createdAt: daysAgo(10),
  },
];

export const SAMPLE_QUIZ_RESULTS: QuizResults = {
  quizId: "quiz-1",
  title: "Algebra Quiz 1",
  attempts: [
    { student: SAMPLE_STUDENTS[0], score: 22, completed: true, submittedAt: daysAgo(1) },
    { student: SAMPLE_STUDENTS[1], score: 12, completed: true, submittedAt: daysAgo(1) },
    { student: SAMPLE_STUDENTS[2], score: 25, completed: true, submittedAt: daysAgo(2) },
    { student: SAMPLE_STUDENTS[3], score: 18, completed: true, submittedAt: daysAgo(2) },
    { student: SAMPLE_STUDENTS[4], score: 0, completed: false },
    { student: SAMPLE_STUDENTS[5], score: 20, completed: true, submittedAt: daysAgo(3) },
  ],
};

// ---------------------------------------------------------------------------
// Announcements
// ---------------------------------------------------------------------------

export const SAMPLE_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    title: "New Cohort Starting Aug 15",
    summary: "Data Analytics Cohort D applications now open.",
    audience: "All Students",
    course: null,
    cohort: null,
    createdBy: "Ayo Holt",
    status: "published",
    views: 412,
    createdAt: daysAgo(3),
  },
  {
    id: "ann-2",
    title: "Assignment Deadline Extended",
    summary: "Python DSA final project deadline moved to next Friday.",
    audience: "Course",
    course: "Complete Python With DSA Bootcamp",
    cohort: "Cohort B",
    createdBy: "Ngozi Eze",
    status: "published",
    views: 156,
    createdAt: daysAgo(5),
  },
  {
    id: "ann-3",
    title: "Platform Maintenance This Weekend",
    summary: "Brief downtime expected Saturday 2-4am WAT.",
    audience: "All Users",
    course: null,
    cohort: null,
    createdBy: "Ayo Holt",
    status: "scheduled",
    views: 0,
    createdAt: daysAgo(1),
  },
  {
    id: "ann-4",
    title: "Career Fair Draft Announcement",
    summary: "Details being finalized for the September career fair.",
    audience: "All Students",
    course: null,
    cohort: null,
    createdBy: "Ayo Holt",
    status: "draft",
    views: 0,
    createdAt: daysAgo(0),
  },
];

// ---------------------------------------------------------------------------
// Assignments (list, cohorts for create form, submissions for grading)
// ---------------------------------------------------------------------------

export const SAMPLE_COHORTS: Cohort[] = [
  { _id: "cohort-1", name: "Cohort A", course: "course-1", isActive: true, createdAt: daysAgo(180) },
  { _id: "cohort-2", name: "Cohort B", course: "course-2", isActive: true, createdAt: daysAgo(220) },
  { _id: "cohort-3", name: "Cohort C", course: "course-4", isActive: true, createdAt: daysAgo(90) },
];

export const SAMPLE_ASSIGNMENTS: AssignmentRecord[] = [
  {
    _id: "asg-1",
    title: "Build a Data Pipeline",
    description: "Design and implement an ETL pipeline using Python.",
    course: { _id: "course-1", title: "2.0 - Ultimate Data Science" },
    cohort: { _id: "cohort-1", name: "Cohort A" },
    module: "Module 4: ETL",
    assignmentType: "Project",
    status: "published",
    dueDate: daysFromNow(5),
    totalPoints: 100,
    totalStudents: 30,
    submissionsCount: 22,
    createdAt: daysAgo(14),
  },
  {
    _id: "asg-2",
    title: "LeetCode Set 3",
    description: "Solve the assigned 10 data structures problems.",
    course: { _id: "course-2", title: "Complete Python With DSA Bootcamp" },
    cohort: { _id: "cohort-2", name: "Cohort B" },
    module: "Module 6: Trees",
    assignmentType: "Practice",
    status: "published",
    dueDate: daysFromNow(2),
    totalPoints: 50,
    totalStudents: 45,
    submissionsCount: 38,
    createdAt: daysAgo(9),
  },
  {
    _id: "asg-3",
    title: "Resume Draft Submission",
    description: "Submit a first draft of your tech resume.",
    course: { _id: "course-5", title: "Career Accelerator Track" },
    cohort: null,
    module: "Module 1: Resume",
    assignmentType: "Deliverable",
    status: "draft",
    dueDate: null,
    totalPoints: 20,
    totalStudents: 0,
    submissionsCount: 0,
    createdAt: daysAgo(1),
  },
];

export const SAMPLE_SUBMISSIONS: AllSubmissionRecord[] = [
  {
    _id: "sub-1",
    assignment: { _id: "asg-1", title: "Build a Data Pipeline" },
    student: SAMPLE_STUDENTS[0],
    course: { _id: "course-1", title: "2.0 - Ultimate Data Science" },
    text: "Pipeline repo linked below, README has setup instructions.",
    status: "graded",
    grade: 92,
    feedback: "Excellent structure, minor style nitpicks in transform step.",
    createdAt: daysAgo(3),
  },
  {
    _id: "sub-2",
    assignment: { _id: "asg-1", title: "Build a Data Pipeline" },
    student: SAMPLE_STUDENTS[1],
    course: { _id: "course-1", title: "2.0 - Ultimate Data Science" },
    text: "Submitted, ran into rate-limit issues with the API source.",
    status: "submitted",
    createdAt: daysAgo(2),
  },
  {
    _id: "sub-3",
    assignment: { _id: "asg-2", title: "LeetCode Set 3" },
    student: SAMPLE_STUDENTS[2],
    course: { _id: "course-2", title: "Complete Python With DSA Bootcamp" },
    file: { url: "/assets/videos/learning-tips-demo.mp4", publicId: "sub-3-file", name: "leetcode-set-3.zip" },
    status: "graded",
    grade: 45,
    feedback: "Two solutions failed edge cases - see comments.",
    createdAt: daysAgo(5),
  },
  {
    _id: "sub-4",
    assignment: { _id: "asg-2", title: "LeetCode Set 3" },
    student: SAMPLE_STUDENTS[3],
    course: { _id: "course-2", title: "Complete Python With DSA Bootcamp" },
    status: "late",
    createdAt: daysAgo(1),
  },
  {
    _id: "sub-5",
    assignment: { _id: "asg-1", title: "Build a Data Pipeline" },
    student: SAMPLE_STUDENTS[4],
    course: { _id: "course-1", title: "2.0 - Ultimate Data Science" },
    text: "Still working on the load step, requesting extension.",
    status: "submitted",
    createdAt: daysAgo(0),
  },
];

// ---------------------------------------------------------------------------
// Payments (Orders list + Payments overview share this), Analytics, Gateways
// ---------------------------------------------------------------------------

export const SAMPLE_PAYMENTS: Payment[] = [
  {
    _id: "pay-1",
    student: SAMPLE_STUDENTS[0],
    course: SAMPLE_COURSE_REFS[0],
    amount: 150000,
    currency: "NGN",
    reference: "AYN-REF-10001",
    channel: "card",
    status: "success",
    orderStatus: "completed",
    paidAt: daysAgo(3),
    createdAt: daysAgo(3),
  },
  {
    _id: "pay-2",
    student: SAMPLE_STUDENTS[1],
    course: SAMPLE_COURSE_REFS[1],
    amount: 95000,
    currency: "NGN",
    reference: "AYN-REF-10002",
    channel: "bank_transfer",
    status: "pending",
    orderStatus: "pending",
    createdAt: daysAgo(1),
  },
  {
    _id: "pay-3",
    student: SAMPLE_STUDENTS[2],
    course: SAMPLE_COURSE_REFS[3],
    amount: 75000,
    currency: "NGN",
    reference: "AYN-REF-10003",
    channel: "card",
    status: "failed",
    orderStatus: "cancelled",
    createdAt: daysAgo(6),
  },
  {
    _id: "pay-4",
    student: SAMPLE_STUDENTS[3],
    course: SAMPLE_COURSE_REFS[0],
    amount: 150000,
    currency: "NGN",
    reference: "AYN-REF-10004",
    channel: "card",
    status: "success",
    orderStatus: "completed",
    paidAt: daysAgo(10),
    createdAt: daysAgo(10),
  },
  {
    _id: "pay-5",
    student: SAMPLE_STUDENTS[4],
    course: SAMPLE_COURSE_REFS[2],
    amount: 180000,
    currency: "NGN",
    reference: "AYN-REF-10005",
    channel: "paystack",
    status: "success",
    orderStatus: "completed",
    paidAt: daysAgo(15),
    createdAt: daysAgo(15),
  },
  {
    _id: "pay-6",
    student: SAMPLE_STUDENTS[5],
    course: SAMPLE_COURSE_REFS[1],
    amount: 95000,
    currency: "NGN",
    reference: "AYN-REF-10006",
    channel: "card",
    status: "pending",
    orderStatus: "pending",
    createdAt: daysAgo(0),
  },
];

export const SAMPLE_PAYMENT_ANALYTICS: PaymentAnalytics = {
  totalRevenue: 4850000,
  totalTransactions: 86,
  platformFees: 242500,
  instructorPayouts: 3395000,
  platformFeePercent: 5,
  monthlyRevenue: [
    { year: 2026, month: 3, revenue: 620000 },
    { year: 2026, month: 4, revenue: 780000 },
    { year: 2026, month: 5, revenue: 910000 },
    { year: 2026, month: 6, revenue: 1050000 },
    { year: 2026, month: 7, revenue: 1490000 },
  ],
};

// ---------------------------------------------------------------------------
// Waitlist (server-component page, no React Query - fed as props instead)
// ---------------------------------------------------------------------------

export const SAMPLE_COURSE_WAITLIST = [
  { _id: "cwl-1", fullName: "Peter Nnamdi", email: "peter.n@example.com", course: "AI Engineering Masterclass", createdAt: daysAgo(2), updatedAt: daysAgo(2) },
  { _id: "cwl-2", fullName: "Blessing Ede", email: "blessing.e@example.com", course: "AI Engineering Masterclass", createdAt: daysAgo(5), updatedAt: daysAgo(5) },
  { _id: "cwl-3", fullName: "Kunle Adisa", email: "kunle.a@example.com", course: "2.0 - Ultimate Data Science", createdAt: daysAgo(1), updatedAt: daysAgo(1) },
];

export const SAMPLE_WAITLIST = [
  { _id: "wl-1", fullName: "Emeka Obi", email: "emeka.obi@example.com", skillInterested: { _id: "skill-1", name: "Cloud Computing" }, createdAt: daysAgo(3), updatedAt: daysAgo(3) },
  { _id: "wl-2", fullName: "Halima Sule", email: "halima.sule@example.com", skillInterested: { _id: "skill-2", name: "UX Design" }, createdAt: daysAgo(6), updatedAt: daysAgo(6) },
];

export const SAMPLE_PAYMENT_GATEWAYS: PaymentGateway[] = [
  {
    _id: "gw-1",
    name: "stripe",
    isConnected: true,
    mode: "test",
    publicKey: "pk_test_51NzXXXXXXXXXXXXXXXXXXXX",
    secretKeyLast4: "4242",
    isPrimary: true,
    connectedAt: daysAgo(30),
  },
  {
    _id: "gw-2",
    name: "paystack",
    isConnected: false,
    mode: "test",
    isPrimary: false,
  },
];

// ---------------------------------------------------------------------------
// Notifications (list, global reminder templates, history, email broadcast)
// ---------------------------------------------------------------------------

export const SAMPLE_NOTIFICATIONS: NotificationRecord[] = [
  {
    _id: "notif-1",
    name: "Assignment Due Reminder",
    message: "Your assignment is due in 24 hours - submit before the deadline.",
    type: "reminder",
    recipientType: "student",
    course: { _id: "course-1", title: "2.0 - Ultimate Data Science" },
    channel: "in-app",
    sendOption: "now",
    isRecurringTemplate: true,
    status: "active",
    sentAt: daysAgo(1),
    stats: { successCount: 118, failedCount: 2 },
    createdAt: daysAgo(30),
  },
  {
    _id: "notif-2",
    name: "Welcome Email",
    message: "Welcome to Ayonaire! Here's how to get started with your course.",
    type: "email",
    recipientType: "student",
    channel: "email",
    sendOption: "now",
    isRecurringTemplate: true,
    status: "active",
    sentAt: daysAgo(2),
    stats: { successCount: 340, failedCount: 1 },
    createdAt: daysAgo(200),
  },
  {
    _id: "notif-3",
    name: "Weekly Newsletter",
    message: "Here's what's new on the platform this week.",
    type: "email",
    recipientType: "all",
    channel: "email",
    sendOption: "schedule",
    scheduledAt: daysFromNow(2),
    isRecurringTemplate: false,
    status: "scheduled",
    stats: { successCount: 0, failedCount: 0 },
    createdAt: daysAgo(1),
  },
  {
    _id: "notif-4",
    name: "Course Completion Alert",
    message: "Congratulations on completing the course! Your certificate is ready.",
    type: "reminder",
    recipientType: "student",
    course: { _id: "course-2", title: "Complete Python With DSA Bootcamp" },
    channel: "in-app",
    sendOption: "now",
    isRecurringTemplate: false,
    status: "sent",
    sentAt: daysAgo(5),
    stats: { successCount: 150, failedCount: 0 },
    createdAt: daysAgo(5),
  },
  {
    _id: "notif-5",
    name: "New Course Announcement Draft",
    message: "Draft copy for the upcoming AI Engineering cohort launch.",
    type: "email",
    recipientType: "all",
    channel: "email",
    sendOption: "now",
    isRecurringTemplate: false,
    status: "draft",
    stats: { successCount: 0, failedCount: 0 },
    createdAt: daysAgo(0),
  },
];

// Email broadcasts are the same NotificationRecord shape filtered to channel=email
export const SAMPLE_EMAIL_BROADCASTS: NotificationRecord[] = SAMPLE_NOTIFICATIONS.filter(
  (n) => n.channel === "email" && n.status === "sent",
);

// ---------------------------------------------------------------------------
// Support tickets
// ---------------------------------------------------------------------------

export const SAMPLE_SUPPORT_TICKETS: SupportTicket[] = [
  {
    _id: "ticket-1",
    user: SAMPLE_STUDENTS[0],
    subject: "Can't access Module 4 video",
    message: "The video for lesson 3 in Module 4 won't load, just spins forever.",
    category: "Technical",
    priority: "high",
    status: "open",
    replies: [],
    createdAt: daysAgo(1),
  },
  {
    _id: "ticket-2",
    user: SAMPLE_STUDENTS[1],
    subject: "Refund request",
    message: "I'd like to request a refund for the Python bootcamp, I enrolled by mistake.",
    category: "Billing",
    priority: "medium",
    status: "in-progress",
    replies: [
      {
        author: { _id: "admin-1", name: "Ayo Holt", role: "admin" },
        message: "Hi Ali, I've escalated this to our billing team - you'll hear back within 24h.",
        createdAt: daysAgo(0),
      },
    ],
    createdAt: daysAgo(2),
  },
  {
    _id: "ticket-3",
    user: SAMPLE_STUDENTS[3],
    subject: "Certificate name is misspelled",
    message: "My completion certificate has my name spelled wrong, can this be corrected?",
    category: "Certificates",
    priority: "low",
    status: "resolved",
    replies: [
      {
        author: { _id: "admin-1", name: "Ayo Holt", role: "admin" },
        message: "Fixed and reissued - check your email for the corrected certificate.",
        createdAt: daysAgo(3),
      },
    ],
    createdAt: daysAgo(4),
  },
  {
    _id: "ticket-4",
    user: SAMPLE_STUDENTS[4],
    subject: "Instructor hasn't responded in a week",
    message: "I've asked a question on the Q&A board for Data Analytics Fundamentals and haven't heard back.",
    category: "Course Support",
    priority: "medium",
    status: "open",
    replies: [],
    createdAt: daysAgo(0),
  },
];

// ---------------------------------------------------------------------------
// Certificates
// ---------------------------------------------------------------------------

export const SAMPLE_CERTIFICATES: CertificateRecord[] = [
  {
    _id: "cert-1",
    student: SAMPLE_STUDENTS[3],
    course: { _id: "course-2", title: "Complete Python With DSA Bootcamp" },
    certificateId: "AYN-CERT-20260012",
    issuedAt: daysAgo(5),
    status: "active",
  },
  {
    _id: "cert-2",
    student: SAMPLE_STUDENTS[5],
    course: { _id: "course-5", title: "Career Accelerator Track" },
    certificateId: "AYN-CERT-20260008",
    issuedAt: daysAgo(20),
    status: "active",
  },
  {
    _id: "cert-3",
    student: SAMPLE_STUDENTS[0],
    course: { _id: "course-4", title: "Data Analytics Fundamentals" },
    certificateId: "AYN-CERT-20259994",
    issuedAt: daysAgo(45),
    status: "revoked",
  },
];

// ---------------------------------------------------------------------------
// Team members (admins + instructors with platform access)
// ---------------------------------------------------------------------------

export const SAMPLE_TEAM_MEMBERS: UserProfile[] = [
  {
    _id: "admin-1",
    name: "Ayo Holt",
    email: "ayo@ayonaire.com",
    role: "admin",
    status: "active",
    createdAt: daysAgo(200),
    updatedAt: daysAgo(1),
  },
  ...SAMPLE_INSTRUCTORS.map((ins, i) => ({
    _id: ins._id,
    name: ins.name,
    email: ins.email,
    role: "instructor" as const,
    status: "active" as UserProfile["status"],
    createdAt: daysAgo(120 - i * 10),
    updatedAt: daysAgo(2),
  })),
  {
    _id: "admin-2",
    name: "Chioma Nwankwo",
    email: "chioma@ayonaire.com",
    role: "admin",
    status: "active",
    createdAt: daysAgo(90),
    updatedAt: daysAgo(4),
  },
];

// ---------------------------------------------------------------------------
// Workshops / live classes (System Health card)
// ---------------------------------------------------------------------------

export const SAMPLE_WORKSHOPS: WorkshopRecord[] = [
  {
    id: "workshop-1",
    title: "Live Q&A: Data Pipelines",
    description: "Open Q&A session on the Module 4 data pipeline assignment.",
    platform: { name: "Zoom", link: "https://zoom.us/j/sample1", type: "video-call" },
    status: "live",
    createdBy: { id: "instructor-1", name: "Dr. Ahmed Musa" },
    startDate: daysAgo(0),
    endDate: daysFromNow(0),
    createdAt: daysAgo(3),
    updatedAt: daysAgo(0),
  },
  {
    id: "workshop-2",
    title: "Intro to Data Analytics",
    description: "Kickoff session for the new Data Analytics Fundamentals cohort.",
    platform: { name: "Google Meet", link: "https://meet.google.com/sample2", type: "video-call" },
    status: "upcoming",
    createdBy: { id: "instructor-3", name: "James Okoro" },
    startDate: daysFromNow(2),
    endDate: daysFromNow(2),
    createdAt: daysAgo(5),
    updatedAt: daysAgo(5),
  },
  {
    id: "workshop-3",
    title: "Career Coaching Office Hours",
    description: "Drop-in resume and interview prep session.",
    platform: { name: "Zoom", link: "https://zoom.us/j/sample3", type: "video-call" },
    status: "upcoming",
    createdBy: { id: "instructor-2", name: "Ngozi Eze" },
    startDate: daysFromNow(5),
    endDate: daysFromNow(5),
    createdAt: daysAgo(2),
    updatedAt: daysAgo(2),
  },
  {
    id: "workshop-4",
    title: "Python DSA Recap",
    description: "Review session covering trees and graphs.",
    platform: { name: "Zoom", link: "https://zoom.us/j/sample4", type: "video-call" },
    status: "completed",
    createdBy: { id: "instructor-2", name: "Ngozi Eze" },
    startDate: daysAgo(7),
    endDate: daysAgo(7),
    createdAt: daysAgo(14),
    updatedAt: daysAgo(7),
  },
];

// ---------------------------------------------------------------------------
// Pricing plans
// ---------------------------------------------------------------------------

export const SAMPLE_PRICING_PLANS: PricingPlan[] = [
  {
    _id: "plan-1",
    course: SAMPLE_COURSE_REFS[0],
    planType: "one-time",
    price: 150000,
    duration: "Lifetime",
    accessType: "Full Access",
    status: "active",
    createdAt: daysAgo(180),
  },
  {
    _id: "plan-2",
    course: SAMPLE_COURSE_REFS[1],
    planType: "one-time",
    price: 95000,
    duration: "1 Year",
    accessType: "Full Access",
    status: "active",
    createdAt: daysAgo(220),
  },
  {
    _id: "plan-3",
    course: SAMPLE_COURSE_REFS[2],
    planType: "subscription",
    price: 45000,
    duration: "3 Year",
    accessType: "Full Access",
    status: "pending",
    createdAt: daysAgo(10),
  },
  {
    _id: "plan-4",
    course: SAMPLE_COURSE_REFS[3],
    planType: "one-time",
    price: 75000,
    duration: "2 Year",
    accessType: "Full Access",
    status: "active",
    createdAt: daysAgo(90),
  },
];

// ---------------------------------------------------------------------------
// Student purchases (backend response is untyped `any[]` - shaped like the
// sibling Payment records returned by the same payment.service.ts)
// ---------------------------------------------------------------------------

export const SAMPLE_STUDENT_PURCHASES = SAMPLE_PAYMENTS.map((p) => ({
  _id: p._id,
  student: p.student,
  course: p.course,
  amount: p.amount,
  currency: p.currency,
  channel: p.channel,
  status: p.status,
  createdAt: p.createdAt,
}));
