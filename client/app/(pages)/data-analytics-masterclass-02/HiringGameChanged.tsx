import { sora } from "@/app/fonts";
import { typeScale } from "./_components/type";

export default function HiringGameChanged() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 text-center">
        <h2
          className={`${sora.className} ${typeScale.h2} text-3xl! font-bold leading-tight text-[#121315]`}
        >
          The{" "}
          <span className="relative inline-block rounded-md bg-[#F25E25]/10 px-3 py-1 text-[#F67219]">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#e25614] md:bg-[#da501a]"
            >
              <span className="absolute -top-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#cf4f1c] md:block" />
            </span>
            <span
              aria-hidden="true"
              className="absolute right-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#e25615] md:bg-[#d34e1a]"
            >
              <span className="absolute -bottom-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#e95318] md:block" />
            </span>
            Hiring Game Changed
          </span>{" "}
          In 2026 — But You Don&apos;t Know The New Rules Yet
        </h2>

        <div
          className={`${sora.className} ${typeScale.body} flex flex-col gap-5 text-center font-semibold leading-relaxed text-[#121315]`}
        >
          <p>
            Are you planning to learn Data Analysis in 2026? Or have you already
            learnt it and still aren&apos;t landing interviews or jobs?
          </p>
          <p>
            See, knowing data analysis doesn&apos;t get people hired anymore.
            Knowing what hiring managers are screening for does.
          </p>
          <p>
            Companies are no longer hiring the same way they did 3 years ago —
            and if you want to benefit from the sumptuous salaries paid to Data
            Analysts, you need to know exactly what companies want.
          </p>
        </div>
      </div>
    </section>
  );
}
