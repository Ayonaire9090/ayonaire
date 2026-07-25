'use client';

import Image from 'next/image';
import { Eye, CheckCircle2 } from 'lucide-react';
import { sora } from '@/app/fonts';
import { typeScale } from './_components/type';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const speakers = [
  {
    name: 'Dr. Gospel Iyioku',
    role: 'Senior Data Analyst at McKinsey',
    photo: '/tutors/dr%20gospel.png',
    color: '#F67219',
    cardBio:
      'A Senior Data Analyst & Hiring Executive at McKinsey & Company. Went from Agricultural Science to Data Analysis with zero tech background now interviews DA candidates in Europe himself.',
    bio: "Transitioned from Agricultural Science into Data Analysis with zero tech background, and now sits on the other side of the table interviewing candidates for DA roles in Europe. He has over four years of experience applying advanced analytics and AI-driven insights to complex organizational challenges.",
    revealLabel: 'He will show you:',
    reveals: [
      'How he made the non-tech to tech switch',
      'What actually got him hired in an international company',
      "Why your CV gets screened out and never makes it to the HR's desk",
      "What he now looks for when he's the one hiring Data Analytics candidates",
    ],
  },
  {
    name: 'Muhammad Jamilu',
    role: 'Senior Financial Data Analyst',
    photo: '/tutors/jamilu.png',
    color: '#3B6FF2',
    cardBio:
      'Nigeria-based Data Analyst working remotely for international companies — proof you can land global DA roles without relocating.',
    bio: 'Based in Nigeria but working remotely for international companies — living proof that you can land Data Analyst roles in international companies without relocating. With over seven years of experience turning sales and business data into clear, decision-ready insights, he specializes in SQL, Power BI, Excel, and statistical analysis (SPSS, STATA), building dashboards and forecasting models that guide budgeting and growth decisions. He is also an online instructor on Udemy, among others.',
    revealLabel: 'He will show you:',
    reveals: [
      'The skills that matter internationally in 2026',
      'The exact roadmap to becoming globally employable',
      'How to learn AI-powered Data Analytics with no technical starting point',
      'How to build your own AI Agents that power Data Analysis processes',
    ],
  },
  {
    name: 'Oluwapelumi',
    role: 'Senior Marketing Data Analyst',
    photo: '/tutors/oluwapelumi.png',
    color: '#2F8F6B',
    cardBio:
      'A Data Analyst who transitioned into tech from a Biochemistry background, she is a living proof that your background cannot stop you if you do not stop yourself.',
    bio: 'Transitioned into tech from a Biochemistry background — living proof that your background cannot stop you if you do not stop yourself.',
    revealLabel: 'She will reveal:',
    reveals: [
      'The lies you must not fall for within the DA industry',
      'The present job opportunities you can explore right now in 2026',
      'How to start your journey into Data Analytics using the exact roadmap that turns you into the right job candidate',
    ],
  },
];

type Speaker = (typeof speakers)[number];

function TutorCard({ speaker }: { speaker: Speaker }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex w-full flex-col items-center overflow-hidden rounded-2xl bg-white p-6 text-center shadow-[0_4px_14.5px_rgba(0,0,0,0.09)] transition-shadow hover:shadow-lg focus:outline-none">
          <div className="relative aspect-square w-full max-w-[260px]">
            <Image
              src={speaker.photo}
              alt={speaker.name}
              fill
              className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
              >
                <Eye size={18} strokeWidth={2} style={{ color: speaker.color }} />
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className={`${sora.className} ${typeScale.cardTitle} font-semibold tracking-tight text-[#121315]`}>
              {speaker.name}
            </p>
            <p className={`${sora.className} ${typeScale.body} mt-1 font-semibold text-[#F67219]`}>{speaker.role}</p>
            <p className="mt-3 text-[10px] leading-relaxed text-[#575E70]">{speaker.cardBio}</p>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-lg gap-0 overflow-hidden rounded-none border-none p-0 shadow-2xl">
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <DialogHeader className="text-left">
            <DialogTitle className={`${sora.className} text-lg`}>{speaker.name}</DialogTitle>
            <p className="text-sm font-semibold" style={{ color: speaker.color }}>{speaker.role}</p>
          </DialogHeader>

          <p className={`${sora.className} ${typeScale.body} mt-5 leading-relaxed text-gray-600`}>
            {speaker.bio}
          </p>

          <div
            className="mt-5 rounded-2xl p-5"
            style={{ backgroundColor: `${speaker.color}0D` }}
          >
            <p className="text-sm font-bold" style={{ color: speaker.color }}>{speaker.revealLabel}</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {speaker.reveals.map((reveal, i) => (
                <li key={i} className={`${typeScale.body} flex items-start gap-2.5 text-[#2D3139]`}>
                  <CheckCircle2 size={18} strokeWidth={2} className="mt-0.5 shrink-0" style={{ color: speaker.color }} />
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

export default function WhoIsTeaching() {
  return (
    <section id="who-is-teaching" className="w-full bg-white px-4 py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl w-full">
        <div className="text-center mb-12">
          <h2 className={`${sora.className} ${typeScale.h2} font-bold text-[#121315]`}>
            Meet Your <span className="text-[#F67219]">Speakers</span>
          </h2>
          <p className={`${sora.className} ${typeScale.body} mt-2 text-gray-500`}>Real practitioners, not just theorists.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <TutorCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
