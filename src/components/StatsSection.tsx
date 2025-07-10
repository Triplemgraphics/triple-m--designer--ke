
import { Award, Users, Download, Star } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "5K+",
      label: "Happy Clients",
      color: "text-blue-400"
    },
    {
      icon: Download,
      value: "50K+",
      label: "Downloads",
      color: "text-green-400"
    },
    {
      icon: Award,
      value: "100+",
      label: "Design Awards",
      color: "text-yellow-400"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700/50 mb-4 group-hover:bg-slate-600/50 transition-colors duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
