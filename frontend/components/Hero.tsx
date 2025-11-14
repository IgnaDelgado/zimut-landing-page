"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { hero } = useLanguage().content;

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#08080A] via-bgDark to-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,228,200,0.22),_transparent_60%)]" />
        <motion.svg
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.1 }}
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-[-10%] h-[140%] w-[140%] -translate-x-1/2"
        >
          <motion.path
            d="M-50 620 C 220 430 540 300 1220 220"
            stroke="url(#heroGradient)"
            strokeWidth={1.5}
            strokeOpacity={0.5}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d="M-120 700 C 200 520 520 420 1180 360"
            stroke="url(#heroGradient)"
            strokeWidth={1}
            strokeOpacity={0.35}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
          />
          <motion.path
            d="M-180 760 C 160 600 520 520 1160 480"
            stroke="url(#heroGradient)"
            strokeWidth={0.8}
            strokeOpacity={0.25}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: "easeOut", delay: 0.4 }}
          />
          <defs>
            <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(139,228,200,0.8)" />
              <stop offset="60%" stopColor="rgba(82,214,255,0.6)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
            </linearGradient>
          </defs>
        </motion.svg>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 0.35, x: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="absolute right-[-12%] top-[25%] h-[24rem] w-[46rem] -skew-y-12 rounded-[60px] bg-gradient-to-br from-mint/15 via-white/10 to-sky/15 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute left-[-14%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-mint/20 via-transparent to-sky/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 6 }}
          animate={{ opacity: 0.35, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute bottom-[-8rem] left-1/2 h-[18rem] w-[54rem] -translate-x-1/2 rounded-[120px] border border-mint/15 bg-gradient-to-r from-mint/10 via-transparent to-sky/10 blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="absolute left-[15%] top-[10%] h-36 w-36 rounded-full border border-white/10 bg-gradient-to-b from-mint/20 to-transparent blur-xl"
        />
      </div>

      <div className="relative section-wrapper flex flex-col items-stretch gap-20 pb-36 pt-32 md:flex-row md:items-start md:gap-24">
        <motion.div
          initial={{ x: -36, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="z-10 flex-1 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            {hero.badge}
          </span>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base text-white/70 md:text-lg">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-mint px-7 py-3 text-sm font-semibold tracking-[0.16em] text-bgDark shadow-[0_18px_40px_-20px_rgba(139,228,200,0.8)] transition-all hover:bg-sky hover:shadow-[0_18px_36px_-18px_rgba(82,214,255,0.7)]"
            >
              {hero.primaryCta}
            </a>
            <a href="#services" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-14 grid gap-4 text-xs text-white/60 sm:grid-cols-3">
            {hero.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ y: -6 }}
                className="card-glass group relative overflow-hidden px-5 py-4"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-transparent to-sky/0 opacity-0 transition-opacity duration-500 group-hover:from-mint/15 group-hover:to-sky/15 group-hover:opacity-100" />
                <div className="relative">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 36, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="z-10 flex flex-1 justify-center"
        >
          <div className="relative w-full max-w-xl space-y-6 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            <div className="pointer-events-none absolute -top-20 right-10 h-32 w-32 rounded-full bg-gradient-to-br from-mint/30 to-sky/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-10 h-36 w-36 rounded-full bg-gradient-to-br from-sky/20 to-transparent blur-3xl" />
            <div className="relative flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{hero.cardLabel}</p>
              <span className="rounded-full bg-mint/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-mint">
                {hero.cardStatus}
              </span>
            </div>

            <div className="relative space-y-5">
              {hero.timeline.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-mint/0 via-white/5 to-sky/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute left-5 top-5 h-10 w-px bg-gradient-to-b from-mint/80 via-white/30 to-transparent" />
                  <p className="pl-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">{step.label}</p>
                  <p className="pl-6 pt-2 text-sm text-white/70">{step.copy}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative rounded-2xl border border-mint/40 bg-mint/10 p-5 text-sm text-mint shadow-[0_14px_30px_-24px_rgba(139,228,200,0.8)]">
              <span className="pointer-events-none absolute -top-6 right-6 h-10 w-10 rounded-full bg-gradient-to-b from-white/30 to-transparent blur-lg" />
              {hero.cardNote}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
