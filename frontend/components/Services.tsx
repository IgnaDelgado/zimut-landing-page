"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Services() {
  const { services } = useLanguage().content;

  return (
    <section id="services" className="border-t border-white/5 bg-bgDark">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 max-w-3xl"
        >
          <div className="pointer-events-none absolute -left-14 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-mint/25 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-16 h-48 w-48 rounded-full bg-gradient-to-br from-sky/20 to-transparent blur-3xl" />
          <h2 className="section-title">{services.title}</h2>
          <p className="section-subtitle">{services.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.list.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="card-glass group relative overflow-hidden p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-mint/0 via-white/5 to-sky/0" />
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-mint/30 to-transparent blur-3xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-white/65">{service.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
