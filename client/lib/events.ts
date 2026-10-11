import { sendGAEvent } from "@next/third-parties/google";
import { fbPixel } from "./analytics";

// Safe GA event wrapper to prevent dataLayer warnings
const safeSendGAEvent = (
  event: string,
  eventName: string,
  parameters?: any,
) => {
  if (typeof window === "undefined") return;

  // Ensure dataLayer exists before sending events
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
  }

  try {
    sendGAEvent(event, eventName, parameters);
  } catch (error) {
    // Silently handle GA errors in development
    if (process.env.NODE_ENV === "development") {
      console.debug("GA4 event skipped:", eventName, parameters);
    }
  }
};

// Event tracking utilities for Google Analytics 4 and Facebook Pixel
export const trackEvent = {
  // 1. PAGE VIEWS (Enhanced tracking for specific pages)
  pageView: (
    pageName: string,
    pageType: "homepage" | "course" | "blog" | "pricing" | "checkout" | "other",
    additionalData?: any,
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "page_view", {
      page_title: pageName,
      page_type: pageType,
      ...additionalData,
    });

    // Facebook Pixel
    fbPixel.track("PageView", {
      content_name: pageName,
      content_category: pageType,
      ...additionalData,
    });
  },

  // 2. COURSE INTEREST TRACKING
  courseView: (
    courseTitle: string,
    courseSlug: string,
    courseCategory: string,
    coursePrice?: string,
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "view_item", {
      item_id: courseSlug,
      item_name: courseTitle,
      item_category: courseCategory,
      value: coursePrice ? parseFloat(coursePrice) : undefined,
    });

    // Facebook Pixel
    fbPixel.track("ViewContent", {
      content_name: courseTitle,
      content_ids: [courseSlug],
      content_type: "course",
      content_category: courseCategory,
      value: coursePrice ? parseFloat(coursePrice) : undefined,
      currency: "USD",
    });
  },

  // 3. BUTTON CLICKS
  buttonClick: (
    buttonText: string,
    buttonType: "enroll" | "get_started" | "view_curriculum" | "other",
    location?: string,
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "click", {
      event_category: "Button",
      event_label: buttonText,
      button_type: buttonType,
      click_location: location,
    });

    // Facebook Pixel
    if (buttonType === "enroll") {
      fbPixel.track("InitiateCheckout", {
        content_name: buttonText,
        content_category: "course_enrollment",
      });
    } else {
      fbPixel.track("CustomEvent", {
        event_name: "ButtonClick",
        content_name: buttonText,
        content_category: buttonType,
      });
    }
  },

  // 4. SCROLL DEPTH TRACKING
  scrollDepth: (percentage: number, pageName?: string) => {
    // Only track meaningful scroll depths
    if (
      percentage === 25 ||
      percentage === 50 ||
      percentage === 75 ||
      percentage === 100
    ) {
      // Google Analytics
      safeSendGAEvent("event", "scroll", {
        event_category: "Engagement",
        event_label: `${percentage}%`,
        page_name: pageName,
        scroll_depth: percentage,
      });

      // Facebook Pixel (only for high engagement)
      /* 
      // Removed per cleanup request - shouldn't fire Lead on scroll
      if (percentage >= 50) {
        fbPixel.track("Lead", {
          content_name: `Scroll ${percentage}%`,
          content_category: "engagement",
        });
      }
      */
    }
  },

  // 5. VIDEO ENGAGEMENT
  videoPlay: (
    videoTitle: string,
    videoType: "intro" | "course_preview" | "testimonial" | "other",
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "video_start", {
      event_category: "Video",
      event_label: videoTitle,
      video_type: videoType,
    });

    // Facebook Pixel
    fbPixel.track("CustomEvent", {
      event_name: "VideoStart",
      content_name: videoTitle,
      content_category: "video_engagement",
    });
  },

  videoComplete: (
    videoTitle: string,
    videoType: "intro" | "course_preview" | "testimonial" | "other",
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "video_complete", {
      event_category: "Video",
      event_label: videoTitle,
      video_type: videoType,
    });

    // Facebook Pixel
    fbPixel.track("CustomEvent", {
      event_name: "VideoComplete",
      content_name: `${videoTitle} - Completed`,
      content_category: "video_completion",
    });
  },

  // 6. LEAD TRACKING (CRITICAL)
  leadCapture: (
    leadType: "email" | "phone" | "signup" | "waitlist",
    formName?: string,
    leadValue?: string,
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "generate_lead", {
      event_category: "Lead",
      event_label: leadType,
      form_name: formName,
      lead_type: leadType,
    });

    // Facebook Pixel
    fbPixel.track("Lead", {
      content_name: formName || leadType,
      content_category: leadType,
      value: 1,
      currency: "USD",
    });
  },

  formSubmit: (
    formName: string,
    formType: "contact" | "waitlist" | "enrollment" | "survey",
    success: boolean = true,
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "form_submit", {
      event_category: "Form",
      event_label: formName,
      form_type: formType,
      success: success,
    });

    // Facebook Pixel
    if (success) {
      fbPixel.track("CompleteRegistration", {
        content_name: formName,
        content_category: formType,
        status: "completed",
      });
    }
  },

  // 7. ENROLLMENT TRACKING
  enrollmentStart: (
    courseTitle: string,
    courseSlug: string,
    coursePrice?: string,
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "begin_checkout", {
      event_category: "Ecommerce",
      item_id: courseSlug,
      item_name: courseTitle,
      value: coursePrice ? parseFloat(coursePrice) : undefined,
      currency: "USD",
    });

    // Facebook Pixel
    fbPixel.track("InitiateCheckout", {
      content_name: courseTitle,
      content_ids: [courseSlug],
      content_type: "course",
      value: coursePrice ? parseFloat(coursePrice) : undefined,
      currency: "USD",
    });
  },

  enrollmentComplete: (
    courseTitle: string,
    courseSlug: string,
    coursePrice: string,
    orderId?: string,
  ) => {
    // Google Analytics
    safeSendGAEvent("event", "purchase", {
      event_category: "Ecommerce",
      transaction_id: orderId,
      item_id: courseSlug,
      item_name: courseTitle,
      value: parseFloat(coursePrice),
      currency: "USD",
    });

    // Facebook Pixel
    fbPixel.track("Purchase", {
      content_name: courseTitle,
      content_ids: [courseSlug],
      content_type: "course",
      value: parseFloat(coursePrice),
      currency: "USD",
      order_id: orderId,
    });
  },

  // 8. CUSTOM EVENTS
  customEvent: (
    eventName: string,
    category: string,
    label?: string,
    value?: number,
    customParams?: any,
  ) => {
    // Google Analytics
    safeSendGAEvent("event", eventName, {
      event_category: category,
      event_label: label,
      value: value,
      ...customParams,
    });

    // Facebook Pixel
    fbPixel.track("CustomEvent", {
      event: eventName,
      event_name: eventName,
      content_category: category,
      content_name: label,
      value: value,
      ...customParams,
    });
  },
};

// Helper function to get page type based on pathname
export const getPageType = (
  pathname: string,
): "homepage" | "course" | "pricing" | "checkout" | "other" => {
  if (pathname === "/") return "homepage";
  if (pathname.startsWith("/courses/") || pathname.startsWith("/program/"))
    return "course";
  if (pathname.includes("pricing")) return "pricing";
  if (pathname.includes("checkout")) return "checkout";
  return "other";
};
