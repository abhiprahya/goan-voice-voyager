
import { useState, useEffect } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VoiceSearch } from "@/components/VoiceSearch";
import { CategorySelector } from "@/components/CategorySelector";
import { PlaceCard } from "@/components/PlaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SupportedLanguage, getUIText } from "@/utils/languageUtils";
import { places } from "@/data/places";
import { useToast } from "sonner";

const Index = () => {
  const [language, setLanguage] = useState<SupportedLanguage>("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const toast = useToast();
  
  const uiText = getUIText(language);
  
  // Filter places based on search and category
  useEffect(() => {
    let result = places;
    
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(place => {
        // Check name in current language
        const name = language === 'en' 
          ? place.name.toLowerCase() 
          : place.translations[language]?.name.toLowerCase() || place.name.toLowerCase();
          
        // Check description in current language
        const desc = language === 'en'
          ? place.description.toLowerCase()
          : place.translations[language]?.description.toLowerCase() || place.description.toLowerCase();
          
        return name.includes(lowerQuery) || desc.includes(lowerQuery);
      });
    }
    
    if (selectedCategory) {
      result = result.filter(place => place.category === selectedCategory);
    }
    
    setFilteredPlaces(result);
  }, [searchQuery, selectedCategory, language]);
  
  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setLanguage(newLang);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleVoiceSearch = (query: string) => {
    setSearchQuery(query);
    toast.info(`Searching for: "${query}"`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentLanguage={language} 
        onLanguageChange={handleLanguageChange} 
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-goa-gradient text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
                Discover Goa with Your Voice
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Explore the beaches, culture, cuisine and experiences of Goa through our interactive voice guide.
              </p>
              
              <div className="max-w-lg mx-auto">
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder={uiText.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-6 rounded-full bg-white text-foreground"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                
                <div className="flex justify-center">
                  <VoiceSearch 
                    language={language} 
                    onSearch={handleVoiceSearch} 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        {/* Categories Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <CategorySelector 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              language={language}
            />
          </div>
        </section>
        
        {/* Featured Places */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{uiText.featuredTitle}</h2>
              <Button variant="ghost" className="text-sm flex items-center">
                {uiText.viewAll}
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map((place) => (
                  <PlaceCard 
                    key={place.id} 
                    place={place} 
                    language={language} 
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 text-lg">No places found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-goa-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Goa?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Discover the best beaches, cultural sites, local cuisine and hidden gems with our voice-guided exploration.
            </p>
            <Button 
              variant="outline"
              className="bg-white text-goa-teal hover:bg-gray-100"
              size="lg"
            >
              Start Exploring
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
