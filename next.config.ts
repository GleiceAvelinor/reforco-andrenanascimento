import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Build the Content Security Policy value.
// In development, React needs 'unsafe-eval' for source maps / devtools.
// In production, we keep the strictest possible policy.
function buildCSP(): string {
  const scriptSrc = isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://vlibras.gov.br https://kit.fontawesome.com"
    : "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://vlibras.gov.br https://kit.fontawesome.com";

  // In dev, allow HMR websocket connections
  const connectSrc = isDev
    ? "connect-src 'self' ws://localhost:* wss://localhost:* https://www.google-analytics.com https://analytics.google.com https://www.facebook.com"
    : "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.facebook.com";

  return [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    connectSrc,
    "frame-src https://vlibras.gov.br",
    "worker-src 'self' blob:",
    "object-src 'none'",
    // Only upgrade insecure requests in production (dev uses http://localhost)
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");
}

// ──────────────────────────────────────────────────────────
// HTTP Security Headers (OWASP recommended baseline)
// ──────────────────────────────────────────────────────────
const securityHeaders = [
  // Prevent clickjacking – only allow framing by the same origin
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Prevent MIME-type sniffing (XSS vector)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Enable browser XSS filter (legacy browsers)
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Strict referrer – no referrer on cross-origin requests
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // HSTS – only in production (localhost doesn't support HTTPS)
  ...(isDev ? [] : [{
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  }]),
  // Permissions Policy – disable unused browser APIs (reduces attack surface)
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
    ].join(", "),
  },
  // Content Security Policy – environment-aware
  {
    key: "Content-Security-Policy",
    value: buildCSP(),
  },
];


const nextConfig: NextConfig = {
  // ── Performance ──────────────────────────────────────────
  cacheComponents: true,
  partialPrefetching: true,

  // ── Turbopack (CSS) ──────────────────────────────────────
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // ── Security Headers ─────────────────────────────────────
  async headers() {
    return [
      {
        // Apply to ALL routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // ── Image Security ───────────────────────────────────────
  images: {
    // Only allow images from trusted domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reforcoandrenascimento.com.br",
      },
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
      },
    ],
    // Disable SVG execution (XSS via SVG)
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ── Production hardening ─────────────────────────────────
  // Remove X-Powered-By header (don't leak tech stack)
  poweredByHeader: false,

  // Compress responses
  compress: true,
};

export default nextConfig;
