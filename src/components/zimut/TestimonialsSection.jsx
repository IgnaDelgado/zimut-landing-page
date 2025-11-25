import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// Fictional client logos
const clientLogos = [
    { name: 'TechRetail', initial: 'TR' },
    { name: 'Logística del Sur', initial: 'LS' },
    { name: 'ServicePro', initial: 'SP' },
    { name: 'DataFlow', initial: 'DF' },
    { name: 'InnovaLab', initial: 'IL' },
    { name: 'CloudBase', initial: 'CB' },
];

function ClientLogos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="mb-20">
            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="text-center text-sm text-[#9FA8AD] mb-8"
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
                Trusted by industry leaders
            </motion.p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {clientLogos.map((logo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#3A4447] flex items-center justify-center border border-[#59656A]/30 group-hover:border-[#24C768]/50 transition-all duration-300">
                            <span
                                className="text-xl md:text-2xl font-bold text-[#7C878C] group-hover:text-[#24C768] transition-colors duration-300"
                                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                            >
                                {logo.initial}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function TestimonialCard({ testimonial, index }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
            itemScope
            itemType="https://schema.org/Review"
        >
            <div className="relative h-full bg-[#3A4447]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#59656A]/30 hover:border-[#24C768]/30 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#24C768]/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-[#24C768]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#24C768] text-[#24C768]" />
                    ))}
                </div>

                {/* Quote - with Schema.org markup */}
                <p
                    className="text-lg text-[#E9ECED] leading-relaxed mb-8"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                    itemProp="reviewBody"
                >
                    "{testimonial.quote}"
                </p>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#24C768]/10 rounded-full mb-6">
                    <TrendingUp className="w-4 h-4 text-[#24C768]" />
                    <span
                        className="text-sm font-semibold text-[#24C768]"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                        {testimonial.metric}
                    </span>
                </div>

                {/* Author - with Schema.org markup */}
                <div className="flex items-center gap-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#24C768] to-[#147A41] flex items-center justify-center">
                        <span className="text-white font-bold" aria-hidden="true">
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                    <div>
                        <p
                            className="font-semibold text-white"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                            itemProp="name"
                        >
                            {testimonial.author}
                        </p>
                        <p
                            className="text-sm text-[#9FA8AD]"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                            itemProp="jobTitle"
                        >
                            {testimonial.role}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialsSection() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            id="clients"
            ref={sectionRef}
            className="relative py-32 bg-[#1A1F21] overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#24C768] rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#24C768] rounded-full blur-[128px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-2 bg-[#24C768]/10 rounded-full text-sm font-medium text-[#24C768] mb-6"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                        {t.social.tagline}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        itemProp="name"
                    >
                        {t.social.title}
                        <br />
                        <span className="text-[#24C768]">{t.social.titleHighlight}</span>
                    </motion.h2>
                </div>

                {/* Client Logos */}
                <ClientLogos />

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.social.testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
