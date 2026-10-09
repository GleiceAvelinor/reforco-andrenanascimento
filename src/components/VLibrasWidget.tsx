"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function VLibrasWidget() {
  useEffect(() => {
    // When window.VLibras is loaded, initialize if not already initialized
    const initVLibras = () => {
      if (
        typeof window !== "undefined" &&
        (window as unknown as { VLibras?: { Widget: new (url: string) => unknown } }).VLibras &&
        !(window as unknown as { __vlibras_init?: boolean }).__vlibras_init
      ) {
        try {
          new (window as unknown as { VLibras: { Widget: new (url: string) => unknown } }).VLibras.Widget(
            "https://vlibras.gov.br/app"
          );
          (window as unknown as { __vlibras_init?: boolean }).__vlibras_init = true;
        } catch (e) {
          console.debug("VLibras init info", e);
        }
      }
    };

    const timer = setTimeout(initVLibras, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div vw class="enabled" aria-hidden="true">
              <div vw-access-button class="active"></div>
              <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
              </div>
            </div>
          `,
        }}
      />
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (
            typeof window !== "undefined" &&
            (window as unknown as { VLibras?: { Widget: new (url: string) => unknown } }).VLibras &&
            !(window as unknown as { __vlibras_init?: boolean }).__vlibras_init
          ) {
            try {
              new (window as unknown as { VLibras: { Widget: new (url: string) => unknown } }).VLibras.Widget(
                "https://vlibras.gov.br/app"
              );
              (window as unknown as { __vlibras_init?: boolean }).__vlibras_init = true;
            } catch (e) {
              console.debug("VLibras load info", e);
            }
          }
        }}
      />
    </>
  );
}
