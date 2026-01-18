/**
 * Format date according to current language
 */
export const formatDate = (date: string | Date, lang: 'pt' | 'en'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long'
  };

  return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', options).format(dateObj);
};

/**
 * Format date range (e.g., "Jan 2020 - Present")
 */
export const formatDateRange = (
  startDate: string | Date,
  endDate: string | Date | 'present',
  lang: 'pt' | 'en'
): string => {
  const start = formatDate(startDate, lang);
  
  if (endDate === 'present') {
    return `${start} - ${lang === 'pt' ? 'Presente' : 'Present'}`;
  }
  
  const end = formatDate(endDate, lang);
  return `${start} - ${end}`;
};

/**
 * Format relative time (e.g., "2 years ago")
 */
export const formatRelativeTime = (date: string | Date, lang: 'pt' | 'en'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays < 30) {
    return lang === 'pt' 
      ? `há ${diffInDays} dia${diffInDays !== 1 ? 's' : ''}`
      : `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return lang === 'pt'
      ? `há ${diffInMonths} ${diffInMonths === 1 ? 'mês' : 'meses'}`
      : `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return lang === 'pt'
    ? `há ${diffInYears} ano${diffInYears !== 1 ? 's' : ''}`
    : `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
};
