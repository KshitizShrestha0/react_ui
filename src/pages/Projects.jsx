import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio site built with React and Tailwind CSS to showcase projects, skills, and contact information.",
    tech: ["React", "Tailwind CSS", "Vite"],
    href: "https://github.com/KshitizShrestha0/Final-project-",
  },
  {
    title: "Task Tracker",
    description:
      "A task management app with local storage support, filters, and drag-and-drop interactions.",
    tech: ["React", "Context API", "TypeScript"],
    href: "#",
  },
  {
    title: "E-commerce UI",
    description:
      "A modern storefront interface with product cards, search, and cart preview components.",
    tech: ["React", "Tailwind CSS", "Headless UI"],
    href: "#",
  },
  {
    title: "Blog Dashboard",
    description:
      "A clean admin dashboard for managing posts, comments, and analytics.",
    tech: ["React", "React Router", "Chart.js"],
    href: "#",
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="text-center mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
            Builds, Experiments & Case Studies
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            A collection of frontend work created with React and Tailwind CSS.
            Explore the designs, technologies used, and ideas behind each
            project.
          </p>
        </header>

        {/* Project Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Top Section */}
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                  Featured
                </span>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-cyan-300 hover:text-cyan-100"
                >
                  View →
                </a>
              </div>

              {/* Project Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                {project.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-wider text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
};

export default Projects;