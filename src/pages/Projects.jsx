import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio site built with React and Tailwind CSS to showcase projects, skills, and contact information.",
    tech: ["React", "Tailwind CSS", "Vite"],
    href: "https://github.com/KshitizShrestha0/Final-project-.git" , 
  },
  {
    title: "Task Tracker",
    description: "A task management app with local storage support, filters, and drag-and-drop interactions to stay organized.",
    tech: ["React", "Context API", "TypeScript"],
    href: "#",
  },
  {
    title: "E-commerce UI",
    description: "A modern storefront interface with product cards, search, and cart preview components designed in Tailwind.",
    tech: ["React", "Tailwind CSS", "Headless UI"],
    href: "#",
  },
  {
    title: "Blog Dashboard",
    description: "A clean admin dashboard for managing posts, comments, and analytics with a focus on mobile-first design.",
    tech: ["React", "React Router", "Chart.js"],
    href: "#",
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Builds, experiments, and case studies</h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300">
            A collection of frontend work created with React and Tailwind CSS. Explore the designs,
            the tech used, and the ideas behind each project.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
                  Featured
                </span>
                <a
                  href={project.href}
                  className="text-sm font-medium text-cyan-300 transition hover:text-cyan-100"
                >
                  View
                </a>
              </div>
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300"
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
