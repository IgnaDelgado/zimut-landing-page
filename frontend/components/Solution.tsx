"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Solution() {
  const { solution } = useLanguage().content;
  const [activeId, setActiveId] = useState(solution.showcases[0]?.id ?? "");

  useEffect(() => {
    setActiveId(solution.showcases[0]?.id ?? "");
  }, [solution.showcases]);

  const activeShowcase = useMemo(
    () => solution.showcases.find((item) => item.id === activeId) ?? solution.showcases[0],
    [activeId, solution.showcases]
  );

  return (
    <section id="solution" className="border-b border-zimut-gray-800 bg-gradient-to-b from-zimut-gray-900 via-zimut-gray-900 to-zimut-gray-800">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-4"
        >
          <span className="badge-soft text-zimut-green-300">{solution.badge}</span>
          <h2 className="section-title">{solution.title}</h2>
          <p className="section-subtitle">{solution.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-2xl border border-zimut-green-700 bg-zimut-green-900/20 p-6 text-sm text-zimut-green-100"
        >
          <p className="text-base font-semibold text-zimut-gray-0">{solution.promise}</p>
          <p className="mt-2 text-sm text-zimut-green-200">{solution.note}</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            {solution.showcases.map((showcase) => {
              const active = showcase.id === activeShowcase?.id;
              return (
                <motion.button
                  key={showcase.id}
                  type="button"
                  onClick={() => setActiveId(showcase.id)}
                  whileHover={{ scale: 1.01 }}
                  className={`rounded-2xl border p-5 text-left transition-colors ${
                    active
                      ? "border-zimut-green-500 bg-zimut-green-900/20"
                      : "border-zimut-gray-700 bg-zimut-gray-800/80 hover:border-zimut-gray-600"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-zimut-gray-0">{showcase.label}</p>
                    <span className="text-[11px] uppercase tracking-[0.3em] text-zimut-gray-400">
                      {showcase.hero}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zimut-gray-300">{showcase.summary}</p>
                </motion.button>
              );
            })}
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-br from-zimut-green-800/40 via-transparent to-zimut-gray-900/20 blur-xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShowcase?.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="card-glass relative h-full overflow-hidden border-zimut-green-700/40 bg-zimut-gray-900/80 p-6"
              >
                <div className="flex flex-wrap gap-2">
                  {activeShowcase?.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-zimut-gray-700 bg-zimut-gray-800 px-3 py-1 text-xs text-zimut-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-zimut-gray-0">{activeShowcase?.title}</h3>
                <p className="mt-2 text-sm text-zimut-gray-300">{activeShowcase?.description}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeShowcase?.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-zimut-gray-700/80 bg-zimut-gray-900/60 p-4">
                      <p className="text-3xl font-bold text-zimut-green-300">{metric.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-zimut-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-zimut-gray-700/60 bg-zimut-gray-900/70">
                  {activeShowcase?.steps.map((step, index) => (
                    <div key={step.title} className="border-b border-zimut-gray-800 p-4 last:border-none">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zimut-green-200">
                        {String(index + 1).padStart(2, "0")} · {step.title}
                      </p>
                      <p className="mt-1 text-sm text-zimut-gray-300">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solution.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-glass flex h-full flex-col gap-3 p-6"
            >
              <p className="text-sm font-bold text-zimut-gray-0">{pillar.title}</p>
              <p className="text-sm text-zimut-gray-300">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
