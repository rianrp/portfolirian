const stacks = [
    {
        label: 'Frontend',
        color: 'bg-neo-blue text-paper',
        tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Zustand', 'React Native', 'Storybook'],
    },
    {
        label: 'Backend',
        color: 'bg-neo-pink text-paper',
        tags: ['.NET / C#', 'Node.js', 'REST APIs', 'GraphQL', 'PostgreSQL', 'SQL Server', 'Firebase', 'Prisma ORM'],
    },
    {
        label: 'IA & Dados',
        color: 'bg-neo-yellow text-ink',
        tags: ['OpenAI API', 'Claude', 'LangChain', 'OCR', 'Embeddings', 'Vector DBs', 'Python', 'MCP'],
    },
    {
        label: 'Infra & DevOps',
        color: 'bg-neo-green text-ink',
        tags: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Serverless', 'Clean Architecture', 'SOLID', 'Microservices'],
    },
];

export default function TechStack() {
    return (
        <section id="stack" className="py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="mb-14 text-center md:text-left">
                    <span className="inline-block font-mono text-xs font-bold bg-neo-blue text-paper border-2 border-ink px-3 py-1 rounded-md mb-4">
                        // tech.arsenal
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl leading-none">
                        Com o que{' '}
                        <span className="bg-neo-pink text-paper border-[3px] border-ink shadow-brut px-3 inline-block -rotate-1">
                            trabalho
                        </span>
                    </h2>
                </div>

                {/* Dark panel */}
                <div className="bg-ink border-[4px] border-ink shadow-brut-lg rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    {/* dot grid */}
                    <div
                        className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                    />

                    <div className="relative grid sm:grid-cols-2 gap-8">
                        {stacks.map(s => (
                            <div key={s.label}>
                                <span className={`inline-block font-mono text-xs font-bold border-2 border-paper/30 ${s.color} px-3 py-1 rounded-md mb-4`}>
                                    {s.label}
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {s.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="font-mono text-xs font-bold text-paper border-2 border-paper/20 bg-paper/10 hover:bg-paper/20 px-3 py-1.5 rounded-lg transition-colors cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

