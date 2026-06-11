import { motion } from "framer-motion";
import heropic from "../assets/Images/heropic.jpg";

function About() {
  const stats = [
    { label: "Projects Built", value: "2+" },
    { label: "Experience", value: "1+" },
    { label: "Frontend Focus", value: "React" },
    { label: "Location", value: "Nigeria" },
  ];

  return (
    <section id="about" className="py-32 container-custom">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-violet-500 mb-3 font-medium">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate Frontend Developer
          </h2>

          <p className="text-slate-400 leading-relaxed mb-8">
            I’m Adeyanju Ayotomide, a Frontend Developer based in Nigeria. I
            specialize in building modern, responsive, and user-friendly web
            applications using React.js and Tailwind CSS. I focus on translating
            UI designs into clean, scalable and responsive interfaces with
            strong attention to detail, usability, and performance. I enjoy
            building component-based applications and turning ideas into
            functional web experiences. I’m passionate about continuous learning
            and improving how users interact with the web through thoughtful and
            well-structured frontend development.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="
                  p-4
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-center
                  backdrop-blur-md
                  hover:border-violet-500/40
                  transition
                "
              >
                <h3 className="text-2xl font-bold text-violet-400">
                  {item.value}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            className="
              relative
              w-[320px]
              h-[420px]
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-gradient-to-br
              from-violet-500/20
              to-blue-500/10
              backdrop-blur-md
              shadow-xl
              group
            "
          >
            {/* IMAGE */}
            <img
              src={heropic}
              alt="Ayotomide Adeyanju"
              className="
                w-full
                h-full
                object-cover
                object-top
                scale-105
                group-hover:scale-110
                transition duration-700
              "
            />

            {/* DARK OVERLAY FOR PREMIUM LOOK */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* NAME CARD */}
            <div className="absolute bottom-0 w-full p-6">
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <h3 className="text-xl font-bold">Adeyanju Ayotomide</h3>
                <p className="text-slate-300 text-sm">Frontend Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
