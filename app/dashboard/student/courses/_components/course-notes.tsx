"use client";

import { useEffect, useState } from "react";
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
  Minus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface StoredNote {
  id: string;
  lessonId: string;
  lessonTitle: string;
  content: string;
  createdAt: string;
}

interface CourseNotesProps {
  courseId: string;
  lessonId?: string;
  lessonTitle?: string;
}

// Notes only persist to this browser (localStorage) - there's no backend
// endpoint for notes yet, so they don't sync across devices.
function storageKey(courseId: string) {
  return `ayonaire:notes:${courseId}`;
}

function loadNotes(courseId: string): StoredNote[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey(courseId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveNotes(courseId: string, notes: StoredNote[]) {
  try {
    window.localStorage.setItem(storageKey(courseId), JSON.stringify(notes));
  } catch {
    // localStorage unavailable (private browsing, quota) - fail silently,
    // notes just won't persist for this session.
  }
}

export const CourseNotes = ({
  courseId,
  lessonId,
  lessonTitle,
}: CourseNotesProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [lectureFilter, setLectureFilter] = useState<
    "All Lectures" | "Current Lectures"
  >("All Lectures");
  const [sortOrder, setSortOrder] = useState<
    "Sort by most recent" | "Sort by oldest"
  >("Sort by most recent");
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState<StoredNote[]>([]);

  useEffect(() => {
    setNotes(loadNotes(courseId));
  }, [courseId]);

  const handleSave = () => {
    if (!noteContent.trim() || !lessonId) {
      setIsEditing(false);
      setNoteContent("");
      return;
    }
    const newNote: StoredNote = {
      id: crypto.randomUUID(),
      lessonId,
      lessonTitle: lessonTitle ?? "Untitled Lesson",
      content: noteContent.trim(),
      createdAt: new Date().toISOString(),
    };
    const updated = [newNote, ...notes];
    setNotes(updated);
    saveNotes(courseId, updated);
    setIsEditing(false);
    setNoteContent("");
  };

  const handleDelete = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    saveNotes(courseId, updated);
  };

  const visibleNotes = notes
    .filter((n) =>
      lectureFilter === "Current Lectures" ? n.lessonId === lessonId : true,
    )
    .sort((a, b) =>
      sortOrder === "Sort by most recent"
        ? b.createdAt.localeCompare(a.createdAt)
        : a.createdAt.localeCompare(b.createdAt),
    );

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
            Create a note for this lesson
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
                {noteContent.length}
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
              onClick={handleSave}
              disabled={!noteContent.trim()}
            >
              Save notes
            </Button>
          </div>
        </div>
      )}

      {renderFilterBar()}

      {visibleNotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center px-4">
          <p className="text-gray-400 text-base md:text-lg">
            Click the &quot;Create a note&quot; box or the &quot;+&quot; button to make your
            first note.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {visibleNotes.map((note) => (
            <div
              key={note.id}
              className="border border-gray-100 rounded-xl p-4 flex flex-col gap-2 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-semibold text-[#F86432]">
                    {note.lessonTitle}
                  </span>
                  <span className="text-[12px] text-gray-400">
                    {new Date(note.createdAt).toLocaleString(undefined, {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors shrink-0"
                  title="Delete note"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[15px] text-gray-700 whitespace-pre-wrap">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
