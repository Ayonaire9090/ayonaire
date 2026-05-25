'use client';

import { agile, adineue } from '@/app/fonts';

// Custom lightweight inline SVGs perfectly matching the screenshot design language
const VenueIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <polygon points="10 8 14 10 10 12 10 8" fill="currentColor" />
    <line x1="6" y1="21" x2="18" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const DateIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TimeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const FeeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M12 4v16M2 10h20" />
  </svg>
);

export default function LiveSessionDetails() {
  const details = [
    {
      icon: <VenueIcon />,
      title: 'Venue',
      value: 'YouTube Live',
      subValue: '@Ayonaire Academy',
    },
    {
      icon: <DateIcon />,
      title: 'Date',
      value: '30th May, 2026',
      subValue: 'Saturday',
    },
    {
      icon: <TimeIcon />,
      title: 'Time',
      value: '7PM WAT',
      subValue: 'GMT +1',
    },
    {
      icon: <FeeIcon />,
      title: 'Fee',
      value: '100% Free',
      subValue: 'Limited Access',
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        
        {/* Header Layout Section */}
        <div className="text-center mb-12 flex flex-col items-center">
          <p className="font-sans text-sm sm:text-base font-medium text-[#121315] mb-2 tracking-wide">
            Free Live Masterclass Details
          </p>
          <h2 className={`${agile.className} text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#121315] leading-tight tracking-tight max-w-4xl`}>
            How To Break Into <span className="text-black">AI Engineering</span> &amp; <span className="text-[#F25E25]">Become An AI Builder</span>
          </h2>
        </div>

        {/* Clean, Light-Fleshed Layout Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF1EC] rounded-2xl py-8 px-5 flex flex-col items-center text-center transition-all hover:shadow-[0_8px_30px_rgb(242,94,37,0.04)]"
            >
              {/* Icon Container Frame */}
              <div className="w-12 h-12 rounded-xl bg-[#FFE2D9] flex items-center justify-center text-[#F25E25] mb-4">
                {item.icon}
              </div>

              {/* Top Meta Tag Info Label */}
              <p className="text-[#88898C] text-xs sm:text-sm font-normal mb-2 tracking-tight">
                {item.title}
              </p>

              {/* Center Title Highlight */}
              <h3 className="font-sans text-[20px] sm:text-[22px] font-bold text-[#121315] leading-snug tracking-tight">
                {item.value}
              </h3>

              {/* Underline Metadata Text */}
              <p className="text-[#F25E25] text-sm sm:text-[15px] font-medium mt-1 tracking-tight">
                {item.subValue}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}