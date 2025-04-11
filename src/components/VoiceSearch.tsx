
import { useState, useEffect, useCallback } from "react";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { startVoiceRecognition, speakText, cancelSpeech } from "@/utils/voiceUtils";
import { SupportedLanguage, getLanguageSpeechCode, getUIText } from "@/utils/languageUtils";
import { toast } from "sonner";

interface VoiceSearchProps {
  language: SupportedLanguage;
  onSearch: (query: string) => void;
}

export const VoiceSearch = ({ language, onSearch }: VoiceSearchProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const speechCode = getLanguageSpeechCode(language);
  const uiText = getUIText(language);
  
  // Stop recognition when component unmounts
  useEffect(() => {
    return () => {
      cancelSpeech();
    };
  }, []);
  
  // Reset transcript when language changes
  useEffect(() => {
    setTranscript("");
  }, [language]);
  
  const handleStartListening = useCallback(() => {
    setIsListening(true);
    setTranscript("");
    
    const { stop } = startVoiceRecognition(
      (text) => {
        setTranscript(text);
        onSearch(text);
      },
      { language: speechCode }
    );
    
    // Automatically stop after 10 seconds if no result
    const timeout = setTimeout(() => {
      stop();
      setIsListening(false);
    }, 10000);
    
    // Return cleanup function
    return () => {
      clearTimeout(timeout);
      stop();
      setIsListening(false);
    };
  }, [speechCode, onSearch]);
  
  const handleStopListening = () => {
    setIsListening(false);
  };
  
  const handlePlayPrompt = () => {
    setIsSpeaking(true);
    speakText(uiText.speakNow, speechCode);
    
    // Set speaking to false after speech is complete
    const checkSpeaking = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        setIsSpeaking(false);
        clearInterval(checkSpeaking);
      }
    }, 100);
  };
  
  const handleStopSpeaking = () => {
    cancelSpeech();
    setIsSpeaking(false);
  };
  
  const handleToggleListening = () => {
    if (isListening) {
      handleStopListening();
      toast.info("Voice search stopped");
    } else {
      // Check for browser support
      if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        toast.error("Voice search is not supported in this browser");
        return;
      }
      
      // Request microphone permission
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => {
          const cleanup = handleStartListening();
          toast.info("Listening...");
          
          // Return the cleanup function for future use
          return cleanup;
        })
        .catch((error) => {
          toast.error("Microphone access denied. Please allow microphone access to use voice search.");
          console.error("Error accessing microphone:", error);
        });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Button
          variant={isListening ? "destructive" : "default"}
          className={`rounded-full w-16 h-16 flex items-center justify-center ${
            isListening ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
          }`}
          onClick={handleToggleListening}
        >
          {isListening ? (
            <MicOff className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          )}
          {isListening && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-20"></span>
          )}
        </Button>
      </div>
      
      <div className="mt-2 flex gap-2 items-center">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs flex items-center gap-1"
          onClick={isSpeaking ? handleStopSpeaking : handlePlayPrompt}
        >
          {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
          {isSpeaking ? uiText.stopListening : uiText.voiceSearch}
        </Button>
      </div>
      
      {transcript && (
        <div className="mt-3 text-sm text-center max-w-xs">
          <p className="font-medium">"{transcript}"</p>
        </div>
      )}
    </div>
  );
};
