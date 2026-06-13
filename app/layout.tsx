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
  title: "Auranook | Premium Architectural Surfaces & Ceilings",
  description: "Enterprise-grade architectural surfaces, ceilings, facade, and interior systems. Discover the Uniceil product ecosystem for modern spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
