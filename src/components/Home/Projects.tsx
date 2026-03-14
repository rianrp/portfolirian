import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../Layout/Section';
import inspiraviewImage from '../../assets/inspiraview/image1.png';
import TileKit from '../../assets/tilekit/land.png';
import lorena from '../../assets/lorena/image.png';
import onixMatcha from '../../assets/onixmatcha/image.png';
import helixq from '../../assets/helixq/helixq.png';

export default function Projects() {
    const { t } = useTranslation();
    const projects = [
        {
            title: 'InspiraView',
            description: 'Infinite canvas moodboard for creatives. Organize references, ideas and notes in a distraction-free space.',
            tags: ['Tauri', 'React', 'TypeScript', 'Rust'],
            image: inspiraviewImage,
            links: {
                website: 'https://inspiraview.netlify.app/',
                github: 'https://github.com/rianrp/Inspiraview',
            }
        },
        {
            title: 'HelixQ',
            description: 'Professional platform for therapists to manage appointments, patient records, and therapy sessions.',
            tags: ['React', 'TypeScript', 'Tailwind'],
            image: helixq,
            links: {
                website: 'https://helixq.com.br/',
            }
        },
        {
            title: 'Lorena Consultoria',
            description: 'Fashion consultancy offering personalized styling services, wardrobe analysis, and custom outfit creation.',
            tags: ['React', 'UI/UX', 'Responsive'],
            image: lorena,
            links: {
                website: 'https://lorenahandradeclass.com/',
            }
        },
        {
            title: 'Onix Matcha',
            description: 'E-commerce platform for premium matcha products with brand storytelling and health content.',
            tags: ['React', 'E-commerce', 'Branding'],
            image: onixMatcha,
            links: {
                website: 'https://coffeandtea.netlify.app/',
            }
        },
        {
            title: 'Tilekit',
            description: 'Web-based tile map editor with Phaser integration. Published as npm package with TypeScript support.',
            tags: ['Phaser', 'TypeScript', 'npm'],
            image: TileKit,
            links: {
                website: 'https://tilekit.pages.dev',
                github: 'https://github.com/rianrp/tilekitphaser',
            }
        },
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
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-3">
                        {t('projects.title')}
                    </h2>
                    <p className="text-lg text-secondary max-w-2xl">
                        Selected projects I've worked on
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                {/* Image */}
                                <a 
                                    href={project.links.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`relative overflow-hidden rounded-lg ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                                >
                                    <div className="aspect-[4/3] bg-surface">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                </a>

                                {/* Content */}
                                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-base md:text-lg text-secondary leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span 
                                                key={tag} 
                                                className="px-3 py-1.5 text-sm text-secondary bg-surface rounded-full border border-primary/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.links.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-heading font-semibold transition-colors group/link"
                                        >
                                            Visit site
                                            <ArrowUpRight size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </a>
                                        
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors"
                                            >
                                                <Github size={18} />
                                                View code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <a 
                        href="https://github.com/rianrp" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-heading font-medium group/more"
                    >
                        View more on GitHub
                        <ArrowUpRight size={18} className="group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </Section>
    );
}
