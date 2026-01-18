# Advanced i18n Usage Examples

## Interpolação de Variáveis

### No arquivo de tradução:

```typescript
// pt.ts
export default {
  greeting: "Olá, {{name}}!",
  projectCount: "{{count}} projeto",
  projectCount_plural: "{{count}} projetos"
}
```

### No componente:

```tsx
import { useTranslation } from 'react-i18next';

function Example() {
  const { t } = useTranslation();
  const userName = "Rian";
  const projectCount = 5;
  
  return (
    <>
      <h1>{t('greeting', { name: userName })}</h1>
      {/* Output: "Olá, Rian!" */}
      
      <p>{t('projectCount', { count: projectCount })}</p>
      {/* Output: "5 projetos" */}
    </>
  );
}
```

## Pluralização

O i18next suporta pluralização automática:

```typescript
// en.ts
{
  items: "{{count}} item",
  items_plural: "{{count}} items",
  items_zero: "No items"
}

// pt.ts
{
  items: "{{count}} item",
  items_plural: "{{count}} itens",
  items_zero: "Nenhum item"
}
```

Uso:
```tsx
{t('items', { count: 0 })}  // "No items" / "Nenhum item"
{t('items', { count: 1 })}  // "1 item"
{t('items', { count: 5 })}  // "5 items" / "5 itens"
```

## Formatação de Datas

Use o helper `dateFormatter`:

```tsx
import { formatDate, formatDateRange } from '@/utils/dateFormatter';
import { useTranslation } from 'react-i18next';

function Component() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'pt' | 'en';
  
  return (
    <div>
      <p>{formatDate('2024-01-15', lang)}</p>
      {/* PT: "janeiro de 2024" */}
      {/* EN: "January 2024" */}
      
      <p>{formatDateRange('2022-07-01', 'present', lang)}</p>
      {/* PT: "julho de 2022 - Presente" */}
      {/* EN: "July 2022 - Present" */}
    </div>
  );
}
```

## Namespace (para projetos grandes)

```typescript
// i18n/locales/en/common.ts
export default {
  buttons: {
    submit: "Submit",
    cancel: "Cancel"
  }
}

// i18n/locales/en/home.ts
export default {
  hero: {
    title: "Welcome"
  }
}

// Uso:
{t('buttons.submit', { ns: 'common' })}
{t('hero.title', { ns: 'home' })}
```

## Tradução Condicional

```tsx
function StatusBadge({ status }: { status: 'online' | 'offline' }) {
  const { t } = useTranslation();
  
  return (
    <span className={status === 'online' ? 'text-green-500' : 'text-red-500'}>
      {t(`status.${status}`)}
    </span>
  );
}

// Tradução:
// status: {
//   online: "Online",
//   offline: "Offline"
// }
```

## Fallback para Traduções Faltantes

```tsx
// Se uma chave não existir, exibe a chave ao invés de erro
{t('missing.key', { defaultValue: 'Fallback text' })}
```

## HTML em Traduções (use com cuidado)

```tsx
import { Trans } from 'react-i18next';

// Tradução:
// welcome: "Bem-vindo ao <strong>meu portfólio</strong>!"

<Trans i18nKey="welcome">
  Bem-vindo ao <strong>meu portfólio</strong>!
</Trans>
```

## Detectar Mudança de Idioma

```tsx
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Component() {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      console.log('Idioma mudou para:', lng);
      // Executar ações quando o idioma mudar
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);
  
  return <div>...</div>;
}
```
