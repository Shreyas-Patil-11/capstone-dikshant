// import React from 'react';

// function CyberForumProfile() {
//   return (
//     <div className="bg-[#121212] text-white font-sans min-h-screen py-10">
//       <div className="w-4/5 mx-auto">
//         {/* Profile Header */}
//         <div className="flex items-center p-5">
//           <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl mr-5">
//             A
//           </div>
//           <div className="flex-grow">
//             <h1 className="text-2xl font-bold">Arpita Shekhar</h1>
//             <p className="text-gray-400">Add profile credential</p>
//             <p className="text-sm text-gray-400">0 followers • 0 following</p>
//             <textarea
//               className="w-full h-20 mt-3 bg-[#222] text-white p-3 rounded border-none"
//               placeholder="Write a description about yourself"
//             />
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <nav className="my-6 flex flex-wrap gap-4">
//           {['Profile', '0 Answers', '0 Questions', '0 Posts', '0 Followers', 'Following', 'Edits', 'Activity'].map((tab) => (
//             <a key={tab} href="#" className="text-white border border-gray-600 px-4 py-2 rounded hover:bg-gray-800">
//               {tab}
//             </a>
//           ))}
//         </nav>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row justify-between gap-6 py-6">
//           {/* Credentials */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-xl font-semibold mb-4">Credentials & Highlights</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-blue-400 hover:underline">Add employment credential</a></li>
//               <li><a href="#" className="text-blue-400 hover:underline">Add education credential</a></li>
//               <li><a href="#" className="text-blue-400 hover:underline">Add location credential</a></li>
//             </ul>
//             <p className="text-sm text-gray-500 mt-4">Joined July 2025</p>
//           </div>

//           {/* Knows About */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-xl font-semibold mb-4">Knows about</h2>
//             <p className="text-gray-400 mb-4">You haven't added any topics yet.</p>
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//               onClick={() => alert('Feature to add topics will be implemented soon!')}
//             >
//               Add topics
//             </button>
//           </div>
//         </div>

//         {/* Search & CTA */}
//         <div className="text-center mt-10">
//           <input
//             type="text"
//             placeholder="Search content"
//             className="px-4 py-2 w-4/5 max-w-md bg-gray-800 text-white rounded"
//           />
//         </div>

//         <div className="text-center mt-6">
//           <p className="mb-3 text-gray-400">You haven't shared, answered, or posted anything yet.</p>
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//             onClick={() => alert('Feature to answer questions will be implemented soon!')}
//           >
//             Answer questions
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CyberForumProfile;



// import React from 'react';

// function CyberForumProfile() {
//   return (
//     <div className="bg-[#121212] text-white font-sans min-h-screen py-10">
//       <div className="w-11/12 md:w-4/5 mx-auto">

//         {/* Profile Header */}
//         <div className="flex items-start md:items-center flex-col md:flex-row p-5">
//           <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold mr-0 md:mr-5 mb-4 md:mb-0">
//             A
//           </div>
//           <div className="flex-grow">
//             <h1 className="text-2xl font-bold">Arpita Shekhar</h1>
//             <p className="text-gray-400">Cybersecurity Enthusiast | AI Security Researcher</p>
//             <p className="text-sm text-gray-400">120 followers • 87 following</p>
//             <textarea
//               className="w-full h-20 mt-3 bg-[#222] text-white p-3 rounded border border-gray-600"
//               placeholder="Write a description about yourself"
//               defaultValue="Passionate about digital safety, fraud prevention, and awareness."
//             />
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <nav className="my-6 flex flex-wrap gap-4">
//           {["Profile", "15 Answers", "6 Questions", "9 Posts", "120 Followers", "87 Following", "4 Edits", "Activity"].map((tab) => (
//             <a key={tab} href="#" className="text-white border border-gray-600 px-4 py-2 rounded hover:bg-gray-800">
//               {tab}
//             </a>
//           ))}
//         </nav>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row justify-between gap-6 py-6">

//           {/* Credentials */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-xl font-semibold mb-4">Credentials & Highlights</h2>
//             <ul className="space-y-2">
//               <li className="text-gray-300">🧑‍💻 Security Analyst at DigiSec Pvt. Ltd.</li>
//               <li className="text-gray-300">🎓 M.Tech in Cybersecurity, IIIT Delhi</li>
//               <li className="text-gray-300">📍 Pune, Maharashtra, India</li>
//             </ul>
//             <p className="text-sm text-gray-500 mt-4">Joined July 2025</p>
//           </div>

//           {/* Knows About */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-xl font-semibold mb-4">Knows about</h2>
//             <div className="flex flex-wrap gap-2">
//               {["Phishing", "Social Engineering", "AI in Cybersecurity", "Digital Hygiene", "Smishing", "Cyber Law"].map(topic => (
//                 <span key={topic} className="bg-blue-600 px-3 py-1 rounded-full text-sm">{topic}</span>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* Search Bar */}
//         <div className="text-center mt-10">
//           <input
//             type="text"
//             placeholder="Search content"
//             className="px-4 py-2 w-4/5 max-w-md bg-gray-800 text-white rounded"
//           />
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-6">
//           <p className="mb-3 text-gray-400">You haven't posted anything recently. Start by sharing your thoughts or answering questions.</p>
//           <div className="flex flex-col md:flex-row justify-center gap-4">
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//               onClick={() => alert('Redirecting to question answering...')}
//             >
//               Answer Questions
//             </button>
//             <button
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
//               onClick={() => alert('Redirecting to create post...')}
//             >
//               Create Post
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default CyberForumProfile;




import React from 'react';

function CyberForum() {
  return (
    <div className="bg-[#121212] text-white font-sans min-h-screen flex">

      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#1F1F1F] h-screen p-6 hidden md:block fixed left-0 top-0">
        <h2 className="text-2xl font-bold mb-8">Cyber Forum</h2>
        <nav className="flex flex-col space-y-4">
          <a href="/dashboard" className="hover:text-blue-400">Dashboard</a>
          <a href="/cyber-profile" className="hover:text-blue-400">Profile</a>
          <a href="/questions" className="hover:text-blue-400">Questions</a>
          <a href="/answers" className="hover:text-blue-400">Answers</a>
          <a href="/posts" className="hover:text-blue-400">Posts</a>
          <a href="/settings" className="hover:text-blue-400">Settings</a>
        </nav>
      </aside>

      {/* Main Dashboard Content */}
      <div className="flex-grow md:ml-64 py-10 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats */}
            <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">0 Questions</h2>
              <p className="text-gray-400 text-sm">You haven't asked anything yet.</p>
            </div>
            <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">0 Answers</h2>
              <p className="text-gray-400 text-sm">No answers submitted yet.</p>
            </div>
            <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">0 Posts</h2>
              <p className="text-gray-400 text-sm">No community posts created yet.</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">Ask a Question</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">Answer a Question</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">Make a Post</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">Update Your Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberForum;
