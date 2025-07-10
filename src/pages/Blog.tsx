
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const categories = ["All", "Tips", "Branding", "Tools", "Behind the Scenes", "Client Stories"];
  
  const posts = [
    {
      id: 1,
      title: "10 Essential Design Principles Every Brand Should Know",
      excerpt: "Discover the fundamental design principles that make brands memorable and effective in today's competitive market.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
      category: "Tips",
      author: "TripleMgraphics Team",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Power of Color Psychology in Branding",
      excerpt: "Learn how different colors evoke emotions and influence customer behavior in your brand strategy.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=400&fit=crop",
      category: "Branding",
      author: "TripleMgraphics Team",
      date: "Dec 12, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Behind the Scenes: Creating a Complete Brand Identity",
      excerpt: "Take a look at our creative process as we develop a comprehensive brand identity from concept to completion.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      category: "Behind the Scenes",
      author: "TripleMgraphics Team",
      date: "Dec 10, 2024",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Top 5 Design Tools We Use Daily",
      excerpt: "Discover the professional design tools and software that help us create stunning visual content for our clients.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      category: "Tools",
      author: "TripleMgraphics Team",
      date: "Dec 8, 2024",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Client Success Story: Rebranding a Tech Startup",
      excerpt: "How we helped a tech startup transform their brand identity and increase their market presence by 300%.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
      category: "Client Stories",
      author: "TripleMgraphics Team",
      date: "Dec 5, 2024",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Typography Trends That Will Dominate 2025",
      excerpt: "Stay ahead of the curve with these emerging typography trends that will shape design in the coming year.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop",
      category: "Tips",
      author: "TripleMgraphics Team",
      date: "Dec 3, 2024",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Design <span className="text-yellow-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tips, insights, and inspiration from the world of graphic design
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-2 rounded-full transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="bg-gray-900 border-gray-700 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="bg-yellow-500 text-black mb-4">Featured</Badge>
                  <h2 className="text-3xl font-bold text-white mb-4">{posts[0].title}</h2>
                  <p className="text-gray-300 mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{posts[0].author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{posts[0].date}</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-gray-400 text-xs mb-4">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
