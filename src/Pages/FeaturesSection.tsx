import { BarChart3, DollarSign, Shield, Target } from "lucide-react";
import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time market data and sophisticated analysis tools to make informed decisions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Trading",
      description: "Bank-level security with multi-factor authentication and encrypted transactions."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Low Fees",
      description: "Competitive pricing with transparent fee structure and no hidden costs."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Professional investment advisors to help you achieve your financial goals."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Bull Market Exchange</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of investing with our comprehensive platform designed for both beginners and professionals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-red-500/10 transition-all duration-300 border border-gray-700 hover:border-red-500/30 h-full"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl w-fit mb-6"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring" }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection
