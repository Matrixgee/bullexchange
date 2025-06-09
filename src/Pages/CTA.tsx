

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Bull Market Exchange today and take control of your financial future with our expert guidance and cutting-edge tools.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-red-500/25 transform hover:scale-105">
            Open Your Account
          </button>
        </div>
      </section>
  )
}

export default CTA
