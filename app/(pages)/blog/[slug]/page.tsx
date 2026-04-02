import { Header } from "@/components/layout/header";
import { BlogBanner } from "@/components/sections/blog-banner";
import { blogs } from "@/constants/blog";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import React from "react";
import { spectralSC } from "@/app/fonts";
import { AppBlogCard } from "@/components/app-blog-card";
import { AppSectionButton } from "@/components/app-section-button";
import { AppHeading } from "@/components/app-heading";
import { SocialSidebar } from "./__components/post-social-sidebar";
import { PostByFounder } from "./__components/post-by-founder";

// Helper function to extract headings from markdown content
function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Create slug for the heading ID
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    headings.push({ level, text, id });
  }

  return headings;
}

// Helper function to create heading ID from text
function createHeadingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// MDX/Markdown content component with styling - Spectral SC for headings only
const BlogContent = ({ content }: { content: string }) => {
  // Custom components to add IDs to headings
  const components = {
    h2: ({ children, ...props }: React.ComponentPropsWithoutRef<"h2">) => {
      const text = typeof children === "string" ? children : String(children);
      const id = createHeadingId(text);
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.ComponentPropsWithoutRef<"h3">) => {
      const text = typeof children === "string" ? children : String(children);
      const id = createHeadingId(text);
      return (
        <h3 id={id} {...props}>
          {children}
        </h3>
      );
    },
  };

  return (
    <article className="prose prose-lg max-w-none prose-spectral-headings prose-headings:text-[#141414] prose-h2:text-2xl prose-h2:lg:text-3xl  prose-h2:mb-4 prose-h3:text-xl prose-h3:lg:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-[#141219] prose-ul:my-4 prose-li:my-1 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-primary prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-hr:border-gray-200 prose-hr:my-8">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
};

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  // Find the blog post by slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs (same category, excluding current blog)
  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  // If not enough related blogs from same category, add from other categories
  const otherBlogs =
    relatedBlogs.length < 2
      ? blogs
          .filter((b) => b.slug !== blog.slug && !relatedBlogs.includes(b))
          .slice(0, 2 - relatedBlogs.length)
      : [];

  const recommendedBlogs = [...relatedBlogs, ...otherBlogs];

  return (
    <>
      {/* Hero Banner Section */}
      <div className="relative w-full min-h-[300px] lg:min-h-screen">
        <div className="absolute inset-0">
          <BlogBanner
            title={blog.title}
            date={formatDate(blog.createdAt)}
            author={blog.author.name}
            authorImage={blog.author.avatar}
            featuredImage={blog.featuredImage}
            showArrowButton={false}
            showFeaturedButton={false}
            className="h-[300px] lg:h-screen!"
            titleClassName="text-2xl! lg:text-5xl!"
          />
        </div>

        <section className="container absolute z-10">
          <Header />
        </section>
      </div>

      {/* Main Content Section */}
      <section className="container py-6 lg:py-20">
        <div className="flex gap-4 lg:gap-16">
          {/* Social Sidebar - Sticky - Now visible on all screens (handled internally) */}
          <aside className="shrink-0">
            <SocialSidebar headings={extractHeadings(blog.content)} />
          </aside>

          {/* Divider Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block w-px bg-gray-200 shrink-0" />

          {/* Blog Content */}
          <main className="flex-1 min-w-0">
            <BlogContent content={blog.content} />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-8">
                <h3
                  className={`text-lg font-medium text-[#141219] mb-3 ${spectralSC.className}`}
                >
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Post By Founder Section - Only shows for founder's blog post */}
      <PostByFounder />

      {/* You Might Also Like Section */}
      {recommendedBlogs.length > 0 && (
        <section className="bg-linear-to-b from-transparent to-[#FFE7DE] py-16 lg:py-24">
          <div className="container">
            {/* Section Heading */}
            <div className="flex flex-col justify-center items-center gap-3 mb-12">
              <AppSectionButton title="Like" />
              <AppHeading
                headingLevel="h2"
                title="You Might Also Like"
                className={`text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4 ${spectralSC.className}`}
              />
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {recommendedBlogs.map((relatedBlog) => (
                <div key={relatedBlog.id} className="flex justify-center">
                  <AppBlogCard
                    title={relatedBlog.title}
                    excerpt={relatedBlog.excerpt}
                    featuredImage={relatedBlog.featuredImage}
                    createdAt={relatedBlog.createdAt}
                    author={relatedBlog.author}
                    slug={relatedBlog.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
