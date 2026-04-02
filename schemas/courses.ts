import { z } from "zod";

export const CourseWaitlistSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.email({ message: "Invalid email address." }),
  course: z.string(),
});

export type CourseWaitlistFormData = z.infer<typeof CourseWaitlistSchema>;
