
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@triplemgraphics.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+1 (555) 123-4567",
      description: "Quick questions & updates"
    },
    {
      icon: Facebook,
      title: "Facebook",
      info: "/TripleMgraphics",
      description: "Message us on social media"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                        <SelectValue placeholder="Service Interested In" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="logo">Logo Design</SelectItem>
                        <SelectItem value="social">Social Media Content</SelectItem>
                        <SelectItem value="brochures">Brochures & Banners</SelectItem>
                        <SelectItem value="company">Company Profiles</SelectItem>
                        <SelectItem value="photo">Photo Editing & Mockups</SelectItem>
                        <SelectItem value="presentations">Presentations & Branding</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 min-h-32"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're here to help bring your creative vision to life. Whether you need a complete 
                  brand identity, social media graphics, or any other design service, we'd love to 
                  hear about your project.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-black border-gray-700 hover:border-yellow-500 transition-colors">
                    <CardContent className="p-6 text-center">
                      <method.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                      <p className="text-yellow-400 font-medium mb-1">{method.info}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Location */}
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
                      <p className="text-gray-300">
                        123 Creative Street<br />
                        Design District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Book a free consultation call and let's discuss how we can help elevate your brand
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
            Book Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
