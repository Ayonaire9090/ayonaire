"use client";

import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getFeedSocket } from "@/lib/socket/feed-socket";
import { queryKeys } from "@/lib/api/query-keys";
import { ApiResponse } from "@/lib/api/types";
import { FeedRecord, GetFeedsParams, ShareFeedResult } from "@/lib/api/endpoints/feeds";

function feedMatchesTag(feed: FeedRecord, tag?: string): boolean {
  if (!tag) return true;
  return !!feed.tag?.includes(tag);
}

// Every cached feed list (one per distinct tag filter) is patched in place -
// there is no per-query access to the queryKey inside setQueriesData's
// updater, so the query cache is walked directly to read each query's own
// tag filter before deciding whether a broadcasted post belongs in it.
function patchFeedLists(
  queryClient: ReturnType<typeof useQueryClient>,
  updater: (list: FeedRecord[], params: GetFeedsParams | undefined) => FeedRecord[],
) {
  const queries = queryClient.getQueryCache().findAll({ queryKey: queryKeys.feeds.all });

  for (const query of queries) {
    const params = query.queryKey[query.queryKey.length - 1] as
      | GetFeedsParams
      | undefined;

    queryClient.setQueryData<ApiResponse<FeedRecord[]>>(query.queryKey, (old) => {
      if (!old?.data) return old;
      return { ...old, data: updater(old.data, params) };
    });
  }
}

// Mount once per feed page. Keeps every cached feed list in sync in
// real time via the /feed socket namespace instead of refetching after
// each mutation - see hooks/api/use-feeds.ts for the write side.
export function useFeedRealtimeSync() {
  const queryClient = useQueryClient();
  const hasConnectedBefore = useRef(false);

  useEffect(() => {
    const socket = getFeedSocket();

    const handleCreated = (feed: FeedRecord) => {
      patchFeedLists(queryClient, (list, params) => {
        if (list.some((f) => f.id === feed.id)) return list;
        if (!feedMatchesTag(feed, params?.tag)) return list;
        return [feed, ...list];
      });
    };

    const handleUpdated = (feed: FeedRecord) => {
      patchFeedLists(queryClient, (list) =>
        list.map((f) => (f.id === feed.id ? feed : f)),
      );
    };

    const handleDeleted = ({ feedId }: { feedId: string }) => {
      patchFeedLists(queryClient, (list) => list.filter((f) => f.id !== feedId));
    };

    const handleShared = (result: ShareFeedResult) => {
      patchFeedLists(queryClient, (list) =>
        list.map((f) =>
          f.id === result.feedId ? { ...f, shares: result.shares } : f,
        ),
      );
    };

    // Resync on reconnect (not the very first connect, which races with
    // useGetFeeds' own initial fetch) in case a broadcast was missed while
    // the connection was down.
    const handleConnect = () => {
      if (hasConnectedBefore.current) {
        queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all });
      }
      hasConnectedBefore.current = true;
    };

    socket.on("feed:created", handleCreated);
    socket.on("feed:updated", handleUpdated);
    socket.on("feed:deleted", handleDeleted);
    socket.on("feed:shared", handleShared);
    socket.on("connect", handleConnect);

    return () => {
      socket.off("feed:created", handleCreated);
      socket.off("feed:updated", handleUpdated);
      socket.off("feed:deleted", handleDeleted);
      socket.off("feed:shared", handleShared);
      socket.off("connect", handleConnect);
    };
  }, [queryClient]);
}
