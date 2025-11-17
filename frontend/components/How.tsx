"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function How() {
  const { how } = useLanguage().content;

  return (
    <section id="plan" className="border-b border-zimut-gray-800 bg-zimut-gray-900">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <h2 className="section-title">{how.title}</h2>
          <p className="section-subtitle">{how.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {how.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="card-glass flex h-full flex-col gap-3 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-zimut-green-300">{step.title}</p>
              <p className="text-sm text-zimut-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-zimut-green-700 bg-zimut-green-900/30 p-6 text-sm text-zimut-green-200"
        >
          <div className="flex items-start gap-3">
            <span aria-hidden className="mt-0.5 text-zimut-green-300">ℹ︎</span>
            <p>{how.aiNote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
