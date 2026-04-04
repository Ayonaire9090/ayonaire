import React from "react";

interface DashboardEmailIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardEmailIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardEmailIconProps) => {
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
        d="M1.66602 9.9987C1.66602 6.856 1.66602 5.28465 2.64233 4.30834C3.61864 3.33203 5.18999 3.33203 8.33268 3.33203H11.666C14.8087 3.33203 16.3801 3.33203 17.3564 4.30834C18.3327 5.28465 18.3327 6.856 18.3327 9.9987C18.3327 13.1414 18.3327 14.7127 17.3564 15.6891C16.3801 16.6654 14.8087 16.6654 11.666 16.6654H8.33268C5.18999 16.6654 3.61864 16.6654 2.64233 15.6891C1.66602 14.7127 1.66602 13.1414 1.66602 9.9987Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M2.64258 4.30859L6.79837 8.16561C8.3289 9.44105 9.09417 10.0788 9.99929 10.0788C10.9044 10.0788 11.6697 9.44105 13.2002 8.1656L17.3563 4.3091"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
