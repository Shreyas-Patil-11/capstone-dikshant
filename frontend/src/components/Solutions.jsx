// import React from 'react'

// function Solutions() {
//   return (
//     <section id="solutions" className="py-20 px-6 bg-gray-50">
//       <div>
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Cybersecurity Solutions</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* VR Solution */}
//           <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
//             <div className="h-48 overflow-hidden">
//               <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/628330ae-c889-4b9b-a588-bc102ac2b5ec.png" alt="" className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <div className="text-blue-500 mb-2"><i className="fas fa-vr-cardboard text-2xl"></i></div>
//               <h3 className="text-xl font-bold mb-3">Immersive VR Training</h3>
//               <p className="text-gray-600 mb-4">
//                 Experience realistic cyber threat scenarios in virtual reality to build instinctive security reflexes.
//               </p>
//               <ul className="space-y-2 mb-5">
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Real-world scenario simulations</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Phishing attack drills</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Multiplayer breach response</span>
//                 </li>
//               </ul>
//               <a href="vr 3.html" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Learn More</a>
//             </div>
//           </div>
//           {/* AI ChatBot */}
//           <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
//             <div className="h-48 overflow-hidden">
//               <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c51b240c-d8ab-441f-8ee7-8f9e40b36250.png" alt="" className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <div className="text-blue-500 mb-2"><i className="fas fa-robot text-2xl"></i></div>
//               <h3 className="text-xl font-bold mb-3">AI Security Assistant</h3>
//               <p className="text-gray-600 mb-4">
//                 24/7 personalized cybersecurity guidance powered by adaptive artificial intelligence.
//               </p>
//               <ul className="space-y-2 mb-5">
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Instant threat analysis</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Personalized security coaching</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Real-time alert system</span>
//                 </li>
//               </ul>
//               <a href="chatBotUI,html.html" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Learn More</a>
//             </div>
//           </div>
//           {/* Cyber Forum */}
//           <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
//             <div className="h-48 overflow-hidden">
//               <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b3a25a90-9dc1-4766-be8b-2f7ae6d5fd39.png" alt="" className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <div className="text-blue-500 mb-2"><i className="fas fa-comments text-2xl"></i></div>
//               <h3 className="text-xl font-bold mb-3">Security Knowledge Hub</h3>
//               <p className="text-gray-600 mb-4">
//                 Collaborate with security experts and peers in our dedicated cybersecurity community.
//               </p>
//               <ul className="space-y-2 mb-5">
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Expert Q&A sessions</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Latest threat intelligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Best practice sharing</span>
//                 </li>
//               </ul>
//               <a href="Communityforum.html" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Learn More</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Solutions


// import React, { useState } from 'react';
// import Chatbot from './Chatbot'; // Adjust the path as needed
// import CyberForumProfile from './CyberForumProfile';


// function Solutions() {
//   const [showChatbot, setShowChatbot] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   return (
//     <section id="solutions" className="py-20 px-6 bg-gray-50">
//       <div>
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Cybersecurity Solutions</h2>
//         <div className="grid md:grid-cols-3 gap-8">

//           {/* VR Solution */}
//           <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
//             <div className="h-48 overflow-hidden">
//               <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/628330ae-c889-4b9b-a588-bc102ac2b5ec.png" alt="" className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <div className="text-blue-500 mb-2"><i className="fas fa-vr-cardboard text-2xl"></i></div>
//               <h3 className="text-xl font-bold mb-3">Immersive VR Training</h3>
//               <p className="text-gray-600 mb-4">
//                 Experience realistic cyber threat scenarios in virtual reality to build instinctive security reflexes.
//               </p>
//               <ul className="space-y-2 mb-5">
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Real-world scenario simulations</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Phishing attack drills</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Multiplayer breach response</span>
//                 </li>
//               </ul>
//               <a href="vr 3.html" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Learn More</a>
//             </div>
//           </div>

//           {/* AI ChatBot */}
//           <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
//             <div className="h-48 overflow-hidden">
//               <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c51b240c-d8ab-441f-8ee7-8f9e40b36250.png" alt="" className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <div className="text-blue-500 mb-2"><i className="fas fa-robot text-2xl"></i></div>
//               <h3 className="text-xl font-bold mb-3">AI Security Assistant</h3>
//               <p className="text-gray-600 mb-4">
//                 24/7 personalized cybersecurity guidance powered by adaptive artificial intelligence.
//               </p>
//               <ul className="space-y-2 mb-5">
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Instant threat analysis</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Personalized security coaching</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Real-time alert system</span>
//                 </li>
//               </ul>

//               <button
//                 onClick={() => setShowChatbot(!showChatbot)}
//                 className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
//               >
//                 {showChatbot ? 'Hide Chatbot' : 'Launch Chatbot'}
//               </button>

//               {showChatbot && (
//                 <div className="mt-6">
//                   <Chatbot />
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
//             <div className="h-48 overflow-hidden">
//               <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b3a25a90-9dc1-4766-be8b-2f7ae6d5fd39.png" alt="" className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <div className="text-blue-500 mb-2"><i className="fas fa-comments text-2xl"></i></div>
//               <h3 className="text-xl font-bold mb-3">Security Knowledge Hub</h3>
//               <p className="text-gray-600 mb-4">
//                 Collaborate with security experts and peers in our dedicated cybersecurity community.
//               </p>
//               <ul className="space-y-2 mb-5">
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Expert Q&A sessions</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Latest threat intelligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
//                   <span className="text-sm">Best practice sharing</span>
//                 </li>
//               </ul>

//               <button
//                 onClick={() => setShowProfile(!showProfile)}
//                 className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
//               >
//                 {showProfile ? 'Hide Profile' : 'View Profile'}
//               </button>

//               {showProfile && (
//                 <div className="mt-6">
//                   <CyberForumProfile />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div> 
        
//       </div>
//     </section>
//   );
// }

// export default Solutions;



// No need to import Chatbot or CyberForumProfile anymore
import React from 'react';

function Solutions() {
  return (
    <section id="solutions" className="py-20 px-6 bg-gray-50">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Cybersecurity Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* VR Solution */}
          <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="h-48 overflow-hidden">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/628330ae-c889-4b9b-a588-bc102ac2b5ec.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="text-blue-500 mb-2"><i className="fas fa-vr-cardboard text-2xl"></i></div>
              <h3 className="text-xl font-bold mb-3">Immersive VR Training</h3>
              <p className="text-gray-600 mb-4">
                Experience realistic cyber threat scenarios in virtual reality to build instinctive security reflexes.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Real-world scenario simulations</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Phishing attack drills</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Multiplayer breach response</span></li>
              </ul>
              <a href="vr 3.html" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Learn More</a>
            </div>
          </div>

          {/* AI ChatBot */}
          <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c51b240c-d8ab-441f-8ee7-8f9e40b36250.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="text-blue-500 mb-2"><i className="fas fa-robot text-2xl"></i></div>
              <h3 className="text-xl font-bold mb-3">AI Security Assistant</h3>
              <p className="text-gray-600 mb-4">
                24/7 personalized cybersecurity guidance powered by adaptive artificial intelligence.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Instant threat analysis</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Personalized security coaching</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Real-time alert system</span></li>
              </ul>
              <a
                href="/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Launch Chatbot
              </a>
            </div>
          </div>

          {/* Cyber Forum Profile */}
          <div className="solution-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b3a25a90-9dc1-4766-be8b-2f7ae6d5fd39.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="text-blue-500 mb-2"><i className="fas fa-comments text-2xl"></i></div>
              <h3 className="text-xl font-bold mb-3">Security Knowledge Hub</h3>
              <p className="text-gray-600 mb-4">
                Collaborate with security experts and peers in our dedicated cybersecurity community.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Expert Q&A sessions</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Latest threat intelligence</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span className="text-sm">Best practice sharing</span></li>
              </ul>
              <a
  href="/forum"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
>
  Visit Cyber Forum
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
