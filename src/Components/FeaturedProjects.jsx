import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 container-custom">
      <div className="mb-12">
        <p className="text-violet-500 font-medium mb-2">Selected Work</p>

        <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>

        <p className="text-slate-400 mt-4 max-w-2xl">
          A showcase of web applications I've built using React, JavaScript and
          Tailwind CSS, focusing on responsive design, user experience and
          modern frontend development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
