"use client";

import { motion } from "framer-motion";
import { FiAlertTriangle, FiCpu, FiDivideSquare, FiShieldOff } from "react-icons/fi";

import { useLanguage } from "@/components/LanguageProvider";

export function Problem() {
  const { problem } = useLanguage().content;

  return (
    <section id="problem" className="relative overflow-hidden border-b border-zimut-gray-800 bg-[#06100f]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_35%)]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-zimut-green-600/40 to-transparent" />
      </div>
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-4"
        >
          <span className="badge-soft text-zimut-green-300">
            <FiAlertTriangle aria-hidden />
            {problem.badge}
          </span>
          <h2 className="section-title">{problem.title}</h2>
          <p className="section-subtitle">{problem.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {problem.pains.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-zimut-gray-700/70 bg-zimut-gray-900/70 p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-zimut-green-900/10 to-transparent" />
              <div className="relative flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zimut-green-800/40 bg-zimut-gray-900/70 text-zimut-green-200">
                  {index === 0 ? <FiDivideSquare aria-hidden /> : index === 1 ? <FiCpu aria-hidden /> : <FiShieldOff aria-hidden />}
                </span>
                <div>
                  <p className="text-sm font-semibold text-zimut-gray-0">{pain.title}</p>
                  <p className="mt-3 text-sm text-zimut-gray-300">{pain.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-zimut-green-700/40 bg-zimut-green-900/20 p-6 text-sm text-zimut-green-200"
        >
          <div className="flex items-start gap-3">
            <span aria-hidden className="text-lg text-zimut-green-400">!</span>
            <p>{problem.agitation}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
