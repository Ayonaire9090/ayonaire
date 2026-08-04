"use client";

import React, { useRef, useState } from "react";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import {
  X,
  Tag,
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
import { useCreateFeedMutation } from "@/hooks/api/use-feeds";
import { useAuthStore } from "@/store/auth.store";
import { FEED_TAG_OPTIONS } from "./feed-tags";

interface FeedCreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpace?: string;
}

// Announcements aren't here - those are posted through the separate
// Announcement model/route by staff, not through this composer. Ask for
// Help isn't here either - it has its own dedicated model and its own
// "Ask a question" modal (feed/ask-for-help/_components/ask-question-modal.tsx),
// since a question's shape (resolved status, answers) doesn't fit a generic post.
const AVAILABLE_SPACES = ["Service", "Introductions", "General Discussion"];

// Maps the user-facing space label to the backend Feed `channel` value.
const SPACE_VALUES: Record<string, string> = {
  Service: "general",
  "General Discussion": "general-discussion",
  Introductions: "introductions",
};

export const FeedCreatePostModal = ({
  isOpen,
  onClose,
  defaultSpace = "Service",
}: FeedCreatePostModalProps) => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  const [isSpaceDropdownOpen, setIsSpaceDropdownOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(defaultSpace);
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const user = useAuthStore((state) => state.user);
  const createFeedMutation = useCreateFeedMutation();

  // The modal is mounted once in the sidebar and persists across
  // navigation, so re-sync the pre-selected space to whichever page the
  // user was on each time they open it (they can still change it manually
  // before publishing).
  React.useEffect(() => {
    if (isOpen) setSelectedSpace(defaultSpace);
  }, [isOpen, defaultSpace]);

  const resetAndClose = () => {
    setText("");
    setSelectedTag(undefined);
    setImage(null);
    setImagePreview(null);
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    e.target.value = "";
  };

  const handlePublish = () => {
    const trimmed = text.trim();
    if ((!trimmed && !image) || createFeedMutation.isPending) return;

    const formData = new FormData();
    formData.append("content", trimmed);
    formData.append("channel", SPACE_VALUES[selectedSpace] ?? "general");
    if (selectedTag) formData.append("tag", selectedTag);
    if (image) formData.append("media", image);

    createFeedMutation.mutate(formData, {
      onSuccess: () => resetAndClose(),
    });
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
          onClick={resetAndClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 outline-none"
        >
          <X className="size-4 text-gray-900" />
        </button>
      </div>

      {/* Topic Row - one of the 3 fixed topics, optional */}
      <div className="relative flex items-center gap-2 w-full py-2 border-b border-gray-100 shrink-0">
        <Tag className="w-4 h-4 text-gray-400 shrink-0" />
        <button
          type="button"
          onClick={() => setIsTagDropdownOpen(!isTagDropdownOpen)}
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          {selectedTag ? (
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
              #{selectedTag}
            </span>
          ) : (
            <span className="text-gray-400">Add a topic (optional)</span>
          )}
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
        {selectedTag && (
          <button
            type="button"
            onClick={() => setSelectedTag(undefined)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        {isTagDropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsTagDropdownOpen(false)}
            />
            <div className="absolute left-0 top-full mt-1.5 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              {FEED_TAG_OPTIONS.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setSelectedTag(value);
                    setIsTagDropdownOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 text-left px-3.5 py-2 text-sm transition-colors cursor-pointer hover:bg-gray-50 ${
                    selectedTag === value
                      ? "text-[#F86432] font-semibold bg-[#FEECE5]/30"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* User Information & Space Selector */}
      <div className="flex items-start gap-3 pt-4 shrink-0">
        <Avatar className="h-10 w-10 border border-gray-200 bg-gray-100 shrink-0">
          <AvatarImage
            src={user?.profile?.url || "/assets/icons/user-solid.svg"}
            className="object-contain p-2"
          />
          <AvatarFallback>{user?.name?.slice(0, 2).toUpperCase() ?? "AN"}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1.5 items-start">
          <span className="font-semibold text-sm sm:text-base text-gray-900 leading-none">
            {user?.name ?? "You"}
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
      <div className="flex-1 w-full min-h-0 py-2 flex flex-col gap-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full h-full resize-none border-0 focus:ring-0 placeholder-gray-400 text-gray-700 text-base py-2 focus-visible:ring-0 focus-visible:outline-none outline-none bg-transparent"
        />

        {imagePreview && (
          <div className="relative w-fit">
            <img
              src={imagePreview}
              alt="Selected"
              className="max-h-56 rounded-xl object-cover"
            />
            <button
              type="button"
              onClick={() => {
                setImage(null);
                setImagePreview(null);
              }}
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900/80 text-white hover:bg-gray-900"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

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
                onClick={() => fileInputRef.current?.click()}
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer "
              >
                <ImagePlus className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 opacity-40 cursor-not-allowed"
              >
                <Calendar className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 opacity-40 cursor-not-allowed"
              >
                <Globe className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 opacity-40 cursor-not-allowed"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 opacity-40 cursor-not-allowed"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 opacity-40 cursor-not-allowed"
              >
                <User className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 opacity-40 cursor-not-allowed"
              >
                <Briefcase className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePublish}
            disabled={(!text.trim() && !image) || createFeedMutation.isPending}
            className="bg-[#F86432] hover:bg-[#F86432]/90 text-white font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer border-none disabled:opacity-60 disabled:cursor-default"
          >
            {createFeedMutation.isPending ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>
    </AppSimpleModal>
  );
};
