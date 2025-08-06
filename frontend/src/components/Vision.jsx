import React from 'react'

function Vision() {
  return (
    <section id="vision" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Our Vision
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="bg-blue-500 p-8 rounded-xl text-white" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-4">Digital Resilience for All</h3>
              <p className="mb-6">
                We envision a world where every individual and organization has the knowledge and tools to navigate the digital landscape safely and confidently.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-white mr-4 mt-1"><i className="fas fa-globe"></i></div>
                  <div>
                    <h4 className="font-semibold">Global Impact</h4>
                    <p className="text-blue-100 text-sm">Making cybersecurity education accessible worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4">Future Goals</h3>
              <p className="text-gray-600 mb-6">
                By 2025, we aim to train 1 million users, reduce cyber incidents by 30% among our clients, and establish partnerships with leading educational institutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-4 mt-1"><i className="fas fa-rocket"></i></div>
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-gray-600 text-sm">Pioneering new learning technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision