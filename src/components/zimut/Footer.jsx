import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Mail, href: 'mailto:hola@zimut.com', label: 'Email' },
    ];

    return (
        <footer
            className="relative bg-[#0d1012] border-t border-[#3A4447]/30"
            itemScope
            itemType="https://schema.org/Organization"
            role="contentinfo"
        >
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#24C768] to-[#147A41] flex items-center justify-center">
                                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>Z</span>
                            </div>
                            <span
                                className="text-xl font-bold text-white"
                                style={{ fontFamily: 'Raleway, sans-serif' }}
                            >
                                ZIMUT
                            </span>
                        </div>
                        <meta itemProp="name" content="Zimut" />
                        <p
                            className="text-[#7C878C] max-w-sm mb-6 leading-relaxed"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                            itemProp="description"
                        >
                            {t.footer.tagline}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-xl bg-[#3A4447]/50 flex items-center justify-center text-[#7C878C] hover:text-[#24C768] hover:bg-[#3A4447] transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className="text-white font-semibold mb-6"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            {t.nav.solutions}
                        </h4>
                        <ul className="space-y-3">
                            {t.solution.features.map((feature, index) => (
                                <li key={index}>
                                    <a
                                        href="#solutions"
                                        className="text-[#7C878C] hover:text-[#24C768] transition-colors duration-300"
                                        style={{ fontFamily: 'Raleway, sans-serif' }}
                                    >
                                        {feature.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="text-white font-semibold mb-6"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                        >
                            {t.nav.contact}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:hola@zimut.com"
                                    className="text-[#7C878C] hover:text-[#24C768] transition-colors duration-300"
                                    style={{ fontFamily: 'Raleway, sans-serif' }}
                                >
                                    hola@zimut.com
                                </a>
                            </li>
                            <li>
                                <span
                                    className="text-[#7C878C]"
                                    style={{ fontFamily: 'Raleway, sans-serif' }}
                                >
                                    Buenos Aires, Argentina
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#3A4447]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p
                        className="text-sm text-[#59656A]"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                        {t.footer.copyright}
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-sm text-[#59656A] hover:text-[#7C878C] transition-colors duration-300"
                            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        >
                            {t.footer.links.privacy}
                        </a>
                        <a
                            href="#"
                            className="text-sm text-[#59656A] hover:text-[#7C878C] transition-colors duration-300"
                            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        >
                            {t.footer.links.terms}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
