import { motion } from 'framer-motion'
import { CheckCircle, Star } from 'lucide-react';

const InvestmentPlansSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$100",
      period: "minimum",
      features: ["Basic portfolio tracking", "Market insights", "Email support", "Mobile app access"],
      recommended: false,
      returns: "8-12% annually"
    },
    {
      name: "Professional",
      price: "$1,000",
      period: "minimum",
      features: ["Advanced analytics", "Priority support", "Custom strategies", "Dedicated advisor", "Tax optimization"],
      recommended: true,
      returns: "12-18% annually"
    },
    {
      name: "Elite",
      price: "$10,000",
      period: "minimum",
      features: ["Premium research", "24/7 support", "Personalized portfolio", "Direct market access", "Exclusive opportunities", "Wealth management"],
      recommended: false,
      returns: "15-25% annually"
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Investment Plan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan that matches your investment goals and experience level.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border transition-all duration-300 ${
                plan.recommended 
                  ? 'border-red-500 scale-105 shadow-red-500/20' 
                  : 'border-gray-700 hover:border-red-500/30'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: plan.recommended ? 1.05 : 1.05, y: -5 }}
            >
              {plan.recommended && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Star className="w-4 h-4" />
                  <span>Most Popular</span>
                </motion.div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-red-400 mb-1">{plan.price}</div>
                <div className="text-gray-400 text-sm">{plan.period}</div>
                <div className="mt-4 px-4 py-2 bg-red-900/20 rounded-lg">
                  <span className="text-red-300 font-semibold">Expected: {plan.returns}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center space-x-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
                    : 'border border-red-500 text-red-400 hover:bg-red-500 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default InvestmentPlansSection
