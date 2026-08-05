"use client";

import { useRef, useState } from "react";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { Tag, X, ImagePlus, PlusCircle } from "lucide-react";
import { useCreateAskForHelpQuestionMutation } from "@/hooks/api/use-ask-for-help";
import { toast } from "sonner";

interface AskQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AskQuestionModal = ({ isOpen, onClose }: AskQuestionModalProps) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const createMutation = useCreateAskForHelpQuestionMutation();

  const resetAndClose = () => {
    setText("");
    setTags([]);
    setTagInput("");
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

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const handlePublish = () => {
    const trimmed = text.trim();
    if (!trimmed || createMutation.isPending) return;

    const formData = new FormData();
    formData.append("content", trimmed);
    formData.append("tags", JSON.stringify(tags));
    if (image) formData.append("media", image);

    createMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Question posted");
        resetAndClose();
      },
      onError: (error: Error) =>
        toast.error(error.message || "Couldn't post your question"),
    });
  };

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={resetAndClose}
      title="Ask a question"
      className="max-w-[600px]"
    >
      <div className="flex flex-col gap-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What do you need help with? Be specific - include what you tried and any error messages."
          rows={5}
          className="w-full resize-none border-0 focus:ring-0 placeholder-gray-400 text-gray-700 text-base focus-visible:ring-0 focus-visible:outline-none outline-none bg-[#F6F6F6] rounded-2xl p-4"
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

        <div className="flex items-center gap-2 flex-wrap border border-gray-100 rounded-xl px-3 py-2">
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
          <form onSubmit={handleAddTag} className="flex-1 min-w-[100px] flex items-center gap-1">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder={tags.length === 0 ? "Add topic tags (Python, PyTorch...)" : "Add tag..."}
              className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 focus:ring-0 p-0 focus:outline-none"
            />
            <button type="submit" className="text-gray-400 hover:text-gray-600 shrink-0">
              <PlusCircle className="w-4 h-4" />
            </button>
          </form>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        <div className="flex items-center justify-between mt-1">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer"
            title="Attach a screenshot"
          >
            <ImagePlus className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handlePublish}
            disabled={!text.trim() || createMutation.isPending}
            className="bg-[#F86432] hover:bg-[#F86432]/90 text-white font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer border-none disabled:opacity-60 disabled:cursor-default"
          >
            {createMutation.isPending ? "Posting..." : "Post Question"}
          </button>
        </div>
      </div>
    </AppSimpleModal>
  );
};
