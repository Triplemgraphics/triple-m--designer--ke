
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Share2, FileText, Building, Camera, Presentation } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Professional logos that capture your brand essence"
    },
    {
      icon: Share2,
      title: "Social Media Content",
      description: "Eye-catching graphics for all platforms"
    },
    {
      icon: FileText,
      title: "Brochures & Banners",
      description: "Print materials that make an impact"
    },
    {
      icon: Building,
      title: "Company Profiles",
      description: "Professional business presentations"
    },
    {
      icon: Camera,
      title: "Photo Editing & Mockups",
      description: "Realistic product presentations"
    },
    {
      icon: Presentation,
      title: "Presentations & Branding",
      description: "Complete branding solutions"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive design solutions for all your creative needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400 transition-colors">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
