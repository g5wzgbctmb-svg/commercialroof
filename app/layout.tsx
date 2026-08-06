import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arizona Commercial Roof Exchange",
  description:
    "One documented commercial roof evaluation. Up to five qualified Arizona roofing proposals. You choose the contractor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
