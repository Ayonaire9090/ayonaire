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
              d="M9.18753 4.14886C8.15958 6.48064 6.2932 8.34699 3.96142 9.37502C6.2932 10.403 8.15958 12.2693 9.1876 14.6012C10.2156 12.2693 12.0819 10.403 14.4137 9.37502C12.0819 8.34699 10.2156 6.48064 9.18753 4.14886ZM8.64288 2.297H9.73225C10.5588 5.50142 13.0611 8.00372 16.2656 8.83037V9.91967C13.0611 10.7462 10.5588 13.2486 9.73225 16.453H8.64288C7.8163 13.2486 5.31399 10.7462 2.10956 9.91967V8.83037C5.31399 8.00372 7.8163 5.50142 8.64288 2.297Z"
              fill="#6E6E6E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z"
              fill="#6E6E6E"
            />
          </svg>
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
            maxWidth: "1283px",
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
              textAlign: "center",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            <div style={{ fontSize: "12px", color: "#6E6E6E" }}>
              The global AI industry is projected to exceed $500 billion by
              2027, creating new opportunities across nearly every sector.
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
              textAlign: "center",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            <div style={{ fontSize: "12px", color: "#6E6E6E" }}>
              Top companies in the U.S., Europe, and Africa are hiring AI
              professionals at record pace to power innovation and automation.
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
              textAlign: "center",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            <div style={{ fontSize: "12px", color: "#6E6E6E" }}>
              AI Engineer salaries range from $80,000 to over $200,000 per year
              globally, with experienced professionals in Africa earning
              $1,000–$5,000/month remotely.
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
              textAlign: "center",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            <div style={{ fontSize: "12px", color: "#6E6E6E" }}>
              As governments and Fortune 500 companies invest heavily in AI, the
              shortage of skilled talent makes now the best time to enter the
              field.
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
            gap: "17px",
            justifyContent: "center",
            marginBottom: "0",
            maxWidth: "1280px",
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
              width: "310px",
              height: "256px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
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
              width: "310px",
              height: "256px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
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
                <g clip-path="url(#clip0_287_4436)">
                  <path
                    d="M25.5625 48.4375H24.4375V45.3125H25.5625V48.4375ZM41.175 41.9703L38.9656 39.7609L39.7625 38.9641L41.9719 41.1734L41.175 41.9703ZM8.825 41.9703L8.02969 41.1734L10.2391 38.9641L11.0344 39.7609L8.825 41.9703ZM28.9062 41.1875C27.2297 41.1875 25.7641 40.2578 25 38.8859C24.2359 40.2578 22.7719 41.1875 21.0938 41.1875C19.075 41.1875 17.3359 39.8203 16.8062 37.9156C13.4562 38.7406 10.3766 36.0969 10.375 32.8125C10.375 32.175 10.4984 31.5438 10.7406 30.9328C8.60313 29.7344 7.25 27.4641 7.25 25C7.25 22.5375 8.60313 20.2656 10.7406 19.0672C10.4984 18.4562 10.375 17.825 10.375 17.1875C10.375 13.9031 13.4344 11.2609 16.8062 12.0828C17.3344 10.1797 19.075 8.8125 21.0938 8.8125C22.7719 8.8125 24.2359 9.74219 25 11.1125C25.7641 9.74219 27.2297 8.8125 28.9062 8.8125C30.925 8.8125 32.6641 10.1797 33.1922 12.0828C36.5187 11.2703 39.625 13.9 39.625 17.1875C39.625 17.825 39.5016 18.4547 39.2594 19.0672C41.3969 20.2656 42.75 22.5359 42.75 25C42.75 27.4641 41.3969 29.7344 39.2594 30.9328C39.5016 31.5453 39.625 32.175 39.625 32.8125C39.625 36.0969 36.5516 38.7359 33.1922 37.9172C32.6641 39.8203 30.925 41.1875 28.9062 41.1875ZM25.5625 36.7188C25.5625 38.5625 27.0625 40.0625 28.9062 40.0625C30.5797 40.0625 31.9984 38.8016 32.2047 37.1297C32.2266 36.9594 32.3234 36.8078 32.4703 36.7172C32.6187 36.6297 32.7984 36.6125 32.9578 36.6703C35.8297 37.7297 38.5 35.5531 38.5 32.8125C38.5 32.1766 38.3391 31.5438 38.0234 30.9328C37.9531 30.7969 37.9422 30.6375 37.9922 30.4906C38.0422 30.3453 38.15 30.2266 38.2891 30.1641C40.3156 29.2391 41.6234 27.2125 41.6234 25C41.6234 22.7875 40.3141 20.7625 38.2891 19.8359C38.1484 19.7719 38.0406 19.6531 37.9922 19.5078C37.9422 19.3625 37.9531 19.2031 38.025 19.0656C38.3391 18.4547 38.5 17.8234 38.5 17.1875C38.5 14.45 35.8625 12.2688 32.9578 13.3297C32.7969 13.3875 32.6156 13.3719 32.4703 13.2812C32.3234 13.1922 32.2266 13.0406 32.2047 12.8703C31.9984 11.1984 30.5797 9.9375 28.9062 9.9375C27.0625 9.9375 25.5625 11.4375 25.5625 13.2812V15.625H24.4375V13.2812C24.4375 11.4375 22.9375 9.9375 21.0938 9.9375C19.4203 9.9375 18.0016 11.1984 17.7937 12.8719C17.7719 13.0422 17.675 13.1938 17.5281 13.2828C17.3813 13.3734 17.2016 13.3891 17.0406 13.3312C14.1469 12.2672 11.5 14.45 11.5 17.1875C11.5 17.825 11.6609 18.4562 11.975 19.0656C12.0172 19.1469 12.0375 19.2344 12.0375 19.325C12.0375 19.3875 12.0281 19.4484 12.0063 19.5094C11.9563 19.6547 11.8484 19.7734 11.7078 19.8375C9.68437 20.7625 8.375 22.7891 8.375 25C8.375 27.2125 9.68437 29.2391 11.7094 30.1641C11.85 30.2281 11.9578 30.3453 12.0078 30.4922C12.0281 30.5516 12.0391 30.6125 12.0391 30.675C12.0391 30.7641 12.0188 30.8516 11.9766 30.9328C11.6594 31.5438 11.5 32.1766 11.5 32.8125C11.5 35.5531 14.1703 37.7281 17.0406 36.6703C17.1984 36.6109 17.3813 36.6297 17.5281 36.7172C17.675 36.8078 17.7734 36.9578 17.7937 37.1297C18 38.8016 19.4203 40.0625 21.0938 40.0625C22.9375 40.0625 24.4375 38.5625 24.4375 36.7188V34.375H25.5625V36.7188ZM18.1719 33.375C18.0266 33.375 17.8828 33.3187 17.775 33.2109L16.7906 32.2266C16.6125 32.0484 16.5734 31.7719 16.6984 31.5516L17.9047 29.4109C17.9906 29.2563 18.1437 29.1531 18.3188 29.1297C18.4969 29.0969 18.6688 29.1641 18.7938 29.2906L19.3531 29.85L22.2594 26.9453L23.0547 27.7422L20.1469 30.6469L20.7109 31.2125C20.8359 31.3359 20.8938 31.5109 20.8703 31.6875C20.8469 31.8609 20.7422 32.0141 20.5891 32.1L18.4484 33.3031C18.3609 33.3516 18.2656 33.375 18.1719 33.375ZM17.8875 31.7328L18.2688 32.1141L19.3922 31.4828L18.5219 30.6109L17.8875 31.7328ZM29.7172 33.3734C28.7656 33.3734 27.825 33.0047 27.1234 32.3016C26.2031 31.3797 25.8453 30.0359 26.1687 28.7891L21.2109 23.8312C19.9656 24.15 18.6187 23.7984 17.6984 22.875C16.6031 21.7797 16.3156 20.1047 16.9828 18.7062C17.0609 18.5422 17.2156 18.425 17.3953 18.3938C17.5781 18.3609 17.7594 18.4219 17.8875 18.5516L19.9547 20.6187C20.1344 20.7953 20.4453 20.7938 20.6203 20.6187C20.8031 20.4344 20.8031 20.1359 20.6203 19.9531L18.5531 17.8859C18.4234 17.7562 18.3656 17.5734 18.3953 17.3938C18.4266 17.2141 18.5422 17.0609 18.7078 16.9812C20.1062 16.3156 21.7812 16.6016 22.8766 17.6969C23.7984 18.6187 24.1547 19.9641 23.8312 21.2109L28.7891 26.1672C30.0344 25.8422 31.3781 26.2 32.3016 27.1219C33.3969 28.2188 33.6844 29.8922 33.0172 31.2906C32.9375 31.4547 32.7844 31.5719 32.6031 31.6016C32.4312 31.6375 32.2406 31.5734 32.1109 31.4453L30.0438 29.3781C29.8609 29.1953 29.5625 29.1953 29.3766 29.3781C29.1953 29.5609 29.1953 29.8609 29.3781 30.0438L31.4453 32.1109C31.5734 32.2406 31.6328 32.4234 31.6016 32.6031C31.5703 32.7828 31.4547 32.9375 31.2906 33.0172C30.7891 33.2578 30.25 33.3734 29.7172 33.3734ZM21.3672 22.6313C21.5141 22.6313 21.6578 22.6891 21.7641 22.7953L27.2031 28.2328C27.3594 28.3891 27.4094 28.6203 27.3328 28.8266C26.9891 29.7547 27.2188 30.8062 27.9188 31.5047C28.4688 32.0578 29.2422 32.3078 29.9781 32.2344L28.5812 30.8391C27.9609 30.2188 27.9609 29.2047 28.5812 28.5828C29.2062 27.9609 30.2172 27.9625 30.8391 28.5812L32.2344 29.9781C32.3125 29.2313 32.0578 28.4688 31.5047 27.9188C30.8047 27.2188 29.7516 26.9875 28.8266 27.3328C28.6203 27.4062 28.3906 27.3578 28.2328 27.2031L22.7953 21.7656C22.6391 21.6109 22.5891 21.3781 22.6656 21.1734C23.0094 20.2453 22.7797 19.1922 22.0797 18.4938C21.5281 17.9422 20.7656 17.6875 20.0188 17.7641L21.4141 19.1609C22.0359 19.7828 22.0359 20.7953 21.4141 21.4172C20.8125 22.0187 19.7578 22.0187 19.1578 21.4172L17.7625 20.0219C17.6844 20.7687 17.9406 21.5312 18.4922 22.0828C19.1922 22.7828 20.2437 23.0125 21.1703 22.6688C21.2344 22.6438 21.3016 22.6313 21.3672 22.6313ZM48.4375 25.5625H45.3125V24.4375H48.4375V25.5625ZM4.6875 25.5625H1.5625V24.4375H4.6875V25.5625ZM28.7047 23.8344L27.9078 23.0391L32.0516 18.8937C32.1797 18.7656 32.2484 18.5984 32.2484 18.4188C32.2484 18.2391 32.1797 18.0719 32.0531 17.9453C31.7969 17.6906 31.3594 17.6906 31.1063 17.9453L26.9641 22.0891L26.1687 21.2938L30.3109 17.15C30.9891 16.4703 32.1719 16.4703 32.85 17.15C33.1891 17.4891 33.3766 17.9391 33.3766 18.4188C33.3766 18.8984 33.1891 19.35 32.8484 19.6891L28.7047 23.8344ZM39.7609 11.0344L38.9641 10.2391L41.1734 8.02969L41.9703 8.825L39.7609 11.0344ZM10.2391 11.0344L8.02969 8.825L8.825 8.02969L11.0344 10.2391L10.2391 11.0344ZM25.5625 4.6875H24.4375V1.5625H25.5625V4.6875Z"
                    fill="url(#paint0_linear_287_4436)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4436"
                    x1="1.5625"
                    y1="25"
                    x2="48.4375"
                    y2="25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <clipPath id="clip0_287_4436">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
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
              width: "310px",
              height: "256px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
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
                  d="M22.917 16.6667H27.0837"
                  stroke="url(#paint0_linear_287_4444)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M4.16699 22.9166C4.16699 16.0419 4.16699 12.6046 6.30268 10.4689C8.43835 8.33325 11.8757 8.33325 18.7503 8.33325H20.8337C27.7082 8.33325 31.1455 8.33325 33.2814 10.4689C35.417 12.6046 35.417 16.0419 35.417 22.9166V27.0833C35.417 33.9578 35.417 37.3951 33.2814 39.531C31.1455 41.6666 27.7082 41.6666 20.8337 41.6666H18.7503C11.8757 41.6666 8.43835 41.6666 6.30268 39.531C4.16699 37.3951 4.16699 33.9578 4.16699 27.0833V22.9166Z"
                  stroke="url(#paint1_linear_287_4444)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M35.417 18.5539L35.6793 18.3375C40.0872 14.7006 42.2912 12.8821 44.0624 13.7601C45.8337 14.6382 45.8337 17.5491 45.8337 23.3711V26.629C45.8337 32.4511 45.8337 35.362 44.0624 36.2401C42.2912 37.118 40.0872 35.2997 35.6793 31.6626L35.417 31.4461"
                  stroke="url(#paint2_linear_287_4444)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4444"
                    x1="22.917"
                    y1="17.1667"
                    x2="27.0837"
                    y2="17.1667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4444"
                    x1="4.16699"
                    y1="24.9999"
                    x2="35.417"
                    y2="24.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_287_4444"
                    x1="35.417"
                    y1="25.0001"
                    x2="45.8337"
                    y2="25.0001"
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
              width: "310px",
              height: "256px",
              textAlign: "left",
              boxShadow: "0px 2px 16px 0px #FFDCC433",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
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
                  d="M9.375 20.8334C9.375 12.9767 9.375 9.04831 11.8158 6.60752C14.2566 4.16675 18.1849 4.16675 26.0417 4.16675H29.1667C37.0233 4.16675 40.9519 4.16675 43.3925 6.60752C45.8333 9.04831 45.8333 12.9767 45.8333 20.8334V29.1667C45.8333 37.0234 45.8333 40.952 43.3925 43.3926C40.9519 45.8334 37.0233 45.8334 29.1667 45.8334H26.0417C18.1849 45.8334 14.2566 45.8334 11.8158 43.3926C9.375 40.952 9.375 37.0234 9.375 29.1667V20.8334Z"
                  stroke="url(#paint0_linear_287_4453)"
                  stroke-width="3"
                />
                <path
                  d="M31.7708 20.8337V26.042C31.7708 27.7678 33.17 29.167 34.8958 29.167C36.6217 29.167 38.0208 27.7678 38.0208 26.042V24.9999C38.0208 19.247 33.3571 14.5833 27.6042 14.5833C21.8513 14.5833 17.1875 19.247 17.1875 24.9999C17.1875 30.7528 21.8513 35.4166 27.6042 35.4166C29.9496 35.4166 32.114 34.6414 33.8552 33.3333M31.7708 25.0003C31.7708 27.3016 29.9054 29.167 27.6042 29.167C25.3029 29.167 23.4375 27.3016 23.4375 25.0003C23.4375 22.6991 25.3029 20.8337 27.6042 20.8337C29.9054 20.8337 31.7708 22.6991 31.7708 25.0003Z"
                  stroke="url(#paint1_linear_287_4453)"
                  stroke-width="3"
                />
                <path
                  d="M9.37533 12.5H4.16699M9.37533 25H4.16699M9.37533 37.5H4.16699"
                  stroke="url(#paint2_linear_287_4453)"
                  stroke-width="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_287_4453"
                    x1="9.375"
                    y1="25.0001"
                    x2="45.8333"
                    y2="25.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_287_4453"
                    x1="17.1875"
                    y1="24.9999"
                    x2="38.0208"
                    y2="24.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F25E25" />
                    <stop offset="1" stop-color="#F97F11" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_287_4453"
                    x1="4.16699"
                    y1="25"
                    x2="9.37533"
                    y2="25"
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
            maxWidth: "1283px",
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
              width: "310px",
              height: "265px",
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
