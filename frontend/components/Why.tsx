"use client";

import { motion } from "framer-motion";

export function Why() {
  return (
    <section
      id="why"
      className="border-t border-white/5 bg-gradient-to-b from-bgDark via-[#09090C] to-black"
    >
      <div className="mx-auto max-w-7xl section-padding">
        <div className="grid items-start gap-12 md:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              We bring clarity to a technological world full of noise.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70">
              Businesses are flooded with hype about AI, trends, and quick wins. Teams know they must evolve, yet the map to real transformation feels foggy and overwhelming.
            </p>
            <p className="mt-3 text-sm md:text-base text-white/70">
              ZIMUT exists to translate complexity into confidence. We listen, ask the right questions, and design software that respects your people while unlocking meaningful growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="card-glass border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              What we stand for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Honest conversations that reveal the real problem to solve.</li>
              <li>• Responsible AI adoption grounded in measurable value.</li>
              <li>• Effective simplicity that keeps users confident and loyal.</li>
              <li>• Transparency in scope, timing, and investment from day one.</li>
              <li>• Shared metrics so we grow sustainably—together.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
