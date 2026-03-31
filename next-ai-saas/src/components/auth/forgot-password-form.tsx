"use client";

import { useState, type FormEvent } from "react";
import { ButtonNative } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

export type ForgotPasswordFormProps = {
  className?: string;
  onSubmit?: (email: string) => void;
};

export function ForgotPasswordForm({ className, onSubmit }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.(email);
    setSent(true);
  }

  if (sent) {
    return (
      <div className={cn("rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/40", className)}>
        <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Check your email</p>
        <p className="mt-2 text-sm text-emerald-800/90 dark:text-emerald-200/90">
          If an account exists for <span className="font-medium">{email}</span>, we sent a reset link (demo — no
          email is sent).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-4", className)}>
      <div className="space-y-2">
        <label htmlFor="forgot-email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Email
        </label>
        <Input
          id="forgot-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <ButtonNative type="submit" className="w-full">
        Send reset link
      </ButtonNative>
    </form>
  );
}
