import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 to-orange-100 font-sans">
      {/* Header */}
      <div className="w-full flex justify-center pt-[18px] pb-8">
        <header
          className="flex items-center justify-between w-full max-w-[1280px] h-[80px] bg-white rounded-[12px] shadow-lg px-12"
          style={{ opacity: 1, marginLeft: "50px", marginRight: "50px" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/ayonaire-logo-new.png"
                alt="Ayonaire Logo"
                width={159}
                height={40}
                priority
              />
            </a>
            {/* Nav Links */}
            <nav className="hidden md:flex gap-10 text-lg font-semibold">
              <a href="#" className="text-orange-500 relative pb-1">
                Ayonaire Learn
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 rounded"></span>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-orange-500 transition-colors"
              >
                For Business
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-orange-500 transition-colors"
              >
                Hire Talent
              </a>
              <div className="relative group">
                <button className="text-gray-800 hover:text-orange-500 flex items-center gap-1 transition-colors">
                  More{" "}
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                    <path
                      d="M5.25 7.75L10 12.25L14.75 7.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Dropdown example */}
                <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="block px-4 py-2 hover:bg-orange-50">
                    About
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-orange-50">
                    Contact
                  </a>
                </div>
              </div>
            </nav>
          </div>
          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 border-2 border-orange-400 rounded-xl text-orange-500 font-semibold bg-white hover:bg-orange-50 transition-colors text-lg">
              Log in
            </button>
            <button
              className="flex items-center gap-2 font-semibold shadow text-lg transition-colors"
              style={{
                width: "206.33px",
                height: "48px",
                borderRadius: "14px",
                opacity: 1,
                background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
                color: "#fff",
                paddingLeft: "24px",
                paddingRight: "24px",
                border: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0",
                }}
              >
                See Bootcamps
              </span>
              <span
                style={{
                  background: "rgba(255,255,255,0.3)",
                  borderRadius: "50%",
                  padding: "4px",
                }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M7 10H13M13 10L10 7M13 10L10 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </header>
      </div>

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
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow-lg px-8 py-6 gap-6">
          <div className="flex flex-col items-center">
            <span className="text-orange-500 font-bold text-lg">
              Next Cohort
            </span>
            <span className="text-gray-800 font-semibold text-xl">
              15 January, 2026
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-500 font-bold text-lg">Duration</span>
            <span className="text-gray-800 font-semibold text-xl">
              6 Months
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-500 font-bold text-lg">Format</span>
            <span className="text-gray-800 font-semibold text-xl">
              Live, Online, Interactive
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
