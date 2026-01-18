import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../Layout/Section';

export default function Contact() {
    const { t } = useTranslation();
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
                        <span>{t('contact.badge')}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        {t('contact.heading')} <br />
                        <span className="text-secondary">{t('contact.headingAccent')}</span>
                    </h2>

                    <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
                        {t('contact.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="mailto:riansatro@gmail.com"
                            className="group px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/25 hover:shadow-accent/40"
                        >
                            <Mail size={20} />
                            {t('contact.emailButton')}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-surface hover:bg-surface/80 text-white rounded-xl font-bold text-lg transition-all duration-300 border border-white/5"
                        >
                            {t('contact.linkedinButton')}
                        </a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
