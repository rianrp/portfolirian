/**
 * TypeScript types for i18n translations
 * Provides autocomplete and type safety for translation keys
 */

export type Language = 'pt' | 'en';

export interface NavTranslations {
  home: string;
  projects: string;
  experience: string;
  techStack: string;
  certifications: string;
  contact: string;
}

export interface HeroTranslations {
  greeting: string;
  role: string;
  description: string;
  cta: string;
  viewProjects: string;
  openToWork: string;
  name: string;
  jobTitle: string;
}

export interface TechStackTranslations {
  title: string;
  titleAccent: string;
  subtitle: string;
}

export interface ExperienceTranslations {
  title: string;
  present: string;
}

export interface ProjectsTranslations {
  title: string;
  viewAll: string;
  website: string;
  source: string;
  demo: string;
  live: string;
}

export interface CertificationsTranslations {
  title: string;
  credentialId: string;
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  badge: string;
  heading: string;
  headingAccent: string;
  description: string;
  emailButton: string;
  linkedinButton: string;
}

export interface FooterTranslations {
  rights: string;
  builtWith: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  techStack: TechStackTranslations;
  experience: ExperienceTranslations;
  projects: ProjectsTranslations;
  certifications: CertificationsTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
}

// Helper type for translation keys (dot notation)
export type TranslationKey = 
  | `nav.${keyof NavTranslations}`
  | `hero.${keyof HeroTranslations}`
  | `techStack.${keyof TechStackTranslations}`
  | `experience.${keyof ExperienceTranslations}`
  | `projects.${keyof ProjectsTranslations}`
  | `certifications.${keyof CertificationsTranslations}`
  | `contact.${keyof ContactTranslations}`
  | `footer.${keyof FooterTranslations}`;
