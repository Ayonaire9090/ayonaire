const historyCardItems = [
  {
    title: "Total Sent",
    description: "12",
    textColor: "text-black",
  },
  {
    title: "Recepients",
    description: "1,240",
    textColor: "text-[#197FE6]",
  },
  {
    title: "Success",
    description: "1,210",
    textColor: "text-[#009F42]",
  },
  {
    title: "Failed",
    description: "30",
    textColor: "text-[#EF4444]",
  },
  {
    title: "Delivery Rate",
    description: "97.5%",
    textColor: "text-[#F59E0B]",
  },
];
export const HistoryCards = () => {
  return (
    <div className="w-full flex flex-1 items-center md:grid md:grid-cols-2 lg:grid-cols-5 gap-3 overflow-x-auto hide-scrollbar my-3">
      {historyCardItems.map((item, index) => (
        <HistoryCard key={index} {...item} />
      ))}
    </div>
  );
};

const HistoryCard = ({
  title,
  description,
  textColor,
}: {
  title: string;
  description: string;
  textColor: string;
}) => {
  return (
    <div className="flex w-full h-[110px] md:h-full min-w-[200px] md:max-w-full flex-col justify-center items-center gap-3 bg-white p-2 md:p-4 rounded-lg">
      <p className="text-gray-600 text-[16px]">{title}</p>
      <p className={`${textColor} text-xl font-bold`}>{description}</p>
    </div>
  );
};
