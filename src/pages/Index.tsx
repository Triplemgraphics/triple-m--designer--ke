
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioPreviewSection } from "@/components/PortfolioPreviewSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, Users, ArrowRight } from "lucide-react";

const Index = () => {
  const blogPosts = [
    {
      title: "10 Essential Design Principles Every Brand Should Know",
      excerpt: "Discover the fundamental design principles that make brands memorable and effective.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      date: "Dec 15, 2024"
    },
    {
      title: "The Power of Color Psychology in Branding",
      excerpt: "Learn how different colors evoke emotions and influence customer behavior.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=200&fit=crop",
      date: "Dec 12, 2024"
    },
    {
      title: "Typography Trends That Will Dominate 2025",
      excerpt: "Stay ahead of the curve with these emerging typography trends.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop",
      date: "Dec 10, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <HeroSection />
      <ServicesSection />
      <PortfolioPreviewSection />

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=500&fit=crop"
                alt="Why choose us"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Why Choose <span className="text-yellow-400">TripleMgraphics?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">8+ Years Experience</h3>
                    <p className="text-gray-300">Proven track record in creative design</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Badge className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    20%
                  </Badge>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Discount for New Clients</h3>
                    <p className="text-gray-300">Special pricing for first-time customers</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Fast Turnaround</h3>
                    <p className="text-gray-300">Quick delivery without compromising quality</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Custom Solutions</h3>
                    <p className="text-gray-300">Tailored designs for your unique needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Blog Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Latest from Our <span className="text-yellow-400">Blog</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Design tips, insights, and inspiration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-yellow-400 text-sm mb-2">{post.date}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3">
                Read More on the Blog
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Book a free design consultation today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
              Book a Free Design Consult
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
