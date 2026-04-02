"use client";

import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  CourseWaitlistSchema,
  type CourseWaitlistFormData,
} from "@/schemas/courses";

type FormValues = z.infer<typeof CourseWaitlistSchema>;

export function OptInForm({
  courseName,
  slug,
}: {
  courseName?: string;
  slug?: string;
}) {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(CourseWaitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      course: courseName || "AI Engineering",
    },
  });

  async function onSubmit(data: FormValues) {
    const payload: CourseWaitlistFormData = {
      fullName: data.fullName,
      email: data.email,
      course: data.course || courseName || "AI Engineering",
    };

    try {
      const res = await fetch("/api/course-waitlist", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await res.json();

      if (res.ok) {
        toast.success(
          responseData.message || "Successfully joined the waitlist!",
        );
        form.reset();
        router.push(slug ? `/courses/${slug}/thank-you` : "/thank-you");
      } else if (res.status === 409 && responseData.alreadyExists) {
        toast.info(
          responseData.message || "You have already joined the waitlist!",
        );
      } else {
        toast.error(responseData.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error", error);
      toast.error("Network error. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 sm:gap-5"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormControl>
                <Input
                  placeholder="Full Name"
                  className="bg-[#FAF7F5] border-0 h-14 sm:h-[60px] px-5 sm:px-6 text-[16px] sm:text-[17px] text-gray-800 rounded-xl shadow-none placeholder:text-gray-400 placeholder:font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-1 ml-2 text-red-200 text-sm" />
            </FormItem>
          )}
        />

        {/* Email Address */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your Best Email"
                  className="bg-[#FAF7F5] border-0 h-14 sm:h-[60px] px-5 sm:px-6 text-[16px] sm:text-[17px] text-gray-800 rounded-xl shadow-none placeholder:text-gray-400 placeholder:font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-1 ml-2 text-red-200 text-sm" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full mt-2 bg-white text-[#F54920] hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 h-14 sm:h-[60px] rounded-xl flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {form.formState.isSubmitting ? (
            <Loader2 size={24} className="text-[#F54920] animate-spin" />
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#F54920"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 8L16 12L10 16V8Z"
                stroke="#F54920"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="font-bold text-[16px] sm:text-[17px]">
            {form.formState.isSubmitting
              ? "Accessing..."
              : "Give Me Instant Access Now"}
          </span>
        </button>
      </form>
    </Form>
  );
}
