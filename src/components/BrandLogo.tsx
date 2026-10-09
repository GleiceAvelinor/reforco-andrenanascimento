"use client";

import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "default" | "onDark";
}

export default function BrandLogo({
  className = "",
  size = "md",
  showText = true,
  variant = "default",
}: BrandLogoProps) {
  const iconSizes = {
    sm: "w-9 h-11",
    md: "w-12 h-14",
    lg: "w-20 h-24",
  };

  const textSizes = {
    sm: {
      sub: "text-[9px] tracking-wider",
      main: "text-base",
    },
    md: {
      sub: "text-[10px] sm:text-[11px] tracking-widest",
      main: "text-lg sm:text-xl",
    },
    lg: {
      sub: "text-xs sm:text-sm tracking-widest",
      main: "text-2xl sm:text-3xl",
    },
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Pocket Illustration with Stationery (Ruler, Pen, Pencil) */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Green Ruler */}
          <g>
            <rect
              x="12"
              y="12"
              width="22"
              height="60"
              rx="2"
              fill="#10B981"
              stroke="#18181B"
              strokeWidth="3.5"
            />
            {/* Ruler ticks */}
            <line x1="14" y1="20" x2="22" y2="20" stroke="#18181B" strokeWidth="2.5" />
            <line x1="14" y1="28" x2="20" y2="28" stroke="#18181B" strokeWidth="2" />
            <line x1="14" y1="36" x2="22" y2="36" stroke="#18181B" strokeWidth="2.5" />
            <line x1="14" y1="44" x2="20" y2="44" stroke="#18181B" strokeWidth="2" />
            <line x1="14" y1="52" x2="22" y2="52" stroke="#18181B" strokeWidth="2.5" />
            {/* Circular hole in ruler */}
            <circle cx="23" cy="62" r="2.5" fill="#18181B" />
          </g>

          {/* Blue Pen */}
          <g>
            {/* Pen Body */}
            <rect
              x="42"
              y="10"
              width="16"
              height="62"
              rx="3"
              fill="#0EA5E9"
              stroke="#18181B"
              strokeWidth="3.5"
            />
            {/* Pen Clip */}
            <path
              d="M 42 16 L 36 16 L 36 34 L 42 34"
              stroke="#18181B"
              strokeWidth="3"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Pen Cap Detail */}
            <rect x="42" y="8" width="16" height="6" rx="2" fill="#38BDF8" stroke="#18181B" strokeWidth="3" />
          </g>

          {/* Orange Pencil */}
          <g>
            {/* Pencil Body */}
            <rect
              x="68"
              y="14"
              width="18"
              height="58"
              rx="2"
              fill="#F97316"
              stroke="#18181B"
              strokeWidth="3.5"
            />
            {/* Pencil top stripes */}
            <rect x="68" y="16" width="18" height="4" fill="#18181B" />
            <rect x="68" y="23" width="18" height="4" fill="#18181B" />
            <rect x="68" y="30" width="18" height="4" fill="#18181B" />
          </g>

          {/* Red Pocket (Bolso) */}
          <g>
            <path
              d="M 10 44 L 90 44 L 90 85 L 50 112 L 10 85 Z"
              fill="#E11D48"
              stroke="#18181B"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Top stitch dashed line */}
            <line
              x1="16"
              y1="49"
              x2="84"
              y2="49"
              stroke="#9F1239"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            {/* Inner pocket contour stitch */}
            <path
              d="M 16 52 L 84 52 L 84 82 L 50 105 L 16 82 Z"
              stroke="#FFE4E6"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              fill="none"
              opacity="0.6"
            />
          </g>
        </svg>
      </div>

      {/* Brand Text: ACOMPANHAMENTO PEDAGÓGICO André Nascimento */}
      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-black uppercase tracking-wider leading-none ${
              variant === "onDark"
                ? "text-amber-300"
                : "text-slate-900 dark:text-amber-300"
            } ${textSizes[size].sub}`}
          >
            Acompanhamento Pedagógico
          </span>
          <span
            className={`font-handwriting font-bold leading-tight ${
              variant === "onDark"
                ? "text-white"
                : "text-slate-900 dark:text-white"
            } ${textSizes[size].main}`}
          >
            André Nascimento
          </span>
        </div>
      )}
    </div>
  );
}
