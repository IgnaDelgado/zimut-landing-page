import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Raleway } from "next/font/google";

import { LanguageProvider } from "@/components/LanguageProvider";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap"
});

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
    <html lang="en" className={`${raleway.variable} ${plexMono.variable}`}>
      <body className="bg-zimut-gray-900 text-zimut-gray-100">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
