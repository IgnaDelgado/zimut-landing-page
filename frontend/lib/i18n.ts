export type Language = "en" | "es";

export type TranslationContent = {
  nav: {
    brandTagline: string;
    brandDescription: string;
    links: { id: string; label: string }[];
    cta: string;
    localeLabel: string;
    locales: { code: Language; label: string; flag: string }[];
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: { title: string; description: string }[];
    timeline: { label: string; copy: string }[];
    cardLabel: string;
    cardStatus: string;
    cardNote: string;
  };
  services: {
    title: string;
    subtitle: string;
    list: { title: string; desc: string; tags: string[] }[];
  };
  why: {
    title: string;
    paragraphs: string[];
    cardTitle: string;
    bullets: string[];
  };
  how: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
    aiNote: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    list: { title: string; description: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    submit: string;
    sending: string;
    success: string;
    error: string;
    validation: string;
    pills: string[];
  };
  footer: {
    rights: string;
    message: string;
  };
};

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      brandTagline: "ZIMUT",
      brandDescription: "Guiding software clarity with AI care",
      links: [
        { id: "services", label: "Services" },
        { id: "how", label: "How we work" },
        { id: "benefits", label: "Benefits" },
        { id: "why", label: "Why Zimut" },
        { id: "contact", label: "Contact" }
      ],
      cta: "Book a clarity call",
      localeLabel: "Language",
      locales: [
        { code: "es", label: "ESP", flag: "🇦🇷" },
        { code: "en", label: "US", flag: "🇺🇸" }
      ]
    },
    hero: {
      badge: "ZIMUT • SOFTWARE GUIDANCE",
      title: "Technology solutions that guide you toward your best version.",
      description:
        "We bring software clarity to organisations overwhelmed by buzzwords and rapid AI trends. ZIMUT translates technical complexity into guided, human-centred products so you can grow with precision and calm.",
      primaryCta: "Let’s talk about your project",
      secondaryCta: "Explore our solutions →",
      highlights: [
        {
          title: "Clarity first",
          description:
            "Discovery rituals and documentation that translate ideas into confident direction."
        },
        {
          title: "AI with purpose",
          description:
            "Intelligence evaluated as strategy, ensuring every automation earns its place."
        },
        {
          title: "Care that endures",
          description:
            "Steady partnership and enablement long after launch day."
        }
      ],
      timeline: [
        {
          label: "Orientation",
          copy: "Joint workshops surface objectives, constraints, and user truths."
        },
        {
          label: "Navigation",
          copy: "We chart a roadmap, align teams, and select the technologies that fit."
        },
        {
          label: "Momentum",
          copy: "Incremental releases pair robust engineering with measurable outcomes."
        }
      ],
      cardLabel: "Caregiver dashboard",
      cardStatus: "Live support",
      cardNote:
        "Every milestone includes visibility into decisions, scope, and results—no more guessing how your product is progressing."
    },
    services: {
      title: "We craft software shaped around your needs.",
      subtitle:
        "Our team designs robust, scalable solutions that honour your context. AI is always an option, never a gimmick—used only when it amplifies impact for your users and teams.",
      list: [
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
      ]
    },
    why: {
      title: "We bring clarity to a world saturated with technological noise.",
      paragraphs: [
        "Companies are overwhelmed by artificial intelligence promises, shiny new tools, and contradictory advice. Growth feels urgent, yet the path is foggy.",
        "ZIMUT’s purpose is to simplify the complex. We translate ideas into tangible roadmaps, build with honesty, and deliver software that genuinely helps people and businesses thrive."
      ],
      cardTitle: "Why teams choose ZIMUT",
      bullets: [
        "Honest conversations that surface the real problem to solve.",
        "Responsible AI adoption grounded in measurable, long-term value.",
        "Effective simplicity so users feel confident, not confused.",
        "Transparency across scope, timing, and investment from day one.",
        "Shared metrics that nurture sustainable growth together."
      ]
    },
    how: {
      title: "A process that looks after your business.",
      subtitle:
        "We stay in sync from discovery to launch: transparent rituals, visible progress, and shared decision making so nothing drifts from the original vision.",
      steps: [
        {
          title: "1. Understand",
          desc: "We dive into how your system works today, the people behind it, and the problems slowing you down."
        },
        {
          title: "2. Design with clarity",
          desc: "Together we define a clear, scalable solution, outlining scope, success metrics, and the right technology mix."
        },
        {
          title: "3. Build & automate",
          desc: "Cross-functional squads deliver in steady increments with quality, security, and maintainability at the core."
        },
        {
          title: "4. Support & evolve",
          desc: "We stay close after launch—training, monitoring, and iterating so your product keeps pace with the business."
        }
      ],
      aiNote:
        "We always evaluate whether AI adds strategic value. If it helps, we integrate it with intention. If it doesn’t, we keep the solution simple and effective."
    },
    benefits: {
      title: "Benefits you feel at every step.",
      subtitle:
        "Choosing ZIMUT means partnering with a team that nurtures your technology just as much as your strategy. Here’s what that looks like in practice.",
      list: [
        {
          title: "Clarity from day one",
          description:
            "Every project begins with guided discovery and transparent documentation so decisions stay grounded."
        },
        {
          title: "Robust solutions, not templates",
          description:
            "We engineer bespoke products with security, scalability, and maintainability baked into every sprint."
        },
        {
          title: "AI applied where it matters",
          description:
            "Intelligence is introduced only when it accelerates outcomes for your team, customers, or operations."
        },
        {
          title: "Real partnership",
          description:
            "You get a caregiver mindset—steady communication, proactive support, and a team beside you throughout."
        },
        {
          title: "Transparent processes",
          description:
            "Roadmaps, timelines, and budgets are shared openly so you always know what’s happening and why."
        },
        {
          title: "Sustained business growth",
          description:
            "We measure value continuously and evolve the product to keep your organisation moving forward."
        }
      ]
    },
    contact: {
      title: "Let’s talk",
      subtitle:
        "Tell us briefly about your project, and we’ll come back with ideas, questions and next steps.",
      fields: {
        name: "Name *",
        email: "Email *",
        company: "Company / Project",
        message: "Tell us briefly what you need *"
      },
      submit: "Send message",
      sending: "Sending...",
      success: "Your message has been sent. We’ll get back to you soon.",
      error: "Something went wrong. Please try again.",
      validation: "Please fill in all required fields.",
      pills: ["Discovery", "Strategy", "Delivery", "Care"]
    },
    footer: {
      rights: "All rights reserved.",
      message: "Software clarity, guided with care."
    }
  },
  es: {
    nav: {
      brandTagline: "ZIMUT",
      brandDescription: "Claridad de software guiada con cuidado y IA",
      links: [
        { id: "services", label: "Servicios" },
        { id: "how", label: "Cómo trabajamos" },
        { id: "benefits", label: "Beneficios" },
        { id: "why", label: "Por qué Zimut" },
        { id: "contact", label: "Contacto" }
      ],
      cta: "Agenda una llamada",
      localeLabel: "Idioma",
      locales: [
        { code: "es", label: "ESP", flag: "🇦🇷" },
        { code: "en", label: "US", flag: "🇺🇸" }
      ]
    },
    hero: {
      badge: "ZIMUT • GUÍA DE SOFTWARE",
      title: "Soluciones tecnológicas que te acompañan hacia tu mejor versión.",
      description:
        "Aportamos claridad a organizaciones abrumadas por la jerga y las tendencias aceleradas de IA. ZIMUT traduce la complejidad técnica en productos guiados y humanos para que crezcas con precisión y calma.",
      primaryCta: "Hablemos de tu proyecto",
      secondaryCta: "Explorá nuestras soluciones →",
      highlights: [
        {
          title: "Claridad ante todo",
          description:
            "Rituales de descubrimiento y documentación que convierten ideas en dirección segura."
        },
        {
          title: "IA con propósito",
          description:
            "Inteligencia evaluada como estrategia, asegurando que cada automatización tenga sentido."
        },
        {
          title: "Acompañamiento duradero",
          description:
            "Un vínculo estable y formativo mucho después del lanzamiento."
        }
      ],
      timeline: [
        {
          label: "Orientación",
          copy: "Talleres conjuntos que revelan objetivos, límites y verdades de tus usuarios."
        },
        {
          label: "Navegación",
          copy: "Armamos la hoja de ruta, alineamos equipos y elegimos la tecnología justa."
        },
        {
          label: "Impulso",
          copy: "Lanzamientos incrementales que combinan ingeniería sólida con resultados medibles."
        }
      ],
      cardLabel: "Panel de acompañamiento",
      cardStatus: "Soporte activo",
      cardNote:
        "Cada hito incluye visibilidad sobre decisiones, alcance y resultados—sin volver a adivinar cómo avanza tu producto."
    },
    services: {
      title: "Diseñamos software hecho a tu medida.",
      subtitle:
        "Creamos soluciones robustas y escalables que respetan tu contexto. La IA es una opción, nunca un truco: la aplicamos solo cuando potencia el impacto en tus equipos y clientes.",
      list: [
        {
          title: "Desarrollo web y mobile",
          desc: "Sitios, plataformas y apps móviles pensadas para usuarios fluidos y equipos tranquilos.",
          tags: ["Estrategia de producto", "Equipos full-stack", "Diseño de experiencia"]
        },
        {
          title: "Integración de IA en procesos",
          desc: "Desde agentes virtuales hasta insights productivos, adaptamos la IA a tus operaciones cuando realmente aporta valor.",
          tags: ["IA responsable", "Repositorios de conocimiento", "Diseño de copilotos"]
        },
        {
          title: "Automatización de tareas y flujos",
          desc: "Automatizamos lo repetitivo, orquestamos datos y dejamos a las personas enfocadas en decisiones clave.",
          tags: ["Diseño de flujos", "Integraciones", "Visibilidad de datos"]
        },
        {
          title: "Modernización y digitalización",
          desc: "Actualizamos sistemas legados en ecosistemas modernos con seguridad, escalabilidad y documentación clara.",
          tags: ["Reconstrucción legacy", "Viajes a la nube", "Renovación UX"]
        },
        {
          title: "Sistemas a medida",
          desc: "Soluciones alineadas a tu industria, procesos y regulaciones—sin plantillas, solo lo que necesitás.",
          tags: ["Diseño guiado por dominio", "API-first", "Bases escalables"]
        },
        {
          title: "Mantenimiento y cuidado continuo",
          desc: "Monitoreo proactivo, optimización y acompañamiento para que tu tecnología se mantenga vigente.",
          tags: ["SLA asegurado", "Mejora constante", "Enablement de equipos"]
        }
      ]
    },
    why: {
      title: "Aportamos claridad en un mundo lleno de ruido tecnológico.",
      paragraphs: [
        "Las empresas están saturadas de promesas de inteligencia artificial, herramientas brillantes y consejos contradictorios. Crecer urge, pero el camino no se ve claro.",
        "La misión de ZIMUT es simplificar lo complejo. Convertimos ideas en planes concretos, construimos con honestidad y entregamos software que ayuda a las personas y negocios a prosperar."
      ],
      cardTitle: "Por qué nos eligen",
      bullets: [
        "Conversaciones honestas que detectan el problema real a resolver.",
        "Adopción responsable de IA basada en valor medible y sostenible.",
        "Simplicidad efectiva para que las personas usen la tecnología con confianza.",
        "Transparencia en alcance, tiempos e inversión desde el primer día.",
        "Métricas compartidas que impulsan un crecimiento sostenido en conjunto."
      ]
    },
    how: {
      title: "Un proceso que cuida a tu negocio.",
      subtitle:
        "Nos mantenemos alineados de descubrimiento a lanzamiento: rituales transparentes, avances visibles y decisiones compartidas para no perder el rumbo.",
      steps: [
        {
          title: "1. Entender",
          desc: "Investigamos cómo funciona hoy tu sistema, las personas detrás y los frenos que encontrás."
        },
        {
          title: "2. Diseñar con claridad",
          desc: "Definimos juntos una solución clara y escalable: alcance, métricas de éxito y la tecnología adecuada."
        },
        {
          title: "3. Construir y automatizar",
          desc: "Equipos multidisciplinarios entregan en incrementos constantes con calidad y seguridad como base."
        },
        {
          title: "4. Acompañar y evolucionar",
          desc: "Seguimos cerca tras el lanzamiento: capacitación, monitoreo e iteración para acompañar el negocio."
        }
      ],
      aiNote:
        "Siempre evaluamos si la IA aporta valor estratégico. Si suma, la integramos con intención. Si no, mantenemos la solución simple y efectiva."
    },
    benefits: {
      title: "Beneficios que se sienten en cada paso.",
      subtitle:
        "Elegir ZIMUT es asociarte con un equipo que cuida tu tecnología tanto como tu estrategia. Así se ve en acción.",
      list: [
        {
          title: "Claridad desde el inicio",
          description:
            "Cada proyecto arranca con descubrimiento guiado y documentación transparente para sostener las decisiones."
        },
        {
          title: "Soluciones robustas, no plantillas",
          description:
            "Ingenierizamos productos a medida con seguridad, escalabilidad y mantenimiento en cada sprint."
        },
        {
          title: "IA donde genera impacto",
          description:
            "Aplicamos inteligencia solo cuando acelera resultados para tu equipo, clientes u operaciones."
        },
        {
          title: "Acompañamiento real",
          description:
            "Mentalidad de cuidado: comunicación constante, soporte proactivo y un equipo a tu lado siempre."
        },
        {
          title: "Procesos transparentes",
          description:
            "Roadmaps, tiempos e inversiones compartidas para que sepas qué ocurre y por qué."
        },
        {
          title: "Crecimiento sostenido",
          description:
            "Medimos el valor en forma continua y evolucionamos el producto para impulsar tu organización."
        }
      ]
    },
    contact: {
      title: "Conversemos",
      subtitle:
        "Contanos brevemente sobre tu proyecto y volvemos con ideas, preguntas y próximos pasos.",
      fields: {
        name: "Nombre *",
        email: "Email *",
        company: "Empresa / Proyecto",
        message: "Contanos brevemente qué necesitás *"
      },
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "Tu mensaje fue enviado. Te contactaremos pronto.",
      error: "Algo salió mal. Intentá nuevamente.",
      validation: "Completá todos los campos obligatorios.",
      pills: ["Descubrimiento", "Estrategia", "Entrega", "Acompañamiento"]
    },
    footer: {
      rights: "Todos los derechos reservados.",
      message: "Claridad en software, guiada con cuidado."
    }
  }
};
