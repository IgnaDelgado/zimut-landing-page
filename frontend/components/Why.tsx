"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Why() {
  const { why } = useLanguage().content;

  return (
    <section id="why" className="border-t border-white/5 bg-gradient-to-b from-bgDark via-[#09090C] to-black">
      <div className="section-wrapper section-padding">
        <div className="relative grid items-start gap-14 md:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-20 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-mint/30 to-transparent blur-3xl" />
            <h2 className="section-title">{why.title}</h2>
            {why.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base text-white/70 md:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="card-glass group relative overflow-hidden p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-white/10 to-sky/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -top-10 right-6 h-24 w-24 rounded-full bg-gradient-to-br from-mint/25 to-transparent blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{why.cardTitle}</p>
            <ul className="relative mt-5 space-y-3 text-sm text-white/70">
              {why.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
