
function CyberForumProfile() {
  return (
    <div className="bg-[#121212] text-white font-sans min-h-screen py-10">
      <div className="w-11/12 md:w-4/5 mx-auto">

        {/* Profile Header */}
        <div className="flex items-start md:items-center flex-col md:flex-row p-5">
          <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold mr-0 md:mr-5 mb-4 md:mb-0">
            A
          </div>
          <div className="flex-grow">
            <h1 className="text-2xl font-bold">Arpita Shekhar</h1>
            <p className="text-gray-400">Cybersecurity Enthusiast | AI Security Researcher</p>
            <p className="text-sm text-gray-400">120 followers • 87 following</p>
            <textarea
              className="w-full h-20 mt-3 bg-[#222] text-white p-3 rounded border border-gray-600"
              placeholder="Write a description about yourself"
              defaultValue="Passionate about digital safety, fraud prevention, and awareness."
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="my-6 flex flex-wrap gap-4">
          {["Profile", "15 Answers", "6 Questions", "9 Posts", "120 Followers", "87 Following", "4 Edits", "Activity"].map((tab) => (
            <a key={tab} href="#" className="text-white border border-gray-600 px-4 py-2 rounded hover:bg-gray-800">
              {tab}
            </a>
          ))}
        </nav>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6 py-6">

          {/* Credentials */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Credentials & Highlights</h2>
            <ul className="space-y-2">
              <li className="text-gray-300">🧑‍💻 Security Analyst at DigiSec Pvt. Ltd.</li>
              <li className="text-gray-300">🎓 M.Tech in Cybersecurity, IIIT Delhi</li>
              <li className="text-gray-300">📍 Pune, Maharashtra, India</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Joined July 2025</p>
          </div>

          {/* Knows About */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Knows about</h2>
            <div className="flex flex-wrap gap-2">
              {["Phishing", "Social Engineering", "AI in Cybersecurity", "Digital Hygiene", "Smishing", "Cyber Law"].map(topic => (
                <span key={topic} className="bg-blue-600 px-3 py-1 rounded-full text-sm">{topic}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Search Bar */}
        <div className="text-center mt-10">
          <input
            type="text"
            placeholder="Search content"
            className="px-4 py-2 w-4/5 max-w-md bg-gray-800 text-white rounded"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-6">
          <p className="mb-3 text-gray-400">You haven't posted anything recently. Start by sharing your thoughts or answering questions.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              onClick={() => alert('Redirecting to question answering...')}
            >
              Answer Questions
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
              onClick={() => alert('Redirecting to create post...')}
            >
              Create Post
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CyberForumProfile;