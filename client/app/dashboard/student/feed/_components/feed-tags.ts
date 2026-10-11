import { Shield, Sparkles, Database, LucideIcon } from "lucide-react";

export interface FeedTagOption {
  value: string;
  label: string;
  icon: LucideIcon;
}

// Mirrors the backend's FeedTag enum (backend/src/types/feed.types.ts) - a
// fixed set of topic labels, not user-defined tags. Keep the `value`s in
// sync with that enum.
export const FEED_TAG_OPTIONS: FeedTagOption[] = [
  { value: "cyber-security", label: "Cyber Security", icon: Shield },
  { value: "ai-engineering", label: "AI Engineering", icon: Sparkles },
  { value: "data-science", label: "Data Science", icon: Database },
];

export const getFeedTagLabel = (value?: string): string | undefined =>
  FEED_TAG_OPTIONS.find((t) => t.value === value)?.label;
