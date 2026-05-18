'use client';

import { Inter } from 'next/font/google';
import { FaYoutube } from "react-icons/fa";
import {

  CalendarDays,
  Clock3,
  Wallet,
} from 'lucide-react';


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});


import { agile, adineue } from '@/app/fonts';

export default function LiveSessionDetails() {
  const details = [
    {
      icon: <FaYoutube size={22} />,
      title: 'Venue',
      value: 'YouTube Live',
      subValue: '@Ayonaire Academy',
    },
    {
      icon: <CalendarDays size={22} />,
      title: 'Date',
      value: '30th May, 2026',
      subValue: 'Saturday',
    },
    {
      icon: <Clock3 size={22} />,
      title: 'Time',
      value: '7PM WAT',
      subValue: 'GMT +1',
    },
    {
      icon: <Wallet size={22} />,
      title: 'Fee',
      value: '100% Free',
      subValue: 'Limited Access',
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className= {`${agile.className} text-4xl md:text-5xl font-bold text-[#121315]`}
          >
            Live Session Details
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-[#ffe6de] rounded-2xl py-8 px-6 flex flex-col items-center text-center"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 rounded-xl bg-[#f3cdbd] flex items-center justify-center text-[#F25E25] mb-4">
                {item.icon}
              </div>

              {/* Small Label */}
              <p className="text-gray-500 text-sm mb-1 font-agile">
                {item.title}
              </p>

              {/* Main Text */}
              <h3
                className={`${inter.className} text-[30px] font-bold text-[#121315] leading-tight`}
              >
                {item.value}
              </h3>

              {/* Bottom Text */}
              <p className="text-[#F25E25] text-lg mt-1">
                {item.subValue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}