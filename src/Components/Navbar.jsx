import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const scrollToSection = () => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 150);
    } else {
      scrollToSection();
    }
  };

  const handleHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container-custom flex justify-between items-center py-4">
        <button onClick={handleHome} className="text-2xl font-bold">
          AA<span className="text-violet-500">.</span>
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="text-slate-300 hover:text-violet-500 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://drive.google.com/file/d/1Qpn-S-uBd8n3GAASn8zrzBjzxjmHQiPL/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center border border-violet-500 px-5 py-2 rounded-lg hover:bg-violet-500 transition"
        >
          Download CV
        </a>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <ul className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => {
                    handleScroll(link.id);
                    setIsOpen(false);
                  }}
                  className="text-slate-300 text-left hover:text-violet-500 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}

            <a
              href="https://drive.google.com/file/d/1zqZDQ89q1PMKj_Rb5H0WbkDbvDEOvasm/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-700 hover:border-violet-500 px-6 py-3 rounded-lg transition"
            >
              Download CV
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
