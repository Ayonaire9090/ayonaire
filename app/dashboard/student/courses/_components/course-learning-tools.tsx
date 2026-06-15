"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Clock, Calendar, MoreVertical } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CourseLearningTools = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto pt-4 pb-20 flex flex-col gap-6">
      {isSaved ? (
        <div className="flex flex-col gap-8 lg:p-8 lg:bg-white lg:rounded-3xl md:px-0 w-full relative">
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <MoreVertical className="w-5 h-5 text-gray-700" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[160px] rounded-xl p-1 shadow-sm border-gray-100 bg-[#F6F6F6]">
                <DropdownMenuItem className="text-xs font-semibold text-gray-900 cursor-pointer rounded-lg hover:bg-gray-200/50 py-2">
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[13px] font-medium text-gray-700 cursor-pointer rounded-lg hover:bg-gray-200/50 py-2 flex items-center gap-2">
                  <FcGoogle className="w-4 h-4" /> Delete
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[13px] font-medium text-gray-700 cursor-pointer rounded-lg hover:bg-gray-200/50 py-2 flex items-center gap-2">
                  <FcGoogle className="w-4 h-4" /> Sync again
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed px-4 md:px-0">
            Learning a little each day adds up. Research shows that students who make
            learning a habit are more likely to reach their goals. Set time aside to learn and
            get reminders using your learning scheduler.
          </p>

          <div className="flex flex-col gap-6 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Learning reminders
            </h2>

            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-gray-900" />
                <span className="text-lg md:text-xl font-medium">4:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-gray-900" />
                <span className="text-lg md:text-xl font-medium">Daily</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FcGoogle className="w-8 h-8" />
              <span className="text-gray-500 text-base md:text-lg">Added to Google Calendar</span>
            </div>

            <p className="text-gray-500 text-base md:text-lg max-w-xl">
              Course: Complete Python With DSA Bootcamp + LEETCODE Exercises
            </p>

            <Button
              className="w-fit bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg px-8 py-6 text-base font-medium shadow-none mt-2"
              onClick={() => setIsModalOpen(true)}
            >
              Add an other
            </Button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-gray-900 px-4 md:px-0">
            Learning reminders
          </h2>

          <div className="flex flex-col gap-6 lg:p-6 lg:bg-white lg:rounded-3xl md:px-0 w-full md:max-w-2xl mx-auto">
            <div className="bg-[#FFF5F2] rounded-xl p-6 md:p-8 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Learning reminders
              </h3>
              <p className="text-gray-500 text-base">
                Set up push notifications or calendar events to stay on track for
                your learning goals.
              </p>
            </div>

            <Button
              className="w-full bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg py-6 text-base font-medium shadow-none"
              onClick={() => setIsModalOpen(true)}
            >
              Add Learning reminders
            </Button>
          </div>
        </>
      )}

      <LearningRemindersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={() => {
          setIsSaved(true);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

const LearningRemindersModal = ({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}) => {
  const [step, setStep] = useState(1);
  const [frequency, setFrequency] = useState("Daily");

  // Reset step when modal opens/closes
  const handleClose = () => {
    onClose();
    setTimeout(() => setStep(1), 300); // reset after animation
  };

  const renderStep1 = () => (
    <div className="flex flex-col gap-6 px-2">
      <div className="flex flex-col gap-2">
        <Label className="text-base font-medium text-gray-900">Name</Label>
        <Input
          placeholder="optional"
          className="py-6 rounded-xl border-gray-200"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium text-gray-900">
            Attach content (optional)
          </h3>
          <p className="text-gray-500 text-base">
            Most recent courses or labs:
          </p>
        </div>

        <RadioGroup defaultValue="none" className="flex flex-col gap-4">
          {[
            {
              id: "c1",
              label:
                "Course complete Python with DSA boot camp and LEETCODE exercises",
            },
            {
              id: "c2",
              label:
                "Course n8n production mastery from zero to agency ready in 30 days",
            },
            {
              id: "c3",
              label:
                "Course on page SEO mastery with AI strategies and work flows",
            },
            { id: "none", label: "None" },
          ].map((item) => (
            <div
              key={item.id}
              className="border border-gray-100 rounded-xl p-4 flex items-center gap-3"
            >
              <RadioGroupItem
                value={item.id}
                id={item.id}
                className="mt-0.5 shrink-0"
              />
              <Label
                htmlFor={item.id}
                className="text-sm md:text-base font-medium text-gray-900 cursor-pointer flex-1 leading-snug"
              >
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          className="bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg px-8 py-6 text-base font-medium shadow-none w-full md:w-auto"
          onClick={() => setStep(2)}
        >
          Next
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Label className="text-lg font-medium text-gray-900">Frequency</Label>
        <div className="grid grid-cols-3 gap-3">
          {["Daily", "Weekly", "Once"].map((freq) => (
            <Button
              key={freq}
              variant="outline"
              className={`py-6 rounded-xl text-base shadow-none ${
                frequency === freq
                  ? "border-[#F86432] text-[#F86432] bg-[#F86432]/5"
                  : "border-gray-200 text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => setFrequency(freq)}
            >
              {freq}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Label className="text-lg font-medium text-gray-900">Time</Label>
        <div className="relative w-fit">
          <Input
            defaultValue="12:30 PM"
            className="py-6 pl-4 pr-12 w-[160px] rounded-xl border-gray-200 text-base font-semibold"
          />
          <Clock className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-end gap-3 mt-4">
        <Button
          variant="outline"
          className="border-gray-200 text-gray-600 rounded-lg px-8 py-6 text-base font-medium shadow-none w-full md:w-auto"
          onClick={() => setStep(1)}
        >
          Previous
        </Button>
        <Button
          className="bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg px-8 py-6 text-base font-medium shadow-none w-full md:w-auto"
          onClick={() => setStep(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Label className="text-lg font-medium text-gray-900">
          Add to calendar (optional)
        </Label>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            className="border-gray-200 text-gray-600 rounded-xl py-6 px-6 text-base font-medium shadow-none flex-1 gap-3 justify-start sm:justify-center"
          >
            <FcGoogle className="w-5 h-5 shrink-0" />
            Signin with google
          </Button>
          <Button
            variant="outline"
            className="border-gray-200 text-gray-600 rounded-xl py-6 px-6 text-base font-medium shadow-none flex-1 gap-3 justify-start sm:justify-center"
          >
            <FaApple className="w-5 h-5 shrink-0 text-black" />
            Apple
          </Button>
        </div>
      </div>

      <p className="text-gray-500 text-base leading-relaxed">
        Follow all calendar prompts and save before moving forward. Apple and
        outlook will download an ics file. Open this file to add it to your
        calendar.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-end gap-3 mt-4">
        <Button
          variant="outline"
          className="border-gray-200 text-gray-600 rounded-lg px-8 py-6 text-base font-medium shadow-none w-full md:w-auto"
          onClick={() => setStep(2)}
        >
          Previous
        </Button>
        <Button
          className="bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg px-8 py-6 text-base font-medium shadow-none w-full md:w-auto"
          onClick={onSave}
        >
          Done
        </Button>
      </div>
    </div>
  );

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={handleClose}
      showCloseButton={false} // Match design: no close button visible based on screenshots, or maybe it has one? We will add the title manually inside.
      className="max-w-3xl! p-4 lg:p-6"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-gray-900">
            Learning reminders
          </h2>
          <p className="text-xl text-gray-500">Step {step} of 3</p>
        </div>

        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </AppSimpleModal>
  );
};
