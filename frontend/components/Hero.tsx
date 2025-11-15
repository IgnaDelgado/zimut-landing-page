"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { hero } = useLanguage().content;

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-zimut-gray-800 bg-gradient-to-b from-zimut-gray-900 via-zimut-gray-900 to-zimut-gray-800"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-zimut-green-900/40 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute right-[-12%] top-[12%] h-60 w-60 rounded-full bg-zimut-green-700/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-[-18%] bottom-[-10%] h-72 w-72 rounded-full bg-zimut-gray-800 blur-3xl"
        />
      </div>

      <div className="relative section-wrapper section-padding grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <span className="badge-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-zimut-green-400" aria-hidden />
            {hero.badge}
          </span>

          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-bold leading-tight text-zimut-gray-0 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-base text-zimut-gray-300 sm:text-lg">{hero.description}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="cta-primary">
              {hero.primaryCta}
            </a>
            <a href="#services" className="cta-secondary">
              {hero.secondaryCta}
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {hero.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass h-full p-5"
              >
                <p className="text-sm font-semibold text-zimut-gray-0">{item.title}</p>
                <p className="mt-2 text-sm text-zimut-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-glass relative flex h-full flex-col gap-6 overflow-hidden p-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zimut-green-900/40 via-transparent to-zimut-gray-900/40 opacity-80" aria-hidden />
          <div className="relative flex items-center justify-between">
            <p className="eyebrow">{hero.cardLabel}</p>
            <span className="rounded-full bg-zimut-green-900/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zimut-green-300">
              {hero.cardStatus}
            </span>
          </div>

          <div className="relative space-y-4">
            {hero.timeline.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 * index }}
                className="rounded-xl border border-zimut-gray-700 bg-zimut-gray-900/60 p-4"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-zimut-green-300">{step.label}</p>
                <p className="mt-2 text-sm text-zimut-gray-300">{step.copy}</p>
              </motion.div>
            ))}
          </div>

          <div className="card-note relative">
            <span className="absolute left-4 top-4 text-zimut-green-300" aria-hidden>
              ✓
            </span>
            <p className="pl-6 text-sm text-zimut-green-200">{hero.cardNote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
