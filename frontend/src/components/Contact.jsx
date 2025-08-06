import React, { useRef, useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    solution: "",
    message: "",
  });
  const formRef = useRef();
  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you soon!");
    setForm({ name: "", email: "", solution: "", message: "" });
    formRef.current.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Organization?</h3>
            <p className="text-gray-600 mb-8">
              Contact us to learn how DigBodh can transform your cybersecurity awareness program with our innovative solutions.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1 text-xl"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a href="mailto:hello@digbodh.com" className="text-gray-600 hover:text-blue-500">hello@digbodh.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1 text-xl"><i className="fas fa-phone-alt"></i></div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a href="tel:+11234567890" className="text-gray-600 hover:text-blue-500">+1 (123) 456-7890</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1 text-xl"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-gray-600">Cyber Security Park, Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="bg-gray-50 p-8 rounded-xl shadow-sm" ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input id="name" type="text" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input id="email" type="email" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.email} onChange={handleChange} required />
              </div>
              <div className="mb-6">
                <label htmlFor="solution" className="block text-gray-700 mb-2">Interested In</label>
                <select id="solution" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.solution} onChange={handleChange} required>
                  <option value="">Select Solution</option>
                  <option value="vr">VR Security Training</option>
                  <option value="ai">AI Security Assistant</option>
                  <option value="forum">Security Knowledge Hub</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Contact