import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../Layout/Section';
import inspiraviewImage from '../../assets/inspiraview/image1.png';
import EurOrbit from '../../assets/eurorbit/eurorbit.png';
import SugarlandTheaters from '../../assets/sugarlandtheaters/sugarland-desktop.png';
import TileKit from '../../assets/tilekit/land.png';
import Warhall from '../../assets/warhall/footer.png';
import lorena from '../../assets/lorena/image.png';

export default function Projects() {
    const { t } = useTranslation();
    const projects = [
        {
            title: 'InspiraView',
            status: 'Live',
            statusColor: 'bg-green-500',
            date: '2024-12-20',
            type: 'Desktop App',
            description: 'Infinite canvas moodboard for creatives. Organize references, ideas and notes in a distraction-free space. Features drag & drop images, sticky notes, filters, guides, and always-on-top mode.',
            tags: ['Tauri', 'React', 'TypeScript', 'Vite', 'Rust'],
            image: inspiraviewImage,
            links: {
                website: 'https://inspiraview.netlify.app/',
                github: 'https://github.com/rianrp/Inspiraview',
                demo: 'https://inspiraview.netlify.app/'
            }
        },
        {
            title: 'Tilekit',
            status: 'Live',
            statusColor: 'bg-green-500',
            date: '2026-01-25',
            type: 'Developer Tool',
            description: 'Tilekit is a web-based tile map editor combined with a Phaser integration library. The project was developed in stages: (1) creation of a lightweight canvas-based editor focused on grid precision and ease of use; (2) definition of a simple, explicit JSON map format optimized for runtime usage; (3) development of a Phaser helper library that loads maps with rendering, layers, collisions, and world bounds using a single function; (4) publishing the library as an npm package with TypeScript support and clear documentation. The tool is designed to eliminate complex pipelines and provide a predictable map-to-engine workflow.',
            tags: ['Game Development', 'Phaser', 'TypeScript', 'Canvas', 'Vite', 'npm', 'Open Source'],
            image: TileKit,
            links: {
                website: 'https://tilekit.pages.dev', // se ainda não tiver, pode comentar
                github: 'https://github.com/rianrp/tilekitphaser',
                demo: 'https://www.npmjs.com/package/@devince/tilekit-phaser'
            }
        },
        {
            title: 'Lorena',
            status: 'Live',
            statusColor: 'bg-green-500',
            date: '2026-01-25',
            type: 'My Client Project',
            description: `Lorena is a fashion consultancy that offers personalized services to help clients develop their unique style. With a client-centered approach, Lorena works to understand each individual's preferences, needs, and goals, providing services such as wardrobe analysis, personal shopping, and custom outfit creation. The goal is to help clients feel confident and authentic in their fashion choices, building a personal image that reflects their identity and lifestyle.`,
            tags: ['Fashion', 'Consulting', 'Branding', 'UI/UX', 'Web Design'],
            image: lorena,
            links: {
                website: 'https://lorenahandradeclass.com/',
            }
        }
        // {
        //     title: 'WritterBook',
        //     status: 'Coming Soon',
        //     statusColor: 'bg-purple-500',
        //     date: '2025-01-15',
        //     type: 'AI-Powered SaaS',
        //     description: 'SaaS platform for writers with chapters, pages, cloud sync, and AI-assisted writing. Features include AI-generated summaries, rewriting, and content continuation.',
        //     tags: ['React', 'Firebase', 'OpenAI', 'SignalR'],
        //     image: image1,
        //     links: {
        //         website: '#',
        //         github: '#',
        //         demo: '#'
        //     }
        // },
        // {
        //     title: 'Bestial Store',
        //     status: 'Live',
        //     statusColor: 'bg-green-500',
        //     date: '2024-11-15',
        //     type: 'E-commerce',
        //     description: 'Full-featured e-commerce platform with real-time inventory, secure payments, and a custom admin dashboard for order management.',
        //     tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
        //     image: bestialDesktop,
        //     links: {
        //         website: '#',
        //         github: '#'
        //     }
        // }
    ];

    return (
        <Section id="projects">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                        {t('projects.title')} <span className="text-secondary text-lg md:text-2xl font-normal">({projects.length})</span>
                    </h2>
                    <div className="h-px flex-1 bg-primary/10" />
                </div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-surface rounded-2xl md:rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/20 transition-colors"
                        >
                            {/* Image Area */}
                            <div className="aspect-video w-full overflow-hidden bg-primary/5 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                            </div>

                            {/* Content Area */}
                            <div className="p-5 md:p-8">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-3 md:mb-4 gap-2 md:gap-0">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">{project.title}</h3>
                                        <div className="flex items-center gap-2 text-xs md:text-sm">
                                            <span className={`w-2 h-2 rounded-full ${project.statusColor} animate-pulse`} />
                                            <span className="text-secondary">{project.status}</span>
                                            <span className="text-primary/20">•</span>
                                            <span className="text-secondary">{project.date}</span>
                                        </div>
                                    </div>
                                    <div className="px-2.5 md:px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] md:text-xs font-medium text-secondary whitespace-nowrap">
                                        {project.type}
                                    </div>
                                </div>

                                <p className="text-sm md:text-base text-secondary leading-relaxed mb-5 md:mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium text-primary/70 bg-primary/5 rounded-md border border-primary/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-6 border-t border-primary/10">
                                    {project.links.website && (
                                        <a href={project.links.website} className="flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">
                                            <ExternalLink size={18} />
                                            {t('projects.website')}
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                                            <Github size={18} />
                                            {t('projects.source')}
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                                            <Play size={18} />
                                            {t('projects.demo')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/rianrp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                        {t('projects.viewAll')} <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </Section>
    );
}
