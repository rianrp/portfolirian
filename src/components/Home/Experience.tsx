import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from '../Layout/Section';

export default function Experience() {
    const experiences = [
        {
            company: "Lines360",
            role: "Senior Software Engineer",
            period: "July 2022 - Present",
            description:
                "Led core architecture and feature development across web & mobile for a corporate travel and expense ecosystem. Designed scalable modules, improved performance, reduced operational cost, and introduced AI-driven automations for real business workflows.",
            achievements: [
                "Designed and built the expense automation engine using OCR + AI, reducing manual input and processing time.",
                "Created real-time trip and mileage tracking system using geolocation services and background sync.",
                "Structured the frontend architecture using React + TypeScript patterns (Atomic Design, feature modules, hooks abstraction).",
                "Implemented CI/CD pipelines improving deployment safety & frequency.",
                "Collaborated directly with business leadership to design and ship mission-critical features at production scale."
            ],
            stack: [
                "React", "Next.js", "TypeScript", "Tailwind", "React Native",
                ".NET 6", "C#", "SignalR", "Google Vision AI", "Stripe",
                "AWS", "Azure", "SQL Server", "PostgreSQL"
            ]
        }
    ];


    return (
        <Section id="experience">
            <div className="container px-6 md:px-6 mx-auto">
                <div className="flex items-end gap-3 md:gap-4 mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        Experience
                    </h2>
                    <div className="h-1 flex-1 bg-white/10 mb-2 rounded-full" />
                </div>

                <div className="space-y-12 max-w-4xl">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-accent transition-colors">
                                    {exp.role}
                                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </h3>
                                <span className="text-sm font-medium text-secondary">{exp.period}</span>
                            </div>

                            <div className="text-lg font-medium text-white/80 mb-4">{exp.company}</div>

                            <p className="text-secondary leading-relaxed mb-6 max-w-2xl">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.stack.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-secondary border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
