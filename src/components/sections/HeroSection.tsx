
import { Button } from "@/components/ui/button";
import { Code, Briefcase } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="gradient-text animate-gradient-shift">Full Stack Developer</span>
              <br />
              <span className="text-white animate-fade-in" style={{ animationDelay: "0.2s" }}>& Data Scientist</span>
              <br />
              <span className="text-gray-400 text-2xl lg:text-3xl animate-fade-in" style={{ animationDelay: "0.4s" }}></span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
              An energetic, honest, and self-motivated AI & Machine Learning student with a passion 
              for creating innovative web solutions and intelligent systems.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              onClick={() => scrollToSection("portfolio")} 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("contact")} 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="relative animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full p-1 hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.postimg.cc/HWBKrqrh/linkdin-profile.jpg" 
                alt="Nirlep Sanap Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center animate-bounce">
            <Code className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: "1s" }}>
            <Briefcase className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
