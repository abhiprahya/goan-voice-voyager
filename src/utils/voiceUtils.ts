
type RecognitionCallback = (text: string) => void;

interface VoiceRecognitionOptions {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
}

export const startVoiceRecognition = (
  callback: RecognitionCallback,
  options: VoiceRecognitionOptions = {}
): { stop: () => void } => {
  // Check for browser support
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    console.error("Speech recognition not supported in this browser.");
    return { 
      stop: () => {} 
    };
  }

  const recognition = new SpeechRecognition();
  
  // Configure recognition
  recognition.lang = options.language || 'en-US';
  recognition.continuous = options.continuous || false;
  recognition.interimResults = options.interimResults || false;
  
  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    callback(transcript);
  };
  
  recognition.onerror = (event) => {
    console.error('Speech recognition error', event.error);
  };
  
  // Start listening
  try {
    recognition.start();
  } catch (error) {
    console.error('Error starting speech recognition:', error);
  }
  
  // Return method to stop listening
  return {
    stop: () => {
      try {
        recognition.stop();
      } catch (error) {
        console.error('Error stopping speech recognition:', error);
      }
    }
  };
};

export const speakText = (text: string, language: string = 'en-US'): void => {
  const synth = window.speechSynthesis;
  
  if (!synth) {
    console.error("Speech synthesis not supported in this browser.");
    return;
  }

  // Create utterance with specified text and language
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;
  
  // Set voice if available
  const voices = synth.getVoices();
  const voice = voices.find(voice => voice.lang.startsWith(language.split('-')[0]));
  if (voice) {
    utterance.voice = voice;
  }
  
  // Speak the text
  synth.speak(utterance);
};

export const cancelSpeech = (): void => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
};
