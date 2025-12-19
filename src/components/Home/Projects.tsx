import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';
import Section from '../Layout/Section';
import image1 from '../../assets/writterbook/image1.png';
import bestialDesktop from '../../assets/bestialstore/bestial_principal_page_desktop.png';

export default function Projects() {
    const projects = [
        {
            title: 'WritterBook',
            status: 'Coming Soon',
            statusColor: 'bg-purple-500',
            date: '2025-01-15',
            type: 'AI-Powered SaaS',
            description: 'SaaS platform for writers with chapters, pages, cloud sync, and AI-assisted writing. Features include AI-generated summaries, rewriting, and content continuation.',
            tags: ['React', 'Firebase', 'OpenAI', 'SignalR'],
            image: image1,
            links: {
                website: '#',
                github: '#',
                demo: '#'
            }
        },
        {
            title: 'Bestial Store',
            status: 'Live',
            statusColor: 'bg-green-500',
            date: '2024-11-15',
            type: 'E-commerce',
            description: 'Full-featured e-commerce platform with real-time inventory, secure payments, and a custom admin dashboard for order management.',
            tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
            image: bestialDesktop,
            links: {
                website: '#',
                github: '#'
            }
        }
    ];

    return (
        <Section id="projects">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        Projects <span className="text-secondary text-lg md:text-2xl font-normal">({projects.length})</span>
                    </h2>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-surface rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
                        >
                            {/* Image Area */}
                            <div className="aspect-video w-full overflow-hidden bg-white/5 relative">
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
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <div className="flex items-center gap-2 text-xs md:text-sm">
                                            <span className={`w-2 h-2 rounded-full ${project.statusColor} animate-pulse`} />
                                            <span className="text-secondary">{project.status}</span>
                                            <span className="text-white/20">•</span>
                                            <span className="text-secondary">{project.date}</span>
                                        </div>
                                    </div>
                                    <div className="px-2.5 md:px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-xs font-medium text-secondary whitespace-nowrap">
                                        {project.type}
                                    </div>
                                </div>

                                <p className="text-sm md:text-base text-secondary leading-relaxed mb-5 md:mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 rounded-md border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                                    {project.links.website && (
                                        <a href={project.links.website} className="flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">
                                            <ExternalLink size={18} />
                                            Website
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
                                            <Github size={18} />
                                            Source
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
                                            <Play size={18} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/rianrp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors">
                        View all projects <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </Section>
    );
}
