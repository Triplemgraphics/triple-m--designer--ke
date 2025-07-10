
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Crown } from "lucide-react";

interface Design {
  id: string;
  title: string;
  category: string;
  image: string;
  premium: boolean;
  tags: string[];
}

interface DesignCardProps {
  design: Design;
  onDownload: () => void;
}

export const DesignCard = ({ design, onDownload }: DesignCardProps) => {
  return (
    <Card className="group bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              size="sm"
              onClick={onDownload}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
        {design.premium && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-none">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
            {design.title}
          </h3>
          <Badge variant="outline" className="border-purple-400 text-purple-400">
            {design.category}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {design.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-slate-700 text-gray-300 hover:bg-slate-600 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
