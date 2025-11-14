"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 border-b border-white/5 bg-bgDark/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-mint to-sky">
            <span className="text-lg font-semibold tracking-tight text-bgDark">G</span>
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide">Guidelight Labs</p>
            <p className="text-xs text-white/50">Steadfast software, human-first guidance</p>
          </div>
        </div>

        <div className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#how" className="hover:text-white">
            How we work
          </a>
          <a href="#why" className="hover:text-white">
            Why Guidelight
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-bgDark hover:bg-mint hover:text-bgDark transition-colors"
        >
          Talk about a project
        </a>
      </div>
    </motion.nav>
  );
}
