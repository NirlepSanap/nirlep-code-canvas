
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data/servicesData";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive development and AI solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="glass-effect hover:scale-105 transition-all duration-500 animate-fade-in group hover:shadow-xl hover:shadow-purple-500/20" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-8 text-center">
                <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
