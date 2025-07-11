import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Eye, Download, ChevronDown, ChevronRight } from "lucide-react";

const Portfolio = () => {
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const toggleGroup = (groupName: string) => {
    setOpenGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(name => name !== groupName)
        : [...prev, groupName]
    );
  };

  const portfolioGroups = [
    {
      id: "branding",
      title: "Branding & Identity",
      icon: "🎨",
      projects: [
        {
          id: 1,
          title: "Modern Tech Logo",
          category: "Logo Design",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
          tools: ["Illustrator", "Photoshop"],
          description: "Minimalist logo for tech startup"
        },
        {
          id: 2,
          title: "Restaurant Brand Identity",
          category: "Brand Style Guide",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
          tools: ["Illustrator", "InDesign"],
          description: "Complete brand guide for upscale restaurant"
        },
        {
          id: 3,
          title: "Executive Business Cards",
          category: "Business Cards",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
          tools: ["Photoshop", "InDesign"],
          description: "Luxury business card design"
        },
        {
          id: 4,
          title: "Corporate Stationery",
          category: "Letterheads & Stationery",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
          tools: ["InDesign", "Illustrator"],
          description: "Professional letterhead design"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing & Advertising Design",
      icon: "📢",
      projects: [
        {
          id: 5,
          title: "Event Marketing Flyer",
          category: "Posters & Flyers",
          image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop",
          tools: ["Photoshop", "Illustrator"],
          description: "Eye-catching event promotion design"
        },
        {
          id: 6,
          title: "Company Brochure",
          category: "Brochures",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
          tools: ["InDesign", "Photoshop"],
          description: "Tri-fold corporate brochure"
        },
        {
          id: 7,
          title: "Trade Show Banner",
          category: "Banners",
          image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=800&h=600&fit=crop",
          tools: ["Illustrator", "Photoshop"],
          description: "Professional roll-up banner design"
        },
        {
          id: 8,
          title: "Vehicle Wrap Design",
          category: "Vehicle Wraps",
          image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
          tools: ["Illustrator", "Photoshop"],
          description: "Full vehicle branding solution"
        }
      ]
    },
    {
      id: "digital",
      title: "Digital & Social Media Graphics",
      icon: "🌐",
      projects: [
        {
          id: 9,
          title: "Instagram Campaign",
          category: "Social Media Posts",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
          tools: ["Canva", "Photoshop"],
          description: "Cohesive Instagram post series"
        },
        {
          id: 10,
          title: "Facebook Cover Design",
          category: "Social Media Banners",
          image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
          tools: ["Photoshop", "Illustrator"],
          description: "Professional Facebook cover design"
        },
        {
          id: 11,
          title: "YouTube Thumbnail Set",
          category: "YouTube Graphics",
          image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
          tools: ["Photoshop", "After Effects"],
          description: "Click-worthy YouTube thumbnails"
        },
        {
          id: 12,
          title: "WhatsApp Status Graphics",
          category: "WhatsApp Design",
          image: "https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=800&h=600&fit=crop",
          tools: ["Canva", "Photoshop"],
          description: "Engaging WhatsApp status designs"
        }
      ]
    },
    {
      id: "product",
      title: "Product & Packaging Design",
      icon: "🛍️",
      projects: [
        {
          id: 13,
          title: "Product Label Design",
          category: "Product Labels",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
          tools: ["Illustrator", "Photoshop"],
          description: "Attractive product labeling"
        },
        {
          id: 14,
          title: "Custom Box Packaging",
          category: "Box Packaging",
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
          tools: ["Illustrator", "InDesign"],
          description: "Premium box design for retail"
        },
        {
          id: 15,
          title: "Pouch Design",
          category: "Flexible Packaging",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
          tools: ["Photoshop", "Illustrator"],
          description: "Food pouch packaging design"
        }
      ]
    },
    {
      id: "uiux",
      title: "UI/UX & Web Graphics",
      icon: "🖥️",
      projects: [
        {
          id: 16,
          title: "E-commerce Website UI",
          category: "Website UI",
          image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
          tools: ["Figma", "Photoshop"],
          description: "Modern e-commerce interface design"
        },
        {
          id: 17,
          title: "Mobile App Design",
          category: "App UI",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
          tools: ["Figma", "Sketch"],
          description: "Intuitive mobile app interface"
        },
        {
          id: 18,
          title: "Landing Page Design",
          category: "Landing Pages",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          tools: ["Figma", "Photoshop"],
          description: "High-converting landing page"
        }
      ]
    },
    {
      id: "presentation",
      title: "Presentation & Publication Design",
      icon: "🖼️",
      projects: [
        {
          id: 19,
          title: "Company Profile Design",
          category: "Company Profiles",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
          tools: ["InDesign", "Illustrator"],
          description: "Professional company profile"
        },
        {
          id: 20,
          title: "Investor Pitch Deck",
          category: "Pitch Decks",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
          tools: ["PowerPoint", "Illustrator"],
          description: "Compelling investor presentation"
        },
        {
          id: 21,
          title: "Annual Report Design",
          category: "Annual Reports",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
          tools: ["InDesign", "Photoshop"],
          description: "Corporate annual report layout"
        }
      ]
    },
    {
      id: "creative",
      title: "Creative & Custom Projects",
      icon: "🖌️",
      projects: [
        {
          id: 22,
          title: "Photo Manipulation Art",
          category: "Photo Manipulation",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
          tools: ["Photoshop", "Lightroom"],
          description: "Creative photo editing and compositing"
        },
        {
          id: 23,
          title: "Digital Illustration",
          category: "Digital Art",
          image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
          tools: ["Illustrator", "Procreate"],
          description: "Custom digital artwork"
        },
        {
          id: 24,
          title: "Infographic Design",
          category: "Infographics",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
          tools: ["Illustrator", "Canva"],
          description: "Data visualization design"
        }
      ]
    },
    {
      id: "corporate",
      title: "Corporate Design",
      icon: "💼",
      projects: [
        {
          id: 25,
          title: "Employee ID Cards",
          category: "ID Cards",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
          tools: ["Photoshop", "InDesign"],
          description: "Professional employee identification"
        },
        {
          id: 26,
          title: "Achievement Certificates",
          category: "Certificates",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop",
          tools: ["Illustrator", "InDesign"],
          description: "Custom certificate designs"
        },
        {
          id: 27,
          title: "Restaurant Menu Design",
          category: "Menus",
          image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop",
          tools: ["InDesign", "Photoshop"],
          description: "Elegant restaurant menu layout"
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
            Our <span className="text-yellow-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of creative projects and design solutions across various industries
          </p>
        </div>
      </section>

      {/* Portfolio Groups */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {portfolioGroups.map((group) => (
              <Collapsible
                key={group.id}
                open={openGroups.includes(group.id)}
                onOpenChange={() => toggleGroup(group.id)}
              >
                <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300">
                  <CollapsibleTrigger asChild>
                    <div className="p-6 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{group.icon}</div>
                          <h2 className="text-2xl font-bold text-white">
                            {group.title}
                          </h2>
                        </div>
                        <div className="text-yellow-400">
                          {openGroups.includes(group.id) ? (
                            <ChevronDown className="w-6 h-6" />
                          ) : (
                            <ChevronRight className="w-6 h-6" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.projects.map((project) => (
                          <Card key={project.id} className="group bg-black border-gray-600 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                            <div className="relative overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                  <Button size="sm" variant="secondary" className="flex-1 bg-white/20 backdrop-blur-sm text-white border-none">
                                    <Eye className="w-4 h-4 mr-2" />
                                    View
                                  </Button>
                                  <Button size="sm" className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                  </Button>
                                </div>
                              </div>
                            </div>
                            
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                                  {project.title}
                                </h3>
                                <Badge variant="outline" className="border-yellow-400 text-yellow-400 text-xs">
                                  {project.category}
                                </Badge>
                              </div>
                              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, index) => (
                                  <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600 text-xs">
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
