"use client";

import { useState } from "react";
import { ButtonNative } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/cn";

export function ContactForm({ className }: { className?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("mx-auto max-w-lg space-y-5", className)}
      noValidate
    >
      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Name
        </label>
        <Input id="contact-name" name="name" autoComplete="name" placeholder="Alex Doe" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email
        </label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Message
        </label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          className="min-h-[120px] resize-y"
          required
        />
      </div>
      {sent ? (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-100">
          Thanks — this is a demo. Wire this form to your API or provider to send real messages.
        </p>
      ) : null}
      <ButtonNative type="submit" className="w-full sm:w-auto">
        Send message
      </ButtonNative>
    </form>
  );
}
