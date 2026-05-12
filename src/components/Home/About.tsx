import profilePic from '../../assets/me/me1.png';

const facts = [
    { num: '7+', label: 'anos de código' },
    { num: '50+', label: 'projetos entregues' },
    { num: '3', label: 'países atendidos' },
    { num: 'C1', label: 'inglês' },
];

export default function About() {
    return (
        <section id="sobre" className="py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="mb-14 text-center md:text-left">
                    <span className="inline-block font-mono text-xs font-bold bg-neo-green text-ink border-2 border-ink px-3 py-1 rounded-md mb-4">
                        // sobre.json
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl leading-none">
                        Quem é o{' '}
                        <span className="bg-neo-yellow border-[3px] border-ink shadow-brut px-3 inline-block -rotate-1">
                            Rian?
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">

                    {/* Foto + stats */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-paper border-[3px] border-ink shadow-brut rounded-2xl overflow-hidden rotate-1">
                            <img
                                src={profilePic}
                                alt="Rian Rodrigues"
                                className="w-full aspect-square object-cover object-top"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {facts.map(f => (
                                <div
                                    key={f.label}
                                    className="bg-paper border-[3px] border-ink shadow-brut-sm rounded-xl p-4 text-center"
                                >
                                    <div className="font-display text-3xl text-neo-blue">{f.num}</div>
                                    <div className="text-[11px] font-black uppercase text-ink-soft tracking-wide mt-1">{f.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="bg-paper border-[3px] border-ink shadow-brut rounded-2xl p-8 md:p-10 space-y-5">
                        <p className="text-lg font-bold leading-relaxed">
                            Oi! Sou o <span className="text-neo-blue">Rian Rodrigues</span>, desenvolvedor front-end sênior de Florianópolis, SC. Comecei a programar aos 14 anos e desde então não parei mais.
                        </p>

                        <p className="text-base font-semibold leading-relaxed text-ink-soft">
                            Trabalho profissionalmente desde 2017, passando por startups, agências e produtos SaaS de escala. Hoje atuo na <strong className="text-ink">Lines360</strong>, onde lidero o desenvolvimento front-end de uma plataforma corporativa de viagens e despesas usada por empresas em todo o Brasil.
                        </p>

                        <p className="text-base font-semibold leading-relaxed text-ink-soft">
                            Além do trabalho full-time, atendo clientes freelance que precisam de sites, apps e sistemas feitos com cuidado — sem template genérico, sem resultado mediano.
                        </p>

                        <div className="pt-2 flex flex-wrap gap-2">
                            {['React', 'Next.js', 'TypeScript', '.NET', 'React Native', 'IA', 'Node.js'].map(tag => (
                                <span key={tag} className="font-mono text-xs font-bold border-2 border-ink px-2.5 py-1 rounded-lg bg-neo">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://linkedin.com/in/rianrp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2 bg-ink text-paper border-2 border-ink shadow-brut-sm px-5 py-3 rounded-xl font-black text-xs uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brut transition-all no-underline w-full sm:w-auto"
                            >
                                LinkedIn →
                            </a>
                            <a
                                href="https://github.com/rianrp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2 bg-paper text-ink border-2 border-ink shadow-brut-sm px-5 py-3 rounded-xl font-black text-xs uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brut transition-all no-underline w-full sm:w-auto"
                            >
                                GitHub →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
