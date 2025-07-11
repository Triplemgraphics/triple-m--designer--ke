import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Share2, FileText, Building, Camera, Presentation, Star, Users, Award, Clock, ChevronLeft, ChevronRight, Eye, Download, ArrowRight } from "lucide-react";
import { EmailSubscriptionModal } from "@/components/EmailSubscriptionModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      review: "TripleMgraphics transformed our brand identity completely. The attention to detail and creative vision exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "Urban Restaurant Group",
      review: "Professional, creative, and delivered on time. Our new branding has helped increase our customer engagement by 40%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward Boutique",
      review: "The social media templates they created for us have been game-changing. Our online presence has never looked better.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

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

  const handleDownload = (designId: string) => {
    setSelectedDesign(designId);
    setIsModalOpen(true);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/fadf33c6-eb1f-4d53-8603-c7653121fbb7.png"
            alt="TripleMgraphics Billboard Design"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Design That <span className="text-yellow-400">Speaks</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Creative branding, visuals, and digital identity that stand out
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-4 text-lg font-semibold">
                View Portfolio
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-semibold">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
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

      {/* Portfolio Preview */}
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

      {/* Testimonials Carousel */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our <span className="text-yellow-400">Clients Say</span>
            </h2>
          </div>

          <div className="relative">
            <Card className="bg-black border-yellow-500">
              <CardContent className="p-8 text-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>
                <div>
                  <div className="text-xl font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-yellow-400">{testimonials[currentTestimonial].company}</div>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={prevTestimonial}
              size="icon"
              variant="outline"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={nextTestimonial}
              size="icon"
              variant="outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

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
