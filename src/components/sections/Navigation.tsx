
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect animate-fade-in">
      <div className="max-w-7xl mx-auto section-padding py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text animate-scale-in">Nirlep Sanap</div>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 hover:scale-110 transform ${
                  activeSection === item.toLowerCase() ? "text-purple-400 scale-110" : "text-gray-300"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
