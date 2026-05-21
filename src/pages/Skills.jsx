import React, { useState } from 'react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React JS', description: 'Building interactive UIs with component-based architecture' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework for responsive design' },
        { name: 'HTML', description: 'Semantic markup and structured web content' },
        { name: 'CSS', description: 'Styling and layout design with modern CSS techniques' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node JS', description: 'Server-side JavaScript runtime for building scalable applications' },
        { name: 'Express JS', description: 'Minimal and flexible Node.js web application framework' },
        { name: 'MongoDB', description: 'NoSQL database for flexible data storage' }
      ]
    },
    {
      category: 'Design',
      items: [
        { name: 'Figma', description: 'UI/UX design and prototyping tool' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">My Skills</h1>
          <p className="text-xl text-gray-400">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-slate-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-blue-400 mb-6 border-b-2 border-blue-400 pb-3">
                {skillGroup.category}
              </h2>
              <div className="space-y-4">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="bg-slate-600 rounded-lg p-4 hover:bg-slate-500 transition-colors">
                    <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <p className="text-white text-lg">
            Full-stack developer with expertise in modern web technologies and design tools.
            Passionate about creating scalable, responsive, and user-friendly applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
