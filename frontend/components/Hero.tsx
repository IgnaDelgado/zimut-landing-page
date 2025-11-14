"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Clarity first",
    description:
      "Discovery rituals and documentation that translate ideas into confident direction."
  },
  {
    title: "AI with purpose",
    description:
      "Intelligence evaluated as strategy, ensuring every automation earns its place."
  },
  {
    title: "Care that endures",
    description:
      "Steady partnership and enablement long after launch day."
  }
];

const timeline = [
  {
    label: "Orientation",
    copy: "Joint workshops surface objectives, constraints, and user truths."
  },
  {
    label: "Navigation",
    copy: "We chart a roadmap, align teams, and select the technologies that fit."
  },
  {
    label: "Momentum",
    copy: "Incremental releases pair robust engineering with measurable outcomes."
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#08080A] via-bgDark to-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,228,200,0.15),_transparent_55%)]" />
        <motion.svg
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.75, y: 0 }}
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
          className="absolute right-[-15%] top-[25%] h-[22rem] w-[44rem] -skew-y-12 rounded-3xl bg-gradient-to-br from-mint/10 via-white/10 to-sky/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-stretch gap-20 px-5 pb-32 pt-28 md:flex-row md:items-start">
        <motion.div
          initial={{ x: -36, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="z-10 flex-1 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            ZIMUT • SOFTWARE GUIDANCE
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Technology solutions that guide you toward your best version.
          </h1>

          <p className="mt-6 text-sm text-white/70 md:text-base">
            We bring software clarity to organisations overwhelmed by buzzwords and rapid AI trends. ZIMUT translates technical complexity into guided, human-centred products so you can grow with precision and calm.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-mint px-6 py-2 text-sm font-semibold text-bgDark shadow-lg shadow-mint/40 transition-colors hover:bg-sky"
            >
              Let’s talk about your project
            </a>
            <a href="#services" className="text-sm text-white/70 transition-colors hover:text-white">
              Explore our solutions →
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-xs text-white/60 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 36, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="z-10 flex flex-1 justify-center"
        >
          <div className="relative w-full max-w-lg space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Caregiver dashboard
              </p>
              <span className="rounded-full bg-mint/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-mint">
                Live support
              </span>
            </div>

            <div className="space-y-5">
              {timeline.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="relative rounded-2xl border border-white/10 bg-black/40 p-4"
                >
                  <div className="absolute left-5 top-5 h-10 w-px bg-gradient-to-b from-mint/80 via-white/30 to-transparent" />
                  <p className="pl-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">{step.label}</p>
                  <p className="pl-6 pt-2 text-sm text-white/70">{step.copy}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl border border-mint/30 bg-mint/10 p-4 text-xs text-mint">
              Every milestone includes visibility into decisions, scope, and results—no more guessing how your product is progressing.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
