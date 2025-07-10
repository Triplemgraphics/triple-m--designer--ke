
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Download } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "Logos", "Flyers", "Social Media", "Branding", "Presentations"];
  
  const projects = [
    {
      id: 1,
      title: "Modern Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tools: ["Photoshop", "Illustrator"],
      description: "Complete brand identity package for a tech startup"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "Social Media", 
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tools: ["Figma", "After Effects"],
      description: "Engaging social media templates for digital marketing"
    },
    {
      id: 3,
      title: "Corporate Logo Design",
      category: "Logos",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
      tools: ["Illustrator", "Photoshop"],
      description: "Professional logo design for financial services company"
    },
    {
      id: 4,
      title: "Event Flyer Design",
      category: "Flyers",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      tools: ["InDesign", "Photoshop"],
      description: "Eye-catching flyer design for music festival"
    },
    {
      id: 5,
      title: "Business Presentation",
      category: "Presentations",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      tools: ["PowerPoint", "Illustrator"],
      description: "Professional presentation template for corporate use"
    },
    {
      id: 6,
      title: "Restaurant Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tools: ["Illustrator", "InDesign"],
      description: "Complete branding package for upscale restaurant"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            Explore our collection of creative projects and design solutions
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                    : "bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
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
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <Badge className="bg-yellow-500 text-black">{project.category}</Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
