"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Understand",
    desc: "We analyse your business, systems and constraints to understand the real problem to solve."
  },
  {
    title: "2. Design",
    desc: "We propose a clear, scalable solution aligned with your goals and context, not just with trends."
  },
  {
    title: "3. Build",
    desc: "We implement with high standards in security, robustness and maintainability."
  },
  {
    title: "4. Support",
    desc: "We guide adoption, iterate with feedback and evolve the solution as your needs change."
  }
];

export function How() {
  return (
    <section id="how" className="border-t border-white/5 bg-bgDark">
      <div className="mx-auto max-w-6xl section-padding">
        <div className="mb-8 max-w-xl">
          <h2 className="section-title">How we work, step by step.</h2>
          <p className="section-subtitle">
            No black boxes, no guesswork. You see the full path from idea to
            launch, and we keep you aligned with the original vision unless you
            decide to pivot.
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
