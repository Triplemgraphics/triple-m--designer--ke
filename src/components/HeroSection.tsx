
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/fadf33c6-eb1f-4d53-8603-c7653121fbb7.png"
          alt="TripleMgraphics Billboard Design"
          className="w-full h-full object-cover object-center opacity-40"
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
  );
};
