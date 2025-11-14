import "./globals.css";
import type { Metadata } from "next";

import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "ZIMUT | Software clarity guided by AI care",
  description:
    "ZIMUT designs bespoke software and responsible AI solutions that simplify complexity, accelerate growth, and keep teams confident from discovery to scale."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
