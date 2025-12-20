import { useEffect, useState } from 'react';
import { Satellite } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
    id: number;
    x: number;
    y: number;
}

export default function MouseSpotlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [ripples, setRipples] = useState<Ripple[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleClick = (e: MouseEvent) => {
            const newRipple = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setRipples(prev => [...prev, newRipple]);
            
            // Remove ripple after animation
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== newRipple.id));
            }, 1500);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            {/* Subtle glow effect */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    opacity: isVisible ? 1 : 0,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.03), transparent 70%)`,
                }}
            />
            
            {/* Satellite icon */}
            <div
                className="pointer-events-none fixed z-40 transition-opacity duration-300"
                style={{
                    opacity: isVisible ? 1 : 0,
                    left: position.x - 16,
                    top: position.y - 16,
                    transform: `rotate(${position.x * 0.05}deg)`,
                }}
            >
                <Satellite 
                    size={32} 
                    className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
            </div>

            {/* Sound wave ripples on click */}
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.div
                        key={ripple.id}
                        className="pointer-events-none fixed z-35 rounded-full border-2 border-white"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                        }}
                        initial={{
                            width: 0,
                            height: 0,
                            x: 0,
                            y: 0,
                            opacity: 0.8,
                        }}
                        animate={{
                            width: 200,
                            height: 200,
                            x: -100,
                            y: -100,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Second wave layer for depth */}
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.div
                        key={`ripple2-${ripple.id}`}
                        className="pointer-events-none fixed z-35 rounded-full border border-white/50"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                        }}
                        initial={{
                            width: 0,
                            height: 0,
                            x: 0,
                            y: 0,
                            opacity: 0.6,
                        }}
                        animate={{
                            width: 300,
                            height: 300,
                            x: -150,
                            y: -150,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: 0.1,
                        }}
                    />
                ))}
            </AnimatePresence>
        </>
    );
}
