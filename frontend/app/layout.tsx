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
  title: "ZIMUT | Golden Circle software & AI partner",
  description:
    "ZIMUT transforma el Por qué, Cómo y Qué en landings cinematográficas, software robusto y agentes de IA que eliminan la fricción para cualquier industria."
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
