import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Code2, Brain, RefreshCw, HeartHandshake, Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const featureIcons = [Code2, Brain, RefreshCw, HeartHandshake];

function OrderedFlowAnimation() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
                {/* Ordered, converging lines */}
                {[...Array(6)].map((_, i) => (
                    <motion.path
                        key={i}
                        d={`M${50 + i * 100},50 L${300},300 L${50 + i * 100},550`}
                        stroke="#24C768"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    />
                ))}

                {/* Central node */}
                <motion.circle
                    cx="300"
                    cy="300"
                    r="8"
                    fill="#24C768"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    viewport={{ once: true }}
                />

                {/* Pulsing ring */}
                <motion.circle
                    cx="300"
                    cy="300"
                    r="30"
                    fill="none"
                    stroke="#24C768"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
                    viewport={{ once: true }}
                />
            </svg>
        </div>
    );
}

export default function SolutionSection() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section
            id="solutions"
            ref={sectionRef}
            className="relative py-32 bg-[#1A1F21] overflow-hidden"
        >
            {/* Animated Background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0">
                <OrderedFlowAnimation />
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1A1F21] to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1F21] to-transparent z-10" />

            <div className="relative z-20 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-2 bg-[#24C768]/10 rounded-full text-sm font-medium text-[#24C768] mb-6"
                            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        >
                            {t.solution.tagline}
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                            itemProp="name"
                        >
                            {t.solution.title}
                            <br />
                            <span className="text-[#24C768]">{t.solution.titleHighlight}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-[#9FA8AD] leading-relaxed mb-10"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            {t.solution.description}
                        </motion.p>

                        {/* Guarantees */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            {['Seguridad', 'Escalabilidad', 'Transparencia'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-[#24C768]/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-[#24C768]" />
                                    </div>
                                    <span
                                        className="text-sm text-[#BFC5C8]"
                                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {t.solution.features.map((feature, index) => {
                            const Icon = featureIcons[index];
                            const isEven = index % 2 === 0;

                            // Slide in from alternating sides with stagger
                            const cardVariants = {
                                hidden: {
                                    opacity: 0,
                                    x: isEven ? -60 : 60,
                                    y: 20,
                                    scale: 0.95
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                        delay: 0.2 + index * 0.15
                                    }
                                },
                                hover: {
                                    y: -8,
                                    scale: 1.02,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 20
                                    }
                                }
                            };

                            const iconVariants = {
                                hidden: { scale: 0, rotate: -90 },
                                visible: {
                                    scale: 1,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 12,
                                        delay: 0.4 + index * 0.15
                                    }
                                },
                                hover: {
                                    scale: 1.15,
                                    rotate: 5,
                                    transition: { duration: 0.2 }
                                }
                            };

                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    whileHover="hover"
                                    className="group relative"
                                >
                                    <div className="relative bg-[#3A4447]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#59656A]/30 hover:border-[#24C768]/50 transition-all duration-500 h-full">
                                        {/* Animated glow on hover */}
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#24C768]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />

                                        {/* Animated Icon */}
                                        <motion.div
                                            className="relative z-10 w-12 h-12 rounded-xl bg-[#24C768]/10 flex items-center justify-center mb-4 group-hover:bg-[#24C768]/20 transition-colors duration-500"
                                            variants={iconVariants}
                                        >
                                            <Icon className="w-6 h-6 text-[#24C768]" />
                                        </motion.div>

                                        <h3
                                            className="relative z-10 text-lg font-bold text-white mb-2"
                                            style={{ fontFamily: 'Raleway, sans-serif' }}
                                            itemProp="name"
                                        >
                                            {feature.title}
                                        </h3>
                                        <p
                                            className="relative z-10 text-sm text-[#9FA8AD]"
                                            style={{ fontFamily: 'Raleway, sans-serif' }}
                                            itemProp="description"
                                        >
                                            {feature.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
