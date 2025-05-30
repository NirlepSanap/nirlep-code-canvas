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
          <div className="flex items-center animate-scale-in">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full p-0.5 hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/HWBKrqrh/linkdin-profile.jpg" 
                  alt="Nirlep Sanap" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <span className="ml-3 text-xl font-bold gradient-text">Nirlep Sanap</span>
          </div>
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
