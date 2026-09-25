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
      "Container objects and mutability, Operators: Arithmetic, Bitwise, Comparison, and Assignment, Operator precedence",
      "Conditional statements (if, if-elif-else), Loops (for, while), Break and continue statements, Range function",
      "String basics, inbuilt methods, splitting and joining, formatting, Basic data structures in Python: Lists, Tuples, Sets, and Dictionaries, List and Dictionary comprehensions, Dictionary view objects",
      "Function basics and parameter passing, Iterators and generator functions, Lambda functions, Map function and functional style programming",
    ],
  },

  {
    title: "Advanced Python Programming",
    lessons: [
      "OOP concepts and class creation, Inheritance, Polymorphism, Encapsulation, and Abstraction, Decorators, class methods, and static methods, Special (Magic/Dunder) methods",
      "Reading and writing files, Buffered read and write operations, Other file handling methods",
      "Importing and managing modules, Using try-except blocks, Custom exceptions and best practices for error handling",
    ],
  },

  {
    title: "Numerical Computing with NumPy",
    lessons: [
      "Understanding NdArray objects, Data types and array attributes",
      "Creating arrays from existing data and numerical ranges, Indexing and slicing arrays",
      "Broadcasting and iterating over arrays, Array manipulation techniques, Arithmetic and mathematical operations",
      "Statistical functions, sorting, searching, and counting operations, Binary and string functions",
      "Matrix library overview, Copy vs view behavior in NumPy arrays",
    ],
  },

  {
    title: "Data Analysis with Pandas",
    lessons: [
      "Series, DataFrame, and Panel structures, Basic functionality and reindexing",
      "Iteration, sorting, indexing, and selecting data",
      "Working with text data, Date and time functionality, Timedelta and categorical data",
      "Descriptive statistics and built-in statistical functions, Basic visualization with Pandas",
    ],
  },

  {
    title: "Data Visualization with Matplotlib & Seaborn",
    lessons: [
      "Introduction to Matplotlib, Creating and customizing plots, charts, and figures",
      "Introduction to Seaborn, Statistical visualizations such as histograms, pair plots, and heatmaps, Styling and aesthetics for better data communication",
    ],
  },

  {
    title: "Working with Databases - SQL & NoSQL",
    lessons: [
      "Understanding SQL queries, Primary and foreign keys, Joins and unions, Setting up Supabase with PostgreSQL, Connecting and executing SQL queries",
      "Getting started with MongoDB, Creating databases and collections, Insert, find, query, and sort operations, Updating and deleting records, Dropping collections",
    ],
  },

  {
    title: "Building Interactive Data Apps with Streamlit",
    lessons: [
      "Introduction to Streamlit and its core features, Creating interactive widgets",
      "Using session state for dynamic data handling, Implementing async and await for responsive apps",
    ],
  },

  {
    title: "Foundations of Statistics",
    lessons: [
      "Basic statistical terms, Types of statistics: Descriptive and Inferential, Types of data and levels of measurement",
      "Mean, median, and mode, Range, variance, and standard deviation",
      "Skewness and kurtosis, Covariance and correlation, Random variables and sets",
      "Probability basics, Probability density and mass functions, Cumulative distribution function (CDF)",
      "Binomial, Poisson, Normal (Gaussian), Bernoulli, and Uniform distributions, Understanding Z-statistics and the Central Limit Theorem, Examples of real-world normal distributions",
      "Concept of population and sample estimation, Confidence intervals",
    ],
  },

  {
    title: "Advanced Statistical Analysis",
    lessons: [
      "Steps and mechanism of hypothesis testing, P-values and statistical significance, Confidence levels and decision rules",
      "Bayes theorem and its applications",
      "Chi-square distribution, Goodness-of-fit test, Performing Chi-square using Python",
    ],
  },

  {
    title: "Feature Engineering for Machine Learning",
    lessons: [
      "Handling missing data, Managing imbalanced datasets, Detecting and treating outliers",
      "Feature scaling: normalization and standardization, Encoding categorical variables",
      "Backward and forward elimination, Correlation and covariance for feature relationships",
    ],
  },

  {
    title: "Exploratory Data Analysis",
    lessons: [
      "Purpose and process of exploratory analysis, Visualizing data patterns and relationships",
      "Sentiment analysis of movie reviews, Analyzing wine quality and types, Forecasting stock and commodity prices",
    ],
  },

  {
    title: "Machine Learning Fundamentals",
    lessons: [
      "Difference between AI, ML, DL, and Data Science, Types of learning: Supervised, Unsupervised, Semi-supervised, Reinforcement",
      "Simple and Multiple Linear Regression with implementation, Evaluation metrics: MSE, MAE, RMSE, R2, Linear Regression with Gradient Descent, Regularization methods: Ridge and Lasso",
      "Logistic Regression with implementation, Performance metrics: Confusion Matrix, Accuracy, Precision, Recall, F1 score",
      "Concept and kernel functions, SVM classifier and regressor implementation",
      "Naive Bayes classifier, K-Nearest Neighbors (KNN) classifier and regressor, Decision Tree classifier and regressor implementations",
    ],
  },

  {
    title: "Ensemble & Advanced ML Techniques",
    lessons: [
      "Bagging and Boosting methods, Random Forest classifier and regressor with implementation, Out-of-Bag evaluation",
      "Gradient Boosting classifier and regressor, XGBoost classifier and regressor with implementation",
      "Introduction to clustering, K-Means clustering algorithm",
    ],
  },

  {
    title: "Building Production APIs with FastAPI",
    lessons: [
      "What is FastAPI and why use it, Setting up a project structure, Hello World API, Understanding HTTP operations (GET, POST, PUT, DELETE)",
      "Using Pydantic for request and response validation, Defining data models for your API, Handling validation errors gracefully",
      "Adding error handling and appropriate status codes, Introduction to environment variables and configuration management, Simplifying API documentation with OpenAPI/Swagger UI",
    ],
  },

  {
    title: "MLflow",
    lessons: [
      "Core Components, Installation & Setup",
      "Logging Essentials, Artifact Management, Autologging, Analysis & Visualization",
      "Model Registry, Model Packaging, Lifecycle Stages, Stage Transitions",
      "Real-time Serving, Local Deployment, Containerization, Cloud & Orchestration",
    ],
  },

  {
    title: "NLP for Machine Learning",
    lessons: [
      "Overview of NLP and its real-world use cases, Key terminology and learning roadmap",
      "Tokenization, Stemming, lemmatization, and stopword removal, Parts of Speech tagging using NLTK, Named Entity Recognition",
      "One-hot encoding and N-grams (Bag of Words), TF-IDF intuition and implementation",
      "Concept of word vectors, Introduction to Word2Vec and word embeddings for contextual understanding",
    ],
  },

  {
    title: "Big Data Processing with PySpark",
    lessons: [
      "Why single-machine processing fails, Introduction to distributed computing and Apache Spark, Understanding the Spark architecture (Driver, Executors, Cluster Manager)",
      "Transitioning from Pandas to PySpark DataFrames, Performing data transformations (filtering, aggregations, joins), Querying data using Spark SQL, Handling complex data types",
      "Understanding transformations (lazy evaluation) vs. actions, A brief look at the Spark UI to visualize distributed execution, Using Spot Instances for cost-effective training jobs",
    ],
  },

  {
    title: "Deep Learning Foundations",
    lessons: [
      "Overview and evolution of deep learning, Why deep learning has become popular",
      "Understanding perceptron intuition, Working of artificial neural networks, Forward and backward propagation, Chain rule of derivatives in neural networks",
      "Vanishing and exploding gradient problems, Different activation functions and their roles, Types of loss functions and optimization algorithms",
      "Weight initialization methods, Dropout layers, Batch normalization",
      "Introduction to Keras and PyTorch fundamentals, Visualizing neural network architecture and performance",
    ],
  },

  {
    title: "Advanced Deep Learning for NLP",
    lessons: [
      "Recurrent Neural Networks (RNNs), Understanding sequence modeling and context preservation",
      "Long Short-Term Memory (LSTM) networks, Gated Recurrent Units (GRU) and their efficiency improvements",
      "Concept of attention in neural networks, Encoders and decoders in sequence-to-sequence models, Self-attention and attention neural networks",
      "Introduction to transformers, Understanding BERT and GPT model architectures and applications",
    ],
  },

  {
    title: "Introduction to Generative AI",
    lessons: [
      "What is Generative AI?, Why generative models are important, Understanding how generative models work",
      "Conceptual differences and use cases, Examples of generative vs discriminative tasks",
      "Latest research trends and breakthroughs, Key applications across industries, End-to-end generative AI project lifecycle",
    ],
  },

  {
    title: "Vector Databases for AI Applications",
    lessons: [
      "Understanding vector embeddings and similarity search, Comparison with SQL and NoSQL databases",
      "Data storage mechanisms and indexing, Types of vector databases: In-memory, on-disk, and cloud-based",
      "Chroma DB, Faiss, Quadrant, Pinecone, LanceDB",
      "Vector search with NoSQL databases (MongoDB, Cassandra), Embedding-based retrieval for AI pipelines",
    ],
  },

  {
    title: "Comprehensive Guide to LangChain",
    lessons: [
      "Introduction to LangChain, Data connectors and API integrations",
      "Chat models, tools, and toolkits, Prompt templating for context-aware LLMs",
      "LangChain Chains, LCEL, and Runnables, Synthetic data generation and memory management",
      "LangChain AI Agents, LangSmith for model monitoring, LangServe for model deployment",
    ],
  },

  {
    title: "Retrieval-Augmented Generation",
    lessons: [
      "Understanding Retrieval-Augmented Generation and its role in LLMs, The RAG pipeline overview",
      "Using LangChain, vector databases, and LLMs, Hybrid search and reranking techniques, Different retrieval methods for RAG",
      "Memory integration in RAG systems, Multimodal retrieval-augmented generation",
    ],
  },

  {
    title: "Enterprise LLM Systems & Infrastructure",
    lessons: [
      "RAG Triad Metrics, LLM-as-a-Judge, Turn-Based Evaluation",
      "Traces and Spans, Intermediate Output Access, Aggregated Analytics, Feedback & Annotation Loops, Prompt Optimisation Pipelines, Low-Code Agent Tracing",
      "Limitations of Traditional Vector RAG, Chunk-Free Segmentation, The Document Tree Model, The Iterative Search Loop, Deterministic Page Referencing",
      "OpenAI-Compatible Routing, Drop-In SDK Replacement, Automated Structured Fallbacks",
    ],
  },

  {
    title: "Introduction to Agentic AI",
    lessons: [
      "What are AI Agents?, Agentic AI vs traditional AI agents",
      "Agentic AI vs Generative AI, Understanding multi-agent systems and collaboration",
      "Overview of Agentic AI frameworks, Applications and trends in multi-agent AI",
    ],
  },

  {
    title: "LangGraph Fundamentals",
    lessons: [
      "Introduction to LangGraph, Understanding Simple Graphs and Node Connections, LangGraph Studio Overview",
      "Chains and Routers in LangGraph, Creating and Managing Agents, Implementing Agents with Memory",
      "Introduction to Deployment and Execution in LangGraph",
    ],
  },

  {
    title: "State Management & Memory in LangGraph",
    lessons: [
      "Introduction to LangGraph State System, Understanding State Schemas and Data Flow",
      "Creating and Managing State Reducers, Working with Multiple Schemas",
      "Trimming and Filtering Messages to Maintain Efficient Context",
    ],
  },

  {
    title: "UX & Human-in-the-Loop Systems",
    lessons: [
      "Implementing Streaming for Real-Time Updates, Understanding and Managing Breakpoints",
      "Editing State with Human Inputs, Dynamic Breakpoints and Controlled Execution",
      "Time Travel in LangGraph for Workflow Rewind and Testing",
    ],
  },

  {
    title: "Agentic RAG Systems",
    lessons: [
      "Understanding Adaptive RAG and its Variants, Implementing Adaptive RAG with Cohere, Running Adaptive RAG Locally",
      "Integrating Agents with RAG Pipelines, C-RAG (Contextual RAG) Concepts and Implementation",
      "Building Self-RAG Models, Integrating Self-RAG with Vector Databases, Deploying Self-RAG Locally",
    ],
  },

  {
    title: "Model Context Protocol (MCP)",
    lessons: [
      "Introduction to Model Context Protocol, Core Components and Architecture",
      "Data Flow and Communication between MCP Components, Integration with Tools like Claude Desktop and Cursor IDE",
      "Exploring Open MCP Repositories (e.g., Smithery.ai), Building MCP Servers with LangChain, Using Docker MCP Catalog and Toolkit",
    ],
  },

  {
    title: "Multi-Agent Systems for Research Automation",
    lessons: [
      "Introduction to Agentic AI and Multi-Agent Architectures, Designing Specialized Agents: Search, Reader, Analyst, Generator, Coordinator",
      "Managing Memory and Communication State, Prompt Engineering for Multi-Turn Collaboration, Integrating Human Feedback Checkpoints",
      "Connecting APIs like Arxiv, Search, and Paper Parsers, LangGraph-Structured Agent Workflows, Adding RAG for External Knowledge Integration",
      "FastAPI Backend for Multi-Agent Systems, UI for Logs, Graphs, and Reports, CI/CD Automation with GitHub Actions, Docker and AWS EC2 Deployment Pipeline",
    ],
  },

  {
    title: "End-to-End AI & Data Projects",
    lessons: [
      "End-to-End Review Scraper Project, Supabase and Streamlit Database Application",
      "Network Intrusion Detection System (ML Project)",
      "Text Summarization, Machine Translation, Question Answering",
      "RAG Q&A System with CI/CD Integration",
      "Multi-Agent System for Research Analysis and Generation Automation",
    ],
  },
];

export default function CurriculumSection() {
  const [activeModule, setActiveModule] = useState(0);
  const outlineRef = useRef<HTMLElement | null>(null);

  const selectedModule = modules[activeModule];

  const handleModuleClick = (index: number) => {
    setActiveModule(index);

    // On smaller screens, take the user smoothly to the module outline box.
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
    <section className="relative overflow-hidden bg-[#1c1c1c] px-5 pt-24 pb-16 text-white sm:px-8 lg:px-12 lg:pt-[180px] lg:pb-[120px] xl:px-16">
      {/* Top Decorative Background Shape */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[100vw] max-w-none select-none z-0">
        <Image
          src="/assets/images/ai-fullstack-engineering/curriculum-top-shape.svg"
          alt=""
          width={1440}
          height={403}
          className="w-[100vw] max-w-none h-auto object-cover object-top opacity-100"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        {/* Heading */}
        <h2
          className={`${melodrama.className} pt-16 sm:pt-20 lg:pt-24 text-center text-[30px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
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
          className={`${exoMedium.className} text-left text-[18px] font-medium leading-[1.55] tracking-[0.5px] text-white lg:text-[28px] lg:leading-[1.5]`}
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
        <div className="flex w-full flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-20">
          
          {/* MOBILE/TABLET HORIZONTAL NAV BUTTONS (Hidden on desktop) */}
          <div className="flex w-full overflow-x-auto pb-2 scrollbar-none lg:hidden">
            <div className="flex flex-row gap-3">
              {modules.map((module, index) => {
                const isActive = activeModule === index;

                return (
                  <button
                    key={`mob-mod-${index}`}
                    type="button"
                    onClick={() => handleModuleClick(index)}
                    className={`
                      shrink-0
                      rounded-[8px]
                      px-4
                      py-2.5
                      text-[14px]
                      font-bold
                      transition-all
                      ${
                        isActive
                          ? "bg-[#ff6b00] text-white shadow-[0_4px_12px_rgba(255,107,0,0.3)]"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }
                    `}
                  >
                    Module {index + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DESKTOP MODULE LIST (Hidden on mobile/tablet) */}
          <div className="hidden max-h-[855px] overflow-y-auto pr-2 lg:block">
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

          {/* SELECTED MODULE OUTLINE CONTAINER */}
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
          href="https://chat.whatsapp.com/HltOtTd5VrHJONFYDVb9VT?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className={`${exoMedium.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-center text-[14px] font-bold uppercase text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 sm:text-[16px] lg:text-[18px]`}
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
