import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight, Phone, Instagram, Globe, Smartphone, Layout, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../Layout/Section';

export default function Contact() {
    const { t } = useTranslation();
    
    const services = [
        { icon: Globe, label: 'Sites' },
        { icon: Layout, label: 'Web Apps' },
        { icon: Server, label: 'Sistemas' },
        { icon: Smartphone, label: 'Aplicativos' }
    ];
    
    const contacts = [
        {
            icon: Mail,
            label: 'Email',
            value: 'riansatro@gmail.com',
            href: 'mailto:riansatro@gmail.com'
        },
        {
            icon: Phone,
            label: 'WhatsApp',
            value: '+55 48 9648-9686',
            href: 'https://wa.me/5548964896686'
        },
        {
            icon: Instagram,
            label: 'Instagram',
            value: '@devinc_arts',
            href: 'https://www.instagram.com/devinc_arts?igsh=OWNvdzg0OXN2eGE2'
        }
    ];
    
    return (
        <Section id="contact" className="py-32 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    {/* CTA Principal */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-accent text-sm font-mono font-medium mb-8">
                            <MessageSquare size={16} />
                            <span>{t('contact.badge')}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 tracking-tight">
                            Precisa de um site?<br />
                            <span className="text-accent">Vamos conversar.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                            Desenvolvo soluções digitais completas para transformar suas ideias em realidade.
                        </p>

                        {/* Serviços */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={service.label}
                                        className="flex items-center gap-2 px-5 py-3 bg-surface/50 border border-primary/10 rounded-xl text-secondary hover:text-primary hover:border-accent/30 transition-all"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Icon size={18} />
                                        <span className="font-medium">{service.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contatos em Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {contacts.map((contact, index) => {
                            const Icon = contact.icon;
                            return (
                                <motion.a
                                    key={contact.label}
                                    href={contact.href}
                                    target={contact.icon === Mail ? undefined : "_blank"}
                                    rel={contact.icon === Mail ? undefined : "noopener noreferrer"}
                                    className="group p-6 bg-surface/30 border border-primary/10 rounded-2xl hover:bg-surface/60 hover:border-accent/30 transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>
                                    <div className="text-sm text-secondary mb-1">{contact.label}</div>
                                    <div className="text-base font-medium text-primary group-hover:text-accent transition-colors">
                                        {contact.value}
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <motion.a
                            href="https://wa.me/5548964896686?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent/90 text-white rounded-2xl font-heading font-bold text-lg transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Phone size={24} />
                            Iniciar Conversa
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <p className="text-sm text-secondary mt-6">
                            Respondo em até 24h • Consulta gratuita
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
