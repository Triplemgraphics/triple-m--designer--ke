
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, ArrowRight } from "lucide-react";
import { EmailSubscriptionModal } from "@/components/EmailSubscriptionModal";

export const PortfolioPreviewSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  const portfolioPreview = [
    {
      id: "1",
      title: "Modern Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
    },
    {
      id: "2",
      title: "Social Media Campaign",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      id: "3",
      title: "Corporate Presentation",
      category: "Presentations",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
    },
    {
      id: "4",
      title: "Event Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    },
    {
      id: "5",
      title: "Product Mockups",
      category: "Mockups",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      id: "6",
      title: "Logo Collection",
      category: "Logos",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop"
    }
  ];

  const handleDownload = (designId: string) => {
    setSelectedDesign(designId);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured <span className="text-yellow-400">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of our recent creative projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioPreview.map((item) => (
              <Card key={item.id} className="group bg-black border-gray-700 hover:border-yellow-500 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="flex-1 bg-white/20 backdrop-blur-sm text-white border-none">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" onClick={() => handleDownload(item.id)} className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-3">
                View Full Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
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
    </>
  );
};
