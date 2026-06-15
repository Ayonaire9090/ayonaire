"use client";

import React, { useState } from "react";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import {
  X,
  Tag,
  PlusCircle,
  Smile,
  Sparkles,
  ImagePlus,
  Calendar,
  Globe,
  BarChart3,
  FileText,
  User,
  Briefcase,
  ChevronDown,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FeedCreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_SPACES = [
  "Service",
  "Announcements",
  "Introductions",
  "General Discussion",
  "Ask for Help",
];

export const FeedCreatePostModal = ({
  isOpen,
  onClose,
}: FeedCreatePostModalProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [isSpaceDropdownOpen, setIsSpaceDropdownOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState("Service");
  const [text, setText] = useState("");

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handlePlusClick = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const selectSpace = (space: string) => {
    setSelectedSpace(space);
    setIsSpaceDropdownOpen(false);
  };

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={false}
      className="max-w-[700px] w-[96%] h-fit flex flex-col p-6 gap-0 bg-white rounded-3xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between relative pb-4 border-b border-gray-100 w-full shrink-0">
        <div className="w-8 h-8" /> {/* spacer to balance */}
        <h3 className="text-xl font-bold text-gray-900 mx-auto">
          Create new post
        </h3>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 outline-none"
        >
          <X className="size-4 text-gray-900" />
        </button>
      </div>

      {/* Tags Input/Row */}
      <div className="flex items-center justify-between w-full py-1.5 border-b border-gray-100 shrink-0 gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0 flex-wrap">
          <Tag className="w-4 h-4 text-gray-400 shrink-0" />

          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0"
            >
              #{tag}
              <button
                type="button"
                onClick={() => setTags(tags.filter((_, i) => i !== idx))}
                className="hover:text-red-500 transition-colors"
              >
                <X className="w-3 h-3 text-gray-400 hover:text-gray-600" />
              </button>
            </span>
          ))}

          <form onSubmit={handleAddTag} className="flex-1 min-w-[120px]">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder={
                tags.length === 0
                  ? "Selected tags will show up here.."
                  : "Add tag..."
              }
              className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 focus:ring-0 p-0 focus:outline-none"
            />
          </form>
        </div>

        <button
          type="button"
          onClick={handlePlusClick}
          className="flex items-center justify-center p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors shrink-0 cursor-pointer"
        >
          <PlusCircle className="w-5 h-5" />
        </button>
      </div>

      {/* User Information & Space Selector */}
      <div className="flex items-start gap-3 pt-4 shrink-0">
        <Avatar className="h-10 w-10 border border-gray-200 bg-gray-100 shrink-0">
          <AvatarImage
            src="/assets/icons/user-solid.svg"
            className="object-contain p-2"
          />
          <AvatarFallback>EP</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1.5 items-start">
          <span className="font-semibold text-sm sm:text-base text-gray-900 leading-none">
            Eleanor Pena
          </span>

          <div className="relative flex items-center gap-1">
            {/* Space Dropdown Trigger Button */}
            <button
              onClick={() => setIsSpaceDropdownOpen(!isSpaceDropdownOpen)}
              className="bg-gray-50 border border-gray-100 hover:bg-gray-100 rounded-lg px-2.5 py-1 flex items-center gap-1 cursor-pointer text-xs font-semibold text-gray-600 transition-colors  outline-none"
            >
              <span>{selectedSpace}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {isSpaceDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsSpaceDropdownOpen(false)}
                />
                <div className="absolute left-0 mt-1.5 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {AVAILABLE_SPACES.map((space) => (
                    <button
                      key={space}
                      onClick={() => selectSpace(space)}
                      className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm transition-colors cursor-pointer hover:bg-gray-50 ${
                        selectedSpace === space
                          ? "text-[#F86432] font-semibold bg-[#FEECE5]/30"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {space}
                    </button>
                  ))}
                </div>
              </>
            )}
            {/* Micro plus sign underneath */}
            <div className="flex justify-center">
              <Plus className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Borderless Textarea Input */}
      <div className="flex-1 w-full min-h-0 py-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full h-full resize-none border-0 focus:ring-0 placeholder-gray-400 text-gray-700 text-base py-2 focus-visible:ring-0 focus-visible:outline-none outline-none bg-transparent"
        />
      </div>

      {/* Bottom Actions Bar */}
      <div className="flex flex-col gap-2 shrink-0 mt-auto">
        {/* Smiley Row */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 transition-colors cursor-pointer p-1 -ml-1 rounded-full hover:bg-gray-50"
          >
            <Smile className="w-6 h-6" />
          </button>
        </div>

        {/* Toolbar Row */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              className="bg-gray-50 border border-gray-100 hover:bg-gray-100 rounded-full px-3.5 py-2 flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm font-semibold text-gray-600 transition-colors "
            >
              <Sparkles className="w-4 h-4 text-[#F86432]" />
              Rewrite with AI
            </button>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer "
              >
                <ImagePlus className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer "
              >
                <Calendar className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer "
              >
                <Globe className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer "
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer "
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer "
              >
                <User className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer "
              >
                <Briefcase className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="bg-[#F86432] hover:bg-[#F86432]/90 text-white font-semibold px-6 py-2.5 rounded-xl transition-all  cursor-pointer border-none"
          >
            Publish
          </button>
        </div>
      </div>
    </AppSimpleModal>
  );
};
