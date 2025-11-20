"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiCpu, FiLayers, FiPlay } from "react-icons/fi";

import { useLanguage } from "@/components/LanguageProvider";
import { HelixPortalScene } from "@/components/HelixPortalScene";
import { OrbitalScene } from "@/components/OrbitalScene";

export function Hero() {
  const { hero } = useLanguage().content;
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const blurOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-hidden border-b border-zimut-gray-800 bg-zimut-gray-900"
    >
      <div className="pointer-events-none absolute inset-0 mesh-gradient">
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <motion.div style={{ y: yParallax, opacity: blurOpacity }} className="absolute inset-0">
          <div className="absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-zimut-green-600/25 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-sky-400/10 blur-[140px]" />
        </motion.div>
      </div>

      <div className="relative section-wrapper section-padding grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-8"
        >
          <span className="badge-soft shadow-inner shadow-zimut-green-900/40">{hero.badge}</span>

          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-bold leading-tight text-zimut-gray-0 sm:text-5xl lg:text-[3.45rem]">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-base text-zimut-gray-300 sm:text-lg">{hero.description}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="cta-primary">
              <FiArrowRight className="text-lg" aria-hidden />
              {hero.primaryCta}
            </a>
            <a href="#services" className="cta-secondary">
              <FiPlay aria-hidden />
              {hero.secondaryCta}
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="frosted-card liquid-border border-zimut-green-800/40 bg-gradient-to-br from-zimut-gray-900/90 via-zimut-gray-900/60 to-zimut-green-900/20 p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow text-zimut-green-200">{hero.slogan.label}</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-zimut-gray-700/70 bg-zimut-gray-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-zimut-gray-100">
                <FiLayers className="text-zimut-green-200" aria-hidden />
                ZIMUT · STORYBRAND
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-zimut-gray-0">{hero.slogan.tagline}</p>
            <ul className="mt-4 space-y-2 text-sm text-zimut-gray-300">
              {hero.slogan.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-zimut-green-300" aria-hidden />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {hero.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-zimut-gray-700/60 bg-gradient-to-br from-zimut-gray-900/70 to-zimut-gray-800/70 p-5"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_0%,rgba(59,130,246,0.12),transparent_45%)] transition-opacity duration-500 group-hover:opacity-90" />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-zimut-gray-0">{item.title}</p>
                    <p className="mt-2 text-sm text-zimut-gray-300">{item.description}</p>
                  </div>
                  <span className="rounded-full border border-zimut-green-700/40 bg-zimut-gray-900/70 p-2 text-zimut-green-200">
                    <FiCpu aria-hidden />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="frosted-card liquid-border space-y-6 border-zimut-green-700/50 bg-zimut-green-900/10 p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow text-zimut-green-200">{hero.pvu.label}</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-zimut-green-600/50 bg-zimut-gray-900/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-zimut-green-200">
                <FiArrowRight aria-hidden />
                StoryBrand · IA
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {hero.pvu.steps.map((step) => (
                <div key={step.title} className="rounded-xl border border-zimut-gray-700/70 bg-zimut-gray-900/60 p-3 shadow-inner shadow-black/30 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zimut-green-200">{step.title}</p>
                  <p className="mt-1 text-sm text-zimut-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-zimut-green-100">{hero.pvu.statement}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative overflow-hidden rounded-[32px] border border-zimut-green-800/40 bg-zimut-gray-900/40 p-6 shadow-[0_50px_140px_-60px_rgba(37,255,189,0.45)] backdrop-blur"
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
              <span className="inline-flex items-center gap-2 rounded-full bg-zimut-gray-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zimut-green-200">
                <FiLayers aria-hidden />
                {hero.cardStatus}
              </span>
            </div>

            <div className="space-y-4">
              {hero.timeline.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: 0.12 * index }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-zimut-gray-900/60 p-4 backdrop-blur"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zimut-green-900/15 via-transparent to-sky-500/10 opacity-70" />
                  <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-zimut-green-200">{step.label}</p>
                  <p className="relative mt-2 text-sm text-zimut-gray-200">{step.copy}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative card-note border-zimut-green-700/50 bg-zimut-green-900/40 text-zimut-green-100">
              <span className="absolute left-4 top-4 text-zimut-green-300" aria-hidden>
                ✓
              </span>
              <p className="pl-6 text-sm">{hero.cardNote}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-2 flex items-center justify-center gap-2 text-xs text-zimut-green-100/70">
            <span className="h-2 w-2 rounded-full bg-zimut-green-400 animate-pulse-dots" aria-hidden />
            Scroll to orchestrate the system
          </div>
        </motion.div>
      </div>
    </section>
  );
}
