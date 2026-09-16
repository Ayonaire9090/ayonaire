import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

const modules = [
  "Python Foundations",
  "Advanced Python Programming",
  "Numerical Computing with NumPy",
  "Data Analysis with Pandas",
  "Data Visualization with Matplotlib & Seaborn",
  "Working with Databases - SQL & NoSQL",
  "Building Interactive Data Apps with Streamlit",
  "Foundations of Statistics",
  "Advanced Statistical Analysis",
  "Feature Engineering for Machine Learning",
  "Exploratory Data Analysis",
  "Machine Learning Fundamentals",
  "Ensemble & Advanced ML Techniques",
  "Building Production APIs with FastAPI",
  "MLflow",
  "NLP for Machine Learning",
  "Big Data Processing with PySpark",
  "Deep Learning Foundations",
  "Advanced Deep Learning for NLP",
  "Introduction to Generative AI",
  "Vector Databases for AI Applications",
  "Comprehensive Guide to LangChain",
  "Retrieval-Augmented Generation",
  "Enterprise LLM Systems & Infrastructure",
  "Introduction to Agentic AI",
  "LangGraph Fundamentals",
  "State Management & Memory in LangGraph",
  "UX & Human-in-the-Loop Systems",
  "Agentic RAG Systems",
  "Model Context Protocol - MCP",
  "Multi-Agent Systems for Research Automation",
  "End-to-End AI & Data Projects",
];

const lessonDetails = [
  "Overview of Python and comparison with other programming languages",
  "Python objects: Numbers, Booleans, and Strings",
  "Container objects and mutability, Operators: Arithmetic, Bitwise, Comparison, and Assignment, Operator precedence",
  "Conditional statements, loops, break and continue statements, and range function",
];

export default function CurriculumSection() {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[linear-gradient(165deg,#302018_0%,#ff6b00_52%,#1c1c1c_53%)] opacity-90" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        <h2 className={`${melodrama.className} text-center text-[30px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}>
          Now, take a look at the{" "}
          <span className="relative inline-block text-[#ff6b00]">
            <span className="relative z-10">curriculum.</span>
            <Image src="/assets/images/ai-fullstack-engineering/curriculum-highlight.svg" alt="" width={324} height={58} className="pointer-events-none absolute left-1/2 top-1/2 h-[58px] w-[min(324px,112%)] -translate-x-1/2 -translate-y-1/2 object-fill" />
          </span>
        </h2>

        <p className={`${exo.className} text-justify text-[18px] font-medium leading-[1.55] tracking-[0.5px] text-white lg:text-[28px] lg:leading-[1.5]`}>
          The curriculum is designed to take you from <strong>writing your first lines of Python</strong> to <strong>building and deploying end-to-end AI systems.</strong>
        </p>

        <h3 className={`${melodrama.className} text-center text-[30px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-white lg:text-[44px]`}>
          Course Curriculum.
        </h3>

        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-20">
          <div className="max-h-[855px] overflow-y-auto pr-2">
            <ol className="space-y-5">
              {modules.map((module, index) => (
                <li key={`${index}-${module}`} className="grid grid-cols-[56px_1fr] items-start gap-5">
                  <span className={`flex h-10 w-14 items-center justify-center rounded-[3px] text-[16px] font-bold ${index === 0 ? "bg-[#ff6b00] text-white" : "bg-white text-black"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`${exo.className} text-[18px] leading-[1.35] tracking-[-0.3px] text-white lg:text-[24px]`}>
                    {module}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <article className="max-h-[855px] overflow-y-auto rounded-[12px] bg-[rgba(255,255,255,0.1)] p-6 lg:p-12">
            <p className={`${exo.className} text-[22px] font-bold leading-[1.4] tracking-[-0.4px] text-[#ff6b00] lg:text-[32px]`}>
              Module 1
            </p>
            <h4 className={`${exo.className} mt-6 text-[28px] font-bold leading-[1.3] tracking-[-0.6px] text-white lg:text-[40px]`}>
              Python Foundations
            </h4>
            <ol className="mt-8 space-y-8">
              {lessonDetails.map((lesson, index) => (
                <li key={lesson} className="grid grid-cols-[48px_1fr] gap-5">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[rgba(248,100,50,0.37)] text-[20px] text-white">
                    {index + 1}
                  </span>
                  <span className={`${exo.className} text-[18px] leading-[1.55] tracking-[0.4px] text-white lg:text-[28px]`}>
                    {lesson}
                  </span>
                </li>
              ))}
            </ol>
          </article>
        </div>

        <a href="#enroll" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-10 py-5 text-[15px] font-bold uppercase text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] lg:text-[18px]`}>
          I want to become an AI/ML engineer
          <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4" />
        </a>
      </div>
    </section>
  );
}
