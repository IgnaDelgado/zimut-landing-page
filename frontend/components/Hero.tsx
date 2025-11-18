"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";
import { HelixPortalScene } from "@/components/HelixPortalScene";
import { OrbitalScene } from "@/components/OrbitalScene";

export function Hero() {
  const { hero } = useLanguage().content;

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-zimut-gray-800 bg-gradient-to-b from-zimut-gray-900 via-[#0a1d1b] to-zimut-gray-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,199,142,0.25),_transparent_55%)]" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute -right-10 top-32 h-64 w-64 rounded-full bg-zimut-green-700/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute -left-8 bottom-10 h-72 w-72 rounded-full bg-zimut-gray-800/70 blur-3xl"
        />
      </div>

      <div className="relative section-wrapper section-padding grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8"
        >
          <span className="badge-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-zimut-green-400" aria-hidden />
            {hero.badge}
          </span>

          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-bold leading-tight text-zimut-gray-0 sm:text-5xl lg:text-[3.4rem]">
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
                className="card-glass h-full border-zimut-gray-700/70 bg-zimut-gray-900/70 p-5"
              >
                <p className="text-sm font-semibold text-zimut-gray-0">{item.title}</p>
                <p className="mt-2 text-sm text-zimut-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass space-y-6 border-zimut-green-700/50 bg-zimut-green-900/20 p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow text-zimut-green-200">{hero.pvu.label}</p>
              <span className="rounded-full border border-zimut-green-600/40 bg-zimut-gray-900/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-zimut-green-200">
                StoryBrand · IA
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {hero.pvu.steps.map((step) => (
                <div key={step.title} className="rounded-xl border border-zimut-gray-700/70 bg-zimut-gray-900/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zimut-green-200">{step.title}</p>
                  <p className="mt-1 text-sm text-zimut-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-[32px] border border-zimut-green-800/40 bg-zimut-gray-900/40 p-6 shadow-[0_40px_120px_-50px_rgba(37,255,189,0.4)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-90">
            <HelixPortalScene />
          </div>
          <div className="pointer-events-none absolute -right-10 top-10 hidden h-40 w-40 rounded-3xl border border-zimut-gray-700/50 bg-zimut-gray-900/80 md:block">
            <OrbitalScene />
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-zimut-green-200">{hero.cardLabel}</p>
              <span className="rounded-full bg-zimut-gray-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zimut-green-200">
                {hero.cardStatus}
              </span>
            </div>

            <div className="space-y-4">
              {hero.timeline.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: 0.12 * index }}
                  className="rounded-2xl border border-white/10 bg-zimut-gray-900/60 p-4 backdrop-blur"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-zimut-green-200">{step.label}</p>
                  <p className="mt-2 text-sm text-zimut-gray-200">{step.copy}</p>
                </motion.div>
              ))}
            </div>

            <div className="card-note relative border-zimut-green-700/50 bg-zimut-green-900/40 text-zimut-green-100">
              <span className="absolute left-4 top-4 text-zimut-green-300" aria-hidden>
                ✓
              </span>
              <p className="pl-6 text-sm">{hero.cardNote}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
