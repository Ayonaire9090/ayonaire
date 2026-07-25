import {
  Sparkles,
  SlidersHorizontal,
  Route,
  Globe,
  Earth,
  ChartColumnIncreasing,
  Smile,
  FileWarning,
  type LucideIcon,
} from 'lucide-react';
import { sora } from '@/app/fonts';
import { typeScale } from './_components/type';

const items: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'AI-powered skill shift',
    description:
      'Why "traditional" Data Analysts are getting passed over and the specific AI-powered skill shift that\'s replacing them.',
    icon: Sparkles,
  },
  {
    title: 'Hiring manager filter',
    description:
      'How hiring managers actually filter candidates in 2026 , the exact criteria and checklist in use.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Precise learning roadmap',
    description:
      'The precise learning roadmap to become globally employable this year (no more guessing what to learn next).',
    icon: Route,
  },
  {
    title: "Build in Public' strategy",
    description:
      'How non-tech people broke into Data Analysis...the real path from zero background to working for Global companies.',
    icon: Globe,
  },
  {
    title: 'International remote roles',
    description:
      'How to land international internships and remote Data Analyst roles....even from outside the US/EU',
    icon: Earth,
  },
  {
    title: 'Industry specialization',
    description:
      "The 'Build in Public' strategy top candidates are using to get noticed by recruiters before they even apply.",
    icon: ChartColumnIncreasing,
  },
  {
    title: 'Non-tech success',
    description:
      "Why your background in finance, marketing, health, or accounting isn't a disadvantage, BUT your fastest path to a specialized, higher-paying analyst role.",
    icon: Smile,
  },
  {
    title: 'Fatal portfolio mistakes',
    description:
      'Plus the CV, portfolio, and interview mistakes quietly costing you job offers.',
    icon: FileWarning,
  },
];

function CurriculumCard({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <div className="relative">
      {/* Number badge overlapping the top-left corner */}
      <span
        className={`${sora.className} absolute -left-2 -top-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F25E25] text-sm font-bold text-white`}
      >
        {index + 1}
      </span>

      <div
        className="h-full rounded-2xl p-6 pb-10 shadow-[0_10px_28px_rgba(18,19,21,0.14)] md:pb-8"
        style={{
          background:
            'linear-gradient(180deg, rgba(248,100,50,0.22) 0%, rgba(248,100,50,0) 68%), #FFFFFF',
        }}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F86432]/20 md:h-14 md:w-14">
          <Icon
            size={20}
            strokeWidth={2}
            className="text-[#E4562B] md:h-6 md:w-6"
          />
        </div>

        <p
          className={`${sora.className} ${typeScale.cardTitle} mt-5 font-semibold text-[#121315]`}
        >
          {item.title}
        </p>
        <p
          className={`${sora.className} ${typeScale.body} mt-3 leading-relaxed text-[#4A4C50]`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function WhatYoullLearn() {
  return (
    <section
      id="what-youll-learn"
      className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1290px] flex-col items-center">
        {/* Heading */}
        <h2
          className={`${sora.className} ${typeScale.h2} mx-auto max-w-[820px] text-center font-bold leading-snug text-[#121315]`}
        >
          What <span className="text-[#F25E25]">You&apos;ll Learn</span> Inside
          The Free Masterclass
        </h2>
        <p
          className={`${sora.className} ${typeScale.body} mt-4 max-w-[720px] text-center leading-relaxed text-[#3F4145]`}
        >
          Eight things top candidates already know that most people learning
          Data Analytics don&apos;t.
        </p>

        {/* Cards */}
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <CurriculumCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
