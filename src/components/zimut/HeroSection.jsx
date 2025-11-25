import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// Animated flowing lines representing data transformation - Dark theme
function FlowingLines() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                {/* Chaotic lines transforming to ordered */}
                {[...Array(8)].map((_, i) => (
                    <motion.path
                        key={i}
                        d={`M${-100 + i * 50},${100 + i * 80} Q${300 + i * 100},${200 + Math.sin(i) * 100} ${600},${400} T${1200 + i * 30},${300 + i * 60}`}
                        stroke={i % 2 === 0 ? '#24C768' : '#3A4447'}
                        strokeWidth={i % 3 === 0 ? 2 : 1}
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: i % 2 === 0 ? 0.5 : 0.3 }}
                        transition={{
                            duration: 2.5,
                            delay: i * 0.15,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    />
                ))}

                {/* Central convergence point with glow */}
                <motion.circle
                    cx="600"
                    cy="400"
                    r="4"
                    fill="#24C768"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                />
                <motion.circle
                    cx="600"
                    cy="400"
                    r="20"
                    fill="none"
                    stroke="#24C768"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ delay: 1.8, duration: 2, repeat: Infinity }}
                />
            </svg>
        </div>
    );
}

// Floating data nodes - Dark theme
function FloatingNodes() {
    const nodes = [
        { x: '15%', y: '25%', delay: 0 },
        { x: '85%', y: '20%', delay: 0.3 },
        { x: '10%', y: '70%', delay: 0.6 },
        { x: '90%', y: '65%', delay: 0.9 },
        { x: '25%', y: '85%', delay: 1.2 },
        { x: '75%', y: '80%', delay: 1.5 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none">
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: node.x, top: node.y }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 0.8,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        scale: { delay: node.delay + 1, duration: 0.5 },
                        opacity: { delay: node.delay + 1, duration: 0.5 },
                        y: { delay: node.delay + 1.5, duration: 3, repeat: Infinity, ease: 'easeInOut' }
                    }}
                >
                    <div className="w-2 h-2 rounded-full bg-[#24C768]/60" />
                </motion.div>
            ))}
        </div>
    );
}

export default function HeroSection() {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A1F21] via-[#0d1012] to-[#1A1F21]"
        >
            {/* Background Elements */}
            <FlowingLines />
            <FloatingNodes />

            {/* Gradient Orbs - Dark theme */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24C768]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#24C768]/10 rounded-full blur-3xl" />

            {/* Content */}
            <motion.div
                style={{ opacity, y, scale }}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20"
            >
                {/* Tagline - Dark theme */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#24C768]/15 rounded-full mb-8 border border-[#24C768]/30"
                >
                    <Sparkles className="w-4 h-4 text-[#24C768]" />
                    <span
                        className="text-sm font-medium text-[#24C768]"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                        {t.hero.tagline}
                    </span>
                </motion.div>

                {/* Main Title - H1 for SEO - Dark theme */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                    <span itemProp="name">{t.hero.title}</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24C768] to-[#2ed875]">
                        {t.hero.titleHighlight}
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-[#9FA8AD] max-w-2xl mx-auto mb-12 leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                    {t.hero.subtitle}
                </motion.p>

                {/* CTAs - Dark theme */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group px-8 py-4 bg-[#24C768] text-[#1A1F21] font-semibold rounded-full flex items-center gap-3 hover:bg-[#2ed875] transition-all duration-300 shadow-lg shadow-[#24C768]/30"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                        {t.hero.cta1}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                        href="#solutions"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-[#59656A] hover:border-[#24C768] hover:text-[#24C768] transition-all duration-300"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                        {t.hero.cta2}
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator - Dark theme */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-6 h-10 rounded-full border-2 border-[#59656A] flex items-start justify-center p-2"
                    >
                        <motion.div
                            animate={{ height: ['20%', '40%', '20%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1 bg-[#24C768] rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
