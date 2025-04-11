
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { SupportedLanguage } from "@/utils/languageUtils";
import { LanguageSelector } from "./LanguageSelector";
import { getUIText } from "@/utils/languageUtils";

interface HeaderProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const uiText = getUIText(currentLanguage);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Places", href: "#places" },
    { name: "Events", href: "#events" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-goa-teal font-montserrat">
            <span className="text-goa-coral">Goa</span>Voice
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground font-medium hover:text-goa-teal transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="relative">
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange} 
            />
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 text-foreground hover:text-goa-teal"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white z-50 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground font-medium hover:text-goa-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="py-2">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Globe size={16} />
                <span>{uiText.languageSelector}</span>
              </div>
              <div className="mt-2">
                <LanguageSelector 
                  currentLanguage={currentLanguage} 
                  onLanguageChange={(lang) => {
                    onLanguageChange(lang);
                    setIsMenuOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
