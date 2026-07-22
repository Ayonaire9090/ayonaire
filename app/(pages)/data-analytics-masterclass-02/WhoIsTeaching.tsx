'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Eye, CheckCircle2 } from 'lucide-react';
import { baiJamjuree } from '@/app/fonts';
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
    role: 'Senior Data Analyst & Hiring Executive, McKinsey & Company',
    photo: '/tutors/WhatsApp%20Image%202026-07-21%20at%2008.54.23.jpeg',
    color: '#F67219',
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
    role: 'Remote Data Analyst for International Companies',
    photo: '/tutors/Jameel.png',
    color: '#3B6FF2',
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
    role: 'Data Analyst, formerly Biochemistry',
    photo: '/tutors/oluwapelumi.jpeg',
    color: '#2F8F6B',
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
        <button className="group flex w-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white text-left shadow-sm transition-shadow hover:shadow-lg focus:outline-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
            <Image
              src={speaker.photo}
              alt={speaker.name}
              fill
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
              >
                <Eye size={18} strokeWidth={2} style={{ color: speaker.color }} />
              </span>
            </div>
          </div>

          <div className="p-5">
            <p className={`${baiJamjuree.className} text-lg font-bold text-[#121315]`}>
              {speaker.name}
            </p>
            <p className="mt-1 text-sm text-gray-500 leading-snug">{speaker.role}</p>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-lg gap-0 overflow-hidden rounded-none border-none p-0 shadow-2xl">
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <DialogHeader className="text-left">
            <DialogTitle className={`${baiJamjuree.className} text-lg`}>{speaker.name}</DialogTitle>
            <p className="text-sm font-semibold" style={{ color: speaker.color }}>{speaker.role}</p>
          </DialogHeader>

          <p className={`${baiJamjuree.className} mt-5 text-[15px] leading-relaxed text-gray-600`}>
            {speaker.bio}
          </p>

          <div
            className="mt-5 rounded-2xl p-5"
            style={{ backgroundColor: `${speaker.color}0D` }}
          >
            <p className="text-sm font-bold" style={{ color: speaker.color }}>{speaker.revealLabel}</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {speaker.reveals.map((reveal, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#2D3139]">
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

/** Mobile: pinned stack where each tutor card crossfades in/out in the same
    spot as you scroll — no sliding, just appear/disappear. All cards share
    one grid cell so the container sizes itself to the tallest card. */
function MobileTutorStack({ speakers }: { speakers: Speaker[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateActiveIndex = () => {
      ticking = false;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollableDistance);
      const progress = scrolled / scrollableDistance;
      const index = Math.min(
        speakers.length - 1,
        Math.floor(progress * speakers.length),
      );
      setActiveIndex(index);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveIndex);
      }
    };

    updateActiveIndex();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speakers.length]);

  return (
    <div
      ref={containerRef}
      className="relative sm:hidden"
      style={{ height: `${speakers.length * 60}vh` }}
    >
      <div
        className="sticky top-24 flex items-center justify-center"
        style={{ minHeight: 'calc(100vh - 6rem)' }}
      >
        <div className="grid w-full">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`[grid-area:1/1] transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <TutorCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhoIsTeaching() {
  return (
    <section id="who-is-teaching" className="w-full bg-white px-4 py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl w-full">
        <div className="text-center mb-12">
          <h2 className={`${baiJamjuree.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#121315]`}>
            Who's Teaching You
          </h2>
          <p className={`${baiJamjuree.className} mt-2 text-gray-500`}>Real practitioners, not just theorists.</p>
        </div>

        {/* Desktop / tablet: static grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <TutorCard key={index} speaker={speaker} />
          ))}
        </div>

        {/* Mobile: pinned crossfade stack (see MobileTutorStack) */}
        <MobileTutorStack speakers={speakers} />
      </div>
    </section>
  );
}
