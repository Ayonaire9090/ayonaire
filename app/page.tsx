import Image from "next/image";
import Header from "./header";

export default function Page() {
  return (
    <div
      className="min-h-screen font-sans"
      style={
        {
          //background: "linear-gradient(178.47deg, #FFAC74 1.3%, #FFFFFF 45.22%)",
        }
      }
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
          marginTop: "148px",
        }}
      >
        <button
          className="flex items-center gap-2 shadow"
          style={{
            justifyContent: "center",
            width: "176px",
            height: "52px",
            opacity: 1,
            borderRadius: "100px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#E5E5E5",
            fontSize: "19px",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            boxShadow: "0px 4px 24px 0px #00000014",
            color: "#F25E25",
            background: "#FFF",
          }}
        >
          {/* Replace with sparkle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.18753 4.14892C8.15958 6.4807 6.2932 8.34705 3.96142 9.37508C6.2932 10.4031 8.15958 12.2694 9.1876 14.6012C10.2156 12.2694 12.0819 10.4031 14.4137 9.37508C12.0819 8.34705 10.2156 6.4807 9.18753 4.14892ZM8.64288 2.29706H9.73225C10.5588 5.50149 13.0611 8.00378 16.2656 8.83043V9.91973C13.0611 10.7463 10.5588 13.2487 9.73225 16.4531H8.64288C7.8163 13.2487 5.31399 10.7463 2.10956 9.91973V8.83043C5.31399 8.00378 7.8163 5.50149 8.64288 2.29706Z"
              fill="#6E6E6E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z"
              fill="#6E6E6E"
            />
          </svg>
          Our Reviews
        </button>
        <h2
          className="text-center font-bold"
          style={{
            fontFamily: "Spline Sans, sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "56px",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "capitalize",
            marginBottom: "40px",
            color: "#1a1a1a",
          }}
        >
          Why AI Engineering Is One of the Most In-Demand Careers Ri ght Now
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
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "32px",
              lineHeight: "56px",
              letterSpacing: "0%",
              textTransform: "capitalize",
              verticalAlign: "middle",
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

      {/* Screenshot Section */}
      <section
        style={{
          width: "100%",
          minHeight: "322px",
          background: "linear-gradient(90deg, #F25E25 0%, #FFAC74 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "0",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "Spline Sans, sans-serif",
            fontWeight: 700,
            fontStyle: "bold",
            fontSize: "60px",
            lineHeight: "76px",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "capitalize",
            color: "#fff",
            marginBottom: "18px",
            marginTop: "32px",
            maxWidth: "100%",
            width: "100%",
          }}
        >
          No Tech Background? You Can Still Break Into AI
        </h1>
        <div
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            color: "#fff",
            textAlign: "center",
            marginBottom: "24px",
            maxWidth: "100%",
            width: "100%",
          }}
        >
          We'll Teach You Everything From Scratch Get Guidance Directly From Our
          Advisors.
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "#fff",
            color: "#FF6A00",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            padding: "12px 24px",
            boxShadow: "0px 2px 8px 0px #00000014",
            margin: "0 auto",
            cursor: "pointer",
            maxWidth: "100%",
            width: "fit-content",
          }}
        >
          Talk to an Advisor
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#FF6A00",
              borderRadius: "6px",
              width: "28px",
              height: "28px",
              marginLeft: "8px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </section>

      {/* Most Demanded Section */}
      <section
        style={{
          width: "100%",
          background: "#fff",
          padding: "80px 0 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#FFF5ED",
            color: "#F25E25",
            borderRadius: "100px",
            padding: "8px 24px",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            marginBottom: "32px",
            display: "inline-block",
            letterSpacing: "0.02em",
          }}
        >
          Most Demanded
        </div>
        <h2
          style={{
            fontFamily: "Spline Sans, ",
            fontWeight: 700,
            fontSize: "47px",
            textAlign: "center",
            marginBottom: "40px",
            color: "#1a1a1a",
            letterSpacing: "0",
            width: "897px",
            lineHeight: "56px",
            height: "111",

            opacity: 1,
          }}
        >
          Why AI Engineering Is One Of The Most In-Demand Careers Right Now
        </h2>
        <div
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            marginBottom: "0",
            maxWidth: "1066px",
            width: "100%",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRight: "3px solid #F25E254D",
              borderRadius: "12px",
              padding: "32px 24px",
              width: "310px",
              height: "239.19px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              opacity: 1,
              position: "relative",
              top: "0.9px",
              left: "2px",
              transform: "rotate(0deg)",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <mask
                  id="mask0_287_4369"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="50"
                  height="50"
                >
                  <path d="M0 0H50V50H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_287_4369)">
                  <mask
                    id="mask1_287_4369"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                  >
                    <path d="M0 0H50V50H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask1_287_4369)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.8125 14.0625C32.8125 14.9254 33.5121 15.625 34.375 15.625H43.75V25C43.75 25.8629 44.4496 26.5625 45.3125 26.5625C46.1754 26.5625 46.875 25.8629 46.875 25V14.0625C46.875 13.9599 46.865 13.8583 46.845 13.7577C46.8249 13.657 46.7953 13.5593 46.7561 13.4646C46.7168 13.3698 46.6687 13.2797 46.6117 13.1944C46.5547 13.1091 46.4899 13.0302 46.4173 12.9576C46.3448 12.8851 46.2659 12.8203 46.1806 12.7633C46.0953 12.7063 46.0052 12.6582 45.9104 12.6189C45.8156 12.5797 45.7179 12.55 45.6173 12.53C45.5167 12.51 45.4151 12.5 45.3125 12.5H34.375C33.5121 12.5 32.8125 13.1996 32.8125 14.0625Z"
                      fill="url(#paint0_linear_287_4369)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M44.855 14.5201C44.2447 13.91 43.2553 13.91 42.645 14.5201L29.23 27.9353C28.9249 28.2405 28.5565 28.3931 28.125 28.3931C27.6935 28.3931 27.3251 28.2405 27.0199 27.9352L22.0649 22.9802C21.1496 22.0647 20.0446 21.6069 18.75 21.6069C17.4554 21.6069 16.3504 22.0646 15.4352 22.9801L3.58264 34.8327C2.97245 35.4428 2.97245 36.4322 3.58264 37.0423C4.19283 37.6525 5.18216 37.6525 5.79235 37.0423L17.6449 25.1898C17.9501 24.8845 18.3185 24.7319 18.75 24.7319C19.1815 24.7319 19.5499 24.8845 19.855 25.1897L24.8102 30.1449C25.7254 31.0604 26.8304 31.5181 28.125 31.5181C29.4196 31.5181 30.5246 31.0603 31.4399 30.1448L44.855 16.7298C45.465 16.1197 45.465 15.1303 44.855 14.5201Z"
                      fill="url(#paint1_linear_287_4369)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4369"
                    x1="32.8125"
                    y1="19.5312"
                    x2="46.875"
                    y2="19.5312"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4369"
                    x1="3.125"
                    y1="25.7812"
                    x2="45.3125"
                    y2="25.7812"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div
              style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}
            >
              Explosive Market Growth
            </div>
            <div style={{ fontSize: "15px", color: "#6E6E6E" }}>
              AI is expanding rapidly across industries, creating new
              opportunities.
            </div>
          </div>
          {/* Card 2 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRight: "3px solid #F25E254D",
              borderRadius: "12px",
              padding: "32px 24px",
              width: "312px",
              height: "241px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              opacity: 1,
              position: "relative",
              top: "0.9px",
              left: "2px",
              transform: "rotate(0deg)",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M27.0837 22.9168C27.0837 18.3145 23.3526 14.5835 18.7503 14.5835C14.148 14.5835 10.417 18.3145 10.417 22.9168C10.417 27.5191 14.148 31.2502 18.7503 31.2502C23.3526 31.2502 27.0837 27.5191 27.0837 22.9168Z"
                  stroke="url(#paint0_linear_287_4386)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.9974 15.7453C22.9443 15.3656 22.917 14.9776 22.917 14.5833C22.917 9.98096 26.648 6.25 31.2503 6.25C35.8526 6.25 39.5837 9.98096 39.5837 14.5833C39.5837 19.1857 35.8526 22.9167 31.2503 22.9167C29.6991 22.9167 28.247 22.4929 27.0032 21.7548"
                  stroke="url(#paint1_linear_287_4386)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.25 43.75C31.25 36.8465 25.6535 31.25 18.75 31.25C11.8464 31.25 6.25 36.8465 6.25 43.75"
                  stroke="url(#paint2_linear_287_4386)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43.75 35.4166C43.75 28.5131 38.1535 22.9166 31.25 22.9166"
                  stroke="url(#paint3_linear_287_4386)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4386"
                    x1="10.417"
                    y1="22.9168"
                    x2="27.0837"
                    y2="22.9168"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4386"
                    x1="22.917"
                    y1="14.5833"
                    x2="39.5837"
                    y2="14.5833"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_287_4386"
                    x1="6.25"
                    y1="37.5"
                    x2="31.25"
                    y2="37.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_287_4386"
                    x1="31.25"
                    y1="29.1666"
                    x2="43.75"
                    y2="29.1666"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div
              style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}
            >
              Hiring is Accelerating Worldwide
            </div>
            <div style={{ fontSize: "15px", color: "#6E6E6E" }}>
              Companies are seeking AI talent globally, from startups to tech
              giants.
            </div>
          </div>
          {/* Card 3 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRight: "3px solid #F25E254D",
              borderRadius: "12px",
              padding: "32px 24px",
              width: "310px",
              height: "239.19px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              opacity: 1,
              position: "relative",
              top: "0.9px",
              left: "2px",
              transform: "rotate(0deg)",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M29.1667 37.5C38.3715 37.5 45.8333 30.0381 45.8333 20.8333C45.8333 11.6285 38.3715 4.16663 29.1667 4.16663C19.9619 4.16663 12.5 11.6285 12.5 20.8333C12.5 30.0381 19.9619 37.5 29.1667 37.5Z"
                  stroke="url(#paint0_linear_287_4398)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M6.57651 22.9165C5.05289 25.2448 4.16699 28.028 4.16699 31.0182C4.16699 39.2003 10.7999 45.8332 18.9819 45.8332C21.9722 45.8332 24.7553 44.9473 27.0837 43.4236"
                  stroke="url(#paint1_linear_287_4398)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M32.8564 17.0943C32.406 15.194 30.1135 13.4793 27.3616 14.7621C24.6097 16.0449 24.1727 20.1723 28.3352 20.6107C30.2166 20.8089 31.4431 20.3808 32.5662 21.5919C33.6891 22.8029 33.8979 26.1709 31.027 27.0786C28.1562 27.9863 25.3135 26.5679 25.0039 24.5542M29.1377 12.5088V14.3193M29.1377 27.3579V29.1754"
                  stroke="url(#paint2_linear_287_4398)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4398"
                    x1="12.5"
                    y1="20.8333"
                    x2="45.8333"
                    y2="20.8333"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4398"
                    x1="4.16699"
                    y1="34.3748"
                    x2="27.0837"
                    y2="34.3748"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_287_4398"
                    x1="25.0039"
                    y1="20.8421"
                    x2="33.3372"
                    y2="20.8421"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div
              style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}
            >
              High Earning Potential
            </div>
            <div style={{ fontSize: "15px", color: "#6E6E6E" }}>
              AI roles offer competitive salaries and strong career growth.
            </div>
          </div>
          {/* Card 4 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRight: "3px solid #F25E254D",
              borderRadius: "12px",
              padding: "32px 24px",
              width: "310px",
              height: "239.19px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              opacity: 1,
              position: "relative",
              top: "0.9px",
              left: "2px",
              transform: "rotate(0deg)",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M17.5 45V40M30 45V37.5M42.5 45V32.5M6.25 30C6.25 18.8041 6.25 13.2062 9.7281 9.7281C13.2062 6.25 18.8041 6.25 30 6.25C41.1958 6.25 46.7938 6.25 50.272 9.7281C53.75 13.2062 53.75 18.8041 53.75 30C53.75 41.1958 53.75 46.7938 50.272 50.272C46.7938 53.75 41.1958 53.75 30 53.75C18.8041 53.75 13.2062 53.75 9.7281 50.272C6.25 46.7938 6.25 41.1958 6.25 30Z"
                  stroke="url(#paint0_linear_287_4409)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.9805 28.7158C20.3682 28.8953 32.5852 28.082 39.5342 17.0533M34.9807 15.7209L39.6695 14.9662C40.241 14.8935 41.08 15.3446 41.2862 15.8825L42.526 19.9786"
                  stroke="url(#paint1_linear_287_4409)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4409"
                    x1="6.25"
                    y1="30"
                    x2="53.75"
                    y2="30"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4409"
                    x1="14.9805"
                    y1="21.8471"
                    x2="42.526"
                    y2="21.8471"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div
              style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}
            >
              A Future-Proof Career Path
            </div>
            <div style={{ fontSize: "15px", color: "#6E6E6E" }}>
              AI skills are in demand for years to come, ensuring job security.
            </div>
          </div>
        </div>
      </section>

      {/* Learn & Job Section */}
      <section
        style={{
          width: "100%",
          background: "#FFF5ED",
          padding: "80px 0 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            color: "#F25E25",
            borderRadius: "100px",
            padding: "8px 24px",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            marginBottom: "32px",
            display: "inline-block",
            border: "1px solid #FFDCC4",
            letterSpacing: "0.02em",
          }}
        >
          Learn & Job
        </div>
        <h2
          style={{
            fontFamily: "Spline Sans, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            textAlign: "center",
            marginBottom: "40px",
            color: "#1a1a1a",
            letterSpacing: "0.01em",
          }}
        >
          What You’ll Learn And Get In This Job-Ready AI Engineering Course
        </h2>
        <div
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            marginBottom: "0",
            maxWidth: "1066px",
            width: "100%",
            background: "#FFF5ED",
            padding: "0 0 48px 0",
            borderRadius: "24px",
            position: "relative",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "240px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>📈</span>
            <div
              style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}
            >
              Start From Scratch, Grow To Expert
            </div>
            <div style={{ fontSize: "15px", color: "#6E6E6E" }}>
              No prior experience needed. We teach you everything from the
              ground up.
            </div>
          </div>
          {/* Card 2 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "240px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>🧠</span>
            <div
              style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}
            >
              Robust AI Curriculum
            </div>
            <div style={{ fontSize: "15px", color: "#6E6E6E" }}>
              Learn the latest AI tools, frameworks, and best practices.
            </div>
          </div>
          {/* Card 3 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "240px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>🎓</span>
            <div
              style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}
            >
              Join Live Weekly Classes
            </div>
            <div style={{ fontSize: "15px", color: "#6E6E6E" }}>
              Interactive sessions with instructors and peers for hands-on
              learning.
            </div>
          </div>
          {/* Card 4 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "240px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>🛠️</span>
            <div
              style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}
            >
              Build Real-World Projects
            </div>
            <div style={{ fontSize: "15px", color: "#6E6E6E" }}>
              Apply your skills to projects that mirror industry use cases.
            </div>
          </div>
          {/* Carousel Dots */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: "-32px",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "16px",
                height: "4px",
                borderRadius: "2px",
                background: "#F25E25",
                display: "inline-block",
              }}
            ></span>
            <span
              style={{
                width: "16px",
                height: "4px",
                borderRadius: "2px",
                background: "#FFDCC4",
                display: "inline-block",
              }}
            ></span>
            <span
              style={{
                width: "16px",
                height: "4px",
                borderRadius: "2px",
                background: "#FFE7D6",
                display: "inline-block",
              }}
            ></span>
          </div>
        </div>
      </section>

      {/* Who Should Enroll Section */}
      <section
        style={{
          width: "100%",
          background: "#fff",
          padding: "80px 0 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#FFF5ED",
            color: "#F25E25",
            borderRadius: "100px",
            padding: "8px 24px",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            marginBottom: "32px",
            display: "inline-block",
            letterSpacing: "0.02em",
          }}
        >
          Who Should Enroll
        </div>
        <h2
          style={{
            fontFamily: "Spline Sans, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            textAlign: "center",
            marginBottom: "40px",
            color: "#1a1a1a",
            letterSpacing: "0.01em",
          }}
        >
          Who Should Enroll In This Certified AI Engineering Course?
        </h2>
        <div
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "0",
            maxWidth: "1066px",
            width: "100%",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "220px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>👶</span>
            <div
              style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}
            >
              Beginners
            </div>
            <div style={{ fontSize: "14px", color: "#6E6E6E" }}>
              No tech background needed. Start your AI journey here.
            </div>
          </div>
          {/* Card 2 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "220px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>🔄</span>
            <div
              style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}
            >
              Career Switchers
            </div>
            <div style={{ fontSize: "14px", color: "#6E6E6E" }}>
              Transition to AI roles from other industries.
            </div>
          </div>
          {/* Card 3 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "220px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>🛠️</span>
            <div
              style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}
            >
              Engineers
            </div>
            <div style={{ fontSize: "14px", color: "#6E6E6E" }}>
              Upskill for AI, ML, and data science roles.
            </div>
          </div>
          {/* Card 4 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "220px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>💼</span>
            <div
              style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}
            >
              Freelancers
            </div>
            <div style={{ fontSize: "14px", color: "#6E6E6E" }}>
              Add AI projects & services to your freelance portfolio.
            </div>
          </div>
          {/* Card 5 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "220px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>🚀</span>
            <div
              style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}
            >
              Founders & Creators
            </div>
            <div style={{ fontSize: "14px", color: "#6E6E6E" }}>
              Build AI-powered products, startups, and apps.
            </div>
          </div>
          {/* Card 6 */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #FFDCC4",
              borderRadius: "16px",
              padding: "32px 24px",
              width: "220px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ color: "#F25E25", fontSize: "24px" }}>🎓</span>
            <div
              style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}
            >
              Students
            </div>
            <div style={{ fontSize: "14px", color: "#6E6E6E" }}>
              Get ready for competitive AI roles and internships.
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
      <div
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "100%",
          color: "#6E6E6E",
          marginBottom: "0",
          letterSpacing: "0%",
        }}
      >
        {text}
      </div>
    </div>
  );
}
