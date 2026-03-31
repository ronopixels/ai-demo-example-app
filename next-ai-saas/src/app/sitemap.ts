import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";
import { getAllBlogSlugs } from "@/data/blog";
import { dashboardNavItems } from "@/data/dashboard-nav";
import { routes } from "@/routes";

const weekly = { changeFrequency: "weekly" as const, lastModified: new Date() };

function priorityForPath(path: string): number {
  if (path === routes.home) return 1;
  if (path === routes.homeV2) return 0.95;
  if (path === routes.marketing.pricing) return 0.9;
  return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticPaths = [
    routes.home,
    routes.homeV2,
    routes.marketing.about,
    routes.marketing.features,
    routes.marketing.integrations,
    routes.marketing.pricing,
    routes.marketing.blog,
    routes.marketing.contact,
    routes.marketing.faq,
    routes.marketing.terms,
    routes.marketing.privacy,
  ];

  const authPaths = [
    routes.auth.signIn,
    routes.auth.signUp,
    routes.auth.forgotPassword,
    routes.auth.resetPassword,
    routes.auth.verifyEmail,
    routes.auth.twoFactor,
    routes.auth.comingSoon,
  ];

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      ...weekly,
      priority: priorityForPath(path),
    })),
    ...authPaths.map((path) => ({
      url: `${base}${path}`,
      ...weekly,
      priority: 0.65,
    })),
  ];

  for (const slug of getAllBlogSlugs()) {
    entries.push({
      url: `${base}${routes.marketing.blog}/${slug}`,
      ...weekly,
      priority: 0.75,
    });
  }

  for (const { href } of dashboardNavItems) {
    entries.push({
      url: `${base}${href}`,
      ...weekly,
      priority: 0.55,
    });
  }

  const dynamicDashboard = [
    ...["1", "2", "3"].map((id) => `${routes.dashboard.aiAssistant}/${id}`),
    ...["p1", "p2"].map((id) => `${routes.dashboard.prompts}/${id}`),
    ...["u1", "u2", "u3"].map((id) => `${routes.dashboard.team}/${id}`),
  ];
  for (const path of dynamicDashboard) {
    entries.push({
      url: `${base}${path}`,
      ...weekly,
      priority: 0.5,
    });
  }

  return entries;
}
