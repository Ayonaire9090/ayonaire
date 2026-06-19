import React from "react";

interface DashboardFileTextIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardFileTextIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardFileTextIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.75 8.25C0.75 5.12522 0.75 3.56283 1.54576 2.46756C1.80276 2.11383 2.11383 1.80276 2.46756 1.54576C3.56283 0.75 5.12522 0.75 8.25 0.75C11.3747 0.75 12.9372 0.75 14.0324 1.54576C14.3862 1.80276 14.6972 2.11383 14.9542 2.46756C15.75 3.56283 15.75 5.12522 15.75 8.25V9.91667C15.75 13.0414 15.75 14.6038 14.9542 15.6991C14.6972 16.0528 14.3862 16.3639 14.0324 16.6209C12.9372 17.4167 11.3747 17.4167 8.25 17.4167C5.12522 17.4167 3.56283 17.4167 2.46756 16.6209C2.11383 16.3639 1.80276 16.0528 1.54576 15.6991C0.75 14.6038 0.75 13.0414 0.75 9.91667V8.25Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5846 6.99805H4.91797M9.5013 11.1647H7.0013"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
