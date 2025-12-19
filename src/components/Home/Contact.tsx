import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import Section from '../Layout/Section';

export default function Contact() {
    return (
        <Section id="contact" className="py-32 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-accent text-sm font-medium mb-8">
                        <MessageSquare size={16} />
                        <span>Available for new opportunities</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Ready to scale your <br />
                        <span className="text-secondary">Frontend Architecture?</span>
                    </h2>

                    <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
                        I help companies build high-performance, maintainable web applications.
                        Let's discuss how I can contribute to your team.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="mailto:riansatro@gmail.com"
                            className="group px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/25 hover:shadow-accent/40"
                        >
                            <Mail size={20} />
                            Send Me an Email
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-surface hover:bg-surface/80 text-white rounded-xl font-bold text-lg transition-all duration-300 border border-white/5"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
