function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
    >
      <video autoPlay muted loop className="video-background absolute inset-0 w-full h-full object-cover opacity-70 -z-10">
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-network-connection-31237-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-70" />
      <div
        className="hero-content container mx-auto text-center z-10"
        data-aos="fade-up" data-aos-duration="1000"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Secure Your Digital World
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          DigBodh empowers organizations and individuals with cutting-edge cybersecurity awareness solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#solutions"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-white animate-bounce inline-block">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
export default Hero