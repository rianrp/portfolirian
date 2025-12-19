import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { MousePointer2 } from 'lucide-react';
import profilePic from '../../assets/me/me.png';

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-screen pt-16 md:pt-20 overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/20 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center max-w-3xl mx-auto space-y-5 md:space-y-8"
                >
                    {/* Avatar / Profile Placeholder */}
                    <div className="relative group">
                        <div className="relative z-10 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 overflow-hidden border-2 rounded-full border-white/10 bg-surface">
                            <img
                                src={profilePic}
                                alt="Rian Rodrigues"
                                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        {/* Status Badge */}
                        <div className="absolute px-3 py-1 flex items-center gap-2 text-[10px] md:text-xs font-medium text-white border rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-surface border-white/10 whitespace-nowrap z-20 shadow-lg">
                            <span className="relative flex w-2 h-2">
                                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-green-500"></span>
                                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
                            </span>
                            Open to work
                        </div>
                    </div>

                    {/* Main Text */}
                    <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                            Rian Rodrigues
                        </h1>
                        <p className="text-[10px] md:text-xl px-4 md:px-5 py-2 md:py-2.5 border rounded-full border-white/10 bg-white/5 inline-block text-secondary font-medium tracking-wide">
                            Senior Software Engineer
                        </p>
                    </div>

                    <p className="max-w-xl text-sm md:text-lg text-secondary leading-relaxed px-6 md:px-0">
                        Specialized in scalable frontend architectures, complex integrations, and AI-powered solutions.
                    </p>

                    {/* Social Links */}
                    <div className="grid grid-cols-2 md:flex md:flex-row justify-center gap-3 md:gap-4 w-full max-w-sm md:max-w-none px-4">
                        {[
                            { icon: Mail, label: 'Email', href: 'mailto:riansatro@gmail.com' },
                            { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                            { icon: Github, label: 'GitHub', href: 'https://github.com/rianrp' },
                            { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 text-sm md:text-base transition-all duration-300 border rounded-full border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 md:hover:scale-105 text-white whitespace-nowrap"
                            >
                                <social.icon size={16} className="shrink-0" />
                                <span>{social.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pt-10 md:pt-14"
                    >
                        <MousePointer2 className="w-5 h-5 md:w-6 md:h-6 animate-bounce text-secondary/50" />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
