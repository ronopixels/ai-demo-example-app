"use client";

import { useState, type FormEvent } from "react";
import { ButtonNative } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

export type ResetPasswordFormProps = {
  className?: string;
  onSubmit?: (password: string) => void;
};

export function ResetPasswordForm({ className, onSubmit }: ResetPasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirm) return;
    onSubmit?.(password);
    setDone(true);
  }

  if (done) {
    return (
      <p className={cn("text-center text-sm text-zinc-600 dark:text-zinc-400", className)}>
        Password updated (demo). Continue to sign in.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-4", className)}>
      <div className="space-y-2">
        <label htmlFor="reset-password" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          New password
        </label>
        <Input
          id="reset-password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="reset-confirm" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Confirm new password
        </label>
        <Input
          id="reset-confirm"
          name="confirm"
          type="password"
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
      </div>
      {password && confirm && password !== confirm ? (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          Passwords do not match.
        </p>
      ) : null}
      <ButtonNative type="submit" className="w-full">
        Update password
      </ButtonNative>
    </form>
  );
}
