"use client";

import { useState } from "react";
import { ButtonNative } from "@/components/ui/button";

export function VerifyEmailActions() {
  const [resent, setResent] = useState(false);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <ButtonNative type="button" onClick={() => setResent(true)} disabled={resent}>
        {resent ? "Link sent (demo)" : "Resend verification email"}
      </ButtonNative>
    </div>
  );
}
