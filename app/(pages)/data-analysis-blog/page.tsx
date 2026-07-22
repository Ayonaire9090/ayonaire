import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogBanner } from "@/components/sections/blog-banner";
import { AppBlogCard } from "@/components/app-blog-card";
import { AppSectionButton } from "@/components/app-section-button";
import { AppHeading } from "@/components/app-heading";
import { spectralSC } from "@/app/fonts";
import { formatDate } from "@/lib/utils";
import { blogs } from "@/constants/blog";
import { dataAnalysisArticle, relatedDataArticleSlugs } from "@/constants/data-analysis-article";
import { ReadingProgressBar } from "./__components/reading-progress-bar";
import { ArticleSidebar } from "./__components/article-sidebar";

function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    headings.push({ level, text, id });
  }

  return headings;
}

function createHeadingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const ArticleContent = ({ content }: { content: string }) => {
  const components = {
    h2: ({ children, ...props }: React.ComponentPropsWithoutRef<"h2">) => {
      const text = typeof children === "string" ? children : String(children);
      return (
        <h2 id={createHeadingId(text)} {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.ComponentPropsWithoutRef<"h3">) => {
      const text = typeof children === "string" ? children : String(children);
      return (
        <h3 id={createHeadingId(text)} {...props}>
          {children}
        </h3>
      );
    },
  };

  return (
    <article className="prose prose-lg max-w-none prose-spectral-headings prose-headings:text-[#141414] prose-h2:text-2xl prose-h2:lg:text-3xl prose-h2:mb-4 prose-h3:text-xl prose-h3:lg:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-[#141219] prose-ul:my-4 prose-li:my-1 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-table:text-sm prose-th:bg-gray-50 prose-hr:border-gray-200 prose-hr:my-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default function DataAnalysisArticlePage() {
  const article = dataAnalysisArticle;
  const headings = extractHeadings(article.content);
  const relatedBlogs = blogs.filter((b) => relatedDataArticleSlugs.includes(b.slug));

  return (
    <>
      <ReadingProgressBar />

      {/* Hero */}
      <div className="relative w-full min-h-[300px] lg:min-h-screen">
        <div className="absolute inset-0">
          <BlogBanner
            title={article.title}
            date={formatDate(article.createdAt)}
            author={article.author.name}
            authorImage={article.author.avatar}
            featuredImage={article.featuredImage}
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

      {/* Meta strip */}
      <section className="container pt-8 lg:pt-14">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            {formatDate(article.createdAt)}
          </span>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="container pt-8">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 lg:p-8">
          <h2 className={`text-lg lg:text-xl font-bold text-[#141219] mb-4 ${spectralSC.className}`}>
            Key Takeaways
          </h2>
          <ul className="space-y-3">
            {article.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-10 lg:py-16">
        <div className="flex gap-4 lg:gap-16">
          <aside className="shrink-0">
            <ArticleSidebar headings={headings} />
          </aside>

          <div className="hidden lg:block w-px bg-gray-200 shrink-0" />

          <main className="flex-1 min-w-0">
            <ArticleContent content={article.content} />
          </main>
        </div>
      </section>

      {/* Author Bio */}
      <section className="bg-linear-to-b from-[#FFE7DE] to-white py-12 lg:py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="relative w-28 h-28 lg:w-40 lg:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-sm mb-1">Written by</p>
              <h3 className={`text-xl lg:text-2xl font-bold text-[#141219] mb-1 ${spectralSC.className}`}>
                {article.author.name}
              </h3>
              <p className="text-primary font-medium mb-3">{article.author.role}</p>
              <p className="text-gray-700 leading-relaxed max-w-xl">
                Chidinma has spent the last eight years turning messy spreadsheets into decisions
                stakeholders actually trust, and now teaches that same process to Ayonaire students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 lg:py-24">
        <div className="rounded-3xl bg-linear-to-br from-[#141219] to-[#2b2430] p-8 lg:p-16 text-center relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <AppHeading
              headingLevel="h2"
              title="Ready to Turn Data Into Decisions?"
              className="text-white text-[27px] lg:text-[40px] leading-tight!"
            />
            <p className="text-gray-300 max-w-xl">
              Learn the full process — from SQL to dashboards — with hands-on projects you can put
              straight into a portfolio.
            </p>
            <Link
              href="/courses/data-analysis-tableau"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Explore Data Analytics with Tableau
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Reads */}
      {relatedBlogs.length > 0 && (
        <section className="bg-linear-to-b from-transparent to-[#FFE7DE] py-16 lg:py-24">
          <div className="container">
            <div className="flex flex-col justify-center items-center gap-3 mb-12">
              <AppSectionButton title="Related" />
              <AppHeading
                headingLevel="h2"
                title="You Might Also Like"
                className={`text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4 ${spectralSC.className}`}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedBlogs.map((blog) => (
                <div key={blog.id} className="flex justify-center">
                  <AppBlogCard
                    title={blog.title}
                    excerpt={blog.excerpt}
                    featuredImage={blog.featuredImage}
                    createdAt={blog.createdAt}
                    author={blog.author}
                    slug={blog.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
