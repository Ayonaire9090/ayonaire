import React from "react";

interface DashboardPaymentIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardPaymentIcon = ({
  fill = "none",
  width = "16",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardPaymentIconProps) => {
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
        d="M1.66602 8.33203L18.3327 8.33203"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
