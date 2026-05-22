import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "React JS",
          description:
            "Building interactive UIs with component-based architecture",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first CSS framework for responsive design",
        },
        {
          name: "HTML",
          description: "Semantic markup and structured web content",
        },
        {
          name: "CSS",
          description:
            "Styling and layout design with modern CSS techniques",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node JS",
          description:
            "Server-side JavaScript runtime for scalable applications",
        },
        {
          name: "Express JS",
          description:
            "Minimal and flexible Node.js web application framework",
        },
        {
          name: "MongoDB",
          description: "NoSQL database for flexible data storage",
        },
      ],
    },
    {
      category: "Design",
      items: [
        {
          name: "Figma",
          description: "UI/UX design and prototyping tool",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
            Skills
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My Technical Expertise
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use
            to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/10"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 border-b border-cyan-400/30 pb-3 mb-5">
                {skillGroup.category}
              </h2>

              <div className="space-y-4">
                {skillGroup.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-700 rounded-xl p-4 transition duration-300 hover:bg-slate-600"
                  >
                    <h3 className="text-white font-semibold text-lg">
                      {skill.name}
                    </h3>

                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 sm:mt-16 bg-cyan-600/90 rounded-2xl p-6 sm:p-8 text-center shadow-lg">
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            Full-stack developer with expertise in modern web technologies
            and design tools. Passionate about creating scalable,
            responsive, and user-friendly applications that deliver
            exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;