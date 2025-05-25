
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { skillsData, workExperienceData } from "@/data/aboutData";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A passionate and driven AI & Machine Learning student with hands-on experience in full-stack development
          </p>
        </div>

        {/* Technical Skills */}
        <Card className="glass-effect mb-12 animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Technical Skills</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {skillsData.map((skillCategory, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <h4 className="text-lg font-semibold text-white mb-3 hover:text-purple-400 transition-colors duration-300">{skillCategory.category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-purple-900/30 text-purple-300 border-purple-500/30 hover:bg-purple-800/50 hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in"
                        style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold gradient-text text-center animate-fade-in">Professional Experience</h3>
          {workExperienceData.map((experience, index) => (
            <Card key={index} className="glass-effect animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0 group">
                    <Briefcase className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">{experience.position}</h4>
                      <p className="text-gray-300">{experience.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-purple-400 font-medium">{experience.duration}</p>
                    <Badge variant="secondary" className="bg-blue-900/30 text-blue-300 border-blue-500/30 mt-1 hover:bg-blue-800/50 transition-colors duration-300">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-lg font-medium text-white mb-3">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-gray-300 flex items-start animate-fade-in hover:text-white transition-colors duration-300" style={{ animationDelay: `${(index * 200) + (respIndex * 100)}ms` }}>
                        <span className="text-purple-400 mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-lg font-medium text-white mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-gray-300 border-gray-600 hover:text-white hover:border-purple-400 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
