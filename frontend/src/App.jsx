import Aos from "aos";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import FloatingParticles from "./components/FloatingParticles";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CyberForumProfile from "./subpages/ForumProfile";
import ForumList from "./components/ForumList.";
import NewThreadForm from "./components/NewThreadForm";

function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem('digbodh_user')
  );

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  useEffect(() => {
    const handler = () => setIsAuth(!!localStorage.getItem('digbodh_user'));
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  useEffect(() => {
    const handleAnchorLinks = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);
        const anchor = document.getElementById(id);
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.body.addEventListener("click", handleAnchorLinks);
    return () => document.body.removeEventListener("click", handleAnchorLinks);
  }, []);

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        {/* <Route path="/cyber-profile" element={</>} /> */}
        <Route path="/forum" element={<ForumList />} />
         <Route path="/forum/new" element={<NewThreadForm />} />
        <Route path="/" element={
          <>
          <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
            <FloatingParticles />
            <Hero />
            <About />
            <Vision />
            <Solutions />
            <Stats />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

