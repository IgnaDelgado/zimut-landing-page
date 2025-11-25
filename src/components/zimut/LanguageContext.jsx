import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
    es: {
        meta: {
            title: 'Zimut | Desarrollo de Software a Medida e IA para Empresas',
            description: 'Soluciones tecnológicas para pymes: desarrollo de software personalizado, inteligencia artificial aplicada, automatización de procesos y transformación digital. Consultores expertos en Buenos Aires.',
            keywords: 'desarrollo software a medida, IA para empresas, soluciones tecnológicas pymes, automatización procesos, transformación digital, software personalizado, inteligencia artificial negocios, consultoría tecnológica'
        },
        nav: {
            solutions: 'Soluciones',
            process: 'Proceso',
            clients: 'Clientes',
            contact: 'Contacto'
        },
        hero: {
            tagline: 'Tecnología con propósito',
            title: 'Convertimos el caos digital',
            titleHighlight: 'en claridad para tu negocio',
            subtitle: 'Mientras otros te confunden con tecnicismos, nosotros entendemos tu problema y construimos la solución exacta que necesitás. Desarrollo de software a medida e IA aplicada.',
            cta1: 'Hablar con un experto',
            cta2: 'Explorar soluciones'
        },
        problem: {
            tagline: 'El problema real',
            title: '¿Te suena familiar?',
            subtitle: 'Las pymes enfrentan estos desafíos tecnológicos todos los días',
            pains: [
                {
                    title: 'Sobrecarga de herramientas digitales',
                    description: 'Cada día aparece una nueva herramienta, una nueva IA, una nueva promesa. La saturación tecnológica paraliza la toma de decisiones.'
                },
                {
                    title: 'Software que no se integra',
                    description: 'Sistemas desconectados que no comparten datos. Necesitás desarrollo de software a medida que unifique tus operaciones.'
                },
                {
                    title: 'Proveedores sin soporte continuo',
                    description: 'Implementaron algo, cobraron y desaparecieron. Sin documentación ni mantenimiento de software.'
                },
                {
                    title: 'Procesos manuales sin automatizar',
                    description: 'Tu equipo pierde horas en tareas repetitivas. La automatización de procesos con IA podría liberar ese tiempo.'
                }
            ]
        },
        solution: {
            tagline: 'Nuestra filosofía',
            title: 'No vendemos tecnología.',
            titleHighlight: 'Resolvemos problemas.',
            description: 'Antes de escribir una línea de código, entendemos profundamente tu negocio. Diseñamos soluciones claras, sin complejidad innecesaria, que escalan con vos. Desarrollo de software a medida e IA aplicada.',
            features: [
                { title: 'Desarrollo de Software a Medida', desc: 'Aplicaciones web y móviles personalizadas para tu operación específica' },
                { title: 'Inteligencia Artificial para Empresas', desc: 'Chatbots, automatización inteligente y análisis predictivo con IA' },
                { title: 'Modernización de Sistemas Legacy', desc: 'Actualizamos y migramos tus sistemas obsoletos a tecnología moderna' },
                { title: 'Soporte y Mantenimiento Continuo', desc: 'Acompañamiento permanente, actualizaciones y optimización constante' }
            ]
        },
        plan: {
            tagline: 'Cómo trabajamos',
            title: 'Tu camino hacia la claridad',
            subtitle: 'Así implementamos soluciones tecnológicas que realmente funcionan',
            steps: [
                {
                    number: '01',
                    title: 'Diagnóstico Tecnológico',
                    description: 'Analizamos tu infraestructura actual, procesos de negocio y objetivos. Identificamos oportunidades de automatización y mejora.'
                },
                {
                    number: '02',
                    title: 'Diseño de Arquitectura',
                    description: 'Creamos la solución de software a medida. Definimos tecnologías, integraciones y roadmap de implementación.'
                },
                {
                    number: '03',
                    title: 'Ejecución y Desarrollo',
                    description: 'Construimos, probamos y desplegamos. Capacitamos a tu equipo y brindamos soporte técnico continuo.'
                }
            ]
        },
        social: {
            tagline: 'Resultados reales',
            title: 'Empresas que ya encontraron',
            titleHighlight: 'la claridad',
            testimonials: [
                {
                    quote: 'El desarrollo de software a medida que nos entregaron automatizó procesos que nos costaban 40 horas semanales. ROI en 3 meses.',
                    author: 'María González',
                    role: 'CEO, Logística del Sur',
                    metric: '-40hrs/semana'
                },
                {
                    quote: 'La consultoría tecnológica de Zimut fue diferente. Primero entendieron nuestro negocio, luego propusieron la solución correcta.',
                    author: 'Carlos Mendoza',
                    role: 'Director de Operaciones, TechRetail',
                    metric: '+180% eficiencia'
                },
                {
                    quote: 'Implementaron un chatbot con IA que transformó nuestra atención al cliente. Respuestas 24/7 sin aumentar personal.',
                    author: 'Ana Rodríguez',
                    role: 'Gerente General, ServicePro',
                    metric: '24/7 automatizado'
                }
            ]
        },
        cta: {
            tagline: 'El costo de no actuar',
            title: '¿Qué pasa si no hacés nada?',
            consequences: [
                'Tu competencia automatiza con IA mientras vos seguís en Excel',
                'Tu equipo se frustra con procesos manuales eternos',
                'Perdés oportunidades de negocio que el software capturaría',
                'El costo de modernizar sistemas crece cada año que pasa'
            ],
            finalTitle: 'El momento es ahora',
            finalSubtitle: 'Una conversación de 30 minutos puede cambiar la dirección de tu negocio.',
            cta: 'Agendar consulta gratuita',
            form: {
                name: 'Nombre',
                email: 'Email',
                company: 'Empresa (Opcional)',
                message: 'Cuéntanos sobre tu proyecto o problema',
                submit: 'Enviar mensaje',
                success: '¡Mensaje enviado! Nos pondremos en contacto pronto.',
                sending: 'Enviando...'
            }
        },
        footer: {
            tagline: 'Desarrollo de Software a Medida e IA para Empresas en Argentina',
            copyright: '© 2025 Zimut. Soluciones Tecnológicas. Todos los derechos reservados.',
            links: {
                privacy: 'Privacidad',
                terms: 'Términos',
                contact: 'Contacto'
            }
        }
    },
    en: {
        meta: {
            title: 'Zimut | Custom Software Development & AI Solutions for Business',
            description: 'Technology solutions for SMBs: custom software development, applied artificial intelligence, business process automation and digital transformation. Expert consultants.',
            keywords: 'custom software development, AI for business, SMB technology solutions, process automation, digital transformation, bespoke software, artificial intelligence business, technology consulting'
        },
        nav: {
            solutions: 'Solutions',
            process: 'Process',
            clients: 'Clients',
            contact: 'Contact'
        },
        hero: {
            tagline: 'Technology with purpose',
            title: 'We turn digital chaos',
            titleHighlight: 'into clarity for your business',
            subtitle: 'While others confuse you with technical jargon, we understand your problem and build the exact solution you need. Custom software development and applied AI.',
            cta1: 'Talk to an expert',
            cta2: 'Explore solutions'
        },
        problem: {
            tagline: 'The real problem',
            title: 'Sound familiar?',
            subtitle: 'SMBs face these technology challenges every day',
            pains: [
                {
                    title: 'Digital tool overload',
                    description: 'Every day a new tool, a new AI, a new promise appears. Technology saturation paralyzes decision-making.'
                },
                {
                    title: 'Software that doesn\'t integrate',
                    description: 'Disconnected systems that don\'t share data. You need custom software development to unify your operations.'
                },
                {
                    title: 'Vendors without ongoing support',
                    description: 'They implemented something, charged you, and disappeared. No documentation or software maintenance.'
                },
                {
                    title: 'Manual processes without automation',
                    description: 'Your team wastes hours on repetitive tasks. AI-powered process automation could free that time.'
                }
            ]
        },
        solution: {
            tagline: 'Our philosophy',
            title: 'We don\'t sell technology.',
            titleHighlight: 'We solve problems.',
            description: 'Before writing a single line of code, we deeply understand your business. We design clear solutions, without unnecessary complexity, that scale with you. Custom software development and applied AI.',
            features: [
                { title: 'Custom Software Development', desc: 'Personalized web and mobile applications for your specific operation' },
                { title: 'Artificial Intelligence for Business', desc: 'Chatbots, intelligent automation and predictive analytics with AI' },
                { title: 'Legacy System Modernization', desc: 'We update and migrate your obsolete systems to modern technology' },
                { title: 'Ongoing Support & Maintenance', desc: 'Permanent accompaniment, updates and constant optimization' }
            ]
        },
        plan: {
            tagline: 'How we work',
            title: 'Your path to clarity',
            subtitle: 'How we implement technology solutions that actually work',
            steps: [
                {
                    number: '01',
                    title: 'Technology Diagnosis',
                    description: 'We analyze your current infrastructure, business processes and objectives. We identify automation and improvement opportunities.'
                },
                {
                    number: '02',
                    title: 'Architecture Design',
                    description: 'We create the custom software solution. We define technologies, integrations and implementation roadmap.'
                },
                {
                    number: '03',
                    title: 'Execution & Development',
                    description: 'We build, test and deploy. We train your team and provide continuous technical support.'
                }
            ]
        },
        social: {
            tagline: 'Real results',
            title: 'Companies that already found',
            titleHighlight: 'clarity',
            testimonials: [
                {
                    quote: 'The custom software development they delivered automated processes that cost us 40 hours weekly. ROI in 3 months.',
                    author: 'María González',
                    role: 'CEO, Logística del Sur',
                    metric: '-40hrs/week'
                },
                {
                    quote: 'Zimut\'s technology consulting was different. First they understood our business, then proposed the right solution.',
                    author: 'Carlos Mendoza',
                    role: 'Operations Director, TechRetail',
                    metric: '+180% efficiency'
                },
                {
                    quote: 'They implemented an AI chatbot that transformed our customer service. 24/7 responses without increasing staff.',
                    author: 'Ana Rodríguez',
                    role: 'General Manager, ServicePro',
                    metric: '24/7 automated'
                }
            ]
        },
        cta: {
            tagline: 'The cost of inaction',
            title: 'What happens if you do nothing?',
            consequences: [
                'Your competition automates with AI while you\'re still in Excel',
                'Your team gets frustrated with endless manual processes',
                'You miss business opportunities that software would capture',
                'The cost of modernizing systems grows every year that passes'
            ],
            finalTitle: 'The time is now',
            finalSubtitle: 'A 30-minute conversation can change the direction of your business.',
            cta: 'Schedule free consultation',
            form: {
                name: 'Name',
                email: 'Email',
                company: 'Company (Optional)',
                message: 'Tell us about your project or problem',
                submit: 'Send message',
                success: 'Message sent! We will be in touch soon.',
                sending: 'Sending...'
            }
        },
        footer: {
            tagline: 'Custom Software Development & AI Solutions for Businesses',
            copyright: '© 2025 Zimut. Technology Solutions. All rights reserved.',
            links: {
                privacy: 'Privacy',
                terms: 'Terms',
                contact: 'Contact'
            }
        }
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es');

    useEffect(() => {
        const savedLang = localStorage.getItem('zimut-lang');
        if (savedLang) setLanguage(savedLang);
    }, []);

    const toggleLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('zimut-lang', lang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
