import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react';


const HeroSection = () => {
    return (
        <section className="relative overflow-hidden py-20 md:py-32 mt-20 ">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-black/50" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-red-400 bg-clip-text text-transparent leading-tight"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Invest with Confidence
                        <br />
                        <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            Trade with Power
                        </span>
                    </motion.div>
                    <motion.p
                        className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Your future is secure with Bull Market Exchange — fully insured, data-encrypted, and backed by industry-leading investment professionals.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.button
                            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-red-500/25 flex items-center justify-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Start Investing</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </section>
    );
};

export default HeroSection
