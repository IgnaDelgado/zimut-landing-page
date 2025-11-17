"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Stakes() {
  const { stakes } = useLanguage().content;

  return (
    <section id="stakes" className="border-b border-zimut-gray-800 bg-gradient-to-b from-zimut-gray-900 via-zimut-gray-900 to-zimut-gray-800">
      <div className="section-wrapper section-padding grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <span className="badge-soft text-zimut-green-300">{stakes.badge}</span>
          <h2 className="section-title">{stakes.title}</h2>
          <p className="section-subtitle">{stakes.subtitle}</p>
          <ul className="mt-6 space-y-4">
            {stakes.consequences.map((consequence) => (
              <li key={consequence.label} className="flex gap-4 rounded-2xl border border-zimut-gray-800 bg-zimut-gray-900/70 p-4">
                <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-zimut-green-400" />
                <div>
                  <p className="text-sm font-semibold text-zimut-gray-0">{consequence.label}</p>
                  <p className="text-sm text-zimut-gray-300">{consequence.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-zimut-green-200">{stakes.finalReminder}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-glass space-y-5 p-6"
        >
          <div>
            <p className="eyebrow text-zimut-green-200">{stakes.ctaLabel}</p>
            <p className="mt-3 text-2xl font-semibold text-zimut-gray-0">{stakes.ctaTitle}</p>
            <p className="mt-2 text-sm text-zimut-gray-300">{stakes.ctaSubtitle}</p>
          </div>
          <a href="#contact" className="cta-primary block text-center text-sm">
            {stakes.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
