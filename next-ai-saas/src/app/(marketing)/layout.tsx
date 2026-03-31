import { MainFooter } from "@/components/layout/main-footer";
import { MainNavbar } from "@/components/layout/main-navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <MainNavbar />
      <div className="flex flex-1 flex-col">{children}</div>
      <MainFooter />
    </div>
  );
}
