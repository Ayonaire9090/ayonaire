import { baiJamjuree } from '@/app/fonts';

export default function HiringGameChanged() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 text-center">
        <h2 className={`${baiJamjuree.className} text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight text-[#121315]`}>
          The <span className="text-[#F67219]">Hiring Game Changed</span> In 2026 — But You Don&apos;t Know The New
          Rules Yet
        </h2>

        <div className="flex flex-col gap-4 text-base leading-relaxed text-[#121315]/80 sm:text-lg">
          <p>
            Are you planning to learn Data Analysis in 2026? Or have you already learnt it and still aren&apos;t
            landing interviews or jobs?
          </p>
          <p>
            See, knowing data analysis doesn&apos;t get people hired anymore. Knowing what hiring managers are
            screening for does.
          </p>
          <p>
            Companies are no longer hiring the same way they did 3 years ago — and if you want to benefit from the
            sumptuous salaries paid to Data Analysts, you need to know exactly what companies want.
          </p>
        </div>
      </div>
    </section>
  );
}
