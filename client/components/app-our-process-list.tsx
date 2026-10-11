import React from "react";
import { ourProcess } from "@/constants";
import { AppOurProcessCard } from "./app-our-process-card";

export const AppOurProcessList = () => {
  return (
    <>
      <div className="w-full my-16 hidden md:block">
        <div
          className="
          grid
          grid-cols-[repeat(auto-fit,minmax(240px,1fr))]
          auto-rows-fr
          gap-x-12
          gap-y-24
          justify-items-center
        "
        >
          {ourProcess.map((item, index) => (
            <div key={index} className="w-full h-full flex justify-center">
              <AppOurProcessCard
                title={item.title}
                description={item.description}
                iconPosition={item.iconPosition}
                index={index}
                showArrow={index < ourProcess.length - 1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="w-full my-16 block md:hidden">
        <div
          className="
          grid
          grid-cols-2
          gap-x-12
          gap-y-32
          justify-items-center
        "
        >
          {ourProcess.map((item, index) => (
            <div key={index} className="w-full h-full flex justify-center">
              <AppOurProcessCard
                title={item.title}
                description={item.description}
                iconPosition={item.iconPosition}
                index={index}
                showArrow={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
