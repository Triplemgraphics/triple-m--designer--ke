
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";

const Services = () => {
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const toggleGroup = (groupName: string) => {
    setOpenGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(name => name !== groupName)
        : [...prev, groupName]
    );
  };

  const serviceGroups = [
    {
      id: "branding",
      title: "Branding & Identity",
      description: "Build a strong brand foundation that creates lasting impressions and drives customer loyalty. A cohesive brand identity is essential for establishing trust, differentiating from competitors, and creating memorable customer experiences that translate into business growth.",
      icon: "🎨",
      services: [
        {
          name: "Logo Design",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
          description: "Professional logos that capture your brand essence"
        },
        {
          name: "Brand Style Guide",
          image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
          description: "Comprehensive brand guidelines for consistency"
        },
        {
          name: "Business Cards",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
          description: "Memorable business cards that make lasting impressions"
        },
        {
          name: "Letterheads & Stationery",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
          description: "Professional stationery for corporate communication"
        },
        {
          name: "Brand Identity Packages",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
          description: "Complete brand identity solutions"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing & Advertising Design",
      description: "Capture attention and drive action with compelling marketing materials. Effective advertising design increases brand visibility, generates leads, and converts prospects into customers by communicating your value proposition clearly and persuasively.",
      icon: "📢",
      services: [
        {
          name: "Posters & Flyers",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
          description: "Eye-catching promotional materials"
        },
        {
          name: "Brochures (Bi-fold, Tri-fold)",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
          description: "Informative brochures that sell your services"
        },
        {
          name: "Banners (Roll-up, Web, Street)",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          description: "Professional banners for all occasions"
        },
        {
          name: "Billboards",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
          description: "Large-scale outdoor advertising solutions"
        },
        {
          name: "Vehicle Wrap Designs",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
          description: "Mobile advertising that travels with you"
        },
        {
          name: "Print Ads & Magazine Layouts",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
          description: "Professional print advertising layouts"
        }
      ]
    },
    {
      id: "digital",
      title: "Digital & Social Media Graphics",
      description: "Dominate social media with engaging visual content. Consistent, high-quality social media graphics increase engagement rates, build brand awareness, and drive traffic to your business while establishing your presence in the digital marketplace.",
      icon: "🌐",
      services: [
        {
          name: "Social Media Post Design",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
          description: "Engaging posts for Instagram, Facebook, X, TikTok"
        },
        {
          name: "Social Media Banners & Covers",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
          description: "Professional profile headers and covers"
        },
        {
          name: "Story Highlights & Reels Thumbnails",
          image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop",
          description: "Branded story highlights and video thumbnails"
        },
        {
          name: "YouTube Thumbnails & Channel Art",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          description: "Click-worthy YouTube thumbnails and channel branding"
        },
        {
          name: "WhatsApp Posters & Status Designs",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
          description: "WhatsApp marketing materials and status graphics"
        }
      ]
    },
    {
      id: "product",
      title: "Product & Packaging Design",
      description: "Make your products stand out on shelves and online. Professional packaging design influences purchasing decisions, communicates product benefits, and creates brand recognition that drives repeat sales and customer loyalty.",
      icon: "🛍️",
      services: [
        {
          name: "Product Labels",
          image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
          description: "Attractive product labels that sell"
        },
        {
          name: "Box Packaging",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
          description: "Custom box designs for your products"
        },
        {
          name: "Pouch Design",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
          description: "Flexible pouch packaging solutions"
        },
        {
          name: "Bottle Design",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
          description: "Eye-catching bottle and container designs"
        },
        {
          name: "Mockup Creation",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
          description: "Realistic product mockups for presentations"
        }
      ]
    },
    {
      id: "uiux",
      title: "UI/UX & Web Graphics",
      description: "Create exceptional digital experiences that convert visitors into customers. Professional UI/UX design improves user satisfaction, reduces bounce rates, and increases conversion rates by making your digital platforms intuitive and engaging.",
      icon: "🖥️",
      services: [
        {
          name: "Website UI Mockups",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
          description: "Beautiful website interface designs"
        },
        {
          name: "App UI Design",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
          description: "Mobile and web app user interfaces"
        },
        {
          name: "Landing Page Graphics",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          description: "Conversion-focused landing page designs"
        },
        {
          name: "Web Banners",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
          description: "Web advertising banners that get clicks"
        },
        {
          name: "Icon Design",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
          description: "Custom icons for apps and websites"
        },
        {
          name: "Wireframes & Prototypes",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
          description: "User experience planning and prototyping"
        }
      ]
    },
    {
      id: "presentation",
      title: "Presentation & Publication Design",
      description: "Communicate professionally with polished presentations and publications. Well-designed presentations and documents establish credibility, enhance message delivery, and help secure deals by presenting information in a clear, professional manner.",
      icon: "🖼️",
      services: [
        {
          name: "Company Profiles",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
          description: "Professional company profile designs"
        },
        {
          name: "Pitch Decks & PowerPoint Slides",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
          description: "Compelling pitch decks that win deals"
        },
        {
          name: "eBooks & PDFs",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
          description: "Professional digital publication layouts"
        },
        {
          name: "Magazine & Book Layouts",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
          description: "Print publication design and layout"
        },
        {
          name: "Annual Reports",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          description: "Corporate annual report design"
        },
        {
          name: "Newsletters",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
          description: "Engaging newsletter templates"
        }
      ]
    },
    {
      id: "creative",
      title: "Creative & Custom Projects",
      description: "Stand out with unique creative solutions tailored to your brand. Custom creative work differentiates your business, creates memorable brand experiences, and provides unique marketing assets that competitors can't replicate.",
      icon: "🖌️",
      services: [
        {
          name: "Photo Manipulation",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
          description: "Professional photo editing and manipulation"
        },
        {
          name: "Digital Illustrations",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
          description: "Custom digital artwork and illustrations"
        },
        {
          name: "Vector Art",
          image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
          description: "Scalable vector graphics and artwork"
        },
        {
          name: "Typography Art",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
          description: "Custom typography and lettering designs"
        },
        {
          name: "Infographics",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          description: "Data visualization and infographic design"
        },
        {
          name: "T-shirt & Merchandise Designs",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
          description: "Custom merchandise and apparel designs"
        }
      ]
    },
    {
      id: "corporate",
      title: "Corporate Design",
      description: "Maintain professional standards with corporate design solutions. Consistent corporate materials reinforce brand credibility, streamline business operations, and ensure all communications reflect your company's professional image and values.",
      icon: "💼",
      services: [
        {
          name: "ID Cards",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
          description: "Professional employee ID card designs"
        },
        {
          name: "Certificates",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
          description: "Custom certificate and award designs"
        },
        {
          name: "Menus",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
          description: "Restaurant and cafe menu designs"
        },
        {
          name: "Calendars",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
          description: "Custom calendar designs for business"
        },
        {
          name: "Envelopes & Folders",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
          description: "Branded envelopes and presentation folders"
        }
      ]
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
            Professional design services tailored to elevate your brand and business success
          </p>
        </div>
      </section>

      {/* Services Groups */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {serviceGroups.map((group) => (
              <Collapsible
                key={group.id}
                open={openGroups.includes(group.id)}
                onOpenChange={() => toggleGroup(group.id)}
              >
                <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300">
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{group.icon}</div>
                          <div className="text-left">
                            <CardTitle className="text-2xl text-white mb-2">
                              {group.title}
                            </CardTitle>
                            <p className="text-gray-300 text-sm max-w-4xl">
                              {group.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-yellow-400">
                          {openGroups.includes(group.id) ? (
                            <ChevronDown className="w-6 h-6" />
                          ) : (
                            <ChevronRight className="w-6 h-6" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.services.map((service, index) => (
                          <Card key={index} className="bg-black border-gray-600 hover:border-yellow-400 transition-all duration-300">
                            <div className="relative overflow-hidden">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                              />
                            </div>
                            <CardContent className="p-4">
                              <h4 className="text-lg font-semibold text-white mb-2">
                                {service.name}
                              </h4>
                              <p className="text-gray-300 text-sm mb-4">
                                {service.description}
                              </p>
                              <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold">
                                Get Quote
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
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
