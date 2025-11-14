"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-bgDark via-bgDark to-black">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-mint/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky/20 blur-3xl"
        />
        <motion.div
          initial={{ x: -120 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-x-0 top-32 flex justify-center"
        >
          <div className="h-40 w-[56rem] max-w-full -skew-y-6 rounded-3xl border border-white/5 bg-white/10">
            <div className="h-full w-full bg-[linear-gradient(115deg,rgba(139,228,200,0.15)_0%,rgba(82,214,255,0.05)_55%,transparent_100%)] opacity-70" />
          </div>
        </motion.div>

      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-stretch gap-16 px-5 pb-28 pt-24 md:flex-row md:items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="z-10 flex-1 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            ZIMUT CARES FOR YOUR CODEBASE
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Technology solutions that guide you toward your best version.
          </h1>

          <p className="mt-5 text-sm text-white/70 md:text-base">
            We bring software clarity to leaders overwhelmed by buzzwords and fast-moving AI trends. ZIMUT translates technical complexity into guided, human-centered products that feel calm, precise, and ready to scale.

          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-mint px-6 py-2 text-sm font-semibold text-bgDark shadow-lg shadow-mint/40 transition-colors hover:bg-sky"

            >
              Let’s discuss your project
            </a>
            <a href="#services" className="text-sm text-white/70 transition-colors hover:text-white">
              Explore our solutions →
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-xs text-white/60 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="font-semibold text-white">Clarity from day one</p>
              <p className="mt-1 text-white/60">Discovery rituals that translate needs into a transparent, evolving roadmap.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="font-semibold text-white">AI with intention</p>
              <p className="mt-1 text-white/60">We integrate intelligence when it accelerates value—never as decoration.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="font-semibold text-white">Care that endures</p>
              <p className="mt-1 text-white/60">Continuous partnership to evolve products and keep teams confident.</p>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="z-10 flex flex-1 justify-center"
        >
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="relative space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Compass Brief</p>
                <p className="mt-2 text-lg font-semibold text-white">Your systems, reoriented.</p>
                <p className="mt-2 text-sm text-white/60">
                  We align teams around a tailored blueprint that respects your processes while unlocking new momentum.
                </p>
              </div>
              <div className="grid gap-3 text-sm text-white/65">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-mint" />
                  <p>Dedicated squads blending strategy, design, and engineering.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky" />
                  <p>Lifecycle partnership with visibility into every milestone.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                  <p>Automations and AI copilots introduced with governance and care.</p>
                </div>
              </div>

            <motion.div
              className="absolute -top-6 right-10 h-16 w-16 rounded-2xl bg-gradient-to-br from-mint/60 to-sky/40 blur-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 left-10 h-24 w-24 rounded-full bg-sky/20 blur-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-3 flex items-center justify-end"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="h-3 w-3 rounded-full bg-sky shadow-md shadow-sky/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
