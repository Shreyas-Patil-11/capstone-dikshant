import React from 'react'

function Stats() {
  return (
    <section className="py-16 px-6 bg-blue-500 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-sm opacity-80">Training Effectiveness</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-sm opacity-80">Users Protected</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-80">Security Support</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-80">Threat Patterns</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats