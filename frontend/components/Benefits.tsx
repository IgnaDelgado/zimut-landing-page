"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Clarity from day one",
    description:
      "Every project begins with guided discovery and transparent documentation so decisions stay grounded." 
  },
  {
    title: "Robust solutions, not templates",
    description:
      "We engineer bespoke products with security, scalability, and maintainability baked into every sprint." 
  },
  {
    title: "AI applied where it matters",
    description:
      "Intelligence is introduced only when it accelerates outcomes for your team, customers, or operations." 
  },
  {
    title: "Real partnership",
    description:
      "You get a caregiver mindset—steady communication, proactive support, and a team beside you throughout." 
  },
  {
    title: "Transparent processes",
    description:
      "Roadmaps, timelines, and budgets are shared openly so you always know what’s happening and why." 
  },
  {
    title: "Sustained business growth",
    description:
      "We measure value continuously and evolve the product to keep your organisation moving forward." 
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="border-t border-white/5 bg-gradient-to-b from-black via-[#0B0B0D] to-bgDark">
      <div className="mx-auto max-w-7xl section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="section-title">Benefits you feel at every step.</h2>
          <p className="section-subtitle">
            Choosing ZIMUT means partnering with a team that nurtures your technology just as much as your strategy. Here’s what that looks like in practice.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, delay: index * 0.08 }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-transparent to-sky/0 group-hover:from-mint/10 group-hover:to-sky/10"
              />
              <div className="relative">
                <p className="text-sm font-semibold text-white">{benefit.title}</p>
                <p className="mt-2 text-sm text-white/65">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
