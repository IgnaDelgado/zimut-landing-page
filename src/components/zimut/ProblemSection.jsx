import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Unplug, UserX, Clock } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const painIcons = [Zap, Unplug, UserX, Clock];

function ChaoticBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                {/* Chaotic scattered lines representing confusion - Dark theme */}
                {[...Array(20)].map((_, i) => {
                    const startX = Math.random() * 1200;
                    const startY = Math.random() * 800;
                    const endX = startX + (Math.random() - 0.5) * 200;
                    const endY = startY + (Math.random() - 0.5) * 200;

                    return (
                        <motion.line
                            key={i}
                            x1={startX}
                            y1={startY}
                            x2={endX}
                            y2={endY}
                            stroke="#3A4447"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.5 }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            viewport={{ once: true }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}

function PainCard({ pain, icon: Icon, index }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-50px' });

    // Icon animation variants
    const iconVariants = {
        hidden: { scale: 0, rotate: -180, opacity: 0 },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.15 + 0.3
            }
        },
        hover: {
            scale: 1.1,
            y: -3,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const iconBounce = {
        y: [0, -6, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.3
        }
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
        >
            <div className="relative bg-[#3A4447]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#59656A]/30 hover:border-[#24C768]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#24C768]/10">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#24C768]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    {/* Animated Icon Container */}
                    <motion.div
                        className="w-14 h-14 rounded-xl bg-[#59656A]/30 flex items-center justify-center mb-6 group-hover:bg-[#24C768]/20 transition-all duration-500"
                        variants={iconVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        whileHover="hover"
                    >
                        <motion.div
                            animate={isInView ? iconBounce : {}}
                        >
                            <Icon className="w-7 h-7 text-[#9FA8AD] group-hover:text-[#24C768] transition-colors duration-500" />
                        </motion.div>
                    </motion.div>

                    {/* Number */}
                    <span
                        className="absolute top-6 right-6 text-5xl font-bold text-[#3A4447] group-hover:text-[#24C768]/20 transition-colors duration-500"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                        0{index + 1}
                    </span>

                    {/* Content - H3 for SEO hierarchy */}
                    <h3
                        className="text-xl font-bold text-white mb-3"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        itemProp="name"
                    >
                        {pain.title}
                    </h3>
                    <p
                        className="text-[#9FA8AD] leading-relaxed"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        itemProp="description"
                    >
                        {pain.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProblemSection() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            ref={sectionRef}
            className="relative py-32 bg-[#0d1012] overflow-hidden"
        >
            <ChaoticBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-2 bg-[#24C768]/10 rounded-full text-sm font-medium text-[#24C768] mb-6"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                        {t.problem.tagline}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                        {t.problem.title}
                    </motion.h2>

                    {t.problem.subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-[#9FA8AD] max-w-2xl mx-auto"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            {t.problem.subtitle}
                        </motion.p>
                    )}
                </div>

                {/* Pain Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {t.problem.pains.map((pain, index) => (
                        <PainCard
                            key={index}
                            pain={pain}
                            icon={painIcons[index]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
