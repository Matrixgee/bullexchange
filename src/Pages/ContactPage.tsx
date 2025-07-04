import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen mt-20">
      <section className="py-20">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-base md:text-xl text-gray-300 leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Have questions about investing or need support? We're here to help you succeed.
              Reach out to our team of experts today.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors">
                    <option>General Inquiry</option>
                    <option>Investment Advice</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-red-500/25 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Get in touch with us through any of these channels. Our team is available 24/7 to assist you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: 'Email',
                    info: 'support@bullmarketexchange.com',
                    subtitle: "We'll respond within 24 hours"
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Phone',
                    info: '07546457566',
                    subtitle: 'Available 24/7'
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: 'Office',
                    info: 'Atlanta Georgia, USA, postal code 39901',
                    subtitle: 'Mon-Fri, 9AM-6PM EST'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-red-500/30 transition-colors group"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{contact.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{contact.title}</h3>
                      <p className="text-red-400 font-medium">{contact.info}</p>
                      <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-red-400">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-red-400">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Support Hotline</span>
                      <span className="text-red-400">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl font-bold text-white mb-4" variants={fadeInUp}>
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Find quick answers to common questions about Bull Market Exchange and our services.
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I get started with Bull Market Exchange?",
                answer:
                  "Getting started is easy! Simply click the 'Get Started' button, complete our quick registration process, and fund your account. Our team will guide you through your first investment.",
              },
              {
                question: "What is the minimum investment amount?",
                answer:
                  "You can start investing with as little as $100. We believe everyone should have access to professional investment management regardless of their initial capital.",
              },
              {
                question: "Are my investments insured?",
                answer:
                  "Yes, all investments are protected by FDIC insurance up to $250,000 per account. We also use additional private insurance for amounts exceeding FDIC limits.",
              },
              {
                question: "What fees does Bull Market Exchange charge?",
                answer:
                  "We operate on a transparent fee structure with no hidden costs. Management fees start at 0.25% annually, with volume discounts available for larger portfolios.",
              },
              {
                question: "Can I withdraw my money anytime?",
                answer:
                  "Yes, you have full access to your funds. Most withdrawals are processed within 1-2 business days, ensuring you have liquidity when you need it.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default ContactPage
