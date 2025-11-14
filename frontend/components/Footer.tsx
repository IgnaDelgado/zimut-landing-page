"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { footer } = useLanguage().content;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent" />
      <div className="section-wrapper flex flex-col gap-3 py-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} ZIMUT. {footer.rights}
        </p>
        <p>{footer.message}</p>
      </div>
    </footer>
  );
}
