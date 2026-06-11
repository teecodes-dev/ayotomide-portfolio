import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-violet-500/20"
    >
      
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-100 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        <p className="text-slate-400 text-sm mb-4">{project.description}</p>

        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate(`/project/${project.id}`)}
            className="text-sm text-violet-400 hover:text-violet-300 transition"
          >
            View Details →
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-violet-500/10 to-blue-500/10 pointer-events-none" />
    </motion.div>
  );
}

export default ProjectCard;
