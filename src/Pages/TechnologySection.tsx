import { Bell, Globe, Smartphone, Zap } from "lucide-react";
import { motion } from 'framer-motion'

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile First",
      description: "Trade anywhere with our award-winning mobile app"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our optimized infrastructure"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Markets",
      description: "Access markets worldwide from a single platform"
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Smart Alerts",
      description: "AI-powered notifications for market opportunities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-900/5 via-black to-red-900/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Cutting-Edge <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform is built with the latest technology to provide you with the best trading experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="text-red-400 mb-6 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring" }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection
