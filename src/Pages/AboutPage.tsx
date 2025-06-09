import { Award, Shield, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "We prioritize the security of your investments with state-of-the-art protection and transparent practices."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly evolving our platform with the latest technology to provide you with the best investment experience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Your success is our success. We're committed to providing exceptional service and support."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for excellence in everything we do, from our platform to our customer relationships."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen mt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              About Bull Market Exchange
            </h1>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              Founded with the vision to democratize investing, Bull Market Exchange has been empowering investors 
              for over 15 years with innovative technology, expert guidance, and unwavering commitment to your financial success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/10 via-black/50 to-red-900/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Bull Market Exchange was born from a simple yet powerful idea: everyone deserves access to professional-grade investment tools and guidance, regardless of their experience level or portfolio size.
                </p>
                <p>
                  What started as a small team of financial experts and technology innovators has grown into a trusted platform serving over 50,000 investors worldwide, managing more than $2.5 billion in assets.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in investment technology while maintaining our core commitment to transparency, security, and exceptional customer service.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Founded", value: "2010" },
                  { label: "Investors", value: "50K+" },
                  { label: "Assets Managed", value: "$2.5B" },
                  { label: "Years Experience", value: "15+" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-red-400 mb-2">{item.value}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community of investors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-red-500/30 text-center">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the experienced professionals who lead Bull Market Exchange with passion, expertise, and vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", experience: "Former Goldman Sachs VP" },
              { name: "Michael Chen", role: "CTO", experience: "Ex-Google Senior Engineer" },
              { name: "David Rodriguez", role: "Head of Investment", experience: "20+ Years Wall Street" }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 text-center group hover:border-red-500/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-red-400 mb-1">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
