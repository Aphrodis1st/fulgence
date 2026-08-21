import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_TITLE =
  "GEOTECHNICAL ENGINEERING & LABORATORY SOIL AND MATERIALS TESTING";
const SITE_DESCRIPTION =
  "Engineer Fulgence offers trusted geotechnical engineering, soil and materials testing, and construction consulting services in Rwanda. Professional laboratory testing, site investigation, and foundation design by Rwanda's best engineers.";
const OG_DESCRIPTION =
  "Trusted geotechnical engineering and laboratory soil and materials testing services in Rwanda. Professional site investigation and foundation design.";

const ogImage = {
  url: "/og.png",
  width: 1024,
  height: 878,
  alt: `${SITE_NAME} ${SITE_TITLE}`,
  type: "image/png",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Geotechnical",
    "Geotechnical Engineering",
    "Geotechnical Investigation",
    "Geotechnical Engineering Services",
    "Geotechnical Engineering Consulting",
    "Geotechnical Engineering Consulting Services",
    "Geotechnical Engineering Consulting Services in Rwanda",
    "Geotechnical Engineering Consulting Services in Kigali",
    "Geotechnical Engineering Consulting Services in Rwanda",
    "Engineer Fulgence",
    "Geotechnical Engineering",
    "GEOSURVEY ENGINEERING LTD and Geotechnical Investigation",
    "Geotechnical Engineering Rwanda",
    "soil testing Rwanda",
    "materials testing services",
    "foundation design Rwanda",
    "site investigation Rwanda",
    "construction materials testing",
    "geotechnical consultant Rwanda",
    "civil engineering Rwanda",
    "soil analysis laboratory",
    "ground investigation services",
    "engineering consulting Kigali",
    "Rwandan best engineers",
    "Trusted engineers",
    "Trusted Soil and Materials testing",
    "Laboratory Soil and Material Testing",
    "Geotechnical Engineering Rwanda",
    "soil testing Rwanda",
    "materials testing services",
    "foundation design Rwanda",
    "site investigation Rwanda",
    "construction materials testing",
    "geotechnical consultant Rwanda",
    "civil engineering Rwanda",
    "soil analysis laboratory",
    "ground investigation services",
    "engineering consulting Kigali",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    images: [ogImage.url],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-7ZZMW4BHRF";
const isProd = process.env.NODE_ENV === "production";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full">
        {children}

        {isProd && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
