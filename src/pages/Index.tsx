import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Code, User, Briefcase, FileText, Github, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";
const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
  };
  const skills = [{
    category: "Programming",
    items: ["C", "C++", "Python", "R"]
  }, {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"]
  }, {
    category: "Backend",
    items: ["Node.js", "PHP", "Express.js"]
  }, {
    category: "ML & AI",
    items: ["AI/ML Models", "Data Science", "YOLO"]
  }, {
    category: "API & Tools",
    items: ["Postman API", "Meta API", "REST APIs"]
  }, {
    category: "Databases",
    items: ["SQL", "MongoDB", "Database Design"]
  }];
  const projects = [{
    title: "WhatsApp AI Chatbot",
    description: "Intelligent chatbot using Glitch platform and Meta API for automated customer interactions",
    technologies: ["JavaScript", "Meta API", "Glitch", "Node.js"],
    type: "AI/Automation"
  }, {
    title: "Movie Recommendation System",
    description: "ML-powered recommendation engine that suggests movies based on user preferences",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    type: "Machine Learning"
  }, {
    title: "Real-Time Object Detection",
    description: "YOLO-based system for real-time object detection and classification",
    technologies: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    type: "Computer Vision"
  }, {
    title: "Inventory Management System",
    description: "Full-stack application for optical lens inventory management with real-time tracking",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    type: "Full Stack"
  }];
  const services = [{
    icon: <Code className="w-8 h-8" />,
    title: "Full Stack Web Development",
    description: "Complete web solutions using React.js, Node.js, and modern databases"
  }, {
    icon: <User className="w-8 h-8" />,
    title: "Machine Learning Projects",
    description: "AI/ML solutions including recommendation systems and predictive models"
  }, {
    icon: <Link className="w-8 h-8" />,
    title: "API Integration & Automation",
    description: "Seamless API integrations and automated workflows using various platforms"
  }];
  const workExperience = [{
    position: "Full Stack Developer",
    company: "Agrawal Packers and Movers Ltd",
    duration: "Feb 2023 - July 2023",
    type: "Full-time",
    responsibilities: ["Developed and maintained web applications using React.js and Node.js", "Implemented responsive user interfaces with modern CSS frameworks", "Integrated backend APIs and managed database operations", "Collaborated with cross-functional teams to deliver high-quality solutions", "Optimized application performance and user experience"],
    technologies: ["React.js", "Node.js", "JavaScript", "CSS", "MongoDB"]
  }, {
    position: "Frontend Developer Intern",
    company: "Winsple",
    duration: "Jan 2023 - Feb 2023",
    type: "Internship",
    responsibilities: ["Developed user-friendly web interfaces using HTML, CSS, and JavaScript", "Worked closely with design team to implement pixel-perfect layouts", "Gained hands-on experience with modern frontend development practices", "Participated in code reviews and learned industry best practices", "Contributed to improving website performance and accessibility"],
    technologies: ["HTML", "CSS", "JavaScript", "React.js"]
  }];
  return <div className="min-h-screen bg-dark-gradient">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto section-padding py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Nirlep Sanap</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`text-sm font-medium transition-colors hover:text-purple-400 ${activeSection === item.toLowerCase() ? "text-purple-400" : "text-gray-300"}`}>
                  {item}
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center section-padding pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="gradient-text">Full Stack Developer</span>
                <br />
                <span className="text-white">& Data Scientist</span>
                <br />
                <span className="text-gray-400 text-2xl lg:text-3xl"></span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                An energetic, honest, and self-motivated AI & Machine Learning student with a passion 
                for creating innovative web solutions and intelligent systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection("portfolio")} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg">
                View My Work
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("contact")} className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full p-1">
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                <User className="w-32 h-32 text-gray-400" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <Code className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A passionate and driven AI & Machine Learning student with hands-on experience in full-stack development
            </p>
          </div>

          {/* Technical Skills - Full Width */}
          <Card className="glass-effect mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Technical Skills</h3>
              <div className="max-w-4xl mx-auto space-y-6">
                {skills.map((skillCategory, index) => <div key={index} className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-3">{skillCategory.category}</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillCategory.items.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-500/30">
                          {skill}
                        </Badge>)}
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold gradient-text text-center">Professional Experience</h3>
            {workExperience.map((experience, index) => <Card key={index} className="glass-effect">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <Briefcase className="w-6 h-6 text-purple-400" />
                      <div>
                        <h4 className="text-xl font-semibold text-white">{experience.position}</h4>
                        <p className="text-gray-300">{experience.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-purple-400 font-medium">{experience.duration}</p>
                      <Badge variant="secondary" className="bg-blue-900/30 text-blue-300 border-blue-500/30 mt-1">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-lg font-medium text-white mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => <li key={respIndex} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {responsibility}
                        </li>)}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-medium text-white mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="text-gray-300 border-gray-600">
                          {tech}
                        </Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 section-padding bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive development and AI solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work in web development and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-500/30">
                      {project.type}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="text-gray-300 border-gray-600">
                        {tech}
                      </Badge>)}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                      <Link className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-padding bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">nirlepsanap2004@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+91 93214 48398</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FileText className="w-6 h-6 text-pink-400" />
                    <div>
                      <p className="text-white font-medium">Resume</p>
                      <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                        Download CV
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" required />
                    <Input type="email" placeholder="Your Email" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" required />
                  </div>
                  <Input placeholder="Subject" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" required />
                  <Textarea placeholder="Your Message" rows={5} className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" required />
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-padding border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Nirlep Sanap. Built with React & TypeScript
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;