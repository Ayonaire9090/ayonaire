"use client";

import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { X, Tag, ChevronDown } from "lucide-react";
import { useCreateFeedMutation } from "@/hooks/api/use-feeds";
import { FEED_TAG_OPTIONS } from "./feed-tags";
import { useAuthStore } from "@/store/auth.store";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/api/query-keys";

interface FeedNewPostProps {
  channel?: string;
  tag?: string;
  
}

export const FeedNewPost = ({ channel }: FeedNewPostProps = {}) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const createFeedMutation = useCreateFeedMutation();
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    e.target.value = "";
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handlePost = () => {
    const trimmed = text.trim();
    if ((!trimmed && !image) || createFeedMutation.isPending) return;

    const formData = new FormData();
    formData.append("content", trimmed);
    if (channel) formData.append("channel", channel);
    if (selectedTag) formData.append("tag", selectedTag);
    if (image) formData.append("media", image);

    createFeedMutation.mutate(formData, {
      onSuccess: () => {
        setText("");
        setSelectedTag(undefined);
        removeImage();
        queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all });
        toast.success("Post shared with your community");
      },
      onError: () => toast.error("Could not create your post. Please try again."),
    });
  };

  return (
    <>
      <div className="flex flex-col p-5 sm:p-6 bg-white rounded-2xl border border-[#ebe8e3] shadow-[0_2px_10px_rgba(39,31,23,0.035)] w-full space-y-4">
        <div className="flex items-center justify-between"><div><h2 className="font-bold text-[17px] tracking-tight text-[#25211e]">Share with your community</h2><p className="mt-1 text-xs text-[#9a9189]">A question, an idea, or a little win.</p></div><span className="rounded-full bg-[#fff2ec] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e5663c]">Your space</span></div>
        {/* User Image And Post Input */}
        <div className="flex gap-2">
          {/* User Image */}
          <Avatar className="h-10 w-10 border-2 border-transparent bg-gray-200">
            <AvatarImage
              src={user?.profile?.url}
              alt={user?.name ?? "Your profile"}
            />
            <AvatarFallback>{user?.name?.slice(0, 2).toUpperCase() || "YO"}</AvatarFallback>
          </Avatar>
          {/* Post Input */}
          <div className="w-full ">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-label="Write a post"
              className="min-h-[96px] border border-[#f0ece7]! focus-visible:ring-[#ed7045]/30 bg-[#f9f8f6] rounded-xl p-4 text-sm shadow-none"
              placeholder="What's on your mind?"
            />

            {imagePreview && (
              <div className="relative mt-2 w-fit">
                <img
                  src={imagePreview}
                  alt="Selected"
                  className="max-h-48 rounded-xl object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900/80 text-white hover:bg-gray-900"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {/* Post Actions */}
            <div className="flex justify-between items-center flex-wrap py-2 pt-4">
              <div className="flex items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <button type="button" aria-label="Attach an image" onClick={() => fileInputRef.current?.click()} className="rounded-lg p-2 hover:bg-[#f6f3ef]"><Image
                  src="/assets/icons/gallery-icon.svg"
                  alt="Image"
                  width={20}
                  height={20}
                  className="stroke-gray-900 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
                /></button>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsTagDropdownOpen(!isTagDropdownOpen)}
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <Tag className="w-4 h-4" />
                    {selectedTag && (
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        #{selectedTag}
                      </span>
                    )}
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {isTagDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsTagDropdownOpen(false)}
                      />
                      <div className="absolute left-0 bottom-full mb-1.5 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 z-50">
                        {FEED_TAG_OPTIONS.map(({ value, label, icon: Icon }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => {
                              setSelectedTag(selectedTag === value ? undefined : value);
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
              </div>

              {/* Button */}
              <Button
                onClick={handlePost}
                disabled={(!text.trim() && !image) || createFeedMutation.isPending}
                className="rounded-lg! cursor-pointer bg-[#F86432]! hover:bg-[#F86432]/90 disabled:opacity-60"
              >
                {createFeedMutation.isPending ? "Posting..." : "Post"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
