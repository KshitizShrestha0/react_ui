import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-10 sm:py-16 px-4 sm:px-6">
      <section className="mx-auto max-w-5xl rounded-2xl sm:rounded-3xl bg-slate-950/80 p-5 sm:p-8 md:p-10 shadow-2xl shadow-black/30 backdrop-blur-lg">

        {/* Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-300">
            About Us
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Build Better Experiences with React and Tailwind CSS
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Welcome to our About page. We create modern, responsive web
            applications using React and Tailwind CSS, focused on clean
            design, smooth performance, and easy maintainability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/70 p-5 sm:p-8 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/90">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold">
              Our Mission
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-7">
              We help teams deliver polished web experiences faster by
              combining the power of React components with Tailwind CSS
              utility classes. The result is a scalable UI that is easy
              to update and enjoyable to use.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/70 p-5 sm:p-8 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/90">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold">
              What We Value
            </h2>

            <ul className="space-y-3 text-sm sm:text-base text-slate-300 leading-7">
              <li>• Clean and responsive design.</li>
              <li>• Fast development with reusable React components.</li>
              <li>• Consistent styling with Tailwind CSS.</li>
              <li>• Performance and accessibility first.</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-cyan-950/80 p-5 sm:p-8 text-slate-100 shadow-xl shadow-cyan-500/10">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-cyan-200">
            Get In Touch
          </h2>

          <p className="text-sm sm:text-base leading-7 text-slate-200">
            Ready to build something great? Whether you're starting a new
            project or improving an existing app, our About page is the
            first step toward a modern web presence.
          </p>
        </div>

      </section>
    </main>
  );
};

export default About;