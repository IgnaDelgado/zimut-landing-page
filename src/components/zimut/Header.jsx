import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Header() {
    const { language, toggleLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: t.nav.solutions, href: '#solutions' },
        { label: t.nav.process, href: '#process' },
        { label: t.nav.clients, href: '#clients' },
        { label: t.nav.contact, href: '#contact' }
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-[#1A1F21]/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.05)]'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo - Larger */}
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#24C768] to-[#147A41] flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl" style={{ fontFamily: 'Raleway, sans-serif' }}>Z</span>
                                </div>
                                <div className="absolute inset-0 rounded-xl bg-[#24C768] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                            </div>
                            <span
                                className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}
                                style={{ fontFamily: 'Raleway, sans-serif' }}
                            >
                                ZIMUT
                            </span>
                        </a>

                        {/* Desktop Navigation - Dark theme */}
                        <nav className="hidden lg:flex items-center gap-10">
                            {navItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className={`text-base font-medium transition-colors duration-300 hover:text-[#24C768] ${scrolled ? 'text-[#9FA8AD]' : 'text-[#9FA8AD]'
                                        }`}
                                    style={{ fontFamily: 'Raleway, sans-serif' }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Language Selector + CTA */}
                        <div className="hidden lg:flex items-center gap-6">
                            {/* Language Flags - Dark theme */}
                            <div className="flex items-center gap-2 p-1 bg-[#3A4447] rounded-full">
                                <button
                                    onClick={() => toggleLanguage('es')}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${language === 'es'
                                            ? 'bg-[#59656A] shadow-sm scale-110'
                                            : 'opacity-60 hover:opacity-100'
                                        }`}
                                    title="Español"
                                >
                                    🇪🇸
                                </button>
                                <button
                                    onClick={() => toggleLanguage('en')}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${language === 'en'
                                            ? 'bg-[#59656A] shadow-sm scale-110'
                                            : 'opacity-60 hover:opacity-100'
                                        }`}
                                    title="English"
                                >
                                    🇺🇸
                                </button>
                            </div>

                            {/* CTA Button - Larger, Green */}
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-3 bg-[#24C768] text-[#1A1F21] text-base font-semibold rounded-full hover:bg-[#2ed875] transition-colors duration-300"
                                style={{ fontFamily: 'Raleway, sans-serif' }}
                            >
                                {t.hero.cta1}
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button - Dark theme */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#3A4447] text-white"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
                        >
                            <div className="p-6 pt-24">
                                <nav className="flex flex-col gap-4">
                                    {navItems.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="text-lg font-medium text-[#1A1F21] py-3 border-b border-[#E9ECED]"
                                            style={{ fontFamily: 'Raleway, sans-serif' }}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>

                                {/* Mobile Language Selector */}
                                <div className="flex items-center gap-3 mt-8">
                                    <span className="text-sm text-[#7C878C]">Idioma:</span>
                                    <div className="flex items-center gap-2 p-1 bg-[#F4F6F7] rounded-full">
                                        <button
                                            onClick={() => toggleLanguage('es')}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${language === 'es' ? 'bg-white shadow-sm' : 'opacity-60'
                                                }`}
                                        >
                                            🇪🇸
                                        </button>
                                        <button
                                            onClick={() => toggleLanguage('en')}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${language === 'en' ? 'bg-white shadow-sm' : 'opacity-60'
                                                }`}
                                        >
                                            🇺🇸
                                        </button>
                                    </div>
                                </div>

                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="mt-8 w-full py-4 bg-[#1A1F21] text-white text-center font-medium rounded-xl block"
                                    style={{ fontFamily: 'Raleway, sans-serif' }}
                                >
                                    {t.hero.cta1}
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
