"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import { FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  SiAdobe,
  SiAmazon,
  SiApple,
  SiAtlassian,
  SiMeta,
  SiNetflix,
  SiOracle,
  SiSalesforce,
  SiUber,
} from "react-icons/si";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  Clock,
  CloudLightning,
  FileText,
  GraduationCap,
  Grid2X2,
  LayoutList,
  Link as LinkIcon,
  Lock,
  Mic,
  Moon,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  User,
  Users,
  Video,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Screen =
  | "dashboard"
  | "topics"
  | "companies"
  | "company-roadmap"
  | "setup"
  | "confirm"
  | "live"
  | "done";

const orange = "#ff5a2c";

type InterviewSelection = {
  title: string;
  category: string;
  initial: string;
  overview: string;
  time?: string;
};

const defaultInterview: InterviewSelection = {
  title: "AI Agent Fundamentals",
  category: "Agentic AI",
  initial: "A",
  overview: "Comprehensive agentic AI from fundamentals to production systems",
};

const statCards = [
  { label: "Total Interviews", value: "0", icon: Sparkles },
  { label: "Average Score", value: "0%", icon: Trophy },
  { label: "Topics Practiced", value: "0", icon: BookOpen },
  { label: "Company Rounds", value: "0", icon: Briefcase },
];

const practiceCards = [
  {
    title: "Full-Length AI Interview",
    body: "15-minute personalized mock interview based on your resume and job description, with instant feedback.",
    action: "Start Full Interview",
  },
  {
    title: "Topic-wise Interview",
    body: "Select categories or topics and get trained with focused AI questions and instant coaching.",
    action: "Start Topic Practice",
  },
  {
    title: "Company-Based Interviews",
    body: "Choose a target company and prepare with role-specific interview rounds, agenda, and practice tests.",
    action: "Start",
  },
];

type CompanyCard = {
  name: string;
  label: string;
  Logo: IconType;
  color: string;
  bg: string;
  status: "Featured" | "Locked";
  description: string;
  rounds: string[];
};

const companyCards: CompanyCard[] = [
  {
    name: "Google",
    label: "G",
    Logo: FcGoogle,
    color: "#4285F4",
    bg: "#F5FAFF",
    status: "Featured",
    description:
      "Master Google's rigorous interview process focused on algorithmic problem-solving and structured thinking.",
    rounds: ["Technical Interview 1", "Technical Interview 2", "Technical Interview 3", "System Design", "Googleyness & Leadership"],
  },
  {
    name: "Meta",
    label: "M",
    Logo: SiMeta,
    color: "#1877F2",
    bg: "#F6FAFF",
    status: "Featured",
    description:
      "Experience Meta's fast-paced, bottom-up interview process where coding rounds test product-minded judgment.",
    rounds: ["Coding Round 1", "Coding Round 2", "Product Sense", "System Design", "Behavioral"],
  },
  {
    name: "Amazon",
    label: "amazon",
    Logo: SiAmazon,
    color: "#111111",
    bg: "#FFFFFF",
    status: "Featured",
    description:
      "Master Amazon's Leadership Principles-driven interview process where every round combines technical depth.",
    rounds: ["Online Assessment", "Technical Interview", "System Design", "Leadership Principles", "Bar Raiser"],
  },
  {
    name: "Microsoft",
    label: "M",
    Logo: FaMicrosoft,
    color: "#737373",
    bg: "#FAFAFA",
    status: "Featured",
    description:
      "Experience Microsoft's growth mindset-focused interview process emphasizing learning, collaboration, and design.",
    rounds: ["Phone Screen", "Technical Round", "Design Round", "Collaboration", "Final Loop"],
  },
  {
    name: "Apple",
    label: "A",
    Logo: SiApple,
    color: "#111111",
    bg: "#F8F8F8",
    status: "Featured",
    description:
      "Master Apple's secretive and rigorous interview process where innovation and craftsmanship matter.",
    rounds: ["Screen", "Technical", "Product Depth", "Team Fit", "Final Panel"],
  },
  {
    name: "Netflix",
    label: "N",
    Logo: SiNetflix,
    color: "#E50914",
    bg: "#FFF7F7",
    status: "Featured",
    description:
      "Experience Netflix's engineering-focused interview style emphasizing system design excellence and practical judgment.",
    rounds: ["Recruiter", "Technical", "System Design", "Culture Memo", "Final Panel"],
  },
  {
    name: "Uber",
    label: "Uber",
    Logo: SiUber,
    color: "#111111",
    bg: "#FFFFFF",
    status: "Featured",
    description:
      "Experience Uber's engineering interview process focused on real-time systems and practical architecture.",
    rounds: ["Phone Screen", "Coding", "System Design", "Product Thinking", "Final Panel"],
  },
  {
    name: "Adobe",
    label: "A",
    Logo: SiAdobe,
    color: "#FF0000",
    bg: "#FFF7F7",
    status: "Featured",
    description:
      "Experience Adobe's creative-tech interview process emphasizing product quality and design collaboration.",
    rounds: ["Portfolio", "Technical", "Product", "Behavioral", "Final Panel"],
  },
  {
    name: "Salesforce",
    label: "S",
    Logo: SiSalesforce,
    color: "#00A1E0",
    bg: "#F3FBFF",
    status: "Featured",
    description:
      "Experience Salesforce's interview process emphasizing multi-tenant SaaS architecture and customer success.",
    rounds: ["Screening", "Technical", "Scenario", "Architecture", "Values"],
  },
  {
    name: "Atlassian",
    label: "A",
    Logo: SiAtlassian,
    color: "#0052CC",
    bg: "#F3F7FF",
    status: "Featured",
    description:
      "Experience Atlassian's engineering interview process emphasizing collaboration and distributed teamwork.",
    rounds: ["Screening", "Technical", "System Design", "Collaboration", "Values"],
  },
  {
    name: "Oracle",
    label: "O",
    Logo: SiOracle,
    color: "#111111",
    bg: "#FFFFFF",
    status: "Featured",
    description:
      "Experience Oracle's engineering interview process emphasizing enterprise systems and database depth.",
    rounds: ["Screening", "Technical", "Database Design", "System Design", "Final Panel"],
  },
];

type CompanyRoadmapRound = {
  title: string;
  meta: string;
  body: string;
  status: "Start Test" | "Locked";
};

const roundDescriptions: Record<string, string> = {
  "Online Assessment":
    "Practice timed problem solving, edge cases, and clear written reasoning for the first assessment stage.",
  "Recruiter Screen":
    "Prepare a concise career story, role alignment, compensation expectations, and thoughtful recruiter questions.",
  "Phone Screen":
    "Practice short technical explanations, resume walkthroughs, and first-round communication under time pressure.",
  Screening:
    "Build a strong first-round narrative around your background, target role, and core technical strengths.",
  "Technical Interview":
    "Answer role-specific technical questions with clean reasoning, examples, and tradeoff awareness.",
  Technical:
    "Practice technical depth, implementation choices, debugging scenarios, and structured problem solving.",
  Coding:
    "Work through coding prompts while explaining data structures, complexity, and test cases clearly.",
  "Product Sense":
    "Practice product strategy, metrics, user tradeoffs, and structured product judgment.",
  "Product Depth":
    "Prepare to discuss product decisions, execution quality, customer impact, and attention to detail.",
  Product:
    "Practice product thinking, prioritization, tradeoffs, and clear recommendation framing.",
  "System Design":
    "Design scalable systems while discussing data modeling, reliability, observability, and tradeoffs.",
  Design:
    "Practice architecture decisions, interface design, constraints, and collaboration tradeoffs.",
  Scenario:
    "Respond to realistic workplace and customer scenarios with structured judgment and practical next steps.",
  Portfolio:
    "Present your strongest projects with clear problem framing, process, technical choices, and business impact.",
  "Culture Memo":
    "Prepare high-agency examples that show judgment, autonomy, feedback, and culture alignment.",
  "Culture Fit":
    "Practice stories that show collaboration, ownership, communication, and how you work with a team.",
  Behavioral:
    "Refine STAR stories around ownership, conflict, ambiguity, leadership, and measurable impact.",
  Leadership:
    "Practice leadership examples around influence, decision quality, accountability, and team outcomes.",
  "Bar Raiser":
    "Prepare for high-standard behavioral prompts around ownership, customer focus, and long-term judgment.",
  "Final Panel":
    "Review your full interview strategy, strongest stories, technical themes, and closing questions.",
  Values:
    "Connect your working style and decisions to the company's values with concrete examples.",
};

function getCompanyRoadmap(company: CompanyCard): CompanyRoadmapRound[] {
  return [
    ...company.rounds.map<CompanyRoadmapRound>((round, index) => ({
      title: round,
      meta: "15 mins",
      body:
        roundDescriptions[round] ??
        `Practice ${round.toLowerCase()} questions tailored to ${company.name}'s interview expectations.`,
      status: index === 0 ? "Start Test" : "Locked",
    })),
  ];
}

const popularTopics = [
  {
    title: "Machine Learning - Complete Overview",
    body: "Comprehensive coverage of ML fundamentals, algorithms, and practical applications...",
    tag: "Hard",
    time: "15 mins",
  },
  {
    title: "Deep Learning - Complete Overview",
    body: "Comprehensive deep learning from fundamentals to advanced architectures...",
    tag: "Hard",
    time: "15 mins",
  },
  {
    title: "NLP - Complete Overview",
    body: "Comprehensive NLP from text processing to modern language models",
    tag: "Hard",
    time: "15 mins",
  },
  {
    title: "Air India Chatbot Development Interviews",
    body: "This interview focuses on the project development aspects of the Air India RAG chatbot, assessing your understanding of its architecture and implementation.",
    tag: "easy",
    time: "10 mins",
  },
];

function getPopularTopicSelection(topic: (typeof popularTopics)[number]): InterviewSelection {
  const category = topic.title.startsWith("Machine Learning")
    ? "Machine Learning"
    : topic.title.startsWith("Deep Learning")
      ? "Deep Learning"
      : topic.title.startsWith("NLP")
        ? "Natural Language processing"
        : "Project-Based Interview";

  return {
    title: topic.title,
    category,
    initial: topic.title[0],
    overview: topic.body,
    time: topic.time,
  };
}

function getInterviewAgenda(selection: InterviewSelection) {
  if (selection.category === "Company-Based Interview") {
    return [
      {
        title: "Company Context",
        body: `Review the expectations and interview style for ${selection.title.replace(/ Technical Interview 1$/, "")}.`,
      },
      {
        title: "Role-Specific Questions",
        body: selection.overview,
      },
      {
        title: "Answer Structure",
        body: "Practice concise explanations, clear examples, tradeoff reasoning, and measurable impact.",
      },
      {
        title: "Feedback & Next Steps",
        body: "Identify weak spots and turn them into a focused follow-up practice plan.",
      },
    ];
  }

  return [
    {
      title: `${selection.category} Fundamentals`,
      body: `Warm up with the core concepts behind ${selection.title}.`,
    },
    {
      title: "Applied Scenarios",
      body: selection.overview,
    },
    {
      title: "Technical Deep Dive",
      body: "Explain implementation choices, tradeoffs, edge cases, and production considerations.",
    },
    {
      title: "Interview Feedback",
      body: "Review clarity, confidence, technical accuracy, and the next topic to practice.",
    },
  ];
}

function getLiveAgenda(selection: InterviewSelection) {
  return getInterviewAgenda(selection).map((item, index) => ({
    ...item,
    body:
      index === 0
        ? `Starting with ${selection.title} so the session matches the practice you selected.`
        : item.body,
  }));
}

const categoryTabs = [
  "AI Engineering",
  "Agentic & Gen AI",
  "AI Automation",
  "Data Analytics",
  "Data Science",
  "Data Engineering",
  "Business Analytics",
  "Product Development",
  "Project Management",
  "Product Design",
  "Cyber Security",
  "DevOP Engineering",
  "Cloud Engineering",
  "Software Engineering",
  "Software Development",
];

type InterviewTopic = {
  title: string;
  body: string;
  initial: string;
  time: string;
};

const topicCards: InterviewTopic[] = [
  {
    title: "Agentic AI - Complete Overview",
    body: "Build a complete understanding of agent systems, autonomy, and production workflows.",
    initial: "A",
    time: "15 mins",
  },
  {
    title: "AI Agent Fundamentals",
    body: "Learn core agent architecture, reasoning loops, planning, and decision-making.",
    initial: "A",
    time: "15 mins",
  },
  {
    title: "LLM-Based Agents",
    body: "Practice LLM agent patterns, prompts, memory, and tool orchestration.",
    initial: "L",
    time: "15 mins",
  },
  {
    title: "Agent Memory Systems",
    body: "Understand short-term, long-term, and retrieval-backed memory systems.",
    initial: "M",
    time: "15 mins",
  },
  {
    title: "Agent Planning & Reasoning",
    body: "Prepare for questions on decomposition, reflection, and multi-step reasoning.",
    initial: "P",
    time: "15 mins",
  },
  {
    title: "Tool Use & Function Calling",
    body: "Explain how agents safely call APIs, tools, and structured functions.",
    initial: "T",
    time: "15 mins",
  },
  {
    title: "Agent Evaluation & Testing",
    body: "Review eval methods, test sets, scoring, and production monitoring.",
    initial: "E",
    time: "15 mins",
  },
  {
    title: "Agent Safety & Alignment",
    body: "Practice guardrails, policy constraints, human review, and safe deployment.",
    initial: "S",
    time: "15 mins",
  },
  {
    title: "Agentic Workflows & Automation",
    body: "Discuss workflow design, triggers, approvals, and business process automation.",
    initial: "W",
    time: "15 mins",
  },
  {
    title: "Agent Frameworks & Tools",
    body: "Compare popular frameworks, orchestration layers, and implementation choices.",
    initial: "F",
    time: "15 mins",
  },
  {
    title: "Multi-Agent Systems",
    body: "Design collaborative agents with roles, communication, and coordination.",
    initial: "M",
    time: "15 mins",
  },
];

function getTopicCards(category: string): InterviewTopic[] {
  if (category === "Agentic & Gen AI") return topicCards;

  return [
    `${category} - Complete Overview`,
    `${category} Fundamentals`,
    `${category} Tools & Workflows`,
    `${category} Portfolio Projects`,
    `${category} Interview Questions`,
    `${category} Career Readiness`,
    `${category} Case Studies`,
    `${category} Production Practice`,
    `${category} Advanced Applications`,
    `${category} Production Systems`,
    `${category} System Design`,
    `${category} Final Prep`,
  ].map((title) => ({
    title,
    body: `Comprehensive ${category.toLowerCase()} practice from fundamentals to interview-ready applications.`,
    initial: title[0],
    time: "15 mins",
  }));
}

const agenda = [
  {
    title: "Agent Fundamentals",
    body: "Master agent architecture, reasoning, planning, and decision-making mechanisms",
  },
  {
    title: "LLM-Based Agents",
    body: "Build agents with LLMs, implement ReAct, tool use, function calling, and memory systems",
  },
  {
    title: "Multi-Agent Systems",
    body: "Design collaborative multi-agent systems with coordination and communication",
  },
  {
    title: "Safety & Evaluation",
    body: "Ensure agent safety, alignment, implement testing, and evaluation frameworks",
  },
  {
    title: "Production Systems",
    body: "Build agentic workflows, use frameworks, deploy, monitor, and maintain production agents",
  },
];

const liveAgenda = [
  {
    title: "Agent Fundamentals",
    body: "Cover preprocessing, tokenization, embeddings (Word2Vec, GloVe, BERT), and text representation techniques",
  },
  {
    title: "Core NLP Tasks",
    body: "Discuss classification, NER, sentiment analysis, and traditional NLP pipelines with feature engineering",
  },
  {
    title: "Sequence Models",
    body: "Address RNNs, LSTMs, seq2seq with attention for translation, summarization, and generation tasks",
  },
  {
    title: "Transformers & LLM",
    body: "Explore BERT, GPT, fine-tuning strategies, prompt engineering, and leveraging pre-trained models",
  },
  {
    title: "Advanced Applications",
    body: "Cover question answering, dialogue systems, information extraction, and deploying NLP in production",
  },
];

const railItems = [
  { title: "Feed", url: "/dashboard/student/feed", icon: LayoutList },
  { title: "Profile", url: "/dashboard/student/profile", icon: User },
  { title: "Assignments", url: "/dashboard/student/assignments", icon: FileText },
  { title: "Courses", url: "/dashboard/student/courses", icon: GraduationCap },
  { title: "Job Sessions", url: "/dashboard/student/job-sessions", icon: Briefcase },
  { title: "Quiz", url: "/dashboard/student/quiz", icon: LayoutList },
  {
    title: "Career Accelerator",
    url: "/dashboard/student/career-accelarator",
    icon: CloudLightning,
  },
  { title: "Certificates", url: "/dashboard/student/certificates", icon: ShieldCheck },
  { title: "Support", url: "/dashboard/student/support", icon: Sparkles },
  { title: "Community", url: "/dashboard/student/community", icon: Users },
  { title: "Dashboard", url: "/dashboard/student", icon: Grid2X2 },
];

function isRailItemActive(pathname: string, url: string) {
  const normalizedPathname = pathname.replace(
    "/preview/student",
    "/dashboard/student",
  );

  if (url === "/dashboard/student") return normalizedPathname === url;

  return normalizedPathname === url || normalizedPathname.startsWith(`${url}/`);
}

function IconRail({
  expanded,
  pinned,
  onToggle,
  onHoverChange,
}: {
  expanded: boolean;
  pinned: boolean;
  onToggle: () => void;
  onHoverChange: (hovered: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <aside
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onFocusCapture={() => onHoverChange(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onHoverChange(false);
        }
      }}
      className={cn(
        "fixed inset-y-0 left-0 z-30 hidden border-r border-[#d5d5d5] bg-white transition-[width] duration-200 md:block",
        expanded ? "w-[220px]" : "w-[61px]",
      )}
    >
      <div className="relative flex h-[68px] items-center justify-center border-b border-[#ededed]">
        <Link
          href="/dashboard/student/feed"
          className={cn(
            "flex items-center justify-center",
            expanded && "w-full justify-start gap-3 px-4",
          )}
          aria-label="Go to Feed"
        >
          <Image
            src="/assets/logos/logo-dark.png"
            width={31}
            height={31}
            alt="Ayonaire"
            className="object-contain"
            priority
          />
          {expanded && <span className="text-sm font-semibold">Ayonaire</span>}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          className="absolute -right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#767676] shadow-sm transition-colors hover:text-black"
          aria-label={pinned ? "Unpin navigation" : "Pin navigation open"}
          aria-pressed={pinned}
        >
          <ChevronRight
            className={cn("size-4 transition-transform", expanded && "rotate-180")}
          />
        </button>
      </div>
      <Link
        href="/dashboard/student/profile"
        className={cn(
          "flex border-b border-[#ededed] py-4 transition-colors hover:bg-[#fafafa]",
          expanded ? "items-center gap-3 px-4" : "justify-center",
        )}
        aria-label="Open profile"
      >
        <Image
          src="/assets/persons/member-ayo.png"
          width={40}
          height={40}
          alt="Profile"
          className="size-10 rounded-full object-cover"
        />
        {expanded && (
          <span className="min-w-0 truncate text-sm font-medium text-[#111111]">
            Profile
          </span>
        )}
      </Link>
      <nav
        className={cn(
          "flex flex-col pt-5 text-[#767676]",
          expanded ? "gap-1 px-3" : "items-center gap-5",
        )}
        aria-label="Student sections"
      >
        {railItems.map((item) => {
          const active = isRailItemActive(pathname, item.url);
          return (
          <Link
            key={item.title}
            href={item.url}
            title={item.title}
            aria-label={item.title}
            className={cn(
              "flex items-center rounded-[8px] transition-colors",
              expanded
                ? "h-10 gap-3 px-3 text-sm"
                : "size-8 justify-center",
              active
                ? "bg-[#fff0eb] text-[#ff5a2c]"
                : "hover:bg-[#f7f7f7] hover:text-[#111111]",
            )}
          >
            <item.icon className="size-[18px] shrink-0" strokeWidth={1.8} />
            {expanded && <span className="truncate">{item.title}</span>}
          </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  const [railHovered, setRailHovered] = React.useState(false);
  const [railPinned, setRailPinned] = React.useState(false);
  const railExpanded = railHovered || railPinned;

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <IconRail
        expanded={railExpanded}
        pinned={railPinned}
        onHoverChange={setRailHovered}
        onToggle={() => setRailPinned((current) => !current)}
      />
      <main
        className={cn(
          "min-h-screen transition-[padding] duration-200",
          railExpanded ? "md:pl-[220px]" : "md:pl-[61px]",
        )}
      >
        {children}
      </main>
    </div>
  );
}

function Dashboard({
  onTopics,
  onSetup,
  onCompanies,
}: {
  onTopics: () => void;
  onSetup: (selection?: InterviewSelection) => void;
  onCompanies: () => void;
}) {
  return (
    <PageShell>
      <div className="px-5 pb-16 pt-12 md:px-10 lg:px-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[24px] font-semibold leading-tight tracking-normal">
              AI Interview Practice
            </h1>
            <p className="mt-2 text-[15px] leading-6 text-[#595959]">
              Practice with our AI interviewer and get instant feedback
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              onSetup({
                title: "Full-Length AI Interview",
                category: "General Practice",
                initial: "F",
                overview:
                  "Personalized full-length mock interview based on your resume and target role.",
              })
            }
            className="hidden h-10 items-center gap-2 rounded-[4px] bg-[#ff5a2c] px-4 text-sm font-medium text-white md:flex"
          >
            <Play className="size-4" />
            Start New Interview
          </button>
        </div>

        <section className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((item, index) => (
            <article
              key={item.label}
              className={cn(
                "flex h-[92px] items-center gap-4 rounded-[12px] border border-[#dfe6ef] bg-white px-4",
                index === 0 && "shadow-[0_4px_8px_rgba(15,23,42,0.22)]",
              )}
            >
              <span className="flex size-10 items-center justify-center rounded-[8px] bg-[#fff0eb] text-[#ff5a2c]">
                <item.icon className="size-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-[14px] text-[#6b6b6b]">{item.label}</p>
                <p className="mt-2 text-[17px] font-semibold leading-none">{item.value}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-8 rounded-[8px] bg-[#f4f4f4] p-1.5">
          <div className="grid grid-cols-3 gap-2">
            {["Practice", "Tracks", "History"].map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={cn(
                  "h-11 rounded-[7px] text-sm text-[#777777]",
                  index === 0 && "bg-white text-[#111111]",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <section className="mt-8 grid gap-8 lg:grid-cols-3">
          {practiceCards.map((card, index) => (
            <article
              key={card.title}
              className="min-h-[260px] rounded-[12px] border border-[#eeeeee] bg-white px-8 py-12 shadow-[0_1px_2px_rgba(16,24,40,0.02)] [border-left:4px_solid_#ff5a2c]"
            >
              <div className="flex items-center gap-3">
                <FileText className="size-6 text-[#ff5a2c]" strokeWidth={1.8} />
                <h2 className="text-[18px] font-semibold tracking-normal text-[#111827]">
                  {card.title}
                </h2>
              </div>
              <p className="mt-6 min-h-[62px] max-w-[330px] text-[14px] leading-6 text-[#5e7190]">
                {card.body}
              </p>
              <button
                type="button"
                onClick={
                  index === 1
                    ? onTopics
                    : index === 2
                      ? onCompanies
                      : () =>
                          onSetup({
                            title: "Full-Length AI Interview",
                            category: "General Practice",
                            initial: "F",
                            overview:
                              "Personalized full-length mock interview based on your resume and target role.",
                          })
                }
                className="mt-8 h-12 w-full rounded-[10px] border border-[#111111] text-[15px] font-semibold"
              >
                {card.action}
              </button>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-[10px] border border-[#e7e7e7] bg-white px-8 py-6">
          <div className="flex items-center gap-3">
            <Trophy className="size-5 text-[#ff5a2c]" />
            <h2 className="text-[24px] font-semibold tracking-normal">
              Popular Interview Topics
            </h2>
          </div>
          <p className="mt-5 text-[15px]">Most practiced topics by our community</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {popularTopics.map((topic) => (
              <button
                key={topic.title}
                type="button"
                onClick={() => onSetup(getPopularTopicSelection(topic))}
                className="flex min-h-[126px] items-center justify-between rounded-[8px] border border-[#e9e9e9] bg-[#fbfbfb] px-4 text-left"
              >
                <div>
                  <h3 className="text-[16px] font-semibold">{topic.title}</h3>
                  <p className="mt-2 max-w-[500px] text-[13px] leading-5 text-[#808080]">
                    {topic.body}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-[#6c6c6c]">
                    <span
                      className={cn(
                        "rounded-full px-4 py-1",
                        topic.tag === "easy"
                          ? "bg-[#dff6e6] text-[#17a45b]"
                          : "bg-[#fff0eb] text-[#ff5a2c]",
                      )}
                    >
                      {topic.tag}
                    </span>
                    <span>{topic.time}</span>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </button>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function Topics({
  onBack,
  onSetup,
}: {
  onBack: () => void;
  onSetup: (selection: InterviewSelection) => void;
}) {
  const [activeCategory, setActiveCategory] = React.useState("Agentic & Gen AI");
  const activeTopics = getTopicCards(activeCategory);

  return (
    <PageShell>
      <div className="flex h-[82px] items-center justify-end px-7">
        <button
          type="button"
          onClick={onBack}
          className="h-10 rounded-[4px] bg-[#ff5a2c] px-4 text-sm font-medium text-white"
        >
          Back to dashboard
        </button>
      </div>
      <section className="bg-[#fff0eb] px-6 pb-5 pt-6 text-center md:px-12 md:pb-12 md:pt-11">
        <h1 className="text-[16px] font-semibold leading-tight tracking-normal text-black md:text-[28px]">
          What will you practice today?
        </h1>
        <div className="mx-auto mt-4 flex h-7 max-w-[378px] items-center gap-2 rounded-[5px] bg-white px-3 text-[#8a8a8a] md:mt-8 md:h-[54px] md:max-w-[760px] md:gap-3 md:rounded-[8px] md:px-5">
          <Search className="size-3.5 md:size-6" strokeWidth={1.7} />
          <span className="text-[8px] md:text-[15px]">Search for interview topic</span>
        </div>
        <div className="mx-auto mt-3 flex max-w-[394px] flex-wrap justify-center gap-x-2 gap-y-2 md:mt-7 md:max-w-[1050px] md:gap-3">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveCategory(tab)}
              aria-pressed={activeCategory === tab}
              className={cn(
                "h-6 min-w-[96px] rounded-[4px] bg-white px-3 text-[8px] text-[#6e6e6e] transition-colors hover:bg-[#fff7f4] hover:text-[#ff5a2c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a2c] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:h-[36px] md:min-w-[136px] md:rounded-[6px] md:px-5 md:text-[13px]",
                activeCategory === tab
                  ? "bg-[#ff5a2c] text-white hover:bg-[#ff5a2c] hover:text-white"
                  : "",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>
      <section className="bg-[#f6f7f9] px-4 py-7 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1040px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {activeTopics.map((topic) => (
            <button
              key={topic.title}
              type="button"
              onClick={() =>
                onSetup({
                  title: topic.title,
                  category: activeCategory,
                  initial: topic.initial,
                  overview: topic.body,
                })
              }
              className="group h-[184px] overflow-hidden rounded-[7px] border border-[#dfe6ef] bg-white text-left transition-colors hover:border-[#ff5a2c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a2c] focus-visible:ring-offset-2 md:h-[206px]"
            >
              <div className="flex h-[50px] items-start justify-between bg-[#fff0eb] px-3 py-3 md:h-[62px]">
                <span className="flex size-8 items-center justify-center rounded-[6px] bg-[#ffdcd1] text-[13px] font-medium text-[#ff5a2c] md:size-9">
                  {topic.initial}
                </span>
                <span className="rounded-full bg-[#dff6e6] px-2 py-1 text-[10px] leading-none text-[#12a453] md:text-[11px]">
                  AI Ready
                </span>
              </div>
              <div className="px-3 py-3 md:px-4 md:py-4">
                <h2 className="line-clamp-2 min-h-[34px] text-[12px] font-semibold leading-[17px] tracking-normal text-[#111111] md:min-h-[38px] md:text-[14px] md:leading-[19px]">
                  {topic.title}
                </h2>
                <p className="mt-2 line-clamp-2 min-h-[34px] text-[11px] leading-[17px] text-[#777777] md:mt-3 md:min-h-[38px] md:text-[12px] md:leading-[19px]">
                  {topic.body}
                </p>
                <div className="mt-3 flex items-center gap-2 md:mt-4">
                  <span className="rounded-full bg-[#fff0eb] px-2.5 py-1 text-[10px] leading-none text-[#ff5a2c]">
                    Comprehensive
                  </span>
                  <span className="text-[10px] text-[#777777] md:text-[11px]">{topic.time}</span>
                </div>
                <span className="mt-3 flex items-center gap-1 text-[11px] font-medium text-[#ff5a2c] transition-colors group-hover:text-[#d94218] md:mt-4 md:text-[12px]">
                  Start Interview <ChevronRight className="size-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function CompanySelection({
  onBack,
  onRoadmap,
}: {
  onBack: () => void;
  onRoadmap: (company: CompanyCard) => void;
}) {
  return (
    <PageShell>
      <div className="px-4 pb-20 pt-5 md:px-10 lg:px-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <button
              type="button"
              onClick={onBack}
              className="mb-4 flex items-center gap-2 text-[13px] text-[#777777] transition-colors hover:text-black"
            >
              <ChevronRight className="size-4 rotate-180 text-black" />
              Back to dashboard
            </button>
            <h1 className="text-[22px] font-semibold leading-tight tracking-normal">
              Interview Preparation
            </h1>
            <p className="mt-2 max-w-[850px] text-[13px] leading-5 text-[#777777]">
              Practice with real questions from top tech companies. Complete
              sequential rounds to unlock your next opportunity.
            </p>
          </div>
          <span className="hidden h-9 shrink-0 items-center gap-2 rounded-full border border-[#eeeeee] bg-white px-4 text-[12px] text-[#777777] md:flex">
            <Briefcase className="size-4" strokeWidth={1.8} />
            {companyCards.length} Companies
          </span>
        </div>

        <section className="mt-10">
          <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {companyCards.map((company) => (
              <button
                key={company.name}
                type="button"
                onClick={() => onRoadmap(company)}
                className="group relative flex h-[224px] flex-col rounded-[8px] border border-[#dfe7f1] bg-white px-5 py-5 text-left transition-colors hover:border-[#ff5a2c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a2c] focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-[7px] border border-[#eeeeee] bg-white shadow-[0_6px_14px_rgba(16,24,40,0.08)]"
                    style={{ backgroundColor: company.bg }}
                  >
                    <company.Logo className="size-5" style={{ color: company.color }} />
                  </span>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-3 py-1 text-[10px] font-medium",
                      company.status === "Featured"
                        ? "bg-[#fff0eb] text-[#ff5a2c]"
                        : "bg-[#f4f4f4] text-[#777777]",
                    )}
                  >
                    {company.status}
                  </span>
                </div>
                <h3 className="mt-5 text-[15px] font-semibold">{company.name}</h3>
                <p className="mt-7 line-clamp-3 max-w-[245px] text-[12px] leading-5 text-[#777777]">
                  {company.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[12px] text-[#777777]">
                    <Briefcase className="size-4" strokeWidth={1.6} />
                    {company.rounds.length} Rounds
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#f5f5f5] text-[#777777] transition-colors group-hover:bg-[#fff0eb] group-hover:text-[#ff5a2c]">
                    <ChevronRight className="size-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function CompanyRoadmap({
  onBack,
  onSetup,
  company,
}: {
  onBack: () => void;
  onSetup: (selection: InterviewSelection) => void;
  company: CompanyCard;
}) {
  const roadmap = getCompanyRoadmap(company);
  const completedRounds = 0;
  const totalMinutes = roadmap.length * 15;

  return (
    <PageShell>
      <div className="px-4 pb-20 pt-5 md:px-10 lg:px-12">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-[13px] text-[#777777] transition-colors hover:text-black"
        >
          <ChevronRight className="size-4 rotate-180 text-black" />
          Back to Companies
        </button>

        <section className="grid gap-8 border-b border-[#eeeeee] pb-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="flex gap-5">
            <span
              className="flex size-16 shrink-0 items-center justify-center rounded-[8px] border border-[#eeeeee] bg-white shadow-[0_6px_14px_rgba(16,24,40,0.08)]"
              style={{ backgroundColor: company.bg }}
            >
              <company.Logo className="size-10" style={{ color: company.color }} />
            </span>
            <div>
              <h1 className="text-[26px] font-semibold leading-tight tracking-normal text-[#111827]">
                {company.name} Interview Roadmap
              </h1>
              <p className="mt-4 max-w-[840px] text-[15px] leading-7 text-[#202020]">
                {company.description} Practice through progressive coding rounds
                covering core patterns, system design at scale, and company evaluation
                themes. Rounds are structured to help you practice systematically
                while preparing for any topic combination you might encounter.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="flex h-8 items-center gap-2 rounded-[5px] border border-[#eeeeee] bg-[#fbfbfb] px-4 text-[13px] text-[#777777]">
                  <Grid2X2 className="size-4" strokeWidth={1.7} />
                  {roadmap.length} Rounds
                </span>
                <span className="flex h-8 items-center gap-2 rounded-[5px] border border-[#eeeeee] bg-[#fbfbfb] px-4 text-[13px] text-[#777777]">
                  <Clock className="size-4" strokeWidth={1.7} />
                  {totalMinutes} mins total
                </span>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[8px] border border-[#eeeeee] bg-[#fbfbfb] p-5">
            <div className="mb-4 flex items-center justify-between text-[13px]">
              <span className="font-semibold text-[#475467]">Your Progress</span>
              <span className="font-semibold text-[#111827]">0%</span>
            </div>
            <div className="h-2 rounded-full bg-[#e5e7eb]">
              <div className="h-2 w-0 rounded-full bg-[#ff5a2c]" />
            </div>
            <p className="mt-4 text-right text-[12px] text-[#777777]">
              {completedRounds} of {roadmap.length} completed
            </p>
          </aside>
        </section>

        <section className="mt-8">
          <h2 className="text-[22px] font-semibold tracking-normal text-[#111827]">
            Interview Rounds
          </h2>
          <div className="mt-8 space-y-5">
            {roadmap.map((round, index) => {
              const isAvailable = round.status === "Start Test";

              return (
                <article
                  key={round.title}
                  className={cn(
                    "rounded-[8px] border border-[#eeeeee] bg-white p-6",
                    !isAvailable && "opacity-55",
                  )}
                >
                  <div className="grid gap-5 lg:grid-cols-[76px_minmax(0,1fr)_240px] lg:items-center">
                    <span className="flex size-[58px] items-center justify-center rounded-[8px] border border-[#eeeeee] bg-white text-[22px] font-semibold text-[#777777]">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[18px] font-semibold text-[#111827]">
                          {round.title}
                        </h3>
                        <span className="rounded-[5px] border border-[#e7e7e7] bg-white px-3 py-1 text-[11px] text-[#777777]">
                          Locked
                        </span>
                        <span className="rounded-[5px] border border-[#e7e7e7] bg-white px-3 py-1 text-[11px] text-[#777777]">
                          Medium
                        </span>
                      </div>
                      <p className="mt-4 max-w-[780px] text-[14px] leading-6 text-[#777777]">
                        {round.body}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <span className="flex h-7 items-center gap-2 rounded-[5px] border border-[#eeeeee] bg-[#fbfbfb] px-3 text-[12px] text-[#777777]">
                          <Clock className="size-4" strokeWidth={1.7} />
                          {round.meta}
                        </span>
                        <span className="h-7 rounded-[5px] border border-[#eeeeee] bg-[#fbfbfb] px-3 text-[12px] leading-7 text-[#777777]">
                          Technical Coding
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      disabled={!isAvailable}
                      onClick={
                        isAvailable
                          ? () =>
                              onSetup({
                                title: `${company.name} ${round.title}`,
                                category: "Company-Based Interview",
                                initial: company.label,
                                overview: round.body,
                                time: round.meta,
                              })
                          : undefined
                      }
                      className={cn(
                        "h-11 rounded-[5px] text-[13px] font-semibold transition-colors",
                        isAvailable
                          ? "bg-[#ff5a2c] text-white hover:bg-[#eb4f25]"
                          : "border border-[#eeeeee] bg-[#fbfbfb] text-[#777777]",
                      )}
                    >
                      {isAvailable ? (
                        <>
                          Start Round <Play className="ml-2 inline size-4 fill-current" />
                        </>
                      ) : (
                        <>
                          <Lock className="mr-2 inline size-4" />
                          Locked
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function IdentityHeader({
  selection = defaultInterview,
}: {
  selection?: InterviewSelection;
}) {
  return (
    <div className="border-b border-[#dcdcdc] pb-8">
      <button className="mb-10 flex items-center gap-2 text-[14px] text-[#777777]">
        <ChevronRight className="size-5 rotate-180 text-black" />
        Back to {selection.category}
      </button>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex size-14 items-center justify-center rounded-[8px] bg-[#fff0eb] text-[32px] font-medium text-[#ff5a2c]">
            {selection.initial}
          </span>
          <div>
            <h1 className="text-[17px] font-semibold tracking-normal">{selection.title}</h1>
            <p className="mt-2 text-[15px]">
              General Practice <span className="ml-2 text-[#777777]">{selection.category}</span>
            </p>
          </div>
        </div>
        <span className="rounded-full bg-[#dff6e6] px-2 py-1 text-xs text-[#12a453]">
          AI Ready
        </span>
      </div>
    </div>
  );
}

function DeviceCard({ onLive }: { onLive: () => void }) {
  return (
    <section className="rounded-[10px] border border-[#ededed] bg-white p-9">
      <div className="mb-12 flex items-center gap-4">
        <Video className="size-6" />
        <h2 className="text-[20px] font-semibold tracking-normal">System Check</h2>
      </div>
      <div className="relative mx-auto h-[252px] max-w-[384px] overflow-hidden rounded-[10px] bg-[#ead8a8]">
        <Image
          src="/assets/persons/member-ayo.png"
          alt="Camera preview"
          fill
          className="object-cover object-[center_18%]"
          sizes="384px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
        <button
          type="button"
          onClick={onLive}
          className="absolute bottom-5 left-5 right-5 h-11 rounded-[4px] bg-[#ff5a2c] text-white shadow-[0_10px_24px_rgba(255,90,44,0.22)] transition-colors hover:bg-[#eb4f25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a2c] focus-visible:ring-offset-2"
        >
          Start Interview
        </button>
      </div>
      <p className="mt-10 rounded-[8px] border-l-2 border-[#ff5a2c] bg-[#fff0eb] px-3 py-3 text-[14px]">
        Microphone denied: Permission denied
      </p>
      {[
        ["Camera", "Grant permission to access cameras"],
        ["Microphone", "Grant permission to access microphones"],
      ].map(([title, body]) => (
        <div
          key={title}
          className="mt-4 flex h-[82px] items-center justify-between rounded-[8px] border border-[#eeeeee] bg-[#fbfbfb] px-5 py-4"
        >
          <div className="flex items-center gap-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5a2c]">
              {title === "Camera" ? <Video className="size-5" /> : <Mic className="size-5" />}
            </span>
            <div>
              <p className="text-[16px] font-semibold">{title}</p>
              <p className="mt-2 text-sm text-[#777777]">{body}</p>
            </div>
          </div>
          <span className="rounded-full bg-[#fff0eb] px-3 py-1 text-xs text-[#ff5a2c]">
            Denied
          </span>
        </div>
      ))}
      <button className="mt-24 h-10 w-full rounded-[4px] bg-[#eeeeee] text-sm text-[#777777]">
        <LinkIcon className="mr-2 inline size-4" />
        Check Devices Again
      </button>
      <button className="mt-8 h-10 w-full rounded-[4px] bg-[#ff5a2c] text-sm text-white">
        Share Feedback
      </button>
    </section>
  );
}

function Guidelines({
  selection = defaultInterview,
}: {
  selection?: InterviewSelection;
}) {
  const selectedAgenda = getInterviewAgenda(selection);

  return (
    <section className="rounded-[10px] border border-[#ededed] bg-white px-6 py-8 md:px-8">
      <div className="flex items-center gap-4">
        <span className="flex size-9 items-center justify-center rounded-[8px] bg-[#fff0eb] text-[#ff5a2c]">
          i
        </span>
        <h2 className="text-[30px] font-semibold leading-tight tracking-normal">Session Guidelines</h2>
      </div>
      <h3 className="mt-10 text-[16px] font-semibold">Overview</h3>
      <p className="mt-6 rounded-[8px] border border-[#e8e8e8] bg-[#fbfbfb] px-5 py-9 text-[15px] text-[#8a8a8a]">
        {selection.overview}
      </p>
      <h3 className="mt-8 text-[16px] font-semibold">Interview Agenda</h3>
      <div className="mt-8 space-y-10">
        {selectedAgenda.map((item, index) => (
          <div key={item.title} className="flex gap-6">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ff5a2c] text-xs font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <h4 className="text-[16px] font-semibold">{item.title}</h4>
              <p className="mt-3 max-w-[430px] text-sm leading-5 text-[#7d7d7d]">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-10 text-[16px] font-semibold">Before you start</h3>
      <div className="mt-6 space-y-4 text-sm text-[#777777]">
        {["Find a quiet environment", "Check your internet connection", "Have a notepad ready", "Speak clearly into the mic"].map((item, index) => (
          <p key={item}>
            <span className="mr-3 inline-flex size-5 items-center justify-center rounded-full bg-[#f4f4f4] text-xs">
              {index + 1}
            </span>
            {item}
          </p>
        ))}
      </div>
      <div className="mt-8 rounded-[8px] bg-[#fff0eb] px-6 py-5 text-[#ff5a2c]">
        <p className="text-[16px] font-medium">Note:</p>
        <p className="mt-2 max-w-[540px] text-[14px] leading-6">
          Once you start the interview, you cannot pause the timer. Ensure you are fully ready before clicking the start button.
        </p>
      </div>
    </section>
  );
}

function Setup({
  onBack,
  onLive,
  selection = defaultInterview,
}: {
  onBack: () => void;
  onLive: () => void;
  selection?: InterviewSelection;
}) {
  return (
    <PageShell>
      <div className="px-5 pb-20 pt-4 md:px-10 lg:px-12">
        <div onClick={onBack}>
          <IdentityHeader selection={selection} />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(420px,560px)_1fr]">
          <DeviceCard onLive={onLive} />
          <Guidelines selection={selection} />
        </div>
      </div>
    </PageShell>
  );
}

function StartInterviewModal({
  onClose,
  onStart,
  selection = defaultInterview,
}: {
  onClose: () => void;
  onStart: () => void;
  selection?: InterviewSelection;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-[360px] rounded-[6px] bg-white px-7 py-6 text-center shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="ml-auto flex size-6 items-center justify-center text-[#777777] transition-colors hover:text-black"
          aria-label="Close interview confirmation"
        >
          <X className="size-4" />
        </button>
        <div className="mx-auto mt-2 flex size-11 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5a2c]">
          <Sparkles className="size-5" />
        </div>
        <h2 className="mt-5 text-[20px] font-semibold tracking-normal">
          {selection.title}
        </h2>
        <p className="mt-2 text-[13px] text-[#777777]">{selection.time ?? "15 mins"} interview</p>
        <button
          type="button"
          onClick={onStart}
          className="mt-8 h-11 w-full rounded-[2px] bg-[#9f3d17] text-[14px] font-medium text-white transition-colors hover:bg-[#853110] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a2c] focus-visible:ring-offset-2"
        >
          Start Interview
        </button>
      </div>
    </div>
  );
}

function Live({
  onBack,
  onDone,
  selection = defaultInterview,
}: {
  onBack: () => void;
  onDone: () => void;
  selection?: InterviewSelection;
}) {
  const selectedLiveAgenda = getLiveAgenda(selection);

  return (
    <PageShell>
      <div className="px-5 pb-20 pt-4 md:px-10 lg:px-12">
        <div className="border-b border-[#dcdcdc] pb-8">
          <button onClick={onBack} className="mb-10 flex items-center gap-2 text-[14px] text-[#777777]">
            <ChevronRight className="size-5 rotate-180 text-black" />
            Back to {selection.category}
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-[8px] bg-[#fff0eb] text-[32px] font-medium text-[#ff5a2c]">
                {selection.initial}
              </span>
              <div>
                <h1 className="text-[17px] font-semibold">{selection.title}</h1>
                <p className="mt-2 text-[15px] text-[#777777]">{selection.category}</p>
              </div>
            </div>
            <Moon className="size-6" />
          </div>
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[minmax(0,790px)_480px]">
          <section>
            <div className="relative h-[452px] overflow-hidden rounded-[8px] bg-[#d9ddd4]">
              <Image src="/assets/images/ai-lady.png" alt="Interviewer" fill className="object-cover" priority />
              <span className="absolute left-5 top-8 rounded-[9px] bg-black/35 px-4 py-3 text-[15px] font-medium text-white">
                <span className="mr-2 inline-block size-2 rounded-full bg-[#12a453]" />
                Smith john
              </span>
              <div className="absolute inset-x-5 bottom-[112px] h-[70px] rounded-[10px] bg-black/35 px-6 py-5 text-[16px] text-white">
                Starting
              </div>
              <button className="absolute bottom-16 left-1/2 h-10 -translate-x-1/2 rounded-[10px] bg-black/75 px-7 text-[15px] text-white">
                Tap when done
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3">
                <button onClick={onDone} className="h-9 rounded-full bg-white px-5 text-[15px]">
                  <X className="mr-1 inline size-4 text-red-500" />
                  End
                </button>
                <button className="flex size-10 items-center justify-center rounded-full bg-[#ff5a2c] text-white">
                  <Mic className="size-5" />
                </button>
                <span className="rounded-full bg-white px-5 py-2 text-[15px] font-semibold">
                  12:10 <span className="ml-2 inline-block size-2 rounded-full bg-[#12a453]" />
                </span>
              </div>
            </div>
          </section>

          <aside className="rounded-[10px] border border-[#ededed] bg-white px-6 py-6">
            <h2 className="text-[17px] font-semibold">Interview Agenda</h2>
            <div className="mt-9 space-y-14">
              {selectedLiveAgenda.map((item, index) => (
                <div key={item.title} className="flex gap-6">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ff5a2c] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-5 text-[#777777]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-6 h-[388px] overflow-hidden rounded-[8px]">
              <Image src="/assets/persons/member-ayo.png" alt="Candidate" fill className="object-cover" />
              <span className="absolute bottom-5 left-4 rounded-[9px] bg-black/70 px-6 py-3 text-[15px] text-white">
                You
              </span>
              <div className="absolute bottom-5 right-4 w-[180px] rounded-[8px] bg-white p-4 shadow-xl">
                {[
                  ["Attention", 76],
                  ["Positivity", 38],
                  ["Confidence", 94],
                  ["Uncomfortable", 11],
                ].map(([label, value]) => (
                  <div key={label as string} className="mb-3 last:mb-0">
                    <p className="mb-1 text-[13px]">{label as string}</p>
                    <div className="h-2 rounded-full bg-[#f0f0f0]">
                      <div className="h-2 rounded-full bg-[#ff5a2c]" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}

function CompleteModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4">
      <div className="w-full max-w-[360px] rounded-[6px] bg-white px-7 py-6 text-center shadow-2xl">
        <button
          onClick={onClose}
          className="ml-auto flex size-6 items-center justify-center text-[#777777] transition-colors hover:text-black"
          aria-label="Close interview time modal"
        >
          <X className="size-4" />
        </button>
        <div className="mx-auto mt-2 flex size-11 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5a2c]">
          <Moon className="size-5" />
        </div>
        <h2 className="mt-5 text-[22px] font-semibold">Time&apos;s Up!</h2>
        <p className="mt-4 text-[13px] leading-5 text-[#777777]">
          You&apos;ve finished this interview session. Review your score, strengths,
          and improvement areas.
        </p>
        <button
          onClick={onClose}
          className="mt-7 h-11 w-full rounded-[2px] bg-[#ff5a2c] text-[14px] font-medium text-white transition-colors hover:bg-[#eb4f25]"
        >
          View your results
        </button>
      </div>
    </div>
  );
}

export default function StudentAiCareerAgentPage() {
  const [screen, setScreen] = React.useState<Screen>("dashboard");
  const [selectedInterview, setSelectedInterview] =
    React.useState<InterviewSelection>(defaultInterview);
  const [selectedCompany, setSelectedCompany] =
    React.useState<CompanyCard>(companyCards[0]);
  const [setupBackScreen, setSetupBackScreen] =
    React.useState<Screen>("dashboard");
  const [showComplete, setShowComplete] = React.useState(false);
  const openSetup = React.useCallback(
    (selection = defaultInterview, backScreen: Screen = "dashboard") => {
      setSelectedInterview(selection);
      setSetupBackScreen(backScreen);
      setScreen("setup");
    },
    [],
  );

  return (
    <>
      {screen === "dashboard" && (
        <Dashboard
          onTopics={() => setScreen("topics")}
          onSetup={(selection) => openSetup(selection, "dashboard")}
          onCompanies={() => setScreen("companies")}
        />
      )}
      {screen === "topics" && (
        <Topics
          onBack={() => setScreen("dashboard")}
          onSetup={(selection) => openSetup(selection, "topics")}
        />
      )}
      {screen === "companies" && (
        <CompanySelection
          onBack={() => setScreen("dashboard")}
          onRoadmap={(company) => {
            setSelectedCompany(company);
            setScreen("company-roadmap");
          }}
        />
      )}
      {screen === "company-roadmap" && (
        <CompanyRoadmap
          onBack={() => setScreen("companies")}
          onSetup={(selection) => openSetup(selection, "company-roadmap")}
          company={selectedCompany}
        />
      )}
      {screen === "setup" && (
        <Setup
          onBack={() => setScreen(setupBackScreen)}
          onLive={() => setScreen("confirm")}
          selection={selectedInterview}
        />
      )}
      {screen === "confirm" && (
        <>
          <Setup
            onBack={() => setScreen(setupBackScreen)}
            onLive={() => setScreen("confirm")}
            selection={selectedInterview}
          />
          <StartInterviewModal
            onClose={() => setScreen("setup")}
            onStart={() => setScreen("live")}
            selection={selectedInterview}
          />
        </>
      )}
      {screen === "live" && (
        <Live
          onBack={() => setScreen("setup")}
          onDone={() => setShowComplete(true)}
          selection={selectedInterview}
        />
      )}
      {showComplete && (
        <CompleteModal
          onClose={() => {
            setShowComplete(false);
            setScreen("dashboard");
          }}
        />
      )}
    </>
  );
}
