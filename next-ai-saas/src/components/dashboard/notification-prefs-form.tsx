"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const rows = [
  { id: "product", label: "Product updates", description: "New features and improvements." },
  { id: "billing", label: "Billing", description: "Invoices, receipts, and payment issues." },
  { id: "security", label: "Security alerts", description: "Logins, API keys, and policy changes." },
] as const;

export function NotificationPrefsForm() {
  const [state, setState] = useState<Record<string, boolean>>({
    product: true,
    billing: true,
    security: true,
  });

  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {rows.map((row) => (
        <li key={row.id} className="flex items-start justify-between gap-4 py-4 first:pt-0">
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{row.label}</p>
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{row.description}</p>
          </div>
          <Switch
            checked={state[row.id]}
            onCheckedChange={(checked) => setState((s) => ({ ...s, [row.id]: checked }))}
            aria-label={row.label}
          />
        </li>
      ))}
    </ul>
  );
}
