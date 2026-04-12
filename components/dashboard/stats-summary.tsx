interface StatsSummaryProps {
  data: {
    title: string;
    number: string;
  }[];
  className?: string;
}
export const StatsSummary = ({ data, className }: StatsSummaryProps) => {
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
