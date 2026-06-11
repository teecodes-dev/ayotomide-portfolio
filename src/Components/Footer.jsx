import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-md mt-20">
      <div className="container-custom py-12 grid md:grid-cols-3 gap-10 items-start">
       
        <div>
          <h2 className="text-2xl font-bold">
            Adeyanju Ayotomide<span className="text-violet-500">.</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm leading-relaxed">
            Frontend Developer focused on building modern, responsive and
            user-friendly web applications.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-violet-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Get In Touch</h3>

          <a
            href="mailto:ayotomideadeyanju@gmail.com"
            className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition text-sm mb-4"
          >
            <FaEnvelope />
            Send Email
          </a>

          <div className="flex gap-4 text-xl mt-4">
            <a
              href="https://github.com/teecodes-dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://ng.linkedin.com/in/adeyanju-ayotomide"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/2348061520324"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>

            {/* <a
              href="https://x.com/Haryor449022"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaXTwitter />
            </a> */}
          </div>
        </div>
      </div>

     
      <div className="border-t border-white/10 mt-10 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Adeyanju Ayotomide. Built with React &
        Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
