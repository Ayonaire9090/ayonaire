"use client";

import React, { useState } from "react";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import {
  Link as LinkIcon,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Link2,
  Image as ImageIcon,
  Quote,
  RemoveFormatting,
  FileText,
  ChevronDown,
  List,
  AlignLeft,
  ListOrdered,
} from "lucide-react";

export function ClassInformationStep() {
  const [videoSource, setVideoSource] = useState("Vimeo");

  return (
    <div className="flex flex-col gap-6 md:gap-8 mb-4">
      <h3 className="text-[17px] font-semibold text-gray-900">
        Class Information
      </h3>

      <AppInput
        label={
          <span className="font-semibold">
            Class Title <span className="text-red-500">*</span>
          </span>
        }
        placeholder="Complete Python Bootcamp"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <AppSelect
          label={<span className="font-semibold">Category</span>}
          options={[{ label: "Programming", value: "programming" }]}
          value="programming"
        />
        <AppSelect
          label={<span className="font-semibold">Instructor</span>}
          options={[{ label: "Mike Rodriguez", value: "mike_rodriguez" }]}
          value="mike_rodriguez"
        />
      </div>

      {/* Class Description Rich Text Editor Fake */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[15px] font-semibold text-gray-900">
          Class Description
        </label>
        <div className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden min-h-[220px]">
          {/* Toolbar */}
          <div className="flex items-center gap-1 p-2 border-b border-gray-100 bg-[#FAFAFA] flex-wrap">
            <div className="flex items-center gap-1 mr-2 px-2 hover:bg-gray-100 rounded cursor-pointer h-8">
              <span className="text-[13px] text-gray-700 font-medium tracking-tight">
                Normal text
              </span>
              <ChevronDown className="size-3 text-gray-500" />
            </div>
            <div className="flex items-center gap-1 mr-2 px-2 hover:bg-gray-100 rounded cursor-pointer h-8">
              <ListOrdered className="size-4 text-gray-600" />
              <ChevronDown className="size-3 text-gray-500" />
            </div>
            <div className="flex items-center gap-1 mr-1 px-2 hover:bg-gray-100 rounded cursor-pointer h-8">
              <div className="size-3.5 bg-black rounded-sm" />
              <ChevronDown className="size-3 text-gray-500" />
            </div>

            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded ml-1">
              <Bold className="size-[15px] text-gray-700" strokeWidth={2.5} />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <Italic className="size-[15px] text-gray-700" strokeWidth={2.5} />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <Underline
                className="size-[15px] text-gray-700"
                strokeWidth={2.5}
              />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <Strikethrough
                className="size-[15px] text-gray-700"
                strokeWidth={2.5}
              />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <Code className="size-[15px] text-gray-700" strokeWidth={2.5} />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <RemoveFormatting
                className="size-[15px] text-gray-700"
                strokeWidth={2.5}
              />
            </button>

            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded ml-1">
              <List className="size-[15px] text-gray-700" strokeWidth={2.5} />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <AlignLeft
                className="size-[15px] text-gray-700"
                strokeWidth={2.5}
              />
            </button>

            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded ml-1">
              <Link2 className="size-[15px] text-gray-700" strokeWidth={2.5} />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <ImageIcon
                className="size-[15px] text-gray-700"
                strokeWidth={2.5}
              />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <Code className="size-[15px] text-gray-700" strokeWidth={2.5} />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <Quote className="size-[15px] text-gray-700" strokeWidth={2.5} />
            </button>
            <button className="size-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <div className="w-3 h-0.5 bg-gray-700 rounded-px" />
            </button>
          </div>
          {/* Content Area */}
          <textarea
            className="flex-1 w-full p-4 text-[15px] outline-none text-gray-700 placeholder:text-gray-400 bg-white min-h-[160px] resize-none"
            placeholder="Describe what students will learn in this course..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <AppInput
          label={<span className="font-semibold">Price</span>}
          placeholder="$ 99.99"
        />
        <AppSelect
          label={<span className="font-semibold">Course Level</span>}
          options={[{ label: "Beginner", value: "beginner" }]}
          value="beginner"
        />
        <AppSelect
          label={<span className="font-semibold">Course Status</span>}
          options={[{ label: "Active", value: "active" }]}
          value="active"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-start">
        {/* Class Intro Video */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[17px] font-semibold text-gray-900">
            Class Intro Video
          </h4>

          <div className="flex items-center bg-white p-1 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => setVideoSource("Vimeo")}
              className={`flex-1 py-3 text-[14px] font-medium rounded-lg transition-colors ${
                videoSource === "Vimeo"
                  ? "bg-[#FFEBE6] text-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Vimeo
            </button>
            <button
              onClick={() => setVideoSource("Embedded")}
              className={`flex-1 py-3 text-[14px] font-medium rounded-lg transition-colors ${
                videoSource === "Embedded"
                  ? "bg-[#FFEBE6] text-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Embedded
            </button>
            <button
              onClick={() => setVideoSource("Bunny.net")}
              className={`flex-1 py-3 text-[14px] font-medium rounded-lg transition-colors ${
                videoSource === "Bunny.net"
                  ? "bg-[#FFEBE6] text-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Bunny.net
            </button>
          </div>

          <AppInput
            Icon={<LinkIcon className="size-[18px]" />}
            placeholder="Paste Vimeo URL"
          />
        </div>

        {/* Course Thumbnail */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[17px] font-semibold text-gray-900">
            Course Thumbnail
          </h4>
          <div className="flex flex-col items-center justify-center border-[1.5px] border-dashed border-gray-200 rounded-xl bg-transparent hover:bg-white/50 transition-colors cursor-pointer min-h-[200px]">
            <div className="size-11 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-3 text-gray-700 shadow-sm border border-gray-100/50">
              <FileText className="size-5" />
            </div>
            <span className="text-[14px] font-medium text-gray-900 mb-1">
              Click to upload thumbnail
            </span>
            <span className="text-[12px] text-gray-500 uppercase tracking-tight">
              PNG, JPG or WEBP (max. 2MB)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
