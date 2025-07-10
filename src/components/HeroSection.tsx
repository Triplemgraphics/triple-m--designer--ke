
import { Button } from "@/components/ui/button";
import { ArrowDown, Palette, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Premium Design Studio</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
          Triple<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">M</span>
          <span className="text-purple-400">graphics</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Crafting exceptional visual experiences through innovative design. 
          Discover premium graphics, templates, and design resources that elevate your brand.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Palette className="mr-2 h-5 w-5" />
            Explore Portfolio
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            View Process
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 text-purple-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};
