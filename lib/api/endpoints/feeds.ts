import { ApiResponse } from "../types";
import { feedSocketRequest } from "../../socket/feed-socket";

export interface FeedComment {
  user: {
    id: string;
    name?: string;
  };
  text: string;
  createdAt: string;
}

export interface FeedRecord {
  id: string;
  content: string;
  media?: {
    url: string;
    publicId: string;
  };
  tag?: string;
  channel: string;
  user: {
    id: string;
    name: string;
    profile?: {
      url: string;
      publicId: string;
    } | null;
  };
  likes: string[];
  comments: FeedComment[];
  shares: number;
  createdAt: string;
}

export interface GetFeedsParams {
  tag?: string;
  channel?: string;
  page?: number;
  limit?: number;
}

export interface ShareFeedResult {
  feedId: string;
  shares: number;
}

interface TransferableMedia {
  buffer: ArrayBuffer;
  mimetype: string;
  originalname: string;
}

const extractMediaFile = (formData: FormData): File | undefined => {
  const file = formData.get("media");
  return file instanceof File && file.size > 0 ? file : undefined;
};

const toTransferableMedia = async (
  file: File,
): Promise<TransferableMedia> => ({
  buffer: await file.arrayBuffer(),
  mimetype: file.type,
  originalname: file.name,
});

const stringField = (formData: FormData, key: string): string | undefined => {
  const value = formData.get(key);
  return typeof value === "string" && value !== "" ? value : undefined;
};

// All feed reads/writes go over the /feed socket namespace (see
// lib/socket/feed-socket.ts) instead of REST for lower latency and
// real-time broadcast of changes - the FormData-in, ApiResponse-out
// signatures are kept identical to the old REST client so every caller
// (hooks/api/use-feeds.ts and the components that use it) needed zero changes.
export const feedsApi = {
  create: async (formData: FormData): Promise<ApiResponse<FeedRecord>> => {
    const mediaFile = extractMediaFile(formData);
    return feedSocketRequest<FeedRecord>("feed:create", {
      content: stringField(formData, "content") ?? "",
      tag: stringField(formData, "tag"),
      channel: stringField(formData, "channel"),
      media: mediaFile ? await toTransferableMedia(mediaFile) : undefined,
    });
  },

  getAll: (params?: GetFeedsParams) =>
    feedSocketRequest<FeedRecord[]>("feed:list", {
      tag: params?.tag,
      channel: params?.channel,
      page: params?.page,
      limit: params?.limit,
    }),

  edit: async (formData: FormData): Promise<ApiResponse<FeedRecord>> => {
    const mediaFile = extractMediaFile(formData);
    return feedSocketRequest<FeedRecord>("feed:edit", {
      feedId: stringField(formData, "feedId") ?? "",
      content: stringField(formData, "content"),
      tag: stringField(formData, "tag"),
      channel: stringField(formData, "channel"),
      media: mediaFile ? await toTransferableMedia(mediaFile) : undefined,
    });
  },

  delete: (feedId: string) =>
    feedSocketRequest<string>("feed:delete", { feedId }),

  like: (feedId: string) =>
    feedSocketRequest<FeedRecord>("feed:like", { feedId }),

  comment: (feedId: string, text: string) =>
    feedSocketRequest<FeedRecord>("feed:comment", { feedId, text }),

  deleteComment: (feedId: string, commentId: string) =>
    feedSocketRequest<string>("feed:comment:delete", { feedId, commentId }),

  share: (feedId: string) =>
    feedSocketRequest<ShareFeedResult>("feed:share", { feedId }),

  report: (feedId: string, reason: string) =>
    feedSocketRequest<string>("feed:report", { feedId, reason }),
};
