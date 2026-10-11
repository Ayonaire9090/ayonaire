import { z } from "zod";

export const ResetPasswordEmailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export const ResetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordEmailData = z.infer<typeof ResetPasswordEmailSchema>;
export type ResetPasswordData = z.infer<typeof ResetPasswordSchema>;
