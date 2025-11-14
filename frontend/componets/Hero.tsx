"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />
        <div className="absolute -right-40 top-20 h-72 w-72 rounded-full bg-cyanSoft/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-24 pt-16 md:flex-row md:pt-24">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="z-10 flex-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            AI-first, sin humo técnico
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Soluciones tecnológicas que{" "}
            <span className="bg-gradient-to-r from-mint to-cyanSoft bg-clip-text text-transparent">
              guían tu negocio
            </span>{" "}
            hacia su mejor versión.
          </h1>

          <p className="mt-5 max-w-xl text-sm text-white/70 md:text-base">
            En ZIMUT acercamos la complejidad del software a tu realidad.
            Diseñamos soluciones claras, robustas y escalables, impulsadas por
            IA, para que puedas crecer sin fricción en el mundo digital.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-mint px-5 py-2 text-sm font-semibold text-bgDark shadow-lg shadow-mint/30 hover:bg-cyanSoft transition-colors"
            >
              Hablemos de tu proyecto
            </a>
            <a
              href="#servicios"
              className="text-sm text-white/70 hover:text-white"
            >
              Ver cómo podemos ayudarte →
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-xs text-white/50">
            <span className="rounded-full border border-white/10 px-3 py-1">
              IA aplicada con propósito
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Soluciones robustas y seguras
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Acompañamiento de principio a fin
            </span>
          </div>
        </motion.div>

        {/* “Orbitas” / animación representando el azimut */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="z-10 flex-1"
        >
          <div className="relative mx-auto h-80 w-80 max-w-full">
            <div className="card-glass absolute inset-8 flex flex-col items-center justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                ZIMUT
              </p>
              <p className="mt-2 text-center text-sm text-white/70">
                Orientamos, diseñamos y construimos soluciones de software
                adaptadas a tu negocio.
              </p>
              <p className="mt-4 text-xs text-mint">
                “Tecnología que te guía.”
              </p>
            </div>

            {/* Orbitas animadas */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-6 rounded-full border border-mint/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-3 flex items-center justify-end"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="h-3 w-3 rounded-full bg-cyanSoft shadow-md shadow-cyanSoft/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
