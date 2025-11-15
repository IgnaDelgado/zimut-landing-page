"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Benefits() {
  const { benefits } = useLanguage().content;

  return (
    <section id="benefits" className="border-b border-zimut-gray-200 bg-zimut-gray-100">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <h2 className="section-title">{benefits.title}</h2>
          <p className="section-subtitle">{benefits.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.list.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-glass flex h-full flex-col gap-3 p-6"
            >
              <p className="text-sm font-semibold text-zimut-gray-900">{benefit.title}</p>
              <p className="text-sm text-zimut-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
