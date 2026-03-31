"use client";

import { useState, type FormEvent } from "react";
import { ButtonNative } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

export type RegisterFormProps = {
  className?: string;
  onSubmit?: (values: { name: string; email: string; password: string }) => void;
};

export function RegisterForm({ className, onSubmit }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirm) return;
    onSubmit?.({ name, email, password });
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-4", className)}>
      <div className="space-y-2">
        <label htmlFor="register-name" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Name <span className="font-normal text-zinc-500">(optional)</span>
        </label>
        <Input
          id="register-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="register-email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Email
        </label>
        <Input
          id="register-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="register-password" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Password
        </label>
        <Input
          id="register-password"
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
        <label htmlFor="register-confirm" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Confirm password
        </label>
        <Input
          id="register-confirm"
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
        Create account
      </ButtonNative>
    </form>
  );
}
