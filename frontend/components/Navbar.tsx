"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 border-b border-white/5 bg-bgDark/70 shadow-[0_10px_30px_-25px_rgba(82,214,255,0.45)] backdrop-blur-2xl"
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-60" />
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
              <p className="text-lg font-semibold tracking-[0.28em] text-white/80">ZIMUT</p>
              <p className="text-xs text-white/50">Guiding software clarity with AI care</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            {["services", "how", "benefits", "why", "contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ y: -2, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-1 py-0.5 transition-colors hover:text-white"
              >
                <span className="pointer-events-none absolute inset-x-0 bottom-0 block h-px w-full origin-center scale-x-0 bg-gradient-to-r from-mint to-sky transition-transform duration-300 group-hover:scale-x-100" />
                {item === "services" && "Services"}
                {item === "how" && "How we work"}
                {item === "benefits" && "Benefits"}
                {item === "why" && "Why Zimut"}
                {item === "contact" && "Contact"}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-wide text-bgDark shadow-[0_15px_30px_-20px_rgba(139,228,200,0.8)] transition-all hover:bg-mint hover:text-bgDark"
          >
            <span className="relative z-10">Book a clarity call</span>
            <span className="absolute inset-0 rounded-full border border-white/50" />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
