import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { AlertTriangle, Send, Clock, TrendingDown, Frown, DollarSign, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const consequenceIcons = [TrendingDown, Frown, Clock, DollarSign];

function CinematicBackground() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.7, 1], [0.3, 0.6]);

    return (
        <motion.div style={{ opacity }} className="absolute inset-0 overflow-hidden">
            {/* Dramatic gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F21] via-[#1A1F21] to-[#0d1012]" />

            {/* Animated converging lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                {[...Array(12)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1={i * 100}
                        y1="0"
                        x2="600"
                        y2="800"
                        stroke="#24C768"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.1 }}
                        transition={{ duration: 2, delay: i * 0.05 }}
                        viewport={{ once: true }}
                    />
                ))}
            </svg>

            {/* Central glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#24C768] rounded-full blur-[200px] opacity-10" />
        </motion.div>
    );
}

function ContactForm({ t }) {
    // TODO: Replace 'YOUR_FORM_ID' with your actual Formspree Form ID from https://formspree.io
    // Example: 'xmqzlbvp'
    const FORMSPREE_ID = 'xanzazpd';

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormState({ name: '', email: '', company: '', message: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            {isSuccess ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#24C768]/10 border border-[#24C768]/30 rounded-2xl p-8 text-center"
                >
                    <div className="w-16 h-16 bg-[#24C768]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-[#24C768]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        {t.cta.form.success}
                    </h4>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-medium text-[#9FA8AD] mb-1 ml-1">
                            {t.cta.form.name}
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1A1F21]/50 border border-[#3A4447] rounded-xl text-white placeholder-[#59656A] focus:outline-none focus:border-[#24C768] focus:ring-1 focus:ring-[#24C768] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#9FA8AD] mb-1 ml-1">
                            {t.cta.form.email}
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1A1F21]/50 border border-[#3A4447] rounded-xl text-white placeholder-[#59656A] focus:outline-none focus:border-[#24C768] focus:ring-1 focus:ring-[#24C768] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#9FA8AD] mb-1 ml-1">
                            {t.cta.form.company}
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1A1F21]/50 border border-[#3A4447] rounded-xl text-white placeholder-[#59656A] focus:outline-none focus:border-[#24C768] focus:ring-1 focus:ring-[#24C768] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#9FA8AD] mb-1 ml-1">
                            {t.cta.form.message}
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="4"
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#1A1F21]/50 border border-[#3A4447] rounded-xl text-white placeholder-[#59656A] focus:outline-none focus:border-[#24C768] focus:ring-1 focus:ring-[#24C768] transition-colors resize-none"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#24C768] text-[#1A1F21] font-bold text-lg rounded-xl hover:bg-[#2ed875] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-[#24C768]/20 mt-4"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-[#1A1F21] border-t-transparent rounded-full animate-spin" />
                                {t.cta.form.sending}
                            </>
                        ) : (
                            <>
                                {t.cta.form.submit}
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </motion.button>
                </form>
            )}
        </div>
    );
}

export default function CTASection() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative py-32 bg-[#1A1F21] overflow-hidden"
        >
            <CinematicBackground />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Consequences Section */}
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full text-sm font-medium text-amber-400 mb-6"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                        <AlertTriangle className="w-4 h-4" />
                        {t.cta.tagline}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                        itemProp="name"
                    >
                        {t.cta.title}
                    </motion.h2>

                    {/* Consequences Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {t.cta.consequences.map((consequence, index) => {
                            const Icon = consequenceIcons[index];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="flex items-start gap-4 p-5 bg-[#3A4447]/30 rounded-xl border border-[#59656A]/20"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-red-400" />
                                    </div>
                                    <p
                                        className="text-[#BFC5C8] leading-relaxed"
                                        style={{ fontFamily: 'Raleway, sans-serif' }}
                                    >
                                        {consequence}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Final CTA Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative"
                >
                    <div className="relative bg-gradient-to-br from-[#24C768]/10 to-[#147A41]/5 rounded-3xl p-8 md:p-12 border border-[#24C768]/30 text-center overflow-hidden backdrop-blur-sm">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-[#24C768] rounded-full blur-[100px] opacity-10" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#24C768] rounded-full blur-[100px] opacity-10" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                                    style={{ fontFamily: 'Raleway, sans-serif' }}
                                    itemProp="name"
                                >
                                    {t.cta.finalTitle}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="text-lg text-[#9FA8AD] mb-8"
                                    style={{ fontFamily: 'Raleway, sans-serif' }}
                                >
                                    {t.cta.finalSubtitle}
                                </motion.p>
                            </div>

                            <div className="w-full">
                                <ContactForm t={t} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
