declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Facebook Pixel utility functions
export const fbPixel = {
  init: (pixelId: string) => {
    if (typeof window === "undefined") return;

    // Facebook Pixel Code - exact implementation from your provided code
    (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js",
      undefined,
      undefined,
      undefined
    );

    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
  },

  track: (event: string, parameters?: any) => {
    if (typeof window === "undefined") return;
    if (window.fbq) {
      try {
        window.fbq("track", event, parameters);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.debug('Facebook Pixel event skipped:', event, parameters);
        }
      }
    }
  },

  pageView: () => {
    if (typeof window === "undefined") return;
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  },
};

// Google Analytics utility functions (handled by @next/third-parties/google)
export const gtag = {
  event: (action: string, parameters?: any) => {
    if (typeof window === "undefined") return;
    // @ts-ignore
    if (window.gtag) {
      window.gtag("event", action, parameters);
    }
  },
};
