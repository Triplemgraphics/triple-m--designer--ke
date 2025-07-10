
import { Link } from "react-router-dom";
import { Facebook, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <img 
              src="/lovable-uploads/34d12f96-0f11-484f-b301-611bd1579402.png" 
              alt="TripleMgraphics" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting exceptional visual experiences through innovative design. 
              We create premium graphics and branding solutions that elevate your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "Portfolio", "Services", "Blog", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2 text-yellow-400" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2 text-yellow-400" />
                hello@triplemgraphics.com
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Facebook className="h-4 w-4 mr-2 text-yellow-400" />
                /TripleMgraphics
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for design tips and updates.
            </p>
            <div className="flex">
              <Input 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white rounded-r-none"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TripleMgraphics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
