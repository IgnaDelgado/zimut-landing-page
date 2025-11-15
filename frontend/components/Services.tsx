"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Services() {
  const { services } = useLanguage().content;

  return (
    <section id="services" className="border-b border-zimut-gray-800 bg-gradient-to-b from-zimut-gray-900 via-zimut-gray-900 to-zimut-gray-800">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <h2 className="section-title">{services.title}</h2>
          <p className="section-subtitle">{services.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.list.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-glass flex h-full flex-col gap-3 p-6"
            >
              <h3 className="text-lg font-semibold text-zimut-gray-0">{service.title}</h3>
              <p className="text-sm text-zimut-gray-300">{service.desc}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-zimut-green-300">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zimut-green-700/40 bg-zimut-green-900/20 px-3 py-1 font-mono uppercase tracking-[0.2em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
