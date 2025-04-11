
import { useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { SupportedLanguage, supportedLanguages } from "@/utils/languageUtils";

interface LanguageSelectorProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = supportedLanguages.find(lang => lang.code === currentLanguage);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleLanguageSelect = (langCode: SupportedLanguage) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-muted transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={18} className="text-goa-teal" />
        <span>{currentLang?.name}</span>
        <ChevronDown size={16} className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 py-1 w-40 bg-white rounded-lg shadow-lg z-50 border border-border">
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              className={`flex items-center w-full text-left px-4 py-2 hover:bg-muted transition-colors ${
                currentLanguage === lang.code ? "text-goa-teal" : ""
              }`}
              onClick={() => handleLanguageSelect(lang.code as SupportedLanguage)}
            >
              <span className="flex-1">{lang.name}</span>
              {currentLanguage === lang.code && <Check size={16} className="text-goa-teal" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
