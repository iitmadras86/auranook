import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Technical Resources & Downloads | Auranook",
  description: "Download product catalogues, technical datasheets, NRC ratings, installation manuals, and CAD/BIM objects for The Uniceil and Polygranite systems.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
