"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { GTM_ID, gtmScript } from "../gtm-script";

export default function GTM() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.dataLayer && window.dataLayer.length > 0) {
      return;
    }

    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Delay GTM by 3s to reduce impact on LCP.
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {shouldLoad ? (
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: gtmScript,
          }}
        />
      ) : null}

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        />
      </noscript>
    </>
  );
}
