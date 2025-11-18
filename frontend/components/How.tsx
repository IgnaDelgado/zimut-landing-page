"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";
import { GridTunnelScene } from "@/components/GridTunnelScene";

export function How() {
  const { how } = useLanguage().content;

  return (
    <section id="plan" className="border-b border-zimut-gray-800 bg-zimut-gray-900">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <h2 className="section-title">{how.title}</h2>
          <p className="section-subtitle">{how.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-6">
            {how.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="card-glass flex gap-4 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zimut-green-700/50 bg-zimut-green-900/40 font-mono text-sm font-semibold text-zimut-green-200">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-zimut-green-200">{step.title}</p>
                  <p className="mt-2 text-sm text-zimut-gray-300">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="relative overflow-hidden rounded-[32px] border border-zimut-green-800/40 bg-zimut-gray-900/40 p-6"
          >
            <div className="pointer-events-none absolute inset-0 opacity-80">
              <GridTunnelScene />
            </div>
            <div className="relative space-y-4 text-sm text-zimut-green-200">
              <p className="eyebrow text-zimut-green-100">{how.calloutLabel}</p>
              <p className="text-2xl font-semibold text-zimut-gray-0">{how.title}</p>
              <p className="text-base text-zimut-gray-200">{how.subtitle}</p>
              <div className="rounded-2xl border border-white/15 bg-zimut-gray-900/70 p-4 text-sm text-zimut-gray-200">
                {how.aiNote}
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-zimut-gray-400">{how.calloutFooter}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
