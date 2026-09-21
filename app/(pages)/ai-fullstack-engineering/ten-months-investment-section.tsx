import { exo, exoMedium } from "@/app/fonts";

export default function TenMonthsInvestmentSection() {
  return (
    <section className="mt-20 bg-[#fefaf8] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-[120px] xl:px-16">
      <div className="mx-auto w-full max-w-[1240px] rounded-[28px] bg-[#fdd8cc] px-6 py-10 sm:rounded-[34px] sm:px-8 lg:rounded-[40px] lg:p-10">
        <div className="flex flex-col gap-9 lg:gap-11">
          <h2 className={`${exo.className} text-justify text-[24px] font-bold leading-[1.45] tracking-[0.8px] text-[#5a4136] sm:text-[32px] lg:text-[40px] lg:leading-[67px] lg:tracking-[2px]`}>
            Invest in the <span className="text-[#f25e25]">next 10 months of your life</span> and change the trajectory of your career.
          </h2>

          <div className={`${exoMedium.className} space-y-7 text-center text-[18px] font-normal leading-[1.65] tracking-[0.5px] text-[#181c23] sm:text-[24px] lg:text-[28px] lg:leading-[44px] lg:tracking-[1.2px]`}>
            <p>Ten months from now will come whether you enrol or not.</p>
            <p>The real question is:</p>
            <p className="font-bold">Will you spend those months only consuming content?</p>
            <p>
              Or will you spend them <strong>building skills, experience, proof of work and career readiness that could put you in a completely different position?</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
