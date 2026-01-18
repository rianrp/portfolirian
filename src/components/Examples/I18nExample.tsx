import { useTranslation } from 'react-i18next';

/**
 * Exemplo de componente usando todas as features de i18n
 * Este arquivo é apenas para referência e demonstração
 */
export default function I18nExample() {
    const { t, i18n } = useTranslation();

    // 1. Tradução simples
    const simpleText = t('nav.home');

    // 2. Tradução com interpolação
    const greeting = t('greeting', { name: 'Usuário' });

    // 3. Tradução de pluralização
    const itemCount = t('items', { count: 5 });

    // 4. Verificar idioma atual
    const currentLang = i18n.language;
    const isPortuguese = currentLang === 'pt';

    // 5. Mudar idioma programaticamente
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">
                Exemplos de i18n
            </h1>

            {/* Tradução Simples */}
            <div className="mb-4">
                <h2 className="font-semibold">1. Tradução Simples:</h2>
                <p>{simpleText}</p>
            </div>

            {/* Interpolação */}
            <div className="mb-4">
                <h2 className="font-semibold">2. Interpolação:</h2>
                <p>{greeting}</p>
            </div>

            {/* Pluralização */}
            <div className="mb-4">
                <h2 className="font-semibold">3. Pluralização:</h2>
                <p>{itemCount}</p>
            </div>

            {/* Idioma Atual */}
            <div className="mb-4">
                <h2 className="font-semibold">4. Idioma Atual:</h2>
                <p>
                    {currentLang} - {isPortuguese ? 'Português' : 'English'}
                </p>
            </div>

            {/* Mudar Idioma */}
            <div className="mb-4">
                <h2 className="font-semibold mb-2">5. Mudar Idioma:</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => handleChangeLanguage('pt')}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Português
                    </button>
                    <button
                        onClick={() => handleChangeLanguage('en')}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        English
                    </button>
                </div>
            </div>

            {/* Traduções Aninhadas */}
            <div className="mb-4">
                <h2 className="font-semibold">6. Traduções Aninhadas:</h2>
                <ul className="list-disc ml-6">
                    <li>{t('nav.home')}</li>
                    <li>{t('nav.projects')}</li>
                    <li>{t('nav.contact')}</li>
                </ul>
            </div>

            {/* Tradução com Fallback */}
            <div className="mb-4">
                <h2 className="font-semibold">7. Com Fallback:</h2>
                <p>
                    {t('missing.key', { 
                        defaultValue: 'Texto padrão se a tradução não existir' 
                    })}
                </p>
            </div>
        </div>
    );
}
