"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  useCourseReviews,
  useCreateCourseReviewMutation,
} from "@/hooks/api/use-course-interactions";

interface CourseReviewsProps {
  courseId?: string;
}

function initials(name?: string) {
  return (name ?? "User")
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const CourseReviews = ({ courseId = "" }: CourseReviewsProps) => {
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const { data, isLoading, isError } = useCourseReviews(courseId);
  const createReview = useCreateCourseReviewMutation(courseId);

  const reviewData = data?.data;
  const reviews = reviewData?.reviews ?? [];
  const ratingStats =
    reviewData?.ratingStats ??
    [5, 4, 3, 2, 1].map((stars) => ({ stars, count: 0, percentage: 0 }));

  const handleSubmit = () => {
    if (!courseId || !content.trim()) return;
    createReview.mutate(
      { courseId, rating, content },
      {
        onSuccess: () => {
          toast.success("Review saved");
          setContent("");
          setRating(5);
        },
        onError: (error) =>
          toast.error(error instanceof Error ? error.message : "Failed to save review"),
      },
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-16 text-center text-[15px] text-red-500">
        Failed to load course reviews.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-6 px-4 md:px-0">
        Course Reviews
      </h2>

      <div className="flex flex-col md:flex-row gap-8 px-2 md:px-0">
        <div className="w-full h-fit md:w-1/3 flex flex-col gap-6 shrink-0 bg-white rounded-xl p-4 lg:p-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
              {reviewData?.averageRating ?? 0}
            </h1>
            <div className="flex items-center gap-1.5 text-[#F86432] mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 ${
                    star <= Math.round(reviewData?.averageRating ?? 0)
                      ? "fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm md:text-base font-medium text-gray-900 mt-2">
              Average Rating ({reviewData?.totalReviews ?? 0} reviews)
            </p>
          </div>

          <div className="flex flex-col gap-2.5 mt-2">
            {ratingStats.map((stat) => (
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

          <div className="flex flex-col gap-3">
            <div className="flex gap-1 text-[#F86432]">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} onClick={() => setRating(star)}>
                  <Star
                    className={`w-5 h-5 ${
                      star <= rating ? "fill-current" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            <Textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write your review..."
              className="min-h-[120px] resize-none"
            />
            <Button
              className="w-full bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg py-6 mt-2 text-base shadow-none"
              onClick={handleSubmit}
              disabled={!content.trim() || createReview.isPending}
            >
              {createReview.isPending && (
                <Loader2 className="mr-2 size-4 animate-spin" />
              )}
              Save Review
            </Button>
          </div>
        </div>

        <div className="w-full md:flex-1 flex flex-col gap-5">
          <div className="flex items-center justify-between text-sm md:text-base">
            <span className="text-gray-900 font-medium">Most Recent</span>
            <span className="text-gray-900 font-medium">
              Showing {reviews.length} reviews
            </span>
          </div>

          {reviews.length === 0 ? (
            <div className="py-16 text-center text-[15px] text-gray-400">
              No reviews have been added for this course yet.
            </div>
          ) : (
            reviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col gap-3 relative group bg-white rounded-xl p-2 lg:p-6"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={review.author.profile?.url}
                        alt={review.author.name}
                      />
                      <AvatarFallback>
                        {initials(review.author.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-base font-medium text-gray-900">
                        {review.author.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex text-[#F86432]">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3.5 h-3.5 ${
                                star <= review.rating
                                  ? "fill-current"
                                  : "text-gray-300 fill-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mt-1 pr-6">
                  {review.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
