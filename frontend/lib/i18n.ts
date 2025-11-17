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
  problem: {
    badge: string;
    title: string;
    subtitle: string;
    pains: { title: string; description: string }[];
    agitation: string;
  };
  solution: {
    badge: string;
    title: string;
    subtitle: string;
    promise: string;
    note: string;
    pillars: { title: string; description: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    list: { title: string; desc: string; tags: string[] }[];
  };
  how: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
    aiNote: string;
  };
  proof: {
    badge: string;
    title: string;
    subtitle: string;
    logoTitle: string;
    logos: string[];
    testimonials: { quote: string; author: string; role: string }[];
    stats: { value: string; label: string }[];
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
    stakesTitle: string;
    stakes: string[];
    finalCta: string;
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
      brandDescription: "AI care for clarity-driven growth",
      links: [
        { id: "problem", label: "The problem" },
        { id: "solution", label: "Our promise" },
        { id: "services", label: "What we build" },
        { id: "plan", label: "Plan" },
        { id: "proof", label: "Proof" },
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
      badge: "AI CARE · SOFTWARE WITHOUT NOISE",
      title: "Grow faster with software clarity and a guide you can trust.",
      description:
        "ZIMUT removes the “biribiri” from technology for SMB leaders. We translate AI into practical systems that optimise operations, modernise platforms, and keep teams confident every time you scale.",
      primaryCta: "Let’s design your roadmap",
      secondaryCta: "See how we work →",
      highlights: [
        {
          title: "Human-first clarity",
          description: "We listen, map your system, and turn ideas into a shared, stress-free plan."
        },
        {
          title: "AI as leverage",
          description: "Intelligence is applied intentionally: one platform, one agent, one chain at a time."
        },
        {
          title: "Care that keeps momentum",
          description: "We stay after launch with monitoring, training, and optimisation rituals."
        }
      ],
      timeline: [
        {
          label: "Orientation",
          copy: "We uncover goals, constraints, and the human stories behind your system."
        },
        {
          label: "Navigation",
          copy: "Clear roadmaps, service blueprints, and the right stack to deliver them."
        },
        {
          label: "Momentum",
          copy: "Incremental releases that combine robust engineering with measurable value."
        }
      ],
      cardLabel: "Guidance dashboard",
      cardStatus: "Live support",
      cardNote:
        "Every milestone is documented, costed, and visible so you never guess how the project is performing."
    },
    problem: {
      badge: "WE KNOW THE STRUGGLE",
      title: "Does this sound familiar?",
      subtitle:
        "Software promises pile up, but your team still faces chaos, manual work, and fear of choosing the wrong AI path.",
      pains: [
        {
          title: "Endless noise",
          description: "Vendors throw jargon while no one explains how AI would actually fix your bottleneck."
        },
        {
          title: "Manual drag",
          description: "Teams spend hours copying data between tools instead of serving customers and growing revenue."
        },
        {
          title: "Risk without clarity",
          description: "Investments feel like blind bets because you lack a trusted guide who owns quality, security, and scale."
        }
      ],
      agitation:
        "Meanwhile, competitors already use automation to respond faster. Every month of inaction keeps money frozen in inefficiency and erodes morale."
    },
    solution: {
      badge: "OUR ROLE AS YOUR GUIDE",
      title: "It’s time for software that feels like care.",
      subtitle:
        "ZIMUT partners with your team to co-create robust systems, mixing human insight with precise technology so your business can grow calmly.",
      promise: "We turn complex ideas into dependable products that optimise today and open room for tomorrow.",
      note: "Clarity, quality, security, scalability, and empathy are non-negotiables in every engagement.",
      pillars: [
        {
          title: "01 · Deep discovery",
          description: "We study your processes, people, and data flows before suggesting a single tool."
        },
        {
          title: "02 · Tailored engineering",
          description: "Custom platforms, automations, and AI agents shaped to your context—not generic templates."
        },
        {
          title: "03 · Responsible AI",
          description: "We validate the impact of each model or automation and keep humans in the loop."
        },
        {
          title: "04 · Continuous care",
          description: "Monitoring, enablement, and iteration so the product keeps compounding value."
        }
      ]
    },
    services: {
      title: "What we build together.",
      subtitle:
        "From bespoke platforms to unified AI copilots, everything is designed to remove friction, scale securely, and delight the people who use it.",
      list: [
        {
          title: "Strategic product definition",
          desc: "Discovery, service design, and technical roadmaps that align leadership and squads.",
          tags: ["Workshops", "Architecture", "Success metrics"]
        },
        {
          title: "Web, mobile & platform builds",
          desc: "Full-stack development of portals, platforms, and mobile experiences built for uptime and clarity.",
          tags: ["Full-stack", "Design systems", "QA automation"]
        },
        {
          title: "AI + automation programs",
          desc: "Unified AI agents, copilots, and workflow automation that remove repetitive tasks and connect data.",
          tags: ["LLM strategy", "RAG", "Process automation"]
        },
        {
          title: "Modernisation & integrations",
          desc: "Legacy rebuilds, API ecosystems, and cloud migrations with robust documentation and observability.",
          tags: ["Cloud", "APIs", "Observability"]
        },
        {
          title: "Data visibility & decisioning",
          desc: "Dashboards, alerting, and insight layers that keep teams informed and proactive.",
          tags: ["Analytics", "BI", "Ops enablement"]
        },
        {
          title: "Care & optimisation",
          desc: "SLA-backed maintenance, performance tuning, and ongoing enablement for your teams.",
          tags: ["SLA", "Runbooks", "Training"]
        }
      ]
    },
    how: {
      title: "Start in 3 simple steps.",
      subtitle:
        "A transparent plan removes fear: each phase shows what we’ll decide together, the rituals involved, and the proof you’ll receive.",
      steps: [
        {
          title: "1. Listen & map",
          desc: "We run deep-dive sessions to understand goals, users, risks, and existing architecture."
        },
        {
          title: "2. Design the route",
          desc: "We define scope, success metrics, and a sequencing roadmap with the right stack and AI approach."
        },
        {
          title: "3. Build, launch, care",
          desc: "We deliver incrementally, integrate AI responsibly, and stay to operate, monitor, and evolve."
        },
        {
          title: "4. Scale with confidence",
          desc: "We train your team, document everything, and iterate so the solution keeps paying off."
        }
      ],
      aiNote:
        "AI is never added for hype. If it drives measurable value, we integrate it intentionally. If not, we keep the solution elegantly simple."
    },
    proof: {
      badge: "PROOF IN THE FIELD",
      title: "Trusted by teams that needed clarity fast.",
      subtitle:
        "From manufacturing to fintech, leaders rely on ZIMUT to turn stalled initiatives into measurable progress.",
      logoTitle: "IN GOOD COMPANY",
      logos: ["KAPPA", "NORTE BANK", "ANDES LABS", "ALMA FOOD", "CIELO"],
      testimonials: [
        {
          quote: "ZIMUT translated our messy backlog into a clear roadmap and delivered the first automation in six weeks.",
          author: "Lucía Fernández",
          role: "COO · Alma Food"
        },
        {
          quote: "They handle AI with responsibility—every model has an owner, documentation, and a human fallback.",
          author: "Mateo River",
          role: "Head of Ops · Norte Bank"
        }
      ],
      stats: [
        { value: "92%", label: "Processes accelerated within 90 days" },
        { value: "40+", label: "Digital products guided end-to-end" },
        { value: "24/7", label: "Visibility across delivery and support" }
      ]
    },
    contact: {
      title: "Ready for clarity?",
      subtitle:
        "Share your current challenge and we’ll respond with next steps, initial hypotheses, and the right rituals to start.",
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
      pills: ["Discovery", "Strategy", "Delivery", "Care"],
      stakesTitle: "If nothing changes...",
      stakes: [
        "Manual work keeps stealing hours from sales, service, and product teams.",
        "Budgets disappear on tools that never get adopted.",
        "Competitors launch AI pilots that win over your customers."
      ],
      finalCta: "Choosing clarity today is cheaper than catching up tomorrow."
    },
    footer: {
      rights: "All rights reserved.",
      message: "ZIMUT · Software clarity guided with care."
    }
  },
  es: {
    nav: {
      brandTagline: "ZIMUT",
      brandDescription: "IA que cuida tu crecimiento",
      links: [
        { id: "problem", label: "El problema" },
        { id: "solution", label: "Nuestra promesa" },
        { id: "services", label: "Qué construimos" },
        { id: "plan", label: "Plan" },
        { id: "proof", label: "Prueba" },
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
      badge: "IA QUE CUIDA · SOFTWARE SIN BIRIBIRI",
      title: "Crecé con software claro y un guía que se arremanga.",
      description:
        "ZIMUT le quita el “biribiri” a la tecnología para líderes de pymes. Traducimos la IA en sistemas concretos que optimizan operaciones, modernizan plataformas y mantienen a los equipos seguros cada vez que escalás.",
      primaryCta: "Diseñemos tu hoja de ruta",
      secondaryCta: "Conocé cómo trabajamos →",
      highlights: [
        {
          title: "Claridad humana",
          description: "Escuchamos, mapeamos tu sistema y convertimos ideas en un plan compartido y sin estrés."
        },
        {
          title: "IA como palanca",
          description: "Aplicamos inteligencia con intención: un agente, una cadena, una mejora a la vez."
        },
        {
          title: "Cuidado constante",
          description: "Seguimos después del lanzamiento con monitoreo, training y rituales de optimización."
        }
      ],
      timeline: [
        {
          label: "Orientación",
          copy: "Detectamos objetivos, límites y las historias humanas detrás de tu sistema."
        },
        {
          label: "Navegación",
          copy: "Definimos roadmaps claros, blueprints de servicio y el stack justo para ejecutarlos."
        },
        {
          label: "Impulso",
          copy: "Entregas incrementales que combinan ingeniería sólida con valor medible."
        }
      ],
      cardLabel: "Panel de guía",
      cardStatus: "Soporte activo",
      cardNote:
        "Cada hito queda documentado, presupuestado y visible para que nunca vuelvas a adivinar cómo avanza el proyecto."
    },
    problem: {
      badge: "TE ENTENDEMOS",
      title: "¿Suena familiar?",
      subtitle:
        "Las promesas de software se acumulan, pero tu equipo sigue entre el caos, tareas manuales y miedo a elegir mal el camino de IA.",
      pains: [
        {
          title: "Ruido infinito",
          description: "Los proveedores tiran jerga mientras nadie explica cómo la IA resuelve tu cuello de botella real."
        },
        {
          title: "Arrastre manual",
          description: "Los equipos pierden horas copiando datos entre herramientas en vez de atender clientes y crecer."
        },
        {
          title: "Riesgo sin claridad",
          description: "Invertir se siente como apostar a ciegas porque falta un guía que se haga cargo de calidad, seguridad y escala."
        }
      ],
      agitation:
        "Mientras tanto, tu competencia ya automatiza y responde más rápido. Cada mes sin acción congela presupuesto en ineficiencia y desgasta a las personas."
    },
    solution: {
      badge: "NUESTRO ROL COMO GUÍA",
      title: "Es momento de un software que se sienta como cuidado.",
      subtitle:
        "ZIMUT se asocia con tu equipo para co-crear sistemas robustos mezclando la mirada humana con tecnología precisa, así tu negocio crece con calma.",
      promise: "Convertimos ideas complejas en productos confiables que optimizan hoy y abren espacio para mañana.",
      note: "Claridad, calidad, seguridad, escalabilidad y empatía son pilares innegociables en cada proyecto.",
      pillars: [
        {
          title: "01 · Descubrimiento profundo",
          description: "Estudiamos procesos, personas y datos antes de recomendar una sola herramienta."
        },
        {
          title: "02 · Ingeniería a medida",
          description: "Plataformas, automatizaciones y agentes de IA diseñados para tu contexto, sin plantillas."
        },
        {
          title: "03 · IA responsable",
          description: "Validamos el impacto de cada modelo o automatización y mantenemos a las personas en control."
        },
        {
          title: "04 · Cuidado continuo",
          description: "Monitoreo, enablement e iteración para que la solución siga generando valor."
        }
      ]
    },
    services: {
      title: "Lo que construimos juntos.",
      subtitle:
        "Desde plataformas a medida hasta copilotos de IA unificados, todo está pensado para quitar fricción, escalar con seguridad y enamorar a quienes lo usan.",
      list: [
        {
          title: "Definición estratégica de producto",
          desc: "Descubrimiento, service design y roadmaps técnicos que alinean dirección y equipos.",
          tags: ["Workshops", "Arquitectura", "Métricas"]
        },
        {
          title: "Desarrollo web, mobile y plataformas",
          desc: "Construcción full-stack de portales, plataformas y experiencias móviles listas para operar sin sobresaltos.",
          tags: ["Full-stack", "Design systems", "QA automation"]
        },
        {
          title: "Programas de IA y automatización",
          desc: "Agentes, copilotos y automatizaciones que eliminan tareas repetitivas y conectan datos.",
          tags: ["Estrategia LLM", "RAG", "Automatización"]
        },
        {
          title: "Modernización e integraciones",
          desc: "Reconstrucción de legacy, ecosistemas API y migraciones cloud con documentación y observabilidad.",
          tags: ["Cloud", "APIs", "Observabilidad"]
        },
        {
          title: "Visibilidad y decisión",
          desc: "Dashboards, alertas y capas de insights para mantener equipos informados y proactivos.",
          tags: ["Analytics", "BI", "Ops enablement"]
        },
        {
          title: "Cuidado y optimización",
          desc: "Mantenimiento con SLA, tuning de performance y enablement continuo para tus equipos.",
          tags: ["SLA", "Runbooks", "Training"]
        }
      ]
    },
    how: {
      title: "Arrancá en 3 pasos simples.",
      subtitle:
        "Un plan transparente elimina el miedo: cada fase muestra lo que definimos juntos, los rituales y la evidencia que recibís.",
      steps: [
        {
          title: "1. Escuchar y mapear",
          desc: "Profundizamos en objetivos, usuarios, riesgos y arquitectura actual."
        },
        {
          title: "2. Diseñar la ruta",
          desc: "Definimos alcance, métricas de éxito y un roadmap secuenciado con el stack y la IA adecuada."
        },
        {
          title: "3. Construir, lanzar y cuidar",
          desc: "Entregamos en incrementos, integramos IA con responsabilidad y nos quedamos para operar y evolucionar."
        },
        {
          title: "4. Escalar con confianza",
          desc: "Capacitamos a tu equipo, documentamos todo e iteramos para que la solución siga rindiendo."
        }
      ],
      aiNote:
        "La IA nunca se agrega por moda. Si genera valor medible, la integramos con intención. Si no, mantenemos la solución simple y efectiva."
    },
    proof: {
      badge: "LO RESPALDAN RESULTADOS",
      title: "Equipos que necesitaban claridad confían en nosotros.",
      subtitle:
        "De manufactura a fintech, líderes eligen a ZIMUT para transformar iniciativas frenadas en avances medibles.",
      logoTitle: "MARCAS QUE NOS ELIGEN",
      logos: ["KAPPA", "NORTE BANK", "ANDES LABS", "ALMA FOOD", "CIELO"],
      testimonials: [
        {
          quote: "ZIMUT ordenó nuestro backlog y en seis semanas lanzó la primera automatización real.",
          author: "Lucía Fernández",
          role: "COO · Alma Food"
        },
        {
          quote: "Tratan la IA con responsabilidad: cada modelo tiene dueño, documentación y plan de contingencia.",
          author: "Mateo River",
          role: "Head of Ops · Norte Bank"
        }
      ],
      stats: [
        { value: "92%", label: "Procesos acelerados en 90 días" },
        { value: "40+", label: "Productos digitales guiados de punta a punta" },
        { value: "24/7", label: "Visibilidad total sobre delivery y soporte" }
      ]
    },
    contact: {
      title: "¿Listo para la claridad?",
      subtitle:
        "Contanos el desafío actual y volvemos con próximos pasos, hipótesis iniciales y los rituales indicados para arrancar.",
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
      pills: ["Descubrimiento", "Estrategia", "Entrega", "Cuidado"],
      stakesTitle: "Si no hacés nada...",
      stakes: [
        "El trabajo manual sigue robando horas a ventas, servicio y producto.",
        "El presupuesto se va en herramientas que nadie adopta.",
        "La competencia lanza pilotos de IA que se quedan con tus clientes."
      ],
      finalCta: "Elegir claridad hoy es más barato que intentar ponerse al día mañana."
    },
    footer: {
      rights: "Todos los derechos reservados.",
      message: "ZIMUT · Claridad en software guiada con cuidado."
    }
  }
};
