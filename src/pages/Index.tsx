import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Mail, Star, Users, Award, Palette } from "lucide-react";
import { EmailSubscriptionModal } from "@/components/EmailSubscriptionModal";
import { DesignCard } from "@/components/DesignCard";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  const designs = [
    {
      id: "1",
      title: "Modern Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      premium: true,
      tags: ["Logo", "Branding", "Modern"]
    },
    {
      id: "2", 
      title: "Creative Poster Design",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
      premium: false,
      tags: ["Poster", "Creative", "Typography"]
    },
    {
      id: "3",
      title: "Web UI Kit",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      premium: true,
      tags: ["UI", "Web", "Components"]
    },
    {
      id: "4",
      title: "Social Media Templates",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      premium: true,
      tags: ["Social", "Templates", "Marketing"]
    },
    {
      id: "5",
      title: "Minimalist Business Card",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      premium: false,
      tags: ["Business Card", "Minimalist", "Print"]
    },
    {
      id: "6",
      title: "App Icon Collection",
      category: "Icons",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      premium: true,
      tags: ["Icons", "Mobile", "Collection"]
    }
  ];

  const handleDownload = (designId: string) => {
    setSelectedDesign(designId);
    setIsModalOpen(true);
  };

  const categories = ["All", "Branding", "Print Design", "UI/UX", "Social Media", "Icons"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDesigns = activeCategory === "All" 
    ? designs 
    : designs.filter(design => design.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <HeroSection />
      
      <StatsSection />

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-yellow-400">Designs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our collection of premium design resources and templates
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                    : "bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Design Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                onDownload={() => handleDownload(design.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Download Premium Designs?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Subscribe to get access to our entire collection of high-quality design resources
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Subscribe Now
          </Button>
        </div>
      </section>

      <EmailSubscriptionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDesign(null);
        }}
        designId={selectedDesign}
      />
    </div>
  );
};

export default Index;
