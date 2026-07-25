"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Circle, CircleDot, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useCourseContent } from "@/hooks/api/use-lessons";
import {
  useCreateQuizMutation,
  useCreateQuizQuestionMutation,
} from "@/hooks/api/use-quiz";

interface QuestionDraft {
  id: string;
  questionText: string;
  points: string;
  options: string[];
  correctIndex: number;
}

const createEmptyQuestion = (): QuestionDraft => ({
  id: crypto.randomUUID(),
  questionText: "",
  points: "",
  options: ["", "", ""],
  correctIndex: 0,
});

export const InstructorCreateQuizForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [randomizeQuestions, setRandomizeQuestions] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(true);
  const [allowRetakes, setAllowRetakes] = useState(false);
  const [questions, setQuestions] = useState<QuestionDraft[]>([
    createEmptyQuestion(),
    createEmptyQuestion(),
  ]);

  const { data: coursesData, isLoading: isLoadingCourses } = useGetCourses();
  const courses = coursesData?.data ?? [];

  const { data: courseContentData, isLoading: isLoadingModules } =
    useCourseContent(courseId);
  const modules = courseContentData?.data?.modules ?? [];

  const createQuizMutation = useCreateQuizMutation();
  const createQuestionMutation = useCreateQuizQuestionMutation();
  const isSubmitting =
    createQuizMutation.isPending || createQuestionMutation.isPending;

  const handleCourseChange = (value: string) => {
    setCourseId(value);
    setModuleId("");
  };

  const updateQuestion = (id: string, patch: Partial<QuestionDraft>) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...patch } : q)),
    );
  };

  const updateOption = (questionId: string, optionIndex: number, text: string) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((o, i) => (i === optionIndex ? text : o)),
            }
          : q,
      ),
    );
  };

  const addQuestion = () => setQuestions((prev) => [...prev, createEmptyQuestion()]);

  const removeQuestion = (id: string) =>
    setQuestions((prev) => (prev.length > 1 ? prev.filter((q) => q.id !== id) : prev));

  const handleCreate = async () => {
    if (!title.trim()) {
      toast.error("Enter a quiz title");
      return;
    }
    if (!moduleId) {
      toast.error("Select a course and module for this quiz");
      return;
    }
    const invalidQuestion = questions.find(
      (q) => !q.questionText.trim() || q.options.some((o) => !o.trim()),
    );
    if (invalidQuestion) {
      toast.error("Fill in every question and all of its options");
      return;
    }

    try {
      const quizResponse = await createQuizMutation.mutateAsync({
        title,
        module: moduleId,
        randomizeQuestions,
        showCorrectAnswers,
        allowRetakes,
      });

      const quizId = quizResponse.data?._id;
      if (!quizId) {
        throw new Error("Quiz was created but no quiz id was returned");
      }

      for (const question of questions) {
        await createQuestionMutation.mutateAsync({
          quiz: quizId,
          question: question.questionText,
          points: question.points ? Number(question.points) : undefined,
          options: question.options.map((text, i) => ({
            text,
            isCorrect: i === question.correctIndex,
          })),
        });
      }

      toast.success("Quiz created");
      router.push("/dashboard/instructor/quiz");
    } catch (error: any) {
      toast.error(error?.message || "Failed to create quiz");
    }
  };

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto bg-white p-4 lg:p-8 rounded-2xl my-4 lg:my-6">
      <div className="space-y-2">
        <Label>Quiz Title</Label>
        <Input
          placeholder="e.g Week 3 Checkpoint"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-12! bg-[#FBFBFB] shadow-none!"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Course</Label>
          <Select value={courseId} onValueChange={handleCourseChange}>
            <SelectTrigger className="h-12! bg-[#FBFBFB] shadow-none! w-full">
              <SelectValue
                placeholder={isLoadingCourses ? "Loading courses..." : "Select a course"}
              />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course:any) => (
                <SelectItem key={course._id} value={course._id}>
                  {course.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Module</Label>
          <Select value={moduleId} onValueChange={setModuleId} disabled={!courseId}>
            <SelectTrigger className="h-12! bg-[#FBFBFB] shadow-none! w-full">
              <SelectValue
                placeholder={
                  !courseId
                    ? "Select a course first"
                    : isLoadingModules
                      ? "Loading modules..."
                      : "Select a module"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {modules.map((module) => (
                <SelectItem key={module._id} value={module._id}>
                  {module.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center justify-between gap-3 border rounded-xl px-4 py-3 bg-[#FBFBFB]">
          <Label className="text-sm font-normal">Randomize Questions</Label>
          <Switch checked={randomizeQuestions} onCheckedChange={setRandomizeQuestions} />
        </div>
        <div className="flex items-center justify-between gap-3 border rounded-xl px-4 py-3 bg-[#FBFBFB]">
          <Label className="text-sm font-normal">Show Correct Answers</Label>
          <Switch checked={showCorrectAnswers} onCheckedChange={setShowCorrectAnswers} />
        </div>
        <div className="flex items-center justify-between gap-3 border rounded-xl px-4 py-3 bg-[#FBFBFB]">
          <Label className="text-sm font-normal">Allow Retakes</Label>
          <Switch checked={allowRetakes} onCheckedChange={setAllowRetakes} />
        </div>
      </div>

      {questions.map((question, qIndex) => (
        <div
          key={question.id}
          className="space-y-4 pt-8 border-t first:border-t-0 first:pt-0"
        >
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-foreground block mb-2">
              Question {qIndex + 1}
            </Label>
            {questions.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                onClick={() => removeQuestion(question.id)}
              >
                <Trash2 className="size-4" />
              </Button>
            )}
          </div>

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
                type="number"
                min={0}
                value={question.points}
                onChange={(e) => updateQuestion(question.id, { points: e.target.value })}
                className="h-12! bg-[#FBFBFB] shadow-none!"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Question Text</Label>
            <Textarea
              placeholder="Enter your question"
              value={question.questionText}
              onChange={(e) =>
                updateQuestion(question.id, { questionText: e.target.value })
              }
              className="min-h-[140px] resize-none bg-[#FBFBFB] shadow-none! text-base"
            />
          </div>

          <div className="space-y-4">
            {question.options.map((option, oIndex) => {
              const isCorrect = question.correctIndex === oIndex;
              return (
                <button
                  key={oIndex}
                  type="button"
                  onClick={() => updateQuestion(question.id, { correctIndex: oIndex })}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-xl px-4 py-1.5 text-left transition-colors",
                    isCorrect ? "bg-[#009F42]/10" : "border bg-white",
                  )}
                >
                  {isCorrect ? (
                    <CircleDot className="size-5 text-foreground shrink-0" />
                  ) : (
                    <Circle className="size-5 text-muted-foreground shrink-0" />
                  )}
                  <Input
                    value={option}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => updateOption(question.id, oIndex, e.target.value)}
                    placeholder={`Option ${oIndex + 1}`}
                    className="border-0 focus-visible:ring-0 shadow-none px-0 bg-transparent h-10 text-sm font-medium"
                  />
                </button>
              );
            })}
            <p className="text-xs text-muted-foreground">
              Click an option to mark it as the correct answer.
            </p>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addQuestion}
        className="w-full h-12 border-dashed"
      >
        <Plus className="size-4 mr-2" />
        Add Question
      </Button>

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
          placeholder="Coming soon"
          disabled
          className="bg-white border-none shadow-xs h-12 focus-visible:ring-1 focus-visible:ring-orange-200"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4 pt-8">
        <Button
          type="button"
          variant="outline"
          className="w-full md:w-[150px] h-12 font-medium"
          onClick={() => router.back()}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="w-full md:w-[150px] h-12 bg-[#FF5A26] hover:bg-[#E55122] text-white border-0 font-medium"
          onClick={handleCreate}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create quiz"}
        </Button>
      </div>
    </div>
  );
};
