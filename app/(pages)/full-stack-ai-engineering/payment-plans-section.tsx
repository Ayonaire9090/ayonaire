import Image from "next/image";
import { exo, exoMedium, melodrama, salt, space } from "@/app/fonts";

const plans = [
  {
    title: "5-Month Plan",
    schedule: "?100,000 × 5 Months",
    total: "?500,000",
  },
  {
    title: "3-Month Plan",
    schedule: "?200,000 + ?200,000 + ?100,000",
    total: "?500,000",
  },
  {
    title: "7-Month Plan",
    schedule: "?80,000 × 7 Months",
    total: "?560,000",
  },
  {
    title: "10-Month Plan",
    schedule: "?60,000 × 10 Months",
    total: "?600,000",
  },
];

export default function PaymentPlansSection() {
  return (
    <section className="bg-gradient-to-b from-[rgba(255,255,255,0.28)] to-[rgba(248,100,50,0.28)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
        
        <div className="grid w-full gap-12 lg:grid-cols-[544px_1fr] lg:gap-[45px]">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-7 lg:gap-9">
            <h2
              className={`
                ${melodrama.className}
                text-[30px]
                font-bold
                uppercase
                leading-[1.18]
                tracking-[0.1px]
                text-[#181c23]

                sm:text-[36px]

                lg:text-[46px]
                lg:leading-[1.2]
              `}
            >
              And no... you do not have to pay{" "}<br/>
              <span className="text-[#f25e25]">
                500,000 at once.
              </span>
            </h2>

            <p
              className={`
                ${space.className}
                text-[16px]
                font-medium
                leading-[1.65]
                tracking-[0.2px]
                text-[#5a4136]

                sm:text-[18px]

                lg:text-[22px]
                lg:leading-[1.65]
              `}
            >
              We know serious people still have bills, family responsibilities,
              businesses, school fees and other commitments.
            </p>

            <p
              className={`
                ${space.className}
                text-[15px]
                font-medium
                leading-[1.65]
                tracking-[0.2px]
                text-[#5a4136]

                sm:text-[17px]

                lg:text-[20px]
                lg:leading-[1.65]
              `}
            >
              That is why we created several payment structures.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-7 lg:gap-9">
            <p
              className={`
                ${salt.className}
                text-[15px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#ff6b00]

                lg:text-[18px]
              `}
            >
              Plans
            </p>

            <div className="flex flex-col gap-7 lg:gap-9">
              {plans.map((plan, index) => (
                <article
                  key={plan.title}
                  className="
                    grid
                    min-h-[140px]
                    grid-cols-[56px_1fr]
                    items-center
                    gap-5
                    rounded-[10px]
                    border
                    border-[#ff9b77]/50
                    bg-white
                    px-5
                    py-6
                    shadow-[0_12px_28px_rgba(90,65,54,0.09)]

                    sm:grid-cols-[76px_1fr]
                    sm:px-8

                    lg:min-h-[175px]
                    lg:max-w-[655px]
                    lg:px-10
                  "
                  style={{
                    transform: `rotate(${
                      index % 2 === 0 ? 2 : -1.5
                    }deg)`,
                  }}
                >
                  {/* CHECK ICON */}
                  <span className="flex size-10 items-center justify-center rounded-full border-2 border-[#ff9b77] text-[#ff8b62] sm:size-12">
                    <span className="block h-3 w-5 rotate-[-45deg] border-b-2 border-l-2 border-current" />
                  </span>

                  {/* PLAN CONTENT */}
                  <div className="space-y-3 text-[#181c23]">
                    <h3
                      className={`
                        ${exo.className}
                        text-[18px]
                        font-bold
                        uppercase
                        tracking-[0.06em]

                        sm:text-[20px]

                        lg:text-[23px]
                      `}
                    >
                      {plan.title}
                    </h3>

                    <p
                      className={`
                        ${exoMedium.className}
                        text-[14px]
                        font-medium
                        tracking-[0.1px]
                        text-[#5a4136]

                        sm:text-[16px]

                        lg:text-[19px]
                      `}
                    >
                      {plan.schedule}
                    </p>

                    <p
                      className={`
                        ${exoMedium.className}
                        text-[14px]
                        font-semibold
                        tracking-[0.1px]
                        text-black

                        sm:text-[16px]

                        lg:text-[19px]
                      `}
                    >
                      Total: {plan.total}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <p
          className={`
            ${exoMedium.className}
            text-center
            text-[16px]
            font-normal
            leading-[1.6]
            tracking-[0.2px]
            text-[#5a4136]

            sm:text-[18px]

            lg:text-[21px]
          `}
        >
          Choose the structure that lets you begin responsibly.
        </p>

        {/* CTA */}
        <a
          href="tel:+2349067835701"
          className={`
            ${exo.className}
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-[8px]
            bg-[#ff6b00]
            px-8
            py-4
            text-center
            text-[11px]
            font-bold
            uppercase
            tracking-[0.04em]
            text-white
            shadow-[0_12px_16px_rgba(255,107,0,0.3)]
            transition-transform
            hover:scale-[1.01]

            sm:px-10
            sm:py-5
            sm:text-[14px]

            lg:text-[16px]
          `}
        >
          I want to start with an installment plan

          <Image
            src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </a>
      </div>
    </section>
  );
}