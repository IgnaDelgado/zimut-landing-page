import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, PenTool, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const stepIcons = [Search, PenTool, Rocket];

function StepCard({ step, icon: Icon, index, total }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-50px' });
    const isLast = index === total - 1;

    return (
        <div ref={cardRef} className="relative flex-1 group">
            {/* Connector Line (Desktop) */}
            {!isLast && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-[#3A4447] -z-10">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-[#24C768] origin-left"
                    />
                </div>
            )}

            {/* Connector Line (Mobile) */}
            {!isLast && (
                <div className="lg:hidden absolute left-8 top-16 bottom-[-48px] w-0.5 bg-[#3A4447] z-0">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full bg-[#24C768] origin-top"
                    />
                </div>
            )}

            <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8 mb-12 lg:mb-0">
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${isLast
                                ? 'bg-[#24C768] border-[#24C768] shadow-[0_0_30px_rgba(36,199,104,0.3)]'
                                : 'bg-[#1A1F21] border-[#3A4447] group-hover:border-[#24C768]'
                            }`}
                    >
                        <Icon className={`w-8 h-8 ${isLast ? 'text-[#1A1F21]' : 'text-[#9FA8AD] group-hover:text-[#24C768]'} transition-colors`} />
                    </motion.div>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="flex-1 pt-2 lg:pt-0 lg:text-center"
                >
                    <div className="flex lg:justify-center items-center gap-4 mb-4">
                        <span
                            className="text-sm font-bold text-[#24C768] px-3 py-1 rounded-full bg-[#24C768]/10 border border-[#24C768]/20"
                            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        >
                            {step.number}
                        </span>
                        {isLast && (
                            <span className="text-xs font-bold text-[#1A1F21] px-2 py-0.5 rounded bg-[#24C768]">
                                CRITICAL STEP
                            </span>
                        )}
                    </div>

                    <h3
                        className={`text-2xl font-bold mb-4 ${isLast ? 'text-[#24C768]' : 'text-white'}`}
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                        {step.title}
                    </h3>

                    <p
                        className="text-[#9FA8AD] leading-relaxed max-w-sm mx-auto"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                        {step.description}
                    </p>

                    {isLast && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 }}
                            className="mt-6 flex flex-col items-start lg:items-center gap-2"
                        >
                            {['Agile Methodology', 'Weekly Sprints'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#24C768]" />
                                    <span className="text-[#E9ECED] text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default function ProcessSection() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            id="process"
            ref={sectionRef}
            className="relative py-32 bg-[#1A1F21] overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#24C768]/5 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-2 bg-[#24C768]/10 rounded-full text-sm font-medium text-[#24C768] mb-6"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                        {t.plan.tagline}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                        {t.plan.title}
                    </motion.h2>

                    {t.plan.subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-[#9FA8AD] max-w-2xl mx-auto"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            {t.plan.subtitle}
                        </motion.p>
                    )}
                </div>

                {/* Timeline */}
                <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-4">
                    {t.plan.steps.map((step, index) => (
                        <StepCard
                            key={index}
                            step={step}
                            icon={stepIcons[index]}
                            index={index}
                            total={t.plan.steps.length}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[#24C768] font-bold hover:text-white transition-colors duration-300 group"
                    >
                        <span className="border-b-2 border-[#24C768] group-hover:border-white pb-1">
                            Start your journey
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
