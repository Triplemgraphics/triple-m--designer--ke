
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Share2, FileText, Building, Camera, Presentation } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Professional logo design that captures your brand's essence and makes a lasting impression.",
      samples: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop"
      ],
      price: "Starting at $299"
    },
    {
      icon: Share2,
      title: "Social Media Content",
      description: "Eye-catching social media graphics that boost engagement and grow your online presence.",
      samples: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
      ],
      price: "Starting at $199"
    },
    {
      icon: FileText,
      title: "Brochures & Banners",
      description: "Professional print materials that communicate your message effectively and beautifully.",
      samples: [
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
      ],
      price: "Starting at $149"
    },
    {
      icon: Building,
      title: "Company Profiles",
      description: "Comprehensive company profile designs that showcase your business professionally.",
      samples: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
      ],
      price: "Starting at $399"
    },
    {
      icon: Camera,
      title: "Photo Editing & Mockups",
      description: "Professional photo editing and realistic mockups to showcase your products perfectly.",
      samples: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
      ],
      price: "Starting at $99"
    },
    {
      icon: Presentation,
      title: "Presentations & Branding Kits",
      description: "Complete presentation templates and branding kits for consistent brand communication.",
      samples: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
      ],
      price: "Starting at $249"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional design services tailored to elevate your brand and business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                      <p className="text-yellow-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  {/* Sample Images */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.samples.map((sample, idx) => (
                      <img
                        key={idx}
                        src={sample}
                        alt={`${service.title} sample`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold">
                    Get This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Let's discuss your unique design needs and create something amazing together
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
            Request Custom Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
