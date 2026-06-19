import React from "react";

interface DashboardSpeechBubbleIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardSpeechBubbleIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardSpeechBubbleIconProps) => {
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
        d="M8.67138 8.66602H8.67888M12.001 8.66602H12.0085M5.3418 8.66602H5.34927"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5833 8.66667C16.5833 13.0389 13.0389 16.5833 8.66667 16.5833C7.30992 16.5833 6.03283 16.242 4.91667 15.6406C3.35981 14.8017 2.31218 15.5816 1.38827 15.7215C1.24812 15.7427 1.10853 15.6918 1.00831 15.5917C0.856175 15.4395 0.827217 15.2043 0.91125 15.0062C1.27388 14.1515 1.60683 12.5318 1.15284 11.1667C0.8915 10.3808 0.75 9.54025 0.75 8.66667C0.75 4.29441 4.29441 0.75 8.66667 0.75C13.0389 0.75 16.5833 4.29441 16.5833 8.66667Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
