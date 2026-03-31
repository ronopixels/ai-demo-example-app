/** Central route paths for links and redirects. Extend as pages are added. */
export const routes = {
  home: "/",
  marketing: {
    about: "/about",
    features: "/features",
    pricing: "/pricing",
    blog: "/blog",
    contact: "/contact",
    faq: "/faq",
    terms: "/terms",
    privacy: "/privacy",
  },
  auth: {
    signIn: "/sign-in",
    signUp: "/sign-up",
    forgotPassword: "/forgot-password",
  },
  dashboard: {
    root: "/dashboard",
    analytics: "/dashboard/analytics",
    aiAssistant: "/dashboard/ai-assistant",
    workflow: "/dashboard/workflow-automation",
    billing: "/dashboard/billing",
    settingsProfile: "/dashboard/settings/profile",
  },
} as const;
