
import { Button } from "@/components/ui/button";
import { ArrowDown, Palette, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-300 text-sm font-medium">Premium Design Studio</span>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/34d12f96-0f11-484f-b301-611bd1579402.png" 
            alt="TripleMgraphics Logo" 
            className="w-48 h-48 mx-auto mb-6 object-contain"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
          Triple<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">M</span>
          <span className="text-yellow-400">graphics</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Crafting exceptional visual experiences through innovative design. 
          Discover premium graphics, templates, and design resources that elevate your brand.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
          >
            <Palette className="mr-2 h-5 w-5" />
            Explore Portfolio
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            View Process
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 text-yellow-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};
