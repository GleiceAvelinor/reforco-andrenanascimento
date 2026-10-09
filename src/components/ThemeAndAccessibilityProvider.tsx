"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type FontSize = "small" | "normal" | "large" | "xlarge";
type Theme = "light" | "dark";

interface AccessibilityContextType {
  theme: Theme;
  toggleTheme: () => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  trackWhatsAppClick: (source: string, customMessage?: string) => void;
  whatsappUrl: string;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Acessei o site do Reforço André Nascimento e gostaria de mais informações sobre aulas e avaliação diagnóstica.";

export const WHATSAPP_PHONE = "5585985363010";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function ThemeAndAccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSizeState] = useState<FontSize>("normal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Initialize Theme from localStorage or prefers-color-scheme
    const savedTheme = localStorage.getItem("ran-theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    // 2. Initialize Font Size from localStorage
    const savedFontSize = localStorage.getItem("ran-font-size") as FontSize | null;
    if (savedFontSize) {
      setFontSizeState(savedFontSize);
      document.documentElement.setAttribute("data-font-size", savedFontSize);
    } else {
      document.documentElement.setAttribute("data-font-size", "normal");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("ran-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem("ran-font-size", size);
    document.documentElement.setAttribute("data-font-size", size);
  };

  const increaseFontSize = () => {
    if (fontSize === "small") setFontSize("normal");
    else if (fontSize === "normal") setFontSize("large");
    else if (fontSize === "large") setFontSize("xlarge");
  };

  const decreaseFontSize = () => {
    if (fontSize === "xlarge") setFontSize("large");
    else if (fontSize === "large") setFontSize("normal");
    else if (fontSize === "normal") setFontSize("small");
  };

  const resetFontSize = () => {
    setFontSize("normal");
  };

  const trackWhatsAppClick = (source: string, customMessage?: string) => {
    const targetUrl = getWhatsAppUrl(customMessage || DEFAULT_WHATSAPP_MESSAGE);

    // Google Analytics 4 tracking
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      try {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", {
          event_category: "Engagement",
          event_label: source,
          value: 1,
        });
      } catch (e) {
        console.debug("GA4 tracking error", e);
      }
    }

    // Meta Pixel tracking
    if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
      try {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead", {
          content_name: source,
        });
      } catch (e) {
        console.debug("Meta pixel tracking error", e);
      }
    }

    // Direct opening if used as a function trigger
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AccessibilityContext.Provider
      value={{
        theme,
        toggleTheme,
        fontSize,
        setFontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        trackWhatsAppClick,
        whatsappUrl: getWhatsAppUrl(),
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within ThemeAndAccessibilityProvider");
  }
  return context;
}
