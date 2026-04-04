import React from "react";

interface DashboardSupportIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardSupportIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardSupportIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3230_11755)">
        <circle
          cx="9.99935"
          cy="10.0013"
          r="8.33333"
          stroke="#737373"
          strokeWidth="1.5"
        />
        <path
          d="M8.4375 7.39453C8.4375 6.53159 9.13706 5.83203 10 5.83203C10.8629 5.83203 11.5625 6.53159 11.5625 7.39453C11.5625 7.9674 11.2542 8.46827 10.7945 8.74026C10.3984 8.97461 10 9.33013 10 9.79036V10.832"
          stroke="#737373"
          strokeWidth="1.5"
          stroke-linecap="round"
        />
        <circle cx="9.99935" cy="13.3333" r="0.833333" fill="#737373" />
      </g>
      <defs>
        <clipPath id="clip0_3230_11755">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
