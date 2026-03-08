import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="relative z-20 bg-surface border-t border-primary/10 py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://github.com/rianrp" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:riansatro@gmail.com" className="text-secondary hover:text-primary transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-secondary text-sm">
                    © {new Date().getFullYear()} Rian Rodrigues. {t('footer.rights')}.
                </p>
            </div>
        </footer>
    );
}
