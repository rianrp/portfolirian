import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="relative z-20 bg-[#030712] border-t border-white/5 py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://github.com/rianrp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:riansatro@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Rian Rodrigues. {t('footer.rights')}.
                </p>
            </div>
        </footer>
    );
}
