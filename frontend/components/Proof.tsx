"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Proof() {
  const { proof } = useLanguage().content;

  return (
    <section id="proof" className="border-b border-zimut-gray-800 bg-zimut-gray-900">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-4"
        >
          <span className="badge-soft text-zimut-green-300">{proof.badge}</span>
          <h2 className="section-title">{proof.title}</h2>
          <p className="section-subtitle">{proof.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-8 grid gap-4 rounded-2xl border border-zimut-gray-700 bg-zimut-gray-800/70 p-6 text-xs uppercase tracking-[0.35em] text-zimut-gray-400 sm:text-[11px]"
        >
          <p className="text-zimut-gray-500">{proof.logoTitle}</p>
          <div className="flex flex-wrap items-center gap-6 text-zimut-gray-200">
            {proof.logos.map((logo) => (
              <span key={logo} className="font-semibold tracking-[0.4em] text-sm text-zimut-gray-0">
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="grid gap-6">
            {proof.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-glass h-full p-6"
              >
                <p className="text-lg text-zimut-gray-0">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-zimut-green-200">{testimonial.author}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-zimut-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="card-glass flex flex-col gap-6 p-6"
          >
            {proof.stats.map((stat) => (
              <div key={stat.label} className="border-b border-zimut-gray-800 pb-4 last:border-0 last:pb-0">
                <p className="text-4xl font-bold text-zimut-green-300">{stat.value}</p>
                <p className="mt-1 text-sm text-zimut-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
