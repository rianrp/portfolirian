import { motion } from 'framer-motion';

export default function BackgroundEffect() {
    // Generate random stars
    const stars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 50 + 30,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.3,
    }));

    // Generate asteroids
    const asteroids = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 120 - 10,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 40 + 20,
        delay: Math.random() * 10,
    }));

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Stars */}
            {stars.map((star) => (
                <motion.div
                    key={`star-${star.id}`}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        opacity: star.opacity,
                    }}
                    animate={{
                        opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Asteroids */}
            {asteroids.map((asteroid) => (
                <motion.div
                    key={`asteroid-${asteroid.id}`}
                    className="absolute rounded-full bg-white/20 blur-[1px]"
                    style={{
                        left: `${asteroid.x}%`,
                        top: `${asteroid.y}%`,
                        width: asteroid.size,
                        height: asteroid.size,
                    }}
                    animate={{
                        x: ['-100vw', '100vw'],
                        y: [0, Math.random() * 200 - 100],
                    }}
                    transition={{
                        duration: asteroid.duration,
                        delay: asteroid.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        </div>
    );
}
