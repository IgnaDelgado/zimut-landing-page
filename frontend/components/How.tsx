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
      <div className="mx-auto max-w-7xl section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
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
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="card-glass border-white/10 bg-white/5 p-5 text-sm"
            >
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-mint/20 bg-mint/10 p-6 text-sm text-mint"
        >
          We always evaluate whether AI adds strategic value. If it helps, we integrate it with intention. If it doesn’t, we keep the solution simple and effective.
        </motion.div>
      </div>
    </section>
  );
}
