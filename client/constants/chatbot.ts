// Chatbot Types
export interface ChatMessage {
  id: string;
  type: "bot" | "user" | "system" | "form" | "joined" | "program-selection";
  content?: string;
  timestamp?: Date;
  avatar?: "ayobami" | "bot";
  phoneLink?: string;
  file?: {
    name: string;
    size: string;
    type: "audio" | "document";
    url: string;
    duration?: string; // For audio
  };
  actions?: ChatAction[];
  formData?: ChatFormData;
}

export interface ChatAction {
  id: string;
  label: string;
  type: "primary" | "secondary";
  href?: string;
}

export interface ChatFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  registration: string;
  agreeToTerms: boolean;
}

export interface ChatProgram {
  id: string;
  name: string;
  slug: string;
  type: "primary" | "secondary";
}

export interface ChatCourseDetails {
  name: string;
  fullPrice: string;
  discountedPrice: string;
  highlights?: string[];
}

// Registration options
export const registrationOptions = [
  { value: "yourself", label: "Registering For Yourself" },
  { value: "someone", label: "Registering For Someone Else" },
  { value: "company", label: "Registering For A Company" },
];

// Quick action buttons
export const quickActions: ChatAction[] = [
  { id: "1", label: "View Courses", type: "primary" },
  {
    id: "2",
    label: "Not Sure? Take Suitability Test",
    type: "secondary",
    href: "/survey",
  },
  {
    id: "3",
    label: "Book A Free Clarity Call",
    type: "secondary",
    href: "/contact",
  },
  {
    id: "4",
    label: "Talk To A Human",
    type: "secondary",
    href: "tel:+2349067835701",
  },
];

// Available programs/courses
export const chatPrograms: ChatProgram[] = [
  { id: "1", name: "Data Analytics", slug: "data-analytics", type: "primary" },
  { id: "2", name: "Data Science", slug: "data-science", type: "secondary" },
  {
    id: "3",
    name: "Product Management",
    slug: "product-management",
    type: "secondary",
  },
  {
    id: "4",
    name: "AI Product Management",
    slug: "ai-product-management",
    type: "secondary",
  },
  { id: "5", name: "UI/UX Design", slug: "ui-ux-design", type: "secondary" },
  {
    id: "6",
    name: "Digital Marketing",
    slug: "digital-marketing",
    type: "secondary",
  },
];

// Course fee details
export const courseFees: Record<string, ChatCourseDetails> = {
  "data-analytics": {
    name: "Certified Data Analyst",
    fullPrice: "USD $2,060",
    discountedPrice: "USD $1,139",
    highlights: [
      "4-Month Live Instructor-Led Training",
      "5 Real-World Projects",
      "Internship Opportunities with AI Companies",
      "Globally Recognized Certifications",
      "Mentorship & Support",
    ],
  },
  "data-science": {
    name: "Certified Data Scientist",
    fullPrice: "USD $2,500",
    discountedPrice: "USD $1,399",
    highlights: [
      "4-Month Live Instructor-Led Training",
      "5 Real-World Projects",
      "Internship Opportunities with AI Companies",
      "Globally Recognized Certifications",
      "Mentorship & Support",
    ],
  },
  "product-management": {
    name: "Certified Product Manager",
    fullPrice: "USD $1,800",
    discountedPrice: "USD $999",
    highlights: [
      "4-Month Live Instructor-Led Training",
      "5 Real-World Projects",
      "Internship Opportunities with AI Companies",
      "Globally Recognized Certifications",
      "Mentorship & Support",
    ],
  },
  "ai-product-management": {
    name: "AI Product Management",
    fullPrice: "USD $2,200",
    discountedPrice: "USD $1,250",
    highlights: [
      "4-Month Live Instructor-Led Training",
      "5 Real-World Projects",
      "Internship Opportunities with AI Companies",
      "Globally Recognized Certifications",
      "Mentorship & Support",
    ],
  },
  "ui-ux-design": {
    name: "UI/UX Design Professional",
    fullPrice: "USD $1,600",
    discountedPrice: "USD $899",
    highlights: [
      "4-Month Live Instructor-Led Training",
      "5 Real-World Projects",
      "Internship Opportunities with AI Companies",
      "Globally Recognized Certifications",
      "Mentorship & Support",
    ],
  },
  "digital-marketing": {
    name: "Digital Marketing Specialist",
    fullPrice: "USD $1,400",
    discountedPrice: "USD $799",
    highlights: [
      "4-Month Live Instructor-Led Training",
      "5 Real-World Projects",
      "Internship Opportunities with AI Companies",
      "Globally Recognized Certifications",
      "Mentorship & Support",
    ],
  },
};

// Course detail actions (shown after selecting a course)
export const courseDetailActions: ChatAction[] = [
  { id: "course-curriculum", label: "Course Curriculum", type: "secondary" },
  { id: "upcoming-dates", label: "Upcoming Start Dates", type: "secondary" },
  {
    id: "career-support",
    label: "Career Support / Job Assistance",
    type: "secondary",
  },
  { id: "talk-advisor", label: "Talk To An Advisor", type: "secondary" },
  { id: "enroll-now", label: "Enroll Now", type: "primary" },
];

// Career support content
export const careerSupportContent = `At Ayonaire, we prepare you for the job market with practical skills and real-world support:

• ATS-Friendly Resume Builder
• Project Portfolio Development
• 1-Month Virtual Internship
• Online Credibility Review (LinkedIn, Resume, Portfolio)
• Domain Knowledge Foundation
• LinkedIn Optimization AI Agent
• Community & Mentorship
• Mock Interviews Prep
• Job Application Playbook
• Enhanced Portfolio Website
• AI Automation Modules`;

// Career support actions
export const careerSupportActions: ChatAction[] = [
  { id: "back-to-course", label: "Back To Course Details", type: "secondary" },
  { id: "enroll-now", label: "Enroll Now", type: "primary" },
];

// Talk to advisor actions
export const talkToAdvisorActions: ChatAction[] = [
  { id: "chat-advisor", label: "Chat With An Advisor", type: "primary" },
  { id: "request-callback", label: "Request A Call Back", type: "secondary" },
];

// Connecting message
export const connectingMessage = `Connecting you now...
One of our advisors will be with you shortly.

📞 Or call us directly: +234 906 783 5701`;

// Enroll now flow messages
export const enrollNowMessages: ChatMessage[] = [
  {
    id: "career-question",
    type: "bot",
    avatar: "ayobami",
    content:
      "Are you serious about a career in Data Science and AI? Speak to the career experts — leave your email.",
    timestamp: new Date(),
  },
  {
    id: "payment-advisor",
    type: "bot",
    avatar: "ayobami",
    content: `Amazing! 🎉
Before payment, one of our advisors needs to speak with you to confirm your seat & share the account details.`,
    timestamp: new Date(),
  },
];

// Suitability test message
export const suitabilityTestMessage: ChatMessage = {
  id: "suitability-test",
  type: "bot",
  avatar: "ayobami",
  content:
    "Great! Our suitability test helps you identify the best tech career path for you.",
  actions: [
    {
      id: "start-test",
      label: "Start Suitability Test",
      type: "primary",
      href: "/survey",
    },
  ],
  timestamp: new Date(),
};

// Discovery call message
export const discoveryCallMessage: ChatMessage = {
  id: "discovery-call",
  type: "bot",
  avatar: "ayobami",
  content: "A quick 10-minute discovery call will give you full clarity.",
  actions: [
    {
      id: "book-call",
      label: "Book Call Now",
      type: "primary",
      href: "/contact",
    },
  ],
  timestamp: new Date(),
};

// Initial welcome messages flow
export const initialMessages: ChatMessage[] = [
  {
    id: "welcome-1",
    type: "bot",
    avatar: "ayobami",
    content: `Hey, I'm Ayobami.
Ping me here for more details on our Tech & AI Courses.
📞 Call me anytime: +234 906 783 5701 (Toll-free)
PS: I'm not a robot :-)`,
    phoneLink: "+2349067835701",
    timestamp: new Date(),
  },
];

// Messages after user says hi
export const afterHiMessages: ChatMessage[] = [
  {
    id: "thanks-message",
    type: "bot",
    avatar: "bot",
    content: `Thanks for your message! The team will reply shortly.
Before we continue, please tell us a bit about you:`,
    timestamp: new Date(),
  },
  {
    id: "form-message",
    type: "form",
    timestamp: new Date(),
  },
];

// Messages after form submission (Joined state)
export const afterJoinedMessages: ChatMessage[] = [
  {
    id: "joined-indicator",
    type: "joined",
    timestamp: new Date(),
  },
  {
    id: "help-message",
    type: "bot",
    avatar: "ayobami",
    content: `Thanks!
Hi, how may I help you today?`,
    timestamp: new Date(),
  },
  {
    id: "what-to-know",
    type: "bot",
    avatar: "ayobami",
    content: "What would you like to know about?",
    actions: quickActions,
    timestamp: new Date(),
  },
];

// After selecting "View Courses"
export const programsMessage: ChatMessage = {
  id: "programs-list",
  type: "bot",
  avatar: "ayobami",
  content: "Great! Here are our top programs:",
  timestamp: new Date(),
};

// Simulated bot responses for different queries
export const botResponses: Record<string, string> = {
  hello:
    "Hello! How can I help you today? Feel free to ask me about our courses, pricing, or anything else!",
  hi: "Hi there! 👋 What would you like to know about our programs?",
  price:
    "We offer competitive pricing with flexible payment plans. Which course are you interested in?",
  courses:
    "We offer courses in Data Analytics, Data Science, Product Management, AI Product Management, UI/UX Design, and Digital Marketing. Which one interests you?",
  help: "I'm here to help! You can ask me about our courses, pricing, enrollment process, or career support.",
  default:
    "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our courses or book a free clarity call.",
};

// Chat header text
export const chatHeaderText = "Here To Help And I Am Not A Robot :-)";

// Input placeholder
export const inputPlaceholder = "Type a message here";
