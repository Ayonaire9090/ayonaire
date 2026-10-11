import { z } from "zod";

export const SkillSchema = z.object({
  _id: z.string(),
  name: z.string(),
  __v: z.number().optional(),
});

export const WaitlistSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  skillInterested: SkillSchema, // Validate the full object
});

export type Skill = z.infer<typeof SkillSchema>;
export type WaitlistFormData = z.infer<typeof WaitlistSchema>;
