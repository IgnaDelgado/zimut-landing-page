"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web & app experiences",
    desc: "Custom platforms across web, mobile, and desktop designed to feel effortless for your users and resilient for your teams.",
    tags: ["Product strategy", "Full-stack squads", "Quality-first delivery"]
  },
  {
    title: "AI woven into your operations",
    desc: "We identify where intelligence adds value—from copilots to knowledge hubs—and integrate it with governance and clarity.",
    tags: ["Responsible AI", "Automation", "Custom agents"]
  },
  {
    title: "Process automation",
    desc: "Orchestrate workflows that remove repetitive work, sync data, and keep your people focused on high-impact decisions.",
    tags: ["Workflow design", "System integrations", "Data visibility"]
  },
  {
    title: "Modernisation & digitalisation",
    desc: "Transform legacy tools into modern ecosystems with upgraded architecture, security, and documentation you can trust.",
    tags: ["Legacy rebuilds", "Cloud journeys", "UX refresh"]
  },
  {
    title: "Bespoke systems",
    desc: "Build specialised solutions that map directly to your business rules, ensuring scalability without sacrificing nuance.",
    tags: ["Domain-driven design", "API-first", "Scalable foundations"]
  },
  {
    title: "Care & continuous support",
    desc: "Stay confident post-launch with proactive monitoring, optimisation, and a team that evolves alongside your goals.",
    tags: ["SLA-backed", "Enablement", "Ongoing improvement"]
  }
];

export function Services() {
  return (
    <section id="services" className="border-t border-white/5 bg-bgDark">
      <div className="mx-auto max-w-7xl section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="section-title">We craft software shaped around your needs.</h2>
          <p className="section-subtitle">
            ZIMUT builds robust, scalable solutions with AI as a strategic ally. Every engagement starts with understanding your context and ends with a product that feels tailored, calm, and future-ready.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-glass border-white/10 bg-white/5 p-6"
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
