import React from "react";

interface DashboardCertificateIconProps {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
}
export const DashboardCertificateIcon = ({
  fill = "none",
  width = "20",
  height = "20",
  stroke = "#737373",
  strokeWidth = "1.5",
  className,
}: DashboardCertificateIconProps) => {
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
        cx="9.99935"
        cy="7.5013"
        r="5.83333"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M6.12593 12.5L5.5952 14.4358C5.07158 16.3457 4.80977 17.3006 5.15914 17.8234C5.28158 18.0066 5.44583 18.1537 5.63643 18.2507C6.18029 18.5276 7.02001 18.0901 8.69944 17.215C9.25824 16.9238 9.53764 16.7782 9.83452 16.7466C9.94457 16.7349 10.0554 16.7349 10.1655 16.7466C10.4624 16.7782 10.7418 16.9238 11.3006 17.215C12.98 18.0901 13.8197 18.5276 14.3636 18.2507C14.5542 18.1537 14.7184 18.0066 14.8409 17.8234C15.1902 17.3006 14.9284 16.3457 14.4048 14.4358L13.8741 12.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
