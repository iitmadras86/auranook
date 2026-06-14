import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specification Support & Technical Consultation | Auranook",
  description: "Collaborate with our technical specialists to identify, specify, and procure the ideal ceiling, façade, acoustic, and decorative surface solution for your project.",
};

export default function SpecificationSupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
