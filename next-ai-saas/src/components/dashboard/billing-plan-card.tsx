import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export type BillingPlanCardProps = {
  planName: string;
  priceLabel: string;
  renewalLabel: string;
  status?: "active" | "trialing" | "past_due";
  manageBillingHref: string;
  className?: string;
};

const statusVariant: Record<NonNullable<BillingPlanCardProps["status"]>, "success" | "secondary" | "destructive"> = {
  active: "success",
  trialing: "secondary",
  past_due: "destructive",
};

const statusLabel: Record<NonNullable<BillingPlanCardProps["status"]>, string> = {
  active: "active",
  trialing: "trialing",
  past_due: "past due",
};

export function BillingPlanCard({
  planName,
  priceLabel,
  renewalLabel,
  status = "active",
  manageBillingHref,
  className,
}: BillingPlanCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
        <div>
          <CardTitle className="text-lg">{planName}</CardTitle>
          <CardDescription>{renewalLabel}</CardDescription>
        </div>
        <Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>
      </CardHeader>
      <CardContent className="flex flex-wrap items-end justify-between gap-4">
        <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{priceLabel}</p>
        <Button href={manageBillingHref} variant="outline" className="shrink-0">
          Manage billing
        </Button>
      </CardContent>
    </Card>
  );
}
