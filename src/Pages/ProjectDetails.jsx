import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <>
    <Navbar />
      <div className="min-h-screen py-24 container-custom text-white">
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[1000px] object-cover rounded-xl border border-slate-800 mb-8"
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-slate-400 text-lg mb-6">{project.description}</p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mb-12">
            <a
              href={project.live}
              target="_blank"
              className="bg-violet-500 px-6 py-3 rounded-lg hover:bg-violet-600 transition"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              className="border border-slate-700 px-6 py-3 rounded-lg hover:border-violet-500 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-3">Overview</h2>
          <p className="text-slate-400 leading-relaxed">
            {project.longDescription}
          </p>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-slate-900 border border-slate-800 rounded-lg"
              >
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center border-t border-slate-800 pt-12"
        >
          <h3 className="text-2xl font-bold mb-4">Like this project?</h3>

          <p className="text-slate-400 mb-6">
            Check the live version or explore the source code.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href={project.live}
              target="_blank"
              className="bg-violet-500 px-6 py-3 rounded-lg hover:bg-violet-600 transition"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              className="border border-slate-700 px-6 py-3 rounded-lg hover:border-violet-500 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectDetails;
