"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Understand",
    desc: "Deep-dive sessions map your business, systems, and the friction holding you back. We capture goals and constraints clearly."
  },
  {
    title: "2. Design with clarity",
    desc: "We co-create a roadmap, define success metrics, and outline the architecture—evaluating AI only when it adds true value."
  },
  {
    title: "3. Build & automate",
    desc: "Multidisciplinary squads deliver in visible increments, blending robust engineering, security, and purposeful automation."
  },
  {
    title: "4. Support & evolve",
    desc: "Post-launch, we train teams, monitor outcomes, and iterate so your product stays aligned with your growth."
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
            Transparent rituals, proactive updates, and shared tools keep you grounded. We move with you, not ahead of you, so every decision supports the original vision.
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
          className="mt-10 rounded-2xl border border-mint/20 bg-mint/10 p-6 text-sm text-mint"
        >
          Always evaluating AI’s role: we introduce intelligence where it amplifies outcomes, ensuring automation supports people rather than replacing them.
        </motion.div>
      </div>
    </section>
  );
}
