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
    slogan: { label: string; tagline: string; details: string[] };
    primaryCta: string;
    secondaryCta: string;
    highlights: { title: string; description: string }[];
    timeline: { label: string; copy: string }[];
    cardLabel: string;
    cardStatus: string;
    cardNote: string;
    pvu: { label: string; statement: string; steps: { title: string; description: string }[] };
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
    calloutLabel: string;
    calloutFooter: string;
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
      brandDescription: "Golden Circle software partner",
      links: [
        { id: "problem", label: "Why now" },
        { id: "solution", label: "Our method" },
        { id: "services", label: "What we build" },
        { id: "plan", label: "3-step plan" },
        { id: "proof", label: "Proof" },
        { id: "stakes", label: "Impact" },
        { id: "contact", label: "Talk" }
      ],
      cta: "Design my PVU",
      localeLabel: "Language",
      locales: [
        { code: "es", label: "ESP", flag: "🇦🇷" },
        { code: "en", label: "US", flag: "🇺🇸" }
      ]
    },
    hero: {
      badge: "ABOVE THE FOLD · GOLDEN CIRCLE",
      title: "Golden Circle landings that show the win before the scroll.",
      description:
        "Software noise and AI hype freeze decision makers. ZIMUT pairs StoryBrand copy with cinematic WebGL scenes inspired by Linear and Accenture so teams instantly feel the outcome you promise.",
      slogan: {
        label: "SLOGAN · PVU",
        tagline: "From biribiri to clarity: orchestrate Por qué, Cómo y Qué in one view.",
        details: [
          "Synthesize the purpose, the plan, and the product inside a single cinematic fold.",
          "Give every stakeholder a slogan they can repeat and a PVU they can defend.",
          "Blend Spanish-first storytelling with global-grade, interactive art direction."
        ]
      },
      primaryCta: "Book a Golden Circle workshop",
      secondaryCta: "See the blueprint in action →",
      highlights: [
        {
          title: "Why · Promised success",
          description: "Outcome-first H1 + PVU that name the transformation and the hero we are guiding."
        },
        {
          title: "How · Frictionless plan",
          description: "We debate internally, translate the system, and surface a 3-step StoryBrand plan with zero jargon."
        },
        {
          title: "What · Adaptive stack",
          description: "Bespoke software and AI agents that remove repetitive work and keep growth secure."
        }
      ],
      timeline: [
        {
          label: "Why pulse",
          copy: "Interview your hero, document stakes, KPIs, and the friction holding growth back."
        },
        {
          label: "How debate",
          copy: "Co-design the StoryBrand plan, experience blueprint, and governance rituals you can trust."
        },
        {
          label: "What launch",
          copy: "Choreograph WebGL, copy, and the AI-powered product or agent that proves the promise."
        }
      ],
      cardLabel: "Golden Circle control room",
      cardStatus: "Live guidance",
      cardNote: "Your landing, AI roadmap, and maintenance rituals stay tied to measurable wins.",
      pvu: {
        label: "Why · How · What",
        statement: "PVU that states the transformation, the friction we remove, and the tech we tailor.",
        steps: [
          { title: "WHY", description: "The final success the hero wants and the cost of inaction." },
          { title: "HOW", description: "StoryBrand plan, governance, and transparency for every milestone." },
          { title: "WHAT", description: "Software, AI agents, and ops systems that make the win inevitable." }
        ]
      }
    },
    problem: {
      badge: "WE HEAR THE FRICTION",
      title: "Does this sound familiar?",
      subtitle:
        "AI promises pile up, yet your organization still faces manual work, risky bets, and teams overwhelmed by technical 'biribiri'.",
      pains: [
        {
          title: "Vendors speak in riddles",
          description: "Pitch decks sell buzzwords while nobody translates how AI will fix your real bottleneck."
        },
        {
          title: "Manual drag everywhere",
          description: "People still rework spreadsheets, copy data, and lose time that should go to customers."
        },
        {
          title: "Risk without a guide",
          description: "Investments feel like blind bets because no partner owns quality, security, and scale end-to-end."
        }
      ],
      agitation:
        "Meanwhile competitors already experiment with automation. Every month of indecision burns budget, morale, and customer trust."
    },
    solution: {
      badge: "GUIDE · PLAN · SOLUTION",
      title: "It’s time for a new guide.",
      subtitle: "We begin with your Why, debate the How, and only then build the What.",
      promise:
        "ZIMUT removes friction by co-designing a clarity blueprint and delivering software + AI that feels inevitable for your team.",
      note: "We translate between business and engineering so you always see the next milestone and the quality behind it.",
      pillars: [
        { title: "Empathy-first discovery", description: "Deep workshops map systems, data, and the humans impacted." },
        { title: "Debates that sharpen ideas", description: "We stress test every approach internally before it ever reaches you." },
        { title: "Robust & secure delivery", description: "Clean architectures, observability, and resilient releases." },
        { title: "Scaling rituals", description: "Maintenance and experiments keep the landing, AI, and product evolving." }
      ],
      showcases: [
        {
          id: "agents",
          label: "Unified AI agents",
          summary: "Connect ops data and craft accountable copilots.",
          hero: "AI",
          title: "Unified agents with business context",
          description: "We ingest your tools, set guardrails, and expose a branded agent for teams or clients.",
          tags: ["Retrieval", "Guardrails", "Ops automations"],
          metrics: [
            { value: "85%", label: "Manual steps removed" },
            { value: "3 wks", label: "Time to pilot" }
          ],
          steps: [
            { title: "Context graph", desc: "Connect ERPs, CRMs, and docs into a governed knowledge layer." },
            { title: "Agent studio", desc: "Design conversations, workflows, and escalation paths with you." },
            { title: "Launch & train", desc: "Ship the pilot, observe, and evolve with our care rituals." }
          ]
        },
        {
          id: "modernization",
          label: "Intelligent ops OS",
          summary: "Refactor legacy flows and surface dashboards people trust.",
          hero: "SYSTEMS",
          title: "Operational platforms with AI copilots",
          description: "We modernize stacks, add automation, and deliver clarity through tailored interfaces.",
          tags: ["Edge AI", "Data fabric", "Secure APIs"],
          metrics: [
            { value: "40%", label: "Cycle time reduced" },
            { value: "99.9%", label: "Uptime with observability" }
          ],
          steps: [
            { title: "System mapping", desc: "Audit processes, data, and dependencies across teams." },
            { title: "Experience blueprint", desc: "Design dashboards, automations, and governance flows." },
            { title: "Delivery + care", desc: "Implement, monitor, and iterate with our maintenance crew." }
          ]
        },
        {
          id: "immersive",
          label: "Immersive WebGL stories",
          summary: "Landings that mesmerize and clarify in 5 seconds.",
          hero: "EXPERIENCE",
          title: "Story-driven landings inspired by Linear & Accenture",
          description:
            "We choreograph WebGL, motion, and copy so every visitor feels the promised success and knows the next action.",
          tags: ["StoryBrand", "WebGL", "Analytics"],
          metrics: [
            { value: "5s", label: "PVU clarity achieved" },
            { value: "+63%", label: "CTA engagement" }
          ],
          steps: [
            { title: "Voice of customer", desc: "Capture language that resonates with your buyers." },
            { title: "Cinematic systems", desc: "Build bespoke WebGL scenes, typography, and CTAs." },
            { title: "Experiments", desc: "Measure, learn, and iterate with always-on support." }
          ]
        }
      ]
    },
    services: {
      title: "What we build",
      subtitle: "Every engagement adapts the Why/How/What to your sector so the technology truly moves the business.",
      list: [
        {
          title: "Golden Circle landing OS",
          desc: "StoryBrand copy, PVU, analytics, and cinematic WebGL blocks ready for experiments.",
          tags: ["Copy", "WebGL", "Analytics"]
        },
        {
          title: "AI agent programs",
          desc: "Unified copilots with retrieval, guardrails, and workflow automation for teams or clients.",
          tags: ["Agents", "RAG", "Ops"]
        },
        {
          title: "Industrial + field automation",
          desc: "Computer vision, IoT, and predictive maintenance to reduce downtime and manual checks.",
          tags: ["Vision", "IoT", "Edge"]
        },
        {
          title: "Modern web & mobile platforms",
          desc: "Secure, scalable applications with design systems, APIs, and observability baked in.",
          tags: ["Design", "APIs", "Scale"]
        }
      ]
    },
    how: {
      title: "Start in 3 simple moves",
      subtitle: "Clarity beats speed. We guide you from chaos to a launch-ready plan without jargon.",
      steps: [
        { title: "01 · Discovery", desc: "Workshops to understand your systems, people, and success metrics." },
        { title: "02 · Blueprint", desc: "We debate internally and present the StoryBrand plan + technical path." },
        { title: "03 · Delivery", desc: "Build, launch, and maintain the software + AI that make the promise real." }
      ],
      aiNote:
        "We adapt the same ritual to every industry—from finance to manufacturing—so the IA that powers your business feels bespoke, safe, and measurable.",
      calloutLabel: "Live blueprint",
      calloutFooter: "Guide · Plan · Win"
    },
    proof: {
      badge: "PROOF",
      title: "Leaders trust ZIMUT when clarity matters",
      subtitle: "From venture-backed SaaS to industrial pymes, our clients rely on us to translate vision into robust systems.",
      logoTitle: "Trusted by ops-driven teams",
      logos: ["ARENA", "PROA", "MERIDIAN", "NEBULA", "OSMOS"],
      testimonials: [
        {
          quote: "They turned our messy roadmap into a cinematic landing and an AI agent that actually knows our business.",
          author: "Mariana Duarte",
          role: "COO · Logistics scale-up"
        },
        {
          quote: "ZIMUT is the only partner who explained the Why, the How, and the What before touching a single line of code.",
          author: "Thomas Reed",
          role: "Founder · B2B SaaS"
        },
        {
          quote: "Our production floor runs smoother, and the executive team finally sees live metrics. Maintenance feels effortless.",
          author: "Silvia Campos",
          role: "GM · Industrial group"
        }
      ],
      stats: [
        { value: "+63%", label: "Conversion lift" },
        { value: "12", label: "Sectors served" },
        { value: "24/7", label: "Care & maintenance" }
      ]
    },
    stakes: {
      badge: "WHAT IF NOTHING CHANGES?",
      title: "Your hero stays stuck",
      subtitle: "While you wait, competitors launch AI agents, automate operations, and deliver better experiences.",
      consequences: [
        { label: "Slow response", detail: "Manual work keeps your team from serving customers in time." },
        { label: "Confused buyers", detail: "Your landing never explains the promised success, so people bounce." },
        { label: "Frozen roadmap", detail: "Without a guide you avoid bold decisions and the team loses momentum." }
      ],
      finalReminder: "Clarity is the differentiator. The sooner you ship a Golden Circle experience, the faster you grow.",
      ctaLabel: "Ready to act?",
      ctaTitle: "Let’s build the Golden Circle together",
      ctaSubtitle: "We’ll map your Why, How, and What in a single strategy session.",
      ctaButton: "Schedule my session"
    },
    contact: {
      title: "Co-create your Golden Circle",
      subtitle: "Tell us about the friction, the systems involved, and the success metric that matters most.",
      fields: {
        name: "Full name",
        email: "Work email",
        company: "Company / Team",
        message: "What problem should we remove first?"
      },
      submit: "Send message",
      sending: "Sending...",
      success: "Thanks! We’ll reply within 24 hours.",
      error: "Something went wrong. Please try again.",
      validation: "Name, email, and a short brief are required.",
      pills: ["StoryBrand", "WebGL", "AI agents", "Maintenance"],
      stakesTitle: "What we’ll cover",
      stakes: [
        "Why success matters for your hero",
        "Current systems and friction",
        "Roadmap, maintenance, and quick wins"
      ],
      finalCta: "Prefer email? hola@zimut.io"
    },
    footer: {
      rights: "All rights reserved.",
      message: "Clarity-led software crafted in LatAm & delivered globally."
    }
  },
  es: {
    nav: {
      brandTagline: "ZIMUT",
      brandDescription: "Tu socio del Círculo Dorado",
      links: [
        { id: "problem", label: "¿Por qué ahora?" },
        { id: "solution", label: "Nuestra guía" },
        { id: "services", label: "¿Qué hacemos?" },
        { id: "plan", label: "Plan en 3 pasos" },
        { id: "proof", label: "Prueba" },
        { id: "stakes", label: "Impacto" },
        { id: "contact", label: "Contacto" }
      ],
      cta: "Diseñar mi PVU",
      localeLabel: "Idioma",
      locales: [
        { code: "es", label: "ESP", flag: "🇦🇷" },
        { code: "en", label: "US", flag: "🇺🇸" }
      ]
    },
    hero: {
      badge: "CÍRCULO DORADO · ARRIBA DEL FOLD",
      title: "Mostramos el éxito antes de que el usuario haga scroll.",
      description:
        "En un mundo lleno de biribiri tecnológico, las pymes necesitan un guía que acerque la IA con claridad. Diseñamos copys StoryBrand y animaciones WebGL al nivel de Linear y Accenture para que todos entiendan el valor en 5 segundos.",
      slogan: {
        label: "SLOGAN · PVU",
        tagline: "Menos biribiri, más impacto medible en cada Por qué, Cómo y Qué.",
        details: [
          "Resumimos el propósito, el plan y la solución en un mismo pliegue inmersivo.",
          "Creamos un slogan repetible y una PVU defendible por toda la organización.",
          "Dirección de arte bilingüe inspirada en Linear y Accenture pero con ADN local."
        ]
      },
      primaryCta: "Agendar workshop del Círculo Dorado",
      secondaryCta: "Ver el blueprint en acción →",
      highlights: [
        {
          title: "¿Por qué? · Promesa de éxito",
          description: "Definimos el H1 y la PVU enfocadas en el resultado final que tu cliente espera."
        },
        {
          title: "¿Cómo? · Plan sin fricción",
          description: "Analizamos tu sistema, debatimos internamente y mostramos un plan de 3 pasos sin tecnicismos innecesarios."
        },
        {
          title: "¿Qué? · Stack adaptado",
          description: "Software y agentes de IA a medida que eliminan tareas repetitivas y hacen crecer el negocio."
        }
      ],
      timeline: [
        {
          label: "Pulso del Por qué",
          copy: "Entrevistamos al héroe, documentamos las métricas críticas y el costo de no actuar."
        },
        {
          label: "Debate del Cómo",
          copy: "Co-creamos el plan StoryBrand, el blueprint de UX y las instancias de seguimiento."
        },
        {
          label: "Lanzamiento del Qué",
          copy: "Orquestamos WebGL, copy y la solución de software o IA que materializa la promesa."
        }
      ],
      cardLabel: "Sala de control del Círculo Dorado",
      cardStatus: "Guía en vivo",
      cardNote: "Cada decisión queda atada a rituales medibles: landing, IA y mantenimiento trabajando como uno solo.",
      pvu: {
        label: "Por qué · Cómo · Qué",
        statement: "PVU que declara la transformación, elimina la fricción y describe la tecnología hecha a medida.",
        steps: [
          { title: "POR QUÉ", description: "El éxito deseado y lo que se pierde si nada cambia." },
          { title: "CÓMO", description: "Plan StoryBrand, gobernanza y transparencia en cada hito." },
          { title: "QUÉ", description: "Software + IA diseñados para que esa victoria ocurra sí o sí." }
        ]
      }
    },
    problem: {
      badge: "ENTENDEMOS EL DOLOR",
      title: "¿Te resuena?",
      subtitle:
        "La IA llega con promesas pero tus sistemas siguen lentos, manuales y llenos de complejidad innecesaria.",
      pains: [
        {
          title: "Ruido y más ruido",
          description: "Los proveedores hablan en acrónimos y nadie explica cómo resolver tu cuello de botella real."
        },
        {
          title: "Procesos manuales",
          description: "Tu equipo continúa copiando datos, rehaciendo planillas y perdiendo horas valiosas."
        },
        {
          title: "Riesgo sin guía",
          description: "Invertir se siente como apostar a ciegas porque falta un socio que garantice calidad, seguridad y escala."
        }
      ],
      agitation:
        "Mientras tanto la competencia ya automatiza. Cada mes de duda congela presupuesto, moral y oportunidades de crecimiento."
    },
    solution: {
      badge: "GUÍA · PLAN · SOLUCIÓN",
      title: "Es momento de un nuevo enfoque.",
      subtitle: "Traducimos tu Por qué, debatimos el Cómo y recién entonces construimos el Qué.",
      promise:
        "Nuestro propósito es ser el socio que elimina la fricción: optimizamos sistemas, reducimos tareas repetitivas y acercamos la IA a cualquier rubro.",
      note: "Trabajamos codo a codo con tu equipo para que cada instancia sea visible y medible.",
      pillars: [
        { title: "Descubrimiento empático", description: "Workshops profundos para mapear procesos, datos y personas." },
        { title: "Debate estratégico", description: "Contrastamos ideas internamente antes de presentarte una propuesta." },
        { title: "Entrega robusta", description: "Arquitecturas seguras, observabilidad y releases confiables." },
        { title: "Cuidado continuo", description: "Mantenimiento y experimentos que mantienen viva la innovación." }
      ],
      showcases: [
        {
          id: "agents",
          label: "Agentes de IA unificados",
          summary: "Copilotos con contexto de negocio.",
          hero: "IA",
          title: "Agentes que entienden tu operación",
          description: "Conectamos tus herramientas, definimos guardarraíles y entregamos un agente listo para tus equipos o clientes.",
          tags: ["RAG", "Automatización", "Governanza"],
          metrics: [
            { value: "85%", label: "Tareas manuales menos" },
            { value: "3 semanas", label: "Tiempo al piloto" }
          ],
          steps: [
            { title: "Mapa de contexto", desc: "Integramos ERPs, CRMs y documentación bajo un mismo grafo." },
            { title: "Diseño del agente", desc: "Definimos flujos, tono y escalamiento junto a tu equipo." },
            { title: "Lanzamiento y cuidado", desc: "Iteramos con métricas claras y soporte permanente." }
          ]
        },
        {
          id: "modernization",
          label: "Operaciones inteligentes",
          summary: "Modernización + automatización.",
          hero: "SISTEMAS",
          title: "Plataformas operativas con IA",
          description: "Refactorizamos legados, agregamos visión computarizada o IoT y mostramos tableros confiables.",
          tags: ["IoT", "Data fabric", "APIs seguras"],
          metrics: [
            { value: "40%", label: "Tiempo de ciclo menos" },
            { value: "99,9%", label: "Disponibilidad" }
          ],
          steps: [
            { title: "Auditoría integral", desc: "Relevamos procesos, datos y dependencias críticas." },
            { title: "Blueprint de experiencia", desc: "Definimos dashboards, automatizaciones y gobierno." },
            { title: "Entrega + soporte", desc: "Implementamos, medimos y mantenemos junto a tu equipo." }
          ]
        },
        {
          id: "immersive",
          label: "Landings inmersivas",
          summary: "WebGL + StoryBrand.",
          hero: "EXPERIENCIA",
          title: "Landing pages que fascinan y venden",
          description:
            "Construimos escenas 3D, motion y copys que conectan el Por qué, el Cómo y el Qué en segundos.",
          tags: ["StoryBrand", "WebGL", "CTA"],
          metrics: [
            { value: "5s", label: "PVU clara" },
            { value: "+63%", label: "Interacciones con CTA" }
          ],
          steps: [
            { title: "Voz del cliente", desc: "Investigamos cómo hablan tus usuarios." },
            { title: "Diseño cinematográfico", desc: "Animaciones WebGL inspiradas en Linear y Accenture." },
            { title: "Medición continua", desc: "Experimentamos y optimizamos con datos reales." }
          ]
        }
      ]
    },
    services: {
      title: "¿Qué entregamos?",
      subtitle: "Soluciones de software y servicios tecnológicos a medida para optimizar, modernizar y transformar tu operación.",
      list: [
        {
          title: "Landing del Círculo Dorado",
          desc: "Copy StoryBrand, PVU clara, analítica y bloques WebGL listos para iterar.",
          tags: ["StoryBrand", "WebGL", "Analítica"]
        },
        {
          title: "Programas de agentes IA",
          desc: "Copilotos unificados con retrieval, workflows y guardarraíles.",
          tags: ["IA", "RAG", "Operaciones"]
        },
        {
          title: "Automatización industrial",
          desc: "Visión computarizada, IoT y mantenimiento predictivo para reducir tiempos muertos.",
          tags: ["Visión", "IoT", "Edge"]
        },
        {
          title: "Plataformas web y mobile",
          desc: "Apps seguras y escalables con APIs limpias y observabilidad.",
          tags: ["Diseño", "APIs", "Escala"]
        }
      ]
    },
    how: {
      title: "Comienza en 3 pasos simples",
      subtitle: "Primero entendemos. Luego debatimos. Finalmente construimos y cuidamos.",
      steps: [
        { title: "01 · Descubrimiento", desc: "Workshops para entender sistemas, personas y métricas clave." },
        { title: "02 · Blueprint", desc: "Debatimos internamente y presentamos el plan StoryBrand + ruta técnica." },
        { title: "03 · Entrega", desc: "Implementamos software + IA con mantenimiento continuo." }
      ],
      aiNote:
        "Adaptamos la IA a cualquier rubro: finanzas, logística, retail o industria. Siempre con seguridad, gobernanza y resultados visibles.",
      calloutLabel: "Blueprint en vivo",
      calloutFooter: "Guía · Plan · Victoria"
    },
    proof: {
      badge: "PRUEBA",
      title: "Organizaciones que confían en ZIMUT",
      subtitle: "Acompañamos startups, pymes y corporativos para que la tecnología de vanguardia se sienta cercana.",
      logoTitle: "Confían en nosotros",
      logos: ["LUMINA", "ANDES", "TALENTIA", "AURORA", "PORTAL"],
      testimonials: [
        {
          quote: "Tradujeron nuestro caos en una landing increíble y un agente IA entrenado con nuestros procesos.",
          author: "Laura Rossi",
          role: "Directora de Operaciones"
        },
        {
          quote: "Por primera vez entendimos el Por qué, el Cómo y el Qué antes de invertir en desarrollo.",
          author: "Julián Soria",
          role: "CEO · SaaS B2B"
        },
        {
          quote: "Los tableros y automatizaciones nos devolvieron horas productivas y visibilidad.",
          author: "Carla Méndez",
          role: "Gerenta Industrial"
        }
      ],
      stats: [
        { value: "+63%", label: "Mejora en conversión" },
        { value: "12", label: "Industrias atendidas" },
        { value: "24/7", label: "Soporte y cuidado" }
      ]
    },
    stakes: {
      badge: "¿QUÉ PASA SI NO HACÉS NADA?",
      title: "La competencia avanza",
      subtitle: "Tus clientes seguirán lidiando con experiencias lentas mientras otros ya muestran IA en producción.",
      consequences: [
        { label: "Tiempo perdido", detail: "Tareas manuales siguen consumiendo a tu equipo." },
        { label: "Experiencia confusa", detail: "Sin un Por qué claro, los usuarios abandonan en segundos." },
        { label: "Estrategia congelada", detail: "La falta de guía frena decisiones y el ánimo interno cae." }
      ],
      finalReminder: "El momento de alinear Por qué, Cómo y Qué es ahora. Cada día sin claridad es una oportunidad perdida.",
      ctaLabel: "¿Listo para actuar?",
      ctaTitle: "Construyamos juntos el Círculo Dorado",
      ctaSubtitle: "En una sesión definimos el mapa completo y los próximos pasos.",
      ctaButton: "Reservar sesión"
    },
    contact: {
      title: "Contanos sobre tu desafío",
      subtitle: "Queremos conocer el dolor, los sistemas involucrados y el éxito que debemos habilitar.",
      fields: {
        name: "Nombre completo",
        email: "Email corporativo",
        company: "Empresa / Equipo",
        message: "¿Qué problema resolvemos primero?"
      },
      submit: "Enviar",
      sending: "Enviando...",
      success: "¡Gracias! Te respondemos en menos de 24 horas.",
      error: "Ocurrió un error. Intentalo nuevamente.",
      validation: "Nombre, email y mensaje son obligatorios.",
      pills: ["StoryBrand", "WebGL", "IA", "Soporte"],
      stakesTitle: "Durante la llamada",
      stakes: [
        "Profundizamos en el Por qué",
        "Entendemos sistemas y barreras",
        "Definimos roadmap y mantenimiento"
      ],
      finalCta: "También podés escribirnos a hola@zimut.io"
    },
    footer: {
      rights: "Todos los derechos reservados.",
      message: "Tecnología diseñada en LatAm para el mundo."
    }
  }
};
