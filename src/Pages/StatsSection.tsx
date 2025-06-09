import { motion } from 'framer-motion'

const StatsSection = () => {
  const stats = [
    { value: "$2.5B+", label: "Assets Under Management" },
    { value: "50K+", label: "Active Investors" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-red-900/10 via-black/50 to-red-900/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-red-400 mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection
