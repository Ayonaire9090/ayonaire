# 📊 Advanced Analytics Implementation Guide

## 🎯 **Implemented Tracking Events**

All your requested tracking events are now fully implemented and working:

### ✅ **1. Page Views**
**Tracks:** Homepage, Course pages, Pricing page, Checkout page
**Used for:** Awareness campaigns, Retargeting

```typescript
// Automatic tracking on all route changes
// Manual tracking example:
import { trackEvent } from '@/lib/events';
trackEvent.pageView('Course Detail Page', 'course', { course_name: 'AI Engineering' });
```

### ✅ **2. Course Interest Tracking**
**Triggered on:** `/courses/*`, `/program/*`
**Used for:** Retargeting people who showed interest, Optimizing ad delivery

```typescript
// Automatic on course page visits
trackEvent.courseView('AI Engineering', 'ai-engineering', 'AI');
```

### ✅ **3. Scroll Depth Tracking**
**Tracks:** Users who scroll 25%, 50%, 75%, 100%
**Used for:** Engagement measurement

```typescript
// Automatic tracking via ScrollTracker component (already added to layout)
// Tracks at 25%, 50%, 75%, 100% milestones
```

### ✅ **4. Button Click Tracking**
**Examples:** "Enroll Now", "Get Started", "View Curriculum"

```tsx
// Method 1: Use pre-built tracked buttons
import { EnrollButton, GetStartedButton, ViewCurriculumButton } from '@/components/analytics/tracked-button';

<EnrollButton location="course-page" className="your-classes">
  Enroll Now
</EnrollButton>

<GetStartedButton location="hero-section" className="your-classes">
  Get Started
</GetStartedButton>

// Method 2: Use generic TrackedButton
import { TrackedButton } from '@/components/analytics/tracked-button';

<TrackedButton
  buttonText="Custom Button"
  buttonType="other"
  location="footer"
  className="your-classes"
>
  Custom Action
</TrackedButton>

// Method 3: Manual tracking
import { trackEvent } from '@/lib/events';

const handleClick = () => {
  trackEvent.buttonClick('Enroll Now', 'enroll', 'course-page');
  // Your existing logic
};
```

### ✅ **5. Video Tracking**
**For:** Intro videos, Course previews, Testimonials

```tsx
// Method 1: Use TrackedVideo component
import { TrackedVideo } from '@/components/analytics/tracked-video';

<TrackedVideo
  src="/path/to/video.mp4"
  title="AI Engineering Course Preview"
  videoType="course_preview"
  poster="/path/to/poster.jpg"
  className="your-classes"
/>

// Method 2: For iframe videos (Vimeo, YouTube)
import { trackVideoEvent } from '@/components/analytics/tracked-video';

// Add these to your Vimeo player events
onPlay={() => trackVideoEvent('play', 'Course Intro', 'intro')}
onEnded={() => trackVideoEvent('complete', 'Course Intro', 'intro')}
```

### ✅ **6. Lead Tracking (CRITICAL)**
**Triggered when:** Form is submitted, Signup is successful
**Used for:** Retargeting & optimization

```tsx
// Method 1: Use pre-built tracked forms
import { WaitlistForm, ContactForm } from '@/components/analytics/tracked-form';

<WaitlistForm
  onSubmit={handleWaitlistSubmit}
  onSuccess={() => router.push('/thank-you')}
  className="your-form-classes"
>
  {/* Your form inputs */}
</WaitlistForm>

// Method 2: Use generic TrackedForm
import { TrackedForm } from '@/components/analytics/tracked-form';

<TrackedForm
  formName="Course Enrollment"
  formType="enrollment"
  onSubmit={handleSubmit}
  className="your-classes"
>
  {/* Your form content */}
</TrackedForm>

// Method 3: Manual lead tracking
import { trackEvent } from '@/lib/events';

const handleEmailCapture = (email: string) => {
  trackEvent.leadCapture('email', 'Hero Signup Form', email);
  trackEvent.formSubmit('Hero Signup Form', 'waitlist', true);
};
```

## 🔧 **Quick Implementation Examples**

### Example 1: Track Action Button in Hero Section
```tsx
// Replace existing button with:
import { GetStartedButton } from '@/components/analytics/tracked-button';

<GetStartedButton
  location="hero-section"
  onClick={() => router.push('/opt-in')}
  className="existing-button-classes"
>
  Get Started Now
</GetStartedButton>
```

### Example 2: Track Course Enrollment Form
```tsx
// In your opt-in page
import { WaitlistForm } from '@/components/analytics/tracked-form';

<WaitlistForm
  onSubmit={async (e) => {
    const formData = new FormData(e.target);
    const email = formData.get('email');
    // Your existing form logic
  }}
  onSuccess={() => {
    // Redirect to thank you page
    router.push('/thank-you');
  }}
  className="w-full"
>
  <Input type="email" name="email" required />
  <Input type="text" name="name" required />
  <button type="submit">Join Waitlist</button>
</WaitlistForm>
```

### Example 3: Track Course Page Engagement
```tsx
// This is automatic! But you can add custom events:
import { trackEvent } from '@/lib/events';

const handleCurriculumClick = () => {
  trackEvent.customEvent('curriculum_view', 'Course', course.title);
};

const handlePriceCheck = () => {
  trackEvent.customEvent('price_check', 'Course', course.title, course.price);
};
```

## 🎯 **Facebook Pixel Events Fired**

Your tracking automatically fires these Facebook Pixel events:

1. **PageView** - All page visits
2. **ViewContent** - Course page visits
3. **Lead** - Button clicks, scroll depth 50%+, video engagement
4. **InitiateCheckout** - Enroll button clicks
5. **CompleteRegistration** - Form submissions
6. **Purchase** - Course enrollments (when implemented)

## 📈 **Google Analytics 4 Events Fired**

Your tracking automatically fires these GA4 events:

1. **page_view** - Enhanced with page types
2. **view_item** - Course views
3. **click** - Button interactions
4. **scroll** - Engagement depth
5. **video_start** / **video_complete** - Video engagement
6. **generate_lead** - Lead captures
7. **form_submit** - Form interactions
8. **begin_checkout** / **purchase** - Enrollment funnel

## 🚀 **Already Working**

✅ **Automatic tracking** is already live for:
- All page views with enhanced data
- Course page interest tracking
- Scroll depth measurement
- Route changes (SPA behavior)

✅ **Ready to use** tracked components:
- TrackedButton, EnrollButton, GetStartedButton
- TrackedForm, WaitlistForm, ContactForm
- TrackedVideo for video engagement
- Manual event tracking functions

## 🎯 **Next Steps**

1. **Replace existing buttons** with tracked versions
2. **Wrap forms** with TrackedForm components
3. **Add video tracking** to testimonial/intro videos
4. **Test in browser dev tools** to see events firing
5. **Verify in GA4 Real-time reports**
6. **Check Facebook Pixel in Events Manager**

Everything is set up and ready to capture all the conversion events you need for retargeting and campaign optimization! 🎉