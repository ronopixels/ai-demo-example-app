import type { Metadata } from "next";
import { homeV1Meta } from "@/data/home-v1";
import { siteConfig } from "@/constants/site-config";
import { HomeV1 } from "@/sections/home/home-v1";

export const metadata: Metadata = {
  title: homeV1Meta.title,
  description: homeV1Meta.description,
  openGraph: {
    title: `${homeV1Meta.title} · ${siteConfig.name}`,
    description: homeV1Meta.description,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <HomeV1 />
    </div>
  );
}
