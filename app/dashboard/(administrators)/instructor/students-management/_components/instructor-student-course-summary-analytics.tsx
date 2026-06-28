import {
  ChartPie,
  FileQuestionMark,
  LucideIcon,
  NotebookPen,
  Users,
} from "lucide-react";

const dummyAnalytics: InstructorStudentCourseSummaryAnalyticsCardProps[] = [
  {
    icon: Users,
    title: "Total Students",
    description: "45",
    sideContent: (
      <span className="p-1 rounded bg-[#F0FDF4] text-green-700 text-sm font-semibold">
        +12%
      </span>
    ),
  },
  {
    icon: NotebookPen,
    title: "Assignments",
    description: "6",
  },
  {
    icon: FileQuestionMark,
    title: "Quizzes",
    description: "4",
  },
  {
    icon: ChartPie,
    title: "Completion Rate",
    description: "68%",
    sideContent: (
      <div className="w-10">
        <div className="h-2 bg-gray-100 rounded-full">
          <div className="h-full w-[68%] bg-primary rounded-full" />
        </div>
      </div>
    ), //simulate a progressbar
  },
];

export const InstructorStudentCourseSummaryAnalytics = () => {
  return (
    <>
      <h2 className="text-xl lg:text-2xl font-bold py-2">Course Summary</h2>
      <div className="flex overflow-x-auto hide-scrollbar items-center md:grid lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dummyAnalytics.map((analytics, idx) => (
          <InstructorStudentCourseSummaryAnalyticsCard
            key={idx}
            title={analytics.title}
            description={analytics.description}
            icon={analytics.icon}
            sideContent={analytics.sideContent}
          />
        ))}
      </div>
    </>
  );
};

interface InstructorStudentCourseSummaryAnalyticsCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  sideContent?: React.ReactNode;
}
const InstructorStudentCourseSummaryAnalyticsCard = ({
  title,
  description,
  icon: Icon,
  sideContent,
}: InstructorStudentCourseSummaryAnalyticsCardProps) => {
  return (
    <div className="flex flex-col gap-3 w-full min-w-[220px] bg-white rounded-xl p-5">
      <div className="flex justify-between items-center">
        {/* icon */}
        {Icon && (
          <Icon className="size-10 text-primary p-2 bg-primary/10 rounded-lg" />
        )}
        {/* sideContent */}
        {sideContent && sideContent}
      </div>
      <div className="flex flex-col pt-4">
        {/* title */}
        <p className="text-gray-500 font-medium">{title}</p>
        {/* Description */}
        <h4 className="font-extrabold text-3xl">{description}</h4>
      </div>
    </div>
  );
};
