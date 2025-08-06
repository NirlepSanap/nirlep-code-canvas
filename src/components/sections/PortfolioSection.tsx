
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Link } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work in web development and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="glass-effect hover:scale-105 transition-all duration-500 animate-fade-in group hover:shadow-xl hover:shadow-blue-500/20" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-500/30 group-hover:bg-purple-800/50 transition-colors duration-300">
                    {project.type}
                  </Badge>
                </div>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-gray-300 border-gray-600 hover:text-white hover:border-blue-400 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:scale-105 transition-all duration-300">
                    <Link className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
