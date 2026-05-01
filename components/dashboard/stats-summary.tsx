interface StatsSummaryProps {
  data?: {
    title: string;
    number: string;
  }[];
  className?: string;
}

const mockSummaryData = [
  { title: "All", number: "44" },
  { title: "Active", number: "20" },
  { title: "Pending Cancellation", number: "1" },
  { title: "Pending Payment", number: "3" },
  { title: "On Hold", number: "4" },
  { title: "Cancelled", number: "16" },
];

export const StatsSummary = ({
  data = mockSummaryData,
  className,
}: StatsSummaryProps) => {
  return (
    <div
      className={`hidden md:block text-[15px] mb-6 text-gray-500 ${className}`}
    >
      {data.map((item, index) => (
        <span key={index} className="text-gray-500">
          <span className="text-[#FF7A59]">{item.title}</span> ({item.number})
          {index < data.length - 1 && " | "}
        </span>
      ))}
    </div>
  );
};
