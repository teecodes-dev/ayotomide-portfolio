import { useEffect, useState } from "react";

function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(139,92,246,0.15), transparent 80%)`,
      }}
    />
  );
}

export default Spotlight;
