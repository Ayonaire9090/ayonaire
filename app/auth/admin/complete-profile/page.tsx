"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  AuthHeader,
  AuthFormField,
  AuthSubmitButton,
  AuthFormSkeleton,
} from "@/components/auth";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

// Department options
const departments = [
  { value: "operations", label: "Operations" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance" },
  { value: "marketing", label: "Marketing" },
  { value: "engineering", label: "Engineering" },
  { value: "sales", label: "Sales" },
  { value: "customer-support", label: "Customer Support" },
  { value: "executive", label: "Executive" },
];

type Step = "details" | "success";

function CompleteAdminProfileContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<Step>("details");

  // Get email from query params if available
  const initialEmail = searchParams.get("email") || "admin@ayonaire.com";
  const initialName = searchParams.get("name") || "Flores Juanita";

  // Form data
  const [formData, setFormData] = useState({
    fullName: initialName,
    email: initialEmail,
    bio: "",
    department: "",
    phoneNumber: "",
  });

  const maxBioLength = 300;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    // Limit bio to max length
    if (id === "bio" && value.length > maxBioLength) return;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Admin profile data:", formData);
    setIsLoading(false);

    // Move to success step
    setStep("success");
  };

  return (
    <>
      {/* Details Step */}
      {step === "details" && (
        <>
          {/* Header */}
          <AuthHeader
            title="Admin Profile Setup"
            description="Set up your administrator profile"
            className="mb-8"
          />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <AuthFormField
              id="fullName"
              label="Full Name"
              placeholder=""
              value={formData.fullName}
              onChange={handleChange}
              required
              labelClassName="font-bold! text-[14px]!"
              className="
              text-[#121315]!
            bg-transparent!
            font-semibold!
            active:bg-[#FFFCC8]! 
            focus:bg-[#FFFCC8]! 
            active:outline-none!  
            focus:outline-none!
            focus:ring-0!
            active:ring-0!
            focus-visible:ring-0!
            active-visible:ring-0!
            border-0! border-b-[1.8px]! border-b-[#121315] rounded-none!
            focus:border-b-[1.8px]! focus:border-b-primary!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-primary!
            active:border-b-[1.8px]! active:border-b-primary!
            active-visible:border-b-[1.8px]! active-visible:border-b-primary!
            not-placeholder-shown:bg-[#FFFCC8]!
            not-placeholder-shown:border-b-primary!
            "
            />

            {/* Email Address */}
            <AuthFormField
              id="email"
              label="Email Address *"
              type="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
              labelClassName="font-bold! text-[14px]! pt-3!"
              className="
              text-[#121315]!
            bg-transparent!
            font-semibold!
            active:bg-[#FFFCC8]! 
            focus:bg-[#FFFCC8]! 
            active:outline-none!  
            focus:outline-none!
            focus:ring-0!
            active:ring-0!
            focus-visible:ring-0!
            active-visible:ring-0!
            border-0! border-b-[1.8px]! border-b-[#121315] rounded-none!
            focus:border-b-[1.8px]! focus:border-b-primary!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-primary!
            active:border-b-[1.8px]! active:border-b-primary!
            active-visible:border-b-[1.8px]! active-visible:border-b-primary!
            not-placeholder-shown:bg-[#FFFCC8]!
            not-placeholder-shown:border-b-primary!
            "
            />

            {/* Short Bio */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="bio"
                  className="text-sm font-medium text-foreground"
                >
                  Short bio
                </Label>
                <span className="text-sm text-muted-foreground">
                  {formData.bio.length}/{maxBioLength}
                </span>
              </div>
              <Textarea
                id="bio"
                placeholder="Tell students about yourself, your experience, and what makes your teaching unique..."
                value={formData.bio}
                onChange={handleChange}
                className="min-h-[100px] rounded-lg border-gray-200 bg-[#FBFBFB] px-4 py-3 text-base placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus-visible:ring-primary/20 resize-none"
              />
            </div>

            {/* Department and Phone Number */}
            <div className="grid grid-cols-2 gap-4">
              {/* Department */}
              <div className="space-y-2">
                <Label
                  htmlFor="department"
                  className="text-sm font-medium text-foreground"
                >
                  Department
                </Label>
                <Select
                  value={formData.department}
                  onValueChange={(value) =>
                    handleSelectChange("department", value)
                  }
                >
                  <SelectTrigger className="w-full h-12! rounded-lg border-gray-200 bg-[#FBFBFB] px-4 text-base focus:border-primary focus:bg-white shadow-none">
                    <SelectValue placeholder="Operations" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value}>
                        {dept.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <AuthFormField
                  id="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  placeholder="+234818392200"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-0!"
                />
              </div>
            </div>

            {/* Submit Button */}
            <AuthSubmitButton isLoading={isLoading} className="mt-6">
              Save & Continue
            </AuthSubmitButton>
          </form>
        </>
      )}

      {/* Success Step */}
      {step === "success" && (
        <>
          <div className="flex flex-col items-center text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
              <BadgeCheck
                fill="white"
                className="w-14 h-14 text-primary"
                strokeWidth={1.5}
              />
            </div>

            {/* Success Header */}
            <AuthHeader
              title="You're ready to manage! 🎉"
              description={
                <>
                  Your admin account is all set up.
                  <br />
                  Welcome to Ayonaire!
                </>
              }
              className="mb-8"
            />

            {/* Go to Dashboard Button */}
            <Link href="/dashboard" className="w-full">
              <Button className="w-full h-12 cursor-pointer rounded-[10px] text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all duration-200">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default function CompleteAdminProfile() {
  return (
    <Suspense fallback={<AuthFormSkeleton variant="profile" />}>
      <CompleteAdminProfileContent />
    </Suspense>
  );
}
