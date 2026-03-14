import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import profilePic from '../../assets/me/me1.png';

// Import all frames using Vite's glob import
const frameModules = import.meta.glob('../../assets/backgroundmoviment/frame_*.png', { eager: true, import: 'default' }) as Record<string, string>;

// Sort frames by number and extract URLs
const frames: string[] = Object.entries(frameModules)
    .sort(([a], [b]) => {
        const numA = parseInt(a.match(/frame_(\d+)/)?.[1] || '0');
        const numB = parseInt(b.match(/frame_(\d+)/)?.[1] || '0');
        return numA - numB;
    })
    .map(([, url]) => url);

const TOTAL_FRAMES = frames.length;

export default function Hero() {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const loadedImages = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Preload all images
    useEffect(() => {
        let mounted = true;
        const images: HTMLImageElement[] = [];
        let loaded = 0;

        frames.forEach((src, i) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loaded++;
                if (mounted && loaded === TOTAL_FRAMES) {
                    loadedImages.current = images;
                    setImagesLoaded(true);
                }
            };
            images[i] = img;
        });

        return () => { mounted = false; };
    }, []);

    // Draw frame on canvas based on scroll
    useEffect(() => {
        if (!imagesLoaded) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const drawFrame = (progress: number) => {
            const frameIndex = Math.min(
                Math.floor(progress * (TOTAL_FRAMES - 1)),
                TOTAL_FRAMES - 1
            );

            if (frameIndex === currentFrameRef.current && frameIndex !== 0) return;
            currentFrameRef.current = frameIndex;

            const img = loadedImages.current[frameIndex];
            if (!img) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Cover-fit the image
            const scale = Math.max(
                canvas.width / img.width,
                canvas.height / img.height
            );
            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        // Initial draw
        drawFrame(0);

        const unsubscribe = scrollYProgress.on('change', drawFrame);

        const handleResize = () => drawFrame(scrollYProgress.get());
        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [imagesLoaded, scrollYProgress]);

    // Parallax transforms for text layers
    const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -120]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
    const badgeOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

    const slide1Opacity = useTransform(scrollYProgress, [0.12, 0.2, 0.32, 0.4], [0, 1, 1, 0]);
    const slide1Y = useTransform(scrollYProgress, [0.12, 0.2, 0.32, 0.4], [80, 0, 0, -80]);

    const slide2Opacity = useTransform(scrollYProgress, [0.38, 0.46, 0.58, 0.66], [0, 1, 1, 0]);
    const slide2Y = useTransform(scrollYProgress, [0.38, 0.46, 0.58, 0.66], [80, 0, 0, -80]);

    const slide3Opacity = useTransform(scrollYProgress, [0.64, 0.72, 0.84, 0.92], [0, 1, 1, 0]);
    const slide3Y = useTransform(scrollYProgress, [0.64, 0.72, 0.84, 0.92], [80, 0, 0, -80]);

    // Scroll indicator
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    return (
        <div ref={containerRef} className="relative" style={{ height: `${TOTAL_FRAMES * 60}px` }}>
            {/* Sticky Frame Container */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                {/* Canvas Background */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: imagesLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
                />

                {/* Scan Line Effect */}
                <div className="absolute inset-0 pointer-events-none scanline" />

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                        backgroundSize: '128px 128px'
                    }}
                />

                {/* === SLIDE 0: Main Title (Initial View) === */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center px-6"
                    style={{ y: titleY, opacity: titleOpacity }}
                >
                    {/* Profile */}
                    <div className="relative mb-6 slide-up">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl shadow-accent/20">
                            <img src={profilePic} alt="Rian Rodrigues" className="w-full h-full object-cover" />
                        </div>
                        <motion.div
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full flex items-center gap-1.5"
                            style={{ opacity: badgeOpacity }}
                        >
                            <span className="relative flex w-2 h-2">
                                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-white"></span>
                                <span className="relative inline-flex w-2 h-2 rounded-full bg-white"></span>
                            </span>
                            <span className="text-[10px] font-mono font-bold text-white whitespace-nowrap">{t('hero.openToWork')}</span>
                        </motion.div>
                    </div>

                    {/* Name - Glitch Effect */}
                    <h1
                        className="glitch-text text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter text-primary text-center leading-none mb-4 slide-up slide-up-delay-1"
                        data-text="RIAN RODRIGUES"
                    >
                        RIAN RODRIGUES
                    </h1>

                    {/* Title */}
                    <div className="slide-up slide-up-delay-2">
                        <span className="inline-block px-5 py-2.5 text-sm md:text-base font-mono font-bold text-white border border-accent bg-accent backdrop-blur-sm rounded-lg shadow-lg shadow-accent/30">
                            &lt;Senior Software Engineer /&gt;
                        </span>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-6 mt-8 slide-up slide-up-delay-3">
                        {[
                            { icon: Mail, href: 'mailto:riansatro@gmail.com' },
                            { icon: Linkedin, href: 'https://linkedin.com' },
                            { icon: Github, href: 'https://github.com/rianrp' },
                        ].map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 text-secondary/60 hover:text-primary border border-primary/10 hover:border-accent/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 backdrop-blur-sm bg-background/30"
                            >
                                <s.icon size={20} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    style={{ opacity: scrollIndicatorOpacity }}
                >
                    <span className="text-[10px] font-mono text-secondary/50 uppercase tracking-[0.3em]">Scroll</span>
                    <ChevronDown className="w-5 h-5 text-secondary/50 animate-bounce" />
                </motion.div>

                {/* === SLIDE 1: About Me === */}
                <motion.div
                    className="absolute inset-0 flex items-center px-8 md:px-20 lg:px-32"
                    style={{ opacity: slide1Opacity, y: slide1Y }}
                >
                    <div className="max-w-2xl p-8 rounded-2xl bg-background/95 backdrop-blur-xl border border-primary/20 shadow-2xl">
                        <span className="text-xs font-mono text-accent mb-4 block tracking-[0.3em] uppercase">01 — About</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary leading-tight mb-6 tracking-tight">
                            {t('hero.description')}
                        </h2>
                        <div className="w-16 h-[2px] bg-accent" />
                    </div>
                </motion.div>

                {/* === SLIDE 2: Skills Highlight === */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-end px-8 md:px-20 lg:px-32"
                    style={{ opacity: slide2Opacity, y: slide2Y }}
                >
                    <div className="max-w-2xl text-right p-8 rounded-2xl bg-background/95 backdrop-blur-xl border border-primary/20 shadow-2xl">
                        <span className="text-xs font-mono text-accent mb-4 block tracking-[0.3em] uppercase">02 — Stack</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary leading-tight mb-6 tracking-tight">
                            React. TypeScript.<br />
                            <span className="text-accent">.NET. AI.</span>
                        </h2>
                        <div className="flex flex-wrap gap-2 justify-end">
                            {['React', 'TypeScript', 'Next.js', '.NET', 'Node.js', 'Python', 'AI/ML'].map(tech => (
                                <span key={tech} className="px-3 py-1.5 text-sm font-mono text-secondary border border-primary/10 bg-surface/60 backdrop-blur-sm rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* === SLIDE 3: CTA === */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center text-center px-8"
                    style={{ opacity: slide3Opacity, y: slide3Y }}
                >
                    <div className="p-8 rounded-2xl bg-background/95 backdrop-blur-xl border border-primary/20 shadow-2xl">
                        <span className="text-xs font-mono text-accent mb-6 block tracking-[0.3em] uppercase">03 — Explore</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-primary leading-tight mb-8 tracking-tight">
                            Let's build<br />
                            <span className="text-accent">something great.</span>
                        </h2>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-heading font-bold text-lg transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:scale-105 active:scale-95"
                        >
                            View Projects
                            <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                        </a>
                    </div>
                </motion.div>

                {/* Frame Counter */}
                <div className="absolute bottom-10 right-10 hidden md:block">
                    <span className="text-[10px] font-mono text-secondary/30">
                        {TOTAL_FRAMES} frames
                    </span>
                </div>
            </div>
        </div>
    );
}
