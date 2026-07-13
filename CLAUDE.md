# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Ayonaire is a Next.js 15 (App Router) marketing site + LMS dashboard for a tech education platform. It has three areas:
- Public marketing pages (courses, schools, blog, pricing, etc.)
- Auth flows for three user roles: student, instructor, admin
- A role-gated dashboard (student learning experience; admin/instructor management console)

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build (uses --turbopack)
npm run start    # run production build
```

There is no configured lint or test script in package.json — do not assume `npm run lint` or `npm test` exist. If you add tests, add the script first. Type-check with `npx tsc --noEmit`.

## Architecture

### Data layer: React Query + hand-written fetch client (no next-auth despite the dependency)

- `lib/api/client.ts` — a single `apiClient<T>()` wrapper around `fetch`. Reads the bearer token from the Zustand auth store (`useAuthStore.getState().token`), auto-attaches `Authorization`, and on a `401` clears auth state via `clearAuth()`. Base URL comes from `NEXT_PUBLIC_API_BASE_URL` (an external backend — this Next.js app is primarily a frontend for a separate API).
- `lib/api/endpoints/*.ts` — one file per resource (auth, courses, users, enrollment, quiz, workshops, instructor, admin, etc.), each exporting a plain object of functions that call `apiClient`. This is the only place `fetch`/endpoint URLs should be defined.
- `lib/api/query-keys.ts` — centralized query-key factory (`queryKeys.auth.profile()`, `queryKeys.courses.detail(id)`, etc). Always use this instead of inlining key arrays.
- `hooks/api/use-*.ts` — React Query hooks (`useQuery`/`useMutation`) that wrap the endpoint functions and query keys. Components should consume these hooks, not `lib/api/endpoints` or `apiClient` directly.
- `providers/query-provider.tsx` — wraps the app in `QueryClientProvider` (5 min `staleTime`, `retry: 1`). Mounted once in `app/layout.tsx`.
- `store/auth.store.ts` — Zustand store (`useAuthStore`), persisted to `localStorage` under key `auth-storage`, holding `token` and `user`. This is the source of truth for auth state — there is no server-side session/cookie auth and no next-auth wiring, even though `next-auth` is listed in dependencies.
- The small handful of routes under `app/api/*` (waitlist, register, dashboard skills/waitlists) are Next.js API routes that talk to Supabase (`lib/supabase.ts`, service-role client, `persistSession: false`) — these are separate from the main external API used via `apiClient`.

### Auth & role-gating

- Three roles: `student` (API sometimes returns `"user"` — always normalize via `user.role === "user" ? "student" : user.role`), `instructor`, `admin`.
- Auth pages live under `app/auth/{admin,instructor,student}/{signin,signup}` plus shared `complete-profile`, `reset-password`, `verify-email`.
- Route protection is client-side, not middleware-based: `components/auth/auth-guard.tsx` (`AuthGuard`) checks Zustand hydration, then token/user presence, then `allowedRoles`, redirecting to `/auth?mode=signin` or the role's own dashboard root. It is applied in dashboard segment layouts, e.g. `app/dashboard/(administrators)/layout.tsx` computes `allowedRoles` from the current pathname (`/dashboard/admin` → `["admin"]`, `/dashboard/instructor` → `["admin", "instructor"]`).
- When adding a new protected page, wrap it (or its route-group layout) in `AuthGuard` rather than adding custom redirect logic.

### Dashboard route structure

- `app/dashboard/(administrators)/admin/*` and `app/dashboard/(administrators)/instructor/*` — admin/instructor console, sharing one route group and layout (`AppSidebar` + `SidebarProvider` from `components/ui/sidebar`, shadcn/ui-based).
- `app/dashboard/student/*` — student learning dashboard (courses, quiz, workshop, feed, messages, career-accelerator, etc.), separate layout.
- Route-local private components live in `_components` subfolders next to the page that uses them (Next.js convention to exclude from routing) — check there before creating a new shared component.

### UI

- shadcn/ui ("new-york" style, neutral base color) — see `components.json` for aliases (`@/components`, `@/components/ui`, `@/lib/utils`, `@/hooks`). Icon library is `lucide-react`; generate/add shadcn components using those existing aliases.
- Styling: Tailwind CSS v4 (`postcss.config.mjs` + `@tailwindcss/postcss`), `tailwind-merge`/`clsx` via `lib/utils.ts` `cn()` helper, `tailwindcss-animate`/`tw-animate-css` for animation utilities.
- Custom fonts are registered in `app/fonts/` (Satoshi, Spectral SC, plus several others) and wired into `app/layout.tsx`.
- Forms: `react-hook-form` + `@hookform/resolvers` + `zod` — validation schemas live in `schemas/*.ts`.

### Analytics

- `lib/events.ts` (`trackEvent`) is the single entry point for firing GA4 / Facebook Pixel events (page views, course views, scroll depth, lead capture, form submits, video engagement). Prefer the pre-built wrapper components in `components/analytics/` (`TrackedButton`/`EnrollButton`/`GetStartedButton`, `TrackedForm`/`WaitlistForm`/`ContactForm`, `TrackedVideo`) over calling `trackEvent` manually when a suitable wrapper exists. Google Tag Manager is only mounted when `NEXT_PUBLIC_VERCEL_ENV === "production"` (see `app/layout.tsx`). Full details in `ANALYTICS_GUIDE.md`.

### SEO

- Sitemaps are split across `app/sitemap.xml`, `app/sitemap-courses.xml`, `app/sitemap-pages.xml`, `app/sitemap-posts.xml`, and an `app/(sitemaps)/` route group — dynamically generated, covering all static pages plus per-course/blog entries. SEO metadata helpers are in `lib/seo.ts`.

### Path aliases

`@/*` maps to the repo root (`tsconfig.json`). Use `@/lib/...`, `@/components/...`, `@/hooks/...`, `@/store/...` etc. rather than relative paths across directories.
