import React from "react";

interface AppListProps {
  items: string[];
  tickVariant?: "round" | "default";
  className?: string;
}
export const AppList = ({ items, tickVariant, className }: AppListProps) => {
  return (
    <>
      {tickVariant === "round" ? (
        <ul className={`space-y-2 ${className}`}>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <img
                src="/assets/icons/round-tick.svg"
                alt="tick"
                className="size-8 shrink-0"
              />
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul
          className={`list-image-[url('/assets/icons/tick.svg')] list-outside pl-6 space-y-2 ${className}`}
        >
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};
