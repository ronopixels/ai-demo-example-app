"use client";

import { useState, type FormEvent } from "react";
import { ButtonNative } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

export type TwoFactorFormProps = {
  className?: string;
  onSubmit?: (code: string) => void;
};

export function TwoFactorForm({ className, onSubmit }: TwoFactorFormProps) {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.(code);
    setVerified(true);
  }

  if (verified) {
    return (
      <p className={cn("text-center text-sm text-zinc-600 dark:text-zinc-400", className)}>
        Code accepted (demo). Redirect to dashboard when you wire your auth flow.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-4", className)}>
      <div className="space-y-2">
        <label htmlFor="2fa-code" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Authentication code
        </label>
        <Input
          id="2fa-code"
          name="code"
          inputMode="numeric"
          autoComplete="one-time-code"
          placeholder="000000"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
          required
          maxLength={6}
          className="text-center font-mono text-lg tracking-[0.3em]"
        />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Enter the 6-digit code from your authenticator app.</p>
      </div>
      <ButtonNative type="submit" className="w-full" disabled={code.length < 6}>
        Verify
      </ButtonNative>
    </form>
  );
}
