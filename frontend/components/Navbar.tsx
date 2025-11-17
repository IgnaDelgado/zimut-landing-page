"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Navbar() {
  const { content, language, setLanguage } = useLanguage();
  const navLinks = content.nav.links;

  const mobileLocale = useMemo(
    () => content.nav.locales.find((locale) => locale.code !== language) || content.nav.locales[0],
    [content.nav.locales, language]
  );

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-zimut-gray-800 bg-zimut-gray-900/95 backdrop-blur"
    >
      <div className="section-wrapper py-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <a
            href="#hero"
            className="group flex items-center gap-3 text-zimut-gray-0 transition-colors hover:text-zimut-green-300"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-zimut-gray-700 bg-zimut-gray-900 shadow-inset">
              <Image
                src="/brand/zimut-mark.svg"
                alt="ZIMUT mark"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <Image
                src="/brand/zimut-wordmark.svg"
                alt="ZIMUT wordmark"
                width={150}
                height={40}
                className="transition-transform duration-300 group-hover:translate-x-1"
                priority
              />
              <p className="mt-1 text-[11px] text-zimut-gray-400">{content.nav.brandDescription}</p>
            </div>
            <div className="sm:hidden">
              <p className="font-semibold tracking-[0.32em] text-xs text-zimut-gray-200">
                {content.nav.brandTagline}
              </p>
            </div>
          </a>

          <div className="flex flex-1 items-center justify-end gap-6 lg:gap-10">
            <div className="hidden flex-1 items-center justify-end gap-8 text-sm font-semibold text-zimut-gray-300 lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group relative pb-1 transition-colors hover:text-zimut-green-400"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transform bg-zimut-green-500 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  <span className="relative">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden items-center gap-1 rounded-full border border-zimut-gray-700 bg-zimut-gray-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-zimut-gray-300 sm:flex">
                <span className="hidden text-zimut-gray-400 lg:inline">{content.nav.localeLabel}</span>
                {content.nav.locales.map((locale) => {
                  const active = locale.code === language;
                  return (
                    <button
                      key={locale.code}
                      type="button"
                      onClick={() => setLanguage(locale.code)}
                      className={`flex items-center gap-1 rounded-full px-2.5 py-1 transition-colors ${
                        active
                          ? "bg-zimut-green-700/20 text-zimut-green-300"
                          : "text-zimut-gray-300 hover:text-zimut-green-300"
                      }`}
                    >
                      <span aria-hidden>{locale.flag}</span>
                      {locale.label}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setLanguage(mobileLocale.code)}
                className="flex items-center gap-1 rounded-full border border-zimut-gray-700 bg-zimut-gray-800 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-zimut-gray-300 transition-colors hover:text-zimut-green-300 sm:hidden"
              >
                <span aria-hidden>{mobileLocale.flag}</span>
                {mobileLocale.label}
              </button>

              <a href="#contact" className="cta-primary whitespace-nowrap text-xs sm:text-sm">
                {content.nav.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
