import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Section from '../Layout/Section';

export default function TechStack() {
    const { t } = useTranslation();
    const skills = [
        {
            category: "Frontend",
            items: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Material UI",
                "React Native",
                "Zustand",
                "Redux Toolkit",
                "Storybook",
                "Framer Motion",
                "E2E Testing (Playwright)"
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
                "Clean Arch",
                "SOLID",
                "Design Patterns",
                "Microservices",
                "Monorepo (Nx/Turborepo)",
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
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('techStack.title')} <span className="text-accent">{t('techStack.titleAccent')}</span></h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        {t('techStack.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((group, index) => (
                        <motion.div
                            key={group.category}
                            className="bg-surface/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-accent/30 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/5 pb-2">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm bg-white/5 text-secondary rounded-lg border border-white/5 hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
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
