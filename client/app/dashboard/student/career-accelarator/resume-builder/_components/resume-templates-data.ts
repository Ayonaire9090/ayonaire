export type Template = "executive-modern" | "sleek-minimal" | "harvard-classic";

export const templates: { id: Template; label: string; previewClassName: string }[] = [
  {
    id: "executive-modern",
    label: "Executive Modern",
    previewClassName: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    id: "sleek-minimal",
    label: "Sleek Minimal",
    previewClassName: "bg-gradient-to-br from-purple-400 to-purple-600",
  },
  {
    id: "harvard-classic",
    label: "Harvard Classic",
    previewClassName: "bg-gradient-to-br from-gray-400 to-gray-500",
  },
];
