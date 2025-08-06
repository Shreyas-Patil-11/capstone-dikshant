import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DigBodh</h3>
            <p className="text-gray-400">Empowering digital security through innovative awareness solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">VR Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">AI Assistant</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Security Forum</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
            </div>
            <p className="text-gray-400 text-sm">Subscribe for updates</p>
            <div className="flex mt-2">
              <input type="email" placeholder="Your email" className="px-3 py-2 text-gray-900 rounded-l focus:outline-none w-full" />
              <button className="bg-blue-500 px-4 py-2 rounded-r text-white"><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2023 DigBodh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer