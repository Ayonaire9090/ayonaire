"use client";

import { useState } from "react";
import {
  Plus,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code2,
  Link2,
  List,
  ListOrdered,
  Quote,
  Image as ImageIcon,
  RemoveFormatting,
  Code,
  Type,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CourseNotes = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [lectureFilter, setLectureFilter] = useState("All Lectures");
  const [sortOrder, setSortOrder] = useState("Sort by most recent");
  const [noteContent, setNoteContent] = useState("");

  const renderFilterBar = () => (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-[#F86432] hover:bg-[#F86432]/5 text-[#F86432] hover:text-[#F86432] rounded-md h-10 px-4 font-normal shadow-none"
          >
            {lectureFilter} <ChevronDown className="ml-2 w-4 h-4 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[160px] rounded-xl p-1 bg-gray-50 border-gray-200"
        >
          <DropdownMenuItem
            className="py-2.5 px-3 text-sm cursor-pointer rounded-lg hover:bg-gray-100"
            onClick={() => setLectureFilter("All Lectures")}
          >
            All Lectures
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-2.5 px-3 text-sm cursor-pointer rounded-lg hover:bg-gray-100"
            onClick={() => setLectureFilter("Current Lectures")}
          >
            Current Lectures
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-[#F86432] hover:bg-[#F86432]/5 text-[#F86432] hover:text-[#F86432] rounded-md h-10 px-4 font-normal shadow-none"
          >
            {sortOrder} <ChevronDown className="ml-2 w-4 h-4 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[200px] rounded-xl p-1 bg-gray-50 border-gray-200"
        >
          <DropdownMenuItem
            className="py-2.5 px-3 text-sm cursor-pointer rounded-lg hover:bg-gray-100"
            onClick={() => setSortOrder("Sort by most recent")}
          >
            Sort by most recent
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-2.5 px-3 text-sm cursor-pointer rounded-lg hover:bg-gray-100"
            onClick={() => setSortOrder("Sort by oldest")}
          >
            Sort by oldest
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-6 pt-4 pb-20 lg:bg-white lg:p-6 lg:rounded-2xl">
      {!isEditing ? (
        <div
          className="w-full border border-gray-100 rounded-xl px-4 py-3 flex items-center justify-between cursor-text bg-white hover:border-gray-200 transition-colors shadow-sm"
          onClick={() => setIsEditing(true)}
        >
          <span className="text-gray-400 text-sm md:text-base">
            Create a note at 12:45
          </span>
          <Button
            size="icon"
            className="w-8 h-8 rounded-full bg-[#F86432] hover:bg-[#F86432]/90 text-white shrink-0 shadow-none p-0 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
            <div className="border-b border-gray-100 px-3 py-2.5 flex flex-wrap items-center gap-1 bg-white">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs font-medium text-gray-700 gap-1 px-2.5 hover:bg-gray-100 rounded-md"
              >
                Styles <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </Button>
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <List className="w-4 h-4" />
                <ChevronDown className="w-3 h-3 absolute bottom-1 right-1 opacity-50" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md relative"
              >
                <div className="w-4 h-4 bg-black rounded-sm border border-gray-200" />
                <ChevronDown className="w-3 h-3 absolute bottom-0.5 right-0 opacity-50" />
              </Button>
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-900 font-bold hover:bg-gray-100 rounded-md"
              >
                <span className="font-serif">B</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-900 italic hover:bg-gray-100 rounded-md"
              >
                <span className="font-serif">I</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-900 underline hover:bg-gray-100 rounded-md"
              >
                <span className="font-serif">U</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-900 line-through hover:bg-gray-100 rounded-md"
              >
                <span className="font-serif">S</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <Code className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <RemoveFormatting className="w-4 h-4" />
              </Button>
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <ListOrdered className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <Link2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <Code2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <Quote className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1" />
              <span className="text-xs text-gray-400 font-medium px-2">
                1000
              </span>
            </div>
            <textarea
              className="w-full p-6 min-h-[220px] text-base text-gray-700 focus:outline-none resize-y placeholder:text-gray-300"
              placeholder="Type your note here..."
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              autoFocus
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              className="bg-gray-50 hover:bg-gray-100 text-gray-600 border-none px-6 h-10 shadow-none font-medium rounded-md"
              onClick={() => {
                setIsEditing(false);
                setNoteContent("");
              }}
            >
              Cancel
            </Button>
            <Button
              className="bg-[#F86432] hover:bg-[#F86432]/90 text-white px-6 h-10 shadow-none font-medium rounded-md"
              onClick={() => {
                setIsEditing(false);
                setNoteContent("");
              }}
            >
              Save notes
            </Button>
          </div>
        </div>
      )}

      {renderFilterBar()}

      <div className="flex flex-col items-center justify-center py-24 text-center px-4">
        <p className="text-gray-400 text-base md:text-lg">
          Click the "Create a new note" box, the "+" button, or press "B" to
          make your first note.
        </p>
      </div>
    </div>
  );
};
