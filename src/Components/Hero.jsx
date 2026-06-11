import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="container-custom relative z-10 text-center">
        {/* NAME TAG */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-violet-500 mb-4 font-medium"
        >
          Hi, I’m Adeyanju Ayotomide
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Building modern web
          <span className="text-violet-500"> experiences</span>
        </motion.h1>

        {/* TYPING EFFECT */}
        <div className="text-2xl md:text-4xl font-bold text-violet-500 mb-8 min-h-[60px]">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Building scalable React applications",
              2000,
              "Creating responsive user interfaces",
              2000,
              "Turning designs into production-ready code",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-10"
        >
          I design and build responsive, high-performance web applications using
          React.js and Tailwind CSS with a focus on clean UI, usability, and
          real-world problem solving.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-violet-500 hover:bg-violet-600 px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-slate-700 hover:border-violet-500 px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/1zqZDQ89q1PMKj_Rb5H0WbkDbvDEOvasm/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
            className="border border-violet-500 hover:bg-violet-500 px-6 py-3 rounded-lg transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-violet-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-violet-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
