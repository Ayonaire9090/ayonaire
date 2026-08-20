"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, MoreVertical, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MOCK_REVIEWS = [
  {
    id: 1,
    author: {
      name: "Aditya S.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    },
    timeAgo: "2h ago",
    rating: 5,
    content:
      "This course exceeded my expectations. The explanations were clear and the projects were very practical. I highly recommend it to anyone looking to master React!",
  },
  {
    id: 2,
    author: {
      name: "Aditya S.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    },
    timeAgo: "2h ago",
    rating: 5,
    content:
      "This course exceeded my expectations. The explanations were clear and the projects were very practical. I highly recommend it to anyone looking to master React!",
  },
  {
    id: 3,
    author: {
      name: "Aditya S.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    },
    timeAgo: "2h ago",
    rating: 5,
    content:
      "This course exceeded my expectations. The explanations were clear and the projects were very practical. I highly recommend it to anyone looking to master React!",
  },
];

const RATING_STATS = [
  { stars: 5, percentage: 65 },
  { stars: 4, percentage: 14 },
  { stars: 3, percentage: 8 },
  { stars: 2, percentage: 4 },
  { stars: 1, percentage: 2 },
];

interface CourseReviewsProps {
  courseId?: string;
}

export const CourseReviews = (_props: CourseReviewsProps) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Title (hidden on mobile, or just standard?) */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-6 px-4 md:px-0">
        Course Reviews
      </h2>

      <div className="flex flex-col md:flex-row gap-8 px-2 md:px-0">
        {/* Left Column: Rating Summary */}
        <div className="w-full h-fit md:w-1/3 flex flex-col gap-6 shrink-0 bg-white rounded-xl p-4 lg:p-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
              4.5
            </h1>
            <div className="flex items-center gap-1.5 text-[#F86432] mt-2">
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-8 h-8 text-gray-400 stroke-[1.5px]" />
            </div>
            <p className="text-sm md:text-base font-medium text-gray-900 mt-2">
              Average Rating (2.4k reviews)
            </p>
          </div>

          <div className="flex flex-col gap-2.5 mt-2">
            {RATING_STATS.map((stat) => (
              <div key={stat.stars} className="flex items-center gap-3 text-sm">
                <span className="w-10 text-gray-500 whitespace-nowrap">
                  {stat.stars} star
                </span>
                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F86432] rounded-full"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
                <span className="w-10 text-right text-gray-500">
                  {stat.percentage}%
                </span>
              </div>
            ))}
          </div>

          <Button className="w-full bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg py-6 mt-2 text-base shadow-none">
            Write a Review
          </Button>
        </div>

        {/* Right Column: Review List */}
        <div className="w-full md:flex-1 flex flex-col gap-8">
          <div className="flex items-center justify-between text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-medium">Filter</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-gray-900 font-normal px-2 gap-1 h-auto py-1 shadow-none"
                  >
                    Most Recent <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Most Recent</DropdownMenuItem>
                  <DropdownMenuItem>Highest Rated</DropdownMenuItem>
                  <DropdownMenuItem>Lowest Rated</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <span className="text-gray-900 font-medium">
              Showing {MOCK_REVIEWS.length} reviews
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {MOCK_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="flex flex-col gap-3 relative group bg-white rounded-xl p-2 lg:p-6"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={review.author.image}
                        alt={review.author.name}
                      />
                      <AvatarFallback>
                        {review.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-base font-medium text-gray-900">
                        {review.author.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex text-[#F86432]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${i < review.rating ? "fill-current" : "text-gray-300 fill-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.timeAgo}
                        </span>
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-900 hover:bg-gray-100 -mr-2 shadow-none"
                      >
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Report Review</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mt-1 pr-6">
                  {review.content}
                </p>
              </div>
            ))}
          </div>

          <Button className="w-full bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg py-6 mt-4 text-base shadow-none">
            See more reviews
          </Button>
        </div>
      </div>
    </div>
  );
};
