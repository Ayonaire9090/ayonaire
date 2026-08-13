"use client";

import * as React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  CircleEllipsis,
  Loader2,
  Medal,
  Plus,
  Settings,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGenerateCareerRoadmapMutation } from "@/hooks/api/use-career";
import { formatCareerAIResult } from "@/lib/api/endpoints/career";
import { cn } from "@/lib/utils";

type Answers = Record<string, string>;

type Step =
  | {
      id: string;
      title: string;
      type: "text";
      placeholder: string;
    }
  | {
      id: string;
      title: string;
      type: "choice";
      options: string[];
    };

const steps: Step[] = [
  {
    id: "name",
    title: "What's your name?",
    type: "text",
    placeholder: "Enter your Name",
  },
  {
    id: "experience",
    title: "How many years of experience do you have in tech?",
    type: "choice",
    options: ["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"],
  },
  {
    id: "currentRole",
    title: "What is your current role?",
    type: "choice",
    options: [
      "Student",
      "Junior Developer",
      "Mid-level Developer",
      "Senior Developer",
      "Tech Lead",
      "Engineering Manager",
      "Other",
    ],
  },
  {
    id: "targetRole",
    title: "What role do you want to pursue?",
    type: "choice",
    options: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Mobile Developer",
      "Data Scientist",
      "Data Engineer",
      "Machine Learning Engineer",
      "DevOps Engineer",
      "Cloud Architect",
      "Product Designer",
      "Product Manager",
      "Cybersecurity Analyst",
    ],
  },
  {
    id: "weeklyHours",
    title: "How much time can you commit weekly?",
    type: "choice",
    options: ["0-5 hours", "5-10 hours", "10-20 hours", "20+ hours"],
  },
  {
    id: "learningGoal",
    title: "What is your biggest career goal right now?",
    type: "choice",
    options: [
      "Land my first role",
      "Switch into tech",
      "Get promoted",
      "Build a portfolio",
      "Prepare for interviews",
      "Become job-ready faster",
    ],
  },
];

const tabs = ["My Roadmaps", "Explore", "Achievements"];

const exploreRoadmaps = [
  {
    title: "AI Engineering Career Roadmap - 6 Month Program",
    steps: 143,
    difficulty: "Advanced",
  },
  {
    title: "Generative AI Engineer Career Roadmap - 6 Month Pr",
    steps: 130,
    difficulty: "Advanced",
  },
  {
    title: "AI Automation Career Roadmap - 5 Month Program",
    steps: 139,
    difficulty: "Advanced",
  },
  {
    title: "Cybersecurity Specialist Career Roadmap - 6 Month Program",
    steps: 128,
    difficulty: "Advanced",
  },
  {
    title: "Cloud Solutions Architect Career Roadmap - 7 Month Program",
    steps: 133,
    difficulty: "Advanced",
  },
  {
    title: "Full Stack Web Developer - 5 Month Program",
    steps: 83,
    difficulty: "Advanced",
  },
  {
    title: "DevOps Engineer Career Roadmap - 6 Month Program",
    steps: 115,
    difficulty: "Advanced",
  },
  {
    title: "AI Engineer Career Roadmap - 6 Month Program",
    steps: 102,
    difficulty: "Advanced",
  },
  {
    title: "Data Science Career Roadmap - 6 Month Program",
    steps: 99,
    difficulty: "Advanced",
  },
];

const roadmapModules = [
  {
    title: "Step 1: Game Development Fundamentals & C# Programming",
    body: "Build a strong foundation in game development concepts and C# programming for Unity. Understanding core principles is essential before creating complex games.",
    resources: ["Game Engines vs Game Frameworks", "Game Loop & Frame Rate", "Game Objects & Components"],
  },
  {
    title: "Mathematics for Game Development",
    body: "Understand vectors, coordinates, movement, and collisions for interactive game experiences.",
    resources: ["2D vs 3D Game Development", "Player Experience & Engagement"],
  },
  {
    title: "Interactive Game Development",
    body: "Create mechanics, inputs, scenes, and reusable components that make a playable prototype.",
    resources: ["C# Syntax & Basic Concepts", "Object-Oriented Programming in C#", "Classes, Inheritance & Polymorphism"],
  },
  {
    title: "Design Principles",
    body: "Shape your game experience with strong visual hierarchy, feedback, and user-centered decisions.",
    resources: ["Interfaces & Abstract Classes", "Delegates, Events & Callbacks", "LINQ & Collections"],
  },
];

const myRoadmaps = [
  {
    title: "UI/UX Designer Freelance Career Roadmap",
    steps: "0/37 steps",
    progress: 0,
    description:
      "A structured guide for Farzana Ghaffar to transition into a successful freelance UI/UX Designer role.",
  },
  {
    title: "Farzana Ghaffar's Freelance UI/UX Designer Career Roadmap",
    steps: "0/34 steps",
    progress: 0,
    description:
      "A tailored roadmap to transition Farzana from a mid-level tech professional to a successful freelance UI/UX Designer.",
  },
];

const achievements = [
  {
    title: "Game Developer Career Roadmap - 6 Month Program",
    subtitle: "Difficulty:",
    value: "Advanced",
    progress: 100,
    count: "Earned",
    tone: "earned",
  },
  {
    title: "Roadmap Enthusiast",
    subtitle: "Created 5 different roadmaps",
    value: "",
    progress: 20,
    count: "1/5",
    tone: "default",
  },
  {
    title: "Learning Machine",
    subtitle: "Completed 10 sections across roadmaps",
    value: "",
    progress: 0,
    count: "0/10",
    tone: "default",
  },
  {
    title: "Topic Master",
    subtitle: "Completed 20 topics across roadmaps",
    value: "",
    progress: 0,
    count: "0/20",
    tone: "default",
  },
  {
    title: "Consistency King",
    subtitle: "Used roadmaps for 7 consecutive days",
    value: "",
    progress: 14,
    count: "1/7",
    tone: "default",
  },
];

const learningPathSteps = [
  {
    title: "Step 1: Master the Fundamentals of UI/UX Design",
    body: "Building a strong foundation in UI/UX is crucial to effectively create user-centered designs.",
  },
  {
    title: "Step 2: Enhance Technical Skills",
    body: "Developing technical skills will enable Farzana to implement designs effectively and collaborate with developers.",
  },
  {
    title: "Step 3: Build a Strong Portfolio",
    body: "A compelling portfolio showcases Farzana's skills and attracts potential freelance clients.",
  },
  {
    title: "Step 4: Networking and Continuous Learning",
    body: "Engaging with the design community and staying updated with trends will keep Farzana competitive.",
  },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-[#F2F2F2]">
      <div
        className="h-full rounded-full bg-[#F85F35] transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function ChoiceOption({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex min-h-14 items-center gap-4 rounded-[8px] border px-5 text-left text-sm text-[#8A8A8A] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F85F35] md:min-h-16 md:text-base",
        selected
          ? "border-[#F85F35] bg-[#FFF3EE] text-[#111111]"
          : "border-[#E7E7E7] bg-white hover:border-[#F85F35]/60 hover:bg-[#FFF8F5]",
      )}
    >
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-full border-2",
          selected ? "border-[#F85F35] bg-[#F85F35]" : "border-[#777777]",
        )}
      >
        {selected && <Check className="size-3 text-white" strokeWidth={3} />}
      </span>
      <span>{label}</span>
    </button>
  );
}

function ExploreRoadmapCard({
  roadmap,
  onStart,
}: {
  roadmap: (typeof exploreRoadmaps)[number];
  onStart: () => void;
}) {
  return (
    <article className="flex min-h-[236px] flex-col rounded-[8px] border border-[#E4E8EF] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.02)]">
      <h3 className="min-h-[62px] text-[18px] font-semibold leading-snug tracking-normal text-[#111827]">
        {roadmap.title}
      </h3>
      <div className="mt-3 grid gap-2 text-sm text-[#536A87]">
        <p className="flex items-center justify-between">
          <span>Steps:</span>
          <span>{roadmap.steps}</span>
        </p>
        <p className="flex items-center justify-between">
          <span>Difficulty:</span>
          <span className="rounded-full bg-[#E5F6EC] px-3 py-1 text-xs font-medium text-[#00A651]">
            {roadmap.difficulty}
          </span>
        </p>
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={onStart}
        className="mt-auto h-12 rounded-[6px] border-[#111111] text-sm font-semibold text-[#111111] hover:bg-[#F8F8F8]"
      >
        Start Roadmap
      </Button>
    </article>
  );
}

function MyRoadmapCard({
  roadmap,
  selected,
  onOpen,
}: {
  roadmap: (typeof myRoadmaps)[number];
  selected: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "rounded-[10px] border bg-white p-6 text-left transition hover:border-[#3B82F6] hover:shadow-sm",
        selected ? "border-[#3B82F6]" : "border-[#E5E7EB]",
      )}
    >
      <div className="flex min-h-[92px] items-start justify-between gap-4">
        <h3 className="max-w-[360px] text-[18px] font-semibold leading-snug tracking-normal text-[#111827]">
          {roadmap.title}
        </h3>
        <span className="text-sm font-semibold text-[#F85F35]">
          {roadmap.progress}%
        </span>
      </div>
      <p className="mt-3 text-sm text-[#536A87]">{roadmap.steps}</p>
      <div className="mt-8 h-2 overflow-hidden rounded-full bg-[#F0F0F0]">
        <div
          className="h-full rounded-full bg-[#F85F35]"
          style={{ width: `${roadmap.progress}%` }}
        />
      </div>
    </button>
  );
}

function AchievementCard({
  item,
}: {
  item: (typeof achievements)[number];
}) {
  const earned = item.tone === "earned";

  return (
    <article
      className={cn(
        "flex min-h-[170px] min-w-0 gap-4 rounded-[10px] border px-5 py-7 shadow-[0_1px_2px_rgba(16,24,40,0.03)] md:gap-6 md:px-7 md:py-8",
        earned
          ? "border-[#FFD8CC] bg-[#FFF0EA]"
          : "border-[#F1F1F1] bg-[#FAFAFA]",
      )}
    >
      <span
        className={cn(
          "mt-1 flex size-11 shrink-0 items-center justify-center rounded-full",
          earned ? "bg-[#FFD8CC] text-[#F85F35]" : "bg-[#ECEFF3] text-[#99A1AE]",
        )}
      >
        <Medal className="size-5" />
      </span>
      <div className="min-w-0 flex-1 overflow-hidden">
        <h3 className="max-w-full text-[18px] font-semibold leading-snug text-[#111827] [overflow-wrap:anywhere] md:text-[19px]">
          {item.title}
        </h3>
        <p className="mt-4 max-w-full text-[15px] text-[#536A87] [overflow-wrap:anywhere]">
          {item.subtitle}
        </p>
        {earned ? (
          <span className="mt-4 inline-flex rounded-full bg-[#FFD8CC] px-3 py-1 text-xs font-medium text-[#F85F35]">
            {item.value}
          </span>
        ) : (
          <div className="mt-5 flex max-w-[300px] items-center gap-4">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EFEFEF]">
              <div
                className="h-full rounded-full bg-[#F85F35]"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-[#F85F35]">
              {item.count}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

function AchievementsPanel() {
  return (
    <section className="mt-10 w-full overflow-hidden rounded-[10px] border border-[#E9E9E9] bg-white px-5 py-9 md:px-11 md:py-12">
      <div>
        <h2 className="text-[24px] font-semibold leading-none tracking-normal text-[#111111] md:text-[28px]">
          Your Achievements
        </h2>
      </div>
      <p className="mt-7 text-[15px] leading-7 text-[#6B7280] md:text-[17px]">
        Celebrate your learning milestones and progress
      </p>
      <div className="mt-9 grid gap-x-8 gap-y-8 md:grid-cols-2">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.title} item={achievement} />
        ))}
      </div>
    </section>
  );
}

function RoadmapProgressDetail({
  roadmap,
}: {
  roadmap: (typeof myRoadmaps)[number];
}) {
  return (
    <section className="mt-10">
      <div className="grid gap-7 lg:grid-cols-[1fr_330px]">
        <div className="space-y-7">
          <div className="grid gap-5 md:grid-cols-2">
            {myRoadmaps.map((item) => (
              <button
                type="button"
                key={item.title}
                onClick={() => undefined}
                className={cn(
                  "min-h-[168px] rounded-[10px] border bg-white p-6 text-left shadow-[0_1px_2px_rgba(16,24,40,0.03)]",
                  item.title === roadmap.title
                    ? "border-[#3B82F6]"
                    : "border-[#E5E7EB]",
                )}
              >
                <h2 className="min-h-16 text-[19px] font-semibold leading-snug text-[#111827]">
                  {item.title}
                </h2>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-[#536A87]">{item.steps}</span>
                  <span className="font-semibold text-[#F85F35]">
                    {item.progress}%
                  </span>
                </div>
              </button>
            ))}
          </div>

          <section className="rounded-[10px] border border-[#E5E7EB] bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <BookOpen className="size-6 text-[#111827]" />
              <h1 className="text-2xl font-semibold tracking-normal text-[#111827]">
                {roadmap.title}
              </h1>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#6B7280]">
              {roadmap.description}
            </p>
            <div className="mt-7 flex items-center gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EFEFEF]">
                <div
                  className="h-full rounded-full bg-[#F85F35]"
                  style={{ width: `${roadmap.progress}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-[#111827]">
                {roadmap.progress}%
              </span>
            </div>
          </section>

          <section className="rounded-[10px] border border-[#E5E7EB] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-normal text-[#111827]">
              Learning Path
            </h2>
            <p className="mt-4 text-base text-[#6B7280]">
              Follow these steps to master ui/ux designer freelance career
              roadmap
            </p>
            <div className="mt-8 space-y-6">
              {learningPathSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[8px] bg-[#FAFAFA] p-6"
                >
                  <div className="flex gap-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-[#F85F35] text-[#F85F35]">
                      <CircleEllipsis className="size-6" />
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-[#111827]">
                          {step.title}
                        </h3>
                        <span className="text-sm text-[#6B7280]">
                          0/2 complete
                        </span>
                      </div>
                      <p className="mt-4 max-w-3xl text-base leading-7 text-[#6B7280]">
                        {step.body}
                      </p>
                      <Button
                        type="button"
                        className="mt-6 h-11 rounded-[4px] bg-[#F85F35] px-8 text-white hover:bg-[#E85229]"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-[10px] border border-[#E5E7EB] bg-white p-7 text-center">
            <div className="mb-5 flex items-center gap-3 text-left">
              <Target className="size-6 text-[#111827]" />
              <h2 className="text-xl font-semibold text-[#111827]">
                Progress Summary
              </h2>
            </div>
            <p className="text-4xl font-semibold text-[#F85F35]">
              {roadmap.progress}%
            </p>
            <p className="mt-2 text-sm text-[#6B7280]">Complete</p>
            <div className="mt-7 space-y-4 text-left text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Completed Steps</span>
                <span className="font-semibold text-[#111827]">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Remaining Steps</span>
                <span className="font-semibold text-[#111827]">34</span>
              </div>
            </div>
          </section>

          <section className="rounded-[10px] border border-[#E5E7EB] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#111827]">Next Steps</h2>
            <div className="mt-5 rounded-[8px] bg-[#FFF0EA] p-5">
              <p className="text-lg font-semibold text-[#F85F35]">
                Continue Learning
              </p>
              <p className="mt-2 text-sm leading-6 text-[#F85F35]">
                Step 1: Master the Fundamentals of UI/UX Design
              </p>
              <Button
                type="button"
                className="mt-5 h-11 w-full rounded-[4px] bg-[#F85F35] text-white hover:bg-[#E85229]"
              >
                Continue
              </Button>
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}

function MapNode({
  children,
  variant = "branch",
  className,
}: {
  children: React.ReactNode;
  variant?: "main" | "branch" | "small";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-10 flex items-center justify-center rounded-[5px] bg-[#FFE18A] px-4 py-3 text-center font-medium text-[#111111]",
        variant === "main" &&
          "bg-[#F8B900] px-7 py-5 text-lg font-bold shadow-sm",
        variant === "small" && "px-3 py-2 text-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

function RoadmapCanvas() {
  return (
    <div className="relative min-h-[1080px] overflow-hidden bg-white">
      <div className="absolute left-1/2 top-10 h-[1000px] w-[3px] -translate-x-1/2 bg-[#BEBEBE]" />

      <div className="absolute left-1/2 top-8 w-[410px] -translate-x-1/2">
        <MapNode variant="main">
          Game Development
          <br />
          Core Concepts
        </MapNode>
      </div>

      <div className="absolute left-[15%] top-5 grid gap-5">
        {["Game Engines...", "Game Loop & F...", "Game Objects...", "2D vs 3D Gam...", "Player Experien..."].map(
          (item) => (
            <MapNode key={item}>{item}</MapNode>
          ),
        )}
      </div>
      <div className="absolute right-[11%] top-5 grid gap-5">
        {["C# Syntax & Ba...", "Object-Oriente...", "Classes, Inheri...", "Interfaces & A...", "Delegates, Eve...", "LINQ & Collecti..."].map(
          (item) => (
            <MapNode key={item}>{item}</MapNode>
          ),
        )}
      </div>

      <div className="absolute left-1/2 top-[260px] w-[500px] -translate-x-1/2">
        <MapNode variant="main">
          Step 2: Master UI/UX Design Processes
          <span className="mt-1 block text-sm font-normal">
            Understanding user-centered design processes is essential for
            creating effective user experiences.
          </span>
        </MapNode>
      </div>

      <div className="absolute left-[14%] top-[435px] grid gap-3">
        {["Adobe XD", "Figma", "Sketch"].map((item) => (
          <MapNode key={item}>{item}</MapNode>
        ))}
      </div>
      <div className="absolute right-[13%] top-[435px] grid gap-3">
        {["Adobe XD", "Figma", "Sketch"].map((item) => (
          <MapNode key={item}>{item}</MapNode>
        ))}
      </div>

      <div className="absolute left-1/2 top-[555px] w-[260px] -translate-x-1/2">
        <MapNode variant="main">Design Principles</MapNode>
      </div>

      <div className="absolute left-1/2 top-[720px] w-[450px] -translate-x-1/2">
        <MapNode variant="main">
          C# Programming for Games
          <span className="mt-1 block text-sm font-normal">
            Understanding user-centered design processes is essential for
            creating effective user experiences.
          </span>
        </MapNode>
      </div>

      <div className="absolute left-1/2 top-[930px] w-[260px] -translate-x-1/2">
        <MapNode variant="main">Design Principles</MapNode>
      </div>

      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 1000 1080"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="none" stroke="#B8B8B8" strokeWidth="4">
          <path d="M255 70 C355 70 350 120 430 120" />
          <path d="M255 140 C355 140 350 120 430 120" />
          <path d="M255 210 C355 210 350 120 430 120" />
          <path d="M255 280 C355 280 350 120 430 120" />
          <path d="M255 350 C355 350 350 120 430 120" />
          <path d="M745 70 C645 70 650 120 570 120" />
          <path d="M745 140 C645 140 650 120 570 120" />
          <path d="M745 210 C645 210 650 120 570 120" />
          <path d="M745 280 C645 280 650 120 570 120" />
          <path d="M745 350 C645 350 650 120 570 120" />
          <path d="M745 420 C645 420 650 120 570 120" />
          <path d="M250 500 C360 500 350 610 430 610" />
          <path d="M750 500 C640 500 650 610 570 610" />
          <path d="M250 545 C360 545 350 610 430 610" />
          <path d="M750 545 C640 545 650 610 570 610" />
          <path d="M250 590 C360 590 350 610 430 610" />
          <path d="M750 590 C640 590 650 610 570 610" />
        </g>
      </svg>
    </div>
  );
}

function RoadmapDetail({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex h-20 items-center justify-between border-b border-[#E5E7EB] px-5 md:px-8">
        <button
          type="button"
          onClick={onBack}
          className="flex min-w-0 items-center gap-3 text-left text-xl font-medium text-[#111827]"
        >
          <ArrowLeft className="size-5 shrink-0" />
          <span className="truncate">{title}</span>
        </button>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            type="button"
            variant="outline"
            className="h-11 rounded-full border-[#111111] px-5 text-sm font-medium"
          >
            <Target className="size-4" />
            Personalize & Track
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 rounded-full border-[#111111] px-5 text-sm font-medium"
          >
            <Sparkles className="size-4 fill-[#635BFF] text-[#635BFF]" />
            AI Tutor
          </Button>
        </div>
      </header>

      <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-[430px_1fr]">
        <aside className="border-r border-[#E5E7EB] bg-white p-5 md:p-7">
          <h2 className="text-xl font-semibold text-[#111111]">
            Learning Path & Resources
          </h2>
          <div className="mt-6 space-y-5">
            {roadmapModules.map((module, index) => (
              <article
                key={module.title}
                className={cn(
                  "rounded-[8px] border bg-white p-5",
                  index === 0 ? "border-[#BFD8FF]" : "border-[#E7E7E7]",
                )}
              >
                <div className="flex gap-4">
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-full text-lg font-semibold",
                      index === 0
                        ? "bg-[#3B82F6] text-white"
                        : "border-2 border-[#F85F35] text-[#F85F35]",
                    )}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-[#111111]">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#666666]">
                      {module.body}
                    </p>
                    <button
                      type="button"
                      className="mt-5 flex items-center gap-2 text-sm text-[#F85F35]"
                    >
                      <BookOpen className="size-4" />
                      Smart Resources
                      <ChevronDown className="size-4" />
                    </button>
                    {index === 0 ? (
                      <p className="mt-5 text-center text-sm text-[#999999]">
                        No resources found. Try another topic.
                      </p>
                    ) : (
                      <div className="mt-4 space-y-3">
                        {module.resources.map((resource) => (
                          <div
                            key={resource}
                            className="flex items-center gap-3 rounded-[8px] bg-[#F8F8F8] p-4 text-sm font-medium text-[#111111]"
                          >
                            <span className="size-5 rounded-full bg-[#D9D9D9]" />
                            {resource}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>

        <section className="relative overflow-auto bg-white">
          <RoadmapCanvas />
        </section>
      </div>
    </div>
  );
}

export function CareerRoadmapBuilder() {
  const [isBuilding, setIsBuilding] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [selectedRoadmap, setSelectedRoadmap] = React.useState<
    (typeof exploreRoadmaps)[number] | null
  >(null);
  const [selectedProgressRoadmap, setSelectedProgressRoadmap] = React.useState<
    (typeof myRoadmaps)[number] | null
  >(myRoadmaps[0]);
  const [stepIndex, setStepIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answers>({});
  const [generatedRoadmap, setGeneratedRoadmap] = React.useState<string | null>(
    null,
  );
  const generateRoadmap = useGenerateCareerRoadmapMutation();

  const step = steps[stepIndex];
  const progress = Math.max(8, ((stepIndex + 1) / steps.length) * 100);
  const answer = answers[step.id] ?? "";
  const canContinue = answer.trim().length > 0;
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  if (selectedRoadmap) {
    return (
      <RoadmapDetail
        title={selectedRoadmap.title}
        onBack={() => setSelectedRoadmap(null)}
      />
    );
  }

  const updateAnswer = (value: string) => {
    setAnswers((current) => ({ ...current, [step.id]: value }));
  };

  const resetBuilder = () => {
    setIsBuilding(false);
    setStepIndex(0);
    setAnswers({});
    setGeneratedRoadmap(null);
  };

  const finish = React.useCallback(async () => {
    setGeneratedRoadmap(null);
    try {
      const response = await generateRoadmap.mutateAsync({
        name: answers.name,
        targetRole: answers.targetRole,
        currentExperience: `${answers.experience}; current role: ${answers.currentRole}; goal: ${answers.learningGoal}`,
        timeline: answers.weeklyHours,
        skills: [],
        learningPreferences: "Personalized roadmap with practical projects, learning milestones, and job-readiness actions.",
      } as any);
      setGeneratedRoadmap(formatCareerAIResult(response));
    } catch (error: any) {
      toast.error(error?.message || "Unable to generate roadmap right now.");
      setGeneratedRoadmap(
        `## ${answers.targetRole} Career Roadmap\n\n### Phase 1: Foundation\nBuild the core skills for ${answers.targetRole} with a weekly study routine that fits ${answers.weeklyHours}.\n\n### Phase 2: Portfolio\nCreate two practical projects that prove your ability and match your goal: ${answers.learningGoal}.\n\n### Phase 3: Career Readiness\nRefine your resume, LinkedIn profile, interview stories, and application plan for your target role.`,
      );
    }
  }, [answers, generateRoadmap]);

  const goNext = React.useCallback(() => {
    if (!canContinue || generateRoadmap.isPending) return;
    if (isLastStep) {
      void finish();
      return;
    }
    setStepIndex((current) => current + 1);
  }, [canContinue, finish, generateRoadmap.isPending, isLastStep]);

  React.useEffect(() => {
    if (!isBuilding || generatedRoadmap) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && canContinue) {
        event.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [canContinue, generatedRoadmap, goNext, isBuilding]);

  React.useEffect(() => {
    if (selectedProgressRoadmap) {
      setActiveTab("My Roadmaps");
    }
  }, [selectedProgressRoadmap]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-24 md:pb-8">
      <div className="mx-auto w-full overflow-x-hidden bg-white md:min-h-screen">
        <header className="flex items-center justify-between px-5 py-5 md:hidden">
          <Image
            src="/assets/logos/full-logo-dark.svg"
            width={156}
            height={42}
            alt="Ayonaire"
            className="h-auto w-36 md:w-40"
            priority
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="flex size-11 items-center justify-center rounded-full bg-[#F7F7F7] text-black transition hover:bg-[#EFEFEF]"
            >
              <Bell className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Settings"
              className="flex size-11 items-center justify-center rounded-full bg-[#F7F7F7] text-black transition hover:bg-[#EFEFEF]"
            >
              <Settings className="size-5" />
            </button>
          </div>
        </header>

        <main className="min-w-0 px-5 pb-10 pt-2 md:px-12 md:pt-12 xl:px-16">
          {!isBuilding ? (
            <>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h1 className="text-2xl font-semibold tracking-normal text-[#111111] md:text-[28px]">
                    Career Roadmaps
                  </h1>
                  <p className="mt-2 text-sm text-[#777777] md:text-base">
                    Follow personalized learning paths to achieve your career
                    goals
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsBuilding(true)}
                  aria-label="Create roadmap"
                  className="flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFF0EA] px-0 text-[#F85F35] transition hover:bg-[#FFE4DA] sm:w-auto sm:rounded-[4px] sm:bg-[#F85F35] sm:px-5 sm:text-white sm:hover:bg-[#E85229] md:h-11"
                >
                  <Plus className="size-4" />
                  <span className="hidden text-sm font-medium sm:inline">
                    Personalize Roadmap
                  </span>
                </button>
              </div>

              <div className="mt-8 overflow-hidden rounded-[8px] bg-[#F5F5F5] p-1.5">
                <div className="grid grid-cols-3 gap-2">
                  {tabs.map((tab) => (
                    <button
                      type="button"
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "h-12 min-w-0 rounded-[6px] px-2 text-sm transition md:h-11 md:text-sm",
                        activeTab === tab
                          ? "bg-white text-black shadow-sm"
                          : "text-[#777777] hover:bg-white/60",
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === "Explore" ? (
                <section className="mt-10 rounded-[8px] border border-[#E5E7EB] bg-white p-6 md:p-8">
                  <h2 className="text-2xl font-semibold tracking-normal text-[#111111]">
                    Explore Career Paths
                  </h2>
                  <p className="mt-2 text-base text-[#6B7280]">
                    Discover new career opportunities and learning paths
                  </p>
                  <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {exploreRoadmaps.map((roadmap) => (
                      <ExploreRoadmapCard
                        key={roadmap.title}
                        roadmap={roadmap}
                        onStart={() => setSelectedRoadmap(roadmap)}
                      />
                    ))}
                  </div>
                </section>
              ) : activeTab === "Achievements" ? (
                <AchievementsPanel />
              ) : (
                selectedProgressRoadmap ? (
                  <>
                    <section className="mt-10 grid gap-7 md:grid-cols-2">
                      {myRoadmaps.map((roadmap) => (
                        <MyRoadmapCard
                          key={roadmap.title}
                          roadmap={roadmap}
                          selected={roadmap.title === selectedProgressRoadmap.title}
                          onOpen={() => setSelectedProgressRoadmap(roadmap)}
                        />
                      ))}
                    </section>
                    <RoadmapProgressDetail roadmap={selectedProgressRoadmap} />
                  </>
                ) : (
                  <section className="mt-10 grid gap-7 md:grid-cols-2">
                    {myRoadmaps.map((roadmap) => (
                      <MyRoadmapCard
                        key={roadmap.title}
                        roadmap={roadmap}
                        selected={false}
                        onOpen={() => setSelectedProgressRoadmap(roadmap)}
                      />
                    ))}
                  </section>
                )
              )}
            </>
          ) : (
            <section className="mx-auto w-full max-w-[1120px] pt-10 md:pt-16">
              {!generatedRoadmap ? (
                <>
                  <div className="text-center">
                    <h1 className="text-2xl font-semibold tracking-normal text-[#111111] md:text-[32px]">
                      Career Roadmap Builder
                    </h1>
                    <p className="mt-4 text-base text-[#555555] md:text-lg">
                      Answer a few questions to create your personalized
                      learning roadmap
                    </p>
                  </div>

                  <div className="mx-auto mt-12 max-w-[860px]">
                    <ProgressBar value={progress} />
                  </div>

                  <div className="mt-12 rounded-[8px] border border-[#D7D7D7] bg-white p-5 md:p-10">
                    <h2 className="text-lg font-medium text-[#111111] md:text-xl">
                      {step.title}
                    </h2>

                    {step.type === "text" ? (
                      <Input
                        autoFocus
                        value={answer}
                        onChange={(event) => updateAnswer(event.target.value)}
                        placeholder={step.placeholder}
                        className="mt-8 h-16 rounded-[8px] border-[#E7E7E7] px-6 text-base placeholder:text-[#9A9A9A] focus-visible:ring-[#F85F35]"
                      />
                    ) : (
                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {step.options.map((option) => (
                          <ChoiceOption
                            key={option}
                            label={option}
                            selected={answer === option}
                            onSelect={() => updateAnswer(option)}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-12 flex items-center justify-between gap-4">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() =>
                        isFirstStep
                          ? resetBuilder()
                          : setStepIndex((current) => current - 1)
                      }
                      className="h-14 min-w-36 rounded-[4px] bg-[#F4F4F4] px-8 text-base font-normal text-[#777777] hover:bg-[#ECECEC]"
                    >
                      <ArrowLeft className="size-5" />
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={goNext}
                      disabled={!canContinue || generateRoadmap.isPending}
                      className={cn(
                        "h-14 min-w-40 rounded-[4px] px-8 text-base font-normal",
                        canContinue
                          ? "bg-[#F85F35] text-white hover:bg-[#E85229]"
                          : "bg-[#FFF0EA] text-[#F85F35] hover:bg-[#FFF0EA]",
                      )}
                    >
                      {generateRoadmap.isPending ? (
                        <>
                          <Loader2 className="size-5 animate-spin" />
                          Creating
                        </>
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="size-5" />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="mt-8 text-center text-sm text-[#777777]">
                    Press Enter to continue after selecting your answer
                  </p>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <h1 className="text-2xl font-semibold tracking-normal text-[#111111] md:text-[32px]">
                      Your Roadmap Is Ready
                    </h1>
                    <p className="mt-4 text-base text-[#555555] md:text-lg">
                      A personalized learning path for {answers.targetRole}.
                    </p>
                  </div>

                  <div className="mt-10 rounded-[8px] border border-[#D7D7D7] bg-white p-6 md:p-10">
                    <div className="prose prose-sm max-w-none md:prose-base">
                      <ReactMarkdown>{generatedRoadmap}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        setGeneratedRoadmap(null);
                        setStepIndex(steps.length - 1);
                      }}
                      className="h-14 min-w-36 rounded-[4px] bg-[#F4F4F4] px-8 text-base font-normal text-[#777777] hover:bg-[#ECECEC]"
                    >
                      <ArrowLeft className="size-5" />
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={resetBuilder}
                      className="h-14 rounded-[4px] bg-[#F85F35] px-8 text-base font-normal text-white hover:bg-[#E85229]"
                    >
                      Create another roadmap
                    </Button>
                  </div>
                </>
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
