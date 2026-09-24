import Image from "next/image";
import { melodrama } from "@/app/fonts";

export default function ClarificationSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      {/* HEADER */}
      <h2
        className={`
          ${melodrama.className}
          mx-auto
          max-w-[900px]
          text-center
          text-[30px]
          font-bold
          uppercase
          leading-[1.12]
          tracking-[-0.95px]
          text-[#181c23]
          sm:text-[38px]
          md:text-[46px]
          lg:text-[54px]
          lg:leading-[1.15]
          lg:tracking-[-0.6px]
        `}
      >
        First,{" "}
        <span className="text-[#f25e25] whitespace-nowrap">let&apos;s clear</span>{" "}
        something{" "}
        <span className="whitespace-nowrap">
          out{" "}
          <span className="text-[#f25e25] whitespace-nowrap">real quick...</span>
        </span>
      </h2>

      {/* TEXT CONTENT CONTAINER */}
      <div className="mx-auto mt-8 max-w-[760px] space-y-6 text-base leading-[1.6] text-[#2d3748] sm:mt-10 sm:text-lg sm:space-y-8 md:text-xl">
        <p>
          Contrary to what you already know,{" "}
          <strong className="font-extrabold text-[#181c23]">
            AI/ML ENGINEERING
          </strong>{" "}
          is not the same as knowing how to use{" "}
          <strong className="font-extrabold text-[#181c23]">
            ChatGPT, Claude, n8n, Make
          </strong>
          , or other AI productivity and no-code automation tools you know.
        </p>

        <p>
          Those tools are useful for your{" "}
          <strong className="font-extrabold text-[#181c23]">PRODUCTIVITY.</strong>
        </p>

        <p>
          They can help you work faster, automate tasks and build useful
          workflows.
        </p>

        <p className="font-medium text-[#181c23]">
          But using AI is different from engineering AI.
        </p>
      </div>
    </section>
  );
}