import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp } from 'lucide-react';

const MarketInsightsSection = () => {
  const insights = [
    {
      title: "Tech Stocks Rally",
      change: "+5.2%",
      trend: "up",
      description: "Technology sector shows strong momentum with AI and cloud computing leading gains."
    },
    {
      title: "Energy Sector",
      change: "-2.1%",
      trend: "down", 
      description: "Oil prices decline affects energy stocks, creating potential buying opportunities."
    },
    {
      title: "Gold & Precious Metals",
      change: "+1.8%",
      trend: "up",
      description: "Safe haven assets gain as investors hedge against market volatility."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Today's <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Market Insights</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed with real-time market analysis and expert insights to make better investment decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-red-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{insight.title}</h3>
                <div className={`flex items-center space-x-1 ${
                  insight.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {insight.trend === 'up' ? 
                    <TrendingUp className="w-5 h-5" /> : 
                    <TrendingDown className="w-5 h-5" />
                  }
                  <span className="font-bold">{insight.change}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button 
            className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Market Analysis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketInsightsSection
