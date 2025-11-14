"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Navbar() {
  const { content, language, setLanguage } = useLanguage();
  const navLinks = content.nav.links;

  const gradientId = useMemo(() => `nav-glow-${language}`, [language]);
  const mobileLocale = useMemo(
    () => content.nav.locales.find((locale) => locale.code !== language) || content.nav.locales[0],
    [content.nav.locales, language]
  );

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 border-b border-white/5 bg-bgDark/70 shadow-[0_12px_40px_-30px_rgba(82,214,255,0.55)] backdrop-blur-2xl"
    >
      <div className="relative">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_center,_rgba(139,228,200,0.08),_transparent_65%)]"
        />
        <div className="section-wrapper flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -12, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-mint via-white to-sky shadow-[0_18px_40px_-20px_rgba(139,228,200,0.65)]"
            >
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-xl font-semibold tracking-tight text-bgDark"
              >
                Z
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute inset-0 rounded-2xl border border-white/40"
              />
            </motion.div>
            <div className="leading-tight">
              <p className="text-lg font-semibold tracking-[0.28em] text-white/80">{content.nav.brandTagline}</p>
              <p className="text-xs text-white/50">{content.nav.brandDescription}</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            {navLinks.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ y: -2, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-1 py-0.5 transition-colors hover:text-white"
              >
                <span className="pointer-events-none absolute inset-x-0 bottom-0 block h-px w-full origin-center scale-x-0 bg-gradient-to-r from-mint to-sky transition-transform duration-300 group-hover:scale-x-100" />
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60 sm:flex"
            >
              <span className="hidden text-white/40 lg:inline">{content.nav.localeLabel}</span>
              {content.nav.locales.map((locale) => {
                const active = locale.code === language;
                return (
                  <button
                    key={locale.code}
                    type="button"
                    onClick={() => setLanguage(locale.code)}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all ${
                      active
                        ? "bg-gradient-to-r from-mint/80 to-sky/70 text-bgDark shadow-[0_10px_25px_-15px_rgba(82,214,255,0.65)]"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    <span aria-hidden>{locale.flag}</span>
                    {locale.label}
                  </button>
                );
              })}
            </motion.div>

            <button
              type="button"
              onClick={() => setLanguage(mobileLocale.code)}
              className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white sm:hidden"
            >
              <span aria-hidden>{mobileLocale.flag}</span>
              {mobileLocale.label}
            </button>

            <motion.a
              href="#contact"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-wide text-bgDark shadow-[0_15px_30px_-20px_rgba(139,228,200,0.8)] transition-all hover:bg-mint hover:text-bgDark"
            >
              <span className="relative z-10">{content.nav.cta}</span>
              <span className="absolute inset-0 rounded-full border border-white/50" />
              <svg
                className="pointer-events-none absolute inset-0"
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(139,228,200,0.7)" />
                    <stop offset="100%" stopColor="rgba(82,214,255,0.6)" />
                  </linearGradient>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  rx="999"
                  fill="none"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="1"
                  className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
