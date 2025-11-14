"use client";

import { motion } from "framer-motion";

export function Why() {
  return (
    <section
      id="why"
      className="border-t border-white/5 bg-gradient-to-b from-bgDark to-black"
    >
      <div className="mx-auto max-w-6xl section-padding">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-start">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Our why: clarity in a noisy tech world.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/65">
              The software world is full of buzzwords, overpromises and
              one-size-fits-all solutions. Companies know they need technology
              and AI, but they rarely get a clear, grounded path to use them.
            </p>
            <p className="mt-3 text-sm md:text-base text-white/65">
              ZIMUT exists to close that gap. We translate technical complexity
              into a language that makes sense for your business, and we build
              solutions together with you, not on top of you.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="card-glass p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              What we stand for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Robust solutions, not fragile prototypes.</li>
              <li>• AI applied where it adds value, not just hype.</li>
              <li>• Effective simplicity in every decision and interface.</li>
              <li>• Close collaboration instead of black-box delivery.</li>
              <li>• Long-term growth for your business as our north.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
