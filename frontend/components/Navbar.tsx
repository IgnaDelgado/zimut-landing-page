"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 border-b border-white/5 bg-bgDark/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -8, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-mint to-sky shadow-lg shadow-sky/30"
          >
            <span className="text-lg font-semibold tracking-tight text-bgDark">Z</span>
          </motion.div>
          <div>
            <p className="text-lg font-semibold tracking-wide">ZIMUT</p>
            <p className="text-xs text-white/50">Guiding software clarity with AI care</p>
          </div>
        </div>

        <div className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#how" className="hover:text-white">
            How we work
          </a>
          <a href="#benefits" className="hover:text-white">
            Benefits
          </a>
          <a href="#why" className="hover:text-white">
            Why ZIMUT
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-bgDark shadow-sm shadow-mint/30 transition-colors hover:bg-mint hover:text-bgDark"
        >
          Book a clarity call
        </a>
      </div>
    </motion.nav>
  );
}
