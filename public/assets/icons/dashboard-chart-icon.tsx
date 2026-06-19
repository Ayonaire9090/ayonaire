import React from "react";

interface DashboardChartIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardChartIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardChartIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.5 12.8333V9.5M8.66667 12.8333V4.5M12.8333 12.8333V7.83333"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M0.75 8.66667C0.75 4.935 0.75 3.06833 1.90917 1.90917C3.06833 0.75 4.93417 0.75 8.66667 0.75C12.3983 0.75 14.265 0.75 15.4242 1.90917C16.5833 3.06833 16.5833 4.93417 16.5833 8.66667C16.5833 12.3983 16.5833 14.265 15.4242 15.4242C14.265 16.5833 12.3992 16.5833 8.66667 16.5833C4.935 16.5833 3.06833 16.5833 1.90917 15.4242C0.75 14.265 0.75 12.3992 0.75 8.66667Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};
