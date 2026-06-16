"use client";

import { useState, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import { MultiSelect } from "@/components/ui/multi-select";
import { cn } from "@/lib/utils";
import countriesData from "@/constants/countries.json";
import { courses } from "@/constants";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Cloud,
  Code,
  Brain,
  Database,
  Lightbulb,
  TrendingUp,
  Briefcase,
  BadgeCheck,
} from "lucide-react";
import { useApplyInstructorMutation } from "@/hooks/api/use-instructor";
import { toast } from "sonner";

// Type for country data
interface Country {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
}

// Sample timezones list
const timezones = [
  { value: "WAT", label: "West Africa Time (WAT)" },
  { value: "GMT", label: "Greenwich Mean Time (GMT)" },
  { value: "EST", label: "Eastern Standard Time (EST)" },
  { value: "PST", label: "Pacific Standard Time (PST)" },
  { value: "CST", label: "Central Standard Time (CST)" },
  { value: "IST", label: "India Standard Time (IST)" },
  { value: "CET", label: "Central European Time (CET)" },
  { value: "JST", label: "Japan Standard Time (JST)" },
  { value: "AEST", label: "Australian Eastern Time (AEST)" },
];

// Teaching experience levels
const experienceLevels = [
  {
    value: "beginner",
    label: "Beginner",
    description: "New to teaching, but eager to share knowledge",
  },
  {
    value: "intermediate",
    label: "Intermediate",
    description: "Some teaching experience, comfortable with basics",
  },
  {
    value: "advanced",
    label: "Advanced",
    description: "Experienced educator with proven track record",
  },
];

// School icons mapping
const schoolIcons: Record<string, React.ElementType> = {
  "Cyber Security": Shield,
  "Cloud Computing & DevOps": Cloud,
  "Software Engineering": Code,
  AI: Brain,
  Data: Database,
  Product: Lightbulb,
  Marketing: TrendingUp,
  JobFair: Briefcase,
};

// Extract unique schools from courses data
const schools = courses.map((category) => ({
  value: category.category,
  label: category.categoryName,
  courses: category.courses.map((course) => ({
    value: course.slug,
    label: course.title,
  })),
}));

type Step = "personal" | "expertise" | "success";

function InstructorBuildProfileContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>("personal");

  const { mutateAsync: applyInstructor, isPending: isLoading } = useApplyInstructorMutation();

  // Get name from query params if available
  const initialName = searchParams.get("name") || "Flores Juanita";

  // Personal details form
  const [formData, setFormData] = useState({
    name: initialName,
    professionalTitle: "",
    bio: "",
    country: "",
    timezone: "",
  });

  // Expertise form
  const [expertiseData, setExpertiseData] = useState({
    selectedSchools: [] as string[],
    selectedCourses: [] as string[],
    experienceLevel: "",
  });

  const maxBioLength = 300;

  // Get courses available based on selected schools
  const availableCourses = useMemo(() => {
    const selectedSchoolsData = schools.filter((school) =>
      expertiseData.selectedSchools.includes(school.value),
    );
    return selectedSchoolsData.flatMap((school) => school.courses);
  }, [expertiseData.selectedSchools]);

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

  const handleSchoolToggle = (schoolValue: string) => {
    setExpertiseData((prev) => {
      const isSelected = prev.selectedSchools.includes(schoolValue);
      const newSchools = isSelected
        ? prev.selectedSchools.filter((s) => s !== schoolValue)
        : [...prev.selectedSchools, schoolValue];

      // Filter out courses from deselected schools
      const schoolCourses =
        schools.find((s) => s.value === schoolValue)?.courses || [];
      const courseSlugs = schoolCourses.map((c) => c.value);
      const newCourses = isSelected
        ? prev.selectedCourses.filter((c) => !courseSlugs.includes(c))
        : prev.selectedCourses;

      return {
        ...prev,
        selectedSchools: newSchools,
        selectedCourses: newCourses,
      };
    });
  };

  const handleCoursesChange = (courses: string[]) => {
    setExpertiseData((prev) => ({ ...prev, selectedCourses: courses }));
  };

  const handleExperienceChange = (level: string) => {
    setExpertiseData((prev) => ({ ...prev, experienceLevel: level }));
  };

  const handlePersonalContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("expertise");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await applyInstructor({
        bio: formData.bio,
        expertise: expertiseData.selectedCourses,
        instructorCourseCategory: expertiseData.selectedSchools.join(", "),
      });
      
      toast.success("Profile submitted successfully!");
      // Move to success step
      setStep("success");
    } catch (error: any) {
      console.error("Failed to submit profile:", error);
      toast.error(error?.message || "Failed to submit profile");
    }
  };

  const handleBack = () => {
    if (step === "expertise") {
      setStep("personal");
    }
  };

  return (
    <>
      {/* Personal Details Step */}
      {step === "personal" && (
        <>
          {/* Header */}
          <AuthHeader
            title="Build your instructor profile"
            description="This information will be visible to students"
            className="mb-8"
          />

          {/* Form */}
          <form onSubmit={handlePersonalContinue} className="space-y-5">
            {/* Full Name */}
            <AuthFormField
              id="name"
              label="Full Name"
              placeholder=""
              value={formData.name}
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

            {/* Professional Title */}
            <AuthFormField
              id="professionalTitle"
              label="Professional title *"
              placeholder=""
              value={formData.professionalTitle}
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

            {/* Country and Timezone */}
            <div className="grid grid-cols-2 gap-4">
              {/* Country */}
              <div className="space-y-2">
                <Label
                  htmlFor="country"
                  className="text-sm font-medium text-foreground"
                >
                  Country
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    handleSelectChange("country", value)
                  }
                >
                  <SelectTrigger className="w-full h-12! rounded-lg border-gray-200 bg-[#FBFBFB] px-4 text-base focus:border-primary focus:bg-white shadow-none">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {(countriesData as Country[]).map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.emoji} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Timezone */}
              <div className="space-y-2">
                <Label
                  htmlFor="timezone"
                  className="text-sm font-medium text-foreground"
                >
                  Time zone
                </Label>
                <Select
                  value={formData.timezone}
                  onValueChange={(value) =>
                    handleSelectChange("timezone", value)
                  }
                >
                  <SelectTrigger className="w-full h-12! rounded-lg border-gray-200 bg-[#FBFBFB] px-4 text-base focus:border-primary focus:bg-white shadow-none">
                    <SelectValue placeholder="Select Timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz.value} value={tz.value}>
                        {tz.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Continue Button */}
            <AuthSubmitButton className="mt-6">
              Save & Continue
            </AuthSubmitButton>
          </form>
        </>
      )}

      {/* Expertise Step */}
      {step === "expertise" && (
        <>
          {/* Header */}
          <AuthHeader
            title="What's your expertise?"
            description="Help us match you with the right students"
            className="mb-8"
          />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Select Schools */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
                Select your school
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {schools.map((school) => {
                  const IconComponent = schoolIcons[school.value] || Brain;
                  const isSelected = expertiseData.selectedSchools.includes(
                    school.value,
                  );

                  return (
                    <button
                      key={school.value}
                      type="button"
                      onClick={() => handleSchoolToggle(school.value)}
                      className={cn(
                        "flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer",
                        isSelected
                          ? "border-[#F86432] bg-[#F86432]/5 text-[#F86432]"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300",
                      )}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="text-xs font-medium text-center leading-tight">
                        {school.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Select Courses - Only show if schools are selected */}
            {expertiseData.selectedSchools.length > 0 && (
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground">
                  Select courses you can teach
                </Label>
                <MultiSelect
                  options={availableCourses}
                  value={expertiseData.selectedCourses}
                  onChange={handleCoursesChange}
                  placeholder="Select courses..."
                  className="rounded-lg border-gray-200 bg-[#FBFBFB]"
                />
              </div>
            )}

            {/* Teaching Experience Level */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
                Teaching experience level
              </Label>
              <div className="space-y-2">
                {experienceLevels.map((level) => {
                  const isSelected =
                    expertiseData.experienceLevel === level.value;

                  return (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => handleExperienceChange(level.value)}
                      className={cn(
                        "flex items-center justify-between w-full p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left",
                        isSelected
                          ? "border-[#F86432] bg-[#F86432]/5"
                          : "border-gray-200 bg-white hover:border-gray-300",
                      )}
                    >
                      <div>
                        <p className="font-medium text-foreground">
                          {level.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {level.description}
                        </p>
                      </div>
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                          isSelected ? "border-[#F86432]" : "border-gray-300",
                        )}
                      >
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#F86432]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <AuthSubmitButton
              isLoading={isLoading}
              disabled={
                expertiseData.selectedSchools.length === 0 ||
                expertiseData.selectedCourses.length === 0 ||
                !expertiseData.experienceLevel
              }
              className="mt-6"
            >
              Continue
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
              title="You're ready to teach! 🎉"
              description={
                <>
                  Your instructor account is all set up.
                  <br />
                  Welcome to LearnHub!
                </>
              }
              className="mb-8"
            />

            {/* Go to Dashboard Button */}
            <Link href="/dashboard/instructor" className="w-full">
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

export default function InstructorBuildProfilePage() {
  return (
    <Suspense fallback={<AuthFormSkeleton variant="profile" />}>
      <InstructorBuildProfileContent />
    </Suspense>
  );
}
