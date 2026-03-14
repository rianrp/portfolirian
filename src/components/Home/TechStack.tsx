import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import Section from '../Layout/Section';

export default function TechStack() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        {
            category: "Frontend",
            items: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Material UI",
                "React Native",
                "Zustand",
                "Redux Toolkit",
                "Storybook",
                "Framer Motion",
                "E2E Testing"
            ]
        },
        {
            category: "Backend",
            items: [
                ".NET",
                "Node.js",
                "C#",
                "REST APIs",
                "GraphQL",
                "SQL Server",
                "PostgreSQL",
                "MySQL",
                "Firebase",
                "Prisma ORM",
                "tRPC"
            ]
        },
        {
            category: "AI & Data",
            items: [
                "OpenAI API",
                "LangChain",
                "Python",
                "Embeddings",
                "OCR",
                "Vector DBs",
                "LLM Chaining",
                "Transformers",
                "Deep Learning",
                "TensorFlow"
            ]
        },
        {
            category: "Architecture",
            items: [
                "Clean Architecture",
                "SOLID",
                "Design Patterns",
                "Microservices",
                "Monorepo",
                "CI/CD",
                "Docker",
                "Cloud (AWS/Azure)",
                "Serverless",
                "Observability"
            ]
        }
    ];

    return (
        <Section>
            <div className="container mx-auto px-6" ref={ref}>
                {/* Header minimalista */}
                <motion.div 
                    className="max-w-4xl mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-6 leading-tight">
                        {t('techStack.title')}{' '}
                        <span className="text-accent">{t('techStack.titleAccent')}</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary leading-relaxed">
                        {t('techStack.subtitle')}
                    </p>
                </motion.div>

                {/* Layout em grid de 2 colunas - estilo Google clean */}
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl">
                    {skills.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
                        >
                            {/* Título da categoria */}
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
                                {group.category}
                            </h3>
                            
                            {/* Lista simples e clean */}
                            <ul className="space-y-4">
                                {group.items.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skill}
                                        className="text-lg md:text-xl text-secondary hover:text-primary transition-colors duration-200 flex items-start gap-3 group"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ 
                                            delay: groupIndex * 0.1 + skillIndex * 0.05,
                                            duration: 0.4 
                                        }}
                                    >
                                        <span className="text-accent mt-1.5 text-sm group-hover:scale-125 transition-transform">•</span>
                                        <span className="font-medium">{skill}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

