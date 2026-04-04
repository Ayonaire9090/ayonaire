import React from "react";

interface DashboardAssesmentIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardAssesmentIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardAssesmentIconProps) => {
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
        d="M3.33464 2.5H2.5013C2.04107 2.5 1.66797 2.8731 1.66797 3.33333V15L2.91797 17.5L4.16797 15V3.33333C4.16797 2.8731 3.79487 2.5 3.33464 2.5Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M17.5013 10.0011V6.66727C17.5013 4.7028 17.5013 3.72057 16.8911 3.11028C16.2809 2.5 15.2988 2.5 13.3346 2.5H10.8346C8.87047 2.5 7.88836 2.5 7.27816 3.11028C6.66797 3.72057 6.66797 4.7028 6.66797 6.66727V13.3349C6.66797 15.2993 6.66797 16.2816 7.27816 16.8919C7.79517 17.409 8.57914 17.4879 10.0013 17.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M10 5.83203H14.1667"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M10 9.16797H14.1667"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M11.668 15.8333C11.668 15.8333 12.918 16.25 13.7513 17.5C13.7513 17.5 15.0013 14.1667 18.3346 12.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M1.66797 5.83594H4.16797"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};
