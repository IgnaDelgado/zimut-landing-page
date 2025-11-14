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
              Our why: bring calm, clarity and growth to digital change.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/65">
              Technology decisions often feel overwhelming, especially with the
              pace of AI. Leaders know they must evolve, yet the path is foggy,
              crowded with jargon and short-term promises.
            </p>
            <p className="mt-3 text-sm md:text-base text-white/65">
              Guidelight Labs exists to stand beside you as a trusted steward.
              We translate complexity into plain language, co-design solutions
              with your teams and deliver software that feels familiar, caring
              and future-ready.
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
              <li>• Practical innovation anchored in business reality.</li>
              <li>• Responsible AI adoption with governance and empathy.</li>
              <li>• Effective simplicity that keeps users confident.</li>
              <li>• Radical transparency across every phase of delivery.</li>
              <li>• Shared success metrics oriented toward long-term growth.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
