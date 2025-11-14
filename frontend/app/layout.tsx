import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guidelight Labs | Steadfast software, human-first guidance",
  description:
    "Guidelight Labs partners with organisations to co-create resilient software and responsible AI solutions that feel clear, caring and future-ready."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
