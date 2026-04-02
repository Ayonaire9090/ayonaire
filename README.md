# Ayonaire - Build a Future-Proof Career in Tech

A comprehensive tech education platform built with Next.js 15, featuring advanced analytics and SEO optimization.

## 🚀 Analytics Implementation

- Google Tag Manager integration via @next/third-parties
- Facebook Pixel with event tracking capabilities
- Analytics infrastructure ready for:
  * Page views with route change detection
  * Scroll depth monitoring (25%, 50%, 75%, 100%)
  * Custom conversion events
  * Lead capture tracking

## 📊 SEO Enhancements

- Dynamic sitemap.xml generation with all static pages and 35 courses
- Robots.txt with proper crawling directives
- Complete OpenGraph implementation for social media sharing
- Twitter Cards with large image support
- Updated meta titles and descriptions for "Build a Future-Proof Career in Tech"
- PWA manifest.json with Ayonaire branding
- Viewport configuration optimized for mobile

## 🔧 Technical Features

- Safe event wrapper preventing dataLayer warnings
- Error handling for development environment
- Client/server component separation for Next.js App Router
- TypeScript type safety for all analytics functions
- Throttled scroll tracking to prevent performance issues

This implementation provides complete SEO optimization and analytics foundation ready for production use.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + Shadcn/ui
- **Analytics**: Google Tag Manager + Facebook Pixel
- **SEO**: Dynamic sitemap + robots.txt + OpenGraph
- **Fonts**: Satoshi (custom) + Spline Sans
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
