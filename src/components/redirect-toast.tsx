"use client";

import { consumeCookieByKey } from "@/actions/cookies";
import { useEffect } from "react";
import { toast } from "sonner";

export function RedirectToast() {
  useEffect(() => {
    const showCookieToast = async () => {
      const message = await consumeCookieByKey("toast");
      if (message) {
        toast.success(message);
      }
    };

    showCookieToast();
  }, []);

  return null;
}
