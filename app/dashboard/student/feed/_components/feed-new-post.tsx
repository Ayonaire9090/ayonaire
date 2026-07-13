"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useCreateFeedMutation } from "@/hooks/api/use-feeds";

export const FeedNewPost = () => {
  const [text, setText] = useState("");
  const createFeedMutation = useCreateFeedMutation();

  const handlePost = () => {
    const trimmed = text.trim();
    if (!trimmed || createFeedMutation.isPending) return;

    const formData = new FormData();
    formData.append("text", trimmed);

    createFeedMutation.mutate(formData, {
      onSuccess: () => setText(""),
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
            {/* Post Actions */}
            <div className="flex justify-between items-center flex-wrap py-2 pt-4">
              <div className="flex gap-2">
                <Image
                  src="/assets/icons/link-1.svg"
                  alt="Link"
                  width={20}
                  height={20}
                  className="stroke-gray-900 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
                />

                <Image
                  src="/assets/icons/gallery-icon.svg"
                  alt="Image"
                  width={20}
                  height={20}
                  className="stroke-gray-900 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
                />
                <Image
                  src="/assets/icons/video.svg"
                  alt="Image"
                  width={20}
                  height={20}
                  className="stroke-gray-900 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
                />
              </div>

              {/* Button */}
              <Button
                onClick={handlePost}
                disabled={!text.trim() || createFeedMutation.isPending}
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
