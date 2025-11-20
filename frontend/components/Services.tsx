"use client";

import { motion } from "framer-motion";
import { FiArrowRightCircle, FiCpu, FiLayers, FiStar } from "react-icons/fi";

import { useLanguage } from "@/components/LanguageProvider";

export function Services() {
  const { services } = useLanguage().content;

  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-zimut-gray-800 bg-gradient-to-b from-[#071412] via-[#071412] to-[#050c0b]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_40%,rgba(37,255,189,0.15),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.18),transparent_30%)] opacity-70" />
      </div>
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <div className="flex items-center gap-3 text-zimut-green-200">
            <FiStar aria-hidden />
            <h2 className="section-title">{services.title}</h2>
          </div>
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
              className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-zimut-gray-700/70 bg-zimut-gray-900/60 p-6 shadow-[0_30px_120px_-90px_rgba(37,255,189,0.5)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zimut-green-900/10 via-transparent to-sky-500/10" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-zimut-gray-0">{service.title}</h3>
                  <p className="mt-2 text-sm text-zimut-gray-300">{service.desc}</p>
                </div>
                <span className="rounded-full border border-zimut-green-700/50 bg-zimut-gray-900/80 p-2 text-zimut-green-200">
                  {i % 2 === 0 ? <FiCpu aria-hidden /> : <FiLayers aria-hidden />}
                </span>
              </div>
              <div className="relative mt-2 flex flex-wrap gap-2 text-[11px] text-zimut-green-300">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-zimut-green-700/40 bg-zimut-green-900/20 px-3 py-1 font-mono uppercase tracking-[0.2em]"
                  >
                    <FiArrowRightCircle className="text-[12px]" aria-hidden />
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
