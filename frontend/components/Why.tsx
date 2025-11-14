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
              We bring clarity to a world saturated with technological noise.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70">
              Companies are overwhelmed by artificial intelligence promises, shiny new tools, and contradictory advice. Growth feels urgent, yet the path is foggy.
            </p>
            <p className="mt-3 text-sm md:text-base text-white/70">
              ZIMUT’s purpose is to simplify the complex. We translate ideas into tangible roadmaps, build with honesty, and deliver software that genuinely helps people and businesses thrive.
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
              Why teams choose ZIMUT
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Honest conversations that surface the real problem to solve.</li>
              <li>• Responsible AI adoption grounded in measurable, long-term value.</li>
              <li>• Effective simplicity so users feel confident, not confused.</li>
              <li>• Transparency across scope, timing, and investment from day one.</li>
              <li>• Shared metrics that nurture sustainable growth together.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
