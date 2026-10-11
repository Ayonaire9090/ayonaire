import React from "react";

interface DashboardBulbIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardBulbIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardBulbIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.00019 0.75C5.71559 0.749961 4.46218 1.14576 3.41056 1.88351C2.35894 2.62127 1.5602 3.66515 1.12304 4.87307C0.68588 6.081 0.631545 7.39429 0.967431 8.6342C1.30332 9.8741 2.0131 10.9804 3.00019 11.8025C3.82519 12.4908 4.50019 13.425 4.50019 14.5H9.50019C9.50019 13.425 10.1752 12.4908 11.0002 11.8017C11.987 10.9795 12.6964 9.87325 13.0321 8.6335C13.3678 7.39374 13.3134 6.08066 12.8763 4.87293C12.4392 3.6652 11.6406 2.62147 10.5892 1.88376C9.53775 1.14604 8.28459 0.750167 7.00019 0.75Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M9.5 14.5H4.5V16.1667C4.5 16.4982 4.6317 16.8161 4.86612 17.0505C5.10054 17.285 5.41848 17.4167 5.75 17.4167H8.25C8.58152 17.4167 8.89946 17.285 9.13388 17.0505C9.3683 16.8161 9.5 16.4982 9.5 16.1667V14.5Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M5.33398 5.75065C5.33398 4.90648 6.07982 4.08398 7.00065 4.08398C7.92148 4.08398 8.66732 4.76732 8.66732 5.61148C8.66732 5.91565 8.57065 6.19898 8.40315 6.43732C7.90482 7.14732 7.00065 7.82398 7.00065 8.66732"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.99414 10.75H7.00314"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
