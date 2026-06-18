import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auranook.netlify.app"),
  title: "Auranook | Architectural Systems & Surface Solutions",
  description: "Auranook partners with architects, designers, developers and contractors to specify, source and deliver world-class architectural ceiling systems, façade systems, wall systems, surface systems and exterior architectural solutions.",
  keywords: [
    "Auranook",
    "The Uniceil",
    "Polygranite",
    "Acoustic Ceiling Systems",
    "Architectural Façades",
    "Soffit Systems",
    "Decking Systems",
    "Decorative Wall Panels",
    "WPC Panels",
    "PVC Wall Panels",
    "Charcoal Panels",
    "Architectural Surface Solutions"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://auranook.netlify.app/#organization",
        "name": "Auranook",
        "url": "https://auranook.netlify.app",
        "logo": "https://auranook.netlify.app/assets/logo.png",
        "description": "Premium Architectural Solutions & Material Distributor India",
        "telephone": "+91-95070-54062",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-95070-54062",
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://auranook.netlify.app/#website",
        "url": "https://auranook.netlify.app",
        "name": "Auranook",
        "publisher": {
          "@id": "https://auranook.netlify.app/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }} />
      </head>
      <body className={`${manrope.variable} font-sans antialiased bg-stone-50 text-stone-900 selection:bg-primary selection:text-white`}>
        <Navbar />
        <main className="min-h-screen flex flex-col relative">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
