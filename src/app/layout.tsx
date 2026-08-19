import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono, Source_Sans_3 } from "next/font/google";
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

export const metadata: Metadata = {
  title: "GEOTECHNICAL ENGINEERING & LABORATORY SOIL AND MATERIALS TESTING",
  description:
    "Engineer Fulgence offers trusted geotechnical engineering, soil and materials testing, and construction consulting services in Rwanda. Professional laboratory testing, site investigation, and foundation design by Rwanda's best engineers.",
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GEOTECHNICAL ENGINEERING & LABORATORY SOIL AND MATERIALS TESTING",
    description:
      "Trusted geotechnical engineering and laboratory soil and materials testing services in Rwanda. Professional site investigation and foundation design.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
