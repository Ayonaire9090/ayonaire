"use client";

import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { X } from "lucide-react";
import { useCreateFeedMutation } from "@/hooks/api/use-feeds";

interface FeedNewPostProps {
  tag?: string;
}

export const FeedNewPost = ({ tag }: FeedNewPostProps) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const createFeedMutation = useCreateFeedMutation();

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
    if (tag) formData.append("tag", tag);
    if (image) formData.append("media", image);

    createFeedMutation.mutate(formData, {
      onSuccess: () => {
        setText("");
        removeImage();
      },
    });
  };

  return (
    <>
      <div className="flex flex-col p-4 bg-white lg:rounded-xl w-full space-y-3">
        <h2 className="font-semibold text-xl">New Post</h2>
        {/* User Image And Post Input */}
        <div className="flex gap-2">
          {/* User Image */}
          <Avatar className="h-10 w-10 border-2 border-transparent bg-gray-200">
            <AvatarImage
              src="/assets/icons/user-solid.svg"
              className="object-contain p-2"
            />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          {/* Post Input */}
          <div className="w-full ">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="h-[100px] border-none! focus:border-none! outline-0! focus:outline-0 focus:ring-2! bg-gray-100 rounded-xl "
              placeholder="Share What is On Your Mind"
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
              <div className="flex gap-2">
                <Image
                  src="/assets/icons/link-1.svg"
                  alt="Link"
                  width={20}
                  height={20}
                  className="stroke-gray-900 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer opacity-40"
                />

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <Image
                  src="/assets/icons/gallery-icon.svg"
                  alt="Image"
                  width={20}
                  height={20}
                  onClick={() => fileInputRef.current?.click()}
                  className="stroke-gray-900 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
                />
                <Image
                  src="/assets/icons/video.svg"
                  alt="Image"
                  width={20}
                  height={20}
                  className="stroke-gray-900 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer opacity-40"
                />
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
