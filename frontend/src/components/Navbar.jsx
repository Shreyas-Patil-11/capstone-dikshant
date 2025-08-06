// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/brain_image2_-_Copy-removebg-preview.png";

// function Navbar({ isAuth, setIsAuth }) {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const onScroll = () => {
//       const nav = document.getElementById("navbar");
//       if (window.scrollY > 50) {
//         nav.classList.add("bg-gray-900");
//         nav.classList.remove("bg-transparent");
//       } else {
//         nav.classList.add("bg-transparent");
//         nav.classList.remove("bg-gray-900");
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem("digbodh_user");
//     setIsAuth(false);
//     navigate("/login");
//   };

//   return (
//     <nav
//       id="navbar"
//       className="fixed w-full z-50 py-4 px-6 flex justify-between items-center bg-transparent transition-all duration-300"
//     >
//       <a href="#home" className="flex items-center gap-2">
//         <img src={logo} alt="DigBodh Logo" className="h-10 w-auto" />
//         <div className="flex flex-col leading-tight">
//           <span className="text-xl font-bold text-white">DigBodh</span>
//         </div>
//       </a>

//       <div className="hidden md:flex space-x-8">
//         {["Home", "About", "Vision", "Solutions", "Contact"].map((item) => (
//           <a
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             className="text-white hover:text-gray-200 font-medium"
//           >
//             {item}
//           </a>
//         ))}
//       </div>

//       <div className="flex items-center space-x-4">
//         {isAuth ? (
//           <>
//             <div className="hidden md:flex items-center space-x-2">
//               <img
//                 src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/524711b9-73ce-4ea7-b76f-0e0eb70f6263.png"
//                 alt="User Avatar"
//                 className="w-8 h-8 rounded-full"
//               />
//               <span className="text-white">John</span>
//               <button
//                 onClick={handleSignOut}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
//               >
//                 Sign Out
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="hidden md:flex space-x-4">
//             <Link
//               to="/login"
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/signup"
//               className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-100"
//             >
//               Sign Up
//             </Link>
//           </div>
//         )}

//         {/* Mobile menu button */}
//         <button
//           id="menu-btn"
//           className="md:hidden text-white text-2xl"
//           onClick={() => setMobileOpen((v) => !v)}
//         >
//           <i className="fas fa-bars"></i>
//         </button>
//       </div>

//       {/* Mobile menu dropdown */}
//       {mobileOpen && (
//         <div className="absolute top-16 right-6 bg-white rounded-md shadow-lg p-4 w-48 z-50">
//           {["Home", "About", "Vision", "Solutions", "Contact"].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="block text-gray-800 hover:bg-gray-100 py-2"
//               onClick={() => setMobileOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//           <hr className="my-2" />
//           {isAuth ? (
//             <button
//               onClick={() => {
//                 handleSignOut();
//                 setMobileOpen(false);
//               }}
//               className="w-full text-left text-red-600 py-2 hover:bg-red-100 rounded"
//             >
//               Sign Out
//             </button>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="block text-blue-600 py-2 hover:bg-blue-50"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Sign In
//               </Link>
//               <Link
//                 to="/signup"
//                 className="block text-blue-600 py-2 hover:bg-blue-50"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/brain_image2_-_Copy-removebg-preview.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Watch route changes
  const dropdownRef = useRef();

  // ✅ Load user on mount & route change
  useEffect(() => {
    const storedUser = localStorage.getItem("digbodh_user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [location]);

  // ✅ Listen for custom storage event (login/logout)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("digbodh_user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Navbar scroll background change
  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById("navbar");
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add("bg-gray-900");
          nav.classList.remove("bg-transparent");
        } else {
          nav.classList.add("bg-transparent");
          nav.classList.remove("bg-gray-900");
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("digbodh_user");
    setUser(null);
    window.dispatchEvent(new Event("storage")); // ✅ Notify all listeners
    navigate("/login");
  };

  return (
    <nav
      id="navbar"
      className="fixed w-full z-50 py-4 px-6 flex justify-between items-center bg-transparent transition-all duration-300"
    >
      {/* ✅ Clicking the logo goes to home */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 focus:outline-none"
      >
        <img src={logo} alt="DigBodh Logo" className="h-10 w-auto" />
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-white">DigBodh</span>
        </div>
      </button>

      <div className="hidden md:flex space-x-8">
        {["Home", "About", "Vision", "Solutions", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-gray-200 font-medium"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4 relative">
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/524711b9-73ce-4ea7-b76f-0e0eb70f6263.png"
              alt="User Avatar"
              className="w-9 h-9 rounded-full cursor-pointer border-2 border-white"
              onClick={() => setDropdownOpen((prev) => !prev)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 text-sm">
                <button
                  onClick={() => navigate("/profile")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          id="menu-btn"
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="absolute top-16 right-6 bg-white rounded-md shadow-lg p-4 w-48 z-50"
          >
            {["Home", "About", "Vision", "Solutions", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-800 hover:bg-gray-100 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            {!user && (
              <button
                className="block text-left w-full text-blue-600 hover:bg-gray-100 py-2"
                onClick={() => {
                  navigate("/login");
                  setMobileOpen(false);
                }}
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
