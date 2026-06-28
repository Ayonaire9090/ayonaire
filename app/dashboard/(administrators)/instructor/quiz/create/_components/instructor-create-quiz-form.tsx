"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Circle, CircleDot } from "lucide-react";
import { useRouter } from "next/navigation";

export const InstructorCreateQuizForm = () => {
  const router = useRouter();

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto bg-white p-4 lg:p-8 rounded-2xl my-4 lg:my-6">
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          <Label>Question Type</Label>
          <Select defaultValue="multiple-choice">
            <SelectTrigger className="h-12! bg-[#FBFBFB] shadow-none! w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Points</Label>
          <Input
            placeholder="e.g 5"
            className="h-12! bg-[#FBFBFB] shadow-none!"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Question Text</Label>
        <Textarea
          placeholder="Enter your question"
          className="min-h-[140px] resize-none bg-[#FBFBFB] shadow-none! text-base"
        />
      </div>

      <div className="space-y-4">
        <Label className="text-sm font-medium text-foreground block mb-2">
          Question 1
        </Label>

        <div className="flex items-center gap-3 border rounded-xl px-4 py-1.5 bg-white">
          <Circle className="size-5 text-muted-foreground shrink-0" />
          <Input
            defaultValue="Option 1"
            className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
          />
        </div>

        <div className="flex items-center gap-3 border rounded-xl px-4 py-1.5 bg-white">
          <Circle className="size-5 text-muted-foreground shrink-0" />
          <Input
            defaultValue="Option 2"
            className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
          />
        </div>

        <div className="flex items-center gap-3 border rounded-xl px-4 py-1.5 bg-white">
          <Circle className="size-5 text-muted-foreground shrink-0" />
          <Input
            defaultValue="Option 3"
            className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
          />
        </div>

        <Label className="text-sm font-medium text-muted-foreground mt-6 block mb-2">
          Correct Answer
        </Label>
        <div className="flex items-center gap-3  bg-[#009F42]/10 rounded-xl px-4 py-1.5">
          <CircleDot className="size-5 text-foreground shrink-0" />
          <Input
            defaultValue="Option 3"
            className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
          />
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <Label className="text-sm font-medium text-foreground block mb-2">
          Question 2
        </Label>

        <div className="flex items-center gap-3 border rounded-xl px-4 py-1.5 bg-white">
          <Circle className="size-5 text-muted-foreground shrink-0" />
          <Input
            defaultValue="Option 1"
            className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
          />
        </div>

        <div className="flex items-center gap-3 border rounded-xl px-4 py-1.5 bg-white">
          <Circle className="size-5 text-muted-foreground shrink-0" />
          <Input
            defaultValue="Option 2"
            className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
          />
        </div>

        <div className="flex items-center gap-3 border rounded-xl px-4 py-1.5 bg-white">
          <Circle className="size-5 text-muted-foreground shrink-0" />
          <Input
            defaultValue="Option 3"
            className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
          />
        </div>

        <Label className="text-sm font-medium text-muted-foreground mt-6 block mb-2">
          Correct Answer
        </Label>
        <div className="flex items-center gap-3  bg-[#009F42]/10 rounded-xl px-4 py-1.5">
          <CircleDot className="size-5 text-foreground shrink-0" />
          <Input
            defaultValue="Option 3"
            className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
          />
        </div>
      </div>

      <div className="bg-[#F86432]/10 rounded-xl p-6 mt-10">
        <div className="space-y-1.5 mb-5">
          <h4 className="text-sm font-medium text-foreground">
            Automatic Feedback
          </h4>
          <p className="text-[13px] text-muted-foreground">
            This feedback will be shown to students after they submit their
            response.
          </p>
        </div>
        <Input
          placeholder="Enter feedback"
          className="bg-white border-none shadow-xs h-12 focus-visible:ring-1 focus-visible:ring-orange-200"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4 pt-8">
        <Button
          variant="outline"
          className="w-full md:w-[150px] h-12 font-medium"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        <Button className="w-full md:w-[150px] h-12 bg-[#FF5A26] hover:bg-[#E55122] text-white border-0 font-medium">
          Create quiz
        </Button>
      </div>
    </div>
  );
};
