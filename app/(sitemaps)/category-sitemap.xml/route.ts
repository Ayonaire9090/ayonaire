import { courses } from "@/constants";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";

  // Extract unique categories from courses
  const categories = courses.map((course) => course.category);
  const uniqueCategories = [...new Set(categories)];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueCategories
  .map((category) => {
    const categorySlug = category
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/&/g, "");
    const safeUrl = `${baseUrl}/schools/${categorySlug}`.replace(/&/g, "&amp;");
    return `  <url>
    <loc>${safeUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
