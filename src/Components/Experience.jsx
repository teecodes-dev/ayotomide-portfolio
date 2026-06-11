import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Frontend Developer (Training & Personal Projects)",
      company: "Appclick ICT Academy",
      period: "Jan 2026 – May 2026",
      points: [
        "Completed structured frontend development training focused on HTML, CSS, JavaScript, and React",
        "Built real-world responsive web applications using React.js and Tailwind CSS",
        "Worked with component-based architecture and reusable UI patterns",
        "Improved problem-solving skills through hands-on project development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 container-custom">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16"
      >
        Experience
      </motion.h2>

      {/* TIMELINE */}
      <div className="relative border-l border-slate-800 pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* DOT */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-violet-500 rounded-full border-4 border-black" />

            {/* CARD */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/40 transition">
              <h3 className="text-xl font-bold text-violet-400">{exp.role}</h3>

              <p className="text-slate-400 text-sm mb-1">{exp.company}</p>

              <p className="text-slate-500 text-xs mb-4">{exp.period}</p>

              <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-violet-500">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
