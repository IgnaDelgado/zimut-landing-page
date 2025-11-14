"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Discover",
    desc: "Immersive workshops to learn your business model, systems, users and the root causes behind each challenge."
  },
  {
    title: "2. Co-design",
    desc: "We map scenarios together, define success metrics and outline an architecture that balances ambition with stability."
  },
  {
    title: "3. Build & validate",
    desc: "Multidisciplinary squads deliver increments with governance, security and rigorous testing baked in."
  },
  {
    title: "4. Support & evolve",
    desc: "Training, analytics and iteration loops ensure adoption, measure value and adapt the solution as your goals mature."
  }
];

export function How() {
  return (
    <section id="how" className="border-t border-white/5 bg-bgDark">
      <div className="mx-auto max-w-6xl section-padding">
        <div className="mb-8 max-w-xl">
          <h2 className="section-title">How we care for your initiatives.</h2>
          <p className="section-subtitle">
            Transparent rituals, proactive updates and shared tools keep you in
            control. We stay aligned with the original purpose while remaining
            agile to informed change.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="card-glass p-4 text-sm"
            >
              <p className="text-xs text-mint font-semibold">{step.title}</p>
              <p className="mt-2 text-white/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
