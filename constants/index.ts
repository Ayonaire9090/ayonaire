import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDeviceLaptop,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import {
  BookOpen,
  Earth,
  HeartHandshake,
  Rocket,
  TrendingUp,
  Trophy,
  Users2,
  Video,
  Zap,
  Medal,
  LayoutGrid,
  Users2Icon,
  GraduationCap,
  FileText,
  ClipboardList,
  UserCheck,
  CreditCard,
  Award,
  HelpCircle,
  Mail,
  MessageCircle,
  Settings,
  MessageCircleMore,
  CircleDollarSign,
  Bell,
} from "lucide-react";
import {
  IconCalendarEvent,
  IconMail,
  IconCertificate,
  IconUsersGroup,
  IconVideo,
  IconReceipt2,
} from "@tabler/icons-react";
import { IoGrid } from "react-icons/io5";

import { DashboardWindowIcon } from "@/public/assets/icons/dashboard-window-icon";
import { DashboardUsersIcon } from "@/public/assets/icons/dashboard-users-icon";
import { DashboardInstructorsIcon } from "@/public/assets/icons/dashboard-instructors-icon";
import { DashboardCoursesIcon } from "@/public/assets/icons/dashboard-courses-icon";
import { DashboardContentIcon } from "@/public/assets/icons/dashboard-content-icon";
import { DashboardPeopleIcon } from "@/public/assets/icons/dashboard-people-icon";
import { DashboardUserCheckIcon } from "@/public/assets/icons/dashboard-user-check-icon";
import { DashboardAssesmentIcon } from "@/public/assets/icons/dashboard-assesment-icon";
import { DashboardAttendanceIcon } from "@/public/assets/icons/dashboard-attendance-icon";
import { DashboardPaymentIcon } from "@/public/assets/icons/dashboard-payment-icon";
import { DashboardCertificateIcon } from "@/public/assets/icons/dashboard-certificate-icon";
import { DashboardSupportIcon } from "@/public/assets/icons/dashboard-support-icon";
import { DashboardEmailIcon } from "@/public/assets/icons/dashboard-email-icon";
import { DashboardTalkIcon } from "@/public/assets/icons/dashboard-talk-icon";
import { DashboardSettingsIcon } from "@/public/assets/icons/dashboard-settings-icon";
import { DashboardBulbIcon } from "@/public/assets/icons/dashboard-bulb-icon";
import { DashboardFileTextIcon } from "@/public/assets/icons/dashboard-file-text-icon";
import { DashboardChartIcon } from "@/public/assets/icons/dashboard-chart-icon";
import { DashboardSpeechBubbleIcon } from "@/public/assets/icons/dashboard-speech-bubble-icon";
import { DashboardDollarIcon } from "@/public/assets/icons/dashboard-dollar-icon";

export const navItems = [
  {
    name: "Ayonaire Learn",
    href: "/",
  },
  {
    name: "Business",
    href: "/business",
  },
  {
    name: "Hire Talent",
    href: "/hire-talent",
  },
  {
    name: "More",
    href: "#",
  },
];

export const dashboardData = {
  user: {
    name: "Ayonaire",
    email: "ayo@ayonaire.com",
    avatar: "/assets/logos/logo-dark.png",
  },
  adminNavMain: [
    {
      title: "Dashboard",
      url: "/dashboard/admin",
      icon: DashboardWindowIcon,
    },
    {
      title: "Analytics",
      url: "/dashboard/admin/analytics",
      icon: DashboardChartIcon,
    },
    {
      title: "Users",
      url: "/dashboard/admin/users",
      icon: DashboardUsersIcon,
    },
    {
      title: "Instructors",
      url: "/dashboard/admin/instructors",
      icon: DashboardInstructorsIcon,
    },
    {
      title: "Instructor Approvals",
      url: "/dashboard/admin/instructor-approvals",
      icon: UserCheck,
    },
    {
      title: "Courses",
      url: "/dashboard/admin/courses",
      icon: DashboardCoursesIcon,
    },
    {
      title: "Waitlist",
      url: "/dashboard/admin/waitlist",
      icon: DashboardCoursesIcon,
    },
    {
      title: "Enrollments",
      url: "/dashboard/admin/enrollments",
      icon: DashboardUserCheckIcon,
    },
    {
      title: "Cohorts",
      url: "/dashboard/admin/cohorts",
      icon: Users2,
    },
    {
      title: "Assignments",
      url: "/dashboard/admin/assignments",
      icon: DashboardFileTextIcon,
    },
    {
      title: "Quiz",
      url: "/dashboard/admin/quiz",
      icon: DashboardBulbIcon,
    },
    {
      title: "Workshops",
      url: "/dashboard/admin/workshops",
      icon: IconVideo,
    },
    {
      title: "Attendance",
      url: "/dashboard/admin/attendance",
      icon: DashboardAttendanceIcon,
    },
    {
      title: "Payments",
      url: "/dashboard/admin/payments",
      icon: DashboardPaymentIcon,
    },
    {
      title: "Orders",
      url: "/dashboard/admin/orders",
      icon: IconReceipt2,
    },
    {
      title: "Certificates",
      url: "/dashboard/admin/certificates",
      icon: DashboardCertificateIcon,
    },
    {
      title: "Announcements",
      url: "/dashboard/admin/announcements",
      icon: DashboardTalkIcon,
    },
    {
      title: "Notifications",
      url: "/dashboard/admin/notifications",
      icon: Bell,
    },
    {
      title: "Email Broadcast",
      url: "/dashboard/admin/email-broadcast",
      icon: DashboardEmailIcon,
    },
    {
      title: "Support",
      url: "/dashboard/admin/support",
      icon: DashboardSupportIcon,
    },
    {
      title: "Team",
      url: "/dashboard/admin/team",
      icon: Users2Icon,
    },
    {
      title: "Projects",
      url: "/dashboard/admin/projects",
      icon: LayoutGrid,
    },
    {
      title: "System Settings",
      url: "/dashboard/admin/system-settings",
      icon: DashboardSettingsIcon,
    },
  ],
  studentNavMain: [
    {
      title: "Dashboard",
      url: "/dashboard/student",
      icon: IconDashboard,
    },
    {
      title: "Community",
      url: "/dashboard/student/community",
      icon: IconUsersGroup,
    },
    {
      title: "Certificates",
      url: "/dashboard/student/certificates",
      icon: IconCertificate,
    },
  ],
  instructorNavMain: [
    {
      title: "Dashboard",
      url: "/dashboard/instructor",
      icon: DashboardWindowIcon,
    },
    {
      title: "Courses",
      url: "/dashboard/instructor/courses",
      icon: DashboardCoursesIcon,
    },
    {
      title: "Feed",
      url: "/dashboard/instructor/feed",
      icon: LayoutGrid,
    },
    {
      title: "Workshops",
      url: "/dashboard/instructor/workshop",
      icon: IconVideo,
    },
    {
      title: "Assignments",
      url: "/dashboard/instructor/assignments",
      icon: DashboardFileTextIcon,
    },
    {
      title: "Quiz",
      url: "/dashboard/instructor/quiz",
      icon: DashboardBulbIcon,
    },
    // {
    //   title: "Assessments",
    //   url: "/dashboard/instructor/assessments",
    //   icon: DashboardAssesmentIcon,
    // },
    {
      title: "Students Management",
      url: "/dashboard/instructor/students-management",
      icon: DashboardUsersIcon,
    },
    {
      title: "Analytics & Reporting",
      url: "/dashboard/instructor/analytics-reporting",
      icon: DashboardChartIcon,
    },
    {
      title: "Communication",
      url: "/dashboard/instructor/communication",
      icon: DashboardSpeechBubbleIcon,
    },
    {
      title: "Rooms",
      url: "/dashboard/instructor/communication/messages",
      icon: MessageCircleMore,
    },
    {
      title: "Monetization",
      url: "/dashboard/instructor/monetization",
      icon: DashboardDollarIcon,
    },
    {
      title: "Notifications",
      url: "/dashboard/instructor/notifications",
      icon: Bell,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/dashboard/help",
      icon: IconHelp,
    },
    // {
    //   title: "Search",
    //   url: "/dashboard/search",
    //   icon: IconSearch,
    // },
  ],
};

export const heroFeatures = [
  {
    id: "1",
    title: "Build a Future-Proof Career in Tech",
    features: [
      "Build a future-proof skillset",
      "Break into high-paying roles, and",
      "Thrive in high-growth industries",
    ],
    image: "/assets/mission-1.png",
    persons: [
      {
        name: "Jane Dow",
        title: "CTO, Ayonaire",
        image: "/assets/mission-2.png",
      },
      {
        name: "John Doe",
        title: "CEO, Ayonaire",
        image: "/assets/mission-3.png",
      },
      {
        name: "Bob Johnson",
        title: "COO, Ayonaire",
        image: "/assets/mission-4.png",
      },
    ],
  },
  {
    id: "2",
    title: "Gain the In-Demand Skills to Get Hired",
    features: [
      "Gain experience with real-world projects",
      "Build a portfolio employers trust, and",
      "Unlock internships and career pathways",
    ],
    image: "/assets/smiling-lady.png",
    persons: [
      {
        name: "Jane Dow",
        title: "CTO, Ayonaire",
        image: "/assets/persons/jane-doe.png",
      },
      {
        name: "John Doe",
        title: "CEO, Ayonaire",
        image: "/assets/persons/john-doe.png",
      },
      {
        name: "Bob Johnson",
        title: "COO, Ayonaire",
        image: "/assets/persons/bob.png",
      },
    ],
  },
  {
    id: "3",
    title: "Launch a Global Career in AI and Data",
    features: [
      "Go from zero to pro in AI and Data",
      "Work on projects that prove your skills, and",
      "Earn globally recognized certifications",
    ],
    image: "/assets/student-learning.png",
  },
];

export const courseHeroFeatures = [
  {
    id: "1",
    title: "Launch Your AI Career From Scratch",
    features: [
      "Beginners Ready To Break Into Tech",
      "Career Switchers Seeking A Future-Proof Skill, And",
      "Students Aiming For Competitive AI Roles",
    ],
    image: "/assets/mission-1.png",
    persons: [
      {
        name: "Jane Dow",
        title: "CTO, Ayonaire",
        image: "/assets/mission-2.png",
      },
      {
        name: "John Doe",
        title: "CEO, Ayonaire",
        image: "/assets/mission-3.png",
      },
      {
        name: "Bob Johnson",
        title: "COO, Ayonaire",
        image: "/assets/mission-4.png",
      },
    ],
  },
  {
    id: "2",
    title: "Gain the In-Demand Skills to Get Hired",
    features: [
      "Gain experience with real-world projects",
      "Build a portfolio employers trust, and",
      "Unlock internships and career pathways",
    ],
    image: "/assets/smiling-lady.png",
    persons: [
      {
        name: "Jane Dow",
        title: "CTO, Ayonaire",
        image: "/assets/persons/jane-doe.png",
      },
      {
        name: "John Doe",
        title: "CEO, Ayonaire",
        image: "/assets/persons/john-doe.png",
      },
      {
        name: "Bob Johnson",
        title: "COO, Ayonaire",
        image: "/assets/persons/bob.png",
      },
    ],
  },
  {
    id: "3",
    title: "Launch a Global Career in AI and Data",
    features: [
      "Go from zero to pro in AI and Data",
      "Work on projects that prove your skills, and",
      "Earn globally recognized certifications",
    ],
    image: "/assets/student-learning.png",
  },
];

export const featuredBrands = [
  {
    name: "Accenture",
    img: "/assets/brands/accenture.png",
  },
  {
    name: "CGI",
    img: "/assets/brands/cgi.png",
  },
  {
    name: "Deloitte",
    img: "/assets/brands/deloitte.png",
  },
  {
    name: "IBM",
    img: "/assets/brands/ibm.png",
  },
  {
    name: "Nvidia",
    img: "/assets/brands/nvidia.png",
  },
  {
    name: "Google",
    img: "/assets/brands/google.png",
  },
  {
    name: "Microsoft",
    img: "/assets/brands/microsoft.png",
  },
  {
    name: "Stripe",
    img: "/assets/brands/stripe.png",
  },
  {
    name: "Meta",
    img: "/assets/brands/meta.png",
  },
  {
    name: "McKinsey",
    img: "/assets/brands/McKingsey.png",
  },
  {
    name: "Plantir",
    img: "/assets/brands/plantir.png",
  },
  {
    name: "Sales Force",
    img: "/assets/brands/sales-force.png",
  },
  {
    name: "Spotify",
    img: "/assets/brands/spotify.png",
  },
  {
    name: "TD Bank",
    img: "/assets/brands/td-bank.png",
  },
  {
    name: "Wise",
    img: "/assets/brands/wise.png",
  },
];

export const featuredLogos = [
  "/assets/brands/featured/image-9.png",
  "/assets/brands/featured/image-4.png",
  "/assets/brands/featured/image-6.png",
  "/assets/brands/featured/image-7.png",
  "/assets/brands/featured/image-5.png",
];

export const reviewFeatures = [
  {
    icon: "/assets/icons/feature-badge.svg",
    title: "65%",
    description: "Hired After Internship",
  },
  {
    icon: "/assets/icons/feature-tick.svg",
    title: "89%",
    description: "Completion Rate",
  },
  {
    icon: "/assets/icons/feature-book.svg",
    title: "94%",
    description: "Learner Satisfaction",
  },
  {
    icon: "/assets/icons/feature-star.svg",
    title: "4.8/5",
    description: "Learner Rating",
  },
];

export const ayonaireWhyChooseUs = [
  {
    title: "Gain Job-Ready Experience",
    description:
      "Every student gets placed into real projects and internships. You don’t just graduate with certificates — you graduate with work experience that employers trust.",
    icon: "/assets/icons/certification.svg",
  },
  {
    title: "Get Expert Guidance to Get Hired",
    description:
      "Learn directly from experienced mentors who guide you through career paths, interview preparation, and job-search strategies that actually work.",
    icon: "/assets/icons/guidance.svg",
  },
  {
    title: "Earn Certifications Employers Trust",
    description:
      "Receive recognized certifications that validate your skills and make your profile credible and attractive to recruiters worldwide.",
    icon: "/assets/icons/certification.svg",
  },
  {
    title: "Build a Job-Winning Portfolio",
    description:
      "Create a strong, professional portfolio filled with practical projects that clearly demonstrate your skills and set you apart from other candidates.",
    icon: "/assets/icons/certification.svg",
  },
  {
    title: "Launch YourGlobal Career",
    description:
      "Whether it’s remote jobs, international roles, or visa guidance, we connect you beyond borders. Our mission is simple: prepare Africans for global opportunities while solving real world challenges.",
    icon: "/assets/icons/career.svg",
  },
  {
    title: "Master the Skills for Career Growth",
    description:
      "Develop in-demand, future-proof skills that keep you relevant, competitive, and ready to advance as technology and industries evolve.",
    icon: "/assets/icons/certification.svg",
  },
];

export const includedFeatures = [
  {
    title: "ATS Resume Builder",
    description: "Create A Resume That Passes Applicant Tracking Systems.",
    icon: "/assets/icons/file-stroke.svg",
  },
  {
    title: "LinkedIn Optimizer",
    description: "Get AI Suggestions To Strengthen Your Profile.",
    icon: "/assets/icons/linkedin.svg",
  },
  {
    title: "Resume Building & Review",
    description: "Professional Feedback To Highlight Your Strengths.",
    icon: "/assets/icons/file-search.svg",
  },
  {
    title: "Portfolio Website",
    description: "Automatically Showcase Your Best Projects.",
    icon: "/assets/icons/world.svg",
  },
  {
    title: "Interview Preparation",
    description: "Structured Guidance And Confidence Training.",
    icon: "/assets/icons/streamline.svg",
  },
  {
    title: "Mock Interviews",
    description: "Available For Select Bootcamps.",
    icon: "/assets/icons/mail-voice.svg",
  },
  {
    title: "Virtual Internship",
    description: "Gain Practical Experience Before Job Hunting.",
    icon: "/assets/icons/job-search.svg",
  },
];

export const newFeatures = [
  {
    title: "AI-Powered Resume Tools",
    icon: "/assets/icons/ai-algo.svg",
  },
  {
    title: "AI Automation Module",
    icon: "/assets/icons/smartthings.svg",
  },
  {
    title: "Live Expert Webinars",
    icon: "/assets/icons/podcast-webinar.svg",
  },
  {
    title: "Upgraded Assistance Portal",
    icon: "/assets/icons/support-technology.svg",
  },
  {
    title: "Enhanced Portfolio Site",
    icon: "/assets/icons/portfolio-bag.svg",
  },
  {
    title: "Job Playbooks",
    icon: "/assets/icons/list-with-possible-workers.svg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "James Lee",
    position: "Student",
    rating: 5.0,
    testimonial:
      "The AI course was amazing! Learning from industry leaders gave me an edge, and now I'm working on groundbreaking projects in the tech field as an expert",
    media: "/assets/videos/learning-tips-demo.mp4",
    poster: "/assets/learning-tips.png",
  },
  {
    id: 2,
    name: "Roberto Carlos",
    position: "Student",
    rating: 5.0,
    testimonial:
      "I was a beginner, but Sparkly's step-by-step courses made everything simple and easy to grasp. Now, I confidently freelance as a digital marketing expert",
    media: "/assets/videos/learning-tips-demo.mp4",
    poster: "/assets/frame-video-1.png",
  },
  {
    id: 3,
    name: "Sarah Miller",
    position: "Student",
    rating: 5.0,
    testimonial:
      "The bootcamp completely transformed my career. Within 3 months of graduation, I landed my dream job at a top tech company with a 40% salary increase",
    media: "/assets/videos/learning-tips-demo.mp4",
    poster: "/assets/learning-tips.png",
  },
  {
    id: 4,
    name: "David Chen",
    position: "Student",
    rating: 4.8,
    testimonial:
      "The hands-on projects and real-world applications prepared me for actual industry challenges. The mentorship was invaluable throughout my learning journey",
    media: "/assets/videos/learning-tips-demo.mp4",
    poster: "/assets/frame-video-1.png",
  },
  {
    id: 5,
    name: "Emily Thompson",
    position: "Student",
    rating: 5.0,
    testimonial:
      "From zero coding experience to a full-stack developer in 6 months. The curriculum is well-structured and the community support is incredible",
    media: "/assets/videos/learning-tips-demo.mp4",
    poster: "/assets/frame-video-1.png",
  },
];

export const testimonials2 = [
  {
    id: 1,
    name: "Simeon A.",
    username: "@Simeon A.",
    address: "Port Harcourt",
    testimonial:
      "Before joining Ayonaire, I had never written a line of Python. Now I've built dashboards, written SQL queries, and landed my first freelance data analytics gig.",
    rating: 5,
    image: "/assets/persons/student-1.png",
  },
  {
    id: 2,
    name: "Esther K.",
    username: "@Esther K.",
    address: "Nairobi",
    testimonial:
      "This course didn't just teach me tools—it taught me how to think like a data professional. The live projects and career support were game changers.",
    rating: 5,
    image: "/assets/persons/student-2.png",
  },
  {
    id: 3,
    name: "Chinedu M.",
    username: "@Chinedu M.",
    address: "Enugu",
    testimonial:
      "I was skeptical about online learning, but this program felt like a real classroom. I got feedback, community, and results.",
    rating: 5,
    image: "/assets/persons/student-3.png",
  },
  {
    id: 4,
    name: "Rebecca T.",
    username: "@Rebecca T.",
    address: "Accra",
    testimonial:
      "Ayonaire helped me connect the dots—from data cleaning to storytelling. The instructors really cared, and the mentorship was top-notch.",
    rating: 5,
    image: "/assets/persons/student-1.png",
  },
  {
    id: 5,
    name: "Michael O.",
    username: "@Michael O.",
    address: "Abuja",
    testimonial:
      "The job prep module was exactly what I needed. My resume got shortlisted within two weeks of finishing the course, and I just landed a remote role!",
    rating: 5,
    image: "/assets/persons/student-2.png",
  },
  {
    id: 6,
    name: "Fatima Z.",
    username: "@Fatima Z.",
    address: "Dakar",
    testimonial:
      "The portfolio I built here gave me the confidence to start pitching clients. I'm now consulting for a fintech company—and it all started with Ayonaire.",
    rating: 5,
    image: "/assets/persons/student-3.png",
  },
  {
    id: 7,
    name: "Blessing E.",
    username: "@Blessing E.",
    address: "Lagos",
    testimonial:
      "I had tried other courses before, but Ayonaire gave me structure, mentorship, and a real sense of direction. It's the first time I felt seen and supported in my tech journey.",
    rating: 5,
    image: "/assets/persons/student-1.png",
  },
  {
    id: 8,
    name: "Tunde A.",
    username: "@Tunde A.",
    address: "Kigali",
    testimonial:
      "The certification helped me stand out, but it was the portfolio and project work that got me hired. Ayonaire's model really works if you follow through.",
    rating: 5,
    image: "/assets/persons/student-2.png",
  },
];

export const ourProcess = [
  {
    title: "Live Instructor-Led Classes",
    icon: "/assets/icons/live-cam.svg",
    description:
      "Join expert-led virtual classes where you’ll learn through real-world use cases, performance tasks, and hands-on activities.",
    iconPosition: "top" as const,
  },
  {
    title: "Real-World Projects & Internship",
    icon: "/assets/icons/files.svg",
    description:
      "Work on 5 capstone projects that reflect real industry problems which build your resume and portfolio.",
    iconPosition: "bottom" as const,
  },
  {
    title: "Mentorship & Feedback",
    icon: "/assets/icons/comments.svg",
    description:
      "Get weekly check-ins, 1-on-1 sessions, and feedback on your projects. You'll never feel stuck or alone.",
    iconPosition: "top" as const,
  },
  {
    title: "Leadership & Soft Skills Mastery",
    icon: "/assets/icons/highrarchy.svg",
    description:
      "Develop essential leadership, communication, and collaboration skills to excel in any team environment.",
    iconPosition: "bottom" as const,
  },
];

export const homeFaqs = [
  {
    title: "Who is Ayonaire for?",
    description:
      "Ayonaire is designed for beginners, career switchers, and working professionals who want to learn in-demand skills through structured training, hands-on practice, and expert guidance. Most bootcamps do not require prior experience.",
  },
  {
    title: "What bootcamps do you offer?",
    description:
      "We offer industry-relevant bootcamps across technology, digital skills, business, and emerging fields, including software development, UI/UX design, data, product, and other professional tracks.",
  },
  {
    title: "How are classes delivered?",
    description:
      "Classes are delivered through live instructor-led virtual sessions, recorded lessons, hands-on assignments, real-world projects, and continuous instructor support to ensure effective learning.",
  },
  {
    title: "Do I get a certificate after the bootcamp?",
    description:
      "Yes. After successfully completing the bootcamp and meeting all assessment requirements, you’ll receive a verified certificate that confirms your skills and can be shared with employers or added to your professional profile.",
  },
  {
    title: "Are the bootcamps beginner-friendly?",
    description:
      "Yes. Our bootcamps are structured to support beginners with step-by-step learning paths, foundational lessons, and mentorship, while still challenging intermediate learners to grow.",
  },
  {
    title: "How long do the bootcamps last?",
    description:
      "Bootcamp durations vary by program, typically ranging from a few weeks to several months, depending on the depth of the skill and the learning track you choose.",
  },
  {
    title: "Will I work on real-world projects?",
    description:
      "Absolutely. Each bootcamp includes practical projects and performance-based tasks designed to simulate real-world scenarios and help you build a strong, job-ready portfolio.",
  },
  {
    title: "Do you offer mentorship or instructor support?",
    description:
      "Yes. Learners receive ongoing support from experienced instructors and mentors through live sessions, feedback on assignments, and dedicated communication channels.",
  },
  {
    title: "Can I learn at my own pace?",
    description:
      "While live sessions follow a structured schedule, recorded lessons and flexible assignments allow you to review materials and practice at your own pace.",
  },
  {
    title: "Is Ayonaire suitable for working professionals?",
    description:
      "Yes. Our programs are designed with flexibility in mind, making them suitable for students and working professionals balancing learning with other commitments.",
  },
  {
    title: "How do I enroll in a bootcamp?",
    description:
      "You can enroll by selecting your preferred bootcamp on our website, completing the registration process, and following the onboarding steps provided after sign-up.",
  },
  {
    title: "Are the certificates recognized?",
    description:
      "Our certificates are industry-aligned and skills-based, designed to demonstrate competency and practical experience. Recognition may vary by employer, but they add strong value to your professional profile.",
  },
];

export const footerData = {
  topCourses: {
    title: "Top Courses",
    links: [
      { label: "AI Engineering", link: "/courses/ai-engineering" },
      { label: "Agentic Engineering", link: "/courses/agentic-engineering" },
      {
        label: "Gen in Data Analytics",
        link: "/courses/gen-ai-data-analytics",
      },
      { label: "Gen in Data Science", link: "/courses/gen-ai-data-science" },
      {
        label: "Gen in Business Analysis",
        link: "/courses/gen-ai-business-analysis",
      },
      { label: "UI/UX Design", link: "/courses/ui-ux-design" },
      { label: "Tech Sales Bootcamp", link: "/courses/tech-sales" },
      { label: "HR Analytics Bootcamp", link: "/courses/hr-analytics" },
    ],
  },

  company: {
    title: "Company",
    links: [
      { label: "About us", link: "/about" },
      { label: "Our Story", link: "/our-story" },
      { label: "Learning Champions", link: "/learning-champions" },
      { label: "Our Partners", link: "/partners" },
      { label: "Become a Trainer", link: "/become-an-instructor" },
      { label: "Alumni", link: "/alumni" },
      { label: "Careers", link: "/careers" },
      { label: "Business Network", link: "/business-network" },
      { label: "Podcast", link: "/podcast" },
    ],
  },

  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Courses", link: "/courses" },
      { label: "Blogs", link: "/blog" },
      { label: "Data Challenges", link: "/data-challenges" },
      { label: "Hire Talent", link: "/hire-talent" },
      { label: "Contact Us", link: "/contact" },
    ],
  },

  schools: {
    title: "Schools",
    links: [
      { label: "AI School", link: "/schools/ai" },
      { label: "Data School", link: "/schools/data" },
      { label: "Product School", link: "/schools/product" },
      { label: "Cybersecurity School", link: "/schools/cybersecurity" },
      {
        label: "Software Engineering School",
        link: "/schools/software-engineering",
      },
      { label: "Cloud & DevOps School", link: "/schools/cloud-devops" },
      { label: "Marketing School", link: "/schools/marketing" },
    ],
  },

  contact: {
    title: "Contact",
    emails: [
      { label: "info@ayonaire.com", link: "mailto:info@ayonaire.com" },
      { label: "support@ayonaire.com", link: "mailto:support@ayonaire.com" },
    ],
    phones: [
      { label: "+234 9067835701", link: "tel:+2349067835701" },
      { label: "+234 9067835701", link: "tel:+2349067835701" },
    ],
  },

  socials: {
    links: [
      { label: "X", link: "https://x.com/ayonaire", icon: "x" },
      {
        label: "Facebook",
        link: "https://facebook.com/ayonaire",
        icon: "facebook",
      },
      {
        label: "Instagram",
        link: "https://instagram.com/ayonaire",
        icon: "instagram",
      },
      {
        label: "LinkedIn",
        link: "https://linkedin.com/company/ayonaire",
        icon: "linkedin",
      },
    ],
  },
};

// Optin Page Data:
export const communityOptinFeatures = [
  {
    title: "Basic Data",
    items: [
      "You're trying to get into tech — or you're already in tech and want to grow",
      "You want clear answers, guidance, and access to a real high-value network",
      "You want practical tech training that actually improves your career",
      "You want scholarships, internship openings, and real tech job opportunities",
    ],
  },
  {
    title: "More Data",
    items: [
      "Live support, Q&A, and guidance as you grow your tech skills",
      "Weekly tips, resources, and learning materials to help you stay ahead",
      "Access to opportunities — scholarships, internships, and job alerts",
      "A supportive community of people serious about upgrading their career",
      "A space where you can ask anything and get real help",
    ],
  },
];

// School Of AI Data
export const WhySchoolOfAI = [
  "Train a new wave of AI professionals ready to fill global talent shortages.",
  "Equip learners with practical skills in machine learning, NLP, computer vision, and generative AI.",
  "Provide African students with a clear path to remote jobs, freelance opportunities, and startup innovation.",
  "Bridge the digital skills gap with real-world tools like Python, TensorFlow, OpenAI, and LangChain.",
  "Position graduates to earn globally, solve real problems, and lead in the age of intelligent systems.",
];

export const impactData = [
  {
    title: "1,200+",
    description: "Students  trained across 7 countries",
  },
  {
    title: "91%",
    description: "Graduate rate within 6 months of enrollment",
  },
  {
    title: "65%",
    description: "of graduate land remote tech jobs within 6 months",
  },
  {
    title: "40%",
    description: "of learners are career-switchers now thriving in tech",
  },
];

export const whyAISkills = [
  "Companies are racing to hire AI-literate professionals",
  "The global AI market is expected to grow to $1.81 trillion by 2030 (Statista, 2024).",
  "Top tech companies are increasing AI hiring by 25-40% annually.",
  "There is a shortage of skilled AI professionals, making these roles highly sought after.",
];

export const marketData = [
  {
    title: "Global Demand For AI Talents",
    items: [
      {
        icon: Users2,
        title: "Over 133M",
        description: "New AI-related roles expected globally by 2030",
        source: "World Economic Forum",
      },
      {
        icon: Trophy,
        title: "$407 Billion",
        description: "Projected AI industry valuation by 2027",
        source: "Markets & Markets",
      },
      {
        icon: TrendingUp,
        title: "+270% Growth",
        description: "AI adoption has grown 270% in the past 4 years",
        source: "Gartner",
      },
    ],
  },
  {
    title: "Earning Potential in AI",
    items: [
      {
        title: "$125K–$180K/year",
        description: "Average salary for AI Engineers in the U.S.",
      },
      {
        title: "$1,000–$5,000/month",
        description:
          "Remote opportunities available to skilled African professionals",
      },
      {
        title: "$200K+",
        description:
          "Top-tier experts earn globally, especially in Europe & Silicon Valley",
      },
    ],
  },
];

export const aiIndustryTestimony = [
  {
    title: "AI talent is now the #1 priority for top tech companies.",
    source: "Forbes",
  },
  {
    title: "Generative AI is redefining how we work, learn, and live.",
    source: "McKinsey",
  },
  {
    title: "AI talent is now the #1 priority for top tech companies.",
    source: "LinkedIn Talent Report",
  },
];

// School Of Data Constants
export const WhySchoolOfData = [
  "Train the next generation of data professionals to meet the growing global demand for analytics expertise.",
  "Equip learners with practical skills in data analysis, visualization, SQL, Python, and business intelligence tools.",
  "Provide African students with pathways to remote data jobs, consulting opportunities, and data-driven startups.",
  "Bridge the analytics skills gap with industry-standard tools like Power BI, Tableau, Excel, and Python.",
  "Position graduates to make data-driven decisions, optimize business processes, and lead digital transformation.",
];

export const dataImpactData = [
  {
    title: "2,500+",
    description: "Data professionals trained across 10 countries",
  },
  {
    title: "88%",
    description: "Graduate rate within 6 months of enrollment",
  },
  {
    title: "70%",
    description: "of graduates land data roles within 6 months",
  },
  {
    title: "45%",
    description: "of learners are career-switchers now thriving in data",
  },
];

export const whyDataSkills = [
  "Companies are investing heavily in data-driven decision making",
  "The global big data market is expected to reach $103 billion by 2027 (Statista, 2024).",
  "Data analyst roles have grown by 35% annually across industries.",
  "There is a critical shortage of skilled data professionals, making these roles highly sought after.",
];

export const dataMarketData = [
  {
    title: "Global Demand For Data Talents",
    items: [
      {
        icon: Users2,
        title: "Over 11.5M",
        description: "New data-related roles expected globally by 2026",
        source: "U.S. Bureau of Labor Statistics",
      },
      {
        icon: Trophy,
        title: "$103 Billion",
        description: "Projected big data market valuation by 2027",
        source: "Statista",
      },
      {
        icon: TrendingUp,
        title: "+36% Growth",
        description: "Data analyst job growth projected over next decade",
        source: "Bureau of Labor Statistics",
      },
    ],
  },
  {
    title: "Earning Potential in Data",
    items: [
      {
        title: "$75K–$120K/year",
        description: "Average salary for Data Analysts in the U.S.",
      },
      {
        title: "$800–$3,500/month",
        description:
          "Remote opportunities available to skilled African professionals",
      },
      {
        title: "$150K+",
        description:
          "Senior data scientists earn globally, especially in tech hubs",
      },
    ],
  },
];

export const dataIndustryTestimony = [
  {
    title: "Data is the new oil of the digital economy.",
    source: "The Economist",
  },
  {
    title: "Every company is now a data company.",
    source: "Forbes",
  },
  {
    title: "Data literacy is a core skill for the 21st century workforce.",
    source: "Harvard Business Review",
  },
];

// School Of Software Engineering Constants
export const WhySchoolOfEngineering = [
  "Train the next generation of software engineers to build scalable, production-ready applications.",
  "Equip learners with full-stack development skills using modern frameworks like React, Node.js, and Python.",
  "Provide African students with pathways to remote developer jobs, freelance opportunities, and tech startups.",
  "Bridge the engineering skills gap with industry-standard tools like Git, Docker, AWS, and CI/CD pipelines.",
  "Position graduates to build innovative products, contribute to open source, and lead engineering teams globally.",
];

export const engineeringImpactData = [
  {
    title: "3,000+",
    description: "Software engineers trained across 12 countries",
  },
  {
    title: "92%",
    description: "Graduate rate within 6 months of enrollment",
  },
  {
    title: "75%",
    description: "of graduates land developer roles within 6 months",
  },
  {
    title: "50%",
    description: "of learners are career-switchers now thriving as developers",
  },
];

export const whyEngineeringSkills = [
  "Software development is the backbone of every digital product and service",
  "The global software development market is projected to reach $1.4 trillion by 2027 (Statista, 2024).",
  "Developer job openings continue to outpace qualified candidates by 3:1.",
  "There is a critical shortage of skilled developers, making these roles highly sought after.",
];

export const engineeringMarketData = [
  {
    title: "Global Demand For Software Engineers",
    items: [
      {
        icon: Users2,
        title: "Over 28.7M",
        description: "Software developers worldwide by 2024",
        source: "Statista",
      },
      {
        icon: Trophy,
        title: "$1.4 Trillion",
        description: "Projected software market valuation by 2027",
        source: "Grand View Research",
      },
      {
        icon: TrendingUp,
        title: "+25% Growth",
        description: "Software developer employment growth projected",
        source: "Bureau of Labor Statistics",
      },
    ],
  },
  {
    title: "Earning Potential in Software Engineering",
    items: [
      {
        title: "$90K–$150K/year",
        description: "Average salary for Software Engineers in the U.S.",
      },
      {
        title: "$1,500–$5,000/month",
        description:
          "Remote opportunities available to skilled African developers",
      },
      {
        title: "$200K+",
        description: "Senior engineers at top tech companies like FAANG",
      },
    ],
  },
];

export const engineeringIndustryTestimony = [
  {
    title: "Software is eating the world.",
    source: "Marc Andreessen, a16z",
  },
  {
    title: "Every company is becoming a software company.",
    source: "Satya Nadella, Microsoft",
  },
  {
    title: "The best way to predict the future is to build it.",
    source: "Alan Kay, Computer Scientist",
  },
];

// School of Cybersecurity Constants
export const WhySchoolOfCybersecurity = [
  "Train the next generation of cybersecurity professionals to protect organizations from evolving digital threats.",
  "Equip learners with practical skills in ethical hacking, penetration testing, network security, and incident response.",
  "Provide African students with pathways to high-paying security roles, remote positions, and consulting opportunities.",
  "Bridge the cybersecurity skills gap with industry-standard tools like Kali Linux, Wireshark, Burp Suite, and Metasploit.",
  "Position graduates to defend critical infrastructure, protect data, and lead security operations globally.",
];

export const cybersecurityImpactData = [
  {
    title: "1,800+",
    description: "Cybersecurity professionals trained across 8 countries",
  },
  {
    title: "94%",
    description: "Graduate rate within 6 months of enrollment",
  },
  {
    title: "80%",
    description: "of graduates land security roles within 6 months",
  },
  {
    title: "55%",
    description: "of learners are career-switchers now thriving in security",
  },
];

export const whyCybersecuritySkills = [
  "Cyberattacks are increasing exponentially, creating urgent demand for security professionals",
  "The global cybersecurity market is expected to reach $376 billion by 2029 (Fortune Business Insights, 2024).",
  "There are 3.5 million unfilled cybersecurity jobs worldwide.",
  "Cybersecurity professionals are among the highest-paid in the tech industry.",
];

export const cybersecurityMarketData = [
  {
    title: "Global Demand For Cybersecurity Talents",
    items: [
      {
        icon: Users2,
        title: "3.5 Million",
        description: "Unfilled cybersecurity positions worldwide",
        source: "Cybersecurity Ventures",
      },
      {
        icon: Trophy,
        title: "$376 Billion",
        description: "Projected cybersecurity market valuation by 2029",
        source: "Fortune Business Insights",
      },
      {
        icon: TrendingUp,
        title: "+32% Growth",
        description: "Information security analyst job growth projected",
        source: "Bureau of Labor Statistics",
      },
    ],
  },
  {
    title: "Earning Potential in Cybersecurity",
    items: [
      {
        title: "$100K–$180K/year",
        description: "Average salary for Cybersecurity Engineers in the U.S.",
      },
      {
        title: "$2,000–$6,000/month",
        description:
          "Remote opportunities available to skilled African professionals",
      },
      {
        title: "$250K+",
        description:
          "Chief Information Security Officers (CISOs) at top organizations",
      },
    ],
  },
];

export const cybersecurityIndustryTestimony = [
  {
    title: "Cybersecurity is not just an IT problem, it's a business problem.",
    source: "IBM Security",
  },
  {
    title: "The only truly secure system is one that is powered off.",
    source: "Gene Spafford, Purdue University",
  },
  {
    title: "Security is a process, not a product.",
    source: "Bruce Schneier, Security Expert",
  },
];

// School of Product Constants
export const WhySchoolOfProduct = [
  "Train the next generation of product professionals to build products that users love and businesses need.",
  "Equip learners with practical skills in product strategy, user research, roadmapping, and agile methodologies.",
  "Provide African students with pathways to product management roles at startups, tech giants, and innovative companies.",
  "Bridge the product skills gap with industry-standard tools like Jira, Figma, Mixpanel, and product analytics platforms.",
  "Position graduates to lead cross-functional teams, drive product vision, and create market-leading solutions.",
];

export const productImpactData = [
  {
    title: "2,000+",
    description: "Product professionals trained across 9 countries",
  },
  {
    title: "90%",
    description: "Graduate rate within 6 months of enrollment",
  },
  {
    title: "72%",
    description: "of graduates land product roles within 6 months",
  },
  {
    title: "60%",
    description: "of learners are career-switchers now thriving in product",
  },
];

export const whyProductSkills = [
  "Product management is the most sought-after role in tech companies globally",
  "The global product management software market is expected to reach $25 billion by 2028 (MarketsandMarkets, 2024).",
  "Product managers earn 20-40% higher salaries than average tech roles.",
  "There is a critical shortage of skilled product professionals, making these roles highly competitive.",
];

export const productMarketData = [
  {
    title: "Global Demand For Product Professionals",
    items: [
      {
        icon: Users2,
        title: "Over 500K",
        description: "Product management job openings globally",
        source: "LinkedIn Jobs",
      },
      {
        icon: Trophy,
        title: "$25 Billion",
        description: "Projected product management tools market by 2028",
        source: "MarketsandMarkets",
      },
      {
        icon: TrendingUp,
        title: "+22% Growth",
        description: "Product manager job growth projected over next decade",
        source: "Bureau of Labor Statistics",
      },
    ],
  },
  {
    title: "Earning Potential in Product Management",
    items: [
      {
        title: "$120K–$180K/year",
        description: "Average salary for Product Managers in the U.S.",
      },
      {
        title: "$2,500–$7,000/month",
        description:
          "Remote opportunities available to skilled African professionals",
      },
      {
        title: "$300K+",
        description: "VP of Product and CPOs at top tech companies",
      },
    ],
  },
];

export const productIndustryTestimony = [
  {
    title:
      "A great product manager has the brain of an engineer, the heart of a designer, and the speech of a diplomat.",
    source: "Deep Nishar, SoftBank",
  },
  {
    title:
      "Product management is about making decisions with incomplete information.",
    source: "Marty Cagan, Silicon Valley Product Group",
  },
  {
    title:
      "The best product managers are those who deeply understand business, tech, and user experience.",
    source: "Ken Norton, Google Ventures",
  },
];

// School of Cloud & DevOps Constants
export const WhySchoolOfCloudDevOps = [
  "Train the next generation of cloud and DevOps professionals to build, deploy, and manage modern applications at scale.",
  "Equip learners with practical skills in cloud infrastructure, CI/CD pipelines, automation, and DevOps best practices.",
  "Provide African students with pathways to cloud and DevOps roles at startups, tech giants, and innovative companies.",
  "Bridge the cloud and DevOps skills gap with industry-standard tools like AWS, Azure, GCP, Docker, Kubernetes, and Terraform.",
  "Position graduates to design scalable cloud architectures, implement DevOps workflows, and ensure secure, reliable application delivery.",
];

export const cloudDevOpsImpactData = [
  {
    title: "2,000+",
    description: "Cloud and DevOps professionals trained across 9 countries",
  },
  {
    title: "90%",
    description: "Graduate rate within 6 months of enrollment",
  },
  {
    title: "72%",
    description: "of graduates land cloud or DevOps roles within 6 months",
  },
  {
    title: "60%",
    description:
      "of learners are career-switchers now thriving in cloud/DevOps",
  },
];

export const whyCloudDevOpsSkills = [
  "Cloud and DevOps are among the most in-demand tech skills globally",
  "The global DevOps market is projected to reach $25 billion by 2028 (MarketsandMarkets, 2024).",
  "Cloud and DevOps professionals earn 20-40% higher salaries than average tech roles.",
  "There is a critical shortage of skilled cloud and DevOps professionals, making these roles highly competitive.",
];

export const cloudDevOpsMarketData = [
  {
    title: "Global Demand For Cloud & DevOps Professionals",
    items: [
      {
        icon: Users2,
        title: "Over 500K",
        description: "Cloud and DevOps job openings globally",
        source: "LinkedIn Jobs",
      },
      {
        icon: Trophy,
        title: "$25 Billion",
        description: "Projected DevOps market by 2028",
        source: "MarketsandMarkets",
      },
      {
        icon: TrendingUp,
        title: "+22% Growth",
        description: "Cloud and DevOps job growth projected over next decade",
        source: "Bureau of Labor Statistics",
      },
    ],
  },
  {
    title: "Earning Potential in Cloud & DevOps",
    items: [
      {
        title: "$120K–$180K/year",
        description:
          "Average salary for Cloud and DevOps Engineers in the U.S.",
      },
      {
        title: "$2,500–$7,000/month",
        description:
          "Remote opportunities available to skilled African professionals",
      },
      {
        title: "$300K+",
        description: "VP of Cloud and DevOps at top tech companies",
      },
    ],
  },
];

export const cloudDevOpsIndustryTestimony = [
  {
    title:
      "Cloud and DevOps are not just tools, they are a mindset and a culture.",
    source: "Gene Kim, The Phoenix Project",
  },
  {
    title:
      "The future of software development is cloud-native and DevOps-driven.",
    source: "AWS",
  },
  {
    title:
      "DevOps is about breaking down silos between development and operations teams.",
    source: "Google Cloud",
  },
];

// School of Marketing Constants
export const WhySchoolOfMarketing = [
  "Train the next generation of digital marketers to drive growth using AI, SEO, and data-driven strategies.",
  "Equip learners with practical skills in AI marketing, search marketing, social media, and performance marketing.",
  "Provide African students with pathways to marketing roles at agencies, startups, and global brands.",
  "Bridge the digital marketing skills gap with industry-standard tools like Google Ads, Meta Ads, HubSpot, and AI marketing tools.",
  "Position graduates to lead marketing campaigns, optimize conversions, and build brands that dominate their markets.",
];

export const marketingImpactData = [
  {
    title: "1,500+",
    description: "Marketing professionals trained across 8 countries",
  },
  {
    title: "89%",
    description: "Graduate rate within 6 months of enrollment",
  },
  {
    title: "68%",
    description: "of graduates land marketing roles within 6 months",
  },
  {
    title: "52%",
    description: "of learners are career-switchers now thriving in marketing",
  },
];

export const whyMarketingSkills = [
  "Digital marketing is essential for every business in the modern economy",
  "The global digital marketing market is expected to reach $1.3 trillion by 2033 (Research and Markets, 2024).",
  "AI-powered marketing is growing 30% annually as companies automate campaigns.",
  "There is a critical shortage of skilled digital marketers, making these roles highly sought after.",
];

export const marketingMarketData = [
  {
    title: "Global Demand For Marketing Professionals",
    items: [
      {
        icon: Users2,
        title: "Over 800K",
        description: "Digital marketing job openings globally",
        source: "LinkedIn Jobs",
      },
      {
        icon: Trophy,
        title: "$1.3 Trillion",
        description: "Projected digital marketing market by 2033",
        source: "Research and Markets",
      },
      {
        icon: TrendingUp,
        title: "+30% Growth",
        description: "AI marketing adoption growing annually",
        source: "Gartner",
      },
    ],
  },
  {
    title: "Earning Potential in Marketing",
    items: [
      {
        title: "$70K–$130K/year",
        description:
          "Average salary for Digital Marketing Managers in the U.S.",
      },
      {
        title: "$1,500–$5,000/month",
        description:
          "Remote opportunities available to skilled African professionals",
      },
      {
        title: "$200K+",
        description: "CMOs and VP of Marketing at top companies",
      },
    ],
  },
];

export const marketingIndustryTestimony = [
  {
    title: "The best marketing doesn't feel like marketing.",
    source: "Tom Fishburne, Marketoonist",
  },
  {
    title: "AI is transforming how we reach, engage, and convert customers.",
    source: "HubSpot",
  },
  {
    title: "Content is fire, social media is gasoline.",
    source: "Jay Baer, Marketing Expert",
  },
];

export const whatYouShouldExpect = [
  {
    title: "Live Master Classes From Industry Experts",
    image: "/assets/images/expect-card-img.png",
  },
  {
    title: "Hands-on Projects and Real-world Experience",
    image: "/assets/images/expect-card-img.png",
  },
  {
    title: "Expert Guidance and Support",
    image: "/assets/images/expect-card-img.png",
  },
  {
    title: "Career Services and Job Placement",
    image: "/assets/images/expect-card-img.png",
  },
  {
    title: "Build a Strong Network of Like-minded Professionals",
    image: "/assets/images/expect-card-img.png",
  },
  {
    title: "Access to the Latest AI Tools and Technologies",
    image: "/assets/images/expect-card-img.png",
  },
];

export const learnCourseWithAyonaire = [
  {
    icon: "/assets/icons/pair-loop.svg",
    title: "Peer-To-Peer Engagement",
    description:
      "Connect with fellow learners via our community channels. Exchange ideas and build lasting relationships, just like a real classroom, but better.",
  },
  {
    icon: "/assets/icons/time-loop.svg",
    title: "Flexi Learn",
    description:
      "Missed a session? No worries. Access on-demand class recordings anytime, so you never lose your rhythm and always stay in sync with your peers.",
  },
  {
    icon: "/assets/icons/session-loop.svg",
    title: "Mentoring Sessions",
    description:
      "Get personalized guidance from top mentors. Whether you need project support, doubt-clearing, or career advice, we’ve got your back with expert-led mentoring.",
  },
  {
    icon: "/assets/icons/book-loop.svg",
    title: "Learning Support",
    description:
      "Our dedicated support team ensures your learning journey is smooth. Stuck somewhere? Need direction? We’re just a message away, always.",
  },
];

export const hiringCompanies = [
  {
    name: "deepmind",
    logo: "/assets/brands/deepmind-logo.svg",
  },
  {
    name: "anthropic",
    logo: "/assets/brands/anthropic-logo.svg",
  },
  {
    name: "meta",
    logo: "/assets/brands/meta-logo.svg",
  },
  {
    name: "aws",
    logo: "/assets/brands/aws-logo.svg",
  },
  {
    name: "microsoft",
    logo: "/assets/brands/microsoft-logo.svg",
  },
  {
    name: "ibm",
    logo: "/assets/brands/ibm-logo.svg",
  },
  {
    name: "replit",
    logo: "/assets/brands/replit-logo.svg",
  },
  {
    name: "accenture",
    logo: "/assets/brands/accenture-logo.svg",
  },
  {
    name: "spotify",
    logo: "/assets/brands/spotify-logo.svg",
  },
];

export const courseLearningFormat = [
  {
    title: "Live Instructor-Led Classes (Virtual)",
    description:
      "Perfect if you prefer structured guidance, accountability, and real-time support.",
    values: [
      "Weekly live classes with hands-on coding and project sessions",
      "Real-time feedback and mentor access",
      "Peer learning and project-based collaboration",
      "Structured assignments and performance tracking",
      "A strong community to keep you motivated",
    ],
  },
  {
    title: "Self-Paced Learning",
    description:
      "Ideal for professionals balancing work or students who learn independently.",
    values: [
      "24/7 access to the complete course on our learning platform",
      "Downloadable code, templates, and walkthroughs",
      "Practical tasks that simulate real-world AI challenges",
      "Support via community groups and periodic check-ins",
      "Certificate of completion once you finish all milestones",
    ],
  },
];

export const stepsToLearn = [
  {
    title: "Fill Out the Application Form",
    description:
      "Select your preferred learning track (Live Virtual Classes or Self-Paced), share your details, and tell us your career goals so we can guide your journey from day one.",
  },
  {
    title: "Choose a Payment Option That Works for You",
    description:
      "You can pay in full or choose a flexible installment plan. We offer multiple secure payment methods to make enrollment seamless and accessible.",
  },
  {
    title: "Get Onboarded and Meet Your Mentor",
    description:
      "Once payment is confirmed, you’ll receive instant access to your learning portal, community group, onboarding materials, and your instructor’s welcome kit.",
  },
  {
    title: "Begin Your Learning Journey",
    description:
      "Start your training with live Zoom classes or self-paced content (coming soon). Engage in weekly sessions, hands-on projects, and mentorship as you build your skills.",
  },
];

export const coursePrising = [
  {
    title: "Live Classes",
    prices: {
      original: "1,500,000",
      discount: "500,000",
    },
    features: [
      "5 Flexible Payment Plans Available",
      "6 Months of Intensive Training",
      "Lifetime Access To Materials",
      "Career Placement Assistance",
    ],
  },
  {
    title: "Self-Learning + Community",
    prices: {
      original: "700,000",
      discount: "300,000",
    },
    features: [
      "5 Flexible Payment Plans Available",
      "6 Months of Intensive Training",
      "Lifetime Access To Materials",
      "Career Placement Assistance",
    ],
  },
];

export const programBenefits = [
  "Live masterclass by Microsoft experts",
  "Access to the Microsoft Learn platform for certification",
  "Develop industry-ready skills in AI and machine learning",
  "Real-world projects with Microsoft’s cutting-edge tools",
  "Dedicated support for career growth",
];

export const certificateWorkingProcess = [
  {
    icon: "/assets/icons/certificate-search-id.svg",
    title: "Locate the Certificate ID",
    description:
      "You'll find it printed on the certificate issued to the student",
  },
  {
    icon: "/assets/icons/certificate-enter-id.svg",
    title: "Enter the ID",
    description: "Input the ID into the verification field below",
  },
  {
    icon: "/assets/icons/certificate-verify-tick.svg",
    title: "Get Instant Verification",
    description:
      "The system will confirm if the certificate is valid and provide details about the course and completion date.",
  },
];

export const whyVerifyFeatures = [
  {
    icon: "/assets/icons/shield.svg",
    title: "Trusted Credentials",
    description: "Ensure that the student has genuinely completed the program.",
  },
  {
    icon: "/assets/icons/employer.svg",
    title: "Employer Assurance",
    description:
      "Employers can confidently validate skills for recruitment or professional purposes.",
  },
  {
    icon: "/assets/icons/star-outline.svg",
    title: "Transparent Education",
    description:
      "Reflect Ayonaire's commitment to accountability and excellence.",
  },
];

export const verificationStats = [
  {
    value: "10,000+",
    label: "Certificates Issued",
  },
  {
    value: "99.9%",
    label: "Verification Accuracy",
  },
  {
    value: "<2s",
    label: "Average Verification Time",
  },
];

export const instructorWhyTeachReasons = [
  {
    icon: Earth,
    title: "A Platform Built For Impact",
    description:
      "Teaching at Ayonaire isn't just about sharing skills—it's about shaping Africa's digital future. Every session you teach helps someone rise, build, and lead change across industries.",
  },
  {
    icon: Rocket,
    title: "You Don't Just Teach, You Multiply Builders",
    description:
      "Your students don't just get jobs. They create companies, lead innovations, and transform industries. You're not just training people—you're raising Africa's future powerhouses.",
  },
  {
    icon: HeartHandshake,
    title: "You Create Real Impact",
    description:
      "We're here to help people change their lives. Every lesson you deliver helps someone gain opportunity, level up their skills, or pivot their career.",
  },
  {
    icon: Zap,
    title: "You Join Us, Africa is Transformed",
    description:
      "Trainers become catalysts for change, connecting learners across borders and unlocking Africa's digital potential.",
  },
  {
    icon: Video,
    title: "Live and Collaborative Learning",
    description:
      "Our programs are built for real-time impact through virtual sessions that encourage active participation and engagement.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Designed by Experts",
    description:
      "Each syllabus is crafted by experienced professionals, aligned with global industry standards, and tailored to Africa's growing digital market.",
  },
  {
    icon: Users2,
    title: "Collaborate with a Team of Coaches",
    description:
      "You'll work alongside other passionate trainers and coaches to guide your learners and drive powerful cohort experiences.",
  },
  {
    icon: Medal,
    title: "You Teach. We Power the Process",
    description:
      "Focus on your teaching and impact — we handle the logistics, technology, and learner support so your sessions run seamlessly.",
  },
];

export const instructorLookingForReasons = [
  "Deep knowledge in your domain (certifications are a bonus)",
  "A genuine desire to teach and give back",
  "Strong communication and presentation skills",
  "A commitment to crafting high-quality learning experiences",
];

export const instructorOurProcessSteps = [
  {
    title: "Understand Our Model",
    description:
      "Take a few minutes to review the Ayonaire learning model and teaching approach, so you're sure our mission and style align with yours.",
  },
  {
    title: "Fill Out the Application",
    description:
      "Share your details and experience by completing a short form to apply as an instructor or coach.",
  },
  {
    title: "Join the Interview",
    description:
      "Our team will meet with you for a short chat to learn more about your skills, experience, and teaching passion.",
  },
  {
    title: "Get Onboarded",
    description:
      "Once you're selected, we'll guide you through an onboarding call to introduce you to our systems, structure, and teaching tools.",
  },
  {
    title: "Start Teaching",
    description:
      "You'll be added to a team of other instructors and begin leading live classes—helping learners grow, build, and transform.",
  },
];

export const getStartedBootCampCourses = [
  {
    courseTitle: "AI Engineering",
    image: "/assets/courses/ai-engineering-team.png",
    link: "/courses/ai-engineering",
  },
  {
    courseTitle: "Data Science",
    image: "/assets/courses/data-science-team.png",
    link: "/courses/certified-data-science",
  },
  {
    courseTitle: "Data Analytics",
    image: "/assets/courses/data-analytics-team.png",
    link: "/courses/certified-data-analytics",
  },
  {
    courseTitle: "Product Design",
    image: "/assets/courses/product-design-team.png",
    link: "/courses/product-design",
  },
  {
    courseTitle: "Product Management",
    image: "/assets/courses/product-management-team.png",
    link: "/courses/product-management",
  },
  {
    courseTitle: "Software Engineering",
    image: "/assets/courses/software-engineering-team.png",
    link: "/courses/software-engineering-with-python",
  },
];

export const howWeDeliverBusinessValue = [
  {
    ico: "/assets/icons/digital-content.svg",
    title: "",
    description: "",
  },
  {
    ico: "/assets/icons/hands-project.svg",
    title: "",
    description: "",
  },
  {
    ico: "/assets/icons/branded-learning.svg",
    title: "",
    description: "",
  },
];

// Our Courses
export const courses = [
  {
    category: "AI",
    categoryName: "School of AI",
    courses: [
      {
        title: "AI Engineering",
        slug: "ai-engineering",
        survey: "ai-engineering",
        description:
          "A comprehensive program covering machine learning, model deployment, MLOps fundamentals, and real-world AI system design.",
        imageSrc: "/assets/courses/ai-engineering.webp",
        thumbnail: "/assets/courses/thumbnails/ai-engineer-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.5,
        peopleInField: "AI Engineers",
        heroFeatures: [
          {
            title: "Launch Your Career in the World’s Most Advanced Field",
            features: [
              "The most comprehensive AI Bootcamp aligned with industry requirements",
              "Learn, earn big, and get high opportunities across the globe",
              "With real world projects, build a portfolio that stands out",
              "With real world projects, build a portfolio that stands out",
            ],
          },
          {
            title: "Build, Deploy, and Earn Big as a Certified AI Engineer",
            features: [
              "Build an AI portfolio that hiring managers respect",
              "Get personalized mentorship, virtual internship, and career coaching",
              "Interview prep, job mapping, and resume optimization included",
              "Get job-ready with virtual internships and placement support",
            ],
          },
          {
            title: "Join the Global AI Talent Wave. From Africa to the World",
            features: [
              "AI is projected to add over 133M new jobs by 2030. Top companies are hiring and we’ll help you become the certified talent they need.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective AI Engineering Course",
          description:
            "Artificial Intelligence is reshaping every industry. This course is your gateway into one of the world’s fastest-growing and highest paying fields.",
          keyFeatures: [
            "No tech or coding background required, we’ll teach you from the ground up",
            "Hands-on learning with real AI tools like TensorFlow, OpenAI, Hugging Face, and LangChain",
            "Projects that mirror real world use cases: chatbots, image classifiers, NLP apps, and more",
            "Globally recognized certification to showcase your AI readiness",
            "Career-focused curriculum with resume, portfolio, and LinkedIn optimization",
            "Live instructor-led training + self-paced content for full flexibility",
            "Access to our AI Cloud Lab for continuous practice and experimentation",
            "1-on-1 mentorship, weekly support, and expert feedback",
            "Tools and frameworks aligned to top roles: AI Engineer, ML Engineer, Prompt Engineer",
            "Peer community for networking, collaboration, and accountability",
            "Mock interviews, job mapping, and career coaching from industry professionals",
            "Virtual internship and job assistance through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Explosive Market Growth",
            description:
              "The global AI industry is projected to exceed $500 billion by 2027, creating new opportunities across nearly every sector.",
          },
          {
            title: "Hiring Is Accelerating Worldwide",
            description:
              "Top companies in the U.S., Europe, and Africa are hiring AI professionals at record pace to power innovation and automation.",
          },
          {
            title: "High Earning Potential",
            description:
              "AI Engineer salaries range from $80,000 to over $200,000 per year globally, with experienced professionals in Africa earning $1,000–$5,000/month remotely.",
          },
          {
            title: "A Future-Proof Career Path",
            description:
              "As governments and Fortune 500 companies invest heavily in AI, the shortage of skilled talent makes now the best time to enter the field.",
          },
        ],

        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No tech background? No problem. You’ll begin with Python, AI foundations, and essential tools like TensorFlow, LangChain, and OpenAI.",
          },
          {
            title: "Robust AI Curriculum",
            description:
              "Learn Deep Learning, GenAI, and Agentic AI using tools like AutoGen, TensorFlow, and Copilot Studio",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as chatbots, generative tools, and intelligent agents, guided by industry mentors.",
          },
        ],

        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Start from zero and learn step-by-step to build real AI projects.",
          },
          {
            title: "Career Switchers",
            description:
              "Coming from business, marketing, or education? Transition smoothly into an AI career.",
          },
          {
            title: "Engineers",
            description:
              "Already in tech? Master TensorFlow, OpenAI, and LangChain to become very successful in your career",
          },
          {
            title: "Freelancers",
            description:
              "Offer AI services, automate workflows, and build scalable solutions confidently",
          },
          {
            title: "Founders & Creators",
            description:
              "Build chatbots, automate processes, and bring AI ideas to life.",
          },
          {
            title: "Students",
            description:
              "Learn in-demand skills and qualify for competitive AI internships and roles.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Artificial Intelligence Foundation",
            modules: [
              {
                title: "Artificial Intelligence Overview",
                lessons: [
                  "Evolution of Human Intelligence",
                  "What is Artificial Intelligence?",
                  "History of Artificial Intelligence",
                  "Why Artificial Intelligence Now?",
                  "Areas of Artificial Intelligence",
                  "AI vs Data Science vs Machine Learning",
                ],
              },
              {
                title: "Deep Learning Introduction",
                lessons: [
                  "Deep Neural Network",
                  "Machine Learning vs Deep Learning",
                  "Feature Learning in Deep Networks",
                  "Applications of Deep Learning Networks",
                ],
              },
              {
                title: "TensorFlow Foundation",
                lessons: [
                  "TensorFlow Structure and Modules",
                  "Hands-On: ML Modeling with TensorFlow",
                ],
              },
              {
                title: "Computer Vision Introduction",
                lessons: [
                  "Image Basics",
                  "Convolution Neural Network (CNN)",
                  "Image Classification with CNN",
                  "Hands-On: Cat vs Dogs Classification with CNN Network",
                ],
              },
              {
                title: "Natural Language Processing (NLP)",
                lessons: [
                  "NLP Introduction",
                  "Bag of Words Models",
                  "Word Embedding",
                  "Hands-On: BERT Algorithm",
                ],
              },
              {
                title: "AI Ethical Issues and Concerns",
                lessons: [
                  "Issues and Concerns Around AI",
                  "AI and Ethical Concerns",
                  "AI and Bias",
                  "AI: Ethics, Bias, and Trust",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Python Foundation",
            modules: [
              {
                title: "Python Basics",
                lessons: [
                  "Introduction of Python",
                  "Installation of Python and IDE",
                  "Python Variables",
                  "Python Basic Data Types",
                  "Number & Booleans, Strings",
                  "Arithmetic Operators",
                  "Comparison Operators",
                  "Assignment Operators",
                ],
              },
              {
                title: "Python Control Statements",
                lessons: [
                  "IF Conditional Statement",
                  "IF-ELSE",
                  "NESTED IF",
                  "Python Loops Basics",
                  "WHILE Statement",
                  "FOR Statements",
                  "BREAK and CONTINUE Statements",
                ],
              },
              {
                title: "Python Data Structures",
                lessons: [
                  "Basic Data Structures in Python",
                  "Basics of List",
                  "List: Object, Methods",
                  "Tuple: Object, Methods",
                  "Sets: Object, Methods",
                  "Dictionary: Object, Methods",
                ],
              },
              {
                title: "Python Functions",
                lessons: [
                  "Functions Basics",
                  "Function Parameter Passing",
                  "Lambda Functions",
                  "Map, Reduce, Filter Functions",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Statistics Essentials",
            modules: [
              {
                title: "Overview of Statistics",
                lessons: [
                  "Introduction to Statistics",
                  "Descriptive and Inferential Statistics",
                  "Basic Terms of Statistics",
                  "Types of Data",
                ],
              },
              {
                title: "Harnessing Data",
                lessons: [
                  "Random Sampling",
                  "Sampling With Replacement and Without Replacement",
                  "Cochran's Minimum Sample Size",
                  "Types of Sampling (Simple, Stratified, Cluster, Systematic, Multistage)",
                  "Sampling Error",
                  "Methods of Collecting Data",
                ],
              },
              {
                title: "Exploratory Data Analysis",
                lessons: [
                  "Exploratory Data Analysis Introduction",
                  "Measures of Central Tendencies: Mean, Median, Mode",
                  "Measures of Spread: Range, Variance, Standard Deviation",
                  "Data Distribution Plot: Histogram",
                  "Normal Distribution & Properties",
                  "Z Value / Standard Value",
                  "Empirical Rule and Outliers",
                  "Central Limit Theorem",
                  "Normality Testing",
                  "Skewness & Kurtosis",
                  "Measures of Distance: Euclidean, Manhattan, Minkowski",
                  "Covariance & Correlation",
                ],
              },
              {
                title: "Hypothesis Testing",
                lessons: [
                  "Hypothesis Testing Introduction",
                  "P-Value, Critical Region",
                  "Types of Hypothesis Testing",
                  "Hypothesis Testing Errors: Type I and Type II",
                  "Two Sample Independent T-test",
                  "Two Sample Related T-test",
                  "One-Way ANOVA Test",
                  "Application of Hypothesis Testing",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Machine Learning Associate",
            modules: [
              {
                title: "Machine Learning Introduction",
                lessons: [
                  "What Is ML? ML Vs AI",
                  "Clustering, Classification And Regression",
                  "Supervised Vs Unsupervised",
                ],
              },
              {
                title: "Python Numpy Package",
                lessons: [
                  "Introduction to Numpy Package",
                  "Array as Data Structure",
                  "Core Numpy Functions",
                  "Matrix Operations, Broadcasting in Arrays",
                ],
              },
              {
                title: "Python Pandas Package",
                lessons: [
                  "Introduction to Pandas Package",
                  "Series in Pandas",
                  "Data Frame in Pandas",
                  "File Reading in Pandas",
                  "Data Munging with Pandas",
                ],
              },
              {
                title: "Visualization with Python – Matplotlib",
                lessons: [
                  "Visualization Packages (Matplotlib)",
                  "Components of a Plot, Sub-Plots",
                  "Basic Plots: Line, Bar, Pie, Scatter",
                ],
              },
              {
                title: "Python Visualization Package – Seaborn",
                lessons: [
                  "Seaborn: Basic Plot",
                  "Advanced Python Data Visualizations",
                ],
              },
              {
                title: "ML Algo – Linear Regression",
                lessons: [
                  "Introduction to Linear Regression",
                  "How it Works: Regression and Best Fit Line",
                  "Modeling and Evaluation in Python",
                ],
              },
              {
                title: "ML Algo – Logistic Regression",
                lessons: [
                  "Introduction to Logistic Regression",
                  "How it Works: Classification & Sigmoid Curve",
                  "Modeling and Evaluation in Python",
                ],
              },
              {
                title: "ML Algo – K Means Clustering",
                lessons: [
                  "Understanding Clustering (Unsupervised)",
                  "K Means Algorithm",
                  "How it Works: K Means Theory",
                  "Modeling in Python",
                ],
              },
              {
                title: "ML Algo – KNN",
                lessons: [
                  "Introduction to KNN",
                  "How It Works: Nearest Neighbor Concept",
                  "Modeling and Evaluation in Python",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Machine Learning Expert",
            modules: [
              {
                title: "Feature Engineering",
                lessons: [
                  "Introduction to Feature Engineering",
                  "Feature Engineering Techniques: Encoding, Scaling, Data Transformation",
                  "Handling Missing Values, Handling Outliers",
                  "Creation of Pipeline",
                  "Use Case for Feature Engineering",
                ],
              },
              {
                title: "ML Algo – Support Vector Machine (SVM)",
                lessons: [
                  "Introduction to SVM",
                  "How It Works: SVM Concept, Kernel Trick",
                  "Modeling and Evaluation of SVM in Python",
                ],
              },
              {
                title: "Principal Component Analysis (PCA)",
                lessons: [
                  "Building Blocks of PCA",
                  "How it Works: Finding Principal Components",
                  "Modeling PCA in Python",
                ],
              },
              {
                title: "ML Algo – Decision Tree",
                lessons: [
                  "Introduction to Decision Tree & Random Forest",
                  "How it Works",
                  "Modeling and Evaluation in Python",
                ],
              },
              {
                title: "Ensemble Techniques – Bagging",
                lessons: [
                  "Introduction to Ensemble Technique",
                  "Bagging and How it Works",
                  "Modeling and Evaluation in Python",
                ],
              },
              {
                title: "ML Algo – Naïve Bayes",
                lessons: [
                  "Introduction to Naive Bayes",
                  "How it Works: Bayes' Theorem",
                  "Naive Bayes for Text Classification",
                  "Modeling and Evaluation in Python",
                ],
              },
              {
                title: "Gradient Boosting, XGBoost",
                lessons: [
                  "Introduction to Boosting and XGBoost",
                  "How it Works",
                  "Modeling and Evaluation in Python",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Advanced Data Science",
            modules: [
              {
                title: "Time Series Forecasting – ARIMA",
                lessons: [
                  "What is Time Series?",
                  "Trend, Seasonality, Cyclical and Random",
                  "Stationarity of Time Series",
                  "Autoregressive Model (AR)",
                  "Moving Average Model (MA)",
                  "ARIMA Model",
                  "Autocorrelation and AIC",
                  "Time Series Analysis in Python",
                ],
              },
              {
                title: "Sentiment Analysis",
                lessons: [
                  "Introduction to Sentiment Analysis",
                  "NLTK Package",
                  "Case Study: Sentiment Analysis on Movie Reviews",
                ],
              },
              {
                title: "Regular Expressions with Python",
                lessons: [
                  "Regex Introduction",
                  "Regex Codes",
                  "Text Extraction with Python Regex",
                ],
              },
              {
                title: "ML Model Deployment with Flask",
                lessons: [
                  "Introduction to Flask",
                  "URL and App Routing",
                  "Flask Application – ML Model Deployment",
                ],
              },
              {
                title: "Advanced Data Analysis with MS Excel",
                lessons: [
                  "MS Excel Core Functions",
                  "Advanced Functions (VLOOKUP, INDIRECT…)",
                  "Linear Regression with Excel",
                  "Data Table",
                  "Goal Seek Analysis",
                  "Pivot Table",
                  "Solving Data Equation with Excel",
                ],
              },
              {
                title: "AWS Cloud for Data Science",
                lessons: [
                  "Introduction of Cloud",
                  "Difference Between GCC, Azure, AWS",
                  "AWS Service (EC2 Instance)",
                ],
              },
              {
                title: "Azure for Data Science",
                lessons: [
                  "Introduction to Azure ML Studio",
                  "Data Pipeline",
                  "ML Modeling with Azure",
                ],
              },
              {
                title: "Introduction to Deep Learning",
                lessons: [
                  "Introduction to Artificial Neural Network, Architecture",
                  "Artificial Neural Network in Python",
                  "Introduction to Convolutional Neural Network, Architecture",
                  "Convolutional Neural Network in Python",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "GIT",
            modules: [
              {
                title: "Git Introduction",
                lessons: [
                  "Purpose of Version Control",
                  "Popular Version Control Tools",
                  "Git Distributed Version Control",
                  "Terminologies",
                  "Git Workflow",
                  "Git Architecture",
                ],
              },
              {
                title: "Git Repository and GitHub",
                lessons: [
                  "Git Repo Introduction",
                  "Create New Repo with Init Command",
                  "Git Essentials: Copy & User Setup",
                  "Mastering Git and GitHub",
                ],
              },
              {
                title: "Commits, Pull, Fetch and Push",
                lessons: [
                  "Code Commits",
                  "Pull, Fetch and Conflicts Resolution",
                  "Pushing to Remote Repo",
                ],
              },
              {
                title: "Tagging, Branching and Merging",
                lessons: [
                  "Organize Code with Branches",
                  "Checkout Branch",
                  "Merge Branches",
                  "Editing Commits",
                  "Commit Command Amend Flag",
                  "Git Reset and Revert",
                ],
              },
              {
                title: "Git with GitHub and Bitbucket",
                lessons: [
                  "Creating GitHub Account",
                  "Local and Remote Repo",
                  "Collaborating with Other Developers",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Big Data Foundation",
            modules: [
              {
                title: "Big Data Introduction",
                lessons: [
                  "Big Data Overview",
                  "Five Vs of Big Data",
                  "What is Big Data and Hadoop",
                  "Introduction to Hadoop",
                  "Components of Hadoop Ecosystem",
                  "Big Data Analytics Introduction",
                ],
              },
              {
                title: "HDFS and Map Reduce",
                lessons: [
                  "HDFS – Big Data Storage",
                  "Distributed Processing with Map Reduce",
                  "Mapping and Reducing Stages Concepts",
                  "Key Terms: Output Format, Partitioners, Combiners, Shuffle, and Sort",
                ],
              },
              {
                title: "PySpark Foundation",
                lessons: [
                  "PySpark Introduction",
                  "Spark Configuration",
                  "Resilient Distributed Datasets (RDD)",
                  "Working with RDDs in PySpark",
                  "Aggregating Data with Pair RDDs",
                ],
              },
              {
                title: "Spark SQL and Hadoop Hive",
                lessons: ["Introducing Spark SQL", "Spark SQL vs Hadoop Hive"],
              },
            ],
          },
          {
            id: "9",
            title: "BI Analyst",
            modules: [
              {
                title: "Tableau Fundamentals",
                lessons: [
                  "Introduction to Business Intelligence & Introduction to Tableau",
                  "Interface Tour, Data Visualization: Pie Chart, Column Chart, Bar Chart",
                  "Bar Chart, Tree Map, Line Chart",
                  "Area Chart, Combination Charts, Map",
                  "Dashboards Creation, Quick Filters",
                  "Create Table Calculations",
                  "Create Calculated Fields",
                  "Create Custom Hierarchies",
                ],
              },
              {
                title: "Power BI Basics",
                lessons: [
                  "Power BI Introduction",
                  "Basic Visualizations",
                  "Dashboard Creation",
                  "Basic Data Cleaning",
                  "Basic DAX Function",
                ],
              },
              {
                title: "Data Transformation Techniques",
                lessons: [
                  "Exploring Query Editor",
                  "Data Cleansing and Manipulation",
                  "Creating Our Initial Project File",
                  "Connecting to Our Data Source",
                  "Editing Rows",
                  "Changing Data Types",
                  "Replacing Values",
                ],
              },
              {
                title: "Connecting to Various Data Sources",
                lessons: [
                  "Connecting to a CSV File",
                  "Connecting to a Webpage",
                  "Extracting Characters",
                  "Splitting and Merging Columns",
                  "Creating Conditional Columns",
                  "Creating Columns from Examples",
                  "Create Data Model",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Artificial Intelligence (AI) Expert",
            modules: [
              {
                title: "Neural Networks",
                lessons: [
                  "Structure of Neural Networks",
                  "Neural Network - Core Concepts (Weight Initialization)",
                  "Neural Network - Core Concepts (Optimizer)",
                  "Neural Network - Core Concepts (Need of Activation)",
                  "Neural Network - Core Concepts (MSE & RMSE)",
                  "Feed Forward Algorithm",
                  "Backpropagation",
                ],
              },
              {
                title: "Implementing Deep Neural Networks",
                lessons: [
                  "Introduction to Neural Networks with TF2.X",
                  "Simple Deep Learning Model in Keras (TF2.X)",
                  "Building Neural Network Model in TF2.0 for MNIST Dataset",
                ],
              },
              {
                title: "Deep Computer Vision – Image Recognition",
                lessons: [
                  "Convolutional Neural Networks (CNNs)",
                  "CNNs with Keras – Part 1",
                  "CNNs with Keras – Part 2",
                  "Transfer Learning in CNN",
                  "Flowers Dataset with TF2.X – Part 1",
                  "Flowers Dataset with TF2.X – Part 2",
                  "Examining X-Ray with CNN Model",
                ],
              },
              {
                title: "Deep Computer Vision – Object Detection",
                lessons: [
                  "What is Object Detection",
                  "Methods of Object Detection",
                  "Metrics of Object Detection",
                  "Bounding Box Regression",
                  "labelImg",
                  "RCNN",
                  "Fast RCNN",
                  "Faster RCNN",
                  "SSD",
                  "YOLO Implementation",
                  "Object Detection Using CV2",
                ],
              },
              {
                title: "Recurrent Neural Network (RNN)",
                lessons: [
                  "RNN Introduction",
                  "Sequences with RNNs",
                  "Long Short-Term Memory Networks – Part 1",
                  "Long Short-Term Memory Networks – Part 2",
                  "Bi-Directional RNN and LSTM",
                  "Examples of RNN Applications",
                ],
              },
              {
                title: "Natural Language Processing (NLP)",
                lessons: [
                  "Introduction to Natural Language Processing",
                  "Working with Text File",
                  "Working with PDF File",
                  "Introduction to Regex",
                  "Regex – Part 1",
                  "Regex – Part 2",
                  "Word Embedding",
                  "RNN Model Creation",
                  "Transformers and BERT",
                  "Introduction to GPT (Generative Pre-trained Transformer)",
                  "State-of-the-Art NLP and Projects",
                ],
              },
              {
                title: "Prompt Engineering",
                lessons: [
                  "Introduction to Prompt Engineering",
                  "Understanding the Role of Prompts in AI Systems",
                  "Design Principles for Effective Prompts",
                  "Techniques for Generating and Optimizing Prompts",
                  "Applications of Prompt Engineering in Natural Language Processing",
                ],
              },
              {
                title: "Reinforcement Learning",
                lessons: [
                  "Markov Decision Process",
                  "Fundamental Equations in RL",
                  "Model-Based Method",
                  "Dynamic Programming Model-Free Methods",
                ],
              },
              {
                title: "Deep Reinforcement Learning",
                lessons: [
                  "Architectures of Deep Q-Learning",
                  "Deep Q-Learning",
                  "Reinforcement Learning Projects with OpenAI Gym",
                ],
              },
              {
                title: "Gen AI – Part 1",
                lessons: [
                  "GAN Introduction, Core Concepts, and Applications",
                  "Core Concepts of GAN",
                  "GAN Applications",
                  "Building GAN Model with TensorFlow 2.X",
                  "Introduction to GPT (Generative Pre-trained Transformer)",
                  "Building a Question-Answer Bot with the Models on Hugging Face",
                ],
              },
              {
                title: "Gen AI – Part 2",
                lessons: [
                  "Introduction to Autoencoder",
                  "Basic Structure and Components of Autoencoders",
                  "Types of Autoencoders (Vanilla, Denoising, Variational, Sparse, Convolutional)",
                  "Training Autoencoders: Loss Functions, Optimization Techniques",
                  "Applications of Autoencoders: Dimensionality Reduction, Anomaly Detection, Image",
                ],
              },
            ],
          },
        ],

        skillsToMaster: [
          {
            title: "Technical skills",
            skills: [
              "Python Programming For AI",
              "data Preprocessing & Feature Engineering",
              "Supervised & Unsupervised Machine Learning",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Agentic AI Systems (AutoGPT, LangChain)",
              "Problem-Solving With Real Datasets",
              "Resume & Linkedin Optimization",
            ],
          },
        ],

        courseProjects: [
          {
            title: "Project 1: E-commerce Intelligence",
            description:
              "Develop a simplified online shopping application using Python, mimicking backend logic used by major retailers.",
          },
          {
            title: "Project 2: Smart Restaurant Forecasting",
            description:
              "Use time series forecasting to help a food analytics company predict daily demand for menu items, reducing waste and improving efficiency.",
          },
          {
            title: "Project 3: Retail Insights Discovery",
            description:
              "Apply exploratory data analysis (EDA) and basic statistical models to uncover the key drivers of customer acquisition for a retail firm.",
          },
          {
            title: "Project 4: AI Recommendation Engine",
            description:
              "Build and deploy a machine learning–powered recommendation system that suggests products to users based on behavior and preferences.",
          },
        ],

        courseCareerPath: [
          {
            current: false,
            title: "Prompt Engineer",
            description:
              "Craft, refine, and optimize prompts for large language models (LLMs) like GPT to drive accurate AI-generated outputs.",
          },
          {
            current: false,
            title: "ML Engineer",
            description:
              "Build predictive models, optimize ML algorithms, and integrate machine learning into production environments.",
          },
          {
            current: true,
            title: "AI Engineer",
            description:
              "Design and deploy intelligent systems that solve real business problems using deep learning, NLP, and generative AI frameworks.",
          },
          {
            current: false,
            title: "Generative AI Engineer",
            description:
              "Create content, images, code, or text using models like DALL·E, GPT, and Stable Diffusion. Develop tools for automation, creativity, and AI-powered content delivery.",
          },
          {
            current: false,
            title: "Agentic AI Engineer",
            description:
              "Build autonomous agents that can make decisions, interact with tools, and perform tasks intelligently across systems using frameworks like LangChain.",
          },
          {
            current: false,
            title: "AI Product Engineer",
            description:
              "Bridge AI capabilities and user needs and work with teams to scope AI-driven features and ensure they deliver value.",
          },
          {
            current: false,
            title: "AI Systems Architect",
            description:
              "Design scalable, multi-agent AI architectures for complex enterprise systems and lead technical AI strategy.",
          },
        ],

        teachFeatures: [
          {
            title: "Build A Powerful AI Portfolio Website",
            description:
              "Showcase your LLM apps, AI agents, NLP projects, and prompt engineering work in a clean, recruiter-ready online portfolio.",
          },
          {
            title: "Master AI Interviews With Confidence",
            description:
              "Get expert coaching on AI case studies, system design interviews, and how to walk through your models and decisions with clarity.",
          },
          {
            title: "Establish Your AI Authority Online",
            description:
              "Boost your visibility on GitHub, Hugging Face, and LinkedIn from open-source contributions to sharing insights on AI trends.",
          },
          {
            title: "Create an AI-Optimized Resume",
            description:
              "Craft a resume tailored to AI and ML roles, one that highlights your tools, certifications, and results while passing ATS filters.",
          },
          {
            title: "Apply with Precision",
            description:
              "Learn to identify the right AI-focused companies and tailor your applications to roles that align with your strengths.",
          },
          {
            title: "Network in the AI Ecosystem",
            description:
              "Use your projects and personal brand to connect with AI leaders, hiring managers, and collaborators on platforms that matter.",
          },
        ],

        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "97 Million",
            description: "New AI Related Roles Expected Globally by 2026",
            source: "World Economic Forum",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "40+",
            description: "Projected growth in AI engineering jobs by 2030",
            source: "U.S. Bureau of Labor Statistics",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "$667.9 Billion",
            description: "Projected market size for Generative AI by 2030",
            source: "Bloomberg Intelligence",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "AI Adoption Across Industries",
            description:
              "AI now powers finance, healthcare, logistics, defense, education, and entertainment.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$120,000 – $220,000/year",
            description: "Average salary for AI professionals in the U.S.",
            source: "Glassdoor, Levels.fyi",
          },
        ],

        salaryInsights: [
          {
            location: "United States",
            montly: "$8,000 - $15,000",
          },
          {
            location: "United Kingdom",
            montly: "$5,000 - $9,500",
          },
          {
            location: "Europe",
            montly: "$4,500 - $9000",
          },
          {
            location: "Remote Roles",
            montly: "$1,500 - $6000",
          },
        ],

        faqs: [
          {
            question:
              "What is Artificial Intelligence (AI), and how is it different from Machine Learning (ML)?",
            answer:
              "AI is the broader concept of machines being able to carry out tasks in a way that we would consider 'smart'. Machine Learning is a current application of AI based around the idea that we should really just be able to give machines access to data and let them learn for themselves.",
          },
          {
            question: "Do I need a technical background to join this course?",
            answer:
              "While a technical background helps, it is not strictly necessary. We start from the fundamentals of Python and Math before diving into complex AI concepts, making it accessible for dedicated beginners.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "Does the course include placement assistance?",
            answer:
              "Yes, we provide career support including resume reviews, mock interviews, and access to our hiring partner network to help you land a role in AI.",
          },
          {
            question: "What makes this course different from others online?",
            answer:
              "This course focuses heavily on 'Agentic' and 'Engineering' aspects—meaning you don't just build models, you build deployed systems that work in the real world, using the latest tools like LangChain and OpenAI APIs.",
          },
          {
            question: "What kinds of projects will I build?",
            answer:
              "You’ll work on 5–10 hands-on projects across industries like finance, healthcare, and retail. Projects include customer churn prediction models, computer vision systems, and deploying LLM-powered applications.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "How much can an AI Engineer expect to earn?",
            answer:
              "Salaries vary by location, but AI Engineers are among the highest-paid tech professionals, often ranging from $100,000 to over $200,000 annually in top markets.",
          },
          {
            question: "Is coding required to learn AI Engineering?",
            answer:
              "Yes, coding (specifically Python) is essential. We will teach you the necessary programming skills during the course, but be prepared to write code.",
          },
          {
            question: "What tools and libraries will I learn?",
            answer:
              "You will master an industry-standard stack including Python, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, and modern LLM frameworks.",
          },
          {
            question: "Are the classes live or pre-recorded?",
            answer:
              "This program features live weekly classes where you interact with instructors in real-time, combined with self-paced learning materials and assignments.",
          },
        ],
      },
      {
        title: "Generative AI Engineering",
        slug: "generative-ai-engineering",
        survey: "generative-ai-engineering",
        description:
          "Learn to build and deploy generative AI systems using LLMs, diffusion models, RAG pipelines, and modern GenAI frameworks.",
        imageSrc: "/assets/courses/generative-ai.webp",
        thumbnail: "/assets/courses/thumbnails/ai-engineer-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 5.0,
        peopleInField: "Generative AI Engineers",
        heroFeatures: [
          {
            title: "Build Next‑Gen AI Apps, Models & Agents",
            features: [
              "Learn Prompt Engineering, LLM fine tuning, and LangChain",
              "Master GPT, Stable Diffusion, and Vector Databases",
              "Build real-world AI tools and deploy end-to-end applications",
              "Get certified and career-ready with hands-on projects",
            ],
          },
          {
            title:
              "Become a Generative AI Engineer in Months. No Experience Needed.",
            features: [
              "6 Months Instructor-Led Training + 4 Months Project Mentoring",
              "Get personalized mentorship, virtual internship, and career coaching",
              "Interview prep, job mapping, and resume optimization included",
              "Build a portfolio and gain high-income opportunities.",
            ],
          },
          {
            title:
              "Certified Generative AI Course with Real-World Projects & Career Support",
            features: [
              "With thousands of new AI jobs posted daily, now’s the time. From remote roles, global clients and career freedom, we'll help you get there.",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is One of the Most Trusted Generative AI Courses Available",
          description:
            "This course gives you the power to build with the most advanced AI tools, even if you're starting from scratch.",
          keyFeatures: [
            "No prior AI background needed, we start from the fundamentals and build up",
            "Learn by building; generate text, images, code, and workflows using real tools",
            "Get globally recognized certification + practical career launch readiness",
            "Tools you’ll master: GPT, Stable Diffusion, LangChain, Hugging Face, and more",
            "Work on hands-on projects: AI chatbots, content generators, custom LLMs, etc.",
            "Personalized mentorship and weekly feedback from industry AI engineers",
            "Unlimited access to tools, materials, project repos, and guided notebooks",
            "Flexible learning formats: live virtual classes + recorded replays",
            "Career support including resume upgrade, LinkedIn revamp, and portfolio building",
            "Peer-to-peer learning with creators, engineers, and innovators across Africa",
            "Access job boards, freelance gigs, and internship opportunities globally",
            "Interview coaching, prompt challenges, and project walkthroughs included",
          ],
        },
        courseDemands: [
          {
            title: "GenAI Market Explosion",
            description:
              "The generative AI market is expected to reach $1.3 trillion by 2032, with enterprises racing to adopt LLM-powered products.",
          },
          {
            title: "Unprecedented Talent Demand",
            description:
              "Companies like OpenAI, Google, Meta, and thousands of startups are aggressively hiring GenAI engineers worldwide.",
          },
          {
            title: "Premium Compensation",
            description:
              "GenAI specialists command salaries of $150,000–$300,000+ in top markets, with remote opportunities for global talent.",
          },
          {
            title: "Cutting-Edge Innovation",
            description:
              "GenAI is at the forefront of AI breakthroughs, offering the chance to build products that redefine industries.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No tech background? No problem. You’ll begin with Python, AI foundations, and essential tools like TensorFlow, LangChain, and OpenAI.",
          },
          {
            title: "Robust AI Curriculum",
            description:
              "Learn Deep Learning, GenAI, and Agentic AI using tools like AutoGen, TensorFlow, and Copilot Studio",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as chatbots, generative tools, and intelligent agents, guided by industry mentors.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Start from zero and learn step-by-step to build real Generative AI applications.",
          },
          {
            title: "Career Switchers",
            description:
              "Transition from traditional roles into the high-growth field of Generative AI.",
          },
          {
            title: "Engineers",
            description:
              "Already coding? Master LLMs, RAG, and Vector DBs to build next-gen software.",
          },
          {
            title: "Freelancers",
            description:
              "Offer custom AI chatbots, content tools, and automation services to clients.",
          },
          {
            title: "Founders & Creators",
            description:
              "Build AI wrappers, copilots, and SaaS products powered by modern LLMs.",
          },
          {
            title: "Students",
            description:
              "Gain cutting-edge skills to secure internships in top AI labs and startups.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Generative AI and Its Industry Applications",
            modules: [
              {
                title: "Generative AI and Its Industry Applications",
                lessons: [
                  "Generative AI Principles",
                  "Types of Generative Models",
                  "Applications of Generative Models",
                  "Machine Learning Algorithms with Generative AI",
                  "Benefits and Limitations of Generative AI",
                  "Ethical Considerations in Generative AI",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "NLP and Deep Learning",
            modules: [
              {
                title: "NLP and Deep Learning",
                lessons: [
                  "NLP Fundamentals and Text Preprocessing",
                  "Text Classification and Basic NLP Tasks",
                  "Deep Learning for NLP",
                  "Neural Networks, Backpropagation, RNNs, and LSTMs",
                  "NLP Applications using Deep Learning",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Autoencoders and GANs",
            modules: [
              {
                title: "Autoencoders and GANs",
                lessons: [
                  "Introduction to Autoencoders and Variational Autoencoders (VAEs)",
                  "GAN Architecture, Training, and Variants",
                  "Applications in Data Compression and Generation",
                  "DCGAN and CycleGAN Implementation",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Language Models and Transformers",
            modules: [
              {
                title: "Language Models and Transformers",
                lessons: [
                  "Overview of Language Models and Use Cases",
                  "The Transformer Architecture and Attention Mechanism",
                  "BERT, GPT, and Other Transformer-Based Models",
                  "Real-World Applications of Transformers",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Prompt Engineering",
            modules: [
              {
                title: "Prompt Engineering",
                lessons: [
                  "Principles and Importance of Prompt Engineering",
                  "Types of Prompting and Design Strategies",
                  "Crafting Effective Prompts and Parameter Tuning",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Working with LLMs",
            modules: [
              {
                title: "Working with LLMs",
                lessons: [
                  "LLMs and Generative AI Project Lifecycle",
                  "Pre-training, Fine-tuning, and Scaling LLMs",
                  "Reinforcement Learning from Human Feedback (RLHF)",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "LLMs for Search, Prediction, and Generation",
            modules: [
              {
                title: "LLMs for Search, Prediction, and Generation",
                lessons: [
                  "Search Query Completion and Next Word Prediction",
                  "Word Embeddings, Transformers, and Text Generation",
                  "Advanced Attention Stacking Techniques",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "LangChain for LLM Applications",
            modules: [
              {
                title: "LangChain for LLM Applications",
                lessons: [
                  "LangChain Foundations and Components",
                  "Building and Deploying LLM-Powered Apps with LangChain",
                  "Off-the-Shelf Chains and Value Propositions",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Retrieval-Augmented Generation (RAG)",
            modules: [
              {
                title: "Retrieval-Augmented Generation (RAG)",
                lessons: [
                  "RAG Concepts and Architecture",
                  "Document Loading, Splitting, and Embedding",
                  "Building RAG Models with LangChain",
                  "Chatbots and QA Systems using RAG",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Generative AI on Cloud",
            modules: [
              {
                title: "Generative AI on Cloud",
                lessons: [
                  "Cloud Computing Basics",
                  "AWS (S3, EC2, Sagemaker, CodeWhisperer, Bedrock)",
                  "Azure OpenAI and Deployment Workflows",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "ChatGPT Applications",
            modules: [
              {
                title: "ChatGPT Applications",
                lessons: [
                  "Productivity and Coding with ChatGPT",
                  "Content Creation and SEO Optimization",
                  "Data Analysis, Customer Support, and Documentation",
                ],
              },
            ],
          },
          {
            id: "12",
            title: "Python with Generative AI",
            modules: [
              {
                title: "Python with Generative AI",
                lessons: [
                  "Python Code Generation and Optimization",
                  "Tools for Generative Coding",
                  "Project Development with Python and ChatGPT",
                ],
              },
            ],
          },
          {
            id: "13",
            title: "Evaluating LLM Performance",
            modules: [
              {
                title: "Evaluating LLM Performance",
                lessons: [
                  "Metrics: Perplexity, BLEU Score, and Human Evaluation",
                  "Model Selection and Interpretation of Results",
                ],
              },
            ],
          },
          {
            id: "14",
            title: "Case Studies and In-Class Project",
            modules: [
              {
                title: "Case Studies and In-Class Project",
                lessons: [
                  "Real-World Use Cases in Business and Education",
                  "AI-Powered Text & Image Generation Project",
                ],
              },
            ],
          },
          {
            id: "15",
            title: "ML with Generative AI",
            modules: [
              {
                title: "ML with Generative AI",
                lessons: [
                  "AI & ML Essentials",
                  "Supervised, Unsupervised, and Reinforcement Learning",
                  "Predictive ML Models and Algorithms",
                ],
              },
            ],
          },
          {
            id: "16",
            title: "Generative AI Tools",
            modules: [
              {
                title: "Generative AI Tools",
                lessons: [
                  "Hugging Face Transformers, OpenAI GPT-3 API",
                  "Google Cloud AI Platform, MidJourney, DALL-E 2, Bard",
                ],
              },
            ],
          },
          {
            id: "17",
            title: "Discovering GenAI Applications",
            modules: [
              {
                title: "Discovering GenAI Applications",
                lessons: [
                  "Fraud Detection with GANs",
                  "Artistic Visual Generation with MidJourney",
                  "GitHub Copilot for Developer Efficiency",
                ],
              },
            ],
          },
          {
            id: "18",
            title: "AI Privacy & Protection Perspectives",
            modules: [
              {
                title: "AI Privacy & Protection Perspectives",
                lessons: [
                  "Data Privacy and Legal Considerations",
                  "Ethics and Regulatory Frameworks",
                ],
              },
            ],
          },
          {
            id: "19",
            title: "Generative AI for Cybersecurity",
            modules: [
              {
                title: "Generative AI for Cybersecurity",
                lessons: [
                  "GenAI Use in Intrusion Detection and Network Security",
                  "Security Operations Automation",
                  "Future Trends in AI-driven Cybersecurity",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Large Language Models (LLMs)",
              "Autonomous Agent Design",
              "LangChain & AutoGPT Frameworks",
              "Tool Calling & Memory Systems",
              "Multi-Agent Orchestration",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Designing AI Automation Workflows",
              "AI Product Thinking",
              "Use-Case Validation",
              "Technical Documentation",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Autonomous Task Agent",
            description:
              "Design an AI agent capable of executing multi-step tasks such as research, summarization, and reporting using LLMs.",
          },
          {
            title: "Project 2: AI Workflow Automation",
            description:
              "Build an agentic system that automates business workflows by integrating tools, APIs, and memory.",
          },
          {
            title: "Project 3: Multi-Agent Collaboration",
            description:
              "Create a multi-agent system where agents communicate and collaborate to solve complex problems.",
          },
          {
            title: "Project 4: AI Personal Assistant",
            description:
              "Develop a fully functional AI assistant that plans tasks, retrieves data, and adapts responses based on user feedback.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Prompt Engineer",
            description:
              "Design and optimize prompts for large language models to improve output quality and accuracy.",
          },
          {
            current: false,
            title: "LLM Engineer",
            description:
              "Develop and integrate large language models into real-world applications.",
          },
          {
            current: false,
            title: "AI Automation Engineer",
            description:
              "Build AI-driven automation systems that optimize workflows and business processes.",
          },
          {
            current: true,
            title: "Generative AI Engineer",
            description:
              "Design and deploy generative AI systems using LLMs, RAG pipelines, and modern GenAI frameworks.",
          },
          {
            current: false,
            title: "Agentic AI Engineer",
            description:
              "Build autonomous agents that can make decisions, interact with tools, and perform tasks intelligently across systems.",
          },
          {
            current: false,
            title: "AI Product Engineer",
            description:
              "Bridge AI capabilities and user needs and work with teams to scope AI-driven features and ensure they deliver value.",
          },
          {
            current: false,
            title: "AI Systems Architect",
            description:
              "Design scalable, multi-agent AI architectures for complex enterprise systems.",
          },
        ],
        teachFeatures: [
          {
            title: "Showcase GenAI Applications",
            description:
              "Build a portfolio featuring working RAG pipelines, fine-tuned models, and custom LLM agents that demonstrate real business value.",
          },
          {
            title: "Crush GenAI Technical Interviews",
            description:
              "Master questions on transformers, attention mechanisms, and vector databases to confidently pass technical screenings.",
          },
          {
            title: "Build a Maker Brand",
            description:
              "Gain recognition by sharing your GenAI demos and open-source tools on Twitter (X) and LinkedIn.",
          },
          {
            title: "Resume for the AI Era",
            description:
              "Highlight your experience with LangChain, OpenAI API, and Pinecone to stand out to recruiters looking for modern AI skills.",
          },
          {
            title: "Target High-Growth Startups",
            description:
              "Learn how to find and apply to the fastest-growing GenAI startups and unicorn companies.",
          },
          {
            title: "Connect with AI Builders",
            description:
              "Join exclusive communities of GenAI engineers and founders to find co-founders or unlisted job opportunities.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "1.3 Trillion",
            description: "Projected Generative AI Market Size by 2032",
            source: "Bloomberg Intelligence",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "35%+",
            description: "Annual growth rate for specialized GenAI roles",
            source: "LinkedIn Jobs Report",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "75% of Enterprises",
            description: "Companies planning to integrate GenAI by 2027",
            source: "Gartner",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Universal Impact",
            description:
              "Transforming creative, legal, coding, and support industries.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$140k – $250k",
            description: "Premium salaries for GenAI Specialists",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$10,000 - $18,000" },
          { location: "United Kingdom", montly: "$6,000 - $10,000" },
          { location: "Europe", montly: "$5,000 - $9,500" },
          { location: "Remote Roles", montly: "$2,000 - $7,000" },
        ],
        faqs: [
          {
            question: "What exactly is Generative AI?",
            answer:
              "Generative AI refers to algorithms (such as ChatGPT or Midjourney) that can be used to create new content, including audio, code, images, text, simulations, and videos.",
          },
          {
            question: "Do I need to know Deep Learning before taking this?",
            answer:
              "A basic understanding of ML concepts is helpful, but we cover the specific architectures (like Transformers) used in GenAI from scratch.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What frameworks will I use?",
            answer:
              "You will work extensively with LangChain, LlamaIndex, OpenAI API, Hugging Face Transformers, and vector databases like Pinecone.",
          },
          {
            question: "Can I build my own startup product during this course?",
            answer:
              "Absolutely. Many students join specifically to build an MVP (Minimum Viable Product) for their AI startup idea under expert guidance.",
          },
          {
            question: "Is this course suitable for non-programmers?",
            answer:
              "This is an engineering course, so coding is required. However, we also offer Prompt Engineering for those who want to leverage AI without deep coding.",
          },
          {
            question: "How much time should I dedicate weekly?",
            answer:
              "We recommend setting aside 8-10 hours per week for live classes, coding assignments, and project work.",
          },
          {
            question:
              "Will I learn about RAG (Retrieval Augmented Generation)?",
            answer:
              "Yes, RAG is a core module. You will learn how to connect LLMs to your own custom data sources to create knowledgeable chatbots.",
          },
          {
            question: "What is the earning potential in GenAI?",
            answer:
              "The demand is explosive. GenAI specialists often command a premium over standard software engineering salaries due to the scarcity of these skills.",
          },
          {
            question: "Does this cover Fine-Tuning models?",
            answer:
              "Yes, we cover strategies for fine-tuning open-source models (like Llama 3) on specific datasets for specialized tasks.",
          },
        ],
      },
      {
        title: "Agentic AI Engineering",
        slug: "agentic-ai-engineering",
        survey: "agentic-ai-engineering",
        description:
          "Design and implement autonomous AI agents using planning, memory, tools, and multi-agent architectures.",
        imageSrc: "/assets/courses/agentic-ai.webp",
        thumbnail: "/assets/courses/thumbnails/ai-engineer-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.8,
        peopleInField: "Agentic AI Engineers",
        heroFeatures: [
          {
            title: "Build Autonomous AI Agents & Intelligent Workflows",
            features: [
              "The most hands-on Agentic AI Bootcamp for real world impact",
              "Master LLMs, LangChain, vector databases, and multi-agent systems",
              "Build AI agents that think, reason, and act independently",
              "With real world projects, build a portfolio that stands out",
            ],
          },
          {
            title: "Become an Agentic AI Engineer in Months. Not Years",
            features: [
              "Build intelligent AI agents that drive business outcomes",
              "Get interview prep, job mapping, and resume optimization",
              "Get placement support to land roles in agentic and AI product teams",
              "Access mentorship, internships, and career placement support",
            ],
          },
          {
            title: "Secure Your Place in the Global AI Revolution",
            features: [
              "Companies urgently need engineers who build autonomous AI tools",
              "97M+ AI roles by 2025 → your skills are in demand worldwide",
              "Join a global network of future-ready AI professionals",
              "Build career pathways with top AI product teams worldwide",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is One of the Most Trusted Agentic AI Courses Available",
          description:
            "This course teaches you to build autonomous AI agents, even if you're starting from scratch",
          keyFeatures: [
            "No prior AI experience needed, we guide you step by step",
            "Build real-world agentic AI systems using tools like LangChain, ReAct, and AutoGPT",
            "Earn a globally recognized certification with practical job-readiness support",
            "Build real projects: task automation agents, autonomous chatbots, retrieval-augmented generation (RAG) systems",
            "Get mentorship and personalized weekly feedback from expert AI builders",
            "24/7 access to course tools, source code, templates, and walkthroughs",
            "Flexible learning options: live instructor-led classes + replays for anytime learning",
            "Job preparation support: optimized resume, portfolio, and LinkedIn review",
            "Join a peer community of ambitious builders, freelancers, and innovators across Africa",
            "Tap into job boards, freelance marketplaces, and startup opportunities",
          ],
        },
        courseDemands: [
          {
            title: "The Next AI Frontier",
            description:
              "Agentic AI is projected to automate 80% of knowledge work, making agent builders the most sought-after AI talent.",
          },
          {
            title: "Rapid Enterprise Adoption",
            description:
              "Major companies are deploying AI agents for customer service, operations, and product development at unprecedented scale.",
          },
          {
            title: "Premium Specialist Salaries",
            description:
              "Agentic AI engineers command top-tier compensation, often 20-40% above general AI roles due to specialized expertise.",
          },
          {
            title: "Build Autonomous Systems",
            description:
              "Lead the creation of self-operating AI systems that can reason, plan, and execute complex multi-step tasks.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No tech background? No problem. You’ll begin with Python, AI foundations, and essential tools like TensorFlow, LangChain, and OpenAI.",
          },
          {
            title: "Robust AI Curriculum",
            description:
              "Learn Deep Learning, GenAI, and Agentic AI using tools like AutoGen, TensorFlow, and Copilot Studio",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as chatbots, generative tools, and intelligent agents, guided by industry mentors.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn to build autonomous agents that can perform tasks without human intervention.",
          },
          {
            title: "Career Switchers",
            description:
              "Move into the absolute forefront of AI technology and automation.",
          },
          {
            title: "Engineers",
            description:
              "Master LangGraph, CrewAI, and AutoGen to build sophisticated multi-agent systems.",
          },
          {
            title: "Freelancers",
            description:
              "Build autonomous workforce solutions that businesses are desperate to deploy.",
          },
          {
            title: "Founders & Creators",
            description:
              "Create 'employee' agents and autonomous startups that run themselves.",
          },
          {
            title: "Students",
            description:
              "Specialize in Agentic AI to stand out in the competitive job market.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Agentic AI Essentials",
            modules: [
              {
                title: "Agentic AI Essentials",
                lessons: [
                  "Agentic AI Introduction",
                  "AI Agents vs. Agentic AI",
                  "Comparison: Agentic AI, Generative AI, and Traditional AI",
                  "Agentic AI Building Blocks",
                  "Autonomous Agents",
                  "Human in the Loops Systems",
                  "Single and Multi Agent AI Systems",
                  "Agentic AI Frameworks Overview",
                  "Ethical and Responsible AI",
                  "Agentic AI Best Practices",
                  "AI Implementation Success Stories: Case Studies",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Agentic AI Architectures and Design Patterns",
            modules: [
              {
                title: "Agentic AI Architectures and Design Patterns",
                lessons: [
                  "Agentic AI Architecture",
                  "Agentic Architecture Types",
                  "Key Components of the Agentic AI Framework",
                  "Perception Module",
                  "Cognitive Module",
                  "Action Module",
                  "Learning Module",
                  "Collaboration Module",
                  "Security Module",
                  "Agentic AI Design Patterns",
                  "Reflection Pattern",
                  "Tool Use Pattern",
                  "Planning Pattern",
                  "ReAct (Reasoning and Acting) and ReWOO (Reasoning with Open Ontology)",
                  "Multi Agent Pattern",
                  "Design Considerations",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Working with LangChain and LCEL",
            modules: [
              {
                title: "Working with LangChain and LCEL",
                lessons: [
                  "Components and Modules",
                  "Data Ingestion and Document Loaders",
                  "Text Splitting",
                  "Embeddings",
                  "Integration with Vector Databases",
                  "Introduction to Langchain Expression Language (LCEL)",
                  "Runnables",
                  "Chains",
                  "Building and Deploying with LCEL",
                  "Deployment with Langserve",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Building AI Agents with LangGraph",
            modules: [
              {
                title: "Building AI Agents with LangGraph",
                lessons: [
                  "Introduction to LangGraph",
                  "State and Memory",
                  "State Schema",
                  "State Reducer",
                  "Multiple Schemas",
                  "Trim and Filter Messages",
                  "Memory and External Memory",
                  "UX and Human-in-the-Loop (HITL)",
                  "Building Agent with LangGraph",
                  "Long Term Memory",
                  "Short vs. Long Term Memory",
                  "Memory Schema",
                  "Deployment",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Implementing Agentic RAG",
            modules: [
              {
                title: "Implementing Agentic RAG",
                lessons: [
                  "What is Agentic RAG?",
                  "Agentic RAG vs. Traditional RAG",
                  "Agentic RAG Architecture and Components",
                  "Understanding Adaptive RAG",
                  "Variants of Agentic RAG",
                  "Applications of Agentic RAG",
                  "Agentic RAG with Llamaindex",
                  "Agentic RAG with Cohere",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Large Language Models (LLMs)",
              "Autonomous Agent Design",
              "LangChain & AutoGPT Frameworks",
              "Tool Calling & Memory Systems",
              "Multi-Agent Orchestration",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Designing AI Automation Workflows",
              "AI Product Thinking",
              "Use-Case Validation",
              "Technical Documentation",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Autonomous Task Agent",
            description:
              "Design an AI agent capable of executing multi-step tasks such as research, summarization, and reporting using LLMs.",
          },
          {
            title: "Project 2: AI Workflow Automation",
            description:
              "Build an agentic system that automates business workflows by integrating tools, APIs, and memory.",
          },
          {
            title: "Project 3: Multi-Agent Collaboration",
            description:
              "Create a multi-agent system where agents communicate and collaborate to solve complex problems.",
          },
          {
            title: "Project 4: AI Personal Assistant",
            description:
              "Develop a fully functional AI assistant that plans tasks, retrieves data, and adapts responses based on user feedback.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Prompt Engineer",
            description:
              "Design and optimize prompts for large language models to improve output quality.",
          },
          {
            current: false,
            title: "LLM Engineer",
            description:
              "Develop and integrate large language models into real-world applications.",
          },
          {
            current: false,
            title: "AI Automation Engineer",
            description:
              "Build AI-driven automation systems that optimize workflows and business processes.",
          },
          {
            current: false,
            title: "Generative AI Engineer",
            description:
              "Design and deploy generative AI systems using LLMs, RAG pipelines, and modern GenAI frameworks.",
          },
          {
            current: true,
            title: "Agentic AI Engineer",
            description:
              "Design autonomous AI agents that plan, reason, and execute multi-step tasks using large language models and tools.",
          },
          {
            current: false,
            title: "AI Systems Architect",
            description:
              "Design scalable, multi-agent AI architectures for complex enterprise systems.",
          },
          {
            current: false,
            title: "Head of AI",
            description:
              "Lead AI strategy, manage engineering teams, and drive organizational AI transformation.",
          },
        ],
        teachFeatures: [
          {
            title: "Portfolio of Autonomous Agents",
            description:
              "Display complex multi-agent systems and autonomous workflows you've built using LangGraph and CrewAI.",
          },
          {
            title: "Ace System Design Interviews",
            description:
              "Learn to articulate how you design robust, fault-tolerant agentic architectures during high-level engineering interviews.",
          },
          {
            title: "Become a Thought Leader",
            description:
              "Write case studies on how your agents automate real-world tasks, positioning yourself as an expert in agentic workflows.",
          },
          {
            title: "Highlight Agentic Skills",
            description:
              "Tailor your resume to emphasize orchestration, tool-use, and memory management skills that are rare and highly valued.",
          },
          {
            title: "Land Roles at AI Labs",
            description:
              "Target specialized roles at top AI research labs and companies building the next generation of autonomous software.",
          },
          {
            title: "Network with Automation Experts",
            description:
              "Connect with the niche community of engineers pushing the boundaries of what autonomous agents can do.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Fastest Growing",
            description: "Agentic workflows are the top trend for 2025",
            source: "Sequoia Capital",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "50% Productivity",
            description: "Gain expected from autonomous agent adoption",
            source: "Microsoft Work Trend Index",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "$200 Billion+",
            description: "Potential economic impact of Agentic AI",
            source: "Goldman Sachs",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Automation 2.0",
            description: "Moving from chatbots to action-taking systems.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$150k – $280k",
            description: "Top-tier compensation for Agentic Engineers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$11,000 - $20,000" },
          { location: "United Kingdom", montly: "$7,000 - $11,000" },
          { location: "Europe", montly: "$6,000 - $10,000" },
          { location: "Remote Roles", montly: "$2,500 - $8,000" },
        ],
        faqs: [
          {
            question: "What are AI Agents?",
            answer:
              "AI Agents are systems that use LLMs as a reasoning engine to perform actions, use tools, and make decisions to achieve a goal autonomously.",
          },
          {
            question: "Is this different from standard chatbot development?",
            answer:
              "Yes. Chatbots talk; Agents act. This course focuses on building systems that can browse the web, run code, and orchestrate complex workflows.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What tools will I learn?",
            answer:
              "You will master frameworks specifically designed for agents, such as LangGraph, CrewAI, AutoGen, and advanced OpenAI function calling.",
          },
          {
            question: "Do I need strong Python skills?",
            answer:
              "Intermediate Python skills are recommended as building agentic workflows involves complex logic and API integration.",
          },
          {
            question: "Will I build multi-agent systems?",
            answer:
              "Yes, a key part of the curriculum is orchestrating 'teams' of agents that collaborate to solve larger problems.",
          },
          {
            question: "How does this help my career?",
            answer:
              "Agentic AI is considered the next frontier after GenAI. Mastering this puts you ahead of 99% of other AI engineers.",
          },
          {
            question: "Are there real-world projects?",
            answer:
              "Yes, you might build an autonomous research analyst, a coding assistant that fixes bugs, or a personal travel agent that books flights.",
          },
          {
            question: "Can I take this if I am a beginner in AI?",
            answer:
              "We recommend having some familiarity with LLMs or taking our Generative AI course first, though ambitious beginners are welcome.",
          },
          {
            question: "Is the course live?",
            answer:
              "Yes, the course includes live weekly sessions for code-alongs and Q&A, supported by recorded content.",
          },
        ],
      },
      {
        title: "Certified NLP Expert",
        slug: "certified-nlp-specialist",
        survey: "certified-nlp-specialist",
        description:
          "Master natural language processing techniques including transformers, embeddings, text classification, and information extraction.",
        imageSrc: "/assets/courses/nlp-expert.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "interactive",
        rating: 4.7,
        peopleInField: "NLP Experts",
        heroFeatures: [
          {
            title: "Master Language Understanding & Generation with AI",
            features: [
              "Master Natural Language Processing from beginner to expert level",
              "Train AI to understand, analyze, and generate human language",
              "Work on real world projects and build a solid NLP portfolio",
              "Learn Python, NLTK, spaCy, HuggingFace Transformers, and more",
            ],
          },
          {
            title: "Become a Certified NLP Expert Companies Can’t Ignore",
            features: [
              "Learn how to build smart language models, chatbots, and AI tools",
              "Get mentorship, virtual internship, and expert career guidance",
              "Resume revamp, job mapping, and interview support included",
              "Finish with a portfolio and certification that opens global doors",
            ],
          },
          {
            title:
              "Industry-Relevant NLP Certification with Real Projects & Career Mentorship",
            features: [
              "NLP is reshaping industries from finance to healthcare. Gain the skills top companies want and step into a world of opportunity.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is One of the Most Trusted NLP Courses Available",
          description:
            "This course gives you the tools to understand, generate, and analyze human language using the latest NLP technologies, even if you're starting from zero. You’ll go beyond just theory",
          keyFeatures: [
            "No prior experience required, we begin with Python, NLP basics, and build your skill step-by-step.",
            "Learn by doing. Build chatbots, sentiment analyzers, summarizers, translators, and more",
            "Get a globally respected NLP certification + career readiness for top-tier roles",
            "Complete real-world NLP projects: resume classifiers, topic models, RAG apps, etc.",
            "Receive weekly mentorship and feedback from practicing NLP engineers",
            "Unlimited access to course materials, code templates, datasets, and project files",
            "Flexible formats: join live classes or learn on your schedule with full replays",
            "Get career support including resume and LinkedIn revamp, mock interviews, and GitHub prep",
            "Perfect for future NLP engineers, data scientists, AI product creators, and tech founders",
          ],
        },
        courseDemands: [
          {
            title: "Language AI Boom",
            description:
              "NLP market is expected to exceed $43 billion by 2028, driven by chatbots, search, and content automation.",
          },
          {
            title: "Critical AI Specialization",
            description:
              "Every AI assistant, search engine, and content platform relies on NLP, creating constant demand for specialists.",
          },
          {
            title: "Competitive NLP Salaries",
            description:
              "NLP engineers earn $120,000-$200,000+ globally, with remote opportunities across tech, healthcare, and finance.",
          },
          {
            title: "Foundation for LLM Work",
            description:
              "NLP expertise is essential for building and fine-tuning large language models powering modern AI products.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No tech background? No problem. You’ll begin with Python, AI foundations, and essential tools like TensorFlow, LangChain, and OpenAI.",
          },
          {
            title: "Robust AI Curriculum",
            description:
              "Learn Deep Learning, GenAI, and Agentic AI using tools like AutoGen, TensorFlow, and Copilot Studio",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as chatbots, generative tools, and intelligent agents, guided by industry mentors.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Understand how computers understand human language and build your first NLP models.",
          },
          {
            title: "Career Switchers",
            description:
              "Transition from linguistics or general tech into specialized NLP engineering.",
          },
          {
            title: "Engineers",
            description:
              "Master Hugging Face, Transformers, and Spacy to build advanced text processing systems.",
          },
          {
            title: "Freelancers",
            description:
              "Offer sentiment analysis, text classification, and chatbot development services.",
          },
          {
            title: "Founders & Creators",
            description:
              "Build language-aware applications and content processing tools.",
          },
          {
            title: "Students",
            description:
              "Acquire specialized skills in one of the most critical subfields of AI.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Introduction to Natural Language Processing",
            modules: [
              {
                title: "Introduction to Natural Language Processing",
                lessons: [
                  "Overview of NLP",
                  "NLP Approaches",
                  "Machine Learning and NLP",
                  "Text Pre-processing Techniques",
                  "Feature Extraction – Bag of Words",
                  "Count Vectorizer and TF-IDF",
                  "Linear Models for Sentiment Analysis",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Language Modelling",
            modules: [
              {
                title: "Language Modelling",
                lessons: [
                  "N-Gram Language Models",
                  "Hidden Markov Models",
                  "Sequential Models for Named Entity Recognition (NER)",
                  "Neural Language Models",
                  "LSTM-Based NLP Modelling",
                  "Word2Vec and Doc2Vec",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Sequence-to-Sequence Models",
            modules: [
              {
                title: "Sequence-to-Sequence Models",
                lessons: [
                  "Machine Translation Techniques",
                  "Encoder-Decoder Architecture",
                  "Attention Mechanism",
                  "Building Conversational Chatbots",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Transformers and BERT",
            modules: [
              {
                title: "Transformers and BERT",
                lessons: [
                  "Transformer Architecture",
                  "BERT: State-of-the-Art NLP Technique",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Text Preprocessing",
              "Transformer Models",
              "Sentiment & Topic Modeling",
              "LLM Fine-Tuning",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Research & Experimentation", "AI Language Applications"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Text Preprocessing Pipeline",
            description: "Build preprocessing pipelines for text data.",
          },
          {
            title: "Project 2: Sentiment Analysis System",
            description: "Develop a sentiment classification model.",
          },
          {
            title: "Project 3: Topic Modeling",
            description: "Extract topics from large text corpora.",
          },
          {
            title: "Project 4: NLP Application",
            description: "Deploy an NLP-powered application.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "ML Engineer",
            description:
              "Build predictive models and integrate machine learning into production environments.",
          },
          {
            current: true,
            title: "NLP Engineer",
            description:
              "Develop systems that understand and generate human language using transformers and embeddings.",
          },
          {
            current: false,
            title: "AI Engineer",
            description: "Build AI applications incorporating NLP models.",
          },
          {
            current: false,
            title: "LLM Engineer",
            description:
              "Work with large language models in production systems.",
          },
          {
            current: false,
            title: "Generative AI Engineer",
            description:
              "Design and deploy generative AI systems using LLMs and modern GenAI frameworks.",
          },
          {
            current: false,
            title: "AI Research Engineer",
            description:
              "Advance NLP research and experimentation at the cutting edge.",
          },
          {
            current: false,
            title: "AI Research Lead",
            description:
              "Lead research teams and drive innovation in natural language AI.",
          },
        ],
        teachFeatures: [
          {
            title: "Build an NLP Project Gallery",
            description:
              "Showcase sentiment analysis tools, chatbots, and text summarizers in a professional portfolio.",
          },
          {
            title: "Master NLP Algorithms Interviews",
            description:
              "Deep dive into interview prep for tokenization, embeddings, BERT, and transformer architectures.",
          },
          {
            title: "Contribute to Hugging Face",
            description:
              "Upload your fine-tuned models and datasets to Hugging Face to demonstrate your contribution to the community.",
          },
          {
            title: "NLP-Focused Resume",
            description:
              "Structure your resume to highlight your proficiency with Spacy, NLTK, and PyTorch for language tasks.",
          },
          {
            title: "Apply to Data-Rich Companies",
            description:
              "Identify companies with massive text datasets (legal, medical, finance) that desperately need NLP experts.",
          },
          {
            title: "Join the NLP Community",
            description:
              "Engage with computational linguists and NLP researchers to stay ahead of the curve.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "$43 Billion",
            description: "Global NLP market valuation by 2028",
            source: "Fortune Business Insights",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "30% Growth",
            description: "Year-over-year demand for NLP Engineers",
            source: "U.S. Bureau of Labor Statistics",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Core Technology",
            description: "NLP powers search, translation, and assistants",
            source: "IBM AI Index",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Diverse Sectors",
            description: "Critical for Law, Healthcare, and Customer Service.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$130k – $210k",
            description: "Average base pay for NLP Scientists",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$9,000 - $16,000" },
          { location: "United Kingdom", montly: "$5,500 - $9,500" },
          { location: "Europe", montly: "$5,000 - $9,000" },
          { location: "Remote Roles", montly: "$2,000 - $6,500" },
        ],
        faqs: [
          {
            question: "What is Natural Language Processing (NLP)?",
            answer:
              "NLP is a branch of AI that gives computers the ability to understand, interpret, and manipulate human language.",
          },
          {
            question: "Why should I specialize in NLP?",
            answer:
              "Text is the most abundant data on the web. NLP powers search, translation, customer support automation, and legal tech, creating massive job demand.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What libraries will I use?",
            answer:
              "You will gain deep expertise in Hugging Face Transformers, Spacy, NLTK, and PyTorch/TensorFlow for text.",
          },
          {
            question: "Does this cover Large Language Models (LLMs)?",
            answer:
              "Yes, modern NLP is dominated by LLMs. We cover the architecture (Transformers) that makes them work, as well as traditional techniques.",
          },
          {
            question: "What kind of math is involved?",
            answer:
              "Basic linear algebra and probability are useful, but we teach the necessary concepts intuitively as they apply to vectors and embeddings.",
          },
          {
            question: "Will I build a chatbot?",
            answer:
              "Yes, building conversational agents and chatbots is a standard project, along with sentiment analyzers and text summarizers.",
          },
          {
            question: "Is this course relevant for data scientists?",
            answer:
              "Absolutely. Specializing in NLP is a powerful way for generalist Data Scientists to increase their value and earning potential.",
          },
          {
            question: "How are classes conducted?",
            answer:
              "Classes are interactive and live, allowing you to debug code with instructors and discuss complex linguistic nuances.",
          },
          {
            question: "Can I get a job after this course?",
            answer:
              "Yes, the curriculum is designed to prepare you for roles like NLP Engineer, AI Researcher, and Language Data Scientist.",
          },
        ],
      },
      {
        title: "Certified ML for AI",
        slug: "certified-ml-for-ai",
        survey: "certified-ml-for-ai",
        description:
          "Build a strong foundation in supervised and unsupervised learning, feature engineering, model evaluation, and ML workflows.",
        imageSrc: "/assets/courses/machine-learning.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.6,
        peopleInField: "ML Engineers",
        heroFeatures: [
          {
            title: "Learn the Skill Behind Today’s Smartest Technologies",
            features: [
              "A complete ML Bootcamp designed to get you into high-paying roles globally",
              "Learn, build, and earn with machine learning from beginner to advanced",
              "Hands-on projects to help you build a standout ML portfolio",
              "Learn Python, Supervised & Unsupervised Learning, Neural Networks, etc.",
            ],
          },
          {
            title: "Stand Out as a Certified Machine Learning Expert",
            features: [
              "Get real-world training and build deployable ML solutions",
              "One-on-one mentorship, career coaching, and internship opportunities",
              "Resume revamp, mock interviews, and job-readiness support",
              "Global placement support and interview opportunities",
            ],
          },
          {
            title: "Be Part of the Global ML Workforce. ",
            features: [
              "The ML market is projected to reach $204.3B by 2030. Companies are hiring and with us, you can be their top choice!",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is One of the Most Trusted Machine Learning Courses Available",
          description:
            "This course equips you with the practical skills to build intelligent systems that learn from data, even if you're starting from zero.",
          keyFeatures: [
            "No tech background needed, we start with Python and core ML principles.",
            "Learn by building real ML projects: fraud detection, recommendation engines, predictive models.",
            "Led by expert ML engineers with live classes, replays, and ongoing mentorship.",
            "Get globally respected certification and career readiness for top ML roles.",
            "Lifetime access to materials, templates, and code walkthroughs.",
            "Hands-on practice with tools like Scikit-learn, TensorFlow, PyTorch, and Hugging Face.",
            "Includes career support: resume reviews, LinkedIn optimization, and job board access.",
            "Perfect for beginners, career switchers, and tech professionals looking to upskill.",
            "Get access to NLP job boards, internships, freelance leads, and referrals",
          ],
        },
        courseDemands: [
          {
            title: "Universal AI Foundation",
            description:
              "Machine learning is the core skill powering every AI application, from recommendation systems to autonomous vehicles.",
          },
          {
            title: "Massive Talent Gap",
            description:
              "Over 300,000 ML engineer positions are unfilled globally, with demand growing 40% year-over-year.",
          },
          {
            title: "Strong Entry Salaries",
            description:
              "ML engineers earn $100,000-$180,000+ in major markets, with growth potential into senior AI roles.",
          },
          {
            title: "Gateway to AI Careers",
            description:
              "ML expertise opens doors to data science, AI engineering, research, and specialized AI roles.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No tech background? No problem. You’ll begin with Python, AI foundations, and essential tools like TensorFlow, LangChain, and OpenAI.",
          },
          {
            title: "Robust AI Curriculum",
            description:
              "Learn Deep Learning, GenAI, and Agentic AI using tools like AutoGen, TensorFlow, and Copilot Studio",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as chatbots, generative tools, and intelligent agents, guided by industry mentors.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "The perfect starting point to understand how machines learn from data.",
          },
          {
            title: "Career Switchers",
            description:
              "Build the foundational skills required for almost every advanced data or AI role.",
          },
          {
            title: "Engineers",
            description:
              "Master Scikit-learn and predictive modeling to add intelligence to your applications.",
          },
          {
            title: "Freelancers",
            description:
              "Offer predictive analytics and custom model building services to clients.",
          },
          {
            title: "Founders & Creators",
            description:
              "Understand the mechanics of AI to build feasible and effective data products.",
          },
          {
            title: "Students",
            description:
              "Build a solid portfolio of ML projects to showcase to future employers.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Machine Learning Introduction",
            modules: [
              {
                title: "Machine Learning Introduction",
                lessons: [
                  "What is ML? ML vs AI",
                  "ML Workflow, Popular ML Algorithms",
                  "Clustering, Classification and Regression",
                  "Supervised vs Unsupervised",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "ML Algorithm – Linear Regression",
            modules: [
              {
                title: "ML Algorithm – Linear Regression",
                lessons: [
                  "Introduction to Linear Regression",
                  "How it Works: Regression and Best Fit Line",
                  "Modeling and Evaluation in Python",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "ML Algorithm – Logistic Regression",
            modules: [
              {
                title: "ML Algorithm – Logistic Regression",
                lessons: [
                  "Introduction to Logistic Regression",
                  "How it Works: Classification & Sigmoid Curve",
                  "Modeling and Evaluation in Python",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "ML Algorithm – KNN (K-Nearest Neighbors)",
            modules: [
              {
                title: "ML Algorithm – KNN (K-Nearest Neighbors)",
                lessons: [
                  "Introduction to KNN",
                  "How it Works: Nearest Neighbor Concept",
                  "Modeling and Evaluation in Python",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "ML Algorithm – K Means Clustering",
            modules: [
              {
                title: "ML Algorithm – K Means Clustering",
                lessons: [
                  "Understanding Clustering (Unsupervised)",
                  "K Means Algorithm",
                  "How it Works: K Means Theory",
                  "Modeling in Python",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Principal Component Analysis (PCA)",
            modules: [
              {
                title: "Principal Component Analysis (PCA)",
                lessons: [
                  "Building Blocks of PCA",
                  "How it Works: Finding Principal Components",
                  "Modeling PCA in Python",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Visualization with Python",
            modules: [
              {
                title: "Visualization with Python",
                lessons: [
                  "Visualization Packages (Matplotlib)",
                  "Components of a Plot, Sub-Plots",
                  "Basic Plots: Line, Bar, Pie, Scatter",
                  "Advanced Python Data Visualizations",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Python NumPy & Pandas Package",
            modules: [
              {
                title: "Python NumPy & Pandas Package",
                lessons: [
                  "NumPy & Pandas Functions",
                  "Array – Data Structure",
                  "Core NumPy Functions",
                  "Matrix Operations",
                  "DataFrame and Series – Data Structure",
                  "Data Munging with Pandas",
                  "Imputation and Outlier Analysis",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Advanced Machine Learning",
              "Feature Engineering",
              "Model Optimization",
              "Deployment Pipelines",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["ML System Design", "Technical Interviews"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Supervised Learning Models",
            description: "Train and evaluate supervised ML models.",
          },
          {
            title: "Project 2: Feature Engineering Pipeline",
            description: "Design advanced feature engineering workflows.",
          },
          {
            title: "Project 3: Model Optimization",
            description: "Optimize models using hyperparameter tuning.",
          },
          {
            title: "Project 4: ML Deployment",
            description: "Deploy machine learning models into production.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Machine Learning Engineer",
            description:
              "Design, train, and deploy machine learning models at scale.",
          },
          {
            current: false,
            title: "Senior ML Engineer",
            description: "Optimize ML systems and lead complex projects.",
          },
          {
            current: false,
            title: "AI Engineer",
            description: "Integrate ML into AI-driven applications.",
          },
          {
            current: false,
            title: "ML Architect",
            description: "Design enterprise-level ML architectures.",
          },
        ],
        teachFeatures: [
          {
            title: "Create a Machine Learning Portfolio",
            description:
              "Host your predictive models, data visualizations, and Jupyter notebooks on GitHub to prove your coding skills.",
          },
          {
            title: "Crack the ML Interview",
            description:
              "Practice answering core ML questions on regression, classification, bias-variance tradeoff, and model evaluation.",
          },
          {
            title: "Share Your Learning Journey",
            description:
              "Write blog posts explaining complex ML concepts simply to demonstrate your depth of understanding.",
          },
          {
            title: "Optimize Your Resume for ML",
            description:
              "Ensure your resume clearly lists your Scikit-Learn proficiency and the business impact of your models.",
          },
          {
            title: "Find Your Niche",
            description:
              "Learn to apply your ML skills to specific industries like healthcare, finance, or retail.",
          },
          {
            title: "Connect with Data Professionals",
            description:
              "Network with data scientists and ML engineers to learn about industry trends and job openings.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "#1 Job",
            description: "Machine Learning Engineer ranked top emerging job",
            source: "LinkedIn Emerging Jobs",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "38% Growth",
            description: "Projected job market expansion through 2030",
            source: "U.S. Bureau of Labor Statistics",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "$209 Billion",
            description: "ML Market size expected by 2029",
            source: "Statista",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Business Critical",
            description:
              "ML optimizes supply chains, fraud detection, and sales.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$125k – $200k",
            description: "Competitive salaries for ML Engineers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$8,500 - $15,500" },
          { location: "United Kingdom", montly: "$5,000 - $9,000" },
          { location: "Europe", montly: "$4,500 - $8,500" },
          { location: "Remote Roles", montly: "$2,000 - $6,000" },
        ],
        faqs: [
          {
            question: "What is the difference between AI and ML?",
            answer:
              "AI is the broad science of mimicking human abilities; Machine Learning is a specific subset that trains a machine how to learn from data.",
          },
          {
            question: "Is this course beginner-friendly?",
            answer:
              "Yes, this course is designed to be the perfect entry point into the world of AI, starting with the core concepts of how machines learn.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What programming language is used?",
            answer:
              "We strictly use Python, as it is the industry standard for Machine Learning.",
          },
          {
            question: "Do I need a strong math background?",
            answer:
              "You need basic arithmetic and algebra. We teach the specific Statistics and Calculus concepts required for ML within the course.",
          },
          {
            question: "What projects will I work on?",
            answer:
              "You will build predictive models for real estate prices, classify customer churn, and detect spam emails using real-world datasets.",
          },
          {
            question: "Will I learn Deep Learning here?",
            answer:
              "This course focuses on foundational ML algorithms (Regression, Trees, SVMs). Deep Learning is covered in our advanced specialist course.",
          },
          {
            question: "What tools will I master?",
            answer:
              "You will become proficient in Scikit-Learn, Pandas, NumPy, Matplotlib, and Jupyter Notebooks.",
          },
          {
            question: "How does this help my career?",
            answer:
              "Machine Learning is the most requested skill in data roles. It opens doors to Data Science and AI Engineering careers.",
          },
          {
            question: "Is career support included?",
            answer:
              "Yes, we help you polish your resume and portfolio to showcase your new ML skills to employers.",
          },
        ],
      },
      {
        title: "Certified Deep Learning",
        slug: "deep-learning-specialist",
        survey: "deep-learning-specialist",
        description:
          "Deep dive into neural networks, CNNs, RNNs, transformers, and training deep models using PyTorch and TensorFlow.",
        imageSrc: "/assets/courses/deep-learning.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.9,
        peopleInField: "DL Engineers",
        heroFeatures: [
          {
            title: "Master Deep Learning from Scratch, Beginner to Advanced",
            features: [
              "Step into one of tech’s most in-demand fields with practical learning",
              "Understand neural networks, CNNs, RNNs, transformers, and more",
              "Work on real world projects to build a standout deep learning portfolio",
              "Learn from experts and gain in-demand practical skills",
            ],
          },
          {
            title:
              "Become a Certified Deep Learning Engineer. Build and Deploy AI Models",
            features: [
              "Develop deep learning models that solve real-world problems",
              "Get personalized mentorship, virtual internship, and career coaching",
              "Interview prep, job mapping, and resume optimization included",
              "Get job-ready with virtual internships and placement support",
            ],
          },
          {
            title:
              "Ride the Deep Learning Wave. Globally Relevant, Africa-Powered",
            features: [
              "Companies need trained Deep Learning Engineers. Top talent earns over $200K/year. We’ll help you get job-ready.",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is One of the Most Trusted Deep Learning Courses Available",
          description:
            "This course equips you with the skills to build neural networks and advanced AI models, even if you're starting from scratch.",
          keyFeatures: [
            "No tech background needed, begin with Python, linear algebra, and DL foundations.",
            "Learn by building real projects: image classifiers, sentiment analyzers, GANs, and more.",
            "Led by expert deep learning engineers with live classes, replays, and personalized mentorship.",
            "Earn a globally respected deep learning certificate and career readiness for top AI roles.",
            "Get lifetime access to lessons, model templates, and guided labs.",
            "Hands-on with tools like TensorFlow, PyTorch, Keras, and Hugging Face Transformers.",
          ],
        },
        courseDemands: [
          {
            title: "Powering AI Breakthroughs",
            description:
              "Deep learning drives image recognition, speech processing, language models, and autonomous systems.",
          },
          {
            title: "Research & Industry Demand",
            description:
              "Tech giants and AI labs are competing for deep learning talent to advance state-of-the-art models.",
          },
          {
            title: "Top-Tier Compensation",
            description:
              "Deep learning specialists earn $130,000-$250,000+ globally, especially in research and scaling roles.",
          },
          {
            title: "Build Next-Gen AI",
            description:
              "Master the architectures behind GPT, DALL-E, and other breakthrough AI systems.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No tech background? No problem. You’ll begin with Python, AI foundations, and essential tools like TensorFlow, LangChain, and OpenAI.",
          },
          {
            title: "Robust DL Curriculum",
            description:
              "Learn Deep Learning, GenAI, and Agentic AI using tools like AutoGen, TensorFlow, and Copilot Studio",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as chatbots, generative tools, and intelligent agents, guided by industry mentors.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Dive deep into neural networks and learn how modern AI actually 'thinks'.",
          },
          {
            title: "Career Switchers",
            description:
              "Aim for high-end research and engineering roles in computer vision or NLP.",
          },
          {
            title: "Engineers",
            description:
              "Master PyTorch and TensorFlow to build and train complex neural architectures.",
          },
          {
            title: "Freelancers",
            description:
              "Build specialized vision or audio models for niche client applications.",
          },
          {
            title: "Founders & Creators",
            description:
              "Innovate by building custom deep learning models for unique use cases.",
          },
          {
            title: "Students",
            description:
              "Prepare for graduate studies or R&D roles with rigorous deep learning training.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Foundations of Machine Learning",
            modules: [
              {
                title: "Foundations of Machine Learning",
                lessons: [
                  "Data Science and ML Introduction",
                  "Mathematics for Machine Learning",
                  "Learning Methods (Supervised, Unsupervised, Reinforcement)",
                  "Popular Machine Learning Algorithms",
                  "Building Regression Models",
                  "Building Classification Models",
                  "Beyond Traditional ML: What Comes Next",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Introduction to TensorFlow 2.x",
            modules: [
              {
                title: "Introduction to TensorFlow 2.x",
                lessons: [
                  "Overview of TensorFlow and its Ecosystem",
                  "Installation and Setup",
                  "TensorFlow 2.x Eager Execution Mode",
                  "TensorFlow + Keras Integration",
                  "Basic Operations in TensorFlow",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Core Learning Algorithms in TensorFlow",
            modules: [
              {
                title: "Core Learning Algorithms in TensorFlow",
                lessons: [
                  "Implementing Regression Models",
                  "Implementing Classification Models",
                  "Training & Evaluation Techniques",
                  "Building Real Models with Keras",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Neural Networks from Scratch",
            modules: [
              {
                title: "Neural Networks from Scratch",
                lessons: [
                  "Structure and Concepts of Neural Networks",
                  "Feed Forward Algorithm",
                  "Backpropagation and Gradient Descent",
                  "Building a Neural Network from Scratch using NumPy",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Neural Networks with TensorFlow 2.x",
            modules: [
              {
                title: "Neural Networks with TensorFlow 2.x",
                lessons: [
                  "Intro to Neural Networks in TF2.x",
                  "Building Deep Learning Models with Keras",
                  "MNIST Digit Classification Project",
                  "Model Optimization and Evaluation",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Computer Vision with CNNs",
            modules: [
              {
                title: "Computer Vision with CNNs",
                lessons: [
                  "CNN Architecture and Fundamentals",
                  "Building CNNs in Keras",
                  "Transfer Learning in CNNs",
                  "Style Transfer Applications",
                  "Image Classification on Flowers Dataset",
                  "X-ray Image Analysis with CNN",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Recurrent Neural Networks (RNNs)",
            modules: [
              {
                title: "Recurrent Neural Networks (RNNs)",
                lessons: [
                  "Understanding Sequential Data",
                  "RNNs, LSTMs, and GRUs Explained",
                  "Real-World RNN Use Cases",
                  "Sequence Modeling in TensorFlow",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Natural Language Processing (NLP) with RNNs",
            modules: [
              {
                title: "Natural Language Processing (NLP) with RNNs",
                lessons: [
                  "NLP Concepts Overview",
                  "Building NLP Models with RNNs",
                  "Tokenization, Embeddings, and Preprocessing",
                  "Sequence-to-Sequence NLP Tasks in TensorFlow",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Transformers and BERT",
            modules: [
              {
                title: "Transformers and BERT",
                lessons: [
                  "Introduction to Transformers",
                  "Attention Mechanism and Encoder-Decoder Models",
                  "BERT and State-of-the-Art NLP Techniques",
                  "Applications of BERT in Real Projects",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Generative Adversarial Networks (GANs)",
            modules: [
              {
                title: "Generative Adversarial Networks (GANs)",
                lessons: [
                  "GAN Concepts and Architecture",
                  "Implementing GANs with TensorFlow 2.x",
                  "GAN Use Cases and Project Ideas",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Reinforcement Learning Basics",
            modules: [
              {
                title: "Reinforcement Learning Basics",
                lessons: [
                  "Fundamentals of Reinforcement Learning",
                  "Key RL Terminology and Concepts",
                  "Building a Basic RL Model",
                  "Practical RL Applications",
                ],
              },
            ],
          },
          {
            id: "12",
            title: "Deploying Deep Learning Models",
            modules: [
              {
                title: "Deploying Deep Learning Models",
                lessons: [
                  "Introduction to AWS for Deep Learning",
                  "Using AWS SageMaker for Model Deployment",
                  "Building and Deploying End-to-End DL Applications in the Cloud",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Neural Networks",
              "CNNs & RNNs",
              "Backpropagation",
              "Deep Learning Frameworks",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Research-Oriented Thinking", "Model Explainability"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Neural Network Fundamentals",
            description: "Build neural networks from scratch.",
          },
          {
            title: "Project 2: Image Classification",
            description: "Train CNNs for image recognition tasks.",
          },
          {
            title: "Project 3: Sequence Modeling",
            description: "Apply RNNs for sequence prediction.",
          },
          {
            title: "Project 4: Deep Learning Application",
            description: "Deploy a deep learning model for real-world use.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "ML Engineer",
            description:
              "Assist in building and testing machine learning models under supervision.",
          },
          {
            current: true,
            title: "Deep Learning Engineer",
            description:
              "Build and optimize neural networks for complex AI tasks.",
          },
          {
            current: false,
            title: "Computer Vision Engineer",
            description: "Apply deep learning to image and video data.",
          },
          {
            current: false,
            title: "NLP Engineer",
            description: "Use deep learning for language-based applications.",
          },
          {
            current: false,
            title: "Senior Deep Learning Engineer",
            description:
              "Lead complex neural network projects and mentor junior engineers.",
          },
          {
            current: false,
            title: "AI Research Scientist",
            description: "Conduct advanced research in deep learning.",
          },
          {
            current: false,
            title: "Principal AI Scientist",
            description:
              "Drive breakthrough research and define AI strategy for organizations.",
          },
        ],
        teachFeatures: [
          {
            title: "Showcase Deep Learning Models",
            description:
              "Build a portfolio featuring computer vision and advanced neural network projects with visual demos.",
          },
          {
            title: "Master Neural Network Interviews",
            description:
              "Get ready to explain backpropagation, CNN architectures, and hyperparameter tuning on a whiteboard.",
          },
          {
            title: "Publish Technical Articles",
            description:
              "Write technical breakdowns of research papers or your own experiments to build authority.",
          },
          {
            title: "Highlight Framework Expertise",
            description:
              "Make your TensorFlow and PyTorch skills pop on your resume to attract recruiters from top tech firms.",
          },
          {
            title: "Target R&D Roles",
            description:
              "Learn how to position yourself for research-heavy and advanced engineering roles.",
          },
          {
            title: "Engage with AI Researchers",
            description:
              "Follow and interact with top researchers to keep your knowledge cutting-edge.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "High Demand",
            description: "Deep Learning expertise shortage globally",
            source: "Tencent Research",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "42% CAGR",
            description: "Deep Learning market growth rate",
            source: "Grand View Research",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Vision & Voice",
            description: "Powering autonomous vehicles and smart devices",
            source: "NVIDIA AI Report",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Research Focus",
            description: "Key for pharma, automotive, and big tech R&D.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$140k – $230k",
            description: "High compensation for specialized DL roles",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$10,000 - $17,000" },
          { location: "United Kingdom", montly: "$6,000 - $10,000" },
          { location: "Europe", montly: "$5,500 - $9,500" },
          { location: "Remote Roles", montly: "$2,500 - $7,000" },
        ],
        faqs: [
          {
            question: "What is Deep Learning?",
            answer:
              "Deep Learning is a specialized subset of ML inspired by the human brain structure (neural networks), capable of learning from unstructured data like images and audio.",
          },
          {
            question: "Do I need prior ML experience?",
            answer:
              "It is highly recommended. You should understand basic ML concepts (training, testing, overfitting) before diving into neural networks.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What frameworks will I learn?",
            answer:
              "We focus on PyTorch and TensorFlow/Keras, the two most popular frameworks in industry and research.",
          },
          {
            question: "Will I work with Computer Vision?",
            answer:
              "Yes, you will build CNNs (Convolutional Neural Networks) to classify images and detect objects.",
          },
          {
            question: "What hardware do I need?",
            answer:
              "A standard laptop is fine. We will use cloud-based environments like Google Colab for training models on GPUs.",
          },
          {
            question: "Does this cover Transformers?",
            answer:
              "Yes, we cover modern architectures including Transformers, which are the backbone of today's Generative AI.",
          },
          {
            question: "What kind of jobs can I get?",
            answer:
              "This prepares you for specialized roles like Computer Vision Engineer, AI Researcher, and Deep Learning Engineer.",
          },
          {
            question: "Is there math involved?",
            answer:
              "Yes, Deep Learning involves calculus and linear algebra (matrices). We review these concepts as we apply them.",
          },
          {
            question: "Are the projects portfolio-ready?",
            answer:
              "Absolutely. You will build complex projects like image classifiers and neural machine translators to showcase on GitHub.",
          },
        ],
      },
      {
        title: "Maths & Stats for AI",
        slug: "mathematics-and-statistics-for-ai",
        survey: "math-statistics-for-ai",
        description:
          "Learn the linear algebra, probability, statistics, and optimization concepts required to understand and build AI models.",
        imageSrc: "/assets/courses/maths-stats.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 weeks",
        format: "live, online",
        rating: 4.7,
        peopleInField: "AI Research Engineers",
        heroFeatures: [
          {
            title: "Master the Math & Science Behind Modern AI",
            features: [
              "Learn Linear Algebra, Calculus, Probability, and Statistics for AI",
              "Build solid foundations in Python, Numpy, and scientific computing",
              "Apply core concepts to real AI tasks and practical datasets",
              "Get certified and prepared for technical AI roles",
            ],
          },
          {
            title: "No Math Degree? No Problem. Learn What AI Experts Know.",
            features: [
              "6 Months Instructor-Guided Lessons + 4 Months Mentorship",
              "Step-by-step support, weekly assessments, and personal guidance",
              "Bridge your math/science gap and accelerate your AI career path",
              "Gain confidence, credibility, and clarity for advanced AI learning",
            ],
          },
          {
            title: "Certified Bootcamp in AI Math & Science Essentials",
            features: [
              "AI is built on math. Build that foundation here. Whether you’re transitioning into tech or deepening your AI skillset, this bootcamp sets you up for success.",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is One of the Most Trusted Foundation Courses in Math and Science for AI",
          description:
            "This course equips you with the mathematical and scientific foundations required to build intelligent systems even if you’re starting from zero.",
          keyFeatures: [
            "No tech background needed, we start from the fundamentals and build up",
            "Learn by solving real AI math problems: matrix operations, gradient descent, Bayes theorem, and probability distributions.",
            "Live classes led by AI researchers and data scientists, plus replays and 1-on-1 mentorship.",
            "Gain a globally recognized certificate that validates your readiness for AI and machine learning roles.",
            "Lifetime access to all lessons, problem sets, solution guides, and code notebooks.",
            "Hands-on experience with Python, NumPy, Matplotlib, SciPy, and SymPy for math modeling and simulations.",
            "Career guidance: resume and LinkedIn support, GitHub review, and mentorship for academic or industry tracks.",
          ],
        },
        courseDemands: [
          {
            title: "Essential AI Foundation",
            description:
              "Math fluency is what separates AI practitioners from AI architects who design and optimize systems.",
          },
          {
            title: "Unlock Advanced Roles",
            description:
              "Senior AI positions require mathematical understanding for model optimization and research work.",
          },
          {
            title: "Competitive Advantage",
            description:
              "Professionals with strong math skills advance faster and command higher salaries in AI careers.",
          },
          {
            title: "Debug and Innovate",
            description:
              "Math intuition enables you to diagnose model issues and innovate beyond existing frameworks.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No complex math background? No problem. You’ll begin with fundamental concepts and progressively master the mathematics that powers modern AI.",
          },
          {
            title: "Robust Math Curriculum",
            description:
              "Learn Linear Algebra, Calculus, Probability, and Statistics tailored specifically for Machine Learning and Deep Learning applications.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, problem-solving walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio projects such as implementing neural networks from scratch and optimizing algorithms using pure math concepts.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Build the unshakable foundation needed to understand advanced AI concepts.",
          },
          {
            title: "Career Switchers",
            description:
              "Refresh your math skills to transition confidently into technical AI roles.",
          },
          {
            title: "Engineers",
            description:
              "Move from using libraries to understanding and optimizing the algorithms behind them.",
          },
          {
            title: "Freelancers",
            description:
              "Debug complex model issues and offer optimization services with confidence.",
          },
          {
            title: "Founders & Creators",
            description:
              "Understand the theoretical limits and possibilities of AI technology.",
          },
          {
            title: "Students",
            description:
              "Ace academic courses and technical interviews with strong mathematical intuition.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Linear Algebra for AI",
            modules: [
              {
                title: "Linear Algebra for AI",
                lessons: [
                  "Systems of linear equations, vectors, matrices, and their properties (e.g. rank, inverse)",
                  "Eigenvalues, eigenvectors, and dimensionality reduction (e.g. PCA)",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Calculus for Machine Learning",
            modules: [
              {
                title: "Calculus for Machine Learning",
                lessons: [
                  "Differentiation, gradients, chain rule, and optimization basics",
                  "Gradient descent and backpropagation fundamentals",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Probability & Statistics",
            modules: [
              {
                title: "Probability & Statistics",
                lessons: [
                  "Probability distributions (normal, binomial), Bayes’ theorem, expectation, variance",
                  "Confidence intervals, hypothesis testing, MLE/MAP estimation",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Descriptive & Inferential Statistics",
            modules: [
              {
                title: "Descriptive & Inferential Statistics",
                lessons: [
                  "Measures of central tendency and spread (mean, median, SD)",
                  "Sampling theory, confidence intervals, and statistical inference",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Mathematical Modeling & Optimization",
            modules: [
              {
                title: "Mathematical Modeling & Optimization",
                lessons: [
                  "Regression modeling (simple and multiple linear)",
                  "Application of optimization techniques using calculus",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Scientific Computing Tools & Python Integration",
            modules: [
              {
                title: "Scientific Computing Tools & Python Integration",
                lessons: [
                  "NumPy, Matplotlib, pandas, and Jupyter Notebooks for applied math",
                  "Hands‑on labs showing math concepts driving machine learning “under-the-hood”",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Linear Algebra",
              "Probability Theory",
              "Statistical Inference",
              "Optimization Techniques",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Analytical Reasoning", "Mathematical Modeling"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Linear Algebra Applications",
            description: "Apply linear algebra concepts to AI problems.",
          },
          {
            title: "Project 2: Probability Simulations",
            description: "Simulate probabilistic systems.",
          },
          {
            title: "Project 3: Statistical Inference",
            description: "Perform hypothesis testing on datasets.",
          },
          {
            title: "Project 4: Optimization Problems",
            description: "Solve optimization problems used in AI models.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Data Analyst",
            description:
              "Apply foundational math skills to analyze and interpret data.",
          },
          {
            current: false,
            title: "AI Research Engineer",
            description:
              "Apply mathematical and statistical foundations to AI model development.",
          },
          {
            current: false,
            title: "Machine Learning Engineer",
            description:
              "Build ML systems grounded in strong mathematical principles.",
          },
          {
            current: false,
            title: "Quantitative Analyst",
            description: "Use mathematical models to analyze complex systems.",
          },
          {
            current: false,
            title: "Senior Data Scientist",
            description:
              "Lead advanced analytics projects using deep statistical knowledge.",
          },
          {
            current: false,
            title: "AI Scientist",
            description: "Advance theoretical and applied AI research.",
          },
          {
            current: false,
            title: "Chief Data Scientist",
            description:
              "Define data science strategy and lead technical teams at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Portfolio of Mathematical Implementations",
            description:
              "Show code implementations of algorithms from scratch (e.g., gradient descent) to prove deep understanding.",
          },
          {
            title: "Ace the Quant Interview",
            description:
              "Prepare for rigorous interviews that test your probability, linear algebra, and calculus knowledge.",
          },
          {
            title: "Demonstrate Theoretical Depth",
            description:
              "Share insights on the mathematical foundations of AI to differentiate yourself from 'API-only' developers.",
          },
          {
            title: "Technical Resume Refinement",
            description:
              "Highlight your strong analytical and mathematical background as a key differentiator.",
          },
          {
            title: "Apply to Algorithm-Heavy Roles",
            description:
              "Target roles in quant finance, research, and core algorithm development.",
          },
          {
            title: "Connect with Academic & Research Circles",
            description:
              "Network with professionals who value rigorous theoretical foundations.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Foundation",
            description:
              "Math skills are the top differentiator for Senior AI roles",
            source: "O'Reilly AI Skills Survey",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "30% Growth",
            description: "Demand for Data Scientists/Mathematicians",
            source: "U.S. Bureau of Labor Statistics",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Research Core",
            description: "Essential for developing new AI architectures",
            source: "Google Research",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Quant Roles",
            description:
              "Heavily recruited in Finance and Algorithmic Trading.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$130k – $210k",
            description: "Salaries for Research Scientists & Quants",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$9,000 - $16,000" },
          { location: "United Kingdom", montly: "$5,500 - $9,500" },
          { location: "Europe", montly: "$5,000 - $9,000" },
          { location: "Remote Roles", montly: "$2,000 - $6,500" },
        ],
        faqs: [
          {
            question: "Why do I need math for AI?",
            answer:
              "Math is the 'engine' under the hood. Understanding it allows you to debug models, optimize performance, and read research papers.",
          },
          {
            question: "I'm bad at math. Can I take this?",
            answer:
              "Yes! We teach math from a programmer's perspective—focusing on intuition and code implementation rather than abstract proofs.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What topics are covered?",
            answer:
              "We cover Linear Algebra (vectors/matrices), Calculus (gradients/derivatives), Probability, and Statistics essential for ML.",
          },
          {
            question: "Do we use Python in this course?",
            answer:
              "Yes, we use Python libraries like NumPy and SciPy to visualize and implement mathematical concepts.",
          },
          {
            question: "Is this a theoretical course?",
            answer:
              "It is applied theory. You learn the concept, then immediately see how it is used in a Machine Learning algorithm.",
          },
          {
            question: "Will this help me pass interviews?",
            answer:
              "Definitely. Technical interviews for Senior AI roles often drill down into the mathematical foundations we teach here.",
          },
          {
            question: "How long is the course?",
            answer:
              "The course runs for 8 weeks, with live sessions to ensure you grasp the difficult concepts.",
          },
          {
            question: "Do I need to buy a textbook?",
            answer:
              "No, all learning materials, cheat sheets, and notebooks are provided as part of the course.",
          },
          {
            question: "Is this suitable for Data Scientists?",
            answer:
              "Yes, it is highly recommended for Data Scientists who want to move from using libraries to understanding the algorithms.",
          },
        ],
      },
      {
        title: "Prompt Engineering",
        slug: "prompt-engineering",
        survey: "prompt-engineering-expert",
        description:
          "Learn prompt design, evaluation, fine-tuning strategies, and optimization techniques for large language models.",
        imageSrc: "/assets/courses/prompt-engineering.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.8,
        peopleInField: "Prompt Engineers",
        heroFeatures: [
          {
            title: "Launch Your Career in AI with Prompt Engineering",
            features: [
              "The best Prompt Engineering course aligned with real world AI systems",
              "Master prompt design, LLM optimization, and AI tool integration",
              "Work on real world projects and build a portfolio recruiters notice",
              "No tech background required, learn step-by-step",
            ],
          },
          {
            title: "Design Prompts That Power the World’s Smartest AI",
            features: [
              "Build solutions using ChatGPT, Claude, Gemini, and open-source LLMs",
              "Get mentorship, virtual internships, and expert-led career support",
              "Land remote gigs or full-time roles with prompt engineering",
              "Interview prep, job mapping, and resume optimization included",
            ],
          },
          {
            title: "Earn Big. Join the Prompt Engineering Talent Wave ",
            features: [
              "Get into one of the most in-demand AI professionals in today’s job market. We’ll train you to become the certified talent global companies need!",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective Prompt Engineering Course",
          description:
            "As AI grows, so does the need for experts who can guide it. Learn to build smart, responsive systems through effective prompting.",
          keyFeatures: [
            "No coding background required, start from scratch and grow fast",
            "Learn hands-on with tools like OpenAI, Hugging Face, LangChain, and GPT models",
            "Build prompt-driven projects: chatbots, search assistants, text generators, and more",
            "Earn a certification that proves your prompt engineering skills",
            "Career-focused training: portfolio building, resume, and LinkedIn optimization",
            "Live instructor-led classes + self-paced content for flexible learning",
            "Get weekly mentorship, expert feedback, and peer accountability",
            "Cloud lab access for practicing prompts and testing models",
            "Learn the exact skills used in top roles like Prompt Engineer, LLM Trainer, AI Specialist",
            "Mock interviews, job matching, and career coaching included",
          ],
        },
        courseDemands: [
          {
            title: "Critical LLM Skill",
            description:
              "Prompt engineering directly determines the quality and reliability of AI products millions use daily.",
          },
          {
            title: "Rapidly Growing Field",
            description:
              "Dedicated prompt engineering roles are emerging at AI companies with salaries reaching $150,000+.",
          },
          {
            title: "Immediate Impact",
            description:
              "Well-engineered prompts can 10x the effectiveness of AI applications without changing the model.",
          },
          {
            title: "Every AI Team Needs This",
            description:
              "As LLMs become central to products, prompt engineering skills are essential for all AI practitioners.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No coding background? No problem. You’ll begin with basic prompting and advance to complex chain-of-thought and system prompt design.",
          },
          {
            title: "Robust Prompting Curriculum",
            description:
              "Learn advanced prompt patterns, few-shot prompting, chain-of-thought, and evaluation techniques for GPT-4, Claude, and Llama.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, prompt clinics, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as building specialized chatbots, automated content workflows, and AI agents.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Start working with powerful AI immediately without needing deep coding skills.",
          },
          {
            title: "Career Switchers",
            description:
              "Leverage domain expertise with AI to become a high-value prompt engineer.",
          },
          {
            title: "Engineers",
            description:
              "Learn to systematically evaluate and optimize LLM outputs for production apps.",
          },
          {
            title: "Freelancers",
            description:
              "Offer prompt optimization and AI workflow automation services.",
          },
          {
            title: "Founders & Creators",
            description:
              "Rapidly prototype and build AI products by mastering model communication.",
          },
          {
            title: "Students",
            description:
              "Add a highly relevant and modern skill to your resume.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Introduction to Prompt Engineering for AI Systems",
            modules: [
              {
                title: "Introduction to Prompt Engineering for AI Systems",
                lessons: [
                  "What is Prompt Engineering?",
                  "Overview of AI systems: LLMs, image models, code models, multimodal systems",
                  "Understanding foundation models (GPT, Claude, Gemini, Mistral, DALL·E, Midjourney, etc.)",
                  "Importance of prompt engineering in AI product design",
                  "Prompt engineering vs traditional programming",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Fundamentals of Prompt Design",
            modules: [
              {
                title: "Fundamentals of Prompt Design",
                lessons: [
                  "Anatomy of a good prompt",
                  "Zero-shot, one-shot, and few-shot prompting",
                  "Instruction tuning and task specification",
                  "Prompt styles: direct, conversational, role-based, etc.",
                  "Common prompt templates for classification, generation, summarization, etc.",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Advanced Prompting Techniques",
            modules: [
              {
                title: "Advanced Prompting Techniques",
                lessons: [
                  "Chain-of-Thought (CoT) prompting",
                  "Tree-of-Thoughts and ReAct prompting",
                  "Multi-turn dialogues and memory management",
                  "Role prompting and simulation design",
                  "Using tools within prompts (Toolformer-like behavior)",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Prompt Engineering with APIs",
            modules: [
              {
                title: "Prompt Engineering with APIs",
                lessons: [
                  "Using the OpenAI API (and alternatives like Claude, Cohere, Gemini)",
                  "Token limits, temperature, top_p, frequency_penalty, etc.",
                  "Managing API costs and optimizing prompt efficiency",
                  "Streaming and response parsing",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Building Prompt-Driven Applications",
            modules: [
              {
                title: "Building Prompt-Driven Applications",
                lessons: [
                  "Introduction to LangChain / LlamaIndex / Flowise",
                  "Connecting prompts with external tools (Google Search, PDF loaders, Databases)",
                  "Vector databases and Retrieval-Augmented Generation (RAG)",
                  "Prompt engineering for agents and workflows",
                  "UI/UX considerations for prompt-powered apps",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Multimodal Prompting",
            modules: [
              {
                title: "Multimodal Prompting",
                lessons: [
                  "Prompting for image generation (DALL·E, Midjourney, SDXL)",
                  "Prompting for code generation (Codex, Code Llama)",
                  "Prompting for audio, video, and vision-language models (e.g., Sora, Gemini 1.5 Pro)",
                  "Building multimodal experiences (text → image, text → speech, etc.)",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Prompt Evaluation, Testing & Optimization",
            modules: [
              {
                title: "Prompt Evaluation, Testing & Optimization",
                lessons: [
                  "How to evaluate prompt quality",
                  "Metrics: BLEU, ROUGE, perplexity, human eval",
                  "A/B testing with user feedback",
                  "Prompt iteration frameworks: Prompt Engineering Canvas, EIC Framework (Example, Instruction, Context)",
                  "Guardrails and prompt-based moderation",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Domain-Specific Prompt Engineering",
            modules: [
              {
                title: "Domain-Specific Prompt Engineering",
                lessons: [
                  "Marketing and copywriting prompts",
                  "Education & edtech prompts",
                  "Legal, healthcare, and compliance-focused prompts",
                  "Business automation and reporting",
                  "Prompts for research and data analysis",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Ethical, Social & Safety Considerations",
            modules: [
              {
                title: "Ethical, Social & Safety Considerations",
                lessons: [
                  "Biases in LLM outputs and prompts",
                  "Prompt injection attacks and mitigation",
                  "Safety-first design in prompt engineering",
                  "Responsible deployment of prompt-powered systems",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Prompt Design Patterns",
              "LLM Optimization",
              "Chain-of-Thought Techniques",
              "Tool-Augmented Prompts",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["AI Workflow Design", "Use-Case Experimentation"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Prompt Design Patterns",
            description: "Design prompts for different AI tasks.",
          },
          {
            title: "Project 2: Chain-of-Thought Prompts",
            description: "Implement reasoning-based prompt strategies.",
          },
          {
            title: "Project 3: Tool-Augmented Prompts",
            description: "Create prompts that interact with external tools.",
          },
          {
            title: "Project 4: Prompt Optimization System",
            description: "Optimize prompts for accuracy and efficiency.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Prompt Engineer",
            description:
              "Assist in designing and testing prompts for AI applications.",
          },
          {
            current: false,
            title: "Prompt Engineer",
            description:
              "Design and optimize prompts for large language models to improve output quality.",
          },
          {
            current: false,
            title: "LLM Specialist",
            description:
              "Optimize and fine-tune interactions with large language models.",
          },
          {
            current: false,
            title: "AI Engineer",
            description: "Integrate prompt-based systems into AI applications.",
          },
          {
            current: false,
            title: "Senior AI Engineer",
            description:
              "Lead AI system design and prompt optimization strategies at scale.",
          },
          {
            current: false,
            title: "AI Product Lead",
            description:
              "Define AI product strategy and lead teams building LLM-powered products.",
          },
          {
            current: false,
            title: "Head of AI",
            description:
              "Set organizational AI direction and lead cross-functional AI initiatives.",
          },
        ],
        teachFeatures: [
          {
            title: "Build a Prompt Library",
            description:
              "Create a portfolio showcasing complex prompts, system instructions, and few-shot examples that solve real problems.",
          },
          {
            title: "Master the Prompt Interview",
            description:
              "Learn to demonstrate your ability to optimize LLM outputs, reduce hallucinations, and handle edge cases live.",
          },
          {
            title: "Become a Prompt influencer",
            description:
              "Share tips, tricks, and prompt breakdowns on social media to attract job offers and clients.",
          },
          {
            title: "Resume for the Newest Role",
            description:
              "Craft a resume that defines your value as a Prompt Engineer, highlighting efficiency gains and optimization results.",
          },
          {
            title: "Find Non-Coding AI Roles",
            description:
              "Identify companies looking for AI specialists to bridge the gap between business needs and LLMs.",
          },
          {
            title: "Network with Product Teams",
            description:
              "Connect with Product Managers and Founders who need prompt engineers to improve their AI products.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Newest Role",
            description: "Fastest emerging tech job of 2024",
            source: "Indeed Hiring Lab",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "10x Growth",
            description: "Increase in Prompt Engineering job posts",
            source: "LinkedIn Data",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "High Impact",
            description: "Directly correlates to GenAI product quality",
            source: "OpenAI Developer Forum",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Cross-Functional",
            description:
              "Bridging the gap between product, engineering, and AI.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$100k – $180k",
            description: "Strong starting salaries for Prompt Engineers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,000 - $14,000" },
          { location: "United Kingdom", montly: "$4,500 - $8,500" },
          { location: "Europe", montly: "$4,000 - $8,000" },
          { location: "Remote Roles", montly: "$1,500 - $5,500" },
        ],
        faqs: [
          {
            question: "What is Prompt Engineering?",
            answer:
              "It is the art and science of crafting inputs (prompts) to get the best possible outputs from Large Language Models like GPT-4.",
          },
          {
            question: "Do I need to know how to code?",
            answer:
              "No, this course is designed to be accessible to non-coders, though we do touch on some basic Python for API usage.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Is this a real career path?",
            answer:
              "Yes, companies are hiring Prompt Engineers to optimize internal workflows and build AI products, with high starting salaries.",
          },
          {
            question: "What models will we use?",
            answer:
              "We work with the latest state-of-the-art models including GPT-4, Claude 3, and Midjourney for image generation.",
          },
          {
            question: "Will I learn about advanced prompting?",
            answer:
              "Yes, we go beyond basics to cover Chain-of-Thought, Tree-of-Thought, and systematic prompt evaluation.",
          },
          {
            question: "How does this help business professionals?",
            answer:
              "You can 10x your productivity by learning to automate writing, analysis, and research tasks effectively.",
          },
          {
            question: "Are there live classes?",
            answer:
              "Yes, we have live workshops where we collaboratively solve problems and iterate on prompts.",
          },
          {
            question: "Will I learn to use APIs?",
            answer:
              "Yes, we cover how to use the OpenAI API to integrate prompts into workflows.",
          },
          {
            question: "What kind of certificate will I get?",
            answer:
              "You will receive a certification in Advanced Prompt Engineering, validating your ability to control AI outputs.",
          },
        ],
      },
    ],
  },

  {
    category: "Data",
    categoryName: "School of Data",
    courses: [
      {
        title: "Certified Data Science",
        slug: "certified-data-science",
        survey: "certified-data-science",
        description:
          "End-to-end data science program covering data analysis, machine learning, experimentation, and real-world projects.",
        imageSrc: "/assets/courses/data-science.webp",
        thumbnail: "/assets/courses/thumbnails/data-scientist-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 weeks",
        format: "live, online, interactive",
        rating: 4.9,
        peopleInField: "Data Scientists",
        heroFeatures: [
          {
            title:
              "Become a World-Class Data Scientist & Launch Your Global Career",
            features: [
              "Includes Python, SQL, Power BI, Statistics, ML, and Business Analytics",
              "Earn a recognized Data Scientist Certification to boost your career",
              "Unlimited Access to Cloud-Based Data Lab for Practice",
              "With real-world projects, build a portfolio that stands out",
            ],
          },
          {
            title: "Become a Job-Ready Data Scientist in Months, Not Years",
            features: [
              "Build a portfolio that hiring managers respect",
              "Get personalized mentorship, virtual internship, and career coaching",
              "Interview prep, job mapping, and resume optimization included",
              "Get job-ready with virtual internships and placement support.",
            ],
          },
          {
            title: "Join the Data Science Boom. From Africa to the World",
            features: [
              "With over 11.5M jobs projected by 2030, data science is one of the fastest-growing global careers. We’ll help you step in with confidence.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is The Most Effective Data Science Course",
          description:
            "Whether you’re new to tech or switching careers, our Data Science course gives you the tools to break into this in-demand field.",
          keyFeatures: [
            "No tech background required. We’ll start from the basics and guide you step by step",
            "Learn by doing through real business case projects, not just theory",
            "Global certification + career readiness to help you stand out in any job market",
            "Real-world tools: Python, Excel, SQL, Power BI, Tableau, and more",
            "Personalized mentorship and live support from experienced data professionals",
            "Lifetime access to course materials, resources, and project templates",
            "Flexible learning formats;  live virtual classes and self-paced options",
            "Resume and LinkedIn optimization to showcase your new data skills",
            "Community of peers and experts to keep you motivated and connected",
            "Perfect for aspiring analysts, business intelligence professionals, and data-driven decision makers",
            "Access to job boards, internship links, and career support post-training",
            "Interview prep, mock sessions, and portfolio-building sessions included",
          ],
        },
        courseDemands: [
          {
            title: "Data-Driven Economy",
            description:
              "95% of companies rely on data to drive critical decisions, creating massive demand for data scientists.",
          },
          {
            title: "Talent Shortage",
            description:
              "There is a global shortage of 250,000+ data scientists, with demand far outpacing supply.",
          },
          {
            title: "Lucrative Salaries",
            description:
              "Data scientists earn $95,000-$175,000+ globally, with senior roles commanding even higher pay.",
          },
          {
            title: "Cross-Industry Opportunities",
            description:
              "Data science skills apply to tech, healthcare, finance, retail, and every industry driving on data.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No data background? No problem. You’ll begin with Python, statistics, and essential tools like Pandas, Scikit-learn, and Jupyter.",
          },
          {
            title: "Robust Data Curriculum",
            description:
              "Learn Exploratory Data Analysis, Visualization, Machine Learning, and Model Deployment using modern data science stacks.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as churn prediction, sales forecasting, and recommendation systems.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Step into the world of data and learn to extract value from information.",
          },
          {
            title: "Career Switchers",
            description:
              "Transition from analytical roles in other fields to a full Data Science career.",
          },
          {
            title: "Analysts",
            description:
              "Level up from Excel and SQL to Python, Machine Learning, and advanced predictive modeling.",
          },
          {
            title: "Freelancers",
            description:
              "Offer data consulting, cleaning, and predictive modeling services to businesses.",
          },
          {
            title: "Founders & Creators",
            description:
              "Build data-driven products and uncover hidden opportunities in your market.",
          },
          {
            title: "Students",
            description:
              "Qualify for high-demand Data Scientist roles with a strong project portfolio.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Data Science Essentials",
            modules: [
              {
                title: "Data Science Essentials",
                lessons: [
                  "Introduction to Data Science",
                  "Evolution of Data Science",
                  "Big Data vs Data Science",
                  "Data Science Terminologies",
                  "Data Science vs AI / Machine Learning",
                  "Data Science vs Analytics",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Data Science Demo",
            modules: [
              {
                title: "Data Science Demo",
                lessons: [
                  "Business Requirement: Use Case",
                  "Data Preparation",
                  "Machine Learning Model Building",
                  "Prediction with ML Model",
                  "Delivering Business Value",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Analytics Classification",
            modules: [
              {
                title: "Analytics Classification",
                lessons: [
                  "Types of Analytics",
                  "Descriptive Analytics",
                  "Diagnostic Analytics",
                  "Predictive Analytics",
                  "Prescriptive Analytics",
                  "EDA and Insight Gathering Demo in Tableau",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Data Science and Related Fields",
            modules: [
              {
                title: "Data Science and Related Fields",
                lessons: [
                  "Introduction to AI",
                  "Introduction to Computer Vision",
                  "Introduction to Natural Language Processing",
                  "Introduction to Reinforcement Learning",
                  "Introduction to GAN",
                  "Introduction to Generative Passive Models",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Data Science Roles & Workflow",
            modules: [
              {
                title: "Data Science Roles & Workflow",
                lessons: [
                  "Data Science Project Workflow",
                  "Roles: Data Engineer, Data Scientist, ML Engineer, and MLOps Engineer",
                  "Data Science Project Stages",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Machine Learning Introduction",
            modules: [
              {
                title: "Machine Learning Introduction",
                lessons: [
                  "What is ML? ML vs AI",
                  "ML Workflow, Popular ML Algorithms",
                  "Clustering, Classification, and Regression",
                  "Supervised vs Unsupervised",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Data Science Industry Applications",
            modules: [
              {
                title: "Data Science Industry Applications",
                lessons: [
                  "Data Science in Finance and Banking",
                  "Data Science in Retail",
                  "Data Science in Healthcare",
                  "Data Science in Logistics and Supply Chain",
                  "Data Science in Technology Industry",
                  "Data Science in Manufacturing",
                  "Data Science in Agriculture",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Python Basics",
            modules: [
              {
                title: "Python Basics",
                lessons: [
                  "Introduction to Python",
                  "Installation of Python and IDE",
                  "Python Variables",
                  "Python Basic Data Types",
                  "Numbers, Booleans, Strings",
                  "Arithmetic Operators",
                  "Comparison Operators",
                  "Assignment Operators",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Python Control Statements",
            modules: [
              {
                title: "Python Control Statements",
                lessons: [
                  "If Conditional Statement",
                  "If-Else",
                  "Nested If",
                  "Python Loops Basics",
                  "While Statement",
                  "For Statements",
                  "Break and Continue Statements",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Python Data Structures",
            modules: [
              {
                title: "Python Data Structures",
                lessons: [
                  "Basic Data Structures in Python",
                  "Lists: Object, Methods",
                  "Tuples: Object, Methods",
                  "Sets: Object, Methods",
                  "Dictionaries: Object, Methods",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Python Functions",
            modules: [
              {
                title: "Python Functions",
                lessons: [
                  "Functions Basics",
                  "Function Parameter Passing",
                  "Lambda Functions",
                  "Map, Reduce, Filter Functions",
                ],
              },
            ],
          },
          {
            id: "12",
            title: "Overview of Statistics",
            modules: [
              {
                title: "Overview of Statistics",
                lessons: [
                  "Introduction to Statistics",
                  "Descriptive and Inferential Statistics",
                  "Basic Terms of Statistics",
                  "Types of Data",
                ],
              },
            ],
          },
          {
            id: "13",
            title: "Harnessing Data",
            modules: [
              {
                title: "Harnessing Data",
                lessons: [
                  "Random Sampling",
                  "Sampling With and Without Replacement",
                  "Cochran's Minimum Sample Size",
                  "Types of Sampling (Simple Random, Stratified, Cluster, Systematic, Multi-Stage)",
                  "Sampling Error",
                  "Methods of Collecting Data",
                ],
              },
            ],
          },
          {
            id: "14",
            title: "Exploratory Data Analysis",
            modules: [
              {
                title: "Exploratory Data Analysis",
                lessons: [
                  "Introduction to EDA",
                  "Measures of Central Tendencies: Mean, Median, Mode",
                  "Measures of Dispersion: Range, Variance, Standard Deviation",
                  "Data Distribution Plot: Histogram",
                  "Normal Distribution & Properties",
                  "Z-Value / Standard Value",
                  "Empirical Rule & Outliers",
                  "Central Limit Theorem",
                  "Normality Testing",
                  "Skewness & Kurtosis",
                  "Measures of Distance: Euclidean, Manhattan, Minkowski",
                  "Covariance & Correlation",
                ],
              },
            ],
          },
          {
            id: "15",
            title: "Hypothesis Testing",
            modules: [
              {
                title: "Hypothesis Testing",
                lessons: [
                  "Introduction to Hypothesis Testing",
                  "P-Value, Critical Region",
                  "Types of Hypothesis Testing",
                  "Hypothesis Testing Errors: Type I and Type II",
                  "Two-Sample Independent T-test",
                  "Two-Sample Related T-test",
                  "One-Way ANOVA Test",
                  "Application of Hypothesis Testing",
                ],
              },
            ],
          },
          {
            id: "16",
            title: "Python NumPy Package",
            modules: [
              {
                title: "Python NumPy Package",
                lessons: [
                  "Introduction to NumPy Package",
                  "Array as Data Structure",
                  "Core NumPy Functions",
                  "Matrix Operations, Broadcasting in Arrays",
                ],
              },
            ],
          },
          {
            id: "17",
            title: "Python Pandas Package",
            modules: [
              {
                title: "Python Pandas Package",
                lessons: [
                  "Introduction to Pandas Package",
                  "Series in Pandas",
                  "DataFrame in Pandas",
                  "File Reading in Pandas",
                  "Data Munging with Pandas",
                ],
              },
            ],
          },
          {
            id: "18",
            title: "Visualization with Python",
            modules: [
              {
                title: "Visualization with Python",
                lessons: [
                  "Visualization Packages (Matplotlib)",
                  "Components of a Plot, Sub-Plots",
                  "Basic Plots: Line, Bar, Pie, Scatter",
                  "Seaborn: Basic Plot",
                  "Advanced Python Data Visualizations",
                ],
              },
            ],
          },
          {
            id: "19",
            title: "ML Algorithms & Techniques",
            modules: [
              {
                title: "ML Algorithms & Techniques",
                lessons: [
                  "Linear Regression",
                  "Logistic Regression",
                  "K-Means Clustering",
                  "KNN (K-Nearest Neighbors)",
                  "Feature Engineering",
                  "Support Vector Machine (SVM)",
                  "Principal Component Analysis (PCA)",
                  "Decision Tree & Random Forest",
                  "Ensemble Techniques (Bagging)",
                  "Naïve Bayes",
                  "Gradient Boosting, XGBoost",
                ],
              },
            ],
          },
          {
            id: "20",
            title: "Advanced Data Science",
            modules: [
              {
                title: "Advanced Data Science",
                lessons: [
                  "Time Series Forecasting – ARIMA",
                  "Sentiment Analysis",
                  "Regular Expressions with Python",
                  "ML Model Deployment with Flask",
                  "Advanced Data Analysis with MS Excel",
                  "AWS Cloud for Data Science",
                  "Azure for Data Science",
                  "Introduction to Deep Learning (ANN, CNN)",
                ],
              },
            ],
          },
          {
            id: "21",
            title: "Database: SQL and MongoDB",
            modules: [
              {
                title: "Database: SQL and MongoDB",
                lessons: [
                  "Database Introduction",
                  "SQL Basics",
                  "Data Types and Constraints",
                  "Databases and Tables (MySQL)",
                  "SQL Joins",
                  "SQL Commands and Clauses",
                  "Document DB / NoSQL DB (MongoDB)",
                ],
              },
            ],
          },
          {
            id: "22",
            title: "GIT & Big Data",
            modules: [
              {
                title: "GIT & Big Data",
                lessons: [
                  "Git Introduction",
                  "Git Repository and GitHub",
                  "Commits, Pull, Fetch, and Push",
                  "Tagging, Branching, and Merging",
                  "Git with GitHub and Bitbucket",
                  "Big Data Introduction",
                  "HDFS and MapReduce",
                  "PySpark Foundation",
                  "Spark SQL and Hadoop Hive",
                ],
              },
            ],
          },
          {
            id: "23",
            title: "BI Analyst Tools",
            modules: [
              {
                title: "BI Analyst Tools",
                lessons: [
                  "Tableau Fundamentals",
                  "Power BI Basics",
                  "Data Transformation Techniques",
                  "Connecting to Various Data Sources",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Data Analysis & Modeling",
              "Machine Learning",
              "Data Visualization",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Storytelling with Data", "End-to-End Project Delivery"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Data Exploration",
            description: "Explore datasets to identify patterns.",
          },
          {
            title: "Project 2: Predictive Modeling",
            description: "Build predictive models.",
          },
          {
            title: "Project 3: Model Evaluation",
            description: "Evaluate model performance.",
          },
          {
            title: "Project 4: End-to-End Data Science Project",
            description: "Deliver a complete data science solution.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Data Analyst",
            description:
              "Assist in data collection, cleaning, and basic analysis tasks.",
          },
          {
            current: true,
            title: "Data Scientist",
            description:
              "Analyze data, build models, and deliver insights that drive business decisions.",
          },
          {
            current: false,
            title: "ML Engineer",
            description: "Deploy and scale data science models.",
          },
          {
            current: false,
            title: "Senior Data Scientist",
            description: "Lead complex data science projects and mentor teams.",
          },
          {
            current: false,
            title: "Principal Data Scientist",
            description:
              "Drive strategic data initiatives and lead cross-functional teams.",
          },
          {
            current: false,
            title: "Head of Data Science",
            description:
              "Define data science strategy and leadership across the organization.",
          },
          {
            current: false,
            title: "Chief Data Officer",
            description:
              "Set organizational data vision and lead enterprise-wide data strategy.",
          },
        ],
        teachFeatures: [
          {
            title: "Build a Data Science Portfolio",
            description:
              "Showcase end-to-end projects from data cleaning to model deployment on GitHub and Kaggle.",
          },
          {
            title: "Ace the Data Interview",
            description:
              "Master statistics questions, SQL challenges, and take-home data assignments.",
          },
          {
            title: "Establish Data Authority",
            description:
              "Write articles on Medium or Towards Data Science about your analysis and findings.",
          },
          {
            title: "Craft a Data-Driven Resume",
            description:
              "Quantify your impact (e.g., 'improved accuracy by 15%') to grab the attention of hiring managers.",
          },
          {
            title: "Target the Right Industries",
            description:
              "Learn which industries are hiring aggressively for data scientists and tailor your applications.",
          },
          {
            title: "Join the Data Community",
            description:
              "Participate in datathons and meetups to connect with peers and mentors.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "11.5 Million",
            description: "New Data Science jobs created by 2026",
            source: "U.S. Bureau of Labor Statistics",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "36% Growth",
            description: "Employment growth rate for Data Scientists",
            source: "World Economic Forum",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "#3 Best Job",
            description: "Ranked in top technology jobs in America",
            source: "Glassdoor Best Jobs",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Every Sector",
            description:
              "Retail, Finance, Healthcare all rely on Data Science.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$115k – $170k",
            description: "Average base salary for Data Scientists",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$8,000 - $14,000" },
          { location: "United Kingdom", montly: "$5,000 - $9,000" },
          { location: "Europe", montly: "$4,500 - $8,500" },
          { location: "Remote Roles", montly: "$2,000 - $6,000" },
        ],
        faqs: [
          {
            question: "What does a Data Scientist do?",
            answer:
              "Data Scientists collect, analyze, and model data to solve complex problems and predict future trends.",
          },
          {
            question: "Is this course suitable for beginners?",
            answer:
              "Yes, we start from the very basics of Python and Statistics before moving to advanced modeling.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What tools will I learn?",
            answer:
              "You will master the Python data stack (Pandas, NumPy), Visualization (Matplotlib), and Machine Learning (Scikit-learn).",
          },
          {
            question: "How much math is required?",
            answer:
              "We cover the necessary Statistics and Linear Algebra within the course, so you don't need a math degree to start.",
          },
          {
            question: "Will I build a portfolio?",
            answer:
              "Yes, you will complete capstone projects that solve real business problems, ready to show potential employers.",
          },
          {
            question: "Does the course cover Deep Learning?",
            answer:
              "We provide an introduction to Deep Learning, but the primary focus is on core Data Science and Machine Learning techniques.",
          },
          {
            question: "What is the job market like?",
            answer:
              "Data Science remains one of the fastest-growing and highest-paid fields in technology globally.",
          },
          {
            question: "Is career mentoring included?",
            answer:
              "Yes, we offer resume reviews, interview prep, and guidance on how to navigate the data job market.",
          },
          {
            question: "Do I need a powerful computer?",
            answer:
              "No, most work can be done on a standard laptop, and we teach you how to use cloud resources like Google Colab.",
          },
        ],
      },
      {
        title: "Certified Data Analytics",
        slug: "certified-data-analytics",
        survey: "certified-data-analytics",
        description:
          "Learn data analysis, visualization, dashboards, and business insights using modern analytics tools and workflows.",
        imageSrc: "/assets/courses/data-analytics.webp",
        thumbnail: "/assets/courses/thumbnails/data-analyst-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.7,
        peopleInField: "Data Analysts",
        heroFeatures: [
          {
            title: "Launch Your Career in the Data-Driven World",
            features: [
              "The most comprehensive Data Analytics course with industry standards",
              "Learn, earn big, and unlock high-demand global roles in data",
              "Build real-world dashboards and data models that make you stand out",
              "Master Excel, SQL, Power BI, Python, and real analytics workflows",
            ],
          },
          {
            title: "Analyze, Visualize, and Grow as a Certified Data Analyst",
            features: [
              "Build a portfolio that speaks to hiring managers and recruiters",
              "Get mentorship, virtual internship experience, and career coaching",
              "Resume writing, interview prep, and personalized job mapping included",
              "Get job-ready with practical tools and placement support",
            ],
          },
          {
            title: "Join the Global Data Talent Pipeline",
            features: [
              "With millions of new jobs projected by 2030, companies need skilled analysts and we’ll help you become one",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective Data Analytics Course",
          description:
            "This course is your pathway into one of the world’s most in-demand and flexible tech careers.",
          keyFeatures: [
            "No background in tech or math? No worries, we start from scratch and guide you step-by-step",
            "Hands-on training with essential tools like Excel, SQL, Power BI, Python, and Google Sheets",
            "Projects based on real world use cases: dashboards, KPI reports, customer segmentation, and data storytelling",
            "Globally recognized certification to prove your readiness to employers and clients",
            "Career focused curriculum with resume building, LinkedIn optimization, and portfolio creation",
            "Live instructor-led sessions plus on-demand content designed for busy learners",
            "Access to our Data Practice Lab for continuous hands-on exercises and guided challenges",
            "1-on-1 mentorship, weekly support, and personalized feedback on your work",
            "Training aligned to high-impact roles: Data Analyst, Business Intelligence Analyst, Reporting Analyst",
            "Active peer community for support, collaboration, and networking",
            "Mock interviews, job targeting strategies, and coaching from seasoned professionals",
            "Virtual internship and placement support through our Career Success Team",
          ],
        },
        courseDemands: [
          {
            title: "Essential Business Skill",
            description:
              "Data analytics is required in virtually every industry to improve decision-making and optimize performance.",
          },
          {
            title: "Accessible Entry Point",
            description:
              "Analytics roles offer one of the easiest pathways into tech careers with strong growth potential.",
          },
          {
            title: "Strong Market Demand",
            description:
              "Data analyst positions are among the fastest-growing jobs, with 25% projected growth through 2030.",
          },
          {
            title: "Competitive Pay",
            description:
              "Data analysts earn $60,000-$110,000+ globally, with clear paths to senior and specialized roles.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No experience? No problem. You’ll begin with Excel and SQL basics before moving to advanced visualization and analysis tools.",
          },
          {
            title: "Robust Analytics Curriculum",
            description:
              "Learn Data Cleaning, Visualization, Dashboarding, and Storytelling using tools like SQL, Excel, Power BI, and Tableau.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, analysis walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as business performance dashboards, customer segmentation analysis, and financial reports.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "The best starting point for a career in data and tech.",
          },
          {
            title: "Career Switchers",
            description:
              "Leverage your industry knowledge with data skills to become an invaluable analyst.",
          },
          {
            title: "Marketers & Managers",
            description:
              "Stop relying on others for reports—learn to analyze performance data yourself.",
          },
          {
            title: "Freelancers",
            description:
              "Build dashboards and offer reporting services to small and medium businesses.",
          },
          {
            title: "Founders",
            description:
              "Understand your business metrics deeply to make better strategic decisions.",
          },
          {
            title: "Students",
            description:
              "Gain a universal skill set that makes you employable in almost any sector.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Business Analytics with Excel",
            modules: [
              {
                title: "Business Analytics with Excel",
                lessons: [
                  "Business Analytics with Excel",
                  "Formatting, Conditional Formatting, and Important Functions",
                  "Analyzing Data with Pivot Tables",
                  "Dashboarding",
                  "Data Analysis Using Statistics",
                  "Introduction to Power BI",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "SQL for Data Analysis",
            modules: [
              {
                title: "SQL for Data Analysis",
                lessons: [
                  "Fundamental SQL Statements",
                  "Restore and Back-up",
                  "Selection Commands: Filtering & Ordering",
                  "Alias, Aggregate, and Group By Commands",
                  "Conditional Statements",
                  "Joins",
                  "Subqueries",
                  "Views and Index",
                  "String, Mathematical, Date & Time Functions",
                  "Pattern (String) Matching",
                  "User Access Control Functions",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Programming Basics and Data Analytics with Python",
            modules: [
              {
                title: "Programming Basics and Data Analytics with Python",
                lessons: [
                  "Course Introduction",
                  "Python Environment Setup and Essentials",
                  "Python Programming Fundamentals",
                  "Data Analytics Overview",
                  "Statistical Computing",
                  "Mathematical Computing using NumPy",
                  "Data Manipulation with Pandas",
                  "Data Visualization with Python",
                  "Introduction to Model Building",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "R Programming for Data Science",
            modules: [
              {
                title: "R Programming for Data Science",
                lessons: [
                  "R Basics",
                  "Data Structures in R",
                  "R Programming Fundamentals",
                  "Working with Data in R",
                  "Strings and Dates in R",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Data Analytics with R",
            modules: [
              {
                title: "Data Analytics with R",
                lessons: [
                  "Introduction to Business Analytics",
                  "Introduction to R Programming",
                  "Data Structures",
                  "Data Visualization",
                  "Statistics for Data Science (Parts 1 & 2)",
                  "Regression Analysis",
                  "Classification",
                  "Clustering",
                  "Association Rules & Apriori Algorithm",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Tableau for Data Visualization",
            modules: [
              {
                title: "Tableau for Data Visualization",
                lessons: [
                  "Getting Started with Tableau",
                  "Core Tableau Topics",
                  "Creating Charts in Tableau",
                  "Working with Metadata",
                  "Filters in Tableau",
                  "Applying Analytics to the Worksheet",
                  "Dashboards in Tableau",
                  "Modifying Data Connections",
                  "Introduction to Level of Detail (LOD) in Tableau",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Excel & SQL",
              "Data Visualization Tools",
              "Exploratory Data Analysis",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Insight Reporting", "Stakeholder Communication"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Business Data Analysis",
            description: "Analyze business datasets for insights.",
          },
          {
            title: "Project 2: Visualization Project",
            description: "Create impactful data visualizations.",
          },
          {
            title: "Project 3: Dashboard Design",
            description: "Build dashboards for stakeholders.",
          },
          {
            title: "Project 4: Analytics Case Study",
            description: "Present a full analytics case study.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Data Analyst",
            description:
              "Assist in data collection, cleaning, and basic reporting tasks.",
          },
          {
            current: false,
            title: "Data Analyst",
            description:
              "Transform raw data into actionable business insights.",
          },
          {
            current: false,
            title: "Senior Data Analyst",
            description: "Lead advanced analysis and mentor junior analysts.",
          },
          {
            current: false,
            title: "Business Intelligence Analyst",
            description: "Develop reporting solutions for decision-makers.",
          },
          {
            current: false,
            title: "Analytics Lead",
            description:
              "Manage analytics projects and coordinate cross-functional teams.",
          },
          {
            current: false,
            title: "Analytics Manager",
            description: "Oversee analytics teams and strategy.",
          },
          {
            current: false,
            title: "VP of Analytics",
            description:
              "Define organizational analytics vision and lead enterprise initiatives.",
          },
        ],
        teachFeatures: [
          {
            title: "Create a Dashboard Portfolio",
            description:
              "Build a portfolio of interactive dashboards and reports that demonstrate your ability to find insights.",
          },
          {
            title: "Master Analytical Interviews",
            description:
              "Prepare for case study interviews where you analyze business problems and propose data-backed solutions.",
          },
          {
            title: "Share Your Insights",
            description:
              "Post your visualizations and findings on LinkedIn to demonstrate your communication skills.",
          },
          {
            title: "Resume for Analysts",
            description:
              "Highlight your SQL, Excel, and visualization tools skills alongside your business acumen.",
          },
          {
            title: "Apply to Business-Critical Roles",
            description:
              "Find roles in operations, marketing, and finance where data analysis is highly valued.",
          },
          {
            title: "Network with Business Leaders",
            description:
              "Connect with stakeholders to understand what business problems they need data to solve.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "25% Growth",
            description: "Faster than average job growth outlook",
            source: "U.S. Bureau of Labor Statistics",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Data Literacy",
            description: "Top skill requested by employers in 2025",
            source: "Forrester Research",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "$655 Billion",
            description: "Big Data Analytics market size by 2029",
            source: "Fortune Business Insights",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Decision Making",
            description: "Analytics drives strategy in 90% of Fortune 500s.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$70k – $110k",
            description: "Solid entry and mid-level salaries",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$5,500 - $9,000" },
          { location: "United Kingdom", montly: "$3,500 - $6,500" },
          { location: "Europe", montly: "$3,000 - $6,000" },
          { location: "Remote Roles", montly: "$1,500 - $4,500" },
        ],
        faqs: [
          {
            question: "How is Data Analytics different from Data Science?",
            answer:
              "Analytics focuses on understanding past data to drive current decisions, while Science focuses on modeling data to predict future outcomes.",
          },
          {
            question: "Do I need coding skills?",
            answer:
              "We teach you the necessary SQL and basic Python, but much of the course focuses on tools like Excel, Power BI, and Tableau.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What tools are covered?",
            answer:
              "You will learn Excel (Advanced), SQL, Power BI, Tableau, and an introduction to Python for analytics.",
          },
          {
            question: "Is this course good for business professionals?",
            answer:
              "Absolutely. It is ideal for anyone who wants to make data-driven decisions, from marketing managers to finance professionals.",
          },
          {
            question: "What kind of projects will I do?",
            answer:
              "You will build interactive dashboards, perform customer segmentation analysis, and create business reports.",
          },
          {
            question: "Will I learn SQL?",
            answer:
              "Yes, SQL is a core component as it is essential for retrieving data from databases.",
          },
          {
            question: "What is the earning potential?",
            answer:
              "Data Analysts earn competitive salaries, often serving as a stepping stone to Data Science or Management roles.",
          },
          {
            question: "Are classes live?",
            answer:
              "Yes, we have live interactive sessions to review projects and teach complex concepts.",
          },
          {
            question: "Can I freelance with these skills?",
            answer:
              "Yes, many of our graduates work as freelance consultants helping businesses visualize and understand their data.",
          },
        ],
      },
      {
        title: "Certified Data Engineering",
        slug: "certified-data-engineering",
        survey: "certified-data-engineering",
        description:
          "Design and build scalable data pipelines, warehouses, and streaming systems using modern data engineering tools.",
        imageSrc: "/assets/courses/data-engineering.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.8,
        peopleInField: "Data Engineers",
        heroFeatures: [
          {
            title: "Power the Data Behind Every Product",
            features: [
              "The most practical, beginner-to-pro Bootcamp tailored for you",
              "Learn, earn big, and work with top companies across the globe",
              "Build real world projects that power decision-making systems",
              "Gain practical experience with SQL, Python, Apache Spark, and more",
            ],
          },
          {
            title: "Build & Earn Big as a Certified Data Engineer.",
            features: [
              "Work on end-to-end data engineering projects for your portfolio",
              "Get personal mentorship, career coaching, and virtual internships",
              "Interview prep, resume reviews, and job-matching support included",
              "Get job-ready and backed by a certification that opens global doors",
            ],
          },
          {
            title: "Join the Data Talent Surge.",
            features: [
              "Companies are hiring Data Engineers big time. We'll help you become the certified, project-backed talent they need!",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective Data Engineering Course",
          description:
            "Data powers the modern world and Data Engineers are the architects behind it. This course is your ticket into one of the most high-paying tech careers today.",
          keyFeatures: [
            "No prior experience needed, we’ll teach you data engineering from the ground up",
            "Practical training with essential tools like SQL, Python, Apache Spark, Airflow, Kafka, and BigQuery",
            "Real world projects that mirror industry challenges: ETL pipelines, data lakes, and real-time dashboards",
            "Industry recognized certification that proves your data readiness to global employers",
            "Career focused curriculum with resume, LinkedIn, and portfolio support",
            "Live instructor-led sessions plus flexible self-paced learning options",
            "Access to our Cloud Data Lab with practice environments on AWS, GCP, and Azure",
            "1-on-1 mentorship, project reviews, and weekly check-ins with industry experts",
            "Tools and frameworks aligned to in-demand roles: Data Engineer, Analytics Engineer, Big Data Developer",
            "Peer community to connect, collaborate, and stay accountable",
            "Interview prep, job mapping, and career guidance led by real hiring managers",
            "Virtual internship and job placement assistance from our dedicated PAT (Placement Assistance Team)",
          ],
        },
        courseDemands: [
          {
            title: "Foundation of Data Teams",
            description:
              "Every AI and analytics initiative depends on data engineers to build reliable, scalable data infrastructure.",
          },
          {
            title: "Fastest Growing Data Role",
            description:
              "Data engineering is the fastest-growing data profession, with demand increasing 50%+ year-over-year.",
          },
          {
            title: "Premium Compensation",
            description:
              "Data engineers earn $110,000-$190,000+ globally, often matching or exceeding data scientist salaries.",
          },
          {
            title: "Critical Infrastructure Skills",
            description:
              "Build the pipelines that power machine learning, analytics, and business intelligence at scale.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No engineering background? No problem. You’ll begin with Python and SQL basics before mastering ETL pipelines and cloud data systems.",
          },
          {
            title: "Robust Engineering Curriculum",
            description:
              "Learn Data Warehousing, ETL/ELT pipelines, Spark, Airflow, and Cloud Data platforms like AWS or Azure.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, architecture reviews, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as building automated data pipelines, data lakes, and real-time streaming systems.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn the infrastructure side of data to build robust systems.",
          },
          {
            title: "Software Developers",
            description:
              "Transition into the high-demand, high-paying field of Data Engineering.",
          },
          {
            title: "Data Analysts",
            description:
              "Move upstream to build the pipelines and warehouses you used to query.",
          },
          {
            title: "Freelancers",
            description:
              "Build and maintain data infrastructure for data-driven clients.",
          },
          {
            title: "Founders",
            description:
              "Architect scalable data systems for your startup from day one.",
          },
          {
            title: "Students",
            description:
              "Master the most in-demand technical skills in the data ecosystem.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Engineering Foundations",
            modules: [
              {
                title: "Python & SQL Advanced",
                lessons: [
                  "Advanced Python for Data Engineering",
                  "SQL for Data Definition & Manipulation",
                  "Linux/Shell Scripting Basics",
                  "Data Modeling Concepts (Star/Snowflake)",
                  "Containerization with Docker",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Data Warehousing & Lakes",
            modules: [
              {
                title: "Storage Architectures",
                lessons: [
                  "OLTP vs OLAP Systems",
                  "Introduction to Data Warehouses (Snowflake/BigQuery)",
                  "Data Lake Concepts (S3/ADLS)",
                  "File Formats (Parquet, Avro, JSON)",
                  "Partitioning and Indexing Strategies",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Data Pipelines (ETL/ELT)",
            modules: [
              {
                title: "Orchestration & Transformation",
                lessons: [
                  "Building ETL Pipelines",
                  "Workflow Orchestration with Apache Airflow",
                  "Data Transformation with dbt",
                  "Handling Data Quality & Validation",
                  "Batch Processing Workflows",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Big Data & Streaming",
            modules: [
              {
                title: "Distributed Systems",
                lessons: [
                  "Introduction to Apache Spark",
                  "Spark Structured Streaming",
                  "Event-Driven Architectures (Kafka)",
                  "Real-Time Data Processing",
                  "Cloud Data Engineering Projects",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "ETL Pipelines",
              "Data Warehousing",
              "Big Data Technologies",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["System Reliability", "Data Architecture Design"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: ETL Pipeline",
            description: "Build data ingestion and transformation pipelines.",
          },
          {
            title: "Project 2: Data Warehouse Design",
            description: "Design and implement a data warehouse.",
          },
          {
            title: "Project 3: Streaming Data Pipeline",
            description: "Process streaming data in real time.",
          },
          {
            title: "Project 4: Scalable Data Platform",
            description: "Deploy a scalable data engineering platform.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Data Engineer",
            description: "Build reliable data pipelines and infrastructure.",
          },
          {
            current: false,
            title: "Senior Data Engineer",
            description: "Design scalable data systems and mentor teams.",
          },
          {
            current: false,
            title: "Analytics Engineer",
            description: "Bridge data engineering and analytics needs.",
          },
          {
            current: false,
            title: "Staff Data Engineer",
            description:
              "Lead complex data infrastructure projects across teams.",
          },
          {
            current: false,
            title: "Data Architect",
            description: "Define enterprise data architecture and standards.",
          },
          {
            current: false,
            title: "VP of Data Engineering",
            description:
              "Lead data platform strategy and engineering organizations.",
          },
        ],
        teachFeatures: [
          {
            title: "Build an Engineering Portfolio",
            description:
              "Showcase ETL pipelines, data warehouses, and cloud infrastructure projects on GitHub.",
          },
          {
            title: "Crush the Coding Interview",
            description:
              "Master SQL and Python coding challenges specific to data manipulation and system design.",
          },
          {
            title: "Demonstrate Architecture Skills",
            description:
              "Share diagrams and articles explaining how you design scalable data systems.",
          },
          {
            title: "Data Engineering Resume",
            description:
              "Highlight your experience with Airflow, Spark, and Cloud platforms to pass automated screens.",
          },
          {
            title: "Target Tech-First Companies",
            description:
              "Apply to companies with mature data needs that require robust infrastructure.",
          },
          {
            title: "Network with Tech Leads",
            description:
              "Connect with senior engineers and CTOs who value robust data architecture.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "50% Growth",
            description: "Year-over-year demand for Data Engineers",
            source: "Dice Tech Job Report",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Critical Role",
            description: "Ratio of 2-3 Data Engineers per Data Scientist",
            source: "O'Reilly Data Survey",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Infrastructure",
            description: "Backbone of all modern AI and Analytics",
            source: "Gartner",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "High Demand",
            description: "Most difficult data role to fill for employers.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$120k – $190k",
            description: "Often pays higher than Data Science",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$9,000 - $16,000" },
          { location: "United Kingdom", montly: "$6,000 - $10,000" },
          { location: "Europe", montly: "$5,000 - $9,000" },
          { location: "Remote Roles", montly: "$2,500 - $7,000" },
        ],
        faqs: [
          {
            question: "What does a Data Engineer do?",
            answer:
              "Data Engineers build the systems, pipelines, and infrastructure that collect and prepare data for analysis and AI.",
          },
          {
            question: "Do I need coding experience?",
            answer:
              "Yes, proficiency in Python and SQL is important. We will teach you these, but a mindset for logic and systems is helpful.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What tools will I learn?",
            answer:
              "You will learn Apache Spark, Airflow, Kafka, SQL, Docker, and cloud data platforms like AWS or Azure.",
          },
          {
            question: "What is an ETL pipeline?",
            answer:
              "ETL stands for Extract, Transform, Load. It's the process of moving data from sources to a destination for analysis, which you will master.",
          },
          {
            question: "Is this course cloud-focused?",
            answer:
              "Yes, modern data engineering is almost entirely cloud-based. You will gain hands-on experience with cloud infrastructure.",
          },
          {
            question: "How is the job market?",
            answer:
              "Data Engineering is currently facing a massive talent shortage, often paying higher salaries than Data Science.",
          },
          {
            question: "Will I build a Data Warehouse?",
            answer:
              "Yes, you will design and implement a data warehouse solution as part of your capstone project.",
          },
          {
            question: "Is this hard for beginners?",
            answer:
              "It has a steeper learning curve than analytics, but our curriculum breaks it down step-by-step for beginners.",
          },
          {
            question: "Do you offer placement support?",
            answer:
              "Yes, we assist with resume building, interview preparation, and connecting you with hiring partners.",
          },
        ],
      },
      {
        title: "Power BI Analytics",
        slug: "power-bi-analytics",
        survey: "power-bi-analytics",
        description:
          "Create interactive dashboards, reports, and data models using Power BI for business intelligence.",
        imageSrc: "/assets/courses/data-analysis.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.6,
        peopleInField: "Business Intelligence Analysts",
        heroFeatures: [
          {
            title: "Launch Your Career in Data Analysis with Power BI",
            features: [
              "Hands-on Data Analysis with Power BI course with industry standard",
              "Analyze, visualize, and communicate insights that drive decisions",
              "Master Excel, SQL, Power BI, and storytelling with data",
              "Build a job-winning portfolio with real-world projects",
            ],
          },
          {
            title: "Become a Certified Data Analyst with Power BI",
            features: [
              "Develop an analysis portfolio hiring managers can’t ignore",
              "Master business intelligence, dashboards, and report automation",
              "Get job-ready with CV revamp, interview prep, and placement support",
              "Personalized mentorship, internship, and career support included",
            ],
          },
          {
            title: "Join the Global Data Analytics Talent Pool",
            features: [
              "The world will need over 11 million data analysts by 2026. Top companies are hiring and we’ll help you become the certified talent they’re looking for!",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Data Analysis with Power BI Course",
          description:
            "Data is the new oil, and Power BI is an in-demand tool that makes you stand out. This course is your ticket into this in-demand and impactful data career.",
          keyFeatures: [
            "No prior tech or analytics experience required, we’ll take you from beginner to pro",
            "Hands-on learning with real-world data and live Power BI dashboards",
            "Build reports, dashboards, KPIs, and interactive visuals just like top analysts do",
            "Globally recognized certification to prove your data readiness",
            "Career-focused training with CV revamp, LinkedIn revamp, and portfolio guidance",
            "Live instructor-led classes + recorded content for learning at your pace",
            "Weekly tasks, feedback, and peer reviews to sharpen your skills",
            "Access to real datasets and business case studies from multiple industries",
            "1-on-1 mentorship and expert guidance every step of the way",
            "Learn data cleaning, modeling, and storytelling using DAX, Power Query, and more",
            "Join a thriving peer network for accountability, growth, and referrals",
            "Interview prep, job role mapping, and data career coaching",
            "Internship experience and job search support through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Microsoft Ecosystem Dominance",
            description:
              "Power BI is the leading BI tool in enterprises worldwide, used by over 5 million organizations.",
          },
          {
            title: "High Job Demand",
            description:
              "Power BI skills appear in 30%+ of data analyst job postings, making it essential for career growth.",
          },
          {
            title: "Quick to Monetize",
            description:
              "Power BI proficiency can be gained quickly and immediately applied to create value in any role.",
          },
          {
            title: "Strong Career ROI",
            description:
              "Professionals with Power BI expertise earn 15-25% more than peers without BI tool proficiency.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No prior experience? No problem. You’ll begin with interface basics and move to advanced DAX formulas and data modeling.",
          },
          {
            title: "Robust Power BI Curriculum",
            description:
              "Learn Data Transformation (Power Query), Data Modeling, DAX, Visualization, and Power BI Service publication.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, dashboard critiques, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as executive dashboards, sales trackers, and operational reports.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Get started with data analysis using a powerful, visual tool.",
          },
          {
            title: "Excel Users",
            description:
              "Take your reporting skills to the next level with interactive dashboards.",
          },
          {
            title: "Analysts",
            description:
              "Master the industry-standard tool for enterprise business intelligence.",
          },
          {
            title: "Freelancers",
            description:
              "Build professional reports and dashboards for corporate clients.",
          },
          {
            title: "Managers",
            description:
              "Create your own insights without waiting for the data team.",
          },
          {
            title: "Students",
            description:
              "Learn a specific, hirable skill that adds immediate value to employers.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Welcome to The Power BI Experience",
            modules: [
              {
                title: "Welcome to The Power BI Experience",
                lessons: [
                  "Welcome to Power BI 2.0",
                  "How Learning Power BI Can Help You in Your Career",
                  "How What This Course is Different From Other Courses Online",
                  "How to Get Support if I Have a Question",
                  "Who Can Take this Course",
                  "System Requirements",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Power BI Basics — Getting Started",
            modules: [
              {
                title: "Power BI Basics — Getting Started",
                lessons: [
                  "Install Power BI",
                  "Power BI: Tool Introduction",
                  "Power Query: Intro & Column Transformations",
                  "Power Query: Merging and Appending",
                  "Power Query: Best Practices",
                  "Introduction to DAX",
                  "Introduction to DAX – II",
                  "Introduction to Data Modeling",
                  "Introduction to Creating Visuals",
                  "Tony Asks Peter to Fix Data Holes",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Project Planning and Scoping",
            modules: [
              {
                title: "Project Planning and Scoping",
                lessons: [
                  "Problem Statement",
                  "The Email That Started This Project",
                  "Project Kick-off Meeting",
                  "Learn How a ‘Project Charter’ is Used in Companies",
                  "Project Kick-off: Session Debrief",
                  "Senior Data Analyst Sets Up the Next Steps with Junior Data Analyst",
                  "Simplified: Profit and Loss Statement",
                ],
              },
            ],
          },
          {
            id: "4",
            title:
              "Power BI Basics — Data Collection, Exploration & Validation",
            modules: [
              {
                title:
                  "Power BI Basics — Data Collection, Exploration & Validation",
                lessons: [
                  "Simplified: Data Warehouse, OLTP vs OLAP, Data Catalog",
                  "Install MySQL and Import Data",
                  "Simplified: Data Exploration Using SQL, Star Schema, Fact vs Dimension Tables",
                  "Load and Connect Data with MySQL",
                  "Create a Date Dimension Table",
                  "Validate Data Against Benchmark Numbers",
                  "Tony’s Valuable Advice to Peter",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Power BI Basics — Data Transformation in Power Query",
            modules: [
              {
                title: "Power BI Basics — Data Transformation in Power Query",
                lessons: [
                  "Review Finance View Mockups",
                  "How to Enhance Your Mockups",
                  "Transform Data in Power Query Editor",
                  "Create Calculated Columns in Power Query Editor",
                  "Power Query Best Practices",
                  "Peter Gets His Hands Dirty",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Get Your DAX Fear Removed",
            modules: [
              {
                title: "Get Your DAX Fear Removed",
                lessons: [
                  "Peter's Fear for DAX",
                  "DAX Behaviour: Filter Context",
                  "DAX: Using Calculate to Change Filter Context",
                  "ALL and ALLEXCEPT",
                  "Direct Filters and FILTER Function",
                  "DAX Calculated Column",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Power BI Advanced — Data Modeling & Calculated Columns",
            modules: [
              {
                title: "Power BI Advanced — Data Modeling & Calculated Columns",
                lessons: [
                  "Power Query or DAX for Generating Calculated Columns?",
                  "Data Modelling: Star and Snowflake Schema",
                  "Data Modeling: Connect Dimensions with Fact Tables",
                  "Simplified: Why Do We Need Dimension Tables?",
                  "Mentor Talk: Congratulations! You Are Levelling Up!",
                  "Create Calculated Columns Using DAX",
                  "Easy Way to Verify Your Numbers in Power BI",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Power BI Advanced — Build Finance View",
            modules: [
              {
                title: "Power BI Advanced — Build Finance View",
                lessons: [
                  "Finance View: Prepare a List of Metrics",
                  "Simplified: Calculate Function & Filter Context",
                  "Finance View: Creating Metrics",
                  "Finance View: Create P&L Table Structure",
                  "Finance View: Create Last Year (LY) Column",
                  "Finance View: Build an Ultimate DAX Measure for P&L Table Structure – I",
                  "Finance View: Build an Ultimate DAX Measure for P&L Table Structure – II",
                  "Finance View: Create ‘Quarters’ & ‘YTD/YTG’ Slicers",
                  "Mentor Talk: Figuring Out Solutions",
                  "Finance View: Create a Line Chart to Show Performance Over Time",
                  "Finance View: Build Top Product, Market & Region Visuals",
                ],
              },
            ],
          },
          {
            id: "9",
            title:
              "Power BI Advanced — Build Sales, Marketing & Supply Chain View",
            modules: [
              {
                title:
                  "Power BI Advanced — Build Sales, Marketing & Supply Chain View",
                lessons: [
                  "Review Sales View Mockup",
                  "Sales View: Build Top Customers & Performance Matrix Visuals",
                  "Sales View: Build Product Performance & Unit Economics Visuals",
                  "Build Marketing View",
                  "Simplified: Supply Chain Basics",
                  "Supply Chain View: Review Mockup",
                  "Supply Chain View: Build Key Measures",
                  "Supply Chain View: Build Visuals",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Power BI Advanced — Designing an Effective Dashboard",
            modules: [
              {
                title: "Power BI Advanced — Designing an Effective Dashboard",
                lessons: [
                  "Simplified: Dashboard vs Report",
                  "15 Design Rules for an Effective Dashboard",
                  "Finalize Page Layout Design",
                  "Create Home Page",
                  "Design Finance Dashboard",
                  "Add Key Elements to Finance Dashboard",
                  "Copy the Design to Sales, Marketing & Supply Chain Dashboards",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Power BI Advanced — Data Validation Set Up in PBI Service",
            modules: [
              {
                title:
                  "Power BI Advanced — Data Validation Set Up in PBI Service",
                lessons: [
                  "Create a User Acceptance Test Report",
                  "Create a Power BI Account",
                  "Create a Workspace in Power BI",
                  "Create a Live Excel Report from Power BI",
                ],
              },
            ],
          },
          {
            id: "12",
            title: "Stakeholder Review & Feedback Implementation",
            modules: [
              {
                title: "Stakeholder Review & Feedback Implementation",
                lessons: [
                  "Stakeholder Analysis and Its Significance",
                  "Peter Recalls the Stakeholder Mapping Meeting",
                  "Stakeholder Review Meeting: How Did It Go?",
                  "This Is the Secret to Be ‘Job Ready’!",
                  "Practice Exercise: Quick Fixes",
                  "Quick Fix: Chg% Formula",
                  "Practice Exercise: Implementing Dynamic Benchmark",
                  "Practice Exercise: Adding Dynamic Slicer to Filter Visual",
                  "Practice Exercise: Create a Toggle Button to Switch Between Two Visuals",
                  "Practice Exercise: Create a Tool Tip to Show Trend",
                  "Learn: Adding Market Share Data",
                  "Practice Exercise: Create an Executive Dashboard",
                  "Learn: Performance Optimization",
                  "Learn: Fix Data Quality Issues",
                ],
              },
            ],
          },
          {
            id: "13",
            title: "Deploying the Solution — Power BI Service",
            modules: [
              {
                title: "Deploying the Solution — Power BI Service",
                lessons: [
                  "Power BI Service Overview, Report Sharing, and Apps",
                  "How to Set Up Automatic Data Refresh: MySQL",
                  "How to Set Up Automatic Data Refresh: Excel",
                  "Simplified: Collaboration, Bookmarks, and Insights in Power BI Service",
                  "Driving the Extra Mile: Documentation and Maintenance",
                ],
              },
            ],
          },
          {
            id: "14",
            title: "Transition to Fabric",
            modules: [
              {
                title: "Transition to Fabric",
                lessons: ["Transition from Power BI to Fabric"],
              },
            ],
          },
          {
            id: "15",
            title: "Fabric Basics (Bonus)",
            modules: [
              {
                title: "Fabric Basics (Bonus)",
                lessons: [
                  "What to Expect in This Module",
                  "Why Fabric: AtliQ Hardware Problem Statement",
                  "View Fabric Using Your Power BI Account",
                  "Data Storage Options",
                  "Data Transformation Options",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: ["Power BI Dashboards", "DAX Functions", "Data Modeling"],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Business Reporting", "Dashboard Storytelling"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Sales Dashboard",
            description: "Create interactive sales dashboards in Power BI.",
          },
          {
            title: "Project 2: Financial Reporting",
            description: "Develop financial reports using Power BI.",
          },
          {
            title: "Project 3: DAX Analytics",
            description: "Apply advanced DAX calculations.",
          },
          {
            title: "Project 4: Executive Dashboard",
            description: "Build executive-ready dashboards.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "BI Analyst",
            description:
              "Assist in creating reports and basic dashboards using Power BI.",
          },
          {
            current: false,
            title: "Business Intelligence Analyst",
            description:
              "Develop Power BI dashboards and reports for business users.",
          },
          {
            current: false,
            title: "BI Developer",
            description: "Build and optimize business intelligence solutions.",
          },
          {
            current: false,
            title: "Data Analyst",
            description: "Analyze data to support decision-making.",
          },
          {
            current: false,
            title: "Senior BI Developer",
            description:
              "Lead BI development and establish data modeling standards.",
          },
          {
            current: false,
            title: "BI Manager",
            description: "Lead BI strategy and reporting initiatives.",
          },
          {
            current: false,
            title: "Director of Business Intelligence",
            description:
              "Define enterprise BI vision and lead cross-functional BI teams.",
          },
        ],
        teachFeatures: [
          {
            title: "Power BI Portfolio",
            description:
              "Publish interactive reports to the web to demonstrate your data storytelling and DAX skills.",
          },
          {
            title: "Ace BI Interviews",
            description:
              "Be ready to solve live data modeling problems and explain your dashboard design choices.",
          },
          {
            title: "Showcase Visual Skills",
            description:
              "Participate in 'Workout Wednesday' or similar challenges and share your results online.",
          },
          {
            title: "BI Specialist Resume",
            description:
              "Emphasize your ability to turn raw data into actionable business intelligence using Power BI.",
          },
          {
            title: "Apply for Enterprise Roles",
            description:
              "Target large organizations deeply embedded in the Microsoft ecosystem.",
          },
          {
            title: "Join Power BI User Groups",
            description:
              "Network with the massive global community of Microsoft Power BI users.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Market Leader",
            description: "Microsoft is a Leader in BI Platforms Magic Quadrant",
            source: "Gartner",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "5 Million+",
            description: "Organizations using Power BI globally",
            source: "Microsoft",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "30% Demand",
            description: "Appearance in Analyst job descriptions",
            source: "Burning Glass Technologies",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Enterprise Standard",
            description: "Default BI tool for Office 365 stack companies.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$85k – $125k",
            description: "Salary premium for Power BI expertise",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$6,000 - $10,000" },
          { location: "United Kingdom", montly: "$4,000 - $7,000" },
          { location: "Europe", montly: "$3,500 - $6,500" },
          { location: "Remote Roles", montly: "$1,500 - $5,000" },
        ],
        faqs: [
          {
            question: "Is Power BI hard to learn?",
            answer:
              "No, Power BI is designed to be user-friendly, especially if you know Excel. However, mastering DAX and modeling takes practice.",
          },
          {
            question: "Do I need a license for Power BI?",
            answer:
              "We use the free Power BI Desktop version for learning, which has all the features needed for the course.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What is DAX?",
            answer:
              "DAX (Data Analysis Expressions) is the formula language used in Power BI. You will learn it from basics to advanced levels.",
          },
          {
            question: "Will we cover data cleaning?",
            answer:
              "Yes, you will learn to use Power Query extensively to clean and transform messy data.",
          },
          {
            question: "Is this course suitable for Mac users?",
            answer:
              "Power BI Desktop only runs on Windows. Mac users will need to use a VM (like Parallels) or a cloud desktop, which we can advise on.",
          },
          {
            question: "How does this help my career?",
            answer:
              "Power BI is the most widely used BI tool in the enterprise. Proficiency is a requirement for many Analyst roles.",
          },
          {
            question: "Will I build a dashboard?",
            answer:
              "You will build multiple portfolio-ready dashboards, including sales trackers, financial reports, and HR analytics.",
          },
          {
            question: "Are classes live?",
            answer:
              "Yes, weekly live sessions ensure you can get help with complex formulas and design choices.",
          },
          {
            question: "Can I get a job with just Power BI?",
            answer:
              "Yes, 'Power BI Developer' is a specific and lucrative job title, though combining it with SQL is recommended.",
          },
        ],
      },
      {
        title: "Tableau Analytics",
        slug: "tableau-analytics",
        survey: "tableau-analytics",
        description:
          "Learn data visualization best practices and build insightful dashboards using Tableau.",
        imageSrc: "/assets/courses/data-analysis-tableau.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.7,
        peopleInField: "Business Intelligence Analysts",
        heroFeatures: [
          {
            title: "Launch Your Career with Industry-Driven Data Skills",
            features: [
              "The most comprehensive Data Analytics with Tableau Bootcamp",
              "Learn Tableau, SQL, Excel, and real business intelligence frameworks",
              "Build dashboards, uncover insights, and make data-driven decisions",
              "With real-world projects, create a job-ready portfolio that sets you apart",
            ],
          },
          {
            title:
              "Analyze, Visualize, and Get Hired as a Certified Data Analyst",
            features: [
              "Learn to clean, analyze, and visualize complex data using Tableau",
              "Work with real datasets from finance, health, marketing, and more",
              "Get 1:1 mentorship, resume help, mock interviews, and job prep",
              "Access virtual internships and placement support across industries",
            ],
          },
          {
            title: "Join the Global Data Talent Movement",
            features: [
              "150 million new data roles are projected by 2025. We’ll help you become the certified talent global companies are hiring",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Data Analysis with Tableau Course",
          description:
            "Data is the new oil and organizations need professionals who can make sense of it. This course is your gateway to a career in high-demand data roles.",
          keyFeatures: [
            "No prior data experience required, we teach you from scratch",
            "Hands-on learning with Tableau, Excel, Power BI, and SQL",
            "Real-world projects analyzing sales trends, customer behavior, and performance dashboards",
            "Globally recognized certification to boost your resume and LinkedIn",
            "Career-focused curriculum with portfolio development and resume support",
            "Live instructor-led sessions + self-paced content for full flexibility",
            "Access to a Cloud Data Lab for continuous data practice",
            "Personalized mentorship, feedback sessions, and weekly accountability check-ins",
            "Tools aligned to top data roles: Data Analyst, BI Analyst, Dashboard Developer",
            "Peer community to collaborate, network, and grow with",
            "Mock interviews, job mapping, and career prep from experienced analysts",
            "Virtual internship and placement support via our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Industry Standard Tool",
            description:
              "Tableau is the gold standard for data visualization, used by top companies across all industries.",
          },
          {
            title: "Visual Communication Skills",
            description:
              "Data visualization experts bridge the gap between data and decision-makers, a critical business skill.",
          },
          {
            title: "Highly Portable Skill",
            description:
              "Tableau proficiency is valued across tech, consulting, finance, healthcare, and more.",
          },
          {
            title: "Competitive Advantage",
            description:
              "Tableau-certified professionals stand out in job searches and command higher salaries.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No design background? No problem. You’ll begin with connection basics and master complex visual storytelling techniques.",
          },
          {
            title: "Robust Tableau Curriculum",
            description:
              "Learn Data Connections, Calculated Fields, Parameters, LOD Expressions, and Interactive Dashboard Design.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, visualization workshops, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as marketing analytics dashboards, geospatial visualizations, and executive summaries.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn the art and science of data visualization from scratch.",
          },
          {
            title: "Analysts",
            description:
              "Master the premier tool for visual analytics and data storytelling.",
          },
          {
            title: "Designers",
            description:
              "Apply your design skills to data to create impactful visualizations.",
          },
          {
            title: "Freelancers",
            description:
              "Offer high-end data visualization services to enterprises.",
          },
          {
            title: "Consultants",
            description:
              "Communicate data-driven insights more effectively to clients.",
          },
          {
            title: "Students",
            description:
              "Stand out with a portfolio of beautiful, interactive data projects.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Foundations of Data Visualization and Tableau",
            modules: [
              {
                title: "Foundations of Data Visualization and Tableau",
                lessons: [
                  "Introduction to Data Visualization",
                  "Data Visualization Concepts & Examples",
                  "Storytelling with Data",
                  "Best Practices in Data Visualization",
                  "Overview of Tableau & Interface Tour",
                  "Importing Data",
                  "Tableau Public vs Tableau Desktop",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Getting Started with Tableau",
            modules: [
              {
                title: "Getting Started with Tableau",
                lessons: [
                  "Tableau Workspace Overview",
                  "Importing & Previewing Data",
                  "Creating Data Unions and Aggregations",
                  "Understanding Green vs Blue Pills",
                  "Navigating Sheets and Cards in Tableau",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Mastering Chart Types",
            modules: [
              {
                title: "Mastering Chart Types",
                lessons: [
                  "Introduction to Chart Types",
                  "Basic Charts",
                  "Effective Charts (Slope, Waterfall, Histogram, Heat Map)",
                  "Box & Whisker, Violin Plot, Bubble, Donut",
                  "Lollipop, Map, Scatter, Area, Bridge, Radar",
                  "Chart Advantages",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Building Visuals in Tableau",
            modules: [
              {
                title: "Building Visuals in Tableau",
                lessons: [
                  "Creating Bar, Line, and Stacked Bar Charts",
                  "Map Charts and Pie Charts",
                  "Treemaps and Highlight Tables",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Data Connections, Calculations & Blending",
            modules: [
              {
                title: "Data Connections, Calculations & Blending",
                lessons: [
                  "Data Blending and Its Use Cases",
                  "Establishing Data Links for Blending",
                  "Extracts vs Live Connections",
                  "Calculated Fields",
                  "Row, Aggregate, and Table Calculations",
                  "Best Practices",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Advanced Calculations & Parameters",
            modules: [
              {
                title: "Advanced Calculations & Parameters",
                lessons: [
                  "Level of Detail (LOD) Expressions",
                  "Fixed, Include, and Exclude LOD",
                  "Filters and LOD",
                  "Pivoting Data",
                  "Creating Parameters & Use Cases",
                  "Recap & Spotlight",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Filters & Basic Analytics",
            modules: [
              {
                title: "Filters & Basic Analytics",
                lessons: [
                  "Purpose & Types of Filters",
                  "Introduction to Analytics",
                  "Tableau’s Built-In Analytics Options",
                  "Using Medians and Averages",
                  "Recap",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Dashboards and Device Design",
            modules: [
              {
                title: "Dashboards and Device Design",
                lessons: [
                  "Dashboard Concepts & Building Key Elements",
                  "Fixed Size and Device-Specific Dashboards",
                  "Using Actions in Dashboards",
                  "Tips for Device Design",
                  "Recap",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Telling Stories with Data",
            modules: [
              {
                title: "Telling Stories with Data",
                lessons: [
                  "Creating Stories in Tableau",
                  "Using Stories to Communicate Insights",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Tableau Dashboards",
              "Calculated Fields",
              "Data Visualization Best Practices",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Visual Communication", "Executive Data Presentation"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Data Visualization Story",
            description: "Create storytelling dashboards in Tableau.",
          },
          {
            title: "Project 2: Business Insights Dashboard",
            description: "Design business-focused dashboards.",
          },
          {
            title: "Project 3: Advanced Tableau Analytics",
            description: "Apply advanced Tableau features.",
          },
          {
            title: "Project 4: Executive Presentation",
            description: "Prepare executive-ready Tableau reports.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Data Analyst",
            description:
              "Assist in creating basic visualizations and data reports.",
          },
          {
            current: false,
            title: "Business Intelligence Analyst",
            description:
              "Create Tableau dashboards that communicate insights effectively.",
          },
          {
            current: false,
            title: "Data Visualization Specialist",
            description: "Design compelling data visualizations.",
          },
          {
            current: false,
            title: "Data Analyst",
            description: "Analyze datasets and generate insights.",
          },
          {
            current: false,
            title: "Senior BI Analyst",
            description:
              "Lead visualization projects and establish data storytelling standards.",
          },
          {
            current: false,
            title: "BI Lead",
            description: "Oversee visualization and BI strategy.",
          },
          {
            current: false,
            title: "Director of Analytics",
            description:
              "Define enterprise visualization standards and lead analytics teams.",
          },
        ],
        teachFeatures: [
          {
            title: "Tableau Public Portfolio",
            description:
              "Curate a stunning profile on Tableau Public with diverse visualizations and dashboards.",
          },
          {
            title: "Master Visualization Interviews",
            description:
              "Prepare to discuss visual best practices and solve data problems live using Tableau.",
          },
          {
            title: "Gain Visibility",
            description:
              "Get your visualizations featured as 'Viz of the Day' or share them in the Tableau community.",
          },
          {
            title: "Resume for visualizers",
            description:
              "Highlight your specific Tableau certifications and your ability to communicate complex data simply.",
          },
          {
            title: "Target Data-Driven Firms",
            description:
              "Apply to consulting firms and tech companies that prize high-quality data presentation.",
          },
          {
            title: "Network with the DataFam",
            description:
              "Connect with the passionate and supportive Tableau community on Twitter and LinkedIn.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Visual Standard",
            description: "Tableau remains the gold standard for Dataviz",
            source: "Gartner",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "High Adoption",
            description: "Used by 80% of Fortune 500 companies",
            source: "Salesforce/Tableau",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Career Boost",
            description: "Tableau skills add 15% to Analyst salaries",
            source: "Burning Glass Technologies",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Consulting",
            description: "Huge demand in management consulting firms.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$90k – $130k",
            description: "Salaries for Tableau Developers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$6,500 - $10,500" },
          { location: "United Kingdom", montly: "$4,500 - $7,500" },
          { location: "Europe", montly: "$4,000 - $7,000" },
          { location: "Remote Roles", montly: "$2,000 - $5,500" },
        ],
        faqs: [
          {
            question: "What makes Tableau different from Power BI?",
            answer:
              "Tableau is often preferred for its deep visualization capabilities and flexibility in data storytelling, while Power BI integrates tightly with Microsoft Office.",
          },
          {
            question: "Is Tableau free to use?",
            answer:
              "We use Tableau Public, the free version, for the course. It allows you to build and share visualizations online.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Do I need coding skills?",
            answer:
              "No, Tableau is largely drag-and-drop, though we will teach you 'Calculated Fields' which are similar to Excel formulas.",
          },
          {
            question: "What jobs require Tableau?",
            answer:
              "Data Analysts, Business Intelligence Developers, and Tableau Consultants are in high demand.",
          },
          {
            question: "Will I learn data storytelling?",
            answer:
              "Yes, a major part of the course is learning how to present data to stakeholders to drive decisions.",
          },
          {
            question: "Are the projects real-world?",
            answer:
              "Yes, you will work with varied datasets from retail, healthcare, and finance to solve realistic business questions.",
          },
          {
            question: "Is there a certification exam?",
            answer:
              "We prepare you for the Tableau Desktop Specialist certification exam, though the exam fee is separate.",
          },
          {
            question: "How interactive are the classes?",
            answer:
              "Very. We do live visualization workshops where we build dashboards together from scratch.",
          },
          {
            question: "Can I use Tableau on a Mac?",
            answer:
              "Yes, Tableau Desktop and Public run natively on both Windows and Mac.",
          },
        ],
      },
      {
        title: "ML for Data Analysis",
        slug: "ml-for-data-analytics",
        survey: "ml-for-data-analytics",
        description:
          "Apply machine learning techniques to analytics use cases such as forecasting, segmentation, and churn prediction.",
        imageSrc: "/assets/courses/machine-learning-2.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 weeks",
        format: "live, online",
        rating: 4.8,
        peopleInField: "Machine Learning Analysts",
        heroFeatures: [
          {
            title: "Kickstart Your Career in Data-Driven Intelligence",
            features: [
              "A practical ML Bootcamp designed for data enthusiasts and professionals",
              "Master the tools and techniques used to build intelligent systems",
              "Work on real datasets and industry-relevant problems",
              "Learn Python, Supervised & Unsupervised ML and more",
            ],
          },
          {
            title: "Predict, Optimize, and Stand Out as a Certified ML Expert",
            features: [
              "Build a portfolio that shows your ability to solve real business problems",
              "Get access to mentorship, virtual internships, and expert career support",
              "Become job-ready with projects, assessments, and hands-on support",
              "Receive tailored interview coaching, CV rewrites, and more",
            ],
          },
          {
            title: "Be Part of the Global Machine Learning Talent Pool",
            features: [
              "The demand for ML professionals is booming and businesses need data-savvy minds. We’ll help you become one of them!",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Machine Learning Bootcamp for Data Professionals",
          description:
            "Fast-track your career and become a data professional with ML skills that power systems across industries.",
          keyFeatures: [
            "No coding background required, ideal for aspiring data professionals and career switchers",
            "Hands-on learning using Python, Scikit-learn, Pandas, and Jupyter Notebooks",
            "Real-world projects: fraud detection, customer churn prediction, recommendation systems, and more",
            "Globally recognized certification to showcase your ML and data modeling expertise",
            "Career-driven curriculum with portfolio development, CV revamp, and LinkedIn upgrades",
            "Live instructor-led classes + flexible, self-paced content for all learning styles",
            "Access to a dedicated ML Practice Lab for algorithm-building and model tuning",
            "1-on-1 mentorship, weekly feedback loops, and live support from industry experts",
            "Learn tools aligned with roles like Machine Learning Engineer, Data Scientist, and AI Analyst",
            "Supportive learning community for peer collaboration, accountability, and growth",
            "Mock interviews, job role mapping, and technical prep for ML hiring pipelines",
            "Virtual internship and job assistance via our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Analyst Career Accelerator",
            description:
              "ML skills transform analysts from reporters to predictive strategists, dramatically increasing value.",
          },
          {
            title: "Growing Expectation",
            description:
              "Employers increasingly expect data analysts to have foundational ML skills for advanced insights.",
          },
          {
            title: "Salary Premium",
            description:
              "Analysts with ML skills earn 20-30% more than those limited to traditional analytics methods.",
          },
          {
            title: "Bridge to Data Science",
            description:
              "ML for analytics is the natural stepping stone to full data science and AI engineering roles.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No coding background? No problem. You’ll begin with Python basics and move to applying ML libraries to business data.",
          },
          {
            title: "Robust ML Curriculum",
            description:
              "Learn Regression, Classification, Clustering, and Time-Series Forecasting specifically applied to business analytics scenarios.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, model building walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as customer segmentation, sales forecasting, and churn prediction models.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "A practical entry point into Machine Learning without overwhelming theory.",
          },
          {
            title: "Data Analysts",
            description:
              "Upgrade your skill set from historical reporting to predictive analytics.",
          },
          {
            title: "Business Professionals",
            description:
              "Learn to use data to predict trends and make proactive decisions.",
          },
          {
            title: "Freelancers",
            description:
              "Offer advanced predictive insights that command higher rates.",
          },
          {
            title: "Founders",
            description:
              "Use ML to forecast growth and understand customer behavior.",
          },
          {
            title: "Students",
            description:
              "Bridge the gap between basic analytics and data science.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Machine Learning Basics",
            modules: [
              {
                title: "Machine Learning Basics",
                lessons: [
                  "Who is Peter Pandey?",
                  "Peter Pandey’s journey to learn Machine Learning",
                  "What is Machine Learning?",
                  "Classification vs Regression",
                  "Supervised vs Unsupervised Learning",
                  "Preparing for Your ML Journey",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Python Basics Bonus",
            modules: [
              {
                title: "Python Basics Bonus",
                lessons: [
                  "Setup Environment (Local Python and Google Colab)",
                  "Variables (Quiz & Exercise)",
                  "Numbers (Quiz & Exercise)",
                  "Strings (Quiz & Exercise)",
                  "Lists (Quiz & Exercise)",
                  "Install Pycharm",
                  "If Condition (Quiz & Exercise)",
                  "For Loop (Quiz & Exercise)",
                  "Functions (Quiz & Exercise)",
                  "Dictionary and Tuples (Quiz & Exercise)",
                  "Modules and Pip (Quiz & Exercise)",
                  "File Handling (Quiz & Exercise)",
                  "Classes and Objects (Quiz & Exercise)",
                  "Inheritance (Quiz & Exercise)",
                  "Exception Handling (Quiz)",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Numpy Basics",
            modules: [
              {
                title: "Numpy Basics",
                lessons: [
                  "Introduction and Benefits",
                  "Basic Operations",
                  "Matrix Operations",
                  "Slicing, Stacking",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Data Preprocessing and Visualization",
            modules: [
              {
                title: "Data Preprocessing and Visualization",
                lessons: [
                  "Pandas Introduction and Installation",
                  "Dataframe Basics",
                  "Read, Write Excel and CSV Files",
                  "Handle Missing Data (Part 1 & 2)",
                  "Grouping Data",
                  "Data Concatenation and Merging",
                  "Data Visualization Using Matplotlib and Seaborn",
                  "Data God Showing the Way",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Math & Statistics for Data Science, AI Bonus",
            modules: [
              {
                title: "Math & Statistics for Data Science, AI Bonus",
                lessons: [
                  "Descriptive vs. Inferential Statistics",
                  "Measures of Central Tendency: Mean, Median, Mode",
                  "Percentile & Analysis: Shoe Sales",
                  "Measures of Dispersion: Range, IQR, Variance, Standard Deviation",
                  "Box or Whisker Plot & Outlier Treatment",
                  "Correlation vs Causation",
                  "Probability Basics & Bayes Theorem",
                  "Distribution, Skewness, Normal Distribution",
                  "Z Score & Standard Normal Distribution (SND)",
                  "Random Sampling, Sample Bias, CLT",
                  "Confidence Interval",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Supervised Machine Learning: Regression",
            modules: [
              {
                title: "Supervised Machine Learning: Regression",
                lessons: [
                  "Simple & Multiple Linear Regression",
                  "Cost Function, Derivatives, Gradient Descent",
                  "Model Evaluation: Metrics (MSE, MAE)",
                  "Data Preprocessing: One Hot Encoding",
                  "Polynomial Regression",
                  "Overfitting, Underfitting, Bias Variance Trade Off",
                  "L1 and L2 Regularization",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Supervised Machine Learning: Classification",
            modules: [
              {
                title: "Supervised Machine Learning: Classification",
                lessons: [
                  "Introduction to Classification & Logistic Regression",
                  "Model Evaluation: Accuracy, Precision, Recall, F1 Score",
                  "Support Vector Machine (SVM)",
                  "Naive Bayes: Theory & SMS Spam Classification",
                  "Decision Tree: Theory & Salary Classification",
                  "Handle Class Imbalance (Theory & Implementation)",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Ensemble Learning",
            modules: [
              {
                title: "Ensemble Learning",
                lessons: [
                  "What is Ensemble Learning?",
                  "Bagging & Random Forest",
                  "Boosting: AdaBoost",
                  "Gradient Boosting: Regression & Classification",
                  "XGBoost: Walk Through & Benefits",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Model Evaluation & Fine Tuning",
            modules: [
              {
                title: "Model Evaluation & Fine Tuning",
                lessons: [
                  "ROC Curve & AUC",
                  "K Fold & Stratified K Fold Cross Validation",
                  "Hyperparameter Tuning: GridsearchCV & RandomizedSearchCV",
                  "Model Selection Guide",
                  "Selecting the Right Evaluation Metric",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "ML Project Life Cycle",
            modules: [
              {
                title: "ML Project Life Cycle",
                lessons: [
                  "10 Stages of AI Project Life Cycle",
                  "Requirements and Scope of Work (SOW)",
                  "Data Collection, Cleaning & EDA",
                  "Feature Engineering & Model Selection",
                  "Model Deployment & Monitoring (ML Ops)",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Feature Engineering",
            modules: [
              {
                title: "Feature Engineering",
                lessons: [
                  "3 Ways of Doing Feature Engineering",
                  "Feature Selection Using Correlation",
                  "Feature Selection Using Variance Inflation Factor (VIF)",
                ],
              },
            ],
          },
          {
            id: "12",
            title: "Unsupervised Learning",
            modules: [
              {
                title: "Unsupervised Learning",
                lessons: [
                  "K Means Clustering: Theory & Customer Segmentation",
                  "Hierarchical Clustering: Theory & Customer Segmentation",
                  "DBSCAN: Theory & Practical Implementation",
                  "Peter AI",
                ],
              },
            ],
          },
          {
            id: "13",
            title: "ML Ops & Cloud Tools",
            modules: [
              {
                title: "ML Ops & Cloud Tools",
                lessons: [
                  "What is ML Ops & Its Importance",
                  "ML Flow: Experiment Tracking & Model Registry",
                  "FastAPI Basics & Building Server",
                  "Git Version Control System",
                  "AWS Sagemaker: Setup, Training, Algorithms",
                  "Data Drift Detection Using PSI & CSI",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Predictive Modeling",
              "Classification & Regression",
              "Model Evaluation",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Business Insight Translation",
              "Data-Driven Decision Making",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Predictive Analytics Model",
            description: "Build predictive models for business analytics.",
          },
          {
            title: "Project 2: Classification Use Case",
            description: "Apply ML classification to real datasets.",
          },
          {
            title: "Project 3: Model Evaluation",
            description: "Evaluate and compare ML models.",
          },
          {
            title: "Project 4: Analytics ML Deployment",
            description: "Deploy ML models for analytics use cases.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Data Analyst",
            description:
              "Assist with data analysis and basic predictive modeling tasks.",
          },
          {
            current: false,
            title: "Machine Learning Analyst",
            description:
              "Apply machine learning techniques to analytics and reporting use cases.",
          },
          {
            current: false,
            title: "Data Analyst",
            description: "Analyze data to uncover insights and trends.",
          },
          {
            current: false,
            title: "Analytics Engineer",
            description: "Build ML-powered analytics pipelines.",
          },
          {
            current: false,
            title: "Senior Data Analyst",
            description:
              "Lead advanced analytical projects and mentor junior analysts.",
          },
          {
            current: false,
            title: "Data Science Consultant",
            description: "Deliver ML-driven insights to organizations.",
          },
          {
            current: false,
            title: "Chief Analytics Officer",
            description:
              "Define organizational analytics strategy and lead data teams at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Predictive Analytics Portfolio",
            description:
              "Showcase projects where you moved beyond reporting to forecasting and prediction.",
          },
          {
            title: "Interview as an Advanced Analyst",
            description:
              "Demonstrate your ability to use ML to solve business problems better than traditional methods.",
          },
          {
            title: "Share Predictive Insights",
            description:
              "Write about how adding ML to your analytics workflow improved decision-making.",
          },
          {
            title: "Hybrid Skillset Resume",
            description:
              "Position yourself as a unicorn who knows both business analytics and machine learning.",
          },
          {
            title: "Target Senior Analyst Roles",
            description:
              "Apply for higher-paying roles that require predictive modeling capabilities.",
          },
          {
            title: "Bridge the Gap",
            description:
              "Network with both business stakeholders and data scientists as a translator.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Skill Upgrade",
            description: "The #1 upskill path for Senior Data Analysts",
            source: "Coursera Impact Report",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Predictive Era",
            description: "Shift from descriptive to predictive analytics",
            source: "Forrester",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Value Add",
            description: "ML Analytics drives 20% higher ROI",
            source: "MIT Sloan Review",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Strategic Role",
            description: "Critical for forecasting and risk management.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$95k – $145k",
            description: "Premium for Analysts with ML skills",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,000 - $11,500" },
          { location: "United Kingdom", montly: "$4,500 - $8,000" },
          { location: "Europe", montly: "$4,000 - $7,500" },
          { location: "Remote Roles", montly: "$2,000 - $6,000" },
        ],
        faqs: [
          {
            question: "How is this different from the Data Science course?",
            answer:
              "This course is lighter on theory and coding, focusing specifically on applying ML algorithms to business analytics use cases like forecasting.",
          },
          {
            question: "Do I need Python experience?",
            answer:
              "We teach Python from scratch, but the focus is on using libraries for analysis rather than software development.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What algorithms will I learn?",
            answer:
              "You will cover Regression (forecasting), Classification (churn prediction), and Clustering (customer segmentation).",
          },
          {
            question: "Is this course math-heavy?",
            answer:
              "We focus on the intuitive application of algorithms for business, rather than deep mathematical proofs.",
          },
          {
            question: "Will this boost my Analyst salary?",
            answer:
              "Yes, Analysts with predictive modeling skills typically earn 20-30% more than those limited to descriptive reporting.",
          },
          {
            question: "What tools do we use?",
            answer:
              "We primarily use Python (Scikit-learn, Pandas) and Jupyter Notebooks.",
          },
          {
            question: "Can I apply this to marketing data?",
            answer:
              "Absolutely. Marketing attribution, churn prediction, and customer lifetime value are core use cases we cover.",
          },
          {
            question: "Are the classes live?",
            answer:
              "Yes, weekly live classes help you debug your models and understand the results.",
          },
          {
            question: "Do I need a powerful computer?",
            answer:
              "No, we can use cloud-based notebooks (Google Colab) for all model training.",
          },
        ],
      },
      {
        title: "Math & Stats for Data Science",
        slug: "math-and-stats-for-data-science",
        survey: "math-statistics-for-ai",
        description:
          "Understand probability, statistics, hypothesis testing, and linear algebra for data-driven decision making.",
        imageSrc: "/assets/courses/maths-stats.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 weeks",
        format: "live, online",
        rating: 4.5,
        peopleInField: "Data Science Analysts",
        heroFeatures: [
          {
            title: "Launch Your Career in Data Science with Core Quant Skills",
            features: [
              "The most comprehensive maths & stats for data science course",
              "With Excel, Python for stats, and visualizations made simple",
              "Practice with real-world data sets and analytical tasks",
              "Learn, apply, and gain top global opportunities",
            ],
          },
          {
            title: "Master the Language of Data. Build Confidence in Numbers.",
            features: [
              "Develop a portfolio that reflects analytical thinking and statistical skill",
              "Get access to mentorship, virtual internships, and expert career support",
              "Become job-ready with projects, assessments, and hands-on support",
              "Career coaching, job prep, and resume optimization included",
            ],
          },
          {
            title: "Fuel Your Data Science Journey from the Ground Up",
            features: [
              "Maths and stats are the backbone of every great data analyst, scientist, or AI engineer. Master the essentials and join the global data talent pipeline",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Mathematics and Statistics Course for Data Science",
          description:
            "This course bridges the gap between theory and industry-level data science needs, making you job-ready from day one.",
          keyFeatures: [
            "No prior experience in advanced math or programming required—we start from the basics",
            "Strong foundation in linear algebra, calculus, probability, and statistics tailored to real data applications",
            "Hands-on projects in Python to apply each concept to real-world datasets",
            "Focus on data-driven thinking, hypothesis testing, A/B testing, regression, and predictive modeling",
            "Practical examples from marketing analytics, health data, finance, and more",
            "Globally recognized certification demonstrating your mastery of core data science math skills",
            "Blend of live instructor-led sessions and self-paced content for flexible learning",
            "Guided practice exercises, quizzes, and case studies for each module",
            "Weekly mentorship sessions with experienced data scientists and statisticians",
            "Access to Data Science Lab for experimentation with real datasets",
            "Community support group for study partnerships and accountability",
            "Career support: LinkedIn optimization, resume reviews, and interview prep",
            "Eligibility for virtual internship opportunities and job placement support",
          ],
        },
        courseDemands: [
          {
            title: "Credible Analysis Foundation",
            description:
              "Statistical fluency ensures your analyses are trusted and defensible in business decision-making.",
          },
          {
            title: "Required for Data Roles",
            description:
              "Statistics knowledge is tested in data science interviews and expected in senior analytics positions.",
          },
          {
            title: "Avoid Costly Mistakes",
            description:
              "Proper statistical understanding prevents data misinterpretation that can lead to poor business decisions.",
          },
          {
            title: "Career Longevity",
            description:
              "Math and stats skills remain relevant regardless of changing tools and technologies.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No math background? No problem. You’ll begin with arithmetic basics and progress to advanced statistical concepts used in data science.",
          },
          {
            title: "Robust Math Curriculum",
            description:
              "Learn Descriptive and Inferential Statistics, Probability, Hypothesis Testing, and Linear Algebra for Data Science.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, problem-solving sessions, and Q&A to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as A/B testing analysis, statistical data validation, and probability modeling.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Build the correct mental models for understanding data from day one.",
          },
          {
            title: "Data Analysts",
            description:
              "Stop guessing—learn to validate your findings with statistical rigor.",
          },
          {
            title: "Career Switchers",
            description:
              "Gain the quantitative confidence needed for technical data roles.",
          },
          {
            title: "Freelancers",
            description:
              "Deliver analyses that stand up to scrutiny and drive real value.",
          },
          {
            title: "Researchers",
            description:
              "Ensure your data methodologies are sound and scientifically valid.",
          },
          {
            title: "Students",
            description:
              "Master the mathematical fundamentals often glossed over in bootcamps.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Overview of Statistics",
            modules: [
              {
                title: "Overview of Statistics",
                lessons: [
                  "Descriptive and Inferential Statistics",
                  "Basic Terms of Statistics",
                  "Types of Data",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Harnessing Data",
            modules: [
              {
                title: "Harnessing Data",
                lessons: [
                  "Random Sampling",
                  "Sampling With Replacement and Without Replacement",
                  "Cochran's Minimum Sample Size",
                  "Simple Random Sampling",
                  "Stratified Random Sampling",
                  "Cluster Random Sampling",
                  "Systematic Random Sampling",
                  "Biased Random Sampling Methods",
                  "Sampling Error",
                  "Methods of Collecting Data",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Exploratory Data Analysis",
            modules: [
              {
                title: "Exploratory Data Analysis",
                lessons: [
                  "Exploratory Data Analysis Introduction",
                  "Measures of Central Tendencies: Mean, Median, and Mode",
                  "Measures of Central Tendencies: Range, Variance, and Standard Deviation",
                  "Data Distribution Plot: Histogram",
                  "Normal Distribution",
                  "Z Value / Standard Value",
                  "Empirical Rule and Outliers",
                  "Central Limit Theorem",
                  "Normality Testing",
                  "Skewness & Kurtosis",
                  "Measures of Distance: Euclidean, Manhattan, and Minkowski Distance",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Hypothesis Testing",
            modules: [
              {
                title: "Hypothesis Testing",
                lessons: [
                  "Hypothesis Testing Introduction",
                  "P-Value, Confidence Interval",
                  "Parametric Hypothesis Testing Methods",
                  "Hypothesis Testing Errors: Type I and Type II",
                  "One Sample T-test",
                  "Two Sample Independent T-test",
                  "Two Sample Relation T-test",
                  "One Way ANOVA Test",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Correlation and Regression",
            modules: [
              {
                title: "Correlation and Regression",
                lessons: [
                  "Correlation Introduction",
                  "Direct/Positive Correlation",
                  "Indirect/Negative Correlation",
                  "Regression",
                  "Choosing the Right Method",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Probability & Statistics",
              "Regression Analysis",
              "Hypothesis Testing",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Analytical Thinking", "Statistical Interpretation"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Probability Analysis",
            description: "Apply probability concepts to datasets.",
          },
          {
            title: "Project 2: Regression Modeling",
            description: "Build regression models for prediction.",
          },
          {
            title: "Project 3: Hypothesis Testing",
            description: "Perform statistical hypothesis testing.",
          },
          {
            title: "Project 4: Statistical Case Study",
            description: "Deliver a complete statistical analysis project.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Data Analyst",
            description:
              "Apply statistical concepts to assist with data analysis tasks.",
          },
          {
            current: false,
            title: "Data Science Analyst",
            description:
              "Apply statistical methods to analyze and interpret data.",
          },
          {
            current: false,
            title: "Data Scientist",
            description: "Build models grounded in statistical reasoning.",
          },
          {
            current: false,
            title: "Quantitative Analyst",
            description: "Use mathematical models for advanced analysis.",
          },
          {
            current: false,
            title: "Senior Data Scientist",
            description:
              "Lead advanced statistical projects and mentor data teams.",
          },
          {
            current: false,
            title: "Analytics Researcher",
            description:
              "Conduct research in applied statistics and analytics.",
          },
          {
            current: false,
            title: "Chief Data Scientist",
            description:
              "Define data science strategy and lead research initiatives at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Statistical Analysis Portfolio",
            description:
              "Showcase rigorous A/B testing designs and deep statistical analysis of datasets.",
          },
          {
            title: "Pass Technical Screenings",
            description:
              "Confidently answer the probability and statistics questions that trip up most candidates.",
          },
          {
            title: "Write About Methodology",
            description:
              "Demonstrate your commitment to scientific rigor by explaining your statistical methods online.",
          },
          {
            title: "Quant-Focused Resume",
            description:
              "Highlight your solid mathematical foundation as a guarantee of reliable insights.",
          },
          {
            title: "Apply to Research Roles",
            description:
              "Target roles that require scientific validity, such as in user research or experimentation.",
          },
          {
            title: "Network with Researchers",
            description:
              "Connect with professionals who value statistical correctness and rigorous methodology.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Core Competency",
            description:
              "Statistical literacy is a barrier to entry for top firms",
            source: "FAANG Hiring Guides",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Data Trust",
            description: "Stats knowledge prevents costly business errors",
            source: "Harvard Business Review",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Universal Need",
            description: "Applies to A/B testing, Marketing, and Operations",
            source: "Indeed Data Trends",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Experimentation",
            description: "Key for product-led growth companies.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$100k – $160k",
            description: "Salaries for quantitative analyst roles",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,500 - $12,000" },
          { location: "United Kingdom", montly: "$5,000 - $8,500" },
          { location: "Europe", montly: "$4,500 - $8,000" },
          { location: "Remote Roles", montly: "$2,000 - $6,000" },
        ],
        faqs: [
          {
            question: "I hated math in school. Is this for me?",
            answer:
              "Yes! We teach math differently—visually and practically using code, specifically for Data Science applications.",
          },
          {
            question: "Why can't I just import libraries?",
            answer:
              "To be a great Data Scientist, you need to understand *why* a model works or fails. Math provides that intuition.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What topics are covered?",
            answer:
              "Linear Algebra, Calculus, Probability Theory, and Descriptive/Inferential Statistics.",
          },
          {
            question: "Is there coding involved?",
            answer:
              "Yes, we use Python to visualize mathematical concepts and calculate statistics, making it hands-on.",
          },
          {
            question: "Will this help with interviews?",
            answer:
              "Yes, technical interviews at top tech firms often test your understanding of probability and statistical concepts.",
          },
          {
            question: "How deep do we go?",
            answer:
              "We go deep enough to understand ML algorithms (like Gradient Descent) but avoid unnecessary academic abstraction.",
          },
          {
            question: "Do I need to buy textbooks?",
            answer: "No, we provide comprehensive notes and digital resources.",
          },
          {
            question: "Who teaches this course?",
            answer:
              "Instructors with strong academic backgrounds who are also practitioners in the Data Science field.",
          },
          {
            question: "Can I take this alongside the DS course?",
            answer:
              "Yes, it is the perfect companion to the Certified Data Science course.",
          },
        ],
      },
      {
        title: "SQL for Data Analytics",
        slug: "sql-for-data-analytics",
        survey: "sql-for-data-professionals",
        description:
          "Master SQL for querying, transforming, and analyzing data across relational databases.",
        imageSrc: "/assets/courses/sql.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.9,
        peopleInField: "Data Analysts",
        heroFeatures: [
          {
            title: "Launch Your Career with the Language of Data",
            features: [
              "The most beginner-friendly SQL Bootcamp aligned with industry needs",
              "Learn how to extract, manipulate, and analyze data confidently",
              "Learn hands-on with real world datasets and business cases",
              "Understand SQL queries, joins, subqueries, CTEs, window functions, and more",
            ],
          },
          {
            title: "Query, Analyze, and Impress as a Certified SQL Analyst",
            features: [
              "Build a data analysis portfolio that showcases real insights",
              "Get personalized mentorship, virtual internship, and career coaching",
              "Resume reviews, interview prep, and job-matching included",
              "Get job-ready with SQL challenges and placement support",
            ],
          },
          {
            title: "Join the Global Data Talent Revolution",
            features: [
              "Data roles requiring SQL are growing rapidly. From startups to Fortune 500s, top companies need analysts. We'll help you become one.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective SQL for Data Analysis Course",
          description:
            "Data is the backbone of every modern business decision. Fast-track and become an in-demand data expert with skills that power strategy across industries.",
          keyFeatures: [
            "No prior experience needed, perfect for beginners and career switchers",
            "Hands-on learning with real tools like MySQL, PostgreSQL, and BigQuery",
            "Real-world projects: business dashboards, cohort analysis, customer segmentation, and more",
            "Globally recognized certification to showcase your SQL and data analytics skills",
            "Career-focused curriculum with resume, portfolio, and LinkedIn optimization",
            "Live instructor-led sessions + self-paced content for total flexibility",
            "Access to SQL Lab Workspace for continuous practice and scenario-based challenges",
            "1-on-1 mentorship, weekly Q&A sessions, and expert feedback",
            "Learn tools aligned with roles like Data Analyst, Product Analyst, BI Analyst, and SQL Developer",
            "Vibrant peer community for collaboration, accountability, and networking",
            "Mock interviews, job mapping, and personalized career support",
            "Virtual internship and job assistance through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Universal Data Language",
            description:
              "SQL is required in 90%+ of data-related job postings, making it the most essential technical skill.",
          },
          {
            title: "Timeless Technology",
            description:
              "SQL has been the standard for 40+ years and remains critical for modern data systems.",
          },
          {
            title: "Immediate Application",
            description:
              "SQL skills can be applied on day one of any data role, providing instant value.",
          },
          {
            title: "Gateway to Data Careers",
            description:
              "SQL proficiency is the first step to analyst, scientist, and engineering roles.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No coding background? No problem. You’ll begin with simple SELECT statements and advance to complex joins and window functions.",
          },
          {
            title: "Robust SQL Curriculum",
            description:
              "Learn Data Querying, Aggregation, Joins, Subqueries, Window Functions, and Database Management.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, query writing sessions, and Q&A to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as customer behavior analysis, inventory management systems, and revenue reporting.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "The single most useful technical skill you can learn for a data career.",
          },
          {
            title: "Excel Users",
            description:
              "Break free from spreadsheet limits and analyze millions of rows with ease.",
          },
          {
            title: "Marketers & PMs",
            description:
              "Query your own data without waiting for the engineering team.",
          },
          {
            title: "Freelancers",
            description:
              "Manage and migrate databases for clients in any industry.",
          },
          {
            title: "Founders",
            description: "Understand your own user data at the source level.",
          },
          {
            title: "Students",
            description:
              "A mandatory skill for virtually every data internship and entry-level job.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "SQL Basics: Data Retrieval - Multiple Tables",
            modules: [
              {
                title: "SQL Basics: Data Retrieval - Multiple Tables",
                lessons: [
                  "Why Do We Need Multiple Tables?",
                  "SQL Joins (INNER, LEFT, RIGHT, FULL) (Quiz & Exercise)",
                  "Cross Join",
                  "Analytics on Tables",
                  "Join More Than Two Tables (Exercise)",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "SQL Basics: Complex Queries",
            modules: [
              {
                title: "SQL Basics: Complex Queries",
                lessons: [
                  "Subqueries",
                  "ANY, ALL Operators",
                  "Co-Related Subquery",
                  "Common Table Expression (CTE)",
                  "CTE Benefits & Other Applications",
                  "Peter Pandey Flexes His SQL Skills",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "SQL Basics: Database Creation & Updates",
            modules: [
              {
                title: "SQL Basics: Database Creation & Updates",
                lessons: [
                  "Database Normalization and Data Integrity",
                  "Entity Relationship Diagram (ERD)",
                  "Data Types: Numeric, String, Date, Time, JSON, Spatial",
                  "Primary Key & Foreign Key",
                  "Create a Database From an ERD",
                  "Import Data From a CSV File Into a Database",
                  "Insert, Update and Delete Statements",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "AtliQ Hardware & Problem Statement",
            modules: [
              {
                title: "AtliQ Hardware & Problem Statement",
                lessons: [
                  "The Rise of Databases at AtliQ",
                  "Relational vs No-SQL Database",
                  "AtliQ Hardware’s Business Model",
                  "Profit & Loss Statement",
                  "ETL, Data Warehouse, OLAP vs OLTP, Data Catalog",
                  "Fact vs Dimension Table, Star vs Snowflake Schema",
                  "Simplified: What is Kanban?",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "SQL Advanced: Finance Analytics",
            modules: [
              {
                title: "SQL Advanced: Finance Analytics",
                lessons: [
                  "Backlog Grooming Meeting: Gross Sales Report",
                  "User-Defined SQL Functions (Exercise)",
                  "Gross Sales Report: Monthly Product Transactions & Total Sales",
                  "Stored Procedures: Monthly Gross Sales Report & Market Badge",
                  "Benefits of Stored Procedures",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "SQL Advanced: Top Customers, Products, Markets",
            modules: [
              {
                title: "SQL Advanced: Top Customers, Products, Markets",
                lessons: [
                  "Problem Statement and Pre-Invoice Discount Report",
                  "Performance Improvements #1 & #2",
                  "Database Views: Introduction, Discount, Net Sales (Exercise)",
                  "Top Markets, Customers & Products",
                  "The Two Most Important Skills for the Data Analyst",
                  "Window Functions: OVER Clause (Exercise)",
                  "Window Functions: ROW_NUMBER, RANK, DENSE_RANK (Exercise)",
                  "5 Ways SQL Is Used in the Industry",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "SQL Advanced: Supply Chain Analytics",
            modules: [
              {
                title: "SQL Advanced: Supply Chain Analytics",
                lessons: [
                  "Supply Chain Basics: Simplified",
                  "Problem Statement & Helper Table",
                  "Database Triggers & Events",
                  "Temporary Tables & Forecast Accuracy Report (Exercise)",
                  "Subquery vs CTE vs Views vs Temporary Table",
                  "User Accounts and Privileges",
                  "Database Indexes: Overview, Composite Index, Types",
                  "Peter Pandey's Order: I Have Completed the Course — Now What?",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "SQL Queries & Joins",
              "Data Aggregation",
              "Window Functions",
              "Database Optimization",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Analytical Problem Solving",
              "Business Query Translation",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Business Query Analysis",
            description: "Write SQL queries to answer business questions.",
          },
          {
            title: "Project 2: Sales Database Analysis",
            description: "Analyze transactional databases using SQL.",
          },
          {
            title: "Project 3: Advanced SQL Reporting",
            description: "Use joins, CTEs, and window functions for reporting.",
          },
          {
            title: "Project 4: Analytics Dataset Design",
            description: "Design optimized SQL datasets for analytics.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Data Analyst",
            description:
              "Analyze structured data using SQL to support business decisions.",
          },
          {
            current: false,
            title: "Business Intelligence Analyst",
            description: "Develop SQL-driven dashboards and reports.",
          },
          {
            current: false,
            title: "Analytics Engineer",
            description: "Model and transform data for analytics use cases.",
          },
          {
            current: false,
            title: "Senior Data Analyst",
            description:
              "Lead complex SQL analyses and mentor junior analysts.",
          },
          {
            current: false,
            title: "Data Analytics Manager",
            description: "Lead analytics teams and reporting initiatives.",
          },
          {
            current: false,
            title: "Director of Analytics",
            description:
              "Define organizational analytics strategy and lead cross-functional teams.",
          },
        ],
        teachFeatures: [
          {
            title: "SQL Code Repository",
            description:
              "Build a GitHub repo of complex queries, stored procedures, and data transformation scripts.",
          },
          {
            title: "Crush SQL Interviews",
            description:
              "Master the whiteboard SQL test—joins, window functions, and subqueries without breaking a sweat.",
          },
          {
            title: "Demonstrate Data Fluency",
            description:
              "Show that you can speak the universal language of data to any technical stakeholder.",
          },
          {
            title: "Technical Analyst Resume",
            description:
              "Make your SQL proficiency front and center to pass the first filter for any data role.",
          },
          {
            title: "Apply Everywhere",
            description:
              "SQL is required everywhere—learn to filter for the best opportunities.",
          },
          {
            title: "Connect with Database Admins",
            description:
              "Network with the people who manage the data to become a more effective analyst.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Most Requested",
            description: "SQL is the #1 skill in data job postings",
            source: "Indeed Hiring Lab",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "90% Usage",
            description: "Data teams that rely on SQL daily",
            source: "Stack Overflow Survey",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Standard",
            description: "The universal language of data databases",
            source: "DB-Engines Ranking",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Accessibility",
            description: "First step into any technical data role.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$75k – $115k",
            description: "Base for SQL-proficient Analysts",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$5,500 - $9,000" },
          { location: "United Kingdom", montly: "$3,500 - $6,500" },
          { location: "Europe", montly: "$3,000 - $6,000" },
          { location: "Remote Roles", montly: "$1,500 - $4,500" },
        ],
        faqs: [
          {
            question: "Why is SQL so important?",
            answer:
              "SQL is the language of databases. It is the most requested skill in data job postings, even more than Python.",
          },
          {
            question: "What database do we use?",
            answer:
              "We typically teach using PostgreSQL or MySQL, but the concepts apply to almost all relational databases.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Is this course for absolute beginners?",
            answer:
              "Yes, we start from 'SELECT *' and move all the way to complex Window Functions and CTEs.",
          },
          {
            question: "Do I need to install software?",
            answer:
              "We will guide you through installing a free database tool, or provide a cloud environment for practice.",
          },
          {
            question: "Will we cover database design?",
            answer:
              "We cover the basics of database schema and normalization so you understand how data is stored.",
          },
          {
            question: "Can I use this for Big Data?",
            answer:
              "Yes, SQL is the foundation for querying big data tools like Google BigQuery and Snowflake.",
          },
          {
            question: "Are there practice exercises?",
            answer:
              "Yes, the course is heavy on practice. You will write hundreds of queries to solve business problems.",
          },
          {
            question: "How long does it take to learn?",
            answer:
              "You can get comfortable with basics in a few weeks, but mastery takes practice. Our course is 8 weeks deep dive.",
          },
          {
            question: "Will this help me get a job?",
            answer:
              "Proficiency in SQL is often the 'gatekeeper' skill for entry-level analyst roles.",
          },
        ],
      },
      {
        title: "Python for Data Analytics",
        slug: "python-for-data-analytics",
        survey: "python-for-data-analytics",
        description:
          "Learn Python for data analysis using Pandas, NumPy, and visualization libraries.",
        imageSrc: "/assets/courses/python.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.7,
        peopleInField: "Data Analysts",
        heroFeatures: [
          {
            title: "Master Python. Analyse Data. Launch Your Career",
            features: [
              "The most comprehensive Python course aligned with industry standard",
              "Learn how to clean, visualize, and extract insights from data using Python",
              "Get hands-on with real datasets and build a standout data portfolio",
              "Master tools like Pandas, NumPy, Matplotlib, Seaborn, and Jupyter",
            ],
          },
          {
            title: "Analyze, Interpret, and Earn Big With Python",
            features: [
              "Build a project portfolio that proves your data analysis skills",
              "Get personalized mentorship, live practice sessions, and weekly reviews",
              "Interview prep, job guidance, and resume optimization included",
              "Graduate job-ready with remote internship and career support",
            ],
          },
          {
            title: "Python Is the Language of Data. Learn It, Use It, Thrive",
            features: [
              "Python is used in every data role in companies. Join learners across Africa building international careers in tech",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Python for Data Analysis Course",
          description:
            "Whether you’re diving into analytic, or AI, this course is your fast-track to becoming a data professional with real world, job-ready skills.",
          keyFeatures: [
            "No coding background needed, perfect for beginners and career switchers",
            "Hands-on learning with core Python libraries like Pandas, NumPy, Matplotlib, and Seaborn",
            "Real world projects: data cleaning, exploratory analysis, visualizations, and storytelling",
            "Globally recognized certification to prove your Python and analytics expertise",
            "Career focused curriculum with portfolio building, resume polishing, and LinkedIn optimization",
            "Live instructor-led sessions + flexible self-paced modules",
            "Access to a Python Data Lab environment for continuous practice and coding challenges",
            "1 on 1 mentorship, weekly office hours, and personalized feedback",
            "Learn tools aligned with roles like Data Analyst, Research Analyst, Business Analyst, and Junior Data Scientist",
            "Engaged peer community for collaboration, accountability, and project support",
            "Mock interviews, role specific job mapping, and career coaching",
            "Virtual internship and placement support through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Most Popular Data Language",
            description:
              "Python is the #1 programming language for data analytics, used by 80%+ of data professionals.",
          },
          {
            title: "Versatile Career Tool",
            description:
              "Python skills open doors to data analysis, automation, machine learning, and software development.",
          },
          {
            title: "Strong Job Market",
            description:
              "Python proficiency is one of the most requested skills in data job postings worldwide.",
          },
          {
            title: "Ecosystem Advantage",
            description:
              "Python's rich library ecosystem (Pandas, NumPy, Matplotlib) makes complex analysis simple.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No programming background? No problem. You’ll begin with Python syntax and quickly move to analyzing data with Pandas and NumPy.",
          },
          {
            title: "Robust Python Curriculum",
            description:
              "Learn Python Fundamentals, Data Structures, Pandas, NumPy, Matplotlib, and Seaborn for data analysis and visualization.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding sessions, and Q&A to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as financial data analysis, exploratory data analysis on real datasets, and automated reporting.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn the world's most popular programming language applied to data.",
          },
          {
            title: "Data Analysts",
            description:
              "Automate repetitive tasks and perform complex analyses impossible in Excel.",
          },
          {
            title: "Career Switchers",
            description:
              "Acquire the key technical skill needed for modern data roles.",
          },
          {
            title: "Freelancers",
            description:
              "Build custom data scripts and automation tools for clients.",
          },
          {
            title: "Founders",
            description:
              "Scrape web data and analyze market trends automatically.",
          },
          {
            title: "Students",
            description:
              "Develop the coding proficiency expected of modern data professionals.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Python Basics",
            modules: [
              {
                title: "Python Basics",
                lessons: [
                  "Introduction of Python",
                  "Installation of Python and IDE",
                  "Python objects",
                  "Python basic data types",
                  "Numbers & Booleans, Strings",
                  "Arithmetic, Comparison & Assignment Operators",
                  "Operator precedence and associativity",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Python Control Statements",
            modules: [
              {
                title: "Python Control Statements",
                lessons: [
                  "IF Conditional Statement",
                  "IF-ELSE & NESTED IF",
                  "Python Loops Basics",
                  "WHILE Statement",
                  "FOR Statements",
                  "BREAK and CONTINUE Statements",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Python Data Structures",
            modules: [
              {
                title: "Python Data Structures",
                lessons: [
                  "Basic Data Structures in Python",
                  "String Object Basics and Inbuilt Methods",
                  "List: Object, Methods, Comprehensions",
                  "Tuple: Object, Methods, Comprehensions",
                  "Sets: Object, Methods, Comprehensions",
                  "Dictionary: Object, Methods, Comprehensions",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Python Functions",
            modules: [
              {
                title: "Python Functions",
                lessons: [
                  "Functions Basics",
                  "Function Parameter Passing",
                  "Iterators & Generator Functions",
                  "Lambda Functions",
                  "Map, Reduce, Filter Functions",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Python NumPy Package",
            modules: [
              {
                title: "Python NumPy Package",
                lessons: [
                  "NumPy Introduction",
                  "Array – Data Structure",
                  "Core NumPy Functions",
                  "Matrix Operations",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Python Pandas Package",
            modules: [
              {
                title: "Python Pandas Package",
                lessons: [
                  "Pandas Functions",
                  "DataFrame and Series – Data Structures",
                  "Data Munging with Pandas",
                  "Imputation and Outlier Analysis",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Pandas & NumPy",
              "Data Visualization",
              "Exploratory Data Analysis",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Insight Communication", "Analyst Portfolio Building"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Data Cleaning Pipeline",
            description: "Clean and prepare raw datasets using Python.",
          },
          {
            title: "Project 2: Exploratory Data Analysis",
            description: "Perform EDA to uncover insights and trends.",
          },
          {
            title: "Project 3: Data Visualization",
            description: "Create visualizations to communicate findings.",
          },
          {
            title: "Project 4: Analytics Report",
            description: "Produce a complete analytics report using Python.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Data Analyst",
            description: "Analyze and visualize data using Python tools.",
          },
          {
            current: false,
            title: "Analytics Engineer",
            description: "Build data pipelines and analytics models.",
          },
          {
            current: false,
            title: "Senior Data Analyst",
            description:
              "Lead Python-based analytics projects and mentor team members.",
          },
          {
            current: false,
            title: "Data Scientist",
            description: "Apply advanced analytics and modeling techniques.",
          },
          {
            current: false,
            title: "Analytics Consultant",
            description: "Deliver analytics-driven insights to clients.",
          },
          {
            current: false,
            title: "VP of Analytics",
            description:
              "Define organizational analytics vision and lead enterprise data teams.",
          },
        ],
        teachFeatures: [
          {
            title: "Python Automation Portfolio",
            description:
              "Showcase scripts that automate reporting, scrape web data, and clean messy datasets.",
          },
          {
            title: "Pass Python Coding Tests",
            description:
              "Get comfortable solving data manipulation problems with Pandas and NumPy live.",
          },
          {
            title: "Share Your Code",
            description:
              "Post useful snippets and tutorials to help others and build your reputation.",
          },
          {
            title: "Resume for Technical Analysts",
            description:
              "Highlight your Python skills to differentiate yourself from Excel-only analysts.",
          },
          {
            title: "Target Modern Data Teams",
            description:
              "Apply to teams that have moved beyond spreadsheets to modern data stacks.",
          },
          {
            title: "Join Python Communities",
            description:
              "Engage with local Python user groups and online forums.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "#1 Language",
            description: "Python is the most popular language for Data Science",
            source: "TIOBE Index",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Versatility",
            description: "Used for Analysis, Web, and Automation",
            source: "Python Software Foundation",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Huge Ecosystem",
            description: "300,000+ packages available for data tasks",
            source: "PyPI",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Efficiency",
            description: "Automates repetitive analytic workflows.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$85k – $130k",
            description: "Salary bump for Python over Excel skills",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$6,500 - $10,000" },
          { location: "United Kingdom", montly: "$4,000 - $7,500" },
          { location: "Europe", montly: "$3,500 - $7,000" },
          { location: "Remote Roles", montly: "$2,000 - $5,500" },
        ],
        faqs: [
          {
            question: "Why Python over Excel?",
            answer:
              "Python handles larger datasets, automates repetitive tasks, and offers powerful visualization libraries that Excel cannot match.",
          },
          {
            question: "Do I need prior coding knowledge?",
            answer:
              "No, we start from the very syntax of Python. It is a very beginner-friendly language.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What libraries will I learn?",
            answer:
              "You will master Pandas for data manipulation, NumPy for math, and Matplotlib/Seaborn for plotting.",
          },
          {
            question: "Will we do Machine Learning?",
            answer:
              "This course focuses on Data Analysis and cleaning. We have a separate course for Machine Learning.",
          },
          {
            question: "What kind of projects?",
            answer:
              "You will clean messy datasets, scrape data from websites, and build automated reporting scripts.",
          },
          {
            question: "Is this course live?",
            answer:
              "Yes, weekly live sessions allow you to code along with the instructor and fix errors in real-time.",
          },
          {
            question: "Can I use this for finance/marketing?",
            answer:
              "Yes, Python is used extensively in FinTech and Marketing Analytics for automation and insight.",
          },
          {
            question: "How many hours a week?",
            answer:
              "Expect to spend 5-8 hours a week coding and practicing to get the most out of it.",
          },
          {
            question: "Will I learn Jupyter Notebooks?",
            answer:
              "Yes, Jupyter Notebooks will be our primary environment for writing and sharing code.",
          },
        ],
      },
      {
        title: "Big Data with Apache Spark",
        slug: "big-data-for-apache-spark",
        survey: "big-data-foundation",
        description:
          "Process and analyze large-scale datasets using Apache Spark, Spark SQL, and distributed data systems.",
        imageSrc: "/assets/courses/big-data.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.8,
        peopleInField: "Big Data Engineers",
        heroFeatures: [
          {
            title: "Master the Engine Powering Big Data",
            features: [
              "The most beginner-friendly Spark course with real-world industry needs",
              "Know the foundations of distributed computing and big data systems",
              "Learn to process massive datasets using PySpark, Spark SQL, and more",
              "Work hands-on with datasets in healthcare, finance, and e-commerce",
            ],
          },
          {
            title: "Analyze, Earn and Scale with Confidence",
            features: [
              "Build a portfolio that hiring managers respect",
              "Get personalized mentorship, virtual internship, and career coaching",
              "Interview prep, job mapping, and resume optimization included",
              "Get job-ready with virtual internships and placement support.",
            ],
          },
          {
            title: "Step into the World of Big Data Careers",
            features: [
              "Demand for big data talent is rising fast. Companies are hiring for Spark skills across the board and we’ll help you get hired!.",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Big Data Fundamentals with Apache Spark Course",
          description:
            "The future is big and it's data. This course gives you the essential big data foundation to launch a high growth tech career.",
          keyFeatures: [
            "No prior big data experience needed, it’s designed for beginners, aspiring data engineers, and analysts",
            "Hands-on learning using Apache Spark, Hadoop, PySpark, and key big data ecosystem tools",
            "Real-world projects: building data pipelines, streaming analytics, ETL processes, and more",
            "Globally recognized certification that proves your expertise in big data fundamentals and Spark",
            "Career-focused curriculum with resume, portfolio, and LinkedIn optimization for big data roles",
            "Live instructor-led sessions + on-demand lessons to learn at your pace",
            "Dedicated Spark Lab Workspace for continuous practice and capstone projects",
            "1-on-1 mentorship, weekly Q&A sessions, and expert code reviews",
            "Tools aligned with roles like Big Data Engineer, Data Analyst, Data Engineer, and Spark Developer",
            "Engaged peer community for collaboration, support, and accountability",
            "Mock interviews, job readiness programs, and personalized career guidance",
            "Virtual internship and job assistance through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Enterprise-Scale Demand",
            description:
              "Every large organization needs big data engineers to manage petabytes of data flowing daily.",
          },
          {
            title: "Premium Engineering Role",
            description:
              "Big data engineers are among the highest-paid data professionals, earning $130,000-$200,000+.",
          },
          {
            title: "Spark Dominance",
            description:
              "Apache Spark is the industry standard for big data processing, used by Netflix, Uber, and Fortune 500s.",
          },
          {
            title: "Future-Proof Infrastructure",
            description:
              "Data volumes are growing exponentially, ensuring long-term demand for big data expertise.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No big data experience? No problem. You’ll begin with distributed computing concepts and master Spark architecture.",
          },
          {
            title: "Robust Big Data Curriculum",
            description:
              "Learn Apache Spark, Spark SQL, PySpark, DataFrames, and Distributed Processing techniques.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, cluster management walkthroughs, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as log analysis, real-time data streaming pipelines, and large-scale ETL jobs.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Understand how to handle data that doesn't fit on a single computer.",
          },
          {
            title: "Data Engineers",
            description:
              "Master the industry-standard tool for large-scale data processing.",
          },
          {
            title: "Data Scientists",
            description:
              "Scale your models and analyses to production-level datasets.",
          },
          {
            title: "Freelancers",
            description:
              "Help companies optimize their data processing and reduce cloud costs.",
          },
          {
            title: "Architects",
            description:
              "Design efficient distributed systems for data-intensive applications.",
          },
          {
            title: "Students",
            description:
              "Learn the high-value skills required by big tech companies.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Big Data Introduction",
            modules: [
              {
                title: "Big Data Introduction",
                lessons: [
                  "Big Data Overview",
                  "The Five Vs of Big Data",
                  "What is Big Data and Hadoop",
                  "Introduction to Hadoop and its Components",
                  "Introduction to Big Data Analytics",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "HDFS and MapReduce",
            modules: [
              {
                title: "HDFS and MapReduce",
                lessons: [
                  "HDFS: Big Data Storage",
                  "Distributed Processing with MapReduce",
                  "Mapping and Reducing Stage Concepts",
                  "Key Terms: Output Format, Partitioners, Combiners, Shuffle, and Sort",
                  "Hands-on MapReduce Task",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "PySpark Foundation",
            modules: [
              {
                title: "PySpark Foundation",
                lessons: [
                  "Introduction to PySpark",
                  "Spark Configuration Basics",
                  "Understanding Resilient Distributed Datasets (RDDs)",
                  "Working with RDDs in PySpark",
                  "Aggregating Data with Pair RDDs",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Spark SQL and Hadoop Hive",
            modules: [
              {
                title: "Spark SQL and Hadoop Hive",
                lessons: [
                  "Introduction to Spark SQL",
                  "Spark SQL vs Hadoop Hive",
                  "Working with Spark SQL Query Language",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Machine Learning with Spark ML",
            modules: [
              {
                title: "Machine Learning with Spark ML",
                lessons: [
                  "Introduction to MLlib",
                  "Overview of ML Algorithms Supported by MLlib",
                  "Building ML Models with Spark ML",
                  "Linear Regression",
                  "Logistic Regression",
                  "Random Forest",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Kafka and Spark Integration",
            modules: [
              {
                title: "Kafka and Spark Integration",
                lessons: [
                  "Kafka Architecture",
                  "Kafka Workflow",
                  "Configuring a Kafka Cluster",
                  "Kafka Operations",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Apache Spark Architecture",
              "Distributed Data Processing",
              "Spark SQL & DataFrames",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Big Data System Thinking", "Scalable Solution Design"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Spark Data Processing",
            description: "Process large datasets using Spark.",
          },
          {
            title: "Project 2: Distributed ETL Pipeline",
            description: "Build ETL pipelines with Spark.",
          },
          {
            title: "Project 3: Spark SQL Analytics",
            description: "Analyze data using Spark SQL.",
          },
          {
            title: "Project 4: Scalable Big Data System",
            description: "Design a scalable big data solution.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Data Engineer",
            description:
              "Assist with data processing and basic Spark operations.",
          },
          {
            current: true,
            title: "Big Data Engineer",
            description:
              "Design and manage large-scale data processing systems using Spark.",
          },
          {
            current: false,
            title: "Data Engineer",
            description:
              "Build and maintain data pipelines and infrastructure.",
          },
          {
            current: false,
            title: "Senior Big Data Engineer",
            description:
              "Lead large-scale data processing initiatives and mentor engineers.",
          },
          {
            current: false,
            title: "Analytics Engineer",
            description: "Transform big data into analytics-ready datasets.",
          },
          {
            current: false,
            title: "Data Platform Architect",
            description: "Design scalable big data platforms.",
          },
          {
            current: false,
            title: "VP of Data Engineering",
            description:
              "Lead enterprise data infrastructure strategy and engineering teams.",
          },
        ],
        teachFeatures: [
          {
            title: "Big Data Portfolio",
            description:
              "Showcase projects handling massive datasets using Spark and cloud clusters.",
          },
          {
            title: "Ace Distributed Systems Interviews",
            description:
              "Explain Spark architecture, RDDs, and optimization techniques confidently.",
          },
          {
            title: "Write about Big Data",
            description:
              "Share insights on handling scale and performance tuning for large datasets.",
          },
          {
            title: "Big Data Resume",
            description:
              "Highlight your experience with Spark, Scala/Python, and cloud platforms.",
          },
          {
            title: "Target Enterprise Giants",
            description:
              "Apply to Fortune 500 companies and tech giants dealing with petabyte-scale data.",
          },
          {
            title: "Network in Big Data",
            description:
              "Connect with engineers working on the world's largest data problems.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Big Data Boom",
            description: "Data volumes doubling every 2 years",
            source: "IDC Digital Universe",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Standard Tool",
            description: "Spark is the de facto engine for big data processing",
            source: "Databricks",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "High Value",
            description: "Spark skills command a 20% salary premium",
            source: "O'Reilly Salary Survey",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Scale",
            description: "Critical for streaming and petabyte-scale data.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$130k – $200k",
            description: "Top salaries for Big Data Engineers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$9,500 - $16,500" },
          { location: "United Kingdom", montly: "$6,500 - $10,500" },
          { location: "Europe", montly: "$5,500 - $9,500" },
          { location: "Remote Roles", montly: "$3,000 - $8,000" },
        ],
        faqs: [
          {
            question: "What is Apache Spark?",
            answer:
              "Spark is a unified analytics engine for large-scale data processing. It's much faster than traditional Hadoop MapReduce.",
          },
          {
            question: "Do I need Python or Scala?",
            answer:
              "We focus on PySpark (Python) as it is the most popular choice for Data Science and Engineering.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What prerequisites are there?",
            answer:
              "You should be comfortable with Python and SQL. This is an intermediate-to-advanced course.",
          },
          {
            question: "Will we use the Cloud?",
            answer:
              "Yes, you will get hands-on experience running Spark jobs on cloud clusters (like Databricks or AWS EMR).",
          },
          {
            question: "Is this for Data Engineers or Scientists?",
            answer:
              "Both. Engineers use it for pipelines; Scientists use it for analyzing large datasets.",
          },
          {
            question: "What about Streaming data?",
            answer:
              "Yes, we cover Spark Structured Streaming for processing real-time data feeds.",
          },
          {
            question: "How much can I earn?",
            answer:
              "Big Data skills command a premium. Spark specialists often earn over $130,000/year.",
          },
          {
            question: "Do I need a powerful laptop?",
            answer:
              "No, we perform the heavy processing on cloud clusters, not your local machine.",
          },
          {
            question: "Is this course live?",
            answer:
              "Yes, live sessions are crucial for debugging distributed systems issues together.",
          },
        ],
      },
    ],
  },

  {
    category: "Engineering",
    categoryName: "School of Software Engineering",
    courses: [
      {
        title: "Full-Stack Development",
        slug: "full-stack-development",
        survey: "full-stack-software-engineering",
        description:
          "Build end-to-end web applications using modern front-end and back-end technologies with real-world projects.",
        imageSrc: "/assets/courses/fullstack.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.9,
        peopleInField: "Full-Stack Developers",
        heroFeatures: [
          {
            title: "Become a High-Earning Front-End Web Developer",
            features: [
              "Complete front-end development bootcamp tailored to industry needs",
              "Build websites, apps, and platforms from scratch, front-end to back-end",
              "Master HTML, CSS, JavaScript, React, Node.js, MongoDB, APIs, and more",
              "With real-world projects, build a portfolio that gets recruiters calling",
            ],
          },
          {
            title: "Design. Code. Get Hired as a Front-End Developer",
            features: [
              "Build stunning interfaces that work seamlessly across devices",
              "Get personalized mentorship, code reviews, and career coaching",
              "Interview prep, portfolio support, and job placement assistance included",
              "Stand out with real projects and a certification employers trust",
            ],
          },
          {
            title:
              "Create Locally. Work Globally. Start Your Developer Journey.",
            features: [
              "Full stack skills are in high demand worldwide. Join our network of students building amazing careers through code.",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Full-Stack Web Development Course",
          description:
            "This course is your launchpad into one of the most in-demand and globally relevant tech careers.",
          keyFeatures: [
            "No prior coding experience required, learn from the ground up",
            "Master both front-end and back-end with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more",
            "Build real world projects like e-commerce apps, dashboards, and full-stack APIs",
            "Globally recognized certification to validate your full stack skills",
            "Industry-aligned curriculum with resume, portfolio, and GitHub profile optimization",
            "Live instructor-led sessions plus on-demand video content for full flexibility",
            "Access to cloud based development environments for real-time coding practice",
            "Weekly mentorship, code reviews, and personalized career guidance",
            "Tools and frameworks mapped to real job roles: Web Developer, Front-End Dev, Back-End Dev, and Full-Stack Engineer",
            "Join an active developer community for networking, collaboration, and accountability",
            "Career support including mock interviews, job mapping, and technical resume reviews",
            "Virtual internship and job placement support through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Most Versatile Developer",
            description:
              "Full-stack engineers can build entire products independently, making them invaluable to startups and enterprises.",
          },
          {
            title: "Consistent High Demand",
            description:
              "Full-stack roles are among the most posted engineering positions, with demand growing steadily.",
          },
          {
            title: "Strong Compensation",
            description:
              "Full-stack developers earn $90,000-$170,000+ globally, with senior roles commanding even more.",
          },
          {
            title: "Entrepreneurial Skills",
            description:
              "Full-stack expertise enables you to build and launch your own products from idea to deployment.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No coding background? No problem. You’ll begin with HTML/CSS and JavaScript before mastering React, Node.js, and Databases.",
          },
          {
            title: "Robust Full-Stack Curriculum",
            description:
              "Learn Front-End (React), Back-End (Node.js/Express), Databases (MongoDB/SQL), and Deployment techniques.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, code reviews, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as e-commerce platforms, social media dashboards, and SaaS applications.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn to build complete web applications from the ground up.",
          },
          {
            title: "Career Switchers",
            description:
              "Transition into one of the most versatile and high-demand roles in tech.",
          },
          {
            title: "Front-End Devs",
            description:
              "Learn the backend to become a complete, self-sufficient engineer.",
          },
          {
            title: "Freelancers",
            description:
              "Build and sell complete websites and web apps to clients.",
          },
          {
            title: "Founders",
            description:
              "Build your own MVP and turn your startup ideas into reality.",
          },
          {
            title: "Students",
            description:
              "Gain the comprehensive skills to qualify for almost any web development role.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Basic Web Development and JavaScript Fundamentals",
            modules: [
              {
                title: "Basic Web Development and JavaScript Fundamentals",
                lessons: [
                  "Overview of web development",
                  "Server-Side Coding Technologies",
                  "Introduction to MERN Stack",
                  "Setting up development environment (Node.js, VS Code)",
                  "Version control with Git and GitHub",
                  "HTML, CSS and Bootstrap",
                  "Introduction to JavaScript",
                  "DOM manipulation with JavaScript",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Deep Dive into JavaScript Essentials",
            modules: [
              {
                title: "Deep Dive into JavaScript Essentials",
                lessons: [
                  "Introduction to Node.js and its ecosystem",
                  "String, arrays and objects",
                  "Functions",
                  "ES6 features",
                  "Asynchronous JavaScript",
                  "JavaScript array methods",
                  "Object-oriented programming in JavaScript",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Introduction to Node.js",
            modules: [
              {
                title: "Introduction to Node.js",
                lessons: [
                  "Creating a basic server with Node.js",
                  "Handling form data and file uploads",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Frontend Development with ReactJS",
            modules: [
              {
                title: "Frontend Development with ReactJS",
                lessons: [
                  "Introduction to React.js and its core concepts",
                  "Setting up a React development environment",
                  "JSX syntax and component-based architecture",
                  "State and props in React",
                  "React Hooks",
                  "Handling events and forms in React",
                  "Styling in React",
                  "React Router",
                  "Redux for state management in React applications",
                  "Context API and useContext hook",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "TypeScript and Next.js",
            modules: [
              {
                title: "TypeScript and Next.js",
                lessons: [
                  "TypeScript intro and setup",
                  "Server-side rendering (SSR) with React and Next.js",
                  "Next.js performance optimization strategies",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "SQL and Relational Databases",
            modules: [
              {
                title: "SQL and Relational Databases",
                lessons: [
                  "Introduction to SQL and relational databases",
                  "SQL basics",
                  "Data modeling and schema design in SQL",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "MongoDB and Mongoose",
            modules: [
              {
                title: "MongoDB and Mongoose",
                lessons: [
                  "Connection Pool",
                  "Introduction to MongoDB and NoSQL databases",
                  "CRUD operations in MongoDB",
                  "Mongoose ODM for MongoDB",
                  "Schema design and data modeling in Mongoose",
                  "Integration of MongoDB with Express.js",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Backend Development, Testing, and Integration",
            modules: [
              {
                title: "Backend Development, Testing, and Integration",
                lessons: [
                  "Creating a basic server with Express.js",
                  "Routing and Middleware in Express.js",
                  "Authentication and authorization using JWT",
                  "Unit testing with Mocha and Chai",
                  "Integrating React front end with Express.js backend",
                  "API calls from React to Express using Axios or Fetch",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Deployment and Performance Optimization",
            modules: [
              {
                title: "Deployment and Performance Optimization",
                lessons: [
                  "Deployment strategies for MERN applications",
                  "Monitoring and debugging tools",
                  "Security best practices for web applications",
                  "Performance optimization techniques",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Frontend Frameworks (React)",
              "Backend Development (Node.js)",
              "Databases (SQL & NoSQL)",
              "API Design",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "System Design Thinking",
              "Code Review Practices",
              "Portfolio Project Development",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Full-Stack Web Application",
            description:
              "Build a complete frontend and backend web application.",
          },
          {
            title: "Project 2: REST API Development",
            description: "Design and implement RESTful APIs.",
          },
          {
            title: "Project 3: Authentication & Authorization",
            description: "Implement secure user authentication systems.",
          },
          {
            title: "Project 4: Production Deployment",
            description: "Deploy a full-stack application to production.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Web Developer",
            description:
              "Assist with building web pages and basic functionality under supervision.",
          },
          {
            current: false,
            title: "Frontend Engineer",
            description: "Develop interactive user interfaces.",
          },
          {
            current: false,
            title: "Backend Engineer",
            description: "Build scalable server-side systems and APIs.",
          },
          {
            current: true,
            title: "Full-Stack Developer",
            description:
              "Develop complete web applications across frontend and backend.",
          },
          {
            current: false,
            title: "Senior Full-Stack Developer",
            description:
              "Lead complex application development and mentor junior developers.",
          },
          {
            current: false,
            title: "Software Architect",
            description: "Design high-level system architectures.",
          },
          {
            current: false,
            title: "VP of Engineering",
            description:
              "Lead engineering teams and define technical strategy at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Build a Full-Stack Portfolio",
            description:
              "Deploy live, full-featured web applications that demonstrate both frontend polish and backend logic.",
          },
          {
            title: "Master the Coding Interview",
            description:
              "Practice data structures, algorithms, and system design questions commonly asked by tech companies.",
          },
          {
            title: "Contribute to Open Source",
            description:
              "Build your reputation by contributing code to libraries or frameworks you use.",
          },
          {
            title: "Developer Resume",
            description:
              "List your stack clearly (MERN, PERN, etc.) and link directly to your deployed projects.",
          },
          {
            title: "Apply to Startups & Corps",
            description:
              "Your versatile skills fit everywhere—learn to tailor your pitch for different company sizes.",
          },
          {
            title: "Network at Hackathons",
            description:
              "Participate in coding events to meet potential co-founders and hiring managers.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "27.7 Million",
            description: "Software developers globally, growing fast",
            source: "Evans Data Corp",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "25% Growth",
            description: "Job outlook for software developers (2022-32)",
            source: "U.S. Bureau of Labor Statistics",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Most Popular",
            description: "Full-Stack is the most common developer role",
            source: "Stack Overflow Survey",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Versatility",
            description: "High demand in startups and enterprises alike.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$100k – $160k",
            description: "Average Full-Stack Developer salary",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,500 - $13,000" },
          { location: "United Kingdom", montly: "$4,500 - $8,500" },
          { location: "Europe", montly: "$4,000 - $8,000" },
          { location: "Remote Roles", montly: "$2,000 - $6,500" },
        ],
        faqs: [
          {
            question: "What technology stack do you teach?",
            answer:
              "We focus on the MERN stack (MongoDB, Express.js, React, Node.js) as it is the most in-demand stack for startups and jobs.",
          },
          {
            question: "Is this for absolute beginners?",
            answer:
              "Yes, we take you from 'Hello World' in HTML to deploying full-scale applications in the cloud.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "How many projects will I build?",
            answer:
              "You will build 4 major projects, including an e-commerce site, a social media dashboard, and a SaaS application.",
          },
          {
            question: "Do you teach deployment?",
            answer:
              "Yes, you will learn to deploy your apps to the web using services like Vercel, Netlify, and Render.",
          },
          {
            question: "What is the job outlook?",
            answer:
              "Full Stack Developers are the 'swiss army knives' of tech, always in high demand with competitive salaries.",
          },
          {
            question: "Will I learn about databases?",
            answer:
              "Yes, you will work extensively with MongoDB (NoSQL) and get an introduction to SQL databases.",
          },
          {
            question: "Is career support included?",
            answer:
              "Yes, we help you build a GitHub portfolio that will impress recruiters and offer interview coaching.",
          },
          {
            question: "How much time is required?",
            answer:
              "This is an intensive course. Expect to commit 10-15 hours a week for the best results.",
          },
          {
            question: "Do I need a Mac?",
            answer:
              "No, you can develop on Windows, Mac, or Linux. We help you set up your environment on any machine.",
          },
        ],
      },
      {
        title: "Front-End Development",
        slug: "front-end-development",
        survey: "frontend-development",
        description:
          "Master HTML, CSS, JavaScript, and modern frameworks to build scalable and responsive user interfaces.",
        imageSrc: "/assets/courses/frontend.webp",
        thumbnail: "/assets/courses/thumbnails/ui-ux-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.7,
        peopleInField: "Front-End Developers",
        heroFeatures: [
          {
            title: "Code Your Way Into a High-Income Tech Career",
            features: [
              "Comprehensive practical Bootcamp built for today’s digital world",
              "Learn, build stunning web interfaces, and get global opportunities",
              "Work on real world projects to craft a standout portfolio",
              "Master HTML, CSS, JavaScript, React, Git, and more",
            ],
          },
          {
            title: "Get Hired, Not Just Skilled",
            features: [
              "Create beautiful, responsive websites that convert",
              "Get personalized mentorship, code reviews, and career coaching",
              "Interview prep, portfolio support, and job placement assistance included",
              "Stand out with real projects and a certification employers trust",
            ],
          },
          {
            title: "Tap Into the $100B+ Web Industry",
            features: [
              "With over 1.5M jobs projected in web development, demand is booming. Enroll today and become a certified front-end expert",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Front-End Web Development Course",
          description:
            "Front-end developers are the architects of user experience online. This course takes you from beginner to job-ready, no coding background needed.",
          keyFeatures: [
            "No tech experience? No problem. We teach you from scratch.",
            "Learn HTML, CSS, JavaScript, Git, React, Tailwind CSS, and more.",
            "Build real-world projects: landing pages, dashboards, portfolios, and web apps.",
            "Globally recognized certification to showcase your skills.",
            "Career-focused training with resume, LinkedIn, and portfolio optimization.",
            "Blend of live classes and self-paced videos for total flexibility.",
            "GitHub project hosting and version control mastery.",
            "Personalized mentorship, expert reviews, and weekly support.",
            "Tools aligned to top roles: Front-End Developer, UI Engineer, React Developer.",
            "Peer community for networking, collaboration, and accountability.",
            "Mock interviews, career coaching, and job mapping to top tech roles.",
            "Virtual internship and placement assistance from our PAT (Placement Assistance Team).",
          ],
        },
        courseDemands: [
          {
            title: "User Experience Focus",
            description:
              "Front-end developers directly impact how users interact with products, a critical business priority.",
          },
          {
            title: "Framework Ecosystem Boom",
            description:
              "React, Vue, and Angular skills are in high demand as companies build interactive web applications.",
          },
          {
            title: "Remote-Friendly Role",
            description:
              "Front-end development is one of the most accessible remote tech career paths worldwide.",
          },
          {
            title: "Competitive Salaries",
            description:
              "Front-end developers earn $70,000-$150,000+ globally, with senior specialists earning more.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No coding background? No problem. You’ll begin with web basics and move to building complex, interactive interfaces with React.",
          },
          {
            title: "Robust Front-End Curriculum",
            description:
              "Learn HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, and State Management.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, UI coding sessions, and Q&A to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as responsive landing pages, interactive dashboards, and web applications.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Start your coding journey by building visual, interactive things you can share.",
          },
          {
            title: "Designers",
            description:
              "Learn to code your own designs and bridge the gap between UI and engineering.",
          },
          {
            title: "Career Switchers",
            description:
              "Enter the tech industry through a role that balances creativity and logic.",
          },
          {
            title: "Freelancers",
            description:
              "Create stunning websites and user interfaces for clients.",
          },
          {
            title: "Founders",
            description:
              "Build the customer-facing part of your product to look professional.",
          },
          {
            title: "Students",
            description:
              "Build a visual portfolio that immediately impresses recruiters.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Introduction to Front-End Development",
            modules: [
              {
                title: "Introduction to Front-End Development",
                lessons: [
                  "What is Front-End Development?",
                  "The role of a Front-End Developer",
                  "Tools and workflows in modern front-end dev",
                  "Setting up your development environment",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "HTML5 and CSS3 Essentials",
            modules: [
              {
                title: "HTML5 and CSS3 Essentials",
                lessons: [
                  "HTML tags, forms, tables, and semantic structure",
                  "CSS selectors, box model, flexbox, grid",
                  "Responsive design with media queries",
                  "Accessibility and SEO-friendly structure",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "JavaScript Fundamentals (ES6+)",
            modules: [
              {
                title: "JavaScript Fundamentals (ES6+)",
                lessons: [
                  "Variables, data types, operators",
                  "Functions, arrays, objects",
                  "Loops, conditionals, and events",
                  "DOM manipulation",
                  "Fetch API and JSON",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Version Control with Git and GitHub",
            modules: [
              {
                title: "Version Control with Git and GitHub",
                lessons: [
                  "Introduction to Git",
                  "GitHub basics and collaboration",
                  "Branching and pull requests",
                  "Hosting projects on GitHub Pages",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Bootstrap and UI Frameworks",
            modules: [
              {
                title: "Bootstrap and UI Frameworks",
                lessons: [
                  "Intro to Bootstrap 5",
                  "Grid systems and utility classes",
                  "Navbar, modals, and components",
                  "Integrating icons and design libraries",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "React.js for Front-End Development",
            modules: [
              {
                title: "React.js for Front-End Development",
                lessons: [
                  "Understanding components, JSX, and props",
                  "State and hooks",
                  "React Router",
                  "Building dynamic UIs",
                  "Debugging and optimization",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Final Capstone & Deployment",
            modules: [
              {
                title: "Final Capstone & Deployment",
                lessons: [
                  "Combine skills to build a full-featured application",
                  "Implement feedback, version control, and testing",
                  "Deployment to Netlify, Vercel, or GitHub Pages",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "HTML, CSS, JavaScript",
              "Responsive Design",
              "Frontend Frameworks",
              "Web Performance Optimization",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "UI Collaboration",
              "Frontend Code Standards",
              "Job Interview Preparation",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Responsive Website",
            description:
              "Build a fully responsive website using modern CSS and JavaScript.",
          },
          {
            title: "Project 2: Interactive UI Components",
            description: "Develop reusable and interactive UI components.",
          },
          {
            title: "Project 3: Performance Optimization",
            description: "Optimize frontend performance and accessibility.",
          },
          {
            title: "Project 4: Frontend Portfolio",
            description: "Create a professional frontend portfolio site.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Front-End Developer",
            description:
              "Assist in building web interfaces and basic UI components.",
          },
          {
            current: false,
            title: "Front-End Developer",
            description:
              "Build responsive and interactive user interfaces for web applications.",
          },
          {
            current: false,
            title: "UI Engineer",
            description:
              "Bridge design and development for polished user interfaces.",
          },
          {
            current: false,
            title: "Senior Front-End Developer",
            description:
              "Lead UI development and establish front-end architecture standards.",
          },
          {
            current: false,
            title: "Web Developer",
            description: "Develop complete websites and frontend experiences.",
          },
          {
            current: false,
            title: "Frontend Lead",
            description: "Lead frontend development and technical decisions.",
          },
          {
            current: false,
            title: "VP of Engineering",
            description:
              "Lead engineering teams and define technical strategy at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Stunning Visual Portfolio",
            description:
              "Create a personal site and project gallery that wows visitors with design and interactivity.",
          },
          {
            title: "Ace Frontend Interviews",
            description:
              "Master JavaScript concepts, CSS challenges, and framework-specific questions.",
          },
          {
            title: "Showcase UI/UX Skills",
            description:
              "Share your designs and code snippets on CodePen or Dribbble to gain a following.",
          },
          {
            title: "Frontend-Focused Resume",
            description:
              "Highlight your expertise in React, Tailwind, and accessibility standards.",
          },
          {
            title: "Target Design-Led Companies",
            description:
              "Apply to companies that value user experience and high-quality interfaces.",
          },
          {
            title: "Connect with Designers",
            description:
              "Bridge the gap between design and engineering by networking with both groups.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "React Dominance",
            description: "Used by 40% of all websites globally",
            source: "W3Techs",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "UX Priority",
            description: "Companies investing heavily in user experience",
            source: "Forrester",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "High Demand",
            description: "Continuous need for web and mobile interfaces",
            source: "HackerRank",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Visual Tech",
            description: "Evolution into 3D and interactive web apps.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$90k – $150k",
            description: "Competitive pay for Front-End Engineers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,000 - $12,000" },
          { location: "United Kingdom", montly: "$4,000 - $7,500" },
          { location: "Europe", montly: "$3,500 - $7,000" },
          { location: "Remote Roles", montly: "$1,500 - $6,000" },
        ],
        faqs: [
          {
            question: "What technologies will I learn?",
            answer:
              "You will master HTML5, CSS3, JavaScript (ES6+), React.js, and Tailwind CSS.",
          },
          {
            question: "Do I need design skills?",
            answer:
              "No, but you will learn UI/UX principles to ensure your applications look professional and are easy to use.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Is JavaScript hard to learn?",
            answer:
              "It has a learning curve, but our curriculum breaks it down into manageable concepts with plenty of practice.",
          },
          {
            question: "Will I learn mobile development?",
            answer:
              "We focus on Responsive Web Design, ensuring your sites work on mobile. React concepts also translate well to React Native.",
          },
          {
            question: "What projects will I build?",
            answer:
              "You will build a personal portfolio, a weather app, a movie search app, and a complex dashboard.",
          },
          {
            question: "Is this course live?",
            answer:
              "Yes, live coding sessions help you get unstuck and learn best practices in real-time.",
          },
          {
            question: "How is the job market for Front-End?",
            answer:
              "Excellent. Every business needs a website or app, creating constant demand for skilled frontend developers.",
          },
          {
            question: "Will I learn Git?",
            answer:
              "Yes, version control with Git and GitHub is a mandatory part of our workflow.",
          },
          {
            question: "Can I freelance after this?",
            answer:
              "Absolutely. Front-end development is one of the easiest tech skills to monetize as a freelancer.",
          },
        ],
      },
      {
        title: "Back-End Development",
        slug: "back-end-development",
        survey: "backend-development",
        description:
          "Learn server-side development, APIs, databases, authentication, and system design.",
        imageSrc: "/assets/courses/fullstack.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.8,
        peopleInField: "Back-End Developers",
        heroFeatures: [
          {
            title: "Code Your Way Into a High-Income Tech Career",
            features: [
              "Complete backend development bootcamp tailored to industry needs",
              "Build websites, apps, and platforms from scratch, learn solid backend",
              "Master JavaScript, Node.js, MongoDB, APIs, and more",
              "With real-world projects, build a portfolio that gets recruiters calling",
            ],
          },
          {
            title: "Design. Code. Get Hired as a Back-End Developer",
            features: [
              "Build scalable applications using scalable backends",
              "Get personalized mentorship, code reviews, and career coaching",
              "Interview prep, portfolio support, and job placement assistance included",
              "Stand out with real projects and a certification employers trust",
            ],
          },
          {
            title:
              "Create Locally. Work Globally. Start Your Developer Journey.",
            features: [
              "Backend skills are in high demand worldwide. Join our network of students building amazing careers through code.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Course Builds Strong Back-End Engineers",
          description: "Back-end systems power scalable applications.",
          keyFeatures: [
            "Design APIs and databases",
            "Authentication and authorization",
            "System design fundamentals",
            "Production-grade backend services",
            "Essential for scalable platforms",
          ],
        },
        courseDemands: [
          {
            title: "Infrastructure Backbone",
            description:
              "Back-end engineers build the systems that power every web and mobile application.",
          },
          {
            title: "Scalability Expertise",
            description:
              "Companies need back-end talent to handle millions of users and complex data operations.",
          },
          {
            title: "Strong Market Demand",
            description:
              "Back-end developers are consistently among the most sought-after engineering roles.",
          },
          {
            title: "High Earning Potential",
            description:
              "Back-end engineers earn $85,000-$165,000+ globally, with system design experts earning premium.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No coding background? No problem. You’ll begin with programming basics and advance to building robust server-side systems.",
          },
          {
            title: "Robust Back-End Curriculum",
            description:
              "Learn Server Logic, API Design (REST/GraphQL), Database Management (SQL/NoSQL), Authentication, and System Architecture.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, architecture discussions, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as building secure APIs, e-commerce backends, and real-time chat servers.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn the logic and data systems that make software actually work.",
          },
          {
            title: "Front-End Devs",
            description:
              "Understand what happens behind the scenes to become a better engineer.",
          },
          {
            title: "Career Switchers",
            description:
              "Focus on logic, data, and performance in a high-demand technical role.",
          },
          {
            title: "Freelancers",
            description:
              "Build custom APIs and database solutions for complex client needs.",
          },
          {
            title: "Founders",
            description:
              "Ensure your product is secure, scalable, and fast from the start.",
          },
          {
            title: "Students",
            description:
              "Master the core engineering concepts required for top tech interviews.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Server Fundamentals",
            modules: [
              {
                title: "Node.js & Express",
                lessons: [
                  "Introduction to Back-End",
                  "Node.js Runtime & Architecture",
                  "Express Framework Basics",
                  "Routing and Controllers",
                  "Middleware and Request Processing",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Data Management",
            modules: [
              {
                title: "Databases",
                lessons: [
                  "SQL vs NoSQL",
                  "Designing Schemas",
                  "MongoDB & Mongoose",
                  "PostgreSQL & Sequelize/TypeORM",
                  "CRUD Operations",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "API Architecture",
            modules: [
              {
                title: "Building APIs",
                lessons: [
                  "RESTful API Principles",
                  "Authentication (JWT, Cookies)",
                  "Authorization & Roles",
                  "API Documentation (Swagger)",
                  "Introduction to GraphQL",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "System Design",
            modules: [
              {
                title: "Scalability & Security",
                lessons: [
                  "Error Handling & Logging",
                  "Security Best Practices (OWASP)",
                  "Caching Strategies (Redis)",
                  "Microservices Overview",
                  "Deployment & Docker",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Backend Development (Node.js)",
              "Databases (SQL & NoSQL)",
              "API Design",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "System Design Thinking",
              "Code Review Practices",
              "Portfolio Project Development",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: API Web Application",
            description:
              "Build a complete frontend and backend web application.",
          },
          {
            title: "Project 2: REST API Development",
            description: "Design and implement RESTful APIs.",
          },
          {
            title: "Project 3: Authentication & Authorization",
            description: "Implement secure user authentication systems.",
          },
          {
            title: "Project 4: Production Deployment",
            description: "Deploy a full-stack application to production.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Backend Developer",
            description:
              "Assist with API development and database operations under supervision.",
          },
          {
            current: false,
            title: "Frontend Engineer",
            description: "Develop interactive user interfaces.",
          },
          {
            current: true,
            title: "Backend Engineer",
            description: "Build scalable server-side systems and APIs.",
          },
          {
            current: false,
            title: "Senior Backend Engineer",
            description: "Lead complex API and system design projects.",
          },
          {
            current: false,
            title: "Full-Stack Developer",
            description:
              "Develop complete web applications across frontend and backend.",
          },
          {
            current: false,
            title: "Software Architect",
            description: "Design high-level system architectures.",
          },
          {
            current: false,
            title: "VP of Engineering",
            description:
              "Lead engineering teams and define technical strategy at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Backend Code Repository",
            description:
              "Showcase API documentation, database schemas, and clean server-side code on GitHub.",
          },
          {
            title: "Crush System Design Interviews",
            description:
              "Learn to design scalable, reliable systems and explain your architectural choices.",
          },
          {
            title: "Write Technical Blogs",
            description:
              "Explain how you solved complex logic, caching, or database optimization problems.",
          },
          {
            title: "Backend Specialist Resume",
            description:
              "Emphasize performance, security, and scalability in your project descriptions.",
          },
          {
            title: "Target Infrastructure Roles",
            description:
              "Apply to companies building heavy-duty platforms and services.",
          },
          {
            title: "Network with Architects",
            description:
              "Connect with senior engineers to learn best practices and find mentorship.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Critical Sys",
            description: "Back-end logic powers all digital services",
            source: "InfoWorld",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Cloud Native",
            description: "Shift to Serverless and Microservices",
            source: "CNCF Survey",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Security Focus",
            description: "Rising need for secure API architecture",
            source: "OWASP",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Scale",
            description: "Handling millions of requests per second.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$110k – $170k",
            description: "Premium salaries for Backend Specialists",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$8,000 - $14,000" },
          { location: "United Kingdom", montly: "$5,000 - $9,000" },
          { location: "Europe", montly: "$4,500 - $8,500" },
          { location: "Remote Roles", montly: "$2,500 - $7,000" },
        ],
        faqs: [
          {
            question: "What language do we use?",
            answer:
              "We primarily focus on Node.js (JavaScript) as it allows for a unified stack, but concepts apply to any language.",
          },
          {
            question: "What is Backend Development?",
            answer:
              "It is the server-side of software—databases, APIs, logic, and servers—that powers the user-facing front-end.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Will I learn about databases?",
            answer:
              "Yes, deep dives into both SQL (PostgreSQL) and NoSQL (MongoDB) databases are core to the course.",
          },
          {
            question: "Do we cover API design?",
            answer:
              "Yes, you will learn to build RESTful APIs and get an introduction to GraphQL.",
          },
          {
            question: "Is security covered?",
            answer:
              "Yes, we teach authentication (JWT), authorization, and best practices to secure your applications.",
          },
          {
            question: "Do I need Front-End knowledge?",
            answer:
              "Basic HTML/JS knowledge helps, but you don't need to be a UI expert to be a great backend engineer.",
          },
          {
            question: "What projects will I build?",
            answer:
              "You will build a full API for an e-commerce store, a real-time chat server, and an authentication system.",
          },
          {
            question: "How is the pay?",
            answer:
              "Backend engineers often earn slightly higher than frontend specialists due to the complexity of the work.",
          },
          {
            question: "Will I learn Docker?",
            answer:
              "Yes, we introduce containerization with Docker to help you deploy your applications consistently.",
          },
        ],
      },
      {
        title: "Certified Python Expert",
        slug: "certified-python-expert",
        survey: "python-development",
        description:
          "Develop production-ready Python applications, covering core language features, testing, and best practices.",
        imageSrc: "/assets/courses/python.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 weeks",
        format: "live, online",
        rating: 4.6,
        peopleInField: "Python Developers",
        heroFeatures: [
          {
            title: "Code with Python. Launch a High-Income Career",
            features: [
              "The most practical Python training designed for real world success",
              "Learn Python from the ground up, no experience needed",
              "Build real projects: automation tools, data apps, and more",
              "Master Python, Git, APIs, Django, and problem-solving skills",
            ],
          },
          {
            title: "Get Hired, Not Just Skilled",
            features: [
              "Automate boring tasks and build scalable applications",
              "Get expert mentorship, code reviews, and hands-on coaching",
              "Interview prep, project support, and freelancing tips included",
              "Graduate with a strong portfolio and a certification employers value",
            ],
          },
          {
            title: "Join the Global Python Industry",
            features: [
              "1.8M+ global roles are open to Python developers today. We’ll help you get into highly in-demand industry!",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective Python Training Course",
          description:
            "This course takes you from absolute beginner to confident Python developer, no prior coding knowledge needed.",
          keyFeatures: [
            "No coding background? We start from the basics and guide you step by step.",
            "Learn Python, Git, APIs, Django, automation, web scraping, and more.",
            "Build real-world projects: automation tools, mini web apps, data dashboards, and API integrations.",
            "Earn a globally recognized certificate to validate your expertise.",
            "Career-driven approach with resume, LinkedIn, and portfolio optimization.",
            "Flexible learning with self-paced videos, live support sessions, and project deadlines.",
            "Learn version control and GitHub best practices like a pro.",
            "Personalized mentorship, weekly code reviews, and 1-on-1 feedback.",
            "Aligned to top career roles: Python Developer, Backend Engineer, Automation Specialist, Django Developer.",
            "Join a vibrant peer community for networking, collaboration, and accountability.",
            "Practice with mock interviews, career coaching, and strategic job prep.",
            "Get real experience through a virtual internship and support from our Placement Assistance Team (PAT).",
          ],
        },
        courseDemands: [
          {
            title: "Most In-Demand Language",
            description:
              "Python is the most popular programming language, used in web, data, AI, and automation.",
          },
          {
            title: "Career Flexibility",
            description:
              "Python skills open doors to multiple career paths: development, data science, and AI engineering.",
          },
          {
            title: "Beginner-Friendly Entry",
            description:
              "Python's clean syntax makes it ideal for beginners while remaining powerful for experts.",
          },
          {
            title: "Strong Earning Potential",
            description:
              "Python developers earn $75,000-$150,000+ globally, with specialists earning premium rates.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No programming background? No problem. You’ll begin with Python syntax and move to advanced concepts and software design patterns.",
          },
          {
            title: "Robust Python Curriculum",
            description:
              "Learn Python Syntax, Data Structures, OOP, File Handling, API interaction, and Testing frameworks.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, coding challenges, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as automation scripts, web scrapers, and backend services.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Start with the most readable and beginner-friendly programming language.",
          },
          {
            title: "Career Switchers",
            description:
              "Learn a versatile language that opens doors in Web, Data, and AI.",
          },
          {
            title: "Developers",
            description:
              "Add a powerful scripting and application language to your toolkit.",
          },
          {
            title: "Freelancers",
            description: "Automate tasks and build custom scripts for clients.",
          },
          {
            title: "Founders",
            description:
              "Quickly prototype ideas and automate business processes.",
          },
          {
            title: "Students",
            description:
              "Learn the primary language used in modern university CS curriculums.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Python Basics",
            modules: [
              {
                title: "Python Basics",
                lessons: [
                  "Introduction to Python and Its Features",
                  "Python Uses and Flavours",
                  "Software Installation and Environment Setup",
                  "Data Types & I/O Functions",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Data Operations",
            modules: [
              {
                title: "Data Operations",
                lessons: [
                  "Data Type Conversion",
                  "Arithmetic, Comparison, Assignment & Bitwise Operators",
                  "String Methods",
                  "List Methods",
                  "Tuple Methods",
                  "Sets Methods",
                  "Dictionary Methods",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Conditional Statements & Functions",
            modules: [
              {
                title: "Conditional Statements & Functions",
                lessons: [
                  "Expressions",
                  "Conditional Statements",
                  "For Loops & While Loops",
                  "Functions",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Error Handling & File Operations",
            modules: [
              {
                title: "Error Handling & File Operations",
                lessons: [
                  "File Handling",
                  "Errors & Exceptions",
                  "Logging & Python Debugger (pdb)",
                  "Objects & Classes (OOP)",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Shell Scripting & Django",
            modules: [
              {
                title: "Shell Scripting & Django",
                lessons: [
                  "Shell Scripting",
                  "Working with sys, os, subprocess, date-time",
                  "Web Scraping with Beautiful Soup",
                  "Django Introduction, Architecture & Installation",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Logging Infrastructure",
            modules: [
              {
                title: "Logging Infrastructure",
                lessons: [
                  "Python Logging Fundamentals",
                  "Log Format Customization",
                  "Logger Usage, Handlers, Formatters",
                  "Logging Flow, Buffering, Rotating Logs",
                  "Best Practices",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Unit Testing with unittest",
            modules: [
              {
                title: "Unit Testing with unittest",
                lessons: [
                  "Unit Testing Introduction & Framework Overview",
                  "CLI, Assertions, Fixtures",
                  "Testing Exceptions & Mock Library",
                  "Classes, Functions, Pros/Cons of unittest",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Networking with Python",
            modules: [
              {
                title: "Networking with Python",
                lessons: [
                  "Python Networking, Sockets & Socket Programming",
                  "Data Models & Client-Server Communication",
                  "TCP Sockets & Socket Types",
                  "Overview of Tornado Framework",
                  "Creating a Python Chat Server",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Python Fundamentals",
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Python Libraries",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Problem Decomposition",
              "Clean Code Practices",
              "Programming Career Foundations",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Python Utilities",
            description:
              "Build small utility programs using Python fundamentals.",
          },
          {
            title: "Project 2: Data Processing Script",
            description:
              "Process and analyze structured datasets using Python.",
          },
          {
            title: "Project 3: OOP Application",
            description: "Develop an object-oriented Python application.",
          },
          {
            title: "Project 4: Automation Tool",
            description:
              "Create a Python automation script for real-world tasks.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Python Student",
            description:
              "Assist with Python scripting and basic application development.",
          },
          {
            current: false,
            title: "Python Developer",
            description:
              "Develop applications and automation scripts using Python.",
          },
          {
            current: false,
            title: "Backend Developer",
            description:
              "Build server-side applications using Python frameworks.",
          },
          {
            current: false,
            title: "Automation Engineer",
            description: "Automate workflows and repetitive tasks with Python.",
          },
          {
            current: false,
            title: "Senior Python Developer",
            description:
              "Lead Python development projects and mentor junior developers.",
          },
          {
            current: false,
            title: "Software Engineer",
            description: "Design and build scalable software systems.",
          },
          {
            current: false,
            title: "Principal Engineer",
            description:
              "Drive technical strategy and lead cross-team engineering initiatives.",
          },
        ],
        teachFeatures: [
          {
            title: "Python Project Portfolio",
            description:
              "Display a variety of Python applications, from CLI tools to web scrapers and automation bots.",
          },
          {
            title: "Pass Python Assessments",
            description:
              "Master Pythonic coding styles and standard library tricks to breeze through coding tests.",
          },
          {
            title: "Engage in Python Community",
            description:
              "Participate in PyCon, local meetups, or online forums to build your network.",
          },
          {
            title: "Versatile Python Resume",
            description:
              "Tailor your resume to show how Python allows you to solve problems in any domain.",
          },
          {
            title: "Apply Across Domains",
            description:
              "Your skills are needed in web, data, AI, and DevOps—cast a wide net.",
          },
          {
            title: "Contribute to Python Packages",
            description:
              "Make a name for yourself by contributing to the open-source Python ecosystem.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Universal",
            description: "Python is the 2nd most popular language on GitHub",
            source: "GitHub Octoverse",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Versatile",
            description: "Used in Web, AI, Data, and Scripting",
            source: "JetBrains Survey",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Job Growth",
            description: "High demand across multiple tech sectors",
            source: "Indeed Hiring Lab",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Automation",
            description: "Key language for business process automation.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$100k – $160k",
            description: "Strong salaries for Python Developers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,500 - $13,000" },
          { location: "United Kingdom", montly: "$4,500 - $8,000" },
          { location: "Europe", montly: "$4,000 - $7,500" },
          { location: "Remote Roles", montly: "$2,000 - $6,000" },
        ],
        faqs: [
          {
            question: "Is this course for beginners?",
            answer:
              "Yes, we start from zero. Python is known for being the most readable and beginner-friendly language.",
          },
          {
            question: "What can I do with Python?",
            answer:
              "Python is versatile: Web Development, Data Science, AI, Automation, and Scripting are all possible.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Will I learn object-oriented programming (OOP)?",
            answer:
              "Yes, mastering classes and objects is a key part of becoming a Python Expert.",
          },
          {
            question: "Are there coding exercises?",
            answer:
              "Yes, dozens of challenges and mini-projects to build your muscle memory.",
          },
          {
            question: "Do we use Python 2 or 3?",
            answer: "We strictly use Python 3, the modern standard.",
          },
          {
            question: "Will I build a web app?",
            answer:
              "You will learn the basics of web frameworks like Flask or Django as part of the curriculum.",
          },
          {
            question: "Does this cover automation?",
            answer:
              "Yes, you will write scripts to automate file handling, web scraping, and email sending.",
          },
          {
            question: "How long does it take to become an expert?",
            answer:
              "This 8-week course gives you a solid professional foundation, but mastery is a lifelong journey.",
          },
          {
            question: "Is career support available?",
            answer:
              "Yes, we help you position yourself for Python Developer roles across various industries.",
          },
        ],
      },
      {
        title: "Software Engineering With Python",
        slug: "software-engineering-with-python",
        survey: "python-development",
        description:
          "Develop production-ready Python applications, covering core language features, testing, and best practices.",
        imageSrc: "/assets/courses/software-engineering-with-python.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 weeks",
        format: "live, online",
        rating: 4.6,
        peopleInField: "Python Engineers",
        heroFeatures: [
          {
            title:
              "Launch Your Career in the World’s Most In-Demand Tech Skill",
            features: [
              "The most practical Python Bootcamp designed for real world success",
              "Learn, build, and access global opportunities in tech",
              "With hands-on projects, develop a job-ready portfolio",
              "Learn Python, Git, APIs, Databases, Web Development, and more",
            ],
          },
          {
            title: "Code. Build. Launch Your Career",
            features: [
              "Enjoy interview prep, CV upgrade, and job mapping",
              "Create real world applications that showcase your skills",
              "Get 1-on-1 mentorship, internship experience, and career guidance",
              "Become job-ready with remote internship and placement support",
            ],
          },
          {
            title: "Join the Global Tech Workforce",
            features: [
              "Python is at the core of millions of jobs across industries. Let’s help you become the certified developer they’re looking for",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Software Engineering with Python Course",
          description:
            "This course equips you with in-demand Python skills and job-ready software development training, no prior coding experience needed.",
          keyFeatures: [
            "No background in tech? We start from the very basics and scale up.",
            "Master Python programming, OOP, Git, APIs, SQL, Flask, and Django.",
            "Build real-world software: web apps, REST APIs, CLI tools, automation scripts, and more.",
            "Get certified with a globally recognized credential that proves your skills.",
            "Career-focused training with resume, LinkedIn, and GitHub optimization.",
            "Flexible learning: live classes, recorded sessions, and weekly practicals.",
            "Learn Git and GitHub for real-world collaboration and version control.",
            "One-on-one mentorship, expert code reviews, and weekly Q&A sessions.",
            "Tailored to roles like Python Developer, Backend Engineer, and Software Engineer.",
            "Join a peer network for collaboration, project support, and growth.",
            "Interview prep, technical assessments, and career coaching to land top roles.",
            "Virtual internship and job placement assistance via our Placement Assistance Team (PAT).",
          ],
        },
        courseDemands: [
          {
            title: "Industry Standard Language",
            description:
              "Python is the go-to language for software development, automation, and scripting across industries.",
          },
          {
            title: "Rapid Development",
            description:
              "Python enables faster development cycles, making it preferred for startups and enterprises alike.",
          },
          {
            title: "Cross-Domain Applications",
            description:
              "From web backends to machine learning, Python's versatility ensures lasting career relevance.",
          },
          {
            title: "Growing Job Market",
            description:
              "Python developer positions are among the fastest-growing roles in software engineering.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No tech background? No problem. You’ll begin with Python fundamentals and master software engineering principles.",
          },
          {
            title: "Robust Engineering Curriculum",
            description:
              "Learn Advanced Python, Algorithms, Data Structures, Design Patterns, and Software Testing methodology.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, system design discussions, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as scalable web applications, API services, and data processing tools.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Go beyond basic coding to learn professional software engineering practices.",
          },
          {
            title: "Self-Taught Coders",
            description:
              "Fill in the gaps in algorithms, design patterns, and testing.",
          },
          {
            title: "Career Switchers",
            description:
              "Become a professional software engineer with a strong Python foundation.",
          },
          {
            title: "Freelancers",
            description:
              "Deliver robust, maintainable, and professional-grade code to clients.",
          },
          {
            title: "Founders",
            description:
              "Build scalable and reliable software products from the beginning.",
          },
          {
            title: "Students",
            description:
              "Master the engineering principles required for top tech company roles.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Python Basics",
            modules: [
              {
                title: "Python Basics",
                lessons: [
                  "Introduction to Python and Its Features",
                  "Python Uses and Flavours",
                  "Software Installation and Environment Setup",
                  "Data Types & I/O Functions",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Data Operations",
            modules: [
              {
                title: "Data Operations",
                lessons: [
                  "Data Type Conversion",
                  "Arithmetic, Comparison, Assignment & Bitwise Operators",
                  "String Methods",
                  "List Methods",
                  "Tuple Methods",
                  "Sets Methods",
                  "Dictionary Methods",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Conditional Statements & Functions",
            modules: [
              {
                title: "Conditional Statements & Functions",
                lessons: [
                  "Expressions",
                  "Conditional Statements",
                  "For Loops & While Loops",
                  "Functions",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Error Handling & File Operations",
            modules: [
              {
                title: "Error Handling & File Operations",
                lessons: [
                  "File Handling",
                  "Errors & Exceptions",
                  "Logging & Python Debugger (pdb)",
                  "Objects & Classes (OOP)",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Shell Scripting & Django",
            modules: [
              {
                title: "Shell Scripting & Django",
                lessons: [
                  "Shell Scripting",
                  "Working with sys, os, subprocess, date-time",
                  "Web Scraping with Beautiful Soup",
                  "Django Introduction, Architecture & Installation",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Logging Infrastructure",
            modules: [
              {
                title: "Logging Infrastructure",
                lessons: [
                  "Python Logging Fundamentals",
                  "Log Format Customization",
                  "Logger Usage, Handlers, Formatters",
                  "Logging Flow, Buffering, Rotating Logs",
                  "Best Practices",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Unit Testing with unittest",
            modules: [
              {
                title: "Unit Testing with unittest",
                lessons: [
                  "Unit Testing Introduction & Framework Overview",
                  "CLI, Assertions, Fixtures",
                  "Testing Exceptions & Mock Library",
                  "Classes, Functions, Pros/Cons of unittest",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Networking with Python",
            modules: [
              {
                title: "Networking with Python",
                lessons: [
                  "Python Networking, Sockets & Socket Programming",
                  "Data Models & Client-Server Communication",
                  "TCP Sockets & Socket Types",
                  "Overview of Tornado Framework",
                  "Creating a Python Chat Server",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Python Software Architecture",
              "Testing & Debugging",
              "APIs & Microservices",
              "Version Control (Git)",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Agile Development",
              "Code Documentation",
              "Engineering Best Practices",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Modular Python Application",
            description: "Build a modular, maintainable Python application.",
          },
          {
            title: "Project 2: API Development",
            description: "Develop RESTful APIs using Python frameworks.",
          },
          {
            title: "Project 3: Testing & Debugging",
            description: "Implement unit tests and debugging strategies.",
          },
          {
            title: "Project 4: Scalable Python Service",
            description: "Deploy a scalable backend service built with Python.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Python Student",
            description:
              "Assist with Python application development and testing.",
          },
          {
            current: false,
            title: "Backend Engineer",
            description: "Develop robust backend services and APIs.",
          },
          {
            current: true,
            title: "Software Engineer",
            description:
              "Design, build, and maintain scalable software systems using Python.",
          },
          {
            current: false,
            title: "Senior Software Engineer",
            description:
              "Lead complex software projects and mentor engineering teams.",
          },
          {
            current: false,
            title: "Systems Engineer",
            description:
              "Work on large-scale system architecture and optimization.",
          },
          {
            current: false,
            title: "Engineering Lead",
            description: "Lead engineering teams and technical strategy.",
          },
          {
            current: false,
            title: "VP of Engineering",
            description:
              "Define engineering vision and lead technical organizations at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Engineering Portfolio",
            description:
              "Showcase well-architected Python applications with proper testing, logging, and documentation.",
          },
          {
            title: "Master Engineering Interviews",
            description:
              "Go beyond syntax to discuss design patterns, algorithms, and software architecture.",
          },
          {
            title: "Demonstrate Best Practices",
            description:
              "Share code that proves you understand clean code, testing, and CI/CD.",
          },
          {
            title: "Professional Engineer Resume",
            description:
              "Highlight your ability to build maintainable, production-grade software.",
          },
          {
            title: "Target Tech Engineering Teams",
            description:
              "Apply for roles where code quality and engineering rigor are prioritized.",
          },
          {
            title: "Network with Senior Devs",
            description:
              "Find mentors who can help you navigate the path from junior to senior engineer.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Enterprise",
            description: "Used by Google, Instagram, and Spotify",
            source: "TechCrunch",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Fast Dev",
            description: "Enables rapid prototyping and development",
            source: "Python Software Foundation",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Engineering",
            description: "Shift towards strict typing and high performance",
            source: "PyCon Reports",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Backend",
            description: "Powering modern web frameworks like FastAPI.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$110k – $165k",
            description: "Competitive Engineering Salaries",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$8,000 - $13,500" },
          { location: "United Kingdom", montly: "$5,000 - $8,500" },
          { location: "Europe", montly: "$4,500 - $8,000" },
          { location: "Remote Roles", montly: "$2,500 - $6,500" },
        ],
        faqs: [
          {
            question: "How is this different from the Python Expert course?",
            answer:
              "This course focuses on Software Engineering principles (Algorithms, Design Patterns, Testing) using Python, rather than just the language syntax.",
          },
          {
            question: "Do I need prior coding experience?",
            answer:
              "It is helpful but not mandatory. We move quickly through syntax to get to engineering concepts.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Will I learn Data Structures & Algorithms?",
            answer:
              "Yes, this is crucial for passing technical interviews at top tech companies.",
          },
          {
            question: "Is this relevant for web development?",
            answer:
              "Yes, we cover backend development with Django/FastAPI using engineering best practices.",
          },
          {
            question: "Do you teach Testing?",
            answer:
              "Yes, Unit Testing and TDD (Test Driven Development) are major components of this course.",
          },
          {
            question: "What about System Design?",
            answer:
              "We introduce concepts of scalable system design and architecture.",
          },
          {
            question: "Are the projects complex?",
            answer:
              "Yes, you will build production-grade applications that mimic real-world software systems.",
          },
          {
            question: "How is the job market?",
            answer:
              "Software Engineers with Python skills are in extremely high demand in Fintech, Tech, and Data sectors.",
          },
          {
            question: "Is there live mentorship?",
            answer:
              "Yes, live sessions with senior engineers help guide your growth and code quality.",
          },
        ],
      },
      {
        title: "Software Engineering With java",
        slug: "software-engineering-with-java",
        survey: "software-engineering-with-java",
        description:
          "Develop production-ready java applications, covering core language features, testing, and best practices.",
        imageSrc: "/assets/courses/java.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 weeks",
        format: "live, online",
        rating: 4.6,
        peopleInField: "Java Engineers",
        heroFeatures: [
          {
            title:
              "Launch Your Career with the Language that Powers Enterprise Tech",
            features: [
              "The most comprehensive Java Software Engineering Bootcamp",
              "Learn, build, and position yourself for global job opportunities",
              "Work on real-world projects and create a solid software portfolio",
              "Master Java, OOP, Spring Boot, APIs, Databases, and more",
            ],
          },
          {
            title:
              "Code, Build, and Earn as a Certified Java Software Engineer",
            features: [
              "Build a portfolio that shows off your backend and full-stack skills",
              "Get personalized mentorship, career coaching, and industry insight",
              "Resume optimization, job-mapping, and interview prep included",
              "Become job-ready with hands-on training and internship experience",
            ],
          },
          {
            title:
              "Join the Global Wave of Java Engineers Powering Digital Transformation",
            features: [
              "Java powers scalable systems and enterprise tech. As global demand rises, we’ll help you become the certified developer companies want",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Software Engineering with Java Course",
          description:
            "This course is your pathway to one of the world’s most trusted programming languages.",
          keyFeatures: [
            "No prior programming experience required, we’ll teach you from the ground up",
            "Hands-on learning with real-world Java tools like IntelliJ, Maven, Spring Boot, Git, and more",
            "Projects that mirror real software jobs: build apps, APIs, web platforms, and full-stack systems",
            "Globally recognized certification to prove your Java expertise",
            "Career-focused curriculum with resume, GitHub portfolio, and LinkedIn optimization",
            "Live instructor-led sessions + self-paced content for total learning flexibility",
            "Dedicated Java Practice Lab to help you build, break, and debug in real time",
            "1-on-1 mentorship, weekly review sessions, and expert feedback",
            "Tools and frameworks aligned to in-demand roles: Backend Developer, Java Developer, Full-Stack Engineer",
            "Access to a peer learning community for support, collaboration, and accountability",
            "Mock interviews, job placement mapping, and career coaching included",
            "Virtual internship and job assistance through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Enterprise Dominance",
            description:
              "Java remains the #1 language for enterprise applications, used by 90% of Fortune 500 companies.",
          },
          {
            title: "Massive Developer Base",
            description:
              "With 9M+ developers worldwide, Java has unmatched community support and job opportunities.",
          },
          {
            title: "Platform Independence",
            description:
              "Java's 'write once, run anywhere' makes it essential for cross-platform enterprise systems.",
          },
          {
            title: "Strong Salaries",
            description:
              "Java developers earn $80,000-$160,000+ globally, with senior architects earning premium pay.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No Java experience? No problem. You’ll begin with syntax basics and move to building enterprise-grade applications.",
          },
          {
            title: "Robust Java Curriculum",
            description:
              "Learn Java Core, OOP, Collections Framework, Multithreading, Spring Boot, and Microservices architecture.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, architectural reviews, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as banking systems, e-commerce backends, and distributed services.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn a strictly typed, object-oriented language used by the world's largest companies.",
          },
          {
            title: "Career Switchers",
            description:
              "Target stable, high-paying corporate roles in finance, healthcare, and tech.",
          },
          {
            title: "Developers",
            description:
              "Add a heavyweight enterprise language to your resume.",
          },
          {
            title: "Freelancers",
            description:
              "Work on large-scale enterprise contracts and backend systems.",
          },
          {
            title: "Founders",
            description:
              "Build robust, scalable backends that can handle enterprise growth.",
          },
          {
            title: "Students",
            description:
              "Learn the primary language for AP CS and many university algorithms courses.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Introduction to Java EE",
            modules: [
              {
                title: "Introduction to Java EE",
                lessons: ["Introduction to Java EE"],
              },
            ],
          },
          {
            id: "2",
            title: "Java Servlet",
            modules: [
              {
                title: "Java Servlet",
                lessons: [
                  "Servlets API, Interfaces, and Methods",
                  "Servlet Lifecycle",
                  "Configure and Deploy Servlet",
                  "ServletRequest, ServletResponse",
                  "ServletConfig, ServletContext",
                  "Servlet Scopes, Attributes, and Collaboration",
                  "Session Management",
                  "Listeners in Java EE",
                  "Filters in Java EE",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Java Server Pages (JSP)",
            modules: [
              {
                title: "Java Server Pages (JSP)",
                lessons: [
                  "JSP Lifecycle",
                  "Creating and Working With JSP Elements",
                  "Working With JSP Standard Action",
                  "JSTL and Custom Tag Libraries",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Introduction to Hibernate",
            modules: [
              {
                title: "Introduction to Hibernate",
                lessons: [
                  "Introduction to Hibernate",
                  "Hibernate CRUD Operation",
                  "Hibernate Queries and Relationships",
                  "Mapping Relationship with Hibernate",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Introduction to Spring",
            modules: [
              {
                title: "Introduction to Spring",
                lessons: [
                  "Introduction to Spring",
                  "Dependency Injection, SpringBean Lifecycle, Wiring and Scope",
                  "Spring AOP (Aspect-Oriented Programming)",
                  "Configuring AOP in Java Application using AspectJ Approach",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Spring JDBC and Spring Hibernate",
            modules: [
              {
                title: "Spring JDBC and Spring Hibernate",
                lessons: [
                  "Spring JDBC Implementation in an Application",
                  "Spring Hibernate Template",
                  "Spring JDBC Transaction Management",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Spring MVC",
            modules: [
              {
                title: "Spring MVC",
                lessons: [
                  "Spring MVC Architecture, Components, and Framework",
                  "Spring MVC Program",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "SOA and Web Services",
            modules: [
              {
                title: "SOA and Web Services",
                lessons: ["SOA and Web Services"],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Java Software Architecture",
              "Testing & Debugging",
              "APIs & Microservices",
              "Version Control (Git)",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Agile Development",
              "Code Documentation",
              "Engineering Best Practices",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Modular Java Application",
            description: "Build a modular, maintainable Java application.",
          },
          {
            title: "Project 2: API Development",
            description: "Develop RESTful APIs using Java frameworks.",
          },
          {
            title: "Project 3: Testing & Debugging",
            description: "Implement unit tests and debugging strategies.",
          },
          {
            title: "Project 4: Scalable Java Service",
            description: "Deploy a scalable backend service built with Java.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Java Developer",
            description:
              "Assist with Java application development and testing.",
          },
          {
            current: false,
            title: "Backend Engineer",
            description: "Develop robust backend services and APIs.",
          },
          {
            current: true,
            title: "Software Engineer",
            description:
              "Design, build, and maintain scalable software systems using java.",
          },
          {
            current: false,
            title: "Senior Software Engineer",
            description:
              "Lead complex software projects and mentor engineering teams.",
          },
          {
            current: false,
            title: "Systems Engineer",
            description:
              "Work on large-scale system architecture and optimization.",
          },
          {
            current: false,
            title: "Engineering Lead",
            description: "Lead engineering teams and technical strategy.",
          },
          {
            current: false,
            title: "VP of Engineering",
            description:
              "Define engineering vision and lead technical organizations at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Enterprise Java Portfolio",
            description:
              "Build robust backend applications using Spring Boot and showcase them on GitHub.",
          },
          {
            title: "Ace Java & OOP Interviews",
            description:
              "Master questions on JVM internals, multithreading, and object-oriented design patterns.",
          },
          {
            title: "Showcase Architecture Skills",
            description:
              "Demonstrate your understanding of microservices and enterprise application structure.",
          },
          {
            title: "Enterprise-Ready Resume",
            description:
              "Highlight your experience with industry-standard frameworks like Spring and Hibernate.",
          },
          {
            title: "Target Fortune 500s",
            description:
              "Apply to large organizations in finance, insurance, and tech that run on Java.",
          },
          {
            title: "Network in the Java Ecosystem",
            description:
              "Connect with the massive community of Java developers and enterprise architects.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Fortune 500",
            description: "Used by 90% of Fortune 500 companies",
            source: "Oracle",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Legacy & Modern",
            description: "Powers massive banking and retail systems",
            source: "JRebel Ecosystem Report",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Stability",
            description: "Java developers have high job security",
            source: "Dice Tech Job Report",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Enterprise",
            description: "The backbone of large-scale corporate software.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$105k – $160k",
            description: "Steady salaries for Java Engineers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$8,000 - $13,000" },
          { location: "United Kingdom", montly: "$5,000 - $8,500" },
          { location: "Europe", montly: "$4,500 - $8,000" },
          { location: "Remote Roles", montly: "$2,000 - $6,000" },
        ],
        faqs: [
          {
            question: "Why learn Java in 2026?",
            answer:
              "Java is the backbone of the enterprise. 90% of Fortune 500 companies run on Java, ensuring massive job stability.",
          },
          {
            question: "Is Java harder than Python?",
            answer:
              "It has a steeper learning curve due to its strict syntax, but learning it makes you a better overall engineer.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Will I learn Spring Boot?",
            answer:
              "Yes, Spring Boot is the industry standard for Java web development and is a core part of the course.",
          },
          {
            question: "What about Microservices?",
            answer:
              "We cover the architecture of Microservices, which is how modern large-scale Java apps are built.",
          },
          {
            question: "Do I need a powerful computer?",
            answer:
              "Java IDEs can be heavy, but any modern mid-range laptop (8GB+ RAM) will suffice.",
          },
          {
            question: "Will I learn about OOP?",
            answer:
              "Yes, Object-Oriented Programming is central to Java and we cover it in depth.",
          },
          {
            question: "What kind of jobs can I get?",
            answer:
              "Backend Engineer, Enterprise Architect, and Android Developer (as concepts transfer).",
          },
          {
            question: "Are there live classes?",
            answer:
              "Yes, weekly live coding sessions help clarify verbose Java concepts.",
          },
          {
            question: "What projects will I build?",
            answer:
              "You will build a banking system, an inventory management system, and a distributed e-commerce backend.",
          },
        ],
      },
    ],
  },

  {
    category: "Security",
    categoryName: "School of Cyber Security",
    courses: [
      {
        title: "Certified Cybersecurity",
        slug: "certified-cybersecurity",
        survey: "certified-cybersecurity",
        description:
          "Learn core cybersecurity concepts including networking, threat modeling, risk management, and security operations.",
        imageSrc: "/assets/courses/cyber-security.webp",
        thumbnail: "/assets/courses/thumbnails/cyber-security-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.7,
        peopleInField: "Cybersecurity Professionals",
        heroFeatures: [
          {
            title:
              "Launch Your Career in the World’s Most In-Demand Tech Field",
            features: [
              "The most practical Cyber Security Bootcamp with industry standards",
              "Protect critical systems and get high-paying opportunities worldwide",
              "With hands-on projects, build a security portfolio that gets noticed",
              "Master Ethical Hacking, Network Security, and more",
            ],
          },
          {
            title:
              "Defend, Secure, and Earn Big as a Certified Cyber Security Professional",
            features: [
              "Personalized mentorship and career guidance",
              "Build a cyber security portfolio that employers trust",
              "Be job-ready with real-world experience and placement support",
              "Interview coaching, role-matching, and resume optimization included",
            ],
          },
          {
            title: "Join the Global Cyber Defense Force",
            features: [
              "Companies are investing heavily in talent. We’ll prepare you to be the certified expert they’re searching for",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective Cyber Security Bootcamp",
          description:
            "This program is your gateway into one of the fastest-growing, highest-paying, and most essential tech careers.",
          keyFeatures: [
            "No prior tech or coding background required, we’ll train you from the ground up",
            "Hands-on learning with real cyber security tools like Kali Linux, Wireshark, Metasploit, Burp Suite, and Splunk",
            "Projects that simulate real-world scenarios: penetration testing, incident response, vulnerability assessments, and digital forensics",
            "Globally recognized certification to validate your cyber security expertise",
            "Career-focused curriculum with resume, portfolio, and LinkedIn optimization",
            "Live instructor-led sessions + self-paced content for complete flexibility",
            "Access to our Virtual Cyber Lab for continuous practice and skill-building",
            "1-on-1 mentorship, weekly progress check-ins, and expert feedback",
            "Skills aligned to top roles: Ethical Hacker, Security Analyst, SOC Analyst, Cloud Security Specialist, and Penetration Tester",
            "Peer community for networking, collaboration, and accountability",
            "Mock interviews, job matching, and career coaching from industry professionals",
            "Virtual internship and job assistance through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Critical Global Shortage",
            description:
              "There are 3.5 million unfilled cybersecurity positions worldwide, making it one of the most in-demand fields.",
          },
          {
            title: "Rising Threat Landscape",
            description:
              "Cyber attacks cost companies trillions annually, driving massive investment in security talent.",
          },
          {
            title: "Premium Salaries",
            description:
              "Cybersecurity professionals earn $80,000-$180,000+ globally, with specialists earning even more.",
          },
          {
            title: "Mission-Critical Role",
            description:
              "Security professionals protect critical infrastructure, personal data, and national security.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No security background? No problem. You’ll begin with networking basics and master the principles of digital defense.",
          },
          {
            title: "Robust Security Curriculum",
            description:
              "Learn Network Security, Threat Analysis, Risk Management, Security Operations, and Compliance standards.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, threat simulations, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as network vulnerability assessments, security policy design, and threat modeling.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Enter the exciting world of digital defense and security.",
          },
          {
            title: "IT Professionals",
            description:
              "Transition from support or admin roles into specialized security positions.",
          },
          {
            title: "Career Switchers",
            description:
              "Move into a high-demand field with zero percent unemployment.",
          },
          {
            title: "Freelancers",
            description:
              "Offer security audits and consulting to small businesses.",
          },
          {
            title: "Founders",
            description:
              "Understand how to secure your company's data and infrastructure.",
          },
          {
            title: "Students",
            description:
              "Start a career path with massive long-term growth potential.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Cybersecurity Foundations",
            modules: [
              {
                title: "Cybersecurity Foundations",
                lessons: [
                  "Basic security concepts, controls, and best practices",
                  "Threat, vulnerability, and risk assessment",
                  "Industry standards and compliance requirements",
                  "Security measures implementation and maintenance",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Operating Systems and Networking Essentials",
            modules: [
              {
                title: "Operating Systems and Networking Essentials",
                lessons: [
                  "OS architecture, memory management, and file systems",
                  "Networking protocols, topologies, and security practices",
                  "Hands-on tools: PowerShell, Wireshark, Packet Tracer",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Enterprise Infrastructure Security",
            modules: [
              {
                title: "Enterprise Infrastructure Security",
                lessons: [
                  "NICE framework and security controls",
                  "Firewalls, SIEM, VPNs, and IAM",
                  "Managing security in complex digital environments",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Threats, Vulnerabilities, and Incident Response",
            modules: [
              {
                title: "Threats, Vulnerabilities, and Incident Response",
                lessons: [
                  "Threat actors, exploits, and attack methods",
                  "MITRE ATT&CK framework",
                  "Incident analysis, IoCs, and mitigation strategies",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Governance, Risk, and Compliance (GRC)",
            modules: [
              {
                title: "Governance, Risk, and Compliance (GRC)",
                lessons: [
                  "GRC frameworks and principles",
                  "Aligning security measures with compliance goals",
                  "Risk reduction and organizational resilience",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Security Engineering Fundamentals",
            modules: [
              {
                title: "Security Engineering Fundamentals",
                lessons: [
                  "Risk assessment and prioritization",
                  "Safe system design and cryptography integration",
                  "Frameworks: NIST CSF, OWASP Top 10, CIS Controls",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "System Security",
            modules: [
              {
                title: "System Security",
                lessons: [
                  "Authentication and authorization",
                  "Logging, monitoring, and auditing",
                  "Detecting and responding to breaches",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Infrastructure Security",
            modules: [
              {
                title: "Infrastructure Security",
                lessons: [
                  "Best practices for infrastructure configuration",
                  "Vulnerability assessments and CIS Benchmarking",
                  "Hardening critical infrastructure systems",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Application Security",
            modules: [
              {
                title: "Application Security",
                lessons: [
                  "Web architecture and encryption",
                  "OWASP Top 10 vulnerabilities",
                  "Secure coding and security testing",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Malware and Ransomware Defense",
            modules: [
              {
                title: "Malware and Ransomware Defense",
                lessons: [
                  "Types, spread methods, and defenses",
                  "Malware analysis techniques",
                  "Incident response and containment",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Ethical Hacking",
            modules: [
              {
                title: "Ethical Hacking",
                lessons: [
                  "Defensive vs. offensive security",
                  "Cyber Kill Chain and MITRE ATT&CK",
                  "Network scanning, footprinting, and enumeration",
                ],
              },
            ],
          },
          {
            id: "12",
            title: "Vulnerability Assessment & Penetration Testing (VAPT)",
            modules: [
              {
                title: "Vulnerability Assessment & Penetration Testing (VAPT)",
                lessons: [
                  "Vulnerability scanning tools: Nessus, Nmap",
                  "Network threat analysis: sniffing, DoS/DDoS, social engineering",
                  "Defense strategies: honeypots, AAA, traffic analysis",
                ],
              },
            ],
          },
          {
            id: "13",
            title: "Cloud Security Fundamentals",
            modules: [
              {
                title: "Cloud Security Fundamentals",
                lessons: [
                  "Microsoft Azure Fundamentals (AZ-900)",
                  "Azure Security Engineer Associate (AZ-500)",
                  "Microsoft Security, Compliance & Identity Fundamentals (SC-900)",
                ],
              },
            ],
          },
          {
            id: "14",
            title: "Cybersecurity & Generative AI",
            modules: [
              {
                title: "Cybersecurity & Generative AI",
                lessons: [
                  "Generative AI for threat intelligence and detection",
                  "AI in phishing, malware, and deep fake defense",
                  "Prompt engineering and real-world AI security applications",
                ],
              },
            ],
          },
          {
            id: "15",
            title: "CompTIA Security+ (SY0-701) Preparation",
            modules: [
              {
                title: "CompTIA Security+ (SY0-701) Preparation",
                lessons: [
                  "Network security and risk management",
                  "Penetration testing basics",
                  "Cloud and application security",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Network Security Fundamentals",
              "Threat Detection & Prevention",
              "Security Operations (SOC)",
              "Vulnerability Assessment",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Risk Assessment",
              "Security Reporting",
              "Ethical Responsibility",
              "Cybersecurity Career Planning",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Network Security Assessment",
            description: "Evaluate and secure an enterprise network.",
          },
          {
            title: "Project 2: Threat Detection System",
            description:
              "Implement a basic threat detection and alerting system.",
          },
          {
            title: "Project 3: Incident Response Simulation",
            description: "Respond to a simulated cyberattack.",
          },
          {
            title: "Project 4: Security Risk Report",
            description:
              "Prepare a professional cybersecurity risk assessment.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Security Analyst",
            description:
              "Assist with security monitoring and basic threat analysis tasks.",
          },
          {
            current: false,
            title: "Cybersecurity Analyst",
            description:
              "Monitor systems, identify threats, and protect organizational assets.",
          },
          {
            current: false,
            title: "Security Engineer",
            description:
              "Design and implement security solutions across systems.",
          },
          {
            current: false,
            title: "SOC Analyst",
            description:
              "Investigate and respond to security incidents in real time.",
          },
          {
            current: false,
            title: "Senior Security Engineer",
            description:
              "Lead security architecture and incident response strategies.",
          },
          {
            current: false,
            title: "Cybersecurity Manager",
            description:
              "Lead security strategy and operations for an organization.",
          },
          {
            current: false,
            title: "Chief Information Security Officer",
            description:
              "Define enterprise security vision and lead organization-wide security initiatives.",
          },
        ],
        teachFeatures: [
          {
            title: "Build a Security Portfolio",
            description:
              "Document your lab setups, vulnerability assessments, and security configurations.",
          },
          {
            title: "Pass Security Screenings",
            description:
              "Prepare for interviews covering networking, threat models, and incident response.",
          },
          {
            title: "Establish Industry Presence",
            description:
              "Share security news and analysis on LinkedIn to show you stay current.",
          },
          {
            title: "Security Analyst Resume",
            description:
              "Highlight your understanding of compliance, tools, and defensive strategies.",
          },
          {
            title: "Apply to SOC & Analyst Roles",
            description:
              "Target entry-level roles in Security Operations Centers to launch your career.",
          },
          {
            title: "Network at Security Confs",
            description:
              "Attend local BSides or DefCon groups to meet practitioners in the field.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "3.5 Million",
            description: "Unfilled Cybersecurity jobs globally",
            source: "Cybersecurity Ventures",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "0% Unemployment",
            description: "Near-zero unemployment rate in the sector",
            source: "Herjavec Group",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Rising Threats",
            description: "Cybercrime costs to reach $10.5 Trillion by 2025",
            source: "Cybersecurity Ventures",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Defense",
            description: "Critical priority for government and enterprise.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$90k – $160k",
            description: "High entry and mid-level salaries",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,000 - $12,500" },
          { location: "United Kingdom", montly: "$4,500 - $8,000" },
          { location: "Europe", montly: "$4,000 - $7,500" },
          { location: "Remote Roles", montly: "$2,500 - $6,000" },
        ],
        faqs: [
          {
            question: "Do I need to be a coder to join?",
            answer:
              "No. While some scripting helps, Cybersecurity is more about systems, networks, and tools than writing code from scratch.",
          },
          {
            question: "Is this course for beginners?",
            answer:
              "Yes, we start with the fundamentals of networking and operating systems before moving to security concepts.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What tools will I learn?",
            answer:
              "You will use industry-standard tools like Wireshark, Nmap, Splunk, and Linux CLI.",
          },
          {
            question: "What job roles can I apply for?",
            answer:
              "This prepares you for roles like SOC Analyst, Security Administrator, and Junior Information Security Analyst.",
          },
          {
            question: "Is the job market good?",
            answer:
              "There is a global shortage of 3.5 million cybersecurity professionals. The market is incredibly strong.",
          },
          {
            question: "Will I learn about hacking?",
            answer:
              "You will learn *about* attacks to defend against them (Blue Team), but offensive hacking is covered in our Ethical Hacking course.",
          },
          {
            question: "Do I need a special computer?",
            answer:
              "A standard laptop with at least 8GB RAM is needed to run virtual machines for labs.",
          },
          {
            question: "Are there hands-on labs?",
            answer:
              "Yes, cybersecurity is a practical field. You will spend a lot of time in virtual labs simulating defenses.",
          },
          {
            question: "Does this help with CompTIA Security+?",
            answer:
              "Yes, the curriculum covers many of the domains required for standard industry certifications like Security+.",
          },
        ],
      },
      {
        title: "Certified Ethical Hacking",
        slug: "certified-ethical-hacking",
        survey: "certified-ethical-hacking",
        description:
          "Hands-on training in penetration testing, vulnerability assessment, and ethical hacking tools and techniques.",
        imageSrc: "/assets/courses/ethical-hacking.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.9,
        peopleInField: "Ethical Hackers",
        heroFeatures: [
          {
            title:
              "Launch Your Career in the World’s Most In-Demand Cyber Security Field",
            features: [
              "The most comprehensive Ethical Hacking Bootcamp",
              "Real-world hacking simulations, build a job-ready portfolio",
              "Learn, earn big, and access high-paying opportunities worldwide",
              "Penetration testing, vulnerability assessment, network security, and more",
            ],
          },
          {
            title: "Test, Secure, and Earn Big as a Certified Ethical Hacker",
            features: [
              "Build a cyber security portfolio hiring managers trust",
              "Get personalized mentorship, hands-on labs, and career coaching",
              "Interview prep, job mapping, and resume optimization included",
              "Get job-ready with virtual internships and placement support",
            ],
          },
          {
            title:
              "Join the Global Cyber Security Talent Wave. From Africa to the World",
            features: [
              "With a projection of 3.5M unfilled jobs by 2030, Top companies are hiring, and we’ll help you become the certified talent they need!",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Certified Ethical Hacker Bootcamp",
          description:
            "This bootcamp is your gateway into one of the world’s fastest-growing and highest-paying cyber security careers.",
          keyFeatures: [
            "No IT or programming background required: we’ll train you from the ground up",
            "Hands-on learning with industry tools like Kali Linux, Metasploit, Wireshark, and Burp Suite",
            "Projects that mirror real-world use cases: penetration tests, vulnerability assessments, and security audits",
            "Globally recognized CEH certification to showcase your hacking and defense skills",
            "Career-focused curriculum with resume, portfolio, and LinkedIn optimization",
            "Live instructor-led training + self-paced content for flexibility",
            "Access to our Virtual Cyber Lab for safe, 24/7 practice on simulated networks",
            "1-on-1 mentorship, weekly check-ins, and expert feedback",
            "Tools and frameworks aligned to top roles: Penetration Tester, Security Analyst, Vulnerability Researcher",
            "Peer community for networking, collaboration, and accountability",
            "Mock interviews, job mapping, and career coaching from cyber security professionals",
            "Virtual internship and job assistance through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Elite Security Role",
            description:
              "Ethical hackers are among the most valued and prestigious roles in cybersecurity.",
          },
          {
            title: "Proactive Defense",
            description:
              "Companies pay premium for professionals who can find vulnerabilities before attackers do.",
          },
          {
            title: "Top-Tier Compensation",
            description:
              "Ethical hackers and penetration testers earn $100,000-$200,000+ with bug bounties adding more.",
          },
          {
            title: "Exciting Career Path",
            description:
              "Ethical hacking offers a dynamic career with continuous learning and real-world impact.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No hacking experience? No problem. You’ll begin with Linux basics and learn to use industry-standard penetration testing tools.",
          },
          {
            title: "Robust Hacking Curriculum",
            description:
              "Learn Reconnaissance, Scanning, Exploitation, Web App Security, and Reporting using tools like Kali Linux, Metasploit, and Burp Suite.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, CTF challenges, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as full penetration test reports, vulnerability assessments, and secure code reviews.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn the offensive side of security to better understand defense.",
          },
          {
            title: "Security Analysts",
            description:
              "Level up your skills by learning how attackers actually think and operate.",
          },
          {
            title: "Developers",
            description:
              "Learn to identify vulnerabilities in code before deployment.",
          },
          {
            title: "Freelancers",
            description: "Offer penetration testing and bug bounty services.",
          },
          {
            title: "Founders",
            description:
              "Test your own applications for critical vulnerabilities.",
          },
          {
            title: "Students",
            description:
              "Gain the 'coolest' and most practical skill set in cybersecurity.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Foundation of Ethical Hacking",
            modules: [
              {
                title: "Foundation of Ethical Hacking",
                lessons: [
                  "Overview of Ethical Hacking",
                  "Cyber Kill Chain Methodology",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Introduction to Passive Reconnaissance Techniques",
            modules: [
              {
                title: "Introduction to Passive Reconnaissance Techniques",
                lessons: [
                  "Overview of Reconnaissance",
                  "Overview of Passive Reconnaissance",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Overview of Footprinting",
            modules: [
              {
                title: "Overview of Footprinting",
                lessons: [
                  "Understanding Footprinting Techniques and Tools",
                  "Overview of Passive Footprinting",
                  "Overview of Active Footprinting",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Overview of Active Reconnaissance",
            modules: [
              {
                title: "Overview of Active Reconnaissance",
                lessons: ["Introduction to Active Reconnaissance Techniques"],
              },
            ],
          },
          {
            id: "5",
            title: "Scanning and Enumeration",
            modules: [
              {
                title: "Scanning and Enumeration",
                lessons: [
                  "Overview of Network Scanning",
                  "Scanning Tools",
                  "Port Scanning Techniques",
                  "Introduction to NetBIOS Enumeration",
                  "DNS Enumeration",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Vulnerability Analysis",
            modules: [
              {
                title: "Vulnerability Analysis",
                lessons: [
                  "Cybersecurity Vulnerabilities and Assessment Methods",
                  "Overview of Vulnerability Research",
                  "Introduction to Vulnerability Assessment",
                  "Understanding Vulnerability Scoring Systems",
                  "Interconnection Between Research, Assessment, and Scoring",
                  "Overview of the Vulnerability Management Lifecycle",
                ],
              },
            ],
          },
          {
            id: "7",
            title:
              "Comprehensive Vulnerability Assessment and Security Scanning",
            modules: [
              {
                title:
                  "Comprehensive Vulnerability Assessment and Security Scanning",
                lessons: [
                  "Approaches to Vulnerability Assessment Solutions",
                  "Interpreting CVSS Scores and Vector Components",
                  "Scanner Operations and Configuration",
                  "Generating and Analyzing Vulnerability Assessment Reports",
                ],
              },
            ],
          },
          {
            id: "8",
            title:
              "Introduction to Penetration Testing: Web and Wireless Security",
            modules: [
              {
                title:
                  "Introduction to Penetration Testing: Web and Wireless Security",
                lessons: [
                  "Introduction to Penetration Testing: Web and Wireless Security",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Social Engineering",
            modules: [
              {
                title: "Social Engineering",
                lessons: [
                  "Introduction to Social Engineering",
                  "Securing Against Insider Threats",
                  "Understanding Identity Theft (Catfishing)",
                  "Overview of Likejacking",
                  "Media Sanitization Guidelines",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Denial of Service",
            modules: [
              {
                title: "Denial of Service",
                lessons: [
                  "DoS and DDoS Attacks: Overview",
                  "Understanding the Botnet Network",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Cloud and Container Security",
            modules: [
              {
                title: "Cloud and Container Security",
                lessons: [
                  "Introduction to Cloud Computing and Containerization",
                  "Everything as a Service (XaaS) and Emerging Trends",
                  "Understanding Container Technology",
                  "Overview of Cloud Security Platforms",
                  "Cloud Computing Threats",
                  "Hacking Methodology in Cloud Computing",
                  "Cloud Security Governance and Best Practices",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Penetration Testing",
              "Web Application Security",
              "Exploit Development",
              "Kali Linux Tools",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Ethical Hacking Methodologies",
              "Legal & Compliance Awareness",
              "Bug Bounty Reporting",
              "Security Consulting Skills",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Web Application Penetration Test",
            description:
              "Conduct penetration testing on a vulnerable web application.",
          },
          {
            title: "Project 2: Exploit Development",
            description: "Identify and exploit common system vulnerabilities.",
          },
          {
            title: "Project 3: Bug Bounty Simulation",
            description: "Simulate real-world bug bounty hunting tasks.",
          },
          {
            title: "Project 4: Pen Test Report",
            description: "Produce a professional ethical hacking report.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Penetration Tester",
            description:
              "Perform authorized penetration tests on systems and networks.",
          },
          {
            current: true,
            title: "Ethical Hacker",
            description:
              "Identify and exploit vulnerabilities to improve system security.",
          },
          {
            current: false,
            title: "Senior Penetration Tester",
            description:
              "Lead complex security assessments and mentor junior testers.",
          },
          {
            current: false,
            title: "Security Consultant",
            description: "Advise organizations on improving security posture.",
          },
          {
            current: false,
            title: "Red Team Specialist",
            description: "Simulate advanced cyberattacks to test defenses.",
          },
          {
            current: false,
            title: "Chief Information Security Officer",
            description:
              "Define enterprise security vision and lead organization-wide security strategy.",
          },
        ],
        teachFeatures: [
          {
            title: "CTF & Bug Bounty Profile",
            description:
              "Showcase your rankings on HackTheBox or your findings on Bugcrowd/HackerOne.",
          },
          {
            title: "Master Technical Interviews",
            description:
              "Be ready to explain exploit chains and remediation strategies clearly.",
          },
          {
            title: "Writeups and Walkthroughs",
            description:
              "Publish detailed writeups of CTF challenges to demonstrate your methodology.",
          },
          {
            title: "Penetration Tester Resume",
            description:
              "List your certifications, tools proficiency, and specific vulnerabilities you've found.",
          },
          {
            title: "Target Red Team Roles",
            description:
              "Apply for offensive security roles at consulting firms and tech companies.",
          },
          {
            title: "Network with Ethical Hackers",
            description:
              "Join the tight-knit community of offensive security professionals.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Offensive Ops",
            description: "Rising demand for Red Teamers",
            source: "CSO Online",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Bug Bounties",
            description: "Millions paid out annually to researchers",
            source: "HackerOne",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Compliance",
            description: "Mandatory pentesting for regulated industries",
            source: "GDPR/HIPAA Standards",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Security",
            description: "Preventing breaches before they happen.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$100k – $180k",
            description: "Premium pay for penetration testers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$8,000 - $14,000" },
          { location: "United Kingdom", montly: "$5,000 - $9,000" },
          { location: "Europe", montly: "$4,500 - $8,500" },
          { location: "Remote Roles", montly: "$3,000 - $7,500" },
        ],
        faqs: [
          {
            question: "Is this legal?",
            answer:
              "Yes! Ethical Hacking (White Hat) is about finding vulnerabilities with permission to fix them. We strictly teach legal methodologies.",
          },
          {
            question: "Do I need prior experience?",
            answer:
              "It is recommended to have basic IT or networking knowledge, but motivated beginners can succeed.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What OS do we use?",
            answer:
              "We primarily use Kali Linux, the industry standard OS for penetration testing.",
          },
          {
            question: "Will I learn to write exploits?",
            answer:
              "You will learn to use existing tools and modify scripts (Python/Bash) for exploitation.",
          },
          {
            question: "What is a CTF?",
            answer:
              "Capture The Flag. These are gamified hacking challenges we use to practice skills in a safe environment.",
          },
          {
            question: "Can I make money with this?",
            answer:
              "Yes, besides a full-time job, many ethical hackers earn significant money through Bug Bounty programs.",
          },
          {
            question: "What tools are covered?",
            answer:
              "Metasploit, Burp Suite, Nmap, Wireshark, John the Ripper, and many more.",
          },
          {
            question: "Is this course live?",
            answer:
              "Yes, live sessions allow instructors to demonstrate hacks safely and explain the theory behind them.",
          },
          {
            question: "What jobs can I get?",
            answer:
              "Penetration Tester, Vulnerability Assessor, Red Team Member, and Security Consultant.",
          },
        ],
      },
    ],
  },

  {
    category: "DevOps",
    categoryName: "School of Cloud & DevOps",
    courses: [
      {
        title: "Certified Cloud Engineering",
        slug: "certified-cloud-engineering",
        survey: "certified-cloud-engineering",
        description:
          "Design, deploy, and manage scalable cloud infrastructure using leading cloud platforms.",
        imageSrc: "/assets/courses/cloud-computing.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.8,
        peopleInField: "Cloud Engineers",
        heroFeatures: [
          {
            title:
              "Launch Your Career in the World’s Most In-Demand Tech Field",
            features: [
              "Comprehensive Cloud Computing Bootcamp with industry requirements",
              "Learn, earn big, and access high-paying opportunities across the globe",
              "With real-world projects, build a cloud portfolio that stands out",
              "Learn AWS, Azure, Google Cloud, DevOps, Containers, and more",
            ],
          },
          {
            title: "Build, Deploy, and Earn Big as a Certified Cloud Engineer",
            features: [
              "Build a cloud portfolio that hiring managers respect",
              "Get personalized mentorship, virtual internship, and career coaching",
              "Interview prep, job mapping, and resume optimization included",
              "Get job-ready with hands-on cloud labs and placement support",
            ],
          },
          {
            title: "Join the Global Cloud Talent Wave.",
            features: [
              "Top companies are hiring, and we’ll help you become the certified talent they need.",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective Cloud Computing Engineering Course",
          description:
            "This course is your gateway into one of the world’s fastest-growing and highest-paying IT fields.",
          keyFeatures: [
            "No tech or coding background required, we’ll teach you from the ground up",
            "Hands-on learning with real cloud platforms like AWS, Microsoft Azure, and Google Cloud",
            "Projects that mirror real-world use cases: cloud migrations, serverless applications, DevOps pipelines, and more",
            "Globally recognized certification to showcase your cloud expertise",
            "Career-focused curriculum with resume, portfolio, and LinkedIn optimization",
            "Live instructor-led training + self-paced content for full flexibility",
            "Access to our Cloud Lab for continuous practice and experimentation",
            "1-on-1 mentorship, weekly support, and expert feedback",
            "Tools and frameworks aligned to top roles: Cloud Engineer, DevOps Engineer, Solutions Architect",
            "Peer community for networking, collaboration, and accountability",
            "Mock interviews, job mapping, and career coaching from industry professionals",
            "Virtual internship and job assistance through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "$1 Trillion Industry",
            description:
              "Cloud computing is the backbone of modern business, with the market exceeding $1 trillion by 2028.",
          },
          {
            title: "Universal Adoption",
            description:
              "95% of organizations use cloud services, creating constant demand for cloud engineers.",
          },
          {
            title: "High Cloud Salaries",
            description:
              "Cloud engineers earn $100,000-$180,000+ globally, with certified professionals earning premium.",
          },
          {
            title: "Multi-Cloud Demand",
            description:
              "AWS, Azure, and GCP skills are all in high demand as companies adopt multi-cloud strategies.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No cloud background? No problem. You’ll begin with cloud concepts and master building secure, scalable infrastructure.",
          },
          {
            title: "Robust Cloud Curriculum",
            description:
              "Learn Cloud Architecture, Compute, Storage, Networking, Security, and Serverless computing on platforms like AWS or Azure.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, architecture design sessions, and Q&A to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as deploying highly available web apps, serverless APIs, and secure cloud networks.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description: "Learn how the modern internet is built and hosted.",
          },
          {
            title: "SysAdmins",
            description:
              "Transition from on-premise hardware to the modern cloud.",
          },
          {
            title: "Developers",
            description: "Learn to deploy and scale your own applications.",
          },
          {
            title: "Freelancers",
            description:
              "Offer cloud migration and management services to businesses.",
          },
          {
            title: "Founders",
            description:
              "Build scalable infrastructure for your startup without high upfront costs.",
          },
          {
            title: "Students",
            description:
              "Get certified in the most widely used technologies in the world.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Preparing for your Cloud and DevOps Journey",
            modules: [
              {
                title: "Preparing for your Cloud and DevOps Journey",
                lessons: [
                  "Microsoft Azure Fundamentals (AZ 900)",
                  "Azure Architecture",
                  "Azure Management and governance",
                  "Azure Deployment and Monitoring",
                  "AWS Cloud Fundamentals (AWS Cloud Practitioner)",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "AWS Cloud Fundamentals (AWS Cloud Practitioner)",
            modules: [
              {
                title: "AWS Cloud Fundamentals (AWS Cloud Practitioner)",
                lessons: [
                  "Introduction to AWS",
                  "Compute",
                  "Infrastructure and Reliability",
                  "Networking",
                  "Storage and Databases",
                  "Security",
                  "Monitoring and Analytics",
                  "Pricing and Support",
                  "Migration and Innovation",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Fundamentals of Linux",
            modules: [
              {
                title: "Fundamentals of Linux",
                lessons: [
                  "Command-line Interface",
                  "User and Group Management",
                  "Package Management",
                  "System Administration",
                  "Shell Scripting",
                  "Editors",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Fundamentals of Cloud Computing",
            modules: [
              {
                title: "Fundamentals of Cloud Computing",
                lessons: [
                  "Cloud Deployment Models",
                  "Cloud Service Models (IaaS, PaaS, SaaS)",
                  "Virtualization",
                  "Scalability, elasticity, and agility",
                  "Availability and fault tolerance",
                  "Security and compliance",
                  "Core cloud services (Compute, Storage, Networking, Databases)",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Cloud Architecture with AWS",
            modules: [
              {
                title: "Cloud Architecture with AWS",
                lessons: [
                  "AWS Compute (EC2, Lambda, Fargate)",
                  "AWS Storage Services (S3, Elasticache)",
                  "AWS VPC & Networking",
                  "AWS Databases (RDS, DynamoDB, Redshift)",
                  "AWS Security & IAM",
                  "Monitoring & Automation (CloudWatch, CloudFormation)",
                  "AWS Solutions Architect – Associate Exam Preparation",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "DevOps Lifecycle Management",
            modules: [
              {
                title: "DevOps Lifecycle Management",
                lessons: [
                  "Version Control and CI/CD with Jenkins",
                  "Configuration Management with Ansible and Terraform",
                  "Containerization with Docker",
                  "Container Orchestration using Kubernetes",
                  "DevOps Monitoring - Prometheus",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "DevOps on AWS",
            modules: [
              {
                title: "DevOps on AWS",
                lessons: [
                  "IaC on AWS (CloudFormation)",
                  "CI/CD on AWS (CodePipeline, CodeBuild, Deployment)",
                  "Containerization and Orchestration on AWS (ECS, EKS)",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Next-Gen Cloud & DevOps - Emerging Technologies",
            modules: [
              {
                title: "Next-Gen Cloud & DevOps - Emerging Technologies",
                lessons: [
                  "MultiCloud and Hybrid Cloud",
                  "Serverless & Edge Computing",
                  "Sustainable Clouds & FinOps",
                  "AI-as-a-Service & Quantum Computing",
                  "GitOps, AIOps, and Low-code Applications",
                  "IoT (Internet of Things)",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Cloud Administration and DevOps with Microsoft Azure",
            modules: [
              {
                title: "Cloud Administration and DevOps with Microsoft Azure",
                lessons: [
                  "Azure Fundamentals (AZ-900) & Architecture",
                  "Azure Identities, Governance, and RBAC",
                  "Implement & Manage Storage (Blob, Files)",
                  "Azure Compute Resources (VMs, Containers)",
                  "Virtual Networking & Intersite connectivity",
                  "Azure Data Protection & Monitoring",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Cloud Architecture with Google Cloud",
            modules: [
              {
                title: "Cloud Architecture with Google Cloud",
                lessons: [
                  "Google Cloud Fundamentals: Core Infrastructure",
                  "Essential Google Cloud Infrastructure: Foundation & Core Services",
                  "Elastic Google Cloud Infrastructure: Scaling & Automation",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Capstone Project",
            modules: [
              {
                title: "Capstone Project on Cloud Computing & DevOps",
                lessons: [
                  "Implement learned skills in real-world scenarios",
                  "Solve industry-aligned problems with mentoring",
                  "Showcase expertise to future employers",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Cloud Architecture Design",
              "Compute, Storage & Networking",
              "Cloud Security",
              "High Availability Systems",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "Architectural Documentation",
              "Cost Optimization",
              "Cloud Solution Design Interviews",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Cloud Architecture Design",
            description: "Design a secure and scalable cloud architecture.",
          },
          {
            title: "Project 2: High-Availability Web App",
            description: "Deploy a fault-tolerant web application.",
          },
          {
            title: "Project 3: Cloud Security Implementation",
            description: "Apply security controls across cloud services.",
          },
          {
            title: "Project 4: Performance Optimization",
            description: "Optimize cloud performance and availability.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Cloud Engineer",
            description:
              "Build and manage cloud-based infrastructure and services.",
          },
          {
            current: false,
            title: "Senior Cloud Engineer",
            description:
              "Lead cloud infrastructure projects and mentor engineering teams.",
          },
          {
            current: false,
            title: "Cloud Solutions Architect",
            description: "Design enterprise-grade cloud solutions.",
          },
          {
            current: false,
            title: "Infrastructure Engineer",
            description: "Maintain and optimize IT infrastructure systems.",
          },
          {
            current: false,
            title: "Platform Engineer",
            description:
              "Develop internal platforms to support application teams.",
          },
          {
            current: false,
            title: "VP of Infrastructure",
            description:
              "Lead enterprise infrastructure strategy and engineering teams at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "Cloud Architecture Portfolio",
            description:
              "Showcase diagrams and IaC (Terraform) code for scalable cloud infrastructures.",
          },
          {
            title: "Ace Cloud Interviews",
            description:
              "Master whiteboard sessions designing high-availability, fault-tolerant systems.",
          },
          {
            title: "Certify and Share",
            description:
              "Get certified (AWS/Azure) and share your badges and learning journey online.",
          },
          {
            title: "Cloud Engineer Resume",
            description:
              "Highlight your hands-on experience with specific cloud services and cost optimization.",
          },
          {
            title: "Target Cloud-Native Companies",
            description: "Apply to companies built on modern cloud stacks.",
          },
          {
            title: "Network with Cloud Architects",
            description:
              "Connect with professionals designing the infrastructure of the future.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "$1.2 Trillion",
            description: "Cloud market size by 2028",
            source: "Grand View Research",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "95% Adoption",
            description: "Orgs using cloud computing services",
            source: "RightScale State of Cloud",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Multi-Cloud",
            description: "Strategy adopted by 80% of enterprises",
            source: "Flexera",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Infrastructure",
            description: "The foundation of the modern internet.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$115k – $170k",
            description: "Strong salaries for Cloud Architects",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$8,500 - $14,000" },
          { location: "United Kingdom", montly: "$5,500 - $9,500" },
          { location: "Europe", montly: "$5,000 - $9,000" },
          { location: "Remote Roles", montly: "$3,000 - $7,000" },
        ],
        faqs: [
          {
            question: "Which cloud platform do you teach?",
            answer:
              "We focus primarily on AWS (Amazon Web Services) as it is the market leader, but concepts apply to Azure and GCP.",
          },
          {
            question: "Do I need coding skills?",
            answer:
              "Basic scripting (Python/Bash) is helpful, but Cloud Engineering is more about infrastructure configuration than app development.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Does this prepare me for AWS certification?",
            answer:
              "Yes, the curriculum aligns well with the AWS Solutions Architect Associate exam requirements.",
          },
          {
            question: "Will I incur cloud costs?",
            answer:
              "We teach you how to stay within the AWS Free Tier, but small costs (a few dollars) may occur for advanced labs.",
          },
          {
            question: "What is Infrastructure as Code?",
            answer:
              "It's managing infrastructure through code files (like Terraform) rather than manual clicking. You will learn this.",
          },
          {
            question: "What is the salary outlook?",
            answer:
              "Cloud Engineers are among the highest-paid IT professionals due to the massive shift to the cloud.",
          },
          {
            question: "Are there hands-on labs?",
            answer:
              "Yes, you cannot learn cloud by reading. You will be building and configuring real cloud resources.",
          },
          {
            question: "Do I need a strong computer?",
            answer:
              "No, since you are working in the cloud, your local machine specs matter less.",
          },
          {
            question: "Is career support included?",
            answer:
              "Yes, we help you structure your resume to highlight your cloud projects and certifications.",
          },
        ],
      },
      {
        title: "Certified DevOps Engineering",
        slug: "certified-devops-engineering",
        survey: "certified-devops-engineering",
        description:
          "Learn CI/CD pipelines, infrastructure as code, containerization, monitoring, and DevOps best practices.",
        imageSrc: "/assets/courses/devops.webp",
        thumbnail: "/assets/courses/thumbnails/devops-engineer-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.7,
        peopleInField: "DevOps Engineers",
        heroFeatures: [
          {
            title:
              "Launch Your Career in One of the World’s Most In-Demand Tech Fields",
            features: [
              "Most comprehensive DevOps Bootcamp with industry standard",
              "Learn, earn big, and access high-value opportunities worldwide",
              "With real-world projects, build a portfolio that proves your skills",
              "Master Linux, CI/CD, Cloud Platforms, Infrastructure as Code, and more",
            ],
          },
          {
            title:
              "Build, Automate, and Earn Big as a Certified DevOps Engineer",
            features: [
              "Create a DevOps portfolio that hiring managers notice immediately",
              "Get personalized mentorship, virtual internship, and career coaching",
              "Interview prep, job mapping, and resume optimization included",
              "Become job-ready with virtual internships and placement support",
            ],
          },
          {
            title: "Join the Global DevOps Talent Wave",
            features: [
              "Top companies are hiring, and we’ll help you become the certified talent they need.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective DevOps Engineering Course",
          description:
            "This course is your gateway into one of the most in-demand and highest-paying careers in tech.",
          keyFeatures: [
            "No tech or coding background required, we’ll teach you from the ground up",
            "Hands-on learning with real DevOps tools like Docker, Kubernetes, Jenkins, Terraform, and Ansible",
            "Projects that mirror real-world use cases: CI/CD pipelines, cloud deployments, infrastructure automation, and monitoring systems",
            "Globally recognized certification to showcase your DevOps expertise",
            "Career-focused curriculum with resume, portfolio, and LinkedIn optimization",
            "Live instructor-led training + self-paced content for full flexibility",
            "Access to our DevOps Cloud Lab for continuous practice and experimentation",
            "1-on-1 mentorship, weekly support, and expert feedback",
            "Tools and frameworks aligned to top roles: DevOps Engineer, Site Reliability Engineer (SRE), Cloud Infrastructure Engineer",
            "Peer community for networking, collaboration, and accountability",
            "Mock interviews, job mapping, and career coaching from industry professionals",
            "Virtual internship and job assistance through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "Modern Engineering Essential",
            description:
              "DevOps practices are now standard in software development, making these skills non-negotiable.",
          },
          {
            title: "Rapid Career Growth",
            description:
              "DevOps roles have grown 75% faster than other tech positions over the past 5 years.",
          },
          {
            title: "Premium Compensation",
            description:
              "DevOps engineers earn $95,000-$175,000+ globally, with senior roles commanding more.",
          },
          {
            title: "Bridge Technical Teams",
            description:
              "DevOps engineers connect development and operations, making them invaluable to organizations.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No DevOps background? No problem. You’ll begin with Linux and scripting before mastering pipelines and orchestration.",
          },
          {
            title: "Robust DevOps Curriculum",
            description:
              "Learn Linux, Git, Docker, Kubernetes, Jenkins/GitHub Actions (CI/CD), Terraform, and Monitoring tools.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, pipeline configuration workshops, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as automated deployment pipelines, containerized microservices, and infrastructure provisioning.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Start a high-paying career connecting code to the cloud.",
          },
          {
            title: "Developers",
            description:
              "Take control of your code's lifecycle from commit to production.",
          },
          {
            title: "Ops Professionals",
            description:
              "Automate your work and move into modern Site Reliability Engineering.",
          },
          {
            title: "Freelancers",
            description:
              "Set up automated deployment pipelines for client projects.",
          },
          {
            title: "Founders",
            description:
              "Ensure your product ships faster and breaks less often.",
          },
          {
            title: "Students",
            description:
              "Learn the workflow tools used by every major tech company.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Preparing for your Cloud and DevOps Journey",
            modules: [
              {
                title: "Preparing for your Cloud and DevOps Journey",
                lessons: [
                  "Microsoft Azure Fundamentals (AZ 900)",
                  "Azure Architecture & Management",
                  "Azure Deployment and Monitoring",
                  "AWS Cloud Fundamentals (AWS Cloud Practitioner)",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Fundamentals of Linux",
            modules: [
              {
                title: "Fundamentals of Linux",
                lessons: [
                  "Command-line Interface",
                  "User and Group Management",
                  "Package Management",
                  "System Administration",
                  "Shell Scripting & Editors",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Fundamentals of Cloud Computing",
            modules: [
              {
                title: "Fundamentals of Cloud Computing",
                lessons: [
                  "Cloud Deployment Models",
                  "Cloud Service Models (IaaS, PaaS, SaaS)",
                  "Virtualization, Scalability, and Elasticity",
                  "Availability, Fault Tolerance, Security, and Compliance",
                  "Core Cloud Services (Compute, Storage, Networking, Databases)",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Cloud Architecture with AWS",
            modules: [
              {
                title: "Cloud Architecture with AWS",
                lessons: [
                  "AWS Compute, Storage, VPC, Networking, & Databases",
                  "AWS Security, IAM, Monitoring & Automation",
                  "AWS CloudWatch & CloudFormation",
                  "Tools: EC2, RDS, S3, Lambda, Fargate, ElastiCache, Redshift, Route 53, DynamoDB",
                ],
              },
            ],
          },
          {
            id: "5",
            title:
              "DevOps Lifecycle Management: CI/CD to Container Orchestration",
            modules: [
              {
                title: "DevOps Lifecycle Management",
                lessons: [
                  "Version Control and CI/CD with Jenkins",
                  "Configuration Management with Ansible and Terraform",
                  "Containerization with Docker",
                  "Container Orchestration using Kubernetes",
                  "DevOps Monitoring - Prometheus",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "DevOps on AWS",
            modules: [
              {
                title: "DevOps on AWS",
                lessons: [
                  "IaC on AWS (CloudFormation)",
                  "CI/CD on AWS (CodePipeline, CodeBuild, Deployment, Monitoring)",
                  "Containerization and Orchestration on AWS (Docker, ECS, EKS)",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Next-Gen Cloud & DevOps - Emerging Technologies",
            modules: [
              {
                title: "Next-Gen Cloud & DevOps",
                lessons: [
                  "MultiCloud, Hybrid Cloud, Serverless & Edge Computing",
                  "Sustainable Clouds, AI-as-a-Service, Quantum Computing",
                  "FinOps, Platform Engineering, GitOps, IaC",
                  "AI/ML Integration, IoT, AIOps, Low-code",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Capstone Project on Cloud Computing & DevOps",
            modules: [
              {
                title: "Capstone Project",
                lessons: [
                  "Implement learned skills in real-world scenarios",
                  "Dedicated mentoring sessions",
                  "Showcase expertise to future employers",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Electives",
            modules: [
              {
                title: "Electives",
                lessons: [
                  "Academic Masterclass by Purdue (Cloud/DevOps trends)",
                  "Generative AI on Cloud (GenAI, Ethics, Data, Models, Azure OpenAI, NLP)",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Cloud Administration and DevOps with Microsoft Azure",
            modules: [
              {
                title: "Microsoft Azure",
                lessons: [
                  "Azure Fundamentals (AZ-900), Architecture & Management",
                  "Identities, Governance, RBAC",
                  "Storage, Compute, Virtual Networking, Data Protection, Monitoring",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Cloud Architecture with Google Cloud",
            modules: [
              {
                title: "Google Cloud",
                lessons: [
                  "Google Cloud Fundamentals: Core Infrastructure",
                  "Essential Google Cloud Infrastructure: Foundation & Core Services",
                  "Elastic Google Cloud Infrastructure: Scaling & Automation",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "CI/CD Automation",
              "Monitoring & Logging",
              "Kubernetes Administration",
              "Configuration Management",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: [
              "DevOps Culture & Collaboration",
              "Operational Excellence",
              "SRE Mindset",
            ],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Cloud Infrastructure Setup",
            description:
              "Provision scalable cloud infrastructure using best practices.",
          },
          {
            title: "Project 2: CI/CD Pipeline Automation",
            description:
              "Build automated pipelines for testing and deployment.",
          },
          {
            title: "Project 3: Containerized Application",
            description:
              "Deploy containerized applications using Docker and Kubernetes.",
          },
          {
            title: "Project 4: Cloud Cost Optimization",
            description: "Analyze and optimize infrastructure costs.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "DevOps Engineer",
            description:
              "Automate deployments and streamline software delivery pipelines.",
          },
          {
            current: false,
            title: "Senior DevOps Engineer",
            description:
              "Lead infrastructure automation and DevOps transformation projects.",
          },
          {
            current: false,
            title: "Site Reliability Engineer",
            description:
              "Improve reliability, scalability, and performance of systems.",
          },
          {
            current: false,
            title: "Platform Engineer",
            description: "Build internal developer platforms and tooling.",
          },
          {
            current: false,
            title: "DevOps Lead",
            description: "Define DevOps strategy and mentor engineering teams.",
          },
          {
            current: false,
            title: "VP of Platform Engineering",
            description:
              "Lead platform strategy and engineering organizations at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "DevOps Project Portfolio",
            description:
              "Showcase CI/CD pipelines, Dockerfiles, and Kubernetes configurations on GitHub.",
          },
          {
            title: "Crush DevOps Interviews",
            description:
              "Prepare to discuss automation, culture, and troubleshooting complex deployment issues.",
          },
          {
            title: "Blog About Automation",
            description:
              "Write tutorials on how you solved specific pipeline or infrastructure problems.",
          },
          {
            title: "DevOps Specialist Resume",
            description:
              "Highlight your toolchain mastery (Jenkins, Git, Terraform) and efficiency improvements.",
          },
          {
            title: "Target Engineering Organizations",
            description:
              "Apply to companies that value developer productivity and reliability.",
          },
          {
            title: "Network with SREs",
            description:
              "Connect with the Site Reliability Engineering community to learn best practices.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "High Demand",
            description: "DevOps jobs grew 24% in last 2 years",
            source: "Indeed Hiring Lab",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Automation",
            description: "Key driver for software delivery speed",
            source: "Puppet State of DevOps",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Culture Shift",
            description: "77% of orgs depend on DevOps practices",
            source: "Harvard Business Review",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Efficiency",
            description: "Bridging the gap between code and production.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$120k – $180k",
            description: "Top-tier pay for DevOps & SRE roles",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$9,000 - $15,000" },
          { location: "United Kingdom", montly: "$6,000 - $10,000" },
          { location: "Europe", montly: "$5,500 - $9,500" },
          { location: "Remote Roles", montly: "$3,500 - $8,000" },
        ],
        faqs: [
          {
            question: "What is DevOps?",
            answer:
              "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle.",
          },
          {
            question: "Do I need to know how to code?",
            answer:
              "You need to understand code and be proficient in scripting (Bash/Python), but you don't need to be a full-stack developer.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What tools will I learn?",
            answer:
              "The 'Greatest Hits' of DevOps: Docker, Kubernetes, Jenkins, Terraform, Git, and Linux.",
          },
          {
            question: "Is Linux required?",
            answer:
              "Yes, Linux is the language of servers. We cover essential Linux administration skills.",
          },
          {
            question: "What is CI/CD?",
            answer:
              "Continuous Integration/Continuous Deployment. You will build automated pipelines to ship code automatically.",
          },
          {
            question: "How is the job market?",
            answer:
              "Explosive. Every software company needs DevOps to ship code faster and more reliably.",
          },
          {
            question: "Is this course live?",
            answer:
              "Yes, live sessions are critical for troubleshooting complex configurations and tools.",
          },
          {
            question: "What projects will I build?",
            answer:
              "You will build a full CI/CD pipeline that takes code from GitHub, tests it, and deploys it to a Kubernetes cluster.",
          },
          {
            question: "Is this harder than Cloud Engineering?",
            answer:
              "It involves more tooling and automation logic, so it is often considered a specialized step up from general Cloud Engineering.",
          },
        ],
      },
    ],
  },

  {
    category: "Marketing",
    categoryName: "School of Digital Marketing",
    courses: [
      {
        title: "AI in Digital Marketing",
        slug: "ai-in-digital-marketing",
        survey: "digital-marketing",
        description:
          "Leverage AI tools for campaign optimization, audience targeting, content creation, and marketing analytics.",
        imageSrc: "/assets/courses/digital-marketing.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 weeks",
        format: "live, online, interactive",
        rating: 4.6,
        peopleInField: "AI Digital Marketing Specialists",
        heroFeatures: [
          {
            title: "Dominate Digital Marketing With AI",
            features: [
              "Practical AI course tailored for marketers, creators, and digital strategists",
              "Use AI tools to automate, scale, and optimize marketing campaigns",
              "Build job-ready skills in AI copywriting, chatbots, analytics, and more",
              "Execute real-world campaigns and build a results-driven portfolio",
            ],
          },
          {
            title: "Earn More. Become an AI-Powered Marketer.",
            features: [
              "Gain hands-on experience with top tools like ChatGPT, Meta AI, and more",
              "Get mentorship, guided projects, and personalized career support",
              "We don’t just teach, we help you implement, publish, and get seen",
              "Get interview mock sessions, portfolio reviews, and expert coaching",
            ],
          },
          {
            title: "Ride the AI Marketing Boom.",
            features: [
              "Join a global league of digital professionals already increasing income, visibility, and impact",
            ],
          },
        ],
        whyJoin: {
          title:
            "Why This Is the Most Effective AI in Digital Marketing Course",
          description:
            "This course gives you the exact tools and strategies to thrive in the digital age and get paid well for it.",
          keyFeatures: [
            "No coding or tech background needed, perfect for marketers, content creators, and business owners",
            "Hands-on training with real AI tools: ChatGPT, Jasper, Surfer SEO, Midjourney, Canva Magic, and more",
            "Real-world projects: sales copy generation, AI ad creatives, SEO content automation, audience analysis",
            "Globally recognized certificate to validate your AI marketing expertise",
            "Learn to build and monetize your own AI-driven content or marketing agency",
            "Career-ready curriculum with portfolio creation, resume revamp, and LinkedIn optimization",
            "Live expert-led sessions + self-paced video content for your convenience",
            "1-on-1 mentorship, weekly check-ins, and personalized feedback",
            "Get access to AI Marketing Toolkits, Templates, and Ready-to-Use Prompts",
            "Master top frameworks used by brands and influencers: AIDA, PAS, StoryBrand, and more",
            "Join a growing community of AI-powered marketers across Africa and beyond",
            "Internship and placement opportunities via our Marketing Career Support Team",
          ],
        },
        courseDemands: [
          {
            title: "Marketing Evolution",
            description:
              "AI is revolutionizing digital marketing, making AI-skilled marketers essential for competitive advantage.",
          },
          {
            title: "Efficiency Multiplier",
            description:
              "AI tools can 10x marketing productivity, making AI-enabled marketers highly valuable.",
          },
          {
            title: "Growing Budget Allocation",
            description:
              "Companies are shifting marketing budgets toward AI-powered campaigns and analytics.",
          },
          {
            title: "Cross-Industry Demand",
            description:
              "Every industry needs digital marketers with AI skills to optimize reach and ROI.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No marketing background? No problem. You’ll begin with marketing fundamentals and integrate powerful AI tools into your workflow.",
          },
          {
            title: "Robust Marketing Curriculum",
            description:
              "Learn Content Strategy, AI Copywriting, Data Analytics, Customer Segmentation, and Campaign Automation using AI tools.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, campaign reviews, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as full AI-driven marketing campaigns, automated content calendars, and performance reports.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Enter the marketing world with a massive advantage over traditional marketers.",
          },
          {
            title: "Marketers",
            description:
              "Future-proof your career by integrating AI into your existing skillset.",
          },
          {
            title: "Business Owners",
            description:
              "10x your marketing output without hiring a large team.",
          },
          {
            title: "Freelancers",
            description: "Offer cutting-edge AI marketing services to clients.",
          },
          {
            title: "Founders",
            description:
              "Grow your startup faster with automated, data-driven marketing.",
          },
          {
            title: "Students",
            description:
              "Learn the modern marketing stack that agencies are desperate for.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Foundations of AI in Marketing",
            modules: [
              {
                title: "Foundations of AI in Marketing",
                lessons: [
                  "What is Artificial Intelligence?",
                  "The rise of AI in the marketing landscape",
                  "Benefits and risks of AI-powered marketing",
                  "Real-world use cases in Africa and beyond",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "AI-Powered Market & Keyword Research",
            modules: [
              {
                title: "AI-Powered Market & Keyword Research",
                lessons: [
                  "Using AI tools for market intelligence",
                  "Keyword planning with AI tools (ChatGPT, SEMrush, Ubersuggest)",
                  "Competitor and trend analysis",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Smart Content Creation with Generative AI",
            modules: [
              {
                title: "Smart Content Creation with Generative AI",
                lessons: [
                  "Using ChatGPT and Jasper for ad copy, blogs, and email marketing",
                  "Visual content with Canva AI and DALL·E",
                  "Voice and video: AI tools for podcasts, reels, and animations",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "AI for Ads & Campaign Personalization",
            modules: [
              {
                title: "AI for Ads & Campaign Personalization",
                lessons: [
                  "Creating Google/Facebook Ads with AI",
                  "Dynamic ads & personalized messaging at scale",
                  "Optimizing ads with predictive analytics and A/B AI suggestions",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Predictive Targeting and Audience Intelligence",
            modules: [
              {
                title: "Predictive Targeting and Audience Intelligence",
                lessons: [
                  "Building custom audiences with AI",
                  "Behavioral segmentation and retargeting strategies",
                  "Lookalike audience creation with Meta & LinkedIn AI tools",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Automation and AI-driven Workflows",
            modules: [
              {
                title: "Automation and AI-driven Workflows",
                lessons: [
                  "Setting up marketing automation with AI tools (Zapier, Mailchimp AI)",
                  "Customer journeys and funnel optimization",
                  "Lead nurturing using AI chatbots",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "AI-Powered Analytics and Campaign Optimization",
            modules: [
              {
                title: "AI-Powered Analytics and Campaign Optimization",
                lessons: [
                  "AI tools for performance tracking",
                  "Predictive analytics and marketing dashboards",
                  "ROI measurement and conversion rate improvements",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Ethics, Privacy & Responsible AI Use in Marketing",
            modules: [
              {
                title: "Ethics, Privacy & Responsible AI Use in Marketing",
                lessons: [
                  "Ethical concerns and AI bias",
                  "Data privacy regulations (Nigeria, Africa, and global)",
                  "Building trust in AI-assisted campaigns",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Building Your AI-Powered Digital Marketing Strategy",
            modules: [
              {
                title: "Building Your AI-Powered Digital Marketing Strategy",
                lessons: [
                  "Creating an AI-first marketing plan",
                  "Integrating tools into a seamless workflow",
                  "Team collaboration and client reporting",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Final Capstone – End-to-End Campaign Execution",
            modules: [
              {
                title: "Final Capstone – End-to-End Campaign Execution",
                lessons: [
                  "Apply AI across research, content, ads, targeting, automation & analytics",
                  "Present campaign strategy and metrics",
                  "Peer & instructor review",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "AI-Powered Marketing Tools",
              "SEO & Performance Analytics",
              "Marketing Automation",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Growth Strategy", "Campaign Optimization"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: AI Marketing Campaign",
            description: "Design and execute an AI-powered marketing campaign.",
          },
          {
            title: "Project 2: SEO & Performance Analytics",
            description: "Analyze and optimize digital marketing performance.",
          },
          {
            title: "Project 3: Marketing Automation",
            description: "Implement AI-driven marketing automation workflows.",
          },
          {
            title: "Project 4: Growth Strategy Dashboard",
            description:
              "Build dashboards to track and optimize growth metrics.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Digital Marketing Specialist",
            description:
              "Assist with digital marketing campaigns and content creation.",
          },
          {
            current: false,
            title: "AI Digital Marketing Specialist",
            description:
              "Use AI tools and data to optimize digital marketing campaigns.",
          },
          {
            current: false,
            title: "Growth Marketer",
            description:
              "Drive user acquisition and engagement using data-driven strategies.",
          },
          {
            current: false,
            title: "Senior Digital Marketing Specialist",
            description:
              "Lead complex marketing campaigns and mentor team members.",
          },
          {
            current: false,
            title: "Marketing Analytics Manager",
            description:
              "Lead data-driven marketing analysis and optimization.",
          },
          {
            current: false,
            title: "Digital Marketing Lead",
            description: "Define and execute digital marketing strategy.",
          },
          {
            current: false,
            title: "Chief Marketing Officer",
            description:
              "Define enterprise marketing vision and lead marketing organizations.",
          },
        ],
        teachFeatures: [
          {
            title: "AI Marketing Portfolio",
            description:
              "Showcase campaigns planned, created, and optimized using AI tools.",
          },
          {
            title: "Ace Marketing Interviews",
            description:
              "Explain how you use AI to increase efficiency and ROI better than traditional marketers.",
          },
          {
            title: "Share AI Experiments",
            description:
              "Post comparisons of human vs. AI content performance to demonstrate expertise.",
          },
          {
            title: "Modern Marketer Resume",
            description:
              "Highlight your proficiency with AI tools alongside traditional marketing skills.",
          },
          {
            title: "Target Forward-Thinking Agencies",
            description:
              "Apply to agencies and companies that are embracing AI transformation.",
          },
          {
            title: "Network with Growth Hackers",
            description:
              "Connect with marketers who are always at the cutting edge of technology.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "$107 Billion",
            description: "AI in Marketing market size by 2028",
            source: "Statista",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Efficiency",
            description: "AI reduces content creation time by 50%",
            source: "HubSpot State of Marketing",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Adoption",
            description: "60% of marketers use AI in their workflows",
            source: "Salesforce",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Optimization",
            description: "Driving higher ROI through personalized ads.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$80k – $140k",
            description: "Premium for AI-skilled marketers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$6,000 - $11,000" },
          { location: "United Kingdom", montly: "$4,000 - $7,500" },
          { location: "Europe", montly: "$3,500 - $7,000" },
          { location: "Remote Roles", montly: "$2,000 - $5,500" },
        ],
        faqs: [
          {
            question: "How is AI used in marketing?",
            answer:
              "AI automates content creation, optimizes ad targeting, segments audiences, and provides deep analytics insights.",
          },
          {
            question: "Do I need technical skills?",
            answer:
              "No, this course is designed for marketers. You will learn to use AI tools, not program them.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What tools will I use?",
            answer:
              "ChatGPT, Jasper, Midjourney, Canva Magic, and AI features within Google/Meta Ads.",
          },
          {
            question: "Will this replace marketers?",
            answer:
              "No, but marketers who use AI will replace those who don't. This course ensures you are the former.",
          },
          {
            question: "Is this relevant for B2B or B2C?",
            answer:
              "Both. The principles of content efficiency and data targeting apply to all business models.",
          },
          {
            question: "Will I create a portfolio?",
            answer:
              "Yes, you will create a full marketing campaign strategy powered by AI, including copy, visuals, and planning.",
          },
          {
            question: "Are classes live?",
            answer:
              "Yes, weekly live sessions help you keep up with the incredibly fast-moving world of AI tools.",
          },
          {
            question: "How much time is required?",
            answer:
              "About 5-7 hours per week including classes and project work.",
          },
          {
            question: "Can I freelance with this?",
            answer:
              "Yes, AI allows you to offer high-quality services to more clients in less time.",
          },
        ],
      },
      {
        title: "AI SEO & GEO",
        slug: "ai-seo-and-geo",
        survey: "seo-ai-search",
        description:
          "Optimize content for search engines and generative AI platforms using modern SEO and GEO strategies.",
        imageSrc: "/assets/courses/ai-rankings.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.8,
        peopleInField: "AI Digital Marketing Specialists",
        heroFeatures: [
          {
            title: "Win Search Rankings With AI",
            features: [
              "The most practical SEO course for writers, marketers, and digital pros.",
              "AI-powered SEO, keyword research and more using real-time tools",
              "Build a portfolio that gets clients and employers to notice",
              "No fluff. Systems that bring in traffic, clients, and income",
            ],
          },
          {
            title: "Rank Higher. Work Smarter. Get Paid More.",
            features: [
              "Use tools like SEO tools and custom AI prompts to dominate SERPs",
              "Access mentorship and expert feedback to sharpen your strategy",
              "Optimize blogs, websites, and eCommerce platforms like a pro",
              "Land freelance gigs or remote roles with proof of work ",
            ],
          },
          {
            title: "Lead the Next Generation of SEO Pros. ",
            features: [
              "Join a global network of SEO learners using AI to drive traffic, visibility, and business results.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective AI Rankings & SEO Course",
          description:
            "This course equips you to dominate search visibility using the latest AI strategies, tools, and frameworks that drive real results in 2025 and beyond.",
          keyFeatures: [
            "No prior SEO or tech experience needed, we teach you from scratch.",
            "Learn to use AI tools like Surfer SEO, NeuronWriter, ChatGPT, Jasper, and Semrush.",
            "Master real-world SEO tasks: keyword research, content clustering, on-page optimization, and link building, all powered by AI.",
            "Create SEO-driven content that ranks and converts across Google, YouTube, and AI search engines like Perplexity and ChatGPT.",
            "Build and optimize your portfolio with guided projects for blogs, websites, and ecommerce platforms.",
            "Globally respected certification in AI-powered SEO and content marketing.",
            "Learn through live expert sessions, practical assignments, and step-by-step video tutorials.",
            "Access to ranking templates, prompts, workflows, and audit frameworks you can use for clients or your business.",
            "Get 1-on-1 mentorship, feedback, and accountability support from SEO professionals.",
            "Join a peer learning community to network, collaborate, and stay updated on trends.",
            "Benefit from mock audits, project reviews, and continuous support from our Placement Assistance Team (PAT).",
            "Virtual internship opportunities and job support in SEO, content strategy, and digital marketing roles.",
          ],
        },
        courseDemands: [
          {
            title: "SEO Is Changing Fast",
            description:
              "AI search engines like ChatGPT and Perplexity are reshaping how content gets discovered.",
          },
          {
            title: "Organic Traffic Value",
            description:
              "SEO drives 53% of all website traffic, making organic optimization skills invaluable.",
          },
          {
            title: "GEO Is Emerging",
            description:
              "Generative Engine Optimization is a new frontier, with early adopters gaining significant advantages.",
          },
          {
            title: "Evergreen Career Skill",
            description:
              "SEO expertise remains in constant demand as businesses compete for online visibility.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No SEO background? No problem. You’ll begin with search basics and master the new world of Generative Engine Optimization (GEO).",
          },
          {
            title: "Robust SEO/GEO Curriculum",
            description:
              "Learn Keyword Research, Technical SEO, Content Optimization, and strategies for ranking in AI search engines like Perplexity and SearchGPT.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, site audits, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as site optimization audits, GEO content strategies, and ranking improvement plans.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn how to make websites visible in the age of AI search.",
          },
          {
            title: "SEO Specialists",
            description:
              "Adapt to the biggest shift in search history and stay relevant.",
          },
          {
            title: "Content Creators",
            description:
              "Ensure your content gets found by both humans and AI bots.",
          },
          {
            title: "Freelancers",
            description:
              "Offer specialized GEO services that few others can provide.",
          },
          {
            title: "Founders",
            description:
              "Drive free, organic traffic to your product from day one.",
          },
          {
            title: "Students",
            description:
              "Master a high-value skill that drives direct revenue for companies.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Introduction to AI in SEO",
            modules: [
              {
                title: "Introduction to AI in SEO",
                lessons: [
                  "Introduction to AI in SEO",
                  "Traditional SEO vs AI-Powered SEO",
                  "Benefits of AI: Speed, Scale, Accuracy",
                  "Why AI is Reshaping SEO Strategy",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Prompt Engineering for SEO",
            modules: [
              {
                title: "Prompt Engineering for SEO",
                lessons: [
                  "Prompt Engineering Advanced Techniques",
                  "Chain-of-Thought (COT) for SEO",
                  "Few-shot & Zero-shot Prompts",
                  "System vs User Prompting",
                  "Role-Based & Context-Based Prompt Design",
                  "Multi-Step Prompt Workflows",
                  "LLM-Specific Prompt Tuning",
                  "Feedback Loop Re-Prompting",
                  "Embedding-Based Prompt Retrieval",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "AI-Driven Keyword Research & Clustering",
            modules: [
              {
                title: "AI-Driven Keyword Research & Clustering",
                lessons: [
                  "What is a Keyword + KeyPhrases?",
                  "Understanding Keyword Types",
                  "Automating Keyword Research Using AI",
                  "Keyword Research Using Google KW Tool",
                  "Detecting Keyword Intent with Algorithms",
                  "Clustering Keywords by Semantic Topics",
                  "Short-Tail vs Long-Tail Keyword Strategy",
                  "Primary vs Secondary Keyword Targeting",
                  "Analyzing Keywords Using ChatGPT & Gemini",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Content Strategy & Topical Authority",
            modules: [
              {
                title: "Content Strategy & Topical Authority",
                lessons: [
                  "Building AI-Based Topical Maps",
                  "Semantic Keyword Clustering",
                  "Content Gap Identification with AI",
                  "Pillar & Cluster Page Creation",
                  "AI-Driven Internal Linking",
                  "Mapping Primary & Supporting Keywords",
                  "Entity Relationships for Topical Depth",
                  "Clustering with Sheets + ChatGPT",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "AI Content Creation & Optimization",
            modules: [
              {
                title: "AI Content Creation & Optimization",
                lessons: [
                  "AI-Based Outline Generation",
                  "NLP-Driven Content Refinement",
                  "Semantic SEO with AI",
                  "E-E-A-T Focused Optimization",
                  "Writing Content for LLM Discovery & Retrieval",
                  "Entity-Rich Sentence Structuring",
                  "Trust-Building Content Language",
                  "Citation-Worthy Content Design",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Google E-E-A-T Optimization",
            modules: [
              {
                title: "Google E-E-A-T Optimization",
                lessons: [
                  "Google’s E-E-A-T & Semantic Scoring",
                  "Mapping E-E-A-T Principles with AI",
                  "Generating Trust Signals",
                  "Simulating Google Understanding",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Answer Engine Optimization (AEO)",
            modules: [
              {
                title: "Answer Engine Optimization (AEO)",
                lessons: [
                  "AEO vs Traditional SEO",
                  "Featured Snippet Optimization",
                  "People Also Ask Strategy",
                  "FAQ Schema with ChatGPT, Gemini, Claude",
                  "AI-Simulated Q&A Generation",
                  "Google SGE Optimization",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Generative Engine Optimization (GEO)",
            modules: [
              {
                title: "Generative Engine Optimization (GEO)",
                lessons: [
                  "What is GEO?",
                  "Becoming a Cited Source",
                  "Entity-Based Content Structuring",
                  "Simulate LLM Answer Output",
                  "AI-Friendly TL;DR Summaries",
                  "JSON-LD & Semantic HTML",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "AI-Enhanced On-Page Optimization",
            modules: [
              {
                title: "AI-Enhanced On-Page Optimization",
                lessons: [
                  "AI-Generated Schema Markup & Structured Data",
                  "Canonical URL Management",
                  "Internal & External Links",
                  "Do-Follow and No-Follow Links",
                  "Anchor Links & Anchor Text Best Practices",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Local SEO + AI-Powered GMB Optimization",
            modules: [
              {
                title: "Local SEO + AI-Powered GMB Optimization",
                lessons: [
                  "What is Local SEO and Why It Matters",
                  "Local SEO Ranking Factors (NAP, Reviews, etc.)",
                  "Google Business Profile Setup & Verification",
                  "Writing GMB Descriptions Using ChatGPT/Gemini",
                  "Weekly GMB Post Generation with AI",
                  "Seasonal/Local Trend Posts Using Google Trends + AI",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "AI-Enhanced Off-Page SEO & Link Building",
            modules: [
              {
                title: "AI-Enhanced Off-Page SEO & Link Building",
                lessons: [
                  "Identifying Backlink Opportunities with AI",
                  "Automating Outreach with Personalized Prompts",
                  "Predicting High-Value Link Prospects via AI",
                  "Backlink Quality Analysis (DA, PA, TF)",
                  "Spam Score Risk Reduction",
                  "Competitor Backlink Gap Analysis",
                  "Building Topical Link Relevance with AI",
                ],
              },
            ],
          },
          {
            id: "12",
            title: "AI-Enhanced Competitor Analysis",
            modules: [
              {
                title: "AI-Enhanced Competitor Analysis",
                lessons: [
                  "Real-Time Competitor Monitoring Using AI",
                  "Strategic Insight Generation from Competitor Data",
                  "Automated SWOT Analysis with AI",
                ],
              },
            ],
          },
          {
            id: "13",
            title: "Technical SEO with Live Projects",
            modules: [
              {
                title: "Technical SEO with Live Projects",
                lessons: [
                  "Google Search Console Setup",
                  "URL Inspection & Removal",
                  "Sitemap Configuration",
                  "Pages Crawl & Indexing Reports",
                  "Search Query Analysis",
                  "Content Optimization from GSC Queries",
                ],
              },
            ],
          },
          {
            id: "14",
            title: "Tools & Resources",
            modules: [
              {
                title: "Generative AI Tools for SEO",
                lessons: [
                  "ChatGPT (Free + Premium)",
                  "Google Gemini (Bard)",
                  "ChatGPT DALL·E Premium",
                  "Midjourney",
                  "Leonardo AI",
                ],
              },
              {
                title: "Trending SEO Tools",
                lessons: [
                  "Keyword Planner",
                  "ScreamingFrog (Paid)",
                  "SEMRush, Ahrefs",
                  "Google Page Speed Test",
                  "GTMetrix, PingDom",
                  "Google Trends",
                  "SEO WordPress Plugins",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "AI-Powered SEO Tools",
              "SEO & Performance Analytics",
              "SEO Automation",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Growth Strategy", "Campaign Optimization"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: AI Marketing Campaign",
            description: "Design and execute an AI-powered marketing campaign.",
          },
          {
            title: "Project 2: SEO & Performance Analytics",
            description: "Analyze and optimize digital marketing performance.",
          },
          {
            title: "Project 3: Marketing Automation",
            description: "Implement AI-driven marketing automation workflows.",
          },
          {
            title: "Project 4: Growth Strategy Dashboard",
            description:
              "Build dashboards to track and optimize growth metrics.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "SEO Specialist",
            description:
              "Assist with keyword research and basic on-page optimization.",
          },
          {
            current: false,
            title: "SEO/GEO Specialist",
            description:
              "Optimize content for search engines and AI-powered search platforms.",
          },
          {
            current: false,
            title: "AI Digital Marketing Specialist",
            description:
              "Use AI tools and data to optimize digital marketing campaigns.",
          },
          {
            current: false,
            title: "Senior SEO Specialist",
            description:
              "Lead organic search strategies and mentor junior specialists.",
          },
          {
            current: false,
            title: "Growth Marketer",
            description:
              "Drive user acquisition and engagement using data-driven strategies.",
          },
          {
            current: false,
            title: "Digital Marketing Lead",
            description: "Define and execute digital marketing strategy.",
          },
          {
            current: false,
            title: "VP of Marketing",
            description:
              "Lead marketing teams and define organizational marketing vision.",
          },
        ],
        teachFeatures: [
          {
            title: "SEO Case Study Portfolio",
            description:
              "Document how you improved rankings using AI content and technical optimization.",
          },
          {
            title: "Master SEO Interviews",
            description:
              "Be ready to discuss the future of search, SGE, and how to adapt strategies.",
          },
          {
            title: "Establish SEO Authority",
            description:
              "Share insights on the changing search landscape and Generative Engine Optimization.",
          },
          {
            title: "GEO-Ready Resume",
            description:
              "Position yourself as an expert in the new era of search engine visibility.",
          },
          {
            title: "Target Tech & Content Firms",
            description:
              "Apply to companies that rely heavily on organic traffic for growth.",
          },
          {
            title: "Network with SEO Pros",
            description:
              "Join communities discussing the rapid changes in search algorithms.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Search Shift",
            description: "Generative Search is transforming SEO",
            source: "Search Engine Land",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Organic Value",
            description: "SEO drives 1000%+ more traffic than social",
            source: "BrightEdge",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Adaptability",
            description: "New GEO strategies required for AI Engines",
            source: "Moz",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Visibility",
            description: "Ranking in ChatGPT and Perplexity results.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$70k – $120k",
            description: "Solid pay for technical SEO specialists",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$5,500 - $9,500" },
          { location: "United Kingdom", montly: "$3,500 - $6,500" },
          { location: "Europe", montly: "$3,000 - $6,000" },
          { location: "Remote Roles", montly: "$1,500 - $5,000" },
        ],
        faqs: [
          {
            question: "What is GEO?",
            answer:
              "Generative Engine Optimization. It's the new SEO for AI search engines like ChatGPT Search and Perplexity.",
          },
          {
            question: "Is SEO dead?",
            answer:
              "No, it's evolving. This course teaches you how to rank in both Google and the new wave of AI answer engines.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Do I need coding skills?",
            answer:
              "No, but understanding basic HTML structure (which we cover) helps with technical SEO.",
          },
          {
            question: "What tools do we use?",
            answer:
              "Google Search Console, Ahrefs/Semrush, SurferSEO, and various AI content detectors and generators.",
          },
          {
            question: "Will I learn technical SEO?",
            answer:
              "Yes, technical site health is crucial for AI bots to read your site. We cover audits and schema markup.",
          },
          {
            question: "Can I apply this to my own site?",
            answer:
              "Absolutely. Most students work on their own website or a client's site as their main project.",
          },
          {
            question: "How fast does this field change?",
            answer:
              "Daily. Our live classes are essential for discussing the latest algorithm updates and AI features.",
          },
          {
            question: "Is this for writers or techs?",
            answer:
              "Both. Modern SEO requires high-quality content (Writers) and site optimization (Techs).",
          },
          {
            question: "What is the earning potential?",
            answer:
              "SEO specialists are in high demand, and those who understand AI Search are currently unicorns in the market.",
          },
        ],
      },
      {
        title: "AI in Social Media Marketing",
        slug: "ai-in-social-media-marketing",
        survey: "social-media-marketing",
        description:
          "Use AI tools to plan, create, schedule, and analyze high-performing social media campaigns.",
        imageSrc: "/assets/courses/social-media.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.7,
        peopleInField: "Social Media Specialists",
        heroFeatures: [
          {
            title: "Launch Your Career in the World of Digital Influence",
            features: [
              "The most hands-on Social Media Marketing course with industry standard",
              "Content strategy, audience growth, and monetization across platforms",
              "Learn storytelling, trends, tools, and platform-specific hacks",
              "Build a real portfolio that attracts brands and businesses",
            ],
          },
          {
            title: "Create, Grow, and Monetize Like a Pro",
            features: [
              "Work on real campaigns for real results",
              "Get expert mentorship, weekly reviews, and access to community support",
              "Templates, strategy docs, and automation systems used by top marketers",
              "Land gigs, grow your brand, or launch a social media marketing agency",
            ],
          },
          {
            title: "From Africa to the Global Digital Economy",
            features: [
              "We’ll help you gain the skills, confidence, and support you need to thrive globally.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective Social Media Marketing Course",
          description:
            "This course is your step-by-step gateway into one of today’s most powerful and profitable digital careers.",
          keyFeatures: [
            "No prior marketing experience required, we’ll guide you from beginner to pro",
            "Hands-on training using industry-standard tools: Meta Ads, TikTok Ads Manager, Canva, Buffer, and more",
            "Real-world projects: campaign strategy, content planning, ad creation, analytics interpretation",
            "Globally recognized certification to boost your credibility and attract premium clients or job offers",
            "Career-focused learning: optimize your LinkedIn, build your portfolio, and craft compelling resumes",
            "Blend of live instructor-led sessions + on-demand video content — learn at your pace",
            "Access to downloadable templates, swipe files, and campaign worksheets",
            "1-on-1 mentorship, weekly Q&A support, and expert feedback on your campaigns",
            "Learn top-performing strategies for Meta, TikTok, LinkedIn, YouTube, and Instagram",
            "Join a peer community for collaboration, accountability, and consistent growth",
            "Get guidance on building a personal brand that attracts clients or employers",
            "Mock client briefs, freelance pricing tips, and job placement support through our Career Success Team",
          ],
        },
        courseDemands: [
          {
            title: "Social Media Dominance",
            description:
              "4.9 billion social media users make social marketing essential for every brand's strategy.",
          },
          {
            title: "AI Content Advantage",
            description:
              "AI tools help create more content faster, giving skilled marketers a competitive edge.",
          },
          {
            title: "Strong Job Market",
            description:
              "Social media marketing roles are growing rapidly, with AI skills commanding premium pay.",
          },
          {
            title: "Measurable Impact",
            description:
              "Social media analytics prove ROI, making this one of the most trackable marketing disciplines.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No social media background? No problem. You’ll begin with platform basics and use AI to supercharge content creation and strategy.",
          },
          {
            title: "Robust Social Media Curriculum",
            description:
              "Learn Platform Strategy, AI Content Generation (Visuals & Copy), Community Management, and Analytics.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, content clinics, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as managing brand accounts, creating viral content strategies, and analytics reports.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Turn your passion for social media into a scalable career.",
          },
          {
            title: "Social Media Managers",
            description:
              "Use AI to create weeks of content in hours and avoid burnout.",
          },
          {
            title: "Business Owners",
            description: "Build a brand presence without hiring a full agency.",
          },
          {
            title: "Freelancers",
            description:
              "Manage multiple client accounts efficiently with AI tools.",
          },
          {
            title: "Founders",
            description:
              "Build an audience for your startup using automated strategies.",
          },
          {
            title: "Students",
            description:
              "Learn professional digital communication skills applicable everywhere.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Social Media Foundations",
            modules: [
              {
                title: "Social Media Foundations",
                lessons: [
                  "Introduction to Social Media",
                  "Social Media Strategy and Planning",
                  "Social Media Channel Management",
                  "Social Media Management Tools",
                  "Social Media Measurement and Reporting",
                  "Social Advertising",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Advanced Social Media Marketing",
            modules: [
              {
                title: "Advanced Social Media Marketing",
                lessons: [
                  "Introduction to Social Media",
                  "Building a Sustainable Social Media Strategy",
                  "Converged Social Media",
                  "Content Marketing in a Social Media World",
                  "Visual Social Media",
                  "Understanding and Sparking Social Sharing",
                  "Storytelling – An Essential Part of Your Social Narrative",
                  "Influencer Marketing and Online Reputation Management",
                  "Social Media Selling",
                  "Social Media Measurement",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "YouTube and Video Marketing",
            modules: [
              {
                title: "YouTube and Video Marketing",
                lessons: [
                  "Establishing a Video Marketing Strategy",
                  "Gaining Exposure and Measuring Impact",
                  "YouTube Advertising",
                  "Leveraging Mobile Video",
                  "Promoting and Measuring Mobile Video",
                  "YouTube How-Tos",
                  "Instagram How-Tos",
                  "Video Ads on Different Social Media Channels",
                  "Impact of GDPR on YouTube Advertising",
                  "Video Advertising for B2B Marketers",
                  "The Future of Video Marketing",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Facebook Marketing and Advertising",
            modules: [
              {
                title: "Facebook Marketing and Advertising",
                lessons: [
                  "Understanding Facebook and the Facebook Algorithm",
                  "Groups, Pages, Messenger, and Facebook Live",
                  "Managing Facebook & Marketing Tools",
                  "Understanding and Creating Facebook Ads",
                  "Facebook Targeting, Tracking, and Reporting",
                  "Facebook Commerce and Best Practices",
                  "Facebook Privacy and Security",
                  "Facebook Blueprint Examinations",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Social Media Tools",
            modules: [
              {
                title: "Social Media Tools",
                lessons: [
                  "Twitter Marketing",
                  "Pinterest Marketing",
                  "LinkedIn Marketing",
                  "Instagram Marketing",
                  "Snapchat Marketing",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Advanced Content Marketing",
            modules: [
              {
                title: "Advanced Content Marketing",
                lessons: [
                  "Developing a Vision and Business Case for Content Marketing Success",
                  "Creating a Successful Content Marketing Strategy",
                  "Creating a Remarkable Editorial Mission Statement",
                  "Targeting Customer Intent and Key Influencers",
                  "Producing Help, Hub, and Hero Content Consistently",
                  "Using Effective B2C and B2B Content Marketing Tactics",
                  "Building Successful B2C and B2B Social Media Platforms",
                  "Helping Customers Find Information and Influencers Impact Decisions",
                  "Measuring Content Effectiveness and ROI",
                  "The Future of Content Marketing",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Advanced Web Analytics",
            modules: [
              {
                title: "Advanced Web Analytics",
                lessons: [
                  "Introduction to Digital Analytics and Fundamentals",
                  "Methodology – Lean Six Sigma",
                  "Data Analysis Fundamentals",
                  "Providing Insights and Enabling Capabilities",
                  "Managing Analytics",
                  "Audience, Acquisition, Behavior",
                  "Conversions & Onboarding",
                  "Retention, Expansion, and Advocacy",
                  "Privacy and Ethics",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "AI-Powered Social Marketing Tools",
              "SEO & Performance Analytics",
              "Marketing Automation",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Growth Strategy", "Campaign Optimization"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: AI Marketing Campaign",
            description: "Design and execute an AI-powered marketing campaign.",
          },
          {
            title: "Project 2: SEO & Performance Analytics",
            description: "Analyze and optimize digital marketing performance.",
          },
          {
            title: "Project 3: Marketing Automation",
            description: "Implement AI-driven marketing automation workflows.",
          },
          {
            title: "Project 4: Growth Strategy Dashboard",
            description:
              "Build dashboards to track and optimize growth metrics.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Social Media Specialist",
            description:
              "Create and manage engaging social media content and campaigns.",
          },
          {
            current: false,
            title: "AI Digital Marketing Specialist",
            description:
              "Use AI tools and data to optimize digital marketing campaigns.",
          },
          {
            current: false,
            title: "Senior Social Media Manager",
            description: "Lead social media strategy and mentor team members.",
          },
          {
            current: false,
            title: "Growth Marketer",
            description:
              "Drive user acquisition and engagement using data-driven strategies.",
          },
          {
            current: false,
            title: "Digital Marketing Lead",
            description: "Define and execute digital marketing strategy.",
          },
          {
            current: false,
            title: "Chief Marketing Officer",
            description:
              "Define enterprise marketing vision and lead marketing organizations.",
          },
        ],
        teachFeatures: [
          {
            title: "Social Media Portfolio",
            description:
              "Showcase viral content and consistent growth strategies powered by AI tools.",
          },
          {
            title: "Ace Social Interviews",
            description:
              "Demonstrate how you maintain high quality while scaling output with AI.",
          },
          {
            title: "Build a Personal Brand",
            description:
              "Use your own channels as a testing ground and proof of your skills.",
          },
          {
            title: "Social Media Resume",
            description:
              "Highlight metrics: growth percentages, engagement rates, and efficiency gains.",
          },
          {
            title: "Target Brand-Focused Companies",
            description:
              "Apply to companies that need a strong, consistent voice across platforms.",
          },
          {
            title: "Network with Creators",
            description:
              "Connect with other creators leveraging AI to stay updated on trends.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "4.9 Billion",
            description: "Social Media users worldwide",
            source: "Statista",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Content Scale",
            description: "AI enables 10x content output",
            source: "Sprout Social",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Engagement",
            description: "Short-form video dominates traffic",
            source: "TikTok Business",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Brand Growth",
            description: "Essential for B2C and B2B awareness.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$60k – $110k",
            description: "Salaries for Social Media Strategists",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$4,500 - $8,500" },
          { location: "United Kingdom", montly: "$3,000 - $6,000" },
          { location: "Europe", montly: "$2,500 - $5,500" },
          { location: "Remote Roles", montly: "$1,500 - $4,500" },
        ],
        faqs: [
          {
            question: "Can AI really write good posts?",
            answer:
              "Yes, if guided correctly. We teach you how to train AI on your brand voice so it doesn't sound robotic.",
          },
          {
            question: "What platforms do we cover?",
            answer: "Instagram, TikTok, LinkedIn, Twitter (X), and YouTube.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Will I learn video editing?",
            answer:
              "We focus on AI tools that edit video for you, generate captions, and repurpose long-form content.",
          },
          {
            question: "Is this for beginners?",
            answer:
              "Yes, it is suitable for total beginners and experienced social media managers looking to upskill.",
          },
          {
            question: "How does AI help with strategy?",
            answer:
              "AI can analyze competitor data and audience sentiment faster than humans, helping you plan better content.",
          },
          {
            question: "Will I build a portfolio?",
            answer:
              "Yes, you will build a portfolio of high-performing content and a growth strategy plan.",
          },
          {
            question: "Are classes live?",
            answer:
              "Yes, we have live workshops for content creation and strategy review.",
          },
          {
            question: "Do I need paid tools?",
            answer:
              "We show you both free and paid industry-standard tools. You can learn a lot with just the free versions.",
          },
          {
            question: "Can I manage clients with this?",
            answer:
              "Yes, the workflows we teach are designed to help you manage multiple accounts efficiently.",
          },
        ],
      },
      {
        title: "AI in Search Marketing",
        slug: "ai-in-search-marketing",
        survey: "search-engine-marketing",
        description:
          "Apply AI-driven strategies to paid search, performance marketing, attribution, and campaign optimization.",
        imageSrc: "/assets/courses/search-marketing.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online, interactive",
        rating: 4.9,
        peopleInField: "AI Market Researchers",
        heroFeatures: [
          {
            title:
              "Launch Your Career in the World’s Fastest Growing Digital Skill",
            features: [
              "The most practical Search Marketing course with industry needs",
              "Master Google Ads, YouTube Ads, and more digital strategies",
              "Real campaigns and build a performance-built portfolio",
              "Get certified. Get noticed. Get hired.",
            ],
          },
          {
            title:
              "Run, Optimize, and Profit as a Certified Search Marketing Pro",
            features: [
              "Practical mentorship and project-based learning",
              "Gain in-demand skills for result-driven paid advertising",
              "Resume optimization and live campaign breakdowns included",
              "Job-ready with internship support and growth mentorship",
            ],
          },
          {
            title: "Join the Next Generation of Paid Ads Specialists",
            features: [
              "Companies need pros who can turn clicks into customers, we’ll help you become that pro.",
            ],
          },
        ],
        whyJoin: {
          title: "Why This Is the Most Effective Search Marketing Course",
          description:
            "This course is your gateway into one of the most lucrative and in-demand digital marketing fields: Google Ads and YouTube Ads.",
          keyFeatures: [
            "No marketing background needed, we’ll teach you from scratch how paid ads work",
            "Hands-on learning with Google Ads, YouTube Ads, and performance analytics tools",
            "Campaign-based projects simulating real-world ad spend, targeting, and ROI tracking",
            "Certification recognized by global employers and local startups alike",
            "Career-focused training: resume revamp, case studies, and LinkedIn positioning",
            "Live instructor-led sessions + self-paced video modules for flexible learning",
            "Ad sandbox accounts to practice campaign setup, bidding, and optimization",
            "1-on-1 feedback, weekly strategy clinics, and performance audits",
            "Tools and frameworks aligned with top roles: Paid Ads Specialist, Performance Marketer, PPC Strategist",
            "Private peer community for collabs, accountability, and campaign critiques",
            "Mock interviews, job role simulations, and guidance from experienced marketers",
            "Virtual internship and job support through our Placement Assistance Team (PAT)",
          ],
        },
        courseDemands: [
          {
            title: "$500B+ Ad Market",
            description:
              "Digital advertising is a massive industry, with AI optimization driving better returns.",
          },
          {
            title: "Performance Focus",
            description:
              "Paid search delivers measurable results, making performance marketers highly valued.",
          },
          {
            title: "AI Bid Optimization",
            description:
              "AI-powered bidding strategies outperform manual approaches, requiring skilled practitioners.",
          },
          {
            title: "Strong Earning Potential",
            description:
              "Performance marketers with AI skills earn $70,000-$130,000+ globally.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No ads experience? No problem. You’ll begin with SEM basics and master AI-driven bidding and campaign management.",
          },
          {
            title: "Robust Search Marketing Curriculum",
            description:
              "Learn Google Ads, PPC Strategy, AI Bidding, Keyword Targeting, Conversion Optimization, and Analytics.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, campaign setups, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as setting up paid campaigns, optimizing ad spend, and creating performance reports.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Learn to manage marketing budgets and drive real revenue.",
          },
          {
            title: "Media Buyers",
            description:
              "Adapt to AI-driven bidding and automated campaign structures.",
          },
          {
            title: "Business Owners",
            description:
              "Stop wasting money on ads and learn to target customers effectively.",
          },
          {
            title: "Freelancers",
            description:
              "Offer high-value ad management services with clear ROI.",
          },
          {
            title: "Founders",
            description:
              "Acquire your first customers profitably using paid search.",
          },
          {
            title: "Students",
            description:
              "Master the mathematics of marketing and user acquisition.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Psychology of Search and Buying Funnel",
            modules: [
              {
                title: "Psychology of Search and Buying Funnel",
                lessons: [
                  "The Search Process and Advertiser's Role",
                  "Understanding the Buying Funnel",
                  "Target Users and Channels Throughout the Funnel",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Keyword Organization and Match Types",
            modules: [
              {
                title: "Keyword Organization and Match Types",
                lessons: [
                  "How Keywords Change During the Buying Funnel",
                  "Types of Keywords and Identifying Primary Searchers",
                  "Semantic vs Syntactic Match Types",
                  "Using Phrase Match and Semantic Match Types",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Keyword Research and Negative Keywords",
            modules: [
              {
                title: "Keyword Research and Negative Keywords",
                lessons: [
                  "Negative Keywords and Search Terms",
                  "N-Gram Analysis",
                  "Keyword Research Sources (Website, Analytics, Planner)",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Creating Compelling Ads and Advanced Features",
            modules: [
              {
                title: "Creating Compelling Ads and Advanced Features",
                lessons: [
                  "Ad Components, CTA, and Matching Buying Cycle",
                  "Dynamic Ad Customization",
                  "Prequalifying B2B Audiences",
                ],
              },
            ],
          },
          {
            id: "5",
            title: "Ad Testing and Extensions",
            modules: [
              {
                title: "Ad Testing and Extensions",
                lessons: [
                  "Types of Ad Testing and Metrics",
                  "Single and Multi Ad Group Testing",
                  "Ad Extensions (Informational, Interaction, Promotions)",
                ],
              },
            ],
          },
          {
            id: "6",
            title: "Campaign Settings, Targeting, and Budgets",
            modules: [
              {
                title: "Campaign Settings, Targeting, and Budgets",
                lessons: [
                  "Campaign Types and Networks",
                  "Setting Budgets and Reach",
                  "Location and Language Targeting",
                ],
              },
            ],
          },
          {
            id: "7",
            title: "Audience Types and Segmentation",
            modules: [
              {
                title: "Audience Types and Segmentation",
                lessons: [
                  "Remarketing, Customer Match, and Similar Lists",
                  "In-Market, Affinity, and Demographic Targeting",
                  "Segmenting Data and Creating Lists",
                  "Using Audience Lists (Targeting vs Observation, Insights)",
                ],
              },
            ],
          },
          {
            id: "8",
            title: "Display Network Advertising",
            modules: [
              {
                title: "Display Network Advertising",
                lessons: [
                  "Introduction to Display Network and Formats",
                  "Targeting Options (Contextual, Placement, Layered)",
                  "Display Ad Formats (Image vs Responsive)",
                ],
              },
            ],
          },
          {
            id: "9",
            title: "Goals, Bidding, and Measurement",
            modules: [
              {
                title: "Goals, Bidding, and Measurement",
                lessons: [
                  "Setting and Measuring Goals",
                  "Attribution Methods",
                  "Bidding Methods (Manual vs Automated)",
                  "Reporting, Dashboards, and Testing",
                ],
              },
            ],
          },
          {
            id: "10",
            title: "Account Organization and Management",
            modules: [
              {
                title: "Account Organization and Management",
                lessons: [
                  "Ad Group and Campaign Organization",
                  "Working with Multiple Accounts (Manager, Editor)",
                  "PPC Strategy Setup",
                  "Account Creation and Ongoing Management",
                ],
              },
            ],
          },
          {
            id: "11",
            title: "Quality Score",
            modules: [
              {
                title: "Quality Score",
                lessons: [
                  "Introduction to Quality Score and Ad Rank",
                  "Quality Score Diagnosis and Improvement",
                  "Using Pivot Tables for Analysis",
                ],
              },
            ],
          },
          {
            id: "12",
            title: "Advanced Campaigns and Tools",
            modules: [
              {
                title: "Advanced Campaigns and Tools",
                lessons: [
                  "Shopping and Video Campaigns",
                  "Automation and Other Tools",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "AI-Powered Search Marketing",
              "SEO & Market Analytics",
              "Marketing Automation",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Growth Strategy", "Campaign Optimization"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: AI Marketing Campaign",
            description: "Design and execute an AI-powered marketing campaign.",
          },
          {
            title: "Project 2: SEO & Performance Analytics",
            description: "Analyze and optimize digital marketing performance.",
          },
          {
            title: "Project 3: Marketing Automation",
            description: "Implement AI-driven marketing automation workflows.",
          },
          {
            title: "Project 4: Growth Strategy Dashboard",
            description:
              "Build dashboards to track and optimize growth metrics.",
          },
        ],
        courseCareerPath: [
          {
            current: false,
            title: "Performance Marketer",
            description:
              "Manage and optimize paid search campaigns for maximum ROI.",
          },
          {
            current: false,
            title: "AI Digital Marketing Specialist",
            description:
              "Use AI tools and data to optimize digital marketing campaigns.",
          },
          {
            current: false,
            title: "Senior Performance Marketer",
            description:
              "Lead complex paid search strategies and mentor team members.",
          },
          {
            current: false,
            title: "Growth Marketer",
            description:
              "Drive user acquisition and engagement using data-driven strategies.",
          },
          {
            current: false,
            title: "Digital Marketing Lead",
            description: "Define and execute digital marketing strategy.",
          },
          {
            current: false,
            title: "VP of Performance Marketing",
            description:
              "Lead performance marketing strategy and teams at scale.",
          },
        ],
        teachFeatures: [
          {
            title: "PPC Campaign Portfolio",
            description:
              "Showcase successful ad campaigns, demonstrating ROI and effective budget management.",
          },
          {
            title: "Master SEM Interviews",
            description:
              "Explain your strategies for bidding, targeting, and using AI for ad optimization.",
          },
          {
            title: "Share Performance Tips",
            description:
              "Write about your experiments with new ad formats and AI features.",
          },
          {
            title: "Performance Marketing Resume",
            description:
              "Focus on numbers—budget managed, ROAS achieved, and conversions driven.",
          },
          {
            title: "Target E-commerce & SaaS",
            description:
              "Apply to industries where paid acquisition is the primary growth engine.",
          },
          {
            title: "Network with Media Buyers",
            description:
              "Connect with professionals managing large ad spends to learn advanced tactics.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "$600 Billion",
            description: "Digital Ad Spend projected for 2024",
            source: "eMarketer",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "AI Bidding",
            description: "Smart Bidding drives 30% more conversions",
            source: "Google Ads",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "ROI Focus",
            description: "Performance marketing is highly valued",
            source: "HubSpot",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Acquisition",
            description: "Fastest way to acquire new customers.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$75k – $130k",
            description: "Strong earning potential for PPC experts",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$6,000 - $10,500" },
          { location: "United Kingdom", montly: "$4,000 - $7,500" },
          { location: "Europe", montly: "$3,500 - $7,000" },
          { location: "Remote Roles", montly: "$2,000 - $6,000" },
        ],
        faqs: [
          {
            question: "What is Search Marketing?",
            answer:
              "It involves Paid Search (PPC/SEM) where you pay to appear at the top of search results.",
          },
          {
            question: "How does AI fit in?",
            answer:
              "Google Ads and Bing use AI for bidding and targeting. We teach you how to leverage these algorithms for lower costs.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Do I need a budget for ads?",
            answer:
              "To practice live, a small budget helps, but we can teach the principles and setup without spending real money.",
          },
          {
            question: "What platforms are covered?",
            answer:
              "Primarily Google Ads (including YouTube) and Microsoft Ads.",
          },
          {
            question: "Is this math-heavy?",
            answer:
              "You need to be comfortable with numbers (ROI, CPC, CTR), but the platform handles the complex math.",
          },
          {
            question: "Will I learn about Copywriting?",
            answer:
              "Yes, specifically using AI to generate high-converting ad headlines and descriptions.",
          },
          {
            question: "What is the job market like?",
            answer:
              "Performance Marketers are directly tied to revenue, making them indispensable and well-paid.",
          },
          {
            question: "Are classes live?",
            answer:
              "Yes, weekly sessions allow us to look at real campaign data and optimize it together.",
          },
          {
            question: "Is Analytics included?",
            answer:
              "Yes, tracking conversions is half the battle. We cover setting up proper tracking.",
          },
        ],
      },
    ],
  },

  {
    category: "Product",
    categoryName: "School of Product",
    courses: [
      {
        title: "Product Design",
        slug: "product-design",
        survey: "product-design",
        description:
          "Learn user-centered design, UX research, wireframing, prototyping, and usability testing.",
        imageSrc: "/assets/courses/product-design.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.8,
        peopleInField: "Product Designers",
        heroFeatures: [
          {
            title: "Master the Art and Science of User-Centered Design",
            features: [
              "The most practical UI/UX course focused on real-world product needs",
              "Master Figma, wireframing, prototyping, and user research",
              "Execute end-to-end design sprints and build a professional portfolio",
              "Get certified. Build products. Get hired.",
            ],
          },
          {
            title: "Think, Design, and Solve as a Certified Product Designer",
            features: [
              "Practical mentorship and project-based learning with design leads",
              "Gain in-demand skills for creating high-impact user experiences",
              "Portfolio optimization and live design critique sessions included",
              "Job-ready with internship support and design career coaching",
            ],
          },
          {
            title: "Join the Next Generation of Product Design Leaders",
            features: [
              "Companies need designers who can turn complex problems into elegant solutions.",
            ],
          },
        ],
        whyJoin: {
          title: "Why Great Products Start with Great Design",
          description: "UI/UX design drives user satisfaction and retention.",
          keyFeatures: [
            "User-centered design principles",
            "Wireframing and prototyping",
            "Usability testing",
            "Real-world design projects",
            "In-demand product skills",
          ],
        },
        courseDemands: [
          {
            title: "Design-Driven Success",
            description:
              "Companies with great design outperform competitors by 200%, driving demand for UX talent.",
          },
          {
            title: "Growing Design Teams",
            description:
              "Tech companies are rapidly expanding design teams, creating abundant opportunities.",
          },
          {
            title: "Creative + Technical",
            description:
              "Product designers bridge creativity and technology, a rare and valuable skill combination.",
          },
          {
            title: "Strong Compensation",
            description:
              "Product designers earn $80,000-$160,000+ globally, with senior roles earning premium.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No design background? No problem. You’ll begin with design principles and master tools like Figma for professional prototyping.",
          },
          {
            title: "Robust Design Curriculum",
            description:
              "Learn UI/UX Fundamentals, User Research, Wireframing, Prototyping, Usability Testing, and Design Systems using Figma.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, design critiques, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as mobile app designs, web landing pages, and interactive prototypes.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Turn your creative eye into a professional tech career.",
          },
          {
            title: "Graphic Designers",
            description:
              "Transition from print or branding into high-paying UX/UI roles.",
          },
          {
            title: "Developers",
            description:
              "Learn to design your own projects and understand user experience.",
          },
          {
            title: "Freelancers",
            description: "Offer full design services for apps and websites.",
          },
          {
            title: "Founders",
            description:
              "Prototype your own ideas before spending money on development.",
          },
          {
            title: "Students",
            description:
              "Build a portfolio that demonstrates both creativity and problem-solving.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Design Thinking",
            modules: [
              {
                title: "UX Foundations",
                lessons: [
                  "Introduction to User Experience",
                  "The Design Thinking Process",
                  "User Research Methods",
                  "Creating User Personas",
                  "Information Architecture",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Interface Design",
            modules: [
              {
                title: "UI Fundamentals",
                lessons: [
                  "Visual Hierarchy and Layout",
                  "Typography and Color Theory",
                  "Design Systems Basics",
                  "Accessibility in Design",
                  "Introduction to Figma",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Prototyping",
            modules: [
              {
                title: "Interaction Design",
                lessons: [
                  "Low-Fidelity Wireframing",
                  "High-Fidelity Mockups",
                  "Building Clickable Prototypes",
                  "Micro-Interactions",
                  "Mobile vs Desktop Design",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Testing & Handoff",
            modules: [
              {
                title: "Production Ready",
                lessons: [
                  "Usability Testing Methods",
                  "Iterating based on Feedback",
                  "Preparing Assets for Developers",
                  "Documentation and Handoff",
                  "Portfolio Building",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "UX Research",
              "Wireframing & Prototyping",
              "Design Systems",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["User-Centered Design", "Portfolio Storytelling"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: User Research Study",
            description: "Conduct product-focused user research.",
          },
          {
            title: "Project 2: Wireframe & Prototype",
            description: "Design wireframes and interactive prototypes.",
          },
          {
            title: "Project 3: Usability Testing",
            description: "Test and improve product usability.",
          },
          {
            title: "Project 4: Product Design Portfolio",
            description: "Produce a complete product design case study.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Product Designer",
            description:
              "Design user-centered digital products from concept to delivery.",
          },
          {
            current: false,
            title: "Senior Product Designer",
            description: "Lead design initiatives across complex products.",
          },
          {
            current: false,
            title: "UX Lead",
            description: "Guide UX strategy and team direction.",
          },
          {
            current: false,
            title: "Design Manager",
            description: "Manage design teams and processes.",
          },
        ],
        teachFeatures: [
          {
            title: "Build A Stunning Design Portfolio",
            description:
              "Showcase your UI/UX case studies, wireframes, and prototypes on Behance, Dribbble, or a personal site.",
          },
          {
            title: "Master Design Challenges",
            description:
              "Get expert coaching on whiteboarding sessions, app critiques, and explaining your design thinking process.",
          },
          {
            title: "Establish Design Authority",
            description:
              "Share your design philosophy, case studies, and redesign concepts on Medium and LinkedIn.",
          },
          {
            title: "Create a UX/UI Optimized Resume",
            description:
              "Craft a visually appealing resume that highlights your tools (Figma), process, and impact on user metrics.",
          },
          {
            title: "Apply to Top Studios",
            description:
              "Learn to identify design-led companies and tailor your portfolio to their aesthetic and values.",
          },
          {
            title: "Network in the Design Community",
            description:
              "Connect with other designers, mentors, and hiring managers at design meetups and online communities.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "ROI of Design",
            description: "Design-led companies outperform S&P 500 by 211%",
            source: "DMI Design Value Index",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Talent Gap",
            description: "High demand for UX/UI designers globally",
            source: "Adobe Design Trends",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Tool Growth",
            description: "Figma proficiency is a top requested skill",
            source: "UX Design Institute",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "User Centric",
            description: "Key differentiator in software products.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$90k – $160k",
            description: "Competitive salaries for Product Designers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,000 - $13,000" },
          { location: "United Kingdom", montly: "$4,500 - $8,500" },
          { location: "Europe", montly: "$4,000 - $8,000" },
          { location: "Remote Roles", montly: "$2,000 - $6,500" },
        ],
        faqs: [
          {
            question: "Do I need to know how to draw?",
            answer:
              "No. Product Design is about problem-solving, layout, and usability, not artistic drawing skills.",
          },
          {
            question: "What tools will I learn?",
            answer:
              "The industry standard: Figma. We go deep into auto-layout, components, and prototyping.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What is UX vs UI?",
            answer:
              "UX (User Experience) is how it works and feels; UI (User Interface) is how it looks. We teach both.",
          },
          {
            question: "Will I build a portfolio?",
            answer:
              "Yes, the main outcome of this course is a case study portfolio you can use to apply for jobs.",
          },
          {
            question: "Do I need a Mac?",
            answer:
              "No, Figma runs in the browser and works great on Windows or Mac.",
          },
          {
            question: "Is coding involved?",
            answer:
              "No coding is required, though we teach you how to hand off designs to developers.",
          },
          {
            question: "Are classes live?",
            answer:
              "Yes, live design critiques are essential for improving your eye and skills.",
          },
          {
            question: "How much time is required?",
            answer: "Expect 6-10 hours a week. Design takes time and practice.",
          },
          {
            question: "Is career support included?",
            answer:
              "Yes, we help you structure your portfolio and prepare for whiteboard design challenges.",
          },
        ],
      },
      {
        title: "Product Development",
        slug: "product-development",
        survey: "product-development",
        description:
          "Understand how products are built end-to-end, working closely with engineering, design, and stakeholders.",
        imageSrc: "/assets/courses/business-development.webp",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.6,
        peopleInField: "Product Developers",
        heroFeatures: [
          {
            title: "Master the End-to-End Lifecycle of Product Development",
            features: [
              "The most practical course focused on the intersection of tech, design, and business",
              "Master technical specifications, system architecture, and MVP strategy",
              "Execute end-to-end product sprints and manage technical debt effectively",
              "Get certified. Ship products. Lead engineering teams.",
            ],
          },
          {
            title: "Think, Build, and Launch as a Certified Product Developer",
            features: [
              "Practical mentorship and project-based learning with industry tech leads",
              "Gain in-demand skills for building scalable and maintainable digital products",
              "Code reviews, architecture planning, and live technical sessions included",
              "Job-ready with career coaching for engineering and product roles",
            ],
          },
          {
            title: "Join the Next Generation of Product Development Leaders",
            features: [
              "Companies need professionals who can bridge the gap between complex engineering and user value.",
            ],
          },
        ],
        whyJoin: {
          title: "Why Product Thinking Matters",
          description: "Successful products align tech, design, and business.",
          keyFeatures: [
            "End-to-end product development",
            "Cross-functional collaboration",
            "Practical product workflows",
            "Stakeholder communication",
            "Real-world product mindset",
          ],
        },
        courseDemands: [
          {
            title: "Holistic Product Skills",
            description:
              "Understanding the full product lifecycle makes you valuable across development, design, and strategy.",
          },
          {
            title: "Cross-Functional Value",
            description:
              "Product development skills apply to engineering, design, and business roles alike.",
          },
          {
            title: "Startup Essential",
            description:
              "Product development expertise is critical for startups building from idea to launch.",
          },
          {
            title: "Career Versatility",
            description:
              "Product development knowledge opens paths to PM, engineering, and leadership roles.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No product background? No problem. You’ll begin with lifecycle basics and learn how to shepherd products from concept to launch.",
          },
          {
            title: "Robust Product Curriculum",
            description:
              "Learn Product Lifecycle, Agile Methodologies, Requirement Gathering, Stakeholder Management, and Go-to-Market strategies.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, case study reviews, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as product roadmaps, PRDs (Product Requirement Documents), and launch plans.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Understand the big picture of how tech products are actually made.",
          },
          {
            title: "Engineers",
            description:
              "Learn to think like a product owner and build things people actually want.",
          },
          {
            title: "Designers",
            description:
              "Understand the technical and business constraints of your work.",
          },
          {
            title: "Freelancers",
            description:
              "Offer holistic product consulting beyond just code or design.",
          },
          {
            title: "Founders",
            description:
              "Master the end-to-end process of building your company's product.",
          },
          {
            title: "Students",
            description:
              "Learn the cross-functional skills that define modern tech leadership.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Product Lifecycle",
            modules: [
              {
                title: "From Idea to Launch",
                lessons: [
                  "Stages of Product Development",
                  "Market Research and Validation",
                  "Problem-Solution Fit",
                  "Defining MVP (Minimum Viable Product)",
                  "The Role of a Product Developer",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Agile & Process",
            modules: [
              {
                title: "Building Efficiently",
                lessons: [
                  "Agile Manifesto and Scrum",
                  "Sprints, Standups, and Retrospectives",
                  "Writing User Stories",
                  "Managing the Backlog",
                  "Tools like Jira and Linear",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Stakeholder Management",
            modules: [
              {
                title: "Communication",
                lessons: [
                  "Working with Engineers",
                  "Collaborating with Designers",
                  "Managing Business Expectations",
                  "Prioritization Frameworks (RICE, MoSCoW)",
                  "Roadmapping Basics",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Launch & Growth",
            modules: [
              {
                title: "Go-to-Market",
                lessons: [
                  "Launch Strategies",
                  "Product Metrics (KPIs)",
                  "Gathering User Feedback",
                  "Iterating Post-Launch",
                  "Product-Led Growth Basics",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Product Lifecycle Management",
              "Agile Development",
              "MVP Development",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Cross-Functional Collaboration", "Product Execution"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: MVP Planning",
            description: "Plan and scope a minimum viable product.",
          },
          {
            title: "Project 2: Feature Development",
            description: "Develop and prioritize product features.",
          },
          {
            title: "Project 3: Agile Sprint Execution",
            description: "Execute product development using agile methods.",
          },
          {
            title: "Project 4: Product Launch Simulation",
            description: "Simulate a full product launch.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Product Developer",
            description:
              "Build and iterate digital products based on user needs.",
          },
          {
            current: false,
            title: "Product Engineer",
            description: "Bridge engineering and product execution.",
          },
          {
            current: false,
            title: "Technical Product Manager",
            description: "Manage technically complex products.",
          },
          {
            current: false,
            title: "Product Lead",
            description: "Oversee product development strategy.",
          },
        ],
        teachFeatures: [
          {
            title: "Product Launch Portfolio",
            description:
              "Document the products you've helped build, from concept to launch, highlighting your specific contributions.",
          },
          {
            title: "Ace Product Interviews",
            description:
              "Prepare for cross-functional interviews by demonstrating your ability to work with design, engineering, and business.",
          },
          {
            title: "Share Build Journeys",
            description:
              "Build in public or write about the challenges and solutions in your product development process.",
          },
          {
            title: "Product Developer Resume",
            description:
              "Highlight your versatility and understanding of the entire product lifecycle.",
          },
          {
            title: "Target Product-Led Growth Firms",
            description:
              "Apply to companies where product quality is the main driver of success.",
          },
          {
            title: "Network with Makers",
            description:
              "Connect with founders and builders in the indie hacker and startup communities.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "ROI of Design",
            description: "Design-led companies outperform S&P 500 by 211%",
            source: "DMI Design Value Index",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Talent Gap",
            description: "High demand for UX/UI designers globally",
            source: "Adobe Design Trends",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Tool Growth",
            description: "Figma proficiency is a top requested skill",
            source: "UX Design Institute",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "User Centric",
            description: "Key differentiator in software products.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$90k – $160k",
            description: "Competitive salaries for Product Designers",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$7,000 - $13,000" },
          { location: "United Kingdom", montly: "$4,500 - $8,500" },
          { location: "Europe", montly: "$4,000 - $8,000" },
          { location: "Remote Roles", montly: "$2,000 - $6,500" },
        ],
        faqs: [
          {
            question: "What is Product Development?",
            answer:
              "It covers the entire lifecycle of bringing a product to market: ideation, validation, prototyping, and launch.",
          },
          {
            question: "Is this for Engineers or Managers?",
            answer:
              "Both. It bridges the gap. It's ideal for founders, technical PMs, or engineers who want to build products.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "Will I learn coding?",
            answer:
              "We cover 'Low-Code/No-Code' tools to build MVPs fast, but deep coding is not the focus.",
          },
          {
            question: "What methodology do you teach?",
            answer:
              "We focus on Agile and Lean Startup methodologies—building, measuring, and learning quickly.",
          },
          {
            question: "Will I launch a real product?",
            answer:
              "The goal is to take an idea to a launchable MVP state by the end of the course.",
          },
          {
            question: "Do I need a team?",
            answer:
              "No, you can work individually, but we encourage collaboration with peers.",
          },
          {
            question: "Is this relevant for physical products?",
            answer:
              "The principles apply, but our focus and examples are on digital software products.",
          },
          {
            question: "Are classes live?",
            answer:
              "Yes, weekly live sessions help you iterate on your product with feedback.",
          },
          {
            question: "How does this help my career?",
            answer:
              "It gives you the 'product sense' that employers look for in senior leaders and founders.",
          },
        ],
      },
      {
        title: "Product Management",
        slug: "product-management",
        survey: "product-management",
        description:
          "Learn product strategy, roadmapping, stakeholder management, metrics, and agile product delivery.",
        imageSrc: "/assets/courses/productmanagement.webp",
        thumbnail: "/assets/courses/thumbnails/project-manager-thumbnail.jpg",
        nextCohortDate: "2026-01-15",
        duration: "8 Weeks",
        format: "live, online",
        rating: 4.9,
        peopleInField: "Product Managers",
        heroFeatures: [
          {
            title: "Master the End-to-End Lifecycle of Product Management",
            features: [
              "The most practical course focused on product strategy, discovery, and delivery",
              "Master product requirements, market analysis, and data-driven decision making",
              "Execute product roadmaps and manage stakeholder alignment effectively",
              "Get certified. Drive growth. Lead product teams.",
            ],
          },
          {
            title: "Think, Strategize, and Lead as a Certified Product Manager",
            features: [
              "Practical mentorship and case-study learning with industry PM leads",
              "Gain in-demand skills for building customer-centric and successful digital products",
              "Product teardowns, strategy workshops, and live prioritization sessions included",
              "Job-ready with career coaching for PM and product leadership roles",
            ],
          },
          {
            title: "Join the Next Generation of Product Management Leaders",
            features: [
              "Companies need professionals who can bridge the gap between business strategy, user needs, and technology.",
            ],
          },
        ],
        whyJoin: {
          title: "Why Product Managers Drive Success",
          description: "PMs turn ideas into successful products.",
          keyFeatures: [
            "Product strategy and roadmapping",
            "Metrics and decision-making",
            "Agile product delivery",
            "Stakeholder alignment",
            "Leadership-ready skills",
          ],
        },
        courseDemands: [
          {
            title: "Strategic Leadership Role",
            description:
              "Product managers are the CEOs of their products, driving strategy and execution.",
          },
          {
            title: "Explosive PM Demand",
            description:
              "Product management roles have grown 35% year-over-year as companies prioritize product-led growth.",
          },
          {
            title: "Top Compensation",
            description:
              "Product managers earn $100,000-$200,000+ globally, with CPOs earning significantly more.",
          },
          {
            title: "Path to Leadership",
            description:
              "PM experience is the most common background for tech executives and founders.",
          },
        ],
        whyLearnAndJob: [
          {
            title: "Start from Scratch, Grow to Expert",
            description:
              "No management background? No problem. You’ll begin with PM fundamentals and master the art of leading product teams.",
          },
          {
            title: "Robust Management Curriculum",
            description:
              "Learn Product Strategy, User Research, Agile/Scrum, Data-Driven Decision Making, and Strategic Communication.",
          },
          {
            title: "Join Live Weekly Classes",
            description:
              "Learn from top instructors in real-time, with live demos, strategy workshops, and Q&A sessions to deepen your understanding.",
          },
          {
            title: "Build Real-World Projects",
            description:
              "You’ll complete 3–5 portfolio worthy projects such as comprehensive product strategies, feature prioritizations, and market analysis reports.",
          },
        ],
        whoShouldEnrol: [
          {
            title: "Beginners",
            description:
              "Step into one of the most influential and high-paying roles in tech.",
          },
          {
            title: "Engineers/Designers",
            description:
              "Transition from individual contributor to strategic leader.",
          },
          {
            title: "Business Analysts",
            description:
              "Move from analyzing data to making the decisions that shape the product.",
          },
          {
            title: "Freelancers",
            description:
              "Offer strategic product leadership to early-stage startups.",
          },
          {
            title: "Founders",
            description:
              "Learn frameworks to prioritize features and find product-market fit.",
          },
          {
            title: "Students",
            description:
              "Develop the business acumen and technical literacy required for modern leadership.",
          },
        ],
        syllabus: [
          {
            id: "1",
            title: "Strategic Foundation",
            modules: [
              {
                title: "Product Vision",
                lessons: [
                  "What is Product Management?",
                  "Defining Vision and Strategy",
                  "Market Analysis & Competitors",
                  "Value Proposition Design",
                  "Business Models (SaaS, Marketplace)",
                ],
              },
            ],
          },
          {
            id: "2",
            title: "Discovery & Definition",
            modules: [
              {
                title: "Understanding Users",
                lessons: [
                  "Customer Discovery Interviews",
                  "Creating PRDs (Product Req Docs)",
                  "User Journey Mapping",
                  "Feature Prioritization Frameworks",
                  "Defining Success Metrics",
                ],
              },
            ],
          },
          {
            id: "3",
            title: "Execution & Delivery",
            modules: [
              {
                title: "Shipping Products",
                lessons: [
                  "Agile & Scrum for PMs",
                  "Working with Cross-Functional Teams",
                  "Managing Stakeholders",
                  "Conflict Resolution",
                  "Launch Planning",
                ],
              },
            ],
          },
          {
            id: "4",
            title: "Data & Growth",
            modules: [
              {
                title: "Data-Driven Decisions",
                lessons: [
                  "Product Analytics (Mixpanel/Amplitude)",
                  "A/B Testing and Experimentation",
                  "Retention and Churn Analysis",
                  "Growth Loops and Viral Mechanics",
                  "PM Career Growth",
                ],
              },
            ],
          },
        ],
        skillsToMaster: [
          {
            title: "Technical Skills",
            skills: [
              "Product Roadmapping",
              "User Requirement Analysis",
              "Data-Informed Decisions",
            ],
          },
          {
            title: "Professional & Career Skills",
            skills: ["Leadership & Communication", "Stakeholder Management"],
          },
        ],
        courseProjects: [
          {
            title: "Project 1: Product Roadmap",
            description: "Develop a strategic product roadmap.",
          },
          {
            title: "Project 2: User Requirement Analysis",
            description: "Gather and prioritize user requirements.",
          },
          {
            title: "Project 3: Stakeholder Management",
            description: "Manage cross-functional stakeholders.",
          },
          {
            title: "Project 4: Product Strategy Case Study",
            description: "Deliver a complete product strategy case study.",
          },
        ],
        courseCareerPath: [
          {
            current: true,
            title: "Product Manager",
            description:
              "Define product vision, roadmap, and execution strategy.",
          },
          {
            current: false,
            title: "Senior Product Manager",
            description: "Own large product initiatives and mentor teams.",
          },
          {
            current: false,
            title: "Group Product Manager",
            description: "Lead multiple product lines.",
          },
          {
            current: false,
            title: "Head of Product",
            description: "Define overall product strategy and leadership.",
          },
        ],
        teachFeatures: [
          {
            title: "Build a PM Portfolio",
            description:
              "Showcase PRDs, roadmaps, and case studies of features you've managed and shipped.",
          },
          {
            title: "Master PM Case Studies",
            description:
              "Learn frameworks to crack the toughest product sense, execution, and leadership interview questions.",
          },
          {
            title: "Establish Product Thought Leadership",
            description:
              "Share your perspectives on product trends, frameworks, and strategy on LinkedIn and Substack.",
          },
          {
            title: "Create a PM-Optimized Resume",
            description:
              "Focus on outcomes, leadership, and metrics—show how you moved the needle for the business.",
          },
          {
            title: "Apply to Top Tech Companies",
            description:
              "Identify companies with strong product cultures (APM programs) and tailor your application.",
          },
          {
            title: "Network with Product Leaders",
            description:
              "Connect with CPOs, VPs of Product, and other PMs to find mentorship and opportunities.",
          },
        ],
        industryStats: [
          {
            icon: "/assets/icons/trend-up.svg",
            title: "Mini-CEO",
            description: "PMs are critical for tech company success",
            source: "HBR",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "29% Growth",
            description: "PM roles growing faster than average",
            source: "CNN Money",
          },
          {
            icon: "/assets/icons/chart-up.svg",
            title: "Leadership",
            description: "Top path to C-Suite roles in Tech",
            source: "Product Plan",
          },
          {
            icon: "/assets/icons/market-up.svg",
            title: "Vision",
            description: "Defining the 'What' and 'Why' of products.",
            source: "McKinsey Global AI Report",
          },
          {
            icon: "/assets/icons/dollar-up.svg",
            title: "$120k – $200k",
            description: "Lucrative compensation for PMs",
            source: "Glassdoor, Levels.fyi",
          },
        ],
        salaryInsights: [
          { location: "United States", montly: "$9,500 - $16,000" },
          { location: "United Kingdom", montly: "$6,000 - $10,500" },
          { location: "Europe", montly: "$5,500 - $9,500" },
          { location: "Remote Roles", montly: "$3,000 - $8,500" },
        ],
        faqs: [
          {
            question: "Do I need a tech background?",
            answer:
              "Not necessarily, but you need to be tech-literate. We teach you how to talk to engineers.",
          },
          {
            question: "What does a PM actually do?",
            answer:
              "A PM sets the vision, prioritizes what to build, and ensures the team delivers value to the customer.",
          },
          {
            question: "Will I earn a certificate after the course?",
            answer:
              "Yes, if the course supports certification, you will be issued a certificate upon completion. Please check the specific course details to confirm certification availability.",
          },
          {
            question: "What payment methods are accepted?",
            answer:
              "You will be paying through secure payment gateways like card, bank transfers and even remita when available.",
          },
          {
            question: "How long will I have access to the course materials?",
            answer: "Lifetime Access once payment confirmed.",
          },
          {
            question: "What tools will I learn?",
            answer: "Jira, Linear, Notion, Mixpanel, and roadmapping tools.",
          },
          {
            question: "Will I learn Agile/Scrum?",
            answer:
              "Yes, these are the standard operating systems for modern tech teams.",
          },
          {
            question: "How do I build a portfolio without a job?",
            answer:
              "We help you create case studies and 'unsolicited redesigns' that demonstrate your product thinking.",
          },
          {
            question: "Is the salary really that high?",
            answer:
              "Yes, PMs are often paid similarly to software engineers due to their high impact on business success.",
          },
          {
            question: "Are classes live?",
            answer:
              "Yes, live sessions are used for mock interviews and strategy workshops.",
          },
          {
            question: "Is this course recognized?",
            answer:
              "Our curriculum aligns with global standards and prepares you for FAANG-style PM interviews.",
          },
          {
            question: "Can I transition from Marketing/Sales?",
            answer:
              "Yes, these backgrounds are very common for PMs. We help you translate your existing skills.",
          },
        ],
      },
    ],
  },
];

// Menus
export const megaMenuData = [
  {
    id: "individuals",
    title: "Ayonaire for Individuals",
    sections: [
      {
        category: "Schools",
        links: [
          { label: "AI School", link: "/schools/ai" },
          { label: "Data School", link: "/schools/data" },
          { label: "Product School", link: "/schools/product" },
          { label: "Cyber Security School", link: "/schools/cybersecurity" },
          {
            label: "Software Engineering School",
            link: "/schools/software-engineering",
          },
          { label: "Cloud & DevOps School", link: "/schools/cloud-devops" },
          { label: "Marketing School", link: "/schools/marketing" },
        ],
      },
      {
        category: "Top Courses",
        links: [
          { label: "AI Engineering", link: "/courses/ai-engineering" },
          {
            label: "Agentic Engineering",
            link: "/courses/agentic-ai-engineering",
          },
          { label: "UI/UX Design", link: "/courses/product-design" },
          {
            label: "Gen in Data Analytics",
            link: "/courses/python-for-data-analytics",
          },
          {
            label: "Gen AI in Business Analytics",
            link: "/courses/certified-data-analytics",
          },
          {
            label: "Gen AI in Data Science",
            link: "/courses/certified-data-science",
          },
          {
            label: "Business Development",
            link: "/courses/business-development",
          },
          {
            label: "Cloud & DevOps",
            link: "/courses/cloud-devops",
          },
        ],
      },
    ],
  },
  {
    id: "business",
    title: "Ayonaire for Business",
    sections: [
      {
        category: "Grow with Ayonaire",
        links: [
          { label: "Business", href: "/business" },
          { label: "Ayonaire Impact", href: "/impact" },
          { label: "Ayonaire for Kids", href: "/kids" },
          { label: "Courses", href: "/courses" },
          { label: "Blogs", href: "/blog" },
          { label: "AI Challenges", href: "/ai-challenges" },
          { label: "Hire Talent", href: "/hire-talent" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      {
        category: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Our Story", href: "/our-story" },
          { label: "Learning Champions", href: "/learning-champions" },
          { label: "Our Partners", href: "/partners" },
          { label: "Become a Trainer", href: "/become-an-instructor" },
          { label: "Alumni", href: "/alumni" },
          { label: "Careers", href: "/careers" },
          { label: "Business Network", href: "/business-network" },
          { label: "Podcast", href: "/podcast" },
        ],
      },
    ],
  },
  {
    id: "survey",
    title: "Ayonaire Survey",
    sections: [
      {
        category: "Cyber, Cloud & Dev",
        links: [
          {
            label: "Cybersecurity",
            link: "/courses/certified-cybersecurity/eligibility-test",
          },
          {
            label: "Ethical Hacking",
            link: "/courses/certified-ethical-hacking/eligibility-test",
          },
          {
            label: "Cloud Engineering",
            link: "/courses/certified-cloud-engineering/eligibility-test",
          },
          {
            label: "DevOps Engineering",
            link: "/courses/certified-devops-engineering/eligibility-test",
          },
          {
            label: "Full-Stack Development",
            link: "/courses/full-stack-development/eligibility-test",
          },
          {
            label: "Front-End Development",
            link: "/courses/front-end-development/eligibility-test",
          },
          {
            label: "Python Training",
            link: "/courses/certified-python-expert/eligibility-test",
          },
          {
            label: "Software Eng Python",
            link: "/courses/software-engineering-with-python/eligibility-test",
          },
          {
            label: "Sql For Analysis",
            link: "/courses/sql-for-data-analytics/eligibility-test",
          },
          {
            label: "Python For Analysis",
            link: "/courses/python-for-data-analytics/eligibility-test",
          },
        ],
      },
      {
        category: "AI & Machine Learning",
        links: [
          {
            label: "AI Engineering",
            link: "/courses/ai-engineering/eligibility-test",
          },
          // {
          //   label: "Gen AI Engineering",
          //   link: "/courses/generative-ai-engineering",
          // },
          {
            label: "Agentic AI",
            link: "/courses/agentic-ai-engineering/eligibility-test",
          },
          {
            label: "NLP expert",
            link: "/courses/certified-nlp-specialist/eligibility-test",
          },
          {
            label: "ML Expert",
            link: "/courses/certified-ml-for-ai/eligibility-test",
          },
          {
            label: "Deep Learning (B-A)",
            link: "/courses/deep-learning-specialist/eligibility-test",
          },
          {
            label: "Maths & Stats for AI",
            link: "/courses/mathematics-and-statistics-for-ai/eligibility-test",
          },
          {
            label: "Prompt Engineering",
            link: "/courses/prompt-engineering/eligibility-test",
          },
          {
            label: "ML for Data Pros",
            link: "/courses/ml-for-data-analytics/eligibility-test",
          },
          {
            label: "Big Data Spark",
            link: "/courses/big-data-for-apache-spark/eligibility-test",
          },
        ],
      },

      {
        category: "Data, Product & Marketing",
        links: [
          {
            label: "Data Science",
            link: "/courses/certified-data-science/eligibility-test",
          },
          {
            label: "Data Analytics",
            link: "/courses/certified-data-analytics/eligibility-test",
          },
          {
            label: "Data Engineering",
            link: "/courses/certified-data-engineering/eligibility-test",
          },
          {
            label: "Data Analysis (Power BI)",
            link: "/courses/power-bi-analytics/eligibility-test",
          },
          {
            label: "Data Analysis (Tableau)",
            link: "/courses/tableau-analytics/eligibility-test",
          },
          {
            label: "Maths & Stats for DS",
            link: "/courses/math-and-stats-for-data-science/eligibility-test",
          },
          {
            label: "Product Design",
            link: "/courses/product-design/eligibility-test",
          },
          {
            label: "Product Development",
            link: "/courses/product-development/eligibility-test",
          },
          {
            label: "Product Management",
            link: "/courses/product-management/eligibility-test",
          },
          {
            label: "AI Digital Marketing",
            link: "/courses/ai-in-digital-marketing/eligibility-test",
          },
        ],
      },
    ],
  },
];

// Mobile Menu Data for page-based navigation
export const mobileMenuData = [
  {
    id: "hire-talent",
    title: "Hire Talent",
    href: "/hire-talent",
    hasChildren: false,
  },
  {
    id: "for-business",
    title: "Business",
    href: "/business",
    hasChildren: false,
  },
  {
    id: "ayonaire-learn",
    title: "Ayonaire Learn",
    icon: "/assets/icons/person-primary.svg",
    hasChildren: true,
    isHighlighted: true, // Orange color
    children: [
      { label: "School of AI", href: "/schools/ai" },
      { label: "School of Data", href: "/schools/data" },
      { label: "School of Product", href: "/schools/product" },
      { label: "School of Cloud", href: "/schools/cloud-devops" },
      { label: "School of Cyber Security", href: "/schools/cybersecurity" },
      { label: "School of Engineering", href: "/schools/software-engineering" },
      { label: "School of Marketing", href: "/schools/marketing" },
    ],
  },
  {
    id: "courses",
    title: "Courses",
    icon: "/assets/icons/feature-book.svg",
    hasChildren: true,
    children: [
      {
        label: "AI Courses",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "AI Engineering",
            href: "/courses/ai-engineering",
          },
          {
            label: "Generative AI",
            href: "/courses/generative-ai-engineering",
          },
          {
            label: "Agentic AI",
            href: "/courses/agentic-ai-engineering",
          },
          {
            label: "NLP Specialist",
            href: "/courses/certified-nlp-specialist",
          },
          {
            label: "Machine Learning",
            href: "/courses/certified-ml-for-ai",
          },
          {
            label: "Deep Learning",
            href: "/courses/deep-learning-specialist",
          },
          {
            label: "Math & Stats for AI",
            href: "/courses/mathematics-and-statistics-for-ai",
          },
          {
            label: "Prompt Engineering",
            href: "/courses/prompt-engineering",
          },
        ],
      },
      {
        label: "Data Courses",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Data Science",
            href: "/courses/certified-data-science",
          },
          {
            label: "Data Analytics",
            href: "/courses/certified-data-analytics",
          },
          {
            label: "Data Engineering",
            href: "/courses/certified-data-engineering",
          },
          { label: "Power BI Analytics", href: "/courses/power-bi-analytics" },
          { label: "Tableau Analytics", href: "/courses/tableau-analytics" },
          { label: "ML for Data Pros", href: "/courses/ml-for-data-analytics" },
          {
            label: "Maths & Stats for Data",
            href: "/courses/math-and-stats-for-data-science",
          },
          { label: "SQL for Data", href: "/courses/sql-for-data-analytics" },
          {
            label: "Python for Data",
            href: "/courses/python-for-data-analytics",
          },
          {
            label: "Big Data with Spark",
            href: "/courses/big-data-for-apache-spark",
          },
          { label: "Business Analytics", href: "/courses/business-analytics" },
          {
            label: "Business Development",
            href: "/courses/business-development",
          },
        ],
      },
      {
        label: "Cloud Courses",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Cloud Engineering",
            href: "/courses/certified-cloud-engineering",
          },
          {
            label: "DevOps Engineering",
            href: "/courses/certified-devops-engineering",
          },
        ],
      },
      {
        label: "Cyber Security Courses",
        href: "#",
        hasChildren: true,
        children: [
          { label: "Cyber Security", href: "/courses/certified-cybersecurity" },
          {
            label: "Ethical Hacking",
            href: "/courses/certified-ethical-hacking",
          },
        ],
      },
      {
        label: "Product Courses",
        href: "#",
        hasChildren: true,
        children: [
          { label: "Product Design", href: "/courses/product-design" },
          {
            label: "Product Development",
            href: "/courses/product-development",
          },
          { label: "Project Management", href: "/courses/product-management" },
        ],
      },
      {
        label: "Marketing Courses",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Digital Marketing",
            href: "/courses/ai-in-digital-marketing",
          },
          {
            label: "Social Media Marketing",
            href: "/courses/ai-in-social-media-marketing",
          },
        ],
      },
      {
        label: "Development Courses",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Full-Stack Web Dev",
            href: "/courses/full-stack-development",
          },
          {
            label: "Front-End Web Dev",
            href: "/courses/front-end-development",
          },
          {
            label: "Python Programming",
            href: "/courses/certified-python-expert",
          },
          {
            label: "Python Software Engineering",
            href: "/courses/software-engineering-with-python",
          },
        ],
      },
    ],
  },
  {
    id: "survey",
    title: "Survey",
    icon: "/assets/icons/list-primary.svg",
    hasChildren: true,
    children: [
      {
        label: "AI Survey",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "AI Engineering",
            href: "/courses/ai-engineering/eligibility-test",
          },
          {
            label: "Generative AI",
            href: "/courses/generative-ai-engineering/eligibility-test",
          },
          {
            label: "Agentic AI",
            href: "/courses/agentic-ai-engineering/eligibility-test",
          },
          {
            label: "NLP Specialist",
            href: "/courses/certified-nlp-specialist/eligibility-test",
          },
          {
            label: "Machine Learning",
            href: "/courses/certified-ml-for-ai/eligibility-test",
          },
          {
            label: "Deep Learning",
            href: "/courses/deep-learning-specialist/eligibility-test",
          },
          {
            label: "Math & Stats for AI",
            href: "/courses/mathematics-and-statistics-for-ai/eligibility-test",
          },
          {
            label: "Prompt Engineering",
            href: "/courses/prompt-engineering/eligibility-test",
          },
        ],
      },
      {
        label: "Data Survey",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Data Science",
            href: "/courses/certified-data-science/eligibility-test",
          },
          {
            label: "Data Analytics",
            href: "/courses/certified-data-analytics/eligibility-test",
          },
          {
            label: "Data Engineering",
            href: "/courses/certified-data-engineering/eligibility-test",
          },
          {
            label: "Power BI Analytics",
            href: "/courses/power-bi-analytics/eligibility-test",
          },
          {
            label: "Tableau Analytics",
            href: "/courses/tableau-analytics/eligibility-test",
          },
          {
            label: "ML for Data Pros",
            href: "/courses/ml-for-data-analytics/eligibility-test",
          },
          {
            label: "Maths & Stats for Data",
            href: "/courses/math-and-stats-for-data-science/eligibility-test",
          },
          {
            label: "SQL for Data",
            href: "/courses/sql-for-data-analytics/eligibility-test",
          },
          {
            label: "Python for Data",
            href: "/courses/python-for-data-analytics/eligibility-test",
          },
          {
            label: "Big Data with Spark",
            href: "/courses/big-data-for-apache-spark/eligibility-test",
          },
          {
            label: "Business Analytics",
            href: "/courses/business-analytics/eligibility-test",
          },
          {
            label: "Business Development",
            href: "/courses/business-development/eligibility-test",
          },
        ],
      },
      {
        label: "Cloud Survey",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Cloud Engineering",
            href: "/courses/certified-cloud-engineering/eligibility-test",
          },
          {
            label: "DevOps Engineering",
            href: "/courses/certified-devops-engineering/eligibility-test",
          },
        ],
      },
      {
        label: "Cyber Security Survey",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Cyber Security",
            href: "/courses/certified-cybersecurity/eligibility-test",
          },
          {
            label: "Ethical Hacking",
            href: "/courses/certified-ethical-hacking/eligibility-test",
          },
        ],
      },
      {
        label: "Product Survey",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Product Design",
            href: "/courses/product-design/eligibility-test",
          },
          {
            label: "Product Development",
            href: "/courses/product-development/eligibility-test",
          },
          {
            label: "Project Management",
            href: "/courses/product-management/eligibility-test",
          },
        ],
      },
      {
        label: "Marketing Survey",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Digital Marketing",
            href: "/courses/ai-in-digital-marketing/eligibility-test",
          },
          {
            label: "Social Media Marketing",
            href: "/courses/ai-in-social-media-marketing/eligibility-test",
          },
        ],
      },
      {
        label: "Development Survey",
        href: "#",
        hasChildren: true,
        children: [
          {
            label: "Full-Stack Web Dev",
            href: "/courses/full-stack-development/eligibility-test",
          },
          {
            label: "Front-End Web Dev",
            href: "/courses/front-end-development/eligibility-test",
          },
          {
            label: "Python Programming",
            href: "/courses/certified-python-expert/eligibility-test",
          },
          {
            label: "Python Software Engineering",
            href: "/courses/software-engineering-with-python/eligibility-test",
          },
        ],
      },
    ],
  },
  {
    id: "more",
    title: "More",
    icon: "/assets/icons/three-dots.svg",
    hasChildren: true,
    children: [
      // Desktop More items
      { label: "Become a Partner", href: "/business" },
      { label: "Become an Instructor", href: "/become-an-instructor" },
      { label: "Verify Certificate", href: "/certificate/verify" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Reseller Partner", href: "/reseller-partner" },
      // Original mobile More items
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/our-story" },
      { label: "Get Started", href: "/get-started" },
      { label: "Be a Trainer", href: "/become-an-instructor" },
      { label: "Verify Certificate's", href: "/certificate/verify" },
    ],
  },
];

// Desktop More Dropdown Items
export const desktopMoreMenuItems = [
  { label: "Become a Partner", href: "/business" },
  { label: "Become an Instructor", href: "/become-an-instructor" },
  { label: "Verify Certificate", href: "/certificate/verify" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Reseller Partner", href: "/reseller-partner" },
];
