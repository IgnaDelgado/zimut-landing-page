import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZIMUT | Technology that guides your business",
  description:
    "ZIMUT brings clarity to software and AI, creating robust, tailored solutions that help your business grow with confidence."
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
