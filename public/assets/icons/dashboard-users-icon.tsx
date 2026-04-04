import React from "react";

interface DashboardUsersIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardUsersIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardUsersIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="7.5013"
        cy="4.9974"
        r="3.33333"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M12.5 7.5C13.8807 7.5 15 6.38071 15 5C15 3.61929 13.8807 2.5 12.5 2.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="7.5013"
        cy="14.1693"
        rx="5.83333"
        ry="3.33333"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M15 11.6641C16.4619 11.9846 17.5 12.7965 17.5 13.7474C17.5 14.6052 16.6552 15.3498 15.4167 15.7228"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
