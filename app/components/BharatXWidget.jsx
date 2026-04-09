"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";

/** Off by default. Set `NEXT_PUBLIC_BHARATX_WIDGET_ENABLED=true` in `.env` / Vercel to load the widget. */
const BHARATX_WIDGET_ENABLED =
  process.env.NEXT_PUBLIC_BHARATX_WIDGET_ENABLED === "true";

/**
 * BharatX embed — equivalent to:
 * <script src="…/widget/v1.js" defer data-api-base="…"></script>
 * <script>
 *   document.addEventListener('DOMContentLoaded', function () {
 *     if (window.BharatXWidget && window.BharatXWidget.init) {
 *       window.BharatXWidget.init({ siteKey, selector: 'main' });
 *     }
 *   });
 * </script>
 *
 * In the App Router, DOMContentLoaded may have already fired before this runs,
 * so we call init from the script onLoad handler (and retry briefly if needed).
 */
const API_BASE =
  process.env.NEXT_PUBLIC_BHARATX_API_BASE ?? "http://localhost:3000";
const SITE_KEY =
  process.env.NEXT_PUBLIC_BHARATX_SITE_KEY ??
  "bxw-embed-7c2a9f1e-b4d3-4e8a-9c2f-toto-2026";

const base = API_BASE.replace(/\/$/, "");
const scriptSrc = `${base}/widget/v1.js`;

export default function BharatXWidgetScripts() {
  const didInit = useRef(false);

  const initFromSnippet = useCallback(() => {
    if (didInit.current || typeof window === "undefined") return true;
    if (window.BharatXWidget && window.BharatXWidget.init) {
      window.BharatXWidget.init({
        siteKey: SITE_KEY,
        selector: "main",
      });
      didInit.current = true;
      return true;
    }
    return false;
  }, []);

  const onWidgetLoad = useCallback(() => {
    if (initFromSnippet()) return;
    let attempts = 0;
    const maxAttempts = 80;
    const id = window.setInterval(() => {
      if (initFromSnippet() || ++attempts >= maxAttempts) {
        window.clearInterval(id);
      }
    }, 50);
  }, [initFromSnippet]);

  if (!BHARATX_WIDGET_ENABLED) {
    return null;
  }

  return (
    <Script
      id="bharatx-widget-v1"
      src={scriptSrc}
      strategy="afterInteractive"
      defer
      data-api-base={base}
      onLoad={onWidgetLoad}
    />
  );
}
