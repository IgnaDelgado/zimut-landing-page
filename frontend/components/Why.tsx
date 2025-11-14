"use client";

import { motion } from "framer-motion";

export function Why() {
  return (
    <section
      id="why"
      className="border-t border-white/5 bg-gradient-to-b from-bgDark via-[#09090C] to-black"
    >
      <div className="section-wrapper section-padding">
        <div className="grid items-start gap-14 md:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              We bring clarity to a world saturated with technological noise.
            </h2>
            <p className="mt-5 text-base text-white/70 md:text-lg">
              Companies are overwhelmed by artificial intelligence promises, shiny new tools, and contradictory advice. Growth feels urgent, yet the path is foggy.
            </p>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              ZIMUT’s purpose is to simplify the complex. We translate ideas into tangible roadmaps, build with honesty, and deliver software that genuinely helps people and businesses thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="card-glass group relative overflow-hidden p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-white/10 to-sky/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Why teams choose ZIMUT
            </p>
            <ul className="relative mt-5 space-y-3 text-sm text-white/70">
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
