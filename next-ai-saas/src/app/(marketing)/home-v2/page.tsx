import type { Metadata } from "next";
import { homeV2Meta } from "@/data/home-v2";
import { siteConfig } from "@/constants/site-config";
import { HomeV2 } from "@/sections/home/home-v2";

export const metadata: Metadata = {
  title: homeV2Meta.title,
  description: homeV2Meta.description,
  openGraph: {
    title: `${homeV2Meta.title} · ${siteConfig.name}`,
    description: homeV2Meta.description,
  },
};

export default function HomeV2Page() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <HomeV2 />
    </div>
  );
}
