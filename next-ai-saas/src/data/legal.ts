/** Template terms & privacy — replace with counsel-approved copy before production. */

export const termsPageMeta = {
  title: "Terms of service",
  description: "Terms and conditions for using this template and demo site (placeholder).",
} as const;

export const privacyPageMeta = {
  title: "Privacy policy",
  description: "How this demo site handles information (placeholder — not legal advice).",
} as const;

export type LegalSection = { title: string; paragraphs: string[] };

export const termsSections: LegalSection[] = [
  {
    title: "Agreement",
    paragraphs: [
      "By accessing this demo site and template materials, you agree to these placeholder terms. Replace this document with terms appropriate for your product, jurisdiction, and business model before launch.",
      "Nexsas is distributed as a software template. Unless you purchase a separate agreement, no warranty is provided; use is at your own risk.",
    ],
  },
  {
    title: "License",
    paragraphs: [
      "Use of the template is governed by the license you obtained (for example, ThemeForest or a direct license from the author). Do not redistribute the source in violation of that license.",
    ],
  },
  {
    title: "Demo data",
    paragraphs: [
      "Sample metrics, names, and integrations are fictional. Do not rely on this content for compliance, security, or financial decisions.",
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: "Overview",
    paragraphs: [
      "This privacy policy is a placeholder for the Nexsas marketing demo. It does not describe a live data processing program. Replace with a policy that matches your actual collection, use, and sharing of personal data.",
    ],
  },
  {
    title: "Information you might collect",
    paragraphs: [
      "A production SaaS might collect account details, usage analytics, billing information, and support communications. This template does not include a backend; any forms are non-functional unless you wire them.",
    ],
  },
  {
    title: "Cookies and analytics",
    paragraphs: [
      "If you add analytics or advertising pixels, disclose them here and obtain consent as required by applicable law (e.g. GDPR, ePrivacy, CPRA).",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For questions about this placeholder policy, use your real contact details and data protection contact once the site is live.",
    ],
  },
];
