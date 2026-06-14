import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polygranite Premium Surfaces | Decorative Interior Cladding",
  description: "Specify Polygranite for luxury commercial and residential interiors. 100% waterproof, highly durable decorative surface sheets and architectural wall panels.",
};

export default function PolygraniteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
