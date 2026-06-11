import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#Tech Stack" },
    { name: "Experience", href: "#experience" },
    { name: "Featured Projects", href: "#Featured Projects" },
    { name: "Contact", href: "#contact" },
  ];

  // 🔥 smooth scroll helper (important for logo + route safety)
  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container-custom flex justify-between items-center py-4">
        {/* LOGO → smooth scroll to top */}
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold"
        >
          AA<span className="text-violet-500">.</span>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleScroll(link.href)}
                  className="text-slate-300 hover:text-violet-500 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CV BUTTON */}
        <a
          href="https://drive.google.com/file/d/1zqZDQ89q1PMKj_Rb5H0WbkDbvDEOvasm/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center border border-violet-500 px-5 py-2 rounded-lg hover:bg-violet-500 transition"
        >
          Download CV
        </a>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <ul className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => {
                    handleScroll(link.href);
                    setIsOpen(false);
                  }}
                  className="text-slate-300 text-left"
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
