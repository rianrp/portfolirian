import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: t('nav.home'), href: '#hero', num: '01' },
        { name: t('nav.projects'), href: '#projects', num: '02' },
        { name: t('nav.experience'), href: '#experience', num: '03' },
        { name: t('nav.techStack'), href: '#techstack', num: '04' },
        { name: t('nav.certifications'), href: '#certifications', num: '05' },
        { name: t('nav.contact'), href: '#contact', num: '06' },
    ];

    const handleNavClick = useCallback((href: string) => {
        setIsOpen(false);
        // Small delay to allow menu close animation
        setTimeout(() => {
            const el = document.querySelector(href);
            el?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }, []);

    return (
        <>
            {/* Fixed Top Bar - Rockstar minimal */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-5"
            >
                {/* Logo */}
                <a href="#hero" className="relative z-50">
                    <span className="text-2xl font-display font-extrabold text-primary tracking-tighter chromatic-hover transition-all duration-300">
                        RR<span className="text-accent">.</span>
                    </span>
                </a>

                {/* Right Controls */}
                <div className="flex items-center gap-4 z-50">
                    <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <ThemeToggle />
                    </div>
                    <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <LanguageSwitcher />
                    </div>

                    {/* Hamburger - Rockstar style */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 flex flex-col items-end gap-[6px] group w-8 h-8 justify-center"
                        aria-label="Menu"
                    >
                        <span className={`block h-[2px] bg-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'w-7 rotate-45 translate-y-[8px]' : 'w-7 group-hover:w-5'}`} />
                        <span className={`block h-[2px] bg-primary transition-all duration-300 ${isOpen ? 'opacity-0 w-0' : 'w-5 group-hover:w-7'}`} />
                        <span className={`block h-[2px] bg-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'w-7 -rotate-45 -translate-y-[8px]' : 'w-3 group-hover:w-7'}`} />
                    </button>
                </div>
            </motion.div>

            {/* Scroll Progress Indicator */}
            {scrolled && !isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group flex items-center gap-3"
                        >
                            <span className="text-[10px] font-mono text-secondary/0 group-hover:text-secondary transition-all duration-300 whitespace-nowrap">
                                {link.name}
                            </span>
                            <span className="block w-[2px] h-4 bg-primary/20 group-hover:bg-accent group-hover:h-6 transition-all duration-300 rounded-full" />
                        </a>
                    ))}
                </motion.div>
            )}

            {/* Full Screen Menu Overlay - Rockstar Games Style */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: 'circle(0% at calc(100% - 48px) 32px)' }}
                        animate={{ clipPath: 'circle(150% at calc(100% - 48px) 32px)' }}
                        exit={{ clipPath: 'circle(0% at calc(100% - 48px) 32px)' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl scanline"
                    >
                        <div className="h-full flex flex-col justify-center px-10 md:px-24 lg:px-32">
                            {/* Nav Links */}
                            <nav className="space-y-2 md:space-y-0">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -60 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.1 + index * 0.08,
                                            duration: 0.5,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                    >
                                        <button
                                            onClick={() => handleNavClick(link.href)}
                                            className="group flex items-baseline gap-4 md:gap-6 py-2 md:py-3 w-full text-left"
                                        >
                                            <span className="text-xs md:text-sm font-mono text-accent/60 group-hover:text-accent transition-colors">
                                                {link.num}
                                            </span>
                                            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-primary/30 group-hover:text-primary transition-all duration-300 tracking-tight chromatic-hover uppercase">
                                                {link.name}
                                            </span>
                                        </button>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="absolute bottom-8 left-10 md:left-24 lg:left-32 right-10 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-6">
                                    <a href="https://github.com/rianrp" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="mailto:riansatro@gmail.com" className="text-secondary hover:text-primary transition-colors">
                                        <Mail size={20} />
                                    </a>
                                </div>
                                <span className="text-xs font-mono text-secondary/40">
                                    &copy; {new Date().getFullYear()} Rian Rodrigues
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
