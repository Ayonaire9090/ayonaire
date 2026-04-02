export interface SurveyQuestion {
  id: number;
  question: string;
}

export interface CourseSurvey {
  courseSlug: string;
  title: string;
  subtitle?: string;
  description: string;
  questions: SurveyQuestion[];
  resultTitle: string;
  actionRecommendation: string;
  heroImage?: string;
}

export const courseSurveys: Record<string, CourseSurvey> = {
  "certified-data-science": {
    courseSlug: "certified-data-science",
    title: "Data Science – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Data Science career suit you as a beginner data professional? This program is beginner-friendly. No prior coding or analytics experience is required.",
    resultTitle: "Data Scientist",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills. All our programs including the Data Scientist / AI bootcamp are designed for beginners, so you can start learning even if you’re new to coding or data.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in using data to solve real-world problems and make informed decisions.",
      },
      {
        id: 2,
        question:
          "I enjoy analyzing numbers, trends, and patterns to uncover insights.",
      },
      {
        id: 3,
        question:
          "I want to learn how to work with datasets, clean data, and prepare it for analysis.",
      },
      {
        id: 4,
        question:
          "I am curious about building models that can predict outcomes or classify information.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning programming and analytics concepts step by step, even if I’m new to them.",
      },
      {
        id: 6,
        question:
          "I want to understand how data science is used in industries like finance, healthcare, and tech.",
      },
      {
        id: 7,
        question:
          "I enjoy solving problems and thinking logically about data and processes.",
      },
      {
        id: 8,
        question:
          "I am interested in visualizing data to communicate insights effectively to others.",
      },
      {
        id: 9,
        question:
          "I want to learn how machine learning algorithms can help predict outcomes from data.",
      },
      {
        id: 10,
        question:
          "I am motivated to work on projects that involve real datasets and problem-solving.",
      },
      {
        id: 11,
        question:
          "I believe learning Data Science is important for building a career in analytics, AI, or tech.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Data Science and gain hands-on experience with data.",
      },
    ],
  },
  "certified-data-analytics": {
    courseSlug: "certified-data-analytics",
    title: "Data Analytics – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Data Analytics career suit you as a beginner data professional? This program is beginner-friendly. You don’t need prior analytics experience to start.",
    resultTitle: "Data Analyst",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in using data to help businesses make better decisions.",
      },
      {
        id: 2,
        question:
          "I enjoy analyzing numbers and data to uncover patterns and trends.",
      },
      {
        id: 3,
        question:
          "I want to learn how to turn raw data into easy-to-understand charts or reports.",
      },
      {
        id: 4,
        question:
          "I am curious about how data can help businesses solve problems or improve operations.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning new tools and concepts step by step, even if I’ve never done them before.",
      },
      {
        id: 6,
        question:
          "I want to understand how data is used to track performance and measure success.",
      },
      {
        id: 7,
        question:
          "I am interested in learning how to analyze trends to predict future outcomes.",
      },
      {
        id: 8,
        question:
          "I enjoy creating clear reports or visualizations that help others make decisions.",
      },
      {
        id: 9,
        question:
          "I believe learning data analytics will help me solve problems more effectively.",
      },
      {
        id: 10,
        question:
          "I want to improve business processes using insights from data.",
      },
      {
        id: 11,
        question:
          "I am excited to use tools like Excel, Power BI, or Tableau to analyze data.",
      },
      {
        id: 12,
        question:
          "I am motivated to build a strong foundation in data analytics for future careers in data, AI, or business intelligence.",
      },
    ],
  },
  "certified-data-engineering": {
    courseSlug: "certified-data-engineering",
    title: "Data Engineering – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Data Engineering career suit you as a beginner data professional? This program is beginner-friendly. No prior engineering or coding experience is required.",
    resultTitle: "Data Engineer",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in learning how to design, build, and maintain data systems.",
      },
      {
        id: 2,
        question:
          "I want to understand how data flows from source systems to analytics and dashboards.",
      },
      {
        id: 3,
        question:
          "I am curious about working with large datasets and making them accessible for analysis.",
      },
      {
        id: 4,
        question:
          "I enjoy problem-solving and figuring out logical ways to organize data.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning new technical tools step by step, even if I’m new to them.",
      },
      {
        id: 6,
        question:
          "I want to learn how databases, pipelines, and storage systems work together.",
      },
      {
        id: 7,
        question:
          "I enjoy exploring data and understanding how it can be structured efficiently.",
      },
      {
        id: 8,
        question:
          "I am interested in learning how to automate the movement and transformation of data.",
      },
      {
        id: 9,
        question:
          "I want to ensure data is clean, reliable, and ready for analytics or machine learning.",
      },
      {
        id: 10,
        question:
          "I am motivated to work with technologies that handle large-scale or streaming data.",
      },
      {
        id: 11,
        question:
          "I believe data engineering is a key skill for modern analytics, AI, and business intelligence.",
      },
      {
        id: 12,
        question:
          "I am excited to build a strong foundation in data engineering for a future in data-driven careers.",
      },
    ],
  },
  "ai-engineering": {
    courseSlug: "ai-engineering",
    title: "AI Engineering – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does an AI Engineering career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or AI experience is required.",
    resultTitle: "AI Engineer",
    actionRecommendation:
      "No matter your score, our AI Engineering program is beginner-friendly. You’ll learn step-by-step, build intelligent systems, and gain hands-on experience—even if you’ve never coded before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in building intelligent systems that can learn and make decisions.",
      },
      {
        id: 2,
        question:
          "I want to learn the fundamentals of AI, machine learning, and deep learning.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and working with algorithms and data to create smart solutions.",
      },
      {
        id: 4,
        question:
          "I am curious about programming languages like Python or R used in AI development.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I have never coded before.",
      },
      {
        id: 6,
        question:
          "I want to understand how AI models are trained, tested, and deployed in real applications.",
      },
      {
        id: 7,
        question: "I enjoy analyzing data and creating predictive models.",
      },
      {
        id: 8,
        question:
          "I am interested in learning AI tools, libraries, and frameworks like TensorFlow, PyTorch, or scikit-learn.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to build AI-powered applications and solutions.",
      },
      {
        id: 10,
        question:
          "I am motivated to experiment with AI models and improve them through testing.",
      },
      {
        id: 11,
        question:
          "I believe AI Engineering skills are essential for modern tech, data, and software careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning AI Engineering and build intelligent applications from scratch.",
      },
    ],
  },
  "generative-ai-engineering": {
    courseSlug: "generative-ai-engineering",
    title: "Generative AI Engineering – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Generative AI Engineering career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or AI experience is required.",
    resultTitle: "Generative AI Engineer",
    actionRecommendation:
      "No matter your score, our Generative AI Engineering program is beginner-friendly. You’ll learn step-by-step, build creative AI applications, and gain hands-on experience—even if you’ve never coded before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in building AI systems that can create content like text, images, audio, or video.",
      },
      {
        id: 2,
        question:
          "I want to learn the fundamentals of AI, machine learning, and generative models.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and experimenting with AI to generate creative outputs.",
      },
      {
        id: 4,
        question:
          "I am curious about programming languages like Python used in AI and generative AI development.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I have never coded before.",
      },
      {
        id: 6,
        question:
          "I want to understand how generative AI models are trained, fine-tuned, and deployed in applications.",
      },
      {
        id: 7,
        question:
          "I enjoy working with data and exploring how AI can produce realistic outputs.",
      },
      {
        id: 8,
        question:
          "I am interested in learning tools, libraries, and frameworks like TensorFlow, PyTorch, or Hugging Face for generative AI.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to create AI-generated content for real-world projects.",
      },
      {
        id: 10,
        question:
          "I am motivated to experiment with AI models to improve their outputs and creativity.",
      },
      {
        id: 11,
        question:
          "I believe Generative AI skills are essential for modern AI, tech, and creative careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Generative AI Engineering and build AI-powered creative applications.",
      },
    ],
  },
  "agentic-ai-engineering": {
    courseSlug: "agentic-ai-engineering",
    title: "Agentic AI Engineering – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does an Agentic AI Engineering career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or AI experience is required.",
    resultTitle: "Agentic AI Engineer",
    actionRecommendation:
      "No matter your score, our Agentic AI Engineering program is beginner-friendly. You’ll learn step-by-step, build autonomous AI applications, and gain hands-on experience—even if you’ve never coded before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in building AI systems that can autonomously plan, act, and make decisions.",
      },
      {
        id: 2,
        question:
          "I want to learn the fundamentals of AI, machine learning, and agentic AI techniques.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and experimenting with AI systems that can act independently.",
      },
      {
        id: 4,
        question:
          "I am curious about programming languages like Python used in AI and agentic AI development.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I have never coded before.",
      },
      {
        id: 6,
        question:
          "I want to understand how agentic AI models are trained, tested, and deployed for autonomous tasks.",
      },
      {
        id: 7,
        question:
          "I enjoy analyzing data and building systems that can make decisions without constant human input.",
      },
      {
        id: 8,
        question:
          "I am interested in learning tools, libraries, and frameworks like TensorFlow, PyTorch, or reinforcement learning libraries.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to create autonomous AI systems that perform real-world tasks.",
      },
      {
        id: 10,
        question:
          "I am motivated to experiment with AI agents to improve their performance and decision-making.",
      },
      {
        id: 11,
        question:
          "I believe Agentic AI skills are essential for advanced AI, robotics, and future tech careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Agentic AI Engineering and build autonomous AI systems.",
      },
    ],
  },
  "sql-for-data-professionals": {
    courseSlug: "sql-for-data-professionals",
    title: "SQL for Data Professionals – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does an SQL career path suit you as a data professional? This program is beginner-friendly. No prior SQL or database experience is required.",
    resultTitle: "SQL Specialist",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in learning how data is stored and retrieved from databases.",
      },
      {
        id: 2,
        question:
          "I want to feel confident working with data beyond spreadsheets.",
      },
      {
        id: 3,
        question:
          "I enjoy asking questions like “What happened?” or “Why did this change?” using data.",
      },
      {
        id: 4,
        question:
          "I am interested in learning how businesses use databases to store large amounts of data.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning technical tools step-by-step, even if I’m new to them.",
      },
      {
        id: 6,
        question:
          "I would enjoy learning how to write queries to find useful information in data.",
      },
      {
        id: 7,
        question:
          "I am interested in understanding how data from different tables can be combined.",
      },
      {
        id: 8,
        question:
          "I want to be able to answer business questions using structured data.",
      },
      { id: 9, question: "I enjoy solving logical problems step by step." },
      {
        id: 10,
        question:
          "I am interested in learning how SQL supports analytics, reporting, and dashboards.",
      },
      {
        id: 11,
        question:
          "I believe SQL is a core skill for growing as a data professional.",
      },
      {
        id: 12,
        question:
          "I am excited about building a strong SQL foundation for advanced data and analytics roles.",
      },
    ],
  },
  "certified-cybersecurity": {
    courseSlug: "certified-cybersecurity",
    title: "Cybersecurity – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Cybersecurity career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or cybersecurity experience is required.",
    resultTitle: "Cybersecurity Analyst",
    actionRecommendation:
      "No matter your score, our Cybersecurity program is beginner-friendly. You’ll learn step-by-step, build real security skills, and gain hands-on experience—even if you’ve never coded before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in learning how to protect computers, networks, and data from threats.",
      },
      {
        id: 2,
        question:
          "I want to understand how hackers think and how to defend against cyber attacks.",
      },
      {
        id: 3,
        question:
          "I enjoy solving problems and thinking logically about security challenges.",
      },
      {
        id: 4,
        question:
          "I am curious about how systems, networks, and applications can be made secure.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning technical tools step by step, even if I’ve never used them before.",
      },
      {
        id: 6,
        question:
          "I want to learn how to monitor networks, detect threats, and respond to security incidents.",
      },
      {
        id: 7,
        question:
          "I enjoy analyzing data to detect unusual patterns or potential vulnerabilities.",
      },
      {
        id: 8,
        question:
          "I am interested in learning about encryption, firewalls, and other security measures.",
      },
      {
        id: 9,
        question:
          "I want to understand ethical hacking and how to test systems for weaknesses safely.",
      },
      {
        id: 10,
        question:
          "I am motivated to develop skills that are in high demand in the tech industry.",
      },
      {
        id: 11,
        question:
          "I believe cybersecurity skills are essential for careers in tech, IT, and data protection.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning cybersecurity and gain hands-on skills to protect digital systems.",
      },
    ],
  },
  "certified-ethical-hacking": {
    courseSlug: "certified-ethical-hacking",
    title: "Ethical Hacking – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does an Ethical Hacking career suit you as a beginner tech professional? This program is beginner-friendly. No prior hacking or coding experience is required.",
    resultTitle: "Ethical Hacker",
    actionRecommendation:
      "No matter your score, our Ethical Hacking program is beginner-friendly. You’ll learn step-by-step, practice safe hacking techniques, and gain hands-on experience—even if you’ve never coded before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in learning how to test systems and networks for vulnerabilities safely.",
      },
      {
        id: 2,
        question:
          "I want to understand how hackers exploit weaknesses and how to prevent attacks.",
      },
      {
        id: 3,
        question:
          "I enjoy solving technical problems and thinking like a cybersecurity professional.",
      },
      {
        id: 4,
        question:
          "I am curious about tools and techniques used for ethical hacking and penetration testing.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning new technical skills step by step, even if I’m new to them.",
      },
      {
        id: 6,
        question:
          "I want to learn how to identify security weaknesses before they can be exploited.",
      },
      {
        id: 7,
        question:
          "I enjoy experimenting with systems safely to understand how they work.",
      },
      {
        id: 8,
        question:
          "I am interested in learning about network security, firewalls, and encryption methods.",
      },
      {
        id: 9,
        question:
          "I want to develop skills that are highly sought after in IT and cybersecurity jobs.",
      },
      {
        id: 10,
        question:
          "I am motivated to protect digital systems and sensitive information ethically.",
      },
      {
        id: 11,
        question:
          "I believe ethical hacking knowledge is essential for careers in cybersecurity and IT.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning ethical hacking and apply hands-on skills safely.",
      },
    ],
  },
  "certified-cloud-engineering": {
    courseSlug: "certified-cloud-engineering",
    title: "Cloud Computing Engineering – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Cloud Computing Engineering career suit you as a beginner tech professional? This program is beginner-friendly. No prior cloud or coding experience is required.",
    resultTitle: "Cloud Engineer",
    actionRecommendation:
      "No matter your score, our Cloud Computing Engineering program is beginner-friendly. You’ll learn step-by-step, build cloud infrastructure, and gain hands-on experience—even if you’ve never coded before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in learning how to design, deploy, and manage cloud-based systems.",
      },
      {
        id: 2,
        question:
          "I want to understand how cloud platforms like AWS, Azure, or Google Cloud work.",
      },
      {
        id: 3,
        question:
          "I enjoy solving technical problems and designing scalable solutions.",
      },
      {
        id: 4,
        question:
          "I am curious about virtualization, storage, and networking in cloud environments.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning technical tools and platforms step by step, even if I’m new.",
      },
      {
        id: 6,
        question:
          "I want to learn how to deploy and maintain applications securely in the cloud.",
      },
      {
        id: 7,
        question:
          "I enjoy working with technology to improve efficiency, scalability, and performance.",
      },
      {
        id: 8,
        question:
          "I am interested in automating cloud infrastructure and workflows.",
      },
      {
        id: 9,
        question:
          "I want to understand cloud security, compliance, and best practices.",
      },
      {
        id: 10,
        question:
          "I am motivated to develop skills that are highly sought after in IT and tech industries.",
      },
      {
        id: 11,
        question:
          "I believe cloud computing knowledge is essential for modern tech careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning cloud computing and gain hands-on experience with cloud platforms.",
      },
    ],
  },
  "certified-devops-engineering": {
    courseSlug: "certified-devops-engineering",
    title: "DevOps Engineering – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a DevOps Engineering career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or DevOps experience is required.",
    resultTitle: "DevOps Engineer",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in learning how to manage software development and IT operations together efficiently.",
      },
      {
        id: 2,
        question:
          "I want to understand how to automate deployment, testing, and monitoring of applications.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and optimizing processes for faster software delivery.",
      },
      {
        id: 4,
        question:
          "I am curious about tools like Git, Docker, Kubernetes, and CI/CD pipelines.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning technical tools and workflows step by step, even if I’m new.",
      },
      {
        id: 6,
        question:
          "I want to learn how to monitor systems, troubleshoot issues, and ensure uptime.",
      },
      {
        id: 7,
        question:
          "I enjoy collaborating across teams and understanding both development and operations perspectives.",
      },
      {
        id: 8,
        question:
          "I am interested in automating repetitive tasks to make software delivery faster and reliable.",
      },
      {
        id: 9,
        question:
          "I want to gain hands-on experience with cloud, servers, and infrastructure as code.",
      },
      {
        id: 10,
        question:
          "I am motivated to learn skills that are highly in demand in tech and IT industries.",
      },
      {
        id: 11,
        question:
          "I believe DevOps skills are essential for modern software development and IT careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning DevOps and gain practical skills to improve software delivery.",
      },
    ],
  },
  "full-stack-software-engineering": {
    courseSlug: "full-stack-software-engineering",
    title: "Full Stack Software Engineering – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Full Stack Software Engineering career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or development experience is required.",
    resultTitle: "Full Stack Engineer",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in building websites, web applications, and user-friendly software.",
      },
      {
        id: 2,
        question:
          "I want to learn both front-end (UI/UX) and back-end (server, databases) development.",
      },
      {
        id: 3,
        question:
          "I enjoy solving technical problems and writing code to make things work efficiently.",
      },
      {
        id: 4,
        question:
          "I am curious about programming languages like JavaScript, Python, or Java.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning coding concepts step by step, even if I’ve never programmed before.",
      },
      {
        id: 6,
        question:
          "I want to learn how to connect front-end interfaces to databases and servers.",
      },
      {
        id: 7,
        question:
          "I enjoy creating user-friendly designs and thinking about user experience.",
      },
      {
        id: 8,
        question:
          "I am interested in learning about version control systems like Git and collaborative development.",
      },
      {
        id: 9,
        question:
          "I want to develop skills that are highly in demand in software and tech industries.",
      },
      {
        id: 10,
        question:
          "I am motivated to work on real projects and build practical web applications.",
      },
      {
        id: 11,
        question:
          "I believe full stack development skills are essential for modern software engineering careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Full Stack Software Engineering and create real-world projects.",
      },
    ],
  },
  "frontend-development": {
    courseSlug: "frontend-development",
    title: "Frontend Development – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Frontend Development career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or development experience is required.",
    resultTitle: "Frontend Developer",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in designing and building visually appealing web pages and interfaces.",
      },
      {
        id: 2,
        question:
          "I want to learn HTML, CSS, and JavaScript to create interactive websites.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and finding ways to make web interfaces work efficiently.",
      },
      {
        id: 4,
        question:
          "I am curious about responsive design and making websites work on all devices.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning coding and design concepts step by step, even if I’m new.",
      },
      {
        id: 6,
        question:
          "I want to understand how to make websites interactive with animations, buttons, and forms.",
      },
      {
        id: 7,
        question:
          "I enjoy thinking about user experience (UX) and making websites easy to use.",
      },
      {
        id: 8,
        question:
          "I am interested in learning frameworks like React, Angular, or Vue.js.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to build real-world websites and applications.",
      },
      {
        id: 10,
        question:
          "I am motivated to turn designs and ideas into functional, interactive web pages.",
      },
      {
        id: 11,
        question:
          "I believe frontend development skills are essential for modern web and software careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Frontend Development and create real-world projects.",
      },
    ],
  },
  "backend-development": {
    courseSlug: "backend-development",
    title: "Backend Development – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Backend Development career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or development experience is required.",
    resultTitle: "Backend Developer",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in building the server-side logic that powers websites and applications.",
      },
      {
        id: 2,
        question:
          "I want to learn how databases, APIs, and servers interact to manage data efficiently.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and creating functional systems behind the scenes.",
      },
      {
        id: 4,
        question:
          "I am curious about programming languages like Python, Java, or Node.js for backend development.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning coding concepts step by step, even if I have no prior experience.",
      },
      {
        id: 6,
        question:
          "I want to learn how to create secure and scalable systems that handle large amounts of data.",
      },
      {
        id: 7,
        question:
          "I enjoy thinking about performance, efficiency, and reliability of software systems.",
      },
      {
        id: 8,
        question:
          "I am interested in working with server frameworks, databases, and APIs.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to build backend systems for real-world applications.",
      },
      {
        id: 10,
        question:
          "I am motivated to understand how the backend connects with frontend interfaces.",
      },
      {
        id: 11,
        question:
          "I believe backend development skills are essential for modern web and software careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Backend Development and gain hands-on coding experience.",
      },
    ],
  },
  "mobile-application-development": {
    courseSlug: "mobile-application-development",
    title: "Mobile Application Development – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Mobile App Development career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or app development experience is required.",
    resultTitle: "Mobile Developer",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in designing and building mobile applications for Android or iOS.",
      },
      {
        id: 2,
        question:
          "I want to learn programming languages and tools for mobile app development (like Java, Kotlin, Swift, or Flutter).",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and creating functional mobile applications.",
      },
      {
        id: 4,
        question:
          "I am curious about how mobile apps interact with databases, APIs, and cloud services.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning coding and mobile development step by step, even as a beginner.",
      },
      {
        id: 6,
        question:
          "I want to understand how to create user-friendly and visually appealing mobile app interfaces.",
      },
      {
        id: 7,
        question:
          "I enjoy thinking about user experience (UX) and making apps intuitive to use.",
      },
      {
        id: 8,
        question:
          "I am interested in learning cross-platform development frameworks like Flutter or React Native.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to build real-world mobile applications.",
      },
      {
        id: 10,
        question:
          "I am motivated to test, debug, and improve mobile applications.",
      },
      {
        id: 11,
        question:
          "I believe mobile app development skills are essential for modern software and tech careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Mobile App Development and build apps from scratch.",
      },
    ],
  },
  "certified-nlp-specialist": {
    courseSlug: "certified-nlp-specialist",
    title: "Certified NLP Expert – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Certified NLP Expert career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding, AI, or NLP experience is required.",
    resultTitle: "NLP Expert",
    actionRecommendation:
      "No matter your score, our Certified NLP Expert program is beginner-friendly. You’ll learn step-by-step, build real NLP applications, and gain hands-on experience—even if you’ve never coded before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in building AI systems that understand, interpret, and generate human language.",
      },
      {
        id: 2,
        question:
          "I want to learn the fundamentals of Natural Language Processing (NLP) and related AI techniques.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving with text, language data, or speech to create intelligent applications.",
      },
      {
        id: 4,
        question:
          "I am curious about programming languages like Python used in NLP development.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning coding and AI concepts step-by-step as a beginner.",
      },
      {
        id: 6,
        question:
          "I want to understand how NLP models are trained, tested, and deployed in real applications.",
      },
      {
        id: 7,
        question:
          "I enjoy analyzing text or speech data to extract insights or generate content.",
      },
      {
        id: 8,
        question:
          "I am interested in learning NLP libraries and frameworks like NLTK, spaCy, Hugging Face Transformers, or GPT APIs.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to build real-world NLP applications, like chatbots or text analysis tools.",
      },
      {
        id: 10,
        question:
          "I am motivated to experiment with NLP models to improve language understanding and generation.",
      },
      {
        id: 11,
        question:
          "I believe NLP skills are essential for modern AI, tech, and language-based applications.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning NLP and build intelligent language applications from scratch.",
      },
    ],
  },
  "product-design": {
    courseSlug: "product-design",
    title: "Product Design – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Product Design career suit you as a beginner creative professional? This program is beginner-friendly. No prior design or technical experience is required.",
    resultTitle: "Product Designer",
    actionRecommendation:
      "No matter your score, our Product Design program is beginner-friendly. You’ll learn step-by-step, practice real projects, and gain the skills to create impactful products—even if you’ve never designed before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in designing products that solve real user problems and improve experiences.",
      },
      {
        id: 2,
        question:
          "I want to learn how to create prototypes, wireframes, and design mockups.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving, creativity, and thinking about how users interact with products.",
      },
      {
        id: 4,
        question:
          "I am curious about user experience (UX) design principles and how they guide product decisions.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I’ve never designed a product before.",
      },
      {
        id: 6,
        question:
          "I want to understand how user research informs product design decisions.",
      },
      {
        id: 7,
        question:
          "I enjoy creating visual designs, layouts, and interfaces that are easy to use and visually appealing.",
      },
      {
        id: 8,
        question:
          "I am interested in learning tools like Figma, Sketch, or Adobe XD for designing products.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to design and improve digital products from concept to completion.",
      },
      {
        id: 10,
        question:
          "I am motivated to test and iterate on designs based on user feedback.",
      },
      {
        id: 11,
        question:
          "I believe product design skills are essential for creating innovative solutions and improving user experiences.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Product Design and create meaningful experiences for users.",
      },
    ],
  },
  "product-development": {
    courseSlug: "product-development",
    title: "Product Development – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Product Development career suit you as a beginner professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "Product Developer",
    actionRecommendation:
      "No matter your score, our Product Development program is beginner-friendly. You’ll learn step-by-step, practice real projects, and gain the skills to build impactful products—even if you’ve never developed one before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in turning ideas into real, usable products that solve problems.",
      },
      {
        id: 2,
        question:
          "I want to learn how to plan, design, test, and launch products effectively.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and managing projects from concept to completion.",
      },
      {
        id: 4,
        question:
          "I am curious about market research and how it informs product development decisions.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I’ve never developed a product before.",
      },
      {
        id: 6,
        question:
          "I want to understand how to collaborate with design, tech, and business teams to build products.",
      },
      {
        id: 7,
        question: "I enjoy analyzing customer feedback to improve products.",
      },
      {
        id: 8,
        question:
          "I am interested in learning tools and techniques for prototyping, testing, and iterating products.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to launch products that deliver value to users.",
      },
      {
        id: 10,
        question:
          "I am motivated to track progress, measure results, and optimize products continuously.",
      },
      {
        id: 11,
        question:
          "I believe product development skills are essential for creating innovative solutions and successful products.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Product Development and bring ideas to life successfully.",
      },
    ],
  },
  "project-management": {
    courseSlug: "project-management",
    title: "Project Management – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Project Management career suit you as a beginner professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "Project Manager",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in planning, organizing, and managing projects to achieve goals.",
      },
      {
        id: 2,
        question:
          "I want to learn how to coordinate teams, timelines, and resources effectively.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and making decisions to keep projects on track.",
      },
      {
        id: 4,
        question:
          "I am curious about project management frameworks like Agile, Scrum, and Kanban.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I’ve never managed a project before.",
      },
      {
        id: 6,
        question:
          "I want to understand how to track project progress and measure success.",
      },
      {
        id: 7,
        question:
          "I enjoy coordinating tasks, communicating with stakeholders, and solving conflicts.",
      },
      {
        id: 8,
        question:
          "I am interested in using project management tools like Jira, Trello, or Asana.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to lead projects successfully from start to finish.",
      },
      {
        id: 10,
        question:
          "I am motivated to plan, execute, and review projects for continuous improvement.",
      },
      {
        id: 11,
        question:
          "I believe project management skills are essential for delivering successful outcomes in any field.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Project Management and confidently manage projects from start to finish.",
      },
    ],
  },
  "digital-marketing": {
    courseSlug: "digital-marketing",
    title: "Digital Marketing – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Digital Marketing career suit you as a beginner professional? This program is beginner-friendly. No prior marketing experience is required.",
    resultTitle: "Digital Marketer",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in helping businesses grow their online presence and reach more customers.",
      },
      {
        id: 2,
        question:
          "I want to learn how to create engaging content for social media, email, and websites.",
      },
      {
        id: 3,
        question:
          "I enjoy analyzing data to understand audience behavior and campaign performance.",
      },
      {
        id: 4,
        question:
          "I am curious about tools and platforms like Google Ads, Meta Ads, and analytics dashboards.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I’ve never done marketing before.",
      },
      {
        id: 6,
        question:
          "I want to understand how to create campaigns that drive traffic, leads, and sales.",
      },
      {
        id: 7,
        question:
          "I enjoy experimenting with different strategies to see what works best for audiences.",
      },
      {
        id: 8,
        question:
          "I am interested in learning how to optimize websites, social media, and campaigns for better results.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to run digital marketing campaigns for businesses successfully.",
      },
      {
        id: 10,
        question:
          "I am motivated to track metrics, analyze results, and improve campaign performance.",
      },
      {
        id: 11,
        question:
          "I believe digital marketing skills are essential for reaching customers and growing businesses online.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Digital Marketing and create campaigns that drive results.",
      },
    ],
  },
  "seo-ai-search": {
    courseSlug: "seo-ai-search",
    title: "SEO & AI Search – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does an SEO & AI Search career suit you as a beginner professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "SEO Specialist",
    actionRecommendation:
      "No matter your score, our SEO & AI Search program is beginner-friendly. You’ll learn step-by-step, practice strategies, and gain the skills to improve website performance—even if you’ve never done SEO or used AI tools before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in helping websites rank higher on search engines and attract more visitors.",
      },
      {
        id: 2,
        question:
          "I want to learn how to research keywords and optimize content for search engines.",
      },
      {
        id: 3,
        question:
          "I enjoy analyzing data to understand website performance and search trends.",
      },
      {
        id: 4,
        question:
          "I am curious about AI-powered search tools and how they can improve content discovery.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I’ve never done SEO or search optimization before.",
      },
      {
        id: 6,
        question:
          "I want to understand how to optimize websites for better visibility, traffic, and user engagement.",
      },
      {
        id: 7,
        question:
          "I enjoy experimenting with different strategies to improve search rankings and content reach.",
      },
      {
        id: 8,
        question:
          "I am interested in using tools like Google Search Console, Semrush, or AI SEO platforms.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to improve website search performance and content discoverability.",
      },
      {
        id: 10,
        question:
          "I am motivated to track results, measure performance, and optimize SEO strategies continuously.",
      },
      {
        id: 11,
        question:
          "I believe SEO and AI search skills are essential for driving traffic and growing online presence.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning SEO & AI Search and help websites perform better online.",
      },
    ],
  },
  "search-engine-marketing": {
    courseSlug: "search-engine-marketing",
    title: "Search Engine Marketing – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Search Engine Marketing (SEM) career suit you as a beginner professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "SEM Specialist",
    actionRecommendation:
      "No matter your score, our Search Engine Marketing program is beginner-friendly. You’ll learn step-by-step, practice real campaigns, and gain the skills to drive leads and sales—even if you’ve never managed ads before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in helping businesses reach more customers through paid search campaigns.",
      },
      {
        id: 2,
        question:
          "I want to learn how to set up and optimize Google Ads campaigns for maximum ROI.",
      },
      {
        id: 3,
        question:
          "I enjoy analyzing campaign data to improve performance and results.",
      },
      {
        id: 4,
        question:
          "I am curious about keyword research, bidding strategies, and ad targeting techniques.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I’ve never run paid ads before.",
      },
      {
        id: 6,
        question:
          "I want to understand how to measure campaign success and improve performance continuously.",
      },
      {
        id: 7,
        question:
          "I enjoy experimenting with different ad creatives, targeting, and strategies.",
      },
      {
        id: 8,
        question:
          "I am interested in learning tools like Google Ads, Microsoft Ads, and AI-powered campaign optimization.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to run SEM campaigns that generate leads and sales.",
      },
      {
        id: 10,
        question:
          "I am motivated to track metrics, analyze results, and optimize campaigns effectively.",
      },
      {
        id: 11,
        question:
          "I believe SEM skills are essential for driving traffic and business growth online.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning SEM and run campaigns that deliver real business results.",
      },
    ],
  },
  "social-media-marketing": {
    courseSlug: "social-media-marketing",
    title: "Social Media Marketing – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Social Media Marketing career suit you as a beginner professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "Social Media Marketer",
    actionRecommendation:
      "No matter your score, our Social Media Marketing program is beginner-friendly. You’ll learn step-by-step, practice real campaigns, and gain the skills to manage accounts, create content, and grow audiences—even if you’ve never managed social media professionally before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in helping businesses grow their brand and reach through social media platforms.",
      },
      {
        id: 2,
        question:
          "I want to learn how to create engaging content for Instagram, Facebook, TikTok, LinkedIn, and other platforms.",
      },
      {
        id: 3,
        question:
          "I enjoy analyzing social media metrics to understand what content performs best.",
      },
      {
        id: 4,
        question:
          "I am curious about scheduling tools, social media management platforms, and automation.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I’ve never managed social media accounts before.",
      },
      {
        id: 6,
        question:
          "I want to understand how to run campaigns that drive engagement, followers, and conversions.",
      },
      {
        id: 7,
        question:
          "I enjoy experimenting with different content types, posting schedules, and strategies.",
      },
      {
        id: 8,
        question:
          "I am interested in learning how to use social media ads to reach targeted audiences effectively.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to manage social media accounts professionally and consistently.",
      },
      {
        id: 10,
        question:
          "I am motivated to track engagement, analyze trends, and optimize social media strategies.",
      },
      {
        id: 11,
        question:
          "I believe social media marketing skills are essential for growing brands and businesses today.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Social Media Marketing and help businesses engage their audiences online.",
      },
    ],
  },
  "deep-learning-specialist": {
    courseSlug: "deep-learning-specialist",
    title: "Deep Learning Expert – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Deep Learning Expert career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or AI experience is required.",
    resultTitle: "Deep Learning Expert",
    actionRecommendation:
      "No matter your score, our Deep Learning Expert program is beginner-friendly. You’ll learn step-by-step, build neural network models, and gain hands-on experience—even if you’ve never coded before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in building AI systems that can recognize patterns in images, speech, or text.",
      },
      {
        id: 2,
        question:
          "I want to learn the fundamentals of deep learning, including neural networks, CNNs, RNNs, and transformers.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and creating models that improve automatically with data.",
      },
      {
        id: 4,
        question:
          "I am curious about programming languages like Python used in deep learning development.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I have never coded before.",
      },
      {
        id: 6,
        question:
          "I want to understand how deep learning models are trained, validated, and deployed in real-world applications.",
      },
      {
        id: 7,
        question: "I enjoy working with large datasets to train AI models.",
      },
      {
        id: 8,
        question:
          "I am interested in learning deep learning frameworks like TensorFlow, PyTorch, or Keras.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to build real-world AI systems like image classifiers, chatbots, or predictive models.",
      },
      {
        id: 10,
        question:
          "I am motivated to experiment with deep learning models to improve their performance.",
      },
      {
        id: 11,
        question:
          "I believe deep learning skills are essential for modern AI, robotics, and data science careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning deep learning and build advanced AI applications from scratch.",
      },
    ],
  },
  "prompt-engineering-expert": {
    courseSlug: "prompt-engineering-expert",
    title: "Prompt Engineering Expert – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Prompt Engineering Expert career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or AI experience is required.",
    resultTitle: "Prompt Engineer",
    actionRecommendation:
      "No matter your score, our Prompt Engineering Expert program is beginner-friendly. You’ll learn step-by-step, practice real prompts, and gain the skills to guide AI effectively—even if you’ve never coded or worked with AI before.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in creating effective prompts that guide AI models to produce accurate outputs.",
      },
      {
        id: 2,
        question:
          "I want to learn techniques for designing prompts for chatbots, AI assistants, and content generation.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and experimenting to get better results from AI systems.",
      },
      {
        id: 4,
        question:
          "I am curious about how AI models interpret language and instructions.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I’ve never worked with AI or coding before.",
      },
      {
        id: 6,
        question:
          "I want to understand how prompt design impacts AI output quality and accuracy.",
      },
      {
        id: 7,
        question:
          "I enjoy experimenting, iterating, and refining instructions to improve results.",
      },
      {
        id: 8,
        question:
          "I am interested in learning prompt engineering frameworks, best practices, and strategies.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to design prompts that work for real-world AI applications.",
      },
      {
        id: 10,
        question:
          "I am motivated to test prompts, analyze AI outputs, and improve them for different use cases.",
      },
      {
        id: 11,
        question:
          "I believe prompt engineering skills are essential for AI content creation, assistants, and automation.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Prompt Engineering and create intelligent AI interactions from scratch.",
      },
    ],
  },
  "math-statistics-for-ai": {
    courseSlug: "math-statistics-for-ai",
    title: "Maths & Statistics for AI Professionals – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Maths & Statistics career foundation for AI professionals suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or advanced math experience is required.",
    resultTitle: "AI Math Specialist",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in learning the math and statistics concepts behind AI and machine learning.",
      },
      {
        id: 2,
        question:
          "I want to understand how probability, linear algebra, and calculus are used in AI models.",
      },
      {
        id: 3,
        question:
          "I enjoy working with numbers, formulas, and logical reasoning.",
      },
      {
        id: 4,
        question:
          "I am curious about how statistics helps analyze data and make predictions in AI.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning math concepts step-by-step, even if I struggled with math before.",
      },
      {
        id: 6,
        question:
          "I want to understand how AI models use mathematical concepts to learn and make decisions.",
      },
      {
        id: 7,
        question:
          "I enjoy analyzing data to find patterns, trends, and insights.",
      },
      {
        id: 8,
        question:
          "I am interested in learning how probability, statistics, and linear algebra are applied in real AI projects.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to solve AI problems using math and statistics.",
      },
      {
        id: 10,
        question:
          "I am motivated to practice math and statistics exercises to strengthen my AI skills.",
      },
      {
        id: 11,
        question:
          "I believe math and statistics are essential foundations for AI, machine learning, and deep learning.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Maths & Statistics for AI to build a strong foundation for AI careers.",
      },
    ],
  },
  "python-for-data-science": {
    courseSlug: "python-for-data-science",
    title: "Python for Data Science – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does Python for Data Science suit you as a beginner data professional? This program is beginner-friendly. No prior coding experience is required.",
    resultTitle: "Python Data Scientist",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in using Python to explore, visualize, and model data.",
      },
      {
        id: 2,
        question:
          "I want to learn how to write code to analyze large datasets effectively.",
      },
      {
        id: 3,
        question:
          "I enjoy solving problems and finding insights using programming.",
      },
      {
        id: 4,
        question:
          "I am curious about libraries like Pandas, NumPy, and Matplotlib used in Data Science.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning coding step-by-step, even if I have never coded before.",
      },
      {
        id: 6,
        question:
          "I want to understand how to build predictive models using Python.",
      },
      {
        id: 7,
        question:
          "I enjoy experimenting with data to discover hidden patterns.",
      },
      {
        id: 8,
        question:
          "I am interested in automating data analysis tasks using scripts.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to apply Python in real-world data science projects.",
      },
      {
        id: 10,
        question:
          "I am motivated to write clean, efficient code to solve data problems.",
      },
      {
        id: 11,
        question:
          "I believe Python skills are essential for a successful career in Data Science and AI.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Python for Data Science and build my first data projects.",
      },
    ],
  },
  "python-development": {
    courseSlug: "python-development",
    title: "Python Development – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Python Development career suit you as a beginner developer? This program is beginner-friendly. No prior coding experience is required.",
    resultTitle: "Python Developer",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in learning Python to build software, web apps, or automation tools.",
      },
      {
        id: 2,
        question:
          "I want to learn the syntax and logic of Python programming from scratch.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and writing logic to make computers do tasks.",
      },
      {
        id: 4,
        question:
          "I am curious about how Python allows for rapid application development.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning coding concepts step-by-step, even if I’m new.",
      },
      {
        id: 6,
        question:
          "I want to understand how to write efficient and readable Python code.",
      },
      {
        id: 7,
        question:
          "I enjoy building things and seeing them work, like scripts or simple apps.",
      },
      {
        id: 8,
        question:
          "I am interested in learning frameworks like Django or Flask for web development.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to solve real-world problems using Python.",
      },
      {
        id: 10,
        question:
          "I am motivated to debug and improve my code to make it run better.",
      },
      {
        id: 11,
        question:
          "I believe Python development skills are versatile and essential for many tech careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Python Development and become a proficient coder.",
      },
    ],
  },
  "big-data-foundation": {
    courseSlug: "big-data-foundation",
    title: "Big Data Foundation – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Big Data career suit you as a beginner data professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "Big Data Specialist",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in working with massive amounts of data that traditional tools can’t handle.",
      },
      {
        id: 2,
        question:
          "I want to learn about technologies that store and process big data, like Hadoop and Spark.",
      },
      {
        id: 3,
        question:
          "I enjoy thinking about how to manage and organize information at scale.",
      },
      {
        id: 4,
        question:
          "I am curious about how big companies handle data from millions of users.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning technical concepts step-by-step, even if they seem advanced.",
      },
      {
        id: 6,
        question:
          "I want to understand the challenges and solutions in big data architecture.",
      },
      {
        id: 7,
        question:
          "I enjoy solving complex problems related to data storage and speed.",
      },
      {
        id: 8,
        question:
          "I am interested in learning how big data powers AI and analytics applications.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to work in the big data ecosystem.",
      },
      {
        id: 10,
        question:
          "I am motivated to learn skills that are critical for large enterprises.",
      },
      {
        id: 11,
        question:
          "I believe big data skills are essential for the future of tech and analytics.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Big Data Foundation and understand the world of large-scale data.",
      },
    ],
  },
  "certified-ml-for-ai": {
    courseSlug: "certified-ml-for-ai",
    title: "Machine Learning for AI Professionals – Suitability Survey",
    subtitle: "Find Your Match %",
    description:
      "How much does a Machine Learning career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or AI experience is required.",
    resultTitle: "ML AI Professional",
    actionRecommendation:
      "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      {
        id: 1,
        question:
          "I am interested in building algorithms that can learn from data and make predictions.",
      },
      {
        id: 2,
        question:
          "I want to learn the core concepts of machine learning, from regression to classification.",
      },
      {
        id: 3,
        question:
          "I enjoy problem-solving and optimizing models to achieve better accuracy.",
      },
      {
        id: 4,
        question:
          "I am curious about programming languages like Python or R used in Machine Learning development.",
      },
      {
        id: 5,
        question:
          "I feel comfortable learning step-by-step, even if I have never coded before.",
      },
      {
        id: 6,
        question:
          "I want to understand how machine learning models are trained, validated, and deployed in applications.",
      },
      {
        id: 7,
        question:
          "I enjoy working with data and creating models to predict trends or classify information.",
      },
      {
        id: 8,
        question:
          "I am interested in learning machine learning libraries and frameworks like scikit-learn, TensorFlow, or PyTorch.",
      },
      {
        id: 9,
        question:
          "I want to gain practical skills to build ML-powered AI solutions for real-world applications.",
      },
      {
        id: 10,
        question:
          "I am motivated to experiment with ML models and improve their performance through testing.",
      },
      {
        id: 11,
        question:
          "I believe machine learning skills are essential for AI, data, and tech careers.",
      },
      {
        id: 12,
        question:
          "I am excited to start learning Machine Learning for AI and build intelligent predictive systems.",
      },
    ],
  },

  "python-for-data-analytics": {
    courseSlug: "python-for-data-analytics",
    title: "Python for Data Analytics – Suitability Survey",
    subtitle: "Find Your Match %",
    description: "How much does a Python for Data Analytics career suit you as a beginner data professional? This program is beginner-friendly. No prior coding experience is required.",
    resultTitle: "Python Data Analyst",
    actionRecommendation: "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      { id: 1, question: "I am interested in using Python to explore, visualize, and model data." },
      { id: 2, question: "I want to learn how to write code to analyze large datasets effectively." },
      { id: 3, question: "I enjoy solving problems and finding insights using programming." },
      { id: 4, question: "I am curious about libraries like Pandas, NumPy, and Matplotlib used in Data Analytics." },
      { id: 5, question: "I feel comfortable learning coding step-by-step, even if I have never coded before." },
      { id: 6, question: "I want to understand how to build predictive models using Python." },
      { id: 7, question: "I enjoy experimenting with data to discover hidden patterns." },
      { id: 8, question: "I am interested in automating data analysis tasks using scripts." },
      { id: 9, question: "I want to gain practical skills to apply Python in real-world data science projects." },
      { id: 10, question: "I am motivated to write clean, efficient code to solve data problems." },
      { id: 11, question: "I believe Python skills are essential for a successful career in Data Science and AI." },
      { id: 12, question: "I am excited to start learning Python for Data Analytics and build my first data projects." },
    ]
  },
  "ml-for-data-analytics": {
    courseSlug: "ml-for-data-analytics",
    title: "ML for Data Analytics – Suitability Survey",
    subtitle: "Find Your Match %",
    description: "How much does a Machine Learning career suit you as a beginner tech professional? This program is beginner-friendly. No prior coding or AI experience is required.",
    resultTitle: "ML Data Analyst",
    actionRecommendation: "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      { id: 1, question: "I am interested in building algorithms that can learn from data and make predictions." },
      { id: 2, question: "I want to learn the core concepts of machine learning, from regression to classification." },
      { id: 3, question: "I enjoy problem-solving and optimizing models to achieve better accuracy." },
      { id: 4, question: "I am curious about programming languages like Python or R used in Machine Learning development." },
      { id: 5, question: "I feel comfortable learning step-by-step, even if I have never coded before." },
      { id: 6, question: "I want to understand how machine learning models are trained, validated, and deployed in applications." },
      { id: 7, question: "I enjoy working with data and creating models to predict trends or classify information." },
      { id: 8, question: "I am interested in learning machine learning libraries and frameworks like scikit-learn, TensorFlow, or PyTorch." },
      { id: 9, question: "I want to gain practical skills to build ML-powered AI solutions for real-world applications." },
      { id: 10, question: "I am motivated to experiment with ML models and improve their performance through testing." },
      { id: 11, question: "I believe machine learning skills are essential for AI, data, and tech careers." },
      { id: 12, question: "I am excited to start learning Machine Learning for AI and build intelligent predictive systems." },
    ]
  },
  "power-bi-analytics": {
    courseSlug: "power-bi-analytics",
    title: "Power BI Analytics – Suitability Survey",
    subtitle: "Find Your Match %",
    description: "How much does a Power BI Analytics career suit you as a beginner professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "Power BI Analyst",
    actionRecommendation: "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      { id: 1, question: "I am interested in turning complex data into easy-to-understand visualizations and dashboards." },
      { id: 2, question: "I want to learn how to connect, clean, and transform data from multiple sources." },
      { id: 3, question: "I enjoy discovering trends and insights hidden within large datasets." },
      { id: 4, question: "I am curious about tools like Microsoft Power BI for business intelligence reporting." },
      { id: 5, question: "I feel comfortable learning step-by-step, even if I have never built a dashboard before." },
      { id: 6, question: "I want to understand how to design interactive reports for decision-makers." },
      { id: 7, question: "I enjoy solving problems by asking the right questions about data." },
      { id: 8, question: "I am interested in learning DAX formulas and data modeling techniques." },
      { id: 9, question: "I want to gain practical skills to create real-world business reports." },
      { id: 10, question: "I am motivated to automate data workflows and reporting processes." },
      { id: 11, question: "I believe data visualization is essential for modern data-driven companies." },
      { id: 12, question: "I am excited to start learning Power BI and build impactful data visualizations." },
    ]
  },
  "tableau-analytics": {
    courseSlug: "tableau-analytics",
    title: "Tableau Analytics – Suitability Survey",
    subtitle: "Find Your Match %",
    description: "How much does a Tableau Analytics career suit you as a beginner professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "Tableau Analyst",
    actionRecommendation: "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      { id: 1, question: "I am interested in creating beautiful and interactive data visualizations." },
      { id: 2, question: "I want to learn how to tell compelling stories with data using Tableau." },
      { id: 3, question: "I enjoy uncovering patterns, outliers, and trends in business data." },
      { id: 4, question: "I am curious about how to design dashboards that executives use for decision-making." },
      { id: 5, question: "I feel comfortable learning analytical tools step-by-step, even if I'm new to them." },
      { id: 6, question: "I want to understand the best practices of visual design and reporting." },
      { id: 7, question: "I enjoy combining data from different sources to create a complete picture." },
      { id: 8, question: "I am interested in learning how to publish and share interactive data stories." },
      { id: 9, question: "I want to gain practical skills to create professional business intelligence reports." },
      { id: 10, question: "I am motivated to present data in ways that drive immediate action." },
      { id: 11, question: "I believe data storytelling with Tableau is a key skill for a data career." },
      { id: 12, question: "I am excited to start learning Tableau and build my visualization portfolio." },
    ]
  },
  "product-management": {
    courseSlug: "product-management",
    title: "Product Management – Suitability Survey",
    subtitle: "Find Your Match %",
    description: "How much does a Product Management career suit you as a beginner professional? This program is beginner-friendly. No prior experience is required.",
    resultTitle: "Product Manager",
    actionRecommendation: "Based on your result, we recommend starting with beginner-friendly steps to build confidence and foundational skills.",
    questions: [
      { id: 1, question: "I am interested in defining the strategy, roadmap, and features of a product." },
      { id: 2, question: "I want to learn how to prioritize tasks and lead a team without formal authority." },
      { id: 3, question: "I enjoy problem-solving and making data-driven decisions to keep projects on track." },
      { id: 4, question: "I am curious about product management frameworks like Agile, Scrum, and Kanban." },
      { id: 5, question: "I feel comfortable learning step-by-step, even if I’ve never managed a product before." },
      { id: 6, question: "I want to understand how to track product progress and measure success with metrics." },
      { id: 7, question: "I enjoy coordinating tasks, communicating with stakeholders, and solving conflicts." },
      { id: 8, question: "I am interested in balancing user needs with business goals and technical constraints." },
      { id: 9, question: "I want to gain practical skills to launch products successfully from start to finish." },
      { id: 10, question: "I am motivated to plan, execute, and review products for continuous improvement." },
      { id: 11, question: "I believe product management skills are essential for delivering successful outcomes in tech." },
      { id: 12, question: "I am excited to start learning Product Management and confidently manage products." },
    ]
  }
};
