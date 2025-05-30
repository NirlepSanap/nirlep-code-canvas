
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with data:', formData);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Nirlep Sanap'
      };

      await emailjs.send(
        'service_v6dz3yi',
        'template_k90rwbd',
        templateParams,
        'yE6OmDWzM7PRgteuG'
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1zaWVN3Tk_MCaVvGoXNNRGm4gTecpjrBd/view?usp=sharing', '_blank');
  };

  return (
    <section id="contact" className="py-20 section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="glass-effect animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">nirlepsanap2004@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">+91 93214 48398</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-white font-medium">Resume</p>
                    <Button 
                      variant="link" 
                      onClick={handleDownloadCV}
                      className="text-pink-400 hover:text-pink-300 p-0 hover:scale-105 transition-all duration-300"
                    >
                      Download CV
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 focus:scale-105 transition-all duration-300" 
                    required 
                  />
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email" 
                    className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 focus:scale-105 transition-all duration-300" 
                    required 
                  />
                </div>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 focus:scale-105 transition-all duration-300" 
                  required 
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  rows={5} 
                  className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 focus:scale-105 transition-all duration-300" 
                  required 
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
