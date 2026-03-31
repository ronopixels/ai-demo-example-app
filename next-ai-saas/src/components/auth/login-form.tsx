"use client";

import { useState, type FormEvent } from "react";
import { ButtonNative } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

export type LoginFormProps = {
  className?: string;
  /** Called with email/password for demo wiring; default prevents navigation */
  onSubmit?: (values: { email: string; password: string }) => void;
};

export function LoginForm({ className, onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-4", className)}>
      <div className="space-y-2">
        <label htmlFor="login-email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Email
        </label>
        <Input
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="login-password" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Password
        </label>
        <Input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <ButtonNative type="submit" className="w-full">
        Sign in
      </ButtonNative>
    </form>
  );
}
