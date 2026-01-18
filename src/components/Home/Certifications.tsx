import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../Layout/Section';

export default function Certifications() {
    const { t } = useTranslation();
    const certifications = [
        {
            title: "Builders Guide to the AI SDK",
            issuer: "Vercel",
            date: "2026",
            credentialId: "ai-sdk",
            link: "https://vercel.com/academy/ai-sdk/certificate/kgTk2zVm8VZdyZPAg0HYnSav?certId=1521",
            description: "Hands-on training on building AI-powered features using Vercel AI SDK, with focus on frontend integration and real-world product use cases."
        },
        {
            title: "Advanced React: Design System, Design Patterns & Performance",
            issuer: "Codelicks Academy",
            date: "2025",
            credentialId: "",
            link: "",
            description: "Advanced React concepts including scalable design systems, performance optimization, design patterns, hooks, and frontend architecture."
        },
        {
            title: "Microfrontend with React: A Complete Developer's Guide",
            issuer: "Udemy",
            date: "2025",
            credentialId: "UC-3266186e-988a-4b52-b379-ba1b781e4417",
            link: "",
            description: "Microfrontend architecture using React, focusing on modular frontend, scalability, and large product ecosystems."
        },
        {
            title: "Introduction to Front-End Development",
            issuer: "Meta",
            date: "2026",
            credentialId: "4783793328042e4d9acf9f2ec17a3890",
            link: "",
            description: "Foundations of frontend development covering HTML, CSS, JavaScript, and modern web best practices."
        },
        {
            title: "Programming with JavaScript",
            issuer: "Meta",
            date: "2026",
            credentialId: "8E0HL1OZH8LD",
            link: "",
            description: "JavaScript fundamentals applied to modern web development, problem-solving, and interactive applications."
        },
        {
            title: "Cybersecurity Case Studies and Capstone Project",
            issuer: "IBM",
            date: "2026",
            credentialId: "M8JXW5A5GW1M",
            link: "",
            description: "Applied cybersecurity case studies focusing on real-world scenarios, risk analysis, and security strategy."
        },
        {
            title: "Incident Response and Digital Forensics",
            issuer: "IBM",
            date: "2026",
            credentialId: "2IWJ5A0ID4LT",
            link: "",
            description: "Incident response techniques and digital forensics practices in enterprise environments."
        },
        {
            title: "OWASP Top 10 - Welcome and Risks 1–5",
            issuer: "InfoSec",
            date: "2026",
            credentialId: "F3MCQR8X57RG",
            link: "",
            description: "Introduction to OWASP Top 10 vulnerabilities, covering the most critical web application security risks."
        },
        {
            title: "OWASP Top 10 - Risks 6–10",
            issuer: "InfoSec",
            date: "2026",
            credentialId: "JGNE8W8YLCGH",
            link: "",
            description: "Advanced coverage of OWASP Top 10 security vulnerabilities and mitigation strategies."
        },
        {
            title: "Deep Learning com Python de A a Z",
            issuer: "IA Expert Academy",
            date: "2025",
            credentialId: "",
            link: "",
            description: "Comprehensive deep learning course covering neural networks and applied AI concepts using Python."
        },
        {
            title: "Lógica de Programação para Jogos com Godot (GDScript)",
            issuer: "Udemy",
            date: "2024",
            credentialId: "",
            link: "",
            description: "Programming logic and problem-solving through game development using Godot and GDScript."
        }

    ];

    return (
        <Section id="certifications">
            <div className="container px-6 md:px-6 mx-auto">
                <div className="flex items-end gap-3 md:gap-4 mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        {t('certifications.title')}
                    </h2>
                    <div className="h-1 flex-1 bg-white/10 mb-2 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-accent/50 transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2 rounded-lg bg-accent/20 text-accent">
                                        <Award size={24} />
                                    </div>
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary hover:text-accent"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="text-sm font-medium text-white/80 mb-2">
                                    {cert.issuer}
                                </div>

                                <div className="text-xs text-secondary mb-3">
                                    {cert.date}{cert.credentialId && ` • ${t('certifications.credentialId')}: ${cert.credentialId}`}
                                </div>

                                <p className="text-sm text-secondary leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
