import { NextResponse } from "next/server";
import { readdirSync, statSync } from "fs";
import { join } from "path";

// Function to get blog posts dynamically
function getBlogPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";

  try {
    // Check if blog directory exists
    const blogDir = join(process.cwd(), "app/(pages)/blog");

    if (!statSync(blogDir).isDirectory()) {
      return [];
    }

    const posts = readdirSync(blogDir)
      .filter((file) => {
        const filePath = join(blogDir, file);
        return statSync(filePath).isDirectory();
      })
      .map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      }));

    return posts;
  } catch (error) {
    // If blog directory doesn't exist yet, return empty array
    return [];
  }
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";

  // Get dynamic blog posts
  const blogPosts = getBlogPosts();

  // Add static blog-related pages
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogPosts,
  ];

  // If no blog content exists, return empty sitemap
  if (blogPages.length === 1) {
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- No blog posts available yet -->
</urlset>`;

    return new NextResponse(emptySitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
