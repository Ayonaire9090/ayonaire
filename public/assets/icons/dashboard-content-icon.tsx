import React from "react";

interface DashboardContentIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardContentIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardContentIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.5 9.16797C2.5 6.04319 2.5 4.4808 3.29576 3.38553C3.55276 3.0318 3.86383 2.72073 4.21756 2.46373C5.31283 1.66797 6.87522 1.66797 10 1.66797C13.1247 1.66797 14.6872 1.66797 15.7824 2.46373C16.1362 2.72073 16.4472 3.0318 16.7042 3.38553C17.5 4.4808 17.5 6.04319 17.5 9.16797V10.8346C17.5 13.9594 17.5 15.5218 16.7042 16.617C16.4472 16.9708 16.1362 17.2819 15.7824 17.5389C14.6872 18.3346 13.1247 18.3346 10 18.3346C6.87522 18.3346 5.31283 18.3346 4.21756 17.5389C3.86383 17.2819 3.55276 16.9708 3.29576 16.617C2.5 15.5218 2.5 13.9594 2.5 10.8346V9.16797Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3346 7.91406H6.66797M11.2513 12.0807H8.7513"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
