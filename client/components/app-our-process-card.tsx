import React from "react";

interface AppOurProcessCardProps {
  title: string;
  description: string;
  iconPosition: "top" | "bottom";
  index: number;
  showArrow?: boolean;
  className?: string;
}

export const AppOurProcessCard = ({
  title,
  description,
  showArrow = true,
  iconPosition,
  index,
}: AppOurProcessCardProps) => {
  return (
    <div className="relative w-full max-w-[300px] h-full">
      {iconPosition === "top" ? (
        <>
          {/* Orange offset border */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg lg:rounded-4xl bg-[#F25E25]" />

          {/* Card */}
          <div className="relative z-10 bg-white rounded-lg lg:rounded-4xl p-2 lg:p-6 shadow-lg text-center h-full min-h-[250px] flex flex-col justify-center items-center">
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#F25E25] via-[#F25E25] to-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {index + 1}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-8">{title}</h3>
            <p className="text-xs md:text-base text-gray-600 mt-2 ">
              {description}
            </p>
          </div>

          {/* Bottom pin */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-[#F25E25]" />

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F25E25]" />
        </>
      ) : (
        <>
          {/* Orange offset border */}
          <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-lg lg:rounded-4xl bg-[#F25E25]" />

          {/* Card */}
          <div className="relative z-10 bg-white rounded-lg lg:rounded-4xl p-2 lg:p-6 shadow-lg text-center h-full min-h-[250px] flex flex-col justify-center items-center">
            {/* Icon */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-linear-to-tr from-[#F25E25] via-[#F25E25] to-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {index + 1}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
          </div>

          {/* Top pin */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-[#F25E25]" />

          <div className=" absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F25E25]" />
        </>
      )}

      {/* Arrow */}
      {showArrow && (
        <div
          className="
          absolute right-[-28px] top-1/2 -translate-y-1/2
          w-0 h-0
          border-t-10 border-b-10 border-l-16
          border-t-transparent border-b-transparent border-l-[#F25E25]
        "
        />
      )}
    </div>
  );
};
