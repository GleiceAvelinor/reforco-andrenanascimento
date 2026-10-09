import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Kalam } from "next/font/google";
import "./globals.css";
import { ThemeAndAccessibilityProvider } from "@/components/ThemeAndAccessibilityProvider";
import VLibrasWidget from "@/components/VLibrasWidget";
import Script from "next/script";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const kalam = Kalam({
  variable: "--font-handwriting",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acompanhamento Pedagógico André Nascimento | Reforço Escolar e Alfabetização em Fortaleza",
  description:
    "Alfabetização com diversão e reforço escolar do Infantil 4 ao 6º ano em Fortaleza. Acompanhamento pedagógico e psicopedagógico com mais de 30 anos de experiência.",
  keywords: [
    "reforço escolar fortaleza",
    "alfabetização infantil fortaleza",
    "psicopedagogia fortaleza",
    "reforço escolar infantil 4 ao 6 ano",
    "reforço andré nascimento",
    "acompanhamento pedagógico andré nascimento",
    "aulas de apoio escolar fortaleza",
    "dificuldade de aprendizagem fortaleza",
    "bingo de tabuada e matemática lúdica",
    "rede reforço brasil",
  ],
  authors: [{ name: "Acompanhamento Pedagógico André Nascimento" }],
  creator: "Acompanhamento Pedagógico André Nascimento",
  publisher: "Acompanhamento Pedagógico André Nascimento",
  metadataBase: new URL("https://reforcoandrenascimento.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Acompanhamento Pedagógico André Nascimento | Fortaleza - CE",
    description:
      "Acompanhamento psicopedagógico e pedagógico focado no desenvolvimento integral e na confiança do seu filho do Infantil 4 ao 6º ano.",
    url: "https://reforcoandrenascimento.com.br",
    siteName: "Acompanhamento Pedagógico André Nascimento",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-pedagogas.jpg",
        width: 1200,
        height: 630,
        alt: "Professoras Maura André e Bete André em sala pedagógica em Fortaleza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acompanhamento Pedagógico André Nascimento - Fortaleza",
    description:
      "Mais de 30 anos de experiência em alfabetização lúdica, acompanhamento psicopedagógico e reforço escolar.",
    images: ["/images/hero-pedagogas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://reforcoandrenascimento.com.br/#organization",
      "name": "Acompanhamento Pedagógico André Nascimento",
      "alternateName": "Reforço André Nascimento (RAN)",
      "url": "https://reforcoandrenascimento.com.br",
      "logo": "https://reforcoandrenascimento.com.br/images/hero-pedagogas.jpg",
      "description":
        "Alfabetização com diversão e reforço escolar do Infantil 4 ao 6º ano em Fortaleza com acompanhamento psicopedagógico especializado.",
      "telephone": "+55-85-98536-3010",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fortaleza",
        "addressRegion": "CE",
        "addressCountry": "BR",
      },
      "memberOf": {
        "@type": "Organization",
        "name": "Rede Reforço Brasil",
      },
      "founder": [
        {
          "@type": "Person",
          "name": "Maura André",
          "jobTitle": "Pedagoga e Psicopedagoga",
        },
        {
          "@type": "Person",
          "name": "Bete André",
          "jobTitle": "Pedagoga e Especialista em Alfabetização",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://reforcoandrenascimento.com.br/#localbusiness",
      "name": "Acompanhamento Pedagógico André Nascimento",
      "telephone": "+55-85-98536-3010",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fortaleza",
        "addressRegion": "CE",
        "addressCountry": "BR",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:30",
          "closes": "18:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${jakartaSans.variable} ${kalam.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ran-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  var savedFont = localStorage.getItem('ran-font-size');
                  if (savedFont) {
                    document.documentElement.setAttribute('data-font-size', savedFont);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />

        {/* ── Security Meta Tags ─────────────────────────────── */}
        {/* Disable automatic phone number detection (privacy) */}
        <meta name="format-detection" content="telephone=no, email=no, address=no" />
        {/* Prevent browsers from caching sensitive pages */}
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate" />
        {/* IE compatibility (anti-XSS legacy mode) */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Fallback CSP via meta tag (for cases where HTTP headers may not reach) */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />

        {/* JSON-LD Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Analytics 4 Script (Config ready) */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              // gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Meta Pixel Script (Config ready) */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              // fbq('init', 'XXXXXXXXXXXXXXX');
              // fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans transition-colors selection:bg-amber-400 selection:text-slate-950">
        <ThemeAndAccessibilityProvider>
          {children}
          <VLibrasWidget />
        </ThemeAndAccessibilityProvider>
      </body>
    </html>
  );
}
