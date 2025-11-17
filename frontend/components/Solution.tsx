"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Solution() {
  const { solution } = useLanguage().content;

  return (
    <section id="solution" className="border-b border-zimut-gray-800 bg-gradient-to-b from-zimut-gray-900 via-zimut-gray-900 to-zimut-gray-800">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-4"
        >
          <span className="badge-soft text-zimut-green-300">{solution.badge}</span>
          <h2 className="section-title">{solution.title}</h2>
          <p className="section-subtitle">{solution.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-2xl border border-zimut-green-700 bg-zimut-green-900/20 p-6 text-sm text-zimut-green-100"
        >
          <p className="text-base font-semibold text-zimut-gray-0">{solution.promise}</p>
          <p className="mt-2 text-sm text-zimut-green-200">{solution.note}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solution.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-glass flex h-full flex-col gap-3 p-6"
            >
              <p className="text-sm font-bold text-zimut-gray-0">{pillar.title}</p>
              <p className="text-sm text-zimut-gray-300">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
