import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../Layout/Section';

export default function Certifications() {
    const { t } = useTranslation();
    const certifications = [
        {
            title: "Builders Guide to the AI SDK",
            issuer: "Vercel",
            date: "2026",
            link: "https://vercel.com/academy/ai-sdk/certificate/kgTk2zVm8VZdyZPAg0HYnSav?certId=1521"
        },
        {
            title: "Advanced React: Design System, Design Patterns & Performance",
            issuer: "Codelicks Academy",
            date: "2025",
            link: ""
        },
        {
            title: "Microfrontend with React: A Complete Developer's Guide",
            issuer: "Udemy",
            date: "2025",
            link: ""
        },
        {
            title: "Introduction to Front-End Development",
            issuer: "Meta",
            date: "2026",
            link: ""
        },
        {
            title: "Programming with JavaScript",
            issuer: "Meta",
            date: "2026",
            link: ""
        },
        {
            title: "Cybersecurity Case Studies and Capstone Project",
            issuer: "IBM",
            date: "2026",
            link: ""
        },
        {
            title: "Incident Response and Digital Forensics",
            issuer: "IBM",
            date: "2026",
            link: ""
        },
        {
            title: "OWASP Top 10 - Welcome and Risks 1–5",
            issuer: "InfoSec",
            date: "2026",
            link: ""
        },
        {
            title: "OWASP Top 10 - Risks 6–10",
            issuer: "InfoSec",
            date: "2026",
            link: ""
        },
        {
            title: "Deep Learning com Python de A a Z",
            issuer: "IA Expert Academy",
            date: "2025",
            link: ""
        },
        {
            title: "Lógica de Programação para Jogos com Godot (GDScript)",
            issuer: "Udemy",
            date: "2024",
            link: ""
        }
    ];

    return (
        <Section id="certifications">
            <div className="container px-6 mx-auto">
                {/* Header minimalista */}
                <motion.div 
                    className="max-w-4xl mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-6 leading-tight">
                        {t('certifications.title')}
                    </h2>
                </motion.div>

                {/* Lista limpa em grid de 2 colunas */}
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 max-w-6xl">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            <div className="flex items-start justify-between gap-4 pb-6 border-b border-primary/10">
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-secondary">
                                        {cert.issuer} · {cert.date}
                                    </p>
                                </div>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 text-secondary hover:text-accent transition-colors p-2 -m-2"
                                        aria-label="View certificate"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
