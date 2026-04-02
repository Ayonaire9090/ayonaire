"use client";

import { useState, useMemo } from "react";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";
import { AppActionButton } from "../app-action-button";
import { AppBlogCard } from "../app-blog-card";
import { blogs, blogCategories } from "@/constants/blog";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const BlogCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Filter blogs based on category and search
  const filteredBlogs = useMemo(() => {
    let result = [...blogs];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((blog) => blog.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  // Category tabs with counts
  const categoryTabs = useMemo(() => {
    const allCount = blogs.length;
    const tabs = [
      { id: "all", name: `All Posts`, count: allCount },
      ...blogCategories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        count: blogs.filter((b) => b.category === cat.id).length,
      })),
    ];
    return tabs.filter((tab) => tab.count > 0 || tab.id === "all");
  }, []);

  return (
    <section className="container section-spacing">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 mb-8 lg:mb-12">
        <AppSectionButton title="Category" />
        <AppHeading
          headingLevel="h2"
          title="Browse by Category"
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center lg:w-[70%] mx-auto"
        />
      </div>

      {/* Filter Bar - Mobile */}
      <div className="lg:hidden mb-8">
        <div className="flex items-center gap-3 bg-gray-100 rounded-2xl  p-4">
          {/* Filter Button */}
          <AppActionButton
            variant="fading"
            className="flex items-center gap-2 px-4 py-2 text-sm shrink-0 bg-linear-to-r from-[#F67219]  to-[#FFDCC4] rounded!"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </AppActionButton>

          {/* Categories - Horizontal Scroll */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 pr-2">
              {categoryTabs.slice(0, 3).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={cn(
                    "whitespace-nowrap px-1 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    selectedCategory === tab.id
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {tab.name}{" "}
                  {tab.id === "all" && (
                    <span className="text-primary font-bold">{tab.count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          {/* <div className="flex items-center gap-1 shrink-0">
            <button className="p-1 text-primary hover:bg-primary/10 rounded-full transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 text-primary hover:bg-primary/10 rounded-full transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div> */}

          {/* Search Icon */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors shrink-0"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Search Input */}
        {showSearch && (
          <div className="mt-3">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        )}
      </div>

      {/* Filter Bar - Desktop */}
      <div className="hidden lg:flex items-center gap-4 bg-gray-100 rounded-xl border border-gray-100 p-4 mb-12">
        {/* Filter Button */}
        <AppActionButton
          variant="fading"
          className="text-lg! flex items-center gap-2 px-5! py-6! bg-linear-to-r from-[#F67219]  to-[#FFDCC4] rounded!"
        >
          <SlidersHorizontal strokeWidth={1.5} className="w-6! h-6!" />
          <span>Filter</span>
        </AppActionButton>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Category Tabs */}
        <div className="flex-1 flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={cn(
                "whitespace-nowrap px-4 py-2 text-base font-semibold rounded-lg transition-all duration-200",
                selectedCategory === tab.id
                  ? "text-primary"
                  : "text-[#141414] hover:text-primary"
              )}
            >
              {tab.name}{" "}
              {tab.id === "all" && (
                <span className="text-primary font-bold">{tab.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* Search Button/Input */}
        <div className="flex items-center gap-2 shrink-0">
          {showSearch ? (
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              autoFocus
            />
          ) : null}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-3 text-primary hover:bg-primary/10 rounded-full transition-colors"
          >
            <Search className="w-6! h-6!" />
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredBlogs.map((blog) => (
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

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-gray-500 text-lg">
            No blogs found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 text-primary font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};
