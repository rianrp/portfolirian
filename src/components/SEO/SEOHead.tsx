import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

export default function SEOHead({ title, description, keywords }: SEOProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Definir títulos e descrições por idioma
    const seoContent = {
      pt: {
        title: 'Rian Rodrigues - Desenvolvedor Full Stack | React, Node.js, .NET',
        description: 'Desenvolvedor Full Stack especializado em arquiteturas frontend escaláveis, integrações complexas e soluções alimentadas por IA. React, Next.js, TypeScript, .NET.',
        keywords: 'desenvolvedor full stack, react, next.js, typescript, nodejs, dotnet, frontend, backend, desenvolvedor web, portfólio'
      },
      en: {
        title: 'Rian Rodrigues - Full Stack Developer | React, Node.js, .NET',
        description: 'Full Stack Developer specialized in scalable frontend architectures, complex integrations, and AI-powered solutions. React, Next.js, TypeScript, .NET.',
        keywords: 'full stack developer, react, next.js, typescript, nodejs, dotnet, frontend, backend, web developer, portfolio'
      }
    };

    const lang = i18n.language as 'pt' | 'en';
    const content = seoContent[lang];

    // Atualizar title
    document.title = title || content.title;

    // Atualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || content.description);

    // Atualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    const keywordsList = keywords?.join(', ') || content.keywords;
    metaKeywords.setAttribute('content', keywordsList);

    // Atualizar Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title || content.title },
      { property: 'og:description', content: description || content.description },
      { property: 'og:locale', content: lang === 'pt' ? 'pt_BR' : 'en_US' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Atualizar lang no HTML
    document.documentElement.lang = lang;

  }, [i18n.language, title, description, keywords]);

  return null;
}
