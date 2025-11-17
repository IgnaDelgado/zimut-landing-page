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
  stakes: {
    badge: string;
    title: string;
    subtitle: string;
    consequences: { label: string; detail: string }[];
    finalReminder: string;
    ctaLabel: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
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
      badge: "STORYBRAND BLUEPRINT · PVU",
      title: "Lead with the win. We script the PVU that convinces in 5 seconds.",
      description:
        "Your SaaS landing must answer “What is this and why should I care?” instantly. We choreograph the outcome-focused H1, PVU, dual CTAs, and cinematic WebGL so visitors feel the promised success right away.",
      primaryCta: "Start your clarity session",
      secondaryCta: "See the 7-step blueprint →",
      highlights: [
        {
          title: "Outcome-first headline",
          description: "H1 + H2 link the final success to the exact buyer in clear, human language."
        },
        {
          title: "PVU without jargon",
          description: "Voice-of-Customer research shapes copy blocks that echo how your clients speak."
        },
        {
          title: "CTAs for every intent",
          description: "Low-friction and high-intent CTAs keep explorers and decision makers moving."
        }
      ],
      timeline: [
        {
          label: "Map the win",
          copy: "We document the stakes, desired success metrics, and the hero’s transformation."
        },
        {
          label: "Design the PVU",
          copy: "StoryBrand structure defines the H1/H2, supporting proof, and CTA ladder."
        },
        {
          label: "Instrument",
          copy: "WebGL hero, analytics, and experiments keep the above-the-fold section alive."
        }
      ],
      cardLabel: "PVU control room",
      cardStatus: "StoryBrand live",
      cardNote:
        "Every pixel, copy block, and CTA is tied to a ritual so you always know how the landing converts.",
      pvu: {
        label: "StoryBrand PVU",
        steps: [
          { title: "Hero", description: "Your buyer + their desired win." },
          { title: "Guide", description: "ZIMUT proves empathy and authority." },
          { title: "Plan", description: "3 clear actions, zero jargon." },
          { title: "Success", description: "Tangible outcomes + risk removed." }
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
      badge: "GUIDE · PLAN · PROOF",
      title: "It’s time for a new approach.",
      subtitle:
        "Section 3 positions your product as the obvious solution. We pair empathy (we get the pain) with authority (we’ve solved it before) so prospects instantly trust the guide.",
      promise: "Hero (client) + Guide (ZIMUT) + Plan (3 clear steps) + Success (risk removed).",
      note: "We script both the emotional copy and the functional proof, then show it inside live showcases so buyers can imagine themselves succeeding.",
      pillars: [
        {
          title: "01 · Empathy first",
          description: "We mirror the hero’s words before presenting the product so they feel understood."
        },
        {
          title: "02 · Authority without ego",
          description: "Stats, rituals, and recognizable logos validate why we’re the trusted guide."
        },
        {
          title: "03 · Frictionless plan",
          description: "Three micro-steps show exactly how to engage without overwhelming the reader."
        },
        {
          title: "04 · Success storyboard",
          description: "Mini case studies highlight the transformation after working with us."
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
      title: "The SaaS landing blueprint in 7 steps.",
      subtitle:
        "Each section answers a StoryBrand question and is wired to a measurable ritual so you always know what to write, design, and test.",
      list: [
        {
          title: "1 · Above the fold",
          desc: "Outcome-first H1/H2, PVU, and dual CTAs with cinematic WebGL to hook attention fast.",
          tags: ["PVU", "Hero", "CTAs"]
        },
        {
          title: "2 · Problem + agitation",
          desc: "Voice-of-Customer snippets validate pains and stir the emotional and business cost of inaction.",
          tags: ["VoC", "Empathy", "PAS"]
        },
        {
          title: "3 · Solution + guide",
          desc: "We introduce your product as the path out while ZIMUT shows empathy and authority as the guide.",
          tags: ["Guide", "Authority", "StoryBrand"]
        },
        {
          title: "4 · Plan in 3 steps",
          desc: "A frictionless “How it works” roadmap that removes fear and clarifies the next action.",
          tags: ["Plan", "Rituals", "Clarity"]
        },
        {
          title: "5 · Proof",
          desc: "Logos, testimonials, stats, and mini stories that build massive credibility.",
          tags: ["Logos", "Testimonials", "Stats"]
        },
        {
          title: "6 · Stakes",
          desc: "We remind them what’s at risk if nothing changes and reinforce the CTA.",
          tags: ["Urgency", "Stakes", "CTA"]
        },
        {
          title: "7 · Conversion & care",
          desc: "Forms, automations, and clean handoffs that convert and nurture every lead.",
          tags: ["Form", "Automation", "Follow-up"]
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
    stakes: {
      badge: "WHAT’S AT STAKE",
      title: "What happens if you do nothing?",
      subtitle:
        "Section 6 revisits the failure. We remind the hero of the cost of staying with broken funnels so urgency feels real, not pushy.",
      consequences: [
        {
          label: "Competitors already rewrite their PVU",
          detail: "They answer the 5-second question faster, so your ads keep funding someone else’s funnel."
        },
        {
          label: "Manual work keeps scaling",
          detail: "Without automation and clear CTAs, leads leak out of spreadsheets instead of converting."
        },
        {
          label: "Leadership loses patience",
          detail: "Every week without a plan erodes confidence and budgets for your team."
        }
      ],
      finalReminder: "Clarity today beats damage control tomorrow. The blueprint keeps you in the hero seat.",
      ctaLabel: "CTA FINAL",
      ctaTitle: "Ready to script your 7-step landing?",
      ctaSubtitle: "We’ll audit your current page and return with the StoryBrand PVU, plan, and motion ideas.",
      ctaButton: "Book the clarity call"
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
      badge: "BLUEPRINT STORYBRAND · PVU",
      title: "Liderá con el éxito. Diseñamos la PVU que convence en 5 segundos.",
      description:
        "Tu landing SaaS tiene que responder “¿Qué es esto y por qué debería importarme?” de inmediato. Orquestamos el H1/H2 enfocado en el resultado, la PVU, los CTAs dobles y la animación WebGL para que el visitante sienta el desenlace exitoso.",
      primaryCta: "Agendá la sesión de claridad",
      secondaryCta: "Ver el blueprint de 7 pasos →",
      highlights: [
        {
          title: "Titular orientado al éxito",
          description: "H1 + H2 conectan el resultado final con la audiencia correcta en lenguaje humano."
        },
        {
          title: "PVU sin jerga",
          description: "La investigación VoC define cada bloque de texto para reflejar cómo hablan tus clientes."
        },
        {
          title: "CTAs para toda intención",
          description: "Una CTA de baja fricción y otra de alta intención mantienen a todos avanzando."
        }
      ],
      timeline: [
        {
          label: "Mapear el éxito",
          copy: "Documentamos las métricas deseadas, los riesgos y la transformación del héroe."
        },
        {
          label: "Diseñar la PVU",
          copy: "La estructura StoryBrand define H1/H2, prueba de apoyo y escalera de CTAs."
        },
        {
          label: "Instrumentar",
          copy: "El WebGL hero, analítica y experimentos mantienen viva la sección Above the Fold."
        }
      ],
      cardLabel: "Control de PVU",
      cardStatus: "StoryBrand en vivo",
      cardNote:
        "Cada pixel, copy y CTA está ligado a un ritual para que siempre sepas cómo convierte la landing.",
      pvu: {
        label: "PVU StoryBrand",
        steps: [
          { title: "Héroe", description: "Quién compra + el resultado que busca." },
          { title: "Guía", description: "ZIMUT demuestra empatía y autoridad." },
          { title: "Plan", description: "3 acciones claras, sin jerga." },
          { title: "Éxito", description: "Resultados tangibles + riesgo eliminado." }
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
      badge: "GUÍA · PLAN · PRUEBA",
      title: "Es hora de un nuevo enfoque.",
      subtitle:
        "La Sección 3 presenta tu producto como la solución obvia y a ZIMUT como el guía experto. Mezclamos empatía (entendemos tu dolor) con autoridad (ya lo resolvimos) para que confíen al instante.",
      promise: "Héroe (cliente) + Guía (ZIMUT) + Plan (3 pasos) + Éxito (riesgo eliminado).",
      note: "Escribimos el copy emocional y la prueba funcional, y lo mostramos en showcases vivos para que imaginen su propia transformación.",
      pillars: [
        {
          title: "01 · Empatía primero",
          description: "Reflejamos las palabras del héroe antes de presentar el producto."
        },
        {
          title: "02 · Autoridad sin ego",
          description: "Métricas, rituales y logos demuestran por qué somos el guía confiable."
        },
        {
          title: "03 · Plan sin fricción",
          description: "Tres micro pasos muestran cómo avanzar sin abrumar."
        },
        {
          title: "04 · Storyboard del éxito",
          description: "Mini casos describen qué pasa después de trabajar juntos."
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
      title: "El blueprint SaaS en 7 pasos.",
      subtitle:
        "Cada sección responde una pregunta StoryBrand y se conecta con un ritual medible para saber qué escribir, diseñar y testear.",
      list: [
        {
          title: "1 · Above the Fold",
          desc: "H1/H2 orientado al resultado, PVU y CTAs dobles con animación WebGL para captar en 5 segundos.",
          tags: ["PVU", "Héroe", "CTAs"]
        },
        {
          title: "2 · Problema + agitación",
          desc: "Fragmentos de VoC validan los dolores y muestran el costo emocional y de negocio de no resolverlos.",
          tags: ["VoC", "Empatía", "PAS"]
        },
        {
          title: "3 · Solución + Guía",
          desc: "Tu producto aparece como el camino y ZIMUT se posiciona como el guía empático y con autoridad.",
          tags: ["Guía", "Autoridad", "StoryBrand"]
        },
        {
          title: "4 · Plan en 3 pasos",
          desc: "Un “Cómo funciona” simple que reduce el miedo a la complejidad y muestra acciones concretas.",
          tags: ["Plan", "Rituales", "Claridad"]
        },
        {
          title: "5 · Prueba social",
          desc: "Logos, testimonios, métricas y mini historias que aportan credibilidad instantánea.",
          tags: ["Logos", "Testimonios", "Stats"]
        },
        {
          title: "6 · Consecuencias",
          desc: "Recordamos qué está en juego si no actúan y repetimos el CTA de forma directa.",
          tags: ["Urgencia", "Stakes", "CTA"]
        },
        {
          title: "7 · Conversión y cuidado",
          desc: "Formularios, automatizaciones y handoffs claros para convertir y nutrir cada lead.",
          tags: ["Formulario", "Automatización", "Seguimiento"]
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
    stakes: {
      badge: "¿QUÉ ESTÁ EN JUEGO?",
      title: "¿Qué pasa si no hacés nada?",
      subtitle:
        "La Sección 6 vuelve al fracaso. Recordamos el costo real de seguir con funnels rotos para generar urgencia sin manipular.",
      consequences: [
        {
          label: "La competencia ya reescribe su PVU",
          detail: "Responden la pregunta de los 5 segundos más rápido y tus anuncios financian su funnel."
        },
        {
          label: "El trabajo manual se multiplica",
          detail: "Sin automatización ni CTAs claros, los leads se pierden en planillas en lugar de cerrar."
        },
        {
          label: "Dirección pierde paciencia",
          detail: "Cada semana sin plan erosiona la confianza y el presupuesto destinado a tu equipo."
        }
      ],
      finalReminder: "Elegir claridad hoy es más barato que apagar incendios mañana.",
      ctaLabel: "CTA FINAL",
      ctaTitle: "¿Te guiamos con el blueprint de 7 pasos?",
      ctaSubtitle: "Auditamos tu landing actual y volvemos con PVU, plan y propuestas de motion.",
      ctaButton: "Agendar llamada"
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
