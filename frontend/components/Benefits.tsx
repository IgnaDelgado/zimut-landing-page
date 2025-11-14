"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Benefits() {
  const { benefits } = useLanguage().content;

  return (
    <section id="benefits" className="border-t border-white/5 bg-gradient-to-b from-black via-[#0B0B0D] to-bgDark">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 max-w-3xl"
        >
          <div className="pointer-events-none absolute -left-20 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-sky/25 to-transparent blur-3xl" />
          <h2 className="section-title">{benefits.title}</h2>
          <p className="section-subtitle">{benefits.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.list.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_-35px_rgba(82,214,255,0.6)]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-transparent to-sky/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-mint/15 group-hover:to-sky/15"
              />
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-mint/30 to-transparent blur-3xl" />
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
