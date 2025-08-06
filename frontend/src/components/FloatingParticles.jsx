import { useEffect, useRef } from "react";

function FloatingParticles() {
  const ref = useRef(null);

  useEffect(() => {
    // Remove any old particles
    ref.current.innerHTML = "";
    const particles = 50;
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 15 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * window.innerWidth}px`;
      particle.style.top = `${window.innerHeight + 100}px`;
      particle.style.position = "absolute";
      particle.style.borderRadius = "50%";
      particle.style.background = "rgba(255,255,255,0.5)";
      particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
      particle.style.pointerEvents = "none";
      particle.style.zIndex = 1;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      ref.current.appendChild(particle);
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
        }
      `}</style>
      <div ref={ref} />
    </>
  );
}

export default FloatingParticles