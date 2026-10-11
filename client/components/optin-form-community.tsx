"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { AppActionButton } from "@/components/app-action-button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { type Skill, type WaitlistFormData } from "@/schemas/skills";

// Schema for the form UI (skill selection is via ID string)
const FormSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters."),
  email: z.email("Invalid email address."),
  skillId: z.string().min(1, "Please select a skill."),
});

type FormValues = z.infer<typeof FormSchema>;

export function OptinFormCommunity() {
  const router = useRouter();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoadingSkills, setIsLoadingSkills] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch("/api/dashboard/skills");
        if (res.ok) {
          const data = await res.json();
          setSkills(data);
        } else {
          console.error("Failed to fetch skills");
          toast.error("Failed to load skills options.");
        }
      } catch (e) {
        console.error("Error fetching skills", e);
        toast.error("Error loading skills.");
      } finally {
        setIsLoadingSkills(false);
      }
    }
    fetchSkills();
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  async function onSubmit(data: FormValues) {
    const selectedSkill = skills.find((s) => s._id === data.skillId);

    if (!selectedSkill) {
      toast.error("Selected skill not found.");
      return;
    }

    const payload: WaitlistFormData = {
      fullName: data.fullName,
      email: data.email,
      skillInterested: selectedSkill,
    };

    try {
      const res = await fetch("/api/waitlist", {
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
        // Redirect to thank-you page
        router.push("/thank-you");
      } else if (res.status === 409 && responseData.alreadyExists) {
        // User already exists in waitlist
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
        className="flex flex-col gap-5"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-sm font-medium text-gray-800">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  className="bg-white border-gray-200 py-6! shadow-none!"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Address */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-sm font-medium text-gray-800">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder=""
                  className="bg-white border-gray-200 py-6! shadow-none!"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Skills Interested */}
        <FormField
          control={form.control}
          name="skillId"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-sm font-medium text-gray-800">
                Skills Interested
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white border-gray-200 py-6! shadow-none!">
                    <SelectValue
                      placeholder={
                        isLoadingSkills ? "Loading skills..." : "Select a skill"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {skills.map((option) => (
                    <SelectItem key={option._id} value={option._id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <AppActionButton
          type="submit"
          className="w-full mt-2"
          disabled={isLoadingSkills || form.formState.isSubmitting}
        >
          <p className="capitalize">
            {form.formState.isSubmitting
              ? "Submitting..."
              : "GET FREE ACCESS NOW"}
          </p>
          {!form.formState.isSubmitting && (
            <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
              <ArrowRight size={20} className="text-primary rounded" />
            </span>
          )}
          {form.formState.isSubmitting && (
            <span className="bg-white p-1 lg:p-2 rounded-lg ml-2 transition-all ease-in-out duration-300">
              <Loader2
                size={20}
                className="text-primary rounded animate-spin"
              />
            </span>
          )}
        </AppActionButton>
      </form>
    </Form>
  );
}
