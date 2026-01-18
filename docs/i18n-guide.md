# Sistema de Internacionalização (i18n) 🌍

Este projeto possui um sistema completo e robusto de internacionalização usando **i18next** e **react-i18next**.

## 🎯 Características Principais

✅ **Múltiplos Idiomas** - Suporte para Português (PT) e Inglês (EN)  
✅ **Detecção Automática** - Detecta idioma do navegador automaticamente  
✅ **Persistência** - Salva preferência do usuário no localStorage  
✅ **UI Intuitiva** - Botão visual com bandeiras para troca de idioma  
✅ **Suporte TypeScript** - Types completos para autocomplete  
✅ **Helper Functions** - Utilitários para formatação de datas  
✅ **Documentação Completa** - Exemplos e guias de uso  

## 📦 Idiomas Disponíveis

- 🇧🇷 **Português (pt)** - Idioma padrão
- 🇺🇸 **English (en)** - Secondary language

## 🚀 Como Usar

### Alternar Idioma

Clique no botão de idioma no canto superior direito da navegação. O idioma é automaticamente salvo e persistido entre sessões.

### No Código

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

## 📁 Estrutura de Arquivos

```
src/
  i18n/
    config.ts              # Configuração principal do i18next
    types.ts               # TypeScript types para autocomplete
    locales/
      en.ts                # Traduções em inglês
      pt.ts                # Traduções em português
  components/
    Layout/
      LanguageSwitcher.tsx # Componente de alternância de idioma
    Examples/
      I18nExample.tsx      # Exemplos de uso
  hooks/
    useTranslation.ts      # Custom hook com utilities extras
  utils/
    dateFormatter.ts       # Helpers para formatação de datas
```

## 🎨 Componentes Traduzidos

Todos os componentes principais possuem suporte completo a i18n:

- ✅ **Navbar** - Menu de navegação com seletor de idioma
- ✅ **Hero** - Seção principal com apresentação
- ✅ **Projects** - Lista de projetos
- ✅ **Experience** - Experiência profissional
- ✅ **Tech Stack** - Tecnologias utilizadas
- ✅ **Certifications** - Certificações
- ✅ **Contact** - Formulário de contato
- ✅ **Footer** - Rodapé

## 📝 Adicionar Novo Idioma

### 1. Criar arquivo de tradução

```bash
# Criar novo arquivo em src/i18n/locales/
touch src/i18n/locales/es.ts  # Exemplo: Espanhol
```

### 2. Adicionar traduções

```typescript
// src/i18n/locales/es.ts
export default {
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    // ... mais traduções
  },
  // ... restante das seções
};
```

### 3. Registrar no config

```typescript
// src/i18n/config.ts
import es from './locales/es';

const resources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es } // Novo idioma
};
```

### 4. Atualizar LanguageSwitcher

Adicione o novo idioma no componente de seleção.

## 🔧 Utilities

### Custom Hook

```tsx
import { useTranslation } from '@/hooks/useTranslation';

function Component() {
  const { t, changeLanguage, isPortuguese } = useTranslation();
  
  return (
    <div>
      {isPortuguese && <p>Conteúdo em português</p>}
      <button onClick={() => changeLanguage('en')}>
        Switch to English
      </button>
    </div>
  );
}
```

### Date Formatting

```tsx
import { formatDate, formatDateRange } from '@/utils/dateFormatter';
import { useTranslation } from 'react-i18next';

function Component() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'pt' | 'en';
  
  return (
    <>
      <p>{formatDate('2024-01-15', lang)}</p>
      {/* PT: "janeiro de 2024" */}
      {/* EN: "January 2024" */}
      
      <p>{formatDateRange('2022-07-01', 'present', lang)}</p>
      {/* PT: "julho de 2022 - Presente" */}
      {/* EN: "July 2022 - Present" */}
    </>
  );
}
```

## 📖 Documentação Avançada

Para exemplos mais avançados de uso (interpolação, pluralização, etc.), consulte:
- [Guia de Uso Avançado](./i18n-advanced-usage.md)
- [Componente de Exemplo](../src/components/Examples/I18nExample.tsx)

## 🛠 Configuração

### Detecção Automática de Idioma

O sistema detecta automaticamente o idioma do navegador:

```typescript
// src/i18n/config.ts
const getInitialLanguage = (): string => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) return savedLanguage;
  
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'pt' || browserLang === 'en' 
    ? browserLang 
    : 'pt'; // fallback
};
```

### TypeScript Support

Types completos para autocomplete:

```typescript
import type { TranslationKey } from '@/i18n/types';

const key: TranslationKey = 'nav.home'; // Autocomplete funcionando!
```

## 🎯 Melhores Práticas

1. **Use chaves descritivas**: `hero.mainTitle` ao invés de `title1`
2. **Organize por seção**: Agrupe traduções relacionadas
3. **Mantenha consistência**: Use o mesmo formato em todos os idiomas
4. **Teste ambos idiomas**: Sempre verifique ambas versões
5. **Evite textos hardcoded**: Sempre use `t('key')` para textos visíveis

## 📊 Status de Tradução

| Seção | PT | EN |
|-------|----|----|
| Navbar | ✅ | ✅ |
| Hero | ✅ | ✅ |
| Projects | ✅ | ✅ |
| Experience | ✅ | ✅ |
| Tech Stack | ✅ | ✅ |
| Certifications | ✅ | ✅ |
| Contact | ✅ | ✅ |
| Footer | ✅ | ✅ |

## 🔍 Debugging

Para debugar traduções:

```tsx
// Ver idioma atual
console.log(i18n.language);

// Ver todas as traduções carregadas
console.log(i18n.store.data);

// Testar se uma chave existe
console.log(i18n.exists('nav.home'));
```

## 🚀 Deploy

O sistema de i18n funciona automaticamente em produção. Não há configuração adicional necessária para o build.

```bash
npm run build  # Build com suporte i18n incluído
npm run deploy # Deploy para GitHub Pages
```

---

**Desenvolvido com ❤️ usando i18next e React**
