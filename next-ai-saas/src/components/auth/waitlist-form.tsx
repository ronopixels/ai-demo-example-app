"use client";

import { useState, type FormEvent } from "react";
import { ButtonNative } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

export type WaitlistFormProps = {
  className?: string;
};

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setJoined(true);
  }

  if (joined) {
    return (
      <p className={cn("text-center text-sm text-zinc-600 dark:text-zinc-400", className)}>
        You&apos;re on the list (demo). We&apos;ll notify you when we launch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-4", className)}>
      <div className="space-y-2">
        <label htmlFor="waitlist-email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Email
        </label>
        <Input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@company.com"
        />
      </div>
      <ButtonNative type="submit" className="w-full">
        Join waitlist
      </ButtonNative>
    </form>
  );
}
