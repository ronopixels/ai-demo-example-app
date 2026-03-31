/** Central route paths for links and redirects. Extend as pages are added. */
export const routes = {
  home: "/",
  homeV2: "/home-v2",
  marketing: {
    about: "/about",
    features: "/features",
    integrations: "/integrations",
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
    resetPassword: "/reset-password",
    verifyEmail: "/verify-email",
    twoFactor: "/2fa",
    comingSoon: "/coming-soon",
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
