"use client";

import React, { useState } from "react";
import {
  GripVertical,
  ChevronDown,
  ChevronUp,
  Play,
  Clock,
  Pencil,
  Plus,
  Link as LinkIcon,
  FileText,
  X,
  Image as ImageIcon,
  Code,
  Trash2,
  MoreVertical,
  Circle,
  CheckCircle2,
} from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Lesson {
  id: number;
  title: string;
  duration: string;
}

interface Module {
  id: number;
  title: string;
  lessons: number;
  duration: string;
  items?: Lesson[];
}

const initialModules: Module[] = [
  {
    id: 1,
    title: "Module 1: Getting Started",
    lessons: 3,
    duration: "5:30",
  },
  {
    id: 2,
    title: "Module 2: HTML & CSS Fundamentals",
    lessons: 3,
    duration: "3:30",
  },
  {
    id: 3,
    title: "Module 3: JavaScript Basics",
    lessons: 3,
    duration: "3:30",
    items: [
      {
        id: 1,
        title: "JavaScript Introduction",
        duration: "3:30",
      },
    ],
  },
];

function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`w-10 h-[22px] rounded-full relative cursor-pointer border border-transparent transition-colors ${checked ? "bg-gray-900" : "bg-gray-200"}`}
    >
      <div
        className={`size-[18px] rounded-full bg-white absolute top-px transition-all ${checked ? "right-[2px]" : "left-[2px]"}`}
      />
    </div>
  );
}

function AddNewLessonForm({ onCancel }: { onCancel: () => void }) {
  const [videoSource, setVideoSource] = useState("Vimeo");
  const [freePreview, setFreePreview] = useState(false);

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 bg-[#F86432]/4 border-t border-[#F86432]/10 rounded-b-2xl w-full">
      <h4 className="text-[16px] md:text-[17px] font-semibold text-gray-900">
        Add New Lesson
      </h4>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
          Lesson Title <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white "
          placeholder="e.g., Introduction to React Hooks"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
          Lesson Description
        </label>
        <textarea
          className="w-full p-4 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors min-h-[100px] resize-none bg-white "
          placeholder="What will students learn in this lesson?"
        />
      </div>

      {/* Class Video */}
      <div className="flex flex-col gap-4">
        <h4 className="text-[14px] md:text-[15px] font-semibold text-gray-900">
          Class Video
        </h4>

        <div className="flex items-center bg-white p-1 rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.02)] border border-gray-100/50 overflow-hidden w-full md:w-[60%]">
          <button
            onClick={() => setVideoSource("Vimeo")}
            className={`flex-1 py-2 text-[13px] font-medium rounded-lg transition-colors ${videoSource === "Vimeo" ? "bg-[#FFEBE6] text-black" : "text-gray-600 hover:text-gray-900"}`}
          >
            Vimeo
          </button>
          <button
            onClick={() => setVideoSource("Embedded")}
            className={`flex-1 py-2 text-[13px] font-medium rounded-lg transition-colors ${videoSource === "Embedded" ? "bg-[#FFEBE6] text-black" : "text-gray-600 hover:text-gray-900"}`}
          >
            Embedded
          </button>
          <button
            onClick={() => setVideoSource("Bunny.net")}
            className={`flex-1 py-2 text-[13px] font-medium rounded-lg transition-colors ${videoSource === "Bunny.net" ? "bg-[#FFEBE6] text-black" : "text-gray-600 hover:text-gray-900"}`}
          >
            Bunny.net
          </button>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <LinkIcon className="size-[18px]" />
          </div>
          <input
            className="w-full pl-11 pr-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white "
            placeholder="Paste Vimeo URL"
          />
        </div>
      </div>

      {/* Supporting Materials */}
      <div className="flex flex-col gap-2 mt-2">
        <h4 className="text-[13px] md:text-[14px] font-semibold text-gray-900">
          Supporting Materials (optional)
        </h4>
        <div className="flex flex-col items-center justify-center border border-dashed border-gray-200 rounded-xl bg-white hover:bg-gray-50/50 transition-colors cursor-pointer min-h-[90px] shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded flex items-center justify-center bg-[#FAFAFA] border border-gray-100 text-gray-700">
              <FileText className="size-4" strokeWidth={2} />
            </div>
            <span className="text-[14px] font-medium text-gray-800">
              Upload PDFs, Docs, or Slides
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
            Duration
          </label>
          <input
            className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white "
            placeholder="12:45"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
            Publish Status
          </label>
          <div className="relative">
            <select className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] text-gray-900 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white  appearance-none">
              <option>Active</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Free Preview */}
      <div className="flex items-center justify-between p-4 md:p-5 rounded-xl border border-[#FF7A59] bg-white mt-1 shadow-[0px_1px_2px_rgba(255,122,89,0.05)]">
        <div className="flex flex-col gap-0.5">
          <h4 className="text-[14.5px] font-semibold text-gray-900">
            Free Preview
          </h4>
          <p className="text-[13px] text-gray-500">
            Allow non-enrolled students to watch this lesson
          </p>
        </div>
        {/* Switch */}
        <ToggleSwitch checked={freePreview} onChange={setFreePreview} />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 md:flex flex-col-reverse md:flex-row items-center justify-end gap-3 mt-4 w-full">
        <button
          onClick={onCancel}
          className="md:w-auto px-6 h-11 rounded-xl text-[14px] font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button className="md:w-auto px-6 h-11 rounded-xl text-[14px] font-medium bg-[#FF7A59] text-white hover:bg-[#FF7A59]/90 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function AddNewQuizForm({ onCancel }: { onCancel: () => void }) {
  const [randomizeQs, setRandomizeQs] = useState(true);
  const [showCorrect, setShowCorrect] = useState(true);
  const [allowRetakes, setAllowRetakes] = useState(true);

  const [multipleCorrect, setMultipleCorrect] = useState(false);
  const [answerRequired, setAnswerRequired] = useState(true);
  const [randomizeChoice, setRandomizeChoice] = useState(true);
  const [displayPoints, setDisplayPoints] = useState(true);

  const [options, setOptions] = useState([
    { id: "A", text: "Option 1", isCorrect: true, isEditing: false },
    { id: "B", text: "Option 2", isCorrect: true, isEditing: false },
    { id: "C", text: "Option 3", isCorrect: false, isEditing: false },
    { id: "D", text: "Option 4", isCorrect: false, isEditing: true },
  ]);

  const toggleOptionCorrect = (id: string) => {
    setOptions((opts) =>
      opts.map((o) =>
        o.id === id
          ? { ...o, isCorrect: !o.isCorrect }
          : multipleCorrect
            ? o
            : { ...o, isCorrect: false },
      ),
    );
  };

  const deleteOption = (id: string) => {
    setOptions((opts) => opts.filter((o) => o.id !== id));
  };

  const addOption = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nextId = letters[options.length % 26];
    setOptions([
      ...options,
      {
        id: nextId,
        text: `Option ${options.length + 1}`,
        isCorrect: false,
        isEditing: true,
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 bg-[#F86432]/4 border-t border-[#F86432]/10 rounded-b-2xl w-full">
      <h4 className="text-[16px] md:text-[17px] font-semibold text-gray-900">
        Create New Quiz
      </h4>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
          Quiz Title <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white "
          placeholder="e.g., Introduction to React Hooks Quiz"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
          Lesson Description
        </label>
        <textarea
          className="w-full p-4 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors min-h-[100px] resize-none bg-white "
          placeholder="Brief description of what this quiz covers"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
            Passing Score (%) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] text-gray-900 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white appearance-none ">
              <option>70%</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
            Time Limit (minutes)
          </label>
          <div className="relative">
            <select className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] text-gray-900 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white appearance-none ">
              <option>Optional</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Global Toggles */}
      <div className="flex flex-col gap-4 p-4 md:p-5 rounded-xl border border-[#FF7A59]/20 bg-white shadow-[0px_1px_2px_rgba(255,122,89,0.05)]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <h4 className="text-[14px] font-medium text-gray-900">
              Randomize Questions
            </h4>
            <p className="text-[13px] text-gray-500">
              Show questions in random order
            </p>
          </div>
          <ToggleSwitch checked={randomizeQs} onChange={setRandomizeQs} />
        </div>
        <div className="w-full h-px bg-gray-50" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <h4 className="text-[14px] font-medium text-gray-900">
              Show Correct Answers
            </h4>
            <p className="text-[13px] text-gray-500">
              Display answers after submission
            </p>
          </div>
          <ToggleSwitch checked={showCorrect} onChange={setShowCorrect} />
        </div>
        <div className="w-full h-px bg-gray-50" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <h4 className="text-[14px] font-medium text-gray-900">
              Allow Retakes
            </h4>
            <p className="text-[13px] text-gray-500">
              Let students retake the quiz
            </p>
          </div>
          <ToggleSwitch checked={allowRetakes} onChange={setAllowRetakes} />
        </div>
      </div>

      {/* Questions block */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h4 className="text-[15px] font-semibold text-gray-900">
              Questions (1)
            </h4>
            <span className="text-[13px] text-gray-500">Total Points: 1</span>
          </div>
          <button className="h-9 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-[13px] font-medium text-gray-800 transition-colors">
            Add Question
          </button>
        </div>

        {/* The Question Editor */}
        <div className="flex flex-col xl:flex-row gap-6 p-4 md:p-6 bg-white rounded-xl border border-gray-100/50  relative">
          {/* Left side: Question & answers */}
          <div className="flex flex-col gap-5 flex-1 w-full">
            <div className="flex gap-3">
              <div className="size-8 rounded-lg bg-[#FAFAFA] border border-gray-100 text-gray-600 flex items-center justify-center text-[14px] font-medium shrink-0 mt-1">
                1
              </div>
              <input
                className="flex-1 px-4 h-11 rounded-lg border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.02)]"
                placeholder="Enter Question"
              />
            </div>

            <div className="flex flex-col gap-3 pl-11">
              <span className="text-[13px] text-gray-500 font-medium">
                Answer Options:
              </span>

              <div className="flex flex-col gap-3">
                {options.map((opt) => (
                  <div
                    key={opt.id}
                    className={`${opt.isEditing ? "flex items-start gap-3" : "flex items-center gap-3"}`}
                  >
                    {opt.isCorrect ? (
                      <CheckCircle2
                        className={`size-[18px] cursor-pointer text-[#34A853] shrink-0 ${opt.isEditing ? "mt-3" : ""}`}
                        onClick={() => toggleOptionCorrect(opt.id)}
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Circle
                        className={`size-[18px] cursor-pointer text-gray-300 hover:text-[#EF4444] shrink-0 transition-colors ${opt.isEditing ? "mt-3" : ""}`}
                        onClick={() => toggleOptionCorrect(opt.id)}
                        strokeWidth={2.5}
                      />
                    )}

                    <span
                      className={`text-[13px] text-gray-400 font-medium w-4 ${opt.isEditing ? "mt-2.5" : ""}`}
                    >
                      {opt.id}
                    </span>

                    {opt.isEditing ? (
                      <div className="flex flex-col flex-1 min-w-0 gap-2.5">
                        <input
                          className="w-full px-2 h-10 rounded-lg border border-[#FF7A59]/40 ring-1 ring-[#FF7A59]/20 text-[13.5px] text-gray-900 bg-white outline-none shadow-[0px_1px_3px_rgba(255,122,89,0.1)]"
                          value={opt.text}
                          onChange={(e) =>
                            setOptions((opts) =>
                              opts.map((o) =>
                                o.id === opt.id
                                  ? { ...o, text: e.target.value }
                                  : o,
                              ),
                            )
                          }
                        />
                        <div className="flex items-center gap-2.5 justify-end">
                          <button
                            onClick={() =>
                              setOptions((opts) =>
                                opts.map((o) =>
                                  o.id === opt.id
                                    ? { ...o, isEditing: false }
                                    : o,
                                ),
                              )
                            }
                            className="h-[28px] px-3.5 rounded-md border border-gray-200 bg-[#FAFAFA] hover:bg-gray-100 text-[12px] font-semibold text-gray-600 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() =>
                              setOptions((opts) =>
                                opts.map((o) =>
                                  o.id === opt.id
                                    ? { ...o, isEditing: false }
                                    : o,
                                ),
                              )
                            }
                            className="h-[28px] px-4 rounded-md bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-[12px] font-semibold text-white transition-colors"
                          >
                            Okay
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="flex-1 flex max-w-35 items-center px-4 h-10 rounded-lg border border-gray-100/50 hover:border-gray-200 bg-[#FAFAFA] shadow-[0px_1px_2px_rgba(0,0,0,0.02)] cursor-text transition-colors"
                        onClick={() =>
                          setOptions((opts) =>
                            opts.map((o) =>
                              o.id === opt.id ? { ...o, isEditing: true } : o,
                            ),
                          )
                        }
                      >
                        <input
                          className="flex-1 min-w-0 bg-transparent text-[13.5px] outline-none text-gray-700 pointer-events-none"
                          value={opt.text}
                          readOnly
                        />
                        {opt.id === "C" && (
                          <div className="flex items-center gap-2.5 text-gray-500 ml-2 border-l border-gray-200 pl-3">
                            <ImageIcon className="size-[15px] cursor-pointer hover:text-gray-900 transition-colors" />
                            <Code className="size-[15px] cursor-pointer hover:text-gray-900 transition-colors" />
                            <Pencil className="size-[15px] cursor-pointer hover:text-gray-900 transition-colors" />
                          </div>
                        )}
                      </div>
                    )}

                    <X
                      className={`size-[18px] text-gray-400 hover:text-gray-600 cursor-pointer transition-colors ${opt.isEditing ? "mt-2.5" : ""}`}
                      onClick={() => deleteOption(opt.id)}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1 items-start ml-7 mb-1 mt-1">
                  <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#FF7A59] cursor-pointer hover:text-[#FF7A59]/80 transition-colors">
                    <ImageIcon className="size-3.5" />
                    Add Image
                  </span>
                </div>
              </div>

              <button
                onClick={addOption}
                className="w-fit h-9 px-4 rounded-xl border border-gray-200 bg-[#FAFAFA] hover:bg-gray-100 text-[13px] font-medium text-gray-700 mt-2 transition-colors"
              >
                Add Option
              </button>
            </div>
          </div>

          {/* Right side: Settings */}
          <div className="flex flex-col gap-6 xl:w-[280px] shrink-0 xl:pl-6 xl:border-l xl:border-gray-100 mt-2 xl:mt-0 pt-4 xl:pt-0 border-t xl:border-t-0 border-gray-100">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-gray-900">
                Question Type
              </label>
              <div className="relative">
                <select className="w-full px-3 h-10 rounded-lg border border-gray-100/50 hover:border-gray-200 text-[13px] text-gray-900 bg-[#FAFAFA] appearance-none outline-none  transition-colors">
                  <option>Multiple Choice</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-[14px] text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="text-[14.5px] font-semibold text-gray-900">
                Conditions:
              </h5>

              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[13.5px] font-medium text-gray-800">
                    Multiple Correct Answer
                  </span>
                  <ToggleSwitch
                    checked={multipleCorrect}
                    onChange={setMultipleCorrect}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13.5px] font-medium text-gray-800">
                    Answer Required
                  </span>
                  <ToggleSwitch
                    checked={answerRequired}
                    onChange={setAnswerRequired}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13.5px] font-medium text-gray-800">
                    Randomize Choice
                  </span>
                  <ToggleSwitch
                    checked={randomizeChoice}
                    onChange={setRandomizeChoice}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3.5 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[13.5px] font-medium text-gray-800 shrink-0">
                    Point For This Question
                  </span>
                  <input
                    type="number"
                    defaultValue="1"
                    min="0"
                    className="w-12 h-8 rounded-lg border border-gray-100/50 text-[13px] font-medium text-gray-900 bg-[#FAFAFA] hover:border-gray-200 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors text-center shadow-[0px_1px_2px_rgba(0,0,0,0.02)]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[13.5px] font-medium text-gray-800">
                    Display Points
                  </span>
                  <ToggleSwitch
                    checked={displayPoints}
                    onChange={setDisplayPoints}
                  />
                </div>
              </div>

              <button className="w-full h-[38px] rounded-lg bg-[#E5E7EB] hover:bg-gray-300 text-gray-700 text-[13.5px] font-semibold mt-4 transition-colors">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-100 my-2" />

      {/* Global Status and Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mt-1">
        <div className="flex flex-col gap-1.5 md:w-[240px]">
          <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
            Status
          </label>
          <div className="relative">
            <select className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] text-gray-900 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white appearance-none ">
              <option>Draft</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 md:flex flex-col-reverse md:flex-row items-center gap-3 w-full md:w-auto">
          <button
            onClick={onCancel}
            className="w-full md:w-auto px-7 h-11 rounded-xl text-[14px] font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors "
          >
            Save as Draft
          </button>
          <button className="w-full md:w-auto px-7 h-11 rounded-xl text-[14px] font-medium bg-[#FF7A59] text-white hover:bg-[#FF7A59]/90 transition-colors ">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function SortableModuleItem({
  module,
  isExpanded,
  toggleModule,
}: {
  module: Module;
  isExpanded: boolean;
  toggleModule: (id: number) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: module.id });

  const [isAddingLesson, setIsAddingLesson] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex flex-col bg-white rounded-2xl w-full border ${isDragging ? "border-[#FF7A59] shadow-lg" : "border-gray-100 shadow-[0px_2px_8px_rgba(0,0,0,0.02)]"}`}
    >
      {/* Module Header */}
      <div
        className={`flex items-center justify-between p-4 md:px-6 md:py-5 ${
          isExpanded ? "pb-2 md:pb-3" : ""
        }`}
      >
        <div className="flex items-center gap-3 md:gap-4">
          {/* Desktop Grip & Chevron */}
          <div className="hidden md:flex items-center gap-3 mr-1">
            <div
              {...attributes}
              {...listeners}
              className="cursor-grab hover:bg-gray-50 p-1 -ml-1 rounded focus:outline-none"
            >
              <GripVertical className="size-5 text-gray-300 pointer-events-none" />
            </div>
            <button onClick={() => toggleModule(module.id)}>
              {isExpanded ? (
                <ChevronUp className="size-[22px] text-gray-900" />
              ) : (
                <ChevronDown className="size-[22px] text-gray-900" />
              )}
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[15.5px] md:text-[16px] font-medium text-gray-900">
              {module.title}
            </span>
            <div className="flex items-center gap-3 text-[13px] text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Play className="size-3" />
                <span>{module.lessons} Lessons</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="size-3" />
                <span>{module.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => {
              if (!isExpanded) toggleModule(module.id);
              setIsAddingLesson(true);
            }}
            className="h-8 px-3 md:px-4 rounded-lg border border-gray-200 bg-[#FAFAFA] hover:bg-gray-100 text-[13px] font-medium text-gray-800 transition-colors"
          >
            Add Lesson
          </button>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 ml-2">
            <button className="p-1 hover:bg-gray-50 rounded">
              <Pencil className="size-[18px] text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-50 rounded">
              <Trash2 className="size-[18px] text-gray-400" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center ml-1">
            <button className="p-1 text-gray-900">
              <MoreVertical className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lessons List properly expanded */}
      {isExpanded && module.items && (
        <div className="flex flex-col px-4 md:px-6 pb-4 md:pb-6 pt-2">
          <div className="w-full h-px bg-gray-100 mb-4" />

          {module.items.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded-xl border border-gray-100/50"
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="size-[26px] bg-white border border-gray-100 rounded text-gray-400 text-[12px] font-medium flex items-center justify-center shrink-0">
                  {lesson.id}
                </div>

                {/* Desktop Play Icon inside Square */}
                <div className="hidden md:flex size-[26px] bg-white border border-gray-100 rounded items-center justify-center shrink-0">
                  <Play className="size-[10px] text-[#FF7A59] fill-[#FF7A59]" />
                </div>
                {/* Mobile Play Icon */}
                <div className="flex md:hidden size-[26px] items-center justify-center shrink-0">
                  <Play
                    className="size-3.5 text-[#FF7A59] fill-none"
                    strokeWidth={2.5}
                  />
                </div>

                <div className="flex flex-col gap-0.5 mt-px">
                  <span className="text-[15px] font-medium text-gray-900">
                    {lesson.title}
                  </span>
                  <div className="flex items-center gap-1.5 text-[13px] text-gray-400 font-medium">
                    <Clock className="size-[11px]" strokeWidth={2.5} />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                {/* Desktop Lesson Actions */}
                <div className="hidden md:flex items-center gap-2 pr-2">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Pencil className="size-[18px] text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Trash2 className="size-[18px] text-gray-400" />
                  </button>
                </div>
                {/* Mobile Lesson Actions */}
                <div className="flex md:hidden mr-1">
                  <button className="p-1">
                    <MoreVertical className="size-5 text-gray-900" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add New Lesson Inline Form */}
      {isAddingLesson && (
        <AddNewLessonForm onCancel={() => setIsAddingLesson(false)} />
      )}
    </div>
  );
}

export function CurriculumStep() {
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [expandedModules, setExpandedModules] = useState<number[]>([3]);
  const [isAddingModule, setIsAddingModule] = useState(false);
  const [isAddingLessonToNew, setIsAddingLessonToNew] = useState(false);
  const [isAddingQuizToNew, setIsAddingQuizToNew] = useState(false);

  // Setup DnD sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const toggleModule = (id: number) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setModules((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900">
            Curriculum
          </h3>
          <p className="text-[14px] text-gray-400">
            {modules.length} Modules • Total duration: 4h 24m
          </p>
        </div>
        <button
          onClick={() => setIsAddingModule(true)}
          className="h-10 px-4 md:px-5 rounded-xl border border-gray-200 text-gray-800 text-[14px] font-medium bg-transparent hover:bg-white transition-colors"
        >
          Add Module
        </button>
      </div>

      <div className="flex flex-col gap-3 md:gap-4 mt-2">
        {isAddingModule && (
          <div className="flex flex-col gap-3 md:gap-4 mb-2">
            <div className="flex flex-col bg-white rounded-2xl w-full border border-gray-100  p-4 md:p-6">
              <div className="flex flex-row items-center justify-between mb-6">
                <h4 className="text-[16px] md:text-[18px] font-semibold text-gray-900">
                  Add New Module
                </h4>
                <div className="flex items-center gap-2 md:gap-3">
                  <button className="px-4 md:px-5 h-9 md:h-10 rounded-lg md:rounded-xl text-[13px] md:text-[14px] font-medium bg-[#FF7A59] text-white hover:bg-[#FF7A59]/90 transition-colors">
                    Add Module
                  </button>
                  <button
                    onClick={() => setIsAddingModule(false)}
                    className="px-4 md:px-5 h-9 md:h-10 rounded-lg md:rounded-xl text-[13px] md:text-[14px] font-medium bg-[#FAFAFA] border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] md:text-[15px] font-semibold text-gray-900">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full px-4 h-12 rounded-xl border border-gray-100 hover:border-gray-200 text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors bg-white"
                    placeholder="e.g., Introduction to Web Developement"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] md:text-[15px] font-semibold text-gray-900">
                    Description
                  </label>
                  <textarea
                    className="w-full p-4 rounded-xl border border-gray-100 hover:border-gray-200 text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7A59]/30 focus:ring-1 focus:ring-[#FF7A59]/30 transition-colors min-h-[120px] resize-none bg-white"
                    placeholder="Enter texts here."
                  />
                </div>

                <div className="w-full h-px bg-gray-100 my-1" />

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setIsAddingQuizToNew(false);
                      setIsAddingLessonToNew(true);
                    }}
                    className="h-9 px-4 rounded-lg bg-[#FAFAFA] border border-gray-200 text-[13px] font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Add Lesson
                  </button>
                  <button
                    onClick={() => {
                      setIsAddingLessonToNew(false);
                      setIsAddingQuizToNew(true);
                    }}
                    className="h-9 px-4 rounded-lg bg-[#FAFAFA] border border-gray-200 text-[13px] font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Add Quiz
                  </button>
                </div>
              </div>

              {/* Add New Lesson inside Add New Module */}
              {isAddingLessonToNew && (
                <div className="mt-4 -mx-4 md:-mx-6 -mb-4 md:-mb-6">
                  <AddNewLessonForm
                    onCancel={() => setIsAddingLessonToNew(false)}
                  />
                </div>
              )}

              {/* Add New Quiz inside Add New Module */}
              {isAddingQuizToNew && (
                <div className="mt-4 -mx-4 md:-mx-6 -mb-4 md:-mb-6">
                  <AddNewQuizForm
                    onCancel={() => setIsAddingQuizToNew(false)}
                  />
                </div>
              )}
            </div>

            <div className="flex items-center">
              <button className="flex items-center gap-1.5 h-9 px-4 rounded-lg bg-[#FFEBE6] text-[#FF7A59] text-[13.5px] font-medium hover:bg-[#FFEBE6]/80 transition-colors">
                <Plus className="size-4" strokeWidth={2.5} />
                Add Topic
              </button>
            </div>
          </div>
        )}

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={modules.map((m) => m.id)}
            strategy={verticalListSortingStrategy}
          >
            {modules.map((module) => (
              <SortableModuleItem
                key={module.id}
                module={module}
                isExpanded={expandedModules.includes(module.id)}
                toggleModule={toggleModule}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
