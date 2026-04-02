import { Header } from "@/components/layout/header";
import { BlogBanner } from "@/components/sections/blog-banner";
import { BlogCategory } from "@/components/sections/blog-category";
import { BlogHero } from "@/components/sections/blog-hero";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";

export default function BlogPage() {
  return (
    <>
      {/* Decoration Background */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          {/* Section Blog Hero */}
          <BlogHero />
        </div>
      </div>

      {/* Blog Banner */}
      <BlogBanner
        title="About Ayobami Awosanya, Founder of Ayonaire"
        date="31 May 2025"
        author="Ayobami Awosanya"
        authorImage="/assets/persons/mr-ayo.png"
        blogPath="/blog/about-ayobami-awosanya-founder-of-ayonaire"
      />

      {/* Blog Category */}
      <BlogCategory />

      {/* Footer With Logo Decoration */}
      <div className="relative w-full">
        {/* Logo positioned to overlap between content and footer */}
        <div className="absolute left-0 right-0 -top-16 lg:-top-48 z-10 w-full">
          <Image
            width={800}
            height={800}
            src="/assets/logos/full-logo-black.png"
            alt=""
            className="w-full h-auto object-contain opacity-5"
          />
        </div>
        <div className="absolute left-0 right-0 -top-16 lg:-top-48 z-10 w-full">
          <Image
            width={800}
            height={800}
            src="/assets/logos/full-logo-black.png"
            alt=""
            className="w-full h-auto object-contain opacity-5 invert"
          />
        </div>
        <div className="-z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
