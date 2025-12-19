import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code2, Mail, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero', icon: Home },
        { name: 'About', href: '#about', icon: User },
        { name: 'Experience', href: '#experience', icon: Briefcase },
        { name: 'Projects', href: '#projects', icon: Code2 },
        { name: 'Contact', href: '#contact', icon: Mail },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`fixed z-50 transition-all duration-300
                    /* Mobile: Full width at top */
                    top-0 left-0 w-full
                    /* Desktop: Centered floating pill */
                    md:top-6 md:left-0 md:right-0 md:mx-auto md:w-fit
                `}
            >
                {/* Inner Container - Handles visual style differences */}
                <div className={`
                    w-full px-6 py-4 md:px-6 md:py-3 
                    /* Mobile: Transparent with bottom border */
                    border-b border-white/5 bg-background/80 backdrop-blur-md
                    /* Desktop: Rounded pill with dark background */
                    md:border-none md:rounded-full md:border md:border-white/[0.08] 
                    ${scrolled ? 'md:bg-black/80 md:backdrop-blur-xl md:shadow-xl md:shadow-black/40' : 'md:bg-black/50 md:backdrop-blur-md'}
                    flex items-center justify-between md:justify-center gap-8
                `}>
                    {/* Logo (Mobile Only) */}
                    <a href="#" className="text-xl font-bold text-white tracking-tighter md:hidden">
                        RR<span className="text-accent">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-white transition-colors group"
                            >
                                <span className="flex items-center gap-2">
                                    <link.icon size={16} />
                                    {link.name}
                                </span>
                                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>

                    {/* Social Icons - Desktop */}
                    <div className="hidden md:flex items-center gap-3 pl-6 border-l border-white/10">
                        <a href="https://github.com/rianrp" target="_blank" rel="noopener noreferrer" className="p-2 text-secondary hover:text-white hover:bg-white/5 rounded-full transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-secondary hover:text-white hover:bg-white/5 rounded-full transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary hover:text-white transition-colors p-1"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Classic Top Down */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-[65px] left-0 w-full z-40 bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
                    >
                        {/* Mobile Menu Items - Centered */}
                        <div className="flex flex-col items-center p-6 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-lg font-medium text-secondary hover:text-white transition-colors"
                                >
                                    <link.icon size={20} className="text-accent" />
                                    {link.name}
                                </a>
                            ))}

                            {/* Mobile Socials */}
                            <div className="flex justify-center gap-8 pt-6 border-t border-white/10 w-full max-w-[200px]">
                                <a href="https://github.com/rianrp" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:riansatro@gmail.com" className="text-secondary hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
