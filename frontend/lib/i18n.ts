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
    pvu: { label: string; steps: { title: string; description: string }[] };
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
    showcases: {
      id: string;
      label: string;
      summary: string;
      hero: string;
      title: string;
      description: string;
      tags: string[];
      metrics: { value: string; label: string }[];
      steps: { title: string; desc: string }[];
    }[];
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
      brandDescription: "StoryBrand-inspired AI care for calm growth",
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
      badge: "GUIDED SOFTWARE · STORYBRAND PVU",
      title: "You stay the hero. We turn AI chaos into a calm growth story.",
      description:
        "SMB leaders deserve a guide, a plan, and tangible wins. ZIMUT listens to your plot, maps the stakes, and builds automations that let your team focus on the customer.",
      primaryCta: "Book the clarity session",
      secondaryCta: "Review the playbook →",
      highlights: [
        {
          title: "Guide with empathy",
          description: "We listen deeply and translate tech so leadership and squads stay aligned."
        },
        {
          title: "Visual battle plan",
          description: "StoryBrand blueprints show exactly what happens now, next, and later."
        },
        {
          title: "Celebrate the win",
          description: "Dashboards, rituals, and enablement make success visible and repeatable."
        }
      ],
      timeline: [
        {
          label: "Listen",
          copy: "We capture goals, stakes, and the human stories behind your systems."
        },
        {
          label: "Plan",
          copy: "We co-create a clear roadmap, rituals, and the stack to deliver it."
        },
        {
          label: "Momentum",
          copy: "Incremental launches prove value early and keep everyone confident."
        }
      ],
      cardLabel: "Guidance dashboard",
      cardStatus: "Live support",
      cardNote:
        "Every milestone is documented, costed, and visible so you never guess how the project is performing.",
      pvu: {
        label: "StoryBrand PVU",
        steps: [
          { title: "Hero", description: "Your team & customers drive the story." },
          { title: "Guide", description: "ZIMUT translates AI into confident decisions." },
          { title: "Plan", description: "Three-step roadmap with clear rituals." },
          { title: "Success", description: "Automation, adoption, and calm growth." }
        ]
      }
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
      title: "Live solutions showcased like a New Relic board.",
      subtitle:
        "We blend service design, AI, and observability so you always see how the story is progressing across teams.",
      promise: "Your PVU: Hero (you) + Guide (ZIMUT) + Plan (the plays) + Success (measured momentum).",
      note: "Every play combines discovery, build, enablement, and care—no more black-box projects.",
      pillars: [
        {
          title: "01 · Story mining",
          description: "We document stakes, actors, and constraints before proposing tooling."
        },
        {
          title: "02 · Experience architecture",
          description: "Blueprints connect processes, data, and AI so everyone sees the same plan."
        },
        {
          title: "03 · Build & automate",
          description: "Engineers, designers, and AI specialists co-create the platform or copilot."
        },
        {
          title: "04 · Care & instrumentation",
          description: "We stay for monitoring, rituals, and optimisation so value compounds."
        }
      ],
      showcases: [
        {
          id: "ops",
          label: "Ops cockpit",
          summary: "Connect ERP, sensors, and squads with automated handoffs.",
          hero: "Operations lead",
          title: "Operations gain a living command center.",
          description:
            "We integrate ERPs, shop-floor sensors, and support tools so every team works from a single source of truth.",
          tags: ["Integrations", "Automation", "Observability"],
          metrics: [
            { value: "-37%", label: "Manual escalations" },
            { value: "12 w", label: "From mapping to first release" }
          ],
          steps: [
            { title: "Map the flow", desc: "Shadow the process, surface bottlenecks, and define the stakes." },
            { title: "Instrument & automate", desc: "APIs, bots, and alerts connect ERP, sensors, and squads." },
            { title: "Coach & evolve", desc: "Ops rituals and enablement keep the command center alive." }
          ]
        },
        {
          id: "cx",
          label: "Customer experience",
          summary: "Unify onboarding, portals, and proactive messaging.",
          hero: "Product lead",
          title: "Customers enjoy one guided journey.",
          description:
            "We modernise portals, mobile apps, and communications so people self-serve faster and feel supported.",
          tags: ["Experience", "Web & mobile", "Data"],
          metrics: [
            { value: "+48%", label: "Self-service adoption" },
            { value: "NPS +12", label: "Customer sentiment lift" }
          ],
          steps: [
            { title: "Reframe the journey", desc: "We storyboard pains, emotions, and conversion gaps." },
            { title: "Design & build", desc: "Design systems + full-stack squads deliver the unified experience." },
            { title: "Measure & iterate", desc: "Analytics, interviews, and experiments keep the journey sharp." }
          ]
        },
        {
          id: "copilot",
          label: "Internal copilot",
          summary: "Deploy agents that support sales, service, and ops.",
          hero: "Enablement lead",
          title: "Teams work with AI sidekicks they trust.",
          description:
            "We craft RAG pipelines, governance, and training so copilots answer with context and stay compliant.",
          tags: ["AI", "Agents", "Training"],
          metrics: [
            { value: "-65%", label: "Manual tickets" },
            { value: "6 w", label: "Copilot MVP launch" }
          ],
          steps: [
            { title: "Identify leverage", desc: "Workshops expose high-volume questions and tasks." },
            { title: "Build responsibly", desc: "RAG, evals, and guardrails keep humans in the loop." },
            { title: "Enable & govern", desc: "Training, playbooks, and monitoring sustain adoption." }
          ]
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
      brandDescription: "IA y StoryBrand para crecer con calma",
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
      badge: "SOFTWARE GUIADO · PVU STORYBRAND",
      title: "Vos sos el héroe. Nosotros guiamos la IA para crecer sin caos.",
      description:
        "Los líderes de pymes necesitan un guía, un plan y victorias medibles. ZIMUT escucha tu historia, mapea los riesgos y construye sistemas que devuelven el foco al cliente.",
      primaryCta: "Agendá la sesión de claridad",
      secondaryCta: "Mirar el playbook →",
      highlights: [
        {
          title: "Guía con empatía",
          description: "Escuchamos profundo y traducimos la tecnología para alinear dirección y equipos."
        },
        {
          title: "Plan visual",
          description: "Blueprints StoryBrand muestran qué pasa ahora, después y más adelante."
        },
        {
          title: "Celebrá el resultado",
          description: "Dashboards, rituales y enablement hacen visible cada victoria."
        }
      ],
      timeline: [
        {
          label: "Escuchar",
          copy: "Capturamos objetivos, riesgos y las historias humanas detrás de tus sistemas."
        },
        {
          label: "Planear",
          copy: "Co-creamos un roadmap claro, rituales y el stack ideal para ejecutarlo."
        },
        {
          label: "Impulso",
          copy: "Lanzamientos incrementales prueban valor temprano y sostienen la confianza."
        }
      ],
      cardLabel: "Panel de guía",
      cardStatus: "Soporte activo",
      cardNote:
        "Cada hito queda documentado, presupuestado y visible para que nunca vuelvas a adivinar cómo avanza el proyecto.",
      pvu: {
        label: "PVU StoryBrand",
        steps: [
          { title: "Héroe", description: "Tu equipo y tus clientes al centro." },
          { title: "Guía", description: "ZIMUT traduce la IA en decisiones claras." },
          { title: "Plan", description: "Ruta en tres actos con rituales visibles." },
          { title: "Éxito", description: "Automatización, adopción y calma." }
        ]
      }
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
      title: "Soluciones vivas al estilo de un tablero New Relic.",
      subtitle:
        "Combinamos service design, IA y observabilidad para que veas el progreso en tiempo real y con calma.",
      promise: "Tu PVU: Héroe (vos) + Guía (ZIMUT) + Plan (los plays) + Éxito (impulso medible).",
      note: "Cada play une descubrimiento, construcción, enablement y cuidado. No más proyectos caja negra.",
      pillars: [
        {
          title: "01 · Minería de historia",
          description: "Documentamos riesgos, actores y límites antes de proponer herramientas."
        },
        {
          title: "02 · Arquitectura de experiencia",
          description: "Blueprints conectan procesos, datos e IA para que todos vean el mismo plan."
        },
        {
          title: "03 · Construir y automatizar",
          description: "Ingeniería, diseño y especialistas en IA co-crean la plataforma o el copilot."
        },
        {
          title: "04 · Cuidado e instrumentación",
          description: "Nos quedamos para monitorear, iterar y sostener el valor en el tiempo."
        }
      ],
      showcases: [
        {
          id: "ops",
          label: "Cockpit de operaciones",
          summary: "Conectamos ERP, sensores y equipos con pases automáticos.",
          hero: "Líder de Operaciones",
          title: "Operaciones con un centro de mando vivo.",
          description:
            "Integramos ERPs, sensores de planta y herramientas de soporte para que todos trabajen con una sola verdad.",
          tags: ["Integraciones", "Automatización", "Observabilidad"],
          metrics: [
            { value: "-37%", label: "Escalaciones manuales" },
            { value: "12 sem", label: "Del mapeo al primer release" }
          ],
          steps: [
            { title: "Mapear el flujo", desc: "Acompañamos el proceso, detectamos cuellos y definimos las apuestas." },
            { title: "Instrumentar y automatizar", desc: "APIs, bots y alertas conectan ERP, sensores y equipos." },
            { title: "Entrenar y evolucionar", desc: "Rituales de ops y enablement mantienen vivo el cockpit." }
          ]
        },
        {
          id: "cx",
          label: "Experiencia de clientes",
          summary: "Unificamos onboarding, portales y mensajes proactivos.",
          hero: "Líder de Producto",
          title: "Clientes con una sola experiencia guiada.",
          description:
            "Modernizamos portales, apps y comunicaciones para que las personas se autogestionen rápido y se sientan acompañadas.",
          tags: ["Experiencia", "Web & mobile", "Datos"],
          metrics: [
            { value: "+48%", label: "Adopción self-service" },
            { value: "NPS +12", label: "Suba de satisfacción" }
          ],
          steps: [
            { title: "Reencuadrar el journey", desc: "Storyboards que exponen dolores, emociones y fugas." },
            { title: "Diseñar y construir", desc: "Design systems + squads full-stack entregan la experiencia unificada." },
            { title: "Medir e iterar", desc: "Analytics, entrevistas y experimentos ajustan continuamente." }
          ]
        },
        {
          id: "copilot",
          label: "Copilotos internos",
          summary: "Agentes que acompañan a ventas, servicio y operaciones.",
          hero: "Líder de Enablement",
          title: "Equipos con copilotos de IA en los que confían.",
          description:
            "Diseñamos pipelines RAG, governance y training para que los copilotos respondan con contexto y cumplan normas.",
          tags: ["IA", "Agentes", "Training"],
          metrics: [
            { value: "-65%", label: "Tickets manuales" },
            { value: "6 sem", label: "Lanzamiento MVP de copilot" }
          ],
          steps: [
            { title: "Detectar palancas", desc: "Workshops revelan tareas y preguntas de alto volumen." },
            { title: "Construir con responsabilidad", desc: "RAG, evaluaciones y guardrails mantienen humanos al mando." },
            { title: "Enablement y gobierno", desc: "Training, playbooks y monitoreo sostienen la adopción." }
          ]
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
