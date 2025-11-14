"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web & app development",
    desc: "Websites, platforms, and mobile apps crafted to feel effortless for your users and resilient for your teams.",
    tags: ["Product strategy", "Full-stack squads", "Experience design"]
  },
  {
    title: "AI integration across processes",
    desc: "From virtual agents to production insights, we adapt AI to your operations only when it provides real leverage.",
    tags: ["Responsible AI", "Knowledge hubs", "Copilot design"]
  },
  {
    title: "Task and workflow automation",
    desc: "Automate repetitive work, orchestrate data, and keep people focused on the decisions that grow the business.",
    tags: ["Workflow design", "System integrations", "Data visibility"]
  },
  {
    title: "Modernisation & digitalisation",
    desc: "Upgrade legacy systems into modern ecosystems with security, scalability, and clear documentation built in.",
    tags: ["Legacy rebuilds", "Cloud journeys", "UX refresh"]
  },
  {
    title: "Tailor-made systems",
    desc: "Bespoke solutions aligned to your industry, processes, and regulations—no templates, only what you need.",
    tags: ["Domain-driven design", "API-first", "Scalable foundations"]
  },
  {
    title: "Maintenance & continuous care",
    desc: "Proactive monitoring, optimisation, and enablement so your technology stays ahead of what’s next.",
    tags: ["SLA-backed", "Ongoing improvement", "Team enablement"]
  }
];

export function Services() {
  return (
    <section id="services" className="border-t border-white/5 bg-bgDark">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="section-title">We craft software shaped around your needs.</h2>
          <p className="section-subtitle">
            Our team designs robust, scalable solutions that honour your context. AI is always an option, never a gimmick—used only when it amplifies impact for your users and teams.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-glass group relative overflow-hidden p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-mint/0 via-white/5 to-sky/0" />
              </div>
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
