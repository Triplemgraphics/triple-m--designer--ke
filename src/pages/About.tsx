
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your brand, goals, and target audience through detailed consultation."
    },
    {
      step: "02", 
      title: "Concept",
      description: "Our team develops initial concepts and creative directions based on your requirements."
    },
    {
      step: "03",
      title: "Design",
      description: "We craft your visual identity with attention to detail and brand consistency."
    },
    {
      step: "04",
      title: "Refinement",
      description: "We refine the design based on your feedback until it perfectly matches your vision."
    },
    {
      step: "05",
      title: "Delivery",
      description: "Final files are delivered in all required formats with comprehensive brand guidelines."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-400">TripleMgraphics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate designers creating exceptional visual experiences that elevate brands
          </p>
        </div>
      </section>

      {/* Personal Intro */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="Our Team"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet the Creative Mind Behind <span className="text-yellow-400">TripleMgraphics</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 8 years of experience in graphic design and brand identity, we specialize in creating 
                visual solutions that not only look stunning but also drive results. Our passion lies in 
                transforming ideas into compelling visual stories that resonate with audiences.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We believe that great design is not just about aesthetics—it's about communication, 
                emotion, and building lasting connections between brands and their customers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">8+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-black border-yellow-500">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with exceptional visual design that communicates their unique 
                  story and connects them with their audience in meaningful ways.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-yellow-500">
              <CardContent className="p-8 text-center">
                <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the go-to creative partner for businesses seeking innovative design solutions 
                  that drive growth and leave lasting impressions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Creative <span className="text-yellow-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to completion, we follow a proven process that ensures exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Awards & <span className="text-yellow-400">Recognition</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-700">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Design Excellence Award</h3>
                <p className="text-gray-300 text-sm">Graphic Design Association 2023</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-gray-700">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Client Choice Award</h3>
                <p className="text-gray-300 text-sm">Top Rated Designer 2023</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-gray-700">
              <CardContent className="p-8 text-center">
                <Badge className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  #1
                </Badge>
                <h3 className="text-xl font-semibold text-white mb-2">Regional Designer</h3>
                <p className="text-gray-300 text-sm">Creative Industry Awards 2022</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
