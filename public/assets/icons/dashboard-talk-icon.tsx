import React from "react";

interface DashboardTalkIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardTalkIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardTalkIconProps) => {
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
        d="M10.0034 10H10.0109M13.333 10H13.3405M6.67383 10H6.6813"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9154 10.0026C17.9154 14.3749 14.3709 17.9193 9.9987 17.9193C8.64195 17.9193 7.36486 17.5779 6.2487 16.9765C4.69184 16.1376 3.64421 16.9175 2.7203 17.0574C2.58015 17.0787 2.44056 17.0278 2.34034 16.9276C2.18821 16.7754 2.15925 16.5402 2.24328 16.3421C2.60591 15.4874 2.93886 13.8678 2.48487 12.5026C2.22353 11.7168 2.08203 10.8762 2.08203 10.0026C2.08203 5.63035 5.62644 2.08594 9.9987 2.08594C14.3709 2.08594 17.9154 5.63035 17.9154 10.0026Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
