/**
 * Global type scale for the data-analytics-masterclass-02 landing page.
 * Every section imports these instead of hard-coding text sizes, so the
 * whole page can be retuned from this one file.
 */
export const typeScale = {
  /** Hero heading only */
  h1: 'text-[28px] sm:text-[36px] md:text-[46px] lg:text-[54px]',
  /** All section headings */
  h2: 'text-[26px] md:text-[36px] lg:text-[40px]',
  /** Sub-block headings (Live Session Details, modal title) */
  h3: 'text-[22px] md:text-[28px]',
  /** Card / list item titles */
  cardTitle: 'text-[17px]',
  /** All body & supporting copy */
  body: 'text-[14px] md:text-[15px]',
  /** Testimonial quotes — one step above body for visibility */
  quote: 'text-[15px] md:text-[16px]',
  /** Meta text, small labels */
  caption: 'text-[12px] md:text-[13px]',
} as const;
