"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Problem() {
  const { problem } = useLanguage().content;

  return (
    <section id="problem" className="border-b border-zimut-gray-800 bg-zimut-gray-900">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-4"
        >
          <span className="badge-soft text-zimut-green-300">{problem.badge}</span>
          <h2 className="section-title">{problem.title}</h2>
          <p className="section-subtitle">{problem.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {problem.pains.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card-glass h-full p-6"
            >
              <p className="text-sm font-semibold text-zimut-gray-0">{pain.title}</p>
              <p className="mt-3 text-sm text-zimut-gray-300">{pain.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-zimut-green-700/40 bg-zimut-green-900/20 p-6 text-sm text-zimut-green-200"
        >
          <div className="flex items-start gap-3">
            <span aria-hidden className="text-lg text-zimut-green-400">!</span>
            <p>{problem.agitation}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
