"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Understand",
    desc: "We dive into how your system works today, the people behind it, and the problems slowing you down."
  },
  {
    title: "2. Design with clarity",
    desc: "Together we define a clear, scalable solution, outlining scope, success metrics, and the right technology mix."
  },
  {
    title: "3. Build & automate",
    desc: "Cross-functional squads deliver in steady increments with quality, security, and maintainability at the core."
  },
  {
    title: "4. Support & evolve",
    desc: "We stay close after launch—training, monitoring, and iterating so your product keeps pace with the business."
  }
];

export function How() {
  return (
    <section id="how" className="border-t border-white/5 bg-bgDark">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="section-title">A process that looks after your business.</h2>
          <p className="section-subtitle">
            We stay in sync from discovery to launch: transparent rituals, visible progress, and shared decision making so nothing drifts from the original vision.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="card-glass group relative overflow-hidden p-6 text-sm"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-white/5 to-sky/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint/80">
                {step.title}
              </p>
              <p className="mt-2 text-white/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-14 rounded-3xl border border-mint/30 bg-gradient-to-br from-mint/10 via-transparent to-sky/5 p-7 text-base text-mint shadow-[0_20px_50px_-30px_rgba(139,228,200,0.8)]"
        >
          We always evaluate whether AI adds strategic value. If it helps, we integrate it with intention. If it doesn’t, we keep the solution simple and effective.
        </motion.div>
      </div>
    </section>
  );
}
