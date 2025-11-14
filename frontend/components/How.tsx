"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function How() {
  const { how } = useLanguage().content;

  return (
    <section id="how" className="border-t border-white/5 bg-bgDark">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 max-w-3xl"
        >
          <div className="pointer-events-none absolute -left-16 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-mint/20 to-transparent blur-3xl" />
          <h2 className="section-title">{how.title}</h2>
          <p className="section-subtitle">{how.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {how.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="card-glass group relative overflow-hidden p-6 text-sm"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-white/5 to-sky/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -bottom-8 right-0 h-20 w-20 rounded-full bg-gradient-to-br from-sky/30 to-transparent blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint/80">{step.title}</p>
              <p className="mt-2 text-white/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-14 rounded-3xl border border-mint/30 bg-gradient-to-br from-mint/10 via-transparent to-sky/5 p-7 text-base text-mint shadow-[0_20px_50px_-30px_rgba(139,228,200,0.8)]"
        >
          {how.aiNote}
        </motion.div>
      </div>
    </section>
  );
}
