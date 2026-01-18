import { useTranslation } from 'react-i18next';
import { projectsData, experienceData } from '../data/content';

export function useLocalizedContent() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'pt' | 'en';

  return {
    projects: projectsData[lang] || projectsData.pt,
    experience: experienceData[lang] || experienceData.pt,
    language: lang
  };
}
