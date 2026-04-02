import { courses } from "@/constants";

// Helper function to format date
export const formatCohortDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Find course by slug - uses the slug property directly from course data
export const findCourseBySlug = (slug: string) => {
  for (const category of courses) {
    const course = category.courses.find((c) => c.slug === slug);
    if (course) {
      return { ...course, category: category.category };
    }
  }
  return null;
};

/**
 * Convert plural profession name to singular form
 * Handles common patterns in peopleInField values
 */
export const getSingular = (plural: string): string => {
  if (!plural) return plural;

  // Handle specific cases that don't follow simple 's' removal
  const specialCases: Record<string, string> = {
    "Data Scientists": "Data Scientist",
    "Data Analysts": "Data Analyst",
    "BI Analysts": "BI Analyst",
    "Business Intelligence Analysts": "Business Intelligence Analyst",
    "NLP Experts": "NLP Expert",
    "AI Research Engineers": "AI Research Engineer",
  };

  if (specialCases[plural]) {
    return specialCases[plural];
  }

  // Default: remove trailing 's' if present
  return plural.endsWith("s") ? plural.slice(0, -1) : plural;
};

/**
 * Determine the correct article ("a" or "an") based on the first sound
 * Returns "an" for words starting with vowel sounds, "a" otherwise
 */
export const getArticle = (word: string): "a" | "an" => {
  if (!word) return "a";

  const firstLetter = word.trim().charAt(0).toLowerCase();

  // Words starting with vowels typically use "an"
  // Exception: words with silent 'h' or vowel sounds
  const vowels = ["a", "e", "i", "o", "u"];

  // Special cases for acronyms that start with vowel sounds
  // e.g., "AI" is pronounced "ay-eye" so uses "an"
  const vowelSoundAcronyms = ["ai", "ml", "nlp"];
  const firstTwoChars = word.trim().slice(0, 2).toLowerCase();

  if (vowelSoundAcronyms.includes(firstTwoChars)) {
    return "an";
  }

  return vowels.includes(firstLetter) ? "an" : "a";
};

/**
 * Get singular form with correct article
 * e.g., "AI Engineers" -> "an AI Engineer"
 * e.g., "Data Scientists" -> "a Data Scientist"
 */
export const getSingularWithArticle = (
  plural: string,
  capitalize: boolean = false
): string => {
  const singular = getSingular(plural);
  const article = getArticle(singular);
  const result = `${article} ${singular}`;

  return capitalize ? result.charAt(0).toUpperCase() + result.slice(1) : result;
};
