import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '../components/zimut/LanguageContext';
import Header from '../components/zimut/Header';
import HeroSection from '../components/zimut/HeroSection';
import ProblemSection from '../components/zimut/ProblemSection';
import SolutionSection from '../components/zimut/SolutionSection';
import ProcessSection from '../components/zimut/ProcessSection';
import TestimonialsSection from '../components/zimut/TestimonialsSection';
import CTASection from '../components/zimut/CTASection';
import Footer from '../components/zimut/Footer';

// Schema.org structured data for the organization
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zimut",
    "url": "https://zimut.com",
    "logo": "https://zimut.com/logo.png",
    "description": "Desarrollo de software a medida, inteligencia artificial para empresas y soluciones tecnológicas para pymes. Transformación digital y automatización de procesos.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buenos Aires",
        "addressCountry": "AR"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hola@zimut.com"
    },
    "sameAs": [
        "https://linkedin.com/company/zimut",
        "https://twitter.com/zimut"
    ]
};

// Schema.org structured data for services
const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Servicios de Desarrollo de Software y Tecnología",
    "description": "Soluciones tecnológicas integrales para empresas",
    "itemListElement": [
        {
            "@type": "Service",
            "position": 1,
            "name": "Desarrollo de Software a Medida",
            "description": "Aplicaciones web y móviles personalizadas para tu operación específica",
            "provider": { "@type": "Organization", "name": "Zimut" },
            "serviceType": "Custom Software Development"
        },
        {
            "@type": "Service",
            "position": 2,
            "name": "Inteligencia Artificial para Empresas",
            "description": "Chatbots, automatización inteligente y análisis predictivo con IA",
            "provider": { "@type": "Organization", "name": "Zimut" },
            "serviceType": "AI Solutions"
        },
        {
            "@type": "Service",
            "position": 3,
            "name": "Modernización de Sistemas Legacy",
            "description": "Actualizamos y migramos sistemas obsoletos a tecnología moderna",
            "provider": { "@type": "Organization", "name": "Zimut" },
            "serviceType": "System Modernization"
        },
        {
            "@type": "Service",
            "position": 4,
            "name": "Soporte y Mantenimiento Continuo",
            "description": "Acompañamiento permanente, actualizaciones y optimización constante",
            "provider": { "@type": "Organization", "name": "Zimut" },
            "serviceType": "IT Support"
        }
    ]
};

// Schema.org for FAQ (common questions about services)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Qué es el desarrollo de software a medida?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El desarrollo de software a medida consiste en crear aplicaciones específicamente diseñadas para las necesidades únicas de tu empresa, en lugar de usar soluciones genéricas que pueden no adaptarse a tus procesos."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo puede la IA ayudar a mi empresa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La inteligencia artificial puede automatizar tareas repetitivas, analizar grandes volúmenes de datos, mejorar la atención al cliente con chatbots y predecir tendencias de negocio para tomar mejores decisiones."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma implementar una solución tecnológica?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El tiempo varía según la complejidad del proyecto. Una automatización simple puede estar lista en semanas, mientras que un sistema completo de gestión puede tomar algunos meses. Siempre comenzamos con un diagnóstico para dar estimaciones precisas."
            }
        }
    ]
};

function SEOHead() {
    const { t, language } = useLanguage();

    useEffect(() => {
        // Update document title
        document.title = t.meta.title;

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = t.meta.description;

        // Update or create meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = t.meta.keywords;

        // Update or create language meta
        let metaLang = document.querySelector('meta[http-equiv="content-language"]');
        if (!metaLang) {
            metaLang = document.createElement('meta');
            metaLang.httpEquiv = 'content-language';
            document.head.appendChild(metaLang);
        }
        metaLang.content = language === 'es' ? 'es-AR' : 'en-US';

        // Open Graph tags
        const ogTags = [
            { property: 'og:title', content: t.meta.title },
            { property: 'og:description', content: t.meta.description },
            { property: 'og:type', content: 'website' },
            { property: 'og:locale', content: language === 'es' ? 'es_AR' : 'en_US' },
            { property: 'og:site_name', content: 'Zimut' }
        ];

        ogTags.forEach(tag => {
            let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
            if (!ogTag) {
                ogTag = document.createElement('meta');
                ogTag.setAttribute('property', tag.property);
                document.head.appendChild(ogTag);
            }
            ogTag.content = tag.content;
        });

        // Twitter Card tags
        const twitterTags = [
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: t.meta.title },
            { name: 'twitter:description', content: t.meta.description }
        ];

        twitterTags.forEach(tag => {
            let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
            if (!twitterTag) {
                twitterTag = document.createElement('meta');
                twitterTag.name = tag.name;
                document.head.appendChild(twitterTag);
            }
            twitterTag.content = tag.content;
        });

        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://zimut.com';

        // Add structured data scripts
        const schemaScripts = [
            { id: 'org-schema', data: organizationSchema },
            { id: 'services-schema', data: servicesSchema },
            { id: 'faq-schema', data: faqSchema }
        ];

        schemaScripts.forEach(schema => {
            let script = document.getElementById(schema.id);
            if (!script) {
                script = document.createElement('script');
                script.id = schema.id;
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(schema.data);
        });

    }, [t, language]);

    return null;
}

export default function Home() {
    useEffect(() => {
        // Load Google Fonts
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <LanguageProvider>
            <SEOHead />
            <div className="min-h-screen bg-white overflow-x-hidden">
                <Header />
                <main role="main">
                    <HeroSection />
                    <ProblemSection />
                    <SolutionSection />
                    <ProcessSection />
                    <TestimonialsSection />
                    <CTASection />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}
