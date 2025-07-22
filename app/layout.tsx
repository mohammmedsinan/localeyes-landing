import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Localeyes - AI/SEO Optimization",
  description: "The All-in-One AI Platform for Local Business Growth",
  generator: "localeyes.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
