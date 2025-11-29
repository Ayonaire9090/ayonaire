import Image from "next/image";
import Header from "./header";

export default function Page() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "linear-gradient(178.47deg, #FFAC74 1.3%, #FFFFFF 45.22%)",
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
        {/* Left: Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1
            style={{
              fontFamily: "Spline Sans, sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "60px",
              lineHeight: "80px",
              letterSpacing: "0",
              marginBottom: "24px",
              color: "#1a1a1a",
              width: "606px",
            }}
          >
            Launch Your AI Career From Scratch
          </h1>
          <ul className="mb-8 space-y-4">
            <li
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0",
                textTransform: "capitalize",
                color: "#222",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#F67219"
                    strokeWidth="2"
                  />
                  <path
                    d="M6.5 10.5L9 13L13.5 8.5"
                    stroke="#F67219"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <b>Beginners</b> Ready To Break Into <b>Tech</b>
              </span>
            </li>
            <li
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0",
                textTransform: "capitalize",
                color: "#222",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#F67219"
                    strokeWidth="2"
                  />
                  <path
                    d="M6.5 10.5L9 13L13.5 8.5"
                    stroke="#F67219"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                Career Switchers Seeking A <b>Future-Proof Skill</b>, And
              </span>
            </li>
            <li
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0",
                textTransform: "capitalize",
                color: "#222",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#F67219"
                    strokeWidth="2"
                  />
                  <path
                    d="M6.5 10.5L9 13L13.5 8.5"
                    stroke="#F67219"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                Students Aiming For <b>Competitive AI Roles</b>
              </span>
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-bold shadow hover:bg-orange-600">
              Talk to an Adviser
            </button>
            <button className="px-6 py-3 border border-orange-400 text-orange-500 rounded-lg font-bold hover:bg-orange-50">
              Download Brochure
            </button>
          </div>
        </div>
        {/* Right: Video Thumbnail */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
            <img
              src="/ai-career-thumbnail.jpg"
              alt="AI Career"
              className="object-cover w-full h-full"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="orange"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                >
                  <circle cx="12" cy="12" r="12" fill="orange" />
                  <polygon points="10,8 16,12 10,16" fill="white" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Dots and Arrow - custom positioning */}
      <div
        className="flex w-full max-w-6xl mx-auto px-8"
        style={{ marginTop: "32px" }}
      >
        {/* Left: Dots under buttons */}
        <div className="md:w-1/2 flex flex-col">
          <div style={{ height: "48px" }}></div>{" "}
          {/* Spacer to align with buttons */}
          <div className="flex gap-2 mt-2">
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#F67219",
                display: "inline-block",
              }}
            ></span>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#FFDCC4",
                display: "inline-block",
              }}
            ></span>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#FFE7D6",
                display: "inline-block",
              }}
            ></span>
          </div>
        </div>
        {/* Right: Arrow under video */}
        <div className="md:w-1/2 flex justify-end items-end">
          <button
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "#FFE7D6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              marginBottom: "0",
            }}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
              <path
                d="M7 10H13M13 10L10 7M13 10L10 13"
                stroke="#F67219"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Cohort Info Bar */}
      <section
        style={{
          width: "1150px",
          height: "156px",
          opacity: 1,
          borderRadius: "16px",
          margin: "64px auto 24px auto",
        }}
        className="flex items-center justify-center bg-transparent"
      >
        <div
          className="flex flex-col md:flex-row justify-between items-center bg-white w-full h-full px-12 py-8 gap-6 md:gap-0"
          style={{
            borderRadius: "16px",
            height: "156px",
            minHeight: "156px",
            maxHeight: "156px",
            opacity: 1,
            boxShadow: "0px 11px 60px 0px #00000014",
          }}
        >
          {/* Next Cohort */}
          <div className="flex-1 flex items-center gap-4 min-w-[180px]">
            <span>
              {/* Gradient Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M26.6663 3.3335V10.0002M13.333 3.3335V10.0002"
                  stroke="url(#paint0_linear_287_4134)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.6667 6.66666H18.3333C12.0479 6.66666 8.90525 6.66666 6.95262 8.61927C5 10.5719 5 13.7146 5 20V23.3333C5 29.6187 5 32.7615 6.95262 34.714C8.90525 36.6667 12.0479 36.6667 18.3333 36.6667H21.6667C27.952 36.6667 31.0948 36.6667 33.0473 34.714C35 32.7615 35 29.6187 35 23.3333V20C35 13.7146 35 10.5719 33.0473 8.61927C31.0948 6.66666 27.952 6.66666 21.6667 6.66666Z"
                  stroke="url(#paint1_linear_287_4134)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 16.6667H35"
                  stroke="url(#paint2_linear_287_4134)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.9922 23.3335H20.0072M19.9922 30.0002H20.0072M26.6513 23.3335H26.6663M13.333 23.3335H13.348M13.333 30.0002H13.348"
                  stroke="url(#paint3_linear_287_4134)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4134"
                    x1="13.333"
                    y1="6.66683"
                    x2="26.6663"
                    y2="6.66683"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F25E25" />
                    <stop offset="1" stopColor="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4134"
                    x1="5"
                    y1="21.6667"
                    x2="35"
                    y2="21.6667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F25E25" />
                    <stop offset="1" stopColor="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_287_4134"
                    x1="5"
                    y1="17.1667"
                    x2="35"
                    y2="17.1667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F25E25" />
                    <stop offset="1" stopColor="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_287_4134"
                    x1="13.333"
                    y1="26.6668"
                    x2="26.6663"
                    y2="26.6668"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F25E25" />
                    <stop offset="1" stopColor="#F97F11" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <div className="font-bold text-base text-gray-900">
                Next Cohort
              </div>
              <div className="text-sm text-gray-500 mt-1">15 January, 2026</div>
            </div>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent to-[#F67219]"></div>
          {/* Duration (center) */}
          <div className="flex-1 flex items-center gap-4 min-w-[180px] justify-center">
            <span>
              {/* Gradient Duration Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 13.3333V20L22.5 22.5"
                  stroke="url(#paint0_linear_287_4144)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.576 27.4223C35.3034 28.8949 36.667 29.6314 36.667 30.8333C36.667 32.0351 35.3034 32.7716 32.576 34.2443L30.7189 35.2473C28.6244 36.3783 27.5772 36.9438 27.0735 36.5326C25.8404 35.5256 27.7615 32.9268 28.2342 32.0061C28.7132 31.0733 28.7045 30.5764 28.2342 29.6604C27.7615 28.7398 25.8404 26.1409 27.0735 25.1339C27.5772 24.7228 28.6244 25.2883 30.7189 26.4193L32.576 27.4223Z"
                  stroke="url(#paint1_linear_287_4144)"
                  strokeWidth="2.5"
                />
                <path
                  d="M21.7098 36.5802C21.1477 36.6375 20.577 36.6668 19.9997 36.6668C10.7949 36.6668 3.33301 29.2048 3.33301 20.0002C3.33301 10.7954 10.7949 3.3335 19.9997 3.3335C29.2043 3.3335 36.6663 10.7954 36.6663 20.0002C36.6663 21.1417 36.5515 22.2565 36.333 23.3335"
                  stroke="url(#paint2_linear_287_4144)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4144"
                    x1="20"
                    y1="17.9167"
                    x2="22.5"
                    y2="17.9167"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F25E25" />
                    <stop offset="1" stopColor="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4144"
                    x1="26.667"
                    y1="30.8333"
                    x2="36.667"
                    y2="30.8333"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F25E25" />
                    <stop offset="1" stopColor="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_287_4144"
                    x1="3.33301"
                    y1="20.0002"
                    x2="36.6663"
                    y2="20.0002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F25E25" />
                    <stop offset="1" stopColor="#F97F11" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <div className="font-bold text-base text-gray-900">Duration</div>
              <div className="text-sm text-gray-500 mt-1">6 Months</div>
            </div>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent to-[#F67219]"></div>
          {/* Format (right/end) */}
          <div className="flex-1 flex items-center gap-4 min-w-[180px] justify-end">
            <span>
              {/* Format PNG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M18.333 13.3335H21.6663"
                  stroke="url(#paint0_linear_287_4153)"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3.33301 18.3332C3.33301 12.8335 3.33301 10.0836 5.04156 8.37505C6.75009 6.6665 9.49996 6.6665 14.9997 6.6665H16.6663C22.166 6.6665 24.9158 6.6665 26.6245 8.37505C28.333 10.0836 28.333 12.8335 28.333 18.3332V21.6665C28.333 27.1662 28.333 29.916 26.6245 31.6247C24.9158 33.3332 22.166 33.3332 16.6663 33.3332H14.9997C9.49996 33.3332 6.75009 33.3332 5.04156 31.6247C3.33301 29.916 3.33301 27.1662 3.33301 21.6665V18.3332Z"
                  stroke="url(#paint1_linear_287_4153)"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
                <path
                  d="M28.333 14.8433L28.5428 14.6701C32.0692 11.7606 33.8323 10.3058 35.2493 11.0082C36.6663 11.7106 36.6663 14.0394 36.6663 18.697V21.3033C36.6663 25.961 36.6663 28.2897 35.2493 28.9922C33.8323 29.6945 32.0692 28.2398 28.5428 25.3302L28.333 25.157"
                  stroke="url(#paint2_linear_287_4153)"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4153"
                    x1="18.333"
                    y1="13.8335"
                    x2="21.6663"
                    y2="13.8335"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4153"
                    x1="3.33301"
                    y1="19.9998"
                    x2="28.333"
                    y2="19.9998"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_287_4153"
                    x1="28.333"
                    y1="20.0002"
                    x2="36.6663"
                    y2="20.0002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <div className="font-bold text-base text-gray-900">Format</div>
              <div className="text-sm text-gray-500 mt-1">
                Live, Online, Interactive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is The Most Effective AI Engineering Course */}
      <section
        className="flex flex-col items-center w-full"
        style={{
          maxWidth: "1280px",
          width: "100%",
          opacity: 1,
          gap: "0px",
          margin: "48px auto 0 auto",
          position: "static",
          height: "auto",
        }}
      >
        <button
          className="px-5 py-2 bg-orange-50 text-orange-500 rounded-full font-medium mb-4 border border-orange-100 flex items-center gap-2"
          style={{ fontSize: "16px" }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9" stroke="#F67219" strokeWidth="2" />
            <path
              d="M6.5 10.5L9 13L13.5 8.5"
              stroke="#F67219"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Our Reviews
        </button>
        <h2
          className="text-center font-bold"
          style={{
            fontFamily: "Spline Sans, sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "52px",
            color: "#1a1a1a",
            marginBottom: "12px",
            maxWidth: "700px",
          }}
        >
          Why This Is The Most Effective AI Engineering Course
        </h2>
        <div
          className="text-center"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            color: "#6E6E6E",
            marginBottom: "36px",
            maxWidth: "700px",
          }}
        >
          AI Is Reshaping Industries, And This Program Helps You Step Into
          Top-Growth, Top-Paying Roles.
        </div>
        {/* Key Features Heading */}
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto 24px auto",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <h3
            style={{
              fontFamily: "Spline Sans, sans-serif",
              fontWeight: 700,
              fontSize: "24px",
              color: "#1a1a1a",
              marginBottom: "24px",
              marginLeft: "0",
            }}
          >
            Key Features
          </h3>
        </div>
        {/* Features Grid */}
        <div
          style={{
            width: "1280px",
            height: "336px",
            opacity: 1,
            margin: "0 auto",
            transform: "rotate(0deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
              gap: "40px",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Column 1 */}
            <div className="flex flex-col" style={{ gap: "40px" }}>
              <FeatureItem text="No Tech Or Coding Background Required. We'll Teach You From The Ground Up" />
              <FeatureItem text="Globally Recognized Certification To Showcase Your AI Readiness" />
              <FeatureItem text="Access To Our AI Cloud Lab For Continuous Practice And Experimentation" />
              <FeatureItem text="Peer Community For Networking, Collaboration, And Accountability" />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col" style={{ gap: "40px" }}>
              <FeatureItem text="Hands-On Learning With Real AI Tools Like TensorFlow, OpenAI, Hugging Face, And LangChain" />
              <FeatureItem text="Career-Focused Curriculum With Resume, Portfolio, And LinkedIn Optimization" />
              <FeatureItem text="1-On-1 Mentorship, Weekly Support, And Expert Feedback" />
              <FeatureItem text="Mock Interviews, Job Mapping, And Career Coaching From Industry Professionals" />
            </div>
            {/* Column 3 */}
            <div className="flex flex-col" style={{ gap: "40px" }}>
              <FeatureItem text="Projects That Mirror Real World Use Cases: Chatbots, Image Classifiers, NLP Apps, And More" />
              <FeatureItem text="Live Instructor-Led Training + Self-Paced Content For Full Flexibility" />
              <FeatureItem text="Tools And Frameworks Aligned To Top Roles: AI Engineer, ML Engineer, Prompt Engineer" />
              <FeatureItem text="Virtual Internship And Job Assistance Through Our Placement Assistance Team (PAT)" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for feature items
function FeatureItem({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "18px",
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        {/* Screenshot check SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M36.6663 20.0002C36.6663 10.7954 29.2043 3.3335 19.9997 3.3335C10.7949 3.3335 3.33301 10.7954 3.33301 20.0002C3.33301 29.2048 10.7949 36.6668 19.9997 36.6668C29.2043 36.6668 36.6663 29.2048 36.6663 20.0002Z"
            stroke="url(#paint0_linear_287_4249)"
            strokeWidth="1.5"
          />
          <path
            d="M13.333 21.2502C13.333 21.2502 15.9997 22.771 17.333 25.0002C17.333 25.0002 21.333 16.2502 26.6663 13.3335"
            stroke="url(#paint1_linear_287_4249)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_287_4249"
              x1="3.33301"
              y1="20.0002"
              x2="36.6663"
              y2="20.0002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F25E25" />
              <stop offset="1" stopColor="#F97F11" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_287_4249"
              x1="13.333"
              y1="19.1668"
              x2="26.6663"
              y2="19.1668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F25E25" />
              <stop offset="1" stopColor="#F97F11" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span
        style={{
          fontFamily: "Satoshi",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "0",
          textTransform: "none",
          color: "#6E6E6E",
        }}
      >
        {text}
      </span>
    </div>
  );
}
