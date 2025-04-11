import { Waves, Landmark, Utensils, Scroll, ShoppingBag, PalmTree } from "lucide-react";
import { SupportedLanguage, getUIText } from "@/utils/languageUtils";
import { categories } from "@/data/places";

interface CategorySelectorProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  language: SupportedLanguage;
}

export const CategorySelector = ({ selectedCategory, onSelectCategory, language }: CategorySelectorProps) => {
  const uiText = getUIText(language);
  
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "waves": return <Waves size={20} />;
      case "landmark": return <Landmark size={20} />;
      case "utensils": return <Utensils size={20} />;
      case "scroll": return <Scroll size={20} />;
      case "shopping-bag": return <ShoppingBag size={20} />;
      case "palmtree": return <PalmTree size={20} />;
      default: return <Landmark size={20} />;
    }
  };
  
  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      // If clicking the already selected category, deselect it
      onSelectCategory(null);
    } else {
      // Otherwise, select the new category
      onSelectCategory(categoryId);
    }
  };
  
  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-medium mb-4">{uiText.categoriesTitle}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`category-btn ${
              selectedCategory === category.id
                ? "bg-primary text-white"
                : "bg-white text-foreground hover:bg-secondary/50"
            }`}
          >
            <span className="flex items-center justify-center">
              {getCategoryIcon(category.icon)}
              <span className="ml-2">{category.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
