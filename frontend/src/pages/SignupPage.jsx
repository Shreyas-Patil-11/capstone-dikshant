// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SignupPage() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await fetch("http://localhost:5000/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert("Signed up successfully!");
//       navigate("/login");
//     } else {
//       alert(data.message || "Signup failed");
//     }
//   } catch (err) {
//     alert("Server error");
//   }
// };


//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-50">
//       <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center">Create an Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4 mt-6">
//           <div>
//             <label className="text-sm font-medium">Full Name</label>
//             <input
//               type="text"
//               required
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="w-full mt-1 px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label className="text-sm font-medium">Email Address</label>
//             <input
//               type="email"
//               required
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="w-full mt-1 px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label className="text-sm font-medium">Password</label>
//             <input
//               type="password"
//               required
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               className="w-full mt-1 px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-600 hover:underline">
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signed up successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <form onSubmit={handleSignup} className="space-y-4 mt-6">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
