"use client";

import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { ApiResponse } from "@/lib/api/types";
import { toast } from "sonner";
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
  const [legacyNotes, setLegacyNotes] = useState<StoredNote[]>([]);
  const [legacyUnreadable, setLegacyUnreadable] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(`ayonaire:notes:${courseId}`);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) throw new Error("Invalid notes");
      setLegacyNotes(parsed);
      setLegacyUnreadable(false);
    } catch { setLegacyNotes([]); setLegacyUnreadable(true); }
  }, [courseId]);
  const queryClient = useQueryClient();
  const key = ["course-notes", courseId];
  const { data, isLoading, isError } = useQuery({ queryKey: key, queryFn: () => apiClient<ApiResponse<StoredNote[]>>(`/api/v1/course-interactions/${courseId}/notes`, { requireAuth: true }), enabled: !!courseId });
  const notes = data?.data ?? [];
  const save = useMutation({ mutationFn: (payload: { lessonId: string; content: string }) => apiClient(`/api/v1/course-interactions/${courseId}/notes`, { method: "POST", requireAuth: true, body: JSON.stringify(payload) }), onSuccess: () => { queryClient.invalidateQueries({ queryKey: key }); setIsEditing(false); setNoteContent(""); }, onError: () => toast.error("Failed to save note") });
  const remove = useMutation({ mutationFn: (id: string) => apiClient(`/api/v1/course-interactions/${courseId}/notes/${id}`, { method: "DELETE", requireAuth: true }), onSuccess: () => queryClient.invalidateQueries({ queryKey: key }), onError: () => toast.error("Failed to delete note") });
  const migrate = useMutation({
    mutationFn: (items: StoredNote[]) => {
      const unique = items.filter((note) => note && typeof note.id === "string" && items.filter((other) => other?.id === note.id).length === 1);
      const batch: StoredNote[] = [];
      for (const item of unique) {
        if (batch.length >= 500 || new TextEncoder().encode(JSON.stringify({ notes: [...batch, item] })).length > 80000) break;
        batch.push(item);
      }
      if (!batch.length) throw new Error("No importable notes");
      return apiClient<ApiResponse<{ imported: string[]; failed: string[] }>>(`/api/v1/course-interactions/${courseId}/notes/import`, { method: "POST", requireAuth: true, body: JSON.stringify({ notes: batch }) }).then((result) => ({ result, batch }));
    },
    onSuccess: ({ result, batch }) => {
      const imported = new Set(result.data?.imported ?? []);
      try {
        const storageKey = `ayonaire:notes:${courseId}`;
        const current = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
        if (!Array.isArray(current)) throw new Error("Invalid notes");
        const remaining = current.filter((note: StoredNote) => !imported.has(note.id) || !batch.some((item) => JSON.stringify(item) === JSON.stringify(note)));
        if (remaining.length) localStorage.setItem(storageKey, JSON.stringify(remaining));
        else localStorage.removeItem(storageKey);
        setLegacyNotes(remaining);
        toast.success(`${imported.size} notes imported${remaining.length ? `; ${remaining.length} remain on this browser` : ""}`);
      } catch { toast.error("Notes were saved, but the browser copy could not be updated. You can safely retry."); }
      queryClient.invalidateQueries({ queryKey: key });
    },
    onError: () => toast.error("Could not import notes. Your browser copy is unchanged."),
  });

  const handleSave = () => {
    if (!noteContent.trim() || !lessonId) {
      setIsEditing(false);
      setNoteContent("");
      return;
    }
    save.mutate({ lessonId, content: noteContent.trim() });
  };

  const handleDelete = (id: string) => {
    remove.mutate(id);
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
            <div className="hidden">
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

      {legacyUnreadable && <p role="alert">The older browser notes could not be read. Their original data has been kept.</p>}
      {legacyNotes.length > 0 && <div className="rounded-xl bg-orange-50 p-4 text-sm"><p>{legacyNotes.length} older notes were found in this browser. They were not associated with an account, so import them only if they belong to you.</p><Button className="mt-3" onClick={() => migrate.mutate(legacyNotes)} disabled={migrate.isPending}>{migrate.isPending ? "Importing..." : "Import notes to my account"}</Button></div>}
      {renderFilterBar()}

      {isLoading ? <p>Loading notes...</p> : isError ? <p>Could not load notes.</p> : visibleNotes.length === 0 ? (
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
