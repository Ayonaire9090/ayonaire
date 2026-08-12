"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DASHBOARD_STUDENT_ROOT = "/dashboard/student";
const PREVIEW_STUDENT_ROOT = "/preview/student";

function toPreviewStudentUrl(
  url: string | URL | null | undefined,
): string | URL | null | undefined {
  if (!url) return url;

  const raw = String(url);
  const base = window.location.origin;
  const parsed = new URL(raw, base);

  if (parsed.origin !== base) return url;

  if (parsed.pathname === "/dashboard/profile") {
    parsed.pathname = `${PREVIEW_STUDENT_ROOT}/profile`;
    return parsed.pathname + parsed.search + parsed.hash;
  }

  if (parsed.pathname.startsWith(DASHBOARD_STUDENT_ROOT)) {
    parsed.pathname = parsed.pathname.replace(
      DASHBOARD_STUDENT_ROOT,
      PREVIEW_STUDENT_ROOT,
    );
    return parsed.pathname + parsed.search + parsed.hash;
  }

  return url;
}

export function PreviewStudentRouteBridge() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const mapped = toPreviewStudentUrl(anchor.href);
      if (typeof mapped !== "string") return;

      const current = new URL(anchor.href, window.location.origin);
      const next = new URL(mapped, window.location.origin);
      if (next.href === current.href) return;

      event.preventDefault();
      router.push(next.pathname + next.search + next.hash);
    };

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function pushState(data, unused, url) {
      return originalPushState.call(
        this,
        data,
        unused,
        toPreviewStudentUrl(url) as string | URL | null | undefined,
      );
    };
    window.history.replaceState = function replaceState(data, unused, url) {
      return originalReplaceState.call(
        this,
        data,
        unused,
        toPreviewStudentUrl(url) as string | URL | null | undefined,
      );
    };

    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [router]);

  return null;
}
