import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiVite } from "react-icons/si";

import { motion } from "framer-motion";

function TechStack() {
  const technologies = [
    {
      name: "React",
      icon: <FaReact />,
      description: "Building scalable component-based interfaces",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      description: "Creating dynamic web experiences",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      description: "Modern utility-first styling",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      description: "Semantic and accessible markup",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      description: "Responsive layouts and animations",
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub />,
      description: "Version control and collaboration",
    },
  ];

  return (
    <section id="skills" className="py-32 container-custom">
      <div className="mb-16">
        <p className="text-violet-500 mb-3">Technologies</p>

        <h2 className="text-5xl font-bold">My Tech Stack</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              rounded-3xl
              p-6
              hover:border-violet-500/40
              transition
            "
          >
            <div className="text-4xl mb-5 text-violet-400">{tech.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>

            <p className="text-slate-400">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;