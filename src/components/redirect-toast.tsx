"use client";

import { consumeCookieByKey } from "@/actions/cookies";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function RedirectToast() {
  //TODO: Remove this when template.tsx issue is fixed
  const pathname = usePathname();

  useEffect(() => {
    const showCookieToast = async () => {
      const message = await consumeCookieByKey("toast");
      if (message) {
        toast.success(message);
      }
    };

    showCookieToast();
  }, [pathname]);

  return null;
}
