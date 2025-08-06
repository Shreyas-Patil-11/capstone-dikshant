import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          About DigBodh
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e14d4460-f635-489f-90fe-bacc832ad8d9.png"
              alt=""
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              DigBodh (Learn the Digital) is committed to revolutionizing cybersecurity awareness through immersive, interactive, and accessible solutions. We believe education is the first line of defense against digital threats.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1"><i className="fas fa-shield-alt"></i></div>
                <div>
                  <h4 className="font-semibold">Comprehensive Protection</h4>
                  <p className="text-gray-600 text-sm">Holistic approach covering all attack vectors</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1"><i className="fas fa-graduation-cap"></i></div>
                <div>
                  <h4 className="font-semibold">Continuous Learning</h4>
                  <p className="text-gray-600 text-sm">Adaptive content that evolves with threats</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1"><i className="fas fa-users"></i></div>
                <div>
                  <h4 className="font-semibold">Community Driven</h4>
                  <p className="text-gray-600 text-sm">Powered by collective security intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About