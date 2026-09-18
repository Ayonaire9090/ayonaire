"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { exo, exoMedium, melodrama, adineue } from "@/app/fonts";

const modules = [
  {
    title: "Python Foundations",
    lessons: [
      "Overview of Python and comparison with other programming languages",
      "Python objects: Numbers, Booleans, and Strings",
      "Container objects and mutability",
      "Operators: Arithmetic, Bitwise, Comparison, and Assignment",
      "Operator precedence",
      "Conditional statements",
      "Loops, break and continue statements",
      "Range function",
    ],
  },

  {
    title: "Advanced Python Programming",
    lessons: [
      "Functions and advanced function concepts",
      "Object-Oriented Programming",
      "Classes, objects, inheritance and polymorphism",
      "Exception handling",
      "Working with files and directories",
      "Modules and packages",
      "Virtual environments and dependency management",
      "Writing clean and reusable Python code",
    ],
  },

  {
    title: "Numerical Computing with NumPy",
    lessons: [
      "Introduction to NumPy",
      "Creating and manipulating NumPy arrays",
      "Indexing, slicing and reshaping",
      "Vectorized operations",
      "Broadcasting",
      "Mathematical and statistical operations",
      "Working with multidimensional arrays",
    ],
  },

  {
    title: "Data Analysis with Pandas",
    lessons: [
      "Introduction to Pandas",
      "Series and DataFrames",
      "Loading and inspecting datasets",
      "Cleaning and transforming data",
      "Handling missing values",
      "Filtering, sorting and grouping",
      "Merging and joining datasets",
      "Working with dates and time series data",
    ],
  },

  {
    title: "Data Visualization with Matplotlib & Seaborn",
    lessons: [
      "Introduction to data visualization",
      "Building charts with Matplotlib",
      "Bar charts, line charts and scatter plots",
      "Histograms and distribution plots",
      "Advanced visualizations with Seaborn",
      "Customizing plots",
      "Choosing the right visualization for your data",
    ],
  },

  {
    title: "Working with Databases - SQL & NoSQL",
    lessons: [
      "Introduction to relational databases",
      "Writing SQL queries",
      "Filtering, grouping and aggregation",
      "Joins and subqueries",
      "Database design fundamentals",
      "Introduction to NoSQL databases",
      "Working with document databases",
      "Connecting Python applications to databases",
    ],
  },

  {
    title: "Building Interactive Data Apps with Streamlit",
    lessons: [
      "Introduction to Streamlit",
      "Building your first data application",
      "Working with forms and user inputs",
      "Displaying dataframes and charts",
      "Managing application state",
      "Building interactive dashboards",
      "Deploying Streamlit applications",
    ],
  },

  {
    title: "Foundations of Statistics",
    lessons: [
      "Descriptive statistics",
      "Measures of central tendency",
      "Measures of dispersion",
      "Probability fundamentals",
      "Probability distributions",
      "Sampling and populations",
      "Confidence intervals",
      "Hypothesis testing fundamentals",
    ],
  },

  {
    title: "Advanced Statistical Analysis",
    lessons: [
      "Advanced hypothesis testing",
      "Correlation analysis",
      "Regression analysis",
      "Statistical significance",
      "ANOVA",
      "A/B testing",
      "Experimental design",
      "Interpreting statistical results",
    ],
  },

  {
    title: "Feature Engineering for Machine Learning",
    lessons: [
      "Understanding machine learning features",
      "Handling missing data",
      "Encoding categorical variables",
      "Feature scaling and normalization",
      "Feature transformation",
      "Feature selection",
      "Creating new features",
      "Building reusable preprocessing pipelines",
    ],
  },

  {
    title: "Exploratory Data Analysis",
    lessons: [
      "Understanding datasets before modelling",
      "Univariate analysis",
      "Bivariate analysis",
      "Multivariate analysis",
      "Detecting outliers",
      "Finding relationships between variables",
      "Identifying patterns and anomalies",
      "Communicating EDA findings",
    ],
  },

  {
    title: "Machine Learning Fundamentals",
    lessons: [
      "Introduction to machine learning",
      "Supervised and unsupervised learning",
      "Training, validation and test datasets",
      "Regression models",
      "Classification models",
      "Clustering",
      "Model evaluation",
      "Building end-to-end machine learning workflows",
    ],
  },

  {
    title: "Ensemble & Advanced ML Techniques",
    lessons: [
      "Decision trees",
      "Random Forest",
      "Gradient Boosting",
      "XGBoost",
      "Bagging and boosting",
      "Hyperparameter tuning",
      "Cross-validation",
      "Advanced model evaluation",
    ],
  },

  {
    title: "Building Production APIs with FastAPI",
    lessons: [
      "Introduction to APIs",
      "REST API fundamentals",
      "Building APIs with FastAPI",
      "Request and response models",
      "API validation",
      "Serving machine learning models",
      "Error handling",
      "Preparing APIs for deployment",
    ],
  },

  {
    title: "MLflow",
    lessons: [
      "Introduction to MLflow",
      "Experiment tracking",
      "Logging parameters and metrics",
      "Model tracking",
      "Model registry",
      "Versioning machine learning models",
      "Managing the model lifecycle",
    ],
  },

  {
    title: "NLP for Machine Learning",
    lessons: [
      "Introduction to Natural Language Processing",
      "Text preprocessing",
      "Tokenization",
      "Bag of Words and TF-IDF",
      "Text classification",
      "Sentiment analysis",
      "Evaluating NLP models",
    ],
  },

  {
    title: "Big Data Processing with PySpark",
    lessons: [
      "Introduction to big data",
      "Apache Spark fundamentals",
      "Working with PySpark DataFrames",
      "Transformations and actions",
      "Cleaning large datasets",
      "Aggregations",
      "Building scalable data processing workflows",
    ],
  },

  {
    title: "Deep Learning Foundations",
    lessons: [
      "Introduction to neural networks",
      "Neurons and activation functions",
      "Forward propagation",
      "Loss functions",
      "Backpropagation",
      "Optimizers",
      "Building neural networks",
      "Training and evaluating deep learning models",
    ],
  },

  {
    title: "Advanced Deep Learning for NLP",
    lessons: [
      "Word embeddings",
      "Sequence modelling",
      "Recurrent neural networks",
      "LSTM and GRU networks",
      "Attention mechanisms",
      "Transformer architecture",
      "Modern NLP workflows",
    ],
  },

  {
    title: "Introduction to Generative AI",
    lessons: [
      "What Generative AI is",
      "Foundation models",
      "Large Language Models",
      "Tokens and context windows",
      "Prompting fundamentals",
      "Using LLM APIs",
      "Building Generative AI applications",
    ],
  },

  {
    title: "Vector Databases for AI Applications",
    lessons: [
      "Understanding embeddings",
      "Vector representations",
      "Semantic search",
      "Vector database fundamentals",
      "Similarity search",
      "Storing and retrieving embeddings",
      "Building vector search applications",
    ],
  },

  {
    title: "Comprehensive Guide to LangChain",
    lessons: [
      "Introduction to LangChain",
      "Prompt templates",
      "Chains",
      "Models",
      "Tools",
      "Memory",
      "Document loaders",
      "Building complete LLM applications",
    ],
  },

  {
    title: "Retrieval-Augmented Generation",
    lessons: [
      "Introduction to RAG",
      "Document ingestion",
      "Chunking strategies",
      "Creating embeddings",
      "Retrieval techniques",
      "Building RAG pipelines",
      "Evaluating RAG systems",
      "Advanced RAG patterns",
    ],
  },

  {
    title: "Enterprise LLM Systems & Infrastructure",
    lessons: [
      "Designing production LLM systems",
      "LLM application architecture",
      "Model selection",
      "Cost and latency optimization",
      "Caching strategies",
      "Evaluation",
      "Observability",
      "Scaling LLM applications",
    ],
  },

  {
    title: "Introduction to Agentic AI",
    lessons: [
      "What AI agents are",
      "Agents vs traditional LLM applications",
      "Reasoning and planning",
      "Tools and tool calling",
      "Agent memory",
      "Building your first AI agent",
      "Agent architecture patterns",
    ],
  },

  {
    title: "LangGraph Fundamentals",
    lessons: [
      "Introduction to LangGraph",
      "Graph-based AI workflows",
      "Nodes and edges",
      "Creating agent states",
      "Conditional routing",
      "Building reliable agent workflows",
    ],
  },

  {
    title: "State Management & Memory in LangGraph",
    lessons: [
      "Understanding stateful AI systems",
      "Short-term memory",
      "Long-term memory",
      "Conversation persistence",
      "State checkpoints",
      "Managing complex agent workflows",
    ],
  },

  {
    title: "UX & Human-in-the-Loop Systems",
    lessons: [
      "Human-in-the-loop AI",
      "Approval workflows",
      "Escalation mechanisms",
      "Designing AI interactions",
      "Feedback loops",
      "Building safer AI workflows",
    ],
  },

  {
    title: "Agentic RAG Systems",
    lessons: [
      "Combining agents with RAG",
      "Agent-driven retrieval",
      "Query routing",
      "Tool-based retrieval",
      "Multi-step research workflows",
      "Building production Agentic RAG systems",
    ],
  },

  {
    title: "Model Context Protocol - MCP",
    lessons: [
      "Introduction to MCP",
      "MCP architecture",
      "Connecting AI systems to external tools",
      "Resources and tools",
      "Building MCP servers",
      "Integrating MCP with AI agents",
    ],
  },

  {
    title: "Multi-Agent Systems for Research Automation",
    lessons: [
      "Introduction to multi-agent systems",
      "Agent roles and responsibilities",
      "Agent collaboration",
      "Task delegation",
      "Research agents",
      "Planning and execution",
      "Building complete multi-agent workflows",
    ],
  },

  {
    title: "End-to-End AI & Data Projects",
    lessons: [
      "Planning production AI projects",
      "Data ingestion",
      "Model development",
      "AI application development",
      "API integration",
      "Evaluation and testing",
      "Deployment",
      "Monitoring and maintenance",
      "Building portfolio-ready AI systems",
    ],
  },
];

export default function CurriculumSection() {
  const [activeModule, setActiveModule] = useState(0);
  const outlineRef = useRef<HTMLElement | null>(null);

  const selectedModule = modules[activeModule];

  const handleModuleClick = (index: number) => {
    setActiveModule(index);

    // On smaller screens, take the user to the module outline.
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        outlineRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[linear-gradient(165deg,#302018_0%,#ff6b00_52%,#1c1c1c_53%)] opacity-90" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        {/* Heading */}
        <h2
          className={`${melodrama.className} text-center text-[30px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
        >
          Now, take a look at the{" "}
          <span className="relative inline-block text-[#ff6b00]">
            <span className="relative z-10">curriculum.</span>

            <Image
              src="/assets/images/ai-fullstack-engineering/curriculum-highlight.svg"
              alt=""
              width={324}
              height={58}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[58px] w-[min(324px,112%)] -translate-x-1/2 -translate-y-1/2 object-fill"
            />
          </span>
        </h2>

        {/* Intro */}
        <p
          className={`${exoMedium.className} text-justify text-[18px] font-medium leading-[1.55] tracking-[0.5px] text-white lg:text-[28px] lg:leading-[1.5]`}
        >
          The curriculum is designed to take you from{" "}
          <strong>writing your first lines of Python</strong> to{" "}
          <strong>building and deploying end-to-end AI systems.</strong>
        </p>

        <h3
          className={`${melodrama.className} text-center text-[30px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-white lg:text-[44px]`}
        >
          Course Curriculum.
        </h3>

        {/* Curriculum Area */}
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-20">
          {/* MODULE LIST */}
          <div className="max-h-[855px] overflow-y-auto pr-2">
            <ol className="space-y-4">
              {modules.map((module, index) => {
                const isActive = activeModule === index;

                return (
                  <li key={`${index}-${module.title}`}>
                    <button
                      type="button"
                      onClick={() => handleModuleClick(index)}
                      className={`
                        group
                        grid
                        w-full
                        grid-cols-[56px_1fr]
                        items-start
                        gap-5
                        rounded-[8px]
                        p-2
                        text-left
                        transition-all
                        duration-200
                        hover:bg-white/5
                        ${
                          isActive
                            ? "bg-white/[0.06]"
                            : "bg-transparent"
                        }
                      `}
                    >
                      {/* Module Number */}
                      <span
                        className={`
                          flex
                          h-10
                          w-14
                          items-center
                          justify-center
                          rounded-[3px]
                          text-[16px]
                          font-bold
                          transition-colors
                          ${
                            isActive
                              ? "bg-[#ff6b00] text-white"
                              : "bg-white text-black"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Module Name */}
                      <span
                        className={`
                          ${adineue.className}
                          pt-1
                          text-[18px]
                          leading-[1.35]
                          tracking-[-0.3px]
                          transition-colors
                          lg:text-[24px]
                          ${
                            isActive
                              ? "font-bold text-[#ff6b00]"
                              : "text-white group-hover:text-[#ff8a3d]"
                          }
                        `}
                      >
                        {module.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* SELECTED MODULE OUTLINE */}
          <article
            ref={outlineRef}
            className="
              max-h-[855px]
              scroll-mt-8
              overflow-y-auto
              rounded-[12px]
              bg-[rgba(255,255,255,0.1)]
              p-6
              lg:sticky
              lg:top-8
              lg:p-12
            "
          >
            {/* Module Number */}
            <p
              className={`${exo.className} text-[22px] font-bold leading-[1.4] tracking-[-0.4px] text-[#ff6b00] lg:text-[32px]`}
            >
              Module {activeModule + 1}
            </p>

            {/* Module Title */}
            <h4
              className={`${exo.className} mt-4 text-[18px] font-bold leading-[1.3] tracking-[-0.6px] text-white lg:mt-6 lg:text-[30px]`}
            >
              {selectedModule.title}
            </h4>

            {/* Module lessons */}
            <ol className="mt-8 space-y-6 lg:space-y-8">
              {selectedModule.lessons.map((lesson, index) => (
                <li
                  key={`${selectedModule.title}-${lesson}`}
                  className="grid grid-cols-[48px_1fr] items-start gap-5"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[rgba(248,100,50,0.37)] text-[20px] font-medium text-white">
                    {index + 1}
                  </span>

                  <span
                    className={`${adineue.className} pt-1 text-[18px] leading-[1.55] tracking-[0.4px] text-white lg:text-[24px]`}
                  >
                    {lesson}
                  </span>
                </li>
              ))}
            </ol>
          </article>
        </div>

        {/* CTA */}
        <a
          href="#enroll"
          className={`${exoMedium.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-10 py-5 text-center text-[15px] font-bold uppercase text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] lg:text-[18px]`}
        >
          I want to become an AI/ML engineer

          <Image
            src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </a>
      </div>
    </section>
  );
}