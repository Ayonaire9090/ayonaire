import { exo, exoMedium } from "@/app/fonts";

export default function TenMonthsInvestmentSection() {
  return (
    <section className="mt-20 bg-[#fefaf8] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 xl:px-16 xl:pb-28">
      <div className="mx-auto w-full max-w-[1240px] rounded-[24px] xs:rounded-[28px] bg-[#fdd8cc] px-4 py-8 xs:px-6 sm:rounded-[34px] sm:px-8 sm:py-10 lg:rounded-[40px] lg:p-10">
        <div className="flex flex-col gap-7 xs:gap-9 lg:gap-11">
          <h2 className={`${exo.className} text-left text-[20px] xs:text-[24px] font-bold leading-[1.35] tracking-[0.4px] xs:tracking-[0.8px] text-[#5a4136] sm:text-[32px] lg:text-[40px] lg:leading-[67px] lg:tracking-[2px]`}>
            Invest in the <span className="text-[#f25e25]">next 10 months of your life</span> and change the trajectory of your career.
          </h2>

          <div className={`${exoMedium.className} space-y-6 xs:space-y-7 text-left text-[16px] xs:text-[18px] font-normal leading-[1.6] tracking-[0.3px] text-[#181c23] sm:text-center sm:text-[24px] lg:text-[28px] lg:leading-[44px] lg:tracking-[1.2px]`}>
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
