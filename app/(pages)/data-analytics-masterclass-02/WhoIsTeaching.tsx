'use client';

import Image from 'next/image';
import { Eye } from 'lucide-react';
import { sora } from '@/app/fonts';
import { typeScale } from './_components/type';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// ==========================================
// COMPONENT: OrangeCircleCheck (Custom SVG Checkmark)
// ==========================================
const OrangeCircleCheck = ({ id }: { id: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="mt-0.5 shrink-0"
  >
    <path
      d="M46.3128 28.4374C44.6878 36.5624 38.5619 44.2117 29.963 45.9221C21.3643 47.6326 12.6384 43.6328 8.32119 36.0021C4.00399 28.3717 5.06979 18.8322 10.9646 12.3425C16.8594 5.85279 26.8128 4.06243 34.9378 7.31243"
      stroke={`url(#grad0_${id})`}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.6875 25.1875L26.8125 33.3125L46.3125 12.1875"
      stroke={`url(#grad1_${id})`}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id={`grad0_${id}`}
        x1="5.6875"
        y1="26.0214"
        x2="46.3128"
        y2="26.0214"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F25E25" />
        <stop offset="1" stopColor="#F97F11" />
      </linearGradient>
      <linearGradient
        id={`grad1_${id}`}
        x1="18.6875"
        y1="22.75"
        x2="46.3125"
        y2="22.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F25E25" />
        <stop offset="1" stopColor="#F97F11" />
      </linearGradient>
    </defs>
  </svg>
);

// ==========================================
// DATA: Speakers Information
// ==========================================
const speakers = [
  {
    id: 'gospel',
    name: 'Dr. Gospel Iyioku',
    role: 'Senior Data Analyst at McKinsey',
    photo: '/tutors/dr%20gospel.png',
    color: '#F67219',
    cardBio:
      'A Senior Data Analyst & Hiring Executive at McKinsey & Company. Went from Agricultural Science to Data Analysis with zero tech background now interviews DA candidates in Europe himself.',
    bio: "A Senior Data Analyst & Hiring Executive at McKinsey & Company. Went from Agricultural Science to Data Analysis with zero tech background now interviews DA candidates in Europe himself.",
    revealLabel: 'He will show you:',
    reveals: [
      'How he made the non-tech to tech switch',
      'What actually got him hired in an international company.',
      "Why your CV gets screened out and never makes it to the HR's desk",
      "What he now looks for when he's the one hiring Data Analytics candidates",
    ],
  },
  {
    id: 'jamilu',
    name: 'Muhammad Jamilu',
    role: 'Senior Financial Data Analyst',
    photo: '/tutors/jamilu.png',
    color: '#3B6FF2',
    cardBio:
      'Nigeria-based Data Analyst working remotely for international companies — proof you can land global DA roles without relocating.',
    bio: 'Nigeria-based Data Analyst working remotely for international companies — proof you can land global DA roles without relocating.',
    revealLabel: 'He will show you:',
    reveals: [
      'The skills that matter internationally in 2026',
      'The exact roadmap to becoming globally employable',
      'How to learn AI-powered Data Analytics with no technical starting point',
      'How to build your own AI Agents that power Data Analysis processes',
    ],
  },
  {
    id: 'oluwapelumi',
    name: 'Oluwapelumi',
    role: 'Senior Marketing Data Analyst',
    photo: '/tutors/oluwapelumi.png',
    color: '#2F8F6B',
    cardBio:
      'A Data Analyst who transitioned into tech from a Biochemistry background, she is a living proof that your background cannot stop you if you do not stop yourself.',
    bio: 'A Data Analyst who transitioned into tech from a Biochemistry background, she is a living proof that your background cannot stop you if you do not stop yourself.',
    revealLabel: 'She will reveal:',
    reveals: [
      'The lies you must not fall for within the DA industry',
      'The present job opportunities you can explore right now in 2026',
      'How to start your journey into Data Analytics using the exact roadmap that turns you into the right job candidate',
    ],
  },
];

type Speaker = (typeof speakers)[number];

// ==========================================
// COMPONENT: TutorCard (Individual Speaker Card + Modal)
// ==========================================
function TutorCard({ speaker }: { speaker: Speaker }) {
  return (
    <Dialog>
      {/* Card Trigger Button */}
      <DialogTrigger asChild>
        <button className="group flex w-full flex-col items-center overflow-hidden rounded-2xl bg-white p-6 text-center shadow-[0_4px_14.5px_rgba(0,0,0,0.09)] transition-shadow hover:shadow-lg focus:outline-none">
          
          {/* Speaker Image Thumbnail Wrapper */}
          <div className="relative aspect-[4/4] w-[80%] overflow-hidden rounded-xl">
            <Image
              src={speaker.photo}
              alt={speaker.name}
              fill
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            {/* Hover overlay with eye icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-100">
                <Eye size={18} strokeWidth={2} style={{ color: speaker.color }} />
              </span>
            </div>
          </div>

          {/* Speaker Meta Information (Name, Role, Short Bio) */}
          <div className="mt-4 w-full">
            <p className={`${sora.className} ${typeScale.cardTitle} font-semibold tracking-tight text-[#121315]`}>
              {speaker.name}
            </p>
            <p className={`${sora.className} ${typeScale.body} mt-1 font-semibold text-[#F67219]`}>{speaker.role}</p>
            <p className="mt-3 text-[14px] font-bold leading-relaxed text-[#575E70]">{speaker.cardBio}</p>
          </div>

        </button>
      </DialogTrigger>

      {/* Modal Content Dialog */}
      <DialogContent className="w-full sm:max-w-4xl gap-0 overflow-hidden rounded-[12px] border-none p-6 sm:p-12 shadow-2xl bg-white">
        <div className="max-h-[85vh] overflow-y-auto w-full">

          {/* Top Section: Speaker Profile (Image + Bio) */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10 w-full">

            {/* Speaker Large Image */}
            <div className="relative aspect-square w-48 sm:w-60 shrink-0 overflow-hidden rounded-[24px]">
              <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-white">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Speaker Title & Detailed Description */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 w-full space-y-3">
              <DialogHeader className="p-0 text-center sm:text-left">
                <DialogTitle className={`${sora.className} sm:text-lg font-bold text-[#121315]`}>
                  {speaker.name}
                </DialogTitle>
                <p className="text-base font-bold mt-1" style={{ color: speaker.color }}>
                  {speaker.role}
                </p>
              </DialogHeader>

              <p className={`${sora.className} ${typeScale.body} text-sm sm:text-base leading-relaxed text-[#575E70] font-medium`}>
                {speaker.bio}
              </p>
            </div>

          </div>
          {/* Bottom Box: Key Takeaways / What They Will Reveal */}
          <div
            className="mt-8 sm:mt-10 rounded-2xl p-6 sm:p-8 w-full"
            style={{ backgroundColor: `${speaker.color}0A` }}
          >
            <p className="text-base sm:text-xl font-bold text-[#2D3139]">
              {speaker.revealLabel}
            </p>
            <ul className="mt-4 sm:mt-5 flex flex-col gap-4">
              {speaker.reveals.map((reveal, i) => (
                <li key={i} className={`${typeScale.body} flex items-start gap-3.5 text-[#121315] text-sm sm:text-base font-medium`}>
                  <OrangeCircleCheck id={speaker.id} />
                  <span>{reveal}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}

// ==========================================
// COMPONENT: WhoIsTeaching (Main Section Wrapper)
// ==========================================
export default function WhoIsTeaching() {
  return (
    <section id="who-is-teaching" className="w-full bg-white px-4 py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`${sora.className} ${typeScale.h2} font-bold text-[#121315]`}>
            Meet Your <span className="text-[#F67219]">Speakers</span>
          </h2>
          <p className={`${sora.className} ${typeScale.body} mt-2 text-gray-500`}>Real practitioners, not just theorists.</p>
        </div>

        {/* Speakers Grid Loop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <TutorCard key={index} speaker={speaker} />
          ))}
        </div>

      </div>
    </section>
  );
}