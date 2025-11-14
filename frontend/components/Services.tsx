"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web & mobile development",
    desc: "Modern, fast and secure applications built around your business, not the other way around.",
    tags: ["Next.js", "React Native", "Scalable architectures"]
  },
  {
    title: "Applied AI for real use cases",
    desc: "From AI agents and chatbots to intelligent process automation that actually moves the needle.",
    tags: ["AI-first", "Automation", "Agents & assistants"]
  },
  {
    title: "Modernisation & digital transformation",
    desc: "We take your existing systems into a new stage: clearer, integrated and maintainable.",
    tags: ["Integrations", "Migrations", "System redesign"]
  },
  {
    title: "Process automation",
    desc: "We reduce repetitive work so that your team can focus on what truly matters.",
    tags: ["Workflows", "Lightweight automation", "Connectors"]
  }
];

export function Services() {
  return (
    <section id="services" className="border-t border-white/5 bg-bgDark">
      <div className="mx-auto max-w-6xl section-padding">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">What we build for you.</h2>
            <p className="section-subtitle">
              We design and develop tailored software, using AI as a strategic
              ally, not as decoration. Everything starts from your real problem,
              not from our favorite stack.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-glass p-5"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65">{s.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {t}
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
