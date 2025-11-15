"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { footer } = useLanguage().content;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zimut-gray-800 bg-zimut-gray-900">
      <div className="section-wrapper flex flex-col gap-2 py-8 text-xs text-zimut-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} ZIMUT. {footer.rights}
        </p>
        <p>{footer.message}</p>
      </div>
    </footer>
  );
}
