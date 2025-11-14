"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Product & platform stewardship",
    desc: "Tailored web, mobile and desktop solutions that respect your operations while elevating performance and reliability.",
    tags: ["Full-stack squads", "Secure architectures", "SLA-backed care"]
  },
  {
    title: "AI enablement & automation",
    desc: "From copilots and knowledge assistants to workflow intelligence that removes repetitive tasks without sacrificing control.",
    tags: ["Responsible AI", "Process automation", "Custom agents"]
  },
  {
    title: "Experience modernisation",
    desc: "Rebuild legacy systems into intuitive, future-proof experiences with clear data flows, governance and documentation.",
    tags: ["System redesign", "Integrations", "Cloud migrations"]
  },
  {
    title: "Growth enablement programs",
    desc: "Long-term partnerships with ongoing optimisation, analytics and training so teams adopt technology with confidence.",
    tags: ["Analytics", "Enablement", "Continuous improvement"]
  }
];

export function Services() {
  return (
    <section id="services" className="border-t border-white/5 bg-bgDark">
      <div className="mx-auto max-w-6xl section-padding">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">What we nurture for your organisation.</h2>
            <p className="section-subtitle">
              Every engagement begins with understanding. We translate insight
              into resilient platforms, pairing AI with thoughtful design so
              your teams can focus on the work that matters most.
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
