
import { useState } from "react";
import { Volume2, Info } from "lucide-react";
import { speakText, cancelSpeech } from "@/utils/voiceUtils";
import { 
  SupportedLanguage, 
  getLanguageSpeechCode
} from "@/utils/languageUtils";
import { PlaceType } from "@/data/places";
import { Button } from "@/components/ui/button";

interface PlaceCardProps {
  place: PlaceType;
  language: SupportedLanguage;
}

export const PlaceCard = ({ place, language }: PlaceCardProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const getName = () => {
    if (language === 'en') return place.name;
    return place.translations[language]?.name || place.name;
  };
  
  const getDescription = () => {
    if (language === 'en') return place.shortDescription;
    return place.translations[language]?.shortDescription || place.shortDescription;
  };
  
  const speechCode = getLanguageSpeechCode(language);
  
  const handleSpeak = () => {
    if (isSpeaking) {
      cancelSpeech();
      setIsSpeaking(false);
      return;
    }
    
    setIsSpeaking(true);
    
    // Speak the name and description
    const textToSpeak = `${getName()}. ${getDescription()}`;
    speakText(textToSpeak, speechCode);
    
    // Set speaking to false after speech is complete
    const checkSpeaking = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        setIsSpeaking(false);
        clearInterval(checkSpeaking);
      }
    }, 100);
  };

  return (
    <div 
      className="place-card h-[350px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48">
        <img
          src={place.imageUrl}
          alt={getName()}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium text-sm px-2 py-1 rounded-full bg-goa-teal/80">
              {place.category}
            </span>
            <span className="text-white text-xs px-2 py-1 rounded-full bg-black/40">
              {place.location}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="font-medium text-lg line-clamp-1">{getName()}</h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {getDescription()}
        </p>
        
        <div className="mt-auto pt-3 flex justify-between items-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs"
            onClick={handleSpeak}
          >
            <Volume2 size={16} className={isSpeaking ? "text-primary animate-pulse" : ""} />
            <span className="ml-1">
              {isSpeaking ? "Stop" : "Listen"}
            </span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
          >
            <Info size={16} />
            <span className="ml-1">Details</span>
          </Button>
        </div>
      </div>
      
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-5 transition-opacity duration-300"></div>
      )}
    </div>
  );
};
