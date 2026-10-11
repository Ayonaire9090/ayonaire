import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateSEO({
  title,
  description,
  keywords,
  image,
  noIndex = false,
  canonical,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";
  const fullTitle = title.includes("Ayonaire") ? title : `${title} | Ayonaire`;
  const defaultImage = `${baseUrl}/assets/logos/full-logo-dark.png`;
  const seoImage = image || defaultImage;

  return {
    title: fullTitle,
    description,
    keywords,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      siteName: "Ayonaire",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: "@ayonaire",
      creator: "@ayonaire",
      images: [seoImage],
    },
    alternates: canonical
      ? {
          canonical: canonical.startsWith("http")
            ? canonical
            : `${baseUrl}${canonical}`,
        }
      : undefined,
  };
}

export function generateCourseSchema(course: any, category: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Ayonaire",
      url: baseUrl,
    },
    courseCode: course.slug,
    educationalLevel: "Professional",
    learningResourceType: "Course",
    inLanguage: "en",
    teaches: course.whyJoin?.keyFeatures || [],
    about: {
      "@type": "Thing",
      name: category,
    },
    offers: {
      "@type": "Offer",
      category: "Education",
      priceCurrency: "USD",
    },
    image: course.imageSrc
      ? `${baseUrl}${course.imageSrc}`
      : `${baseUrl}/assets/logos/full-logo-dark.png`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating,
      ratingCount: course.reviewCount || 10,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${baseUrl}${item.item}`,
    })),
  };
}

export function generateBlogPostingSchema(post: any) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? `${baseUrl}${post.coverImage}` : undefined,
    author: {
      "@type": "Person",
      name: post.author || "Ayonaire Team",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";

  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    name: "Ayonaire",
    url: baseUrl,
    description:
      "Transform your career with comprehensive tech training programs in AI, Data Science, Software Engineering, and more.",
    logo: `${baseUrl}/assets/logos/full-logo-dark.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-906-783-5701",
      contactType: "Customer Service",
      email: "info@ayonaire.com",
    },
    sameAs: [
      "https://www.facebook.com/845802808620867",
      "https://www.linkedin.com/company/ayonaire-academy/",
      "https://www.instagram.com/ayonaire.academy",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1, Engr Olajide Kareem Street, Iya-Alagbo, Awoyaya",
      addressLocality: "Ibeju-Lekki",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
  };
}

export function generateSchoolOfAISchema() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com";

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${baseUrl}/schools/ai#course`,
    name: "School of AI - Artificial Intelligence Bootcamp",
    description:
      "Comprehensive AI training program covering machine learning, deep learning, generative AI, and agentic AI. Learn from industry experts and work on real-world projects.",
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
    },
    educationalLevel: "Beginner to Advanced",
    about: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Data Science",
      "Python Programming",
    ],
    offers: {
      "@type": "Offer",
      category: "Educational Course",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/schools/ai`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      instructor: {
        "@type": "Person",
        name: "AI Industry Experts",
      },
    },
    teaches: [
      "Machine Learning algorithms and implementation",
      "Deep Learning with neural networks",
      "Generative AI and large language models",
      "Computer Vision and image processing",
      "Natural Language Processing",
      "AI project development and deployment",
    ],
  };
}
