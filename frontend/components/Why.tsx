"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Why() {
  const { why } = useLanguage().content;

  return (
    <section id="why" className="border-b border-zimut-gray-800 bg-zimut-gray-900">
      <div className="section-wrapper section-padding">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h2 className="section-title">{why.title}</h2>
            {why.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-zimut-gray-300 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-glass relative flex flex-col gap-4 p-6"
          >
            <p className="eyebrow">{why.cardTitle}</p>
            <ul className="space-y-3 text-sm text-zimut-gray-300">
              {why.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-zimut-green-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
