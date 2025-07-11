
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
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
  );
};
