import { Github, ArrowUpRight } from 'lucide-react';
import inspiraviewImage from '../../assets/inspiraview/image1.png';
import TileKit from '../../assets/tilekit/land.png';
import lorena from '../../assets/lorena/image.png';
import onixMatcha from '../../assets/onixmatcha/image.png';
import helixq from '../../assets/helixq/helixq.png';

const projects = [
    {
        title: 'InspiraView',
        description: 'Canvas infinito para criativos organizarem referências, ideias e notas sem distração.',
        tags: ['Tauri', 'React', 'TypeScript', 'Rust'],
        image: inspiraviewImage,
        accent: 'bg-neo-blue',
        website: 'https://inspiraview.netlify.app/',
        github: 'https://github.com/rianrp/Inspiraview',
    },
    {
        title: 'HelixQ',
        description: 'Plataforma para terapeutas gerenciarem consultas, pacientes e sessões de terapia.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        image: helixq,
        accent: 'bg-neo-pink',
        website: 'https://helixq.com.br/',
    },
    {
        title: 'Lorena Consultoria',
        description: 'Site de consultoria de moda com análise de guarda-roupa e criação de looks personalizados.',
        tags: ['React', 'UI/UX', 'Responsivo'],
        image: lorena,
        accent: 'bg-neo-yellow',
        website: 'https://lorenahandradeclass.com/',
    },
    {
        title: 'Onix Matcha',
        description: 'E-commerce de matcha premium com storytelling de marca e conteúdo sobre saúde.',
        tags: ['React', 'E-commerce', 'Branding'],
        image: onixMatcha,
        accent: 'bg-neo-green',
        website: 'https://coffeandtea.netlify.app/',
    },
    {
        title: 'Tilekit',
        description: 'Editor de tile maps web com integração Phaser. Publicado como pacote npm com suporte a TypeScript.',
        tags: ['Phaser', 'TypeScript', 'npm'],
        image: TileKit,
        accent: 'bg-neo-blue',
        website: 'https://tilekit.pages.dev',
        github: 'https://github.com/rianrp/tilekitphaser',
    },
];

export default function Projects() {
    return (
        <section id="projetos" className="py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Header */}
                <div className="mb-14 text-center md:text-left">
                    <span className="inline-block font-mono text-xs font-bold bg-neo-blue text-paper border-2 border-ink px-3 py-1 rounded-md mb-4">
                        // projetos.map()
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl leading-none">
                        Trabalhos{' '}
                        <span className="bg-neo-yellow border-[3px] border-ink shadow-brut px-3 inline-block -rotate-1">
                            Recentes
                        </span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <article
                            key={i}
                            className="group bg-paper border-[3px] border-ink shadow-brut rounded-2xl overflow-hidden hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brut-lg transition-all duration-200"
                        >
                            {/* Screenshot */}
                            <a href={p.website} target="_blank" rel="noopener noreferrer" className="block overflow-hidden border-b-[3px] border-ink">
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </a>

                            {/* Body */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {p.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[11px] font-bold uppercase border-2 border-ink px-2 py-0.5 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-display text-2xl md:text-3xl leading-tight mb-2">{p.title}</h3>
                                <p className="text-sm text-ink-soft font-semibold leading-relaxed mb-5">{p.description}</p>

                                {/* Links */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a
                                        href={p.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex justify-center items-center gap-1.5 ${p.accent} ${p.accent === 'bg-neo-yellow' ? 'text-ink' : 'text-paper'} border-2 border-ink shadow-brut-sm px-4 py-2 rounded-lg font-black text-xs uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brut transition-all no-underline w-full sm:w-auto`}
                                    >
                                        Ver site <ArrowUpRight size={14} />
                                    </a>
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex justify-center items-center gap-1.5 bg-ink text-paper border-2 border-ink shadow-brut-sm px-4 py-2 rounded-lg font-black text-xs uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brut transition-all no-underline w-full sm:w-auto"
                                        >
                                            <Github size={14} /> GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/rianrp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-paper border-[3px] border-ink shadow-brut px-6 py-3 rounded-xl font-black text-sm uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brut-lg transition-all no-underline"
                    >
                        Ver mais no GitHub <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
