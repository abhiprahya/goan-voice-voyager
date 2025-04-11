
export type SupportedLanguage = 'en' | 'fr' | 'es' | 'ru';

export const supportedLanguages = [
  { code: 'en', name: 'English', speechCode: 'en-US' },
  { code: 'fr', name: 'Français', speechCode: 'fr-FR' },
  { code: 'es', name: 'Español', speechCode: 'es-ES' },
  { code: 'ru', name: 'Русский', speechCode: 'ru-RU' }
];

export const getLanguageSpeechCode = (langCode: SupportedLanguage): string => {
  const language = supportedLanguages.find(lang => lang.code === langCode);
  return language ? language.speechCode : 'en-US';
};

export const translate = (
  text: string,
  translations: Record<string, string> | undefined,
  language: SupportedLanguage
): string => {
  if (language === 'en') return text;
  if (!translations) return text;
  
  return translations[language] || text;
};

export const getUIText = (language: SupportedLanguage) => {
  const texts: Record<SupportedLanguage, Record<string, string>> = {
    en: {
      searchPlaceholder: "Search places or speak to explore...",
      exploreBtn: "Explore",
      voiceSearch: "Voice Search",
      categoriesTitle: "Explore by Category",
      featuredTitle: "Featured Places",
      viewAll: "View All",
      startListening: "Start Listening",
      stopListening: "Stop Listening",
      speakNow: "Speak Now",
      languageSelector: "Select Language"
    },
    fr: {
      searchPlaceholder: "Rechercher des lieux ou parler pour explorer...",
      exploreBtn: "Explorer",
      voiceSearch: "Recherche Vocale",
      categoriesTitle: "Explorer par Catégorie",
      featuredTitle: "Lieux en Vedette",
      viewAll: "Voir Tout",
      startListening: "Commencer l'Écoute",
      stopListening: "Arrêter l'Écoute",
      speakNow: "Parlez Maintenant",
      languageSelector: "Sélectionner la Langue"
    },
    es: {
      searchPlaceholder: "Buscar lugares o hablar para explorar...",
      exploreBtn: "Explorar",
      voiceSearch: "Búsqueda por Voz",
      categoriesTitle: "Explorar por Categoría",
      featuredTitle: "Lugares Destacados",
      viewAll: "Ver Todo",
      startListening: "Comenzar a Escuchar",
      stopListening: "Dejar de Escuchar",
      speakNow: "Habla Ahora",
      languageSelector: "Seleccionar Idioma"
    },
    ru: {
      searchPlaceholder: "Искать места или говорить для исследования...",
      exploreBtn: "Исследовать",
      voiceSearch: "Голосовой Поиск",
      categoriesTitle: "Исследовать по Категории",
      featuredTitle: "Избранные Места",
      viewAll: "Показать Все",
      startListening: "Начать Прослушивание",
      stopListening: "Остановить Прослушивание",
      speakNow: "Говорите Сейчас",
      languageSelector: "Выбрать Язык"
    }
  };

  return texts[language];
};
